// scripts/generate_deep_rebuilt_faqs_erode.js
// Generates genuinely unique, brand-wise + appliance-wise FAQs for all 174 pages for Erode.
// Ensures 100% uniqueness: 0 duplicate questions, 0 duplicate answers across the entire website.
// Includes realistic Erode localities, approximate pricing terms ("Approx.", "Typical range"),
// visiting charges, technical details, and Tanglish / Tamil phrases where suitable.

const fs = require('fs');
const path = require('path');
const { BRAND_TECH } = require('./brand_appliance_data.js');
const { BRAND_DETAILS } = require('./brand_custom_data.js');
const { nextLoc, cleanQ, cleanA, usedQuestions, usedAnswers } = require('./erode_faq_core.js');

const pages = JSON.parse(fs.readFileSync('./scripts/erode_pages_data.json', 'utf8'));

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
          q: `Which ${brand} AC tonnage (1 Ton, 1.5 Ton, or 2 Ton) is best suited for Erode bedrooms?`,
          a: `For standard 100 to 140 sq. ft. bedrooms in ${loc1}, a 1.5 Ton ${brand} 3-Star or 5-Star Inverter AC is optimal. For top-floor rooms exposed to direct afternoon heat in areas like ${loc2}, our technicians recommend a 1.5 Ton or 2 Ton unit with 100% copper condenser coils.`
        },
        {
          q: `How does ${brand}'s inverter compressor technology reduce monthly electricity bills in Erode?`,
          a: `${brand} inverter compressors vary motor speed based on heat load instead of switching completely on and off. Operating at continuous partial capacity keeps room temperature stable within 0.5°C and saves up to 35–45% on TANGEDCO power consumption.`
        },
        {
          q: `What unique technologies does ${brand} incorporate for tropical summer cooling?`,
          a: `${brand} units feature ${features}. These systems ensure stable cooling even when outdoor ambient temperatures exceed 48°C–52°C during Erode summers.`
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
          q: `What is the approximate cost of ${brand} AC refrigerant gas recharging in Erode?`,
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
          q: `What is the visiting and diagnostic inspection charge for ${brand} AC in Erode?`,
          a: `Our standard doorstep inspection charge for ${brand} air conditioners across Erode is ₹200–₹350. When you proceed with the recommended repair, this visiting charge is fully deducted from your final repair bill.`
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
          q: `Can an older R22 non-inverter ${brand} AC still be serviced and refilled in Erode?`,
          a: `${oldNew} Yes, our Erode service team carries R22 gas cylinders and universal capacitors for older ${brand} models, ensuring they continue cooling efficiently.`
        },
        {
          q: `Is it more economical to repair an old ${brand} AC or replace it with a 5-Star Inverter?`,
          a: `If the repair cost is under ₹2,000 (such as a capacitor or sensor replacement), repairing is very sensible. If the compressor has seized or coils are heavily corroded, upgrading to a 5-Star Inverter AC will save significant electricity in Erode's climate.`
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
          q: `Which ${brand} refrigerator models are supported for doorstep repairs in Erode?`,
          a: `We service all ${brand} refrigerator types across Erode, including Single Door Direct Cool (190L–220L), Double Door Frost Free (240L–350L), Side-by-Side, and Triple Door models in ${loc1} and ${loc2}.`
        },
        {
          q: `How does ${brand}'s inverter compressor adjust to seasonal temperature changes in Erode?`,
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
          q: `What is the approximate cost of replacing a ${brand} refrigerator compressor in Erode?`,
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
          q: `What is the visiting charge for ${brand} refrigerator inspection in Erode?`,
          a: `Our standard doorstep inspection fee for ${brand} refrigerators across all Erode zones is ₹200–₹350. When you proceed with the recommended repair, this diagnostic fee is adjusted against the final service invoice.`
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
          q: `Can an older single-door direct cool ${brand} refrigerator still be repaired in Erode?`,
          a: `${oldNew} Mechanical components for older ${brand} direct cool units—such as thermostats, overload relays, door switches, and copper filter driers—are readily available across our Erode network.`
        },
        {
          q: `What should I do if the digital inverter PCB for an older ${brand} refrigerator is discontinued?`,
          a: `Our skilled electronics engineers in Erode perform circuit-level board repairs—replacing shorted rectifiers, optocouplers, and power capacitors—to restore discontinued ${brand} inverter boards without requiring whole fridge replacement.`
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
          q: `Which types of ${brand} washing machines do you service at doorstep in Erode?`,
          a: `We provide complete doorstep repair for all ${brand} washing machine models across Erode: Front Load (6kg–9kg), Top Load Fully Automatic (6.5kg–8kg), Semi-Automatic Twin Tub, and Washer Dryer combos in ${loc1} and ${loc2}.`
        },
        {
          q: `What are the key technical washing mechanisms built into ${brand} washers?`,
          a: `${brand} washing machines utilize ${features}. These ensure deep soil removal while protecting delicate fabric fibers.`
        },
        {
          q: `How does hard borewell water in Erode affect ${brand} washing machines?`,
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
          q: `What is the approximate cost of replacing a ${brand} washing machine drain pump in Erode?`,
          a: `Replacing an original ${brand} drain pump motor typically costs approximately ₹850–₹1,450 in Erode. The technician tests the pump windings with a digital multimeter and clears the pump chamber before installing the new unit.`
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
          q: `What is the visiting charge for ${brand} washing machine inspection in Erode?`,
          a: `Our standard doorstep inspection charge for ${brand} washing machines across all Erode neighborhoods is ₹200–₹350. When you proceed with the recommended repair, this visiting fee is deducted from your final bill.`
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
          q: `Can an older belt-driven ${brand} washing machine still be repaired in Erode?`,
          a: `${oldNew} Standard drive belts (approx ₹450–₹850), motor carbon brushes, capacitors, and water level pressure switches for older ${brand} washers remain readily available throughout Erode.`
        },
        {
          q: `Why does my ${brand} front load rubber door gasket develop black mold spots?`,
          a: `Erode's warm climate and keeping the door tightly closed after washes traps moisture in the rubber bellows. Leaving the door slightly ajar between cycles and wiping the gasket dry helps prevent mildew.`
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
          q: `Which ${brand} TV models and screen sizes do you repair in Erode?`,
          a: `We repair all ${brand} TV models across Erode from 32-inch, 43-inch, 50-inch, 55-inch to 65-inch sizes, including HD Ready, Full HD, 4K UHD Smart TVs, Android TV, and Google TV in ${loc1} and ${loc2}.`
        },
        {
          q: `What unique display and audio technologies are engineered into ${brand} TVs?`,
          a: `${brand} televisions incorporate ${features}. These provide rich contrast and immersive sound for living rooms in Erode.`
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
          q: `What is the approximate cost of replacing ${brand} TV LED backlight strips in Erode?`,
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
          q: `What is the doorstep inspection charge for ${brand} TV repair in Erode?`,
          a: `Our standard doorstep inspection charge for ${brand} televisions in ${loc1} and across all Erode areas is ₹200–₹350. When you proceed with the repair work, this diagnostic fee is adjusted against your final invoice.`
        },
        {
          q: `Do you provide wall-mounting and un-mounting service for ${brand} TVs in Erode?`,
          a: `Yes. Our technicians provide secure wall mount installation, bracket fixing, and neat cabling for ${brand} TVs up to 65 inches in ${loc2}, with standard installation charges ranging from ₹350–₹650.`
        }
      ]
    },
    {
      group: `${brand} TV Older LCD vs Newer 4K Smart TV Repair FAQs`,
      items: [
        {
          q: `Can an older non-smart ${brand} LCD or LED TV still be repaired in Erode?`,
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
      q: `What is the approximate cost of gas refilling and leak fixing for a ${appName} in Erode?`,
      a: `Complete gas charging and leak brazing for a ${appName} in Erode typically costs approximately ₹2,200–₹3,800. This includes nitrogen pressure testing, vacuum evacuation, and accurate refrigerant charging.`
    });
    items.push({
      q: `What is the doorstep inspection fee for ${appName} service in Erode?`,
      a: `The standard visiting fee for ${appName} across Erode is ₹200–₹350. When you approve the repair estimate, this inspection fee is adjusted against the final service invoice.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `What causes indoor water leakage from a ${appName}?`,
        a: `${loc2}-la ${appName} indoor water drip aagudhu-na, main reason choked drain tray, algae blockage in the drain pipe, or improper backplate slope. Technician drain line-a flush panni slope re-align pannuvanga.`
      });
    }
  } else if (lowerApp.includes('refrigerator') || lowerApp.includes('fridge') || lowerApp.includes('freezer')) {
    items.push({
      q: `Why is the freezer cooling but the lower compartment warm in my ${appName} in ${loc1}?`,
      a: `This is usually caused by a defective defrost timer, failed bi-metal thermostat, or frost clogging the air circulation damper duct in ${loc1}. Defrost circuit repair typically costs approximately ₹850–₹1,650.`
    });
    items.push({
      q: `What is the approximate cost to replace a compressor in a ${appName} in Erode?`,
      a: `Replacing a ${appName} compressor costs approximately ₹3,200–₹6,500 depending on single-door reciprocating or inverter multi-flow compressor models. Gas charging (R600a/R134a) and vacuuming are included.`
    });
    items.push({
      q: `How do I book an inspection for a ${appName} near ${loc2}?`,
      a: `Booking takes under 60 seconds. Call +91 92115 12088 or WhatsApp our service desk with your locality in ${loc2}. A qualified technician will arrive with diagnostic equipment.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `Why does water collect under the vegetable box of a ${appName}?`,
        a: `When the defrost drain pipe clogs with food debris or ice, melting water backs up into the crisper drawer. Technicians flush the drain line and clear the drip tray.`
      });
    }
  } else if (lowerApp.includes('washing machine') || lowerApp.includes('washer dryer') || lowerApp.includes('dryer')) {
    items.push({
      q: `Why is my ${appName} drum not draining water during rinse cycle in ${loc1}?`,
      a: `A jammed coin filter, kinked drain hose, or burnt drain pump motor (approx ₹850–₹1,450) is the usual culprit in ${loc1}. Our technician tests pump impeller rotation and clears drain debris.`
    });
    items.push({
      q: `What causes high vibration and shaking during spin cycle in a ${appName}?`,
      a: `Vibration during high-speed spin in ${loc2} is usually caused by worn shock absorbers, loose tub suspension rods, or unlevel rubber machine feet. Replacement damper kits cost approx ₹950–₹1,850.`
    });
    items.push({
      q: `What is the visiting charge for a ${appName} technician visit in Erode?`,
      a: `Our doorstep inspection charge across Erode is ₹200–₹350. If you authorize the suggested repair, the visiting charge is deducted from your final bill.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `Can a noisy drum bearing be replaced in a ${appName}?`,
        a: `Yes. If the washer makes a loud aircraft-like roaring noise during spin, our technicians replace the rear drum bearings and waterproof oil seal on site.`
      });
    }
  } else if (lowerApp.includes('television') || lowerApp.includes('tv') || lowerApp.includes('led')) {
    items.push({
      q: `Why does my ${appName} have sound but no picture on the screen in ${loc1}?`,
      a: `In ${loc1}, clear channel audio with a black screen almost always indicates burned LED backlight strips. Complete replacement with an authentic aluminum-core backlight array costs approx ₹1,600–₹3,400.`
    });
    items.push({
      q: `Can vertical colored lines or double images on a ${appName} be repaired?`,
      a: `Yes. Vertical lines are often caused by a faulty T-Con board or degraded COF panel bonding. Board repair costs approximately ₹1,400–₹2,800, restoring clean HD visuals in ${loc2}.`
    });
    items.push({
      q: `How much is the diagnostic inspection charge for a ${appName} in Erode?`,
      a: `Inspection for LED/Smart TVs is ₹200–₹350 across all Erode areas. This diagnostic fee is adjusted against final repair charges upon approval.`
    });
    if (targetCount >= 4) {
      items.push({
        q: `Why is the red standby power light blinking on my ${appName}?`,
        a: `Blinking standby LED indicates the power supply circuit has triggered overload protection due to a shorted capacitor or MOSFET. Board-level repair restores reliable startup.`
      });
    }
  } else if (lowerApp.includes('microwave') || lowerApp.includes('oven')) {
    items.push({
      q: `Why does my ${appName} run but fail to heat food in ${loc1}?`,
      a: `A turntable rotating without heat indicates a blown high-voltage diode, failed magnetron tube, or defective door micro-switch. Magnetron replacement costs approximately ₹1,450–₹2,850.`
    });
    items.push({
      q: `What causes sparks or burning smells inside a ${appName}?`,
      a: `Sparks are caused by grease accumulation on the mica waveguide cover or chipping interior cavity paint. Replacing the mica sheet (approx ₹350–₹650) prevents magnetron damage.`
    });
    items.push({
      q: `What is the doorstep repair cost for a ${appName} in Erode?`,
      a: `Doorstep inspection is ₹200–₹350 in ${loc2}, with typical minor fixes like thermal fuse or door switch replacements costing approx ₹500–₹950.`
    });
  } else if (lowerApp.includes('dishwasher')) {
    items.push({
      q: `Why is my ${appName} not draining water and displaying an error in ${loc1}?`,
      a: `A clogged coarse filter, twisted drain hose, or blocked drain pump impeller causes drainage faults. Cleaning and pump check cost approx ₹650–₹1,200.`
    });
    items.push({
      q: `What causes dishes to come out dirty or cloudy from a ${appName}?`,
      a: `Mineral buildup in Erode's borewell water clogs spray arm jets. Descaling spray arms and replenishing water softening salt restore sparkling clean results.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} service in Erode?`,
      a: `Doorstep inspection for dishwashers across Erode is ₹250–₹350, fully adjusted when proceeding with the repair.`
    });
  } else if (lowerApp.includes('purifier') || lowerApp.includes('ro') || lowerApp.includes('water')) {
    items.push({
      q: `Why is the water flow from my ${appName} extremely slow in ${loc1}?`,
      a: `Sediment filter choking from high TDS tap water or an exhausted RO membrane causes low flow. Filter replacement kits cost approximately ₹750–₹2,200.`
    });
    items.push({
      q: `Why does my ${appName} make a continuous beeping alarm?`,
      a: `Beeping signals that the UV lamp has reached end-of-life or the booster pump pressure is insufficient. Technicians test pressure and replace UV bulbs on site in ${loc2}.`
    });
    items.push({
      q: `What is the visiting charge for a ${appName} technician in Erode?`,
      a: `Inspection fee is ₹200–₹350 across Erode, adjusted against the filter or service cost.`
    });
  } else {
    items.push({
      q: `Do you provide doorstep repair for ${appName} in ${loc1}?`,
      a: `Yes, we provide complete doorstep technical inspection, fault diagnosis, and genuine parts replacement for ${appName} across ${loc1} and all Erode localities.`
    });
    items.push({
      q: `What is the approximate repair cost for a ${appName} in Erode?`,
      a: `Repair costs depend on the required spare parts, typically ranging between ₹650–₹2,400. Clear estimates are provided before starting work.`
    });
    items.push({
      q: `What is the visiting charge for ${appName} inspection in Erode?`,
      a: `The standard doorstep inspection fee across Erode is ₹200–₹350, adjusted into the final invoice when service is approved.`
    });
  }

  return items;
}

// -----------------------------------------------------------------------------------------
// 3. MASTER FAQ GENERATION LOOP ACROSS ALL 174 PAGES
// -----------------------------------------------------------------------------------------

const masterFaqs = {};

pages.forEach(p => {
  const brand = p.brand || 'Home Appliance';
  const cat = p.category;
  const newFile = p.newFile;
  const oldFile = p.oldFile;

  let pageGroups = [];

  if (cat === 'ac') {
    pageGroups = buildAcFaqsForBrand(brand);
  } else if (cat === 'fridge') {
    pageGroups = buildFridgeFaqsForBrand(brand);
  } else if (cat === 'washing-machine') {
    pageGroups = buildWashingMachineFaqsForBrand(brand);
  } else if (cat === 'tv') {
    pageGroups = buildTvFaqsForBrand(brand);
  } else if (cat === 'service-center') {
    // Generate FAQs for each appliance of this brand
    const appliances = (p.appliances && p.appliances.length > 0)
      ? p.appliances
      : [`${brand} Air Conditioner`, `${brand} Refrigerator`, `${brand} Washing Machine`, `${brand} Television`];

    // Distribute questions across appliances
    const perAppCount = Math.max(3, Math.floor(20 / appliances.length));

    appliances.forEach(app => {
      const items = buildServiceCenterApplianceFaqs(brand, app, perAppCount);
      pageGroups.push({
        group: `${app} Service FAQs`,
        items: items
      });
    });

    // Add a common booking & visiting charge group for this brand
    const locA = nextLoc(), locB = nextLoc();
    pageGroups.push({
      group: `${brand} Doorstep Booking & Visiting Charge FAQs`,
      items: [
        {
          q: `How can I book an on-site service visit for ${brand} appliances in Erode?`,
          a: `Booking takes under 60 seconds. Call our local Erode service desk at +91 92115 12088 or send a WhatsApp message with your locality in ${locA}. We confirm your slot with a nearby technician.`
        },
        {
          q: `What are your service center operating hours across Erode?`,
          a: `Our doorstep technicians are available 7 days a week from 6:00 AM to 11:00 PM, providing flexible morning and evening appointment slots for residential homes in ${locB}.`
        },
        {
          q: `Are technical spare parts used for ${brand} repairs genuine and tested?`,
          a: `Yes. All replacement components—such as capacitors, relays, fan motors, drain pumps, and thermistors—are brand-compatible, tested for electrical compliance, and accompanied by transparent warranties.`
        }
      ]
    });

  } else if (cat === 'root') {
    // index.html FAQ
    const loc1 = nextLoc(), loc2 = nextLoc(), loc3 = nextLoc(), loc4 = nextLoc();
    pageGroups = [
      {
        group: "Home Appliance Repair Services in Erode",
        items: [
          {
            q: "Which home appliances do you repair at doorstep across Erode?",
            a: `We provide comprehensive doorstep repair for washing machines (front load, top load, semi-automatic), refrigerators (single door, double door, frost-free, inverter), air conditioners (split, window, inverter), and LED/Smart TVs across all 200 Erode localities including ${loc1}, ${loc2}, and ${loc3}.`
          },
          {
            q: "How quickly can a technician visit my residence in Erode?",
            a: "Our local service technicians are stationed across East, West, North, and South Erode. We typically arrive within 2 to 4 hours of your service request."
          },
          {
            q: "What is the standard doorstep inspection and diagnostic charge?",
            a: "Our standard inspection charge across Erode is ₹200–₹350. When you proceed with the recommended repair, this visiting fee is fully adjusted against the final service invoice."
          }
        ]
      },
      {
        group: "Common Appliance Faults & On-Site Solutions",
        items: [
          {
            q: "What causes a washing machine drum to stop spinning or draining?",
            a: "Drainage failures are commonly caused by coin trap clogs, foreign object blockages in the drain hose, or a burnt drain pump motor. Technicians inspect the pump and clear blockages on site."
          },
          {
            q: "Why is my refrigerator cooling coil freezing while lower shelves stay warm?",
            a: "In frost-free refrigerators, this indicates defrost system failure (defective bi-metal thermostat, broken thermal fuse, or burnt defrost heater). Technicians de-ice ducts and replace faulty sensors on site."
          },
          {
            q: "Why is my split AC blowing warm air during hot afternoons in Erode?",
            a: "Warm air is typically caused by a dirty outdoor condenser coil, a weak compressor running capacitor, or low refrigerant pressure from a copper pipe micro-leak. Technicians carry pressure gauges and leak detectors."
          },
          {
            q: "Why does my Smart TV have audio output but no picture display?",
            a: "Audio without video indicates burned LED backlight strips inside the display panel. Our technicians replace the entire LED array on site with warranty-backed parts."
          }
        ]
      },
      {
        group: "Spare Parts, Pricing & Warranty Information",
        items: [
          {
            q: "Do you provide transparent cost estimates before beginning repair work?",
            a: "Yes. Our technician conducts a thorough physical and electrical diagnosis, explains the exact fault, and provides an itemized estimate for labour and spare parts before touching any components."
          },
          {
            q: "Are replacement spare parts covered under service warranty?",
            a: "Yes, genuine replacement components carry a 30 to 90-day service warranty depending on the part type, giving you complete peace of mind."
          },
          {
            q: "Do you service all leading appliance brands in Erode?",
            a: "Yes, our technicians service over 54 leading national and global brands including Samsung, LG, Whirlpool, Bosch, IFB, Godrej, Voltas, Daikin, Blue Star, Sony, and many others."
          }
        ]
      },
      {
        group: "Booking & Working Hours",
        items: [
          {
            q: "What are your service center customer care operating hours in Erode?",
            a: "We operate Monday through Sunday from 6:00 AM to 11:00 PM. Doorstep appointments can be scheduled according to your personal convenience."
          },
          {
            q: "How can I book an urgent home appliance repair appointment?",
            a: "Call us directly at +91 92115 12088 or click the WhatsApp button to chat with our local Erode service desk immediately."
          },
          {
            q: "Can I schedule weekend or evening visits in Erode?",
            a: `Yes, we offer flexible evening and weekend doorstep slots across ${loc4} and surrounding areas for working professionals.`
          }
        ]
      }
    ];
  }

  // Enforce 100% uniqueness on every question and answer
  const cleanGroups = pageGroups.map(g => {
    return {
      title: g.group,
      items: g.items.map(item => {
        return {
          q: cleanQ(item.q),
          a: cleanA(item.a)
        };
      })
    };
  });

  let totalQ = 0;
  cleanGroups.forEach(g => totalQ += g.items.length);

  masterFaqs[newFile] = {
    brand: brand,
    category: cat,
    groups: cleanGroups,
    totalQuestions: totalQ
  };
});

let totalSavedFaqs = 0;
for (const file in masterFaqs) {
  totalSavedFaqs += masterFaqs[file].totalQuestions;
}

console.log(`=== MASTER ERODE FAQS GENERATION REPORT ===`);
console.log(`Total Pages: ${Object.keys(masterFaqs).length}`);
console.log(`Total FAQ Questions Generated: ${totalSavedFaqs}`);
console.log(`Unique Questions: ${usedQuestions.size}`);
console.log(`Unique Answers: ${usedAnswers.size}`);

if (usedQuestions.size === totalSavedFaqs && usedAnswers.size === totalSavedFaqs) {
  console.log(`SUCCESS: 100% Unique FAQs across all pages with 0 duplicates!`);
  fs.writeFileSync('./scripts/erode_master_faqs.json', JSON.stringify(masterFaqs, null, 2));
  console.log(`Saved to ./scripts/erode_master_faqs.json`);
} else {
  console.error(`ERROR: Duplication detected! Q diff: ${totalSavedFaqs - usedQuestions.size}, A diff: ${totalSavedFaqs - usedAnswers.size}`);
}
