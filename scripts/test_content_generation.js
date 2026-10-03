const contentGen = require('./generate_sc_comprehensive_content.js');
const brandMap = require('./brand_category_map.json');

for (const slug of ['lloyd', 'bosch', 'samsung', 'ifb']) {
  const brand = brandMap[slug];
  console.log(`\n================== ${brand.brandName} (${slug}) ==================`);
  console.log('Categories:', brand.categories);
  
  console.log('\nSample Card Descriptions:');
  for (const card of brand.cards) {
    console.log(`- ${card}: ${contentGen.getCardDescription(card, brand.brandName)}`);
  }

  const exps = contentGen.generateBrandExperiences(slug, brand.brandName, brand.categories);
  console.log(`\nGenerated ${exps.length} Customer Experiences:`);
  exps.forEach(e => console.log(`  * [${e.badge}] ${e.heading}`));

  const faqs = contentGen.generateBrandFaqs(slug, brand.brandName, brand.categories);
  console.log(`\nGenerated ${faqs.length} FAQs:`);
  faqs.forEach(f => console.log(`  * ${f.q}`));
}
