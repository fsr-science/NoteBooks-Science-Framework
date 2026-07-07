// Authentication middleware for API routes
import jwt from 'jsonwebtoken';
import { query } from './db.js';
import crypto from 'crypto';

const AUTH_SECRET = process.env.BETTER_AUTH_SECRET || process.env.AUTH_SECRET || 'dev-secret-change-me';

/**
 * Extract session ID from cookie or generate guest session
 */
export function getOrCreateSessionId(req) {
  const cookieHeader = req.headers.cookie || '';
  const cookies = cookieHeader.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});

  let sessionId = cookies.sessionId;

  if (!sessionId) {
    sessionId = crypto.randomUUID();
  }

  return sessionId;
}

/**
 * Get guest display name from session ID
 */
export function getGuestName(sessionId) {
  return `Guest-${sessionId.substring(0, 6).toUpperCase()}`;
}

/**
 * Verify JWT token and get user ID
 */
export async function getUserIdFromToken(token) {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, AUTH_SECRET);
    return decoded.userId || decoded.sub;
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return null;
  }
}

/**
 * Get authenticated user from request (cookie or JWT header)
 */
export async function getAuthenticatedUser(req) {
  // Check Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    const userId = await getUserIdFromToken(token);
    if (userId) {
      try {
        const result = await query('SELECT id, email, name, role FROM "user" WHERE id = $1', [userId]);
        return result.rows[0] || null;
      } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
      }
    }
  }

  // Check session cookie
  const cookieHeader = req.headers.cookie || '';
  const cookies = cookieHeader.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});

  const sessionToken = cookies.auth_session;
  if (sessionToken) {
    try {
      const result = await query(
        'SELECT u.id, u.email, u.name, u.role FROM "session" s JOIN "user" u ON s."userId" = u.id WHERE s.token = $1 AND s."expiresAt" > NOW()',
        [sessionToken]
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error('Failed to fetch session user:', error);
      return null;
    }
  }

  return null;
}

/**
 * Require authentication - throws if not authenticated
 */
export async function requireAuth(req) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}

/**
 * Check if user has a specific role
 */
export async function requireRole(req, requiredRole) {
  const user = await requireAuth(req);
  const roleHierarchy = { admin: 100, moderator: 50, user: 10 };
  
  if ((roleHierarchy[user.role] || 0) < (roleHierarchy[requiredRole] || 0)) {
    throw new Error('Insufficient permissions');
  }
  
  return user;
}

/**
 * Set session cookie in response
 */
export function setSessionCookie(res, sessionId) {
  const maxAge = 365 * 24 * 60 * 60; // 1 year
  res.setHeader(
    'Set-Cookie',
    `sessionId=${encodeURIComponent(sessionId)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`
  );
}
