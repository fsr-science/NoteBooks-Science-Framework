import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Import API routers
import forumRouter from './api/forum.mjs';
import adminRouter from './api/admin.mjs';
import mirrorsRouter from './api/mirrors.mjs';
import prReviewRouter from './api/pr-review.mjs';
import markdownRouter from './api/markdown.mjs';
import pdfExportRouter from './api/pdf-export.mjs';

dotenv.config({ path: '.env.development.local' });

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// CORS headers for API endpoints
app.use('/api/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// API Routes
app.use('/api/forum', forumRouter);
app.use('/api/admin', adminRouter);
app.use('/api/mirrors', mirrorsRouter);
app.use('/api/pr-review', prReviewRouter);
app.use('/api/markdown', markdownRouter);
app.use('/api/pdf-export', pdfExportRouter);

// Preserve existing /api routes (GitHub app webhook, submit-pr, etc.)
// Import existing handlers if they're CommonJS or wrap them
app.use('/api/gh', async (req, res) => {
  try {
    // This will be handled by existing code or migrated to Express
    res.status(200).json({ message: 'GitHub webhook endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler for API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Fallback to index.html for SPA routing (if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) {
      res.status(404).json({ error: 'Not found' });
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[v0] Server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`[v0] NoteBooks server running on port ${PORT}`);
  console.log(`[v0] API endpoints: /api/forum, /api/admin, /api/mirrors, /api/pr-review, /api/markdown, /api/pdf-export`);
  console.log(`[v0] Static files: ${path.join(__dirname, 'public')}`);
});

export default app;
