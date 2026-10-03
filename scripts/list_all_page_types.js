const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const all = getHtmlFiles('.');
const byCategory = {};

all.forEach(f => {
  const parts = f.split(path.sep);
  const cat = parts.length > 1 ? parts[0] : 'root';
  byCategory[cat] = byCategory[cat] || [];
  byCategory[cat].push(f);
});

console.log('Category breakdown:');
Object.entries(byCategory).forEach(([c, files]) => {
  console.log(`${c}: ${files.length} files`);
});
