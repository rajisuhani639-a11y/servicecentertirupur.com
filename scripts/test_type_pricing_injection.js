const fs = require('fs');

function getPricingBox(title, category) {
  const t = title.toLowerCase();
  
  if (category === 'washing-machine') {
    if (t.includes('front load')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Visiting Charge: <strong>₹249</strong></span>
          <span style="display: block;">• Front Load Service / Drain Descale: <strong>₹349 – ₹549 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Door Lock / Drain Pump / Gasket): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Drum Bearing / Motor / PCB): Inspected before final quotation</span>
        </div>`;
    } else if (t.includes('top load')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Visiting Charge: <strong>₹249</strong></span>
          <span style="display: block;">• Top Load Service / Pulsator Clean: <strong>₹299 – ₹499 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Inlet Valve / Drain Motor / Rods): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Gearbox / Drive Motor / PCB): Inspected before final quotation</span>
        </div>`;
    } else if (t.includes('semi automatic') || t.includes('twin tub')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Visiting Charge: <strong>₹249</strong></span>
          <span style="display: block;">• Semi-Auto Service / Timer &amp; Drain Fix: <strong>₹249 – ₹399 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Timer / Capacitor / Buffer Seal): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Wash / Spin Motor Replacement): Inspected before final quotation</span>
        </div>`;
    } else {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Visiting Charge: <strong>₹249</strong></span>
          <span style="display: block;">• Washer Service / Minor Repair: <strong>₹349 – ₹499 onwards</strong></span>
          <span style="display: block;">• Spare Parts: Model &amp; fault dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul: Inspected before final quotation</span>
        </div>`;
    }
  }
  return '';
}

const file = 'washing-machine/samsung-washing-machine-repair-service-in-karur.html';
const content = fs.readFileSync(file, 'utf8');

// Test injection
const typesSecStart = content.indexOf('id="typesSection"');
const typesSecEnd = content.indexOf('</section>', typesSecStart);
let typesSec = content.slice(typesSecStart, typesSecEnd);

const cards = typesSec.split('<div class="type-card"');
let newTypesSec = cards[0];

for (let i = 1; i < cards.length; i++) {
  let card = '<div class="type-card"' + cards[i];
  const h3Match = card.match(/<h3[^>]*>(.*?)<\/h3>/i);
  const title = h3Match ? h3Match[1] : '';
  const pricingBox = getPricingBox(title, 'washing-machine');
  
  // Insert before <ul> if exists, else before last </div>
  if (card.includes('<ul')) {
    card = card.replace('<ul', `${pricingBox}\n          <ul`);
  } else {
    const lastDiv = card.lastIndexOf('</div>');
    card = card.slice(0, lastDiv) + `${pricingBox}\n        </div>` + card.slice(lastDiv);
  }
  newTypesSec += card.replace('<div class="type-card"', '');
}

console.log('Sample injected Card 1:');
const sampleCard1 = newTypesSec.split('<div class="type-card"')[1];
console.log(('<div class="type-card"' + sampleCard1).slice(0, 1500));
