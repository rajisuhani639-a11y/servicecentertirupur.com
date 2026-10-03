const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') res = res.concat(getHtmlFiles(full));
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
  let karurNorm = norm;
  if (norm.includes('karur')) {
    karurNorm = norm.replace(/karur/g, 'karur');
  }
  urlMap[norm] = karurNorm;
});

module.exports = urlMap;
