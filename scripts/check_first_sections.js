const fs = require('fs');

const files = [
  'ac/voltas-ac-repair-service-in-erode.html',
  'fridge/whirlpool-refrigerator-repair-service-in-erode.html',
  'washing-machine/ifb-washing-machine-repair-service-in-erode.html',
  'tv/lg-tv-repair-service-in-erode.html',
  'servicecenter/samsung-service-center-erode.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('\n=============================');
  console.log(f);
  const heroLead = content.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
  console.log('Hero lead:', heroLead ? heroLead[1].trim() : 'NONE');
  const firstSec = content.split('</section>')[1];
  if (firstSec) {
    const h2 = firstSec.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
    const p1 = firstSec.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    console.log('First section heading:', h2 ? h2[1].trim() : 'NONE');
    console.log('First section first p:', p1 ? p1[1].trim().substring(0, 150) : 'NONE');
  }
});
