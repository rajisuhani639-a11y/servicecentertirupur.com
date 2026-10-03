// scripts/render_madurai_experiences.js
// Renders the Customer Service Experiences section for Madurai pages

function renderExperiencesSection(pageData, cards) {
  const rawBrand = pageData.brand || '';
  const isGeneric = !rawBrand || rawBrand.startsWith('All') || rawBrand === 'Home Appliance';
  const brand = isGeneric ? '' : rawBrand;
  const cat = pageData.category;

  let mainTitle = `Recent ${brand ? brand + ' ' : ''}Service Experiences in Madurai`;
  if (cat === 'ac') mainTitle = `Recent ${brand ? brand + ' ' : ''}AC Service Experiences in Madurai`;
  else if (cat === 'fridge') mainTitle = `Recent ${brand ? brand + ' ' : ''}Refrigerator Service Experiences in Madurai`;
  else if (cat === 'washing-machine') mainTitle = `Recent ${brand ? brand + ' ' : ''}Washing Machine Service Experiences in Madurai`;
  else if (cat === 'tv') mainTitle = `Recent ${brand ? brand + ' ' : ''}TV Repair Experiences in Madurai`;
  else if (cat === 'root') mainTitle = `Recent Home Appliance Service Experiences in Madurai`;

  const cardsHtml = cards.map(c => `
        <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; flex-wrap: wrap; gap: 0.35rem;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${c.locality}</span>
              <div style="display: flex; align-items: center; gap: 0.35rem;">
                <span style="font-size: 0.72rem; background: #fef3c7; color: #92400e; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">★ ${c.rating}/10 Customer Rating</span>
                <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Fix</span>
              </div>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${c.heading}</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">${c.body}</p>
          </div>
        </div>`).join('\n');

  return `<!-- Customer Service Experiences (100% Unique Per Page) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${mainTitle}</h2>
        <p>Real doorstep service situations handled by our local technicians across Madurai neighborhoods.</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
${cardsHtml}
      </div>
    </div>
  </section>`;
}

module.exports = {
  renderExperiencesSection
};
