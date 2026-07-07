// api/pdf-export.mjs — PDF export functionality (client-side print + server-side bulk)
import { requireAuth } from '../lib/auth-middleware.js';
import { query } from '../lib/db.js';
import { Readable } from 'stream';

export default async function handler(req, res) {
  try {
    const { action } = req.body;

    // Client-side print support metadata
    if (action === 'getPrintStyles' && req.method === 'POST') {
      const css = `
        @page {
          margin: 0.5in;
          size: letter;
        }

        @media print {
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
            line-height: 1.5;
            color: #000;
            background: #fff;
          }

          .no-print {
            display: none !important;
          }

          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid;
            page-break-inside: avoid;
          }

          img, table {
            page-break-inside: avoid;
            max-width: 100%;
          }

          pre, code {
            page-break-inside: avoid;
            background: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 8px;
          }

          .callout {
            page-break-inside: avoid;
            border-left: 4px solid #333;
            background: #f9f9f9;
            padding: 12px;
            margin: 12px 0;
          }

          svg {
            display: block;
            max-width: 100%;
            height: auto;
          }

          .mermaid {
            page-break-inside: avoid;
          }

          .katex-display {
            page-break-inside: avoid;
            overflow-x: auto;
          }

          a {
            color: #0066cc;
            text-decoration: none;
          }

          a[href]:after {
            content: " (" attr(href) ")";
            font-size: 0.8em;
            color: #666;
          }

          table {
            border-collapse: collapse;
            width: 100%;
            margin: 12px 0;
          }

          table th, table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }

          table th {
            background: #f5f5f5;
            font-weight: bold;
          }
        }
      `;

      return res.status(200).json({
        css,
        message: 'Use window.print() to export. Include this CSS in your page for proper formatting.'
      });
    }

    // Server-side bulk PDF export (requires auth + rate limiting)
    if (action === 'exportBulk' && req.method === 'POST') {
      const user = await requireAuth(req);
      const { fileList, includeDiscussions = false } = req.body;

      if (!Array.isArray(fileList) || fileList.length === 0) {
        return res.status(400).json({ error: 'Missing or empty fileList' });
      }

      // Rate limit check: max 5 bulk exports per hour
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const recentExports = await query(
        `SELECT COUNT(*) as count FROM audit_log 
         WHERE user_id = $1 AND action = 'BULK_PDF_EXPORT' AND created_at > $2`,
        [user.id, oneHourAgo]
      );

      if (parseInt(recentExports.rows[0].count) >= 5) {
        return res.status(429).json({ error: 'Rate limit exceeded. Max 5 exports per hour.' });
      }

      // Log the export
      await query(
        `INSERT INTO audit_log (user_id, action, resource_type, created_at)
         VALUES ($1, 'BULK_PDF_EXPORT', 'pdf', NOW())`,
        [user.id]
      );

      // For now, return metadata for client-side PDF generation
      // In production, use a PDF library like pdfkit or puppeteer
      return res.status(200).json({
        jobId: `pdf-${Date.now()}`,
        files: fileList.length,
        includeDiscussions,
        message: 'Use client-side PDF generation (print-to-PDF) for best results with Mermaid and KaTeX'
      });
    }

    // Get PDF reference metadata
    if (action === 'getPdfReferences' && req.method === 'POST') {
      const { pdf_url } = req.body;

      if (!pdf_url) {
        return res.status(400).json({ error: 'Missing pdf_url' });
      }

      const result = await query(
        `SELECT DISTINCT page_number, description, COUNT(*) as ref_count
         FROM post_pdf_references
         WHERE pdf_url = $1
         GROUP BY page_number, description
         ORDER BY page_number ASC`,
        [pdf_url]
      );

      return res.status(200).json({ references: result.rows });
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('PDF export error:', error);

    if (error.message === 'Unauthorized') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return res.status(500).json({ error: error.message });
  }
}
