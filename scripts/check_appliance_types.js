const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));

const applianceSet = new Set();
pages.forEach(p => {
  p.appliances.forEach(app => {
    // Strip brand name from appliance text, e.g. "Acer Air Conditioner" -> "Air Conditioner"
    let clean = app.replace(new RegExp(`^${p.brand}\\s*`, 'i'), '').trim();
    applianceSet.add(clean);
  });
});

console.log('Unique appliance types across all service center pages:');
console.log(Array.from(applianceSet));
