const fs = require('fs');
const fridge = fs.readFileSync('fridge/refrigerator-repair-service-in-karur.html', 'utf8');

// Find all headings
const h2s = [...fridge.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H2s in Fridge Main Page:\n', h2s);

// Find all grids and classes
const grids = [...fridge.matchAll(/class="([^"]*(?:grid|card|table|types|problems|brand|parts)[^"]*)"/g)].map(m => m[1]);
console.log('\nGrids/Cards in Fridge Main Page:\n', [...new Set(grids)]);

// Check for any inline styles in fridge main page
const inlineStyles = [...fridge.matchAll(/style="([^"]*)"/g)].map(m => m[1]);
console.log('\nInline styles count in Fridge Main Page:', inlineStyles.length);
inlineStyles.slice(0, 10).forEach(s => console.log('  style:', s));
