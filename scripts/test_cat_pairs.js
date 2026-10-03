const fs = require('fs');
const brandMap = require('./brand_category_map.json');

console.log('Total brands in map:', Object.keys(brandMap).length);

// Check all categories and counts
const catBrands = {};
for (const [slug, info] of Object.entries(brandMap)) {
  for (const cat of info.categories) {
    if (!catBrands[cat]) catBrands[cat] = [];
    catBrands[cat].push(info.brandName);
  }
}

for (const [cat, brands] of Object.entries(catBrands)) {
  console.log(`${cat} (${brands.length}): ${brands.join(', ')}`);
}
