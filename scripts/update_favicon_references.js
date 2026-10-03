// update_favicon_references.js
const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let res = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const full = path.join(dir, d.name);
    if (d.isDirectory() && d.name !== 'node_modules' && d.name !== '.git') {
      res = res.concat(getAllHtml(full));
    } else if (d.isFile() && d.name.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getAllHtml('.').map(f => f.replace(/\\/g, '/').replace(/^\.\//, ''));

const standardFaviconBlock = `  <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">`;

let updatedCount = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace any existing block of favicon and manifest links
  // Match from the first favicon link or <!-- Favicon System --> comment to the last link before fonts or stylesheet
  if (content.includes('<!-- Favicon System -->')) {
    content = content.replace(
      /<!-- Favicon System -->[\s\S]*?<link rel="manifest" href="\/site\.webmanifest">/,
      standardFaviconBlock
    );
  } else {
    // If no comment, replace contiguous favicon links
    const pattern = /(<link[^>]+(icon|manifest)[^>]*>\s*)+/gi;
    content = content.replace(pattern, standardFaviconBlock + '\n');
  }

  // Also in sitemap.html, ensure og: tags are present
  if (file === 'sitemap.html' && !content.includes('property="og:url"')) {
    const ogBlock = `  <meta property="og:title" content="Website Sitemap | Service Center Kanyakumari">\n  <meta property="og:description" content="Complete directory of home appliance repair and service center pages in Kanyakumari: AC, Refrigerator, Washing Machine, TV repair, and 54 brand service centers.">\n  <meta property="og:url" content="https://servicecenterkanyakumari.com/sitemap.html">\n  <meta property="og:type" content="website">\n`;
    content = content.replace('<link rel="canonical" href="https://servicecenterkanyakumari.com/sitemap.html">', `<link rel="canonical" href="https://servicecenterkanyakumari.com/sitemap.html">\n${ogBlock}`);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
});

console.log(`Updated favicon references in ${updatedCount} / ${htmlFiles.length} HTML files.`);
