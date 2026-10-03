const fs = require('fs');

const testPages = [
  'ac/daikin-ac-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'washing-machine/godrej-washing-machine-repair-service-in-erode.html',
  'tv/sony-tv-repair-service-in-erode.html',
  'servicecenter/akai-service-center-erode.html'
];

testPages.forEach(p => {
  console.log('\n================================');
  console.log('PAGE:', p);
  const content = fs.readFileSync(p, 'utf8');
  // Extract hero lead
  const heroLeadMatch = content.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
  console.log('Hero lead:');
  console.log(heroLeadMatch ? heroLeadMatch[1].trim() : 'NONE');

  // Extract first section after hero
  const sections = content.split('</section>');
  if (sections.length > 1) {
    const nextSec = sections[1];
    const h2 = nextSec.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
    const p1 = nextSec.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    console.log('After hero heading:', h2 ? h2[1].trim().replace(/\s+/g, ' ') : 'NONE');
    console.log('After hero first p:', p1 ? p1[1].trim().replace(/\s+/g, ' ').substring(0, 200) : 'NONE');
  }
});
