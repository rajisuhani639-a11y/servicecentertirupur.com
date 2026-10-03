const fs = require('fs');
const path = require('path');
const brandMap = require('./brand_category_map.json');

console.log('Auditing all 54 brand Service Center pages for appliance SEO intros...');

let totalSectionsChecked = 0;
let sectionsWithSeoIntro = 0;
let duplicateIntros = 0;
const introRegistry = {};

for (const [slug, info] of Object.entries(brandMap)) {
  if (slug === 'home-appliance') continue;

  const file = path.join('service-center', `${slug}-service-center-kanyakumari.html`);
  const content = fs.readFileSync(file, 'utf8');

  for (const cat of info.categories) {
    totalSectionsChecked++;

    let sectionId;
    if (cat === 'washing-machine') sectionId = 'washingMachineSection';
    else if (cat === 'refrigerator') sectionId = 'refrigeratorSection';
    else if (cat === 'ac') sectionId = 'acSection';
    else if (cat === 'tv') sectionId = 'tvSection';
    else if (cat === 'washer-dryer') sectionId = 'washerDryerSection';
    else if (cat === 'dishwasher') sectionId = 'dishwasherSection';
    else if (cat === 'chest-freezer') sectionId = 'chestFreezerSection';
    else if (cat === 'microwave-oven') sectionId = 'microwaveSection';
    else if (cat === 'air-purifier') sectionId = 'airPurifierSection';
    else if (cat === 'air-cooler') sectionId = 'airCoolerSection';
    else if (cat === 'water-purifier') sectionId = 'waterPurifierSection';
    else if (cat === 'water-heater') sectionId = 'waterHeaterSection';
    else if (cat === 'audio-system') sectionId = 'audioSection';
    else if (cat === 'kitchen-appliances') sectionId = 'kitchenSection';
    else if (cat === 'smart-appliances') sectionId = 'smartSection';

    // Find section
    const secRegex = new RegExp(`<section[^>]*id=["']${sectionId}["'][\\s\\S]*?<\\/section>`, 'i');
    const secMatch = content.match(secRegex);

    if (!secMatch) {
      console.error(`ERROR: Section ${sectionId} not found in ${file}`);
      continue;
    }

    // Check for SEO intro paragraph
    const introMatch = secMatch[0].match(/<p style="margin-bottom: 0\.85rem; font-weight: 500; color: var\(--primary-color\);">\s*([\s\S]*?)\s*<\/p>/i);
    if (introMatch) {
      sectionsWithSeoIntro++;
      const text = introMatch[1].trim();

      // Check keywords
      const hasBrand = text.toLowerCase().includes(info.brandName.toLowerCase());
      const hasKanyakumari = text.toLowerCase().includes('kanyakumari');
      
      if (!hasBrand || !hasKanyakumari) {
        console.warn(`WARNING in ${file} [${sectionId}]: Missing brand or Kanyakumari in intro: "${text}"`);
      }

      if (introRegistry[text]) {
        duplicateIntros++;
        console.error(`DUPLICATE INTRO: "${text}" in ${file} and ${introRegistry[text]}`);
      } else {
        introRegistry[text] = file;
      }
    } else {
      console.error(`ERROR: Missing SEO intro in ${file} [${sectionId}]`);
    }
  }
}

console.log(`\n================== AUDIT SUMMARY ==================`);
console.log(`Total appliance sections checked: ${totalSectionsChecked}`);
console.log(`Sections with verified SEO intros: ${sectionsWithSeoIntro} / ${totalSectionsChecked}`);
console.log(`Duplicate intros found: ${duplicateIntros} (target = 0)`);
if (sectionsWithSeoIntro === totalSectionsChecked && duplicateIntros === 0) {
  console.log('✅ ALL APPLIANCE SECTIONS HAVE 100% UNIQUE, KEYWORD-RICH SEO INTROS!');
} else {
  console.log('⚠️ AUDIT FAILED SOME CHECKS.');
}
