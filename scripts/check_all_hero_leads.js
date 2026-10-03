const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getHtmlFiles(full));
    } else if (file.endsWith('.html')) results.push(full.replace(/\\/g, '/'));
  });
  return results;
}

const files = getHtmlFiles('.');
const leads = [];

files.forEach(f => {
  if (f === 'sitemap.html') return;
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
  if (m) {
    leads.push({ file: f, lead: m[1].trim() });
  } else {
    leads.push({ file: f, lead: 'MISSING' });
  }
});

console.log(`Found ${leads.length} hero leads.`);
// Check duplicates
const leadMap = new Map();
let dupes = 0;
leads.forEach(l => {
  if (leadMap.has(l.lead)) {
    dupes++;
    console.log(`Duplicate lead between ${l.file} and ${leadMap.get(l.lead)}: "${l.lead.slice(0, 80)}..."`);
  } else {
    leadMap.set(l.lead, l.file);
  }
});
console.log(`Duplicate leads count: ${dupes}`);
