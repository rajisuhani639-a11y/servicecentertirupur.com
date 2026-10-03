// scripts/verify_pricing_faqs.js
const fs = require('fs');

function checkFileFaqs(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log('==============================');
  console.log('FILE:', file);
  console.log('Has #faqSection:', content.includes('id="faqSection"'));
  console.log('Has FAQPage schema:', content.includes('"@type": "FAQPage"'));
  const faqMatch = content.match(/<section class="section section-bg-muted" id="faqSection">([\s\S]*?)<\/section>/);
  if (faqMatch) {
    const qMatches = faqMatch[1].match(/<span class="faq-icon" aria-hidden="true"><\/span>[\s\S]*?<span>(.*?)<\/span>|<span>(.*?)<\/span>/g);
    const questions = [];
    const re = /<span>(.*?)<\/span>/g;
    let m;
    while ((m = re.exec(faqMatch[1])) !== null) {
      if (!m[1].includes('<')) questions.push(m[1]);
    }
    console.log('Total FAQ Questions found:', questions.length);
    questions.forEach((q, i) => console.log(`  ${i+1}. ${q}`));
  }
}

checkFileFaqs('washing-machine/bosch-washing-machine-repair-service-in-madurai.html');
checkFileFaqs('washing-machine/samsung-washing-machine-repair-service-in-madurai.html');
checkFileFaqs('servicecenter/bosch-service-center-madurai.html');
checkFileFaqs('tv/sony-tv-repair-service-in-madurai.html');
checkFileFaqs('ac/daikin-ac-repair-service-in-madurai.html');
checkFileFaqs('fridge/samsung-refrigerator-repair-service-in-madurai.html');
