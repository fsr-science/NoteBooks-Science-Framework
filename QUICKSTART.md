# Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create `.env.local` (local dev only):
```
DATABASE_URL=postgresql://user:password@localhost/notebooks
BETTER_AUTH_SECRET=$(openssl rand -base64 32)
GITHUB_APP_TOKEN=ghu_xxxx...
GITHUB_REPO_OWNER=fsr-science
GITHUB_REPO_NAME=NoteBooks-Science-Framework
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx
RESEND_API_KEY=re_xxx
INITIAL_ADMIN_EMAIL=admin@fsr-science.org
```

### 3. Initialize Database
```bash
npm run migrate  # Applies schema (if script exists)
# OR manually apply schema from DEPLOYMENT.md
```

### 4. Create Admin User
```sql
INSERT INTO "user" (id, email, name, role, "emailVerified", "createdAt", "updatedAt")
VALUES ('admin-001', 'admin@fsr-science.org', 'Admin', 'admin', true, NOW(), NOW());
```

### 5. Start Development Server
```bash
npm run dev
# Server runs on http://localhost:3000
```

## First Actions

### 1. Add a Content Mirror
```bash
curl -X POST http://localhost:3000/api/mirrors \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <admin_token>" \
  -d '{
    "action": "createMirror",
    "name": "Physics Content",
    "description": "Physics course materials",
    "github_repo": "fsr-science/physics-notebooks",
    "github_branch": "content",
    "subjects": ["physics", "mechanics"]
  }'
```

### 2. Create a Forum Topic
```bash
curl -X POST http://localhost:3000/api/forum \
  -H "Content-Type: application/json" \
  -d '{
    "action": "createTopic",
    "title": "Newton's Laws Discussion",
    "description": "Share your understanding of Newton's three laws",
    "subject": "physics",
    "chapter": "mechanics"
  }'
```

### 3. Post in Forum (Guest)
```bash
curl -X POST http://localhost:3000/api/forum \
  -H "Content-Type: application/json" \
  -d '{
    "action": "createPost",
    "topicId": "<topic_uuid>",
    "content": "I have a question about force..."
  }'
```

### 4. Render Markdown with Callouts
```bash
curl -X POST http://localhost:3000/api/markdown \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# Topic\n\n> [!note] Remember\n> This is important\n\n> [!warning] Be careful\n> Watch out for this"
  }'
```

## Common Tasks

### View All Forum Topics
```bash
curl http://localhost:3000/api/forum \
  -H "Content-Type: application/json" \
  -d '{"action":"listTopics"}'
```

### Approve Guest Posts (Admin)
```bash
curl -X POST http://localhost:3000/api/admin \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <admin_token>" \
  -d '{"action":"getForumModerationQueue"}'
```

Then approve:
```bash
curl -X POST http://localhost:3000/api/admin \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <admin_token>" \
  -d '{"action":"approveForumPost","postId":"<post_uuid>"}'
```

### Export PDF
```bash
curl -X POST http://localhost:3000/api/pdf-export \
  -H "Content-Type: application/json" \
  -d '{"action":"getPrintStyles"}'
```

## Testing APIs

### Using Postman
1. Import collection: (Create from curl examples above)
2. Set environment: DATABASE_URL, tokens, etc.
3. Run requests

### Using VS Code REST Client
Create `test.http`:
```http
### List topics
POST http://localhost:3000/api/forum
Content-Type: application/json

{
  "action": "listTopics"
}

### Create topic
POST http://localhost:3000/api/forum
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
  "action": "createTopic",
  "title": "New Topic",
  "subject": "physics"
}
```

Install "REST Client" extension and click "Send Request"

## Debugging

### Check Database Connection
```bash
psql $DATABASE_URL -c "SELECT COUNT(*) FROM \"user\";"
```

### View Logs
```bash
npm run logs  # If configured
# OR check Vercel dashboard → Functions → Logs
```

### Test Auth Middleware
```bash
# Should fail (no auth)
curl http://localhost:3000/api/admin -d '{"action":"listUsers"}'

# Should work (with token)
curl http://localhost:3000/api/admin \
  -H "Authorization: Bearer <token>" \
  -d '{"action":"listUsers"}'
```

### View Rate Limits
```bash
curl http://localhost:3000/api/admin \
  -H "Authorization: Bearer <admin_token>" \
  -d '{"action":"getRateLimitStats"}'
```

## File Structure

```
/
├── api/                      # API endpoints
│   ├── forum.mjs            # Forum CRUD
│   ├── admin.mjs            # Admin panel
│   ├── mirrors.mjs          # Content sources
│   ├── pr-review.mjs        # PR management
│   ├── markdown.mjs         # Markdown rendering
│   ├── pdf-export.mjs       # PDF export
│   └── auth.mjs             # Better Auth handler
├── lib/                      # Shared libraries
│   ├── db.js                # Database connection
│   ├── auth-middleware.js   # Auth helpers
│   └── markdown-renderer.js # Markdown parser
├── public/                   # Static files
├── bin/                      # Server entry points
├── package.json
├── DEPLOYMENT.md            # Deployment guide
├── SECURITY.md              # Security details
├── TESTING.md               # Testing guide
├── IMPLEMENTATION.md        # Implementation summary
└── QUICKSTART.md           # This file
```

## Troubleshooting

### "Cannot find module 'pg'"
```bash
npm install pg
```

### "DATABASE_URL is not set"
```bash
# Check .env.local or set in Vercel
export DATABASE_URL="postgresql://..."
```

### "BETTER_AUTH_SECRET is required"
```bash
openssl rand -base64 32  # Generate
# Set in .env.local or Vercel env vars
```

### "Port 3000 already in use"
```bash
# Find process using port
lsof -i :3000
# Kill it
kill -9 <PID>
```

### "CORS error" when calling API
- Check API endpoint URL is correct
- Ensure Content-Type: application/json header
- Check CORS headers in response

### "Unauthorized" on protected endpoints
- Verify Authorization header format: `Bearer <token>`
- Check token is valid JWT
- Ensure user role has permission for action

## Next Steps

1. Read `DEPLOYMENT.md` for production setup
2. Review `SECURITY.md` for security best practices
3. Check `TESTING.md` for test procedures
4. Run tests: `npm test`
5. Deploy to Vercel: `vercel deploy`

## Resources

- Better Auth Docs: https://www.betterauth.dev
- Neon Docs: https://neon.tech/docs
- PostgreSQL: https://postgresql.org/docs
- Markdown-it: https://github.com/markdown-it/markdown-it
- Vercel Functions: https://vercel.com/docs/functions

## Support

- Check error logs in Vercel dashboard
- Review SECURITY.md for common issues
- Check TESTING.md for validation procedures
- Review code comments in api/*.mjs files
