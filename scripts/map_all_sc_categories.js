const fs = require('fs');
const path = require('path');

const scDir = path.join(__dirname, '..', 'service-center');
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

function categorizeCard(title) {
  const t = title.toLowerCase();
  if (t.includes('dishwasher')) return 'dishwasher';
  if (t.includes('washer dryer') || t.includes('clothes dryer')) return 'washer-dryer';
  if (t.includes('washing machine') || t.includes('washer')) return 'washing-machine';
  if (t.includes('chest freezer') || t.includes('deep freezer') || t.includes('freezer')) return 'chest-freezer';
  if (t.includes('refrigerator') || t.includes('fridge')) return 'refrigerator';
  if (t.includes('cassette ac') || t.includes('ductable ac') || t.includes('split ac') || t.includes('window ac') || t.includes('air conditioner') || t.endsWith(' ac')) return 'ac';
  if (t.includes('television') || t.includes('tv')) return 'tv';
  if (t.includes('microwave') || t.includes('built-in oven') || t.includes('oven')) return 'microwave-oven';
  if (t.includes('air cooler') || t.includes('cooler') || t.includes('circulator fan')) return 'air-cooler';
  if (t.includes('water purifier') || t.includes('water cooler') || t.includes('water dispenser')) return 'water-purifier';
  if (t.includes('geyser') || t.includes('water heater') || t.includes('heater')) return 'water-heater';
  if (t.includes('air purifier')) return 'air-purifier';
  if (t.includes('audio') || t.includes('soundbar') || t.includes('speaker')) return 'audio-system';
  if (t.includes('chimney') || t.includes('hob') || t.includes('kitchen') || t.includes('mixer')) return 'kitchen-appliances';
  if (t.includes('connected') || t.includes('smart')) return 'smart-appliances';
  return 'other: ' + title;
}

const brandAppMap = {};
for (const file of files) {
  const content = fs.readFileSync(path.join(scDir, file), 'utf8');
  const appSectionMatch = content.match(/<section[^>]*id=["']appliances["'][^>]*>([\s\S]*?)<\/section>/i) 
    || content.match(/Home Appliances We Service[\s\S]*?<\/section>/i);
  
  const cards = [];
  if (appSectionMatch) {
    const cardMatches = [...appSectionMatch[0].matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)];
    for (const m of cardMatches) {
      cards.push(m[1].replace(/<[^>]+>/g, '').trim());
    }
  }

  const brandSlug = file.replace('-service-center-kanyakumari.html', '');
  
  const categories = {};
  for (const c of cards) {
    const cat = categorizeCard(c);
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(c);
  }

  brandAppMap[brandSlug] = {
    file,
    cards,
    categories
  };
}

const catTotals = {};
for (const [brand, info] of Object.entries(brandAppMap)) {
  for (const cat of Object.keys(info.categories)) {
    catTotals[cat] = (catTotals[cat] || 0) + 1;
  }
}
console.log('Fixed Category frequencies:', catTotals);

console.log('\nDetailed Breakdown for Lloyd:');
console.log(brandAppMap['lloyd']);
console.log('\nDetailed Breakdown for Bosch:');
console.log(brandAppMap['bosch']);
console.log('\nDetailed Breakdown for IFB:');
console.log(brandAppMap['ifb']);
console.log('\nDetailed Breakdown for Samsung:');
console.log(brandAppMap['samsung']);
