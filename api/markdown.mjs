// api/markdown.mjs — Render markdown with enhanced callouts
import { renderMarkdown } from '../lib/markdown-renderer.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { markdown } = req.body;

    if (!markdown || typeof markdown !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid markdown content' });
    }

    const html = renderMarkdown(markdown);

    return res.status(200).json({
      html,
      success: true
    });
  } catch (error) {
    console.error('Markdown rendering error:', error);
    return res.status(500).json({ error: error.message });
  }
}
