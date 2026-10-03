const fs = require('fs');

// Helper to determine appliance category key from appliance name
function getAppCategory(appName) {
  const lower = appName.toLowerCase();
  if (lower.includes('ac') || lower.includes('air conditioner')) return 'ac';
  if (lower.includes('fridge') || lower.includes('refrigerator') || lower.includes('freezer')) {
    if (lower.includes('chest') || lower.includes('deep')) return 'freezer';
    return 'fridge';
  }
  if (lower.includes('wash') || lower.includes('dryer')) {
    if (lower.includes('dryer') && !lower.includes('wash')) return 'dryer';
    if (lower.includes('washer dryer')) return 'washer-dryer';
    return 'washing-machine';
  }
  if (lower.includes('tv') || lower.includes('television')) return 'tv';
  if (lower.includes('microwave') || lower.includes('oven')) {
    if (lower.includes('built-in oven')) return 'oven';
    return 'microwave';
  }
  if (lower.includes('cooler') && !lower.includes('water cooler')) return 'air-cooler';
  if (lower.includes('purifier') && lower.includes('air')) return 'air-purifier';
  if (lower.includes('purifier') && lower.includes('water')) return 'water-purifier';
  if (lower.includes('dish')) return 'dishwasher';
  if (lower.includes('geyser') || lower.includes('water heater')) return 'geyser';
  if (lower.includes('audio') || lower.includes('soundbar') || lower.includes('speaker')) return 'audio';
  if (lower.includes('chimney')) return 'chimney';
  if (lower.includes('hob')) return 'hob';
  if (lower.includes('water cooler') || lower.includes('water dispenser')) return 'water-cooler';
  if (lower.includes('fan') || lower.includes('circulator')) return 'fan';
  if (lower.includes('mixer') || lower.includes('kitchen')) return 'kitchen-appliance';
  return 'general';
}

// Generate appliance-specific search intent card content
function generateAppCardContent(brand, appName, brandIdx, appIdx) {
  const cat = getAppCategory(appName);
  const cleanApp = appName.replace(new RegExp(`^${brand}\\s*`, 'i'), '').trim();

  const templates = {
    'ac': [
      `Searching for ${brand} AC service near me in Erode? Need a ${brand} AC repair service in Erode for cooling, water leakage or gas check problems? The technician can check the unit and explain the repair needed.`,
      `Looking for ${brand} air conditioner repair near me in Erode? Need a nearby ${brand} AC service center in Erode for low cooling, fan motor noise or gas refilling? Our local team provides doorstep checking.`,
      `Need ${brand} AC repair in Erode? Searching for trusted ${brand} split AC service near me? Whether the compressor is tripping or the indoor unit is dripping water, contact our local technician.`
    ],
    'fridge': [
      `Looking for ${brand} refrigerator repair near me in Erode? Need a ${brand} fridge service center in Erode for a cooling, ice or compressor problem? The appliance can be checked based on the actual fault.`,
      `Searching for ${brand} fridge repair near me in Erode? Looking for a ${brand} refrigerator service center in Erode for freezer cooling loss or water leakage? Our technician visits with testing tools.`,
      `Need ${brand} refrigerator service in Erode? Searching for nearby ${brand} fridge repair near me? If your food is spoiling or the compressor makes clicking sounds, book our local technician visit.`
    ],
    'freezer': [
      `Searching for ${brand} deep freezer repair near me in Erode? Need a ${brand} chest freezer service center in Erode for cooling drops or heavy frost? Our technician checks the cooling coil and starter relay.`,
      `Looking for ${brand} chest freezer service near me in Erode? Need reliable ${brand} deep freezer repair in Erode for temperature issues or lid gasket leaks? Our local team visits your doorstep.`
    ],
    'washing-machine': [
      `Searching for ${brand} washing machine repair near me in Erode? Looking for a ${brand} washing machine service center in Erode? If your washer is not spinning, draining or taking water properly, you can contact the local service team for checking and repair.`,
      `Looking for ${brand} washer service near me in Erode? Need ${brand} washing machine repair in Erode for drum vibration, drain pump block or motor faults? Our nearby technician provides fast doorstep repair.`,
      `Need ${brand} washing machine repair in Erode? Searching for trusted ${brand} front load or top load washer service near me? If your machine shows error codes or stops mid-cycle, book a home visit.`
    ],
    'washer-dryer': [
      `Searching for ${brand} washer dryer repair near me in Erode? Need a ${brand} washer dryer service center in Erode for drying faults, heating issues or spin problems? Our technician inspects the unit on site.`,
      `Looking for ${brand} washer dryer service in Erode? Searching for nearby ${brand} washer dryer repair near me? If your clothes remain wet after drying or the drum makes noise, get local doorstep service.`
    ],
    'dryer': [
      `Searching for ${brand} clothes dryer repair near me in Erode? Need a ${brand} dryer service center in Erode for heating failure or drum rotation problems? Our technician tests heater coils on site.`,
      `Looking for ${brand} dryer service near me in Erode? Need fast ${brand} clothes dryer repair in Erode? Our local technicians provide doorstep inspection and lint duct cleaning.`
    ],
    'tv': [
      `Need a ${brand} TV service center near me in Erode? Searching for ${brand} television repair in Erode for display backlight, sound or power problems? Our local technician visits your doorstep for safe checking.`,
      `Looking for ${brand} TV repair near me in Erode? Need ${brand} Smart LED TV service in Erode for a black screen, vertical lines or logo boot loop? Get reliable on-site diagnosis and repair.`,
      `Searching for ${brand} LED TV repair near me in Erode? Need a nearby ${brand} television technician in Erode for HDMI no-signal or audio issues? Our local team provides honest doorstep repair.`
    ],
    'microwave': [
      `Searching for ${brand} microwave oven repair near me in Erode? Need a ${brand} microwave service center in Erode for heating failure, turntable rotation or keypad issues? Our technician checks the magnetron and diode on site.`,
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
      `Looking for ${brand} air purifier service near me in Erode? Need ${brand} air purifier repair in Erode for HEPA filter replacement, sensor error or motor noise? Our local technician inspects the unit on site.`,
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
      `Need ${brand} geyser repair near me in Erode? Searching for a ${brand} water heater service center in Erode for heating element failure, slow warming or thermostat faults? Our technician inspects wiring and scaling on site.`,
      `Looking for ${brand} water heater service near me in Erode? Need ${brand} geyser repair in Erode for water dripping, MCB tripping or temperature issues? Our local technician provides same-day repair.`
    ],
    'audio': [
      `Searching for ${brand} audio system repair near me in Erode? Need a ${brand} soundbar service center in Erode for power tripping, speaker distortion or HDMI ARC issues? Our technician tests boards on site.`,
      `Looking for ${brand} soundbar repair near me in Erode? Need ${brand} home audio service in Erode for Bluetooth connectivity or subwoofer audio cutting? Our local team provides doorstep checking.`
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
  return pool[(brandIdx + appIdx) % pool.length];
}

console.log('Testing sample appliance card content generation:');
console.log('Godrej Washing Machine:', generateAppCardContent('Godrej', 'Godrej Washing Machine', 1, 0));
console.log('Godrej Refrigerator:', generateAppCardContent('Godrej', 'Godrej Refrigerator', 1, 1));
console.log('Godrej Air Conditioner:', generateAppCardContent('Godrej', 'Godrej Air Conditioner', 1, 2));
console.log('Akai Television:', generateAppCardContent('Akai', 'Akai Television', 2, 0));
console.log('Akai Air Cooler:', generateAppCardContent('Akai', 'Akai Air Cooler', 2, 1));
console.log('Bosch Dishwasher:', generateAppCardContent('Bosch', 'Bosch Dishwasher', 3, 0));
