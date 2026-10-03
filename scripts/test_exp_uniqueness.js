const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') {
        res = res.concat(getHtmlFiles(full));
      }
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getHtmlFiles('.');
const expHeadings = new Map();
const expBodies = new Map();
let duplicateExpHeadings = 0;
let duplicateExpBodies = 0;
let totalExpCards = 0;

htmlFiles.forEach(f => {
  if (f.endsWith('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  const expMatch = c.match(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i);
  if (!expMatch) {
    console.log(`Warning: No experience section in ${f}`);
    return;
  }
  const cards = [...expMatch[0].matchAll(/<div class="service-card"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi)];
  totalExpCards += cards.length;
  cards.forEach(card => {
    const h = card[1].trim();
    const b = card[2].trim();
    if (expHeadings.has(h)) {
      duplicateExpHeadings++;
      console.log(`Duplicate Heading: "${h}" in ${f} (first seen in ${expHeadings.get(h)})`);
    } else {
      expHeadings.set(h, f);
    }
    if (expBodies.has(b)) {
      duplicateExpBodies++;
      console.log(`Duplicate Body in ${f} (first seen in ${expBodies.get(b)})`);
    } else {
      expBodies.set(b, f);
    }
  });
});

console.log(`\n=== CUSTOMER EXPERIENCES REAL AUDIT ===`);
console.log(`Total experience cards: ${totalExpCards}`);
console.log(`Unique headings: ${expHeadings.size}`);
console.log(`Duplicate headings: ${duplicateExpHeadings}`);
console.log(`Unique bodies: ${expBodies.size}`);
console.log(`Duplicate bodies: ${duplicateExpBodies}`);
