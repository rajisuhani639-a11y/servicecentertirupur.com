const fs = require('fs');

const content = fs.readFileSync('scripts/build_all_sc_appliance_sections.js', 'utf8');

// Find all occurrences of function generateSc
const fnMatches = [...content.matchAll(/function\s+(generateSc\w+)\s*\(([^)]*)\)/g)];
console.log('Found generator functions:', fnMatches.map(m => m[1]));

// Check how many intro box divs exist
const introBoxMatches = [...content.matchAll(/<div style="max-width: 900px; margin: 0 auto 2rem; background: [^"]*padding: 1\.35rem; line-height: 1\.65; font-size: 0\.95rem;">/g)];
console.log('Found intro box divs:', introBoxMatches.length);
