const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getAllHtml(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = getAllHtml('.');
let missingGtag = 0;
let missingAddress = 0;

const expectedGtag = 'G-15NKBXETXP';
const expectedAddress = '1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios, Erode, Tamil Nadu – 638011, India';

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes(expectedGtag)) {
    missingGtag++;
    console.log('Missing gtag in:', f);
  }
  // Check address in text (or normalized dash)
  if (!content.includes('1167, Ground Floor, Muthaiya Complex, Mettur Road') && f !== 'sitemap.html') {
    missingAddress++;
    console.log('Missing address in:', f);
  }
});

console.log('Total HTML files:', files.length);
console.log('Files missing expected Gtag:', missingGtag);
console.log('Files missing expected address:', missingAddress);
