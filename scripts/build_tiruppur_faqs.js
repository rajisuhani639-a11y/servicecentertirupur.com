// scripts/build_tiruppur_faqs.js
// Generates rich, search-intent driven Master FAQs for all 174 Tirupur pages.
// Includes:
// - Comprehensive IFB Washing Machine FAQ suite (17 distinct search intent questions)
// - 40-50 extra PAA search intent questions distributed across categories
// - Explicit parts and pricing breakdown (Visiting fee, Labour fee, Spare part cost, Total estimated cost)
// - Realistic indicative market estimates (clearly labeled as indicative, not official manufacturer prices)
// - Brand and locality-specific troubleshooting
// - Independent service provider disclaimer

const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_pages_data.json'), 'utf8'));
const localitiesData = require('./tiruppur_localities.js');

const allLocs = [
  ...localitiesData.east,
  ...localitiesData.west,
  ...localitiesData.north,
  ...localitiesData.south
];

function getLocality(idx) {
  return allLocs[(idx * 7 + 23) % allLocs.length].name;
}

// Pricing reference data (market ranges)
const PRICING_DATA = {
  ac: {
    visiting: "₹199 – ₹299 (adjusted into final bill upon service approval)",
    pcb: "₹1,800 – ₹3,800 (component-level repair) / ₹4,500 – ₹9,500 (new inverter board)",
    capacitor: "₹450 – ₹850 (part + fitting)",
    gasRefill: "₹2,000 – ₹3,200 (including leak detection, nitrogen pressure test, vacuuming & R32/R410A gas)",
    deepClean: "₹599 – ₹899 (high-pressure foam jet wash with service jacket)",
    fanMotor: "₹1,100 – ₹1,850 (condenser or blower motor replacement)"
  },
  wm: {
    visiting: "₹199 – ₹299 (adjusted into final bill upon service approval)",
    drainPump: "₹650 – ₹1,250 (part + labour)",
    inletValve: "₹500 – ₹950 (dual/triple solenoid valve)",
    doorLock: "₹650 – ₹1,150 (PTC bi-metal door interlock switch)",
    drumBearing: "₹1,500 – ₹2,600 (tub bearings, oil seal & shaft balancing)",
    pcb: "₹1,400 – ₹2,800 (micro-controller / triac repair) / ₹3,800 – ₹7,200 (new board)",
    pulsator: "₹750 – ₹1,400 (heavy-duty wash plate with metal center hub)"
  },
  fridge: {
    visiting: "₹199 – ₹299 (adjusted into final bill upon service approval)",
    compressorRelay: "₹550 – ₹950 (PTC relay + overload protector)",
    thermostat: "₹650 – ₹1,150 (capillary thermostat replacement)",
    gasRefill: "₹1,800 – ₹2,600 (leak arrest, vacuuming & R134a/R600a charging)",
    fanMotor: "₹750 – ₹1,350 (evaporator circulation fan motor)",
    doorGasket: "₹750 – ₹1,400 (magnetic airtight door beading)"
  },
  tv: {
    visiting: "₹199 – ₹299 (adjusted into final bill upon service approval)",
    backlight: "₹1,400 – ₹2,900 (complete original LED backlight strip set)",
    powerBoard: "₹1,200 – ₹2,400 (SMPS power board component repair)",
    motherboard: "₹1,800 – ₹3,800 (logic board repair/reprogramming)",
    panelLineFix: "₹1,500 – ₹2,800 (T-CON / COF bonding bypass)"
  }
};

// 40+ Extra Search Intent Items pool
const extraSearchIntentPool = [
  // AC Search Intents (10 items)
  {
    cat: 'ac',
    q: "Why does my AC blow normal room-temperature air during hot Tirupur afternoons?",
    a: "When outdoor temperatures rise above 38°C in Tirupur, condenser fins choked with street dust and textile fluff prevent heat release, causing the compressor to cut off on thermal overload. A run capacitor losing capacitance (below 30µF) also stops the compressor from starting."
  },
  {
    cat: 'ac',
    q: "How often should split AC filters and coils be cleaned in Tirupur?",
    a: "Due to fine airborne cotton lint and vehicle dust along major corridors like Avinashi Road and P.N. Road, indoor mesh filters should be rinsed every 3 to 4 weeks, and a professional high-pressure wet jet service is recommended every 5 to 6 months."
  },
  {
    cat: 'ac',
    q: "What is the difference between R32 and R410A gas refilling?",
    a: "R32 is a single-component eco-friendly refrigerant with higher energy efficiency and can be topped up, whereas R410A is a dual-gas blend (50/50 R32 and R125) that requires complete system discharge, leak arrest, vacuuming, and refilling in liquid state."
  },
  {
    cat: 'ac',
    q: "Why is water dripping continuously from my AC indoor unit onto the bedroom wall?",
    a: "Indoor water dripping is typically caused by a clogged condensate drain trough filled with fungal slime, an improperly sloped drain pipe, or ice formation on evaporator coils melting faster than the tray can drain."
  },
  {
    cat: 'ac',
    q: "Can an AC inverter PCB board be repaired without buying an expensive new unit?",
    a: "Yes. In about 75% of cases, inverter PCB failure is caused by burnt IGBT power modules, blown bridge rectifiers, or dry solder on communication tracks. Component-level repair costs ₹1,800–₹3,400, saving over 60% compared to purchasing a new factory board."
  },
  {
    cat: 'ac',
    q: "Why does my AC outdoor unit vibrate violently and make a buzzing noise?",
    a: "Outdoor unit vibration is usually caused by cracked anti-vibration rubber pads on mounting brackets, an unbalanced condenser fan blade with chipped edges, or a loose compressor mounting grommet."
  },
  {
    cat: 'ac',
    q: "How long should vacuum pump testing run before AC gas charging?",
    a: "A professional two-stage vacuum pump should run for at least 20 to 30 minutes to pull the system down to 500 microns, ensuring complete removal of internal moisture and atmospheric air that could otherwise acidify compressor oil."
  },
  {
    cat: 'ac',
    q: "Why does the AC smell like a wet cloth or stale moisture when turned on?",
    a: "A musty damp smell is caused by bacterial and mold growth on the moist evaporator fins and inside the dark blower wheel compartment. High-pressure chemical foam cleaning neutralizes this fungal growth and eliminates odor."
  },
  {
    cat: 'ac',
    q: "What causes copper cooling pipes to freeze and form thick white ice?",
    a: "Ice on the narrow liquid copper line indicates low refrigerant gas pressure, while ice on the thicker suction pipe and indoor coil indicates severely restricted airflow caused by clogged filters or a stalled blower fan."
  },
  {
    cat: 'ac',
    q: "Is a voltage stabilizer necessary for 5-star inverter ACs in Tirupur?",
    a: "While modern inverter ACs have built-in low-voltage operation (160V–260V), industrial areas in Tirupur frequently experience sudden high-voltage spikes and neutral surges. A dedicated digital stabilizer provides crucial surge protection for the expensive inverter PCB."
  },

  // Washing Machine Search Intents (12 items)
  {
    cat: 'washing-machine',
    q: "Why does my washing machine shake violently and jump during the spin cycle?",
    a: "Violent shaking during spin is caused by unevenly distributed laundry, worn-out hydraulic suspension dampers, weak tub balance springs, or broken drum spider arms. Ensuring level feet and replacing weak suspension rods restores stability."
  },
  {
    cat: 'washing-machine',
    q: "What causes white chalky powder marks on dark clothes after washing in Tirupur?",
    a: "Tirupur borewell water in areas like Nallur and Muthanampalayam contains high dissolved calcium and magnesium salts. Hard water prevents detergent from dissolving completely, leaving mineral scale deposits on fabric. Periodic descaling and using liquid detergent resolves this."
  },
  {
    cat: 'washing-machine',
    q: "Why is water entering the drum very slowly even when the tap is fully open?",
    a: "Slow water filling is usually caused by mineral scaling or rust particles clogging the fine mesh filter inside the water inlet solenoid valve. Cleaning the mesh filter or replacing the scaled valve restores normal flow."
  },
  {
    cat: 'washing-machine',
    q: "How can I open a front load washing machine door that is jammed shut?",
    a: "Never force the door handle, as the plastic latch will snap. Switch off the machine and wait 3 minutes for the thermal PTC lock to cool. If still stuck, gently pull the emergency door release pull-cord located next to the bottom drain filter."
  },
  {
    cat: 'washing-machine',
    q: "Why does my washing machine trip the home MCB breaker when starting?",
    a: "Immediate MCB tripping indicates an electrical short circuit or earth leakage, most commonly caused by a burnt heating element in front load washers, shorted motor windings, or water leaking onto electrical terminals."
  },
  {
    cat: 'washing-machine',
    q: "How often should I use descaling powder in my washing machine?",
    a: "In Tirupur's hard water areas, a tub clean cycle with 100g of citric acid-based descaling powder should be performed every 6 to 8 weeks. This removes limescale from the outer tub, heater coil, and drum spider, preventing motor overload."
  },
  {
    cat: 'washing-machine',
    q: "What is the difference between direct drive and belt drive washing machine repair?",
    a: "Belt-drive machines use a belt and pulley system where worn belts or slipping motor pulleys are inexpensive to replace. Direct-drive machines have the motor mounted directly onto the drum shaft; repairs typically involve the hall position sensor or stator coils."
  },
  {
    cat: 'washing-machine',
    q: "Why does the washing machine drain pump run continuously without stopping?",
    a: "A drain pump running continuously usually indicates an anti-flood safety float switch activated at the base of the machine due to an internal water leak, or a faulty drain triac on the main control PCB."
  },
  {
    cat: 'washing-machine',
    q: "Why are my washed clothes smelling sour or moldy?",
    a: "Moldy odor is caused by detergent residue and fabric softener buildup inside the rubber door bellow gasket and behind the outer drum. Leaving the door slightly ajar after washes and running a monthly 60°C tub clean cycle prevents mold growth."
  },
  {
    cat: 'washing-machine',
    q: "What causes a loud metallic rumbling or grinding noise when the drum turns?",
    a: "A grinding noise when spinning the drum by hand indicates worn-out tub bearings and a damaged oil seal. Replacing the dual bearings and water seal prevents water from leaking into the motor and restores silent spinning."
  },
  {
    cat: 'washing-machine',
    q: "Can a faulty washing machine pressure switch cause overflow?",
    a: "Yes. The analog pressure sensor measures water level via air pressure in a thin tube. If this tube has a pinhole leak or is clogged with detergent foam, the PCB cannot detect the water level and continues filling until the tub overflows."
  },
  {
    cat: 'washing-machine',
    q: "Is it worth repairing an 8-year-old washing machine with drum bearing failure?",
    a: "If the outer tub is screw-type (serviceable) and the electronic control board and motor are in good condition, replacing bearings costs ₹1,500–₹2,500 and extends machine life by another 4 to 6 years, making it very economical compared to a new ₹25,000 unit."
  },

  // Refrigerator Search Intents (10 items)
  {
    cat: 'fridge',
    q: "Why are the side outer walls of my refrigerator getting very hot?",
    a: "Modern frost-free refrigerators use side-wall condenser coils (skin condensers) rather than an exposed rear grill to dissipate heat. It is completely normal for side walls to feel warm (40°C–45°C), but leaving at least 3 inches of air clearance from the wall is essential."
  },
  {
    cat: 'fridge',
    q: "Why is the freezer freezing rock-hard ice while the lower fridge compartment is warm?",
    a: "This classic frost-free issue occurs when the defrost heater, bimetal sensor, or defrost timer fails. Frost builds up into a solid block of ice inside the cooling chamber, choking the air passage damper that directs cold breeze to the lower food shelves."
  },
  {
    cat: 'fridge',
    q: "What does it mean when the fridge compressor clicks every few minutes without starting?",
    a: "A clicking sound every 2 to 3 minutes indicates the compressor motor is trying to start but failing, causing the thermal overload protector (OLP) to trip. This is usually caused by a burnt PTC start relay or a weak running capacitor."
  },
  {
    cat: 'fridge',
    q: "Why is water collecting inside the vegetable crisper box?",
    a: "Melted frost water normally flows down an internal drain hole to an evaporation tray over the compressor. If food debris or fungal slime blocks this drain hole, water overflows down the interior rear wall and collects under the vegetable drawer."
  },
  {
    cat: 'fridge',
    q: "How to know if a refrigerator has lost its refrigerant gas?",
    a: "If the compressor is running continuously with a steady hum, the freezer fan is blowing air, but both freezer and fridge compartments remain at room temperature with the rear condenser pipes cold, the system has developed a refrigerant leak."
  },
  {
    cat: 'fridge',
    q: "How should I set the refrigerator temperature dial in Tirupur weather?",
    a: "During hot dry summer months (March–June), set the thermostat dial to Medium-High (4 or 5). During the monsoon and winter months, set it to Medium-Low (2 or 3) to prevent over-chilling and reduce compressor workload."
  },
  {
    cat: 'fridge',
    q: "What causes a refrigerator door to pop open on its own?",
    a: "A door opening on its own is caused by an unlevel cabinet tilted forward, food containers obstructing the shelves, or hardened magnetic door rubber beading that has lost its flexibility. Re-aligning the front leveling feet usually resolves this."
  },
  {
    cat: 'fridge',
    q: "Can a smart inverter refrigerator compressor be tested without the PCB?",
    a: "Inverter compressors run on three-phase variable frequency DC voltage (U, V, W terminals) and cannot be directly connected to 230V AC mains. Technicians use a digital inverter tester or measure terminal resistance (typically 8–15 ohms equal across all 3 pins)."
  },
  {
    cat: 'fridge',
    q: "Why is thick frost forming on the outside of packaged foods in the freezer?",
    a: "Frost on packages occurs when warm humid room air leaks past a deformed door gasket seal and condenses instantly on frozen items. Checking gasket seal tightness using a paper slip test identifies the air leak."
  },
  {
    cat: 'fridge',
    q: "Is it safe to transport a refrigerator lying flat on its side?",
    a: "Transporting a fridge horizontally causes compressor oil to flow into the cooling copper coils, which can cause a severe capillary choke upon restart. If transported flat, keep the fridge upright for at least 8 to 12 hours before plugging in."
  },

  // TV Search Intents (10 items)
  {
    cat: 'tv',
    q: "Why does my LED TV have sound and channel changes but the screen is completely black?",
    a: "This is the most common LED TV symptom and is caused by failed LED backlight strips inside the display panel. Shining a mobile flashlight close to the dark screen will reveal faint image outlines, confirming the LCD panel is fine and only backlight strips need replacement."
  },
  {
    cat: 'tv',
    q: "Can thin horizontal lines on an LED TV screen be repaired without replacing the panel?",
    a: "Yes. Horizontal lines caused by T-CON timing board signal distortion, ribbon cable oxidation, or gate driver track resistance can often be fixed using micro-soldering, track bypass, or T-CON board replacement without changing the costly LCD panel."
  },
  {
    cat: 'tv',
    q: "Why is the standby red indicator light blinking continuously and the TV won't turn on?",
    a: "A blinking standby LED is a self-diagnostic error signal. It indicates the power supply detected an over-voltage, shorted secondary diode, or blown backlight circuit, entering protection mode to prevent component fire."
  },
  {
    cat: 'tv',
    q: "Why does my Smart TV keep disconnecting from home Wi-Fi?",
    a: "Frequent Wi-Fi disconnections on Smart TVs can be caused by router dual-band 2.4GHz/5GHz band steering conflicts, outdated TV system firmware, or a failing internal USB Wi-Fi module on the television chassis."
  },
  {
    cat: 'tv',
    q: "How long does a new set of LED TV backlight strips last?",
    a: "A brand-new set of OEM-spec copper-substrate LED backlight strips installed with proper thermal tape and adjusted driver current typically lasts 4 to 6 years of daily household viewing."
  },
  {
    cat: 'tv',
    q: "Why is my Smart TV stuck on the Android or brand logo and rebooting in a loop?",
    a: "A boot-loop issue is caused by corrupted operating system cache, a failed background update, or degraded eMMC flash storage sectors on the main motherboard. Re-flashing factory firmware via USB programmer resolves this in most cases."
  },
  {
    cat: 'tv',
    q: "Can HDMI ports burnt by lightning or power surge be repaired?",
    a: "Yes. The HDMI switch controller IC on the mainboard can be de-soldered and replaced using hot air rework stations. Our technicians test ESD protection diodes and replace damaged HDMI receiver chips."
  },
  {
    cat: 'tv',
    q: "Why does the TV sound crackle or distort at higher volume levels?",
    a: "Crackling audio is caused by torn speaker paper cones due to age, loose cabinet mounting screws resonating with bass frequencies, or a failing audio amplifier IC on the mainboard."
  },
  {
    cat: 'tv',
    q: "Is it worth repairing an LED TV with a physically cracked screen?",
    a: "No. If the internal glass panel is physically broken with spiderweb cracks or color bleed, panel replacement accounts for 75%–85% of a new TV's price. In this specific scenario, buying a new television is financially wiser."
  },
  {
    cat: 'tv',
    q: "Why do bright white circular spots appear across the TV picture?",
    a: "White circular spots (light halos) occur when optical acrylic lens caps glued over individual backlight LEDs come loose and fall off onto the reflective sheet. Re-affixing the lenses or installing a fresh backlight set eliminates halos."
  }
];

// Special IFB FAQ generator (satisfies Requirement 7 & 9)
function getIfbWashingMachineFaqs(loc) {
  return [
    {
      q: "What are the standard service visit and inspection charges for IFB washing machines in Tirupur?",
      a: "Our doorstep inspection and diagnosis charge across Tirupur neighborhoods (including Nallur, Kumar Nagar, and Avinashi Road) is ₹199 to ₹299. If you proceed with the repair or part replacement, this visiting fee is fully adjusted into the final invoice."
    },
    {
      q: "What is the typical repair cost for common IFB washing machine faults?",
      a: "Typical indicative market repair estimates include: drain pump replacement ₹850–₹1,350; water inlet valve replacement ₹650–₹1,050; door lock switch ₹750–₹1,250; drum spider arm repair ₹1,800–₹3,200; and PCB component-level repair ₹1,400–₹2,600."
    },
    {
      q: "Why is my IFB washing machine not starting when I press the Start button?",
      a: "If the power light is ON but the machine won't start the cycle, the most common culprit is the door interlock safety switch failing to confirm latching, a stuck child lock, or low water pressure triggering the inlet safety timeout."
    },
    {
      q: "Why is water not draining from my IFB washing machine and stopping with an error?",
      a: "Drainage failure is primarily caused by coins, safety pins, or heavy fabric lint trapped inside the bottom drain pump filter. In some cases, hard water sediment jams the pump impeller or the drain motor winding has burnt out."
    },
    {
      q: "Why is my IFB washing machine not spinning or leaving clothes soaking wet?",
      a: "If the machine washes but refuses to spin, the control board has likely detected an unbalanced load, the drain pump has not fully emptied water within the timeout period, or the drive belt / motor carbon brushes are worn out."
    },
    {
      q: "Why is my IFB front load washing machine making a loud rumbling noise?",
      a: "A loud airplane or helicopter rumbling noise during high-speed spinning indicates failed drum bearings and a compromised water seal. If left unaddressed, leaking water can corrode the drum spider and short-circuit the drive motor."
    },
    {
      q: "What causes excessive vibration and violent shaking in an IFB washing machine?",
      a: "Excessive shaking is caused by unbalanced leveling feet on uneven flooring, weakened hydraulic suspension dampers, worn-out tub stabilizer springs, or transport transit bolts that were never removed during installation."
    },
    {
      q: "How to fix water inlet problems in an IFB washing machine in Tirupur?",
      a: "In Tirupur's hard water areas, calcium scaling blocks the fine plastic mesh inside the inlet hose connector. Technicians clean the filter mesh and test the solenoid valve coil resistance using a multi-meter to ensure proper flow."
    },
    {
      q: "Why is the door of my IFB front load washing machine locked and refusing to open?",
      a: "IFB machines use a thermal bi-metal door lock that remains locked for 2 to 3 minutes after cycle completion. If it remains stuck, water may still be present in the tub, or the PTC lock switch has fused. Our technicians can manually release the door without breaking the handle."
    },
    {
      q: "What do IFB washing machine error codes mean (dE, dLEr, E01, E02, E03)?",
      a: "Common IFB codes: dE / dLEr indicates a door lock or latch issue; E01 / Er01 indicates no water filling within 5 minutes; E02 indicates drainage timeout; E03 indicates water temperature or heater element fault; and E04 indicates motor rotation or tachometer sensor mismatch."
    },
    {
      q: "How much does an IFB washing machine PCB replacement or repair cost?",
      a: "Component-level PCB repair (replacing blown triacs, relays, or power ICs) typically ranges between ₹1,400 and ₹2,600 with warranty. A brand-new factory control board ranges from ₹4,500 to ₹7,800 depending on the model."
    },
    {
      q: "What is the replacement cost for an IFB washing machine drum and spider?",
      a: "If the drum spider arm has cracked due to hard water corrosion, replacing the spider and bearings costs an indicative ₹1,800 to ₹3,200. Complete inner stainless-steel drum assembly replacement typically costs ₹4,500 to ₹7,200."
    },
    {
      q: "What is the average lifespan of an IFB washing machine in Tirupur?",
      a: "With periodic descaling every 2 months and timely replacement of wear-and-tear items (belts, door gaskets, drain pump filters), an IFB washing machine easily lasts 10 to 14 years of reliable household service in Tirupur."
    },
    {
      q: "How should I maintain my IFB washing machine to prevent breakdowns?",
      a: "Run a monthly Tub Clean cycle with descaling powder, clean the bottom coin filter every 3 weeks, leave the door slightly ajar after washes to prevent rubber gasket mold, and use a dedicated 16A socket with proper earthing."
    },
    {
      q: "Does your service center provide official IFB manufacturer warranty repairs?",
      a: "No. We are an independent multi-brand doorstep repair service provider specializing in post-warranty IFB appliance care. For products within the initial manufacturer warranty period, customers should reach out to the official brand customer care. We provide independent, affordable, same-day repairs using tested OEM-compatible parts."
    },
    {
      q: "Are IFB repair visits and checking free of cost?",
      a: "Official free service coupons apply only during the brand warranty period for authorized centers. For independent post-warranty service across Tirupur, a nominal inspection fee of ₹199–₹299 applies, which is deducted from your repair bill if you proceed with our service."
    },
    {
      q: "How do I book an IFB doorstep service technician in Tirupur?",
      a: "You can book easily by calling our local helpline at +91 92115 12088 or sending a WhatsApp message with your appliance issue and Tirupur locality. We confirm your slot and dispatch a technician within 2 to 4 hours."
    }
  ];
}

// Master FAQ builder
const masterFaqs = {};
let totalPagesFaq = 0;

pages.forEach((p, idx) => {
  const brand = (p.brand && !p.brand.startsWith('All') && p.brand !== 'Home Appliance Multi-Brand') ? p.brand : 'Multi-Brand';
  const cat = p.category;
  const key = p.newFile;
  const loc = getLocality(idx);

  const groups = [];

  // Group 1: Technical & Fault Troubleshooting (Brand & Category specific)
  if (cat === 'washing-machine' && p.brandSlug === 'ifb') {
    // Specialized IFB Washing Machine FAQs (Requirement 7)
    const ifbFaqs = getIfbWashingMachineFaqs(loc);
    groups.push({
      title: "IFB Washing Machine Technical Troubleshooting & Error Codes",
      items: ifbFaqs.slice(2, 10)
    });
    groups.push({
      title: "IFB Washing Machine Service Charges & Spare Parts Costs",
      items: [ifbFaqs[0], ifbFaqs[1], ifbFaqs[10], ifbFaqs[11], ifbFaqs[12]]
    });
    groups.push({
      title: "IFB Warranty, Maintenance & Doorstep Booking in Tirupur",
      items: [ifbFaqs[13], ifbFaqs[14], ifbFaqs[15], ifbFaqs[16]]
    });
  } else if (cat === 'service-center' && p.brandSlug === 'ifb') {
    const ifbFaqs = getIfbWashingMachineFaqs(loc);
    groups.push({
      title: "IFB Home Appliance Service & Common Faults in Tirupur",
      items: [ifbFaqs[2], ifbFaqs[3], ifbFaqs[4], ifbFaqs[5], ifbFaqs[8], ifbFaqs[9]]
    });
    groups.push({
      title: "IFB Repair Estimates & Spare Parts Price Guide",
      items: [ifbFaqs[0], ifbFaqs[1], ifbFaqs[10], ifbFaqs[11]]
    });
    groups.push({
      title: "Service Terms, Warranty Disclaimer & Booking Process",
      items: [ifbFaqs[14], ifbFaqs[15], ifbFaqs[16]]
    });
  } else {
    // General Category / Brand FAQs
    let techItems = [];
    let pricingItems = [];
    let bookingItems = [];

    if (cat === 'ac') {
      techItems = [
        {
          q: `Why is my ${brand} AC not cooling properly in ${loc}?`,
          a: `In ${loc}, Tirupur, high outdoor temperatures and airborne lint dust from textile corridors frequently clog condenser coils and air filters. A weak motor run capacitor or low refrigerant pressure also prevents the compressor from cooling the room.`
        },
        {
          q: `What causes water leakage from my ${brand} split AC inside the room?`,
          a: `Indoor dripping is caused by an algae-blocked condensate drain trough, an unsloped drain pipe, or ice on evaporator coils melting faster than normal due to low refrigerant pressure. High-pressure jet cleaning clears the drain channel.`
        },
        {
          q: `Why is the outdoor compressor making a humming sound and tripping?`,
          a: `A humming sound without compressor startup indicates a failing dual run capacitor (35µF to 55µF) or high head pressure. Replacing the capacitor spot-on-site restores instant cooling.`
        }
      ];

      pricingItems = [
        {
          q: `What are the visiting and inspection fees for ${brand} AC in Tirupur?`,
          a: `Our standard technician visiting fee across Tirupur is ${PRICING_DATA.ac.visiting}.`
        },
        {
          q: `How much does AC gas refilling cost in Tirupur?`,
          a: `Complete leak detection, nitrogen hold pressure test, two-stage vacuuming, and gas charging is an indicative ${PRICING_DATA.ac.gasRefill}.`
        },
        {
          q: `What are the charges for ${brand} AC deep jet cleaning and capacitor replacement?`,
          a: `High-pressure jet foam cleaning with waterproof service jacket is ${PRICING_DATA.ac.deepClean}. Dual run capacitor replacement is an indicative ${PRICING_DATA.ac.capacitor}.`
        },
        {
          q: `How much does inverter AC PCB repair cost?`,
          a: `Inverter outdoor/indoor PCB component-level repair is typically ${PRICING_DATA.ac.pcb}.`
        }
      ];
    } else if (cat === 'washing-machine') {
      techItems = [
        {
          q: `Why is my ${brand} washing machine not draining water in ${loc}?`,
          a: `Water drainage failure is usually caused by small coins, hairpins, or lint choking the bottom drain pump filter, or a jammed drain motor impeller. Cleaning the filter on-site restores normal drainage.`
        },
        {
          q: `Why does the ${brand} washing machine make loud noise during spinning?`,
          a: `A loud rumbling noise during high-speed spinning indicates worn-out tub bearings, a cracked drum spider, or damaged suspension shock absorbers. Replacing bearings and dampers eliminates the noise.`
        },
        {
          q: `What should I do if the washing machine door is locked and won't open?`,
          a: `Wait 3 minutes after switching off the power for the PTC thermal lock to disengage. If it remains jammed, our technician can perform a safe manual release and replace the faulty door interlock switch.`
        }
      ];

      pricingItems = [
        {
          q: `What are the visiting and checking charges for ${brand} washing machines in Tirupur?`,
          a: `Standard doorstep inspection across all Tirupur localities is ${PRICING_DATA.wm.visiting}.`
        },
        {
          q: `What is the estimated cost for drain pump and inlet valve replacement?`,
          a: `Drain pump motor replacement is an indicative ${PRICING_DATA.wm.drainPump}. Inlet solenoid valve replacement is typically ${PRICING_DATA.wm.inletValve}.`
        },
        {
          q: `How much does drum bearing replacement cost for front load washers?`,
          a: `Complete drum bearing and oil seal replacement with shaft balancing ranges between ${PRICING_DATA.wm.drumBearing}.`
        },
        {
          q: `How much does washing machine PCB repair cost?`,
          a: `Main control board component repair is typically ${PRICING_DATA.wm.pcb}.`
        }
      ];
    } else if (cat === 'fridge') {
      techItems = [
        {
          q: `Why is my ${brand} refrigerator freezer cold but lower compartment warm in ${loc}?`,
          a: `In frost-free refrigerators, this symptom indicates a defrost system failure—such as a burnt defrost heater, faulty bimetal thermostat, or stuck defrost timer—blocking the cool air duct with solid ice.`
        },
        {
          q: `Why does the ${brand} fridge compressor make a clicking sound every few minutes?`,
          a: `A clicking sound indicates the compressor start relay or overload protector (OLP) is tripping due to worn electrical contacts or a weak running capacitor. Replacing the relay resolves the issue.`
        },
        {
          q: `What causes water leakage inside the refrigerator vegetable box?`,
          a: `Water pooling under the crisper box is caused by a blocked defrost drain channel. Melted defrost water cannot reach the back evaporation tray and overflows into the cabin.`
        }
      ];

      pricingItems = [
        {
          q: `What are the inspection charges for ${brand} refrigerator in Tirupur?`,
          a: `Doorstep inspection fee across all Tirupur neighborhoods is ${PRICING_DATA.fridge.visiting}.`
        },
        {
          q: `How much does refrigerator compressor relay and thermostat repair cost?`,
          a: `PTC start relay and OLP replacement is typically ${PRICING_DATA.fridge.compressorRelay}. Mechanical thermostat replacement is an indicative ${PRICING_DATA.fridge.thermostat}.`
        },
        {
          q: `What is the cost of refrigerator gas refilling in Tirupur?`,
          a: `Complete leak detection, vacuuming, and eco-friendly R134a/R600a refrigerant charging is an indicative ${PRICING_DATA.fridge.gasRefill}.`
        }
      ];
    } else if (cat === 'tv') {
      techItems = [
        {
          q: `Why does my ${brand} LED TV have sound but no picture in ${loc}?`,
          a: `Sound without picture indicates the internal LED backlight strips have burnt out while the LCD panel and mainboard remain functional. Replacing the backlight strip array restores bright display.`
        },
        {
          q: `Why is the ${brand} TV red standby light blinking and not turning on?`,
          a: `A blinking standby LED indicates the power supply or inverter circuit has entered protection mode due to bulging filter capacitors or shorted output diodes.`
        },
        {
          q: `Can horizontal or vertical lines on ${brand} TV screen be repaired?`,
          a: `Yes, lines caused by loose COF bonding or T-CON timing board signal errors can frequently be repaired using micro-track bonding without replacing the entire expensive LCD panel.`
        }
      ];

      pricingItems = [
        {
          q: `What are the diagnostic charges for ${brand} TV repair in Tirupur?`,
          a: `Doorstep inspection and diagnostic testing across Tirupur is ${PRICING_DATA.tv.visiting}.`
        },
        {
          q: `How much does ${brand} TV LED backlight replacement cost?`,
          a: `A complete set of new OEM-grade copper LED backlight strips typically costs ${PRICING_DATA.tv.backlight} depending on screen size (32", 43", 55").`
        },
        {
          q: `What is the typical repair cost for TV power board or motherboard issues?`,
          a: `Power supply board component repair is ${PRICING_DATA.tv.powerBoard}. Main motherboard repair or firmware flashing ranges ${PRICING_DATA.tv.motherboard}.`
        }
      ];
    } else {
      // Service center / multi-brand
      techItems = [
        {
          q: `What appliance repair services do you provide for ${brand} in ${loc}, Tirupur?`,
          a: `We provide complete doorstep repair and maintenance for ${brand} washing machines, refrigerators, split/inverter air conditioners, and LED Smart TVs across ${loc} and surrounding Tirupur areas.`
        },
        {
          q: `How quickly can a technician visit my address in Tirupur?`,
          a: `We coordinate same-day doorstep technician visits within 2 to 4 hours of booking. Emergency appointments are also available.`
        }
      ];

      pricingItems = [
        {
          q: `What is your visiting and diagnostic fee structure in Tirupur?`,
          a: `We charge a nominal visiting and checking fee of ₹199 to ₹299. If you approve the repair estimate, this inspection fee is fully deducted from the final bill.`
        },
        {
          q: `Are the spare parts used during repair genuine and warrantied?`,
          a: `Yes, we use tested OEM-compatible spare parts backed by a 30 to 90-day post-service warranty for peace of mind.`
        }
      ];
    }

    // Distribute 1-2 extra search-intent items from pool (Requirement 8)
    const matchingExtras = extraSearchIntentPool.filter(e => e.cat === (cat === 'service-center' || cat === 'root' ? 'ac' : cat));
    const extraItem = matchingExtras[(idx * 3) % matchingExtras.length];
    if (extraItem) {
      techItems.push({ q: extraItem.q, a: extraItem.a });
    }

    bookingItems = [
      {
        q: `Are you an authorized company service center for ${brand}?`,
        a: `Disclaimer: We are an independent multi-brand doorstep repair service provider and NOT an authorized or official manufacturer-owned service center. For appliances currently covered under the manufacturer's free warranty, please contact the brand's official support. We specialize in fast, affordable, post-warranty home repairs.`
      },
      {
        q: `How do I book a doorstep technician visit in Tirupur?`,
        a: `You can book instantly by calling our support line at +91 92115 12088 or clicking the WhatsApp button. Share your appliance type, issue, and locality in Tirupur for immediate scheduling.`
      }
    ];

    groups.push({
      title: `${brand} Technical Troubleshooting & Fault Guidance in ${loc}`,
      items: techItems
    });
    groups.push({
      title: `Estimated Repair Charges & Spare Parts Pricing in Tirupur`,
      items: pricingItems
    });
    groups.push({
      title: `Service Terms, Warranty Disclaimer & Booking in Tirupur`,
      items: bookingItems
    });
  }

  
  // Add 2 Locality FAQ Questions and 2 Costing FAQ Questions (Requirements 8 & 9)
  const loc1 = allLocs[(idx * 7 + 1) % allLocs.length].name;
  const loc2 = allLocs[(idx * 7 + 5) % allLocs.length].name;
  const loc3 = allLocs[(idx * 7 + 9) % allLocs.length].name;
  const loc4 = allLocs[(idx * 7 + 13) % allLocs.length].name;
  const loc5 = allLocs[(idx * 7 + 17) % allLocs.length].name;

  const localityItems = [
    {
      q: `Which Tirupur areas do you cover for ${brand} repair service?`,
      a: `We provide doorstep repair across all major Tirupur neighborhoods including ${loc1}, ${loc2}, ${loc3}, ${loc4}, ${loc5}, and surrounding residential areas throughout East, West, North, and South Tirupur.`
    },
    {
      q: `Can I get same-day technician visit near ${loc} in Tirupur?`,
      a: `Yes, our mobile technicians operate daily across ${loc} and surrounding localities in Tirupur, reaching your home within 2 to 4 hours of your service booking.`
    }
  ];

  const costingItems = [
    {
      q: `What factors decide the final ${brand} repair cost in Tirupur?`,
      a: `The total repair charge is decided by four clear factors: the nominal inspection/visit charge (₹199–₹299), actual technician labour depending on repair complexity, the exact spare-part cost if any replacement is required, and any post-repair testing. Our technician inspects first and shares an estimate before starting work.`
    },
    {
      q: `Does the spare-part price vary between different models and brands?`,
      a: `Yes. Component prices vary based on appliance capacity, inverter vs non-inverter technology, and whether it requires basic wear-and-tear parts (like belts, capacitors, valves) or specialized electronics (like inverter PCBs or control boards). All pricing provided is an indicative market estimate, never an inflated manufacturer charge.`
    }
  ];

  groups.push({
    title: `Tirupur Locality Coverage & Service Areas`,
    items: localityItems
  });

  groups.push({
    title: `Pricing Factors & Repair Cost Transparency in Tirupur`,
    items: costingItems
  });

  masterFaqs[key] = { groups };
  totalPagesFaq++;
});

console.log(`Generated master FAQs for ${totalPagesFaq} pages.`);

// Write output
const outputPath = path.join(__dirname, 'tiruppur_master_faqs.json');
fs.writeFileSync(outputPath, JSON.stringify(masterFaqs, null, 2), 'utf8');
console.log(`Saved ${outputPath} successfully!`);
