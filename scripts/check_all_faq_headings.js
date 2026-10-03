const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));

const faqHeadings = [];
catalog.forEach(item => {
  const c = fs.readFileSync(item.file, 'utf8');
  const h2s = [...c.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const faqH2 = h2s.find(h => h.toLowerCase().includes('faq') || h.toLowerCase().includes('question'));
  faqHeadings.push({ file: item.file, heading: faqH2 || 'NONE' });
});

const none = faqHeadings.filter(f => f.heading === 'NONE');
console.log(`Total files: ${faqHeadings.length}`);
console.log(`Files without FAQ heading: ${none.length}`);
if (none.length > 0) console.log(none);

// Sample headings
console.log('\nSample headings:');
console.log(faqHeadings.slice(0, 10));
