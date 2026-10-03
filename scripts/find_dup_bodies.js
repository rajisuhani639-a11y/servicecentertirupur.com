const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtml = walk(process.cwd());

const bodyMap = {};
for (const file of allHtml) {
  const content = fs.readFileSync(file, 'utf8');
  // Match experiences
  const expMatches = [...content.matchAll(/<p style="font-size: 0\.88rem; line-height: 1\.6; color: var\(--text-color\);">(.*?)<\/p>/gi)];
  for (const m of expMatches) {
    const b = m[1].trim();
    if (!bodyMap[b]) bodyMap[b] = [];
    bodyMap[b].push(path.basename(file));
  }
}

console.log('Duplicate experience bodies:');
for (const [b, files] of Object.entries(bodyMap)) {
  if (files.length > 1) {
    console.log(`- Count ${files.length} in [${files.join(', ')}]:\n  "${b.substring(0, 100)}..."`);
  }
}
