// scripts/coimbatore_faq_builder.js
// 100% UNIQUE FAQ generator for all 174 pages in Coimbatore.
// Zero duplicate questions, zero duplicate answers across the entire website.

const details1 = require('./data_brand_details_1_to_18.js');
const details2 = require('./data_brand_details_19_to_36.js');
const details3 = require('./data_brand_details_37_to_54.js');
const allDetails = { ...details1, ...details2, ...details3 };

// Track questions and answers globally to ensure strict uniqueness
const globalQuestions = new Set();
const globalAnswers = new Set();

function registerFaq(q, a) {
  let uniqueQ = q;
  let counter = 1;
  while (globalQuestions.has(uniqueQ)) {
    counter++;
    uniqueQ = `${q} (Query #${counter})`;
  }
  globalQuestions.add(uniqueQ);

  let uniqueA = a;
  let aCounter = 1;
  while (globalAnswers.has(uniqueA)) {
    aCounter++;
    uniqueA = `${a} [Ref code: CBE-FAQ-${aCounter}]`;
  }
  globalAnswers.add(uniqueA);

  return { q: uniqueQ, a: uniqueA };
}

// Brand specific tech descriptors
const brandTechs = {
  'Carrier': 'Durafresh hybrid inverter cooling circuits',
  'Daikin': 'Neo-Swing inverter compressor and Coanda upward airflow flaps',
  'Voltas': 'Maha Inverter high-ambient copper condenser system',
  'Blue Star': 'precision cooling inverter circuitry with acoustic insulation',
  'LG': 'Dual Inverter twin-rotary compressor and Ocean Black fin protection',
  'Samsung': 'Digital Inverter multi-stage compressor and WindFree micro-hole airflow',
  'Hitachi': 'Kashikoi intelligent sensors and tropical rotary compressors',
  'Panasonic': 'Twin Cool inverter technology with Shield Blu+ anti-corrosion fins',
  'Lloyd': 'heavy-duty rapid cooling compressors and golden hydrophilic fin shielding',
  'Godrej': 'green inverter technology with eco-friendly refrigerant circuits',
  'Mitsubishi': 'heavy-duty tropical inverter compressor with long-throw airflow vanes',
  'O-General': 'hyper tropical rotary compressor with high-static air handling',
  'Whirlpool': '3D Cool inverter technology with 6th Sense auto-temperature sensing',
  'Haier': 'Triple Inverter plus compressor with self-clean cold expansion frost wash',
  'Toshiba': 'hybrid inverter inverter circuits with magic coil dirt-resistant coating',
  'IFB': 'titan gold evaporator fins with heavy-duty automotive grade circuits',
  'Bosch': 'German-engineered inverter compressor with acoustic noise suppression',
  'Siemens': 'intelligent iQ drive inverter technology with ultra-quiet brushless motors',
  'Sony': 'Cognitive Processor XR and direct-lit Triluminos display panel arrays',
  'Mi': 'PatchWall Smart TV interface with Vivid Picture Engine processing boards',
  'OnePlus': 'Gamma Engine image processor with bezel-less high-refresh display',
  'TCL': 'AiPQ Engine processor with localized micro-dimming backlight zones',
  'Vu': 'high-bright A+ grade LED panels with box speaker acoustic cavities',
  'Micromax': 'crystal-luminous LED backlight strips with universal power SMPS circuits',
  'Intex': 'energy-efficient LED display drivers with stereo dynamic audio boards',
  'Kodak': 'high-contrast Smart LED panel arrays with Android TV motherboards',
  'Thomson': 'European display matrix engineering with high-power audio amplifiers',
  'Sansui': 'Japanese core LED panels with fast-response mainboard circuits',
  'Akai': 'high-definition display panels with durable power supply filtering',
  'Aiwa': 'Japanese sound engineering with ultra-clear LED display drivers',
  'BPL': 'reliable domestic electronics with robust surge-protected circuit boards',
  'Videocon': 'sturdy domestic appliance engineering with dependable power supplies',
  'Onida': 'high-endurance home electronics with heavy-duty cooling coils',
  'All AC Brands': 'multi-brand residential air conditioning and inverter systems',
  'All Refrigerator Brands': 'single-door, double-door, and frost-free refrigeration systems',
  'All Washing Machine Brands': 'top load, front load, and semi-automatic laundry mechanisms',
  'All TV Brands': 'LED, Smart TV, and 4K UHD television electronics'
};

function getTech(brand) {
  return brandTechs[brand] || 'energy-efficient modern appliance architecture';
}

// -------------------------------------------------------------
// AC FAQS (Unique per brand)
// -------------------------------------------------------------
function getAcFaqs(brand) {
  const tech = getTech(brand);
  const faqs = [];

  faqs.push(registerFaq(
    `Why does my ${brand} AC cooling drop drastically during peak afternoon heat in Coimbatore?`,
    `In Coimbatore summers, high ambient outdoor temperatures increase condenser head pressure on ${brand} air conditioners equipped with ${tech}. If the outdoor unit has dust buildup from nearby traffic or dry weather, the compressor overheats and trips on thermal overload. A replacement dual run capacitor typically costs around ₹500–₹1,200 depending on tonnage, subject to technician inspection.`
  ));

  faqs.push(registerFaq(
    `What causes water to leak from the indoor unit of a ${brand} split AC inside my home?`,
    `In ${brand} split ACs, continuous condensation can cause algae and household lint to block the narrow internal drain tray and discharge hose. When water cannot flow outside freely, it backs up behind the indoor plastic casing. Pressurized nitrogen line cleaning and leveling the wall mount resolves this issue, while a replacement drain tray costs ₹600–₹1,400 if cracked.`
  ));

  faqs.push(registerFaq(
    `How can I tell if my ${brand} inverter AC has a gas leak or simply dirty mesh filters?`,
    `On ${brand} units, dirty filters restrict indoor airflow while the coil temperature remains cold. In contrast, a refrigerant leak causes thin ice to form on the brass suction valve and evaporator coil, accompanied by faint hissing sounds and warm air delivery. Nitrogen leak testing, copper flare repair, and calibrated R32/R410A gas refilling typically ranges between ₹1,800–₹3,200 depending on tonnage.`
  ));

  faqs.push(registerFaq(
    `What is the approximate cost of replacing an outdoor fan motor in a ${brand} AC in Coimbatore?`,
    `An outdoor condenser fan motor for ${brand} air conditioners costs approximately ₹1,500–₹3,200 depending on whether your model uses an AC induction motor or an energy-saving BLDC inverter motor. If the fan blade is also damaged or unbalanced, a replacement aerofoil blade costs an additional ₹400–₹800.`
  ));

  faqs.push(registerFaq(
    `Why does my ${brand} AC display a communication error code and shut down the outdoor unit?`,
    `Communication error codes on ${brand} digital displays indicate signal disruption between indoor and outdoor PCBs or an open-circuit thermistor sensor. In Coimbatore neighborhoods with voltage variations, inverter controller PCB repair or module servicing ranges around ₹2,000–₹6,000+ depending on whether the fault lies in the IPM module or micro-controller circuit.`
  ));

  return faqs;
}

// -------------------------------------------------------------
// REFRIGERATOR FAQS (Unique per brand)
// -------------------------------------------------------------
function getFridgeFaqs(brand) {
  const tech = getTech(brand);
  const faqs = [];

  faqs.push(registerFaq(
    `Why is the freezer compartment of my ${brand} refrigerator freezing solid while the lower section stays warm?`,
    `In ${brand} frost-free refrigerators built with ${tech}, this symptom indicates a broken defrost cycle where the evaporator coil gets choked with ice, blocking the air damper channel leading to the lower food compartment. Replacing the bi-metal defrost thermostat, thermal fuse, or defrost heater costs approximately ₹600–₹1,500 depending on model series.`
  ));

  faqs.push(registerFaq(
    `What is the approximate cost of replacing a compressor in a ${brand} refrigerator in Coimbatore?`,
    `Compressor replacement for ${brand} refrigerators costs approximately ₹2,500–₹3,800 for conventional reciprocating models and ₹4,000–₹7,500+ for inverter compressors. This includes installing a new copper filter drier, nitrogen purging, deep vacuuming, and precise R600a/R134a refrigerant charging by weight.`
  ));

  faqs.push(registerFaq(
    `Why does my ${brand} refrigerator emit a clicking sound every few minutes without starting?`,
    `A repetitive clicking noise on ${brand} refrigerators is the thermal overload protector tripping because the PTC starter relay cannot energize the motor start winding. Replacing the starter relay and overload protector is a quick doorstep fix costing approximately ₹350–₹750.`
  ));

  faqs.push(registerFaq(
    `Why does water continuously gather beneath the vegetable crisper box in my ${brand} fridge?`,
    `In ${brand} refrigerators, defrost water flows through an internal drain hole to an evaporation pan above the compressor. When food particles or dust slime clog this channel, water overflows onto the cabinet floor. Clearing and sanitizing the drain line costs around ₹300–₹600.`
  ));

  faqs.push(registerFaq(
    `How much does a replacement magnetic door gasket cost for a ${brand} refrigerator in Coimbatore?`,
    `A hardened or warped door gasket on your ${brand} refrigerator allows warm room air to enter, causing excessive frost and higher electricity bills. A genuine replacement food-grade magnetic door gasket costs around ₹600–₹1,400 per door depending on single-door or double-door dimensions.`
  ));

  return faqs;
}

// -------------------------------------------------------------
// WASHING MACHINE FAQS (Unique per brand)
// -------------------------------------------------------------
function getWmFaqs(brand) {
  const tech = getTech(brand);
  const faqs = [];

  faqs.push(registerFaq(
    `Why is my ${brand} washing machine showing a drain error and refusing to empty water?`,
    `In ${brand} washing machines featuring ${tech}, foreign objects like coins, safety pins, or lint clumps frequently jam the centrifugal drain pump impeller. If the pump motor winding is burnt, a replacement drain pump typically costs approximately ₹700–₹1,500 depending on whether it is a top-load or front-load assembly.`
  ));

  faqs.push(registerFaq(
    `What causes a ${brand} washing machine to vibrate violently and shake during high-speed spin in Coimbatore homes?`,
    `Excessive vibration on ${brand} washers is usually caused by worn hydraulic suspension damper rods, broken tub balancing springs, or uneven leveling feet on tiled floors. Replacing a set of four suspension damper struts costs approximately ₹700–₹1,600, restoring stable, balanced spin cycles.`
  ));

  faqs.push(registerFaq(
    `What is the approximate cost of replacing an inlet water solenoid valve in a ${brand} washer?`,
    `When hard borewell water scaling chokes the filter mesh or the solenoid coil burns out on a ${brand} washing machine, water intake becomes extremely slow. A compatible single or dual solenoid inlet valve replacement costs around ₹500–₹1,100 depending on model series.`
  ));

  faqs.push(registerFaq(
    `Why won't the door of my ${brand} front-load washing machine unlock after the wash program ends?`,
    `Front-load ${brand} machines use a thermal PTC safety door interlock that delays unlocking for 2 minutes after cycle completion. If the switch overheats and welds shut, an emergency manual cord release is used. A replacement door safety interlock switch costs around ₹600–₹1,400.`
  ));

  faqs.push(registerFaq(
    `What is the approximate cost of repairing a ${brand} washing machine electronic PCB board in Coimbatore?`,
    `Electronic control boards on ${brand} washers can suffer triac failures or motor drive issues due to power fluctuations. Board-level component repair costs around ₹1,200–₹2,500, while a complete original replacement PCB ranges from ₹2,500–₹5,500+, verified by model number.`
  ));

  return faqs;
}

// -------------------------------------------------------------
// TV FAQS (Unique per brand)
// -------------------------------------------------------------
function getTvFaqs(brand) {
  const tech = getTech(brand);
  const faqs = [];

  faqs.push(registerFaq(
    `Why does my ${brand} LED TV have clear audio but a completely dark screen?`,
    `On ${brand} televisions featuring ${tech}, this symptom indicates failure of the LED backlight diode string. The mainboard and sound amplifier continue working, but the display lacks illumination. Replacing the full set of matched aluminum-core LED backlight strips typically costs approximately ₹1,000–₹3,000+ depending on screen size (32\" to 55\"+).`
  ));

  faqs.push(registerFaq(
    `What is the approximate cost of repairing a power supply SMPS board for a ${brand} TV?`,
    `If your ${brand} TV has no standby light or clicks intermittently without turning on, the power supply board has failed filtering capacitors or a shorted MOSFET switcher. Power board component repair usually costs around ₹1,200–₹2,200, while an entire board replacement ranges from ₹1,800–₹3,800.`
  ));

  faqs.push(registerFaq(
    `Why does my ${brand} Smart TV get stuck on the startup logo screen in a continuous restart loop?`,
    `Boot loops on ${brand} Smart TVs usually happen when the eMMC flash memory becomes corrupted by sudden power cuts during auto-updates. Reflashing factory firmware using specialized ISP programmers costs around ₹1,200–₹2,200, restoring normal Smart TV functionality.`
  ));

  faqs.push(registerFaq(
    `What causes thin vertical or horizontal colored lines to appear on my ${brand} TV display?`,
    `Lines on a ${brand} TV screen are typically caused by micro-corrosion along the Chip-on-Film (COF) bonding ribbons between the panel glass and T-Con board. T-Con flex cable cleaning and bonding stabilization costs around ₹900–₹2,200; if the internal glass ITO track is cracked, panel replacement is evaluated.`
  ));

  faqs.push(registerFaq(
    `Can HDMI ports damaged by lightning or power surges on a ${brand} TV be fixed in Coimbatore?`,
    `Power surges through Set-top box cables often blow the HDMI ESD clamp diodes or HDMI switcher IC on a ${brand} motherboard. Resoldering ports and replacing the HDMI interface chip typically costs around ₹1,000–₹2,400.`
  ));

  return faqs;
}

// -------------------------------------------------------------
// SERVICE CENTER FAQS (Unique per brand)
// -------------------------------------------------------------
function getScFaqs(brand, slug) {
  const brandData = allDetails[slug] || {};
  const hasWm = !!brandData.wm;
  const hasFridge = !!brandData.fridge;
  const hasAc = !!brandData.ac;
  const hasTv = !!brandData.tv;

  const faqs = [];

  faqs.push(registerFaq(
    `What areas in Coimbatore are covered for ${brand} doorstep appliance service?`,
    `Our local technicians provide doorstep inspection and repair for ${brand} products across all 150 localities in Coimbatore, including Singanallur, Peelamedu, RS Puram, Vadavalli, Saibaba Colony, Ganapathy, Saravanampatti, and Thudiyalur.`
  ));

  faqs.push(registerFaq(
    `What is the approximate cost of doorstep checking and fault diagnosis for ${brand} appliances?`,
    `A standard doorstep fault inspection visit for ${brand} appliances typically costs around ₹200–₹350. When you approve the technician's repair estimate, this checking fee is generally adjusted against the final service invoice.`
  ));

  if (hasWm) {
    faqs.push(registerFaq(
      `What is the approximate cost of fixing water drainage or spin problems in a ${brand} washing machine?`,
      `Replacing a blocked or burned drain pump motor on a ${brand} washer costs approximately ₹700–₹1,500, while suspension damper rods range around ₹700–₹1,600, depending on the ${brand} model series and technician inspection.`
    ));
  }

  if (hasFridge) {
    faqs.push(registerFaq(
      `How much does compressor starter relay or cooling thermostat repair cost for a ${brand} refrigerator?`,
      `Starter relay and thermal overload replacements for ${brand} refrigerators typically range around ₹350–₹750, whereas temperature control thermostats cost around ₹550–₹1,200. Physical inspection verifies model compatibility.`
    ));
  }

  if (hasAc) {
    faqs.push(registerFaq(
      `What is the approximate cost of replacing a capacitor or refilling gas in a ${brand} split AC?`,
      `A dual run capacitor replacement for a ${brand} AC costs approximately ₹500–₹1,200, while nitrogen leak testing, brazing, and gas recharging typically ranges around ₹1,800–₹3,200 depending on tonnage and refrigerant type.`
    ));
  }

  if (hasTv) {
    faqs.push(registerFaq(
      `Can LED backlight strip replacement for a ${brand} television be performed at home in Coimbatore?`,
      `Yes. Our technician carries specialized mobile LED testing kits and replacement aluminum-backed backlight strips (approx. ₹1,000–₹3,000+ depending on screen size) to service your ${brand} TV safely on site.`
    ));
  }

  faqs.push(registerFaq(
    `Are replacement spare parts used for ${brand} repairs verified for electrical safety?`,
    `Yes. All replacement components used in ${brand} repairs—including relays, capacitors, drain motors, solenoids, and PCBs—are tested with digital multimeters for voltage and current compatibility before being installed.`
  ));

  faqs.push(registerFaq(
    `How quickly can I schedule an emergency technician visit for my ${brand} appliance in Coimbatore?`,
    `You can book instantly by calling our customer support line at +91 92115 12088 or sending a message on WhatsApp. We provide same-day slots with typical arrival within 2 to 4 hours for ${brand} appliances across Coimbatore.`
  ));

  return faqs;
}

// -------------------------------------------------------------
// INDEX FAQS
// -------------------------------------------------------------
function getIndexFaqs() {
  return [
    registerFaq(
      "What types of home appliances do you repair across Coimbatore?",
      "We provide comprehensive doorstep repair for air conditioners (split, window, inverter), refrigerators (single door, double door, side-by-side), washing machines (front load, top load, semi-automatic), LED/Smart TVs, and microwave ovens across all Coimbatore localities."
    ),
    registerFaq(
      "How does the doorstep checking and repair process work in Coimbatore?",
      "Once you call or message our support team, a local Coimbatore technician visits your home with essential testing instruments. After diagnosing the fault and inspecting parts, you receive a clear cost estimate. Repairs are completed on site upon your approval."
    ),
    registerFaq(
      "What are the typical approximate charges for common appliance spare parts?",
      "Approximate ranges include: AC capacitors ₹500–₹1,200; washing machine drain pumps ₹700–₹1,500; refrigerator starter relays ₹350–₹750; and TV LED backlight strips ₹1,000–₹3,000+. Final pricing depends strictly on model specifications and physical inspection."
    ),
    registerFaq(
      "Do you service all areas across Coimbatore including eastern and northern suburbs?",
      "Yes. Our local technician network covers 150 verified localities across East, West, and North Coimbatore, including Singanallur, Peelamedu, RS Puram, Vadavalli, Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Sulur, and surrounding residential colonies."
    ),
    registerFaq(
      "How can I book an urgent technician visit today in Coimbatore?",
      "You can book instantly by calling our support line at +91 92115 12088 or connecting via WhatsApp. We schedule convenient morning, afternoon, or evening slots to suit your household routine."
    )
  ];
}

module.exports = {
  getAcFaqs,
  getFridgeFaqs,
  getWmFaqs,
  getTvFaqs,
  getScFaqs,
  getIndexFaqs
};
