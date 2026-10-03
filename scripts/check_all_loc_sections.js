const fs = require('fs');

function walk(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'scripts'].includes(item)) continue;
    const full = dir + '/' + item;
    if (fs.statSync(full).isDirectory()) res.push(...walk(full));
    else if (item.endsWith('.html')) res.push(full);
  }
  return res;
}

const htmlFiles = walk('.');
let hasIdLocalitiesSection = 0;
let hasLocalityQuadrant = 0;
let otherLocSections = [];

htmlFiles.forEach(f => {
  if (f.includes('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('id="localitiesSection"')) {
    hasIdLocalitiesSection++;
  } else if (c.includes('East Kanyakumari') || c.includes('Verified Areas') || c.includes('200 Localities') || c.includes('Coverage') || c.includes('localities')) {
    hasLocalityQuadrant++;
    otherLocSections.push(f);
  } else {
    otherLocSections.push(f + ' (NO LOC MATCH)');
  }
});

console.log('Total pages checked:', htmlFiles.length - 1);
console.log('Has id="localitiesSection":', hasIdLocalitiesSection);
console.log('Other with locality keywords:', hasLocalityQuadrant);
console.log('Sample others:', otherLocSections.slice(0, 10));
