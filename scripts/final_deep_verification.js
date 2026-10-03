// final_deep_verification.js
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
console.log('Total files scanned:', allFiles.length);

const patterns = ['karur', 'servicecenterkarur', 'localhost', '127.0.0.1', 'favicon.jpeg', 'favicon.jpg', 'favicon-96x96.png', 'favicon-180x180.png'];
const findings = {};

patterns.forEach(p => findings[p] = []);

allFiles.forEach(file => {
  // Skip this script itself and other audit scripts in scripts/
  if (file.startsWith('scripts/')) return;

  const ext = path.extname(file).toLowerCase();
  if (['.html', '.xml', '.txt', '.webmanifest', '.json', '.css', '.js'].includes(ext)) {
    const text = fs.readFileSync(file, 'utf8').toLowerCase();
    patterns.forEach(p => {
      if (text.includes(p)) {
        findings[p].push(file);
      }
    });
  }
});

console.log('\n--- TEXT SEARCH RESULTS ACROSS ALL PROJECT ASSETS ---');
let totalMatches = 0;
for (const [pattern, files] of Object.entries(findings)) {
  console.log(`Pattern "${pattern}": ${files.length} matches`);
  if (files.length > 0) {
    console.log('  Files:', files.slice(0, 10));
    totalMatches += files.length;
  }
}

if (totalMatches === 0) {
  console.log('\nPERFECT: Zero old city, old domain, localhost, or obsolete favicon references found in any project asset!');
} else {
  console.log(`\nFound ${totalMatches} lingering references that need inspection.`);
}
