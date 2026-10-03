const fs = require('fs');
const path = require('path');

const scDir = path.join(__dirname, '..', 'service-center');
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

const prohibited = [
  'indirapuram',
  'ghaziabad',
  'delhi',
  'noida',
  'madurai',
  'tirupur',
  'tirunelveli',
  'karur',
  'nagercoil'
];

let contaminationCount = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(scDir, f), 'utf8');
  prohibited.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'i');
    if (regex.test(content)) {
      console.error(`CONTAMINATION DETECTED in ${f}: found "${word}"`);
      contaminationCount++;
    }
  });
});

if (contaminationCount === 0) {
  console.log(`PASS! All ${files.length} pages in /servicecenter/ are 100% CLEAN of prohibited cities.`);
} else {
  console.error(`FAILED: ${contaminationCount} contaminations found.`);
}
