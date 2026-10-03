// scripts/apply_rebuilt_faqs.js
// Applies the rebuilt brand-wise and appliance-wise FAQ system across all pages

const fs = require('fs');
const path = require('path');

const masterFaqs = JSON.parse(fs.readFileSync('./scripts/coimbatore_master_faqs_v2.json', 'utf8'));

function renderFaqSection(pageData) {
  const brand = pageData.brand || 'Home Appliance';
  const cat = pageData.category;
  
  let mainHeading = `Frequently Asked Questions — ${brand} Service in Coimbatore`;
  if (cat === 'ac') mainHeading = `Frequently Asked Questions — ${brand} AC Service in Coimbatore`;
  else if (cat === 'fridge') mainHeading = `Frequently Asked Questions — ${brand} Refrigerator Repair in Coimbatore`;
  else if (cat === 'washing-machine') mainHeading = `Frequently Asked Questions — ${brand} Washing Machine Service in Coimbatore`;
  else if (cat === 'tv') mainHeading = `Frequently Asked Questions — ${brand} TV Repair in Coimbatore`;
  else if (cat === 'service-center') mainHeading = `${brand} Service Center FAQs in Coimbatore`;
  else if (cat === 'root') mainHeading = `Home Appliance Repair FAQs in Coimbatore`;

  const subtext = `Doorstep troubleshooting guidance, spare parts pricing, visiting fees, and service solutions across Coimbatore neighborhoods.`;

  const groupsHtml = pageData.groups.map(g => {
    const itemsHtml = g.items.map(item => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>${item.q}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            ${item.a}
          </div>
        </div>`).join('\n');

    return `
      <div class="faq-group" style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin: 1.6rem 0 0.85rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 0.35rem;">${g.title}</h3>
        <div class="faq-list">
${itemsHtml}
        </div>
      </div>`;
  }).join('\n');

  return `<section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>${mainHeading}</h2>
        <p>${subtext}</p>
      </div>

      <div style="max-width: 800px; margin: 0 auto;">
${groupsHtml}
      </div>
    </div>
  </section>`;
}

function updateFaqSchema(html, pageData) {
  const allItems = [];
  pageData.groups.forEach(g => {
    g.items.forEach(it => allItems.push(it));
  });

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allItems.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const newScript = `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
  
  const faqSchemaRegex = /<script type="application\/ld\+json">[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>/i;
  if (faqSchemaRegex.test(html)) {
    return html.replace(faqSchemaRegex, newScript);
  } else {
    return html.replace('</head>', `  ${newScript}\n</head>`);
  }
}

console.log('Applying Rebuilt FAQs and Schemas across all HTML files...');

let appliedCount = 0;
let schemaUpdatedCount = 0;

for (let filePath in masterFaqs) {
  if (!fs.existsSync(filePath)) {
    console.log(`Warning: File ${filePath} not found`);
    continue;
  }

  const pageData = masterFaqs[filePath];
  let content = fs.readFileSync(filePath, 'utf8');
  const newHtml = renderFaqSection(pageData);

  // Replace FAQ section
  const faqRegex = /<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>/i;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, newHtml);
    appliedCount++;
  } else {
    const altRegex = /<section[^>]*id=["']faqSection["'][^>]*>([\s\S]*?)<\/section>/i;
    if (altRegex.test(content)) {
      content = content.replace(altRegex, newHtml);
      appliedCount++;
    } else {
      // Insert before service-center-map-section or last section
      const mapSecRegex = /<section class="service-center-map-section"/i;
      if (mapSecRegex.test(content)) {
        content = content.replace(mapSecRegex, `${newHtml}\n\n  <section class="service-center-map-section"`);
        appliedCount++;
      } else {
        const lastSecIdx = content.lastIndexOf('<section');
        if (lastSecIdx !== -1) {
          content = content.slice(0, lastSecIdx) + newHtml + '\n\n  ' + content.slice(lastSecIdx);
          appliedCount++;
        }
      }
    }
  }

  // Update FAQ Schema
  const prevContent = content;
  content = updateFaqSchema(content, pageData);
  if (content !== prevContent) {
    schemaUpdatedCount++;
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`\n=== FAQ SYSTEM REBUILD APPLIED ===`);
console.log(`Total HTML files updated with new FAQs: ${appliedCount}`);
console.log(`Total HTML files updated with FAQPage Schema: ${schemaUpdatedCount}`);
