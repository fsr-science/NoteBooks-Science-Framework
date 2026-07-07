import { readFileSync } from 'fs';
import { join } from 'path';

export default function Page() {
  // Read the index.html from public directory
  let indexHtml = '';
  try {
    const publicPath = join(process.cwd(), 'public', 'index.html');
    indexHtml = readFileSync(publicPath, 'utf-8');
  } catch (error) {
    console.error('[v0] Failed to load index.html:', error);
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>NoteBooks Science Framework</h1>
        <p>Loading frontend...</p>
      </div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: indexHtml }}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
