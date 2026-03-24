/**
 * obsidian-markdown-it.js
 * ─────────────────────────────────────────────────────────────────────────────
 * A markdown-it compatibility plugin that adds full support for
 * Obsidian-specific markdown syntax on top of stock markdown-it.
 *
 * USAGE:
 *   import MarkdownIt from 'markdown-it';
 *   import obsidianPlugin from './obsidian-markdown-it.js';
 *
 *   const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
 *   md.use(obsidianPlugin, {
 *     resolveWikilink : (target, alias) => `/notes/${target}`,
 *     resolveEmbed    : (target, type)  => `/assets/${target}`,
 *     calloutIcons    : {},             // override per-type icons
 *     enableMath      : true,           // $inline$ and $$block$$
 *     enableTags      : true,           // #tag
 *     enableComments  : true,           // %% comment %%
 *     enableHighlight : true,           // ==highlight==
 *     enableMermaid   : true,           // ```mermaid fence
 *   });
 *
 *   // Pre-process frontmatter separately (see `parseFrontmatter` export)
 *   const { content, frontmatter } = parseFrontmatter(raw);
 *   const html = md.render(content);
 *
 * COVERED SYNTAX:
 *   ✅ Wikilinks              [[Page]]  [[Page|Alias]]  [[Page#Heading]]
 *   ✅ Wikilink block refs    [[Page#^blockid]]
 *   ✅ File embeds            ![[image.png]]  ![[audio.mp3]]  ![[video.mp4]]
 *                             ![[file.pdf]]   ![[note.md]]
 *   ✅ Embed with dimensions  ![[image.png|300]]  ![[image.png|300x200]]
 *   ✅ Callouts               > [!NOTE]  > [!WARNING]-  > [!TIP]+
 *   ✅ Foldable callouts      - suffix collapses, + suffix expands
 *   ✅ Nested callouts        callouts within callouts
 *   ✅ Block IDs              paragraph ending with ^blockid
 *   ✅ Tags                   #tag  #nested/tag
 *   ✅ Highlights             ==highlighted text==
 *   ✅ Obsidian comments      %%  hidden comment %%
 *   ✅ Inline math            $x^2 + y^2$
 *   ✅ Block math             $$\sum_{i=0}^n i$$
 *   ✅ Mermaid fences         ```mermaid
 *   ✅ Frontmatter parser     exported separately as parseFrontmatter()
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── Constants ────────────────────────────────────────────────────────────────

const CALLOUT_TYPES = new Set([
  'note', 'abstract', 'summary', 'tldr',
  'info', 'todo',
  'tip', 'hint', 'important',
  'success', 'check', 'done',
  'question', 'help', 'faq',
  'warning', 'caution', 'attention',
  'failure', 'fail', 'missing',
  'danger', 'error',
  'bug',
  'example',
  'quote', 'cite',
]);

const CALLOUT_ICONS = {
  note      : '📝', abstract  : '📋', summary   : '📋', tldr      : '📋',
  info      : 'ℹ️',  todo      : '☑️',
  tip       : '💡', hint      : '💡', important : '💡',
  success   : '✅', check     : '✅', done      : '✅',
  question  : '❓', help      : '❓', faq       : '❓',
  warning   : '⚠️', caution   : '⚠️', attention : '⚠️',
  failure   : '❌', fail      : '❌', missing   : '❌',
  danger    : '🔥', error     : '🔥',
  bug       : '🐛',
  example   : '📌',
  quote     : '💬', cite      : '💬',
};

const EMBED_TYPES = {
  image : /\.(png|jpe?g|gif|svg|webp|bmp|avif)$/i,
  audio : /\.(mp3|wav|ogg|flac|aac|m4a|opus)$/i,
  video : /\.(mp4|webm|ogv|mov|mkv)$/i,
  pdf   : /\.pdf$/i,
  note  : /\.(md|markdown)$/i,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function detectEmbedType(target) {
  const clean = target.split('|')[0].split('#')[0].trim();
  for (const [type, re] of Object.entries(EMBED_TYPES)) {
    if (re.test(clean)) return type;
  }
  return 'unknown';
}

/**
 * Parse embed size hint from wikilink-style pipe: ![[img.png|300x200]] or ![[img.png|300]]
 */
function parseEmbedSize(sizeStr) {
  if (!sizeStr) return {};
  const [w, h] = sizeStr.split('x');
  const width  = parseInt(w, 10) || null;
  const height = parseInt(h, 10) || null;
  return { width, height };
}

/**
 * Split a wikilink inner string:  "Page Name#Heading|Alias"  →  { target, anchor, alias }
 */
function splitWikilink(inner) {
  const pipeIdx  = inner.indexOf('|');
  const alias    = pipeIdx >= 0 ? inner.slice(pipeIdx + 1).trim() : null;
  const core     = pipeIdx >= 0 ? inner.slice(0, pipeIdx).trim() : inner.trim();
  const hashIdx  = core.indexOf('#');
  const target   = hashIdx >= 0 ? core.slice(0, hashIdx).trim() : core;
  const anchor   = hashIdx >= 0 ? core.slice(hashIdx + 1).trim() : null;
  return { target, anchor, alias };
}

// ─── Frontmatter Parser (exported separately) ─────────────────────────────────

/**
 * Strips YAML frontmatter from raw markdown.
 * Returns { content, frontmatter } where frontmatter is a raw key-value map.
 *
 * For full YAML support pair with js-yaml:
 *   import yaml from 'js-yaml';
 *   const { content, rawFrontmatter } = parseFrontmatter(raw);
 *   const data = yaml.load(rawFrontmatter);
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/);
  if (!match) return { content: raw, frontmatter: {}, rawFrontmatter: '' };

  const rawFrontmatter = match[1];
  const content        = raw.slice(match[0].length);
  const frontmatter    = {};

  // Simple key: value parser (covers most Obsidian properties)
  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+)\s*:\s*(.*)/);
    if (!kv) continue;
    const [, key, val] = kv;
    const trimmed = val.trim();

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      // Inline array: tags: [a, b, c]
      frontmatter[key] = trimmed
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else {
      frontmatter[key] = trimmed.replace(/^['"]|['"]$/g, '');
    }
  }

  return { content, frontmatter, rawFrontmatter };
}

// ─── Rule: Obsidian Comments  %% ... %% ───────────────────────────────────────

function ruleComments(md) {
  // Inline: strip %% ... %% completely from output
  md.core.ruler.push('obsidian_comments', state => {
    for (const token of state.tokens) {
      if (token.type !== 'inline' || !token.children) continue;

      const next = [];
      let buf = '';

      for (const child of token.children) {
        if (child.type !== 'text' && child.type !== 'softbreak') {
          if (buf) { const t = new state.Token('text','',0); t.content = buf; next.push(t); buf = ''; }
          next.push(child);
          continue;
        }
        buf += child.type === 'softbreak' ? '\n' : child.content;
      }
      if (buf) { const t = new state.Token('text','',0); t.content = buf; next.push(t); buf = ''; }

      // Now strip %% ... %% from joined text tokens
      const rebuilt = [];
      for (const child of next) {
        if (child.type !== 'text') { rebuilt.push(child); continue; }
        // Remove inline comments
        const stripped = child.content.replace(/%%[\s\S]*?%%/g, '');
        if (stripped) { child.content = stripped; rebuilt.push(child); }
      }
      token.children = rebuilt;
    }
  });
}

// ─── Rule: Highlights  ==text== ───────────────────────────────────────────────

function ruleHighlight(md) {
  md.core.ruler.push('obsidian_highlight', state => {
    for (const blockToken of state.tokens) {
      if (blockToken.type !== 'inline' || !blockToken.children) continue;
      blockToken.children = processInlineTokens(blockToken.children, state, child => {
        if (child.type !== 'text') return null;
        const parts = child.content.split(/(==(?!\s)[\s\S]*?(?<!\s)==)/g);
        if (parts.length === 1) return null;
        return parts.flatMap((part, i) => {
          if (i % 2 === 1) {
            // matched ==...==
            const inner = part.slice(2, -2);
            const open  = new state.Token('html_inline', '', 0);
            open.content = `<mark>${escHtml(inner)}</mark>`;
            return [open];
          }
          if (!part) return [];
          const t = new state.Token('text', '', 0); t.content = part; return [t];
        });
      });
    }
  });
}

// ─── Rule: Tags  #tag  #nested/tag ────────────────────────────────────────────

function ruleTags(md, opts) {
  md.core.ruler.push('obsidian_tags', state => {
    for (const blockToken of state.tokens) {
      if (blockToken.type !== 'inline' || !blockToken.children) continue;
      blockToken.children = processInlineTokens(blockToken.children, state, child => {
        if (child.type !== 'text') return null;
        // Tag must start at word boundary and not be inside a URL
        const parts = child.content.split(/((?<![&\w#])#[a-zA-Z_][a-zA-Z0-9_/\-]*)/g);
        if (parts.length === 1) return null;
        return parts.flatMap((part, i) => {
          if (i % 2 === 1) {
            const tagName = part.slice(1);
            const href    = opts.resolveTag ? opts.resolveTag(tagName) : `#tag-${tagName}`;
            const t       = new state.Token('html_inline', '', 0);
            t.content     = `<a href="${escHtml(href)}" class="obsidian-tag" data-tag="${escHtml(tagName)}">${escHtml(part)}</a>`;
            return [t];
          }
          if (!part) return [];
          const t = new state.Token('text', '', 0); t.content = part; return [t];
        });
      });
    }
  });
}

// ─── Rule: Block IDs  paragraph ending with ^blockid ─────────────────────────

function ruleBlockIds(md) {
  md.core.ruler.push('obsidian_block_ids', state => {
    for (const token of state.tokens) {
      if (token.type !== 'inline' || !token.children) continue;
      const last = token.children[token.children.length - 1];
      if (!last || last.type !== 'text') continue;
      const match = last.content.match(/\s+\^([\w-]+)$/);
      if (!match) continue;
      const id  = match[1];
      last.content = last.content.slice(0, -match[0].length);
      const anchor = new state.Token('html_inline', '', 0);
      anchor.content = `<span class="obsidian-block-id" id="^${escHtml(id)}" data-block-id="${escHtml(id)}"></span>`;
      token.children.push(anchor);
    }
  });
}

// ─── Rule: Inline Math  $...$ ─────────────────────────────────────────────────

function ruleMathInline(md) {
  md.core.ruler.push('obsidian_math_inline', state => {
    for (const blockToken of state.tokens) {
      if (blockToken.type !== 'inline' || !blockToken.children) continue;
      blockToken.children = processInlineTokens(blockToken.children, state, child => {
        if (child.type !== 'text') return null;
        // Match $...$ but not $$
        const parts = child.content.split(/(?<!\$)\$(?!\$)((?:[^$]|\\\$)+?)\$(?!\$)/g);
        if (parts.length === 1) return null;
        return parts.flatMap((part, i) => {
          if (i % 2 === 1) {
            const t = new state.Token('html_inline', '', 0);
            t.content = `<span class="math math-inline" data-math="${escHtml(part)}">$${escHtml(part)}$</span>`;
            return [t];
          }
          if (!part) return [];
          const t = new state.Token('text', '', 0); t.content = part; return [t];
        });
      });
    }
  });
}

// ─── Rule: Block Math  $$...$$ ────────────────────────────────────────────────

function ruleMathBlock(md) {
  md.block.ruler.before('fence', 'obsidian_math_block', (state, startLine, endLine, silent) => {
    let pos  = state.bMarks[startLine] + state.tShift[startLine];
    let max  = state.eMarks[startLine];
    const lineText = state.src.slice(pos, max).trim();

    if (!lineText.startsWith('$$')) return false;

    // Single-line $$...$$ on one line
    if (lineText.length > 4 && lineText.endsWith('$$') && lineText !== '$$') {
      if (silent) return true;
      const math = lineText.slice(2, -2).trim();
      const token = state.push('math_block', 'math', 0);
      token.content = math;
      token.map     = [startLine, startLine + 1];
      state.line    = startLine + 1;
      return true;
    }

    // Multi-line: opening $$
    if (lineText !== '$$' && !lineText.startsWith('$$\n')) return false;

    let nextLine = startLine + 1;
    while (nextLine < endLine) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (state.src.slice(pos, max).trim() === '$$') break;
      nextLine++;
    }
    if (nextLine === endLine) return false;
    if (silent) return true;

    const content = state.getLines(startLine + 1, nextLine, 0, true).trim();
    const token   = state.push('math_block', 'math', 0);
    token.content = content;
    token.map     = [startLine, nextLine + 1];
    state.line    = nextLine + 1;
    return true;
  });

  md.renderer.rules['math_block'] = (tokens, idx) => {
    const math = escHtml(tokens[idx].content);
    return `<div class="math math-block" data-math="${math}">$$${math}$$</div>\n`;
  };
}

// ─── Rule: Wikilinks  [[Page]]  [[Page|Alias]]  [[Page#Heading]]  [[Page#^id]] ──

function ruleWikilinks(md, opts) {
  md.core.ruler.push('obsidian_wikilinks', state => {
    for (const blockToken of state.tokens) {
      if (blockToken.type !== 'inline' || !blockToken.children) continue;
      blockToken.children = processInlineTokens(blockToken.children, state, child => {
        if (child.type !== 'text') return null;
        // Wikilinks: [[...]] but not ![[...]] (embeds handled separately)
        const parts = child.content.split(/((?<!!)\[\[[^\]]+\]\])/g);
        if (parts.length === 1) return null;
        return parts.flatMap((part, i) => {
          if (i % 2 === 1) {
            const inner              = part.slice(2, -2);
            const { target, anchor, alias } = splitWikilink(inner);
            const label              = alias || (anchor ? `${target}#${anchor}` : target) || target;
            const href               = opts.resolveWikilink
              ? opts.resolveWikilink(target, alias, anchor)
              : `#${encodeURIComponent(target)}`;
            const anchorAttr         = anchor ? ` data-anchor="${escHtml(anchor)}"` : '';
            const t                  = new state.Token('html_inline', '', 0);
            t.content = `<a href="${escHtml(href)}" class="obsidian-wikilink" data-target="${escHtml(target)}"${anchorAttr}>${escHtml(label)}</a>`;
            return [t];
          }
          if (!part) return [];
          const t = new state.Token('text', '', 0); t.content = part; return [t];
        });
      });
    }
  });
}

// ─── Rule: Embeds  ![[file]]  ![[img|300]]  ![[img|300x200]] ─────────────────

function ruleEmbeds(md, opts) {
  md.core.ruler.push('obsidian_embeds', state => {
    for (const blockToken of state.tokens) {
      if (blockToken.type !== 'inline' || !blockToken.children) continue;
      blockToken.children = processInlineTokens(blockToken.children, state, child => {
        if (child.type !== 'text') return null;
        const parts = child.content.split(/(!?\[\[[^\]]+\]\])/g);
        if (parts.length === 1) return null;
        return parts.flatMap((part, i) => {
          if (i % 2 !== 1 || !part.startsWith('!')) {
            if (!part) return [];
            const t = new state.Token('text', '', 0); t.content = part; return [t];
          }
          // It's an embed
          const inner  = part.slice(3, -2); // strip ![[  and  ]]
          const pipeIdx = inner.indexOf('|');
          const filePart = pipeIdx >= 0 ? inner.slice(0, pipeIdx).trim() : inner.trim();
          const sizePart = pipeIdx >= 0 ? inner.slice(pipeIdx + 1).trim() : null;

          // Split off anchor from filename
          const hashIdx  = filePart.indexOf('#');
          const fileName = hashIdx >= 0 ? filePart.slice(0, hashIdx) : filePart;
          const anchor   = hashIdx >= 0 ? filePart.slice(hashIdx + 1) : null;

          const type = detectEmbedType(fileName);
          const src  = opts.resolveEmbed
            ? opts.resolveEmbed(fileName, type)
            : fileName;

          const t = new state.Token('html_inline', '', 0);
          t.content = renderEmbed(src, type, fileName, sizePart, anchor, opts);
          return [t];
        });
      });
    }
  });
}

function renderEmbed(src, type, fileName, sizeStr, anchor, opts) {
  const { width, height } = parseEmbedSize(sizeStr);
  const wAttr = width  ? ` width="${width}"`   : '';
  const hAttr = height ? ` height="${height}"` : '';
  const safe  = escHtml(src);
  const name  = escHtml(fileName);

  switch (type) {
    case 'image':
      return `<img src="${safe}" alt="${name}" class="obsidian-embed obsidian-image"${wAttr}${hAttr} loading="lazy">`;

    case 'audio':
      return `<audio controls class="obsidian-embed obsidian-audio">` +
             `<source src="${safe}"><em>Audio not supported: <a href="${safe}">${name}</a></em></audio>`;

    case 'video':
      return `<video controls class="obsidian-embed obsidian-video"${wAttr}${hAttr}>` +
             `<source src="${safe}"><em>Video not supported: <a href="${safe}">${name}</a></em></video>`;

    case 'pdf': {
      const page = anchor ? `#page=${encodeURIComponent(anchor)}` : '';
      return `<iframe src="${safe}${page}" class="obsidian-embed obsidian-pdf"${wAttr}${hAttr} ` +
             `loading="lazy">PDF: <a href="${safe}">${name}</a></iframe>`;
    }

    case 'note':
      // Transclusion — caller can resolve this; we emit a placeholder
      if (opts.resolveTransclusion) {
        const result = opts.resolveTransclusion(fileName, anchor);
        return `<div class="obsidian-embed obsidian-transclusion" data-src="${name}">${result}</div>`;
      }
      return `<div class="obsidian-embed obsidian-transclusion" data-src="${name}" data-anchor="${escHtml(anchor||'')}">` +
             `<em>Transclusion: <a href="${safe}">${name}</a>${anchor ? `#${escHtml(anchor)}` : ''}</em></div>`;

    default:
      return `<a href="${safe}" class="obsidian-embed obsidian-file">${name}</a>`;
  }
}

// ─── Rule: Callouts  > [!NOTE]  > [!TIP]-  > [!WARNING]+ ────────────────────

/**
 * Callouts are blockquotes whose first line matches > [!TYPE] optional-title
 * Foldable:  [!TYPE]-  → collapsed by default
 *            [!TYPE]+  → expanded by default (same as no suffix in Obsidian)
 *
 * Strategy: post-process the rendered HTML of each blockquote.
 * We override renderer.rules.blockquote_open/close and track nesting ourselves.
 */
function ruleCallouts(md, opts) {
  // We need to identify which blockquote tokens contain a callout.
  // Walk block tokens and annotate blockquote_open tokens.
  md.core.ruler.push('obsidian_callout_annotate', state => {
    const tokens = state.tokens;

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'blockquote_open') continue;

      // Find the first inline token inside this blockquote
      let j = i + 1;
      while (j < tokens.length && tokens[j].type !== 'inline') {
        if (tokens[j].type === 'blockquote_close') break;
        j++;
      }
      if (j >= tokens.length || tokens[j].type !== 'inline') continue;

      const inlineToken = tokens[j];
      const firstText   = (inlineToken.children?.[0]?.content || '').trimStart();
      const match       = firstText.match(/^\[!([a-zA-Z]+)\]([+-])?\s*(.*)?$/);

      if (!match) continue;
      const rawType = match[1].toLowerCase();
      if (!CALLOUT_TYPES.has(rawType)) continue;

      const type      = rawType;
      const foldState = match[2] || null;   // '-' | '+' | null
      const title     = match[3]?.trim() || match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();

      // Annotate the blockquote_open token
      tokens[i].attrSet('data-callout', type);
      tokens[i].attrSet('data-callout-fold', foldState || '');
      tokens[i].meta = { ...tokens[i].meta, callout: { type, foldState, title } };

      // Remove the [!TYPE] line from the inline children
      const children = inlineToken.children;
      if (children[0]) {
        children[0].content = children[0].content.replace(/^\[![a-zA-Z]+\][+-]?\s*.*/, '').trimStart();
      }
      // Remove leading softbreak if now empty first child
      if (children[0] && !children[0].content) children.shift();
    }
  });

  // Override blockquote renderer
  const defaultOpen  = md.renderer.rules.blockquote_open  || defaultTokenRenderer;
  const defaultClose = md.renderer.rules.blockquote_close || defaultTokenRenderer;

  md.renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const meta  = token.meta?.callout;
    if (!meta) return defaultOpen(tokens, idx, options, env, self);

    const { type, foldState, title } = meta;
    const icon       = (opts.calloutIcons?.[type]) ?? CALLOUT_ICONS[type] ?? '📌';
    const isFoldable = foldState !== null;
    const isOpen     = foldState !== '-';
    const foldAttr   = isFoldable ? ` data-foldable="true" data-open="${isOpen}"` : '';
    const chevron    = isFoldable
      ? `<span class="callout-fold-icon">${isOpen ? '▾' : '▸'}</span>`
      : '';

    return [
      `<div class="callout callout-${escHtml(type)}" data-callout="${escHtml(type)}"${foldAttr}>`,
      `<div class="callout-title"${isFoldable ? ' style="cursor:pointer"' : ''}>`,
      `<span class="callout-icon">${icon}</span>`,
      `<span class="callout-title-text">${escHtml(title)}</span>`,
      `${chevron}</div>`,
      `<div class="callout-content"${isFoldable && !isOpen ? ' style="display:none"' : ''}>`,
    ].join('');
  };

  md.renderer.rules.blockquote_close = (tokens, idx, options, env, self) => {
    // Find matching open to see if it was a callout
    // Walk backwards to find the opening
    let depth = 0;
    for (let i = idx; i >= 0; i--) {
      if (tokens[i].type === 'blockquote_close')  depth++;
      if (tokens[i].type === 'blockquote_open') {
        depth--;
        if (depth === 0) {
          if (tokens[i].meta?.callout) return `</div></div>`;
          break;
        }
      }
    }
    return defaultClose(tokens, idx, options, env, self);
  };
}

function defaultTokenRenderer(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
}

// ─── Rule: Mermaid fence  ```mermaid ──────────────────────────────────────────

function ruleMermaid(md) {
  const defaultFence = md.renderer.rules.fence || defaultTokenRenderer;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang  = token.info.trim().split(/\s+/)[0];
    if (lang !== 'mermaid') return defaultFence(tokens, idx, options, env, self);
    return `<div class="obsidian-mermaid mermaid" data-mermaid="${escHtml(token.content.trim())}">${escHtml(token.content.trim())}</div>\n`;
  };
}

// ─── Inline token processor helper ───────────────────────────────────────────

/**
 * Walk inline token children, call handler on each.
 * If handler returns an array of tokens, replace the child.
 * Otherwise keep original.
 */
function processInlineTokens(children, state, handler) {
  const result = [];
  for (const child of children) {
    const replacement = handler(child);
    if (replacement === null) {
      result.push(child);
    } else {
      result.push(...replacement);
    }
  }
  return result;
}

// ─── Foldable callout runtime script ─────────────────────────────────────────

const CALLOUT_TOGGLE_SCRIPT = `
<script>
(function () {
  document.querySelectorAll('.callout[data-foldable="true"] .callout-title').forEach(function (titleEl) {
    titleEl.addEventListener('click', function () {
      const callout  = titleEl.closest('.callout');
      const content  = callout.querySelector('.callout-content');
      const icon     = callout.querySelector('.callout-fold-icon');
      const isOpen   = callout.dataset.open === 'true';
      callout.dataset.open   = isOpen ? 'false' : 'true';
      content.style.display  = isOpen ? 'none' : '';
      if (icon) icon.textContent = isOpen ? '▸' : '▾';
    });
  });
})();
</script>
`.trim();

// ─── Default CSS ──────────────────────────────────────────────────────────────

const DEFAULT_CSS = `
/* ── Obsidian Callouts ─────────────────────────────────── */
.callout {
  border-left: 4px solid var(--callout-color, #448aff);
  border-radius: 6px;
  margin: 1.2em 0;
  overflow: hidden;
  background: var(--callout-bg, rgba(68,138,255,0.08));
}
.callout-title {
  display: flex;
  align-items: center;
  gap: .4em;
  padding: .55em .9em;
  font-weight: 600;
  font-size: .95em;
  background: var(--callout-title-bg, rgba(68,138,255,0.15));
  color: var(--callout-color, #448aff);
  user-select: none;
}
.callout-content { padding: .65em .9em; }
.callout-fold-icon { font-size: .8em; margin-left: auto; }

.callout-note    { --callout-color:#448aff; --callout-bg:rgba(68,138,255,.07); --callout-title-bg:rgba(68,138,255,.13); }
.callout-info,
.callout-todo    { --callout-color:#29b6f6; --callout-bg:rgba(41,182,246,.07); --callout-title-bg:rgba(41,182,246,.13); }
.callout-tip,
.callout-hint,
.callout-important { --callout-color:#26a69a; --callout-bg:rgba(38,166,154,.07); --callout-title-bg:rgba(38,166,154,.13); }
.callout-success,
.callout-check,
.callout-done  { --callout-color:#66bb6a; --callout-bg:rgba(102,187,106,.07); --callout-title-bg:rgba(102,187,106,.13); }
.callout-warning,
.callout-caution,
.callout-attention { --callout-color:#ffa726; --callout-bg:rgba(255,167,38,.07); --callout-title-bg:rgba(255,167,38,.13); }
.callout-danger,
.callout-error { --callout-color:#ef5350; --callout-bg:rgba(239,83,80,.07); --callout-title-bg:rgba(239,83,80,.13); }
.callout-failure,
.callout-fail,
.callout-missing { --callout-color:#ec407a; --callout-bg:rgba(236,64,122,.07); --callout-title-bg:rgba(236,64,122,.13); }
.callout-question,
.callout-help,
.callout-faq { --callout-color:#ab47bc; --callout-bg:rgba(171,71,188,.07); --callout-title-bg:rgba(171,71,188,.13); }
.callout-bug  { --callout-color:#f44336; --callout-bg:rgba(244,67,54,.07); --callout-title-bg:rgba(244,67,54,.13); }
.callout-example { --callout-color:#7e57c2; --callout-bg:rgba(126,87,194,.07); --callout-title-bg:rgba(126,87,194,.13); }
.callout-quote,
.callout-cite { --callout-color:#78909c; --callout-bg:rgba(120,144,156,.07); --callout-title-bg:rgba(120,144,156,.13); }
.callout-abstract,
.callout-summary,
.callout-tldr { --callout-color:#26c6da; --callout-bg:rgba(38,198,218,.07); --callout-title-bg:rgba(38,198,218,.13); }

/* ── Wikilinks ─────────────────────────────────────────── */
.obsidian-wikilink {
  color: var(--wikilink-color, #7c4dff);
  text-decoration: none;
  border-bottom: 1px dashed currentColor;
}
.obsidian-wikilink:hover { border-bottom-style: solid; }

/* ── Tags ──────────────────────────────────────────────── */
.obsidian-tag {
  display: inline-block;
  background: var(--tag-bg, rgba(124,77,255,.12));
  color: var(--tag-color, #7c4dff);
  padding: 1px 7px;
  border-radius: 12px;
  font-size: .82em;
  text-decoration: none;
  font-weight: 500;
}

/* ── Highlights ────────────────────────────────────────── */
mark {
  background: var(--highlight-bg, #fff59d);
  color: var(--highlight-color, inherit);
  padding: 0 2px;
  border-radius: 2px;
}

/* ── Math ──────────────────────────────────────────────── */
.math-block { display: block; overflow-x: auto; padding: .5em 0; text-align: center; }
.math-inline { font-style: italic; }

/* ── Embeds ────────────────────────────────────────────── */
.obsidian-image  { max-width: 100%; height: auto; border-radius: 4px; display: block; margin: .5em auto; }
.obsidian-audio,
.obsidian-video  { display: block; max-width: 100%; margin: .5em 0; }
.obsidian-pdf    { width: 100%; min-height: 500px; border: 1px solid #ccc; border-radius: 4px; }
.obsidian-transclusion {
  border-left: 3px solid #ccc;
  padding: .5em .8em;
  background: rgba(0,0,0,.03);
  border-radius: 0 4px 4px 0;
  margin: .5em 0;
}

/* ── Block IDs ─────────────────────────────────────────── */
.obsidian-block-id { display: none; }

/* ── Mermaid ───────────────────────────────────────────── */
.obsidian-mermaid { overflow-x: auto; text-align: center; margin: 1em 0; }
`.trim();

// ─── Main Plugin Export ───────────────────────────────────────────────────────

/**
 * obsidianPlugin(md, options)
 *
 * Options:
 *   resolveWikilink(target, alias, anchor) → href string
 *   resolveEmbed(fileName, type)           → src string
 *   resolveTag(tagName)                    → href string
 *   resolveTransclusion(fileName, anchor)  → html string
 *   calloutIcons                           → { [type]: string }  override icons
 *   enableMath      (default true)
 *   enableTags      (default true)
 *   enableComments  (default true)
 *   enableHighlight (default true)
 *   enableMermaid   (default true)
 *   enableBlockIds  (default true)
 */
function obsidianPlugin(md, options = {}) {
  const opts = {
    resolveWikilink    : null,
    resolveEmbed       : null,
    resolveTag         : null,
    resolveTransclusion: null,
    calloutIcons       : {},
    enableMath         : true,
    enableTags         : true,
    enableComments     : true,
    enableHighlight    : true,
    enableMermaid      : true,
    enableBlockIds     : true,
    ...options,
  };

  // Register rules — ORDER MATTERS
  // Comments first so they're stripped before other rules run
  if (opts.enableComments)  ruleComments(md);
  if (opts.enableMath)      ruleMathBlock(md);
  if (opts.enableMath)      ruleMathInline(md);
  if (opts.enableHighlight) ruleHighlight(md);
  if (opts.enableBlockIds)  ruleBlockIds(md);
  if (opts.enableTags)      ruleTags(md, opts);
                            ruleWikilinks(md, opts);
                            ruleEmbeds(md, opts);
                            ruleCallouts(md, opts);
  if (opts.enableMermaid)   ruleMermaid(md);
}

obsidianPlugin.getCSS            = () => DEFAULT_CSS;
obsidianPlugin.getToggleScript   = () => CALLOUT_TOGGLE_SCRIPT;
obsidianPlugin.parseFrontmatter  = parseFrontmatter;
obsidianPlugin.CALLOUT_TYPES     = CALLOUT_TYPES;
obsidianPlugin.CALLOUT_ICONS     = CALLOUT_ICONS;

export default obsidianPlugin;
export { parseFrontmatter, DEFAULT_CSS, CALLOUT_TOGGLE_SCRIPT };
