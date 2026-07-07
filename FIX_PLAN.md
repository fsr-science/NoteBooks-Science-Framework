# Implementation Fix Plan - Phase 1: Backend Setup

## Critical Issues to Fix

1. **ESM Module System** - Files use `import`/`export` but project doesn't declare ESM
2. **No Backend Server** - Project uses static file server (`serve`), needs Express
3. **Domain Suspension** - `primenotepad.rf.gd` unreachable; need alt deployment
4. **API Routes Not Wired** - Created API files not connected to HTTP server

---

## Step-by-Step Fix

### Step 1: Update package.json for ES Modules + Express

**Add**:
- `"type": "module"` - Enables ESM syntax
- `express` - Backend framework
- `cors` - Cross-origin requests
- `body-parser` - JSON parsing

**Change scripts**:
- `"dev"` - Start Express server instead of `serve`
- `"build"` - Bundle frontend if needed

### Step 2: Create Express Server (`server.js`)

**What it does**:
- Serve static files from `/public`
- Mount forum API at `/api/forum`
- Mount admin API at `/api/admin`
- Mount PR review API at `/api/pr-review`
- Mount markdown API at `/api/markdown`
- Mount PDF export API at `/api/pdf-export`
- Keep existing GitHub webhook at `/api/gh.js`

**Environment**:
- `NODE_ENV=development` locally (logs enabled)
- `NODE_ENV=production` on Vercel (optimized)

### Step 3: Convert API Files to Express Routes

**Current structure** (handler-only):
```js
export default async function handler(req, res) { ... }
```

**New structure** (Express compatible):
```js
export default function forumRouter(app) {
  app.post('/api/forum', async (req, res) => { ... })
}
```

**Note**: Only the entry point changes; business logic stays the same.

### Step 4: Fix Database Connection

**Current**: Each API file calls `query()` individually
**New**: Centralized pool in `lib/db.js` used by all routes
**Safety**: Query parameters properly escaped (already done)

### Step 5: Deploy Strategy

**Development**:
```bash
npm run dev  # Starts Express on localhost:3000
```

**Production** (Two options):

#### Option A: Vercel Functions (Recommended)
- Deploy frontend (`/public`) to GitHub Pages
- Deploy API to Vercel Serverless Functions
- Each API gets its own `/api/xxx` endpoint

#### Option B: Single Server
- Deploy entire app (frontend + API) to Render, Railway, or Fly.io
- Simpler but less scalable

#### Option C: Docker + AWS/GCP
- Containerize Express app
- Deploy to ECS, Cloud Run, or similar

### Step 6: Update Documentation

**Files to update**:
- `DEPLOYMENT.md` - New deployment process
- `QUICKSTART.md` - How to run server
- `README.md` - Architecture overview

---

## Execution Order

| Step | Task | Time | Blocker |
|------|------|------|---------|
| 1 | Update `package.json` | 5 min | None |
| 2 | Create `server.js` | 20 min | Step 1 |
| 3 | Convert API files to Express routes | 30 min | Step 2 |
| 4 | Test locally (`npm run dev`) | 10 min | Step 3 |
| 5 | Fix any import/connection errors | 15 min | Step 4 |
| 6 | Update deployment docs | 10 min | Step 5 |
| **Total** | | **~90 min** | |

---

## Validation Checklist

After fixes, verify:
- [ ] `npm run dev` starts server on port 3000
- [ ] `GET http://localhost:3000/` returns HTML
- [ ] `POST /api/forum` with `{"action":"listTopics"}` returns JSON
- [ ] `POST /api/admin/users` requires auth (returns 401 if no token)
- [ ] `POST /api/markdown` renders Markdown with callouts
- [ ] Database connection works (check logs)
- [ ] No uncaught module errors in console
- [ ] Forum guest session ID sets cookie
- [ ] All 404s are intentional (missing assets, not API errors)

---

## Domain & Deployment Notes

**Community Forum Access**:
- Current: `primenotepad.rf.gd` (suspended) ❌
- Option 1: Use Vercel preview URL (temp development)
- Option 2: Register new domain (production)
- Option 3: Use GitHub Pages + Vercel API (best for academic project)

**Security Note**: 
- Forum posts from guests require moderation (already in DB schema)
- All API endpoints validate input and use parameterized queries
- Session IDs are HttpOnly cookies (XSS safe)

---

## If Blocked

If any step fails:
1. Check console for import/syntax errors
2. Verify `DATABASE_URL` is set in `.env.development.local`
3. Ensure `node` version ≥ 18 (ES modules support)
4. Run `npm install` again if dependencies seem missing
5. Check `/vercel/share/.env.project` for Neon connection string
