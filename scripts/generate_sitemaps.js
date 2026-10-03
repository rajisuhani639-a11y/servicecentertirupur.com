const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brands = require('./data_brands_info.js');

// 1. Gather all valid HTML files
function getCustomerFacingPages() {
  const sections = {
    home: [{ title: 'Home - Multi-Brand Appliance Repair in Karur', url: '/', file: 'index.html' }],
    sitemap: [{ title: 'HTML Sitemap', url: '/sitemap.html', file: 'sitemap.html' }],
    serviceCenterHub: [{ title: 'Home Appliance Service Center Karur', url: '/servicecenter/home-appliance-service-center-karur.html', file: 'servicecenter/home-appliance-service-center-karur.html' }],
    serviceCenterBrands: [],
    ac: [],
    fridge: [],
    wm: [],
    tv: []
  };

  // Service Center brands
  brands.forEach(b => {
    sections.serviceCenterBrands.push({
      title: `${b.name} Service Center Karur`,
      url: `/servicecenter/${b.slug}-service-center-karur.html`,
      file: `servicecenter/${b.slug}-service-center-karur.html`
    });
  });

  // AC Pages
  const acFiles = fs.readdirSync(path.join(rootDir, 'ac')).filter(f => f.endsWith('.html')).sort();
  acFiles.forEach(f => {
    const isHub = f === 'ac-repair-service-in-karur.html';
    const bName = isHub ? 'All Brands AC Repair & Service' : f.replace('-ac-repair-service-in-karur.html', '').toUpperCase() + ' AC Repair Service';
    sections.ac.push({
      title: bName,
      url: `/ac/${f}`,
      file: `ac/${f}`
    });
  });

  // Fridge Pages
  const fridgeFiles = fs.readdirSync(path.join(rootDir, 'fridge')).filter(f => f.endsWith('.html')).sort();
  fridgeFiles.forEach(f => {
    const isHub = f === 'refrigerator-repair-service-in-karur.html';
    const bName = isHub ? 'All Brands Refrigerator Repair & Service' : f.replace('-refrigerator-repair-service-in-karur.html', '').toUpperCase() + ' Refrigerator Repair';
    sections.fridge.push({
      title: bName,
      url: `/fridge/${f}`,
      file: `fridge/${f}`
    });
  });

  // Washing Machine Pages
  const wmFiles = fs.readdirSync(path.join(rootDir, 'washing-machine')).filter(f => f.endsWith('.html')).sort();
  wmFiles.forEach(f => {
    const isHub = f === 'washing-machine-repair-service-in-karur.html';
    const bName = isHub ? 'All Brands Washing Machine Repair' : f.replace('-washing-machine-repair-service-in-karur.html', '').toUpperCase() + ' Washing Machine Repair';
    sections.wm.push({
      title: bName,
      url: `/washing-machine/${f}`,
      file: `washing-machine/${f}`
    });
  });

  // TV Pages
  const tvFiles = fs.readdirSync(path.join(rootDir, 'tv')).filter(f => f.endsWith('.html')).sort();
  tvFiles.forEach(f => {
    const isHub = f === 'tv-repair-service-in-karur.html';
    const bName = isHub ? 'All Brands TV Repair & Service' : f.replace('-tv-repair-service-in-karur.html', '').toUpperCase() + ' TV Repair';
    sections.tv.push({
      title: bName,
      url: `/tv/${f}`,
      file: `tv/${f}`
    });
  });

  return sections;
}

const sections = getCustomerFacingPages();

// 2. Generate sitemap.xml
const domain = 'https://servicecenterkarur.com';
const today = new Date().toISOString().split('T')[0];

const allUrls = [
  ...sections.home,
  ...sections.sitemap,
  ...sections.serviceCenterHub,
  ...sections.serviceCenterBrands,
  ...sections.ac,
  ...sections.fridge,
  ...sections.wm,
  ...sections.tv
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

allUrls.forEach(item => {
  const loc = item.url === '/' ? `${domain}/` : `${domain}${item.url}`;
  const priority = item.url === '/' ? '1.0' : (item.url.includes('/index.html') ? '0.9' : '0.8');
  const changefreq = item.url === '/' ? 'weekly' : 'monthly';
  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

xml += `</urlset>
`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${allUrls.length} canonical URLs.`);

// 3. Generate sitemap.html
const footerBrandDirectoryHtml = `      <div class="footer-brand-directory">
        <h4>Brand Service Centers in Karur</h4>
        <div class="footer-brand-grid">
          ${brands.map(b => `<a href="/servicecenter/${b.slug}-service-center-karur.html">${b.name} Service Center Karur</a>`).join('\n          ')}
        </div>
      </div>
`;

const htmlSitemapContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CXRXPBP63E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CXRXPBP63E');
</script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Sitemap | Service Center Karur</title>
  <meta name="description" content="Complete directory of home appliance repair and service center pages in Karur: AC, Refrigerator, Washing Machine, TV repair, and 54 brand service centers.">
  <link rel="canonical" href="https://servicecenterkarur.com/sitemap.html">

  <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">

  <style>
    .sitemap-group {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-sm);
    }
    .sitemap-group h2 {
      font-size: 1.35rem;
      color: var(--primary-color);
      margin-bottom: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--accent-blue);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .sitemap-subgroup {
      margin-bottom: 1.5rem;
    }
    .sitemap-subgroup h3 {
      font-size: 1.1rem;
      color: #0f172a;
      margin-bottom: 0.75rem;
    }
    .sitemap-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 0.5rem 1.25rem;
    }
    .sitemap-grid a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 0.92rem;
      padding: 0.35rem 0;
      border-bottom: 1px dashed #e2e8f0;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.15s ease, padding-left 0.15s ease;
    }
    .sitemap-grid a:hover {
      color: var(--accent-blue);
      padding-left: 0.25rem;
    }
  </style>
</head>
<body>

  <!-- Top Information Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <span>📍 Doorstep Multi-Brand Appliance Service in Karur, Tamil Nadu</span>
      <span>⏰ Mon–Sun: 8:00 AM – 8:30 PM | Fast Technician Visit</span>
      <a href="tel:+919211512088">📞 Call Support: +91 92115 12088</a>
    </div>
  </div>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand-logo" title="Service Center Karur Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center Karur</span>
          <span class="brand-loc">Local Appliance Care</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/servicecenter/home-appliance-service-center-karur.html" class="nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>
        <a href="/ac/ac-repair-service-in-karur.html">AC Repair</a>
        <a href="/fridge/refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="/washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="/tv/tv-repair-service-in-karur.html">TV Repair</a>
        <a href="/sitemap.html" class="nav-mobile-only active">Sitemap</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919211512088" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call Now</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="/">Home</a></li>
        <li aria-current="page">Sitemap</li>
      </ol>
    </div>
  </div>

  <!-- Page Header -->
  <section class="section" style="background: linear-gradient(135deg, var(--primary-color) 0%, #1e3a8a 100%); color: #fff; padding: 2.5rem 0; text-align: center;">
    <div class="container">
      <h1 style="color: #fff; font-size: 2.2rem; margin-bottom: 0.75rem;">Website Sitemap</h1>
      <p style="color: #cbd5e1; max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
        Complete, structured directory of all home appliance repair services and brand service center information across Karur, Tamil Nadu.
      </p>
    </div>
  </section>

  <!-- Sitemap Main Content -->
  <main class="section">
    <div class="container" style="max-width: 1080px;">

      <!-- Group 1: Home & General Pages -->
      <div class="sitemap-group">
        <h2><span>🏠</span> Home & Overview</h2>
        <div class="sitemap-grid">
          <a href="/"><span>•</span> Home - Multi-Brand Appliance Repair in Karur</a>
          <a href="/servicecenter/home-appliance-service-center-karur.html"><span>•</span> Home Appliance Service Center Karur (All 54 Brands)</a>
          <a href="/sitemap.xml"><span>•</span> XML Sitemap (Search Engine Feed)</a>
        </div>
      </div>

      <!-- Group 2: Appliance Repair Services -->
      <div class="sitemap-group">
        <h2><span>🔧</span> Appliance Repair Services</h2>
        
        <div class="sitemap-subgroup">
          <h3>Air Conditioner Services (${sections.ac.length} Pages)</h3>
          <div class="sitemap-grid">
            ${sections.ac.map(p => `<a href="${p.url}"><span>•</span> ${p.title}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="sitemap-subgroup" style="margin-top: 1.75rem;">
          <h3>Refrigerator / Fridge Services (${sections.fridge.length} Pages)</h3>
          <div class="sitemap-grid">
            ${sections.fridge.map(p => `<a href="${p.url}"><span>•</span> ${p.title}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="sitemap-subgroup" style="margin-top: 1.75rem;">
          <h3>Washing Machine Services (${sections.wm.length} Pages)</h3>
          <div class="sitemap-grid">
            ${sections.wm.map(p => `<a href="${p.url}"><span>•</span> ${p.title}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="sitemap-subgroup" style="margin-top: 1.75rem;">
          <h3>Television Services (${sections.tv.length} Pages)</h3>
          <div class="sitemap-grid">
            ${sections.tv.map(p => `<a href="${p.url}"><span>•</span> ${p.title}</a>`).join('\n            ')}
          </div>
        </div>
      </div>

      <!-- Group 3: Brand Service Centers -->
      <div class="sitemap-group">
        <h2><span>🏢</span> Service Centers (${sections.serviceCenterBrands.length} Brands in Karur)</h2>
        <div class="sitemap-grid">
          ${sections.serviceCenterBrands.map(p => `<a href="${p.url}"><span>•</span> ${p.title}</a>`).join('\n          ')}
        </div>
      </div>

      <!-- Group 4: Other Important Links -->
      <div class="sitemap-group">
        <h2><span>ℹ️</span> Other Important Information</h2>
        <div class="sitemap-grid">
          <a href="/robots.txt"><span>•</span> Crawl Policy (robots.txt)</a>
          <a href="/site.webmanifest"><span>•</span> Web Application Manifest</a>
        </div>
      </div>

    </div>
  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Karur</h4>
          <p>
            Local doorstep repair and inspection service for home appliances across Karur, Tamil Nadu. Fast coordination, technician visit, and transparent guidance.
          </p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Main Road, Kagithapuramam & Pasupathipalayam, Karur, Tamil Nadu 639001</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span><a href="tel:+919211512088" class="sync-call" style="color: #cbd5e1;">+91 92115 12088</a></span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Repair Services</h4>
          <ul class="footer-links">
            <li><a href="/ac/ac-repair-service-in-karur.html">AC Repair & Service</a></li>
            <li><a href="/fridge/refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="/washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="/tv/tv-repair-service-in-karur.html">TV Repair & Service</a></li>
            <li><a href="/servicecenter/home-appliance-service-center-karur.html">All Service Center Brands</a></li>
            <li><a href="/sitemap.html">Sitemap</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Karur Coverage</h4>
          <ul class="footer-links">
            <li><a href="/#localitiesSection">Kagithapuramam & Pasupathipalayam</a></li>
            <li><a href="/#localitiesSection">Thanthonimalai & Town Center</a></li>
            <li><a href="/#localitiesSection">Vengamedu & Inam Karur</a></li>
            <li><a href="/#localitiesSection">Kovai Road & Sanapiratti</a></li>
            <li><a href="/#localitiesSection">Velayuthampalayam, Pugalur & Aravakurichi</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Timings</h4>
          <p>
            Monday to Sunday<br>
            <strong>8:00 AM - 8:30 PM</strong>
          </p>
          <p style="font-size: 0.82rem; color: #94a3b8;">
            Doorstep visits are scheduled based on technician slot availability and customer location.
          </p>
        </div>
      </div>

${footerBrandDirectoryHtml}

      <div class="footer-disclaimer-box">
        <strong>Important Customer Notice & Disclaimer:</strong><br>
        Service availability, repair cost and parts requirement may vary depending on appliance model and the issue found during inspection. Brand names are used only for identification of compatible appliances and do not imply official brand authorization unless specifically stated.
      </div>

      <div class="footer-copy">
        <div>© 2026 servicecenterkarur.com — Local Home Appliance Repair in Karur.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Scroll-Based Floating CTA -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919211512088" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar -->
  <div class="mobile-bottom-bar">
    <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919211512088" class="bottom-bar-btn bottom-bar-call sync-call">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <script src="js/config.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'sitemap.html'), htmlSitemapContent, 'utf8');
console.log('Generated sitemap.html successfully.');
