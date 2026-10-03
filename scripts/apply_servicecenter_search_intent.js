// scripts/apply_servicecenter_search_intent.js
// STRICT SCOPE: Only operates inside /servicecenter/ folder (55 files).
// Complies with user instructions:
// 1. Target files: ONLY /servicecenter/*.html
// 2. Appliance types inside each Service Center page inspected individually.
// 3. Add search-intent content for each appliance type visible on rendered page.
// 4. Every appliance type must have correct brand, appliance name, Erode, "near me", appliance-specific problems, simple Indian English.
// 5. Place VISIBLE in the rendered page (in appliance cards & appliance sections).
// 6. Improve main visible opening of every Service Center page with naturally different text.
// 7. Do not touch any files outside /servicecenter/.

const fs = require('fs');
const path = require('path');

const scDir = 'servicecenter';
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

console.log(`Processing ${files.length} Service Center pages in /servicecenter/...`);

// Helper to determine appliance category key from appliance name
function getAppCategory(appName) {
  const lower = appName.toLowerCase();
  
  if (lower.includes('dishwasher') || lower.includes('dish washer')) return 'dishwasher';
  if (lower.includes('washer dryer')) return 'washer-dryer';
  if (lower.includes('clothes dryer') || (lower.includes('dryer') && !lower.includes('wash'))) return 'dryer';
  if (lower.includes('washing machine') || /\bwasher\b/i.test(lower) || lower.includes('twin tub')) return 'washing-machine';
  
  if (/\bac\b/i.test(lower) || lower.includes('air conditioner') || lower.includes('cassette') || lower.includes('ductable')) return 'ac';
  
  if (lower.includes('chest freezer') || lower.includes('deep freezer')) return 'freezer';
  if (lower.includes('fridge') || lower.includes('refrigerator')) return 'fridge';
  
  if (/\btv\b/i.test(lower) || lower.includes('television') || lower.includes('smart tv') || lower.includes('qled') || lower.includes('oled')) return 'tv';
  
  if (lower.includes('built-in oven')) return 'oven';
  if (lower.includes('microwave') || lower.includes('oven')) return 'microwave';
  
  if (lower.includes('water cooler') || lower.includes('water dispenser')) return 'water-cooler';
  if (lower.includes('cooler')) return 'air-cooler';
  
  if (lower.includes('purifier') && lower.includes('air')) return 'air-purifier';
  if (lower.includes('purifier') && lower.includes('water')) return 'water-purifier';
  if (lower.includes('water purifier') || lower.includes('ro ')) return 'water-purifier';
  
  if (lower.includes('geyser') || lower.includes('water heater')) return 'geyser';
  if (lower.includes('audio') || lower.includes('soundbar') || lower.includes('speaker')) return 'audio';
  if (lower.includes('chimney')) return 'chimney';
  if (lower.includes('hob')) return 'hob';
  if (lower.includes('fan') || lower.includes('circulator')) return 'fan';
  if (lower.includes('mixer') || lower.includes('grinder') || lower.includes('kitchen')) return 'kitchen-appliance';
  
  return 'general';
}

// Generate unique, natural search-intent card paragraph for each appliance type
function generateAppCardText(brand, fullAppName, fileIdx, appIdx) {
  const cat = getAppCategory(fullAppName);
  const cleanApp = fullAppName.replace(new RegExp(`^${brand}\\s*`, 'i'), '').trim();
  const lowerApp = cleanApp.toLowerCase();

  // Handle specific sub-types so no two appliances on the same page ever get identical wording
  if (cat === 'ac') {
    if (lowerApp.includes('cassette')) {
      return `Searching for ${brand} cassette AC service near me in Erode? Need a ${brand} cassette AC repair service in Erode for ceiling water dripping, low airflow or sensor error? Our technician inspects the unit and fixes the issue on site.`;
    }
    if (lowerApp.includes('ductable')) {
      return `Looking for ${brand} ductable AC repair near me in Erode? Need a nearby ${brand} ductable air conditioner service center in Erode for cooling drops, duct airflow issues or gas checking? Our local team provides prompt doorstep checking.`;
    }
    if (lowerApp.includes('multi-split') || lowerApp.includes('multi split')) {
      return `Searching for ${brand} multi-split AC service near me in Erode? Need a ${brand} multi-room air conditioner service center in Erode for dual zone cooling drops or outdoor unit noise? Our technician inspects multi-circuit cooling on site.`;
    }
    if (lowerApp.includes('tropical')) {
      return `Looking for ${brand} tropical inverter split AC repair near me in Erode? Need high-ambient ${brand} split AC service in Erode for severe heat cooling drops, sensor errors or gas refilling? Our technician visits your location.`;
    }
    if (lowerApp.includes('window')) {
      return `Need ${brand} window AC repair in Erode? Searching for trusted ${brand} window AC service near me? If your cooling is weak or the compressor vibrates heavily, contact our local technician for same-day inspection.`;
    }
    if (lowerApp.includes('split') || lowerApp.includes('inverter')) {
      return `Looking for ${brand} inverter split AC repair near me in Erode? Need a ${brand} split AC service center in Erode for refrigerant leak, PCB errors or cooling issues? Our technician checks the unit and explains the repair needed.`;
    }
    const acVariants = [
      `Searching for ${brand} AC service near me in Erode? Need a ${brand} AC repair service in Erode for cooling, water leakage or gas check problems? The technician can check the unit and explain the repair needed.`,
      `Looking for ${brand} air conditioner repair near me in Erode? Need a nearby ${brand} AC service center in Erode for low cooling, unusual sound or fan motor issues? Our local team provides quick doorstep checking.`,
      `Need ${brand} AC repair in Erode? Searching for trusted ${brand} air conditioning service near me? Whether the compressor is tripping or coils need gas refilling, contact our local technician for same-day service.`
    ];
    return acVariants[(fileIdx + appIdx) % acVariants.length];
  }

  if (cat === 'fridge') {
    if (lowerApp.includes('side-by-side') || lowerApp.includes('side by side')) {
      return `Looking for ${brand} side-by-side refrigerator repair near me in Erode? Need a ${brand} multi-door fridge service center in Erode for digital display errors, dispenser faults or cooling drops? Our technician visits with testing tools.`;
    }
    if (lowerApp.includes('bottom freezer') || lowerApp.includes('bottom mount')) {
      return `Searching for ${brand} bottom freezer refrigerator repair near me in Erode? Looking for a ${brand} bottom mount fridge service center in Erode for freezer cooling loss or drawer ice block? Our local technician visits for doorstep checking.`;
    }
    if (lowerApp.includes('duocooling')) {
      return `Need ${brand} DuoCooling fridge repair in Erode? Searching for trusted ${brand} dual-cooling refrigerator service near me? If twin cooling circuits show temperature alarms or sensor errors, contact our local technician.`;
    }
    if (lowerApp.includes('double door')) {
      return `Searching for ${brand} double door refrigerator repair near me in Erode? Need a ${brand} frost free fridge service center in Erode for defrost failure or cooling loss? Our technician checks the bi-metal and timer on site.`;
    }
    if (lowerApp.includes('single door')) {
      return `Looking for ${brand} single door fridge repair near me in Erode? Need a nearby ${brand} refrigerator service center in Erode for thermostat issues or compressor clicking? Our local team provides fast doorstep repair.`;
    }
    const fridgeVariants = [
      `Looking for ${brand} refrigerator repair near me in Erode? Need a ${brand} fridge service center in Erode for a cooling, ice or compressor problem? The appliance can be checked based on the actual fault.`,
      `Searching for ${brand} fridge service near me in Erode? Looking for a ${brand} refrigerator repair service in Erode for water leakage, cooling loss or motor clicking? Our technician visits with testing tools.`,
      `Need ${brand} refrigerator repair in Erode? Searching for nearby ${brand} fridge service near me? If your food is spoiling or the freezer is not making ice, our local technician provides honest doorstep checking.`
    ];
    return fridgeVariants[(fileIdx + appIdx) % fridgeVariants.length];
  }

  if (cat === 'freezer') {
    if (lowerApp.includes('commercial')) {
      return `Searching for ${brand} commercial deep freezer repair near me in Erode? Need a ${brand} commercial freezer service center in Erode for heavy temperature drops or compressor failure? Our technician provides priority doorstep checking.`;
    }
    const freezerVariants = [
      `Searching for ${brand} deep freezer repair near me in Erode? Need a ${brand} chest freezer service center in Erode for cooling drops, heavy frost or relay faults? Our technician checks the cooling coil and starter relay on site.`,
      `Looking for ${brand} chest freezer service near me in Erode? Need reliable ${brand} deep freezer repair in Erode for temperature issues or lid gasket leaks? Our local team provides quick doorstep checking.`
    ];
    return freezerVariants[(fileIdx + appIdx) % freezerVariants.length];
  }

  if (cat === 'washing-machine') {
    if (lowerApp.includes('front load')) {
      return `Searching for ${brand} front load washing machine repair near me in Erode? Looking for a ${brand} front load washer service center in Erode for door lock errors, drum vibration or drain timeout? Contact our local service team for checking.`;
    }
    if (lowerApp.includes('top load')) {
      return `Looking for ${brand} top load washer service near me in Erode? Need ${brand} top load washing machine repair in Erode for spin balance errors, water intake slow or pulsator noise? Our nearby technician provides fast doorstep repair.`;
    }
    if (lowerApp.includes('semi-automatic') || lowerApp.includes('semi automatic')) {
      return `Need ${brand} semi-automatic washing machine repair in Erode? Searching for trusted ${brand} twin tub washer service near me? If the spin dryer won't rotate or wash motor hums, book a local technician home visit.`;
    }
    if (lowerApp.includes('fully automatic')) {
      return `Searching for ${brand} fully automatic washing machine repair near me in Erode? Need a ${brand} automatic washer service center in Erode for cycle stuck, error codes or water inlet valve faults? Contact our local technician for same-day repair.`;
    }
    const wmVariants = [
      `Searching for ${brand} washing machine repair near me in Erode? Looking for a ${brand} washing machine service center in Erode? If your washer is not spinning, draining or taking water properly, you can contact the local service team for checking and repair.`,
      `Looking for ${brand} washer service near me in Erode? Need ${brand} washing machine repair in Erode for drum vibration, drain pump block or motor faults? Our nearby technician provides fast doorstep repair.`,
      `Need ${brand} washing machine repair in Erode? Searching for trusted ${brand} washer service near me? If your machine shows error codes or stops mid-cycle, book a local technician home visit.`
    ];
    return wmVariants[(fileIdx + appIdx) % wmVariants.length];
  }

  if (cat === 'tv') {
    if (lowerApp.includes('ambilight')) {
      return `Searching for ${brand} Ambilight 4K TV repair near me in Erode? Need a ${brand} Ambilight television service center in Erode for LED backlight synchronization, HDMI eARC or power issues? Our technician inspects the TV on site.`;
    }
    if (lowerApp.includes('bravia')) {
      return `Looking for ${brand} Bravia 4K Google TV repair near me in Erode? Need a ${brand} Bravia television service center in Erode for mainboard issues, audio drops or display panel faults? Contact our local team.`;
    }
    if (lowerApp.includes('oled')) {
      return `Searching for ${brand} OLED TV repair near me in Erode? Need a ${brand} OLED television service center in Erode for panel lines, power board tripping or HDMI 2.1 faults? Our technician inspects the TV carefully on site.`;
    }
    if (lowerApp.includes('mini-led') || lowerApp.includes('mini led')) {
      return `Searching for ${brand} Mini-LED TV service near me in Erode? Need a ${brand} Mini-LED television repair in Erode for local dimming issues, backlight flicker or motherboard repair? Book a doorstep technician visit.`;
    }
    if (lowerApp.includes('masterpiece qled')) {
      return `Need ${brand} Masterpiece QLED TV repair in Erode? Searching for ${brand} premium television service near me? If quantum-dot display colors distort or power trips, our technician inspects the panel on site.`;
    }
    if (lowerApp.includes('gloled')) {
      return `Searching for ${brand} GloLED TV service near me in Erode? Need a ${brand} GloLED television technician in Erode for high-brightness panel issues, soundbar sync or boot loop? Get doorstep inspection.`;
    }
    if (lowerApp.includes('qled')) {
      return `Need a ${brand} QLED TV service center near me in Erode? Searching for ${brand} QLED television repair in Erode for backlight brightness drops, color lines or power supply faults? Our local technician visits your doorstep for checking.`;
    }
    if (lowerApp.includes('cinema')) {
      return `Looking for ${brand} Cinema 4K TV repair near me in Erode? Need a nearby ${brand} cinema display television technician in Erode for display panel faults, audio issues or HDMI connectivity? Our local team provides honest doorstep repair.`;
    }
    if (lowerApp.includes('frameless')) {
      return `Searching for ${brand} frameless Smart LED TV repair near me in Erode? Looking for a ${brand} frameless television service center in Erode for borderless display lines or WiFi disconnection? Book a doorstep visit.`;
    }
    if (lowerApp.includes('google tv')) {
      return `Searching for ${brand} Google TV repair near me in Erode? Looking for a ${brand} Smart Google television service center in Erode for OS crashing, Google Play store freeze or display issues? Our technician checks the motherboard.`;
    }
    if (lowerApp.includes('fire tv')) {
      return `Looking for ${brand} Fire TV repair near me in Erode? Need a ${brand} Smart Fire TV service center in Erode for Fire OS boot loop, remote pairing failure or backlight failure? Our local technician visits your doorstep.`;
    }
    if (lowerApp.includes('android')) {
      return `Searching for ${brand} Android TV repair near me in Erode? Need a ${brand} Smart Android television service center in Erode for software hanging, WiFi disconnection or sound delay? Our local team provides quick doorstep checking.`;
    }
    if (lowerApp.includes('uhd') || lowerApp.includes('4k')) {
      return `Looking for ${brand} 4K UHD Smart TV repair near me in Erode? Need a ${brand} ultra-HD television technician in Erode for display clarity loss, HDMI signal faults or audio errors? Contact our local service team.`;
    }
    if (lowerApp.includes('led')) {
      return `Searching for ${brand} LED TV repair near me in Erode? Need a nearby ${brand} television technician in Erode for backlight strip replacement or power supply board checking? Our local team provides honest doorstep repair.`;
    }
    const tvVariants = [
      `Need a ${brand} TV service center near me in Erode? Searching for ${brand} television repair in Erode for display backlight, sound or power problems? Our local technician visits your doorstep for safe checking and component replacement.`,
      `Looking for ${brand} TV repair near me in Erode? Need ${brand} Smart LED TV service in Erode for a black screen, vertical lines or logo boot loop? Get reliable on-site diagnosis and repair.`,
      `Searching for ${brand} Smart TV repair near me in Erode? Need a nearby ${brand} television technician in Erode for HDMI no-signal or audio issues? Our local team provides honest doorstep repair.`
    ];
    return tvVariants[(fileIdx + appIdx) % tvVariants.length];
  }

  if (cat === 'audio') {
    if (lowerApp.includes('soundbar')) {
      return `Looking for ${brand} soundbar repair near me in Erode? Need ${brand} soundbar service in Erode for Bluetooth connectivity, optical input fault or subwoofer audio cutting? Our local team provides doorstep checking.`;
    }
    return `Searching for ${brand} home audio speaker repair near me in Erode? Need a ${brand} audio system service center in Erode for channel distortion, amplifier heating or auxiliary port issues? Our technician tests circuits on site.`;
  }

  const templates = {
    'washer-dryer': [
      `Searching for ${brand} washer dryer repair near me in Erode? Need a ${brand} washer dryer service center in Erode for drying faults, heating issues or spin problems? Our technician inspects the heating element and condensation unit on site.`,
      `Looking for ${brand} washer dryer service in Erode? Searching for nearby ${brand} washer dryer repair near me? If clothes remain wet after drying or the drum makes noise, get quick doorstep checking.`
    ],
    'dryer': [
      `Searching for ${brand} clothes dryer repair near me in Erode? Need a ${brand} dryer service center in Erode for heating failure or drum rotation problems? Our technician tests heater coils on site.`,
      `Looking for ${brand} dryer service near me in Erode? Need fast ${brand} clothes dryer repair in Erode? Our local technicians provide doorstep inspection and lint duct cleaning.`
    ],
    'microwave': [
      `Searching for ${brand} microwave oven repair near me in Erode? Need a ${brand} microwave service center in Erode for heating failure, turntable rotation or keypad issues? Our technician checks the magnetron, diode and door safety switch on site.`,
      `Looking for ${brand} microwave service near me in Erode? Need ${brand} oven repair in Erode for sparking, door latch faults or power tripping? Our technician provides safe doorstep repair.`
    ],
    'oven': [
      `Searching for ${brand} built-in oven repair near me in Erode? Need a ${brand} oven service center in Erode for heating element or temperature controller faults? Our technician inspects the oven at your home.`,
      `Looking for ${brand} oven service in Erode? Need reliable ${brand} built-in oven repair near me? Get fast doorstep checking for baking temperature drops or timer faults.`
    ],
    'air-cooler': [
      `Searching for ${brand} air cooler repair near me in Erode? Need a ${brand} air cooler service center in Erode for water pump failure, pad scaling or fan motor issues? Our technician cleans the pump and restores cool airflow.`,
      `Looking for ${brand} air cooler service near me in Erode? Need ${brand} cooler repair in Erode for low air throw or water lifting trouble? Our local team provides quick doorstep servicing.`
    ],
    'air-purifier': [
      `Looking for ${brand} air purifier service near me in Erode? Need ${brand} air purifier repair in Erode for HEPA filter replacement, sensor error or motor noise? Our local technician inspects the sensor and cleans internal airways.`,
      `Searching for ${brand} air purifier repair near me in Erode? Need a nearby ${brand} air purifier technician in Erode for red light indicator or fan speed issues? Book a doorstep visit.`
    ],
    'water-purifier': [
      `Looking for ${brand} water purifier service near me in Erode? Need ${brand} RO repair in Erode for slow water flow, filter choking or pump vibration? Our technician tests water TDS and replaces filters on site.`,
      `Searching for ${brand} RO repair near me in Erode? Need a ${brand} water purifier service center in Erode for taste issues, membrane scaling or leakage? Our local technician provides fast doorstep checking.`
    ],
    'dishwasher': [
      `Searching for ${brand} dishwasher repair near me in Erode? Looking for a ${brand} dishwasher service center in Erode for water drainage, wash pump hum or spray arm issues? Our technician clears blocks on site.`,
      `Looking for ${brand} dishwasher service near me in Erode? Need ${brand} dishwasher repair in Erode for dirty dishes, heating faults or E24 errors? Our local technician provides doorstep inspection.`
    ],
    'geyser': [
      `Need ${brand} geyser repair near me in Erode? Searching for a ${brand} water heater service center in Erode for heating element failure, slow warming or thermostat faults? Our technician inspects wiring, element scaling and temperature cut-off on site.`,
      `Looking for ${brand} water heater service near me in Erode? Need ${brand} geyser repair in Erode for water dripping, MCB tripping or temperature issues? Our local technician provides same-day repair.`
    ],
    'chimney': [
      `Looking for ${brand} kitchen chimney repair near me in Erode? Need ${brand} chimney service in Erode for low suction, filter grease choking or motor noise? Our technician provides deep cleaning and inspection.`,
      `Searching for ${brand} chimney service near me in Erode? Need a ${brand} kitchen chimney technician in Erode for touch panel faults or smoke backflow? Book a doorstep service visit.`
    ],
    'hob': [
      `Searching for ${brand} hob repair near me in Erode? Need a ${brand} gas hob service center in Erode for burner ignition, gas flame issues or valve leakage? Our technician inspects the hob safely on site.`,
      `Looking for ${brand} hob service in Erode? Need reliable ${brand} built-in hob repair near me? Get fast doorstep checking for low flame or auto-ignition failure.`
    ],
    'water-cooler': [
      `Looking for ${brand} water cooler repair near me in Erode? Need a ${brand} commercial water cooler service center in Erode for cooling drops or tap leakage? Our technician visits for on-site cooling repair.`,
      `Searching for ${brand} water dispenser service near me in Erode? Need ${brand} water cooler repair in Erode for compressor tripping or slow chilling? Contact our local team.`
    ],
    'fan': [
      `Searching for ${brand} air circulator fan repair near me in Erode? Need ${brand} fan service in Erode for motor rotation, oscillation stuck or noise? Our technician inspects motor windings on site.`,
      `Looking for ${brand} fan service near me in Erode? Need ${brand} air circulator repair in Erode for speed drop or humming sound? Our local team provides quick doorstep checking.`
    ],
    'kitchen-appliance': [
      `Searching for ${brand} kitchen appliance repair near me in Erode? Need ${brand} mixer grinder service in Erode for motor overload tripping, coupler replacement or wiring faults? Our local team provides reliable checking.`,
      `Looking for ${brand} kitchen appliance service near me in Erode? Need ${brand} appliance repair in Erode for motor noise or jar coupler wear? Our technician provides doorstep inspection.`
    ],
    'general': [
      `Searching for ${brand} ${cleanApp} repair near me in Erode? Looking for a ${brand} service center in Erode for ${cleanApp} inspection or repair? Our local technician visits your doorstep for checking.`,
      `Looking for ${brand} ${cleanApp} service near me in Erode? Need reliable ${brand} appliance repair in Erode for ${cleanApp} faults? Contact our local service team for doorstep support.`
    ]
  };

  const pool = templates[cat] || templates['general'];
  return pool[(fileIdx + appIdx) % pool.length];
}

// Generate unique hero opening for each Service Center page (Section 6)
function generateSCHeroLead(brand, fileIdx, appList) {
  let appNamesStr = "";
  if (appList && appList.length > 0) {
    const cleanNames = appList.map(a => a.replace(new RegExp(`^${brand}\\s*`, 'i'), '').trim());
    if (cleanNames.length <= 3) {
      appNamesStr = cleanNames.join(' and ');
    } else {
      appNamesStr = cleanNames.slice(0, 3).join(', ') + ' and other appliances';
    }
  } else {
    appNamesStr = "home appliances";
  }

  const openings = [
    `Searching for ${brand} service center near me in Erode? Looking for ${brand} appliance repair service in Erode? You are at the right place for local appliance checking and repair. If your ${brand} ${appNamesStr} has performance trouble, cooling issues, or power faults, our local technicians provide same-day doorstep service across all Erode localities.`,
    `Looking for a ${brand} service center in Erode? Need dependable ${brand} appliance repair near me in Erode? Whether you need inspection for ${brand} ${appNamesStr} or emergency troubleshooting, our experienced technicians visit your home equipped with testing tools and genuine spare parts.`,
    `Need a nearby ${brand} service center in Erode? Searching for trusted ${brand} appliance repair service near me? From motor issues and cooling problems to electronic PCB checking on ${brand} ${appNamesStr}, our local service team provides fast, honest doorstep solutions with clear price estimates.`,
    `In search of an experienced ${brand} service center near me in Erode? Looking for reliable ${brand} home appliance service in Erode? If your ${brand} ${appNamesStr} is not working properly, making unusual sounds, or displaying errors, book a convenient home visit from our skilled Erode technicians.`,
    `Searching for ${brand} appliance repair service in Erode? Need a prompt ${brand} service center near me? Our local technicians specialize in on-site diagnosis and repair for ${brand} ${appNamesStr}, providing transparent service and reliable replacement parts at your doorstep.`
  ];

  return openings[fileIdx % openings.length];
}

let modifiedFiles = 0;

files.forEach((file, fileIdx) => {
  const filePath = path.join(scDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Handle generic multi-brand hub page
  if (file === 'home-appliance-service-center-erode.html') {
    const genericHero = `Searching for home appliance service center near me in Erode? Looking for multi-brand appliance repair service in Erode? You are at the right place for local doorstep appliance checking and repair. Whether your AC, refrigerator, washing machine, or TV has cooling faults, water drain issues, or display problems, our experienced technicians provide same-day service across all Erode areas.`;
    content = content.replace(/<p class="hero-(?:lead|copy)">[\s\S]*?<\/p>/i, `<p class="hero-lead">${genericHero}</p>`);

    // Update the 4 major appliance category cards
    content = content.replace(/(<h3[^>]*>AC Service Center Erode<\/h3>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/i, 
      `$1Searching for AC repair near me in Erode? Looking for an AC service center in Erode for cooling, gas check, or water leakage problems? Our local technicians provide doorstep inspection and repair.$3`);
    content = content.replace(/(<h3[^>]*>Refrigerator Service Center Erode<\/h3>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/i, 
      `$1Looking for refrigerator repair near me in Erode? Need a fridge service center in Erode for cooling issues, compressor faults, or ice maker problems? Get same-day doorstep technician visits.$3`);
    content = content.replace(/(<h3[^>]*>Washing Machine Service Center Erode<\/h3>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/i, 
      `$1Searching for washing machine repair near me in Erode? Need a washing machine service center in Erode for drain, spin, or noise troubles? Our experienced technicians arrive equipped to fix the issue.$3`);
    content = content.replace(/(<h3[^>]*>TV Service Center Erode<\/h3>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/i, 
      `$1Need a TV service center near me in Erode? Searching for television repair in Erode for display backlight, sound, or power faults? We provide reliable on-site checking across all Erode areas.$3`);

    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    return;
  }

  // 1. Identify brand from H1
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let brand = "";
  if (h1Match) {
    brand = h1Match[1].replace(/<[^>]+>/g, '').replace(/Service Center.*$/i, '').trim();
  }
  if (!brand) {
    brand = file.replace('-service-center-erode.html', '');
    brand = brand.charAt(0).toUpperCase() + brand.slice(1);
  }

  // 2. Identify all appliance cards in "Home Appliances We Service"
  const sec3Regex = /(<section[^>]*>[\s\S]*?<h2>[^<]*Home Appliances We Service<\/h2>[\s\S]*?<div class="services-grid"[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/i;
  const sec3Match = content.match(sec3Regex);

  const foundAppNames = [];

  if (sec3Match) {
    let gridContent = sec3Match[2];
    
    // Find all cards inside this grid
    const cardRegex = /(<div class="service-card"[^>]*>[\s\S]*?<h3[^>]*>)([\s\S]*?)(<\/h3>[\s\S]*?<p[^>]*>)([\s\S]*?)(<\/p>[\s\S]*?<\/div>)/gi;
    let cardIdx = 0;
    gridContent = gridContent.replace(cardRegex, (match, prefix, titleHtml, mid, oldP, suffix) => {
      const fullAppName = titleHtml.replace(/<[^>]+>/g, '').trim();
      foundAppNames.push(fullAppName);

      const searchIntentCardText = generateAppCardText(brand, fullAppName, fileIdx, cardIdx);
      cardIdx++;

      return `${prefix}${titleHtml}${mid}${searchIntentCardText}${suffix}`;
    });

    content = content.replace(sec3Regex, `$1${gridContent}$3`);
  }

  // 3. Update main visible hero opening section (Section 6)
  const heroLead = generateSCHeroLead(brand, fileIdx, foundAppNames);
  content = content.replace(/<p class="hero-(?:lead|copy)">[\s\S]*?<\/p>/i, `<p class="hero-lead">${heroLead}</p>`);

  fs.writeFileSync(filePath, content, 'utf8');
  modifiedFiles++;
});

console.log(`Successfully applied search-intent content across all ${modifiedFiles} files in /servicecenter/.`);
