const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') {
        res = res.concat(getHtmlFiles(full));
      }
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getHtmlFiles('.');
const urlMap = {};

htmlFiles.forEach(f => {
  const norm = f.replace(/^[.\\\/]+/, '').replace(/\\/g, '/');
  let cbeNorm = norm;
  if (norm.includes('kanyakumari')) {
    cbeNorm = norm.replace(/kanyakumari/g, 'coimbatore');
  }
  urlMap[norm] = cbeNorm;
});

console.log('Total HTML files mapped:', Object.keys(urlMap).length);
fs.writeFileSync('scripts/coimbatore_url_map.json', JSON.stringify(urlMap, null, 2));
module.exports = urlMap;
