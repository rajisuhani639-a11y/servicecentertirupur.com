const brandMap = require('./brand_category_map.json');
const { introsData } = require('./build_sc_appliance_seo_intros.js');

function getApplianceSeoIntro(brandSlug, brandName, category, brandIndex, catIndex) {
  const variations = introsData[category];
  if (!variations || variations.length === 0) {
    return `Searching for a ${brandName} Service Center in Kanyakumari? For ${brandName} Repair Near Me and doorstep checking across Kanyakumari, our local technicians provide prompt diagnostic assistance.`;
  }

  const idx = (brandIndex * 5 + catIndex * 7 + brandSlug.length) % variations.length;
  return variations[idx](brandName);
}

const dupMap = {};
let total = 0;
let bIndex = 0;

for (const [slug, info] of Object.entries(brandMap)) {
  if (slug === 'home-appliance') continue;

  info.categories.forEach((cat, catIdx) => {
    total++;
    const intro = getApplianceSeoIntro(slug, info.brandName, cat, bIndex, catIdx);
    if (!dupMap[intro]) dupMap[intro] = [];
    dupMap[intro].push(`${info.brandName} (${cat})`);
  });
  bIndex++;
}

console.log(`Total sections evaluated: ${total}`);
let dups = 0;
for (const [intro, brands] of Object.entries(dupMap)) {
  if (brands.length > 1) {
    dups++;
    console.log(`Duplicate found (${brands.length}x): [${brands.join(', ')}]\n"${intro.substring(0, 80)}..."\n`);
  }
}

if (dups === 0) {
  console.log('✅ ZERO DUPLICATES ACROSS ALL 209 SECTIONS!');
} else {
  console.log(`⚠️ Found ${dups} duplicates.`);
}
