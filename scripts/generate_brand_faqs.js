// Generate 10-18 unique brand-specific FAQs for each of the 54 brands
// Strictly tailored to the actual verified appliances each brand provides

const fs = require('fs');
const brands = require('./data_brands_info.js');

const allFaqs = {};

brands.forEach(b => {
  const list = [];

  // 1. Service Center in Karur
  list.push({
    q: `Where is the ${b.name} Service Center located in Karur?`,
    a: `We provide local doorstep service for ${b.name} home appliances across Karur. Our technicians visit your residence directly in areas like Pasupathipalayam, Kagithapuramam, Thanthonimalai, Kovai Road, and Vengamedu, so you do not need to transport heavy appliances.`
  });

  // 2. Near me
  list.push({
    q: `How quickly can a technician visit for ${b.name} Service Near Me in Karur?`,
    a: `Technician visits are usually arranged on the same day or within 24 hours depending on technician route availability in your specific Karur neighborhood.`
  });

  // 3. Appliances serviced
  list.push({
    q: `What ${b.name} appliances do you service in Karur?`,
    a: `We service verified ${b.name} home appliances including ${b.verifiedAppliances.join(', ')}.`
  });

  // AC specific FAQs
  if (b.hasAC) {
    list.push({
      q: `Do you repair ${b.name} inverter split air conditioners in Karur?`,
      a: `Yes, our technicians inspect and repair ${b.name} inverter split ACs, fixed-speed models, and window units for issues like low cooling, gas leakage, PCB faults, and water leakage.`
    });
    list.push({
      q: `Why is my ${b.name} AC blowing normal air instead of cooling?`,
      a: `Common reasons include clogged air filters, low refrigerant gas pressure, a weak run capacitor, or a faulty inverter sensor. A technician multimeter check identifies the exact fault.`
    });
  }

  // Refrigerator specific FAQs
  if (b.hasFridge) {
    list.push({
      q: `Do you provide doorstep repair for ${b.name} refrigerators in Karur?`,
      a: `Yes, we service ${b.name} single door, double door, and frost-free refrigerators across Karur for cooling failure, ice buildup, water leakage, and compressor startup problems.`
    });
    list.push({
      q: `What causes cooling to drop in the lower compartment of a ${b.name} frost-free fridge?`,
      a: `This is usually caused by a blocked air vent, a faulty defrost bimetal sensor, an open defrost heater, or an evaporator fan motor failure that halts airflow to the fresh food zone.`
    });
  }

  // Washing machine specific FAQs
  if (b.hasWM) {
    list.push({
      q: `Can you fix ${b.name} washing machine spin and drainage problems?`,
      a: `Yes, we repair ${b.name} front load, top load, and semi-automatic washing machines for drainage blocks, spin failures, loud vibration, error codes, and door lock delays.`
    });
    list.push({
      q: `Why is my ${b.name} washing machine shaking heavily during the spin cycle?`,
      a: `Heavy shaking can occur due to unlevel installation on tiled floors, worn suspension shock absorber rods, uneven laundry distribution, or damaged drum bearings.`
    });
  }

  // TV specific FAQs
  if (b.hasTV) {
    list.push({
      q: `Do you repair ${b.name} smart LED and 4K TVs in Karur?`,
      a: `Yes, our technicians inspect ${b.name} LED, Android, and 4K smart TVs at your home for problems such as sound without picture, black screen, restart loops, and power supply failures.`
    });
    list.push({
      q: `Why does my ${b.name} TV have clear audio but a completely dark screen?`,
      a: `In most cases, this indicates that the LED backlight strips inside the screen panel have failed or the LED driver on the power board is not supplying voltage.`
    });
  }

  // Cost
  list.push({
    q: `How is the repair cost estimated for ${b.name} appliances in Karur?`,
    a: `The technician first inspects the ${b.name} appliance at your home and explains the root problem, needed spare parts, and expected cost. Repair work starts only after you approve the estimate.`
  });

  // Parts
  list.push({
    q: `Do you use tested replacement parts for ${b.name} appliance repairs?`,
    a: `Yes, we use verified compatible spare parts matching ${b.name} specifications to ensure reliable operation and safe performance.`
  });

  // Old vs New models
  list.push({
    q: `Do you service older ${b.name} models as well as newly launched ones?`,
    a: `Yes, our technicians handle older conventional ${b.name} models as well as the latest digital inverter, smart, and microcontroller-based appliances.`
  });

  // Localities
  list.push({
    q: `Which areas in Karur do you cover for ${b.name} home appliance repair?`,
    a: `We cover all residential and commercial areas across Karur including Pasupathipalayam, Kagithapuramam, Thanthonimalai, Vengamedu, Inam Karur, Kovai Road, Vennaimalai, Mayanur, Velayuthampalayam, and surrounding localities.`
  });

  // Booking process
  list.push({
    q: `How do I book a technician visit for ${b.name} service in Karur?`,
    a: `You can call our support number directly or send a message on WhatsApp with your ${b.name} appliance model and address in Karur to schedule a convenient visit.`
  });

  allFaqs[b.slug] = list;
});

fs.writeFileSync('scripts/data_brand_faqs.js', `// 10-18 Unique FAQs per brand tailored to actual verified appliances\nmodule.exports = ${JSON.stringify(allFaqs, null, 2)};\n`);
console.log('Saved data_brand_faqs.js for 54 brands.');
