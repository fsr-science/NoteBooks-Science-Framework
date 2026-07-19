/**
 * PR Submission API Endpoint
 * Accepts markdown changes and creates a GitHub pull request
 */

const { Octokit } = require('@octokit/rest');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filePath, content, originalContent } = req.body;

    if (!filePath || !content) {
      return res.status(400).json({ error: 'Missing filePath or content' });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return res.status(500).json({ error: 'GitHub token not configured' });
    }

    const octokit = new Octokit({ auth: token });
    
    // Repository info
    const owner = 'fsr-official';
    const repo = 'NoteBooks-Framework';
    const mainBranch = 'main';
    const branchName = `pr/edit-${Date.now()}`;
    const fileName = filePath.split('/').pop();

    // 1. Get the main branch reference
    const mainRef = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${mainBranch}`
    });

    // 2. Create a new branch
    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: mainRef.data.object.sha
    });

    // 3. Update the file content in the new branch
    const fileContent = Buffer.from(content).toString('base64');
    
    try {
      // Try to get existing file
      const existingFile = await octokit.repos.getContent({
        owner,
        repo,
        path: filePath,
        ref: branchName
      });

      // Update existing file
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: filePath,
        message: `Update ${fileName}`,
        content: fileContent,
        sha: existingFile.data.sha,
        branch: branchName
      });
    } catch (e) {
      if (e.status === 404) {
        // Create new file
        await octokit.repos.createOrUpdateFileContents({
          owner,
          repo,
          path: filePath,
          message: `Create ${fileName}`,
          content: fileContent,
          branch: branchName
        });
      } else {
        throw e;
      }
    }

    // 4. Create pull request
    const pr = await octokit.pulls.create({
      owner,
      repo,
      title: `Update: ${fileName}`,
      body: `**Automated PR from NoteBooks Editor**\n\n**File:** ${filePath}\n\n**Summary:** Changes to ${fileName}\n\n---\n*This PR was created through the NoteBooks markdown editor. Please review and approve if the changes are acceptable.*`,
      head: branchName,
      base: mainBranch
    });

    return res.status(200).json({
      success: true,
      prUrl: pr.data.html_url,
      prNumber: pr.data.number
    });

  } catch (error) {
    console.error('PR submission error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to create pull request'
    });
  }
}
