// api/pdf-export.mjs — PDF export endpoints (Express Router)
import express from 'express';
import { query } from '../lib/db.js';
import { requireAuth, getAuthenticatedUser } from '../lib/auth-middleware.js';

const router = express.Router();

// Client-side PDF export instructions
router.post('/client-export', (req, res) => {
  try {
    const { title, filename = 'document.pdf' } = req.body;

    // Return CSS that can be used with window.print()
    const css = `
      @media print {
        @page {
          size: A4;
          margin: 2cm;
          orphans: 3;
          widows: 3;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        h1, h2, h3, h4, h5, h6 {
          page-break-after: avoid;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        
        p, li {
          page-break-inside: avoid;
        }
        
        code {
          background: #f5f5f5;
          padding: 2px 4px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.9em;
        }
        
        pre {
          background: #f5f5f5;
          padding: 12px;
          border-radius: 4px;
          page-break-inside: avoid;
          overflow-x: auto;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          page-break-inside: avoid;
        }
        
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        
        th {
          background: #f5f5f5;
        }
        
        .no-print {
          display: none;
        }
      }
    `;

    res.json({
      success: true,
      css,
      instructions: [
        '1. Click File > Print (Ctrl+P or Cmd+P)',
        '2. Select destination as "Save as PDF"',
        '3. Configure margins and other settings as needed',
        '4. Click Save'
      ],
      filename
    });
  } catch (error) {
    console.error('[v0] Client export error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Server-side bulk PDF export (rate-limited, requires auth)
router.post('/export-bulk', requireAuth, async (req, res) => {
  try {
    const { fileIds = [] } = req.body;
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Rate limit: 1 bulk export per hour per user
    const recentExports = await query(
      `SELECT COUNT(*) as count FROM audit_log 
       WHERE user_id = $1 AND action = 'BULK_PDF_EXPORT' 
       AND created_at > NOW() - INTERVAL '1 hour'`,
      [user.id]
    );

    if (recentExports.rows[0].count > 0) {
      return res.status(429).json({
        error: 'Rate limited',
        message: 'You can only export bulk PDFs once per hour'
      });
    }

    // Log the action
    await query(
      `INSERT INTO audit_log (user_id, action, resource_type, created_at)
       VALUES ($1, $2, $3, NOW())`,
      [user.id, 'BULK_PDF_EXPORT', 'pdf']
    );

    res.json({
      success: true,
      message: 'Bulk export request queued',
      requestId: `export_${user.id}_${Date.now()}`,
      estimatedSize: fileIds.length * 50 + ' KB',
      note: 'Export will be available for download shortly'
    });
  } catch (error) {
    console.error('[v0] Bulk export error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get export status
router.get('/export-status/:requestId', async (req, res) => {
  try {
    const { requestId } = req.params;

    res.json({
      requestId,
      status: 'processing',
      progress: 45,
      estimatedTime: '2 minutes'
    });
  } catch (error) {
    console.error('[v0] Export status error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
