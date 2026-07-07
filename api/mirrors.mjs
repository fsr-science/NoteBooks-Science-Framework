// api/mirrors.mjs — Content mirrors registry (Express Router)
import express from 'express';
import { query } from '../lib/db.js';
import { getAuthenticatedUser, requireAuth } from '../lib/auth-middleware.js';

const router = express.Router();

// List all active mirrors
router.get('/list', async (req, res) => {
  try {
    const result = await query(
      'SELECT id, name, description, github_repo, github_branch, subjects, created_at FROM mirrors WHERE is_active = true ORDER BY created_at DESC'
    );
    res.json({ mirrors: result.rows });
  } catch (error) {
    console.error('[v0] List mirrors error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get manifest from a mirror
router.get('/:mirrorId/manifest', async (req, res) => {
  try {
    const { mirrorId } = req.params;
    
    const mirrorResult = await query('SELECT * FROM mirrors WHERE id = $1 AND is_active = true', [mirrorId]);
    if (mirrorResult.rows.length === 0) {
      return res.status(404).json({ error: 'Mirror not found' });
    }

    const mirror = mirrorResult.rows[0];
    // Fetch manifest from GitHub Pages or blob storage
    const manifestUrl = `https://raw.githubusercontent.com/${mirror.github_repo}/${mirror.github_branch}/manifest.json`;
    
    const response = await fetch(manifestUrl);
    if (!response.ok) {
      return res.status(404).json({ error: 'Manifest not found in repository' });
    }

    const manifest = await response.json();
    res.json({ manifest, mirror });
  } catch (error) {
    console.error('[v0] Get manifest error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create new mirror (admin only)
router.post('/create', requireAuth, async (req, res) => {
  try {
    const { name, description, github_repo, github_branch = 'main', subjects } = req.body;
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const result = await query(
      `INSERT INTO mirrors (name, description, github_repo, github_branch, subjects, created_by, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       RETURNING id, name, github_repo`,
      [name, description, github_repo, github_branch, subjects || [], user.id]
    );

    // Log action
    await query(
      `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [user.id, 'MIRROR_CREATED', 'mirror', result.rows[0].id]
    );

    res.status(201).json({ mirror: result.rows[0] });
  } catch (error) {
    console.error('[v0] Create mirror error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update mirror (admin only)
router.put('/:mirrorId', requireAuth, async (req, res) => {
  try {
    const { mirrorId } = req.params;
    const { name, description, is_active } = req.body;
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await query(
      `UPDATE mirrors SET name = $1, description = $2, is_active = $3, updated_at = NOW() WHERE id = $4`,
      [name, description, is_active !== undefined ? is_active : true, mirrorId]
    );

    res.json({ ok: true });
  } catch (error) {
    console.error('[v0] Update mirror error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
