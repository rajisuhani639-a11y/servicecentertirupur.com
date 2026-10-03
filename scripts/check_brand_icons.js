const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(path.resolve(__dirname, '..'));
console.log('Total HTML files:', files.length);

const brandIconMap = new Map();
let pagesWithoutBrandIcon = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<div class="brand-icon">([\s\S]*?)<\/div>/);
  if (match) {
    const icon = match[1].trim();
    if (!brandIconMap.has(icon)) {
      brandIconMap.set(icon, []);
    }
    brandIconMap.get(icon).push(path.relative(path.resolve(__dirname, '..'), f));
  } else {
    pagesWithoutBrandIcon.push(path.relative(path.resolve(__dirname, '..'), f));
  }
});

console.log('Pages without brand-icon:', pagesWithoutBrandIcon.length);
console.log('Unique brand-icon variations:', brandIconMap.size);

let idx = 1;
for (const [icon, list] of brandIconMap.entries()) {
  console.log(`\n--- VARIATION ${idx++} (${list.length} pages, e.g. ${list[0]}) ---`);
  console.log(icon);
}
