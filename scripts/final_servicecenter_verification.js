// final_servicecenter_verification.js
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
console.log(`Total HTML files: ${htmlFiles.length}`);

// 1. Check physical location of servicecenter files
const scFiles = fs.readdirSync('servicecenter').filter(f => f.endsWith('.html'));
console.log(`HTML files physically inside servicecenter/: ${scFiles.length}`);

// 2. Canonical and OG Audit
const auditResults = {
  canonicalErrors: [],
  ogUrlErrors: [],
  brokenHrefs: [],
  sitemapXmlErrors: [],
  sitemapHtmlErrors: [],
  schemaOldPathErrors: []
};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dirOfFile = path.dirname(file);

  const expectedCanonical = (file === 'index.html') ? `${domain}/` : `${domain}/${file}`;

  // Canonical
  const canonMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                     content.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  if (!canonMatch || canonMatch[1] !== expectedCanonical) {
    auditResults.canonicalErrors.push({ file, expected: expectedCanonical, found: canonMatch ? canonMatch[1] : null });
  }

  // OG URL
  const ogMatch = content.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)["']/i) ||
                  content.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:url["']/i);
  if (!ogMatch || ogMatch[1] !== expectedCanonical) {
    auditResults.ogUrlErrors.push({ file, expected: expectedCanonical, found: ogMatch ? ogMatch[1] : null });
  }

  // Schema check for old path
  if (content.includes('/service-center/')) {
    auditResults.schemaOldPathErrors.push(file);
  }

  // Internal Links check
  const hrefs = [...content.matchAll(/<a\b[^>]*\bhref=["']([^"'#]+)["']/gi)].map(m => m[1]);
  hrefs.forEach(href => {
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
      targetPath = path.posix.normalize(path.posix.join(dirOfFile, targetPath));
    }
    if (targetPath === '') targetPath = 'index.html';

    if (!fs.existsSync(targetPath)) {
      auditResults.brokenHrefs.push({ file, href, targetPath });
    }
  });
});

// 3. Sitemap.xml Audit
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`Total URLs in sitemap.xml: ${locMatches.length}`);

if (locMatches.length !== htmlFiles.length) {
  auditResults.sitemapXmlErrors.push(`Sitemap count mismatch: ${locMatches.length} vs ${htmlFiles.length} files`);
}

locMatches.forEach(url => {
  if (url.includes('/service-center/')) {
    auditResults.sitemapXmlErrors.push(`Old path in sitemap.xml: ${url}`);
  }
  let localPath = url.slice(domain.length);
  if (localPath.startsWith('/')) localPath = localPath.slice(1);
  if (localPath === '') localPath = 'index.html';
  if (!fs.existsSync(localPath)) {
    auditResults.sitemapXmlErrors.push(`Nonexistent file for URL in sitemap.xml: ${url} -> ${localPath}`);
  }
});

// 4. Sitemap.html Audit
const sitemapHtmlContent = fs.readFileSync('sitemap.html', 'utf8');
if (sitemapHtmlContent.includes('/service-center/')) {
  auditResults.sitemapHtmlErrors.push('sitemap.html still contains /service-center/');
}

console.log('\n--- VERIFICATION AUDIT REPORT ---');
console.log(`Canonical URL Errors: ${auditResults.canonicalErrors.length}`);
if (auditResults.canonicalErrors.length > 0) console.log(auditResults.canonicalErrors);

console.log(`OG URL Errors: ${auditResults.ogUrlErrors.length}`);
if (auditResults.ogUrlErrors.length > 0) console.log(auditResults.ogUrlErrors);

console.log(`Schema Old Path Errors: ${auditResults.schemaOldPathErrors.length}`);
console.log(`Broken Internal Links: ${auditResults.brokenHrefs.length}`);
if (auditResults.brokenHrefs.length > 0) console.log(auditResults.brokenHrefs);

console.log(`Sitemap.xml Errors: ${auditResults.sitemapXmlErrors.length}`);
if (auditResults.sitemapXmlErrors.length > 0) console.log(auditResults.sitemapXmlErrors);

console.log(`Sitemap.html Errors: ${auditResults.sitemapHtmlErrors.length}`);
if (auditResults.sitemapHtmlErrors.length > 0) console.log(auditResults.sitemapHtmlErrors);

const allPassed = Object.values(auditResults).every(arr => arr.length === 0);
console.log(`\nALL VERIFICATION CHECKS PASSED: ${allPassed}`);
