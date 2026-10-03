// scripts/build_madurai_experiences_v2.js
// Generates 100% unique, highly-localized, 80-90% Tanglish Customer Service Experiences for all 174 Madurai pages.
// Enforces:
// - Simple, natural, search-friendly headings: [Brand] [Appliance] [Problem / Service Keyword] in [Locality]
// - Short headings: 5–12 words, zero technical jargon
// - Distinct problems per brand on category hubs
// - Strict brand-appliance consistency for Service Center pages using brandCategoryMap
// - 100% unique headings across the entire website
// - Preserves rich, authentic Tanglish storytelling bodies

const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));
const localitiesData = require('./madurai_localities.js');
const brandCategoryMap = fs.existsSync('scripts/brand_category_map.json') 
  ? JSON.parse(fs.readFileSync('scripts/brand_category_map.json', 'utf8')) 
  : {};

const allLocs = [
  ...localitiesData.east.map(l => ({ ...l, zone: "East Madurai" })),
  ...localitiesData.west.map(l => ({ ...l, zone: "West Madurai" })),
  ...localitiesData.north.map(l => ({ ...l, zone: "North Madurai" })),
  ...localitiesData.south.map(l => ({ ...l, zone: "South Madurai" }))
];

let locCounter = 0;
function getNextLocality() {
  const loc = allLocs[locCounter % allLocs.length];
  locCounter++;
  return loc;
}

const usedHeadings = new Set();
function registerUniqueHeading(base) {
  let h = base;
  let counter = 1;
  while (usedHeadings.has(h)) {
    counter++;
    h = `${base} - Case ${counter}`;
  }
  usedHeadings.add(h);
  return h;
}

// Pricing closures
const PRICING_PHRASES = [
  "Final amount model and part basis-la confirm pannanga.",
  "Repair cost fault and required part based-ah customer kitta explain panni confirm pannanga.",
  "Testing mudinju honest estimate approve panna apram technician work complete pannanga.",
  "Inspection charge final bill-la adjust pannitu reasonable cost-la finish pannanga.",
  "Model-specific spare part cost upfront-ah confirm pannitu work execute pannanga.",
  "Technician charges explain pannitu customer approval vaangi repair mudichaanga."
];

let priceIdx = 0;
function getPriceNote() {
  const p = PRICING_PHRASES[priceIdx % PRICING_PHRASES.length];
  priceIdx++;
  return p;
}

// Ratings
const RATINGS = [9, 10, 8, 10, 9, 8, 10, 9, 10];
let rateIdx = 0;
function getRating() {
  const r = RATINGS[rateIdx % RATINGS.length];
  rateIdx++;
  return r;
}

// -----------------------------------------------------------------------------
// AC EXPERIENCES DEFINITIONS
// -----------------------------------------------------------------------------
const AC_PROBLEM_PHRASES = {
  weak_cooling: ["Not Cooling", "Cooling Problem", "Repair for Slow Cooling", "Cooling Issue", "Deep Cleaning for Cooling"],
  water_dripping: ["Water Dripping", "Water Leak Problem", "Indoor Water Overflow", "Drain Pipe Blockage", "Water Leakage Repair"],
  capacitor_compressor: ["Compressor Not Starting", "Compressor Humming Problem", "Outdoor Compressor Tripping", "Capacitor Problem", "Compressor Startup Repair"],
  gas_leakage: ["Gas Filling", "Gas Leakage Problem", "Refrigerant Refill", "Copper Pipe Ice Problem", "Gas Leak Repair"],
  pcb_error: ["Error Code Problem", "Inverter PCB Problem", "Display Error", "Sensor Problem", "PCB Repair"],
  noise_vibration: ["Noise Problem", "Blower Vibration", "Outdoor Unit Noise", "Fan Motor Noise", "Rattling Sound Repair"]
};

const AC_PROBLEMS = [
  {
    topic: "weak_cooling",
    stories: [
      (b, loc) => `${loc.name}-la customer call pannumbodhu ${b} AC on pannina first 10 minutes cooling okay-ah irundhudhu, apram room temperature change aagala-nu sonnaanga. Technician near ${loc.landmark} visit panni indoor coil and filter check pannumbodhu heavy dust choke irundhudhu. Professional pressure cleaning panni airflow maximize pannanga. Service mudinja udane room temperature rapid-ah drop aagiduchu. ${getPriceNote()}`,
      (b, loc) => `Afternoon peak heat time-la ${b} AC run aagi fan air mattum dhaan vandhudhu-nu ${loc.name} resident report pannanga. Doorstep technician digital gauge vechu check pannina appo low suction pressure irundhudhu. Micro flare joint leak arrest panni R32 gas top-up complete pannanga. Optimal 16°C grill cooling restore aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Customer initially room-ku AC tonnage pathala-nu nenachirundhaanga in ${loc.name}. Aana technician indoor blower wheel inspect pannumbodhu mud caking irundhudhu. High-pressure jet wash service execute panni airflow double aakinaanga. Chilling performance instant-ah restore aayiduchu. ${getPriceNote()}`,
      (b, loc) => `${loc.name} surroundings-la road dust karanamaga ${b} condenser fins completely block aayirundhudhu. Compressor overheat aagi thermal cutout aagitte irundhudhu. Doorstep cleaning and fin combing panni heat rejection normalise pannanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "water_dripping",
    stories: [
      (b, loc) => `Night time-la ${b} AC indoor unit-la irundhu water drops bedroom floor-la sottudhu-nu ${loc.name} customer complaint vandhudhu. Technician drain hose and internal tray inspect pannumbodhu algae sludge accumulate aagi block aayirundhudhu. Pressure pump vechu drain line flush panni slope angle correct pannanga. Leakage ninnupoduchu. ${getPriceNote()}`,
      (b, loc) => `${loc.name} side-la oru home-la ${b} AC on panna 20 minutes-la indoor frame vazhiya water cascade aagudhu-nu sonnaanga. Technician arrive panni paatha evaporator coil ice freeze aagi melt aagumbodhu tray overflow aagirundhudhu. Low gas leak trace panni brazing mudichu drain flush pannanga. ${getPriceNote()}`,
      (b, loc) => `Customer bedroom wall paint damage aagum-nu romba worried-ah irundhaanga in ${loc.name}. Technician spot inspection-la drain tray crack illama drain outlet-la dust clot irundhadha kandupidichanga. Quick chemical flush panni water flow clear aakinaanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "capacitor_compressor",
    stories: [
      (b, loc) => `Morning-la AC on panna indoor fan odudhu aana outdoor unit 5 seconds hum pannitu trip aagudhu-nu ${loc.name} customer sonnaanga. Technician near ${loc.landmark} digital meter vechu test pannumbodhu 45uF dual run capacitor weak aagi 10uF-ku drop aagirundhudhu. Spot-laye genuine metallized capacitor maathinaanga, compressor smooth-ah start aayiduchu. ${getPriceNote()}`,
      (b, loc) => `${loc.name} customer initially compressor burn aayiducho-nu bayandhaanga. Technician junction box inspect panni terminal overload protector and starting capacitor test pannanga. Capacitor replace pannina pinbu compressor normal amp draw-la run aaga start aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Continuous voltage fluctuation karanamaga ${loc.name}-la ${b} AC compressor magnetic contactor points burn aayirundhudhu. Heavy-duty contactor and run capacitor replace panni compressor cycle stabilize pannanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "gas_leakage",
    stories: [
      (b, loc) => `${loc.name}-la customer indoor copper pipe-la white ice form aagudhu aana room cool aagala-nu book pannanga. Technician manifold gauge potu pressure measure pannina appo safe level-oda half-dhaan irundhudhu. Soap bubble test-la indoor flare nut loose connection kandupidichu re-flare pannanga. Nitrogen vacuuming mudichi exact weight-la gas charge pannanga. ${getPriceNote()}`,
      (b, loc) => `Sudden-ah cooling nil aana udane ${loc.name} customer call pannanga. Technician inspect panni outdoor service valve o-ring leak trace pannanga. Valve seal maathi fresh refrigerant refill panni cooling cycle verify pannanga. Room 15 minutes-la chill aayiduchu. ${getPriceNote()}`
    ]
  },
  {
    topic: "pcb_error",
    stories: [
      (b, loc) => `${loc.name} flat-la ${b} inverter AC on pannina 3 minutes-la display-la error code blink aagi fan ninnu pochu. Technician outdoor IPM module board test pannumbodhu communication line track dry solder aagirundhudhu. Micro soldering panni surge protection check mudichaanga. System flawlessly run aachu. ${getPriceNote()}`,
      (b, loc) => `Customer smart inverter AC turn on aagama standby light continuously pulse aagudhu-nu sonnaanga in ${loc.name}. Technician sensor resistance check panni room thermistor sensor change pannanga. PCB error reset aagi normal cooling restart aayiduchu. ${getPriceNote()}`
    ]
  },
  {
    topic: "noise_vibration",
    stories: [
      (b, loc) => `${loc.name}-la customer bedroom-la AC speed high-la vecha heavy rattling sound kekkudhu-nu complain pannirundhaanga. Technician casing open panni cross-flow fan blower bush check pannanga. Rubber bush worn out aagi shaft play irundhudhu. Genuine silicone bush replace panni shaft lubricate pannanga. Sound pin-drop silent aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Outdoor unit iron bracket loose aagi wall full vibration transmit aagudhu-nu ${loc.name} resident sonnaanga. Technician rubber anti-vibration dampers maati condenser fan motor shaft balance panna udane running noise sharp-ah decrease aayiduchu. ${getPriceNote()}`
    ]
  }
];

function generateAcExperiences(brand, count, offset = 0) {
  const exps = [];
  for (let i = 0; i < count; i++) {
    const loc = getNextLocality();
    const probIdx = (i + offset) % AC_PROBLEMS.length;
    const prob = AC_PROBLEMS[probIdx];
    const sFn = prob.stories[(i + offset) % prob.stories.length];
    const phrases = AC_PROBLEM_PHRASES[prob.topic];
    const pPhrase = phrases[(i + offset) % phrases.length];
    const heading = registerUniqueHeading(`${brand} AC ${pPhrase} in ${loc.name}`);
    const body = sFn(brand, loc);
    exps.push({
      locality: `${loc.name} (${loc.zone})`,
      rating: getRating(),
      heading,
      body
    });
  }
  return exps;
}

// -----------------------------------------------------------------------------
// REFRIGERATOR EXPERIENCES DEFINITIONS
// -----------------------------------------------------------------------------
const FRIDGE_PROBLEM_PHRASES = {
  freezer_frost_bottom_warm: ["Freezer Ice Problem", "Bottom Not Cooling", "Defrost Problem", "Cooling Issue", "Ice Jam Repair"],
  compressor_clicking: ["Compressor Clicking", "Not Starting Problem", "Starter Relay Problem", "Relay Replacement", "Compressor Relay Fix"],
  water_leakage_inside: ["Water Leak Inside", "Drain Choke Problem", "Crisper Water Pooling", "Water Leakage Repair", "Defrost Drain Flush"],
  door_gasket_air_leak: ["Door Gasket Problem", "Door Seal Gap", "Door Not Closing Tight", "Magnetic Gasket Fix", "Door Rubber Problem"],
  gas_charge_cooling_loss: ["Not Cooling at All", "Gas Filling", "Gas Leak Problem", "Freezer Ice Problem", "Sealed System Cooling Loss"]
};

const FRIDGE_PROBLEMS = [
  {
    topic: "freezer_frost_bottom_warm",
    stories: [
      (b, loc) => `${loc.name}-la customer sonnaanga freezer-la ice heavy-ah katti irukku aana bottom vegetable section warm-ah irundhudhu. Technician near ${loc.landmark} defrost timer, bi-metal thermostat and thermal fuse inspect pannanga. Bimetal switch open aayirundhadha kandupidichu replace pannanga, airflow duct-la irundha ice thaw panni airflow balance restore pannanga. ${getPriceNote()}`,
      (b, loc) => `Morning breakfast ready panna time-la milk curd warm-ah irundhadha paathu ${loc.name} customer service book pannanga. Technician freezer panel open panni paatha evaporator fan blade ice-la jam aagirundhudhu. Defrost heater circuit repair panni fan clean pannanga, both sections normalise aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Customer initially gas pocha-nu doubt pattaanga in ${loc.name}. Aana technician digital probe vechu check pannumbodhu sealed system okay-ah irundhudhu, return air flap thermistor dhaan stuck aagirundhudhu. Sensor calibrate panni flap lubricate pannanga. Cooling perfectly balanced. ${getPriceNote()}`
    ]
  },
  {
    topic: "compressor_clicking",
    stories: [
      (b, loc) => `${loc.name} household noticed that fridge compressor every 2 minutes-ku click sound pannitu off aagudhu, food chillness completely drop aagiduchu. Technician rear box open panni PTC starter relay shake panni paatha shattered disc sound vandhudhu. Genuine starter relay and overload protector fit pannanga. Compressor instant-ah start aagi freezing cycle kick-in aachu. ${getPriceNote()}`,
      (b, loc) => `Sudden power cut pinbu ${b} fridge start aagala-nu ${loc.name} customer request kuduthaanga. Overload relay continuity test panni burnt contact replace pannanga. Compressor terminal resistance verified normal. ${getPriceNote()}`
    ]
  },
  {
    topic: "water_leakage_inside",
    stories: [
      (b, loc) => `${loc.name}-la vegetable box keezha daily water ninnu clean panna vendi irundhudhu. Technician defrost drain trough inspect pannumbodhu food slime and fungal sediment-la drain hole block aagirundhudhu. Hot water pressurized flush panni drain tube clear pannanga. Water pooling complete-ah ninnu pochu. ${getPriceNote()}`,
      (b, loc) => `Customer fridge back side floor wet aagi slipping risk irukku-nu sonnaanga in ${loc.name}. Technician compressor mela irukkira evaporation pan crack aagirundhadha kandupidichanga. New heat-resistant tray replace panni drain hose align pannanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "door_gasket_air_leak",
    stories: [
      (b, loc) => `${loc.name} resident report pannanga freezer door complete-ah close panniyum gap therinjadhu, exterior humidity ulla poi heavy snow ice accumulate aagudhu. Technician magnetic bead gasket examine panni hardened seal remove panni fresh antimicrobial gasket fit pannanga. Door suction snap tight aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Door hinge drop aagi door close panna force thevaipattadhu in ${loc.name}. Technician bottom brass bushing maathi door height level pannanga, airtight seal confirm panni cooling loss arrest pannanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "gas_charge_cooling_loss",
    stories: [
      (b, loc) => `Service request vandha time-la ${b} single door fridge-la ice formation completely stop aayirundhudhu in ${loc.name}. Technician nitrogen pressure test panni freezer suction line pinhole leak trace pannanga. Copper brazing mudichu new molecular sieve drier maathi pure R600a gas weight-la charge pannanga. 40 minutes-la ice tray solid freeze aachu. ${getPriceNote()}`,
      (b, loc) => `${loc.name} customer-ku compressor continuous-ah odiyum mild chillness mattum irundhudhu. Capillary oil restriction identify panni system flushing panni gas top-up deliver pannanga. ${getPriceNote()}`
    ]
  }
];

function generateFridgeExperiences(brand, count, offset = 0) {
  const exps = [];
  for (let i = 0; i < count; i++) {
    const loc = getNextLocality();
    const probIdx = (i + offset) % FRIDGE_PROBLEMS.length;
    const prob = FRIDGE_PROBLEMS[probIdx];
    const sFn = prob.stories[(i + offset) % prob.stories.length];
    const phrases = FRIDGE_PROBLEM_PHRASES[prob.topic];
    const pPhrase = phrases[(i + offset) % phrases.length];
    const heading = registerUniqueHeading(`${brand} Fridge ${pPhrase} in ${loc.name}`);
    const body = sFn(brand, loc);
    exps.push({
      locality: `${loc.name} (${loc.zone})`,
      rating: getRating(),
      heading,
      body
    });
  }
  return exps;
}

// -----------------------------------------------------------------------------
// WASHING MACHINE EXPERIENCES DEFINITIONS
// -----------------------------------------------------------------------------
const WM_PROBLEM_PHRASES = {
  drain_pump_blocked: ["Drain Problem", "Water Not Draining", "OE Error Code", "Drain Pump Failure", "Drain Blockage"],
  spin_vibration_noise: ["Spin Problem", "Drum Noise Problem", "Heavy Vibration", "Bearing Problem", "Drum Overhaul"],
  water_inlet_valve: ["Water Filling Slow", "Inlet Valve Problem", "Water Intake Issue", "Solenoid Valve Fix", "Low Water Inflow"],
  door_lock_issue: ["Door Lock Problem", "Door Stuck", "Door Not Opening", "Door Switch Fix", "Door Latch Problem"],
  motor_belt_pulsator: ["Pulsator Problem", "Not Spinning", "Drive Belt Problem", "Motor Humming", "Agitator Not Rotating"]
};

const WM_PROBLEMS = [
  {
    topic: "drain_pump_blocked",
    stories: [
      (b, loc) => `${loc.name} side-la oru customer-ku washing machine water drain aagala. Machine wash cycle complete aagudhu, aana last-la water tub-kulla irundhudhu. Technician drain hose and pump check pannumbodhu coin and thread blockage irundhudhu. Cleaning pannitu pump impeller test pannanga. Water instant-ah drain aagi spin cycle perfectly run aachu. ${getPriceNote()}`,
      (b, loc) => `Customer laundry clothes soggy-ah water-la soak aagi ninnadhadha paathu call pannanga in ${loc.name}. Drain motor coil open circuit aayirundhadha multimeter-la verify panni new high-torque pump fit pannanga. Cycle test complete-ah pass aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Morning-la washing machine OE error code kaatitu beep sound pannudhu-nu ${loc.name} resident sonnaanga. Technician coin filter trap open panni obstruction clear panni drain bellows hose inspect pannanga. Problem spot-laye solved. ${getPriceNote()}`
    ]
  },
  {
    topic: "spin_vibration_noise",
    stories: [
      (b, loc) => `Thirunagar and ${loc.name} side-la washing machine romba vibration kuduthadhu, spin aagumbodhu balcony floor-la move aagitte irundhudhu. Technician damper shock absorbers check pannumbodhu hydraulic fluid leak aagi friction loss aagirundhadha paathanga. Fresh heavy-duty shockers fit panni drum balance calibrate pannanga. Silent spin restore aachu. ${getPriceNote()}`,
      (b, loc) => `Drum rotate aagumbodhu metal jet engine sound madhiri loud grinding noise varudhu-nu ${loc.name} customer complaint vandhudhu. Technician outer tub open panni double bearings and oil seal maathinaanga. Drum play eliminate aagi smooth rotation restore aachu. ${getPriceNote()}`,
      (b, loc) => `Customer initially floor unlevel-nu nenachirundhaanga in ${loc.name}. Aana spin speed climb aagum bothu violent thumping irundhudhu. Suspension spring tension set panni counterweight bolts tighten pannanga. Machine rock-solid stability-ku vandhudhu. ${getPriceNote()}`
    ]
  },
  {
    topic: "water_inlet_valve",
    stories: [
      (b, loc) => `Water tap on pannina water fill aaga 45 minutes edukkudhu-nu ${loc.name} customer request raise pannanga. Technician dual inlet solenoid valve filter mesh inspect pannumbodhu overhead tank sand sediment adaichirundhadha kandupidichanga. Ultrasonic mesh cleaning and coil test panni normal water velocity restore pannanga. ${getPriceNote()}`,
      (b, loc) => `Water fill aagite irukku aana wash cycle start aagave illa in ${loc.name}. Pressure transducer tube-la soap scum block aagi air signal reach aagala. Tube clear panni water level sensor calibrate pannanga, wash timer on time start aachu. ${getPriceNote()}`
    ]
  },
  {
    topic: "door_lock_issue",
    stories: [
      (b, loc) => `Wash cycle mudinju 1 hour aanaalum door open panna mudiyala-nu ${loc.name} customer tension-ah call pannanga. Technician manual release tool vechu door-ah safe-ah unlock panni clothes rescue pannanga. Faulty PTC door delay switch spot-laye replace panni latch test execute pannanga. ${getPriceNote()}`,
      (b, loc) => `Door lock latch broken aagi machine start aagala, display-la dE error vandhudhu in ${loc.name}. Genuine strike latch and interlock assembly fit panni safe wash cycle demonstrate pannanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "motor_belt_pulsator",
    stories: [
      (b, loc) => `Morning-la machine wash start aagave illa-nu ${loc.name} customer sonnaanga, motor humming kekkudhu aana drum rotate aagala. Technician rear panel open panni paatha drive belt loose aagi pulley-la irundhu slip aagirundhudhu. High-grade grooved belt maathi tension correct pannanga. Full wash power restore aachu. ${getPriceNote()}`,
      (b, loc) => `${b} Direct Drive front load machine-la drum mild-ah jerk aagi LE error display aachu in ${loc.name}. Technician rotor remove panni stator hall position sensor test panni new sensor fit pannanga. Smooth silent wash rotation ready. ${getPriceNote()}`
    ]
  }
];

function generateWmExperiences(brand, count, offset = 0) {
  const exps = [];
  for (let i = 0; i < count; i++) {
    const loc = getNextLocality();
    const probIdx = (i + offset) % WM_PROBLEMS.length;
    const prob = WM_PROBLEMS[probIdx];
    const sFn = prob.stories[(i + offset) % prob.stories.length];
    const phrases = WM_PROBLEM_PHRASES[prob.topic];
    const pPhrase = phrases[(i + offset) % phrases.length];
    const heading = registerUniqueHeading(`${brand} Washing Machine ${pPhrase} in ${loc.name}`);
    const body = sFn(brand, loc);
    exps.push({
      locality: `${loc.name} (${loc.zone})`,
      rating: getRating(),
      heading,
      body
    });
  }
  return exps;
}

// -----------------------------------------------------------------------------
// TV EXPERIENCES DEFINITIONS
// -----------------------------------------------------------------------------
const TV_PROBLEM_PHRASES = {
  backlight_black_screen: ["Backlight Problem", "Screen Black Audio OK", "Display Dark Problem", "Backlight Repair", "No Picture Sound OK"],
  power_standby_stuck: ["Not Turning On", "Red Light Blinking", "Power Supply Problem", "SMPS Board Repair", "Standby Power Problem"],
  display_lines_tcon: ["Display Lines Problem", "Vertical Lines on Screen", "T-Con Board Problem", "Screen Lines Repair", "Display Distortion"],
  software_logo_bootloop: ["Logo Screen Stuck", "Smart TV Stuck on Logo", "Restarting Continuously", "Boot Loop Fix", "Firmware Problem"],
  sound_crackling_speaker: ["Sound Problem", "Speaker Crackling", "Audio Distortion", "Sound Muted Picture OK", "Speaker Repair"]
};

const TV_PROBLEMS = [
  {
    topic: "backlight_black_screen",
    stories: [
      (b, loc) => `${loc.name}-la customer TV on panna audio dialogue crystal clear-ah kekkudhu aana screen completely dark-ah irundhudhu. Mobile torch light vechu closely paatha faint picture therinjadhu. Technician padded work mat vechu safely panel open panni burnt LED backlight strip set maathinaanga. Bright uniform display instant-ah restore aachu. ${getPriceNote()}`,
      (b, loc) => `Movie paarkumbodhu sudden-ah display cut aagi sound continue aachu in ${loc.name}. Doorstep technician LED driver output voltage measure panni individual LED lens array replacement execute pannanga. Display clarity original condition-ku vandhudhu. ${getPriceNote()}`,
      (b, loc) => `Customer screen glass poiducho-nu romba worried-ah irundhaanga in ${loc.name}. Technician panel test panni glass safe-nu confirm pannitu backlight replacement quote panni home-laye repair mudichaanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "power_standby_stuck",
    stories: [
      (b, loc) => `${loc.name} flat-la thunderstorm pinbu ${b} LED TV remote command-kum respond panna maattengudha red standby light pulse aagitte irundhudhu. Technician SMPS power supply board test pannumbodhu secondary filter capacitors bulged aagi short irundhudhu. High-end low-ESR capacitors replace panna TV first click-laye power on aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Power switch on panna fuse sound vandhu TV dead aayiduchu-nu ${loc.name} resident report pannanga. Technician primary bridge rectifier and surge diode replacement doorstep-laye panni TV functioning restore pannanga. ${getPriceNote()}`
    ]
  },
  {
    topic: "display_lines_tcon",
    stories: [
      (b, loc) => `${loc.name} customer-ku TV start pannina screen full-ah vertical rainbow color lines vandhu picture hide aagirundhudhu. Technician T-Con board LVDS ribbon terminals inspect panni oxidation clean panni DC-DC boost IC voltage measure pannanga. Ribbon re-seating and contact cleanup-la display crystal clear-ah normalize aachu. ${getPriceNote()}`,
      (b, loc) => `Screen horizontal bars flickering irundhadha ${loc.name} resident complain pannanga. Technician timing controller gate driver bypass line check panni display stability confirm pannanga without panel change. ${getPriceNote()}`
    ]
  },
  {
    topic: "software_logo_bootloop",
    stories: [
      (b, loc) => `${loc.name}-la TV startup logo-la stuck aagitu restart aagitte irundhudhu. Basic checks mudichu software/board side inspect pannanga. Diagnostic programmer vazhiya clean stock firmware flash panni cache clean pannanga. TV normal-ah home screen-ku boot aayiduchu. ${getPriceNote()}`,
      (b, loc) => `Smart apps auto-update aagumbodhu TV hang aagi loop restart aachu in ${loc.name}. Technician recovery mode enter panni partition wipe and OS reinstall execute pannanga. All OTT apps smoothly working now. ${getPriceNote()}`
    ]
  },
  {
    topic: "sound_crackling_speaker",
    stories: [
      (b, loc) => `${loc.name}-la news or music paarkumbodhu TV internal speakers crackling and jarring sound produce pannudhu-nu request vandhudhu. Technician back panel open panni paatha speaker paper cone torn aagirundhudhu. Genuine 12W stereo speaker pair spot-laye fit panna udane audio crisp-ah clarity-oda kekka start aachu. ${getPriceNote()}`,
      (b, loc) => `Sudden-ah TV sound completely mute aayiduchu aana picture normal-ah irundhudhu in ${loc.name}. Audio amplifier power rail diode burn aayirundhadha replace panni sound return aachu. ${getPriceNote()}`
    ]
  }
];

function generateTvExperiences(brand, count, offset = 0) {
  const exps = [];
  for (let i = 0; i < count; i++) {
    const loc = getNextLocality();
    const probIdx = (i + offset) % TV_PROBLEMS.length;
    const prob = TV_PROBLEMS[probIdx];
    const sFn = prob.stories[(i + offset) % prob.stories.length];
    const phrases = TV_PROBLEM_PHRASES[prob.topic];
    const pPhrase = phrases[(i + offset) % phrases.length];
    const heading = registerUniqueHeading(`${brand} TV ${pPhrase} in ${loc.name}`);
    const body = sFn(brand, loc);
    exps.push({
      locality: `${loc.name} (${loc.zone})`,
      rating: getRating(),
      heading,
      body
    });
  }
  return exps;
}

// -----------------------------------------------------------------------------
// MICROWAVE EXPERIENCES DEFINITIONS (FOR SERVICE CENTER PAGES)
// -----------------------------------------------------------------------------
const MW_PROBLEM_PHRASES = {
  heating: ["Heating Problem", "Not Heating", "Magnetron Repair"],
  touchpad: ["Touchpad Problem", "Keypad Not Working", "Touch Panel Fix"]
};

const MW_PROBLEMS = [
  {
    topic: "heating",
    stories: [
      (b, loc) => `${loc.name}-la customer microwave on pannumbodhu light and turntable normal-ah work aachu aana food heat aagave illa. Technician high-voltage capacitor and magnetron diode test pannanga. Magnetron emission drop aagirundhadha kandupidichu genuine brand-compatible magnetron replace pannanga. Food 2 minutes-la piping hot-ah heat aaga start aachu. ${getPriceNote()}`
    ]
  },
  {
    topic: "touchpad",
    stories: [
      (b, loc) => `${loc.name} resident report pannanga microwave membrane control panel-la start and stop touch buttons respond panna maattengudhu. Technician front door bezel remove panni flexible ribbon cable and membrane keypad switch change pannanga. Touch panel smooth-ah first press-laye work aachu. ${getPriceNote()}`
    ]
  }
];

function generateMwExperiences(brand, count, offset = 0) {
  const exps = [];
  for (let i = 0; i < count; i++) {
    const loc = getNextLocality();
    const probIdx = (i + offset) % MW_PROBLEMS.length;
    const prob = MW_PROBLEMS[probIdx];
    const sFn = prob.stories[(i + offset) % prob.stories.length];
    const phrases = MW_PROBLEM_PHRASES[prob.topic];
    const pPhrase = phrases[(i + offset) % phrases.length];
    const heading = registerUniqueHeading(`${brand} Microwave ${pPhrase} in ${loc.name}`);
    const body = sFn(brand, loc);
    exps.push({
      locality: `${loc.name} (${loc.zone})`,
      rating: getRating(),
      heading,
      body
    });
  }
  return exps;
}

// -----------------------------------------------------------------------------
// SERVICE CENTER (MULTI-APPLIANCE) EXPERIENCES GENERATOR
// -----------------------------------------------------------------------------
function generateScExperiences(brand, count, slug, offset = 0) {
  const brandInfo = brandCategoryMap[slug] || {};
  const categories = brandInfo.categories || [];
  
  // Build list of valid appliance generators for this brand
  const validGens = [];
  if (categories.includes('washing-machine') || categories.includes('washer-dryer')) {
    validGens.push((b, c, o) => generateWmExperiences(b, c, o));
  }
  if (categories.includes('refrigerator') || categories.includes('chest-freezer')) {
    validGens.push((b, c, o) => generateFridgeExperiences(b, c, o));
  }
  if (categories.includes('ac')) {
    validGens.push((b, c, o) => generateAcExperiences(b, c, o));
  }
  if (categories.includes('tv')) {
    validGens.push((b, c, o) => generateTvExperiences(b, c, o));
  }
  if (categories.includes('microwave-oven')) {
    validGens.push((b, c, o) => generateMwExperiences(b, c, o));
  }

  // Fallback if no specific categories mapped
  if (validGens.length === 0) {
    validGens.push((b, c, o) => generateAcExperiences(b, c, o));
    validGens.push((b, c, o) => generateWmExperiences(b, c, o));
    validGens.push((b, c, o) => generateFridgeExperiences(b, c, o));
    validGens.push((b, c, o) => generateTvExperiences(b, c, o));
  }

  const exps = [];
  for (let i = 0; i < count; i++) {
    const genFn = validGens[(i + offset) % validGens.length];
    const item = genFn(brand, 1, i + offset)[0];
    exps.push(item);
  }
  return exps;
}

// Main Category Hubs Generator (1 experience per brand on that page)
const AC_BRANDS = pages.filter(p => p.category === 'ac' && p.brand && !p.brand.startsWith('All')).map(p => p.brand);
const FRIDGE_BRANDS = pages.filter(p => p.category === 'fridge' && p.brand && !p.brand.startsWith('All')).map(p => p.brand);
const WM_BRANDS = pages.filter(p => p.category === 'washing-machine' && p.brand && !p.brand.startsWith('All')).map(p => p.brand);
const TV_BRANDS = pages.filter(p => p.category === 'tv' && p.brand && !p.brand.startsWith('All')).map(p => p.brand);
const SC_BRANDS = pages.filter(p => p.category === 'service-center' && p.brand && !p.brand.startsWith('All') && p.brand !== 'Home Appliance').map(p => p.brand);

// Map pages and generate experiences
const allExperiencesOutput = {};

pages.forEach((p, pIdx) => {
  const cat = p.category;
  const rawBrand = p.brand || '';
  const isGeneric = !rawBrand || rawBrand.startsWith('All') || rawBrand === 'Home Appliance' || rawBrand === 'home-appliance' || rawBrand.includes('Multi-Brand');
  const brandName = isGeneric ? '' : rawBrand;
  const slug = brandName ? brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '';

  let exps = [];

  // Check Category Hubs first
  if (p.newFile === 'ac/ac-repair-service-in-madurai.html') {
    AC_BRANDS.forEach((b, bIdx) => {
      exps.push(generateAcExperiences(b, 1, bIdx)[0]);
    });
  } else if (p.newFile === 'fridge/refrigerator-repair-service-in-madurai.html') {
    FRIDGE_BRANDS.forEach((b, bIdx) => {
      exps.push(generateFridgeExperiences(b, 1, bIdx)[0]);
    });
  } else if (p.newFile === 'washing-machine/washing-machine-repair-service-in-madurai.html') {
    WM_BRANDS.forEach((b, bIdx) => {
      exps.push(generateWmExperiences(b, 1, bIdx)[0]);
    });
  } else if (p.newFile === 'tv/tv-repair-service-in-madurai.html') {
    TV_BRANDS.forEach((b, bIdx) => {
      exps.push(generateTvExperiences(b, 1, bIdx)[0]);
    });
  } else if (p.newFile === 'servicecenter/home-appliance-service-center-madurai.html') {
    SC_BRANDS.forEach((b, bIdx) => {
      const bSlug = b.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      exps.push(generateScExperiences(b, 1, bSlug, bIdx)[0]);
    });
  } else if (cat === 'root') {
    exps.push(generateAcExperiences("Daikin", 1, 0)[0]);
    exps.push(generateWmExperiences("LG", 1, 1)[0]);
    exps.push(generateFridgeExperiences("Samsung", 1, 2)[0]);
    exps.push(generateTvExperiences("Sony", 1, 3)[0]);
  } else if (cat === 'ac') {
    const count = ((pIdx * 3 + 1) % 6) + 1;
    exps = generateAcExperiences(brandName || 'Split', count, pIdx);
  } else if (cat === 'fridge') {
    const count = ((pIdx * 5 + 2) % 8) + 1;
    exps = generateFridgeExperiences(brandName || 'Frost-Free', count, pIdx);
  } else if (cat === 'washing-machine') {
    const count = ((pIdx * 7 + 3) % 10) + 1;
    exps = generateWmExperiences(brandName || 'Fully Automatic', count, pIdx);
  } else if (cat === 'tv') {
    const count = ((pIdx * 11 + 4) % 8) + 1;
    exps = generateTvExperiences(brandName || 'Smart LED', count, pIdx);
  } else {
    // Service center multi-appliance page
    const count = ((pIdx * 3 + 2) % 4) + 2; // 2 to 5
    exps = generateScExperiences(brandName || 'Home Appliance', count, slug, pIdx);
  }

  allExperiencesOutput[p.newFile] = exps;
});

fs.writeFileSync('scripts/madurai_unique_experiences_v2.json', JSON.stringify(allExperiencesOutput, null, 2));
fs.writeFileSync('scripts/madurai_unique_experiences.json', JSON.stringify(allExperiencesOutput, null, 2));

console.log(`Generated scripts/madurai_unique_experiences_v2.json for ${Object.keys(allExperiencesOutput).length} pages.`);
console.log(`Total unique headings generated: ${usedHeadings.size}`);
