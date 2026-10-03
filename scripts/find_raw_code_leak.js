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
const badFiles = [];

all.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Look for text outside of tags that looks like raw HTML/CSS attributes
  // For example: `>style="padding:` or `>style=` or `>class=` or `border-left:` outside of <style> and <script>
  
  // Remove script and style blocks first
  const noScript = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  
  // Look for text nodes containing style=" or class=" or border-left: or padding:
  const matches = [...noScript.matchAll(/>([^<]*?(?:style\s*=\s*"|class\s*=\s*"|border-left\s*:|background\s*:|padding\s*:|var\(--)[^<]*?)</gi)];
  if (matches.length > 0) {
    const hits = matches.map(m => m[1].trim()).filter(t => t.length > 0 && !t.startsWith('<!--'));
    if (hits.length > 0) {
      badFiles.push({ file: f, samples: hits });
    }
  }
});

console.log('Total files with raw HTML/CSS visible as text:', badFiles.length);
badFiles.forEach(b => {
  console.log('----------------------------------------------------');
  console.log('FILE:', b.file);
  b.samples.slice(0, 5).forEach((s, idx) => console.log(`  Hit ${idx+1}:`, s.slice(0, 120)));
});
