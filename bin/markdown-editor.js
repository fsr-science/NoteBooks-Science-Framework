// Markdown Editor Module
// Provides an in-browser editor pane for markdown files.
// Edits are stored in sessionStorage and survive page navigation within the session.
// The split-view wiring (left preview ↔ right editor) is handled by app.js;
// this module is responsible only for the editor pane itself.

const MarkdownEditor = (() => {
  const EDITOR_STORAGE_PREFIX = 'md-editor-';

  // ─── Format action table ──────────────────────────────────────────────────
  const FORMAT_ACTIONS = {
    bold:    { before: '**',  after: '**'  },
    italic:  { before: '*',   after: '*'   },
    strike:  { before: '~~',  after: '~~'  },
    heading: { before: '# ',  after: ''    },
    code:    { before: '`',   after: '`'   },
    quote:   { before: '> ',  after: ''    },
    ul:      { before: '- ',  after: ''    },
    ol:      { before: '1. ', after: ''    },
    h2:      { before: '## ', after: ''    },
    h3:      { before: '### ', after: ''   },
    codeblock: { before: '```\n', after: '\n```' },
  };

  // ─── Internal helpers ─────────────────────────────────────────────────────

  function showToast(wrapper, message, type) {
    type = type || 'success';
    const bar = wrapper && wrapper.querySelector('.mde-status-bar');
    if (!bar) return;
    bar.textContent = message;
    bar.className = 'mde-status-bar mde-status-' + type + ' mde-status-visible';
    clearTimeout(bar._hide);
    bar._hide = setTimeout(function() { bar.className = 'mde-status-bar'; }, 2500);
  }

  // ─── Text insertion helpers ───────────────────────────────────────────────

  function insertFormat(before, after, ta) {
    if (!ta) return;
    var start = ta.selectionStart;
    var end   = ta.selectionEnd;
    var text  = ta.value;
    var sel   = text.substring(start, end) || 'text';
    ta.value = text.substring(0, start) + before + sel + after + text.substring(end);
    ta.selectionStart = start + before.length;
    ta.selectionEnd   = start + before.length + sel.length;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertLink(ta) {
    if (!ta) return;
    var url = prompt('Enter URL:', 'https://');
    if (!url) return;
    var linkText = prompt('Enter link text:', ta.value.substring(ta.selectionStart, ta.selectionEnd) || 'link');
    if (linkText == null) return;
    var start = ta.selectionStart;
    var md    = '[' + linkText + '](' + url + ')';
    ta.value  = ta.value.substring(0, start) + md + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + md.length;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertTable(ta) {
    if (!ta) return;
    var cols = parseInt(prompt('Number of columns:', '3'), 10);
    var rows = parseInt(prompt('Number of data rows:', '2'), 10);
    if (!cols || !rows || cols < 1 || rows < 1) return;
    var header  = '| ' + Array.from({ length: cols }, function(_, i) { return 'Header ' + (i + 1); }).join(' | ') + ' |';
    var divider = '| ' + Array(cols).fill('---').join(' | ') + ' |';
    var dataRow = '| ' + Array(cols).fill('Cell').join(' | ') + ' |';
    var table   = [header, divider].concat(Array(rows).fill(dataRow)).join('\n');
    var start   = ta.selectionStart;
    ta.value = ta.value.substring(0, start) + '\n' + table + '\n' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + table.length + 2;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertMath(ta, isBlock) {
    if (!ta) return;
    var before = isBlock ? '\n$$\n' : '$';
    var after = isBlock ? '\n$$\n' : '$';
    var start = ta.selectionStart;
    var sel = ta.value.substring(start, ta.selectionEnd) || 'a^2 + b^2 = c^2';
    ta.value = ta.value.substring(0, start) + before + sel + after + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = start + before.length;
    ta.selectionEnd = start + before.length + sel.length;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertDesmos(ta) {
    if (!ta) return;
    var desmosCode = '```desmos\n// Graph goes here\ny = x^2\n```';
    var start = ta.selectionStart;
    ta.value = ta.value.substring(0, start) + '\n' + desmosCode + '\n' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + desmosCode.length + 2;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertTikz(ta) {
    if (!ta) return;
    var tikzCode = '```tikz\n\\draw (0,0) -- (1,1);\n\\draw (1,0) -- (0,1);\n```';
    var start = ta.selectionStart;
    ta.value = ta.value.substring(0, start) + '\n' + tikzCode + '\n' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + tikzCode.length + 2;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertCallout(ta, type) {
    if (!ta) return;
    type = type || 'note';
    var titles = {
      note: 'Note',
      info: 'Info',
      tip: 'Tip',
      warning: 'Warning',
      danger: 'Danger',
      example: 'Example'
    };
    var calloutText = '> [!' + type.toUpperCase() + '] ' + titles[type] + '\n> Your content here';
    var start = ta.selectionStart;
    ta.value = ta.value.substring(0, start) + '\n' + calloutText + '\n' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + calloutText.length + 2;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  // ─── Stats ────────────────────────────────────────────────────────────────

  function updateStats(ta, statsEl) {
    if (!statsEl) return;
    var text  = ta.value;
    var words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    var lines = text === '' ? 0 : text.split('\n').length;
    statsEl.textContent = words + ' words \u00b7 ' + text.length + ' chars \u00b7 ' + lines + ' lines';
  }

  // ─── Keyboard shortcuts ───────────────────────────────────────────────────

  function attachShortcuts(ta, wrapper, storageKey, onClose) {
    ta.addEventListener('keydown', function(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      var k = e.key.toLowerCase();
      if (k === 'b') { e.preventDefault(); insertFormat('**', '**', ta); return; }
      if (k === 'i') { e.preventDefault(); insertFormat('*',  '*',  ta); return; }
      if (k === 'k') { e.preventDefault(); insertLink(ta); return; }
      if (k === 'm') { 
        e.preventDefault(); 
        if (e.shiftKey) {
          insertMath(ta, true); // Ctrl+Shift+M = block math
        } else {
          insertMath(ta, false); // Ctrl+M = inline math
        }
        return; 
      }
      if (k === 'd') { e.preventDefault(); insertDesmos(ta); return; }
      if (k === 't') { e.preventDefault(); insertTikz(ta); return; }
      if (k === 's') {
        e.preventDefault();
        sessionStorage.setItem(storageKey, ta.value);
        if (onClose) onClose(ta.value);
        showToast(wrapper, '\u2713 Saved');
        return;
      }
    });

    // Tab → 2 spaces
    ta.addEventListener('keydown', function(e) {
      if (e.key !== 'Tab') return;
      e.preventDefault();
      var s = ta.selectionStart;
      ta.value = ta.value.substring(0, s) + '  ' + ta.value.substring(ta.selectionEnd);
      ta.selectionStart = ta.selectionEnd = s + 2;
      ta.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  // ─── CSS injection (once) ─────────────────────────────────────────────────

  function buildStyles() {
    if (document.getElementById('mde-styles')) return;
    var style = document.createElement('style');
    style.id = 'mde-styles';
    style.textContent = [
      '.mde-wrapper{display:flex;flex-direction:column;height:100%;font-family:system-ui,sans-serif;',
        'background:#0a0e1a;color:#e2e8f0;overflow:hidden;position:relative;}',
      '.mde-toolbar{display:flex;align-items:center;gap:3px;padding:6px 10px;background:#0f1525;',
        'border-bottom:1px solid #1e293b;flex-shrink:0;flex-wrap:wrap;row-gap:4px;overflow-x:auto;max-width:100%;}',
      '.mde-toolbar-sep{width:1px;height:18px;background:#1e293b;margin:0 3px;flex-shrink:0;}',
      '.mde-toolbar-right{margin-left:auto;display:flex;gap:5px;align-items:center;}',
      '.mde-btn{display:inline-flex;align-items:center;justify-content:center;gap:4px;',
        'padding:4px 10px;border:1px solid transparent;border-radius:5px;font-size:11px;',
        'cursor:pointer;background:transparent;color:#64748b;line-height:1;font-family:inherit;',
        'min-width:30px;height:28px;transition:background .12s,color .12s,border-color .12s;',
        'white-space:nowrap;flex-shrink:0;font-weight:500;}',
      '.mde-btn:hover{background:#334155;color:#e2e8f0;border-color:#475569;}',
      '.mde-btn:active{transform:scale(0.95);background:#1e293b;}',
      '.mde-btn-primary{background:#1d4ed8;color:#fff;border-color:#2563eb;padding:3px 12px;}',
      '.mde-btn-primary:hover{background:#1e40af;color:#fff;border-color:#1d4ed8;}',
      '.mde-btn-danger{color:#f87171;border-color:transparent;}',
      '.mde-btn-danger:hover{background:#450a0a55;border-color:#f87171;color:#fca5a5;}',
      '.mde-textarea{width:100%;flex:1;resize:none;border:none;outline:none;background:#0a0e1a;',
        'color:#cbd5e1;font-family:"JetBrains Mono","Cascadia Code","Fira Code",monospace;',
        'font-size:13px;line-height:1.75;padding:16px 20px;box-sizing:border-box;',
        'tab-size:2;caret-color:#3b82f6;}',
      '.mde-textarea::selection{background:#1d4ed844;}',
      '.mde-footer{display:flex;align-items:center;justify-content:space-between;padding:4px 12px;',
        'background:#0f1525;border-top:1px solid #1e293b;font-size:11px;color:#334155;',
        'flex-shrink:0;gap:10px;}',
      '.mde-stats{flex:1;}',
      '.mde-hint{font-size:10.5px;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
      '.mde-unsaved-dot{width:6px;height:6px;border-radius:50%;background:#facc15;',
        'display:inline-block;margin-left:4px;vertical-align:middle;opacity:0;transition:opacity .2s;}',
      '.mde-unsaved-dot.visible{opacity:1;}',
      '.mde-status-bar{position:absolute;bottom:34px;left:50%;transform:translateX(-50%);',
        'background:#0f172a;border:1px solid #1e293b;color:#94a3b8;font-size:11.5px;',
        'padding:5px 14px;border-radius:999px;opacity:0;transition:opacity .18s;',
        'pointer-events:none;white-space:nowrap;z-index:20;}',
      '.mde-status-bar.mde-status-visible{opacity:1;}',
      '.mde-status-success{color:#4ade80;border-color:#14532d55;background:#052e1655;}',
      '.mde-status-error{color:#f87171;border-color:#7f1d1d55;background:#450a0a55;}',
    ].join('');
    document.head.appendChild(style);
  }

  // ─── Public: createEditorUI ───────────────────────────────────────────────

  function createEditorUI(container, filePath, originalContent, onClose) {
    buildStyles();

    var storageKey   = EDITOR_STORAGE_PREFIX + btoa(unescape(encodeURIComponent(filePath)));
    var savedContent = sessionStorage.getItem(storageKey);
    if (savedContent === null) savedContent = originalContent || '';

    // Wrapper
    var wrapper = document.createElement('div');
    wrapper.className = 'mde-wrapper';

    // Toolbar
    var toolbar = document.createElement('div');
    toolbar.className = 'mde-toolbar';

    function makeBtn(html, title, cls, onClick) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = ('mde-btn ' + (cls || '')).trim();
      btn.title = title || '';
      btn.innerHTML = html;
      btn.addEventListener('click', onClick);
      return btn;
    }

    var fmtButtons = [
      { html: '𝗕', title: 'Bold (Ctrl+B)',  key: 'bold'    },
      { html: '𝗜', title: 'Italic (Ctrl+I)',key: 'italic'  },
      { html: '~~S~~', title: 'Strikethrough',  key: 'strike'  },
      { html: '⎘', title: 'Code',        key: 'code'    },
    ];

    var headingButtons = [
      { html: 'H1', title: 'Heading 1', key: 'heading' },
      { html: 'H2', title: 'Heading 2', key: 'h2' },
      { html: 'H3', title: 'Heading 3', key: 'h3' },
    ];

    var listButtons = [
      { html: '• List', title: 'Unordered list', key: 'ul' },
      { html: '1. List', title: 'Ordered list', key: 'ol' },
      { html: '┐ Quote', title: 'Blockquote', key: 'quote' },
    ];

    var insertButtons = [
      { html: '🔗 Link', title: 'Insert link (Ctrl+K)' },
      { html: '⊞ Table', title: 'Insert table' },
      { html: '∑ Math', title: 'Inline math (Ctrl+M)' },
      { html: '∑∑ Block Math', title: 'Block math (Ctrl+Shift+M)' },
    ];

    var advancedButtons = [
      { html: '📊 Desmos', title: 'Insert Desmos graph (Ctrl+D)' },
      { html: '📐 TikZ', title: 'Insert TikZ diagram (Ctrl+T)' },
    ];

    var calloutButtons = [
      { html: '📝 Note', title: 'Insert note callout' },
      { html: '⚠️ Warning', title: 'Insert warning callout' },
      { html: 'ℹ️ Info', title: 'Insert info callout' },
      { html: '✓ Tip', title: 'Insert tip callout' },
    ];

    // textarea is declared here so closures below can reference it
    var textarea = document.createElement('textarea');

    // Format buttons
    fmtButtons.forEach(function(item) {
      var before = FORMAT_ACTIONS[item.key].before;
      var after  = FORMAT_ACTIONS[item.key].after;
      toolbar.appendChild(makeBtn(item.html, item.title, '', function() {
        insertFormat(before, after, textarea);
      }));
    });

    // Separator
    var sep1 = document.createElement('div');
    sep1.className = 'mde-toolbar-sep';
    toolbar.appendChild(sep1);

    // Heading buttons
    headingButtons.forEach(function(item) {
      var before = FORMAT_ACTIONS[item.key].before;
      var after  = FORMAT_ACTIONS[item.key].after;
      toolbar.appendChild(makeBtn(item.html, item.title, '', function() {
        insertFormat(before, after, textarea);
      }));
    });

    // Separator
    var sep2 = document.createElement('div');
    sep2.className = 'mde-toolbar-sep';
    toolbar.appendChild(sep2);

    // List buttons
    listButtons.forEach(function(item) {
      var before = FORMAT_ACTIONS[item.key].before;
      var after  = FORMAT_ACTIONS[item.key].after;
      toolbar.appendChild(makeBtn(item.html, item.title, '', function() {
        insertFormat(before, after, textarea);
      }));
    });

    // Separator
    var sep3 = document.createElement('div');
    sep3.className = 'mde-toolbar-sep';
    toolbar.appendChild(sep3);

    // Insert buttons
    toolbar.appendChild(makeBtn(insertButtons[0].html, insertButtons[0].title, '', function() { insertLink(textarea); }));
    toolbar.appendChild(makeBtn(insertButtons[1].html, insertButtons[1].title, '', function() { insertTable(textarea); }));
    toolbar.appendChild(makeBtn(insertButtons[2].html, insertButtons[2].title, '', function() { insertMath(textarea, false); }));
    toolbar.appendChild(makeBtn(insertButtons[3].html, insertButtons[3].title, '', function() { insertMath(textarea, true); }));

    // Separator
    var sep4 = document.createElement('div');
    sep4.className = 'mde-toolbar-sep';
    toolbar.appendChild(sep4);

    // Advanced buttons
    toolbar.appendChild(makeBtn(advancedButtons[0].html, advancedButtons[0].title, '', function() { insertDesmos(textarea); }));
    toolbar.appendChild(makeBtn(advancedButtons[1].html, advancedButtons[1].title, '', function() { insertTikz(textarea); }));

    // Separator
    var sep5 = document.createElement('div');
    sep5.className = 'mde-toolbar-sep';
    toolbar.appendChild(sep5);

    // Callout buttons
    toolbar.appendChild(makeBtn(calloutButtons[0].html, calloutButtons[0].title, '', function() { insertCallout(textarea, 'note'); }));
    toolbar.appendChild(makeBtn(calloutButtons[1].html, calloutButtons[1].title, '', function() { insertCallout(textarea, 'warning'); }));
    toolbar.appendChild(makeBtn(calloutButtons[2].html, calloutButtons[2].title, '', function() { insertCallout(textarea, 'info'); }));
    toolbar.appendChild(makeBtn(calloutButtons[3].html, calloutButtons[3].title, '', function() { insertCallout(textarea, 'tip'); }));

    var right = document.createElement('div');
    right.className = 'mde-toolbar-right';

    var unsavedDot = document.createElement('span');
    unsavedDot.className = 'mde-unsaved-dot' + (savedContent !== (originalContent || '') ? ' visible' : '');
    unsavedDot.title = 'Unsaved changes';

    var doneBtn = makeBtn('\u2713 Done', 'Save & close (Ctrl+S)', 'mde-btn-primary', function() {
      sessionStorage.setItem(storageKey, textarea.value);
      if (onClose) onClose(textarea.value);
      showToast(wrapper, '\u2713 Applied');
      unsavedDot.classList.remove('visible');
    });

    var revertBtn = makeBtn('\u21bb Revert', 'Revert to original', 'mde-btn-danger', function() {
      if (!confirm('Revert all edits and restore original content?')) return;
      textarea.value = originalContent || '';
      sessionStorage.removeItem(storageKey);
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      showToast(wrapper, '\u21bb Reverted');
      unsavedDot.classList.remove('visible');
    });

    right.appendChild(unsavedDot);
    right.appendChild(doneBtn);
    right.appendChild(revertBtn);
    toolbar.appendChild(right);

    // Textarea
    textarea.className   = 'mde-textarea';
    textarea.value       = savedContent;
    textarea.spellcheck  = true;
    textarea.placeholder = 'Start writing markdown\u2026';

    // Footer
    var footer = document.createElement('div');
    footer.className = 'mde-footer';

    var statsEl = document.createElement('span');
    statsEl.className = 'mde-stats';

    var hint = document.createElement('span');
    hint.className = 'mde-hint';
    hint.textContent = 'Ctrl+B Bold \u00b7 Ctrl+I Italic \u00b7 Ctrl+K Link \u00b7 Ctrl+M Math \u00b7 Ctrl+D Desmos \u00b7 Ctrl+T TikZ \u00b7 Ctrl+S Save';

    footer.appendChild(statsEl);
    footer.appendChild(hint);

    // Toast
    var toast = document.createElement('div');
    toast.className = 'mde-status-bar';

    // Assemble
    wrapper.appendChild(toolbar);
    wrapper.appendChild(textarea);
    wrapper.appendChild(footer);
    wrapper.appendChild(toast);

    // Events
    textarea.addEventListener('input', function() {
      sessionStorage.setItem(storageKey, textarea.value);
      updateStats(textarea, statsEl);
      unsavedDot.classList.add('visible');
    });

    attachShortcuts(textarea, wrapper, storageKey, onClose);

    // Mount
    container.innerHTML = '';
    container.appendChild(wrapper);

    // Initial render
    updateStats(textarea, statsEl);
    requestAnimationFrame(function() { textarea.focus(); });

    // External references
    wrapper._textarea        = textarea;
    wrapper._originalContent = originalContent;
    wrapper._filePath        = filePath;
    wrapper._storageKey      = storageKey;
    wrapper._onClose         = onClose;

    return wrapper;
  }

  // ─── Session helpers ──────────────────────────────────────────────────────

  function _key(filePath) {
    return EDITOR_STORAGE_PREFIX + btoa(unescape(encodeURIComponent(filePath)));
  }

  function clearSession(filePath)     { sessionStorage.removeItem(_key(filePath)); }
  function hasUnsavedEdits(filePath)  { return sessionStorage.getItem(_key(filePath)) !== null; }
  function getSavedContent(filePath)  { return sessionStorage.getItem(_key(filePath)); }

  // ─── Public API ───────────────────────────────────────────────────────────

  return {
    createEditorUI,
    clearSession,
    hasUnsavedEdits,
    getSavedContent,
    insertFormat: function(before, after, ta) { insertFormat(before, after, ta); },
    insertLink:   function(ta) { insertLink(ta); },
    insertTable:  function(ta) { insertTable(ta); },
  };
})();
