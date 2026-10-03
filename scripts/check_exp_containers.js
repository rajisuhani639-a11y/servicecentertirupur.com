const fs = require('fs');

const sampleFiles = [
  'tv/sony-tv-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'washing-machine/bosch-washing-machine-repair-service-in-erode.html',
  'servicecenter/godrej-service-center-erode.html'
];

sampleFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const secMatch = c.match(/<section[^>]*>(?:[\s\S]*?)Recent[^<]*Experiences in Erode[\s\S]*?<\/section>/i);
  if (secMatch) {
    console.log(`\n=== File: ${f} ===`);
    console.log('Section open tag:', secMatch[0].match(/<section[^>]*>/i)[0]);
    const h2 = secMatch[0].match(/<h2[^>]*>[\s\S]*?<\/h2>/i);
    console.log('H2:', h2 ? h2[0] : 'NONE');
    const pIntro = secMatch[0].match(/<div class="section-header">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    console.log('Intro p:', pIntro ? pIntro[1].trim() : 'NONE');
    const cards = [...secMatch[0].matchAll(/<div class="service-card"[^>]*>/gi)];
    console.log('Service cards count:', cards.length);
  } else {
    console.log(`\n=== File: ${f} : NO EXP SECTION MATCH ===`);
  }
});
