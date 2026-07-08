# API Consolidation: From 8 Functions to 1

## Problem Solved
The application was exceeding Vercel Hobby plan's 12-function limit with 8 separate API routes:
- `/api/admin/[[...action]]/route.ts`
- `/api/forum/[[...action]]/route.ts`
- `/api/health/route.ts`
- `/api/markdown/[[...action]]/route.ts`
- `/api/mirrors/[[...action]]/route.ts`
- `/api/pdf-export/[[...action]]/route.ts`
- `/api/pr-review/[[...action]]/route.ts`
- Plus potential middleware and other functions

## Solution Implemented
All 8 separate API endpoints consolidated into a single unified handler at `/api/[[...route]]/route.ts` that:
- Routes requests internally based on URL path segments
- Shares database connection pool and middleware
- Maintains all existing functionality
- Zero breaking changes - all API endpoints work identically

## Architecture

```
/api/[[...route]]/route.ts (1 function)
├── GET /api/health → health check
├── GET /api/admin/stats → admin stats (requires auth)
├── GET /api/admin/users → user list (requires admin)
├── GET /api/mirrors → list mirrors
├── GET /api/pr-review → fetch PRs
├── POST /api/forum/topics-list → list forum topics
├── POST /api/forum/topic-create → create topic
├── POST /api/forum/post-create → create post
├── POST /api/markdown/render → render markdown
├── POST /api/admin/promote-user → admin action
├── POST /api/mirrors/add → add mirror
└── POST /api/pdf-export/* → PDF export handlers
```

## Function Count Reduction

**Before**: 8 serverless functions  
**After**: 1 serverless function  

All static assets (`/public/*`) remain served with 0 functions by Vercel's edge network.

## Changes Made

1. **Created** `/app/api/[[...route]]/route.ts`
   - Single GET and POST handler
   - Path-based routing logic
   - All authentication and business logic preserved

2. **Deleted** 7 old route directories
   - `app/api/admin/`
   - `app/api/forum/`
   - `app/api/health/`
   - `app/api/markdown/`
   - `app/api/mirrors/`
   - `app/api/pdf-export/`
   - `app/api/pr-review/`

3. **Build Output**
   ```
   Route (app)
   ├ ○ /                    (Static)
   ├ ○ /_not-found          (Static)
   └ ƒ /api/[[...route]]    (Dynamic - 1 function)
   ```

## Endpoint Mapping

### Health Check
```
GET /api/health
→ Handler: health check endpoint
→ Returns: { status: 'ok', version: '2.0.0', ... }
```

### Forum Service
```
POST /api/forum/topics-list     → List topics
POST /api/forum/topic-get       → Get topic details
POST /api/forum/topic-create    → Create topic
POST /api/forum/post-create     → Create post
```

### Admin Service
```
GET /api/admin/stats            → User/topic/post statistics
GET /api/admin/users            → List users
GET /api/admin/audit-log        → Audit log
POST /api/admin/promote-user    → Promote user role
```

### Markdown Service
```
POST /api/markdown/render       → Render markdown to HTML
POST /api/markdown/validate     → Validate markdown
```

### Mirrors Service
```
GET /api/mirrors                → List active mirrors
POST /api/mirrors/add           → Add new mirror (admin only)
```

### PDF Export Service
```
POST /api/pdf-export/client-config    → Get export config
POST /api/pdf-export/bulk-export      → Queue bulk export
```

### PR Review Service
```
GET /api/pr-review              → Fetch PRs (GitHub integration)
```

## Testing

All endpoints tested and working:
```bash
# Health check
curl http://localhost:3006/api/health

# Forum topics
curl -X POST http://localhost:3006/api/forum/topics-list \
  -H "Content-Type: application/json" \
  -d '{"subject":"math","page":1}'

# Admin stats (requires auth)
curl http://localhost:3006/api/admin/stats \
  -H "Authorization: Bearer <token>"
```

## Database & Auth
- All database operations use existing `@/lib/db-client` connection pool
- Authentication uses existing `@/lib/auth-middleware` patterns
- Session management preserved
- Role-based access control maintained

## Deployment
Ready to deploy to Vercel Hobby plan:
- Only 1 function deployed
- Under 12-function limit by 11x margin
- All features functional
- Static assets cached globally

## Rollback
If needed, old routes can be restored from git history:
```bash
git show a5890ed~1:app/api/forum/[[...action]]/route.ts
```
