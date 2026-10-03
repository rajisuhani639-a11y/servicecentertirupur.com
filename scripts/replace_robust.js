const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

let count = 0;
allFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (/\brobust\b/gi.test(content)) {
    const matches = content.match(/\brobust\b/gi);
    count += matches.length;
    content = content.replace(/\brobust\b/gi, 'durable');
    fs.writeFileSync(f, content, 'utf8');
  }
});

console.log(`Replaced ${count} occurrences of "robust" with "durable".`);
