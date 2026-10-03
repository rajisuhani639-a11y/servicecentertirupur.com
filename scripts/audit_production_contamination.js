const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && f !== 'node_modules' && f !== '.git') {
      res = res.concat(walk(p));
    } else if (f.endsWith('.html') || f.endsWith('.xml') || f.endsWith('.json') || f.endsWith('.webmanifest')) {
      res = res.concat(p);
    }
  });
  return res;
}

const files = walk(ROOT_DIR);
console.log(`Checking contamination across ${files.length} production files...`);

const forbiddenWords = [
  'erode',
  'coimbatore',
  'karur',
  'kanyakumari',
  '638011',
  '641001',
  '639001',
  '127.0.0.1',
  'localhost'
];

let issues = 0;

files.forEach(f => {
  // Skip script-specific datasets or historical logs if any
  if (f.includes(path.sep + 'scripts' + path.sep)) return;
  
  const content = fs.readFileSync(f, 'utf8');
  forbiddenWords.forEach(w => {
    const regex = new RegExp('\\b' + w + '\\b', 'gi');
    const matches = content.match(regex);
    if (matches) {
      console.error(`[CONTAMINATION] "${w}" found in ${path.relative(ROOT_DIR, f)} (${matches.length} times)`);
      issues++;
    }
  });
});

console.log(`========================================`);
console.log(`Contamination Check Completed.`);
console.log(`Issues found in production files: ${issues}`);
console.log(`========================================`);
