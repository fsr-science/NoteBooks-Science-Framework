import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db-client';
import { getAuthenticatedUser } from '@/lib/auth-middleware';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ action?: string[] }> }
) {
  const params = await context.params;
  const action = params.action?.[0] || '';

  try {
    const body = await request.json();

    if (action === 'client-config') {
      // Return configuration for client-side print-to-PDF
      return NextResponse.json({
        pageSettings: {
          size: 'A4',
          margin: '2cm',
          orientation: 'portrait',
        },
        css: `
          @page {
            size: A4;
            margin: 2cm;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
          }
          pre {
            background: #f4f4f4;
            padding: 12px;
            border-radius: 3px;
            overflow-x: auto;
          }
          .callout {
            border-left: 4px solid #0066cc;
            padding: 12px;
            margin: 12px 0;
            background: #f9f9f9;
          }
        `,
      });
    }

    if (action === 'bulk-export') {
      // Rate limiting for bulk export (authenticated only)
      const user = await getAuthenticatedUser(request);
      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const { fileIds = [] } = body;
      if (fileIds.length === 0) {
        return NextResponse.json({ error: 'No files specified' }, { status: 400 });
      }

      // Check rate limit: max 1 bulk export per hour per user
      const recentExport = await query(
        `SELECT * FROM audit_log 
         WHERE user_id = $1 AND action = 'bulk_pdf_export' 
         AND created_at > NOW() - INTERVAL '1 hour'
         LIMIT 1`,
        [user.id]
      );

      if (recentExport.rows.length > 0) {
        return NextResponse.json(
          { error: 'Rate limit: 1 bulk export per hour' },
          { status: 429 }
        );
      }

      // Log the export
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, created_at)
         VALUES ($1, $2, $3, NOW())`,
        [user.id, 'bulk_pdf_export', 'pdf_export']
      );

      // Return job ID for async processing (in production, queue this job)
      const jobId = `pdf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      return NextResponse.json({
        jobId,
        status: 'queued',
        estimatedTime: '2-5 minutes',
        fileCount: fileIds.length,
      });
    }

    if (action === 'status') {
      const { jobId } = body;
      if (!jobId) {
        return NextResponse.json({ error: 'Job ID required' }, { status: 400 });
      }

      // In production, check actual job status from queue
      return NextResponse.json({
        jobId,
        status: 'processing',
        progress: 65,
        eta: '2 minutes',
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[v0] PDF Export API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ error: 'Use POST method' }, { status: 405 });
}
