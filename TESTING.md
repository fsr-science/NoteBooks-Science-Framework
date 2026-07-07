# Testing Guide

## Unit & Integration Tests

### Test Setup

```bash
npm install --save-dev jest supertest
npm test
```

### Forum API Tests

```javascript
// tests/forum.test.js
const request = require('supertest');

describe('Forum API', () => {
  test('listTopics returns empty array initially', async () => {
    const res = await request(app)
      .post('/api/forum')
      .send({ action: 'listTopics' });
    expect(res.status).toBe(200);
    expect(res.body.topics).toEqual([]);
  });

  test('createTopic requires authentication', async () => {
    const res = await request(app)
      .post('/api/forum')
      .send({ action: 'createTopic', title: 'Test' });
    expect(res.status).toBe(401);
  });

  test('guest can create post without login', async () => {
    const res = await request(app)
      .post('/api/forum')
      .send({
        action: 'createPost',
        topicId: 'topic-1',
        content: 'Hello'
      });
    expect(res.status).toBe(201);
    expect(res.body.post.requiresApproval).toBe(true); // Guest posts need approval
  });
});
```

### Authentication Tests

```javascript
// tests/auth.test.js
describe('Authentication', () => {
  test('requireAuth rejects unauthenticated requests', async () => {
    const res = await request(app)
      .post('/api/admin')
      .send({ action: 'listUsers' });
    expect(res.status).toBe(401);
  });

  test('requireRole rejects insufficient permissions', async () => {
    // Login as regular user
    const res = await request(app)
      .post('/api/admin')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ action: 'listUsers' });
    expect(res.status).toBe(403);
  });

  test('admin user can access all endpoints', async () => {
    const res = await request(app)
      .post('/api/admin')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ action: 'listUsers' });
    expect(res.status).toBe(200);
  });
});
```

### Markdown Renderer Tests

```javascript
// tests/markdown.test.js
const { renderMarkdown } = require('../lib/markdown-renderer');

describe('Markdown Renderer', () => {
  test('renders basic markdown', () => {
    const md = '# Hello\n\nWorld';
    const html = renderMarkdown(md);
    expect(html).toContain('<h1>');
    expect(html).toContain('Hello');
  });

  test('renders Obsidian callouts', () => {
    const md = '> [!note] Important\n> Remember this';
    const html = renderMarkdown(md);
    expect(html).toContain('callout-note');
    expect(html).toContain('📝');
    expect(html).toContain('Important');
  });

  test('escapes XSS attempts', () => {
    const md = '<script>alert("xss")</script>';
    const html = renderMarkdown(md);
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });
});
```

### Database Tests

```javascript
// tests/database.test.js
const { query } = require('../lib/db');

describe('Database', () => {
  test('parameterized queries prevent SQL injection', async () => {
    const userId = "1'; DROP TABLE users; --";
    const result = await query('SELECT * FROM "user" WHERE id = $1', [userId]);
    // Should return empty result, not error
    expect(result.rows).toEqual([]);
  });

  test('creates user without errors', async () => {
    const res = await query(
      'INSERT INTO "user" (id, email, role, "createdAt", "updatedAt") VALUES ($1, $2, $3, NOW(), NOW())',
      ['test-uuid', 'test@example.com', 'user']
    );
    expect(res.rowCount).toBe(1);
  });
});
```

## Manual Testing Checklist

### Forum Features

- [ ] **Create Topic**: Authenticated user creates forum topic successfully
- [ ] **List Topics**: Topics appear in list, sorted by newest first
- [ ] **Search Topics**: Filter by subject/chapter returns correct results
- [ ] **Create Post**: User post appears in topic, requires no approval
- [ ] **Guest Post**: Unauth user can post, post shows `Guest-xxx` name
- [ ] **Line Reference**: Can reference specific line in note from forum
- [ ] **PDF Reference**: Can add PDF page reference to post
- [ ] **Reactions**: Upvote/helpful button works, count increments
- [ ] **Threaded Replies**: Can reply to post, reply appears indented
- [ ] **Subscription**: User can subscribe to topic, receives email on new post

### Admin Features

- [ ] **List Users**: Admin can see all users with roles
- [ ] **Update User Role**: Can promote user to moderator
- [ ] **View Audit Log**: All actions appear with timestamp and user
- [ ] **Moderation Queue**: Unapproved posts appear in queue
- [ ] **Approve Post**: Can approve guest post, it becomes visible
- [ ] **Reject Post**: Can reject/delete post, appears in audit log
- [ ] **Dashboard Stats**: Shows total users, topics, posts, pending

### Markdown Features

- [ ] **Note Callout**: `> [!note] Title` renders with blue left border
- [ ] **Warning Callout**: `> [!warning] Title` renders with yellow border
- [ ] **Example Callout**: `> [!example] Title` renders with purple border
- [ ] **Code Blocks**: ` ```js ... ``` ` syntax highlights properly
- [ ] **Tables**: Markdown tables render correctly
- [ ] **Links**: External links are clickable and include href in print
- [ ] **Images**: Images render and scale properly in print

### Security

- [ ] **SQL Injection**: Send `'; DROP TABLE--` as input, no error
- [ ] **XSS**: Try `<script>alert('xss')</script>`, appears as text
- [ ] **Unauthorized Access**: Try accessing `/api/admin` without auth token
- [ ] **Rate Limit**: Submit 21 PRs in 24h, 21st gets 429 error
- [ ] **Guest Rate Limit**: Post 11 messages in 1 hour, 11th gets rate-limited
- [ ] **Session Expiry**: Close browser, session cookie still present (HttpOnly)
- [ ] **CSRF**: Try POST without proper CSRF token (if implemented)

### Performance

- [ ] **API Response**: `/api/forum?action=listTopics` responds < 500ms
- [ ] **Markdown Render**: `/api/markdown` with 10KB markdown responds < 1s
- [ ] **Database Query**: 1000-row forum topic loads in < 200ms
- [ ] **Memory**: No memory leaks after 1000+ requests

### Integration

- [ ] **GitHub PR Creation**: Can create PR from web UI
- [ ] **GitHub PR Review**: Comments appear in GitHub interface
- [ ] **GitHub PR Merge**: Can merge from web UI via `/api/pr-review`
- [ ] **Email Notifications**: Receive notification on new post (if subscribed)
- [ ] **Mirrors Registry**: `/api/mirrors?action=getMirrorsRegistry` returns JSON

### Deployment

- [ ] **Environment Variables**: All required vars present
- [ ] **Database Connection**: Neon connects without errors
- [ ] **Redis Connection**: Upstash Redis reachable for rate limits
- [ ] **GitHub App**: Token is valid and has correct permissions
- [ ] **HTTPS**: All endpoints respond on HTTPS only
- [ ] **CORS**: Origin correctly restricted

## Load Testing

### Using Apache Bench

```bash
# 100 concurrent requests to list topics
ab -n 1000 -c 100 https://your-domain/api/forum \
  -H "Content-Type: application/json" \
  -p '{"action":"listTopics"}'

# Expected: < 5% error rate, avg response < 1s
```

### Using K6

```javascript
// load-test.js
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  let res = http.post('https://your-domain/api/forum', JSON.stringify({
    action: 'listTopics'
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}
```

Run: `k6 run load-test.js`

## Regression Testing

Before each release, verify:

1. **Database**: All migrations applied successfully
2. **APIs**: All endpoints respond correctly
3. **Auth**: Login/session flows work
4. **Forum**: Create topic/post/reaction flow works
5. **Admin**: User/role/audit management works
6. **Markdown**: Callouts render with correct colors
7. **Security**: No SQL injection, XSS, CSRF vulnerabilities
8. **Performance**: P95 response time < 1s

## Continuous Integration (CI)

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_DB: notebooks
          POSTGRES_PASSWORD: password
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm ci
      - run: npm test
      - run: npm run lint
```

## User Acceptance Testing (UAT)

### Script 1: Forum Discussion Flow

1. User A creates topic "Help with Physics Chapter 3"
2. User B views topic, clicks "Reference line 42"
3. User B posts question with line reference
4. User A replies with explanation
5. Both users upvote helpful replies
6. Verify notifications sent to subscribers

### Script 2: Content Submission

1. Contributor uploads PDF with changes
2. System creates PR automatically
3. Reviewer views in-app diff viewer
4. Reviewer comments on specific lines
5. Contributor pushes fix
6. Reviewer approves and merges
7. GitHub Pages updates with new content

### Script 3: Admin Operations

1. Admin views dashboard (total users/posts/topics)
2. Admin reviews moderation queue (unapproved posts)
3. Admin approves one post, rejects spam
4. Admin promotes user to moderator
5. Verify audit log shows all actions

## Bug Reporting Template

```
**Title**: [Component] Brief description

**Steps to Reproduce**:
1. ...
2. ...
3. ...

**Expected Behavior**: 
...

**Actual Behavior**:
...

**Environment**:
- Browser: Chrome 120
- URL: https://...
- Authenticated: Yes/No

**Logs**:
(Paste error from console or server logs)
```

## Acceptance Criteria

All the following must pass before launch:

- [ ] 100% of security checklist items verified
- [ ] 95%+ of manual testing checklist items pass
- [ ] Zero critical bugs, max 2 minor bugs
- [ ] Load test: < 5% error rate at 100 concurrent users
- [ ] Regression test suite passes on staging
- [ ] UAT scripts all pass
- [ ] Accessibility audit: WCAG AA compliance
- [ ] Performance: Lighthouse score > 80
