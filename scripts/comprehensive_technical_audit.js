// comprehensive_technical_audit.js
const fs = require('fs');
const path = require('path');

const domain = 'https://servicecenterkanyakumari.com';

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
console.log(`Auditing ${htmlFiles.length} HTML files...`);

const report = {
  canonicalMismatches: [],
  ogUrlMismatches: [],
  missingTitles: [],
  missingDescriptions: [],
  googleTagIssues: [],
  brokenInternalLinks: [],
  brokenImages: [],
  brokenFavicons: [],
  karurMatches: [],
  localhostMatches: [],
  oldDomainMatches: []
};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dirOfFile = path.dirname(file);

  // Expected canonical URL
  let expectedCanonical;
  if (file === 'index.html') {
    expectedCanonical = `${domain}/`;
  } else {
    expectedCanonical = `${domain}/${file}`;
  }

  // 1. Canonical check
  const canonMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                     content.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  if (!canonMatch) {
    report.canonicalMismatches.push({ file, expected: expectedCanonical, found: null });
  } else if (canonMatch[1] !== expectedCanonical) {
    report.canonicalMismatches.push({ file, expected: expectedCanonical, found: canonMatch[1] });
  }

  // 2. Open Graph og:url check
  const ogUrlMatch = content.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)["']/i) ||
                     content.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:url["']/i);
  if (!ogUrlMatch) {
    report.ogUrlMismatches.push({ file, expected: expectedCanonical, found: null });
  } else if (ogUrlMatch[1] !== expectedCanonical) {
    report.ogUrlMismatches.push({ file, expected: expectedCanonical, found: ogUrlMatch[1] });
  }

  // 3. Title & Description
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    report.missingTitles.push(file);
  }

  const descMatch = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    report.missingDescriptions.push(file);
  }

  // 4. Google Tag check
  const gtagOccurrences = [...content.matchAll(/G-[A-Z0-9]+/g)].map(m => m[0]);
  const correctGtagCount = gtagOccurrences.filter(g => g === 'G-7JTM41CMV7').length;
  const otherGtags = gtagOccurrences.filter(g => g !== 'G-7JTM41CMV7');

  if (correctGtagCount === 0) {
    report.googleTagIssues.push({ file, issue: 'Missing G-7JTM41CMV7' });
  } else if (correctGtagCount > 2) { // script tag usually has it in src and config
    // let's check config calls
    const configMatches = [...content.matchAll(/gtag\s*\(\s*['"]config['"]\s*,\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    if (configMatches.length !== 1 || configMatches[0] !== 'G-7JTM41CMV7') {
      report.googleTagIssues.push({ file, issue: `Multiple or abnormal config: ${configMatches.join(', ')}` });
    }
  }
  if (otherGtags.length > 0) {
    report.googleTagIssues.push({ file, issue: `Foreign gtag IDs found: ${otherGtags.join(', ')}` });
  }

  // 5. Favicon check in head
  const headMatch = content.match(/<head[\s\S]*?<\/head>/i);
  if (headMatch) {
    const headContent = headMatch[0];
    const favLinks = [...headContent.matchAll(/<link[^>]+(icon|manifest)[^>]*>/gi)].map(m => m[0]);
    favLinks.forEach(l => {
      const hrefM = l.match(/href=["']([^"']+)["']/i);
      if (hrefM) {
        let h = hrefM[1];
        if (h.startsWith('/')) h = h.slice(1);
        if (!fs.existsSync(h)) {
          report.brokenFavicons.push({ file, tag: l, missingPath: h });
        }
      }
    });
  }

  // 6. Internal links (<a href="...">)
  const aMatches = [...content.matchAll(/<a\b[^>]*\bhref=["']([^"'#]+)["']/gi)].map(m => m[1]);
  aMatches.forEach(href => {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith(domain)) return; // external link
    }

    let targetPath = href;
    if (targetPath.startsWith(domain)) {
      targetPath = targetPath.slice(domain.length);
    }
    if (targetPath.startsWith('/')) {
      targetPath = targetPath.slice(1);
    } else {
      // relative link
      targetPath = path.posix.normalize(path.posix.join(dirOfFile, targetPath));
    }
    if (targetPath === '') targetPath = 'index.html';

    if (!fs.existsSync(targetPath)) {
      report.brokenInternalLinks.push({ file, href, targetPath });
    }
  });

  // 7. Karur & Localhost occurrences in content
  const lower = content.toLowerCase();
  if (lower.includes('karur')) {
    report.karurMatches.push(file);
  }
  if (lower.includes('localhost') || lower.includes('127.0.0.1')) {
    report.localhostMatches.push(file);
  }
  if (lower.includes('servicecenterkarur')) {
    report.oldDomainMatches.push(file);
  }
});

console.log('\n--- AUDIT RESULTS ---');
console.log('Canonical Mismatches:', report.canonicalMismatches.length);
if (report.canonicalMismatches.length > 0) console.log(report.canonicalMismatches.slice(0, 5));

console.log('Open Graph og:url Mismatches:', report.ogUrlMismatches.length);
if (report.ogUrlMismatches.length > 0) console.log(report.ogUrlMismatches.slice(0, 5));

console.log('Missing Titles:', report.missingTitles.length);
console.log('Missing Descriptions:', report.missingDescriptions.length);

console.log('Google Tag Issues:', report.googleTagIssues.length);
if (report.googleTagIssues.length > 0) console.log(report.googleTagIssues.slice(0, 5));

console.log('Broken Favicon references in head:', report.brokenFavicons.length);
if (report.brokenFavicons.length > 0) console.log(report.brokenFavicons.slice(0, 5));

console.log('Broken Internal Links:', report.brokenInternalLinks.length);
if (report.brokenInternalLinks.length > 0) console.log(report.brokenInternalLinks.slice(0, 10));

console.log('Files with "karur":', report.karurMatches.length);
if (report.karurMatches.length > 0) console.log(report.karurMatches.slice(0, 10));

console.log('Files with "localhost" or "127.0.0.1":', report.localhostMatches.length);
console.log('Files with "servicecenterkarur":', report.oldDomainMatches.length);
