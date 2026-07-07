// api/markdown.mjs — Markdown rendering with callouts (Express Router)
import express from 'express';
import { renderMarkdown } from '../lib/markdown-renderer.js';

const router = express.Router();

// Render markdown to HTML
router.post('/render', (req, res) => {
  try {
    const { content, format = 'html' } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Missing content' });
    }

    const html = renderMarkdown(content);

    res.json({
      html,
      format,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[v0] Markdown render error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Parse and validate markdown
router.post('/validate', (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Missing content' });
    }

    // Check for common issues
    const issues = [];
    
    if (content.length > 1000000) {
      issues.push('Content exceeds 1MB limit');
    }

    // Check for unbalanced code blocks
    const codeBlockCount = (content.match(/```/g) || []).length;
    if (codeBlockCount % 2 !== 0) {
      issues.push('Unbalanced code blocks');
    }

    // Try rendering to catch other errors
    try {
      renderMarkdown(content);
    } catch (err) {
      issues.push(`Render error: ${err.message}`);
    }

    res.json({
      valid: issues.length === 0,
      issues,
      contentLength: content.length
    });
  } catch (error) {
    console.error('[v0] Markdown validate error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
