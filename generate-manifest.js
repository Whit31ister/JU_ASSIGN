const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://whit31ister.github.io/JU_ASSIGN/';

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

// Get all files inside assignments/
const allFiles = getFiles('assignments');

const manifestFiles = allFiles
  .filter(f => !f.endsWith('manifest.json') && !f.includes('.git') && !f.includes('.DS_Store'))
  .map(f => {
    // Convert OS specific paths (like Windows \) to web paths (/)
    const webPath = f.replace(/\\/g, '/');
    const filename = path.basename(f);
    
    // Auto-generate a readable title from the filename
    const title = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return {
      path: webPath,
      title: title,
      description: "Academic resource for university students."
    };
  });

const manifest = { files: manifestFiles };

// Write the updated manifest
const manifestPath = path.join('assignments', 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Success! manifest.json has been updated. Added ${manifestFiles.length} files to the library.`);

// Build sitemap.xml
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  // Extract unique folder paths
  const folders = new Set();
  manifestFiles.forEach(file => {
    const cleanPath = file.path.replace(/^assignments\//, '');
    const parts = cleanPath.split('/');
    for (let i = 1; i <= parts.length - 1; i++) {
      folders.add(parts.slice(0, i).join('/'));
    }
  });

  const urls = [];

  // 1. Root page (Priority 1.0)
  urls.push(`  <url>\n    <loc>${BASE_URL}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`);

  // 2. Folder / Semester URLs (Priority 0.8)
  Array.from(folders).sort().forEach(folder => {
    const encodedFolder = folder.split('/').map(encodeURIComponent).join('/');
    urls.push(`  <url>\n    <loc>${BASE_URL}#${encodedFolder}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`);
  });

  // 3. Direct document files (Priority 0.6)
  manifestFiles.forEach(file => {
    const rawPath = file.path.split('/').map(encodeURIComponent).join('/');
    urls.push(`  <url>\n    <loc>${BASE_URL}${rawPath}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`);
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  fs.writeFileSync('sitemap.xml', sitemapXml);
  console.log(`Success! sitemap.xml generated with ${urls.length} URLs.`);
}

generateSitemap();
