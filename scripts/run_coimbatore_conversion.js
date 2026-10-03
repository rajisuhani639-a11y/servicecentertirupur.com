// scripts/run_coimbatore_conversion.js
// Master conversion & unique-content generator from Kanyakumari to COIMBATORE.

const fs = require('fs');
const path = require('path');
const localitiesGen = require('./coimbatore_locality_generators.js');
const uniqueExpData = JSON.parse(fs.readFileSync('./scripts/coimbatore_unique_experiences.json', 'utf8'));
const faqBuilder = require('./coimbatore_faq_builder.js');
const scSectionBuilder = require('./coimbatore_sc_appliance_sections.js');
const introBuilder = require('./coimbatore_unique_intros.js');
const { applySubstitutions } = require('./coimbatore_substitutions.js');
const urlMap = JSON.parse(fs.readFileSync('./scripts/coimbatore_url_map.json', 'utf8'));

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
    const base = norm.replace('ac/', '').replace('-ac-repair-service-in-kanyakumari.html', '').replace('-ac-repair-service-in-coimbatore.html', '');
    if (base !== 'ac-repair-service-in-kanyakumari.html' && base !== 'ac-repair-service-in-coimbatore.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All AC Brands';
    }
  } else if (norm.startsWith('fridge/')) {
    category = 'fridge';
    const base = norm.replace('fridge/', '').replace('-refrigerator-repair-service-in-kanyakumari.html', '').replace('-refrigerator-repair-service-in-coimbatore.html', '');
    if (base !== 'refrigerator-repair-service-in-kanyakumari.html' && base !== 'refrigerator-repair-service-in-coimbatore.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All Refrigerator Brands';
    }
  } else if (norm.startsWith('washing-machine/')) {
    category = 'washing-machine';
    const base = norm.replace('washing-machine/', '').replace('-washing-machine-repair-service-in-kanyakumari.html', '').replace('-washing-machine-repair-service-in-coimbatore.html', '');
    if (base !== 'washing-machine-repair-service-in-kanyakumari.html' && base !== 'washing-machine-repair-service-in-coimbatore.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All Washing Machine Brands';
    }
  } else if (norm.startsWith('tv/')) {
    category = 'tv';
    const base = norm.replace('tv/', '').replace('-tv-repair-service-in-kanyakumari.html', '').replace('-tv-repair-service-in-coimbatore.html', '');
    if (base !== 'tv-repair-service-in-kanyakumari.html' && base !== 'tv-repair-service-in-coimbatore.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    } else {
      brandName = 'All TV Brands';
    }
  } else if (norm.startsWith('servicecenter/')) {
    category = 'service-center';
    const base = norm.replace('servicecenter/', '').replace('-service-center-kanyakumari.html', '').replace('-service-center-coimbatore.html', '');
    if (base !== 'home-appliance-service-center-kanyakumari.html' && base !== 'home-appliance-service-center-coimbatore.html') {
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
  /Areas We Cover in and Around/i,
  /Service Center Areas in/i,
  /Repair Near Me in/i,
  /Service Near Me in/i,
  /Across .* Localities/i,
  /Localities in/i,
  /Service Localities in/i,
  /Coverage Across .* Areas/i,
  /Repair Coverage Across/i
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
  'Common Customer Experiences',
  'Customer Experiences'
];

const faqPatterns = [
  /Frequently Asked Questions/i,
  /FAQ/i
];

function renderExpSection(cards, brandName, applianceLabel, isSc = false) {
  const brand = (brandName && brandName !== 'Home Appliance Multi-Brand') ? brandName : 'Home Appliance';
  const heading = isSc
    ? `Recent ${brand} Service Experiences in Coimbatore`
    : `Recent ${brand} ${applianceLabel} Service Experiences in Coimbatore`;
  const subtext = `Authentic doorstep troubleshooting situations handled by our local technicians across Coimbatore neighborhoods.`;

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

function renderFaqSection(faqs, brandName, applianceLabel) {
  const brand = (brandName && brandName !== 'Home Appliance Multi-Brand') ? brandName : 'Home Appliance';
  const heading = `Frequently Asked Questions — ${brand} ${applianceLabel} in Coimbatore`;
  const subtext = `Clear, practical answers about doorstep inspection, common faults, spare parts, and approximate costs in Coimbatore.`;

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

function processHtmlFile(srcRelPath, destRelPath, pageIdx) {
  let content = fs.readFileSync(srcRelPath, 'utf8');
  const info = getFileInfo(srcRelPath);

  // 1. Replace Locality Section with 150 localities (50 East, 50 West, 50 North)
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
    const cards = uniqueExpData[destRelPath] || uniqueExpData[srcRelPath] || [];

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

    // Replace Search Intent Intro section on Service Center pages
    const scIntroRegex = /<!-- Search Intent Section -->\s*<section class="section" style="background: #ffffff;">[\s\S]*?<\/section>/i;
    if (scIntroRegex.test(content)) {
      const intro = introBuilder.getScIntro(info.brandName, pageIdx);
      const scIntroHtml = `<!-- Search Intent Section -->
  <section class="section" style="background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${intro.h2}</h2>
        <p>Local doorstep troubleshooting and repair assistance for ${info.brandName} appliances across Coimbatore.</p>
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

  // 5. On Appliance Pages: Replace Local Search & Intro Content Section
  if (['ac', 'fridge', 'washing-machine', 'tv'].includes(info.category)) {
    let intro = null;
    if (info.category === 'ac') intro = introBuilder.getAcIntro(info.brandName, pageIdx);
    else if (info.category === 'fridge') intro = introBuilder.getFridgeIntro(info.brandName, pageIdx);
    else if (info.category === 'washing-machine') intro = introBuilder.getWmIntro(info.brandName, pageIdx);
    else if (info.category === 'tv') intro = introBuilder.getTvIntro(info.brandName, pageIdx);

    if (intro) {
      // Update hero lead
      content = content.replace(/<p class="hero-lead">[\s\S]*?<\/p>/i, `<p class="hero-lead">\n          ${intro.lead}\n        </p>`);

      // Update Local Search & Intro Content section if exists
      const introSecRegex = /<!-- 3\. Local Search & Intro Content -->\s*<section class="section section-bg-muted">[\s\S]*?<\/section>/i;
      if (introSecRegex.test(content)) {
        const appLabel = (info.category === 'ac') ? 'Air Conditioner' :
          (info.category === 'fridge') ? 'Refrigerator' :
          (info.category === 'washing-machine') ? 'Washing Machine' : 'Smart Television';

        const newIntroSection = `<!-- 3. Local Search & Intro Content -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>${intro.h2}</h2>
        <p>Local technician support for ${info.brandName} ${appLabel} in Coimbatore, Tamil Nadu</p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p class="about-lead">
            ${intro.lead}
          </p>
          <p>
            ${intro.p1}
          </p>
          <p>
            ${intro.p2}
          </p>
        </div>
        <div class="about-highlights">
          <div class="highlight-card">
            <h4>Coimbatore Climate & Appliance Care</h4>
            <p>Coimbatore's warm summer weather and busy urban traffic create demanding operating conditions for appliances. Regular inspection, timely component checks, and proper cleaning maintain efficiency and prolong machine lifespan.</p>
          </div>
          <div class="highlight-card" style="margin-top: 1rem;">
            <h4>Verified Doorstep Service</h4>
            <p>Our technicians test electrical components with digital multimeters and provide upfront estimates across all 150 Coimbatore localities.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
        content = content.replace(introSecRegex, newIntroSection);
      }
    }
  }

  // 6. Apply all text, locality, landmark, and simple English substitutions
  content = applySubstitutions(content);

  // 7. Update Schema JSON-LD and Address explicitly for Coimbatore
  content = content.replace(/"addressLocality":\s*"[^"]*"/g, '"addressLocality": "Coimbatore"');
  content = content.replace(/"postalCode":\s*"[^"]*"/g, '"postalCode": "641012"');
  content = content.replace(/"streetAddress":\s*"[^"]*"/g, '"streetAddress": "Cross Cut Road, Gandhipuram"');
  content = content.replace(/"latitude":\s*[\d.]+/g, '"latitude": 11.0168');
  content = content.replace(/"longitude":\s*[\d.]+/g, '"longitude": 76.9558');
  content = content.replace(/"name":\s*"Service Center Kanyakumari[^"]*"/g, '"name": "Service Center Coimbatore - Home Appliance Repair"');
  content = content.replace(/"name":\s*"Service Center Kanyakumari"/g, '"name": "Service Center Coimbatore"');
  content = content.replace(/"name":\s*"Kanyakumari"/g, '"name": "Coimbatore"');

  // 8. Replace canonical, og, and domain URLs
  content = content.replace(/https:\/\/servicecenterkanyakumari\.com/g, 'https://servicecentercoimbatore.com');

  // 9. Rewrite all internal links to new Coimbatore filenames
  for (const [oldRel, newRel] of Object.entries(urlMap)) {
    const oldFilename = path.basename(oldRel);
    const newFilename = path.basename(newRel);
    if (oldFilename !== newFilename) {
      content = content.split(oldFilename).join(newFilename);
      content = content.split(`/${oldRel}`).join(`/${newRel}`);
    }
  }

  // 10. Write destination file
  const destDir = path.dirname(destRelPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.writeFileSync(destRelPath, content, 'utf8');

  // If old file had a different name and exists, remove old file
  if (srcRelPath !== destRelPath && fs.existsSync(srcRelPath)) {
    fs.unlinkSync(srcRelPath);
  }
}

function processSitemapXml() {
  let content = fs.readFileSync('sitemap.xml', 'utf8');
  content = content.replace(/https:\/\/servicecenterkanyakumari\.com/g, 'https://servicecentercoimbatore.com');

  for (const [oldRel, newRel] of Object.entries(urlMap)) {
    const oldBase = path.basename(oldRel);
    const newBase = path.basename(newRel);
    content = content.split(oldBase).join(newBase);
  }

  fs.writeFileSync('sitemap.xml', content, 'utf8');
  console.log('sitemap.xml updated successfully.');
}

function processRobotsTxt() {
  let content = fs.readFileSync('robots.txt', 'utf8');
  content = content.replace(/https:\/\/servicecenterkanyakumari\.com/g, 'https://servicecentercoimbatore.com');
  fs.writeFileSync('robots.txt', content, 'utf8');
  console.log('robots.txt updated successfully.');
}

function processManifest() {
  if (fs.existsSync('site.webmanifest')) {
    let content = fs.readFileSync('site.webmanifest', 'utf8');
    content = content.replace(/Kanyakumari/g, 'Coimbatore');
    content = content.replace(/kanyakumari/g, 'coimbatore');
    fs.writeFileSync('site.webmanifest', content, 'utf8');
    console.log('site.webmanifest updated successfully.');
  }
}

// -------------------------------------------------------------
// EXECUTE MASTER CONVERSION
// -------------------------------------------------------------
console.log('Starting Master Integrated Kanyakumari -> Coimbatore Localization...');
let count = 0;
for (const [srcRel, destRel] of Object.entries(urlMap)) {
  processHtmlFile(srcRel, destRel, count);
  count++;
}
console.log(`Processed and localized ${count} HTML files.`);

processSitemapXml();
processRobotsTxt();
processManifest();

console.log('=== MASTER COIMBATORE LOCALIZATION COMPLETE ===');
