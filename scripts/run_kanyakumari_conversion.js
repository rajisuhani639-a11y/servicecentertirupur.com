// scripts/run_kanyakumari_conversion.js
// Master conversion & unique-content generator from pristine Karur source to final Kanyakumari version.

const fs = require('fs');
const path = require('path');
const localitiesGen = require('./kanyakumari_locality_generators.js');
const uniqueExpData = JSON.parse(fs.readFileSync('./scripts/unique_experiences_data.json', 'utf8'));
const faqBuilder = require('./build_unique_faqs.js');
const scSectionBuilder = require('./build_sc_appliance_sections.js');
const introBuilder = require('./build_unique_intros.js');
const { applySubstitutions } = require('./kanyakumari_substitutions.js');

const SOURCE_DIR = 'd:/servicecenterkarur.com';
const DEST_DIR = 'd:/servicecenterkanyakumari.com';

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') res = res.concat(getHtmlFiles(full));
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const pristineFiles = getHtmlFiles(SOURCE_DIR);
const urlMap = {};

pristineFiles.forEach(f => {
  const norm = path.relative(SOURCE_DIR, f).replace(/\\/g, '/');
  let kkNorm = norm;
  if (norm.includes('karur')) {
    kkNorm = norm.replace(/karur/g, 'kanyakumari');
  }
  urlMap[norm] = kkNorm;
});

const brandDisplayNames = {
  'acer': 'Acer',
  'acerpure': 'Acerpure',
  'aiwa': 'Aiwa',
  'akai': 'Akai',
  'bajaj': 'Bajaj',
  'blue-star': 'Blue Star',
  'bosch': 'Bosch',
  'bpl': 'BPL',
  'carrier': 'Carrier',
  'daewoo': 'Daewoo',
  'daikin': 'Daikin',
  'electrolux': 'Electrolux',
  'godrej': 'Godrej',
  'haier': 'Haier',
  'havells': 'Havells',
  'hisense': 'Hisense',
  'hitachi': 'Hitachi',
  'hyundai': 'Hyundai',
  'ifb': 'IFB',
  'iffalcon': 'iFFALCON',
  'intex': 'Intex',
  'kelvinator': 'Kelvinator',
  'kenstar': 'Kenstar',
  'kodak': 'Kodak',
  'liebherr': 'Liebherr',
  'lloyd': 'Lloyd',
  'mi': 'Mi',
  'micromax': 'Micromax',
  'midea': 'Midea',
  'mitsubishi': 'Mitsubishi',
  'motorola': 'Motorola',
  'o-general': 'O-General',
  'oneplus': 'OnePlus',
  'onida': 'Onida',
  'panasonic': 'Panasonic',
  'philips': 'Philips',
  'redmi': 'Redmi',
  'samsung': 'Samsung',
  'sansui': 'Sansui',
  'sanyo': 'Sanyo',
  'sharp': 'Sharp',
  'siemens': 'Siemens',
  'sony': 'Sony',
  'tcl': 'TCL',
  'thomson': 'Thomson',
  'toshiba': 'Toshiba',
  'videocon': 'Videocon',
  'voltas': 'Voltas',
  'voltas-beko': 'Voltas Beko',
  'vu': 'Vu',
  'vw': 'VW',
  'whirlpool': 'Whirlpool',
  'white-westinghouse': 'White Westinghouse',
  'xiaomi': 'Xiaomi'
};

function getFileInfo(relPath) {
  const norm = relPath.replace(/\\/g, '/');
  let category = 'root';
  let brandSlug = null;
  let brandName = null;

  if (norm.startsWith('ac/')) {
    category = 'ac';
    const base = norm.replace('ac/', '').replace('-ac-repair-service-in-karur.html', '');
    if (base !== 'ac-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All AC Brands';
    }
  } else if (norm.startsWith('fridge/')) {
    category = 'fridge';
    const base = norm.replace('fridge/', '').replace('-refrigerator-repair-service-in-karur.html', '');
    if (base !== 'refrigerator-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All Refrigerator Brands';
    }
  } else if (norm.startsWith('washing-machine/')) {
    category = 'washing-machine';
    const base = norm.replace('washing-machine/', '').replace('-washing-machine-repair-service-in-karur.html', '');
    if (base !== 'washing-machine-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All Washing Machine Brands';
    }
  } else if (norm.startsWith('tv/')) {
    category = 'tv';
    const base = norm.replace('tv/', '').replace('-tv-repair-service-in-karur.html', '');
    if (base !== 'tv-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All TV Brands';
    }
  } else if (norm.startsWith('servicecenter/')) {
    category = 'service-center';
    const base = norm.replace('servicecenter/', '').replace('-service-center-karur.html', '');
    if (base !== 'home-appliance-service-center-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandSlug = 'home-appliance';
      brandName = 'Home Appliance Multi-Brand';
    }
  } else if (norm === 'index.html') {
    category = 'root';
    brandName = 'Home Appliance Multi-Brand';
  } else if (norm === 'sitemap.html') {
    category = 'sitemap';
  }

  return { category, brandSlug, brandName };
}

function findSection(content, headingPatterns, idPattern) {
  if (idPattern) {
    const idRegex = new RegExp('<section[^>]*id=["\']' + idPattern + '["\'][^>]*>', 'i');
    const idMatch = content.match(idRegex);
    if (idMatch) {
      const start = idMatch.index;
      const end = content.indexOf('</section>', start);
      if (end !== -1) return { start, end: end + 10 };
    }
  }

  for (const pattern of headingPatterns) {
    let headingIdx = -1;
    if (typeof pattern === 'string') {
      headingIdx = content.indexOf(pattern);
    } else if (pattern instanceof RegExp) {
      const m = content.match(pattern);
      if (m) headingIdx = m.index;
    }

    if (headingIdx !== -1) {
      const sectionStart = content.lastIndexOf('<section', headingIdx);
      const sectionEnd = content.indexOf('</section>', headingIdx);
      if (sectionStart !== -1 && sectionEnd !== -1 && sectionStart < headingIdx && headingIdx < sectionEnd) {
        return { start: sectionStart, end: sectionEnd + 10 };
      }
    }
  }
  return null;
}

const locPatterns = [
  'Areas We Cover in and Around Karur',
  'Service Center Areas in Karur',
  'Repair Near Me in Karur',
  'Service Near Me in Karur',
  'Across Karur Localities',
  'Karur Localities',
  'Service Localities in Karur',
  'Coverage Across Karur Areas',
  /Service Center Areas in Karur/i,
  /Repair Coverage Across Karur/i,
  /Localities in Karur/i
];

const expPatterns = [
  /Recent\s+[\w\s-]+\s+Service Experiences/i,
  /Recent\s+[\w\s-]+\s+Repair Experiences/i,
  /Recent\s+[\w\s-]+\s+TV Repair Experiences/i,
  /Common\s+[\w\s-]+\s+Problems Customers Face/i,
  /Customer Experiences & Common Questions/i,
  /Common AC Problems Customers Face/i,
  /Problems Customers Commonly Contact/i,
  /Common Washing Machine Problems We Check/i,
  'Recent Lloyd Service Experiences in Karur',
  'Common Customer Experiences',
  'Customer Experiences'
];

const faqPatterns = [
  /Frequently Asked Questions/i,
  /FAQ/i
];

const NEW_GOOGLE_TAG = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JTM41CMV7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7JTM41CMV7');
</script>`;

function updateGoogleTag(content) {
  let c = content.replace(/<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config',\s*['"][^'"]+['"]\);?\s*<\/script>/gi, '');
  c = c.replace(/<script[^>]*googletagmanager\.com\/gtag\/js[^>]*><\/script>\s*<script>[\s\S]*?gtag\('config'[\s\S]*?<\/script>/gi, '');
  c = c.replace(/<!-- Google Analytics -->[\s\S]*?<\/script>/gi, '');

  if (c.includes('<meta charset="UTF-8">')) {
    c = c.replace('<meta charset="UTF-8">', `<meta charset="UTF-8">\n${NEW_GOOGLE_TAG}`);
  } else if (c.includes('<meta charset="utf-8">')) {
    c = c.replace('<meta charset="utf-8">', `<meta charset="utf-8">\n${NEW_GOOGLE_TAG}`);
  } else {
    c = c.replace(/<head[^>]*>/i, `$& \n${NEW_GOOGLE_TAG}`);
  }

  return c;
}

// Render unique experience section
function renderExpSection(cards, brandName, applianceLabel, isSc = false) {
  const heading = isSc 
    ? `Recent ${brandName} Service Experiences in Kanyakumari`
    : `Recent ${brandName} ${applianceLabel} Service Experiences in Kanyakumari`;
  const subtext = `Authentic doorstep troubleshooting situations handled by our local technicians across Kanyakumari neighborhoods.`;

  const cardsHtml = cards.map(c => `
        <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${c.locName}</span>
              <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">${c.badge}</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${c.heading}</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">${c.body}</p>
          </div>
        </div>`).join('\n');

  return `<!-- Customer Service Experiences (100% Unique Per Page) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
${cardsHtml}
      </div>
    </div>
  </section>`;
}

// Render unique FAQ section
function renderFaqSection(faqs, brandName, applianceLabel) {
  const heading = `Frequently Asked Questions — ${brandName} ${applianceLabel} in Kanyakumari`;
  const subtext = `Clear, practical answers about doorstep inspection, common faults, spare parts, and approximate costs in Kanyakumari.`;

  const itemsHtml = faqs.map(item => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>${item.q}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            ${item.a}
          </div>
        </div>`).join('\n');

  return `<section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>

      <div class="faq-list">
${itemsHtml}
      </div>
    </div>
  </section>`;
}

function updateFaqSchema(html, faqs) {
  const faqSchemaRegex = /<script type="application\/ld\+json">[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>/;
  if (!faqSchemaRegex.test(html)) return html;

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const newScript = `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
  return html.replace(faqSchemaRegex, newScript);
}

function processHtmlFile(srcRelPath, destRelPath) {
  const srcFullPath = path.join(SOURCE_DIR, srcRelPath);
  let content = fs.readFileSync(srcFullPath, 'utf8');
  const info = getFileInfo(srcRelPath);

  // 1. Replace Locality Section with 200 localities (50 East, 50 West, 50 North, 50 South)
  if (info.category !== 'sitemap') {
    const locBounds = findSection(content, locPatterns, 'localitiesSection');
    if (locBounds) {
      let newLocSection = '';
      if (info.category === 'ac') newLocSection = localitiesGen.generateAcLocalitiesSection(info.brandName);
      else if (info.category === 'fridge') newLocSection = localitiesGen.generateFridgeLocalitiesSection(info.brandName);
      else if (info.category === 'washing-machine') newLocSection = localitiesGen.generateWmLocalitiesSection(info.brandName);
      else if (info.category === 'tv') newLocSection = localitiesGen.generateTvLocalitiesSection(info.brandName);
      else if (info.category === 'service-center') newLocSection = localitiesGen.generateServiceCenterLocalitiesSection(info.brandName);
      else if (info.category === 'root') newLocSection = localitiesGen.generateIndexLocalitiesSection();

      if (newLocSection) {
        content = content.slice(0, locBounds.start) + newLocSection + content.slice(locBounds.end);
      }
    }
  }

  // 2. Replace Customer Experience Section with 100% unique cards
  if (info.category !== 'sitemap') {
    const expBounds = findSection(content, expPatterns);
    const cards = uniqueExpData[destRelPath] || [];

    let newExpSection = '';
    if (info.category === 'ac') newExpSection = renderExpSection(cards, info.brandName, 'AC', false);
    else if (info.category === 'fridge') newExpSection = renderExpSection(cards, info.brandName, 'Refrigerator', false);
    else if (info.category === 'washing-machine') newExpSection = renderExpSection(cards, info.brandName, 'Washing Machine', false);
    else if (info.category === 'tv') newExpSection = renderExpSection(cards, info.brandName, 'TV', false);
    else if (info.category === 'service-center') newExpSection = renderExpSection(cards, info.brandName, 'Appliance', true);
    else if (info.category === 'root') newExpSection = renderExpSection(cards, 'Home Appliance', '', true);

    if (expBounds && newExpSection) {
      content = content.slice(0, expBounds.start) + newExpSection + content.slice(expBounds.end);
    } else if (!expBounds && newExpSection && srcRelPath.includes('home-appliance-service-center')) {
      const locIdx = content.indexOf('<section class="section" id="localitiesSection"');
      if (locIdx !== -1) {
        content = content.slice(0, locIdx) + newExpSection + '\n\n  ' + content.slice(locIdx);
      }
    }
  }

  // 3. Replace FAQ Section with 100% unique FAQs
  let pageFaqs = [];
  if (info.category !== 'sitemap') {
    const faqBounds = findSection(content, faqPatterns, 'faqSection');
    let newFaqSection = '';
    if (info.category === 'ac') {
      pageFaqs = faqBuilder.getAcFaqs(info.brandName);
      newFaqSection = renderFaqSection(pageFaqs, info.brandName, 'AC');
    } else if (info.category === 'fridge') {
      pageFaqs = faqBuilder.getFridgeFaqs(info.brandName);
      newFaqSection = renderFaqSection(pageFaqs, info.brandName, 'Refrigerator');
    } else if (info.category === 'washing-machine') {
      pageFaqs = faqBuilder.getWmFaqs(info.brandName);
      newFaqSection = renderFaqSection(pageFaqs, info.brandName, 'Washing Machine');
    } else if (info.category === 'tv') {
      pageFaqs = faqBuilder.getTvFaqs(info.brandName);
      newFaqSection = renderFaqSection(pageFaqs, info.brandName, 'TV');
    } else if (info.category === 'service-center') {
      pageFaqs = faqBuilder.getScFaqs(info.brandName, info.brandSlug);
      newFaqSection = renderFaqSection(pageFaqs, info.brandName, 'Service');
    } else if (info.category === 'root') {
      pageFaqs = faqBuilder.getIndexFaqs();
      newFaqSection = renderFaqSection(pageFaqs, 'Home Appliance', 'Repair');
    }

    if (faqBounds && newFaqSection) {
      content = content.slice(0, faqBounds.start) + newFaqSection + content.slice(faqBounds.end);
    }
    content = updateFaqSchema(content, pageFaqs);
  }

  // 4. On Service Center Pages: Replace Appliance Sections with rich brand-specific info
  if (info.category === 'service-center') {
    if (content.includes('id="washingMachineSection"')) {
      const wmSecRegex = /<!-- Washing Machine Section -->[\s\S]*?<section[^>]*id="washingMachineSection"[^>]*>[\s\S]*?<\/section>/i;
      content = content.replace(wmSecRegex, scSectionBuilder.generateScWmSection(info.brandName, info.brandSlug));
    }
    if (content.includes('id="refrigeratorSection"')) {
      const fridgeSecRegex = /<!-- Refrigerator Section -->[\s\S]*?<section[^>]*id="refrigeratorSection"[^>]*>[\s\S]*?<\/section>/i;
      content = content.replace(fridgeSecRegex, scSectionBuilder.generateScFridgeSection(info.brandName, info.brandSlug));
    }
    if (content.includes('id="acSection"')) {
      const acSecRegex = /<!-- AC Section -->[\s\S]*?<section[^>]*id="acSection"[^>]*>[\s\S]*?<\/section>/i;
      content = content.replace(acSecRegex, scSectionBuilder.generateScAcSection(info.brandName, info.brandSlug));
    }
    if (content.includes('id="tvSection"')) {
      const tvSecRegex = /<!-- TV Section -->[\s\S]*?<section[^>]*id="tvSection"[^>]*>[\s\S]*?<\/section>/i;
      content = content.replace(tvSecRegex, scSectionBuilder.generateScTvSection(info.brandName, info.brandSlug));
    }

    // Intro section
    const scIntroRegex = /<!-- Search Intent Section -->\s*<section class="section" style="background: #ffffff;">[\s\S]*?<\/section>/i;
    if (scIntroRegex.test(content)) {
      const intro = introBuilder.getScIntro(info.brandName, 0);
      const scIntroHtml = `<!-- Search Intent Section -->
  <section class="section" style="background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${intro.h2}</h2>
        <p>Local doorstep troubleshooting and repair assistance for ${info.brandName} appliances across Kanyakumari.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-color);">
        <p style="margin-bottom: 1rem;">
          ${intro.p1}
        </p>
        <p style="margin-bottom: 0;">
          ${intro.p2}
        </p>
      </div>
    </div>
  </section>`;
      content = content.replace(scIntroRegex, scIntroHtml);
    }
  }

  // 5. Update Google Tag to G-7JTM41CMV7
  content = updateGoogleTag(content);

  // 6. Apply all text, locality, landmark, and simple English substitutions
  content = applySubstitutions(content);

  // 7. Cleanup any residual regional terms
  content = content.replace(/Trichy and Palani roads/g, 'Cape Road and Trivandrum Highway');
  content = content.replace(/Palani and Trichy roads/g, 'Cape Road and Court Road');
  content = content.replace(/Trichy Road, Cape Road, WCC Road, and Cape Road Corridor/g, 'Cape Road, WCC Road, Court Road, and Trivandrum Highway');
  content = content.replace(/Trichy Road and Cape Road/g, 'Cape Road and Court Road');
  content = content.replace(/Trichy Road/g, 'Cape Road');
  content = content.replace(/Palani Road/g, 'Court Road');
  content = content.replace(/Trichy or Palani roads/g, 'Cape Road or Court Road');
  content = content.replace(/along Trichy and Palani roads/g, 'along Cape Road and Trivandrum Highway');
  content = content.replace(/from Palani and Trichy roads/g, 'from Cape Road and Court Road');
  content = content.replace(/Trichy/g, 'Cape Road');
  content = content.replace(/Palani/g, 'Court Road');
  content = content.replace(/Amaravathi/g, 'Pazhayar');
  content = content.replace(/Cauvery/g, 'Pazhayar');

  // Simple English substitutions
  content = content.replace(/\bprompt assistance\b/gi, 'quick help');
  content = content.replace(/\bdedicated service desk\b/gi, 'local service team');
  content = content.replace(/\bservice desk\b/gi, 'service center');
  content = content.replace(/\bcustomer support desk\b/gi, 'customer support');
  content = content.replace(/\bfacilitate\b/gi, 'help');
  content = content.replace(/\bcommence service\b/gi, 'start the service');
  content = content.replace(/\bcommence\b/gi, 'start');
  content = content.replace(/\bresidential premises\b/gi, 'home');
  content = content.replace(/\bpremises\b/gi, 'home');
  content = content.replace(/\btechnical intervention\b/gi, 'repair work');
  content = content.replace(/\bcomprehensive assistance\b/gi, 'complete help');
  content = content.replace(/\bpromptly\b/gi, 'quickly');
  content = content.replace(/\butilize\b/gi, 'use');
  content = content.replace(/\bdiagnostic assessment\b/gi, 'checking');
  content = content.replace(/\bmalfunctioning\b/gi, 'not working properly');
  content = content.replace(/\brectification\b/gi, 'repair');
  content = content.replace(/\bexpeditious\b/gi, 'quick');
  content = content.replace(/\bendeavour\b/gi, 'try');
  content = content.replace(/\bprovision of services\b/gi, 'service');

  // 8. Replace URL encoded Karur in WhatsApp and Google Maps embed links
  content = content.replace(/%20Karur\./gi, '%20Kanyakumari.');
  content = content.replace(/%20Karur/gi, '%20Kanyakumari');
  content = content.replace(/Karur%2C/gi, 'Kanyakumari%2C');
  content = content.replace(/%2CKarur/gi, '%2CKanyakumari');
  content = content.replace(/in%20Karur/gi, 'in%20Kanyakumari');
  content = content.replace(/171%2C%20Jawahar%20Bazaar%20Rd%2C%20Madavilagam%2C%20Karur%2C%20Tamil%20Nadu%20639001/gi, 'Court%20Road%20Junction%2C%20Cape%20Road%2C%20Nagercoil%2C%20Kanyakumari%20District%2C%20Tamil%20Nadu%20629001');

  // 9. Update Schema JSON-LD and Address explicitly
  content = content.replace(/"addressLocality":\s*"[^"]*"/g, '"addressLocality": "Kanyakumari"');
  content = content.replace(/"postalCode":\s*"[^"]*"/g, '"postalCode": "629001"');
  content = content.replace(/"streetAddress":\s*"[^"]*"/g, '"streetAddress": "Court Road Junction, Cape Road, Nagercoil"');
  content = content.replace(/"latitude":\s*[\d.]+/g, '"latitude": 8.1833');
  content = content.replace(/"longitude":\s*[\d.]+/g, '"longitude": 77.4119');

  // 10. Replace canonical and Open Graph URLs
  content = content.replace(/https:\/\/servicecenterkarur\.com/g, 'https://servicecenterkanyakumari.com');

  // 11. Rewrite all internal links to new Kanyakumari filenames
  for (const [oldRel, newRel] of Object.entries(urlMap)) {
    const oldFilename = path.basename(oldRel);
    const newFilename = path.basename(newRel);
    if (oldFilename !== newFilename) {
      content = content.split(oldFilename).join(newFilename);
      content = content.split(`/${oldRel}`).join(`/${newRel}`);
    }
  }

  // 12. Write destination file
  const destFullPath = path.join(DEST_DIR, destRelPath);
  const destDir = path.dirname(destFullPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.writeFileSync(destFullPath, content, 'utf8');
}

function processSitemapXml() {
  const sitemapPath = path.join(DEST_DIR, 'sitemap.xml');
  let content = fs.readFileSync(path.join(SOURCE_DIR, 'sitemap.xml'), 'utf8');

  content = content.replace(/https:\/\/servicecenterkarur\.com/g, 'https://servicecenterkanyakumari.com');

  for (const [oldRel, newRel] of Object.entries(urlMap)) {
    const oldBase = path.basename(oldRel);
    const newBase = path.basename(newRel);
    content = content.split(oldBase).join(newBase);
  }

  fs.writeFileSync(sitemapPath, content, 'utf8');
  console.log('sitemap.xml updated successfully.');
}

function processRobotsTxt() {
  const robotsPath = path.join(DEST_DIR, 'robots.txt');
  let content = fs.readFileSync(path.join(SOURCE_DIR, 'robots.txt'), 'utf8');
  content = content.replace(/https:\/\/servicecenterkarur\.com/g, 'https://servicecenterkanyakumari.com');
  fs.writeFileSync(robotsPath, content, 'utf8');
  console.log('robots.txt updated successfully.');
}

function processManifest() {
  const manifestPath = path.join(DEST_DIR, 'site.webmanifest');
  if (fs.existsSync(manifestPath)) {
    let content = fs.readFileSync(manifestPath, 'utf8');
    content = content.replace(/Karur/g, 'Kanyakumari');
    content = content.replace(/karur/g, 'kanyakumari');
    fs.writeFileSync(manifestPath, content, 'utf8');
    console.log('site.webmanifest updated successfully.');
  }
}

// -------------------------------------------------------------
// EXECUTE CONVERSION
// -------------------------------------------------------------
console.log('Starting Master Integrated Kanyakumari Conversion...');
let count = 0;
for (const [srcRel, destRel] of Object.entries(urlMap)) {
  processHtmlFile(srcRel, destRel);
  count++;
}
console.log(`Processed ${count} HTML files.`);

processSitemapXml();
processRobotsTxt();
processManifest();

console.log('=== MASTER CONVERSION COMPLETE ===');
