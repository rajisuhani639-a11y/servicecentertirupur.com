// scripts/update_all_blog_links_and_sitemaps.js
// Updates sitemap.xml, sitemap.html, index.html, service pages, and footers across the site
// to link to the 12 fresh Madurai blogs.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const NEW_BLOGS = [
  {
    slug: 'common-ac-problems-in-madurai.html',
    title: 'Common AC Problems in 2026 and When Repair Is Needed',
    tag: 'AC Guide',
    desc: 'Inverter error codes, capacitor wear, sensor failure, and when doorstep technician inspection is required.'
  },
  {
    slug: 'ac-cooling-gas-filling-deep-cleaning-madurai.html',
    title: 'AC Cooling Problems, Gas Filling and Deep Cleaning: What Madurai Customers Should Check',
    tag: 'Cooling Guide',
    desc: 'Understanding R32 and R410A gas filling, nitrogen pressure leak testing, and high-pressure jet foam wash.'
  },
  {
    slug: 'washing-machine-pcb-motor-drum-repair-madurai.html',
    title: 'Washing Machine PCB, Motor and Drum Problems: Repair vs Replacement in Madurai',
    tag: 'Washing Machine',
    desc: 'Inverter motor vs belt, spider arm corrosion from hard borewell water, PCB micro-soldering vs new board.'
  },
  {
    slug: 'front-load-vs-top-load-washing-machine-repair-madurai.html',
    title: 'Front Load vs Top Load Washing Machine Repair Problems in Madurai (2026 Comparison)',
    tag: 'Repair Guide',
    desc: 'Door gasket mildew, shock absorber wear, pulsator teeth stripping, and long-term maintenance costs.'
  },
  {
    slug: 'refrigerator-cooling-compressor-gas-issues-madurai.html',
    title: 'Refrigerator Cooling Problems: Compressor, Thermostat and Gas Issues in Madurai',
    tag: 'Fridge Guide',
    desc: 'Freezer cold but food compartment warm? Clicking PTC starter relay, evaporator fans, and R600a gas charging.'
  },
  {
    slug: 'tv-backlight-display-power-problems-madurai.html',
    title: 'How to Understand TV Backlight, Display and Power Problems | Madurai TV Guide',
    tag: 'TV Guide',
    desc: 'Sound working but screen black (flashlight test for LED backlight strips), lines on screen, and power supply repairs.'
  },
  {
    slug: 'common-microwave-problems-parts-repair-madurai.html',
    title: 'Common Microwave Problems and Parts That Usually Need Checking in Madurai',
    tag: 'Microwave Guide',
    desc: 'Microwave running without heating (magnetron & diode), sparking inside cavity (mica sheet), and membrane touchpads.'
  },
  {
    slug: 'samsung-appliance-repair-problems-madurai.html',
    title: 'Samsung Appliance Repair Problems Customers Commonly Ask About in Madurai',
    tag: 'Brand Guide',
    desc: 'EcoBubble 4C/5C/dC error codes, Curd Maestro defrost issues, Digital Inverter AC codes, and genuine spares.'
  },
  {
    slug: 'ifb-washing-machine-repair-problems-madurai.html',
    title: 'IFB Washing Machine Repair: PCB, Drum, Pump and Door Problems in Madurai',
    tag: 'Brand Guide',
    desc: 'IFB front load dOOr / E01 error codes, drum out-of-balance, coin trap cleaning, and descaling borewell scale.'
  },
  {
    slug: 'sony-tv-repair-backlight-display-madurai.html',
    title: 'Sony TV Repair: Backlight, Display, Sound and Power Issues in Madurai (Bravia 4K)',
    tag: 'Brand Guide',
    desc: 'Sony Bravia red light blinking 4, 5, or 6 times, Android TV boot-loop on Google logo, and 4K backlight replacement.'
  },
  {
    slug: 'bosch-washing-machine-repair-faults-madurai.html',
    title: 'Bosch Washing Machine Repair: Common Parts, Faults and Service Questions in Madurai',
    tag: 'Brand Guide',
    desc: 'Bosch Series 4, 6 & 8 front loaders, E18 drain pump error, carbon brushes vs EcoSilence motor, and drum bearings.'
  },
  {
    slug: 'home-appliance-repair-cost-guide-madurai.html',
    title: 'Home Appliance Repair Cost Guide for Customers in Madurai (2026–2027 Realistic Pricing)',
    tag: 'Pricing Guide',
    desc: 'Transparent inspection fees (₹200–₹350), spare parts price ranges, and labor rates across all 200+ Madurai localities.'
  }
];

// 1. Update sitemap.xml
console.log('Updating sitemap.xml...');
let sitemapXml = fs.readFileSync(path.join(ROOT_DIR, 'sitemap.xml'), 'utf8');

// Replace old blog URLs in sitemap.xml
const OLD_BLOG_URLS = [
  'ac-water-leakage-repair-in-madurai.html',
  'air-conditioner-not-cooling-in-madurai.html',
  'appliance-repair-cost-guide-in-madurai.html',
  'common-appliance-problems-when-to-call-technician-madurai.html',
  'home-appliance-repair-guide-in-madurai.html',
  'old-vs-new-washing-machine-repair-in-madurai.html',
  'refrigerator-clicking-noise-repair-in-madurai.html',
  'refrigerator-not-cooling-in-madurai.html',
  'smart-tv-repair-guide-in-madurai.html',
  'tv-screen-black-sound-working-in-madurai.html',
  'washing-machine-not-draining-in-madurai.html',
  'washing-machine-repair-problems-in-madurai.html'
];

OLD_BLOG_URLS.forEach((oldSlug, idx) => {
  const newSlug = NEW_BLOGS[idx].slug;
  sitemapXml = sitemapXml.replace(
    `<loc>https://servicecentermadurai.com/blog/${oldSlug}</loc>`,
    `<loc>https://servicecentermadurai.com/blog/${newSlug}</loc>`
  );
});

fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('✓ sitemap.xml updated with 12 fresh blog URLs.');

// 2. Update sitemap.html
console.log('Updating sitemap.html...');
let sitemapHtml = fs.readFileSync(path.join(ROOT_DIR, 'sitemap.html'), 'utf8');

const sitemapBlogListHtml = NEW_BLOGS.map(b => 
  `            <a href="/blog/${b.slug}"><span>•</span> ${b.title}</a>`
).join('\n');

const oldSitemapBlockRegex = /<a href="\/blog\/index\.html"><span>•<\/span> Blog Hub: All 12 Local Guides & Articles<\/a>[\s\S]*?<\/div>/;
if (oldSitemapBlockRegex.test(sitemapHtml)) {
  const newSitemapBlock = `<a href="/blog/index.html"><span>•</span> Blog Hub: All 12 Local Guides & Articles</a>\n${sitemapBlogListHtml}\n          </div>`;
  sitemapHtml = sitemapHtml.replace(oldSitemapBlockRegex, newSitemapBlock);
  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.html'), sitemapHtml, 'utf8');
  console.log('✓ sitemap.html updated with 12 fresh blog URLs.');
}

// 3. Update homepage (index.html) blog section
console.log('Updating index.html blog section...');
let indexHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

const homepageFeaturedCards = [
  NEW_BLOGS[0], // Common AC Problems
  NEW_BLOGS[2], // Washing Machine PCB, Motor & Drum
  NEW_BLOGS[4], // Refrigerator Cooling & Compressor
  NEW_BLOGS[11] // Repair Cost Guide
];

const homepageCardsHtml = homepageFeaturedCards.map(c => `
        <div class="service-card" style="padding: 1.25rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="margin-bottom: 0.5rem;">
              <span class="blog-card-tag">${c.tag}</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); line-height: 1.35; margin-bottom: 0.5rem;"><a href="/blog/${c.slug}" style="color: inherit; text-decoration: none;">${c.title}</a></h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 0.75rem;">${c.desc}</p>
          </div>
          <div style="border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: auto;">
            <a href="/blog/${c.slug}" style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue); text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">Read Guide →</a>
          </div>
        </div>`).join('');

const homepageGuidesSection = `  <!-- Helpful Madurai Appliance Repair Guides Section -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>Helpful Madurai Appliance Repair Guides &amp; Advice</h2>
        <p>Practical homeowner guides, transparent pricing insights, and local appliance troubleshooting across Madurai:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">${homepageCardsHtml}
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="/blog/index.html" class="brand-pill" style="display: inline-flex; font-size: 0.95rem; padding: 0.65rem 1.4rem; background: #f8fafc; border: 1px solid var(--border-color);">Explore All 12 Madurai Appliance Guides &amp; Blog Hub →</a>
      </div>
    </div>
  </section>`;

indexHtml = indexHtml.replace(
  /\s*<!-- Helpful Madurai Appliance Repair Guides Section -->[\s\S]*?<\/section>/,
  '\n\n' + homepageGuidesSection
);

fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), indexHtml, 'utf8');
console.log('✓ index.html blog section updated.');

// 4. Contextual Guides Generator for Service & Brand Pages
function getGuidesForPage(filePath) {
  const norm = filePath.replace(/\\/g, '/');
  
  if (norm.includes('/ac/')) {
    const cards = [
      NEW_BLOGS[0], // Common AC Problems
      NEW_BLOGS[1], // AC Cooling & Gas Filling
      NEW_BLOGS[11] // Cost Guide
    ];
    if (norm.includes('samsung-ac')) cards.push(NEW_BLOGS[7]); // Samsung guide
    else cards.push(NEW_BLOGS[4]); // Fridge cooling

    return {
      heading: 'Helpful Madurai AC Repair Guides &amp; Tips',
      subtext: 'Practical troubleshooting advice, leak prevention, and pricing guidance for air conditioners in Madurai homes:',
      cards
    };
  }

  if (norm.includes('/washing-machine/')) {
    const cards = [
      NEW_BLOGS[2], // WM PCB & Motor
      NEW_BLOGS[3], // Front Load vs Top Load
      NEW_BLOGS[11] // Cost Guide
    ];
    if (norm.includes('bosch')) cards.push(NEW_BLOGS[10]); // Bosch guide
    else if (norm.includes('ifb')) cards.push(NEW_BLOGS[8]); // IFB guide
    else if (norm.includes('samsung')) cards.push(NEW_BLOGS[7]); // Samsung guide
    else cards.push(NEW_BLOGS[0]); // AC guide

    return {
      heading: 'Helpful Madurai Washing Machine Repair Guides &amp; Tips',
      subtext: 'Practical laundry troubleshooting, drainage checks, and repair vs replace factors for Madurai homes:',
      cards
    };
  }

  if (norm.includes('/fridge/')) {
    const cards = [
      NEW_BLOGS[4], // Refrigerator Cooling & Compressor
      NEW_BLOGS[11], // Cost Guide
      NEW_BLOGS[7], // Samsung guide
      NEW_BLOGS[6]  // Microwave guide
    ];
    return {
      heading: 'Helpful Madurai Refrigerator Repair Guides &amp; Tips',
      subtext: 'Practical cooling troubleshooting, noise diagnosis, and cost factors for refrigerators in Madurai:',
      cards
    };
  }

  if (norm.includes('/tv/')) {
    const cards = [
      NEW_BLOGS[5], // TV Backlight & Display
      NEW_BLOGS[9], // Sony TV guide
      NEW_BLOGS[11], // Cost Guide
      NEW_BLOGS[0]  // Common AC Problems
    ];
    return {
      heading: 'Helpful Madurai TV Repair Guides &amp; Tips',
      subtext: 'Practical LED display checks, Smart TV troubleshooting, and backlight diagnostic advice in Madurai:',
      cards
    };
  }

  if (norm.includes('/servicecenter/')) {
    let cards = [
      NEW_BLOGS[11], // Cost Guide
      NEW_BLOGS[2],  // WM PCB & Motor
      NEW_BLOGS[4],  // Fridge Cooling
      NEW_BLOGS[5]   // TV Backlight
    ];
    if (norm.includes('sony')) cards = [NEW_BLOGS[9], NEW_BLOGS[5], NEW_BLOGS[11], NEW_BLOGS[0]];
    else if (norm.includes('bosch')) cards = [NEW_BLOGS[10], NEW_BLOGS[2], NEW_BLOGS[3], NEW_BLOGS[11]];
    else if (norm.includes('ifb')) cards = [NEW_BLOGS[8], NEW_BLOGS[2], NEW_BLOGS[3], NEW_BLOGS[11]];
    else if (norm.includes('samsung')) cards = [NEW_BLOGS[7], NEW_BLOGS[2], NEW_BLOGS[4], NEW_BLOGS[11]];

    return {
      heading: 'Helpful Madurai Home Appliance Guides &amp; Advice',
      subtext: 'Practical homeowner guides, transparent pricing insights, and local appliance troubleshooting across Madurai:',
      cards
    };
  }

  return null;
}

function buildContextualGuidesHtml(guideData) {
  const cardsHtml = guideData.cards.map(c => `
        <div class="service-card" style="padding: 1.25rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="margin-bottom: 0.5rem;">
              <span class="blog-card-tag">${c.tag}</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); line-height: 1.35; margin-bottom: 0.5rem;"><a href="/blog/${c.slug}" style="color: inherit; text-decoration: none;">${c.title}</a></h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 0.75rem;">${c.desc}</p>
          </div>
          <div style="border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: auto;">
            <a href="/blog/${c.slug}" style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue); text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">Read Guide →</a>
          </div>
        </div>`).join('');

  return `
  <!-- Helpful Madurai Appliance Repair Guides Section -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${guideData.heading}</h2>
        <p>${guideData.subtext}</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">${cardsHtml}
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="/blog/index.html" class="brand-pill" style="display: inline-flex; font-size: 0.95rem; padding: 0.65rem 1.4rem; background: #f8fafc; border: 1px solid var(--border-color);">Explore All 12 Madurai Appliance Guides &amp; Blog Hub →</a>
      </div>
    </div>
  </section>
`;
}

// 5. Walk all HTML files and apply contextual guides and footer links
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allHtml = getAllHtmlFiles(ROOT_DIR);
console.log(`Processing ${allHtml.length} HTML files for contextual guides and footer updates...`);

let guidesInjected = 0;
let footersUpdated = 0;

allHtml.forEach(f => {
  const norm = f.replace(/\\/g, '/');
  if (norm.includes('/blog/')) return; // Blog files already have their own layout
  if (norm.endsWith('/sitemap.html')) return;
  if (norm.endsWith('/index.html')) return; // Homepage updated separately above

  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // A. Inject/Update Contextual Guides
  const guideData = getGuidesForPage(f);
  if (guideData) {
    const guidesSectionHtml = buildContextualGuidesHtml(guideData);
    
    // Remove old guide section if present
    content = content.replace(/\s*<!-- Helpful (?:Madurai|Erode) Appliance Repair Guides Section -->[\s\S]*?<\/section>/g, '');

    // Insert right before <footer class="site-footer"
    if (content.includes('<footer class="site-footer"')) {
      content = content.replace('<footer class="site-footer"', `${guidesSectionHtml}\n  <footer class="site-footer"`);
      guidesInjected++;
    }
  }

  // B. Update Footer Helpful Guides Links
  const footerGuidesBlock = `        <div class="footer-col">
          <h4>Helpful Appliance Guides</h4>
          <ul class="footer-links">
            <li><a href="/blog/common-ac-problems-in-madurai.html">Common AC Problems in 2026</a></li>
            <li><a href="/blog/washing-machine-pcb-motor-drum-repair-madurai.html">Washing Machine PCB &amp; Motor Fix</a></li>
            <li><a href="/blog/refrigerator-cooling-compressor-gas-issues-madurai.html">Fridge Cooling &amp; Compressor Guide</a></li>
            <li><a href="/blog/tv-backlight-display-power-problems-madurai.html">TV Backlight &amp; Display Guide</a></li>
            <li><a href="/blog/home-appliance-repair-cost-guide-madurai.html">Madurai Appliance Repair Cost Guide</a></li>
            <li><a href="/blog/index.html">All 12 Madurai Guides</a></li>
          </ul>
        </div>`;

  // Look for existing Madurai Coverage or Helpful Guides column to update/replace
  if (content.includes('<h4>Helpful Appliance Guides</h4>')) {
    content = content.replace(
      /<div class="footer-col">\s*<h4>Helpful Appliance Guides<\/h4>[\s\S]*?<\/div>/,
      footerGuidesBlock
    );
    footersUpdated++;
  } else if (content.includes('<h4>Madurai Coverage</h4>')) {
    // Replace Madurai Coverage with Helpful Appliance Guides in footer
    content = content.replace(
      /<div class="footer-col">\s*<h4>Madurai Coverage<\/h4>[\s\S]*?<\/div>/,
      footerGuidesBlock
    );
    footersUpdated++;
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
  }
});

console.log(`Summary:`);
console.log(`Contextual blog guide sections injected: ${guidesInjected}`);
console.log(`Footer guide link columns updated: ${footersUpdated}`);
