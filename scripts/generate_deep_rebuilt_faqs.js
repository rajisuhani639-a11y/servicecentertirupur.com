// scripts/generate_deep_rebuilt_faqs.js
// Complete brand-wise and appliance-wise FAQ rebuild for servicecentercoimbatore.com

const fs = require('fs');
const path = require('path');
const { BRAND_TECH } = require('./brand_appliance_data.js');
const { BRAND_DETAILS } = require('./brand_custom_data.js');
const {
  allLocalities,
  getLocality,
  makeUniqueQuestion,
  makeUniqueAnswer,
  APPLIANCE_DATA,
  globalQuestions,
  globalAnswers
} = require('./faq_rebuild_helpers.js');

const pages = JSON.parse(fs.readFileSync('./scripts/detailed_page_info.json', 'utf8'));

console.log(`Loaded ${pages.length} pages for deep FAQ rebuild.`);

// Helper to get brand info or fallback
function getBrandInfo(brand) {
  return BRAND_TECH[brand] || BRAND_DETAILS[brand] || {
    tech: ['Energy efficient inverter motor', 'Digital microprocessor control', 'Heavy duty durability'],
    models: ['Standard Series', 'Premium Inverter Series', 'Smart Series'],
    compressor: 'High efficiency rotary compressor',
    washerMotor: 'Direct drive or heavy duty induction motor',
    acType: 'High ambient inverter cooling system',
    tvTech: 'High definition LED display driver'
  };
}

function getBrandDetails(brand) {
  return BRAND_DETAILS[brand] || {
    features: `${brand} high-efficiency appliance design, microprocessor controls, and quality components`,
    errors: { wm: 'Error codes indicating water inlet, drain timeout, or door lock', fridge: 'Temperature warning beeper or sensor deviation', ac: 'Sensor or communication error codes', tv: 'Standby light blinking codes' },
    oldVsNew: `Older ${brand} appliances used traditional electro-mechanical assemblies, while modern models feature microprocessor inverter control.`
  };
}

// Map appliance string from page to APPLIANCE_DATA key
function mapApplianceKey(appName) {
  const lower = appName.toLowerCase();
  if (lower.includes('air conditioner') || lower.includes('inverter split ac') || lower.includes('cassette ac') || lower.includes('window ac') || lower.includes('multi-split')) return 'Air Conditioner';
  if (lower.includes('refrigerator') || lower.includes('fridge') || lower.includes('duocooling')) return 'Refrigerator';
  if (lower.includes('washer dryer') || lower.includes('clothes dryer')) return 'Washer Dryer';
  if (lower.includes('washing machine') || lower.includes('washer')) return 'Washing Machine';
  if (lower.includes('television') || lower.includes('tv')) return 'Television';
  if (lower.includes('deep freezer') || lower.includes('chest freezer')) return 'Deep Freezer';
  if (lower.includes('dishwasher')) return 'Dishwasher';
  if (lower.includes('microwave')) return 'Microwave Oven';
  if (lower.includes('geyser') || lower.includes('water heater')) return 'Geyser / Water Heater';
  if (lower.includes('purifier') && lower.includes('water')) return 'Water Purifier';
  if (lower.includes('purifier') && lower.includes('air')) return 'Air Purifier';
  if (lower.includes('cooler') || lower.includes('fan')) return 'Air Cooler';
  if (lower.includes('chimney') || lower.includes('hob') || lower.includes('oven')) return 'Kitchen Chimney';
  return 'Washing Machine'; // fallback
}

// -------------------------------------------------------------
// QUESTION BUILDERS FOR APPLIANCES ON SERVICE CENTER PAGES
// -------------------------------------------------------------

function generateServiceCenterApplianceFaqs(brand, fullApplianceName, targetCount = 3) {
  const appKey = mapApplianceKey(fullApplianceName);
  const appData = APPLIANCE_DATA[appKey] || APPLIANCE_DATA['Washing Machine'];
  const bInfo = getBrandInfo(brand);
  const bDetails = getBrandDetails(brand);

  const faqs = [];

  // Q1: Problem & solution
  const probObj = appData.problems[faqs.length % appData.problems.length];
  const loc1 = getLocality();
  let q1 = `Why is my ${fullApplianceName} ${probObj.prob}?`;
  let a1 = `In ${loc1} homes, when a ${fullApplianceName} experiences ${probObj.prob}, it is commonly caused by ${probObj.cause}. Our Coimbatore technician will inspect the wiring, run diagnostics, and clear any obstruction or replace the affected component on site.`;

  // Occasional Tanglish/Tamil on Q1
  if (Math.random() > 0.6) {
    a1 = `${loc1}-la ${fullApplianceName} ${probObj.prob}-nu issue vandha, main reason ${probObj.cause} irukalaam. Technician home visit panni electrical connections and parts thoroughly check panni solve pannuvanga.`;
  }
  faqs.push({ q: makeUniqueQuestion(q1), a: makeUniqueAnswer(a1) });

  // Q2: Spare parts & approximate price
  const partObj = appData.parts[faqs.length % appData.parts.length];
  const loc2 = getLocality();
  let q2 = `What is the approximate cost to replace a ${fullApplianceName} ${partObj.name} in Coimbatore?`;
  let a2 = `Replacing a genuine or high-grade compatible ${fullApplianceName} ${partObj.name} in Coimbatore typically costs approximately ${partObj.cost}. This is commonly required when the appliance shows symptoms like ${partObj.symptom}. Final pricing is confirmed after doorstep inspection in ${loc2} or nearby areas.`;
  faqs.push({ q: makeUniqueQuestion(q2), a: makeUniqueAnswer(a2) });

  // Q3: Visiting charge & service cost
  const loc3 = getLocality();
  let q3 = `What is the visiting and inspection charge for ${fullApplianceName} service in Coimbatore?`;
  let a3 = `Our standard visiting and diagnosis charge for ${fullApplianceName} in ${loc3} and across Coimbatore is ₹200–₹350. If you proceed with the recommended repair, this inspection fee is generally adjusted against the final service and labour bill. Basic labour charges start from ₹350–₹650 depending on the complexity of the fix.`;
  faqs.push({ q: makeUniqueQuestion(q3), a: makeUniqueAnswer(a3) });

  // Q4: Technology / model specifics (if targetCount >= 4)
  if (targetCount >= 4) {
    const loc4 = getLocality();
    let techFeature = (bInfo.tech && bInfo.tech.length > 0) ? bInfo.tech[0] : `${brand} electronic inverter system`;
    let q4 = `How does ${brand}'s ${techFeature} affect repair and servicing for this ${appData.label}?`;
    let a4 = `The ${techFeature} in ${fullApplianceName} improves energy efficiency and performance, but requires specialized digital multimeter checking and board-level diagnosis. Our Coimbatore technicians carry inverter-compatible testing tools to diagnose circuits properly in ${loc4} without unnecessary board replacements.`;
    faqs.push({ q: makeUniqueQuestion(q4), a: makeUniqueAnswer(a4) });
  }

  // Q5: Old vs new model / parts availability (if targetCount >= 5)
  if (targetCount >= 5) {
    const loc5 = getLocality();
    let q5 = `Can older models of ${fullApplianceName} still be repaired in Coimbatore?`;
    let a5 = `${bDetails.oldVsNew} For older ${brand} units in ${loc5}, replacement motors, relays, capacitors, and valves remain widely available. For discontinued motherboards, our technicians offer circuit-level component repair whenever direct replacements are phased out.`;
    faqs.push({ q: makeUniqueQuestion(q5), a: makeUniqueAnswer(a5) });
  }

  return faqs;
}

// -------------------------------------------------------------
// QUESTION BUILDERS FOR DEDICATED APPLIANCE PAGES
// -------------------------------------------------------------

function generateDedicatedAppliancePageFaqs(brand, category) {
  const bInfo = getBrandInfo(brand);
  const bDetails = getBrandDetails(brand);

  const groups = [];

  if (category === 'ac') {
    const appData = APPLIANCE_DATA['Air Conditioner'];
    
    // Group 1: Types, Tonnage & Inverter FAQs
    const g1Items = [
      {
        q: `Which ${brand} AC tonnages and models are most commonly serviced in Coimbatore?`,
        a: `Our Coimbatore technicians frequently service ${brand} 1 Ton, 1.5 Ton, and 2 Ton Split ACs, 3-Star and 5-Star Inverter ACs, as well as Window and Cassette units across residential homes and commercial spaces in ${getLocality()} and ${getLocality()}.`
      },
      {
        q: `What is the difference between repairing a ${brand} Inverter AC versus a fixed-speed Split AC?`,
        a: `Inverter ${brand} ACs use variable-frequency BLDC compressors and dual communication PCBs (indoor and outdoor). Fixed-speed units use conventional induction compressors with running capacitors. Checking inverter units requires DC voltage measurement between indoor and outdoor terminals rather than just capacitor testing.`
      },
      {
        q: `How does ${brand}'s cooling technology perform in hot Coimbatore summer conditions?`,
        a: `${brand} units featuring ${(bInfo.tech && bInfo.tech[0]) || 'advanced inverter compressors'} are built for high ambient temperatures up to 50°C–52°C. In areas like ${getLocality()}, regular coil cleaning and maintaining outdoor airflow ensure maximum cooling delivery.`
      }
    ];
    groups.push({ title: `${brand} AC Types, Tonnage & Inverter FAQs`, items: g1Items });

    // Group 2: Common Problems & Cooling Solutions
    const g2Items = [
      {
        q: `Why is my ${brand} Split AC not blowing cold air in Coimbatore?`,
        a: `When a ${brand} AC runs but fails to cool, common causes include clogged indoor filters, low refrigerant pressure due to copper coil pinhole leaks, a weak running capacitor (approx ₹550–₹950), or an outdoor compressor overload trip in ${getLocality()}.`
      },
      {
        q: `What causes indoor water dripping from my ${brand} AC unit?`,
        a: `Indoor water leakage in ${brand} ACs is usually due to a choked drain line, cracked condensate drain pan, or dirty cooling coils causing ice buildup that melts overflow. Our technician in ${getLocality()} flushes the drain line and realigns the backplate slope.`
      },
      {
        q: `What should I check when my ${brand} AC display shows an error code?`,
        a: `${brand} ACs display error codes like ${(bDetails.errors && bDetails.errors.ac) || 'E1 or E6'} when room sensors or communication lines fault. We suggest switching off the main MCB for 3 minutes to reset. If the error code reappears upon restarting, book a doorstep inspection.`
      }
    ];
    groups.push({ title: `${brand} AC Common Cooling Problems & Troubleshooting`, items: g2Items });

    // Group 3: Spare Parts & Approximate Pricing
    const g3Items = [
      {
        q: `What is the approximate cost of ${brand} AC gas charging in Coimbatore?`,
        a: `Complete gas charging for ${brand} Split ACs (R32, R410A, or R22) in Coimbatore typically costs approximately ₹2,200–₹3,800. This includes nitrogen pressure testing, leak brazing on copper joints, vacuum pump evacuation, and weighing the exact refrigerant charge.`
      },
      {
        q: `How much does a ${brand} AC outdoor fan motor or indoor blower motor replacement cost?`,
        a: `Replacing an indoor blower motor or outdoor condenser fan motor in a ${brand} AC costs approximately ₹1,450–₹2,950 depending on whether it is an AC induction or BLDC variable motor. Doorstep diagnosis in ${getLocality()} verifies motor coil continuity first.`
      },
      {
        q: `Can a damaged ${brand} AC inverter PCB motherboard be repaired instead of replaced?`,
        a: `Yes, in many cases. Rather than spending ₹6,000–₹9,000 on a brand-new factory PCB, our component-level engineers can replace blown IPM modules, bridge rectifiers, or capacitors for approximately ₹1,800–₹3,800, backed by a service warranty.`
      }
    ];
    groups.push({ title: `${brand} AC Spare Parts & Approximate Price FAQs`, items: g3Items });

    // Group 4: Visiting Charge & Service Cost
    const g4Items = [
      {
        q: `What is the visiting charge for ${brand} AC repair in Coimbatore?`,
        a: `Our standard doorstep inspection charge for ${brand} air conditioners across Coimbatore localities is ₹200–₹350. When you approve the repair quotation, this inspection fee is normally deducted from your final bill.`
      },
      {
        q: `What is included in a ${brand} AC general jet pump water service in Coimbatore?`,
        a: `A comprehensive jet foam wash costs approximately ₹450–₹750 per split unit in ${getLocality()}. It includes high-pressure washing of cooling coils, blower wheel desoiling, drain tray clearing, electrical terminal cleaning, and operating amp checks.`
      }
    ];
    groups.push({ title: `${brand} AC Visiting Charge & Service Cost FAQs`, items: g4Items });

    // Group 5: Older vs Newer Inverter Models
    const g5Items = [
      {
        q: `Are spare parts available for 8 to 10 year old ${brand} AC models in Coimbatore?`,
        a: `Yes, essential mechanical components like compressors, copper piping, expansion valves, and universal fan motors remain readily available. For discontinued electronic sensors and boards, our ${getLocality()} workshop maintains compatibility boards.`
      },
      {
        q: `Is it worth repairing an older R22 ${brand} AC or upgrading to a 5-Star Inverter?`,
        a: `If the repair cost (such as minor capacitor or leak fix) is under ₹2,000, repairing the existing ${brand} AC is sensible. However, if the compressor is seized, upgrading to a modern 5-Star inverter unit will save up to 40% on monthly TANGEDCO electricity bills in Coimbatore.`
      }
    ];
    groups.push({ title: `${brand} AC Older vs Newer Inverter Model FAQs`, items: g5Items });

  } else if (category === 'fridge') {
    const appData = APPLIANCE_DATA['Refrigerator'];

    // Group 1: Types & Capacity
    const g1Items = [
      {
        q: `Which ${brand} refrigerator models are supported for doorstep repair in Coimbatore?`,
        a: `We service all ${brand} refrigerator configurations across Coimbatore, including Single Door Direct Cool (190L–220L), Double Door Frost Free (240L–350L), Side-by-Side, French Door, and Bottom Mounted Inverter models in ${getLocality()} and ${getLocality()}.`
      },
      {
        q: `How does ${brand}'s inverter cooling technology work compared to conventional fridges?`,
        a: `${brand} digital inverter compressors modulate their operating speed dynamically based on internal temperature sensors and door opening frequency, reducing electricity consumption and noise compared to older on/off reciprocating compressors.`
      },
      {
        q: `Where can I find the model and serial number on my ${brand} refrigerator before booking service?`,
        a: `The model label on a ${brand} refrigerator is usually located inside the fresh food compartment on the left or right sidewall near the vegetable box, or on the rear exterior cabinet panel.`
      }
    ];
    groups.push({ title: `${brand} Refrigerator Types & Capacity FAQs`, items: g1Items });

    // Group 2: Common Problems & Cooling Solutions
    const g2Items = [
      {
        q: `Why is the freezer working but the lower compartment warm in my ${brand} refrigerator?`,
        a: `In ${brand} frost-free models in ${getLocality()}, this symptom is usually caused by a failed defrost heater, defective bi-metal thermostat, choked drain hole, or a stuck air damper preventing cold airflow from reaching the fresh food section.`
      },
      {
        q: `What causes water to accumulate below the vegetable crisper box in a ${brand} fridge?`,
        a: `Water pooling inside the bottom tray happens when the internal defrost drain trough gets choked with food debris, slime, or ice. Our technician unblocks the drain tube with hot water flushes and sanitizes the drain cup.`
      },
      {
        q: `Why is my ${brand} refrigerator compressor making a clicking sound every few minutes?`,
        a: `A clicking sound indicates that the compressor is trying to start but tripping on the overload protector (OLP). In ${getLocality()} homes, this is commonly caused by a burnt PTC start relay (approx ₹450–₹950) or severe low voltage fluctuations.`
      }
    ];
    groups.push({ title: `${brand} Refrigerator Cooling Faults & Troubleshooting`, items: g2Items });

    // Group 3: Spare Parts & Approximate Pricing
    const g3Items = [
      {
        q: `What is the approximate cost of replacing a ${brand} refrigerator compressor in Coimbatore?`,
        a: `Compressor replacement for a ${brand} refrigerator in Coimbatore typically costs approximately ₹3,200–₹6,500 depending on whether it is a standard reciprocating or BLDC inverter compressor. This includes the new compressor, gas charging, copper brazing, and vacuuming.`
      },
      {
        q: `How much does a replacement door gasket seal cost for a ${brand} refrigerator?`,
        a: `A custom-fit magnetic door gasket for a ${brand} refrigerator costs approximately ₹950–₹1,850. Replacing a loose, torn, or hardened gasket restores airtight sealing and prevents moisture buildup and continuous compressor running in ${getLocality()}.`
      },
      {
        q: `What is the replacement cost for a ${brand} frost-free evaporator fan motor?`,
        a: `An evaporator fan motor replacement costs approximately ₹850–₹1,650. Our doorstep technician tests the motor windings and door switch voltage before recommending a replacement.`
      }
    ];
    groups.push({ title: `${brand} Refrigerator Spare Parts & Approximate Pricing`, items: g3Items });

    // Group 4: Visiting Charge & Service Cost
    const g4Items = [
      {
        q: `What is the visiting charge for ${brand} refrigerator service in Coimbatore?`,
        a: `The standard doorstep inspection charge for ${brand} refrigerators in ${getLocality()} and across all Coimbatore zones is ₹200–₹350. If you authorize the necessary repair, this fee is deducted from the final repair invoice.`
      },
      {
        q: `Are labour charges billed separately from replacement spare parts for ${brand} fridges?`,
        a: `Yes, transparent billing separates the visiting charge, technical labour (₹350–₹750 depending on whether it is a minor sensor fix or major refrigeration cycle overhaul), and the actual cost of replacement spare parts.`
      }
    ];
    groups.push({ title: `${brand} Refrigerator Visiting Charge & Repair Costs`, items: g4Items });

    // Group 5: Older vs Newer Models
    const g5Items = [
      {
        q: `Can an older non-inverter ${brand} single-door refrigerator still be repaired?`,
        a: `Absolutely. Single door direct-cool ${brand} refrigerators are mechanically simple. Thermostats, door switches, start relays, and capillary tubes are readily available across Coimbatore, allowing older units to operate reliably for many more years.`
      },
      {
        q: `What should I do if my ${brand} inverter refrigerator PCB is discontinued?`,
        a: `Our specialized circuit technicians in Coimbatore perform component-level board repairs—replacing shorted micro-switches, rectifiers, and capacitors—to restore discontinued ${brand} inverter inverter boards without requiring whole fridge replacement.`
      }
    ];
    groups.push({ title: `${brand} Refrigerator Older vs Digital Inverter Model FAQs`, items: g5Items });

  } else if (category === 'washing-machine') {
    const appData = APPLIANCE_DATA['Washing Machine'];

    // Group 1: Types & Capacity
    const g1Items = [
      {
        q: `Which types of ${brand} washing machines do you repair in Coimbatore?`,
        a: `We provide doorstep repair for all ${brand} washing machine models across Coimbatore: Front Load (6kg–9kg), Top Load Fully Automatic (6.5kg–8kg), Semi-Automatic Twin Tub, and Washer Dryer combos in ${getLocality()} and ${getLocality()}.`
      },
      {
        q: `What is the technical difference between ${brand} Front Load and Top Load drive systems?`,
        a: `${brand} Front Load washers use horizontal stainless steel drums with heavy concrete counterweights and shock absorbing dampers, often driven by direct drive or ribbed belts. Top Load machines use vertical tubs with agitators/pulsators driven through a central gearbox assembly.`
      },
      {
        q: `How does Coimbatore water hardness affect ${brand} washing machine operation?`,
        a: `Borewell water in Coimbatore localities like ${getLocality()} often contains high mineral hardness, causing calcium scale deposits on the inlet valve mesh, heater element, and drum spider arm. Periodic descaling every 3 months preserves machine longevity.`
      }
    ];
    groups.push({ title: `${brand} Washing Machine Types & Drum Capacity FAQs`, items: g1Items });

    // Group 2: Drain, Spin & Vibration
    const g2Items = [
      {
        q: `Why is my ${brand} washing machine not draining water out of the drum?`,
        a: `When water stays inside a ${brand} drum with error codes like ${(bDetails.errors && bDetails.errors.wm) || 'E20 or 5E'}, the cause is usually a clogged coin trap filter, an obstruction in the drain hose, or a burnt drain pump motor (approx ₹850–₹1,450) in ${getLocality()}.`
      },
      {
        q: `What causes excessive vibration and banging noise during ${brand} high-speed spin cycle?`,
        a: `Severe thumping during spin is typically caused by worn suspension damping rods (approx ₹950–₹1,850 in top loaders), damaged shock absorbers in front loaders, uneven floor leveling, or an unbalanced wash load.`
      },
      {
        q: `Why won't my ${brand} front load washing machine door open after completing the wash?`,
        a: `Front loaders keep the door locked if water remains inside, or if the thermal PTC door lock solenoid (approx ₹650–₹1,250) has failed. Our technician manually unlocks the safety latch and tests the interlock switch in ${getLocality()}.`
      }
    ];
    groups.push({ title: `${brand} Washing Machine Drain, Spin & Vibration FAQs`, items: g2Items });

    // Group 3: Spare Parts & Approximate Prices
    const g3Items = [
      {
        q: `What is the approximate cost of replacing a ${brand} washing machine drain pump in Coimbatore?`,
        a: `Replacing a genuine ${brand} drain pump motor in Coimbatore typically costs approximately ₹850–₹1,450. The technician tests electrical continuity and checks for impeller damage before replacement.`
      },
      {
        q: `How much does a water inlet valve replacement cost for a ${brand} washing machine?`,
        a: `A replacement dual or single solenoid inlet valve for ${brand} washers costs approximately ₹650–₹1,150. Replacing a scaled or burnt valve resolves slow water filling and 4E/IE error codes in ${getLocality()}.`
      },
      {
        q: `Can a faulty ${brand} washing machine PCB control board be repaired?`,
        a: `Yes. In many cases of power dead, erratic spinning, or button failure, our circuit engineers repair the existing PCB board for approximately ₹1,600–₹3,800, saving substantial cost compared to new factory module replacement.`
      }
    ];
    groups.push({ title: `${brand} Washing Machine Spare Parts & Approximate Prices`, items: g3Items });

    // Group 4: Visiting Charge & Service Cost
    const g4Items = [
      {
        q: `What is the visiting charge for ${brand} washing machine repair in Coimbatore?`,
        a: `Our doorstep inspection fee for ${brand} washing machines across all Coimbatore neighborhoods is ₹200–₹350. If you proceed with the recommended repair, this visiting fee is deducted from the final invoice.`
      },
      {
        q: `How much does a complete ${brand} washing machine tub cleaning and descaling service cost?`,
        a: `A comprehensive drum descaling and pressure jet sanitization service in ${getLocality()} costs approximately ₹450–₹750, eliminating detergent slime, lint buildup, and foul mildew odors.`
      }
    ];
    groups.push({ title: `${brand} Washing Machine Visiting Charge & Service Cost`, items: g4Items });

    // Group 5: Front Load vs Top Load Maintenance
    const g5Items = [
      {
        q: `Can older belt-driven ${brand} washing machines be upgraded or repaired?`,
        a: `Yes. Standard V-belts (approx ₹450–₹850), motor carbon brushes, capacitors, and water level pressure switches for older ${brand} models remain widely available throughout Coimbatore.`
      },
      {
        q: `Why does my ${brand} front load rubber door gasket develop black mold spots?`,
        a: `Coimbatore's humid weather and keeping the door shut right after washes trap moisture in the door bellows. Wiping the gasket dry after every cycle and running a monthly 60°C tub clean cycle prevents mold buildup.`
      }
    ];
    groups.push({ title: `${brand} Washing Machine Maintenance & Longevity FAQs`, items: g5Items });

  } else if (category === 'tv') {
    const appData = APPLIANCE_DATA['Television'];

    // Group 1: Screen Types, Display Panels & Smart OS
    const g1Items = [
      {
        q: `Which ${brand} TV models and screen sizes do you repair in Coimbatore?`,
        a: `We repair all ${brand} televisions across Coimbatore from 32-inch, 43-inch, 50-inch, 55-inch to 65-inch models, including HD Ready, Full HD, 4K UHD Smart TVs, Android TV, Google TV, and QLED displays in ${getLocality()} and ${getLocality()}.`
      },
      {
        q: `What is the difference between a ${brand} TV backlight failure and a cracked display panel?`,
        a: `If the internal LED backlight strips burn out, the TV screen stays dark while sound from TV channels continues normally, which is fully repairable. If the outer glass panel has physical impact cracks or internal liquid crystal leaks, panel replacement is generally required.`
      },
      {
        q: `Where can I locate the exact model code on my ${brand} Smart TV?`,
        a: `The model code (e.g. starting with numbers like 32, 43, or 55) is printed on a white barcode sticker on the rear plastic cabinet of your ${brand} TV, and can also be found in the TV Settings menu under 'About This TV'.`
      }
    ];
    groups.push({ title: `${brand} TV Screen Types, Display Panels & Smart OS FAQs`, items: g1Items });

    // Group 2: Display Lines, Sound & Power Problems
    const g2Items = [
      {
        q: `Why does my ${brand} TV have sound but a completely black screen?`,
        a: `This is the most common TV fault in Coimbatore homes. When sound is audible but there is no picture, the LED backlight strip array behind the panel has failed. Our technician in ${getLocality()} performs a flashlight test on the screen to confirm before replacing the strips.`
      },
      {
        q: `What causes horizontal or vertical colored lines on a ${brand} TV screen?`,
        a: `Colored lines are caused by loose COF (Chip-on-Film) ribbon cable bonding or a failing T-Con (Timing Controller) board. If the T-Con board is faulty, replacement or micro-soldering restores clear video.`
      },
      {
        q: `Why is my ${brand} TV red standby light blinking and the TV won't turn on?`,
        a: `A blinking red standby light indicates the power supply board (SMPS) has detected an over-voltage or short circuit and entered safety protection mode. Our technician tests DC rail voltages on site in ${getLocality()}.`
      }
    ];
    groups.push({ title: `${brand} TV Display Lines, Sound & Power Problem FAQs`, items: g2Items });

    // Group 3: Spare Parts & Approximate Prices
    const g3Items = [
      {
        q: `What is the approximate cost of replacing ${brand} TV LED backlight strips in Coimbatore?`,
        a: `Replacing the complete original LED backlight array in a ${brand} TV typically costs approximately ₹1,600–₹3,400 depending on screen size (32 to 55 inches). We replace the entire array rather than single burnt LEDs to ensure balanced brightness and longevity.`
      },
      {
        q: `How much does a ${brand} TV power supply board (SMPS) repair or replacement cost?`,
        a: `Power board repair or replacement typically costs approximately ₹1,800–₹3,500. Replacing shorted MOSFETs, diodes, or filtering capacitors restores normal power delivery without replacing the full motherboard.`
      },
      {
        q: `Can a ${brand} Smart TV motherboard stuck on the boot logo be repaired?`,
        a: `Yes. When a TV is stuck in a boot loop, our technicians reflash the firmware using dedicated eMMC programmer tools or replace the main processor board for approximately ₹2,400–₹5,200.`
      }
    ];
    groups.push({ title: `${brand} TV Backlight & Circuit Board Approximate Prices`, items: g3Items });

    // Group 4: Doorstep Inspection & Service Charge
    const g4Items = [
      {
        q: `What is the doorstep inspection charge for ${brand} TV repair in Coimbatore?`,
        a: `Our standard doorstep inspection charge for ${brand} televisions in ${getLocality()} and across all Coimbatore areas is ₹200–₹350. When you proceed with the repair work, this diagnostic fee is adjusted against the final service invoice.`
      },
      {
        q: `Do you provide wall-mounting and un-mounting service for ${brand} TVs in Coimbatore?`,
        a: `Yes. Our technicians provide secure wall mount installation, bracket fixing, and neat cabling for ${brand} TVs up to 65 inches in ${getLocality()}, with standard installation charges ranging from ₹350–₹650.`
      }
    ];
    groups.push({ title: `${brand} TV Doorstep Inspection & Service Charge FAQs`, items: g4Items });

    // Group 5: Older vs Newer Smart TV Repair
    const g5Items = [
      {
        q: `Can an older non-smart ${brand} LCD or LED TV be repaired in Coimbatore?`,
        a: `Yes. Older CCFL and early LED ${brand} TVs have durable power circuits and straightforward universal replacement boards. Most power, audio, and backlight faults can be restored economically.`
      },
      {
        q: `What should I do if my ${brand} TV motherboard is no longer manufactured?`,
        a: `When original motherboards are obsolete, our technicians can install high-compatibility universal Smart Android boards with full HDMI, USB, and Wi-Fi functionality, giving older ${brand} TVs modern smart capabilities.`
      }
    ];
    groups.push({ title: `${brand} TV Older LCD vs Newer 4K Smart TV Repair FAQs`, items: g5Items });

  } else {
    // Fallback for root / hub multi-brand
    const g1Items = [
      {
        q: `What home appliance repair services do you provide in Coimbatore?`,
        a: `We provide certified doorstep diagnosis, genuine spare part replacement, and preventive maintenance for Air Conditioners, Refrigerators, Washing Machines, and Smart TVs across all 150 Coimbatore localities including ${getLocality()} and ${getLocality()}.`
      },
      {
        q: `What are your standard doorstep visiting and inspection charges across Coimbatore?`,
        a: `Our standard visiting fee across Coimbatore is ₹200–₹350. When you approve the technician's repair estimate, this inspection fee is adjusted against the final service bill.`
      },
      {
        q: `How quickly can a technician visit my home in Coimbatore for emergency repair?`,
        a: `We offer same-day doorstep arrival within 2 to 4 hours across Gandhipuram, Peelamedu, RS Puram, Saravanampatti, Saibaba Colony, and Singanallur. Simply call +91 92115 12088 to book a slot.`
      },
      {
        q: `Do you provide a service warranty on replaced appliance spare parts?`,
        a: `Yes, all genuine replacement parts—including compressors, motors, PCBs, and backlight arrays—come with a 30 to 90 day warranty for complete peace of mind.`
      }
    ];
    groups.push({ title: `Home Appliance Repair FAQs in Coimbatore`, items: g1Items });
  }

  // Ensure all questions and answers are globally unique
  groups.forEach(g => {
    g.items.forEach(item => {
      item.q = makeUniqueQuestion(item.q);
      item.a = makeUniqueAnswer(item.a);
    });
  });

  return groups;
}

// -------------------------------------------------------------
// MAIN GENERATION LOGIC FOR ALL 174 PAGES
// -------------------------------------------------------------

console.log('Generating unique, brand-specific and appliance-specific FAQ sets...');

const finalFaqDatabase = {};
let totalGroupsCreated = 0;
let totalQuestionsCreated = 0;
let totalAnswersCreated = 0;
let serviceCenterPagesCount = 0;
let appliancePagesCount = 0;

pages.forEach(p => {
  const filePath = p.file;
  const brand = p.brand;
  const category = p.category;

  let pageFaqGroups = [];

  if (category === 'service-center' && p.brandSlug !== 'home-appliance') {
    serviceCenterPagesCount++;
    // Dedicated appliance groups for every appliance listed on this service center page!
    const appliances = p.appliances.length > 0 ? p.appliances : [`${brand} Home Appliances`];
    
    // Determine questions per appliance to ensure at least 10-15 total
    let qPerApp = 3;
    if (appliances.length === 1) qPerApp = 10;
    else if (appliances.length === 2) qPerApp = 5;
    else if (appliances.length === 3) qPerApp = 4;
    else qPerApp = 3;

    appliances.forEach(app => {
      const items = generateServiceCenterApplianceFaqs(brand, app, qPerApp);
      pageFaqGroups.push({
        title: `${app} FAQs`,
        items: items
      });
    });

  } else if (category === 'service-center' && p.brandSlug === 'home-appliance') {
    serviceCenterPagesCount++;
    // Multi-brand service center page
    const majorApps = ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Microwave Oven'];
    majorApps.forEach(app => {
      const items = generateServiceCenterApplianceFaqs('Multi-Brand', `${app}`, 3);
      pageFaqGroups.push({
        title: `Multi-Brand ${app} FAQs in Coimbatore`,
        items: items
      });
    });

  } else if (category === 'root') {
    // index.html
    const majorApps = ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Microwave Oven'];
    majorApps.forEach(app => {
      const items = generateServiceCenterApplianceFaqs('Home Appliance', `${app}`, 3);
      pageFaqGroups.push({
        title: `${app} Repair FAQs in Coimbatore`,
        items: items
      });
    });

  } else {
    // Dedicated appliance pages: ac, fridge, washing-machine, tv
    appliancePagesCount++;
    pageFaqGroups = generateDedicatedAppliancePageFaqs(brand, category);
  }

  // Count metrics
  let pageTotalQ = 0;
  pageFaqGroups.forEach(g => {
    totalGroupsCreated++;
    g.items.forEach(item => {
      pageTotalQ++;
      totalQuestionsCreated++;
      totalAnswersCreated++;
    });
  });

  finalFaqDatabase[filePath] = {
    brand: brand,
    category: category,
    groups: pageFaqGroups,
    totalQuestions: pageTotalQ
  };
});

console.log(`\n=== FAQ GENERATION COMPLETED ===`);
console.log(`Total HTML pages processed: ${pages.length}`);
console.log(`Total FAQ groups created: ${totalGroupsCreated}`);
console.log(`Total FAQ questions created: ${totalQuestionsCreated}`);
console.log(`Total FAQ answers created: ${totalAnswersCreated}`);
console.log(`Service Center pages updated: ${serviceCenterPagesCount}`);
console.log(`Appliance pages updated: ${appliancePagesCount}`);
console.log(`Global unique questions in Set: ${globalQuestions.size}`);
console.log(`Global unique answers in Set: ${globalAnswers.size}`);

// Verify uniqueness
if (globalQuestions.size === totalQuestionsCreated && globalAnswers.size === totalAnswersCreated) {
  console.log('PERFECT! 0 duplicate questions and 0 duplicate answers across the entire website!');
} else {
  console.log(`Warning: Duplicate detected! Questions: ${totalQuestionsCreated - globalQuestions.size}, Answers: ${totalAnswersCreated - globalAnswers.size}`);
}

fs.writeFileSync('./scripts/coimbatore_rebuilt_faqs.json', JSON.stringify(finalFaqDatabase, null, 2), 'utf8');
console.log('Saved to scripts/coimbatore_rebuilt_faqs.json');
