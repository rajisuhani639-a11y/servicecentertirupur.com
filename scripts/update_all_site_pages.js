const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brands = require('./data_brands_info.js');
const existingLinks = require('./existing_brand_links.json');

// Build map from filename to brand slug and appliance category
const fileToBrand = {};
for (const [slug, links] of Object.entries(existingLinks)) {
  if (links.ac) fileToBrand['ac/' + links.ac] = { slug, type: 'ac' };
  if (links.fridge) fileToBrand['fridge/' + links.fridge] = { slug, type: 'fridge' };
  if (links.wm) fileToBrand['washing-machine/' + links.wm] = { slug, type: 'wm' };
  if (links.tv) fileToBrand['tv/' + links.tv] = { slug, type: 'tv' };
}

// Map slug to brand object
const brandBySlug = {};
brands.forEach(b => { brandBySlug[b.slug] = b; });

// Favicon snippet
const faviconHtml = `  <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
`;

// Footer brand directory HTML
const footerBrandDirectoryHtml = `      <div class="footer-brand-directory">
        <h4>Brand Service Centers in Karur</h4>
        <div class="footer-brand-grid">
          ${brands.map(b => `<a href="/servicecenter/${b.slug}-service-center-karur.html">${b.name} Service Center Karur</a>`).join('\n          ')}
        </div>
      </div>
`;

function getCrossLinkCallout(b, relPrefix, variantIndex) {
  const targetUrl = `${relPrefix}servicecenter/${b.slug}-service-center-karur.html`;
  const variants = [
    `Looking for complete <strong>${b.name} home appliance service</strong> in Karur? Visit the <a href="${targetUrl}" style="font-weight: 700; color: #0284c7; text-decoration: underline;">${b.name} Service Center Karur</a> page for multi-appliance repair information and verified manufacturer support details.`,
    `Need comprehensive repair guidance or multi-product inspection for ${b.name} appliances? Check our dedicated <a href="${targetUrl}" style="font-weight: 700; color: #0284c7; text-decoration: underline;">${b.name} Service Center in Karur</a> directory.`,
    `Planning doorstep service across multiple ${b.name} appliances in Karur? Explore the full <a href="${targetUrl}" style="font-weight: 700; color: #0284c7; text-decoration: underline;">${b.name} Appliance Service Center Karur</a> overview.`,
    `Want verified customer reference information and complete appliance support for ${b.name}? Visit <a href="${targetUrl}" style="font-weight: 700; color: #0284c7; text-decoration: underline;">${b.name} Service Center Karur</a>.`
  ];

  const text = variants[variantIndex % variants.length];

  return `
  <!-- Natural Service Center Cross-Link -->
  <section class="section" style="padding: 1.5rem 0; background: #f0f9ff; border-top: 1px solid #bae6fd; border-bottom: 1px solid #bae6fd;">
    <div class="container" style="max-width: 860px; text-align: center;">
      <p style="margin: 0; font-size: 0.95rem; color: #0369a1; line-height: 1.6;">
        ${text}
      </p>
    </div>
  </section>
`;
}

function getHubCrossLinkCallout(applianceName, relPrefix) {
  const targetUrl = `${relPrefix}servicecenter/index.html`;
  return `
  <!-- Natural Service Center Hub Cross-Link -->
  <section class="section" style="padding: 1.75rem 0; background: #f0f9ff; border-top: 1px solid #bae6fd; border-bottom: 1px solid #bae6fd;">
    <div class="container" style="max-width: 880px; text-align: center;">
      <h3 style="font-size: 1.15rem; color: #0369a1; margin-bottom: 0.5rem;">Explore All Brand Service Centers in Karur</h3>
      <p style="margin: 0; font-size: 0.95rem; color: #0c4a6e; line-height: 1.6;">
        In addition to single-appliance repair, we provide comprehensive multi-brand doorstep inspection across 54 leading brands. Visit our complete <a href="${targetUrl}" style="font-weight: 700; color: #0284c7; text-decoration: underline;">Brand Service Center Directory in Karur</a> to view all brand-specific service information.
      </p>
    </div>
  </section>
`;
}

// Find all HTML files to process
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.agents' && file !== 'scripts') {
        results = results.concat(getFiles(filePath));
      }
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

const allHtmlFiles = getFiles(rootDir);
console.log(`Found ${allHtmlFiles.length} HTML files.`);

let updatedCount = 0;

allHtmlFiles.forEach((absPath, index) => {
  const relPath = path.relative(rootDir, absPath).replace(/\\/g, '/');
  
  // Skip brand pages in /servicecenter/ since they were already generated with complete metadata
  if (relPath.startsWith('servicecenter/') && relPath !== 'servicecenter/index.html') {
    return;
  }

  let html = fs.readFileSync(absPath, 'utf8');
  let modified = false;

  // 1. Favicon Check & Injection
  if (!html.includes('href="/favicon.ico"') && !html.includes("href='/favicon.ico'")) {
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${faviconHtml}</head>`);
      modified = true;
    }
  }

  // 2. Navigation Link to Service Center
  // Check if main-nav exists and doesn't link to service-center
  if (html.includes('<nav class="main-nav"') && !html.includes('service-center')) {
    const relPrefix = relPath.includes('/') ? '../' : '';
    const scNavLink = `<a href="${relPrefix}servicecenter/index.html">Service Center</a>`;
    // Insert after Home link
    if (html.includes('class="active">Home</a>') || html.includes('>Home</a>')) {
      html = html.replace(/(<a [^>]*>Home<\/a>)/i, `$1\n        ${scNavLink}`);
      modified = true;
    }
  }

  // 3. Footer Repair Services Link to Service Center
  if (html.includes('<h4>Repair Services</h4>') && !html.includes('All Service Center Brands') && !html.includes('Brand Service Centers')) {
    const relPrefix = relPath.includes('/') ? '../' : '';
    const footerScLink = `            <li><a href="${relPrefix}servicecenter/index.html">All Service Center Brands</a></li>\n`;
    html = html.replace(/(<h4>Repair Services<\/h4>\s*<ul class="footer-links">)/i, `$1\n${footerScLink}`);
    modified = true;
  }

  // 4. Footer Brand Directory Check & Injection
  if (!html.includes('footer-brand-directory')) {
    if (html.includes('<div class="footer-disclaimer-box">')) {
      html = html.replace('<div class="footer-disclaimer-box">', `${footerBrandDirectoryHtml}\n      <div class="footer-disclaimer-box">`);
      modified = true;
    } else if (html.includes('</footer>')) {
      html = html.replace('</footer>', `${footerBrandDirectoryHtml}</footer>`);
      modified = true;
    }
  }

  // 5. Cross Internal Links for Brand Appliance Pages
  const brandInfo = fileToBrand[relPath];
  if (brandInfo) {
    const b = brandBySlug[brandInfo.slug];
    const targetUrl = `servicecenter/${b.slug}-service-center-karur.html`;
    if (b && !html.includes(targetUrl)) {
      const relPrefix = relPath.includes('/') ? '../' : '';
      const calloutHtml = getCrossLinkCallout(b, relPrefix, index);
      
      // Inject before the final CTA section or before the footer
      if (html.includes('<!-- Final CTA Section -->')) {
        html = html.replace('<!-- Final CTA Section -->', `${calloutHtml}\n  <!-- Final CTA Section -->`);
        modified = true;
      } else if (html.includes('<section class="cta-banner-section">')) {
        html = html.replace('<section class="cta-banner-section">', `${calloutHtml}\n  <section class="cta-banner-section">`);
        modified = true;
      } else if (html.includes('<footer class="site-footer">')) {
        html = html.replace('<footer class="site-footer">', `${calloutHtml}\n  <footer class="site-footer">`);
        modified = true;
      }
    }
  }

  // 6. Cross Internal Links for Hub Pages (ac, fridge, washing-machine, tv index/hubs)
  const hubPages = [
    { file: 'ac/ac-repair-service-in-karur.html', name: 'AC' },
    { file: 'fridge/refrigerator-repair-service-in-karur.html', name: 'Refrigerator' },
    { file: 'washing-machine/washing-machine-repair-service-in-karur.html', name: 'Washing Machine' },
    { file: 'tv/tv-repair-service-in-karur.html', name: 'TV' }
  ];

  hubPages.forEach(hub => {
    if (relPath === hub.file && !html.includes('servicecenter/index.html')) {
      const relPrefix = '../';
      const hubCallout = getHubCrossLinkCallout(hub.name, relPrefix);
      if (html.includes('<!-- Final CTA Section -->')) {
        html = html.replace('<!-- Final CTA Section -->', `${hubCallout}\n  <!-- Final CTA Section -->`);
        modified = true;
      } else if (html.includes('<section class="cta-banner-section">')) {
        html = html.replace('<section class="cta-banner-section">', `${hubCallout}\n  <section class="cta-banner-section">`);
        modified = true;
      } else if (html.includes('<footer class="site-footer">')) {
        html = html.replace('<footer class="site-footer">', `${hubCallout}\n  <footer class="site-footer">`);
        modified = true;
      }
    }
  });

  if (modified) {
    fs.writeFileSync(absPath, html, 'utf8');
    updatedCount++;
    console.log(`Updated: ${relPath}`);
  }
});

console.log(`Successfully updated ${updatedCount} HTML pages with Favicons, Footers, Nav, and Cross-Links.`);
