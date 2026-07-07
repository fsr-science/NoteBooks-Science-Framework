// api/mirrors.mjs — Manage content mirrors/sources
import { query } from '../lib/db.js';
import { requireAuth, requireRole } from '../lib/auth-middleware.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { action } = req.body;

    // List all active mirrors
    if (action === 'listMirrors' && req.method === 'POST') {
      const result = await query(
        `SELECT id, name, description, github_repo, github_branch, subjects, created_at, updated_at
         FROM mirrors
         WHERE is_active = true
         ORDER BY created_at DESC`
      );

      return res.status(200).json({ mirrors: result.rows });
    }

    // Get mirrors registry (published as JSON)
    if (action === 'getMirrorsRegistry' && req.method === 'POST') {
      const result = await query(
        `SELECT id, name, description, github_repo, github_branch, subjects
         FROM mirrors
         WHERE is_active = true`
      );

      const registry = {
        version: '1.0',
        lastUpdated: new Date().toISOString(),
        mirrors: result.rows.map(m => ({
          id: m.id,
          name: m.name,
          description: m.description,
          repo: m.github_repo,
          branch: m.github_branch,
          subjects: m.subjects || []
        }))
      };

      return res.status(200).json(registry);
    }

    // Create new mirror (admin only)
    if (action === 'createMirror' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');
      const { name, description, github_repo, github_branch = 'main', subjects = [] } = req.body;

      if (!name || !github_repo) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const result = await query(
        `INSERT INTO mirrors (name, description, github_repo, github_branch, subjects, created_by, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
         RETURNING id, name, github_repo`,
        [name, description, github_repo, github_branch, subjects, user.id]
      );

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, 'CREATE_MIRROR', 'mirror', $2, NOW())`,
        [user.id, result.rows[0].id]
      );

      return res.status(201).json({ mirror: result.rows[0] });
    }

    // Update mirror (admin only)
    if (action === 'updateMirror' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');
      const { id, name, description, subjects, is_active } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Missing mirror ID' });
      }

      const updates = [];
      const values = [];
      let paramIndex = 1;

      if (name !== undefined) {
        updates.push(`name = $${paramIndex++}`);
        values.push(name);
      }

      if (description !== undefined) {
        updates.push(`description = $${paramIndex++}`);
        values.push(description);
      }

      if (subjects !== undefined) {
        updates.push(`subjects = $${paramIndex++}`);
        values.push(subjects);
      }

      if (is_active !== undefined) {
        updates.push(`is_active = $${paramIndex++}`);
        values.push(is_active);
      }

      updates.push(`updated_at = NOW()`);
      values.push(id);

      const result = await query(
        `UPDATE mirrors SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING id, name`,
        values
      );

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, 'UPDATE_MIRROR', 'mirror', $2, NOW())`,
        [user.id, id]
      );

      return res.status(200).json({ mirror: result.rows[0] });
    }

    // Delete mirror (admin only)
    if (action === 'deleteMirror' && req.method === 'POST') {
      const user = await requireRole(req, 'admin');
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Missing mirror ID' });
      }

      await query('UPDATE mirrors SET is_active = false WHERE id = $1', [id]);

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, 'DELETE_MIRROR', 'mirror', $2, NOW())`,
        [user.id, id]
      );

      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('Mirrors API error:', error);
    
    if (error.message === 'Unauthorized') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (error.message === 'Insufficient permissions') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    return res.status(500).json({ error: error.message });
  }
}
