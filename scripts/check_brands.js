const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));

const brands = new Set();
pages.forEach(p => {
  brands.add(p.brand);
});

console.log('Total unique brands across all pages:', brands.size);
console.log(Array.from(brands).sort());
