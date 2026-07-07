import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import { query } from '@/lib/db-client';
import { getAuthenticatedUser } from '@/lib/auth-middleware';

const octokit = new Octokit({
  auth: process.env.GITHUB_APP_TOKEN,
});

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ action?: string[] }> }
) {
  const params = await context.params;
  const action = params.action?.[0] || 'list';

  try {
    const { searchParams } = request.nextUrl;
    const owner = searchParams.get('owner') || process.env.GITHUB_OWNER;
    const repo = searchParams.get('repo') || process.env.GITHUB_REPO;

    if (action === 'list') {
      // List open PRs
      const response = await octokit.pulls.list({
        owner: owner!,
        repo: repo!,
        state: 'open',
        sort: 'updated',
        direction: 'desc',
        per_page: 20,
      });

      return NextResponse.json({
        prs: response.data.map((pr) => ({
          id: pr.id,
          number: pr.number,
          title: pr.title,
          author: pr.user?.login,
          created_at: pr.created_at,
          updated_at: pr.updated_at,
          url: pr.html_url,
          branch: pr.head.ref,
        })),
      });
    }

    if (action === 'get') {
      const prNumber = parseInt(searchParams.get('number') || '0');
      if (!prNumber) {
        return NextResponse.json({ error: 'PR number required' }, { status: 400 });
      }

      // Get PR details
      const pr = await octokit.pulls.get({
        owner: owner!,
        repo: repo!,
        pull_number: prNumber,
      });

      // Get PR diff
      const diff = await octokit.rest.pulls.get({
        owner: owner!,
        repo: repo!,
        pull_number: prNumber,
        mediaType: { format: 'diff' },
      });

      return NextResponse.json({
        pr: {
          number: pr.data.number,
          title: pr.data.title,
          body: pr.data.body,
          author: pr.data.user?.login,
          created_at: pr.data.created_at,
          diff: diff.data,
        },
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] PR Review API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ action?: string[] }> }
) {
  const params = await context.params;
  const action = params.action?.[0] || '';

  try {
    const user = await getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = request.nextUrl;
    const owner = searchParams.get('owner') || process.env.GITHUB_OWNER;
    const repo = searchParams.get('repo') || process.env.GITHUB_REPO;
    const body = await request.json();

    if (action === 'approve') {
      const { prNumber, comment } = body;

      await octokit.pulls.createReview({
        owner: owner!,
        repo: repo!,
        pull_number: prNumber,
        event: 'APPROVE',
        body: comment || 'Approved by admin',
      });

      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [user.id, 'pr_approved', 'github_pr', `${repo}#${prNumber}`]
      );

      return NextResponse.json({ ok: true });
    }

    if (action === 'merge') {
      const { prNumber, squash = false } = body;

      await octokit.pulls.merge({
        owner: owner!,
        repo: repo!,
        pull_number: prNumber,
        merge_method: squash ? 'squash' : 'merge',
      });

      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [user.id, 'pr_merged', 'github_pr', `${repo}#${prNumber}`]
      );

      return NextResponse.json({ ok: true });
    }

    if (action === 'comment') {
      const { prNumber, comment } = body;

      await octokit.pulls.createReview({
        owner: owner!,
        repo: repo!,
        pull_number: prNumber,
        event: 'COMMENT',
        body: comment,
      });

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] PR Review API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
