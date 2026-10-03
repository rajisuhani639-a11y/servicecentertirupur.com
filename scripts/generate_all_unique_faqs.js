// scripts/generate_all_unique_faqs.js
// Generates completely unique, brand-and-appliance-specific FAQs for all 173 files.
// Updates both HTML accordion (<div class="faq-item">) and Schema JSON-LD ("@type": "FAQPage").
// Covers model series, common faults, parts, approx prices, visiting charge (₹200–₹350), Erode coverage.

const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));
const localities = JSON.parse(fs.readFileSync('scripts/erode_localities.json', 'utf8'));

console.log(`Generating unique FAQs for ${catalog.length} files...`);

function getCleanLocality(idx) {
  const loc = localities[idx % localities.length];
  return loc.replace(/\s*\(\d+\)/, '').replace(/\s*\([^)]*\)/, '').trim();
}

function formatBrandName(slug) {
  if (slug === 'all-brands') return 'All Brands';
  if (slug === 'home-appliance') return 'Home Appliance';
  if (slug === 'o-general') return 'O-General';
  if (slug === 'voltas-beko') return 'Voltas Beko';
  if (slug === 'white-westinghouse') return 'White Westinghouse';
  if (slug === 'blue-star') return 'Blue Star';
  if (slug === 'mi') return 'Mi';
  if (slug === 'vw') return 'VW';
  if (slug === 'vu') return 'Vu';
  if (slug === 'lg') return 'LG';
  if (slug === 'ifb') return 'IFB';
  if (slug === 'bpl') return 'BPL';
  if (slug === 'tcl') return 'TCL';
  return slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

// Brand-specific models, technology, and common issues structured by category
const brandDetails = {
  tv: {
    sony: { models: 'Bravia XR, Triluminos 4K, Master Series OLED, Google TV (32 to 65 inch)', tech: 'Cognitive Processor XR and Triluminos Pro display', issue: 'standby red light blinking in a 5 or 6 flash sequence' },
    samsung: { models: 'Crystal 4K UHD, QLED, Neo QLED, The Frame, Tizen OS Smart TVs (32 to 75 inch)', tech: 'Quantum Dot display and PurColor processing', issue: 'vertical colored lines on panel or logo boot cycling' },
    lg: { models: 'OLED evo, NanoCell 4K, QNED, UHD 4K, webOS Smart TVs with Magic Remote', tech: 'Self-lit pixels and α Gen AI processor', issue: 'dark screen with sound coming from internal speakers' },
    tcl: { models: 'Mini-LED 4K, QLED C-Series, P-Series Google TVs (32 to 65 inch)', tech: 'Local dimming Mini-LED backlight arrays and HDR10+', issue: 'screen backlights blinking on startup or WiFi drop' },
    vu: { models: 'GloLED, Masterpiece QLED, Cinema 4K TV, Premium Android TV', tech: 'Glo Panel with 400 nits brightness and dedicated soundbar audio', issue: 'HDMI no-signal message when set-top box is connected' },
    mi: { models: 'PatchWall 4K, Horizon Edition, 5X Series, Smart Android TV (32 to 55 inch)', tech: 'Vivid Picture Engine and PatchWall content OS', issue: 'system freezing at Android boot animation' },
    xiaomi: { models: 'OLED Vision TV, Smart TV X-Series, QLED 4K, PatchWall OS', tech: 'True 10-bit display panels and Dolby Vision IQ', issue: 'auto-restart loops after system app updates' },
    oneplus: { models: 'Y-Series, U-Series, Q-Series QLED 4K, OxygenPlay Android TV', tech: 'Gamma Engine picture tuning and bezel-less design', issue: 'remote control Bluetooth pairing failure' },
    panasonic: { models: '4K HDR Google TV, Android Smart LED TV, Shinobi Series (32 to 65 inch)', tech: 'Hexa Chroma Drive color processing and IPS Super Bright panel', issue: 'power LED clicking without picture display' },
    philips: { models: 'Ambilight 4K TV, Smart LED Android TV, 6000 and 7000 Series', tech: 'Three-sided Ambilight mood lighting and Pixel Precise Ultra HD', issue: 'Ambilight strip out of sync or backlight flickering' },
    toshiba: { models: 'REGZA 4K Google TV, Quantum Dot QLED, Smart Android TV', tech: 'REGZA Engine 4K and Dolby Atmos audio', issue: 'display turning dark after 15 minutes of watching' },
    haier: { models: 'Bezel-less 4K Google TV, Android Smart LED TV (32 to 65 inch)', tech: 'HQLED panel technology and DBX-TV audio enhancement', issue: 'distorted sound or volume stuck at zero' },
    hisense: { models: 'Tornado 4K, QLED Android TV, ULED Mini-LED series', tech: 'JBL 6-speaker integrated audio and Dolby Vision', issue: 'display showing half-screen brightness or ghosting' },
    iffalcon: { models: 'K-Series 4K, Android Smart TV, QLED Google TV', tech: 'Micro Dimming contrast optimization and IPQ engine', issue: 'power board relay clicking with no display' },
    kodak: { models: '4K UHD Smart TV, CA Pro Series, Matrix QLED TV', tech: 'Bezel-less IPS panel and Android OS interface', issue: 'WiFi disconnection or apps failing to buffer' },
    micromax: { models: 'Canvas Smart LED TV, Android TV, HD Ready series', tech: 'Color Brilliant Engine and AVEA sound processing', issue: 'burned-out backlight strips causing black screen' },
    onida: { models: 'Fire TV Edition, Live Smart 4K, KY Rock series', tech: 'Alexa Voice remote integration and Lucent Picture engine', issue: 'Fire OS stuck in updating screen' },
    redmi: { models: 'Smart Fire TV, X-Series 4K Android TV (32 to 55 inch)', tech: 'Vivid Picture Engine with HDR10 support', issue: 'remote sensor eye unresponsive to power button' },
    sansui: { models: 'Prime Series Google TV, Pro Smart Android LED TV', tech: 'Wide Color Gamut and Dolby Audio system', issue: 'motherboard power regulator overheating' },
    sanyo: { models: 'Kaizen 4K Android TV, XT Series Smart LED TV', tech: 'IPS Super Bright panel and certified Android OS', issue: 'panel vertical thin lines after voltage spike' },
    sharp: { models: 'Aquos 4K UHD, Android Smart TV, Japan Panel Series', tech: 'X4 Master Engine Pro and Japanese LCD glass', issue: 'blinking standby light error codes' },
    videocon: { models: 'Liquid Luminous LED TV, Smart Android series', tech: 'Mega Contrast Ratio and SOEN sound system', issue: 'SMPS power supply secondary diode short' },
    vw: { models: 'Frameless Smart LED TV, 4K Android TV, Playwall series', tech: 'A+ Grade panel and quantum backlight technology', issue: 'backlight inverter failure or sound delay' },
    acer: { models: 'I-Series 4K Google TV, Advanced I-Series, Frameless Smart TV', tech: 'Frameless edge-to-edge display and dynamic audio boost', issue: 'display boot loop or HDMI signal flickering' },
    acerpure: { models: 'Smart Android LED TV, Google TV 4K series', tech: 'IPS panel with eye care blue light filter', issue: 'standby circuit capacitor degradation' },
    aiwa: { models: 'Magnifiq 4K Google TV, Frameless Smart TV, Audio series', tech: 'Amphitheatre surround audio and Black True Color', issue: 'internal speaker cone tearing or sound buzz' },
    akai: { models: 'Smart 4K WebOS TV, Android Smart LED TV (32 to 55 inch)', tech: 'A+ panel display and dual box speakers', issue: 'backlight strip open circuit causing dark screen' },
    bpl: { models: 'Smart Android TV, Stellar 4K, ColorPro series', tech: 'Vivid Color Engine and integrated stereo speakers', issue: 'power board fuse blowing on startup' },
    hyundai: { models: 'Smart LED TV, Frameless 4K Android TV, Signature Series', tech: 'Ultra-clear IPS panel and surround sound profile', issue: 'faint ghost picture visible only with flashlight' },
    intex: { models: 'LED TV, Smart Android Series, Eye Safe display', tech: 'Stereo sound output and wide viewing angle panel', issue: 'backlight LED strip burning after power surge' },
    hitachi: { models: 'Alpha Series 4K, LD Smart LED TV, Android TV (32 to 65 inch)', tech: 'Japanese IPS display panel and high-efficiency LED driver circuitry', issue: 'standby light blinking or screen black with audio playing' }
  },
  fridge: {
    samsung: { models: 'Curd Maestro, Twin Cooling Plus, Digital Inverter, SpaceMax Double Door & French Door', tech: 'Digital Inverter Compressor with 50% energy savings and Twin Cooling Plus dual evaporators', issue: 'freezer over-frosting while the lower fresh food cabin stays warm' },
    lg: { models: 'Smart Inverter, Door Cooling+, Linear Compressor, Side-by-Side & Double Door', tech: 'Smart Inverter Compressor and Door Cooling+ air vents', issue: 'clicking starter relay or cooling loss in the vegetable section' },
    godrej: { models: 'Edge Pro, Eon Frost-Free, Nano Shield, Multi-Inverter Single & Double Door', tech: 'Nano Shield disinfection technology and Advanced Inverter Compressor', issue: 'freezer forming thick frost while the bottom vegetable compartment stays warm' },
    whirlpool: { models: 'Intellifresh Pro, 6th Sense DeepFreeze, Protton 3-Door, Neo Frost-Free', tech: '6th Sense Intellisensor technology and MicroBlock fruit preservation', issue: 'evaporator fan rattling or defrost bi-metal failure' },
    haier: { models: 'Bottom Mounted Inverter Refrigerator, 8-in-1 Convertible, Twin Inverter Double Door', tech: 'Bottom-mounted design with 1 Hour Icing Technology and Twin Inverter compressor', issue: 'bottom freezer frost blockage or inverter control board error' },
    bosch: { models: 'Serie 4, Serie 6, VitaFresh, MultiAirFlow Bottom Mount & Double Door', tech: 'VitaFresh humidity-controlled drawers and MultiAirFlow circulation', issue: 'temperature sensor alarm beeping or inverter relay click' },
    siemens: { models: 'iQ300, iQ500, HyperFresh, NoFrost Bottom Freezer series', tech: 'HyperFresh premium cooling and multi-sensor cooling circuit', issue: 'electronic display board error codes or ice buildup' },
    liebherr: { models: 'DuoCooling, EasyFresh, BioFresh Bottom Freezer & Double Door', tech: 'DuoCooling dual independent refrigeration circuits', issue: 'freezer cooling loss or door alarm sounding' },
    electrolux: { models: 'TasteLock, NutriFresh Inverter, French Door & Double Door', tech: 'NutriFresh inverter technology and 360-degree cooling vents', issue: 'compressor running non-stop with mild cooling' },
    kelvinator: { models: 'Direct Cool Single Door, Frost-Free Double Door, Eco Series', tech: 'Thick PUF insulation and high-efficiency reciprocating compressor', issue: 'PTC starter relay burn or door gasket air leak' },
    lloyd: { models: 'Havells Lloyd Inverter, Bactshield, Frost Free Double Door', tech: 'Ten-in-One convertible modes and inverter cooling', issue: 'bottom crisper water pooling from blocked drain tube' },
    midea: { models: 'Multi-Door Inverter, Frost Free Double Door, Single Door series', tech: 'Multi-air duct cooling and smart temperature sensors', issue: 'side body overheating or condenser fan failure' },
    motorola: { models: 'Smart Connected Inverter Refrigerator, Convertible Double Door', tech: 'Wi-Fi smart diagnostics and TruInverter motor', issue: 'compressor tripping after 5 minutes of running' },
    hitachi: { models: 'Big French Door Inverter, Dual Fan Cooling, Solfege Double Door series', tech: 'Dual Fan Cooling with dedicated inverter fans for fridge and freezer', issue: 'evaporator defrost drain choking or fan motor humming' },
    panasonic: { models: 'Prime Fresh, Econavi Inverter, Multi-Door & Double Door Frost Free', tech: 'Econavi smart sensor cooling and Prime Fresh -3°C soft freezing', issue: 'defrost timer sticking or lower compartment cooling drop' },
    blue_star: { models: 'Deep Freezer, Chest Freezer, Commercial Double Door, Bottle Cooler', tech: 'Heavy-duty commercial cooling coils and high ambient insulation', issue: 'cooling coil frosting heavily or thermostat sensor drift' }
  },
  'washing-machine': {
    samsung: { models: 'EcoBubble, Digital Inverter, Wobble Technology, Hygiene Steam Front & Top Load', tech: 'EcoBubble gentle fabric wash and Digital Inverter quiet motor', issue: 'drain pump coin blockage or spin vibration error code UB' },
    lg: { models: 'AI DD, TurboWash 360, 6 Motion Direct Drive, Smart Inverter Front & Top Load', tech: 'AI Direct Drive motor with fabric weight and softness sensing', issue: 'drain pump filter clogging or door lock latch jamming' },
    ifb: { models: 'Senorita, Senator, Executive, Elena Front Load & Top Load series', tech: 'Aqua Energie water softener and 3D Wash cradle system', issue: 'OE / E20 drain timeout or door lock switch jamming' },
    bosch: { models: 'Serie 2, Serie 4, Serie 6, Serie 8, EcoSilence Drive, ActiveWater Front Load', tech: 'EcoSilence Drive brushless motor and AntiVibration side panels', issue: 'E18 drain error or drum bearing noise on spin' },
    siemens: { models: 'iQ300, iQ500, iQ700, iQdrive, SpeedPerfect Front Load series', tech: 'iQdrive brushless magnetic motor and waveDrum fabric care', issue: 'door interlock failure or drain pump impeller blockage' },
    whirlpool: { models: '6th Sense Stainwash Pro, BloomWash Pro, WhiteMagic Top Load & Front Load', tech: '6th Sense Stainwash technology and Zero Pressure Fill water intake', issue: 'water filling very slowly through inlet valve due to hard borewell scaling' },
    haier: { models: 'Super Drum 525, Direct Motion Motor, Anti-Bacterial Treatment Front & Top Load', tech: 'Direct Motion beltless motor and Laser Seamless Welding drum', issue: 'spin balance error code E4 or drain hose block' },
    panasonic: { models: 'StainMaster+, ActiveFoam System, Econavi Inverter Top & Front Load', tech: 'ActiveFoam high-density foam generator and StainMaster+ hot wash', issue: 'pulsator grinding noise or water inlet valve failure' },
    godrej: { models: 'Edge Digismart, Eon Allure, Allergy Protect, Fully & Semi-Automatic', tech: 'Aquajet pulsator system and Eco-balance wash technology', issue: 'wash motor hum without drum agitation or spin balance shaking' },
    daewoo: { models: 'Direct Drive Front Load, Air Bubble Top Load, Compact series', tech: 'Nano Silver sterilization and air bubble wash', issue: 'drain pump coin obstruction or spin balance error' },
    thomson: { models: 'Semi-Automatic Twin Tub, Fully Automatic Top Load, EcoWash', tech: 'Six Action pulsator wash and rust-free fiber body', issue: 'spin tub vibration or drive belt slipping' },
    voltas: { models: 'Voltas Beko ProSmart Inverter, Fast+ series, Front & Top Load', tech: 'ProSmart Inverter motor and GentleWave drum design', issue: 'drain pump impeller block or door interlock fault' },
    voltas_beko: { models: 'Voltas Beko ProSmart Inverter, Fast+ series, Front & Top Load', tech: 'ProSmart Inverter motor and GentleWave drum design', issue: 'drain pump impeller block or door interlock fault' },
    white_westinghouse: { models: 'Semi-Automatic Twin Tub, Fully Automatic Top Load Washer', tech: 'Heavy-duty wash motor and rust-free fiber casing', issue: 'spin dryer brake cable stretch or belt slip' },
    hitachi: { models: 'Dynamic-Stream Wash, Auto Self Clean, Inverter Front & Top Load', tech: 'Dynamic-Stream high water flow and 4-Step wash process', issue: 'door lock sensor timeout or drain pump blockage' }
  },
  ac: {
    samsung: { models: 'WindFree Inverter, Convertible 5-in-1, Triple Protector Plus Split AC', tech: 'WindFree micro-hole cooling and Digital Inverter Boost compressor', issue: 'compressor tripping MCB or refrigerant flare nut leak' },
    lg: { models: 'AI Dual Inverter, Super Convertible 6-in-1, Ocean Black Fin Split AC', tech: 'Dual Inverter compressor and Ocean Black anti-corrosive fin coating', issue: 'indoor unit water dripping or communication error CH05' },
    daikin: { models: 'Neo Swing Inverter, FTKG, FTKF, Coanda Airflow Series (1 to 2 Ton)', tech: 'Neo Swing compressor and Coanda 3D uniform air circulation', issue: 'outdoor unit not starting or green power LED flashing error code' },
    voltas: { models: 'All-Weather Inverter, Maha Adjustable, 183V / 185V Series', tech: 'Adjustable multi-stage cooling and high ambient cooling up to 52°C', issue: 'dual run capacitor failure or copper flare gas leak' },
    blue_star: { models: 'Precision Inverter, Turbo Cool, Dual Rotor, 3-Star & 5-Star Split AC', tech: 'Precision cooling technology with 0.1°C temperature tuning and golden fins', issue: 'indoor blower speed drop or low gas pressure warning' },
    carrier: { models: 'HybridJet Inverter, Flexicool Convertible, Ester, Emperia series', tech: 'Flexicool 6-in-1 cooling modes and 100% copper condenser', issue: 'outdoor unit fan humming but compressor failing to engage' },
    hitachi: { models: 'Expandable Inverter, Yoshi, Kashikoi, FrostWash Self-Clean Series', tech: 'Expandable Inverter technology and FrostWash coil self-cleaning', issue: 'copper pipe freezing or outdoor fan capacitor failure' },
    mitsubishi: { models: 'Heavy Industries SRK series, Electric MSZ Inverter, Tropical Jet Flow', tech: 'Jet Flow aeronautical airflow technology and dual PAM inverter', issue: 'indoor unit water dripping or refrigerant pressure drop' },
    o_general: { models: 'Tropical Inverter, Hyper Tropical, High Ambient Heavy Duty Split & Cassette AC', tech: 'Hyper Tropical compressor designed for 55°C desert heat and large cooling coils', issue: 'dual run capacitor degradation or indoor air throw restriction' },
    panasonic: { models: 'Twin Cool Inverter, nanoe-G Air Purification, MirAIe Connected Split AC', tech: 'nanoe-G air purification and twin rotary inverter compressor', issue: 'error code H11 communication failure or water leakage' },
    godrej: { models: 'Green Inverter, 5-Star Copper, Anti-Freeze Thermostat Split AC', tech: 'Eco-friendly R290/R32 green technology and Blue Fin anti-corrosion protection', issue: 'outdoor unit humming without cooling or run capacitor drop' },
    whirlpool: { models: '3D Cool Inverter, 6th Sense FastCool, Magicool Series Split AC', tech: '3D Cool technology with multi-directional vents and 6th Sense fast chilling', issue: 'copper tube flare leak or indoor cross-flow fan vibration' },
    lloyd: { models: 'Havells Lloyd Grande Inverter, Rapid Cooling, 4-Way Swing Split AC', tech: 'Rapid cooling in 45 seconds and golden fin evaporator coils', issue: 'indoor drain pan clogging or remote sensor failure' },
    midea: { models: 'SantInverter, High Ambient Split AC, 3-Star & 5-Star Inverter series', tech: 'Dual Filtration and high-density heat exchanger', issue: 'cooling dropping on hot afternoons or gas refilling need' }
  }
};

// Generic fallback details for missing brands
function getBrandInfo(brandSlug, appCat) {
  const normSlug = brandSlug.toLowerCase().replace(/-/g, '_');
  const cat = (appCat === 'servicecenter' || !brandDetails[appCat]) ? 'servicecenter' : appCat;

  if (brandDetails[cat] && brandDetails[cat][normSlug]) {
    return brandDetails[cat][normSlug];
  }
  // If not found in current category, try other categories or default
  if (brandDetails.tv[normSlug] && appCat === 'tv') return brandDetails.tv[normSlug];
  if (brandDetails.fridge[normSlug] && appCat === 'fridge') return brandDetails.fridge[normSlug];
  if (brandDetails['washing-machine'][normSlug] && appCat === 'washing-machine') return brandDetails['washing-machine'][normSlug];
  if (brandDetails.ac[normSlug] && appCat === 'ac') return brandDetails.ac[normSlug];

  // Smart defaults based on category
  if (appCat === 'tv') {
    return {
      models: 'Smart LED TV, 4K UHD, Android TV, Google TV (32, 43, 50, 55 inch)',
      tech: 'A+ Grade display panel and dynamic contrast tuning',
      issue: 'no picture on screen while audio plays normally'
    };
  }
  if (appCat === 'fridge') {
    return {
      models: 'Frost-Free Double Door, Direct Cool Single Door, Inverter series',
      tech: 'Inverter compressor and multi-airflow cooling vents',
      issue: 'freezer over-frosting while lower compartment stays warm'
    };
  }
  if (appCat === 'washing-machine') {
    return {
      models: 'Fully Automatic Top Load, Front Load Inverter, Semi-Automatic Twin Tub',
      tech: 'Pulsator wash technology and high-torque wash motor',
      issue: 'water drain timeout or drum vibrating heavily during spin'
    };
  }
  if (appCat === 'ac') {
    return {
      models: 'Inverter Split AC, Fixed Speed 3-Star & 5-Star Split AC (1.0, 1.5, 2.0 Ton)',
      tech: '100% Copper condenser coils and eco-friendly R32/R410A refrigerant',
      issue: 'weak cooling during afternoon heat or water dripping from indoor casing'
    };
  }
  return {
    models: 'residential and commercial appliance models supported across Erode',
    tech: 'energy-efficient components and electronic control circuits',
    issue: 'power failure, cooling drops, or motor noise'
  };
}

// Generate 8 unique, brand-and-appliance-specific questions and answers
function generateFaqsForFile(brandSlug, appCat, fileIdx) {
  const b = formatBrandName(brandSlug);
  const info = getBrandInfo(brandSlug, appCat);
  const loc1 = getCleanLocality(fileIdx * 5);
  const loc2 = getCleanLocality(fileIdx * 5 + 2);
  const loc3 = getCleanLocality(fileIdx * 5 + 4);

  let appName = 'appliance';
  if (appCat === 'tv') appName = 'TV';
  else if (appCat === 'fridge') appName = 'refrigerator';
  else if (appCat === 'washing-machine') appName = 'washing machine';
  else if (appCat === 'ac') appName = 'air conditioner';

  const faqs = [];

  // Q1: Models and types
  faqs.push({
    q: `Which ${b} ${appName} models and types do your technicians repair in Erode?`,
    a: `Our local technicians in Erode repair all popular ${b} ${appName} models including ${info.models}. Doorstep service is available across ${loc1}, ${loc2}, and nearby neighborhoods with on-site diagnostics.`
  });

  // Q2: Brand-specific common problem
  faqs.push({
    q: `What causes ${info.issue} in a ${b} ${appName}?`,
    a: `In ${loc1} and ${loc2}, this issue on a ${b} ${appName} is commonly caused by component wear, voltage fluctuations, or dust buildup. Our technician checks the unit with digital testing tools to pinpoint the exact faulty part and provides an upfront repair estimate.`
  });

  // Q3: Technology & features
  faqs.push({
    q: `How does ${b}'s ${info.tech} handle local Erode electrical and climate conditions?`,
    a: `${b} designs appliances with ${info.tech} for reliable everyday performance. In Erode, where high summer temperatures and hard borewell water can stress components, our technicians inspect voltage stabilizers, filters, and cooling circuits to keep the unit running smoothly.`
  });

  // Q4: Approximate repair charges and spare parts
  faqs.push({
    q: `What is the approximate cost for ${b} ${appName} spare parts and repair in Erode?`,
    a: `Minor component repairs such as capacitors, relays, switches, or valves typically range between ₹650–₹1,450. Major repairs like motor replacement, PCB board fixing, or cooling recharge range between ₹1,400–₹3,400 depending on your exact ${b} model. Technicians confirm the clear price before starting.`
  });

  // Q5: Visiting charge
  faqs.push({
    q: `What is the standard visiting charge for a ${b} ${appName} technician visit in Erode?`,
    a: `Our standard doorstep inspection charge across Erode is ₹200–₹350. When you approve the suggested repair, this inspection fee is adjusted into your final service invoice.`
  });

  // Q6: On-site doorstep repair vs workshop transport
  faqs.push({
    q: `Can ${b} ${appName} problems be repaired directly at my home in ${loc1}?`,
    a: `Yes, over 90% of ${b} ${appName} issues—including sensor faults, water drainage, minor board issues, and motor repairs—are completed directly at your home in ${loc1} or ${loc2}. Workshop transport is only suggested if heavy machine pressing or specialized bench testing is required.`
  });

  // Q7: Repair vs Replacement advice
  faqs.push({
    q: `Is it worth repairing an older ${b} ${appName} or should I replace it?`,
    a: `If your ${b} ${appName} is under 7 to 8 years old and the repair cost is under 30% of a new unit's price, repairing it is much more economical. Our technician inspects the overall mechanical condition in ${loc2} and gives an honest assessment.`
  });

  // Q8: Local search keyword: How to book near me
  faqs.push({
    q: `How do I book a certified ${b} ${appName} repair near me in Erode?`,
    a: `Booking takes under 60 seconds. Call our local Erode service desk at +91 92115 12088 or send a WhatsApp message with your locality in ${loc1} or ${loc3}. We confirm a convenient morning or evening time slot with a local technician.`
  });

  return faqs;
}

let updated = 0;
let skipped = 0;
const allQuestionsMap = new Map();

catalog.forEach((item, fileIdx) => {
  if (item.file === 'sitemap.html' || item.file === 'washing-machine/washing-machine-repair-service-in-erode.html') {
    skipped++;
    return;
  }

  const filePath = item.file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Find FAQ H2
  const h2Regex = /<h2[^>]*>[^<]*(?:Frequently Asked Questions|FAQs|Service Center FAQs)[^<]*<\/h2>/i;
  const h2Match = content.match(h2Regex);

  if (!h2Match) {
    console.warn(`No FAQ heading found in ${filePath}`);
    skipped++;
    return;
  }

  const h2Pos = content.indexOf(h2Match[0]);
  const secStart = content.lastIndexOf('<section', h2Pos);
  const secEnd = content.indexOf('</section>', h2Pos) + '</section>'.length;
  const fullSec = content.substring(secStart, secEnd);

  const openTagMatch = fullSec.match(/<section[^>]*>/i);
  const openTag = openTagMatch ? openTagMatch[0] : '<section class="section section-bg-muted" id="faqSection">';
  const h2Text = h2Match[0];

  const faqs = generateFaqsForFile(item.brandSlug, item.app, fileIdx);

  // Check uniqueness of questions
  faqs.forEach(f => {
    if (allQuestionsMap.has(f.q)) {
      // note collision
    } else {
      allQuestionsMap.set(f.q, item.file);
    }
  });

  // Build HTML Accordion
  const accordionItemsHtml = faqs.map(f => `
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>${f.q}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-answer">
              ${f.a}
            </div>
          </div>`).join('\n');

  const replacementFaqSection = `${openTag}
    <div class="container">
      <div class="section-header">
        ${h2Text}
        <p>Doorstep troubleshooting guidance, spare parts pricing, visiting fees, and service solutions across Erode neighborhoods.</p>
      </div>
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="faq-list">
${accordionItemsHtml}
        </div>
      </div>
    </div>
  </section>`;

  content = content.substring(0, secStart) + replacementFaqSection + content.substring(secEnd);

  // Build JSON-LD Schema
  const schemaEntities = faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a
    }
  }));

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": schemaEntities
  }, null, 2);

  // Replace Schema in <head>
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  content = content.replace(scriptRegex, (match, innerJson) => {
    if (innerJson.includes('"FAQPage"')) {
      return `<script type="application/ld+json">\n${schemaJson}\n  </script>`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
});

console.log(`Successfully updated FAQs in ${updated} files (${skipped} skipped).`);
console.log(`Total unique questions recorded: ${allQuestionsMap.size}`);
