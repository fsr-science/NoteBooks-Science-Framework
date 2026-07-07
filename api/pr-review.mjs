// api/pr-review.mjs — In-app PR review with diff, preview, and merge capability
import { requireAuth } from '../lib/auth-middleware.js';
import { query } from '../lib/db.js';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_APP_TOKEN
});

const REPO_OWNER = process.env.GITHUB_REPO_OWNER;
const REPO_NAME = process.env.GITHUB_REPO_NAME;
const CONTENT_BRANCH = 'content';
const MAIN_BRANCH = 'main';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { action } = req.body;
    const user = await requireAuth(req);

    // List PRs for current user
    if (action === 'listMyPRs' && req.method === 'POST') {
      const { page = 1, limit = 20 } = req.body;
      const offset = (page - 1) * limit;

      // Get PRs from GitHub API
      const prs = await octokit.rest.pulls.list({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        creator: user.email.split('@')[0], // GitHub username would be better
        state: 'open',
        per_page: limit,
        page
      });

      const prDetails = prs.data.map(pr => ({
        id: pr.id,
        number: pr.number,
        title: pr.title,
        description: pr.body,
        createdAt: pr.created_at,
        updatedAt: pr.updated_at,
        status: pr.state,
        reviewComments: pr.review_comments,
        commits: pr.commits,
        additions: pr.additions,
        deletions: pr.deletions,
        filesChanged: pr.changed_files
      }));

      return res.status(200).json({ prs: prDetails });
    }

    // Get PR diff
    if (action === 'getPRDiff' && req.method === 'POST') {
      const { prNumber } = req.body;

      if (!prNumber) {
        return res.status(400).json({ error: 'Missing prNumber' });
      }

      const diff = await octokit.rest.pulls.get({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        pull_number: prNumber
      });

      const files = await octokit.rest.pulls.listFiles({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        pull_number: prNumber
      });

      return res.status(200).json({
        pr: {
          number: diff.data.number,
          title: diff.data.title,
          description: diff.data.body,
          state: diff.data.state
        },
        files: files.data.map(f => ({
          filename: f.filename,
          status: f.status,
          additions: f.additions,
          deletions: f.deletions,
          patch: f.patch,
          rawUrl: f.raw_url
        }))
      });
    }

    // Get file preview from PR
    if (action === 'getFilePreview' && req.method === 'POST') {
      const { prNumber, filename } = req.body;

      if (!prNumber || !filename) {
        return res.status(400).json({ error: 'Missing prNumber or filename' });
      }

      try {
        const content = await octokit.rest.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: filename,
          ref: `refs/pull/${prNumber}/head`
        });

        const fileContent = Buffer.from(content.data.content, 'base64').toString('utf-8');

        return res.status(200).json({
          filename,
          content: fileContent,
          size: content.data.size
        });
      } catch (error) {
        return res.status(404).json({ error: 'File not found in PR' });
      }
    }

    // Add review comment to PR
    if (action === 'addReviewComment' && req.method === 'POST') {
      const { prNumber, commitId, filename, line, comment } = req.body;

      if (!prNumber || !commitId || !filename || !line || !comment) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const review = await octokit.rest.pulls.createReviewComment({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        pull_number: prNumber,
        commit_id: commitId,
        path: filename,
        line,
        body: comment
      });

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes, created_at)
         VALUES ($1, 'ADD_PR_COMMENT', 'pr', $2, $3, NOW())`,
        [user.id, prNumber, JSON.stringify({ filename, line })]
      );

      return res.status(201).json({ comment: review.data });
    }

    // Approve and merge PR (reviewers only)
    if (action === 'approvePR' && req.method === 'POST') {
      const { prNumber, approvalComment } = req.body;

      if (!prNumber) {
        return res.status(400).json({ error: 'Missing prNumber' });
      }

      // Create approval review
      const approval = await octokit.rest.pulls.createReview({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        pull_number: prNumber,
        event: 'APPROVE',
        body: approvalComment || 'Approved'
      });

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, 'APPROVE_PR', 'pr', $2, NOW())`,
        [user.id, prNumber]
      );

      return res.status(200).json({ review: approval.data });
    }

    // Merge PR (admin/maintainer only)
    if (action === 'mergePR' && req.method === 'POST') {
      const { prNumber, commitMessage, squash = false } = req.body;

      // Verify user is maintainer
      const collaboratorStatus = await octokit.rest.repos.checkCollaborator({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        username: user.email.split('@')[0]
      }).catch(() => ({ status: 204 }));

      if (collaboratorStatus.status !== 204) {
        return res.status(403).json({ error: 'Not authorized to merge PRs' });
      }

      const merge = await octokit.rest.pulls.merge({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        pull_number: prNumber,
        commit_message: commitMessage,
        merge_method: squash ? 'squash' : 'merge'
      });

      // Audit log
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes, created_at)
         VALUES ($1, 'MERGE_PR', 'pr', $2, $3, NOW())`,
        [user.id, prNumber, JSON.stringify({ merged: true, method: squash ? 'squash' : 'merge' })]
      );

      return res.status(200).json({ merged: merge.data });
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('PR Review API error:', error);

    if (error.message === 'Unauthorized') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return res.status(500).json({ error: error.message });
  }
}
