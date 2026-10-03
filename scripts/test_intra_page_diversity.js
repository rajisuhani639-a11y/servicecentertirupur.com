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

// Test Acer, Lloyd, Samsung, Bosch, IFB
for (const testSlug of ['acer', 'lloyd', 'samsung', 'bosch', 'ifb']) {
  const info = brandMap[testSlug];
  console.log(`\n================== ${info.brandName} (${testSlug}) ==================`);
  info.categories.forEach((cat, idx) => {
    const intro = getApplianceSeoIntro(testSlug, info.brandName, cat, 0, idx);
    console.log(`[${cat}]: "${intro}"\n`);
  });
}
