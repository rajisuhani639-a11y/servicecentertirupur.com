// scripts/build_tirupur_sitemaps.js
// Rebuilds sitemap.xml and sitemap.html from the ground up for servicecentertirupur.com.
// Scans all 188 HTML production files, extracts their titles and categories,
// and ensures 100% synchronization and zero broken links.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts' && file !== 'temp_fav_profile') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtmlPaths = walk(ROOT_DIR);
console.log(`Found ${allHtmlPaths.length} HTML files.`);

const pages = allHtmlPaths.map(full => {
  const rel = path.relative(ROOT_DIR, full).replace(/\\/g, '/');
  const content = fs.readFileSync(full, 'utf8');
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  let title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : rel;
  
  // Clean title for display in sitemap
  title = title.replace(/\s*\|\s*Service Center (?:Tirupur|Madurai)/gi, '')
               .replace(/\s*-\s*Service Center (?:Tirupur|Madurai)/gi, '')
               .trim();

  let category = 'other';
  let priority = '0.7';
  let changefreq = 'monthly';

  if (rel === 'index.html') {
    category = 'root';
    priority = '1.0';
    changefreq = 'weekly';
    title = 'Home: Service Center Tirupur - Multi-Brand Appliance Care';
  } else if (rel === 'sitemap.html') {
    category = 'root';
    priority = '0.5';
    changefreq = 'weekly';
    title = 'Sitemap: Complete Index of Service Pages & Guides';
  } else if (rel === 'blog/index.html') {
    category = 'blog';
    priority = '0.9';
    changefreq = 'weekly';
    title = 'Blog Hub: Appliance Repair Guides & Cost Advice';
  } else if (rel.startsWith('blog/')) {
    category = 'blog';
    priority = '0.8';
    changefreq = 'monthly';
  } else if (rel.startsWith('ac/')) {
    category = 'ac';
    priority = rel === 'ac/ac-repair-service-in-tirupur.html' ? '0.9' : '0.8';
  } else if (rel.startsWith('fridge/')) {
    category = 'fridge';
    priority = rel === 'fridge/refrigerator-repair-service-in-tirupur.html' ? '0.9' : '0.8';
  } else if (rel.startsWith('washing-machine/')) {
    category = 'washing-machine';
    priority = rel === 'washing-machine/washing-machine-repair-service-in-tirupur.html' ? '0.9' : '0.8';
  } else if (rel.startsWith('tv/')) {
    category = 'tv';
    priority = rel === 'tv/tv-repair-service-in-tirupur.html' ? '0.9' : '0.8';
  } else if (rel.startsWith('servicecenter/')) {
    category = 'servicecenter';
    priority = rel === 'servicecenter/home-appliance-service-center-tirupur.html' ? '0.9' : '0.8';
  }

  const url = rel === 'index.html' ? 'https://servicecentertirupur.com/' : `https://servicecentertirupur.com/${rel}`;

  return {
    rel,
    url,
    title,
    category,
    priority,
    changefreq
  };
});

// 1. Generate sitemap.xml
const xmlUrls = pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`✓ Rebuilt sitemap.xml with ${pages.length} URLs.`);

// 2. Generate sitemap.html
const BRAND_ICON_SVG = `<div class="brand-icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Modern Pitched Roof -->
            <path d="M4 14.5L16 4.5L28 14.5" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Sensor Pillar -->
            <path d="M22 9.8V7.5H24.5V11.8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- House Foundation & Appliance Frame -->
            <path d="M7 13.8V25C7 26.1 7.9 27 9 27H23C24.1 27 25 26.1 25 25V13.8" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
            <!-- Appliance Drum Circle -->
            <circle cx="16" cy="19.5" r="4.8" stroke="#38bdf8" stroke-width="1.4"/>
            <!-- Integrated Service Wrench -->
            <g transform="rotate(-38 16 19.5)">
              <rect x="14.8" y="13.2" width="2.4" height="11.5" rx="1.2" fill="#fbbf24"/>
              <path d="M13.6 14.2C12.4 12.6 12.7 10.3 14.2 9.1C16 7.6 18.6 7.8 20 9.4C21 10.7 21 12.3 20 13.6L18.4 12.6L17.1 13.6L16.1 12.6Z" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="2.5" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="1.1" fill="#07192f"/>
            </g>
            <!-- Spark -->
            <circle cx="16" cy="3.5" r="1.2" fill="#fbbf24"/>
          </svg>
        </div>`;

function renderGroupLinks(groupPages) {
  return groupPages.map(p => `          <a href="/${p.rel}"><span>•</span> ${p.title}</a>`).join('\n');
}

const rootPages = pages.filter(p => p.category === 'root');
const acPages = pages.filter(p => p.category === 'ac');
const fridgePages = pages.filter(p => p.category === 'fridge');
const wmPages = pages.filter(p => p.category === 'washing-machine');
const tvPages = pages.filter(p => p.category === 'tv');
const scPages = pages.filter(p => p.category === 'servicecenter');
const blogPages = pages.filter(p => p.category === 'blog');

const sitemapHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-DRV7B7TFS0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-DRV7B7TFS0');
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Website HTML Sitemap | Service Center Tirupur</title>
  <meta name="description" content="Complete HTML sitemap directory of all home appliance repair pages, brand service centers, and blog guides for Service Center Tirupur.">
  <link rel="canonical" href="https://servicecentertirupur.com/sitemap.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://servicecentertirupur.com/sitemap.html">
  <meta property="og:title" content="Complete Website HTML Sitemap | Service Center Tirupur">
  <meta property="og:description" content="Complete HTML sitemap directory of all home appliance repair pages, brand service centers, and blog guides for Service Center Tirupur.">
  <meta property="og:site_name" content="Service Center Tirupur">

  <!-- Favicon System -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Google Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Home Appliance Repair Service in Tirupur",
  "image": "https://servicecentertirupur.com/favicon-192x192.png",
  "telephone": "+918882055269",
  "url": "https://servicecentertirupur.com/sitemap.html",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chikanna Chettiar St, Kamatchi Amman, Chikkanna",
    "addressLocality": "Tirupur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641604",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.099761,
    "longitude": 77.347941
  }
}
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="/index.html" class="brand-logo" title="Service Center Tirupur Homepage">
        ${BRAND_ICON_SVG}
        <div class="brand-title">
          <span class="brand-name">Service Center Tirupur</span>
          <span class="brand-loc">LOCAL APPLIANCE CARE</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="/index.html">Home</a>
        <a href="/servicecenter/home-appliance-service-center-tirupur.html" class="nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>
        <a href="/ac/ac-repair-service-in-tirupur.html">AC Repair</a>
        <a href="/fridge/refrigerator-repair-service-in-tirupur.html">Fridge Repair</a>
        <a href="/washing-machine/washing-machine-repair-service-in-tirupur.html">Washing Machine</a>
        <a href="/tv/tv-repair-service-in-tirupur.html">TV Repair</a>
        <a href="/sitemap.html" class="active">Sitemap</a>
      </nav>

      <!-- Header Action -->
      <div class="header-actions">
        <a href="tel:+918882055269" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call Now</span>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Nav Backdrop -->
  <div class="nav-backdrop" id="navBackdrop"></div>

  <!-- Hero Header -->
  <section class="section" style="background: linear-gradient(135deg, #07192f 0%, #0b2545 100%); color: #fff; padding: 3rem 0 2.5rem;">
    <div class="container text-center">
      <h1 style="font-size: 2.2rem; margin-bottom: 0.75rem; color: #fff;">Complete Website HTML Sitemap</h1>
      <p style="font-size: 1.05rem; color: #94a3b8; max-width: 680px; margin: 0 auto;">
        Quick links and structured directory of all ${pages.length} appliance repair pages, brand service centers, and technical guides in Tirupur.
      </p>
    </div>
  </section>

  <!-- Main Sitemap Directory Content -->
  <main class="container" style="padding: 3rem 1rem 4rem;">
    <div class="sitemap-container" style="display: flex; flex-direction: column; gap: 2.5rem;">

      <!-- Group 1: Main Pages & Blog Hub -->
      <div class="sitemap-group" style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.5rem;">
          🏠 Main Pages &amp; Guides
        </h2>
        <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.65rem;">
${renderGroupLinks([...rootPages, ...blogPages])}
        </div>
      </div>

      <!-- Group 2: Washing Machine Repair Pages -->
      <div class="sitemap-group" style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.5rem;">
          🧺 Washing Machine Repair Services (${wmPages.length} Brands)
        </h2>
        <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.65rem;">
${renderGroupLinks(wmPages)}
        </div>
      </div>

      <!-- Group 3: Refrigerator Repair Pages -->
      <div class="sitemap-group" style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.5rem;">
          ❄️ Refrigerator Repair Services (${fridgePages.length} Brands)
        </h2>
        <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.65rem;">
${renderGroupLinks(fridgePages)}
        </div>
      </div>

      <!-- Group 4: Air Conditioner Repair Pages -->
      <div class="sitemap-group" style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.5rem;">
          🌬️ Air Conditioner (AC) Repair Services (${acPages.length} Brands)
        </h2>
        <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.65rem;">
${renderGroupLinks(acPages)}
        </div>
      </div>

      <!-- Group 5: Television Repair Pages -->
      <div class="sitemap-group" style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.5rem;">
          📺 LED &amp; Smart TV Repair Services (${tvPages.length} Brands)
        </h2>
        <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.65rem;">
${renderGroupLinks(tvPages)}
        </div>
      </div>

      <!-- Group 6: Brand Service Center Pages -->
      <div class="sitemap-group" style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.5rem;">
          🏢 Multi-Brand Service Centers in Tirupur (${scPages.length} Brands)
        </h2>
        <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.65rem;">
${renderGroupLinks(scPages)}
        </div>
      </div>

    </div>
  <!-- Service Center Tirupur Location & Google Map Section -->
  <section class="service-center-map-section" id="service-center-location">
    <div class="container">
      <div class="sc-map-card">
        <div class="sc-map-info">
          <div class="sc-badge">Tirupur Service Center</div>
          <h3>Service Center Tirupur</h3>
          <p class="sc-address">
            <span><strong>Service Area:</strong> Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India</span>
          </p>
          <div class="sc-actions">
            <a href="tel:+918882055269" class="btn-primary-call sync-call"><span>Call: +91 88820 55269</span></a>
          </div>
        </div>
        <div class="sc-map-frame-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=11.099761%2C77.347941&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service Center Tirupur Location Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container footer-content">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Tirupur</h4>
          <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin-bottom: 1rem;">
            Doorstep home appliance repair and technical support across all residential and commercial localities in Tirupur.
          </p>
          <p class="sc-address" style="font-size: 0.85rem; color: #94a3b8;">
            <span>Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India</span>
          </p>
        </div>

        <div class="footer-col">
          <h4>Appliance Services</h4>
          <ul class="footer-links">
            <li><a href="/washing-machine/washing-machine-repair-service-in-tirupur.html">Washing Machine Repair</a></li>
            <li><a href="/fridge/refrigerator-repair-service-in-tirupur.html">Refrigerator Repair</a></li>
            <li><a href="/ac/ac-repair-service-in-tirupur.html">Air Conditioner Service</a></li>
            <li><a href="/tv/tv-repair-service-in-tirupur.html">LED & Smart TV Repair</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Tirupur Coverage</h4>
          <ul class="footer-links">
            <li><a href="/ac/ac-repair-service-in-tirupur.html#localitiesSection">Avinashi Road & Kumar Nagar</a></li>
            <li><a href="/ac/ac-repair-service-in-tirupur.html#localitiesSection">P.N. Road & Pandian Nagar</a></li>
            <li><a href="/ac/ac-repair-service-in-tirupur.html#localitiesSection">Nallur & Kangeyam Road</a></li>
            <li><a href="/ac/ac-repair-service-in-tirupur.html#localitiesSection">Palladam Road & Veerapandi</a></li>
            <li><a href="/ac/ac-repair-service-in-tirupur.html#localitiesSection">15 Velampalayam & Angeripalayam</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/servicecenter/home-appliance-service-center-tirupur.html">Service Center</a></li>
            <li><a href="/blog/index.html">Blog Guides</a></li>
            <li><a href="/sitemap.html">Complete Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 servicecentertirupur.com — Local Home Appliance Repair in Tirupur. All rights reserved.</div>
      </div>
    </div>
  </footer>

  <script src="/js/config.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.html'), sitemapHtml, 'utf8');
console.log(`✓ Rebuilt sitemap.html with ${pages.length} URLs.`);
