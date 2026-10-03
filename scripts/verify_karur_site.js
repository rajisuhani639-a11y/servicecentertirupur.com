const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') continue;
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const allFiles = getFiles('.');
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));
const techFiles = ['sitemap.xml', 'robots.txt', 'site.webmanifest', 'js/config.js', 'js/main.js', 'css/style.css'];

console.log('====================================================');
console.log('       FULL KARUR WEBSITE AUDIT & VERIFICATION      ');
console.log('====================================================\n');

console.log('--- 1. AUDIT: DINDIGUL LEFTOVERS CHECK (TARGET = 0) ---');
let dindigulInHtml = 0;
let filesWithDindigul = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/dindigul/gi);
  if (matches) {
    dindigulInHtml += matches.length;
    filesWithDindigul.push({ file: f, count: matches.length });
  }
});

console.log(`HTML Files checked: ${htmlFiles.length}`);
console.log(`Dindigul matches in HTML files: ${dindigulInHtml}`);
if (filesWithDindigul.length > 0) {
  console.log('Files with Dindigul:', filesWithDindigul);
}

let dindigulInTech = 0;
techFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/dindigul/gi);
    if (matches) {
      dindigulInTech += matches.length;
      console.log(`Tech file ${f} has ${matches.length} Dindigul matches.`);
    }
  }
});
console.log(`Tech files Dindigul matches: ${dindigulInTech}`);

console.log('\n--- 2. AUDIT: KARUR OCCURRENCES ACROSS HTML PAGES ---');
let karurInHtml = 0;
let filesWithKarur = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/karur/gi);
  if (matches) {
    karurInHtml += matches.length;
    filesWithKarur++;
  }
});
console.log(`Total Karur occurrences across HTML: ${karurInHtml}`);
console.log(`HTML files containing Karur: ${filesWithKarur} / ${htmlFiles.length}`);

console.log('\n--- 3. AUDIT: INTERNAL LINKS & BROKEN LINKS CHECK ---');
let brokenLinks = [];
let totalLinksChecked = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(file);
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);

  for (const m of hrefMatches) {
    const href = m[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('tel:') || 
        href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }

    totalLinksChecked++;
    const cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      targetPath = path.resolve('.', cleanHref.slice(1));
    } else {
      targetPath = path.resolve(fileDir, cleanHref);
    }

    if (!fs.existsSync(targetPath)) {
      brokenLinks.push({ from: file, to: href, resolved: targetPath });
    }
  }
});

console.log(`Total internal links checked: ${totalLinksChecked}`);
console.log(`Broken internal links: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log('Sample broken links:', brokenLinks.slice(0, 10));
}

console.log('\n--- 4. AUDIT: SEO & SCHEMA INTEGRITY ---');
let missingTitle = 0;
let missingDesc = 0;
let missingH1 = 0;
let missingCanonical = 0;
let schemaIssues = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('<title>') || content.includes('<title></title>')) missingTitle++;
  if (!content.includes('name="description"')) missingDesc++;
  if (!content.includes('<h1') && !content.includes('<H1')) missingH1++;
  if (!content.includes('rel="canonical"')) missingCanonical++;

  // Schema check
  const schemaMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (schemaMatch) {
    try {
      const parsed = JSON.parse(schemaMatch[1]);
      const addr = parsed.address || (parsed.provider && parsed.provider.address);
      if (addr && addr.addressLocality !== 'Karur') {
        schemaIssues++;
      }
    } catch (e) {
      schemaIssues++;
    }
  }
});

console.log(`Missing Title: ${missingTitle}`);
console.log(`Missing Description: ${missingDesc}`);
console.log(`Missing H1: ${missingH1}`);
console.log(`Missing Canonical: ${missingCanonical}`);
console.log(`Schema issues: ${schemaIssues}`);

console.log('\n--- 5. AUDIT: LOCALITY & 4-QUADRANT VERIFICATION ---');
let quadrantIssues = 0;
htmlFiles.forEach(file => {
  if (file.endsWith('sitemap.html')) return;
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('East Karur') || !content.includes('West Karur') || 
      !content.includes('North Karur') || !content.includes('South Karur')) {
    quadrantIssues++;
  }
});
console.log(`Pages missing one or more of East/West/North/South Karur: ${quadrantIssues}`);

console.log('\n--- 6. AUDIT: SITEMAP XML INTEGRITY ---');
const sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
const locMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
console.log(`Total URLs in sitemap.xml: ${locMatches.length}`);
let brokenSitemapUrls = 0;
let dindigulInSitemap = 0;

locMatches.forEach(m => {
  const url = m.replace(/<\/?loc>/g, '');
  if (url.includes('dindigul')) dindigulInSitemap++;
  const urlPath = url.replace('https://servicecenterkarur.com/', '');
  const localFile = urlPath === '' ? 'index.html' : urlPath;
  if (!fs.existsSync(localFile)) {
    brokenSitemapUrls++;
    console.log('Broken sitemap URL:', url, '->', localFile);
  }
});
console.log(`Dindigul in sitemap.xml: ${dindigulInSitemap}`);
console.log(`Broken URLs in sitemap.xml: ${brokenSitemapUrls}`);
