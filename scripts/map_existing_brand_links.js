const fs = require('fs');

const acFiles = fs.readdirSync('ac').filter(f => f.endsWith('.html'));
const fridgeFiles = fs.readdirSync('fridge').filter(f => f.endsWith('.html'));
const wmFiles = fs.readdirSync('washing-machine').filter(f => f.endsWith('.html'));
const tvFiles = fs.readdirSync('tv').filter(f => f.endsWith('.html'));

const mapping = {};

function addFiles(files, cat, pattern) {
  files.forEach(f => {
    const m = f.match(pattern);
    if (m) {
      const slug = m[1];
      if (!mapping[slug]) mapping[slug] = {};
      mapping[slug][cat] = f;
    }
  });
}

addFiles(acFiles, 'ac', /^([a-z0-9-]+)-ac-repair-service-in-karur\.html$/);
addFiles(fridgeFiles, 'fridge', /^([a-z0-9-]+)-refrigerator-repair-service-in-karur\.html$/);
addFiles(wmFiles, 'wm', /^([a-z0-9-]+)-washing-machine-repair-service-in-karur\.html$/);
addFiles(tvFiles, 'tv', /^([a-z0-9-]+)-tv-repair-service-in-karur\.html$/);

fs.writeFileSync('scripts/existing_brand_links.json', JSON.stringify(mapping, null, 2));
console.log('Saved existing_brand_links.json with', Object.keys(mapping).length, 'brands.');
