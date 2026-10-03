const fs = require('fs');

let content = fs.readFileSync('scripts/generate_sc_comprehensive_content.js', 'utf8');

const oldFn = `function generateAllBrandApplianceSections(brandSlug, brandName, categories) {
  let html = '';
  let isAlt = false;

  for (const cat of categories) {
    const generator = generatorMap[cat];
    if (generator) {
      const bg = isAlt ? '#f8fafc' : '#ffffff';
      html += generator(brandName, brandSlug, bg) + '\\n';
      isAlt = !isAlt;
    }
  }

  return html;
}`;

const newFn = `function generateAllBrandApplianceSections(brandSlug, brandName, categories, brandIndex = 0) {
  let html = '';
  let isAlt = false;

  categories.forEach((cat, catIdx) => {
    const generator = generatorMap[cat];
    if (generator) {
      const bg = isAlt ? '#f8fafc' : '#ffffff';
      html += generator(brandName, brandSlug, bg, brandIndex, catIdx) + '\\n';
      isAlt = !isAlt;
    }
  });

  return html;
}`;

content = content.replace(oldFn, newFn);
fs.writeFileSync('scripts/generate_sc_comprehensive_content.js', content, 'utf8');
console.log('Updated generate_sc_comprehensive_content.js');
