// scripts/build_madurai_faqs.js
// Generates appliance-specific and brand-specific FAQs for all 174 Madurai pages.
// Includes natural Madurai localization, pricing FAQs with disclaimers, and genuine repair questions.

const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));

const localities = [
  "Anna Nagar", "KK Nagar", "Arapalayam", "Goripalayam", "Tallakulam", 
  "Mattuthavani", "Vilangudi", "Thiruppalai", "Bibikulam", "Sellur", 
  "Kalavasal", "Ponmeni", "Kochadai", "Thirunagar", "Pasumalai", 
  "Alagappan Nagar", "Villapuram", "South Gate", "Palanganatham", "TVS Nagar", 
  "Jaihindpuram", "Avaniyapuram", "Ellis Nagar", "K.Pudur", "Iyer Bungalow"
];

function getAcFaqs(brand, loc1, loc2, seed) {
  const b = brand.startsWith('All') ? 'air conditioner' : `${brand} AC`;
  return {
    groups: [
      {
        title: `${brand} AC Cooling & Technical Issues`,
        items: [
          {
            q: `Why is my ${b} running continuously but not cooling the room in ${loc1}?`,
            a: `In ${loc1} and across Madurai, heavy airborne dust and high summer temperatures frequently choke the outdoor condenser fins and indoor nylon filters. Other common culprits include a weakened run capacitor, low refrigerant pressure due to micro-leaks, or a faulty room sensor. A doorstep technician tests the gas pressure with a manifold gauge and checks running amperage.`
          },
          {
            q: `What causes water dripping from the ${b} indoor unit inside my room?`,
            a: `Indoor water dripping usually happens when the condensate drain pipe is blocked with algae or dust sediment, or when the indoor coil freezes due to low refrigerant or choked air filters. Our technician flushes the drain line using pressure equipment and ensures proper backward gradient for smooth drainage.`
          },
          {
            q: `Outdoor compressor humming sound vandhu trip aagudha? Enna problem?`,
            a: `Humming without starting usually points to a failed dual run capacitor (typically 35uF to 55uF) or low supply voltage. If the capacitor has degraded, the compressor overheats and trips on internal thermal overload. Replacing the capacitor on-site immediately gets the cooling cycle running.`
          }
        ]
      },
      {
        title: `Service Charges & Spare Parts Pricing in Madurai`,
        items: [
          {
            q: `How much does ${b} service and gas filling cost in Madurai?`,
            a: `Standard AC servicing or jet cleaning typically ranges from ₹499 to ₹899 depending on indoor and outdoor condition. Refrigerant charging (R32, R410A, or R22) involves nitrogen leak testing, vacuuming, and refilling, which varies depending on gas type and quantity. Final cost depends on model, fault and parts required, and the technician confirms the exact price after inspection.`
          },
          {
            q: `What is the visiting and inspection charge for AC repair in ${loc2}?`,
            a: `Our standard technician visiting fee across ${loc2} and all Madurai areas is ₹200 to ₹350. When you proceed with the suggested repair or component replacement, this inspection charge is fully adjusted into your final service bill.`
          },
          {
            q: `How much does an AC fan motor or inverter PCB repair cost?`,
            a: `Minor motor capacitor or sensor replacement costs around ₹650–₹1,200. Inverter PCB board-level track or relay repair typically ranges between ₹1,500–₹3,200 depending on circuit damage. Parts and repair charges can vary by model, and genuine compatible parts are always quoted with customer approval first.`
          }
        ]
      },
      {
        title: `Madurai Doorstep Service & Booking`,
        items: [
          {
            q: `Do you provide doorstep ${b} repair service near ${loc1} and ${loc2}?`,
            a: `Yes, we cover all residential and commercial addresses in ${loc1}, ${loc2}, and surrounding Madurai localities. Technicians carry common capacitors, relays, tools, and manifold gauges to complete over 90% of repairs directly at your home.`
          },
          {
            q: `How quickly can a technician visit my home in Madurai?`,
            a: `We typically arrange same-day doorstep technician visits within 2 to 4 hours of your request. You can call our Madurai desk at +91 92115 12088 or send a quick WhatsApp message with your location to confirm a convenient time slot.`
          }
        ]
      }
    ]
  };
}

function getFridgeFaqs(brand, loc1, loc2, seed) {
  const b = brand.startsWith('All') ? 'refrigerator' : `${brand} refrigerator`;
  return {
    groups: [
      {
        title: `${brand} Refrigerator Cooling & Defrost Troubles`,
        items: [
          {
            q: `Why is the freezer working but the lower fridge compartment is not cooling in my ${b}?`,
            a: `In frost-free refrigerators, this classic symptom indicates defrost system failure. When the defrost timer, bi-metal thermostat, or defrost heater fails, thick frost blocks the evaporator coil air duct, preventing cold air from circulating downwards. Our Madurai technician thaws the ice block and replaces the faulty defrost sensor on-site in ${loc1}.`
          },
          {
            q: `My ${b} makes a clicking noise every 2 to 3 minutes and fails to cool. What is wrong?`,
            a: `Clicking noise without compressor startup is usually caused by a burned PTC starter relay or open overload protector (OLP). In some cases, low line voltage or a locked compressor rotor can cause the overload switch to trip. Our technician tests the compressor terminal resistance before installing a new genuine starter relay.`
          },
          {
            q: `Fridge door close panna mudiyala, rubber loose-ah irukka?`,
            a: `Worn out or hardened magnetic door gaskets allow humid room air inside, causing excessive ice buildup, water sweating on shelves, and food spoilage. Replacing the gasket with a flexible, magnetic sealing bead ensures an airtight closure and lowers your electricity bill.`
          }
        ]
      },
      {
        title: `Repair Pricing & Spare Parts in Madurai`,
        items: [
          {
            q: `How much does ${b} thermostat or relay replacement cost in Madurai?`,
            a: `Replacing minor electrical parts like a PTC starter relay, overload protector, or mechanical thermostat typically ranges between ₹650–₹1,450. Final cost depends on model, fault and parts required. Technician inspection is required before confirming the final repair cost.`
          },
          {
            q: `What is the cost of refrigerator gas recharge and leak fixing in ${loc2}?`,
            a: `Sealed system repair—including pinpointing copper tube leaks, nitrogen flushing, capillary tube replacement, and pure R600a or R134a charging—generally ranges from ₹1,800 to ₹3,200. Parts and repair charges can vary by model.`
          },
          {
            q: `What is the visiting fee for a fridge inspection in ${loc1}?`,
            a: `Our doorstep inspection fee across ${loc1} and all Madurai wards is ₹200 to ₹350. If you confirm the repair, this inspection amount is deducted from the final service invoice.`
          }
        ]
      },
      {
        title: `Doorstep Service & Coverage in Madurai`,
        items: [
          {
            q: `Can ${b} compressor or gas problems be serviced directly at my home in ${loc2}?`,
            a: `Yes, our technician brings portable brazing torches, vacuum pumps, refrigerant cans, and digital meters directly to your home in ${loc2}. There is no need to transport your bulky refrigerator to a distant workshop.`
          },
          {
            q: `How do I book a verified ${b} technician in Madurai?`,
            a: `Booking takes under a minute. Call our local Madurai customer desk at +91 92115 12088 or share your fridge model and issue on WhatsApp for immediate technician dispatch.`
          }
        ]
      }
    ]
  };
}

function getWmFaqs(brand, loc1, loc2, seed) {
  const b = brand.startsWith('All') ? 'washing machine' : `${brand} washing machine`;
  return {
    groups: [
      {
        title: `${brand} Washing Machine Mechanical & Drain Issues`,
        items: [
          {
            q: `Why is my ${b} not draining water and showing an error code in ${loc1}?`,
            a: `Water drainage failure in front load and top load washers is usually caused by small objects (coins, safety pins, lint clumps) jamming the drain pump impeller, a kinked drain hose, or a burned-out drain motor coil. In ${loc1}, our technician opens the lower service flap, clears debris, and tests the pump discharge rate.`
          },
          {
            q: `Why does my ${b} vibrate violently and make loud grinding noises during spin cycle?`,
            a: `Excessive vibration and grinding during spin typically point to worn tub bearings, a fractured spider arm, or fatigued suspension damper rods. Hard borewell water in certain Madurai localities can accelerate mineral scale corrosion around bearing water seals. Replacing bearings and dampers restores smooth, balanced spinning.`
          },
          {
            q: `Water fill aagite irukku aana wash cycle start aagala? Enna seivardhu?`,
            a: `If water fills continuously without stopping, the air pressure sensor tube may be clogged with detergent scum, or the electronic water level sensor has failed. If water trickles very slowly, calcified sediment in the inlet solenoid filter is usually the cause. Our technician cleans filters and calibrates the sensor directly at your home.`
          }
        ]
      },
      {
        title: `Spare Parts & Washing Machine Repair Charges in Madurai`,
        items: [
          {
            q: `What is the cost of ${b} drain pump or inlet valve replacement in Madurai?`,
            a: `Replacing an inlet solenoid valve or magnetic drain pump generally ranges from ₹850 to ₹1,850 depending on whether it is a semi-automatic, top load, or front load unit. Final cost depends on model, fault and parts required, and our technician confirms the price before beginning work.`
          },
          {
            q: `How much does washing machine drum bearing replacement cost?`,
            a: `Tub bearing overhaul requires drum dismantling, fitting high-grade double bearings, and a new synthetic rubber oil seal, typically ranging from ₹1,800 to ₹3,500. Technician inspection is required before confirming the final repair cost, as tub condition and spider arm integrity must be evaluated.`
          },
          {
            q: `What is the visiting charge for a washing machine technician in ${loc2}?`,
            a: `Our standard doorstep visit and diagnosis fee across ${loc2} and all Madurai localities is ₹200 to ₹350. When you proceed with the suggested repair, the visiting fee is fully adjusted into the invoice.`
          }
        ]
      },
      {
        title: `Doorstep Washing Machine Support in Madurai`,
        items: [
          {
            q: `Can I get ${b} repair service near ${loc1}, Madurai?`,
            a: `Yes, we provide doorstep service throughout ${loc1}, ${loc2}, and all neighborhoods across Madurai. Our mobile technicians travel with tools and fast-moving replacement parts to handle repairs at your home.`
          },
          {
            q: `What should I do if my front load washer door is jammed and won't unlock?`,
            a: `Do not force the door handle, as plastic latches can snap easily. Front load machines have a thermal delay lock or an emergency pull cord near the drain filter. Call our Madurai service desk at +91 92115 12088 for guided assistance or a prompt technician visit.`
          }
        ]
      }
    ]
  };
}

function getTvFaqs(brand, loc1, loc2, seed) {
  const b = brand.startsWith('All') ? 'television' : `${brand} TV`;
  return {
    groups: [
      {
        title: `${brand} TV Display, Sound & Board Issues`,
        items: [
          {
            q: `Why does my ${b} have sound playing but the screen is completely black in ${loc1}?`,
            a: `This is the most common LED TV fault: the backlight LED strips behind the LCD panel have burned out or the LED driver circuit on the power board has failed. You can confirm this by shining a flashlight closely against the dark screen—if faint moving images are visible, the panel is intact and only the backlight array needs replacement.`
          },
          {
            q: `My ${b} will not power on and the standby red light is blinking. Can it be repaired?`,
            a: `Yes, a blinking standby indicator usually signifies power supply board failure, blown filtering capacitors, or shorted MOSFET diodes triggered by power surges. Our technician inspects the SMPS board and replaces damaged micro-components directly at your home in ${loc1}.`
          },
          {
            q: `Screen-la vertical colored lines or double picture theriyudha? Panel problem-ah?`,
            a: `Vertical lines or image ghosting can result from loose LVDS cables, a faulty T-Con (timing controller) board, or damaged COF flexible bonding tabs. Our technician tests signal voltages and re-seats ribbon cables to determine if an economical board repair can resolve the issue before considering panel replacement.`
          }
        ]
      },
      {
        title: `TV Spare Parts & Repair Cost in Madurai`,
        items: [
          {
            q: `What is the cost of ${b} LED backlight replacement in Madurai?`,
            a: `Backlight replacement costs depend on screen size (32-inch, 43-inch, 55-inch, 65-inch) and whether original aluminum-backed LED strips are used, typically ranging from ₹1,200 to ₹3,500. Final cost depends on model, fault and parts required, and the technician provides an exact estimate after inspecting the unit.`
          },
          {
            q: `What is the visiting charge for a TV technician inspection in ${loc2}?`,
            a: `Our doorstep TV inspection charge in ${loc2} and all Madurai areas is ₹200 to ₹350. If you approve the repair, this diagnostic fee is adjusted into your final service bill.`
          },
          {
            q: `Can Smart TV motherboard software or boot loop issues be fixed at home?`,
            a: `Yes, many motherboard issues—such as hanging on the brand logo, Wi-Fi connectivity dropouts, or app crashes—can be fixed via firmware flashing and IC re-programming on-site. Major processor or GPU defects may require bench testing.`
          }
        ]
      },
      {
        title: `Madurai TV Repair Coverage & Safe Handling`,
        items: [
          {
            q: `Can I get ${b} repair service near ${loc2}, Madurai?`,
            a: `Yes, our TV service technicians cover ${loc2}, ${loc1}, and all eastern, western, northern, and southern Madurai zones. We handle LED, OLED, QLED, and 4K Smart TVs with anti-static mats and padded work surfaces for complete panel safety.`
          },
          {
            q: `How do I book a doorstep ${b} repair in Madurai?`,
            a: `Call our local customer helpline at +91 92115 12088 or send a WhatsApp message mentioning your TV model, screen size, and symptom for quick doorstep technician dispatch.`
          }
        ]
      }
    ]
  };
}

function getScFaqs(brand, loc1, loc2, seed) {
  const b = brand.startsWith('All') ? 'home appliances' : `${brand} appliances`;
  return {
    groups: [
      {
        title: `${brand} Multi-Appliance Repair & Support`,
        items: [
          {
            q: `Which ${b} are supported for doorstep repair in Madurai?`,
            a: `We provide comprehensive doorstep repair for washing machines (front load, top load, semi-automatic), refrigerators (single door, double door, side-by-side, frost-free), air conditioners (split, inverter, window), and LED/Smart TVs across all residential areas in Madurai.`
          },
          {
            q: `Do you use original or compatible spare parts for ${b}?`,
            a: `Yes, our technicians carry genuine and high-grade OEM-certified compatible components—including capacitors, compressors, drain pumps, sensors, thermostats, and backlight strips—backed by replacement warranties for peace of mind.`
          },
          {
            q: `Can multiple ${b} be inspected during a single home visit in ${loc1}?`,
            a: `Yes, you can schedule a single technician visit to inspect your washing machine, air conditioner, and refrigerator together at your home in ${loc1}, saving you time and visiting fees.`
          }
        ]
      },
      {
        title: `Inspection Charges & Pricing Policy`,
        items: [
          {
            q: `What is the standard visiting charge for home appliance repair in Madurai?`,
            a: `Our standard technician visiting fee across all Madurai areas is ₹200 to ₹350. When you proceed with the suggested repair, this inspection charge is fully adjusted into your final service bill.`
          },
          {
            q: `Are repair charges fixed or does the final price vary?`,
            a: `Final cost depends on model, fault and parts required. Our technician conducts a thorough on-site diagnosis and explains the breakdown of parts and labor charges before beginning any repair work.`
          }
        ]
      },
      {
        title: `Service Areas & Booking in Madurai`,
        items: [
          {
            q: `Do you provide service across ${loc1} and ${loc2} in Madurai?`,
            a: `Yes, our doorstep technician network actively serves ${loc1}, ${loc2}, and over 200 neighborhoods across East, West, North, and South Madurai.`
          },
          {
            q: `How can I book a technician appointment today?`,
            a: `Simply call +91 92115 12088 or click the WhatsApp button to share your appliance type and location. Our desk coordinates a convenient morning or evening time slot with a nearby technician.`
          }
        ]
      }
    ]
  };
}

const masterFaqs = {};

pages.forEach((p, idx) => {
  const loc1 = localities[idx % localities.length];
  const loc2 = localities[(idx + 7) % localities.length];
  const brand = (p.brand && !p.brand.startsWith('All')) ? p.brand : (p.category === 'ac' ? 'AC' : (p.category === 'fridge' ? 'Refrigerator' : (p.category === 'washing-machine' ? 'Washing Machine' : (p.category === 'tv' ? 'TV' : 'Home Appliance'))));

  let faqData;
  if (p.category === 'ac') {
    faqData = getAcFaqs(brand, loc1, loc2, idx);
  } else if (p.category === 'fridge') {
    faqData = getFridgeFaqs(brand, loc1, loc2, idx);
  } else if (p.category === 'washing-machine') {
    faqData = getWmFaqs(brand, loc1, loc2, idx);
  } else if (p.category === 'tv') {
    faqData = getTvFaqs(brand, loc1, loc2, idx);
  } else {
    faqData = getScFaqs(brand, loc1, loc2, idx);
  }

  masterFaqs[p.newFile] = faqData;
});

fs.writeFileSync('scripts/madurai_master_faqs.json', JSON.stringify(masterFaqs, null, 2));
console.log(`Generated scripts/madurai_master_faqs.json for ${Object.keys(masterFaqs).length} pages.`);
