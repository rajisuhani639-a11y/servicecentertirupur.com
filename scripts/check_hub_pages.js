const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));

const hubPages = pages.filter(p => p.brand.startsWith('All ') || p.brand.toLowerCase().includes('home-appliance') || p.brand.toLowerCase().includes('multi-brand'));
hubPages.forEach(p => {
  console.log(`${p.category} | ${p.brand} | ${p.file}`);
});
