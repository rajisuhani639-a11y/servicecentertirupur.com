// scripts/render_madurai_faqs.js
// Renders the FAQ section HTML and JSON-LD schema for Madurai pages

function renderFaqSection(pageData, faqData) {
  const rawBrand = pageData.brand || '';
  const isGeneric = !rawBrand || rawBrand.startsWith('All') || rawBrand === 'Home Appliance';
  const brand = isGeneric ? '' : rawBrand;
  const cat = pageData.category;
  
  let mainHeading = `Frequently Asked Questions — ${brand ? brand + ' ' : ''}Service in Madurai`;
  if (cat === 'ac') mainHeading = `Frequently Asked Questions — ${brand ? brand + ' ' : ''}AC Service in Madurai`;
  else if (cat === 'fridge') mainHeading = `Frequently Asked Questions — ${brand ? brand + ' ' : ''}Refrigerator Repair in Madurai`;
  else if (cat === 'washing-machine') mainHeading = `Frequently Asked Questions — ${brand ? brand + ' ' : ''}Washing Machine Service in Madurai`;
  else if (cat === 'tv') mainHeading = `Frequently Asked Questions — ${brand ? brand + ' ' : ''}TV Repair in Madurai`;
  else if (cat === 'service-center') mainHeading = `${brand ? brand + ' ' : 'Home Appliance '}Service Center FAQs in Madurai`;
  else if (cat === 'root') mainHeading = `Home Appliance Repair FAQs in Madurai`;

  const subtext = `Doorstep troubleshooting guidance, spare parts pricing, visiting fees, and service solutions across Madurai neighborhoods.`;

  const groupsHtml = faqData.groups.map(g => {
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

function generateFaqSchema(faqData) {
  const allItems = [];
  faqData.groups.forEach(g => {
    g.items.forEach(it => allItems.push(it));
  });

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allItems.map(item => ({
      "@type": "Question",
      "name": item.q.replace(/<[^>]+>/g, ''),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a.replace(/<[^>]+>/g, '')
      }
    }))
  };

  return `<!-- FAQ Schema JSON-LD -->\n  <script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
}

module.exports = {
  renderFaqSection,
  generateFaqSchema
};
