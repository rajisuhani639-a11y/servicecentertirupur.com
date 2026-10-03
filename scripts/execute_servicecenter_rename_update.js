// execute_servicecenter_rename_update.js
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

const stats = {
  filesUpdated: 0,
  canonicalUpdated: 0,
  ogUrlUpdated: 0,
  schemaUrlsUpdated: 0,
  sitemapXmlUrlsUpdated: 0,
  htmlHrefsUpdated: 0,
  totalReplacements: 0
};

const targetExtensions = ['.html', '.xml', '.json', '.js'];

allFiles.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!targetExtensions.includes(ext)) return;

  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('/servicecenter/')) return;

  const originalContent = content;

  // Track specific types in HTML/XML
  if (ext === '.html') {
    const canonMatches = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']*\/service-center\/[^"']*["']/gi) ||
                         content.match(/<link[^>]+href=["'][^"']*\/service-center\/[^"']*["'][^>]+rel=["']canonical["']/gi);
    if (canonMatches) stats.canonicalUpdated += canonMatches.length;

    const ogMatches = content.match(/<meta[^>]+property=["']og:url["'][^>]+content=["'][^"']*\/service-center\/[^"']*["']/gi) ||
                      content.match(/<meta[^>]+content=["'][^"']*\/service-center\/[^"']*["'][^>]+property=["']og:url["']/gi);
    if (ogMatches) stats.ogUrlUpdated += ogMatches.length;

    const hrefMatches = content.match(/href=["'][^"']*\/service-center\/[^"']*["']/gi);
    if (hrefMatches) stats.htmlHrefsUpdated += hrefMatches.length;

    const schemaMatches = content.match(/["'](https:\/\/servicecenterkanyakumari\.com)?\/service-center\/[^"']*["']/g);
    if (schemaMatches) {
      // count any schema url occurrences
      stats.schemaUrlsUpdated += schemaMatches.length;
    }
  } else if (file === 'sitemap.xml') {
    const locMatches = content.match(/<loc>[^<]*\/service-center\/[^<]*<\/loc>/g);
    if (locMatches) stats.sitemapXmlUrlsUpdated += locMatches.length;
  }

  // Count total replacements
  const matchCount = (content.split('/servicecenter/').length - 1);
  stats.totalReplacements += matchCount;

  // Replace /servicecenter/ with /servicecenter/
  content = content.replaceAll('/servicecenter/', '/servicecenter/');

  fs.writeFileSync(file, content, 'utf8');
  stats.filesUpdated++;
});

console.log('Update Complete! Statistics:');
console.log(`- Files updated: ${stats.filesUpdated}`);
console.log(`- Total /servicecenter/ replacements: ${stats.totalReplacements}`);
console.log(`- Canonical URLs updated: ${stats.canonicalUpdated}`);
console.log(`- Open Graph URLs updated: ${stats.ogUrlUpdated}`);
console.log(`- HTML href links updated: ${stats.htmlHrefsUpdated}`);
console.log(`- Sitemap.xml URLs updated: ${stats.sitemapXmlUrlsUpdated}`);
