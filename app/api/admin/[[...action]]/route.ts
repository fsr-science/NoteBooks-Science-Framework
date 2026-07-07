import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db-client';
import { getAuthenticatedUser } from '@/lib/auth-middleware';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ action?: string[] }> }
) {
  const params = await context.params;
  const action = params.action?.[0] || 'stats';

  try {
    const user = await getAuthenticatedUser(request);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'stats') {
      const userCount = await query('SELECT COUNT(*) as count FROM "user"');
      const topicCount = await query('SELECT COUNT(*) as count FROM forum_topics');
      const postCount = await query('SELECT COUNT(*) as count FROM forum_posts WHERE is_approved = true');
      const pendingPosts = await query('SELECT COUNT(*) as count FROM forum_posts WHERE is_approved = false');

      return NextResponse.json({
        users: userCount.rows[0].count,
        topics: topicCount.rows[0].count,
        posts: postCount.rows[0].count,
        pendingPosts: pendingPosts.rows[0].count,
      });
    }

    if (action === 'users') {
      const result = await query(
        `SELECT id, email, name, role, createdAt, updatedAt FROM "user" ORDER BY createdAt DESC LIMIT 50`
      );
      return NextResponse.json({ users: result.rows });
    }

    if (action === 'audit-log') {
      const { limit = 50 } = Object.fromEntries(request.nextUrl.searchParams);
      const result = await query(
        `SELECT id, user_id, action, resource_type, resource_id, created_at FROM audit_log ORDER BY created_at DESC LIMIT $1`,
        [parseInt(limit as string)]
      );
      return NextResponse.json({ logs: result.rows });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] Admin API error:', error);
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
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (action === 'promote-user') {
      const { userId, role } = body;
      if (!['admin', 'moderator', 'user'].includes(role)) {
        return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
      }

      await query('UPDATE "user" SET role = $1 WHERE id = $2', [role, userId]);
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [user.id, 'promote_user', 'user', userId]
      );

      return NextResponse.json({ ok: true });
    }

    if (action === 'approve-post') {
      const { postId } = body;
      await query('UPDATE forum_posts SET is_approved = true WHERE id = $1', [postId]);
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, resource_id, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [user.id, 'approve_post', 'forum_post', postId]
      );

      return NextResponse.json({ ok: true });
    }

    if (action === 'flag-post') {
      const { postId } = body;
      await query('UPDATE forum_posts SET flagged_for_review = true WHERE id = $1', [postId]);

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] Admin API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
