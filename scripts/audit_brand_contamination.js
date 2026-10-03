const fs = require('fs');
const path = require('path');
const wmBrands = require('./wm_all_brands');

const wmDir = path.join(__dirname, '..', 'washing-machine');
let errors = 0;

wmBrands.forEach(brand => {
  const filePath = path.join(wmDir, brand.slug);
  const content = fs.readFileSync(filePath, 'utf8');

  // Split content before the "Other Brands" section to isolate brand-specific sections
  const parts = content.split('<!-- Other Washing Machine Brands Service in Karur -->');
  const mainBrandSection = parts[0];

  // In mainBrandSection, check if any other brand name appears in <h3> or <h2> headers
  wmBrands.forEach(otherBrand => {
    if (otherBrand.name === brand.name) return;
    // Special exception: Voltas Beko contains Voltas, so skip checking 'Voltas' on 'Voltas Beko'
    if (brand.name === 'Voltas Beko' && otherBrand.name === 'Voltas') return;
    if (brand.name === 'Voltas' && otherBrand.name === 'Voltas Beko') return;

    // Check if otherBrand name appears in h1, h2, h3, or h4 in mainBrandSection
    const headerRegex = new RegExp(`<(h[1-4])[^>]*>[^<]*\\b${otherBrand.name}\\b[^<]*<\\/\\1>`, 'gi');
    const headerMatches = mainBrandSection.match(headerRegex);
    if (headerMatches) {
      console.error(`CONTAMINATION in ${brand.name} page: found ${otherBrand.name} in headers:`, headerMatches);
      errors++;
    }
  });
});

if (errors === 0) {
  console.log("PASS: Zero brand contamination across all 30 brand pages!");
} else {
  console.error(`FAIL: Found ${errors} brand contamination errors!`);
  process.exit(1);
}
