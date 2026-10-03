const fs = require('fs');

function getExpSection(content) {
  const h2Regex = /<h2[^>]*>[^<]*Recent[^<]*Experiences in Erode<\/h2>/i;
  const h2Match = content.match(h2Regex);
  if (!h2Match) return null;
  const h2Pos = content.indexOf(h2Match[0]);
  const secStart = content.lastIndexOf('<section', h2Pos);
  const secEnd = content.indexOf('</section>', h2Pos) + '</section>'.length;
  return {
    fullSection: content.substring(secStart, secEnd),
    h2: h2Match[0],
    secStart,
    secEnd
  };
}

const sampleFiles = [
  'tv/sony-tv-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'washing-machine/bosch-washing-machine-repair-service-in-erode.html',
  'servicecenter/godrej-service-center-erode.html'
];

sampleFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const res = getExpSection(c);
  if (res) {
    console.log(`\n=== File: ${f} ===`);
    console.log('H2:', res.h2);
    const cards = [...res.fullSection.matchAll(/<div class="service-card"[^>]*>/gi)];
    console.log('Experience cards count in exact section:', cards.length);
  } else {
    console.log(`\n=== File: ${f} : NO EXP SECTION FOUND ===`);
  }
});
