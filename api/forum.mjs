// api/forum.mjs — Forum topics, posts, and discussions (Express Router)
import express from 'express';
import { query } from '../lib/db.js';
import { getAuthenticatedUser, getOrCreateSessionId, getGuestName, setSessionCookie } from '../lib/auth-middleware.js';

const router = express.Router();

// List forum topics
router.post('/topics/list', async (req, res) => {
  try {
    const { subject, chapter, page = 1, limit = 20 } = req.body;
    const offset = (page - 1) * limit;

    let sql = `
      SELECT id, title, description, subject, chapter, file_path, created_by, created_at, 
             pinned, status, view_count, 
             (SELECT COUNT(*) FROM forum_posts fp WHERE fp.topic_id = ft.id) as post_count
      FROM forum_topics ft
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    if (subject) {
      sql += ` AND subject = $${paramIndex}`;
      params.push(subject);
      paramIndex++;
    }

    if (chapter) {
      sql += ` AND chapter = $${paramIndex}`;
      params.push(chapter);
      paramIndex++;
    }

    sql += ` ORDER BY pinned DESC, created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await query(sql, params);
    res.status(200).json({ topics: result.rows });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get single topic with posts
router.post('/topics/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;

    // Update view count
    await query('UPDATE forum_topics SET view_count = view_count + 1 WHERE id = $1', [topicId]);

    // Get topic
    const topicResult = await query('SELECT * FROM forum_topics WHERE id = $1', [topicId]);
    if (topicResult.rows.length === 0) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    // Get posts
    const postsResult = await query(
      `SELECT id, user_id, session_id, guest_name, content, markdown_parsed, created_at, 
              is_edited, edited_at, is_approved, 
              (SELECT COUNT(*) FROM post_replies pr WHERE pr.parent_post_id = fp.id) as reply_count
       FROM forum_posts fp
       WHERE topic_id = $1 AND is_approved = true
       ORDER BY created_at ASC`,
      [topicId]
    );

    // Get reactions for each post
    const posts = postsResult.rows.map(post => ({
      ...post,
      reactions: {}
    }));

    res.status(200).json({ topic: topicResult.rows[0], posts });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create new topic
router.post('/topics/create', async (req, res) => {
  try {
    const { title, description, subject, chapter, file_path } = req.body;
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const result = await query(
      `INSERT INTO forum_topics (title, description, subject, chapter, file_path, created_by, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       RETURNING id, title, created_at`,
      [title, description, subject, chapter, file_path, user.id]
    );

    res.status(201).json({ topic: result.rows[0] });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create post in topic
router.post('/posts/create', async (req, res) => {
  try {
    const { topicId, content } = req.body;
    const user = await getAuthenticatedUser(req);
    const sessionId = getOrCreateSessionId(req);

    if (!topicId || !content) {
      return res.status(400).json({ error: 'Missing topicId or content' });
    }

    // Guest posts require approval
    const isApproved = user ? true : false;
    const guestName = user ? null : getGuestName(sessionId);

    const result = await query(
      `INSERT INTO forum_posts (topic_id, user_id, session_id, guest_name, content, created_at, updated_at, is_approved)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW(), $6)
       RETURNING id, user_id, session_id, guest_name, content, created_at`,
      [topicId, user?.id || null, user ? null : sessionId, guestName, content, isApproved]
    );

    setSessionCookie(res, sessionId);

    res.status(201).json({
      post: result.rows[0],
      requiresApproval: !isApproved
    });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add line reference to post
router.post('/references/add', async (req, res) => {
  try {
    const { postId, file_path, line_start, line_end, referenced_text } = req.body;

    const result = await query(
      `INSERT INTO post_line_references (post_id, file_path, line_start, line_end, referenced_text, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING id`,
      [postId, file_path, line_start, line_end, referenced_text]
    );

    res.status(201).json({ reference: result.rows[0] });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get discussions for a file/line
router.post('/discussions/get', async (req, res) => {
  try {
    const { file_path, line_start, line_end } = req.body;

    const result = await query(
      `SELECT DISTINCT ft.id, ft.title, ft.subject, ft.chapter,
              fp.id as post_id, fp.content, fp.user_id, fp.guest_name, fp.created_at,
              plr.line_start, plr.line_end
       FROM post_line_references plr
       JOIN forum_posts fp ON plr.post_id = fp.id
       JOIN forum_topics ft ON fp.topic_id = ft.id
       WHERE plr.file_path = $1
       AND ((plr.line_start <= $2 AND plr.line_end >= $3) OR 
            (plr.line_start >= $2 AND plr.line_start <= $3) OR
            (plr.line_end >= $2 AND plr.line_end <= $3))
       AND fp.is_approved = true
       ORDER BY ft.created_at DESC`,
      [file_path, line_end, line_start]
    );

    res.status(200).json({ discussions: result.rows });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add reaction to post
router.post('/reactions/add', async (req, res) => {
  try {
    const { postId, reactionType } = req.body;
    const user = await getAuthenticatedUser(req);
    const sessionId = getOrCreateSessionId(req);

    await query(
      `INSERT INTO post_reactions (post_id, user_id, session_id, reaction_type, created_at)
       VALUES ($1, $2, $3, $4, NOW())
       ON CONFLICT DO NOTHING`,
      [postId, user?.id || null, user ? null : sessionId, reactionType]
    );

    setSessionCookie(res, sessionId);

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[v0] Forum error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
