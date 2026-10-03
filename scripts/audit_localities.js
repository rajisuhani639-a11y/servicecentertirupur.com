const fs = require('fs');

const rawLocalities = JSON.parse(fs.readFileSync('scripts/karur_localities.json', 'utf8'));

const prohibited = ['indirapuram', 'ghaziabad', 'delhi', 'noida', 'madurai', 'tirupur', 'tirunelveli', 'karur', 'nagercoil'];

const filtered = rawLocalities.filter(loc => {
  const text = (loc.title + ' ' + (loc.desc || '')).toLowerCase();
  for (const p of prohibited) {
    if (text.includes(p)) {
      console.log(`Filtering out locality "${loc.title}" due to match with "${p}"`);
      return false;
    }
  }
  return true;
});

console.log(`Original: ${rawLocalities.length}, Filtered: ${filtered.length}`);

// Let's also check if any other verified Karur locations from the project can be included without inventing:
// From wm 60 localities:
const wmZones = require('./karur_wm_60_localities.js');
const allWmLocs = [];
wmZones.forEach(z => {
  z.localities.forEach(l => {
    allWmLocs.push({
      name: l.name,
      landmark: l.landmark,
      pincode: l.pincode,
      zone: z.zone
    });
  });
});

console.log('WM Locs total:', allWmLocs.length);

const cleanWmLocs = allWmLocs.filter(l => {
  const text = (l.name + ' ' + l.landmark).toLowerCase();
  for (const p of prohibited) {
    if (text.includes(p)) {
      console.log(`Filtering out WM locality "${l.name}" due to match with "${p}"`);
      return false;
    }
  }
  return true;
});
console.log('Clean WM Locs total:', cleanWmLocs.length);

fs.writeFileSync('scripts/clean_localities_audit.json', JSON.stringify({
  filteredRaw: filtered,
  cleanWmLocs: cleanWmLocs
}, null, 2));
