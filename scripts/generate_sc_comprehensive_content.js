// scripts/generate_sc_comprehensive_content.js
// Generates appliance-specific card descriptions, detailed sections, FAQs, and experiences
// for every Service Center page in Kanyakumari.

const { generatorMap } = require('./build_all_sc_appliance_sections.js');

// -------------------------------------------------------------
// 1. Meaningful, non-generic descriptions for cards in "Home Appliances We Service"
// -------------------------------------------------------------
function getCardDescription(cardTitle, brandName) {
  const t = cardTitle.toLowerCase();
  
  if (t.includes('washer dryer') || t.includes('clothes dryer')) {
    return `Condensation heater testing, dryer blower fan servicing, spin drum balancing, and NTC sensor checking for ${cardTitle}.`;
  }
  if (t.includes('dishwasher')) {
    return `Drain pump clearing, spray arm nozzle unblocking, water inlet valve testing, and circulation motor diagnosis for ${cardTitle}.`;
  }
  if (t.includes('chest freezer') || t.includes('deep freezer')) {
    return `Deep freezing diagnostic, thermostat testing, lid gasket seal replacement, and compressor starter relay repair for ${cardTitle}.`;
  }
  if (t.includes('microwave') || t.includes('built-in oven')) {
    return `Magnetron testing, high-voltage diode replacement, glass turntable motor service, and touch keypad repair for ${cardTitle}.`;
  }
  if (t.includes('air purifier')) {
    return `True HEPA H13 and activated carbon filter replacement, PM2.5 laser sensor calibration, and blower motor service for ${cardTitle}.`;
  }
  if (t.includes('air cooler') || t.includes('circulator fan')) {
    return `Submersible water pump replacement, dense honeycomb pad renewal, and multi-speed fan motor servicing for ${cardTitle}.`;
  }
  if (t.includes('water purifier') || t.includes('water cooler') || t.includes('water dispenser')) {
    return `RO membrane replacement, multi-stage sediment/carbon filter changes, booster pump servicing, and UV lamp check for ${cardTitle}.`;
  }
  if (t.includes('geyser') || t.includes('water heater')) {
    return `Heavy-duty heating element descaling, thermostat safety testing, sacrificial anode renewal, and tank leak repair for ${cardTitle}.`;
  }
  if (t.includes('audio') || t.includes('soundbar') || t.includes('speaker')) {
    return `Digital amplifier IC troubleshooting, subwoofer driver testing, power supply repair, and wireless audio channel check for ${cardTitle}.`;
  }
  if (t.includes('chimney') || t.includes('hob') || t.includes('kitchen') || t.includes('mixer')) {
    return `Chimney suction motor degreasing, baffle filter service, gas hob burner spark ignition check, and motor repair for ${cardTitle}.`;
  }
  if (t.includes('smart') || t.includes('connected')) {
    return `IoT wireless module connectivity check, sensor telemetry diagnostic, and smart control board testing for ${cardTitle}.`;
  }
  if (t.includes('washing machine') || t.includes('washer')) {
    return `Drain pump unblocking, inlet water solenoid valve replacement, spin drum balancing, and inverter PCB testing for ${cardTitle}.`;
  }
  if (t.includes('refrigerator') || t.includes('fridge')) {
    return `Cooling thermostat inspection, frost-free defrost timer checking, inverter compressor relay testing, and coil leak repair for ${cardTitle}.`;
  }
  if (t.includes('air conditioner') || t.includes('cassette ac') || t.includes('ductable ac') || t.includes('split ac') || t.includes('window ac')) {
    return `Cooling diagnosis, copper coil leak detection, eco-friendly gas top-up, and outdoor fan capacitor replacement for ${cardTitle}.`;
  }
  if (t.includes('television') || t.includes('tv')) {
    return `LED backlight array replacement, power supply SMPS board repair, display ribbon bonding, and main logic board testing for ${cardTitle}.`;
  }

  return `Doorstep troubleshooting, electrical parameter testing, and genuine compatible spare replacement for ${cardTitle} in Kanyakumari.`;
}

// -------------------------------------------------------------
// 2. Kanyakumari localities pool for experiences
// -------------------------------------------------------------
const localitiesPool = [
  { name: "Suchindram (629704)", zone: "South" },
  { name: "Kottaram (629703)", zone: "South" },
  { name: "Kanyakumari South (629702)", zone: "South" },
  { name: "Vavathurai (629702)", zone: "South" },
  { name: "Vivekanandapuram (629702)", zone: "South" },
  { name: "Kovalam (629702)", zone: "South" },
  { name: "Agastheeswaram (629701)", zone: "South" },
  { name: "Theroor (629704)", zone: "South" },
  { name: "Marungoor (629402)", zone: "South" },
  { name: "Mylaudy (629403)", zone: "South" },
  { name: "Thamaraikulam (629701)", zone: "South" },
  { name: "Mahadanapuram (629702)", zone: "South" },
  { name: "Anjugramam (629401)", zone: "South" },
  { name: "Pazhavilai (629501)", zone: "South" },
  { name: "Thengamputhur (629602)", zone: "South" },
  { name: "Manakkudy (629602)", zone: "South" },
  { name: "Pallam (629601)", zone: "South" },
  { name: "Puthalam (629602)", zone: "South" },
  { name: "Tower Junction Nagercoil (629001)", zone: "Central" },
  { name: "Court Road Nagercoil (629001)", zone: "Central" },
  { name: "WCC Road Nagercoil (629001)", zone: "Central" },
  { name: "Cape Road Junction (629001)", zone: "Central" },
  { name: "Collectorate Nagercoil (629001)", zone: "Central" },
  { name: "Vadasery (629001)", zone: "Central" },
  { name: "Chetti Kulam (629001)", zone: "Central" },
  { name: "Carmel Nagar (629004)", zone: "Central" },
  { name: "Helen Nagar (629001)", zone: "Central" },
  { name: "Vasanth Nagar (629001)", zone: "Central" },
  { name: "NGO Colony Nagercoil (629002)", zone: "Central" },
  { name: "Parakkai (629601)", zone: "South" },
  { name: "Colachel (629251)", zone: "West" },
  { name: "Marthandam (629165)", zone: "West" },
  { name: "Thuckalay (629175)", zone: "West" },
  { name: "Kulasekharam (629161)", zone: "North" },
  { name: "Boothapandi (629852)", zone: "North" }
];

// -------------------------------------------------------------
// 3. Customer Service Experiences Generator (Appliance-Specific)
// -------------------------------------------------------------
const expTemplates = {
  'washing-machine': (brand, loc) => ({
    badge: `${brand} Washing Machine`,
    locName: loc.name,
    heading: `${brand} Fully Automatic Washer Drain & Spin Issue in ${loc.name.split(' ')[0]}`,
    body: `A resident in ${loc.name} reported that their ${brand} washing machine halted mid-cycle with water remaining in the tub. Our doorstep technician removed the lower filter panel, cleared small fabric debris jammed in the drain impeller, tested motor winding resistance, and conducted a full spin cycle test to verify normal drainage.`
  }),
  'refrigerator': (brand, loc) => ({
    badge: `${brand} Refrigerator`,
    locName: loc.name,
    heading: `${brand} Double Door Fridge Bottom Chilling Failure in ${loc.name.split(' ')[0]}`,
    body: `A home in ${loc.name} noticed the freezer freezing solid while the vegetable compartment remained warm. The technician checked the airflow damper and defrost sensor circuit, identified a failed bi-metal thermostat causing ice buildup in the duct, replaced the component, and restored balanced circulation.`
  }),
  'ac': (brand, loc) => ({
    badge: `${brand} Air Conditioner`,
    locName: loc.name,
    heading: `${brand} Inverter Split AC Weak Cooling & Fan Service in ${loc.name.split(' ')[0]}`,
    body: `A customer near ${loc.name} observed room-temperature airflow from their ${brand} 1.5 Ton AC during hot afternoon hours. Inspection showed low condenser fan speed caused by a degraded dual-run capacitor. The technician fitted a compatible heavy-duty capacitor, cleaned condenser coil fins, and verified rapid 16°C discharge temperature.`
  }),
  'tv': (brand, loc) => ({
    badge: `${brand} Smart TV`,
    locName: loc.name,
    heading: `${brand} 43-Inch Smart LED TV Dark Screen Sound OK in ${loc.name.split(' ')[0]}`,
    body: `A family in ${loc.name} had sound working normally while the picture remained completely dark on their ${brand} Smart LED TV. Using a precision LED backlight tester, our technician diagnosed an open circuit in the bottom backlight strip array, installed a matched LED strip set, and restored vibrant display brightness.`
  }),
  'washer-dryer': (brand, loc) => ({
    badge: `${brand} Washer Dryer`,
    locName: loc.name,
    heading: `${brand} Washer Dryer Damp Clothes & Heater Check in ${loc.name.split(' ')[0]}`,
    body: `A resident in ${loc.name} reported that their ${brand} washer dryer finished the wash program normally but clothes remained soaking wet after the 90-minute dry cycle. Our technician checked the heating duct, cleared dense lint accumulation around the blower wheel, tested heating coil resistance (measuring 28 ohms), and replaced a faulty NTC temperature sensor to restore hot condensation drying.`
  }),
  'dishwasher': (brand, loc) => ({
    badge: `${brand} Dishwasher`,
    locName: loc.name,
    heading: `${brand} Dishwasher Drainage & Spray Arm Cleaning in ${loc.name.split(' ')[0]}`,
    body: `A homeowner in ${loc.name} faced standing dirty water at the bottom of their ${brand} dishwasher with an inlet beeping alarm. The technician removed the stainless filter mesh, dislodged hard food deposits blocking the drain pump impeller, cleared calcified spray arm nozzles, and ran an intensive hot cycle to ensure spotless dish cleaning and complete water discharge.`
  }),
  'chest-freezer': (brand, loc) => ({
    badge: `${brand} Chest Freezer`,
    locName: loc.name,
    heading: `${brand} Deep Freezer Temperature Loss & Starter Relay in ${loc.name.split(' ')[0]}`,
    body: `A commercial establishment near ${loc.name} noticed their ${brand} deep freezer clicking repeatedly every few minutes without freezing contents. Our technician tested compressor terminal resistance, diagnosed a burnt PTC starter relay and overload protector, fitted a compatible heavy-duty starter kit, and confirmed temperature dropping rapidly to -18°C.`
  }),
  'microwave-oven': (brand, loc) => ({
    badge: `${brand} Microwave Oven`,
    locName: loc.name,
    heading: `${brand} Convection Microwave No-Heat & Diode Service in ${loc.name.split(' ')[0]}`,
    body: `A customer in ${loc.name} reported that their ${brand} microwave ran with light and turntable spinning but heated zero food. Our technician safely discharged the high-voltage capacitor, tested circuit continuity, replaced a shorted high-voltage rectifier diode, fitted a fresh mica waveguide cover, and confirmed rapid heating of test water within 60 seconds.`
  }),
  'air-purifier': (brand, loc) => ({
    badge: `${brand} Air Purifier`,
    locName: loc.name,
    heading: `${brand} Air Purifier Sensor Calibration & HEPA Renewal in ${loc.name.split(' ')[0]}`,
    body: `A home in ${loc.name} noticed their ${brand} air purifier LED ring permanently stuck on hazardous red. Our technician cleaned the optical laser PM2.5 particle chamber with pressurized air, calibrated the sensor module, installed a genuine composite True HEPA H13 filter, and verified clean air delivery reading below 15 μg/m³.`
  }),
  'air-cooler': (brand, loc) => ({
    badge: `${brand} Air Cooler`,
    locName: loc.name,
    heading: `${brand} Desert Cooler Submersible Pump & Pad Service in ${loc.name.split(' ')[0]}`,
    body: `A family in ${loc.name} had their ${brand} air cooler blowing dry warm air due to water not flowing over the cooling pads. The technician removed calcified mineral deposits from the water distribution channels, replaced a seized submersible water pump, treated the honeycomb pads, and verified strong chilled airflow.`
  }),
  'water-purifier': (brand, loc) => ({
    badge: `${brand} Water Purifier`,
    locName: loc.name,
    heading: `${brand} RO Purifier Membrane Replacement & TDS Check in ${loc.name.split(' ')[0]}`,
    body: `A resident in ${loc.name} observed slow purified water flow and high TDS output from their ${brand} RO+UV system. The technician tested borewell input TDS (680 ppm), flushed the pre-sediment filter, installed a new 80 GPD thin-film composite RO membrane, and balanced pure water TDS to an optimal 95 ppm with clear mineral taste.`
  }),
  'water-heater': (brand, loc) => ({
    badge: `${brand} Geyser`,
    locName: loc.name,
    heading: `${brand} 15L Storage Geyser MCB Tripping & Element Change in ${loc.name.split(' ')[0]}`,
    body: `A homeowner in ${loc.name} reported that turning on their ${brand} water heater instantly tripped the main house MCB switch. Using an insulation megohmmeter, our technician detected electrical earth leakage in the corroded heating element, descaled internal hard water sediment, installed a new 2kW Incoloy element with fresh gasket, and verified safe heating.`
  }),
  'audio-system': (brand, loc) => ({
    badge: `${brand} Soundbar Audio`,
    locName: loc.name,
    heading: `${brand} Soundbar HDMI eARC No Sound & Power Board Service in ${loc.name.split(' ')[0]}`,
    body: `A resident in ${loc.name} had their ${brand} soundbar powering on but producing zero audio through TV HDMI ARC. The technician diagnosed a voltage regulator fault on the input digital signal processor board, repaired the circuit, resynced the wireless subwoofer, and confirmed punchy multi-channel Dolby sound output.`
  }),
  'kitchen-appliances': (brand, loc) => ({
    badge: `${brand} Kitchen Chimney`,
    locName: loc.name,
    heading: `${brand} Auto-Clean Chimney Suction & Motor Degreasing in ${loc.name.split(' ')[0]}`,
    body: `A household in ${loc.name} noticed heavy oil dripping and weak smoke suction from their ${brand} kitchen chimney. Our technician dismantled the blower casing, performed ultrasonic degreasing on the centrifugal fan, cleaned the oil collector cup, tested the gesture sensor control, and restored full 1200 m³/h suction capacity.`
  }),
  'smart-appliances': (brand, loc) => ({
    badge: `${brand} Smart Appliance`,
    locName: loc.name,
    heading: `${brand} Smart Appliance Wi-Fi Bridge & Controller Repair in ${loc.name.split(' ')[0]}`,
    body: `A resident in ${loc.name} had their ${brand} smart appliance displaying offline on the smartphone controller app. The technician tested the 2.4GHz IoT communication bridge module, updated controller firmware via localized flash tool, reconnected the wireless bridge to the home router, and verified real-time telemetry.`
  })
};

function generateBrandExperiences(brandSlug, brandName, categories) {
  const exps = [];
  let locIndex = (brandSlug.charCodeAt(0) + brandSlug.length) % localitiesPool.length;

  for (const cat of categories) {
    const loc = localitiesPool[locIndex % localitiesPool.length];
    locIndex = (locIndex + 7) % localitiesPool.length; // spread localities

    const tmpl = expTemplates[cat] || expTemplates['washing-machine'];
    exps.push(tmpl(brandName, loc));
  }

  return exps;
}

// -------------------------------------------------------------
// 4. Appliance-Specific FAQs Generator for Service Center Pages
// -------------------------------------------------------------
const faqTemplates = {
  'washing-machine': (brand) => ({
    q: `What causes my ${brand} washing machine to stop draining or spinning during the cycle?`,
    a: `Drainage and spinning issues in ${brand} washing machines are commonly caused by a clogged coin trap filter, a malfunctioning drain pump motor, a worn motor belt, or an unbalanced load sensor. Our Kanyakumari technician inspects the pump impeller, tests the water pressure switch, and checks the inverter PCB. Approximate replacement cost for a drain pump may be around ₹700–₹1,500 depending on the model.`
  }),
  'refrigerator': (brand) => ({
    q: `Why is the freezer in my ${brand} refrigerator freezing well while the lower compartment stays warm?`,
    a: `When the bottom compartment of a frost-free ${brand} refrigerator loses cooling, the most frequent cause is ice accumulation choking the internal air duct, a failed defrost timer/bi-metal thermostat, or a stuck evaporator fan motor. Technicians test defrost circuit continuity with a multimeter. Replacement of a bi-metal sensor or defrost timer approximately costs ₹550–₹1,500 depending on model specifications.`
  }),
  'ac': (brand) => ({
    q: `What causes my ${brand} air conditioner to blow warm or room-temperature air instead of cooling?`,
    a: `Warm airflow from a ${brand} AC is typically caused by a depleted dual-run fan capacitor, choked outdoor condenser coils, low refrigerant gas pressure due to a copper pipe flare leak, or an outdoor compressor PCB communication error. Our doorstep technician measures gas pressure using manifold gauges and tests electrical parameters. Capacitor replacement approximately ranges ₹500–₹1,200, while coil brazing and gas top-up approximately costs ₹1,800–₹3,200 depending on tonnage and gas type.`
  }),
  'tv': (brand) => ({
    q: `Why does my ${brand} Smart LED TV have clear audio but the screen remains completely dark?`,
    a: `Audio without picture on ${brand} LED TVs usually indicates an open circuit in the internal LED backlight strip array or a failure in the backlight LED driver circuit on the power SMPS board. If a flashlight held against the screen reveals faint moving images, the LCD panel is healthy and only the backlight requires replacement. Backlight strip array replacement approximately ranges ₹1,000–₹3,000+ depending on screen size (32\" to 65\").`
  }),
  'washer-dryer': (brand) => ({
    q: `Why does my ${brand} washer dryer complete the wash program but leave clothes damp after drying?`,
    a: `In ${brand} washer dryers, poor drying performance usually points to dense lint accumulation in the condensation air duct, a weak or burned drying heating element, a failed NTC temperature sensor, or a malfunctioning condenser blower fan. Our Kanyakumari technician checks element resistance (typically 25–35 ohms) and clears duct blockages. Approximate replacement cost for heating elements ranges ₹950–₹2,200 depending on the model wattage.`
  }),
  'dishwasher': (brand) => ({
    q: `Why is there standing water at the bottom of my ${brand} dishwasher tub after the wash cycle?`,
    a: `Standing water inside a ${brand} dishwasher occurs when the drain pump impeller is jammed with food particles, the drain discharge hose is kinked, or the non-return check valve is stuck. Another common cause is blocked spray arm nozzles preventing effective wash pressure. Drain pump servicing or replacement approximately costs around ₹850–₹1,900 depending on the place-setting capacity and model.`
  }),
  'chest-freezer': (brand) => ({
    q: `Why is my ${brand} chest freezer running continuously without reaching deep sub-zero temperatures?`,
    a: `Continuous running without deep freezing in a ${brand} chest freezer usually indicates a worn mechanical thermostat, refrigerant gas leakage along the internal coil, or a damaged magnetic lid rubber gasket allowing humid coastal air to enter. Our technician checks suction line pressure and thermostat calibration. Thermostat replacement approximately costs around ₹550–₹1,350 depending on the freezer model.`
  }),
  'microwave-oven': (brand) => ({
    q: `What causes my ${brand} microwave oven to run and spin without heating the food?`,
    a: `When a ${brand} microwave operates normally but generates zero heat, the issue is almost always in the high-voltage circuit—a failed magnetron tube, a shorted high-voltage diode, or a blown high-voltage fuse. Our technician safely discharges the high-voltage capacitor before testing. High-voltage diode replacement approximately costs ₹250–₹550, while magnetron replacement ranges ₹1,200–₹2,800 depending on model wattage.`
  }),
  'air-purifier': (brand) => ({
    q: `How often should filters be replaced on my ${brand} air purifier in Kanyakumari?`,
    a: `Due to road dust and coastal humidity along major Kanyakumari transit corridors, composite True HEPA H13 and activated carbon filters on ${brand} air purifiers typically require renewal every 6 to 12 months depending on daily operating hours. If the PM2.5 air quality indicator remains red, our technician cleans the laser dust sensor chamber and resets the filter counter. Replacement filter cartridges approximately range ₹1,200–₹2,800.`
  }),
  'air-cooler': (brand) => ({
    q: `What causes my ${brand} air cooler to stop pumping water over the honeycomb pads?`,
    a: `Hard water mineral calcification in Kanyakumari borewell supplies often jams the magnetic impeller of the submersible water pump in ${brand} air coolers. If descaling the pump housing does not restore water flow, a new thermal-overload protected submersible pump is installed. Submersible pump replacement approximately costs ₹350–₹850 depending on cooler tank capacity.`
  }),
  'water-purifier': (brand) => ({
    q: `When should the RO membrane and filters be serviced on my ${brand} water purifier?`,
    a: `In Kanyakumari, pre-sediment filters should be washed or changed every 3–4 months, while carbon filters and RO membranes are tested with a digital TDS meter every 12 months. When input TDS exceeds 500 ppm, membrane efficiency naturally reduces. A complete multi-stage filter service approximately ranges ₹750–₹1,600, while a certified 75/100 GPD RO membrane approximately costs ₹1,100–₹2,400 depending on the model.`
  }),
  'water-heater': (brand) => ({
    q: `Why does my ${brand} geyser take a very long time to heat water or trip the home MCB?`,
    a: `Slow heating in ${brand} water heaters is caused by thick mineral scale insulating the copper heating element, while MCB tripping indicates an electrical short circuit inside the heating element sheath. Our technician tests insulation resistance with a megohmmeter. Replacing the heating element and sacrificial magnesium anode rod approximately costs around ₹650–₹1,600 depending on tank capacity and element wattage.`
  }),
  'audio-system': (brand) => ({
    q: `Why is my ${brand} soundbar not producing sound when connected through HDMI ARC?`,
    a: `HDMI ARC audio dropouts on ${brand} soundbars can stem from CEC handshake misconfigurations, damaged HDMI cables, or a faulty digital audio receiver IC on the soundbar's main logic board. Our technician checks circuit voltages on the digital signal processor and tests optical input. Board-level audio repair approximately ranges ₹750–₹2,200 depending on the audio system model.`
  }),
  'kitchen-appliances': (brand) => ({
    q: `Why has the smoke suction power of my ${brand} kitchen chimney dropped significantly?`,
    a: `Reduced suction in a ${brand} kitchen chimney is primarily caused by grease and sticky oil fumes coating the centrifugal blower impeller blades and baffle filters. In auto-clean models, a malfunctioning heating heating coil can prevent oil liquefaction. Ultrasonic degreasing and blower servicing approximately ranges ₹600–₹1,400, while motor replacement may cost ₹1,400–₹3,200 depending on suction capacity.`
  }),
  'smart-appliances': (brand) => ({
    q: `Why is my ${brand} smart connected appliance showing offline on the mobile application?`,
    a: `Offline status on ${brand} smart appliances is typically caused by Wi-Fi module handshake loss, router 2.4GHz frequency mismatches, or a corrupted firmware partition on the telemetry controller board. Our technician inspects the IoT bridge board and updates network parameters. Approximate module repair costs around ₹1,200–₹2,600 depending on the model.`
  })
};

function generateBrandFaqs(brandSlug, brandName, categories) {
  const faqs = [];

  // Generate an FAQ for every displayed category
  for (const cat of categories) {
    const tmpl = faqTemplates[cat];
    if (tmpl) {
      faqs.push(tmpl(brandName));
    }
  }

  // Add 2 brand-level FAQs on genuine parts & pricing
  faqs.push({
    q: `How does the technician verify spare-part compatibility for my ${brandName} appliance in Kanyakumari?`,
    a: `Our technician inspects the model number, serial code, and technical specifications printed on the rating plate of your ${brandName} appliance before recommending any component. Genuine compatible spares—such as motors, valves, relays, heating elements, and PCBs—are cross-matched to the exact production series to ensure long-term durability and proper electrical compatibility.`
  });

  faqs.push({
    q: `What factors determine the approximate repair cost for ${brandName} appliances in Kanyakumari?`,
    a: `Repair costs depend strictly on the appliance category, model capacity, specific component requiring replacement, and labor involved. All pricing estimates given are transparent approximate ranges (such as ₹450–₹2,500+ depending on the part). A clear inspection report and quotation are provided at your doorstep in Kanyakumari before any repair work starts.`
  });

  return faqs;
}

// -------------------------------------------------------------
// 5. Generate All Appliance Sections HTML for a Brand
// -------------------------------------------------------------
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
  getCardDescription,
  generateBrandExperiences,
  generateBrandFaqs,
  generateAllBrandApplianceSections
};
