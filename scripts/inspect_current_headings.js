const fs = require('fs');

const samples = [
  'tv/hitachi-tv-repair-service-in-erode.html',
  'tv/akai-tv-repair-service-in-erode.html',
  'ac/voltas-ac-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'washing-machine/whirlpool-washing-machine-repair-service-in-erode.html',
  'servicecenter/godrej-service-center-erode.html',
  'index.html'
];

samples.forEach(f => {
  if (!fs.existsSync(f)) return;
  const c = fs.readFileSync(f, 'utf8');
  // Match the experience card headings
  const h3s = [...c.matchAll(/<h3 style="font-size: 1\.05rem;[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].trim());
  console.log(`\n--- ${f} (${h3s.length} headings) ---`);
  h3s.forEach((h, idx) => console.log(`  ${idx+1}. ${h}`));
});
