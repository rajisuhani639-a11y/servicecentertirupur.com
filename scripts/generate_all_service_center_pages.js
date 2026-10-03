// Generator for All 54 Service Center Brand Pages in Karur
// Project: servicecenterkarur.com

const fs = require('fs');
const path = require('path');

const brands = require('./data_brands_info.js');
const details1 = require('./data_brand_details_1_to_18.js');
const details2 = require('./data_brand_details_19_to_36.js');
const details3 = require('./data_brand_details_37_to_54.js');
const allDetails = { ...details1, ...details2, ...details3 };
const experiences = require('./data_brand_experiences.js');
const faqs = require('./data_brand_faqs.js');
const localities = require('./data_karur_localities.js');

const outDir = path.join(__dirname, '..', 'service-center');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function renderLocalities(b) {
  const directions = [
    { label: "East Karur", count: localities.east.length, list: localities.east },
    { label: "West Karur", count: localities.west.length, list: localities.west },
    { label: "North Karur", count: localities.north.length, list: localities.north },
    { label: "South Karur", count: localities.south.length, list: localities.south }
  ];

  let html = '';
  directions.forEach(dir => {
    html += `
      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 1rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${dir.label} (${dir.count} Verified Areas)</span>
        </h3>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
    `;

    dir.list.forEach((loc, idx) => {
      // Natural phrasing variations
      const phraseType = idx % 4;
      let cardTitle = `${b.name} Service Center in ${loc.name}`;
      if (phraseType === 1) cardTitle = `${b.name} Repair Center in ${loc.name}`;
      else if (phraseType === 2) cardTitle = `${b.name} Servicing Center in ${loc.name}`;
      else if (phraseType === 3) cardTitle = `${b.name} Service Center Near Me in ${loc.name}`;

      html += `
        <div class="service-card" style="padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.5px;">${loc.name} (${loc.pincode})</span>
              <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
            </div>
            <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
            <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">Reliable doorstep inspection and component repairs for ${b.name} appliances near ${loc.landmark}. Clear estimate given before starting work.</p>
          </div>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
            <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20${encodeURIComponent(b.name)}%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
              <span>WhatsApp</span>
            </a>
            <a href="tel:+919442054321" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
              <span>Call Now</span>
            </a>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });
  return html;
}

function generatePage(b) {
  const d = allDetails[b.slug];
  const exp = experiences[b.slug] || {};
  const faqList = faqs[b.slug] || [];

  const canonicalUrl = `https://servicecenterkarur.com/servicecenter/${b.slug}-service-center-karur.html`;
  const metaTitle = `${b.name} Service Center Karur | Home Appliance Repair`;
  const metaDesc = `Looking for ${b.name} service center in Karur? Doorstep repair for ${b.name} ${b.verifiedAppliances.slice(0, 3).join(', ')} across Karur. Fast technician visit and upfront cost estimate.`;

  // Schema LD+JSON
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": metaTitle,
        "description": metaDesc,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://servicecenterkarur.com/#website",
          "name": "Service Center Karur",
          "url": "https://servicecenterkarur.com"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://servicecenterkarur.com/#localbusiness",
        "name": "Service Center Karur",
        "telephone": "+919442054321",
        "url": "https://servicecenterkarur.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jawahar Bazaar, Kovai Road, Near Bus Stand",
          "addressLocality": "Karur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "639001",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "City",
          "name": "Karur"
        },
        "description": `Doorstep ${b.name} home appliance repair and maintenance services across Karur, Tamil Nadu.`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://servicecenterkarur.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Service Center",
            "item": "https://servicecenterkarur.com/servicecenter/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${b.name} Service Center Karur`,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  // Build appliance sections
  let applianceSectionsHtml = '';

  // 1. Washing Machine Section
  if (b.hasWM && d.wm) {
    applianceSectionsHtml += `
      <!-- Washing Machine Section -->
      <section class="section" id="washingMachineSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${b.name} Washing Machine Service Center Karur</h2>
            <p>Reliable doorstep checking, motor testing, and drain repair for ${b.name} washing machines in Karur.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              Searching for a trusted <strong>${b.name} Washing Machine Service Center in Karur</strong>? When your washer stops spinning or water remains trapped in the drum, you need prompt local assistance. We provide dependable <strong>${b.name} Washing Machine Repair Near Me</strong> and <strong>${b.name} Washing Machine Service Near Me</strong> covering homes across Karur town.
            </p>
            <p style="margin-bottom: 0;">
              Our technicians inspect front load, top load, and semi-automatic machines directly at your residence, check for electrical or mechanical faults, and explain the required spare parts before carrying out repairs.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Verified Washer Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${d.wm.types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Brand Technology</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${d.wm.tech}</p>
            </div>
          </div>

          <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${b.name} Washing Machine Problems</h3>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
              ${d.wm.problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
            </ul>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); font-size: 0.88rem; color: var(--text-muted);">
              <strong>Common Parts Checked / Replaced:</strong> ${d.wm.parts.join(', ')}.
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.88rem; color: var(--accent-blue);">
              <strong>Maintenance Tip:</strong> ${d.wm.cleaning}
            </div>
          </div>

          ${b.wmFile ? `
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="../washing-machine/${b.wmFile}" style="display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--accent-blue); text-decoration: underline;">
                View dedicated ${b.name} Washing Machine Repair Page in Karur →
              </a>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  // 2. Refrigerator Section
  if (b.hasFridge && d.fridge) {
    applianceSectionsHtml += `
      <!-- Refrigerator Section -->
      <section class="section" id="refrigeratorSection" style="border-top: 1px solid var(--border-color); background: #f8fafc;">
        <div class="container">
          <div class="section-header">
            <h2>${b.name} Refrigerator Service Center Karur</h2>
            <p>Doorstep cooling diagnosis, defrost sensor checking, and compressor repair for ${b.name} refrigerators in Karur.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              Looking for a dependable <strong>${b.name} Refrigerator Service Center in Karur</strong>? When food spoils because the fresh food compartment is warm or ice is jamming the freezer vents, fast local service is vital. We provide reliable <strong>${b.name} Refrigerator Repair Near Me</strong> and <strong>${b.name} Refrigerator Service Near Me</strong> across Karur neighborhoods.
            </p>
            <p style="margin-bottom: 0;">
              Our technicians carry testing multimeters, defrost components, fan motors, and starter relays directly to your doorstep so issues can be inspected without shifting the heavy refrigerator.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Verified Refrigerator Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${d.fridge.types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Cooling Technology</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${d.fridge.tech}</p>
            </div>
          </div>

          <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${b.name} Refrigerator Problems</h3>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
              ${d.fridge.problems.map(p => `<li style="margin-bottom: 0.5rem;">❄️ <strong>Symptom:</strong> ${p}</li>`).join('')}
            </ul>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); font-size: 0.88rem; color: var(--text-muted);">
              <strong>Common Parts Checked / Replaced:</strong> ${d.fridge.parts.join(', ')}.
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.88rem; color: var(--accent-blue);">
              <strong>Maintenance Tip:</strong> ${d.fridge.cleaning}
            </div>
          </div>

          ${b.fridgeFile ? `
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="../fridge/${b.fridgeFile}" style="display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--accent-blue); text-decoration: underline;">
                View dedicated ${b.name} Refrigerator Repair Page in Karur →
              </a>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  // 3. Air Conditioner Section
  if (b.hasAC && d.ac) {
    applianceSectionsHtml += `
      <!-- AC Section -->
      <section class="section" id="acSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${b.name} AC Service Center Karur</h2>
            <p>Fast doorstep troubleshooting, gas checking, and cooling repairs for ${b.name} air conditioners across Karur.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              Searching for <strong>${b.name} AC Service Center in Karur</strong>? When the summer heat rises and your air conditioner starts blowing warm air or leaking water onto the wall, you need quick home service. We provide trusted <strong>${b.name} AC Repair Near Me</strong> and <strong>${b.name} AC Service Near Me</strong> throughout Karur.
            </p>
            <p style="margin-bottom: 0;">
              Our technicians check refrigerant levels, electrical capacitors, fan motors, and inverter circuit boards right at your home with complete upfront cost guidance.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Verified AC Models</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${d.ac.types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">AC Technology</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${d.ac.tech}</p>
            </div>
          </div>

          <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${b.name} AC Problems</h3>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
              ${d.ac.problems.map(p => `<li style="margin-bottom: 0.5rem;">💨 <strong>Problem:</strong> ${p}</li>`).join('')}
            </ul>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); font-size: 0.88rem; color: var(--text-muted);">
              <strong>Common Parts Checked / Replaced:</strong> ${d.ac.parts.join(', ')}.
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.88rem; color: var(--accent-blue);">
              <strong>Maintenance Tip:</strong> ${d.ac.cleaning}
            </div>
          </div>

          ${b.acFile ? `
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="../ac/${b.acFile}" style="display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--accent-blue); text-decoration: underline;">
                View dedicated ${b.name} AC Repair Page in Karur →
              </a>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  // 4. Television Section
  if (b.hasTV && d.tv) {
    applianceSectionsHtml += `
      <!-- TV Section -->
      <section class="section" id="tvSection" style="border-top: 1px solid var(--border-color); background: #f8fafc;">
        <div class="container">
          <div class="section-header">
            <h2>${b.name} TV Service Center Karur</h2>
            <p>Doorstep LED screen, backlight, and circuit board repair for ${b.name} televisions in Karur.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              Need a qualified <strong>${b.name} TV Service Center in Karur</strong>? When your smart TV has clear sound but a black screen or refuses to turn on from standby, our local technicians provide dependable <strong>${b.name} TV Repair Near Me</strong> and <strong>${b.name} TV Service Near Me</strong>.
            </p>
            <p style="margin-bottom: 0;">
              We inspect the power supply board, motherboard, T-Con board, and LED backlight strips directly at your home with safe handling.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Verified TV Categories</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${d.tv.types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Display Technology</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${d.tv.tech}</p>
            </div>
          </div>

          <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${b.name} TV Problems</h3>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
              ${d.tv.problems.map(p => `<li style="margin-bottom: 0.5rem;">📺 <strong>Issue:</strong> ${p}</li>`).join('')}
            </ul>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); font-size: 0.88rem; color: var(--text-muted);">
              <strong>Common Parts Checked / Replaced:</strong> ${d.tv.parts.join(', ')}.
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.88rem; color: var(--accent-blue);">
              <strong>Maintenance Tip:</strong> ${d.tv.cleaning}
            </div>
          </div>

          ${b.tvFile ? `
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="../tv/${b.tvFile}" style="display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--accent-blue); text-decoration: underline;">
                View dedicated ${b.name} TV Repair Page in Karur →
              </a>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  // Customer experiences HTML
  let experiencesHtml = '';
  const expKeys = Object.keys(exp);
  if (expKeys.length > 0) {
    experiencesHtml = `
      <!-- Customer Service Experiences (Illustrative) -->
      <section class="section" style="background: #f8fafc; border-top: 1px solid var(--border-color);">
        <div class="container">
          <div class="section-header">
            <h2>Recent ${b.name} Service Experiences in Karur</h2>
            <p>Illustrative service experiences based on typical doorstep customer calls across Karur neighborhoods.</p>
          </div>
          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${expKeys.map(k => {
              const item = exp[k];
              return `
                <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
                  <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.4rem;">📍 ${item.locality}</div>
                  <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${item.title}</h3>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">${item.story}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;
  }

  // FAQs HTML
  const faqsHtml = `
    <!-- FAQs -->
    <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions about ${b.name} Service in Karur</h2>
          <p>Common questions answered about doorstep checking, repairs, pricing, and spare parts.</p>
        </div>
        <div style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
          ${faqList.map(item => `
            <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">${item.q}</h3>
              <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">${item.a}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Assembling complete page
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${metaTitle}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">

  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${metaTitle}">
  <meta property="og:description" content="${metaDesc}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(schema, null, 2)}
  </script>
</head>
<body>

  <!-- Top Information Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <span>📍 Doorstep ${b.name} Appliance Service in Karur, Tamil Nadu</span>
      <span>⏰ Mon–Sun: 8:00 AM – 8:30 PM | Fast Technician Visit</span>
      <a href="tel:+919442054321">📞 Call Support: +91 94420 54321</a>
    </div>
  </div>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Karur Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center Karur</span>
          <span class="brand-loc">Local Appliance Care</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="index.html" class="active">Service Center</a>
        <a href="../ac/ac-repair-service-in-karur.html">AC Repair</a>
        <a href="../fridge/refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-karur.html">TV Repair</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919442054321" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call Now</span>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  <div class="nav-backdrop" id="navBackdrop"></div>

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li><a href="index.html">Service Center</a></li>
        <li aria-current="page">${b.name} Service Center Karur</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section hero-brand">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Doorstep ${b.name} Appliance Service in Karur</span>
        </div>
        <h1 class="brand-h1">${b.name} Service Center Karur</h1>
        <p class="hero-copy">
          ${d.searchIntentText}
        </p>

        <div class="hero-cta-group">
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call: +91 94420 54321</span>
          </a>
          <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20${encodeURIComponent(b.name)}%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Quick Request Card -->
      <div class="hero-card-box">
        <h2>Schedule ${b.name} Inspection</h2>
        <p>Local doorstep checking across Karur for ${b.name} appliances.</p>
        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin: 1.25rem 0;">
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Doorstep technician visit at your preferred slot
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Physical fault diagnosis and upfront estimate
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Tested replacement parts compatible with ${b.name}
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Comprehensive performance and safety testing
          </div>
        </div>
        <a href="tel:+919442054321" class="btn-primary-call sync-call" style="width: 100%; justify-content: center;">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call: +91 94420 54321</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Search Intent Section -->
  <section class="section" style="background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${d.searchIntentHeading}</h2>
        <p>Local doorstep troubleshooting and repair assistance for ${b.name} appliances in Karur.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-color);">
        <p style="margin-bottom: 1rem;">
          ${d.searchIntentText}
        </p>
        <p style="margin-bottom: 0;">
          Whether your appliance has an electrical problem, motor failure, cooling drop, or display issue, our technicians carry testing equipment directly to your address in Karur. We explain the exact cause and give you an upfront price before any replacement is carried out.
        </p>
      </div>
    </div>
  </section>

  <!-- Appliances We Service -->
  <section class="section" style="background: #f8fafc; border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header">
        <h2>${b.name} Home Appliances We Service</h2>
        <p>Verified home appliance categories supported for doorstep checking and repair in Karur.</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
        ${b.verifiedAppliances.map(app => `
          <div class="service-card" style="padding: 1.25rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); text-align: center;">
            <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🔧</div>
            <h3 style="font-size: 1.08rem; color: var(--primary-color); margin-bottom: 0.35rem;">${b.name} ${app}</h3>
            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin: 0;">Doorstep inspection, genuine compatible spares, and maintenance in Karur.</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  ${applianceSectionsHtml}

  <!-- How It Works (7 Steps) -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>How ${b.name} Appliance Service Works</h2>
        <p>Simple 7-step process for transparent doorstep repair in Karur.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.15rem;">
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 1</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Customer Contacts Us</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">You call our support number or send a WhatsApp message with your appliance details.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 2</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Appliance Details Collected</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">We note your ${b.name} model, the observed problem, and your Karur locality.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 3</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Technician Visit Arranged</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">A qualified technician is assigned for a doorstep visit at your convenient time slot.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 4</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Appliance Is Checked</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">The technician inspects the appliance thoroughly using testing meters and diagnostic tools.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 5</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Problem Is Explained</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">The exact fault, required spare parts, and estimated repair cost are explained clearly.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 6</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Repair Done After Approval</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">Work begins only after you approve the estimate, using tested replacement spares.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.3rem;">Step 7</div>
          <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Appliance Is Tested</h4>
          <p style="font-size: 0.86rem; color: var(--text-color); margin: 0; line-height: 1.5;">The appliance is operated and checked for proper functioning before completing the visit.</p>
        </div>
      </div>
    </div>
  </section>

  ${experiencesHtml}

  <!-- Why Choose Us -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose Us for ${b.name} Service in Karur</h2>
        <p>Practical and dependable local doorstep service across Karur.</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
        <div class="service-card" style="padding: 1.25rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.08rem; color: var(--primary-color); margin-bottom: 0.4rem;">Local Karur Service</h3>
          <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin: 0;">Our technicians reside and work in Karur, ensuring prompt coordination and fast response times across town.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.08rem; color: var(--primary-color); margin-bottom: 0.4rem;">Appliance-Specific Checking</h3>
          <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin: 0;">We diagnose the specific mechanical and electrical systems used in ${b.name} models with proper testing meters.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.08rem; color: var(--primary-color); margin-bottom: 0.4rem;">Doorstep Technician Visit</h3>
          <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin: 0;">No need to haul heavy appliances across town. Inspection and repairs are performed directly at your home.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.08rem; color: var(--primary-color); margin-bottom: 0.4rem;">Cost Explained Before Repair</h3>
          <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin: 0;">You receive a clear breakdown of the problem, required spares, and labor cost before any repair starts.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Near Me Section -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${b.name} Service Center Near Me in Karur</h2>
        <p>Quick doorstep coordination across all municipal wards and surrounding residential pockets.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-color);">
        <p style="margin-bottom: 1rem;">
          ${d.nearMeText}
        </p>
        <p style="margin-bottom: 0;">
          Whether you need an urgent <strong>${b.name} Service Center Near Me</strong>, a dependable <strong>${b.name} Repair Center Near Me</strong>, or comprehensive <strong>${b.name} Home Appliance Service Near Me</strong>, our local team is just a phone call away. We coordinate visits quickly to ensure your household appliances are back in working order.
        </p>
      </div>
    </div>
  </section>

  <!-- Locality Section -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${b.name} Service Center Areas in Karur</h2>
        <p>Verified service coverage across East, West, North, and South Karur localities.</p>
      </div>
      ${renderLocalities(b)}
    </div>
  </section>

  <!-- Why Brand Matters -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>Why ${b.name} Appliances Matter in Daily Home Use</h2>
        <p>Understanding the daily convenience provided by ${b.name} products in Karur homes.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-color);">
        <p style="margin: 0;">
          ${d.whyMatters}
        </p>
      </div>
    </div>
  </section>

  <!-- Why Regular Cleaning Matters -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>Why Regular ${b.name} Appliance Cleaning and Service Matters</h2>
        <p>Preventive maintenance advice tailored to ${b.name} appliances.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-color);">
        <p style="margin: 0;">
          ${d.cleaningMatters}
        </p>
      </div>
    </div>
  </section>

  ${faqsHtml}

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Karur</h4>
          <p>
            Local doorstep repair and inspection service for home appliances across Karur, Tamil Nadu. Fast coordination, technician visit, and transparent guidance.
          </p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Main Road, Kagithapuramam & Pasupathipalayam, Karur, Tamil Nadu 639001</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span><a href="tel:+919442054321" class="sync-call" style="color: #cbd5e1;">+91 94420 54321</a></span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Repair Services</h4>
          <ul class="footer-links">
            <li><a href="../ac/ac-repair-service-in-karur.html">AC Repair & Service</a></li>
            <li><a href="../fridge/refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-karur.html">TV Repair & Service</a></li>
            <li><a href="index.html">All Service Center Brands</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Karur Coverage</h4>
          <ul class="footer-links">
            <li><a href="../index.html#localitiesSection">Kagithapuramam & Pasupathipalayam</a></li>
            <li><a href="../index.html#localitiesSection">Thanthonimalai & Town Center</a></li>
            <li><a href="../index.html#localitiesSection">Vengamedu & Inam Karur</a></li>
            <li><a href="../index.html#localitiesSection">Kovai Road & Sanapiratti</a></li>
            <li><a href="../index.html#localitiesSection">Velayuthampalayam, Pugalur & Aravakurichi</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Timings</h4>
          <p>
            Monday to Sunday<br>
            <strong>8:00 AM - 8:30 PM</strong>
          </p>
          <p style="font-size: 0.82rem; color: #94a3b8;">
            Doorstep visits are scheduled based on technician slot availability and customer location.
          </p>
        </div>
      </div>

      <div class="footer-disclaimer-box">
        <strong>Important Customer Notice & Disclaimer:</strong><br>
        Service availability, repair cost and parts requirement may vary depending on appliance model and the issue found during inspection. Brand names are used only for identification of compatible appliances and do not imply official brand authorization unless specifically stated.
      </div>

      <div class="footer-copy">
        <div>© 2026 servicecenterkarur.com — Local Home Appliance Repair in Karur.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Scroll-Based Floating CTA (WhatsApp Left, Call Right) -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20${encodeURIComponent(b.name)}%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar -->
  <div class="mobile-bottom-bar">
    <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20${encodeURIComponent(b.name)}%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="bottom-bar-btn bottom-bar-call sync-call">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <script src="../js/config.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>
`;
}

// Generate all pages
let generatedCount = 0;
brands.forEach(b => {
  const fileName = `${b.slug}-service-center-karur.html`;
  const filePath = path.join(outDir, fileName);
  const html = generatePage(b);
  fs.writeFileSync(filePath, html, 'utf8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} Service Center brand pages in ${outDir}`);
