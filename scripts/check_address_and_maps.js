const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

let correctAddressCount = 0;
let correctMapCount = 0;
const missingAddressFiles = [];
const missingMapFiles = [];

const TARGET_ADDRESS = '273, PRS Pandian Complex, 7th St, Gandhipuram';
const TARGET_MAP_QUERY = '273%2C%20PRS%20Pandian%20Complex%2C%207th%20St%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012';

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes(TARGET_ADDRESS)) {
    correctAddressCount++;
  } else {
    missingAddressFiles.push(f);
  }

  if (content.includes(TARGET_MAP_QUERY) || f === 'sitemap.html') {
    correctMapCount++;
  } else {
    missingMapFiles.push(f);
  }
});

console.log(`Files with target address (${TARGET_ADDRESS}): ${correctAddressCount} / ${allFiles.length}`);
console.log(`Files with target map query: ${correctMapCount} / ${allFiles.length}`);
if (missingAddressFiles.length > 0) console.log('Missing address:', missingAddressFiles);
if (missingMapFiles.length > 0) console.log('Missing map:', missingMapFiles);
