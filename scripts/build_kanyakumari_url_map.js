const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') res = res.concat(getHtmlFiles(full));
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
  let kkNorm = norm;
  if (norm.includes('karur')) {
    kkNorm = norm.replace(/karur/g, 'kanyakumari');
  }
  urlMap[norm] = kkNorm;
});

module.exports = urlMap;
