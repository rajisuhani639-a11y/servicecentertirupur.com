// scripts/generate_deep_rebuilt_faqs_v2.js
// Generates genuinely unique, brand-wise + appliance-wise FAQs across all 174 pages

const fs = require('fs');
const path = require('path');
const { BRAND_TECH } = require('./brand_appliance_data.js');
const { BRAND_DETAILS } = require('./brand_custom_data.js');
const { nextLoc, cleanQ, cleanA, usedQuestions, usedAnswers } = require('./master_faq_core.js');

const pages = JSON.parse(fs.readFileSync('./scripts/detailed_page_info.json', 'utf8'));

// -----------------------------------------------------------------------------------------
// 1. BRAND-SPECIFIC TOPICS & GENERATORS FOR SINGLE-APPLIANCE PAGES
// -----------------------------------------------------------------------------------------

function buildAcFaqsForBrand(brand) {
  const loc1 = nextLoc(), loc2 = nextLoc(), loc3 = nextLoc(), loc4 = nextLoc(), loc5 = nextLoc();
  const bDetail = BRAND_DETAILS[brand] || {};
  const bTech = BRAND_TECH[brand] || {};
  const features = bDetail.features || `${brand} Dual Inverter cooling and copper condenser technology`;
  const errCode = (bDetail.errors && bDetail.errors.ac) || 'E1 / EC refrigerant error';
  const oldNew = bDetail.oldVsNew || `Older ${brand} units used fixed reciprocating motors, while modern models feature BLDC inverter compressors.`;

  return [
    {
      group: `${brand} AC Models, Tonnage & Inverter FAQs`,
      items: [
        {
          q: `Which ${brand} AC tonnage (1 Ton, 1.5 Ton, or 2 Ton) is best suited for Coimbatore bedrooms?`,
          a: `For standard 100 to 140 sq. ft. bedrooms in ${loc1}, a 1.5 Ton ${brand} 3-Star or 5-Star Inverter AC is optimal. For top-floor rooms exposed to direct afternoon heat in areas like ${loc2}, our technicians recommend a 1.5 Ton or 2 Ton unit with 100% copper condenser coils.`
        },
        {
          q: `How does ${brand}'s inverter compressor technology reduce monthly electricity bills in Coimbatore?`,
          a: `${brand} inverter compressors vary motor speed based on heat load instead of switching completely on and off. Operating at continuous partial capacity keeps room temperature stable within 0.5°C and saves up to 35–45% on TANGEDCO power consumption.`
        },
        {
          q: `What unique technologies does ${brand} incorporate for tropical summer cooling?`,
          a: `${brand} units feature ${features}. These systems ensure stable cooling even when outdoor ambient temperatures exceed 48°C–52°C during Coimbatore summers.`
        }
      ]
    },
    {
      group: `${brand} AC Cooling Faults & Pinhole Leak Solutions`,
      items: [
        {
          q: `Why is my ${brand} AC outdoor compressor tripping or not turning on in ${loc3}?`,
          a: `In ${loc3} homes, compressor startup failures are usually caused by a weakened running capacitor (approx ₹550–₹950 on fixed units), low line voltage, a burnt terminal lead, or an IPM inverter power module fault on the outdoor PCB board.`
        },
        {
          q: `What causes indoor water dripping from my ${brand} Split AC front panel?`,
          a: `${loc4}-la ${brand} AC indoor water drop aagudhu-na, main reason choked drain tray, dust and slime blocking the condensate pipe, or uneven indoor backplate slope. Technician drain line-a flush panni slope re-align pannuvanga.`
        },
        {
          q: `How do I decode and clear error code ${errCode} on my ${brand} AC?`,
          a: `Error code ${errCode} indicates an indoor/outdoor communication failure, temperature sensor open-circuit, or low refrigerant pressure. Try switching off the power breaker for 3 minutes; if the code persists on restart, professional circuit testing is required.`
        }
      ]
    },
    {
      group: `${brand} AC Spare Parts & Approximate Pricing FAQs`,
      items: [
        {
          q: `What is the approximate cost of ${brand} AC refrigerant gas recharging in Coimbatore?`,
          a: `Complete gas charging for ${brand} Split ACs (R32 / R410A / R22) costs approximately ₹2,200–₹3,800. This includes nitrogen leak testing under 300 PSI, copper brazing on pinhole leaks, vacuum pump air evacuation, and calibrated refrigerant charging.`
        },
        {
          q: `What is the replacement cost for a ${brand} AC outdoor condenser fan motor?`,
          a: `Replacing an outdoor fan motor costs approximately ₹1,600–₹2,950 depending on whether it is an AC induction or BLDC variable motor. Doorstep testing in ${loc5} verifies whether the issue is motor coil burning or a faulty running capacitor.`
        },
        {
          q: `Can a damaged ${brand} AC inverter PCB board be repaired on site?`,
          a: `Yes, in most cases. Replacing shorted bridge rectifiers, IGBT power transistors, or blown fuses on the ${brand} inverter board typically costs approximately ₹1,800–₹3,800, which is significantly more affordable than purchasing a full factory replacement.`
        }
      ]
    },
    {
      group: `${brand} AC Visiting Charge & Service Cost FAQs`,
      items: [
        {
          q: `What is the visiting and diagnostic inspection charge for ${brand} AC in Coimbatore?`,
          a: `Our standard doorstep inspection charge for ${brand} air conditioners across Coimbatore is ₹200–₹350. When you proceed with the recommended repair, this visiting charge is fully deducted from your final repair bill.`
        },
        {
          q: `How much does a full foam and pressure jet water wash cost for a ${brand} Split AC?`,
          a: `A thorough jet pump water wash service in ${loc1} costs approximately ₹450–₹750 per unit. It cleans indoor cooling fins, blower fan barrel, drain tray, and outdoor condenser fins to restore maximum airflow.`
        }
      ]
    },
    {
      group: `${brand} AC Older vs Newer Inverter Model FAQs`,
      items: [
        {
          q: `Can an older R22 non-inverter ${brand} AC still be serviced and refilled in Coimbatore?`,
          a: `${oldNew} Yes, our Coimbatore service team carries R22 gas cylinders and universal capacitors for older ${brand} models, ensuring they continue cooling efficiently.`
        },
        {
          q: `Is it more economical to repair an old ${brand} AC or replace it with a 5-Star Inverter?`,
          a: `If the repair cost is under ₹2,000 (such as a capacitor or sensor replacement), repairing is very sensible. If the compressor has seized or coils are heavily corroded, upgrading to a 5-Star Inverter AC will save significant electricity in Coimbatore's climate.`
        }
      ]
    }
  ];
}

function buildFridgeFaqsForBrand(brand) {
  const loc1 = nextLoc(), loc2 = nextLoc(), loc3 = nextLoc(), loc4 = nextLoc(), loc5 = nextLoc();
  const bDetail = BRAND_DETAILS[brand] || {};
  const bTech = BRAND_TECH[brand] || {};
  const features = bDetail.features || `${brand} frost-free cooling, digital inverter compressor, and multi-airflow vents`;
  const errCode = (bDetail.errors && bDetail.errors.fridge) || 'Sensor alarm or temperature beeping';
  const oldNew = bDetail.oldVsNew || `Older ${brand} refrigerators used mechanical bi-metal thermostats, while newer models feature electronic NTC thermistors.`;

  return [
    {
      group: `${brand} Refrigerator Types & Inverter Cooling FAQs`,
      items: [
        {
          q: `Which ${brand} refrigerator models are supported for doorstep repairs in Coimbatore?`,
          a: `We service all ${brand} refrigerator types across Coimbatore, including Single Door Direct Cool (190L–220L), Double Door Frost Free (240L–350L), Side-by-Side, and Triple Door models in ${loc1} and ${loc2}.`
        },
        {
          q: `How does ${brand}'s inverter compressor adjust to seasonal temperature changes in Coimbatore?`,
          a: `${brand} inverter compressors automatically alter rotational speed based on ambient temperature sensors and door opening patterns. In hot months, the compressor speeds up to maintain food preservation, then scales down to whisper-quiet 20–30W operation overnight.`
        },
        {
          q: `What are the key technical cooling features built into modern ${brand} refrigerators?`,
          a: `${brand} refrigerators incorporate ${features}. These ensure uniform cooling distribution across all shelves without freezing items stored in the lower vegetable crisper.`
        }
      ]
    },
    {
      group: `${brand} Refrigerator Cooling Faults & Troubleshooting`,
      items: [
        {
          q: `Why is the freezer freezing ice normally while the lower fridge compartment stays warm in my ${brand}?`,
          a: `In ${brand} frost-free refrigerators in ${loc3}, this issue is usually caused by a failed defrost heater, defective bi-metal thermostat, or a blocked air duct damper that stops cold air from circulating down from the freezer.`
        },
        {
          q: `What causes water to accumulate below the vegetable crisper tray in a ${brand} fridge?`,
          a: `${loc4}-la ${brand} fridge-kulla vegetable box keezha water collect aagudhu-na, defrost drain line food waste or ice-naala block aagirukkum. Technician drain hole-a hot water flush panni clear pannuvanga.`
        },
        {
          q: `Why is my ${brand} refrigerator compressor making a clicking sound every few minutes without starting?`,
          a: `A clicking sound indicates the compressor is trying to engage but tripping on the overload protector (OLP). In ${loc5}, this is typically caused by a burnt PTC start relay (approx ₹450–₹950) or severe low-voltage fluctuation.`
        }
      ]
    },
    {
      group: `${brand} Refrigerator Spare Parts & Approximate Pricing`,
      items: [
        {
          q: `What is the approximate cost of replacing a ${brand} refrigerator compressor in Coimbatore?`,
          a: `Replacing a ${brand} refrigerator compressor costs approximately ₹3,200–₹6,500 depending on whether it is a standard reciprocating or digital inverter compressor. This includes the new compressor, gas charging (R600a/R134a), copper brazing, and system vacuuming.`
        },
        {
          q: `How much does a replacement magnetic door gasket seal cost for a ${brand} refrigerator?`,
          a: `A custom-fit perimeter door gasket for a ${brand} refrigerator costs approximately ₹950–₹1,850. Replacing a loose, torn, or hardened seal stops cool air leaks, prevents moisture condensation, and reduces compressor runtime.`
        },
        {
          q: `What is the approximate cost to replace a ${brand} frost-free evaporator fan motor?`,
          a: `Replacing an evaporator fan motor costs approximately ₹850–₹1,650. Our doorstep technician checks fan winding resistance and door switch voltage before confirming replacement.`
        }
      ]
    },
    {
      group: `${brand} Refrigerator Visiting Charge & Service Cost FAQs`,
      items: [
        {
          q: `What is the visiting charge for ${brand} refrigerator inspection in Coimbatore?`,
          a: `Our standard doorstep inspection fee for ${brand} refrigerators across all Coimbatore zones is ₹200–₹350. When you proceed with the recommended repair, this diagnostic fee is adjusted against the final service invoice.`
        },
        {
          q: `Are technical labour charges billed separately from spare parts for ${brand} refrigerators?`,
          a: `Yes, we provide transparent itemized billing. The quote clearly shows the inspection fee, technical repair labour (₹350–₹750 depending on job complexity), and the actual cost of replacement parts.`
        }
      ]
    },
    {
      group: `${brand} Refrigerator Older vs Digital Inverter Model FAQs`,
      items: [
        {
          q: `Can an older single-door direct cool ${brand} refrigerator still be repaired in Coimbatore?`,
          a: `${oldNew} Mechanical components for older ${brand} direct cool units—such as thermostats, overload relays, door switches, and copper filter driers—are readily available across our Coimbatore network.`
        },
        {
          q: `What should I do if the digital inverter PCB for an older ${brand} refrigerator is discontinued?`,
          a: `Our skilled electronics engineers in Coimbatore perform circuit-level board repairs—replacing shorted rectifiers, optocouplers, and power capacitors—to restore discontinued ${brand} inverter boards without requiring whole fridge replacement.`
        }
      ]
    }
  ];
}

function buildWashingMachineFaqsForBrand(brand) {
  const loc1 = nextLoc(), loc2 = nextLoc(), loc3 = nextLoc(), loc4 = nextLoc(), loc5 = nextLoc();
  const bDetail = BRAND_DETAILS[brand] || {};
  const bTech = BRAND_TECH[brand] || {};
  const features = bDetail.features || `${brand} dynamic wash agitator, stainless steel drum, and intelligent water level sensing`;
  const errCode = (bDetail.errors && bDetail.errors.wm) || 'E1 / E2 drain and inlet error';
  const oldNew = bDetail.oldVsNew || `Older ${brand} washers used timer dials and induction motors, whereas modern models utilize BLDC motors with digital sensor feedback.`;

  return [
    {
      group: `${brand} Washing Machine Types & Drum Drive FAQs`,
      items: [
        {
          q: `Which types of ${brand} washing machines do you service at doorstep in Coimbatore?`,
          a: `We provide complete doorstep repair for all ${brand} washing machine models across Coimbatore: Front Load (6kg–9kg), Top Load Fully Automatic (6.5kg–8kg), Semi-Automatic Twin Tub, and Washer Dryer combos in ${loc1} and ${loc2}.`
        },
        {
          q: `What are the key technical washing mechanisms built into ${brand} washers?`,
          a: `${brand} washing machines utilize ${features}. These ensure deep soil removal while protecting delicate fabric fibers.`
        },
        {
          q: `How does hard borewell water in Coimbatore affect ${brand} washing machines?`,
          a: `High TDS borewell water in areas like ${loc3} leads to calcium scaling on the water inlet valve filter, water heater coil, and outer tub spider bracket. Running an authorized descaling powder cycle every 3 months prevents premature component failure.`
        }
      ]
    },
    {
      group: `${brand} Washing Machine Drain, Spin & Vibration FAQs`,
      items: [
        {
          q: `Why is my ${brand} washing machine not draining water out of the drum?`,
          a: `${loc4}-la ${brand} washing machine drum-la water drain aagala-na, coin trap filter-la pins/coins stuck aagirukkum, drain hose choked aagirukkum, illana drain pump motor (approx ₹850–₹1,450) burn aagirukkum. Technician inspection panni issue resolve pannuvanga.`
        },
        {
          q: `What causes violent shaking and banging noise during ${brand} high-speed spin cycle?`,
          a: `Severe vibration during spin is typically caused by worn suspension dampers (approx ₹950–₹1,850 in top loaders), weakened front-load shock absorbers, uneven floor leveling feet, or worn drum spider tub bearings in ${loc5}.`
        },
        {
          q: `How do I clear error code ${errCode} on my ${brand} washing machine?`,
          a: `Error code ${errCode} points to a drainage timeout, inlet water pressure drop, or door interlock switch fault. First check whether the tap is fully open and clean the rear inlet mesh; if the error reappears, our technician will test the internal solenoid and pressure switch.`
        }
      ]
    },
    {
      group: `${brand} Washing Machine Spare Parts & Approximate Prices`,
      items: [
        {
          q: `What is the approximate cost of replacing a ${brand} washing machine drain pump in Coimbatore?`,
          a: `Replacing an original ${brand} drain pump motor typically costs approximately ₹850–₹1,450 in Coimbatore. The technician tests the pump windings with a digital multimeter and clears the pump chamber before installing the new unit.`
        },
        {
          q: `How much does a replacement water inlet valve cost for a ${brand} washing machine?`,
          a: `A replacement dual or single solenoid inlet valve for a ${brand} washer costs approximately ₹650–₹1,150. Replacing a scaled or burnt valve restores normal water filling speed and resolves fill error codes in ${loc1}.`
        },
        {
          q: `Can a damaged ${brand} washing machine PCB control board be repaired?`,
          a: `Yes. In cases where the washer is completely dead, buttons fail to respond, or the motor spins erratically, our circuit technicians repair the existing motherboard for approximately ₹1,600–₹3,800, saving substantial replacement cost.`
        }
      ]
    },
    {
      group: `${brand} Washing Machine Visiting Charge & Service Cost`,
      items: [
        {
          q: `What is the visiting charge for ${brand} washing machine inspection in Coimbatore?`,
          a: `Our standard doorstep inspection charge for ${brand} washing machines across all Coimbatore neighborhoods is ₹200–₹350. When you proceed with the recommended repair, this visiting fee is deducted from your final bill.`
        },
        {
          q: `How much does a complete deep tub cleaning and descaling service cost for a ${brand} washer?`,
          a: `A thorough drum descaling and pressure jet sanitization service in ${loc2} costs approximately ₹450–₹750, eliminating detergent buildup, lint accumulation, and foul mildew odors.`
        }
      ]
    },
    {
      group: `${brand} Washing Machine Maintenance & Longevity FAQs`,
      items: [
        {
          q: `Can an older belt-driven ${brand} washing machine still be repaired in Coimbatore?`,
          a: `${oldNew} Standard drive belts (approx ₹450–₹850), motor carbon brushes, capacitors, and water level pressure switches for older ${brand} washers remain readily available throughout Coimbatore.`
        },
        {
          q: `Why does my ${brand} front load rubber door gasket develop black mold spots?`,
          a: `Coimbatore's humid weather and keeping the door tightly closed after washes traps moisture in the rubber bellows. Leaving the door slightly ajar between cycles and wiping the gasket dry helps prevent mildew.`
        }
      ]
    }
  ];
}

function buildTvFaqsForBrand(brand) {
  const loc1 = nextLoc(), loc2 = nextLoc(), loc3 = nextLoc(), loc4 = nextLoc(), loc5 = nextLoc();
  const bDetail = BRAND_DETAILS[brand] || {};
  const bTech = BRAND_TECH[brand] || {};
  const features = bDetail.features || `${brand} vibrant display processor, wide viewing angles, and smart streaming capabilities`;
  const errCode = (bDetail.errors && bDetail.errors.tv) || 'Red standby light blinking or logo freeze';
  const oldNew = bDetail.oldVsNew || `Older ${brand} TVs used CCFL fluorescent backlight tubes, while modern models use high-efficiency LED arrays and smart microprocessors.`;

  return [
    {
      group: `${brand} TV Screen Types, Display Panels & Smart OS FAQs`,
      items: [
        {
          q: `Which ${brand} TV models and screen sizes do you repair in Coimbatore?`,
          a: `We repair all ${brand} TV models across Coimbatore from 32-inch, 43-inch, 50-inch, 55-inch to 65-inch sizes, including HD Ready, Full HD, 4K UHD Smart TVs, Android TV, and Google TV in ${loc1} and ${loc2}.`
        },
        {
          q: `What unique display and audio technologies are engineered into ${brand} TVs?`,
          a: `${brand} televisions incorporate ${features}. These provide rich contrast and immersive sound for living rooms in Coimbatore.`
        },
        {
          q: `How can I tell if my ${brand} TV has a backlight failure or a damaged LCD panel?`,
          a: `When backlights fail, the TV sound continues normally while the screen stays dark; shining a smartphone torch closely at the screen will reveal faint ghost images. If the LCD glass has physical cracks or colored vertical bars from impact, panel replacement is needed.`
        }
      ]
    },
    {
      group: `${brand} TV Display Lines, Sound & Power Problem FAQs`,
      items: [
        {
          q: `Why does my ${brand} TV have sound from TV channels but no picture on the screen?`,
          a: `${loc3}-la ${brand} TV-la sound nalla varudhu aana picture varala-na, backlight LED strip array burn aagirukkum. Technician screen test panni complete original LED strip set replace pannuvanga.`
        },
        {
          q: `What causes vertical or horizontal colored lines across a ${brand} TV screen?`,
          a: `Colored lines are caused by loose COF (Chip-on-Film) bonding ribbons or a defective T-Con (Timing Controller) board. If the T-Con board is faulty, circuit repair or board replacement restores crisp picture clarity in ${loc4}.`
        },
        {
          q: `Why is the red standby light blinking on my ${brand} TV without the unit turning on?`,
          a: `A blinking red standby light indicates the internal power supply board (SMPS) has detected an over-voltage or short circuit and entered safety protection mode. Our technician tests DC rail voltages on site in ${loc5}.`
        }
      ]
    },
    {
      group: `${brand} TV Backlight & Circuit Board Approximate Prices`,
      items: [
        {
          q: `What is the approximate cost of replacing ${brand} TV LED backlight strips in Coimbatore?`,
          a: `Replacing the complete LED backlight strip set in a ${brand} TV typically costs approximately ₹1,600–₹3,400 depending on screen size (32 to 55 inches). We replace the entire array rather than single burnt beads to guarantee balanced brightness and durability.`
        },
        {
          q: `How much does a power supply board (SMPS) repair or replacement cost for a ${brand} TV?`,
          a: `Power board repair or replacement typically costs approximately ₹1,800–₹3,500. Replacing shorted MOSFETs, diodes, or swollen capacitors restores normal startup without replacing the entire mainboard.`
        },
        {
          q: `Can a ${brand} Smart TV motherboard stuck in a restart loop on the boot logo be repaired?`,
          a: `Yes. When a TV is stuck in a boot loop, our technicians reflash the firmware using dedicated eMMC programmer tools or replace the main processor board for approximately ₹2,400–₹5,200.`
        }
      ]
    },
    {
      group: `${brand} TV Doorstep Inspection & Service Charge FAQs`,
      items: [
        {
          q: `What is the doorstep inspection charge for ${brand} TV repair in Coimbatore?`,
          a: `Our standard doorstep inspection charge for ${brand} televisions in ${loc1} and across all Coimbatore areas is ₹200–₹350. When you proceed with the repair work, this diagnostic fee is adjusted against your final invoice.`
        },
        {
          q: `Do you provide wall-mounting and un-mounting service for ${brand} TVs in Coimbatore?`,
          a: `Yes. Our technicians provide secure wall mount installation, bracket fixing, and neat cabling for ${brand} TVs up to 65 inches in ${loc2}, with standard installation charges ranging from ₹350–₹650.`
        }
      ]
    },
    {
      group: `${brand} TV Older LCD vs Newer 4K Smart TV Repair FAQs`,
      items: [
        {
          q: `Can an older non-smart ${brand} LCD or LED TV still be repaired in Coimbatore?`,
          a: `${oldNew} Older ${brand} models have robust power supply boards and readily available universal inverter and power components, making repairs very cost-effective.`
        },
        {
          q: `What can be done if the original motherboard for an older ${brand} TV is no longer manufactured?`,
          a: `When original boards are obsolete, our technicians can install high-compatibility universal Smart Android boards with full HDMI, USB, and Wi-Fi functionality, giving older ${brand} TVs modern smart capabilities.`
        }
      ]
    }
  ];
}

// -----------------------------------------------------------------------------------------
// 2. SERVICE CENTER PAGE APPLIANCE FAQS (MULTI-APPLIANCE MAPPING)
// -----------------------------------------------------------------------------------------

function buildServiceCenterApplianceFaqs(brand, appName, targetCount = 3) {
  const loc1 = nextLoc(), loc2 = nextLoc(), loc3 = nextLoc();
  const bDetail = BRAND_DETAILS[brand] || {};
  const lowerApp = appName.toLowerCase();
  const items = [];

  if (lowerApp.includes('air conditioner') || lowerApp.includes('split ac') || lowerApp.includes('cassette') || lowerApp.includes('window ac')) {
    items.push({
      q: `Why is my ${appName} not blowing cold air in ${loc1}?`,
      a: `In ${loc1} homes, cooling failure is commonly caused by clogged indoor air filters, low refrigerant pressure from a copper pipe pinhole leak, or a weak running capacitor (approx ₹550–₹950). Our technician inspects suction pressure and electrical leads on site.`
    });
    items.push({
      q: `What is the approximate cost of gas refilling and leak fixing for a ${appName} in Coimbatore?`,
      a: `Complete gas charging and leak brazing for a ${appName} in Coimbatore typically costs approximately ₹2,200–₹3,800. This includes nitrogen pressure testing, vacuum evacuation, and accurate refrigerant charging.`
    });
    items.push({
      q: `What is the doorstep inspection fee for ${appName} service in Coimbatore?`,
      a: `The standard visiting fee for ${appName} across Coimbatore is ₹200–₹350. When you approve the repair estimate, this inspection fee is adjusted against the final service invoice.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `What causes indoor water leakage from a ${appName}?`,
        a: `${loc2}-la ${appName} indoor water drip aagudhu-na, main reason choked drain tray, algae blockage in the drain pipe, or improper backplate slope. Technician drain line-a flush panni slope re-align pannuvanga.`
      });
    }
    if (targetCount >= 5) {
      items.push({
        q: `Can older non-inverter models of ${appName} still be serviced in Coimbatore?`,
        a: `Yes, universal capacitors, copper tubing, expansion valves, and blower fan motors for older ${brand} models remain widely available throughout Coimbatore.`
      });
    }
  } else if (lowerApp.includes('refrigerator') || lowerApp.includes('fridge') || lowerApp.includes('duocooling')) {
    items.push({
      q: `Why is the freezer working but the lower compartment warm in my ${appName}?`,
      a: `In ${loc1} homes, this symptom is usually caused by a failed defrost heater, defective bi-metal thermostat, or a blocked air duct damper that prevents cold air from circulating down into the fresh food section.`
    });
    items.push({
      q: `What is the approximate cost of replacing a ${appName} compressor in Coimbatore?`,
      a: `Replacing a ${appName} compressor typically costs approximately ₹3,200–₹6,500 depending on whether it is an inverter or reciprocating model. This includes the new compressor, gas charging, copper brazing, and system vacuuming.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} repair in Coimbatore?`,
      a: `Our doorstep inspection fee for ${appName} across all Coimbatore neighborhoods is ₹200–₹350. When you proceed with the recommended repair, this diagnostic fee is deducted from your final bill.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `What causes water to accumulate below the vegetable crisper in a ${appName}?`,
        a: `${loc2}-la ${appName} vegetable box keezha water collect aagudhu-na, defrost drain line food debris or ice-naala block aagirukkum. Technician drain hole-a hot water flush panni clear pannuvanga.`
      });
    }
    if (targetCount >= 5) {
      items.push({
        q: `Are spare parts available for older ${appName} models in Coimbatore?`,
        a: `Yes, mechanical components like start relays, thermostats, fan motors, and door gaskets for older ${brand} refrigerators remain readily available across our Coimbatore network.`
      });
    }
  } else if (lowerApp.includes('washing machine') || lowerApp.includes('washer')) {
    items.push({
      q: `Why is my ${appName} not draining water out of the drum in ${loc1}?`,
      a: `When water stays inside a ${appName} drum, the cause is usually a clogged coin trap filter, an obstruction in the drain hose, or a burnt drain pump motor (approx ₹850–₹1,450) in ${loc1}.`
    });
    items.push({
      q: `What causes excessive vibration and banging noise during the ${appName} spin cycle?`,
      a: `Severe thumping during spin is typically caused by worn suspension damping rods (approx ₹950–₹1,850 in top loaders), weakened shock absorbers in front loaders, uneven leveling feet, or worn tub bearings.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} service in Coimbatore?`,
      a: `Our standard doorstep inspection fee for ${appName} across Coimbatore is ₹200–₹350. If you authorize the repair, this inspection fee is adjusted against the final service invoice.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `What is the approximate cost to replace a water inlet valve on a ${appName}?`,
        a: `A replacement water inlet valve for a ${appName} costs approximately ₹650–₹1,150. Replacing a scaled or burnt valve restores normal water filling speed and resolves fill error codes in ${loc2}.`
      });
    }
    if (targetCount >= 5) {
      items.push({
        q: `Can older belt-driven models of ${appName} still be repaired in Coimbatore?`,
        a: `Yes, replacement belts (approx ₹450–₹850), motor carbon brushes, capacitors, and water level pressure switches for older ${brand} washers remain readily available.`
      });
    }
  } else if (lowerApp.includes('television') || lowerApp.includes('tv')) {
    items.push({
      q: `Why does my ${appName} have sound but no picture on the screen?`,
      a: `${loc1}-la ${appName} TV-la sound nalla varudhu aana picture varala-na, backlight LED strip array burn aagirukkum. Technician screen test panni complete original LED strip set replace pannuvanga.`
    });
    items.push({
      q: `What is the approximate cost of replacing LED backlight strips in a ${appName}?`,
      a: `Replacing the complete LED backlight strip set in a ${appName} typically costs approximately ₹1,600–₹3,400 depending on screen size (32 to 55 inches). We replace the entire array for balanced brightness and longevity.`
    });
    items.push({
      q: `What is the doorstep inspection fee for ${appName} repair in Coimbatore?`,
      a: `Our standard doorstep inspection charge for ${appName} in ${loc2} and across Coimbatore is ₹200–₹350. When you proceed with the repair work, this diagnostic fee is adjusted against the final service invoice.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `What causes horizontal or vertical colored lines across a ${appName} screen?`,
        a: `Colored lines are caused by loose COF (Chip-on-Film) bonding ribbons or a defective T-Con (Timing Controller) board. Circuit repair or board replacement restores crisp picture clarity in ${loc3}.`
      });
    }
    if (targetCount >= 5) {
      items.push({
        q: `Can an older non-smart ${appName} television still be repaired in Coimbatore?`,
        a: `Yes, older ${brand} TVs have durable power boards and readily available universal replacement parts. We can also install universal Smart Android motherboards to upgrade older TVs.`
      });
    }
  } else if (lowerApp.includes('microwave')) {
    items.push({
      q: `Why does my ${appName} run normally but fail to heat food?`,
      a: `In ${loc1} homes, when the turntable spins and lights turn on but food remains cold, the high-voltage magnetron tube (approx ₹1,600–₹2,950) or high-voltage capacitor/diode has failed.`
    });
    items.push({
      q: `What is the approximate cost to replace a magnetron in a ${appName}?`,
      a: `Replacing an original high-voltage magnetron in a ${appName} typically costs approximately ₹1,600–₹2,950. Our technician tests high-voltage continuity before replacement.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} service in Coimbatore?`,
      a: `Our doorstep inspection fee for ${appName} across Coimbatore is ₹200–₹350, adjusted against the final repair bill if work proceeds.`
    });
  } else if (lowerApp.includes('geyser') || lowerApp.includes('water heater')) {
    items.push({
      q: `Why is my ${appName} not heating water or tripping the electricity breaker?`,
      a: `In ${loc1} homes, severe calcium scaling from hard borewell water cracks the outer copper sheath of the heating element (approx ₹750–₹1,450), causing live earth leakage that trips the home MCB.`
    });
    items.push({
      q: `What is the approximate cost to replace a heating element in a ${appName}?`,
      a: `Replacing a heavy-duty copper or incoloy heating element in a ${appName} costs approximately ₹750–₹1,450 in Coimbatore. Our technician descales the inner tank during the service.`
    });
    items.push({
      q: `What is the doorstep inspection fee for ${appName} service in Coimbatore?`,
      a: `Our standard visiting fee for ${appName} across Coimbatore is ₹200–₹350, deducted from the final repair invoice if repair is approved.`
    });
  } else if (lowerApp.includes('dishwasher')) {
    items.push({
      q: `Why are dishes coming out dirty or oily from my ${appName}?`,
      a: `In ${loc1} kitchens, dirty dishes are typically caused by blocked spray arm nozzles, food grease coating the micro-mesh filter, or low water temperature due to a scaled heating element.`
    });
    items.push({
      q: `What is the approximate cost to replace a circulation or drain pump in a ${appName}?`,
      a: `Replacing a dishwasher drain pump costs approximately ₹1,200–₹2,200, while a main circulation wash pump costs approximately ₹2,200–₹4,200 depending on the model.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} service in Coimbatore?`,
      a: `Our doorstep inspection fee for ${appName} across all Coimbatore neighborhoods is ₹200–₹350, deducted from the final invoice upon repair approval.`
    });
  } else if (lowerApp.includes('chimney') || lowerApp.includes('hob') || lowerApp.includes('oven')) {
    items.push({
      q: `Why is the suction in my ${appName} noticeably weak in ${loc1}?`,
      a: `In Indian cooking, heavy oil fumes saturate the stainless steel baffle filters and exhaust duct. A deep chemical degreasing service (approx ₹650–₹1,400) restores full airflow.`
    });
    items.push({
      q: `What is the approximate cost to replace a suction blower motor in a ${appName}?`,
      a: `A replacement copper suction motor for a ${appName} costs approximately ₹1,800–₹3,400. Doorstep diagnosis verifies whether the issue is motor coil burning or a weak running capacitor.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} repair in Coimbatore?`,
      a: `Our standard visiting fee for ${appName} in Coimbatore is ₹200–₹350, adjusted against the final service invoice.`
    });
  } else if (lowerApp.includes('purifier') && lowerApp.includes('water')) {
    items.push({
      q: `Why is my ${appName} continuously draining waste water without filling the storage tank?`,
      a: `Continuous waste water drainage is usually caused by a faulty auto shut-off valve (ASV) or choked sediment/carbon filter cartridges restricting intake flow in ${loc1}.`
    });
    items.push({
      q: `What is the approximate cost of replacing RO membrane and filter cartridges in a ${appName}?`,
      a: `A complete filter replacement set (sediment + pre-carbon + post-carbon) costs approximately ₹650–₹1,250, while a 75/100 GPD RO membrane replacement costs approximately ₹1,400–₹2,400.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} service in Coimbatore?`,
      a: `Our doorstep inspection fee for ${appName} across Coimbatore is ₹200–₹350, deducted from the final repair invoice if repair proceeds.`
    });
  } else if (lowerApp.includes('purifier') && lowerApp.includes('air')) {
    items.push({
      q: `Why is the red air quality indicator staying continuously on in my ${appName}?`,
      a: `A red light usually means the laser PM2.5 particle sensor lens is coated with fine dust or the composite True HEPA filter has reached its maximum dust holding capacity in ${loc1}.`
    });
    items.push({
      q: `What is the approximate cost to replace a True HEPA filter in a ${appName}?`,
      a: `A genuine True HEPA and activated carbon composite filter set costs approximately ₹1,400–₹2,800 depending on CADR rating and room coverage capacity.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} inspection in Coimbatore?`,
      a: `Our standard visiting fee across Coimbatore is ₹200–₹350, adjusted against the final invoice if service proceeds.`
    });
  } else if (lowerApp.includes('freezer')) {
    items.push({
      q: `Why is my ${appName} not maintaining freezing temperature below zero?`,
      a: `In commercial establishments in ${loc1}, temperature rise in deep freezers is usually caused by low refrigerant pressure from a copper joint leak or a choked capillary expansion tube.`
    });
    items.push({
      q: `What is the approximate cost of commercial compressor replacement in a ${appName}?`,
      a: `Replacing a heavy-duty tropical commercial compressor in a ${appName} costs approximately ₹3,800–₹7,500 including gas recharging and nitrogen pressure testing.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} repair in Coimbatore?`,
      a: `Our commercial doorstep inspection fee across Coimbatore is ₹200–₹350, deducted from the final service invoice upon approval.`
    });
  } else {
    // General small appliance / audio / cooler
    items.push({
      q: `Why is my ${appName} not powering on or working properly in ${loc1}?`,
      a: `Common causes include internal power supply fuse burnout, damaged power cord, or control switch failure. Our technician checks circuit continuity and power rails directly at your doorstep.`
    });
    items.push({
      q: `What is the approximate repair cost for a ${appName} in Coimbatore?`,
      a: `Minor circuit and component repairs typically cost approximately ₹450–₹1,250 depending on part availability and fault complexity in ${loc2}.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} service in Coimbatore?`,
      a: `Our standard doorstep inspection charge across Coimbatore is ₹200–₹350, adjusted against the final service invoice.`
    });
  }

  return items;
}

// -----------------------------------------------------------------------------------------
// 3. EXECUTE REBUILD FOR ALL 174 PAGES
// -----------------------------------------------------------------------------------------

console.log('Generating full master FAQ dataset with 0 duplicates across all 174 pages...');

const masterFaqData = {};
let totalQ = 0;
let totalGroups = 0;

pages.forEach(p => {
  const filePath = p.file;
  const brand = p.brand;
  const cat = p.category;

  let pageGroups = [];

  if (cat === 'service-center' && p.brandSlug !== 'home-appliance') {
    const apps = p.appliances.length > 0 ? p.appliances : [`${brand} Home Appliances`];
    let qPerApp = 3;
    if (apps.length === 1) qPerApp = 10;
    else if (apps.length === 2) qPerApp = 5;
    else if (apps.length === 3) qPerApp = 4;
    else qPerApp = 3;

    apps.forEach(app => {
      const rawItems = buildServiceCenterApplianceFaqs(brand, app, qPerApp);
      const cleanItems = rawItems.map(it => ({
        q: cleanQ(it.q),
        a: cleanA(it.a)
      }));
      pageGroups.push({
        title: `${app} FAQs`,
        items: cleanItems
      });
    });

  } else if (cat === 'service-center' && p.brandSlug === 'home-appliance') {
    const apps = ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Microwave Oven'];
    apps.forEach(app => {
      const rawItems = buildServiceCenterApplianceFaqs('Multi-Brand', `${app}`, 3);
      const cleanItems = rawItems.map(it => ({
        q: cleanQ(it.q),
        a: cleanA(it.a)
      }));
      pageGroups.push({
        title: `Multi-Brand ${app} FAQs in Coimbatore`,
        items: cleanItems
      });
    });

  } else if (cat === 'root') {
    const apps = ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Microwave Oven'];
    apps.forEach(app => {
      const rawItems = buildServiceCenterApplianceFaqs('Home Appliance', `${app}`, 3);
      const cleanItems = rawItems.map(it => ({
        q: cleanQ(it.q),
        a: cleanA(it.a)
      }));
      pageGroups.push({
        title: `${app} Repair FAQs in Coimbatore`,
        items: cleanItems
      });
    });

  } else if (cat === 'ac') {
    const rawGroups = buildAcFaqsForBrand(brand);
    pageGroups = rawGroups.map(g => ({
      title: g.group,
      items: g.items.map(it => ({ q: cleanQ(it.q), a: cleanA(it.a) }))
    }));

  } else if (cat === 'fridge') {
    const rawGroups = buildFridgeFaqsForBrand(brand);
    pageGroups = rawGroups.map(g => ({
      title: g.group,
      items: g.items.map(it => ({ q: cleanQ(it.q), a: cleanA(it.a) }))
    }));

  } else if (cat === 'washing-machine') {
    const rawGroups = buildWashingMachineFaqsForBrand(brand);
    pageGroups = rawGroups.map(g => ({
      title: g.group,
      items: g.items.map(it => ({ q: cleanQ(it.q), a: cleanA(it.a) }))
    }));

  } else if (cat === 'tv') {
    const rawGroups = buildTvFaqsForBrand(brand);
    pageGroups = rawGroups.map(g => ({
      title: g.group,
      items: g.items.map(it => ({ q: cleanQ(it.q), a: cleanA(it.a) }))
    }));
  }

  let countOnPage = 0;
  pageGroups.forEach(g => {
    totalGroups++;
    countOnPage += g.items.length;
    totalQ += g.items.length;
  });

  masterFaqData[filePath] = {
    brand: brand,
    category: cat,
    groups: pageGroups,
    totalQuestions: countOnPage
  };
});

console.log(`\n=== FINAL REBUILT FAQ DATASET ===`);
console.log(`Total Pages: ${pages.length}`);
console.log(`Total FAQ Groups: ${totalGroups}`);
console.log(`Total FAQ Questions: ${totalQ}`);
console.log(`Total Unique Questions in Set: ${usedQuestions.size}`);
console.log(`Total Unique Answers in Set: ${usedAnswers.size}`);

if (usedQuestions.size === totalQ && usedAnswers.size === totalQ) {
  console.log('SUCCESS: Exactly 0 duplicate questions and 0 duplicate answers across the ENTIRE website!');
} else {
  console.log(`Warning: Duplicates found! Questions diff: ${totalQ - usedQuestions.size}, Answers diff: ${totalQ - usedAnswers.size}`);
}

fs.writeFileSync('./scripts/coimbatore_master_faqs_v2.json', JSON.stringify(masterFaqData, null, 2), 'utf8');
console.log('Saved to scripts/coimbatore_master_faqs_v2.json');
