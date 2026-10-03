const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') res = res.concat(walk(full));
    } else if (f.endsWith('.html')) res.push(full.replace(/\\/g, '/'));
  });
  return res;
}

const all = walk('.');
let hasLb = 0;
let hasFaq = 0;
const missingLb = [];

all.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('"LocalBusiness"')) hasLb++;
  else missingLb.push(f);
  if (c.includes('"FAQPage"')) hasFaq++;
});

console.log('Total HTML files:', all.length);
console.log('Files with LocalBusiness schema:', hasLb);
console.log('Files without LocalBusiness schema:', missingLb.length);
if (missingLb.length > 0) console.log('Sample missing:', missingLb.slice(0, 5));
console.log('Files with FAQPage schema:', hasFaq);

// Also find buzzword locations
const buzzwords = [
  'prompt assistance',
  'comprehensive assistance',
  'facilitate',
  'utilize',
  'technical intervention',
  'diagnostic assessment',
  'expeditious',
  'endeavour',
  'residential premises',
  'seamless service experience',
  'dedicated service desk'
];

let buzzwordDetails = [];
all.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  buzzwords.forEach(b => {
    const r = new RegExp('\\b' + b + '\\b', 'gi');
    const m = c.match(r);
    if (m) {
      buzzwordDetails.push({ file: f, word: b, count: m.length });
    }
  });
});

console.log(`Total buzzword matches: ${buzzwordDetails.length}`);
console.log('Sample buzzwords:', buzzwordDetails.slice(0, 10));
