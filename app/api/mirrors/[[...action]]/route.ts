import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db-client';
import { getAuthenticatedUser } from '@/lib/auth-middleware';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ action?: string[] }> }
) {
  const params = await context.params;
  const action = params.action?.[0] || 'list';

  try {
    if (action === 'list') {
      const result = await query(
        `SELECT id, name, description, github_repo, github_branch, subjects, 
                created_by, created_at, is_active 
         FROM mirrors WHERE is_active = true ORDER BY created_at DESC`
      );
      return NextResponse.json({ mirrors: result.rows });
    }

    if (action === 'get') {
      const { searchParams } = request.nextUrl;
      const id = searchParams.get('id');

      if (!id) {
        return NextResponse.json({ error: 'Mirror ID required' }, { status: 400 });
      }

      const result = await query('SELECT * FROM mirrors WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Mirror not found' }, { status: 404 });
      }

      return NextResponse.json({ mirror: result.rows[0] });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] Mirrors API error:', error);
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

    if (action === 'create') {
      const { name, description, github_repo, github_branch = 'main', subjects } = body;

      const result = await query(
        `INSERT INTO mirrors (name, description, github_repo, github_branch, subjects, created_by, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
         RETURNING id, name, github_repo`,
        [name, description, github_repo, github_branch, subjects || [], user.id]
      );

      return NextResponse.json({ mirror: result.rows[0] }, { status: 201 });
    }

    if (action === 'update') {
      const { id, name, description, subjects, is_active } = body;

      await query(
        `UPDATE mirrors SET name = $1, description = $2, subjects = $3, is_active = $4, updated_at = NOW() 
         WHERE id = $5`,
        [name, description, subjects, is_active, id]
      );

      return NextResponse.json({ ok: true });
    }

    if (action === 'delete') {
      const { id } = body;
      await query('UPDATE mirrors SET is_active = false WHERE id = $1', [id]);

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] Mirrors API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
