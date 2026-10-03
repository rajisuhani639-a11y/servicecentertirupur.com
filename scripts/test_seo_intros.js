const brandMap = require('./brand_category_map.json');
const { getApplianceSeoIntro } = require('./build_sc_appliance_seo_intros.js');

const allIntros = [];
const dupMap = {};

let bIndex = 0;
for (const [slug, info] of Object.entries(brandMap)) {
  if (slug === 'home-appliance') continue;

  for (const cat of info.categories) {
    const intro = getApplianceSeoIntro(slug, info.brandName, cat, bIndex);
    allIntros.push({ brand: info.brandName, cat, intro });

    if (!dupMap[intro]) dupMap[intro] = [];
    dupMap[intro].push(`${info.brandName} (${cat})`);
  }
  bIndex++;
}

console.log(`Total sections generated: ${allIntros.length}`);

let dupsCount = 0;
for (const [intro, brands] of Object.entries(dupMap)) {
  if (brands.length > 1) {
    dupsCount++;
    console.log(`Duplicate found (${brands.length} times in [${brands.join(', ')}]):\n  "${intro.substring(0, 100)}..."\n`);
  }
}

if (dupsCount === 0) {
  console.log('✅ ALL 209 APPLIANCE SEO INTROS ARE 100% UNIQUE! ZERO DUPLICATES!');
} else {
  console.log(`⚠️ Found ${dupsCount} duplicate intros.`);
}

console.log('\n--- SAMPLE INTROS ---');
for (const item of allIntros.slice(0, 8)) {
  console.log(`[${item.brand} - ${item.cat}]:\n"${item.intro}"\n`);
}
