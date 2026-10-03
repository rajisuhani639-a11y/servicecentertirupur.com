const fs = require('fs');
const sample = [
  'ac/daikin-ac-repair-service-in-madurai.html',
  'fridge/samsung-refrigerator-repair-service-in-madurai.html',
  'washing-machine/samsung-washing-machine-repair-service-in-madurai.html',
  'tv/sony-tv-repair-service-in-madurai.html',
  'servicecenter/panasonic-service-center-madurai.html'
];
sample.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const m1 = c.match(/<p class="hero-lead">([\s\S]*?)<\/p>/i);
    const m2 = c.match(/<p class="about-lead">([\s\S]*?)<\/p>/i);
    console.log('FILE:', f);
    if (m1) console.log('  HERO LEAD:', m1[1].trim().slice(0, 140));
    if (m2) console.log('  ABOUT LEAD:', m2[1].trim().slice(0, 140));
  }
});
