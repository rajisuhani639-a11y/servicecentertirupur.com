// scripts/verify_all_madurai_links.js
// Audits all internal hyperlinks across all 188 HTML files in the project to guarantee ZERO broken links.

const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts') results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

const allHtml = walk('.');
console.log(`Auditing links across ${allHtml.length} HTML files...`);

let totalLinksChecked = 0;
let brokenLinks = [];

allHtml.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(file);

  // Match all href="..."
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/gi);

  for (const match of hrefMatches) {
    let href = match[1].trim();

    // Ignore anchors, protocols, tel, mailto, whatsapp
    if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) continue;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // If it is an internal domain link, check the path
      if (href.startsWith('https://servicecentermadurai.com')) {
        href = href.replace('https://servicecentermadurai.com', '');
        if (href === '' || href === '/') href = '/index.html';
      } else {
        continue;
      }
    }

    // Strip hash or query params
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) continue;

    totalLinksChecked++;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      // Root-relative
      targetPath = path.join('.', cleanHref.substring(1));
    } else {
      // Relative to current file directory
      targetPath = path.join(fileDir, cleanHref);
    }

    // Normalize
    targetPath = targetPath.replace(/\\/g, '/');

    if (!fs.existsSync(targetPath)) {
      brokenLinks.push({
        sourceFile: file,
        rawHref: match[1],
        resolvedPath: targetPath
      });
    }
  }
});

console.log(`Total internal links checked: ${totalLinksChecked}`);
if (brokenLinks.length === 0) {
  console.log('✓ PASS: ZERO broken internal links found across the entire website!');
} else {
  console.error(`✗ FAIL: Found ${brokenLinks.length} broken links:`);
  brokenLinks.slice(0, 20).forEach(bl => {
    console.error(`  In ${bl.sourceFile}: href="${bl.rawHref}" -> not found at ${bl.resolvedPath}`);
  });
}
