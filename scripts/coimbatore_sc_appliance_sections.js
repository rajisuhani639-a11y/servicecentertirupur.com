// scripts/coimbatore_sc_appliance_sections.js
// Generates rich, brand-specific and appliance-specific sections for Service Center pages in Coimbatore.
// Features: Common parts, common faults, approximate price ranges, price factor disclaimers,
// and genuine model series information.

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

function renderPartsList(partsArray) {
  return partsArray.map(item => `
    <li style="margin-bottom: 0.6rem; display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.35rem;">
      <span><strong>${item.part}:</strong></span>
      <span style="color: var(--accent-blue); font-weight: 600;">Approx. ${item.price}</span>
    </li>
  `).join('');
}

function generateScWmSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const wm = brandData.wm || {};
  const types = wm.types || ["Front Load Washing Machine", "Fully Automatic Top Load", "Semi-Automatic Washer"];
  const tech = wm.tech || `${brandName} washing machines feature high-efficiency wash cycles, stainless steel drums, and water-saving pulsators suited for Coimbatore water conditions.`;
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
            <h2>${brandName} Washing Machine Service Center Coimbatore</h2>
            <p>Reliable doorstep checking, motor testing, and drain repair for ${brandName} washing machines in Coimbatore.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} washer stops spinning, fails to drain, or triggers an error code mid-cycle, our local Coimbatore technician provides quick doorstep diagnosis. We service front load, top load, and semi-automatic machines across all residential neighborhoods in Coimbatore.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} washing machines are available across 6 kg to 10+ kg capacities, including inverter direct-drive, belt-drive, and twin-tub models. Technicians carry multimeter testing equipment and compatible spares to identify whether the issue is mechanical or electronic before performing any repair work.
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

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Faults We Check</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.4rem;"><span style="color: var(--accent-blue); font-weight: bold;">•</span> <span>${p}</span></li>`).join('')}
              </ul>
            </div>

            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Replacement Parts & Charges</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; color: var(--text-color);">
                ${renderPartsList(wmPartsPricing)}
              </ul>
              <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                * Approximate market prices for compatible spares. Final cost depends on specific machine model, capacity, and technician physical inspection.
              </p>
            </div>
          </div>
        </div>
      </section>
  `;
}

function generateScFridgeSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const fridge = brandData.fridge || {};
  const types = fridge.types || ["Single Door Direct Cool", "Double Door Frost Free", "Side by Side / Multi-Door"];
  const tech = fridge.tech || `${brandName} refrigerators use precision inverter compressors, smart digital thermostats, and multi-airflow vents designed for reliable food preservation in Coimbatore homes.`;
  const problems = fridge.problems || [
    "Freezer making ice but lower compartment warm",
    "Compressor humming and clicking off after a few seconds",
    "Continuous water leaking under the vegetable tray",
    "Excessive ice buildup on the cooling coil"
  ];

  return `
      <!-- Refrigerator Section -->
      <section class="section" id="refrigeratorSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Refrigerator Service Center Coimbatore</h2>
            <p>Doorstep cooling inspection, thermostat replacement, and gas charging for ${brandName} refrigerators in Coimbatore.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} refrigerator stops cooling or starts making strange clicking sounds from the rear, prompt service prevents groceries from spoiling. Our Coimbatore technicians visit your home equipped with electronic leak testers, manifold gauges, and tested electrical relays.
            </p>
            <p style="margin-bottom: 0;">
              We service all ${brandName} models including direct cool single door, double door frost-free, bottom freezer, and inverter multi-door units. All pricing is clearly explained after checking before any component is replaced.
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

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Faults We Check</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.4rem;"><span style="color: var(--accent-blue); font-weight: bold;">•</span> <span>${p}</span></li>`).join('')}
              </ul>
            </div>

            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Replacement Parts & Charges</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; color: var(--text-color);">
                ${renderPartsList(fridgePartsPricing)}
              </ul>
              <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                * Indicative market pricing for replacement spares. Final price depends on compressor type (inverter vs non-inverter), capacity, and technician checking.
              </p>
            </div>
          </div>
        </div>
      </section>
  `;
}

function generateScAcSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const ac = brandData.ac || {};
  const types = ac.types || ["Split Inverter AC", "Fixed Speed Split AC", "Window Air Conditioner"];
  const tech = ac.tech || `${brandName} air conditioners incorporate high-efficiency rotary compressors, copper condenser coils, and smart airflow cooling designed for tropical Coimbatore temperatures.`;
  const problems = ac.problems || [
    "AC running but blowing room-temperature air",
    "Indoor unit leaking water onto the interior wall",
    "Outdoor compressor tripping after 2-3 minutes",
    "Remote sensor not registering temperature commands"
  ];

  return `
      <!-- AC Section -->
      <section class="section" id="acSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} AC Service Center Coimbatore</h2>
            <p>Doorstep cooling diagnosis, deep jet cleaning, capacitor replacement, and gas recharge for ${brandName} ACs in Coimbatore.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} air conditioner struggles during Coimbatore's warm weather, our local technicians provide prompt doorstep inspection. We check refrigerant standing pressure, measure dual run capacitors with digital meters, and clean choked condenser fins to restore strong, steady chilling.
            </p>
            <p style="margin-bottom: 0;">
              Whether your unit requires deep foam jet cleaning, copper flare leak repair, or an inverter PCB module inspection, we service split, window, and cassette units across all Coimbatore neighborhoods.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported AC Systems</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Cooling Tech & Refrigerants</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${tech}</p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Faults We Check</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.4rem;"><span style="color: var(--accent-blue); font-weight: bold;">•</span> <span>${p}</span></li>`).join('')}
              </ul>
            </div>

            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Replacement Parts & Charges</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; color: var(--text-color);">
                ${renderPartsList(acPartsPricing)}
              </ul>
              <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                * Standard market estimates. Final charges depend on model tonnage (1 Ton to 2+ Ton), refrigerant type (R32 / R410A), and physical inspection.
              </p>
            </div>
          </div>
        </div>
      </section>
  `;
}

function generateScTvSection(brandName, brandSlug) {
  const brandData = allDetails[brandSlug] || {};
  const tv = brandData.tv || {};
  const types = tv.types || ["Smart LED Television", "4K Ultra HD TV", "Android / Google TV"];
  const tech = tv.tech || `${brandName} televisions combine high-resolution LED panels, energy-efficient power supplies, and multi-core Smart TV processing motherboards.`;
  const problems = tv.problems || [
    "Sound is clear from speakers but screen is completely dark",
    "TV stuck on brand logo screen in a continuous restart loop",
    "Thin vertical colored lines appearing on display panel",
    "Red standby light blinking repeatedly with no display"
  ];

  return `
      <!-- TV Section -->
      <section class="section" id="tvSection" style="border-top: 1px solid var(--border-color); background: #ffffff;">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} TV Service Center Coimbatore</h2>
            <p>Doorstep LED backlight replacement, power board repair, and motherboard troubleshooting for ${brandName} televisions in Coimbatore.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} Smart TV encounters display or power issues, our local technicians carry specialized diagnostic testing tools to inspect the unit directly at your Coimbatore home. We perform on-site LED string testing, power board voltage rail measurements, and T-Con flex ribbon checks.
            </p>
            <p style="margin-bottom: 0;">
              Repairs are performed on padded protective mats using factory-compatible components. You receive an itemized estimate after inspection before any work begins.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Display Technologies</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${types.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Panel & Mainboard Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${tech}</p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Faults We Check</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.4rem;"><span style="color: var(--accent-blue); font-weight: bold;">•</span> <span>${p}</span></li>`).join('')}
              </ul>
            </div>

            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem;">
              <h3 style="font-size: 1.12rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common Replacement Parts & Charges</h3>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; color: var(--text-color);">
                ${renderPartsList(tvPartsPricing)}
              </ul>
              <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                * Approximate charges for common TV parts. Final cost depends on panel screen size (32" to 65"+), circuit board revision, and physical inspection.
              </p>
            </div>
          </div>
        </div>
      </section>
  `;
}

module.exports = {
  generateScWmSection,
  generateScFridgeSection,
  generateScAcSection,
  generateScTvSection
};
