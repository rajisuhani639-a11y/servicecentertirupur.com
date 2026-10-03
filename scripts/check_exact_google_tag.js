const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

let correctSrcCount = 0;
let correctConfigCount = 0;
let errors = 0;

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const srcMatch = content.match(/googletagmanager\.com\/gtag\/js\?id=([^"'>]+)/i);
  const cfgMatch = content.match(/gtag\('config',\s*'([^']+)'\)/i);

  if (srcMatch && srcMatch[1] === 'G-6B70TN6HP') correctSrcCount++;
  else {
    console.log(`Bad tag src in ${f}:`, srcMatch ? srcMatch[1] : 'NONE');
    errors++;
  }

  if (cfgMatch && cfgMatch[1] === 'G-6B70TN6HP') correctConfigCount++;
  else {
    console.log(`Bad tag config in ${f}:`, cfgMatch ? cfgMatch[1] : 'NONE');
    errors++;
  }
});

console.log(`Files with googletagmanager.com/gtag/js?id=G-6B70TN6HP: ${correctSrcCount} / ${allFiles.length}`);
console.log(`Files with gtag('config', 'G-6B70TN6HP'): ${correctConfigCount} / ${allFiles.length}`);
console.log(`Errors: ${errors}`);
