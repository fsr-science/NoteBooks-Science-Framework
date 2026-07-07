// api/admin.mjs — Admin panel management (Express Router)
import express from 'express';
import { query } from '../lib/db.js';
import { requireAuth } from '../lib/auth-middleware.js';

const router = express.Router();

// Require authentication for all admin routes
router.use(requireAuth);

// Check if user is admin
const isAdmin = async (userId) => {
  const result = await query('SELECT role FROM "user" WHERE id = $1', [userId]);
  return result.rows.length > 0 && result.rows[0].role === 'admin';
};

// Get admin dashboard stats
router.get('/stats', async (req, res) => {
  try {
    const userStats = await query('SELECT COUNT(*) as total_users FROM "user"');
    const forumStats = await query('SELECT COUNT(*) as total_topics FROM forum_topics');
    const postStats = await query('SELECT COUNT(*) as total_posts FROM forum_posts');
    const auditStats = await query('SELECT COUNT(*) as total_actions FROM audit_log');

    res.json({
      users: userStats.rows[0].total_users,
      topics: forumStats.rows[0].total_topics,
      posts: postStats.rows[0].total_posts,
      auditActions: auditStats.rows[0].total_actions
    });
  } catch (error) {
    console.error('[v0] Admin stats error:', error);
    res.status(500).json({ error: error.message });
  }
});

// List all users
router.get('/users', async (req, res) => {
  try {
    const result = await query(
      'SELECT id, email, name, role, createdAt FROM "user" ORDER BY createdAt DESC'
    );
    res.json({ users: result.rows });
  } catch (error) {
    console.error('[v0] List users error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Promote user to admin/moderator
router.post('/users/:userId/promote', async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    if (!['admin', 'moderator'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    await query('UPDATE "user" SET role = $1 WHERE id = $2', [role, userId]);
    
    // Log action
    await query(
      `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [req.user.id, 'USER_PROMOTE', 'user', userId]
    );

    res.json({ ok: true, message: `User promoted to ${role}` });
  } catch (error) {
    console.error('[v0] Promote user error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get audit log
router.get('/audit-log', async (req, res) => {
  try {
    const { limit = 100, offset = 0 } = req.query;
    const result = await query(
      `SELECT id, user_id, action, resource_type, resource_id, created_at 
       FROM audit_log 
       ORDER BY created_at DESC 
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    res.json({ logs: result.rows });
  } catch (error) {
    console.error('[v0] Audit log error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
