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

// Check each category
const categories = ['washing-machine', 'ac', 'fridge', 'tv', 'service-center', 'root'];

categories.forEach(cat => {
  const catFiles = all.filter(f => cat === 'root' ? !f.includes(path.sep) : f.startsWith(cat + path.sep));
  let issues = 0;
  catFiles.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const noScript = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
    
    // Check for naked attribute lines or `>style=` or `>class=`
    const nakedLines = noScript.split('\n').filter(l => {
      const t = l.trim();
      return t.startsWith('style=') || t.startsWith('class=') || (t.startsWith('border-left:') && !t.startsWith('<!--'));
    });
    
    if (nakedLines.length > 0) {
      issues += nakedLines.length;
      console.log(`[${cat}] Issue in ${f}: ${nakedLines.length} naked lines`);
    }
  });
  console.log(`Category [${cat}]: ${catFiles.length} files, ${issues} naked style issues found.`);
});
