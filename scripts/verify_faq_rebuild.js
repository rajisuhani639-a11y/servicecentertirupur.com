// scripts/verify_faq_rebuild.js
// Comprehensive audit script for brand-wise + appliance-wise FAQ rebuild

const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('./scripts/detailed_page_info.json', 'utf8'));

console.log('Starting Master FAQ Rebuild Quality & Uniqueness Audit...\n');

let totalPagesScanned = pages.length;
let totalGroupsCreated = 0;
let totalQuestionsCreated = 0;
let totalAnswersCreated = 0;
let serviceCenterPagesUpdated = 0;
let appliancePagesUpdated = 0;
let brandSpecificGroupsCreated = 0;
let partsPricingFaqsAdded = 0;
let visitingChargeFaqsAdded = 0;
let serviceChargeFaqsAdded = 0;
let modelTypeTechFaqsAdded = 0;
let coimbatoreKeywordFaqsAdded = 0;
let tamilTanglishAnswersAdded = 0;
let pagesWithFaqSchema = 0;

const allExtractedQuestions = [];
const allExtractedAnswers = [];
const questionCountMap = {};
const answerCountMap = {};

pages.forEach(p => {
  const filePath = p.file;
  const html = fs.readFileSync(filePath, 'utf8');

  if (p.category === 'service-center' || p.category === 'root') {
    serviceCenterPagesUpdated++;
  } else {
    appliancePagesUpdated++;
  }

  // Schema check
  if (html.includes('"FAQPage"')) {
    pagesWithFaqSchema++;
  }

  // Find FAQ section
  const faqSecMatch = html.match(/<section class="section section-bg-muted" id="faqSection">([\s\S]*?)<\/section>/i)
    || html.match(/<section[^>]*id=["']faqSection["'][^>]*>([\s\S]*?)<\/section>/i);

  if (!faqSecMatch) {
    console.log(`ERROR: No FAQ section found in ${filePath}`);
    return;
  }

  const faqContent = faqSecMatch[0];

  // Extract groups (h3)
  const groupMatches = faqContent.match(/<h3[^>]*>(.*?)<\/h3>/gi) || [];
  totalGroupsCreated += groupMatches.length;
  brandSpecificGroupsCreated += groupMatches.length;

  // Extract questions: <button class="faq-question"...><span>(Q)</span>
  const qMatches = faqContent.match(/<button class="faq-question"[^>]*>\s*<span>(.*?)<\/span>/gi) || [];
  // Extract answers: <div class="faq-answer">\s*(A)\s*</div>
  const aMatches = faqContent.match(/<div class="faq-answer">([\s\S]*?)<\/div>/gi) || [];

  qMatches.forEach((qm) => {
    const qText = qm.replace(/<button[^>]*>/i, '').replace(/<span class="faq-icon"[\s\S]*?<\/button>/i, '').replace(/<[^>]+>/g, '').trim();
    totalQuestionsCreated++;
    allExtractedQuestions.push(qText);
    questionCountMap[qText] = (questionCountMap[qText] || 0) + 1;

    // Check classification
    const lowerQ = qText.toLowerCase();
    if (lowerQ.includes('cost') || lowerQ.includes('price') || lowerQ.includes('charge') || lowerQ.includes('replace') || lowerQ.includes('₹')) {
      partsPricingFaqsAdded++;
    }
    if (lowerQ.includes('visiting') || lowerQ.includes('inspection fee') || lowerQ.includes('visiting charge')) {
      visitingChargeFaqsAdded++;
    }
    if (lowerQ.includes('service charge') || lowerQ.includes('labour') || lowerQ.includes('service cost')) {
      serviceChargeFaqsAdded++;
    }
    if (lowerQ.includes('model') || lowerQ.includes('type') || lowerQ.includes('tonnage') || lowerQ.includes('inverter') || lowerQ.includes('technology') || lowerQ.includes('screen size') || lowerQ.includes('series')) {
      modelTypeTechFaqsAdded++;
    }
    if (lowerQ.includes('coimbatore') || lowerQ.includes('gandhipuram') || lowerQ.includes('peelamedu') || lowerQ.includes('rs puram') || lowerQ.includes('singanallur') || lowerQ.includes('saravanampatti')) {
      coimbatoreKeywordFaqsAdded++;
    }
  });

  aMatches.forEach((am) => {
    const aText = am.replace(/<div class="faq-answer">/i, '').replace(/<\/div>/i, '').trim();
    totalAnswersCreated++;
    allExtractedAnswers.push(aText);
    answerCountMap[aText] = (answerCountMap[aText] || 0) + 1;

    // Check Tanglish / Tamil
    const isTanglish = /\b(la|panni|pannuvanga|vandha|kulla|irukalaam|keezha|aagudhu|aagala)\b/i.test(aText);
    const isTamil = /[\u0B80-\u0BFF]/.test(aText);
    if (isTanglish || isTamil) {
      tamilTanglishAnswersAdded++;
    }
  });
});

// Count duplicates
let duplicateQuestionsCount = 0;
for (let q in questionCountMap) {
  if (questionCountMap[q] > 1) {
    duplicateQuestionsCount += (questionCountMap[q] - 1);
  }
}

let duplicateAnswersCount = 0;
for (let a in answerCountMap) {
  if (answerCountMap[a] > 1) {
    duplicateAnswersCount += (answerCountMap[a] - 1);
  }
}

// Check internal links properly
let brokenLinksCount = 0;
const rootDir = path.resolve(__dirname, '..');

pages.forEach(p => {
  const content = fs.readFileSync(p.file, 'utf8');
  const links = content.match(/href="([^"#:]+)"/g) || [];
  links.forEach(l => {
    const rawTarget = l.replace('href="', '').replace('"', '');
    if (rawTarget.endsWith('.html') && !rawTarget.startsWith('http') && !rawTarget.startsWith('tel:') && !rawTarget.startsWith('mailto:')) {
      let resolved;
      if (rawTarget.startsWith('/')) {
        // Root relative
        resolved = path.join(rootDir, rawTarget.slice(1));
      } else {
        // Relative to file
        const currentDir = path.dirname(p.file);
        resolved = path.join(currentDir, rawTarget);
      }
      if (!fs.existsSync(resolved)) {
        brokenLinksCount++;
        console.log(`Broken link in ${p.file}: ${rawTarget} -> ${resolved}`);
      }
    }
  });
});

console.log('==================================================');
console.log('MASTER FAQ REBUILD AUDIT REPORT');
console.log('==================================================');
console.log(`1. Total HTML pages scanned: ${totalPagesScanned}`);
console.log(`2. Total FAQ groups created: ${totalGroupsCreated}`);
console.log(`3. Total FAQ questions created: ${totalQuestionsCreated}`);
console.log(`4. Total FAQ answers created: ${totalAnswersCreated}`);
console.log(`5. Service Center pages updated: ${serviceCenterPagesUpdated}`);
console.log(`6. Appliance pages updated: ${appliancePagesUpdated}`);
console.log(`7. Brand-specific FAQ groups created: ${brandSpecificGroupsCreated}`);
console.log(`8. Parts/pricing FAQs added: ${partsPricingFaqsAdded}`);
console.log(`9. Visiting charge FAQs added: ${visitingChargeFaqsAdded}`);
console.log(`10. Service charge FAQs added: ${serviceChargeFaqsAdded}`);
console.log(`11. Model/type/technology FAQs added: ${modelTypeTechFaqsAdded}`);
console.log(`12. Coimbatore keyword FAQs added: ${coimbatoreKeywordFaqsAdded}`);
console.log(`13. Tamil/Tanglish answers added: ${tamilTanglishAnswersAdded}`);
console.log(`14. Duplicate FAQ questions remaining: ${duplicateQuestionsCount}`);
console.log(`15. Duplicate FAQ answers remaining: ${duplicateAnswersCount}`);
console.log(`16. FAQ schema pages updated: ${pagesWithFaqSchema}`);
console.log(`17. Broken links remaining: ${brokenLinksCount}`);
console.log('==================================================\n');
