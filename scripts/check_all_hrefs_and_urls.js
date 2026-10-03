// check_all_hrefs_and_urls.js
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

const htmls = getAllHtml('.');
let nonSlashHrefs = [];
let allHrefs = [];

htmls.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hrefs = [...content.matchAll(/href=["']([^"']*service-center[^"']*)["']/gi)].map(m => m[1]);
  hrefs.forEach(h => {
    allHrefs.push({ file, href: h });
    if (!h.includes('/servicecenter/')) {
      nonSlashHrefs.push({ file, href: h });
    }
  });
});

console.log('Total hrefs containing service-center:', allHrefs.length);
console.log('Hrefs matching service-center that do NOT include /servicecenter/:', nonSlashHrefs.length);
if (nonSlashHrefs.length > 0) {
  console.log('Samples of non /servicecenter/ hrefs:', nonSlashHrefs.slice(0, 10));
}
