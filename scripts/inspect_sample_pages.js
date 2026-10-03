const fs = require('fs');

console.log('--- Checking sample pages ---');
const sampleFiles = [
  'index.html',
  'washing-machine/godrej-washing-machine-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'tv/sony-tv-repair-service-in-erode.html',
  'servicecenter/godrej-service-center-erode.html',
  'servicecenter/lg-service-center-erode.html'
];

sampleFiles.forEach(sf => {
  if (fs.existsSync(sf)) {
    console.log('\n========================================');
    console.log('File:', sf);
    const content = fs.readFileSync(sf, 'utf8');
    
    // Check title, meta description
    const descMatch = content.match(/<meta name="description" content="([^"]*)">/i);
    console.log('Description:', descMatch ? descMatch[1] : 'NOT FOUND');
    
    // Check h1 and opening text
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    console.log('H1:', h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : 'NOT FOUND');
    
    // Check opening hero intro / lead text
    const introMatch = content.match(/class="(?:lead|hero-desc|intro-text|sub-heading|hero-intro)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i)
      || content.match(/<div class="hero-content"[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    console.log('Intro text snippet:', introMatch ? introMatch[1].trim().substring(0, 150) : 'NOT FOUND');

    // Check customer experiences count and structure
    const expMatches = content.match(/class="[^"]*experience-card[^"]*"|class="[^"]*exp-card[^"]*"|class="[^"]*case-study[^"]*"|<h4[^>]*>[\s\S]*?Customer Experience/gi);
    console.log('Experience cards found:', expMatches ? expMatches.length : 0);

    // Check FAQ count
    const faqQuestions = content.match(/class="faq-question"[^>]*>([\s\S]*?)<\/button>/gi) || content.match(/itemprop="name"[^>]*>([\s\S]*?)<\/(?:h3|span|div|button)>/gi);
    console.log('FAQ items found:', faqQuestions ? faqQuestions.length : 0);
  }
});
