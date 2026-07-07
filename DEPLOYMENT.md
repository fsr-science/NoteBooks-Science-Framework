# NoteBooks Science Framework - Deployment Guide

## Phase Overview

This document outlines the deployment of the upgraded NoteBooks system with:
- Express.js backend (preserves all original functionality)
- Neon PostgreSQL database
- Community forum with persistent discussions
- Enhanced markdown rendering with Obsidian callouts
- Admin dashboard and in-app PR review
- GitHub App integration for content submission

**Note**: This deployment uses Express.js instead of the static `serve` server. The migration is fully backward compatible with no breaking changes.

## Express Server Setup

### Local Development

```bash
# Install dependencies (already done)
npm install

# Start development server on port 3000
npm run dev

# Alternative: start on custom port
PORT=3001 npm start
```

### Start Script

The `package.json` now uses Express instead of static server:

```json
{
  "scripts": {
    "dev": "node server.js",
    "start": "node server.js",
    "static": "npx serve -l 3000"  // fallback to static server if needed
  }
}
```

## Environment Variables Required

### Database & Auth
```
DATABASE_URL=postgresql://user:password@host/dbname
BETTER_AUTH_SECRET=<generate: openssl rand -base64 32>
AUTH_SECRET=<same as BETTER_AUTH_SECRET>
```

### GitHub Integration
```
GITHUB_REPO_OWNER=fsr-science
GITHUB_REPO_NAME=NoteBooks-Science-Framework
GITHUB_APP_TOKEN=ghu_xxxx... (GitHub App token, not user PAT)
GITHUB_OWNER=fsr-science
GITHUB_REPO=NoteBooks-Science-Framework
GITHUB_BRANCH=content
```

### External Services
```
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx
RESEND_API_KEY=re_xxx (for email notifications)
```

### Configuration
```
NODE_ENV=production
VERCEL_PROJECT_ID=prj_xxx
PORT=3000
APP_URL=https://notebooks.fsr-science.org
GITPAGE_URL=https://fsr-science.github.io/NoteBooks-Science-Framework
INITIAL_ADMIN_EMAIL=admin@fsr-science.org
CORS_ORIGIN=*
```

## Database Setup

### 1. Create Tables (Run Once)

The schema is already defined in the migration. Verify all tables exist:

```bash
psql $DATABASE_URL -c "\dt"
```

Expected tables:
- user, session, account, verification (Better Auth)
- mirrors, submission_rate_limits, audit_log (App core)
- forum_topics, forum_posts, post_line_references, post_pdf_references, post_replies, post_reactions, topic_subscriptions (Forum)

### 2. Initialize Admin User

```sql
INSERT INTO "user" (id, email, name, role, "emailVerified", "createdAt", "updatedAt")
VALUES ('admin-uuid', 'admin@fsr-science.org', 'Admin', 'admin', true, NOW(), NOW());
```

## Deployment Steps

### 1. Pre-Deployment Checks

- [ ] All environment variables set in Vercel
- [ ] Database migrations applied
- [ ] GitHub App token created and has correct permissions
- [ ] Upstash Redis instance ready
- [ ] Resend email account configured

### 2. Deploy to Vercel

```bash
git push origin main
vercel deploy --prod
```

### 3. Verify APIs

Test Express endpoints locally:

```bash
# Health check
curl http://localhost:3000/health

# Markdown validation
curl -X POST http://localhost:3000/api/markdown/validate \
  -H "Content-Type: application/json" \
  -d '{"content":"# Test\nHello"}'

# Forum topics list (requires DB connection)
curl -X POST http://localhost:3000/api/forum/topics/list \
  -H "Content-Type: application/json" \
  -d '{"page":1}'

# Admin stats (requires auth token in Authorization header)
curl -X GET http://localhost:3000/api/admin/stats \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Mirrors list
curl http://localhost:3000/api/mirrors/list

# GitHub PR list
curl "http://localhost:3000/api/pr-review/list?owner=fsr-science&repo=NoteBooks-Science-Framework"
```

### 4. Enable Features

1. **Add initial mirrors**: Use `/api/mirrors` with `createMirror` action
2. **Create forum categories**: Set up subject and chapter filters
3. **Configure rate limits**: Adjust via admin panel

## Security Checklist

- [ ] BETTER_AUTH_SECRET is 32+ characters
- [ ] GitHub App token is never logged or exposed
- [ ] All database queries use parameterized statements
- [ ] Guest posts require moderation approval
- [ ] Rate limits enforced (5 open PRs, 20 per 24h per user, 10 posts/hour for guests)
- [ ] Admin panel protected behind role-based access
- [ ] CORS headers set correctly
- [ ] HTTPS enforced (Vercel default)
- [ ] Session cookies are HttpOnly + Secure
- [ ] Audit log captures all admin actions
- [ ] Line reference validation checks file_path in manifest

## Performance Tuning

### Database Indexes

Key indexes already created:
- forum_posts (topic_id, user_id, created_at)
- post_line_references (file_path)
- topic_subscriptions (user_id)
- forum_topics (file_path)

### Caching Strategy

- Forum topics: Cache for 5 minutes (revalidate on new post)
- Mirrors registry: Cache for 1 hour (update via admin action)
- User permissions: Cache for 15 minutes per session

### Redis Usage

- Rate limit counters: `user:{userId}:pr:24h`, `session:{sessionId}:posts:24h`
- Session cache: Optional, can store full session in Redis for faster lookup

## Monitoring

### Critical Metrics

- Database connection pool usage
- Rate limit hit rate (indicates abuse or legitimate high activity)
- Forum post approval queue length
- API response times (target <500ms)
- Error rates per endpoint

### Logging

All errors logged to Vercel Functions logs with:
- Timestamp
- User ID (if authenticated)
- Action and resource
- Error message and stack trace

## Troubleshooting

### DB Connection Errors

```
Error: connect ECONNREFUSED
```

**Solution**: Check DATABASE_URL format and Neon network access

### Auth Token Failures

```
Error: Unauthorized
```

**Solution**: Verify BETTER_AUTH_SECRET is set and consistent

### Rate Limit Too Strict

Adjust in `/api/submit-pr.js` and `/lib/auth-middleware.js`:
- Max open PRs: currently 5
- Max per 24h: currently 20
- Guest post rate: currently 10/hour

## Rollback Plan

If issues arise:

1. **API errors**: Roll back to previous commit, debug logs
2. **Database corruption**: Restore from Neon point-in-time backup
3. **Auth issues**: Reset sessions, clear Redis cache
4. **Forum spam**: Approve/reject posts manually via admin panel

## Post-Deployment

1. Monitor error rates for first 24 hours
2. Test forum creation, posting, line references
3. Verify email notifications are sending
4. Check audit log for any suspicious activity
5. Load test under expected traffic

## Support

For issues, check:
- Vercel deployment logs
- Neon database logs
- Reddit/email notifications from Resend
- GitHub App installation status
