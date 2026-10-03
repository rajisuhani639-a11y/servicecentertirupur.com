const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const b1 = require('./tv_brands_1_to_10.js');
const b2 = require('./tv_brands_11_to_20.js');
const b3 = require('./tv_brands_21_to_31.js');
const allBrands = [...b1, ...b2, ...b3];
const slugs = allBrands.map(b => b.slug);

let matchesFound = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'tv') {
      scanDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      slugs.forEach(slug => {
        // match exact occurrences of slug preceded by href=" or href="/ without tv/
        const regexes = [
          new RegExp('href=["\']' + slug + '["\']', 'g'),
          new RegExp('href=["\']/' + slug + '["\']', 'g'),
          new RegExp('servicecenterkarur\\.com/' + slug, 'g')
        ];
        regexes.forEach((r, idx) => {
          if (r.test(content)) {
            console.log(`[Pattern ${idx}] File ${path.relative(rootDir, fullPath)} contains old reference to ${slug}`);
            matchesFound++;
          }
        });
      });
    }
  }
}

scanDir(rootDir);
console.log(`Scan completed. Found ${matchesFound} old root-level references.`);
