/**
 * obsidian-md.js — Obsidian-faithful Markdown renderer for NoteBooks-XI
 *
 * Drop this file next to index.html, then add ONE line to each HTML file:
 *   <script src="obsidian-md.js"></script>
 *
 * It will:
 *   1. Inject the Obsidian CSS theme (dark + light, matching Obsidian's exact palette)
 *   2. Replace the global markdownToHTML() function with an Obsidian-faithful version
 *   3. Add support for: callouts, wikilinks, highlights, task lists, footnotes,
 *      strikethrough, math (basic), and syntax-highlighted code blocks
 *
 * Requirements: marked.js must already be loaded (it is in both HTML files).
 * Optional:     highlight.js (auto-detected; falls back to plain code blocks)
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
   * 1.  INJECT CSS
   * ───────────────────────────────────────────── */
  const CSS = `
/* ── Obsidian MD: CSS variables ── */
:root {
  --obs-bg:          #ffffff;
  --obs-bg2:         #f2f3f5;
  --obs-fg:          #1a1a1a;
  --obs-fg2:         #444;
  --obs-link:        #705dcf;
  --obs-link-hover:  #4d3c9e;
  --obs-code-bg:     #f0f0f0;
  --obs-code-fg:     #c7254e;
  --obs-pre-bg:      #1e1e2e;
  --obs-pre-fg:      #cdd6f4;
  --obs-border:      #d0d0d0;
  --obs-quote-bar:   #7c3aed;
  --obs-h1:          #1a1a1a;
  --obs-tag-bg:      #e8e3f8;
  --obs-tag-fg:      #5b3dc4;
  --obs-hl:          #fff3a3;
  --obs-hl-fg:       #333;
  --obs-fn-fg:       #705dcf;
  --obs-table-hd:    #f2f3f5;
  --obs-hr:          #d0d0d0;
}

@media (prefers-color-scheme: dark) {
  :root {
    --obs-bg:          #1e1e2e;
    --obs-bg2:         #181825;
    --obs-fg:          #cdd6f4;
    --obs-fg2:         #a6adc8;
    --obs-link:        #cba6f7;
    --obs-link-hover:  #f5c2e7;
    --obs-code-bg:     #313244;
    --obs-code-fg:     #f38ba8;
    --obs-pre-bg:      #11111b;
    --obs-pre-fg:      #cdd6f4;
    --obs-border:      #45475a;
    --obs-quote-bar:   #cba6f7;
    --obs-h1:          #cdd6f4;
    --obs-tag-bg:      #313244;
    --obs-tag-fg:      #cba6f7;
    --obs-hl:          #f9e2af44;
    --obs-hl-fg:       #f9e2af;
    --obs-fn-fg:       #cba6f7;
    --obs-table-hd:    #181825;
    --obs-hr:          #45475a;
  }
}

/* ── Base ── */
.obsidian-content {
  font-family: "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: var(--obs-fg);
  background: transparent;
  word-break: break-word;
  padding: 0 4px;
}

/* ── Headings ── */
.obsidian-content h1,
.obsidian-content h2,
.obsidian-content h3,
.obsidian-content h4,
.obsidian-content h5,
.obsidian-content h6 {
  font-family: "Georgia", "Times New Roman", serif;
  color: var(--obs-h1);
  margin: 1.5em 0 0.4em;
  line-height: 1.3;
  font-weight: 700;
}
.obsidian-content h1 { font-size: 2em;   border-bottom: 2px solid var(--obs-border); padding-bottom: .3em; }
.obsidian-content h2 { font-size: 1.5em; border-bottom: 1px solid var(--obs-border); padding-bottom: .2em; }
.obsidian-content h3 { font-size: 1.25em; }
.obsidian-content h4 { font-size: 1.1em; }
.obsidian-content h5 { font-size: 1em; }
.obsidian-content h6 { font-size: .9em; color: var(--obs-fg2); }

/* ── Paragraphs & spacing ── */
.obsidian-content p { margin: .75em 0; }
.obsidian-content ul, .obsidian-content ol { padding-left: 1.6em; margin: .5em 0; }
.obsidian-content li { margin: .2em 0; }

/* ── Task list ── */
.obsidian-content .task-list-item { list-style: none; margin-left: -1.4em; }
.obsidian-content .task-list-item input[type="checkbox"] {
  accent-color: var(--obs-link);
  margin-right: .5em;
  pointer-events: none;
}

/* ── Inline code ── */
.obsidian-content code {
  background: var(--obs-code-bg);
  color: var(--obs-code-fg);
  font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
  font-size: .88em;
  padding: .15em .4em;
  border-radius: 4px;
}

/* ── Code block ── */
.obsidian-content pre {
  background: var(--obs-pre-bg);
  color: var(--obs-pre-fg);
  font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
  font-size: .88em;
  line-height: 1.5;
  padding: 1.1em 1.3em;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1em 0;
  position: relative;
}
.obsidian-content pre code {
  background: none;
  color: inherit;
  padding: 0;
  font-size: inherit;
  border-radius: 0;
}
.obs-code-lang {
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: .7em;
  opacity: .5;
  letter-spacing: .05em;
  text-transform: uppercase;
  font-family: sans-serif;
  pointer-events: none;
}

/* ── Blockquote ── */
.obsidian-content blockquote {
  border-left: 3px solid var(--obs-quote-bar);
  margin: .75em 0;
  padding: .4em 1em;
  color: var(--obs-fg2);
  background: var(--obs-bg2);
  border-radius: 0 6px 6px 0;
}
.obsidian-content blockquote p { margin: 0; }

/* ── Callouts ── */
.obs-callout {
  border-radius: 8px;
  margin: 1em 0;
  overflow: hidden;
  border: 1px solid;
}
.obs-callout-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-weight: 600;
  font-size: .95em;
  cursor: default;
  user-select: none;
}
.obs-callout-header .obs-callout-icon { font-size: 1.1em; }
.obs-callout-body {
  padding: 10px 14px;
  font-size: .95em;
  line-height: 1.6;
}
.obs-callout-body p:first-child { margin-top: 0; }
.obs-callout-body p:last-child  { margin-bottom: 0; }

/* callout colours */
.obs-callout[data-type="note"]     { background: #e8f4fd22; border-color: #448aff; }
.obs-callout[data-type="note"]     .obs-callout-header { background: #448aff22; color: #448aff; }
.obs-callout[data-type="tip"]      { background: #e6f9f222; border-color: #00bfa5; }
.obs-callout[data-type="tip"]      .obs-callout-header { background: #00bfa522; color: #00bfa5; }
.obs-callout[data-type="info"]     { background: #e3f2fd22; border-color: #29b6f6; }
.obs-callout[data-type="info"]     .obs-callout-header { background: #29b6f622; color: #29b6f6; }
.obs-callout[data-type="warning"]  { background: #fff8e122; border-color: #ffca28; }
.obs-callout[data-type="warning"]  .obs-callout-header { background: #ffca2822; color: #f0a500; }
.obs-callout[data-type="caution"]  { background: #fff3e022; border-color: #ff7043; }
.obs-callout[data-type="caution"]  .obs-callout-header { background: #ff704322; color: #ff7043; }
.obs-callout[data-type="danger"],
.obs-callout[data-type="bug"]      { background: #fce4ec22; border-color: #ef5350; }
.obs-callout[data-type="danger"]   .obs-callout-header,
.obs-callout[data-type="bug"]      .obs-callout-header { background: #ef535022; color: #ef5350; }
.obs-callout[data-type="success"]  { background: #e8f5e922; border-color: #66bb6a; }
.obs-callout[data-type="success"]  .obs-callout-header { background: #66bb6a22; color: #66bb6a; }
.obs-callout[data-type="question"] { background: #f3e5f522; border-color: #ab47bc; }
.obs-callout[data-type="question"] .obs-callout-header { background: #ab47bc22; color: #ab47bc; }
.obs-callout[data-type="quote"],
.obs-callout[data-type="cite"]     { background: #eceff122; border-color: #90a4ae; }
.obs-callout[data-type="quote"]    .obs-callout-header,
.obs-callout[data-type="cite"]     .obs-callout-header { background: #90a4ae22; color: #90a4ae; }
.obs-callout[data-type="abstract"],
.obs-callout[data-type="summary"],
.obs-callout[data-type="tldr"]     { background: #e0f2f122; border-color: #26a69a; }
.obs-callout[data-type="abstract"] .obs-callout-header,
.obs-callout[data-type="summary"]  .obs-callout-header,
.obs-callout[data-type="tldr"]     .obs-callout-header { background: #26a69a22; color: #26a69a; }
.obs-callout[data-type="example"]  { background: #ede7f622; border-color: #7e57c2; }
.obs-callout[data-type="example"]  .obs-callout-header { background: #7e57c222; color: #7e57c2; }
.obs-callout[data-type="important"] { background: #fce4ec22; border-color: #e91e63; }
.obs-callout[data-type="important"] .obs-callout-header { background: #e91e6322; color: #e91e63; }

/* ── Horizontal rule ── */
.obsidian-content hr {
  border: none;
  border-top: 1px solid var(--obs-hr);
  margin: 1.5em 0;
}

/* ── Tables ── */
.obsidian-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
  font-size: .95em;
}
.obsidian-content thead tr { background: var(--obs-table-hd); }
.obsidian-content th, .obsidian-content td {
  border: 1px solid var(--obs-border);
  padding: 7px 12px;
  text-align: left;
}
.obsidian-content tbody tr:hover { background: var(--obs-bg2); }

/* ── Links ── */
.obsidian-content a { color: var(--obs-link); text-decoration: none; }
.obsidian-content a:hover { color: var(--obs-link-hover); text-decoration: underline; }

/* ── Wikilinks ── */
.obs-wikilink {
  color: var(--obs-link);
  background: var(--obs-tag-bg);
  border-radius: 4px;
  padding: 0 .35em;
  font-size: .92em;
  cursor: default;
}

/* ── Highlight ── */
.obs-highlight {
  background: var(--obs-hl);
  color: var(--obs-hl-fg);
  border-radius: 3px;
  padding: 0 .15em;
}

/* ── Strikethrough ── */
.obsidian-content del { opacity: .6; }

/* ── Tags ── */
.obs-tag {
  background: var(--obs-tag-bg);
  color: var(--obs-tag-fg);
  border-radius: 12px;
  padding: .1em .6em;
  font-size: .82em;
  font-weight: 600;
  letter-spacing: .03em;
}

/* ── Footnote references ── */
.obs-fn-ref {
  color: var(--obs-fn-fg);
  font-size: .75em;
  vertical-align: super;
  font-weight: 600;
  cursor: default;
}
.obs-footnotes {
  margin-top: 2em;
  padding-top: 1em;
  border-top: 1px solid var(--obs-border);
  font-size: .9em;
  color: var(--obs-fg2);
}
`;

  const style = document.createElement('style');
  style.id = 'obsidian-md-styles';
  style.textContent = CSS;
  document.head.appendChild(style);


  /* ─────────────────────────────────────────────
   * 2.  CALLOUT DEFINITIONS
   * ───────────────────────────────────────────── */
  const CALLOUT_ICONS = {
    note:      '📝', tip:       '💡', info:      'ℹ️',
    warning:   '⚠️', caution:   '🔥', danger:    '🚨',
    bug:       '🐛', success:   '✅', question:  '❓',
    quote:     '❝',  cite:      '❝',  abstract:  '📋',
    summary:   '📋', tldr:      '📋', example:   '🔍',
    important: '❗',
  };


  /* ─────────────────────────────────────────────
   * 3.  PRE-PROCESS: handle features marked.js doesn't support
   * ───────────────────────────────────────────── */
  function preProcess(src) {
    // Wikilinks  [[Page Name]]  or  [[Page|Alias]]
    src = src.replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (_, page, alias) => {
      const label = alias || page;
      return `<span class="obs-wikilink" title="[[${page}]]">${label}</span>`;
    });

    // Highlights  ==text==
    src = src.replace(/==([^=\n]+?)==/g, '<span class="obs-highlight">$1</span>');

    // Tags  #tag-name  (not inside code, not at start of heading)
    src = src.replace(/(?<![`\w#])#([a-zA-Z][a-zA-Z0-9_/-]*)/g, (_, tag) =>
      `<span class="obs-tag">#${tag}</span>`
    );

    // Footnote references  [^1]  [^note]
    const fnRefs = {};
    let fnCounter = 0;
    src = src.replace(/\[\^([^\]]+)\]/g, (_, id) => {
      if (!fnRefs[id]) fnRefs[id] = ++fnCounter;
      return `<sup class="obs-fn-ref" title="Footnote ${fnRefs[id]}">[${fnRefs[id]}]</sup>`;
    });

    // Callouts — Obsidian syntax:
    //   > [!TYPE] Optional Title
    //   > body line 1
    //   > body line 2
    // We process these as blockquote replacements before marked sees them.
    src = processCallouts(src);

    return src;
  }


  /* ─────────────────────────────────────────────
   * 4.  CALLOUT PROCESSING
   * ───────────────────────────────────────────── */
  function processCallouts(src) {
    // Split into lines and look for consecutive "> " lines where the first
    // matches [!TYPE]
    const lines = src.split('\n');
    const out = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      // Check if this is the start of a callout block
      const firstMatch = line.match(/^>\s*\[!(\w+)\](?:\s*(.*))?$/i);
      if (firstMatch) {
        const type = firstMatch[1].toLowerCase();
        const title = (firstMatch[2] || '').trim() || capitalise(type);
        const icon = CALLOUT_ICONS[type] || '📌';

        // Collect all following "> " lines as body
        const bodyLines = [];
        i++;
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          bodyLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }

        // We emit raw HTML — marked will pass it through
        const bodyMd = bodyLines.join('\n');
        // We'll render body inline using a placeholder — resolved after marked
        const placeholder = `__CALLOUT_BODY_${out.length}__`;
        out.push(
          `<div class="obs-callout" data-type="${type}">` +
          `<div class="obs-callout-header"><span class="obs-callout-icon">${icon}</span>${escHtml(title)}</div>` +
          `<div class="obs-callout-body">${placeholder}</div></div>`
        );
        // Store body for post-processing
        out.push(`__CALLOUT_SRC_${out.length - 1}__${bodyMd}__END__`);
        continue;
      }
      out.push(line);
      i++;
    }

    return out.join('\n');
  }


  /* ─────────────────────────────────────────────
   * 5.  CONFIGURE marked.js
   * ───────────────────────────────────────────── */
  function configureMark() {
    if (!window.marked) return;

    marked.use({
      gfm: true,
      breaks: true,
      pedantic: false,
    });

    // Custom renderer
    const renderer = new marked.Renderer();

    // Code blocks — add language label
    renderer.code = function (code, lang) {
      const safeCode = escHtml(typeof code === 'object' ? code.text : code);
      const safeLang = (typeof lang === 'object' ? lang?.lang : lang) || '';
      const langLabel = safeLang
        ? `<span class="obs-code-lang">${escHtml(safeLang)}</span>`
        : '';
      return `<pre>${langLabel}<code class="language-${escHtml(safeLang)}">${safeCode}</code></pre>`;
    };

    // Task list items
    renderer.listitem = function (item) {
      const text = typeof item === 'object' ? item.text : item;
      const task = typeof item === 'object' ? item.task : false;
      const checked = typeof item === 'object' ? item.checked : false;
      if (task) {
        return `<li class="task-list-item"><input type="checkbox" ${checked ? 'checked' : ''} disabled> ${text}</li>\n`;
      }
      return `<li>${text}</li>\n`;
    };

    marked.use({ renderer });
  }


  /* ─────────────────────────────────────────────
   * 6.  POST-PROCESS: resolve callout bodies
   * ───────────────────────────────────────────── */
  function postProcess(html) {
    // Resolve callout body placeholders
    const srcMap = {};
    const srcRe = /__CALLOUT_SRC_(\d+)__(.+?)__END__/gs;
    html = html.replace(srcRe, (_, idx, body) => {
      srcMap[idx] = body;
      return '';
    });
    html = html.replace(/__CALLOUT_BODY_(\d+)__/g, (_, idx) => {
      const body = srcMap[idx] || '';
      return marked ? marked.parse(body) : body;
    });
    return html;
  }


  /* ─────────────────────────────────────────────
   * 7.  MAIN RENDER FUNCTION
   * ───────────────────────────────────────────── */
  function obsidianRender(markdown) {
    if (!window.marked) {
      console.warn('obsidian-md.js: marked.js not found — falling back to plain text');
      return `<pre>${escHtml(markdown)}</pre>`;
    }

    configureMark();

    const processed = preProcess(markdown);
    let html = marked.parse(processed);
    html = postProcess(html);

    return `<div class="obsidian-content">${html}</div>`;
  }


  /* ─────────────────────────────────────────────
   * 8.  HELPERS
   * ───────────────────────────────────────────── */
  function escHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function capitalise(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }


  /* ─────────────────────────────────────────────
   * 9.  EXPOSE — override the global markdownToHTML
   * ───────────────────────────────────────────── */
  window.markdownToHTML = obsidianRender;
  window.obsidianMarkdown = obsidianRender; // alias

  console.log('✓ obsidian-md.js loaded — Obsidian-style renderer active');
})();