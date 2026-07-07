// api/admin.mjs — Admin panel: users, roles, permissions, audit log
import { query } from '../lib/db.js';
import { requireRole } from '../lib/auth-middleware.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { action } = req.body;

    // List all users (admin only)
    if (action === 'listUsers' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');
      const { page = 1, limit = 20 } = req.body;
      const offset = (page - 1) * limit;

      const result = await query(
        `SELECT id, email, name, role, "emailVerified", "createdAt" FROM "user"
         ORDER BY "createdAt" DESC
         LIMIT $1 OFFSET $2`,
        [limit, offset]
      );

      const countResult = await query('SELECT COUNT(*) as count FROM "user"');

      return res.status(200).json({
        users: result.rows,
        total: parseInt(countResult.rows[0].count)
      });
    }

    // Update user role (admin only)
    if (action === 'updateUserRole' && req.method === 'POST') {
      const admin = await requireRole(req, 'admin');
      const { userId, role } = req.body;

      if (!['user', 'moderator', 'admin'].includes(role)) {
        return res.status(400).json({ error: 'Invalid role' });
      }

      if (userId === admin.id && role !== 'admin') {
        return res.status(400).json({ error: 'Cannot remove your own admin role' });
      }

      await query('UPDATE "user" SET role = $1 WHERE id = $2', [role, userId]);

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes, created_at)
         VALUES ($1, 'UPDATE_USER_ROLE', 'user', $2, $3, NOW())`,
        [admin.id, userId, JSON.stringify({ role })]
      );

      return res.status(200).json({ ok: true });
    }

    // Get audit log (admin only)
    if (action === 'getAuditLog' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');
      const { page = 1, limit = 50, action_filter = null } = req.body;
      const offset = (page - 1) * limit;

      let sql = `
        SELECT id, user_id, action, resource_type, resource_id, changes, created_at
        FROM audit_log
      `;
      const params = [];

      if (action_filter) {
        sql += ` WHERE action = $1`;
        params.push(action_filter);
      }

      sql += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
      params.push(limit, offset);

      const result = await query(sql, params);

      return res.status(200).json({ logs: result.rows });
    }

    // Get submission rate limit stats (admin only)
    if (action === 'getRateLimitStats' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');

      const result = await query(
        `SELECT user_id, open_pr_count, last_24h_count, last_reset
         FROM submission_rate_limits
         WHERE open_pr_count > 0 OR last_24h_count > 0
         ORDER BY last_24h_count DESC
         LIMIT 50`
      );

      return res.status(200).json({ stats: result.rows });
    }

    // Update rate limit for user (admin only)
    if (action === 'updateRateLimit' && req.method === 'POST') {
      const admin = await requireRole(req, 'admin');
      const { userId, reset = false } = req.body;

      if (reset) {
        await query(
          `UPDATE submission_rate_limits SET open_pr_count = 0, last_24h_count = 0, last_reset = NOW()
           WHERE user_id = $1`,
          [userId]
        );

        // Audit log
        await query(
          `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
           VALUES ($1, 'RESET_RATE_LIMIT', 'rate_limit', $2, NOW())`,
          [admin.id, userId]
        );
      }

      return res.status(200).json({ ok: true });
    }

    // Get forum moderation queue (admin/moderator)
    if (action === 'getForumModerationQueue' && req.method === 'POST') {
      const user = await requireRole(req, 'moderator');
      const { page = 1, limit = 20 } = req.body;
      const offset = (page - 1) * limit;

      const result = await query(
        `SELECT fp.id, fp.topic_id, fp.user_id, fp.session_id, fp.guest_name, fp.content, 
                fp.created_at, ft.title as topic_title, fp.flagged_for_review, fp.is_approved
         FROM forum_posts fp
         JOIN forum_topics ft ON fp.topic_id = ft.id
         WHERE fp.flagged_for_review = true OR fp.is_approved = false
         ORDER BY fp.created_at ASC
         LIMIT $1 OFFSET $2`,
        [limit, offset]
      );

      return res.status(200).json({ posts: result.rows });
    }

    // Approve forum post (moderator)
    if (action === 'approveForumPost' && req.method === 'POST') {
      const user = await requireRole(req, 'moderator');
      const { postId } = req.body;

      await query(
        'UPDATE forum_posts SET is_approved = true, flagged_for_review = false WHERE id = $1',
        [postId]
      );

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, 'APPROVE_POST', 'forum_post', $2, NOW())`,
        [user.id, postId]
      );

      return res.status(200).json({ ok: true });
    }

    // Reject/delete forum post (moderator)
    if (action === 'rejectForumPost' && req.method === 'POST') {
      const user = await requireRole(req, 'moderator');
      const { postId, reason } = req.body;

      // Soft delete: mark as not approved
      await query(
        'UPDATE forum_posts SET is_approved = false WHERE id = $1',
        [postId]
      );

      // Audit log with reason
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes, created_at)
         VALUES ($1, 'REJECT_POST', 'forum_post', $2, $3, NOW())`,
        [user.id, postId, JSON.stringify({ reason })]
      );

      return res.status(200).json({ ok: true });
    }

    // Get dashboard stats (admin)
    if (action === 'getDashboardStats' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');

      const userCount = await query('SELECT COUNT(*) as count FROM "user"');
      const topicCount = await query('SELECT COUNT(*) as count FROM forum_topics');
      const postCount = await query('SELECT COUNT(*) as count FROM forum_posts WHERE is_approved = true');
      const pendingPosts = await query('SELECT COUNT(*) as count FROM forum_posts WHERE is_approved = false');

      return res.status(200).json({
        stats: {
          totalUsers: parseInt(userCount.rows[0].count),
          totalTopics: parseInt(topicCount.rows[0].count),
          approvedPosts: parseInt(postCount.rows[0].count),
          pendingPosts: parseInt(pendingPosts.rows[0].count)
        }
      });
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('Admin API error:', error);

    if (error.message === 'Unauthorized') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (error.message === 'Insufficient permissions') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    return res.status(500).json({ error: error.message });
  }
}
