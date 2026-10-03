// scripts/update_unified_brand_logo.js
// Replaces the old wrench-only header brand-icon with the new unified
// House + Integrated Appliance Repair Wrench in all 188 HTML files.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(ROOT_DIR);
console.log(`Auditing and updating brand-logo across ${files.length} HTML files...`);

// The new unified House + Integrated Appliance Repair Wrench core brand mark
const NEW_BRAND_ICON = `<div class="brand-icon">
          <svg viewBox="0 0 32 32" fill="none">
            <!-- House Roof with Eaves -->
            <path d="M4 14.5L16 4.5L28 14.5" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- House Walls and Foundation -->
            <path d="M6.8 13.8V25.5C6.8 26.3 7.5 27 8.3 27H23.7C24.5 27 25.2 26.3 25.2 25.5V13.8" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
            <!-- Subtle Roof Vent / Chimney -->
            <path d="M22.5 9.5V6.8H24.8V11.5" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Integrated Appliance Repair Wrench in House Heart -->
            <g transform="rotate(-35 16 19)">
              <rect x="14.4" y="12.5" width="3.2" height="11" rx="1.6" fill="#fbbf24"/>
              <path d="M12.8 13.5C11.6 11.8 11.9 9.4 13.5 8C15.4 6.4 18.2 6.6 19.7 8.2C20.7 9.5 20.8 11.2 19.8 12.7L18 11.8L16.6 12.8L15.5 11.8Z" fill="#fbbf24"/>
              <circle cx="16" cy="23.5" r="2.8" fill="#fbbf24"/>
              <circle cx="16" cy="23.5" r="1.3" fill="#0b2545"/>
            </g>
            <!-- Madurai Local Identity Spark -->
            <circle cx="16" cy="3" r="1.2" fill="#fbbf24"/>
          </svg>
        </div>`;

// Regex pattern to accurately target the <div class="brand-icon">...</div> inside the header
const BRAND_ICON_REGEX = /<div class="brand-icon">[\s\S]*?<\/div>/;

let updatedCount = 0;
let skippedCount = 0;

files.forEach(f => {
  // Skip test scripts or html templates in scripts folder if any
  if (f.includes(path.sep + 'scripts' + path.sep)) return;

  const content = fs.readFileSync(f, 'utf8');
  if (BRAND_ICON_REGEX.test(content)) {
    const updated = content.replace(BRAND_ICON_REGEX, NEW_BRAND_ICON);
    if (updated !== content) {
      fs.writeFileSync(f, updated, 'utf8');
      updatedCount++;
    } else {
      skippedCount++;
    }
  } else {
    console.warn(`[WARN] No brand-icon found in: ${path.relative(ROOT_DIR, f)}`);
  }
});

console.log(`========================================`);
console.log(`Brand Logo Update Completed!`);
console.log(`Files updated with new House + Wrench logo: ${updatedCount}`);
console.log(`Files already matching or skipped: ${skippedCount}`);
console.log(`========================================`);
