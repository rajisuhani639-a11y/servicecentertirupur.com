const fs = require('fs');

let content = fs.readFileSync('scripts/build_all_sc_appliance_sections.js', 'utf8');

// 1. Add import for getApplianceSeoIntro if not present
if (!content.includes('getApplianceSeoIntro')) {
  content = `const { getApplianceSeoIntro } = require('./build_sc_appliance_seo_intros.js');\n` + content;
}

// 2. Map of function name to category
const fnCategoryMap = {
  'generateScWmSection': 'washing-machine',
  'generateScFridgeSection': 'refrigerator',
  'generateScAcSection': 'ac',
  'generateScTvSection': 'tv',
  'generateScWasherDryerSection': 'washer-dryer',
  'generateScDishwasherSection': 'dishwasher',
  'generateScChestFreezerSection': 'chest-freezer',
  'generateScMicrowaveSection': 'microwave-oven',
  'generateScAirPurifierSection': 'air-purifier',
  'generateScAirCoolerSection': 'air-cooler',
  'generateScWaterPurifierSection': 'water-purifier',
  'generateScWaterHeaterSection': 'water-heater',
  'generateScAudioSection': 'audio-system',
  'generateScKitchenSection': 'kitchen-appliances',
  'generateScSmartSection': 'smart-appliances'
};

for (const [fnName, cat] of Object.entries(fnCategoryMap)) {
  // Update function signature:
  // e.g. function generateScWmSection(brandName, brandSlug, bg = '#ffffff')
  // -> function generateScWmSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0)
  const sigRegex = new RegExp(`function\\s+${fnName}\\s*\\(([^)]*)\\)\\s*\\{`, 'g');
  content = content.replace(sigRegex, (m, args) => {
    // If not already having brandIndex
    if (!args.includes('brandIndex')) {
      const cleanArgs = args.trim();
      return `function ${fnName}(${cleanArgs}, brandIndex = 0, catIndex = 0) {\n  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, '${cat}', brandIndex, catIndex);`;
    }
    return m;
  });
}

// 3. In each section, inject ${seoIntro} into the intro box
// Find each:
// <div style="max-width: 900px; margin: 0 auto 2rem; background: [^"]*padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">\s*<p style="margin-bottom: 0.85rem;">
const introBoxRegex = /(<div style="max-width: 900px; margin: 0 auto 2rem; background: [^"]*padding: 1\.35rem; line-height: 1\.65; font-size: 0\.95rem;">\s*)(<p style="margin-bottom: 0\.85rem;">)/g;
content = content.replace(introBoxRegex, (m, divPart, pPart) => {
  if (!m.includes('${seoIntro}')) {
    return `${divPart}<p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">\n              \${seoIntro}\n            </p>\n            ${pPart}`;
  }
  return m;
});

// 4. Update generateAllBrandApplianceSections function in build_all_sc_appliance_sections.js
if (!content.includes('function generateAllBrandApplianceSections')) {
  const exportAnchor = 'module.exports = {';
  const helperCode = `
function generateAllBrandApplianceSections(brandSlug, brandName, categories, brandIndex = 0) {
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
}
`;
  content = content.replace(exportAnchor, `${helperCode}\nmodule.exports = {\n  generateAllBrandApplianceSections,`);
}

fs.writeFileSync('scripts/build_all_sc_appliance_sections.js', content, 'utf8');
console.log('Successfully updated build_all_sc_appliance_sections.js with SEO intros!');
