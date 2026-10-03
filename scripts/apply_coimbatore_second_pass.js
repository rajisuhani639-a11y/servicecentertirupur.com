// scripts/apply_coimbatore_second_pass.js
// Applies second-pass quality upgrades across all 175 HTML files:
// 1. Google Tag update to G-6B70TN6HP
// 2. Exact address update to 273, PRS Pandian Complex, 7th St, Gandhipuram, Coimbatore, Tamil Nadu 641012
// 3. Google Maps embed URL update to the exact address
// 4. Official brand details heading updated to "[BRAND] Authorized Service Center in Coimbatore"
// 5. Deeply unique customer service experiences (English + Tanglish + Tamil)
// 6. Deeply unique FAQs and FAQPage schema JSON-LD
// 7. Language audit to simple everyday Indian English

const fs = require('fs');
const path = require('path');

const deepExpData = JSON.parse(fs.readFileSync('./scripts/coimbatore_deep_experiences.json', 'utf8'));
const deepFaqData = JSON.parse(fs.readFileSync('./scripts/coimbatore_deep_faqs.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('./scripts/coimbatore_pages_list.json', 'utf8'));

const NEW_GOOGLE_TAG = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6B70TN6HP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6B70TN6HP');
</script>`;

const EXACT_STREET_ADDRESS = '273, PRS Pandian Complex, 7th St, Gandhipuram';
const EXACT_FULL_ADDRESS = '273, PRS Pandian Complex, 7th St, Gandhipuram, Coimbatore, Tamil Nadu 641012';
const ENCODED_MAP_QUERY = '273%2C%20PRS%20Pandian%20Complex%2C%207th%20St%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012';

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

function updateAddressesAndMaps(content) {
  let c = content;

  // 1. Google Maps embed query
  c = c.replace(/https:\/\/maps\.google\.com\/maps\?q=[^&"]*&amp;/gi, `https://maps.google.com/maps?q=${ENCODED_MAP_QUERY}&amp;`);
  c = c.replace(/https:\/\/maps\.google\.com\/maps\?q=[^&"]*"/gi, `https://maps.google.com/maps?q=${ENCODED_MAP_QUERY}"`);

  // 2. Schema JSON-LD streetAddress
  c = c.replace(/"streetAddress":\s*"[^"]*"/g, `"streetAddress": "${EXACT_STREET_ADDRESS}"`);
  c = c.replace(/"addressLocality":\s*"[^"]*"/g, `"addressLocality": "Coimbatore"`);
  c = c.replace(/"addressRegion":\s*"[^"]*"/g, `"addressRegion": "Tamil Nadu"`);
  c = c.replace(/"postalCode":\s*"[^"]*"/g, `"postalCode": "641012"`);
  c = c.replace(/"addressCountry":\s*"[^"]*"/g, `"addressCountry": "IN"`);

  // 3. Visible text addresses
  c = c.replace(/Cross Cut Road,\s*Gandhipuram,\s*Coimbatore,\s*Tamil Nadu\s*641012/gi, EXACT_FULL_ADDRESS);
  c = c.replace(/Cross Cut Road,\s*Gandhipuram/gi, EXACT_STREET_ADDRESS);
  c = c.replace(/Court Road Junction,\s*Cape Road,\s*Nagercoil[^<"]*/gi, EXACT_FULL_ADDRESS);
  c = c.replace(/3GQX\+RPM,\s*Cape Rd/gi, EXACT_STREET_ADDRESS);

  return c;
}

function updateOfficialBrandHeading(content, brandName) {
  let c = content;
  // Look for the Official Brand section heading
  // E.g. <h2>Liebherr Service Information in Coimbatore</h2> -> <h2>Liebherr Authorized Service Center in Coimbatore</h2>
  const officialSecRegex = /<!-- Official Brand Support & Reference Information -->[\s\S]*?<section[^>]*>[\s\S]*?<\/section>/i;
  const match = c.match(officialSecRegex);
  if (match) {
    let sec = match[0];
    sec = sec.replace(/<h2>[\s\S]*?<\/h2>/i, `<h2>${brandName} Authorized Service Center in Coimbatore</h2>`);
    c = c.replace(match[0], sec);
  } else {
    // If comment is slightly different, check for heading followed by Official Customer Care
    const altRegex = /<section[^>]*>[\s\S]*?<h2>([^<]+(?:Service Information|Support & Information)[^<]*)<\/h2>[\s\S]*?Official Customer Care[\s\S]*?<\/section>/i;
    const altMatch = c.match(altRegex);
    if (altMatch) {
      let sec = altMatch[0];
      sec = sec.replace(/<h2>[\s\S]*?<\/h2>/i, `<h2>${brandName} Authorized Service Center in Coimbatore</h2>`);
      c = c.replace(altMatch[0], sec);
    }
  }
  return c;
}

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

function applySimpleEnglishAudit(content) {
  let c = content;
  const replacements = [
    [/\bprompt assistance\b/gi, 'quick help'],
    [/\bcomprehensive assistance\b/gi, 'complete help'],
    [/\bcomprehensive\b/gi, 'complete'],
    [/\bfacilitate\b/gi, 'help'],
    [/\butilize\b/gi, 'use'],
    [/\bcommence service\b/gi, 'start the service'],
    [/\bcommence\b/gi, 'start'],
    [/\btechnical intervention\b/gi, 'repair work'],
    [/\bdiagnostic assessment\b/gi, 'checking'],
    [/\brectification\b/gi, 'repair'],
    [/\bexpeditious\b/gi, 'quick'],
    [/\bresidential premises\b/gi, 'home'],
    [/\bpremises\b/gi, 'home'],
    [/\bendeavour\b/gi, 'try'],
    [/\bmalfunctioning\b/gi, 'not working properly'],
    [/\bservice desk\b/gi, 'service center'],
    [/\bcustomer assistance\b/gi, 'customer help'],
    [/\bprofessional intervention\b/gi, 'technician visit'],
    [/\bseamless experience\b/gi, 'easy service'],
    [/\bseamless service experience\b/gi, 'easy service visit'],
    [/\btailored solution\b/gi, 'suitable repair'],
    [/\btailored solutions\b/gi, 'suitable repairs'],
    [/\bdedicated service support\b/gi, 'dependable service help'],
    [/\bexpert technical intervention\b/gi, 'skilled repair work'],
    [/\breliable and professional service\b/gi, 'honest and quick service']
  ];

  replacements.forEach(([regex, rep]) => {
    c = c.replace(regex, rep);
  });
  return c;
}

// -------------------------------------------------------------
// EXECUTE SECOND PASS ACROSS ALL FILES
// -------------------------------------------------------------

console.log('Starting Second-Pass Content Quality, FAQs, Experiences, Address & Google Tag Upgrade...');

let processedCount = 0;
let officialHeadingsUpdated = 0;

pages.forEach(p => {
  const filePath = p.newRel;
  if (!fs.existsSync(filePath)) {
    console.log(`Warning: File ${filePath} not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Google Tag Update
  content = updateGoogleTag(content);

  // 2. Address & Google Maps Embed Update
  content = updateAddressesAndMaps(content);

  // 3. Customer Service Experiences Update (English + Tanglish + Tamil)
  const expMatch = content.match(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i);
  const cards = deepExpData[p.newRel] || deepExpData[p.oldRel];
  if (expMatch && cards) {
    const isSc = p.category === 'service-center' || p.category === 'root';
    const appLabel = (p.category === 'ac') ? 'AC' :
      (p.category === 'fridge') ? 'Refrigerator' :
      (p.category === 'washing-machine') ? 'Washing Machine' :
      (p.category === 'tv') ? 'TV' : 'Appliance';

    const newExpHtml = renderExpSection(cards, p.brandName, appLabel, isSc);
    content = content.replace(expMatch[0], newExpHtml);
  }

  // 4. FAQs Update
  const faqMatch = content.match(/<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>/i);
  const faqs = deepFaqData[p.newRel] || deepFaqData[p.oldRel];
  if (faqMatch && faqs) {
    const appLabel = (p.category === 'ac') ? 'AC' :
      (p.category === 'fridge') ? 'Refrigerator' :
      (p.category === 'washing-machine') ? 'Washing Machine' :
      (p.category === 'tv') ? 'TV' : 'Service';

    const newFaqHtml = renderFaqSection(faqs, p.brandName, appLabel);
    content = content.replace(faqMatch[0], newFaqHtml);
    content = updateFaqSchema(content, faqs);
  }

  // 5. Official Brand Support Heading in Service Center pages
  if (p.category === 'service-center' && p.brandSlug !== 'home-appliance') {
    const prev = content;
    content = updateOfficialBrandHeading(content, p.brandName);
    if (content !== prev) {
      officialHeadingsUpdated++;
    }
  }

  // 6. Simple Indian English Language Audit
  content = applySimpleEnglishAudit(content);

  fs.writeFileSync(filePath, content, 'utf8');
  processedCount++;
});

// Update sitemap.html
if (fs.existsSync('sitemap.html')) {
  let sitemapHtml = fs.readFileSync('sitemap.html', 'utf8');
  sitemapHtml = updateGoogleTag(sitemapHtml);
  sitemapHtml = updateAddressesAndMaps(sitemapHtml);
  sitemapHtml = applySimpleEnglishAudit(sitemapHtml);
  fs.writeFileSync('sitemap.html', sitemapHtml, 'utf8');
  processedCount++;
}

console.log(`\n=== SECOND PASS COMPLETED ===`);
console.log(`Total HTML files updated: ${processedCount}`);
console.log(`Official Brand headings updated: ${officialHeadingsUpdated}`);
