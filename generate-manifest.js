const fs = require('fs');
const path = require('path');

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
      description: "Auto-generated file entry."
    };
  });

const manifest = { files: manifestFiles };

// Write the updated manifest
const manifestPath = path.join('assignments', 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`Success! manifest.json has been updated. Added ${manifestFiles.length} files to the library.`);
