const fs = require('fs');

const testBrands = ['bosch', 'samsung', 'ifb', 'haier', 'blue-star', 'voltas', 'bajaj'];

for (const brand of testBrands) {
  const file = `servicecenter/${brand}-service-center-kanyakumari.html`;
  const content = fs.readFileSync(file, 'utf8');
  
  const h2s = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(h => h.includes('Service Center Kanyakumari') && !h.includes('Near Me') && !h.includes('Areas') && !h.includes('Information'));

  const expBadges = [...content.matchAll(/<span style="font-size: 0\.72rem;[^>]*>([^<]+)<\/span>/gi)].map(m => m[1]);
  const faqs = [...content.matchAll(/<button class="faq-question"[^>]*>\s*<span>([^<]+)<\/span>/gi)].map(m => m[1]);

  console.log(`\n================== ${brand.toUpperCase()} ==================`);
  console.log('Appliance Sections:', h2s);
  console.log('Customer Experience Badges:', expBadges);
  console.log('FAQ Count:', faqs.length);
}
