// scripts/build_sc_appliance_sections.js
// Generates rich, brand-specific and appliance-specific sections for Service Center pages.
// Features: Common parts, common faults, approximate price ranges, price factor disclaimers,
// and genuine model series information (zero fake model numbers).

const details1 = require('./data_brand_details_1_to_18.js');
const details2 = require('./data_brand_details_19_to_36.js');
const details3 = require('./data_brand_details_37_to_54.js');
const allDetails = { ...details1, ...details2, ...details3 };

// Appliance part pricing reference tables
const wmPartsPricing = [
  { part: "Drain pump motor", price: "₹700–₹1,500" },
  { part: "Inlet water solenoid valve", price: "₹500–₹1,100" },
  { part: "Drive motor V-belt", price: "₹400–₹850" },
  { part: "Door lock interlock switch", price: "₹600–₹1,400" },
  { part: "Suspension damper rods (set of 4)", price: "₹700–₹1,600" },
  { part: "Electronic pressure sensor", price: "₹500–₹1,100" },
  { part: "Main inverter PCB / control board", price: "₹2,200–₹5,200+" }
];

const fridgePartsPricing = [
  { part: "Compressor starter relay & overload", price: "₹350–₹750" },
  { part: "Temperature control thermostat", price: "₹550–₹1,200" },
  { part: "Evaporator fan motor", price: "₹700–₹1,600" },
  { part: "Defrost timer / bi-metal & heater", price: "₹650–₹1,500" },
  { part: "Magnetic door gasket", price: "₹600–₹1,400" },
  { part: "Inverter compressor (standard / inverter)", price: "₹2,800–₹7,000+" }
];

const acPartsPricing = [
  { part: "Dual run / fan capacitor", price: "₹500–₹1,200" },
  { part: "Indoor blower motor / fan drum", price: "₹1,400–₹2,800" },
  { part: "Outdoor condenser fan motor", price: "₹1,500–₹3,200" },
  { part: "Louver stepping swing motor", price: "₹450–₹850" },
  { part: "Inverter controller / IPM PCB module", price: "₹2,200–₹6,000+" },
  { part: "Refrigerant leak brazing & gas recharge", price: "₹1,800–₹3,200" }
];

const tvPartsPricing = [
  { part: "LED backlight strip array", price: "₹1,000–₹3,000+" },
  { part: "Power supply SMPS board repair", price: "₹1,200–₹2,500" },
  { part: "Main motherboard / firmware programming", price: "₹1,800–₹4,500+" },
  { part: "T-Con timing controller board", price: "₹900–₹2,200" },
  { part: "Internal stereo speaker set", price: "₹600–₹1,400" }
];

// Helper to render parts & pricing list
function renderPartsList(partsArray) {
  return partsArray.map(item => `
    <li style="margin-bottom: 0.6rem; display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.35rem;">
      <span><strong>${item.part}:</strong></span>
      <span style="color: var(--accent-blue); font-weight: 600;">Approx. ${item.price}</span>
    </li>
  `).join('');
}

// Generates complete HTML section for Washing Machine in a Service Center page
function generateScWmSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const wm = brandData.wm || {};
  const types = wm.types || ["Front Load Washing Machine", "Fully Automatic Top Load", "Semi-Automatic Washer"];
  const tech = wm.tech || `${brandName} washing machines feature high-efficiency wash cycles, stainless steel drums, and water-saving pulsators suited for Kanyakumari water conditions.`;
  const problems = wm.problems || [
    "Drum not rotating during the spin or dry cycle",
    "Water continuously leaking from the bottom discharge valve",
    "Heavy rattling noise during high-speed spinning",
    "Water inlet filling tub very slowly"
  ];

  return `
      <!-- Washing Machine Section -->
      <section class="section" id="washingMachineSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Washing Machine Service Center Kanyakumari</h2>
            <p>Reliable doorstep checking, motor testing, and drain repair for ${brandName} washing machines in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} washer stops spinning, fails to drain, or triggers an error code mid-cycle, our local Kanyakumari technician provides quick doorstep diagnosis. We service front load, top load, and semi-automatic machines across all residential neighborhoods in Kanyakumari district.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} washing machines are available across 6 kg to 10+ kg capacities, including inverter direct-drive, belt-drive, and twin-tub models. Technicians carry multi-meter testing equipment and compatible spares to identify whether the issue is mechanical or electronic before performing any repair work.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Machine Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Brand Technology & Series</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${tech}</p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Washing Machine Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Spare Parts & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList(wmPartsPricing)}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate reference ranges only. Final cost depends strictly on exact ${brandName} model series, part availability, and doorstep technician inspection.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Washing Machine Inspection?</strong> Schedule a doorstep visit in your Kanyakumari area today.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// Generates complete HTML section for Refrigerator in a Service Center page
function generateScFridgeSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const fridge = brandData.fridge || {};
  const types = fridge.types || ["Single Door Direct Cool Refrigerator", "Frost Free Double Door Fridge", "Side-by-Side Inverter Refrigerator"];
  const tech = fridge.tech || `${brandName} refrigerators use multi-airflow technology, uniform cooling channels, and energy-efficient compressors designed to handle coastal temperatures.`;
  const problems = fridge.problems || [
    "Freezer freezing well but bottom compartment remaining warm",
    "Clicking sound from rear compressor without cooling initiation",
    "Water leakage accumulating underneath the vegetable tray",
    "Excessive frost buildup along door edges and cooling coil"
  ];

  return `
      <!-- Refrigerator Section -->
      <section class="section" id="refrigeratorSection" style="border-top: 1px solid var(--border-color); background: #f8fafc;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Refrigerator Service Center Kanyakumari</h2>
            <p>Doorstep cooling diagnosis, defrost sensor checking, and compressor repair for ${brandName} refrigerators in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              If your ${brandName} refrigerator has stopped cooling, shows freezer frost buildup, or makes repetitive clicking noises, our local Kanyakumari technicians provide same-day doorstep inspection across the district.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} cooling appliances range across direct cool single-door units (190L–240L), frost-free double door models (260L–450L), and multi-door inverter series. Exact spare parts—such as relays, bi-metals, timers, and PCB modules—are verified by the model number printed on the cabinet rating plate.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Refrigerator Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Cooling Technology & Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${tech}</p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Refrigerator Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Spare Parts & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList(fridgePartsPricing)}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Reference price ranges only. Final cost is estimated on site depending on ${brandName} refrigerator model, gas type, and technician diagnosis.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Refrigerator Cooling Check?</strong> Book a local doorstep inspection in Kanyakumari.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// Generates complete HTML section for Air Conditioner in a Service Center page
function generateScAcSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const ac = brandData.ac || {};
  const types = ac.types || ["Inverter Split AC (1 Ton to 2 Ton)", "Non-Inverter Split AC", "Window AC Unit"];
  const tech = ac.tech || `${brandName} air conditioners feature fast cooling modes, anti-corrosive copper condenser coils, and smart inverter compressors suited for coastal climates.`;
  const problems = ac.problems || [
    "Indoor unit blowing room-temperature air instead of cool air",
    "Water leaking steadily along the indoor casing wall",
    "Outdoor compressor tripping after running for 10-15 minutes",
    "Error code flashing on the indoor LED temperature display"
  ];

  return `
      <!-- AC Section -->
      <section class="section" id="acSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} AC Service Center Kanyakumari</h2>
            <p>Fast doorstep troubleshooting, gas checking, and cooling repairs for ${brandName} air conditioners across Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              During warm weather in Kanyakumari, an air conditioner breakdown creates immediate discomfort. Our doorstep technicians check capacitor health, refrigerant pressure levels, indoor blower drums, and outdoor coils to restore optimal cooling.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} ACs span 1 Ton, 1.5 Ton, and 2 Ton capacities across 3-Star and 5-Star inverter and fixed-speed variants. Component specifications differ by tonnage and series; our local technician checks electrical parameters with a multimeter before recommending any spare part.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported AC Configurations</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Cooling System Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${tech}</p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} AC Faults</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key AC Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList(acPartsPricing)}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Pricing is indicative. Total charges vary depending on AC tonnage, piping length, gas type (R32/R410A), and physical inspection.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need Urgent ${brandName} AC Service in Kanyakumari?</strong> Technicians arrive with full testing kits.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// Generates complete HTML section for TV in a Service Center page
function generateScTvSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const tv = brandData.tv || {};
  const types = tv.types || ["4K Ultra HD Smart LED TV", "Android / Google TV", "Full HD LED TV (32\" to 65\")"];
  const tech = tv.tech || `${brandName} televisions combine high-resolution LED panels, HDR processing, dynamic contrast engines, and multi-channel audio systems.`;
  const problems = tv.problems || [
    "Sound is normal but display screen is completely dark",
    "TV stuck on brand logo screen during startup reboot loop",
    "Red power indicator light blinks continuously without screen activation",
    "Horizontal or vertical color lines running across the picture"
  ];

  return `
      <!-- TV Section -->
      <section class="section" id="tvSection" style="border-top: 1px solid var(--border-color); background: #f8fafc;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} TV Service Center Kanyakumari</h2>
            <p>Doorstep LED screen, backlight, and circuit board repair for ${brandName} televisions in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} Smart LED TV loses display brightness, exhibits audio-without-video, or fails to power on past standby mode, our local technicians provide doorstep inspection across Kanyakumari.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} televisions encompass 32-inch HD Ready, 43-inch Full HD, and 50-inch to 65-inch 4K UHD smart models. The exact replacement LED strips, power boards, or T-Con logic circuits depend on the model number printed on the back panel sticker.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Television Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Display & Audio Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${tech}</p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} TV Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key TV Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList(tvPartsPricing)}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate estimates only. Panel size, series specifications, and circuit board condition determine the final quotation upon inspection.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} TV Screen or Power Board Repair?</strong> Book a doorstep visit in Kanyakumari.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

module.exports = {
  generateScWmSection,
  generateScFridgeSection,
  generateScAcSection,
  generateScTvSection
};
