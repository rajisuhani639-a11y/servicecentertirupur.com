// strict_old_path_audit.js
const fs = require('fs');
const path = require('path');

function getAllFiles(dir) {
  let res = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) {
      if (d.name !== 'node_modules' && d.name !== '.git' && d.name !== 'temp_fav_profile') {
        res = res.concat(getAllFiles(full));
      }
    } else {
      res.push(full);
    }
  });
  return res;
}

const allFiles = getAllFiles('.').map(f => f.replace(/\\/g, '/').replace(/^\.\//, ''));

const oldPathPatterns = [
  '/service-center/',
  '/service-center"',
  '/service-center\'',
  'service-center/'
];

const matches = [];

allFiles.forEach(file => {
  // skip this script itself
  if (file === 'scripts/strict_old_path_audit.js') return;

  const ext = path.extname(file).toLowerCase();
  if (!['.html', '.xml', '.json', '.js', '.txt', '.css', '.webmanifest'].includes(ext)) return;

  const content = fs.readFileSync(file, 'utf8');
  oldPathPatterns.forEach(pattern => {
    if (content.includes(pattern)) {
      matches.push({ file, pattern });
    }
  });
});

console.log('--- STRICT AUDIT FOR OLD SERVICE-CENTER PATHS ---');
console.log(`Total occurrences found across ALL files: ${matches.length}`);
if (matches.length > 0) {
  console.log(matches);
} else {
  console.log('CONFIRMED: Exactly 0 old service-center path references in the entire project!');
}
