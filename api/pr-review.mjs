// api/pr-review.mjs — In-app PR review with GitHub integration (Express Router)
import express from 'express';
import { Octokit } from '@octokit/rest';
import { query } from '../lib/db.js';
import { getAuthenticatedUser, requireAuth } from '../lib/auth-middleware.js';

const router = express.Router();
const octokit = new Octokit({ auth: process.env.GITHUB_APP_TOKEN });

// List open PRs for review
router.get('/list', async (req, res) => {
  try {
    const { owner = process.env.GITHUB_OWNER, repo = process.env.GITHUB_REPO } = req.query;

    if (!owner || !repo) {
      return res.status(400).json({ error: 'Missing owner or repo' });
    }

    const prs = await octokit.pulls.list({
      owner,
      repo,
      state: 'open',
      per_page: 100
    });

    res.json({
      pullRequests: prs.data.map(pr => ({
        id: pr.id,
        number: pr.number,
        title: pr.title,
        author: pr.user.login,
        createdAt: pr.created_at,
        updatedAt: pr.updated_at,
        url: pr.html_url,
        filesChanged: pr.changed_files,
        additions: pr.additions,
        deletions: pr.deletions
      }))
    });
  } catch (error) {
    console.error('[v0] List PRs error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get PR details and diff
router.get('/:prNumber/details', async (req, res) => {
  try {
    const { prNumber } = req.params;
    const { owner = process.env.GITHUB_OWNER, repo = process.env.GITHUB_REPO } = req.query;

    if (!owner || !repo) {
      return res.status(400).json({ error: 'Missing owner or repo' });
    }

    // Get PR details
    const pr = await octokit.pulls.get({
      owner,
      repo,
      pull_number: parseInt(prNumber)
    });

    // Get PR files
    const files = await octokit.pulls.listFiles({
      owner,
      repo,
      pull_number: parseInt(prNumber),
      per_page: 100
    });

    res.json({
      pr: {
        number: pr.data.number,
        title: pr.data.title,
        body: pr.data.body,
        author: pr.data.user.login,
        status: pr.data.state,
        createdAt: pr.data.created_at,
        updatedAt: pr.data.updated_at,
        url: pr.data.html_url
      },
      files: files.data.map(file => ({
        filename: file.filename,
        status: file.status,
        additions: file.additions,
        deletions: file.deletions,
        changesUrl: file.contents_url,
        patch: file.patch
      }))
    });
  } catch (error) {
    console.error('[v0] Get PR details error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Approve and merge PR
router.post('/:prNumber/approve-merge', requireAuth, async (req, res) => {
  try {
    const { prNumber } = req.params;
    const { owner = process.env.GITHUB_OWNER, repo = process.env.GITHUB_REPO, mergeStrategy = 'squash' } = req.body;
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Check user has reviewer permissions
    const userRole = (await query('SELECT role FROM "user" WHERE id = $1', [user.id])).rows[0]?.role;
    if (!['admin', 'moderator'].includes(userRole)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    // Approve review
    await octokit.pulls.createReview({
      owner,
      repo,
      pull_number: parseInt(prNumber),
      event: 'APPROVE'
    });

    // Merge PR
    const merge = await octokit.pulls.merge({
      owner,
      repo,
      pull_number: parseInt(prNumber),
      merge_method: mergeStrategy,
      commit_title: `Approved by ${user.email}`,
      commit_message: `Merged via in-app review by ${user.name || user.email}`
    });

    // Log action
    await query(
      `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [user.id, 'PR_MERGED', 'pull_request', `${prNumber}`]
    );

    res.json({
      ok: true,
      message: 'PR approved and merged',
      sha: merge.data.sha
    });
  } catch (error) {
    console.error('[v0] Approve merge error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add review comment
router.post('/:prNumber/comment', requireAuth, async (req, res) => {
  try {
    const { prNumber } = req.params;
    const { body, owner = process.env.GITHUB_OWNER, repo = process.env.GITHUB_REPO } = req.body;
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const comment = await octokit.issues.createComment({
      owner,
      repo,
      issue_number: parseInt(prNumber),
      body
    });

    res.json({
      ok: true,
      comment: {
        id: comment.data.id,
        url: comment.data.html_url
      }
    });
  } catch (error) {
    console.error('[v0] Add comment error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
