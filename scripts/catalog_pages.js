const fs = require('fs');
const path = require('path');

const dirs = ['ac', 'fridge', 'washing-machine', 'tv', 'service-center'];
const catalog = {
  ac: [],
  fridge: [],
  wm: [],
  tv: [],
  sc: [],
  index: [{ file: 'index.html', title: 'Home Appliance Service Center Kanyakumari', type: 'index' }]
};

function formatBrand(slug, category) {
  let clean = slug.replace('.html', '');
  if (category === 'ac') clean = clean.replace('-ac-repair-service-in-kanyakumari', '').replace('-ac-service-in-kanyakumari', '');
  if (category === 'fridge') clean = clean.replace('-refrigerator-repair-service-in-kanyakumari', '').replace('-fridge-repair-service-in-kanyakumari', '');
  if (category === 'wm') clean = clean.replace('-washing-machine-repair-service-in-kanyakumari', '');
  if (category === 'tv') clean = clean.replace('-tv-repair-service-in-kanyakumari', '');
  if (category === 'sc') clean = clean.replace('-service-center-kanyakumari', '');

  if (clean === 'ac-repair-service-in-kanyakumari' || clean === '') return 'All AC Brands';
  if (clean === 'refrigerator-repair-service-in-kanyakumari' || clean === '') return 'All Refrigerator Brands';
  if (clean === 'washing-machine-repair-service-in-kanyakumari' || clean === '') return 'All Washing Machine Brands';
  if (clean === 'tv-repair-service-in-kanyakumari' || clean === '') return 'All TV Brands';
  if (clean === 'home-appliance') return 'Home Appliance Multi-Brand';

  // Capitalize properly
  return clean.split('-').map(w => {
    if (w === 'o' || w === 'general') return w === 'o' ? 'O\'' : 'General';
    if (['lg', 'ifb', 'bpl', 'vw', 'tcl', 'ro', 'smps', 'ac', 'tv'].includes(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ').replace("O' General", "O'General");
}

fs.readdirSync('ac').filter(f => f.endsWith('.html')).forEach(f => {
  catalog.ac.push({ file: 'ac/' + f, slug: f, brand: formatBrand(f, 'ac') });
});

fs.readdirSync('fridge').filter(f => f.endsWith('.html')).forEach(f => {
  catalog.fridge.push({ file: 'fridge/' + f, slug: f, brand: formatBrand(f, 'fridge') });
});

fs.readdirSync('washing-machine').filter(f => f.endsWith('.html')).forEach(f => {
  catalog.wm.push({ file: 'washing-machine/' + f, slug: f, brand: formatBrand(f, 'wm') });
});

fs.readdirSync('tv').filter(f => f.endsWith('.html')).forEach(f => {
  catalog.tv.push({ file: 'tv/' + f, slug: f, brand: formatBrand(f, 'tv') });
});

fs.readdirSync('service-center').filter(f => f.endsWith('.html')).forEach(f => {
  catalog.sc.push({ file: 'servicecenter/' + f, slug: f, brand: formatBrand(f, 'sc') });
});

fs.writeFileSync('scripts/pages_catalog.json', JSON.stringify(catalog, null, 2));
console.log('Catalog generated successfully!');
console.log('AC:', catalog.ac.length);
console.log('Fridge:', catalog.fridge.length);
console.log('WM:', catalog.wm.length);
console.log('TV:', catalog.tv.length);
console.log('SC:', catalog.sc.length);
