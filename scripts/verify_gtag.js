// verify_gtag.js
const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let res = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const full = path.join(dir, d.name);
    if (d.isDirectory() && d.name !== 'node_modules' && d.name !== '.git') {
      res = res.concat(getAllHtml(full));
    } else if (d.isFile() && d.name.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getAllHtml('.');
console.log(`Checking Google Tag on ${htmlFiles.length} HTML files...`);

let okCount = 0;
const issues = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Check script tag
  const hasScript = content.includes('https://www.googletagmanager.com/gtag/js?id=G-7JTM41CMV7');
  const hasConfig = content.includes("gtag('config', 'G-7JTM41CMV7');");

  // Check for other G- tags in gtag calls
  const allGtags = [...content.matchAll(/googletagmanager\.com\/gtag\/js\?id=([A-Z0-9_-]+)/g)].map(m => m[1]);
  const allConfigs = [...content.matchAll(/gtag\(\s*['"]config['"]\s*,\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

  if (!hasScript || !hasConfig) {
    issues.push({ file, problem: 'Missing standard gtag script or config' });
  } else if (allGtags.length !== 1 || allConfigs.length !== 1) {
    issues.push({ file, problem: `Multiple gtag calls: scripts=${allGtags.length}, configs=${allConfigs.length}` });
  } else if (allGtags[0] !== 'G-7JTM41CMV7' || allConfigs[0] !== 'G-7JTM41CMV7') {
    issues.push({ file, problem: `Foreign tag: script=${allGtags[0]}, config=${allConfigs[0]}` });
  } else {
    okCount++;
  }
});

console.log(`Google Tag G-7JTM41CMV7 Status: ${okCount} / ${htmlFiles.length} files PERFECT.`);
if (issues.length > 0) {
  console.log('Issues found:', issues);
} else {
  console.log('ZERO Google Tag issues. Exactly 1 clean instance of G-7JTM41CMV7 on every single page.');
}
