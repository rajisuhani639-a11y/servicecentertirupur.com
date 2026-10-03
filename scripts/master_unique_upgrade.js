// scripts/master_unique_upgrade.js
// Executes the final comprehensive unique-content upgrade across all 175 HTML files.

const fs = require('fs');
const path = require('path');

const catalog = require('./pages_catalog.json');
const uniqueExpData = JSON.parse(fs.readFileSync('./scripts/unique_experiences_data.json', 'utf8'));
const faqBuilder = require('./build_unique_faqs.js');
const scFaqBuilder = require('./build_sc_unique_faqs.js');
const introBuilder = require('./build_unique_intros.js');
const scSectionBuilder = require('./build_sc_appliance_sections.js');

// Statistics tracker
const stats = {
  htmlUpdated: 0,
  expUpdated: 0,
  faqUpdated: 0,
  scAppSectionsUpdated: 0,
  introsUpdated: 0,
  cleanupsApplied: 0
};

// -------------------------------------------------------------
// HELPER: Simple Indian English & Regional Term Cleanup
// -------------------------------------------------------------
function cleanText(text) {
  let res = text;

  // Regional term fixes
  res = res.replace(/Trichy and Palani roads/g, 'Cape Road and Trivandrum Highway');
  res = res.replace(/Palani and Trichy roads/g, 'Cape Road and Court Road');
  res = res.replace(/Trichy Road, Cape Road, WCC Road, and Cape Road Corridor/g, 'Cape Road, WCC Road, Court Road, and Trivandrum Highway');
  res = res.replace(/Trichy Road and Cape Road/g, 'Cape Road and Court Road');
  res = res.replace(/Trichy Road/g, 'Cape Road');
  res = res.replace(/Palani Road/g, 'Court Road');
  res = res.replace(/Trichy or Palani roads/g, 'Cape Road or Court Road');
  res = res.replace(/along Trichy and Palani roads/g, 'along Cape Road and Trivandrum Highway');
  res = res.replace(/from Palani and Trichy roads/g, 'from Cape Road and Court Road');
  res = res.replace(/Trichy/g, 'Cape Road');
  res = res.replace(/Palani/g, 'Court Road');
  res = res.replace(/Amaravathi/g, 'Pazhayar');
  res = res.replace(/Cauvery/g, 'Pazhayar');

  // Heavy / robotic English -> Simple Indian English
  res = res.replace(/\bprompt assistance\b/gi, 'quick help');
  res = res.replace(/\bdedicated service desk\b/gi, 'local service team');
  res = res.replace(/\bservice desk\b/gi, 'service center');
  res = res.replace(/\bcustomer support desk\b/gi, 'customer support');
  res = res.replace(/\bfacilitate\b/gi, 'help');
  res = res.replace(/\bcommence service\b/gi, 'start the service');
  res = res.replace(/\bcommence\b/gi, 'start');
  res = res.replace(/\bresidential premises\b/gi, 'home');
  res = res.replace(/\bpremises\b/gi, 'home');
  res = res.replace(/\btechnical intervention\b/gi, 'repair work');
  res = res.replace(/\bcomprehensive assistance\b/gi, 'complete help');
  res = res.replace(/\bpromptly\b/gi, 'quickly');
  res = res.replace(/\butilize\b/gi, 'use');
  res = res.replace(/\bdiagnostic assessment\b/gi, 'checking');
  res = res.replace(/\bmalfunctioning\b/gi, 'not working properly');
  res = res.replace(/\brectification\b/gi, 'repair');
  res = res.replace(/\bexpeditious\b/gi, 'quick');
  res = res.replace(/\bendeavour\b/gi, 'try');
  res = res.replace(/\bprovision of services\b/gi, 'service');

  return res;
}

// -------------------------------------------------------------
// HELPER: Render Experience Section HTML
// -------------------------------------------------------------
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

// -------------------------------------------------------------
// HELPER: Render FAQ Section HTML
// -------------------------------------------------------------
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

// -------------------------------------------------------------
// HELPER: Update Schema.org FAQPage JSON-LD
// -------------------------------------------------------------
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

// Robust Experience Section Replacement Regex
const robustExpRegex = /<section class="section">\s*<div class="container">\s*<div class="section-header">\s*<h2>[^<]*(?:Problems Customers Face|Customer Experiences|Repair Experiences|Service Experiences|Customer Problems)[\s\S]*?<\/section>/i;

// -------------------------------------------------------------
// CATEGORY PROCESSORS
// -------------------------------------------------------------

// 1. Process AC Pages
function processAcPage(item, index) {
  let content = fs.readFileSync(item.file, 'utf8');
  content = cleanText(content);

  const brand = item.brand;
  const cards = uniqueExpData[item.file] || [];
  const faqs = faqBuilder.getAcFaqs(brand, index);

  if (robustExpRegex.test(content)) {
    content = content.replace(robustExpRegex, renderExpSection(cards, brand, 'AC', false));
    stats.expUpdated++;
  }

  const faqRegex = /<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, renderFaqSection(faqs, brand, 'AC'));
    stats.faqUpdated++;
  }

  content = updateFaqSchema(content, faqs);
  fs.writeFileSync(item.file, content, 'utf8');
  stats.htmlUpdated++;
}

// 2. Process Refrigerator Pages
function processFridgePage(item, index) {
  let content = fs.readFileSync(item.file, 'utf8');
  content = cleanText(content);

  const brand = item.brand;
  const cards = uniqueExpData[item.file] || [];
  const faqs = faqBuilder.getFridgeFaqs(brand, index);

  if (robustExpRegex.test(content)) {
    content = content.replace(robustExpRegex, renderExpSection(cards, brand, 'Refrigerator', false));
    stats.expUpdated++;
  }

  const faqRegex = /<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, renderFaqSection(faqs, brand, 'Refrigerator'));
    stats.faqUpdated++;
  }

  content = updateFaqSchema(content, faqs);
  fs.writeFileSync(item.file, content, 'utf8');
  stats.htmlUpdated++;
}

// 3. Process Washing Machine Pages
function processWmPage(item, index) {
  let content = fs.readFileSync(item.file, 'utf8');
  content = cleanText(content);

  const brand = item.brand;
  const cards = uniqueExpData[item.file] || [];
  const faqs = faqBuilder.getWmFaqs(brand, index);

  if (robustExpRegex.test(content)) {
    content = content.replace(robustExpRegex, renderExpSection(cards, brand, 'Washing Machine', false));
    stats.expUpdated++;
  }

  const faqRegex = /<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, renderFaqSection(faqs, brand, 'Washing Machine'));
    stats.faqUpdated++;
  }

  content = updateFaqSchema(content, faqs);
  fs.writeFileSync(item.file, content, 'utf8');
  stats.htmlUpdated++;
}

// 4. Process TV Pages
function processTvPage(item, index) {
  let content = fs.readFileSync(item.file, 'utf8');
  content = cleanText(content);

  const brand = item.brand;
  const cards = uniqueExpData[item.file] || [];
  const faqs = faqBuilder.getTvFaqs(brand, index);

  if (robustExpRegex.test(content)) {
    content = content.replace(robustExpRegex, renderExpSection(cards, brand, 'TV', false));
    stats.expUpdated++;
  }

  const faqRegex = /<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, renderFaqSection(faqs, brand, 'TV'));
    stats.faqUpdated++;
  }

  content = updateFaqSchema(content, faqs);
  fs.writeFileSync(item.file, content, 'utf8');
  stats.htmlUpdated++;
}

// 5. Process Service Center Pages
function processScPage(item, index) {
  let content = fs.readFileSync(item.file, 'utf8');
  content = cleanText(content);

  const brand = item.brand;
  const slug = item.slug.replace('-service-center-kanyakumari.html', '');
  const cards = uniqueExpData[item.file] || [];
  const faqs = scFaqBuilder.getScBrandFaqs(brand, slug, index);
  const intro = introBuilder.getScIntro(brand, index);

  // A. Replace Intro Section (Search Intent Section)
  const scIntroRegex = /<!-- Search Intent Section -->\s*<section class="section" style="background: #ffffff;">[\s\S]*?<\/section>/i;
  if (scIntroRegex.test(content)) {
    const scIntroHtml = `<!-- Search Intent Section -->
  <section class="section" style="background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${intro.h2}</h2>
        <p>Local doorstep troubleshooting and repair assistance for ${brand} appliances across Kanyakumari.</p>
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
    stats.introsUpdated++;
  }

  // B. Replace Appliance Sections if present
  if (content.includes('id="washingMachineSection"')) {
    const wmSecRegex = /<!-- Washing Machine Section -->[\s\S]*?<section[^>]*id="washingMachineSection"[^>]*>[\s\S]*?<\/section>/i;
    content = content.replace(wmSecRegex, scSectionBuilder.generateScWmSection(brand, slug));
    stats.scAppSectionsUpdated++;
  }

  if (content.includes('id="refrigeratorSection"')) {
    const fridgeSecRegex = /<!-- Refrigerator Section -->[\s\S]*?<section[^>]*id="refrigeratorSection"[^>]*>[\s\S]*?<\/section>/i;
    content = content.replace(fridgeSecRegex, scSectionBuilder.generateScFridgeSection(brand, slug));
    stats.scAppSectionsUpdated++;
  }

  if (content.includes('id="acSection"')) {
    const acSecRegex = /<!-- AC Section -->[\s\S]*?<section[^>]*id="acSection"[^>]*>[\s\S]*?<\/section>/i;
    content = content.replace(acSecRegex, scSectionBuilder.generateScAcSection(brand, slug));
    stats.scAppSectionsUpdated++;
  }

  if (content.includes('id="tvSection"')) {
    const tvSecRegex = /<!-- TV Section -->[\s\S]*?<section[^>]*id="tvSection"[^>]*>[\s\S]*?<\/section>/i;
    content = content.replace(tvSecRegex, scSectionBuilder.generateScTvSection(brand, slug));
    stats.scAppSectionsUpdated++;
  }

  // C. Replace Customer Experience Section
  if (robustExpRegex.test(content)) {
    content = content.replace(robustExpRegex, renderExpSection(cards, brand, 'Appliance', true));
    stats.expUpdated++;
  }

  // D. Replace FAQ Section
  const faqRegex = /<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, renderFaqSection(faqs, brand, 'Service'));
    stats.faqUpdated++;
  }

  content = updateFaqSchema(content, faqs);
  fs.writeFileSync(item.file, content, 'utf8');
  stats.htmlUpdated++;
}

// 6. Process Index Page
function processIndexPage() {
  let content = fs.readFileSync('index.html', 'utf8');
  content = cleanText(content);

  const cards = uniqueExpData['index.html'] || [];
  const faqs = faqBuilder.getIndexFaqs();

  if (robustExpRegex.test(content)) {
    content = content.replace(robustExpRegex, renderExpSection(cards, 'Home Appliance', '', true));
    stats.expUpdated++;
  }

  const faqRegex = /<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, renderFaqSection(faqs, 'Home Appliance', 'Repair'));
    stats.faqUpdated++;
  }

  content = updateFaqSchema(content, faqs);
  fs.writeFileSync('index.html', content, 'utf8');
  stats.htmlUpdated++;
}

// 7. Process Sitemap Page
function processSitemapPage() {
  let content = fs.readFileSync('sitemap.html', 'utf8');
  content = cleanText(content);
  fs.writeFileSync('sitemap.html', content, 'utf8');
  stats.htmlUpdated++;
}

// -------------------------------------------------------------
// RUN MASTER UPGRADE
// -------------------------------------------------------------
console.log('Running Final Comprehensive Master Upgrade...');

catalog.ac.forEach((item, idx) => processAcPage(item, idx));
catalog.fridge.forEach((item, idx) => processFridgePage(item, idx));
catalog.wm.forEach((item, idx) => processWmPage(item, idx));
catalog.tv.forEach((item, idx) => processTvPage(item, idx));
catalog.sc.forEach((item, idx) => processScPage(item, idx));
processIndexPage();
processSitemapPage();

console.log('=== UPGRADE COMPLETE ===');
console.log(stats);
