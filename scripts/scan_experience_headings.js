const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const cat = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'scripts', 'site_catalog.json'), 'utf8'));

// Pattern to find experience sections
// Section usually starts with <h2>Recent ... Experiences in Erode</h2> or similar
let totalExperienceCards = 0;
let fileHeadingMap = {};
let allHeadings = [];

cat.forEach(item => {
  if (item.file === 'sitemap.html') return;
  const filePath = path.join(ROOT_DIR, item.file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  // Match the experience section
  const expMatch = content.match(/<!-- Recent Doorstep Service Experiences[\s\S]*?<\/section>|<!-- Customer Service Experiences[\s\S]*?<\/section>|<section[^>]*>[\s\S]*?<h2>Recent[^<]*Experiences in Erode<\/h2>[\s\S]*?<\/section>/i);
  
  if (!expMatch) {
    console.warn(`No experience section found in: ${item.file}`);
    return;
  }

  const secHtml = expMatch[0];
  // Find cards within this section
  const cardMatches = [...secHtml.matchAll(/<div class="service-card"[\s\S]*?<\/div>\s*<\/div>/gi)];
  
  fileHeadingMap[item.file] = [];

  cardMatches.forEach((cm, idx) => {
    totalExperienceCards++;
    const cardHtml = cm[0];
    const h3Match = cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const pMatch = cardHtml.match(/<p style="font-size: 0\.88rem;[^>]*>([\s\S]*?)<\/p>/i);
    const locMatch = cardHtml.match(/📍\s*([^<]+)/i);
    const ratingMatch = cardHtml.match(/★\s*(\d+\/\d+)/i);

    const heading = h3Match ? h3Match[1].trim() : 'NO_HEADING';
    const body = pMatch ? pMatch[1].trim() : 'NO_BODY';
    const locality = locMatch ? locMatch[1].trim() : 'NO_LOC';
    const rating = ratingMatch ? ratingMatch[1].trim() : 'NO_RATING';

    fileHeadingMap[item.file].push({
      cardIndex: idx,
      heading,
      body,
      locality,
      rating
    });
    allHeadings.push({ file: item.file, heading, body, locality });
  });
});

console.log(`Total experience cards found: ${totalExperienceCards} across ${Object.keys(fileHeadingMap).length} pages.`);

// Let's inspect heading patterns
console.log('\nSample headings from first 15 cards:');
allHeadings.slice(0, 15).forEach((h, i) => {
  console.log(`${i+1}. [${h.file}] ${h.heading}`);
});

// Check identical headings
const headingCounts = {};
allHeadings.forEach(h => {
  headingCounts[h.heading] = (headingCounts[h.heading] || 0) + 1;
});

const duplicateHeadings = Object.entries(headingCounts).filter(([h, count]) => count > 1);
console.log(`\nIdentical duplicate headings count: ${duplicateHeadings.length}`);
duplicateHeadings.slice(0, 10).forEach(([h, count]) => console.log(`  "${h}" -> appears ${count} times`));
