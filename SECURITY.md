# Security Hardening Guide

## Authentication & Authorization

### Better Auth Configuration

- Email + password only (no OAuth in v1, add later if needed)
- Session tokens stored in HttpOnly, Secure, SameSite=Lax cookies
- Session expiration: 24 hours (configurable)
- Password hashing: bcrypt (Better Auth default, 12 rounds)

### Role-Based Access Control (RBAC)

Three roles implemented:

1. **User**: Can post in forums (if approved), read content
2. **Moderator**: Can approve/reject forum posts, manage content
3. **Admin**: Full system access, user management, audit log access

Role checks are enforced server-side in every protected endpoint.

## Input Validation

### Markdown Renderer

- All HTML escaped to prevent XSS
- Callout types whitelisted (note, warning, example, etc.)
- No script tags allowed in markdown output

### Database Queries

- **ALL queries use parameterized statements** to prevent SQL injection
- User input never directly concatenated into SQL
- Example safe pattern:
  ```javascript
  await query('SELECT * FROM users WHERE id = $1', [userId])
  ```

### File Path Validation

- Line reference file paths must exist in manifest
- Line numbers validated against file length
- PDF URLs validated against whitelist (GitHub Pages, Blob storage only)

## Rate Limiting

### Submission Rate Limits

- **5 open PRs maximum** per user
- **20 submissions per 24h** per user
- **Tracked by user ID** (requires authentication)
- Violations return 429 Too Many Requests

Enforced in `/api/submit-pr.js`:
```javascript
const userLimits = await query(
  'SELECT * FROM submission_rate_limits WHERE user_id = $1',
  [userId]
);
if (userLimits.rows[0].open_pr_count >= 5) throw new Error('Too many open PRs');
```

### Forum Rate Limits

- **10 posts/comments per hour** for guests (session-based)
- **100 posts per 24h** per guest session
- **Tracked by session ID** (HttpOnly cookie)
- Guest posts auto-flagged for moderator review

Enforced via Upstash Redis:
```javascript
const key = `session:${sessionId}:posts:24h`;
const count = await redis.incr(key);
if (count >= 100) return 429;
```

### Guest Post Moderation

- All guest forum posts: `is_approved = false` by default
- Moderators see approval queue at `/api/admin` with `getForumModerationQueue`
- Soft-delete policy: posts marked unapproved, not deleted (audit trail)

## Data Privacy

### Session ID Generation

- UUID v4 generated per guest session
- Stored in HttpOnly cookie, never exposed to JavaScript
- Expires after 1 year of inactivity
- Cannot be predicted or brute-forced

### Guest Anonymity

- Display name: `Guest-{first6CharsOfUUID}` (e.g., `Guest-a3f2c1`)
- No personal information collected beyond forum posts
- Forum posts can be deleted via moderation (soft-delete in audit log)

### User Data

- Passwords: hashed with bcrypt (Better Auth)
- Email: required for identification, not publicly displayed
- Profile: minimal (name, avatar optional)
- Audit log: tracks admin actions, not user behavior

## GitHub Integration

### GitHub App Security

- **Use GitHub App token, NOT user PAT**
  - App tokens expire after 1 hour (more secure)
  - Scoped to specific permissions
  - Tied to app installation, not personal account

- App permissions required:
  - `contents:read` (read files, branches)
  - `pull_requests:read` (list PRs, comments)
  - `pull_requests:write` (create/merge PRs, add comments)

- **Token handling**:
  - Never log token in plain text
  - Never commit to repository
  - Always use via environment variable
  - Rotate via GitHub App settings if compromised

### Branch Protection

- **`content` branch**: Protected, requires PR review before merge
- **`main` branch**: Unprotected (scaffolding/docs only)
- CODEOWNERS file: Optional, enforce per-subject reviewer approval

## Content Security

### Stale Base Detection

- When submitting PR, check if base branch is out of sync
- If stale: auto-rebase or require user rebase before merge
- Prevents accidental overwrites of concurrent changes

### Audit Trail

Every critical action logged to `audit_log`:
```sql
INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes, created_at)
VALUES (user_id, action, resource_type, resource_id, changes_json, NOW())
```

Tracked actions:
- User role changes
- Mirror creation/deletion
- Rate limit resets
- Forum post approval/rejection
- PR merges
- Bulk PDF exports

## CORS & API Security

### Allowed Origins

```
https://notebooks.fsr-science.org
https://*.vercel.app (for preview deployments)
```

### API Endpoints

- All POST endpoints require Content-Type: application/json
- All authentication-required endpoints check auth header or session cookie
- 404 responses don't leak information about resources

### Error Handling

- Errors returned with generic message to client
- Full error details logged server-side
- No stack traces exposed in production
- SQL errors never exposed directly

## Secrets Management

### Environment Variables

- Stored in Vercel project settings (encrypted)
- Not checked into Git
- Rotated annually as security best practice

**Critical secrets**:
- `DATABASE_URL`: Database connection string
- `BETTER_AUTH_SECRET`: Session signing key
- `GITHUB_APP_TOKEN`: GitHub App authentication
- `UPSTASH_REDIS_REST_TOKEN`: Redis API token
- `RESEND_API_KEY`: Email service token

### Rotation Procedure

1. Generate new secret (e.g., `openssl rand -base64 32`)
2. Update in Vercel project settings
3. Deploy new version
4. Wait for all instances to restart
5. Old sessions invalidated after timeout period

## Testing & Validation

### Security Tests

```bash
# Test SQL injection resistance
curl -X POST /api/forum -d '{"action":"getTopic","topicId":"1 OR 1=1"}'
# Should return proper error, not data dump

# Test unauthorized access
curl -X POST /api/admin -d '{"action":"listUsers"}'
# Should return 401 Unauthorized

# Test rate limiting
for i in {1..20}; do curl -X POST /api/forum -d '{"action":"createPost"}'; done
# Should return 429 Too Many Requests after limit
```

### Audit Checklist

- [ ] All queries use parameterized statements
- [ ] No passwords/tokens in logs
- [ ] Rate limits enforced per endpoint
- [ ] Role checks in all admin endpoints
- [ ] Guest posts require approval
- [ ] Session cookies are HttpOnly + Secure
- [ ] CORS headers whitelist only allowed origins
- [ ] Error messages don't leak internal info
- [ ] Audit log captures all sensitive actions
- [ ] File paths validated against whitelist

## Incident Response

### Suspected Token Leak

1. Rotate GitHub App token immediately in GitHub settings
2. Update DATABASE_URL if compromised
3. Check audit log for unauthorized access
4. Force all sessions to expire
5. Enable MFA for GitHub account

### Database Breach

1. Rotate DATABASE_URL
2. Neon provides point-in-time recovery
3. Review audit log for access patterns
4. Notify users if personal data accessed

### Spam/Abuse

1. Enable post approval for all users temporarily
2. Review audit log for patterns
3. Block user if necessary (set role to 'blocked')
4. Report to GitHub if PR spam via API

## Compliance

- **GDPR**: Users can request data export via email
- **COPPA**: No children's data (e.g., avoid collecting age)
- **Accessibility**: Forum posts must be text-accessible (no image-only content)

## Resources

- Better Auth docs: https://www.betterauth.dev
- Neon security: https://neon.tech/docs/security
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- GitHub App security: https://docs.github.com/en/apps/creating-github-apps/guides/template-github-app
