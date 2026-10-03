const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Exact Google Analytics snippet requested
const GTAG_ID = 'G-CXRXPBP63E';
const GTAG_SNIPPET = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GTAG_ID}');
</script>
`;

// Helper to recursively collect all HTML files
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getAllHtmlFiles(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

// 2. Process each HTML file
const allFiles = getAllHtmlFiles(rootDir);
console.log(`Found ${allFiles.length} customer-facing HTML files to update.`);

let stats = {
  gtagAdded: 0,
  gtagAlreadyPresent: 0,
  phoneUpdated: 0,
  linksUpdated: 0,
  navUpdated: 0,
  footerUpdated: 0
};

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  let isRenamedMainSc = relPath === 'servicecenter/home-appliance-service-center-karur.html';
  let isSitemapHtml = relPath === 'sitemap.html';

  // --- A. Google Analytics Tag ---
  // Ensure G-CXRXPBP63E appears exactly once in <head>
  if (!content.includes(GTAG_ID)) {
    // Insert after <head> or <meta charset...
    if (content.includes('<meta charset="UTF-8">')) {
      content = content.replace('<meta charset="UTF-8">', `<meta charset="UTF-8">\n${GTAG_SNIPPET}`);
    } else if (content.includes('<head>')) {
      content = content.replace('<head>', `<head>\n${GTAG_SNIPPET}`);
    }
    stats.gtagAdded++;
  } else {
    stats.gtagAlreadyPresent++;
  }

  // --- B. Customer Phone Number Replacement ---
  // Business contact number: 9211512088 (preserve official manufacturer care numbers)
  if (content.includes('94420')) {
    stats.phoneUpdated++;
    content = content.split('+91 94420 54321').join('+91 92115 12088');
    content = content.split('+919442054321').join('+919211512088');
    content = content.split('919442054321').join('919211512088');
    content = content.split('94420 54321').join('92115 12088');
    content = content.split('9442054321').join('9211512088');
  }

  // --- C. Update Old Service Center Index References ---
  // Replace links pointing to /servicecenter/index.html
  if (content.includes('/servicecenter/index.html') || 
      content.includes('../servicecenter/index.html') || 
      content.includes('servicecenter/index.html')) {
    stats.linksUpdated++;
    content = content.split('href="/servicecenter/index.html"').join('href="/servicecenter/home-appliance-service-center-karur.html"');
    content = content.split('href="../servicecenter/index.html"').join('href="/servicecenter/home-appliance-service-center-karur.html"');
    content = content.split('href="servicecenter/index.html"').join('href="/servicecenter/home-appliance-service-center-karur.html"');
    content = content.split('https://servicecenterkarur.com/servicecenter/index.html').join('https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html');
  }

  // Within service-center directory files:
  if (relPath.startsWith('servicecenter/')) {
    // Breadcrumbs or relative nav: href="index.html" -> href="/servicecenter/home-appliance-service-center-karur.html"
    // Note: Do NOT match ../index.html (which is Home)
    content = content.replace(/(?<!\.\.)href="index\.html"/g, 'href="/servicecenter/home-appliance-service-center-karur.html"');
  }

  // --- D. Navigation Menu (Desktop & Mobile) ---
  // Format <nav class="main-nav" id="mainNav"...>
  // Ensure Service Center link has desktop & mobile labels and class nav-sc-link
  // Ensure Sitemap link is present for mobile
  const navRegex = /<nav class="main-nav" id="mainNav" aria-label="Main Navigation">([\s\S]*?)<\/nav>/;
  const navMatch = content.match(navRegex);
  if (navMatch) {
    let navInner = navMatch[1];
    
    // Check if active on service center
    let isScActive = isRenamedMainSc;

    // Check existing active link
    let activeHref = '';
    const activeMatch = navInner.match(/<a\s+href="([^"]+)"\s+class="active">/);
    if (activeMatch) {
      activeHref = activeMatch[1];
    }

    // Determine current section
    let isHomeActive = relPath === 'index.html';
    let isAcActive = relPath.startsWith('ac/');
    let isFridgeActive = relPath.startsWith('fridge/');
    let isWmActive = relPath.startsWith('washing-machine/');
    let isTvActive = relPath.startsWith('tv/');

    // Path prefix to Home based on directory level
    let homeHref = relPath.includes('/') ? '../index.html' : 'index.html';
    let acHref = relPath.startsWith('ac/') ? 'ac-repair-service-in-karur.html' : (relPath.includes('/') ? '../ac/ac-repair-service-in-karur.html' : 'ac/ac-repair-service-in-karur.html');
    let fridgeHref = relPath.startsWith('fridge/') ? 'refrigerator-repair-service-in-karur.html' : (relPath.includes('/') ? '../fridge/refrigerator-repair-service-in-karur.html' : 'fridge/refrigerator-repair-service-in-karur.html');
    let wmHref = relPath.startsWith('washing-machine/') ? 'washing-machine-repair-service-in-karur.html' : (relPath.includes('/') ? '../washing-machine/washing-machine-repair-service-in-karur.html' : 'washing-machine/washing-machine-repair-service-in-karur.html');
    let tvHref = relPath.startsWith('tv/') ? 'tv-repair-service-in-karur.html' : (relPath.includes('/') ? '../tv/tv-repair-service-in-karur.html' : 'tv/tv-repair-service-in-karur.html');
    let scHref = '/servicecenter/home-appliance-service-center-karur.html';
    let sitemapHref = '/sitemap.html';

    let newNav = `\n        <a href="${homeHref}"${isHomeActive ? ' class="active"' : ''}>Home</a>
        <a href="${scHref}" class="${isScActive ? 'active ' : ''}nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>
        <a href="${acHref}"${isAcActive ? ' class="active"' : ''}>AC Repair</a>
        <a href="${fridgeHref}"${isFridgeActive ? ' class="active"' : ''}>Fridge Repair</a>
        <a href="${wmHref}"${isWmActive ? ' class="active"' : ''}>Washing Machine</a>
        <a href="${tvHref}"${isTvActive ? ' class="active"' : ''}>TV Repair</a>
        <a href="${sitemapHref}" class="nav-mobile-only${isSitemapHtml ? ' active' : ''}">Sitemap</a>\n      `;

    content = content.replace(navRegex, `<nav class="main-nav" id="mainNav" aria-label="Main Navigation">${newNav}</nav>`);
    stats.navUpdated++;
  }

  // --- E. Footer Updates ---
  // 1. Footer Service Center link points to /servicecenter/home-appliance-service-center-karur.html
  // 2. Sitemap link added naturally to repair services / footer links if not present
  const footerLinksRegex = /<ul class="footer-links">([\s\S]*?)<\/ul>/;
  const footerLinksMatch = content.match(footerLinksRegex);
  if (footerLinksMatch) {
    let flInner = footerLinksMatch[1];
    // Update any service center index link
    flInner = flInner.replace(/href="[^"]*service-center\/index\.html"/g, 'href="/servicecenter/home-appliance-service-center-karur.html"');
    flInner = flInner.replace(/href="index\.html">All Service Center Brands/g, 'href="/servicecenter/home-appliance-service-center-karur.html">All Service Center Brands');
    
    // Check if sitemap link is already present
    if (!flInner.includes('sitemap.html')) {
      flInner = flInner.trimEnd() + '\n            <li><a href="/sitemap.html">Sitemap</a></li>\n          ';
    }
    content = content.replace(footerLinksRegex, `<ul class="footer-links">${flInner}</ul>`);
    stats.footerUpdated++;
  }

  // Handle washing-machine/*.html footer list structure:
  if (relPath.startsWith('washing-machine/') && !content.includes('<li><a href="/sitemap.html">Sitemap</a></li>')) {
    content = content.replace(
      /<li><a href="[^"]*microwave">Microwave Oven Repair<\/a><\/li>/,
      `<li><a href="../index.html#microwave">Microwave Oven Repair</a></li>\n            <li><a href="/servicecenter/home-appliance-service-center-karur.html">All Service Center Brands</a></li>\n            <li><a href="/sitemap.html">Sitemap</a></li>`
    );
    stats.footerUpdated++;
  }

  // --- F. Special Updates for Renamed Main Service Center Page ---
  if (isRenamedMainSc) {
    // 1. Canonical tag
    content = content.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html">');
    // 2. Page Title
    content = content.replace(/<title>[\s\S]*?<\/title>/, '<title>Home Appliance Service Center Karur | Multi-Brand Appliance Repair</title>');
    // 3. Meta Description
    content = content.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Looking for home appliance service in Karur? Multi-brand doorstep service center in Karur for AC, refrigerator, washing machine, TV and home appliances.">');
    // 4. OpenGraph
    content = content.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html">');
    content = content.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="Home Appliance Service Center Karur | Multi-Brand Appliance Repair">');
    // 5. Schema WebPage URL and ID
    content = content.replace(/"@id": "[^"]*#webpage"/, '"@id": "https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html#webpage"');
    content = content.replace(/"url": "[^"]*service-center\/index\.html"/, '"url": "https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html"');
    // 6. Schema Breadcrumbs
    content = content.replace(/"@id": "[^"]*#breadcrumb"/, '"@id": "https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html#breadcrumb"');
    content = content.replace(/"name": "Service Center in Karur",\s*"item": "[^"]*"/, '"name": "Home Appliance Service Center Karur",\n          "item": "https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html"');
    // 7. Visible Breadcrumb
    content = content.replace(/<li aria-current="page">Service Center in Karur<\/li>/, '<li aria-current="page">Home Appliance Service Center Karur</li>');
    // 8. Visible H1
    content = content.replace(/<h1 class="brand-h1">[\s\S]*?<\/h1>/, '<h1 class="brand-h1">Home Appliance Service Center in Karur</h1>');
  }

  // --- G. Special Updates for sitemap.html ---
  if (isSitemapHtml) {
    content = content.replace(/<a href="\/service-center\/index\.html"><span>•<\/span> Service Center Directory \(All 54 Brands\)<\/a>/,
      '<a href="/servicecenter/home-appliance-service-center-karur.html"><span>•</span> Home Appliance Service Center Karur (All 54 Brands)</a>');
    content = content.replace(/<a href="\/service-center\/index\.html">All Service Center Brands<\/a>/,
      '<a href="/servicecenter/home-appliance-service-center-karur.html">All Service Center Brands</a>');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Update Complete!');
console.log(JSON.stringify(stats, null, 2));
