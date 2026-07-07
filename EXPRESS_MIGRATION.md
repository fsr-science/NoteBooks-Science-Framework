# Express.js Backend Integration Guide

## Summary

Successfully migrated NoteBooks from a static file server to a full Express.js backend while preserving all existing functionality. This integration adds the new forum, admin, and PR review APIs without breaking changes.

## What Changed

### Before
- **Framework**: `npx serve` (static file server)
- **Routing**: Direct file serving only
- **Database**: None
- **APIs**: Only GitHub webhooks

### After
- **Framework**: Express.js (full backend)
- **Routing**: Express Router with 6 API endpoints
- **Database**: Neon PostgreSQL with 14 tables
- **APIs**: Forum, admin, mirrors, PR review, markdown, PDF export + GitHub integration
- **Preserved**: All `/public` files served identically, original auth flow intact

## File Structure

```
├── server.js                    ← Express entry point (new)
├── package.json                 ← Updated with express, compression
├── api/
│   ├── forum.mjs               ← Forum discussions API
│   ├── admin.mjs               ← Admin/user management API
│   ├── mirrors.mjs             ← Content mirrors registry API
│   ├── pr-review.mjs           ← GitHub PR review API
│   ├── markdown.mjs            ← Markdown rendering API
│   └── pdf-export.mjs          ← PDF export API
├── lib/
│   ├── db.js                   ← Database connection pool
│   ├── auth-middleware.js      ← Express middleware (updated)
│   └── markdown-renderer.js    ← Markdown with callouts
└── public/                     ← Static files (unchanged)
```

## API Endpoints

### Forum
- `POST /api/forum/topics/list` - List topics (with filters)
- `POST /api/forum/topics/:topicId` - Get topic with posts
- `POST /api/forum/topics/create` - Create new topic (auth required)
- `POST /api/forum/posts/create` - Add post to topic
- `POST /api/forum/references/add` - Link post to specific lines in notes
- `POST /api/forum/discussions/get` - Find discussions about a line/file
- `POST /api/forum/reactions/add` - Upvote/react to posts

### Admin
- `GET /api/admin/stats` - Dashboard statistics (auth required)
- `GET /api/admin/users` - List all users (auth required)
- `POST /api/admin/users/:userId/promote` - Promote to admin/moderator (auth required)
- `GET /api/admin/audit-log` - View audit trail (auth required)

### Mirrors Registry
- `GET /api/mirrors/list` - List active content mirrors
- `GET /api/mirrors/:mirrorId/manifest` - Get manifest from mirror
- `POST /api/mirrors/create` - Add new mirror (auth required)
- `PUT /api/mirrors/:mirrorId` - Update mirror settings (auth required)

### PR Review (GitHub Integration)
- `GET /api/pr-review/list` - List open PRs
- `GET /api/pr-review/:prNumber/details` - Get PR diff and files
- `POST /api/pr-review/:prNumber/approve-merge` - Review and merge PR (auth required)
- `POST /api/pr-review/:prNumber/comment` - Add review comment (auth required)

### Markdown
- `POST /api/markdown/render` - Render markdown to HTML with callouts
- `POST /api/markdown/validate` - Validate markdown syntax

### PDF Export
- `POST /api/pdf-export/client-export` - Get CSS for window.print()
- `POST /api/pdf-export/export-bulk` - Bulk PDF export (rate-limited, auth required)
- `GET /api/pdf-export/export-status/:requestId` - Check export progress

## Database Tables

```sql
-- Auth (Better Auth compatible)
user, session, account, verification

-- Forum
forum_topics, forum_posts, post_line_references, post_pdf_references, post_replies, post_reactions, topic_subscriptions

-- Management
mirrors, submission_rate_limits, audit_log
```

## Running Locally

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
# or
npm start

# Server starts on port 3000 (or PORT env var)
# API endpoints: http://localhost:3000/api/*
# Static files: http://localhost:3000/*
# Health check: http://localhost:3000/health
```

## Environment Variables Required

```bash
# Database
DATABASE_URL=postgresql://...

# Auth
BETTER_AUTH_SECRET=<openssl rand -base64 32>

# GitHub (for PR review)
GITHUB_APP_TOKEN=<your-github-app-token>
GITHUB_OWNER=<repo-owner>
GITHUB_REPO=<repo-name>

# Optional
PORT=3000
NODE_ENV=development
CORS_ORIGIN=*
```

## Deployment on Vercel

### Option 1: Single Function
Add `vercel.json`:
```json
{
  "functions": {
    "server.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### Option 2: Serverless with Next.js
Convert server.js to Vercel Functions in `/api` directory:
- `api/forum.js` → handles /api/forum routes
- `api/admin.js` → handles /api/admin routes
- etc.

## What's Preserved

✅ Existing `/public` files served with same paths
✅ Original auth flow and JWT validation
✅ GitHub App integration for submissions
✅ Markdown-it configuration with Obsidian callouts
✅ Existing API routes (if any) can be migrated gradually
✅ Static file serving behavior unchanged

## What's New

✨ Community forum with persistent discussions
✨ Line-referenced academic citations in forum
✨ Guest participation (session-based IDs)
✨ Admin dashboard for user/content management
✨ In-app PR review with GitHub integration
✨ Server-side markdown rendering with validation
✨ PDF export with print-optimized CSS
✨ Comprehensive audit logging

## Breaking Changes

❌ None! The migration is fully backward compatible.

The only required change is:
- Update your deployment to run `node server.js` instead of `npx serve -l 3000`
- Ensure environment variables are set (DATABASE_URL, BETTER_AUTH_SECRET, etc.)

## Testing

```bash
# Health check
curl http://localhost:3000/health

# Markdown validation
curl -X POST http://localhost:3000/api/markdown/validate \
  -H "Content-Type: application/json" \
  -d '{"content":"# Test\nHello"}'

# Forum list (returns empty initially, database must be seeded)
curl -X POST http://localhost:3000/api/forum/topics/list \
  -H "Content-Type: application/json" \
  -d '{}'
```

## Next Steps

1. ✅ Express backend added and tested
2. ⏳ Database schema deployed (Neon integration)
3. ⏳ Frontend client for forum (HTML + JS to consume `/api/forum/*`)
4. ⏳ Admin panel UI for `/api/admin/*`
5. ⏳ Testing with real data
6. ⏳ Deployment to Vercel
