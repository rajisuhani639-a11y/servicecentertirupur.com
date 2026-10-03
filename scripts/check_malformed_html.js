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
const report = {};

all.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Check for lines starting with ' style=' or containing naked 'style="padding:'
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('style=') || trimmed.startsWith('class=') || (trimmed.startsWith('border-left:') && !trimmed.startsWith('<!--')) || (trimmed.startsWith('background:') && !trimmed.startsWith('<!--'))) {
      report[f] = report[f] || [];
      report[f].push({ line: idx + 1, content: trimmed });
    }
    // Also check for `>style=` or `>class=` anywhere in the line
    if (/>\s*(?:style\s*=\s*"|class\s*=\s*")/i.test(line)) {
      report[f] = report[f] || [];
      report[f].push({ line: idx + 1, content: trimmed });
    }
  });
});

console.log('Files with malformed HTML attribute lines:', Object.keys(report).length);
Object.entries(report).forEach(([file, items]) => {
  console.log(`${file}: ${items.length} lines`);
  items.slice(0, 3).forEach(i => console.log(`   Line ${i.line}: ${i.content.slice(0, 80)}`));
});
