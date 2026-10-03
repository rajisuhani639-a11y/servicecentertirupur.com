const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/erode_pages_data.json', 'utf8'));

let count = 0;
let missing = [];
pages.forEach(p => {
  const content = fs.readFileSync(p.newFile, 'utf8');
  if (content.includes('class="hero-lead"')) {
    count++;
  } else {
    missing.push(p.newFile);
  }
});
console.log('Pages with class="hero-lead":', count, 'out of', pages.length);
if (missing.length > 0) {
  console.log('Missing:', missing);
}
