// scripts/render_erode_faqs.js
// Renders the FAQ section HTML and JSON-LD schema for Erode pages

function renderFaqSection(pageData, faqData) {
  const brand = pageData.brand || 'Home Appliance';
  const cat = pageData.category;
  
  let mainHeading = `Frequently Asked Questions — ${brand} Service in Erode`;
  if (cat === 'ac') mainHeading = `Frequently Asked Questions — ${brand} AC Service in Erode`;
  else if (cat === 'fridge') mainHeading = `Frequently Asked Questions — ${brand} Refrigerator Repair in Erode`;
  else if (cat === 'washing-machine') mainHeading = `Frequently Asked Questions — ${brand} Washing Machine Service in Erode`;
  else if (cat === 'tv') mainHeading = `Frequently Asked Questions — ${brand} TV Repair in Erode`;
  else if (cat === 'service-center') mainHeading = `${brand} Service Center FAQs in Erode`;
  else if (cat === 'root') mainHeading = `Home Appliance Repair FAQs in Erode`;

  const subtext = `Doorstep troubleshooting guidance, spare parts pricing, visiting fees, and service solutions across Erode neighborhoods.`;

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
    "mainEntity": allItems.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
}

module.exports = {
  renderFaqSection,
  generateFaqSchema
};
