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

const files = getHtmlFiles('.');
let found = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // strip scripts and styles
  const clean = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  // Match standalone AI in text (not inside tag attributes)
  const matches = [...clean.matchAll(/>([^<]*?\bAI\b[^<]*?)</gi)];
  matches.forEach(m => {
    const text = m[1].trim();
    // exclude Aiwa, AI Direct Drive if LG washer feature, etc.
    if (!text.includes('Aiwa')) {
      found.push({ file: f, text });
    }
  });
});

console.log(`Found ${found.length} mentions of standalone AI:`);
found.forEach(item => console.log(item.file, ':', item.text));
