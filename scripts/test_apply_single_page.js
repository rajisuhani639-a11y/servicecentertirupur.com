const fs = require('fs');
const { renderExperiencesSection } = require('./render_erode_experiences.js');
const { renderFaqSection, generateFaqSchema } = require('./render_erode_faqs.js');

const heroIntros = JSON.parse(fs.readFileSync('./scripts/erode_hero_intros_v2.json', 'utf8'));
const allExperiences = JSON.parse(fs.readFileSync('./scripts/erode_unique_experiences_v2.json', 'utf8'));
const masterFaqs = JSON.parse(fs.readFileSync('./scripts/erode_master_faqs_v2.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('./scripts/erode_pages_data.json', 'utf8'));

function testPage(filePath) {
  console.log('\n=============================================');
  console.log('Testing update on:', filePath);
  const pageData = pages.find(p => p.newFile === filePath);
  if (!pageData) {
    console.log('Page data not found for:', filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update hero lead
  if (heroIntros[filePath]) {
    const newLead = heroIntros[filePath].lead;
    content = content.replace(/<p class="hero-(?:lead|copy)">[\s\S]*?<\/p>/i, `<p class="hero-lead">${newLead}</p>`);
    console.log('Updated hero lead to:');
    console.log(' ', newLead);
  }

  // 2. Update experiences section
  if (allExperiences[filePath]) {
    const expCards = allExperiences[filePath];
    const newExpHtml = renderExperiencesSection(pageData, expCards);
    content = content.replace(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i, newExpHtml);
    console.log(`Updated experiences section with ${expCards.length} cards.`);
    console.log(' Sample card 1 heading:', expCards[0].heading);
    console.log(' Sample card 1 body:', expCards[0].body.substring(0, 100) + '...');
  }

  // 3. Update FAQ section and schema
  if (masterFaqs[filePath]) {
    const newFaqHtml = renderFaqSection(pageData, masterFaqs[filePath]);
    content = content.replace(/<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>/i, newFaqHtml);
    const faqSchemaHtml = generateFaqSchema(masterFaqs[filePath]);
    content = content.replace(/<script type="application\/ld\+json">[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>/i, faqSchemaHtml);
    console.log('Updated FAQ section and FAQPage schema.');
  }

  // 4. Verify no >>
  console.log('Has >>:', content.includes('>>'));
  console.log('Has G-15NKBXETXP:', content.includes('G-15NKBXETXP'));
  console.log('Has Muthaiya Complex:', content.includes('1167, Ground Floor, Muthaiya Complex, Mettur Road'));
}

testPage('servicecenter/godrej-service-center-erode.html');
testPage('washing-machine/godrej-washing-machine-repair-service-in-erode.html');
