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
const pinLocCounts = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = [...content.matchAll(/📍\s*([A-Za-z\s]+?)(?:<\/div>|<\/span>)/g)];
  matches.forEach(m => {
    const loc = m[1].trim();
    pinLocCounts[loc] = (pinLocCounts[loc] || 0) + 1;
  });
});

console.log('PIN LOCALITY COUNTS:');
console.log(Object.entries(pinLocCounts).sort((a,b) => b[1] - a[1]));
