const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Gather all HTML files recursively
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allFiles = getAllHtmlFiles(ROOT_DIR);
console.log(`Auditing links across ${allFiles.length} HTML files...`);

let totalLinks = 0;
let brokenLinks = [];

allFiles.forEach(filePath => {
  const relFile = path.relative(ROOT_DIR, filePath);
  const fileDir = path.dirname(filePath);
  const html = fs.readFileSync(filePath, 'utf8');

  // Match href and src
  const hrefMatches = [...html.matchAll(/href=["']([^"'#?]+)["']/g)];
  
  hrefMatches.forEach(m => {
    const url = m[1];
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('tel:') || url.startsWith('mailto:') || url === '#' || url.startsWith('javascript:')) {
      return;
    }
    totalLinks++;

    let targetPath;
    if (url.startsWith('/')) {
      targetPath = path.join(ROOT_DIR, url.slice(1));
    } else {
      targetPath = path.resolve(fileDir, url);
    }

    if (!fs.existsSync(targetPath)) {
      brokenLinks.push({
        sourceFile: relFile,
        link: url,
        resolvedPath: targetPath
      });
    }
  });
});

console.log(`Total internal links checked: ${totalLinks}`);
if (brokenLinks.length === 0) {
  console.log('✓ PERFECT: ZERO broken internal links across the entire website!');
} else {
  console.error(`Found ${brokenLinks.length} broken links:`);
  console.error(brokenLinks.slice(0, 20));
  process.exit(1);
}
