// GitHub Integration API Proxy
// All GitHub operations are handled server-side through this proxy

window.GithubProxy = {
  /**
   * Make a request to the GitHub API proxy endpoint
   * @param {string} endpoint - API endpoint
   * @param {object} options - Request options
   * @returns {Promise}
   */
  request: async function(endpoint, options = {}) {
    const response = await fetch('/api/gh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify({
        endpoint,
        ...options.body
      })
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return response.json();
  },

  /**
   * List repositories
   * @returns {Promise<Array>}
   */
  listRepos: async function() {
    return this.request('/user/repos');
  },

  /**
   * Get repository details
   * @param {string} owner
   * @param {string} repo
   * @returns {Promise}
   */
  getRepo: async function(owner, repo) {
    return this.request(`/repos/${owner}/${repo}`);
  },

  /**
   * List pull requests
   * @param {string} owner
   * @param {string} repo
   * @returns {Promise<Array>}
   */
  listPullRequests: async function(owner, repo) {
    return this.request(`/repos/${owner}/${repo}/pulls`);
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.GithubProxy;
}
