import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db-client';
import { getAuthenticatedUser, getOrCreateSessionId, getGuestName, setSessionCookie } from '@/lib/auth-middleware';
import { renderMarkdown } from '@/lib/markdown-renderer';
import DOMPurify from 'isomorphic-dompurify';

// Single unified API handler - consolidates all 8 services into 1 function
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ route?: string[] }> }
) {
  const params = await context.params;
  const route = params.route || [];
  const service = route[0];
  const action = route[1] || 'default';

  try {
    // Health check
    if (service === 'health') {
      return NextResponse.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        environment: process.env.NODE_ENV,
      });
    }

    // Admin service (GET endpoints)
    if (service === 'admin') {
      const user = await getAuthenticatedUser(request);
      if (!user || user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      if (action === 'stats') {
        const [userCount, topicCount, postCount, pendingPosts] = await Promise.all([
          query('SELECT COUNT(*) as count FROM "user"'),
          query('SELECT COUNT(*) as count FROM forum_topics'),
          query('SELECT COUNT(*) as count FROM forum_posts WHERE is_approved = true'),
          query('SELECT COUNT(*) as count FROM forum_posts WHERE is_approved = false'),
        ]);

        return NextResponse.json({
          users: (userCount.rows[0] as any)?.count || 0,
          topics: (topicCount.rows[0] as any)?.count || 0,
          posts: (postCount.rows[0] as any)?.count || 0,
          pendingPosts: (pendingPosts.rows[0] as any)?.count || 0,
        });
      }

      if (action === 'users') {
        const result = await query(
          `SELECT id, email, name, role, createdAt, updatedAt FROM "user" ORDER BY createdAt DESC LIMIT 50`
        );
        return NextResponse.json({ users: result.rows });
      }

      if (action === 'audit-log') {
        const limit = request.nextUrl.searchParams.get('limit') || '50';
        const result = await query(
          `SELECT id, user_id, action, resource_type, resource_id, created_at FROM audit_log ORDER BY created_at DESC LIMIT $1`,
          [parseInt(limit)]
        );
        return NextResponse.json({ logs: result.rows });
      }
    }

    // Mirrors service (GET - list)
    if (service === 'mirrors') {
      const result = await query(
        'SELECT id, name, description, github_repo, subjects FROM mirrors WHERE is_active = true ORDER BY created_at DESC'
      );
      return NextResponse.json({ mirrors: result.rows });
    }

    // PR Review service
    if (service === 'pr-review') {
      const owner = request.nextUrl.searchParams.get('owner');
      const repo = request.nextUrl.searchParams.get('repo');

      if (!owner || !repo) {
        return NextResponse.json({ error: 'Missing owner or repo' }, { status: 400 });
      }

      return NextResponse.json({ prs: [] });
    }

    // Config endpoint - returns app configuration
    if (service === 'config') {
      return NextResponse.json({
        version: '2.0.0',
        apiUrl: '/api',
        environment: process.env.NODE_ENV,
        features: {
          forum: true,
          markdown: true,
          github: true,
          desmos: true,
        },
      });
    }

    // GitHub integration endpoint
    if (service === 'gh.js' || service === 'gh') {
      return NextResponse.json({
        authenticated: false,
        repos: [],
      });
    }

    // Desmos endpoint - for math rendering
    if (service === 'desmos.js' || service === 'desmos') {
      return NextResponse.json({
        status: 'ok',
        version: '1.7.1',
        message: 'Desmos API proxy ready',
      });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (error) {
    console.error('[v0] Unified API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ route?: string[] }> }
) {
  const params = await context.params;
  const route = params.route || [];
  const service = route[0];
  const action = route[1] || 'default';

  try {
    const body = await request.json();

    // Forum service
    if (service === 'forum') {
      if (action === 'topics-list') {
        const { subject, chapter, page = 1, limit = 20 } = body;
        const offset = (page - 1) * limit;

        let sql = `
          SELECT id, title, description, subject, chapter, file_path, created_by, created_at, 
                 pinned, status, view_count, 
                 (SELECT COUNT(*) FROM forum_posts fp WHERE fp.topic_id = ft.id) as post_count
          FROM forum_topics ft
          WHERE 1=1
        `;
        const queryParams: (string | number | null)[] = [];
        let paramIndex = 1;

        if (subject) {
          sql += ` AND subject = $${paramIndex}`;
          queryParams.push(subject);
          paramIndex++;
        }

        if (chapter) {
          sql += ` AND chapter = $${paramIndex}`;
          queryParams.push(chapter);
          paramIndex++;
        }

        sql += ` ORDER BY pinned DESC, created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        queryParams.push(limit, offset);

        const result = await query(sql, queryParams);
        return NextResponse.json({ topics: result.rows });
      }

      if (action === 'topic-get') {
        const { topicId } = body;
        await query('UPDATE forum_topics SET view_count = view_count + 1 WHERE id = $1', [topicId]);

        const topicResult = await query('SELECT * FROM forum_topics WHERE id = $1', [topicId]);
        if (topicResult.rows.length === 0) {
          return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
        }

        const postsResult = await query(
          `SELECT id, user_id, session_id, guest_name, content, markdown_parsed, created_at, 
                  is_edited, edited_at, is_approved, 
                  (SELECT COUNT(*) FROM post_replies pr WHERE pr.parent_post_id = fp.id) as reply_count
           FROM forum_posts fp
           WHERE topic_id = $1 AND is_approved = true
           ORDER BY created_at ASC`,
          [topicId]
        );

        return NextResponse.json({ topic: topicResult.rows[0], posts: postsResult.rows });
      }

      if (action === 'topic-create') {
        const { title, description, subject, chapter, file_path } = body;
        const user = await getAuthenticatedUser(request);

        if (!user) {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const result = await query(
          `INSERT INTO forum_topics (title, description, subject, chapter, file_path, created_by, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
           RETURNING id, title, created_at`,
          [title, description, subject, chapter, file_path, user.id]
        );

        return NextResponse.json({ topic: result.rows[0] }, { status: 201 });
      }

      if (action === 'post-create') {
        const { topicId, content } = body;
        const user = await getAuthenticatedUser(request);
        const sessionId = getOrCreateSessionId(request);

        if (!topicId || !content) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const isApproved = user ? true : false;
        const guestName = user ? null : getGuestName(sessionId);

        const result = await query(
          `INSERT INTO forum_posts (topic_id, user_id, session_id, guest_name, content, created_at, updated_at, is_approved)
           VALUES ($1, $2, $3, $4, $5, NOW(), NOW(), $6)
           RETURNING id, user_id, session_id, guest_name, content, created_at`,
          [topicId, user?.id || null, user ? null : sessionId, guestName, content, isApproved]
        );

        setSessionCookie(request as any, sessionId);

        return NextResponse.json({
          post: result.rows[0],
          requiresApproval: !isApproved,
        }, { status: 201 });
      }
    }

    // Markdown service
    if (service === 'markdown') {
      if (action === 'render' || action === 'validate') {
        const { content } = body;
        if (!content) {
          return NextResponse.json({ error: 'Content required' }, { status: 400 });
        }

        const rendered = renderMarkdown(content);
        const sanitized = DOMPurify.sanitize(rendered);

        return NextResponse.json({
          html: sanitized,
          valid: true,
          wordCount: content.split(/\s+/).length,
        });
      }
    }

    // Admin service - POST endpoints
    if (service === 'admin') {
      const user = await getAuthenticatedUser(request);
      if (!user || user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      if (action === 'promote-user') {
        const { userId, role } = body;
        if (!userId || !['admin', 'moderator', 'user'].includes(role)) {
          return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
        }

        await query('UPDATE "user" SET role = $1 WHERE id = $2', [role, userId]);
        return NextResponse.json({ ok: true });
      }
    }

    // Mirrors service - POST endpoints
    if (service === 'mirrors') {
      const user = await getAuthenticatedUser(request);
      if (!user || user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      if (action === 'add') {
        const { name, description, github_repo, github_branch = 'main', subjects = [] } = body;

        const result = await query(
          `INSERT INTO mirrors (name, description, github_repo, github_branch, subjects, created_by, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
           RETURNING id, name, github_repo`,
          [name, description, github_repo, github_branch, JSON.stringify(subjects), user.id]
        );

        return NextResponse.json({ mirror: result.rows[0] }, { status: 201 });
      }
    }

    // PDF Export service
    if (service === 'pdf-export') {
      if (action === 'client-config') {
        return NextResponse.json({
          method: 'client-side',
          message: 'Use window.print() for client-side PDF export',
          pageStyles: '@page { margin: 1cm; } body { font-family: Arial; }',
        });
      }

      if (action === 'bulk-export') {
        const user = await getAuthenticatedUser(request);
        if (!user || user.role !== 'admin') {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        return NextResponse.json({
          message: 'Bulk export queued',
          jobId: 'job_' + Date.now(),
          estimatedTime: '30 seconds',
        });
      }
    }

    // Config endpoint (POST)
    if (service === 'config') {
      return NextResponse.json({
        version: '2.0.0',
        apiUrl: '/api',
        environment: process.env.NODE_ENV,
        features: {
          forum: true,
          markdown: true,
          github: true,
          desmos: true,
        },
      });
    }

    // GitHub integration endpoint (POST)
    if (service === 'gh.js' || service === 'gh') {
      return NextResponse.json({
        status: 'ok',
        message: 'GitHub integration ready',
      });
    }

    // Desmos endpoint (POST)
    if (service === 'desmos.js' || service === 'desmos') {
      return NextResponse.json({
        status: 'ok',
        version: '1.7.1',
        message: 'Desmos API proxy ready',
      });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (error) {
    console.error('[v0] Unified API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
