const zonesData = require('./karur_wm_60_localities');

// Rotated heading templates for brand pages
const brandHeadingTemplates = [
  (brand, loc) => `${brand} Washing Machine Repair in ${loc}`,
  (brand, loc) => `${brand} Washing Machine Service in ${loc}`,
  (brand, loc) => `${brand} Washing Machine Repair Near Me in ${loc}`,
  (brand, loc) => `${brand} Washing Machine Technician in ${loc}`,
  (brand, loc) => `${brand} Washing Machine Service Center near ${loc}`,
  (brand, loc) => `${brand} Front Load Washing Machine Repair in ${loc}`,
  (brand, loc) => `${brand} Top Load Washing Machine Service in ${loc}`
];

// Rotated heading templates for main page (generic only, no brand)
const genericHeadingTemplates = [
  (loc) => `Washing Machine Repair in ${loc}, Karur`,
  (loc) => `Washing Machine Service in ${loc}, Karur`,
  (loc) => `Washing Machine Repair Near Me in ${loc}`,
  (loc) => `Washing Machine Technician in ${loc}`,
  (loc) => `Washing Machine Service Center near ${loc}`,
  (loc) => `Front Load Washing Machine Repair in ${loc}`,
  (loc) => `Top Load Washing Machine Service in ${loc}`
];

// Contextual sentence templates incorporating landmark, problem, and simple solution
const descTemplates = [
  (brand, loc, landmark) => `Looking for ${brand} washing machine repair in ${loc}? Our local technician visits homes around ${landmark} to inspect drain faults, spin vibration, and water inlet problems with clear upfront estimates.`,
  (brand, loc, landmark) => `Need doorstep ${brand} washing machine service in ${loc}? For residences near ${landmark}, we inspect motor issues, drum noise, and door latch locks using genuine compatible parts.`,
  (brand, loc, landmark) => `Searching for a reliable ${brand} washing machine technician near ${loc}? Technicians cover homes across ${landmark} for water leakage, error codes, and circuit testing.`,
  (brand, loc, landmark) => `Fast doorstep ${brand} washing machine repair near me in ${loc}. If your machine near ${landmark} is not spinning or water won't drain, we provide quick same-day doorstep inspection.`,
  (brand, loc, landmark) => `Helpful ${brand} washing machine service center support near ${loc}. Serving residential apartments and individual houses around ${landmark} with reliable part replacement and inspection.`,
  (brand, loc, landmark) => `Doorstep ${brand} front load & top load washing machine repair in ${loc}. We check heating elements, belt slippage, and pump blockages for residents near ${landmark}.`,
  (brand, loc, landmark) => `Affordable ${brand} washing machine checkup in ${loc}. If your washer near ${landmark} shows error codes or stops mid-cycle, our technician will test the machine and fix it promptly.`
];

const genericDescTemplates = [
  (loc, landmark) => `Looking for washing machine repair in ${loc}? Our local technician visits residences near ${landmark} to inspect water drain faults, spin vibration, and drum noise with clear upfront estimates.`,
  (loc, landmark) => `Need doorstep washing machine service in ${loc}? For homes near ${landmark}, our technician checks motor hum, water inlet valves, and door latch locks before suggesting parts.`,
  (loc, landmark) => `Searching for a reliable washing machine technician near ${loc}? Technicians cover residential avenues across ${landmark} for water leakage, error codes, and PCB testing.`,
  (loc, landmark) => `Fast doorstep washing machine repair near me in ${loc}. If your washer near ${landmark} is not spinning or water won't drain, we provide quick same-day doorstep inspection.`,
  (loc, landmark) => `Local washing machine service center support near ${loc}. Serving apartments and independent homes around ${landmark} with honest testing and genuine compatible spare parts.`,
  (loc, landmark) => `Doorstep front load & top load washing machine repair in ${loc}. We check heater coils, drive belts, and pump blockages for families near ${landmark}.`,
  (loc, landmark) => `Affordable washing machine checkup in ${loc}. If your machine near ${landmark} stops mid-cycle or displays error codes, our technician tests the system and resolves it promptly.`
];

function generateBrandLocalitiesHtml(brandName) {
  let cardCounter = 0;

  const zonesHtml = zonesData.map(zoneObj => {
    const cardsHtml = zoneObj.localities.map(loc => {
      const heading = brandHeadingTemplates[cardCounter % brandHeadingTemplates.length](brandName, loc.name);
      const desc = descTemplates[cardCounter % descTemplates.length](brandName, loc.name, loc.landmark);
      const waText = encodeURIComponent(`Hello, I need ${brandName} washing machine repair service in ${loc.name}, Karur. Please share technician visit details.`);
      cardCounter++;

      return `          <div class="service-card" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.5px;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${heading}</h4>
              <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.85rem; line-height: 1.55;">${desc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.5rem 0.75rem; font-size: 0.82rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919442054321" class="btn-primary-call sync-call" style="flex: 1; padding: 0.5rem 0.75rem; font-size: 0.82rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>`;
    }).join('\n');

    return `      <!-- ${zoneObj.zone} -->
      <div class="locality-zone-group" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 1rem; padding-bottom: 0.45rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${zoneObj.zone} (${zoneObj.localities.length} Verified Areas)</span>
        </h3>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
${cardsHtml}
        </div>
      </div>`;
  }).join('\n');

  return `  <!-- Washing Machine Service Near Me in Karur (60 Verified Localities) -->
  <section class="section section-bg-muted" id="localities">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} Washing Machine Repair Near Me in Karur (60 Verified Localities)</h2>
        <p>
          Looking for ${brandName} washing machine repair near me in Karur? Doorstep ${brandName} washing machine inspection, water drain fixing, spin motor repair, and genuine parts replacement are available across all 60 residential and commercial localities in Central, North, South, East, and West Karur:
        </p>
      </div>

${zonesHtml}
    </div>
  </section>`;
}

function generateMainLandingLocalitiesHtml() {
  let cardCounter = 0;

  const zonesHtml = zonesData.map(zoneObj => {
    const cardsHtml = zoneObj.localities.map(loc => {
      const heading = genericHeadingTemplates[cardCounter % genericHeadingTemplates.length](loc.name);
      const desc = genericDescTemplates[cardCounter % genericDescTemplates.length](loc.name, loc.landmark);
      const waText = encodeURIComponent(`Hello, I need washing machine repair service in ${loc.name}, Karur. Please share technician visit details.`);
      cardCounter++;

      return `          <div class="service-card" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.5px;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${heading}</h4>
              <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.85rem; line-height: 1.55;">${desc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.5rem 0.75rem; font-size: 0.82rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919442054321" class="btn-primary-call sync-call" style="flex: 1; padding: 0.5rem 0.75rem; font-size: 0.82rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>`;
    }).join('\n');

    return `      <!-- ${zoneObj.zone} -->
      <div class="locality-zone-group" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 1rem; padding-bottom: 0.45rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${zoneObj.zone} (${zoneObj.localities.length} Verified Areas)</span>
        </h3>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
${cardsHtml}
        </div>
      </div>`;
  }).join('\n');

  return `  <!-- Washing Machine Service Localities in Karur (60 Verified Localities) -->
  <section class="section section-bg-muted" id="localitiesSection">
    <div class="container">
      <div class="section-header">
        <h2>Washing Machine Service Localities in Karur (60 Verified Areas)</h2>
        <p>
          Our doorstep technicians cover all 60 residential and commercial localities across Karur Corporation and surrounding areas. Select your nearby locality below for quick technician inspection:
        </p>
      </div>

${zonesHtml}
    </div>
  </section>`;
}

module.exports = {
  generateBrandLocalitiesHtml,
  generateMainLandingLocalitiesHtml
};
