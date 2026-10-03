const fs = require('fs');

const samplePages = [
  'ac/hitachi-ac-repair-service-in-madurai.html',
  'fridge/samsung-refrigerator-repair-service-in-madurai.html',
  'washing-machine/samsung-washing-machine-repair-service-in-madurai.html',
  'tv/sony-tv-repair-service-in-madurai.html',
  'servicecenter/panasonic-service-center-madurai.html'
];

samplePages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  console.log('================================================================');
  console.log('PAGE:', p);
  console.log('================================================================');
  
  const leadMatch = c.match(/<p class="hero-lead">([\s\S]*?)<\/p>/i);
  if (leadMatch) {
    console.log('\n[HERO STARTING LEAD]');
    console.log(leadMatch[1].trim());
  }

  const tanglishMatch = c.match(/<div class="tanglish-quick-box">[\s\S]*?<div>([\s\S]*?)<\/div>\s*<\/div>/i);
  if (tanglishMatch) {
    console.log('\n[TANGLISH QUICK BOX]');
    console.log(tanglishMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  }

  const expMatch = c.match(/<!--\s*Customer Service Experiences[\s\S]*?<\/section>/i);
  if (expMatch) {
    console.log('\n[SAMPLE CUSTOMER EXPERIENCE]');
    const h3Match = expMatch[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const pMatch = expMatch[0].match(/<p style="font-size: 0\.88rem; line-height: 1\.6; color: var\(--text-color\);">([\s\S]*?)<\/p>/i);
    if (h3Match) console.log('HEADING:', h3Match[1].trim());
    if (pMatch) console.log('BODY:', pMatch[1].trim());
  }

  const faqMatch = c.match(/<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>/i);
  if (faqMatch) {
    console.log('\n[SAMPLE FAQ QUESTIONS]');
    const qMatches = [...faqMatch[0].matchAll(/<button class="faq-question"[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>/gi)].map(m => m[1].trim());
    qMatches.slice(0, 3).forEach((q, i) => console.log(`Q${i+1}: ${q}`));
  }
  console.log('\n');
});
