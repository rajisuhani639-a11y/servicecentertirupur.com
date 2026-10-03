const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtml = walk(process.cwd());
console.log('Total HTML files:', allHtml.length);

let mapCount = 0;
let addressMatches = 0;
const addressVariants = new Set();

for (const file of allHtml) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('maps.google.com')) {
    mapCount++;
  }
  const lines = content.split('\n');
  lines.forEach(l => {
    if (l.includes('Court Road') || l.includes('Jawahar') || l.includes('639001')) {
      addressMatches++;
      addressVariants.add(l.trim());
    }
  });
}

console.log('Files with maps:', mapCount);
console.log('Total old address line matches:', addressMatches);
console.log('Old address line variants:');
for (const v of [...addressVariants].slice(0, 10)) {
  console.log(' - ', v);
}
