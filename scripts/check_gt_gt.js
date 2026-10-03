const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getAllHtml(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = getAllHtml('.');
let issues = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('>>') && !l.includes('=>') && !l.includes('javascript')) {
      issues.push({ file: f, line: idx + 1, content: l.trim() });
    }
  });
});

console.log('Total >> lines found:', issues.length);
console.log('Sample 10 issues:');
issues.slice(0, 10).forEach(i => console.log(`${i.file}:${i.line} -> ${i.content}`));

// Are all issues on meta tags?
const metaIssues = issues.filter(i => i.content.includes('<meta'));
console.log('Meta tag >> issues:', metaIssues.length);
const nonMetaIssues = issues.filter(i => !i.content.includes('<meta'));
console.log('Non-meta >> issues:', nonMetaIssues.length);
if (nonMetaIssues.length > 0) {
  console.log('Non-meta issues:', nonMetaIssues);
}
