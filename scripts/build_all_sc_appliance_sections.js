const { getApplianceSeoIntro } = require('./build_sc_appliance_seo_intros.js');
// scripts/build_all_sc_appliance_sections.js
// Complete, brand-specific and appliance-specific section generators for all 15 appliance types
// across all 55 Service Center pages in Kanyakumari.

const details1 = require('./data_brand_details_1_to_18.js');
const details2 = require('./data_brand_details_19_to_36.js');
const details3 = require('./data_brand_details_37_to_54.js');
const allDetails = { ...details1, ...details2, ...details3 };

// Realistic approximate Indian market pricing references
const pricingCatalog = {
  'washing-machine': [
    { part: "Drain pump motor assembly", price: "₹700–₹1,500" },
    { part: "Inlet water solenoid valve", price: "₹500–₹1,100" },
    { part: "Drive motor V-belt", price: "₹400–₹850" },
    { part: "Door lock interlock switch", price: "₹600–₹1,400" },
    { part: "Suspension damper rods (set of 4)", price: "₹700–₹1,600" },
    { part: "Electronic pressure sensor", price: "₹500–₹1,100" },
    { part: "Main inverter PCB / control board", price: "₹2,200–₹5,200+" }
  ],
  'refrigerator': [
    { part: "Compressor starter relay & overload protector", price: "₹350–₹750" },
    { part: "Temperature control thermostat", price: "₹550–₹1,200" },
    { part: "Evaporator fan motor", price: "₹700–₹1,600" },
    { part: "Defrost timer / bi-metal sensor & heater", price: "₹650–₹1,500" },
    { part: "Magnetic door gasket seal", price: "₹600–₹1,400" },
    { part: "Inverter compressor (standard / inverter)", price: "₹2,800–₹7,000+" }
  ],
  'ac': [
    { part: "Dual run / fan capacitor", price: "₹500–₹1,200" },
    { part: "Indoor blower motor / fan drum", price: "₹1,400–₹2,800" },
    { part: "Outdoor condenser fan motor", price: "₹1,500–₹3,200" },
    { part: "Louver stepping swing motor", price: "₹450–₹850" },
    { part: "Inverter controller / IPM PCB module", price: "₹2,200–₹6,000+" },
    { part: "Refrigerant leak brazing & gas recharge", price: "₹1,800–₹3,200" }
  ],
  'tv': [
    { part: "LED backlight strip array", price: "₹1,000–₹3,000+" },
    { part: "Power supply SMPS board repair", price: "₹1,200–₹2,500" },
    { part: "Main motherboard / firmware programming", price: "₹1,800–₹4,500+" },
    { part: "T-Con timing controller board", price: "₹900–₹2,200" },
    { part: "Internal stereo speaker set", price: "₹600–₹1,400" }
  ],
  'washer-dryer': [
    { part: "Drain pump motor assembly", price: "₹800–₹1,800" },
    { part: "Drying heating element coil", price: "₹950–₹2,200" },
    { part: "Condenser blower fan motor", price: "₹1,200–₹2,600" },
    { part: "NTC temperature sensor thermistor", price: "₹450–₹950" },
    { part: "Drive motor belt / tensioner", price: "₹450–₹900" },
    { part: "Door lock interlock mechanism", price: "₹650–₹1,500" },
    { part: "Main inverter PCB / electronic module", price: "₹2,400–₹5,800+" }
  ],
  'dishwasher': [
    { part: "Drain pump motor assembly", price: "₹850–₹1,900" },
    { part: "Water inlet dual solenoid valve", price: "₹600–₹1,300" },
    { part: "Upper & lower spray arm assembly", price: "₹500–₹1,200" },
    { part: "Circulation wash pump motor", price: "₹1,800–₹3,800" },
    { part: "Flow-through water heating element", price: "₹1,100–₹2,400" },
    { part: "Door latch & safety microswitch", price: "₹450–₹1,100" },
    { part: "Main electronic control PCB", price: "₹2,200–₹5,200+" },
    { part: "Fine mesh microfilter screen", price: "₹400–₹850" }
  ],
  'chest-freezer': [
    { part: "Heavy-duty freezer compressor", price: "₹2,800–₹6,500+" },
    { part: "Mechanical thermostat / temperature controller", price: "₹550–₹1,350" },
    { part: "Compressor relay & overload protector", price: "₹350–₹800" },
    { part: "Magnetic lid / door rubber gasket", price: "₹650–₹1,500" },
    { part: "Forced-draft condenser fan motor", price: "₹750–₹1,700" },
    { part: "Copper filter drier & capillary tube", price: "₹400–₹850" },
    { part: "Refrigerant leak fixing & gas recharge", price: "₹1,200–₹2,400" }
  ],
  'microwave-oven': [
    { part: "High-voltage microwave magnetron", price: "₹1,200–₹2,800" },
    { part: "High-voltage capacitor", price: "₹450–₹950" },
    { part: "High-voltage rectifier diode", price: "₹250–₹550" },
    { part: "Glass turntable roller drive motor", price: "₹350–₹750" },
    { part: "Door safety interlock microswitches", price: "₹300–₹700" },
    { part: "Membrane touch keypad panel", price: "₹650–₹1,500" },
    { part: "Convection blower fan / grill heating element", price: "₹750–₹1,800" },
    { part: "Main power PCB & relay board", price: "₹1,400–₹3,200" }
  ],
  'air-purifier': [
    { part: "Composite True HEPA H13 filter", price: "₹1,200–₹2,800" },
    { part: "Activated carbon honeycomb filter", price: "₹800–₹1,800" },
    { part: "Laser PM2.5 particulate sensor module", price: "₹900–₹2,100" },
    { part: "DC brushless centrifugal blower motor", price: "₹1,200–₹2,500" },
    { part: "Power supply inverter board", price: "₹1,100–₹2,400" },
    { part: "Touch panel display & control circuit", price: "₹850–₹1,900" }
  ],
  'air-cooler': [
    { part: "Submersible water pump motor", price: "₹350–₹850" },
    { part: "Heavy-duty cooler fan motor", price: "₹850–₹1,900" },
    { part: "Synchronous louver swing motor", price: "₹250–₹600" },
    { part: "Dense honeycomb cooling pad set", price: "₹600–₹1,500" },
    { part: "Water float inlet valve assembly", price: "₹250–₹550" },
    { part: "Rotary speed selector switch", price: "₹200–₹500" }
  ],
  'water-purifier': [
    { part: "Reverse Osmosis (RO) membrane (75/100 GPD)", price: "₹1,100–₹2,400" },
    { part: "Pre-sediment filter candle & housing", price: "₹300–₹650" },
    { part: "Activated carbon & post-carbon filter block", price: "₹450–₹950" },
    { part: "Ultraviolet (UV) lamp & electronic ballast", price: "₹550–₹1,200" },
    { part: "High-pressure RO booster pump", price: "₹1,400–₹2,800" },
    { part: "Water inlet solenoid valve (SV)", price: "₹400–₹850" },
    { part: "Auto cut-off tank float microswitch", price: "₹300–₹600" }
  ],
  'water-heater': [
    { part: "Heavy-duty copper / Incoloy heating element", price: "₹650–₹1,600" },
    { part: "Stem / capillary temperature thermostat", price: "₹350–₹850" },
    { part: "Thermal cut-out safety switch", price: "₹300–₹700" },
    { part: "Magnesium sacrificial anode rod", price: "₹400–₹900" },
    { part: "Multi-function pressure relief safety valve", price: "₹450–₹950" },
    { part: "Braided inlet & outlet connection hoses", price: "₹250–₹600" }
  ],
  'audio-system': [
    { part: "Digital audio amplifier IC / board repair", price: "₹900–₹2,200" },
    { part: "Subwoofer driver cone / voice coil repair", price: "₹800–₹2,000" },
    { part: "Bluetooth wireless receiver module", price: "₹650–₹1,500" },
    { part: "HDMI ARC / optical port repair", price: "₹550–₹1,300" },
    { part: "SMPS power supply circuit repair", price: "₹750–₹1,800" },
    { part: "Infrared remote sensor & volume encoder", price: "₹400–₹900" }
  ],
  'kitchen-appliances': [
    { part: "Kitchen chimney suction motor / blower", price: "₹1,400–₹3,200" },
    { part: "Baffle filter / mesh filter replacement set", price: "₹600–₹1,400" },
    { part: "Touch panel / gesture sensor switch", price: "₹450–₹1,100" },
    { part: "Gas hob brass burner top & flame spreader", price: "₹550–₹1,350" },
    { part: "Piezoelectric pulse ignition unit", price: "₹450–₹950" },
    { part: "Mixer grinder copper armature & motor", price: "₹750–₹1,600" }
  ],
  'smart-appliances': [
    { part: "Wi-Fi / IoT communication bridge module", price: "₹1,200–₹2,600" },
    { part: "Smart temperature & telemetry sensor", price: "₹650–₹1,450" },
    { part: "Smart motherboard logic controller repair", price: "₹1,800–₹3,800" },
    { part: "Power regulation step-down module", price: "₹750–₹1,600" }
  ]
};

function renderPartsList(category) {
  const parts = pricingCatalog[category] || pricingCatalog['washing-machine'];
  return parts.map(item => `
    <li style="margin-bottom: 0.6rem; display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.35rem;">
      <span><strong>${item.part}:</strong></span>
      <span style="color: var(--accent-blue); font-weight: 600;">Approx. ${item.price}</span>
    </li>
  `).join('');
}

// 1. Washing Machine
function generateScWmSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'washing-machine', brandIndex, catIndex);
  const brandData = allDetails[brandSlug] || {};
  const wm = brandData.wm || {};
  const types = wm.types || ["Front Load Inverter Washing Machine", "Fully Automatic Top Load Washer", "Semi-Automatic Twin Tub Washer"];
  const tech = wm.tech || `${brandName} washing machines feature high-efficiency wash cycles, stainless steel diamond drums, and water-saving pulsators engineered for coastal water conditions in Kanyakumari.`;
  const problems = wm.problems || [
    "Drum not spinning during high-speed drain cycle",
    "Water filling continuously without stopping",
    "Excessive vibration and banging noise during spin cycle",
    "Error code display halting cycle mid-wash"
  ];

  return `
      <!-- Washing Machine Section -->
      <section class="section" id="washingMachineSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Washing Machine Service Center Kanyakumari</h2>
            <p>Reliable doorstep checking, motor testing, and drain repair for ${brandName} washing machines in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} washer stops spinning, fails to drain, or triggers an error code mid-cycle, our local Kanyakumari technician provides quick doorstep diagnosis. We service front load, top load, and semi-automatic machines across all residential neighborhoods in Kanyakumari district.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} washing machines are available across 6 kg to 10+ kg capacities, including inverter direct-drive, belt-drive, and twin-tub models. The correct PCB, drive motor, or drain pump depends strictly on the model number and production series printed on the cabinet sticker.
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
                ${renderPartsList('washing-machine')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹400–₹5,200+ depending on the model and part. Exact quotation is given after physical inspection.
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

// 2. Refrigerator
function generateScFridgeSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'refrigerator', brandIndex, catIndex);
  const brandData = allDetails[brandSlug] || {};
  const fridge = brandData.fridge || {};
  const types = fridge.types || ["Single Door Direct Cool Refrigerator", "Frost Free Double Door Fridge", "Side-by-Side Inverter Refrigerator"];
  const tech = fridge.tech || `${brandName} refrigerators use multi-airflow cooling, uniform chill channels, and energy-efficient compressors designed to handle tropical humidity in Kanyakumari.`;
  const problems = fridge.problems || [
    "Freezer freezing well but bottom compartment remaining warm",
    "Clicking sound from rear compressor without cooling initiation",
    "Water leakage accumulating underneath vegetable tray",
    "Excessive frost buildup along door edges and cooling coil"
  ];

  return `
      <!-- Refrigerator Section -->
      <section class="section" id="refrigeratorSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Refrigerator Service Center Kanyakumari</h2>
            <p>Doorstep cooling diagnosis, defrost sensor checking, and compressor repair for ${brandName} refrigerators in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              If your ${brandName} refrigerator has stopped cooling, shows freezer frost buildup, or makes repetitive clicking noises, our local Kanyakumari technicians provide same-day doorstep inspection across the district.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} cooling appliances span direct cool single-door units (180L–240L), frost-free double door models (250L–460L), and multi-door inverter series. The exact relay, bi-metal thermostat, timer, or inverter PCB depends strictly on the model number and cabinet configuration.
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
                ${renderPartsList('refrigerator')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹350–₹7,000+ depending on the model, compressor type, and part required.
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

// 3. Air Conditioner
function generateScAcSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'ac', brandIndex, catIndex);
  const brandData = allDetails[brandSlug] || {};
  const ac = brandData.ac || {};
  const types = ac.types || ["Inverter Split AC (1 Ton to 2 Ton)", "Fixed-Speed Split AC", "Window AC Unit", "Cassette AC"];
  const tech = ac.tech || `${brandName} air conditioners feature rapid turbo cooling, anti-corrosive copper condenser coils, and smart inverter compressors tailored for coastal air conditions.`;
  const problems = ac.problems || [
    "Indoor unit blowing room-temperature air instead of cool air",
    "Water leaking steadily along the indoor casing wall",
    "Outdoor compressor tripping after running for 10-15 minutes",
    "Error code flashing on the indoor LED temperature display"
  ];

  return `
      <!-- AC Section -->
      <section class="section" id="acSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} AC Service Center Kanyakumari</h2>
            <p>Fast doorstep troubleshooting, gas checking, and cooling repairs for ${brandName} air conditioners across Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
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
                ${renderPartsList('ac')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹450–₹6,000+ depending on tonnage, gas type (R32/R410A), and exact model part.
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

// 4. Television
function generateScTvSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'tv', brandIndex, catIndex);
  const brandData = allDetails[brandSlug] || {};
  const tv = brandData.tv || {};
  const types = tv.types || ["4K Ultra HD Smart LED TV", "Android / Google TV", "Full HD LED TV (32\" to 65\")", "QLED / OLED Panel Display"];
  const tech = tv.tech || `${brandName} televisions combine vibrant high-resolution LED panels, dynamic HDR processing engines, and multi-channel audio systems.`;
  const problems = tv.problems || [
    "Sound is normal but display screen is completely dark",
    "TV stuck on brand logo screen during startup reboot loop",
    "Red power indicator light blinks continuously without screen activation",
    "Horizontal or vertical color lines running across the picture"
  ];

  return `
      <!-- TV Section -->
      <section class="section" id="tvSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} TV Service Center Kanyakumari</h2>
            <p>Doorstep LED screen, backlight, and circuit board repair for ${brandName} televisions in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
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
                ${renderPartsList('tv')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹600–₹4,500+ depending on the model, screen size, and component required.
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

// 5. Washer Dryer
function generateScWasherDryerSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'washer-dryer', brandIndex, catIndex);
  const problems = [
    "Wash cycle runs normally but drying cycle leaves clothes damp and cold",
    "Dryer heating element not warming up while blower fan continues spinning",
    "Loud vibrating noise during high-speed condensation spin drying",
    "Lint filter clogged causing heating sensor to trip safety thermostat"
  ];

  return `
      <!-- Washer Dryer Section -->
      <section class="section" id="washerDryerSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Washer Dryer Service Center Kanyakumari</h2>
            <p>Comprehensive doorstep diagnosis, heater testing, and blower repair for ${brandName} washer dryers in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              A combined washer dryer integrates high-speed washing hydraulics with closed-loop condensation heating and drying airflow. When clothes come out wet after a dry cycle or error codes interrupt operation, our Kanyakumari technicians carry multimeter testing kits for heating coils, thermostats, and condenser blowers.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} washer dryers feature capacities from 7 kg wash / 5 kg dry up to 10 kg / 7 kg configurations with sensor dry technology. The correct heating element, NTC sensor, blower fan, or control PCB depends strictly on the model number and cabinet series.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Washer Dryer Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Inverter Front Load Washer Dryer Combo</li>
                <li>Condenser Drying Automatic Machine</li>
                <li>Heat-Pump Sensor Dry Washing Machine</li>
                <li>Standalone Clothes Tumbler Dryer</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Drying Technology & Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} washer dryer units utilize dual thermistor feedback, energy-efficient inverter motors, and multi-stage lint trapping designed for reliable operation in Kanyakumari's humid coastal climate.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Washer Dryer Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Spare Parts & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('washer-dryer')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹450–₹5,800+ depending on the model, heating wattage, and replacement part.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Washer Dryer Repair in Kanyakumari?</strong> Doorstep diagnosis scheduled today.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 6. Dishwasher
function generateScDishwasherSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'dishwasher', brandIndex, catIndex);
  const problems = [
    "Standing dirty water remaining at the bottom tub after cycle completion",
    "Dishes coming out with oily residue due to blocked spray arm nozzles",
    "Continuous beeping with water inlet error code on control display",
    "Circulation pump humming without spraying water into the wash chamber"
  ];

  return `
      <!-- Dishwasher Section -->
      <section class="section" id="dishwasherSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Dishwasher Service Center Kanyakumari</h2>
            <p>Expert doorstep repair, pump testing, and spray arm maintenance for ${brandName} dishwashers in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} dishwasher leaves dishes dirty, fails to drain water, or leaks onto the kitchen floor, our local Kanyakumari technician provides prompt doorstep checking. We inspect drain impellers, solenoid valves, heating elements, and microfilter systems.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} dishwashers include 12 to 15 place-setting freestanding and built-in models with intensive, eco, and quick-wash programs. The correct drain pump, wash motor, or inlet valve depends strictly on the model number engraved on the inner stainless door rim.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Dishwasher Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>12–15 Place Setting Freestanding Dishwasher</li>
                <li>Under-Counter Built-in Dishwasher</li>
                <li>Inverter Wash Motor Automatic Dishwasher</li>
                <li>Compact Tabletop Dishwasher Units</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Washing System Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} dishwashers employ rotating high-pressure spray arms, flow-through water heaters, and built-in water softener salt chambers suited for water mineral levels across Kanyakumari homes.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Dishwasher Faults</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Dishwasher Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('dishwasher')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹400–₹5,200+ depending on the model, place settings, and component required.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Dishwasher Repair in Kanyakumari?</strong> Local doorstep technician available.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 7. Chest Freezer / Deep Freezer
function generateScChestFreezerSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'chest-freezer', brandIndex, catIndex);
  const problems = [
    "Compressor running continuously without reaching deep sub-zero freezing temperature",
    "Repeated clicking noise from starter relay with compressor shutting down after seconds",
    "Heavy frost crust accumulating around lid edges causing loss of airtight seal",
    "Refrigerant leak along cooling pipeline resulting in lukewarm internal chamber"
  ];

  return `
      <!-- Chest Freezer Section -->
      <section class="section" id="chestFreezerSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Chest Freezer Service Center Kanyakumari</h2>
            <p>Reliable doorstep deep freezer cooling repair, thermostat checking, and gas service in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              Chest freezers and deep freezers are essential for residential bulk storage, commercial shops, and coastal fish preservation across Kanyakumari. When the cabinet loses sub-zero chilling or the compressor trips, our doorstep technicians arrive with manifold pressure gauges and compatible spares.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} chest freezers range across 100L compact home units to 300L–500L+ dual-compartment commercial deep freezers. The correct replacement compressor, thermostat, or lid gasket depends strictly on the model rating plate attached near the rear compressor grill.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Freezer Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Single Door Hard-Top Chest Freezer (100L–300L)</li>
                <li>Double Door Commercial Deep Freezer (300L–500L+)</li>
                <li>Convertible Freezer / Chiller Dual Mode Unit</li>
                <li>Glass-Top Display Deep Freezer</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Freezing System Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} chest freezers feature thick high-density PUF insulation, corrosion-resistant inner aluminium lining, and tropicalized compressors designed to hold temperature during local power cuts.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Chest Freezer Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Freezer Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('chest-freezer')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹350–₹6,500+ depending on the model capacity, gas type, and component required.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Deep Freezer Service in Kanyakumari?</strong> Doorstep technician available across district.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 8. Microwave Oven
function generateScMicrowaveSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'microwave-oven', brandIndex, catIndex);
  const problems = [
    "Microwave runs and turntable turns but food does not heat up at all",
    "Sparking and buzzing sound inside chamber due to damaged mica waveguide sheet",
    "Touch keypad membrane unresponsive or specific buttons not registering",
    "Glass turntable plate stopped rotating during cooking operation"
  ];

  return `
      <!-- Microwave Section -->
      <section class="section" id="microwaveSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Microwave Oven Service Center Kanyakumari</h2>
            <p>Safe doorstep magnetron testing, keypad repair, and circuit checking for ${brandName} microwave ovens in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              A microwave oven involves high-voltage circuits and safety interlocks that require professional multi-meter testing. When your ${brandName} oven runs without heating, trips the home circuit breaker, or shows an unresponsive touch panel, our trained Kanyakumari technician provides safe doorstep inspection.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} microwave models encompass 20L solo units, 23L–28L grill models, and 30L+ convection ovens with motorized baking elements. The exact magnetron, high-voltage diode, turntable motor, or control board depends strictly on the model number printed on the rear rating plate.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Microwave Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Solo Microwave Oven (20L–25L)</li>
                <li>Grill Microwave Oven with Quartz Elements</li>
                <li>Convection Baking Microwave Oven (28L–34L)</li>
                <li>Built-in Kitchen Wall Oven Units</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Heating Technology & Safety</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} microwave ovens use precision high-voltage magnetrons, triple microswitch door interlocks, and multi-stage defrost algorithms designed for even cooking and safety.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Microwave Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Microwave Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('microwave-oven')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹250–₹3,200+ depending on the model, capacity, and component required.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Microwave Oven Repair in Kanyakumari?</strong> Schedule doorstep checking today.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 9. Air Purifier
function generateScAirPurifierSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'air-purifier', brandIndex, catIndex);
  const problems = [
    "Air quality indicator LED staying red or purple despite running continuously",
    "Blower fan motor producing clicking or rattling noise on high-speed mode",
    "Filter reset indicator light flashing even after replacing filter cartridges",
    "Unpleasant musty odor emitted from top air discharge vent"
  ];

  return `
      <!-- Air Purifier Section -->
      <section class="section" id="airPurifierSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Air Purifier Service Center Kanyakumari</h2>
            <p>Doorstep filter replacement, PM2.5 laser sensor calibration, and blower repair for ${brandName} air purifiers in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              Coastal humidity combined with road dust along Kanyakumari transport corridors causes air purifier filters and laser optical sensors to accumulate heavy particulates. When your ${brandName} purifier airflow weakens or PM2.5 readings become erratic, our technicians provide doorstep filter servicing and sensor calibration.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} air purifiers range across bedroom units (200 m³/h CADR) to large living room models (400+ m³/h CADR) with HEPA H13 filtration. The correct composite filter, sensor module, or DC blower motor depends on the exact model number.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Air Purifier Models</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>True HEPA H13 Room Air Purifiers</li>
                <li>Smart Wi-Fi Connected Air Purifiers</li>
                <li>Composite Carbon & Antibacterial Purifiers</li>
                <li>High-CADR Tower Air Purifier Units</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Filtration Technology</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} air purifiers utilize 360-degree cylindrical or multi-layer flat HEPA filters, activated carbon honeycomb lattices, and optical laser dust sensors for fine particulate removal.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Air Purifier Faults</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Spare Parts & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('air-purifier')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹800–₹2,800+ depending on the model, filter grade, and sensor type.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Air Purifier Filter Replacement?</strong> Technician visits your home in Kanyakumari.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 10. Air Cooler
function generateScAirCoolerSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'air-cooler', brandIndex, catIndex);
  const problems = [
    "Submersible water pump stopped pumping water over cooling honeycomb pads",
    "Cooler fan motor humming without spinning or running at very slow speed",
    "Water overflowing continuously from bottom drain plug or tank seams",
    "Louver motorized swing mechanism stuck in fixed position"
  ];

  return `
      <!-- Air Cooler Section -->
      <section class="section" id="airCoolerSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Air Cooler Service Center Kanyakumari</h2>
            <p>Doorstep water pump replacement, honeycomb pad cleaning, and fan motor repair for ${brandName} coolers in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              During hot summer days across Kanyakumari, an air cooler provides energy-efficient room cooling. Hard water minerals can calcify water distribution channels and submerge pump impellers. Our local technicians perform doorstep descaling, pump replacement, and fan motor servicing.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} air coolers encompass personal room coolers (20L–35L), tower models, and large desert coolers (50L–80L+). The exact replacement submersible pump, multi-speed fan motor, or honeycomb pad set depends on the model series.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Cooler Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Desert Air Coolers (55L–85L Tank)</li>
                <li>Compact Tower Air Coolers</li>
                <li>Personal Room Air Coolers (20L–35L)</li>
                <li>Window-Mounted Evaporative Coolers</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Evaporative Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} air coolers use high-density honeycomb cooling media, aerodynamically balanced fan blades, and heavy-duty thermal overload protected pump motors for sustained summer airflow.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Air Cooler Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Cooler Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('air-cooler')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹200–₹1,900+ depending on the model, pad size, and motor required.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Air Cooler Service in Kanyakumari?</strong> Book a quick doorstep inspection.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 11. Water Purifier
function generateScWaterPurifierSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'water-purifier', brandIndex, catIndex);
  const problems = [
    "Pure water output flow rate reduced to a trickle while reject pipe runs continuously",
    "Continuous beeping alarm indicating UV lamp or filter cartridge expiry",
    "Water leaking from push-fit elbow joints, pre-filter housing, or booster pump head",
    "Taste of purified water tasting salty or showing elevated TDS reading on meter"
  ];

  return `
      <!-- Water Purifier Section -->
      <section class="section" id="waterPurifierSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Water Purifier Service Center Kanyakumari</h2>
            <p>Doorstep RO membrane change, sediment filter renewal, and booster pump repair for ${brandName} purifiers in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              Groundwater across Kanyakumari varies from coastal brackish water to mineral-heavy borewell supply. When your ${brandName} RO+UV water purifier shows low water pressure, foul taste, or alarm beeps, our technicians visit with TDS testing meters, certified RO membranes, and filter replacement kits.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} purifiers encompass RO+UV+UF+TDS control models with 7L to 10L food-grade storage tanks. The exact replacement sediment candle, carbon block, 75/100 GPD membrane, or booster pump depends on the model number.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Purifier Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Multi-Stage RO + UV + UF Water Purifier</li>
                <li>Alkaline Mineralizer & Copper RO Systems</li>
                <li>Commercial Water Coolers with In-line RO</li>
                <li>Hot & Cold Dispensing Water Purifiers</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Purification Stages</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} purifiers combine 5-micron spun polypropylene sediment barriers, high-iodine activated carbon blocks, thin-film composite RO membranes, and germicidal UV chambers.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Purifier Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Purifier Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('water-purifier')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹300–₹2,800+ depending on the model, membrane capacity (GPD), and filter set.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Water Purifier Filter Service?</strong> Doorstep technician arrives with TDS testing kit.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 12. Water Heater / Geyser
function generateScWaterHeaterSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'water-heater', brandIndex, catIndex);
  const problems = [
    "Geyser water takes excessive time to heat or delivers only lukewarm water",
    "Geyser tripping main ELCB / MCB switch immediately when turned on",
    "Water leaking steadily from pressure safety valve (MFV) or tank bottom flange",
    "Heavy hard water scale deposit reducing water inlet and outlet flow"
  ];

  return `
      <!-- Water Heater Section -->
      <section class="section" id="waterHeaterSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Geyser & Water Heater Service Center Kanyakumari</h2>
            <p>Doorstep element descaling, thermostat testing, and tank leak repair for ${brandName} water heaters in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              A malfunctioning water heater can pose serious electrical shock and water leakage hazards. When your ${brandName} geyser trips the circuit breaker, fails to heat water, or leaks from the safety valve, our experienced Kanyakumari technicians test heating elements and thermostats with insulation resistance meters.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} water heaters span 3L instant units to 10L, 15L, and 25L storage geysers with glass-lined tanks. The correct replacement heating element, safety thermostat, thermal cut-out, or magnesium anode depends on the model series.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Geyser Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Storage Geysers (10L, 15L, 25L Glass-Lined)</li>
                <li>Instant Electric Water Heaters (3L–5L)</li>
                <li>High-Rise Compatible 8-Bar Geysers</li>
                <li>Digital Temperature Display Water Heaters</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Heating & Protection Tech</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} water heaters use heavy-duty Incoloy 800 heating elements, blue diamond glass coatings, sacrificial magnesium anodes for hard water protection, and multi-function safety valves.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Geyser Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Geyser Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('water-heater')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹250–₹1,600+ depending on the model capacity, element wattage, and component required.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Geyser Repair in Kanyakumari?</strong> Same-day doorstep technician visit.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 13. Audio System / Soundbar
function generateScAudioSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'audio-system', brandIndex, catIndex);
  const problems = [
    "Soundbar powers on but produces no audio from HDMI ARC or optical input",
    "Subwoofer humming loudly or wireless subwoofer disconnecting intermittently",
    "Crackling or distorted sound at moderate to high volume levels",
    "Bluetooth pairing failing to connect with smartphones and smart TVs"
  ];

  return `
      <!-- Audio System Section -->
      <section class="section" id="audioSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Audio & Soundbar Service Center Kanyakumari</h2>
            <p>Doorstep amplifier troubleshooting, subwoofer repair, and board service for ${brandName} audio systems in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              When your ${brandName} home audio system or soundbar loses sound output, suffers from distorted bass, or fails to power on past standby, our specialized Kanyakumari technician inspects amplifier ICs, wireless connectivity modules, and SMPS power boards.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} audio systems span 2.1 channel soundbars, 5.1 Dolby surround setups, and party audio towers. The exact replacement amplifier circuit, woofer driver, or HDMI ARC logic board depends on the model number on the rear panel.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Audio Types</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>2.1 & 3.1 Channel Dolby Soundbars</li>
                <li>5.1 Surround Sound Home Theater Systems</li>
                <li>Wireless Subwoofer & Satellite Speaker Units</li>
                <li>High-Power Bluetooth Party Speaker Towers</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Acoustic Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} audio equipment utilizes digital signal processors (DSP), dedicated subwoofer amplification channels, and optical/HDMI ARC audio return channels for high-fidelity audio reproduction.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Audio Problems</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Audio Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('audio-system')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹400–₹2,200+ depending on the model, audio channels, and component required.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Audio System Repair in Kanyakumari?</strong> Doorstep audio diagnosis scheduled today.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 14. Kitchen Appliances (Chimney, Hob, Built-in Oven)
function generateScKitchenSection(brandName, brandSlug, bg = '#f8fafc', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'kitchen-appliances', brandIndex, catIndex);
  const problems = [
    "Kitchen chimney suction significantly reduced with grease clogging motor blower",
    "Touch control or motion gesture sensor unresponsive to hand movements",
    "Gas hob pulse auto-ignition clicking continuously without sparking burner flame",
    "Built-in oven heating element not reaching set baking temperature"
  ];

  return `
      <!-- Kitchen Appliances Section -->
      <section class="section" id="kitchenSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Kitchen Appliances Service Center Kanyakumari</h2>
            <p>Doorstep chimney motor servicing, hob burner repair, and built-in oven maintenance in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              Modern kitchens rely on chimneys, hobs, and built-in cooking appliances. Heavy oil and coastal moisture can degrade chimney suction motors and clog gas burner jets. Our local Kanyakumari technicians carry degreasing equipment, ignition pulse generators, and compatible spare parts.
            </p>
            <p style="margin-bottom: 0;">
              ${brandName} kitchen appliances include 60cm to 90cm auto-clean chimneys, 3 to 4-burner glass hobs, and convection built-in ovens. The correct blower motor, gesture sensor switch, or brass burner assembly depends on the model series.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Kitchen Appliances</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Filterless Auto-Clean Kitchen Chimneys (60cm / 90cm)</li>
                <li>Curved Glass Baffle Filter Chimneys</li>
                <li>Toughened Glass Built-in Gas Hobs</li>
                <li>Built-in Convection Cooking Ovens</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Appliance Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} kitchen appliances feature thermal auto-clean heating coils, sealed copper motors with high suction capacity, and safety flame failure devices suited for daily home cooking.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Kitchen Appliance Faults</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Spare Parts & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('kitchen-appliances')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹450–₹3,200+ depending on the model, suction rating, and component required.
              </p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Chimney or Hob Service in Kanyakumari?</strong> Schedule doorstep technician visit today.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// 15. Smart Connected Appliances (Motorola)
function generateScSmartSection(brandName, brandSlug, bg = '#ffffff', brandIndex = 0, catIndex = 0) {
  const seoIntro = getApplianceSeoIntro(brandSlug, brandName, 'smart-appliances', brandIndex, catIndex);
  const problems = [
    "Smart appliance failing to maintain persistent Wi-Fi connectivity with home router",
    "Mobile app showing appliance status offline despite active home power supply",
    "Sensor telemetry data showing erratic temperature or voltage readings",
    "Firmware update interruption causing appliance controller to freeze"
  ];

  return `
      <!-- Smart Connected Appliances Section -->
      <section class="section" id="smartSection" style="border-top: 1px solid var(--border-color); background: ${bg};">
        <div class="container">
          <div class="section-header">
            <h2>${brandName} Smart Connected Appliances Service Center Kanyakumari</h2>
            <p>Doorstep IoT connectivity troubleshooting, sensor telemetry repair, and circuit diagnosis in Kanyakumari.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto 2rem; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.35rem; line-height: 1.65; font-size: 0.95rem;">
            <p style="margin-bottom: 0.85rem; font-weight: 500; color: var(--primary-color);">
              ${seoIntro}
            </p>
            <p style="margin-bottom: 0.85rem;">
              ${brandName} smart connected appliances integrate wireless connectivity modules, digital temperature telemetry, and mobile application controllers. When connectivity fails or smart control boards become unresponsive, our technicians provide in-home electronic diagnosis across Kanyakumari.
            </p>
            <p style="margin-bottom: 0;">
              Smart connected appliances utilize dual-band Wi-Fi receivers, digital sensor buses, and micro-controller boards. The exact replacement Wi-Fi module, probe, or logic PCB depends strictly on the model number on the rating label.
            </p>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Supported Smart Appliances</h3>
              <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                <li>Smart Wi-Fi Connected Air Conditioners</li>
                <li>Smart Inverter Refrigerators with App Control</li>
                <li>Smart Connected Washing Machines</li>
                <li>IoT Home Automation Appliance Bridges</li>
              </ul>
            </div>
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">Smart Features</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">
                ${brandName} smart appliances feature remote diagnostic capabilities, energy usage tracking, scheduled operational modes, and cloud telemetry integration.
              </p>
            </div>
          </div>

          <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Common ${brandName} Smart Appliance Faults</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-color);">
                ${problems.map(p => `<li style="margin-bottom: 0.5rem;">⚠️ <strong>Fault:</strong> ${p}</li>`).join('')}
              </ul>
            </div>

            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.75rem;">Key Spares & Approximate Pricing</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-color);">
                ${renderPartsList('smart-appliances')}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; line-height: 1.4;">
                *Note: Approximate replacement cost may be around ₹650–₹3,800+ depending on the model, wireless chipset, and control module required.
              </p>
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div style="font-size: 0.92rem; color: var(--text-color);">
              <strong>Need ${brandName} Smart Appliance Diagnosis in Kanyakumari?</strong> Doorstep service available across district.
            </div>
            <a href="tel:+919211512088" class="btn-primary-call" style="padding: 0.55rem 1.25rem; font-size: 0.9rem;">
              Call: +91 92115 12088
            </a>
          </div>
        </div>
      </section>`;
}

// Mapping of category key to generator function
const generatorMap = {
  'washing-machine': generateScWmSection,
  'refrigerator': generateScFridgeSection,
  'ac': generateScAcSection,
  'tv': generateScTvSection,
  'washer-dryer': generateScWasherDryerSection,
  'dishwasher': generateScDishwasherSection,
  'chest-freezer': generateScChestFreezerSection,
  'microwave-oven': generateScMicrowaveSection,
  'air-purifier': generateScAirPurifierSection,
  'air-cooler': generateScAirCoolerSection,
  'water-purifier': generateScWaterPurifierSection,
  'water-heater': generateScWaterHeaterSection,
  'audio-system': generateScAudioSection,
  'kitchen-appliances': generateScKitchenSection,
  'smart-appliances': generateScSmartSection
};


function generateAllBrandApplianceSections(brandSlug, brandName, categories, brandIndex = 0) {
  let html = '';
  let isAlt = false;

  categories.forEach((cat, catIdx) => {
    const generator = generatorMap[cat];
    if (generator) {
      const bg = isAlt ? '#f8fafc' : '#ffffff';
      html += generator(brandName, brandSlug, bg, brandIndex, catIdx) + '\n';
      isAlt = !isAlt;
    }
  });

  return html;
}

module.exports = {
  generateAllBrandApplianceSections,
  generatorMap,
  pricingCatalog,
  generateScWmSection,
  generateScFridgeSection,
  generateScAcSection,
  generateScTvSection,
  generateScWasherDryerSection,
  generateScDishwasherSection,
  generateScChestFreezerSection,
  generateScMicrowaveSection,
  generateScAirPurifierSection,
  generateScAirCoolerSection,
  generateScWaterPurifierSection,
  generateScWaterHeaterSection,
  generateScAudioSection,
  generateScKitchenSection,
  generateScSmartSection
};
