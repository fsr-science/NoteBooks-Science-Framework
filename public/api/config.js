// Application Configuration
// This file contains client-side configuration loaded from server

window.AppConfig = {
  version: '2.0.0',
  apiUrl: '/api',
  environment: process.env.NODE_ENV || 'production',
  
  features: {
    forum: true,
    markdown: true,
    github: true,
    desmos: true,
    pdfExport: true,
    adminPanel: true
  },

  // API endpoints
  endpoints: {
    health: '/api/health',
    forum: '/api/forum',
    admin: '/api/admin',
    markdown: '/api/markdown',
    mirrors: '/api/mirrors',
    prReview: '/api/pr-review',
    pdfExport: '/api/pdf-export',
    config: '/api/config'
  },

  // Load runtime configuration from server
  load: async function() {
    try {
      const response = await fetch('/api/config');
      if (response.ok) {
        const config = await response.json();
        Object.assign(window.AppConfig, config);
        console.log('[AppConfig] Loaded from server');
      }
    } catch (error) {
      console.error('[AppConfig] Failed to load from server:', error);
    }
    return window.AppConfig;
  }
};

// Auto-load config on script load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.AppConfig.load());
} else {
  window.AppConfig.load();
}
