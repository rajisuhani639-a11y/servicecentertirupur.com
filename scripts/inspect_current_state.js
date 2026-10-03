const fs = require('fs');

const sampleFiles = [
  'tv/hitachi-tv-repair-service-in-erode.html',
  'fridge/godrej-refrigerator-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'washing-machine/ifb-washing-machine-repair-service-in-erode.html'
];

sampleFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  const heroMatch = c.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
  console.log('Hero:', heroMatch ? heroMatch[1].trim() : 'NONE');
  
  const expMatches = [...c.matchAll(/<div class="experience-card"[\s\S]*?<\/div>\s*<\/div>/gi)];
  console.log(`Exp cards count: ${expMatches.length}`);
  if (expMatches.length > 0) {
    console.log('Sample Exp Card:\n', expMatches[0][0].slice(0, 300));
  }

  const faqMatches = [...c.matchAll(/<div class="faq-item"[\s\S]*?<\/div>/gi)];
  console.log(`FAQ items count: ${faqMatches.length}`);
  if (faqMatches.length > 0) {
    console.log('Sample FAQ Item:\n', faqMatches[0][0].slice(0, 300));
  }
  console.log('\n');
});
