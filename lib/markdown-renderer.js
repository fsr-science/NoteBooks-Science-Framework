// Enhanced Markdown Renderer with Obsidian callouts, CommonMark, and GFM support
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false,
  highlight: (str, lang) => {
    // Basic syntax highlighting - can be enhanced with Prism
    if (lang) {
      return `<pre class="language-${lang}"><code class="language-${lang}">${escapeHtml(str)}</code></pre>`;
    }
    return `<pre><code>${escapeHtml(str)}</code></pre>`;
  }
});

// Add footnote support
md.use(footnote);

// Callout type configurations (Obsidian-style)
const CALLOUT_TYPES = {
  note: {
    icon: '📝',
    color: '#0ea5e9',
    borderColor: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.1)',
  },
  abstract: {
    icon: '📋',
    color: '#06b6d4',
    borderColor: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)',
  },
  info: {
    icon: 'ℹ️',
    color: '#3b82f6',
    borderColor: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)',
  },
  tip: {
    icon: '💡',
    color: '#10b981',
    borderColor: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
  },
  success: {
    icon: '✅',
    color: '#10b981',
    borderColor: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
  },
  question: {
    icon: '❓',
    color: '#f59e0b',
    borderColor: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  warning: {
    icon: '⚠️',
    color: '#f59e0b',
    borderColor: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  failure: {
    icon: '❌',
    color: '#ef4444',
    borderColor: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
  },
  danger: {
    icon: '🔥',
    color: '#ef4444',
    borderColor: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
  },
  bug: {
    icon: '🐛',
    color: '#ef4444',
    borderColor: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
  },
  example: {
    icon: '📚',
    color: '#8b5cf6',
    borderColor: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
  },
  quote: {
    icon: '💬',
    color: '#6b7280',
    borderColor: '#6b7280',
    bgColor: 'rgba(107, 114, 128, 0.1)',
  },
  formula: {
    icon: '∑',
    color: '#7c3aed',
    borderColor: '#7c3aed',
    bgColor: 'rgba(124, 58, 237, 0.1)',
  },
};

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Custom rule for Obsidian-style callouts: > [!TYPE] Title
md.block.ruler.before(
  'fence',
  'obsidian_callout',
  (state, startLine, endLine, silent) => {
    const pos = state.bMarks[startLine] + state.tShift[startLine];
    const maximum = state.eMarks[startLine];

    // Check for blockquote start
    if (pos + 2 > maximum) return false;
    if (state.src[pos] !== '>') return false;
    if (state.src[pos + 1] !== ' ') return false;

    // Check for [!TYPE] pattern
    const match = state.src.slice(pos + 2, maximum).match(/^\[!(\w+)\]\s*(.*)/);
    if (!match) return false;

    const calloutType = match[1].toLowerCase();
    if (!CALLOUT_TYPES[calloutType]) return false;

    if (silent) return true;

    const calloutTitle = match[2] || calloutType.charAt(0).toUpperCase() + calloutType.slice(1);
    const config = CALLOUT_TYPES[calloutType];

    // Find the end of the callout block (continuation of blockquote)
    let lineContent = [];
    let currentLine = startLine + 1;

    while (currentLine < endLine) {
      const linePos = state.bMarks[currentLine] + state.tShift[currentLine];
      const lineMax = state.eMarks[currentLine];

      if (linePos + 2 <= lineMax && state.src[linePos] === '>' && state.src[linePos + 1] === ' ') {
        lineContent.push(state.src.slice(linePos + 2, lineMax));
        currentLine++;
      } else if (linePos === lineMax) {
        // Allow empty lines within callout
        lineContent.push('');
        currentLine++;
      } else {
        break;
      }
    }

    // Create token
    const token = state.push('obsidian_callout_open', 'div', 1);
    token.meta = { type: calloutType, title: calloutTitle, config };
    token.markup = '> [!' + calloutType + ']';
    token.block = true;

    // Process content inside callout
    const oldParent = state.parentType;
    state.parentType = 'obsidian_callout';

    const contentLine = startLine + 1;
    if (lineContent.length > 0) {
      const contentStr = lineContent.join('\n');
      const contentState = new state.constructor(contentStr, state.md, state.env, []);
      state.md.parse(contentStr, state.md, state.env, []);
      
      // Push parsed tokens
      const token2 = state.push('obsidian_callout_content', 'div', 0);
      token2.content = contentStr;
      token2.markup = '>';
      token2.block = true;
    }

    state.parentType = oldParent;

    const tokenClose = state.push('obsidian_callout_close', 'div', -1);
    tokenClose.markup = '>';

    state.line = currentLine;
    return true;
  }
);

// Render rules for callouts
md.renderer.rules.obsidian_callout_open = (tokens, idx) => {
  const token = tokens[idx];
  const { type, title, config } = token.meta;

  return `<div class="callout callout-${type}" style="
    border-left: 4px solid ${config.borderColor};
    background-color: ${config.bgColor};
    border-radius: 4px;
    padding: 12px;
    margin: 12px 0;
  ">
    <div class="callout-header" style="
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      font-weight: 600;
      color: ${config.color};
    ">
      <span class="callout-icon" style="font-size: 18px;">${config.icon}</span>
      <span class="callout-title">${escapeHtml(title)}</span>
    </div>
    <div class="callout-content" style="color: #333;">`;
};

md.renderer.rules.obsidian_callout_close = () => {
  return `    </div>
  </div>`;
};

md.renderer.rules.obsidian_callout_content = (tokens, idx) => {
  const token = tokens[idx];
  return token.content ? md.utils.escapeHtml(token.content) : '';
};

// Export rendering function
export function renderMarkdown(markdown) {
  try {
    return md.render(markdown);
  } catch (error) {
    console.error('Markdown rendering error:', error);
    return `<p>Error rendering markdown: ${escapeHtml(error.message)}</p>`;
  }
}

// Export for server-side parsing
export function renderMarkdownToHtml(markdown) {
  return renderMarkdown(markdown);
}

// Export markdown parser for reuse
export { md as markdownIt };
