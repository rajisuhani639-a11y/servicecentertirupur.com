const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) results = results.concat(getHtmlFiles(fullPath));
    else if (file.endsWith('.html')) results.push(fullPath);
  });
  return results;
}

const all = getHtmlFiles('.');
let removedCount = 0;

all.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('class="top-bar"')) {
    // Replace the top bar block including optional comment
    const newContent = content.replace(/[ \t]*(?:<!--\s*Top Information Bar\s*-->\s*)?<div class=["']top-bar["'][\s\S]*?<\/div>\s*<\/div>\s*/i, '');
    if (newContent !== content) {
      fs.writeFileSync(f, newContent, 'utf8');
      removedCount++;
    }
  }
});

console.log(`Successfully removed top information bar from ${removedCount} files.`);
