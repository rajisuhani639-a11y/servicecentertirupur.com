// scripts/build_unique_faqs.js
// 100% UNIQUE FAQ generator for all 174 pages. Zero duplicate questions, zero duplicate answers.

const details1 = require('./data_brand_details_1_to_18.js');
const details2 = require('./data_brand_details_19_to_36.js');
const details3 = require('./data_brand_details_37_to_54.js');
const allDetails = { ...details1, ...details2, ...details3 };

const brandTechs = {
  'Carrier': 'Durafresh & hybrid inverter cooling systems',
  'Daikin': 'Neo-Swing inverter compressor and Coanda airflow flaps',
  'Voltas': 'Maha Inverter technology with high-ambient copper coils',
  'Blue Star': 'precision cooling inverter circuits and acoustic insulation',
  'LG': 'Dual Inverter compressors and ocean black fin protection',
  'Samsung': 'Digital Inverter technology and WindFree micro-hole airflow',
  'Hitachi': 'Kashikoi inverter sensors and tropical rotary compressors',
  'Panasonic': 'Twin Cool inverter technology and Shield Blu+ anti-corrosive fins',
  'Lloyd': 'heavy-duty rapid cooling compressors and golden fin protection',
  'Godrej': 'green inverter technology and heavy-duty rotary compressors',
  'Mitsubishi': 'heavy duty tropical inverter compressors and wide-vane blowers',
  'O\'General': 'hyper tropical rotary compressors and high-static airflow',
  'Whirlpool': '3D Cool inverter technology and 6th Sense temperature control',
  'Haier': 'Triple Inverter plus technology and self-clean cold expansion',
  'Toshiba': 'hybrid inverter technology and magic coil dirt-resistant fins',
  'IFB': 'titan gold evaporator fins and twin-inverter heavy duty circuits',
  'Bosch': 'German-engineered inverter compressors and ultra-quiet airflow',
  'Siemens': 'intelligent iQ drive inverter technology and quiet fan motors',
  'Sony': 'Bravia XR processing and direct-lit Triluminos display panels',
  'Mi': 'PatchWall Smart TV interface and vivid picture engine boards',
  'OnePlus': 'Gamma Engine image processor and bezel-less LED panel arrays',
  'TCL': 'AiPQ Engine processor and micro-dimming LED backlight zones',
  'Vu': 'high-bright A+ grade LED panels and box speaker audio systems',
  'Micromax': 'crystal-luminous LED backlight strips and universal power SMPS',
  'Intex': 'energy-efficient LED display drivers and stereo audio boards',
  'Kodak': 'high-contrast Smart LED panels and Android TV motherboards',
  'Thomson': 'European display technology and high-power audio amplifiers',
  'Sansui': 'Japanese core LED panels and fast-response mainboards',
  'Akai': 'high-definition display panels and durable power supply circuits',
  'Aiwa': 'Japanese sound engineering and ultra-clear LED display drivers',
  'BPL': 'reliable Indian household electronics and durable internal boards',
  'Videocon': 'sturdy domestic appliances and dependable power circuitry',
  'Onida': 'high-endurance domestic appliance electronics and cooling coils'
};

function getTech(brand) {
  return brandTechs[brand] || 'modern energy-efficient appliance engineering';
}

function getAcFaqs(brand) {
  const tech = getTech(brand);
  return [
    {
      q: `Why does my ${brand} AC cooling drop drastically during peak afternoon heat in Kanyakumari?`,
      a: `For ${brand} air conditioners featuring ${tech}, intense afternoon heat in Kanyakumari significantly increases outdoor condenser head pressure. If the outdoor coil has dust buildup or the run capacitor has lost capacitance, the compressor trips on thermal overload. A replacement dual run capacitor for ${brand} units typically costs around ₹500–₹1,200 depending on model tonnage, subject to technician inspection.`
    },
    {
      q: `What causes water to leak from the indoor unit of a ${brand} split AC onto the floor?`,
      a: `In ${brand} split air conditioners operating in humid Kanyakumari coastal conditions, algae and slime frequently block the internal condensate drain trough. When the drain hose cannot discharge water freely, it overflows behind the indoor casing. Cleaning the drain channel with nitrogen pressure and re-leveling the wall bracket resolves this, while a replacement drain tray costs around ₹600–₹1,400 if physically cracked.`
    },
    {
      q: `How can I tell if my ${brand} inverter AC has a refrigerant gas leak or just dirty filters?`,
      a: `On ${brand} inverter ACs, choked mesh filters reduce indoor airflow while the coil remains cool. In contrast, a refrigerant leak causes thin ice to form along the brass suction pipe and indoor evaporator, accompanied by hiss noises and warm airflow. Nitrogen leak testing, copper flare repair, and calibrated R32/R410A gas refilling typically ranges between ₹1,800–₹3,200 depending on capacity.`
    },
    {
      q: `What is the approximate cost of replacing an outdoor condenser fan motor in a ${brand} AC?`,
      a: `An outdoor fan motor for ${brand} air conditioners costs approximately ₹1,500–₹3,200 depending on whether your model uses a standard AC motor or a BLDC inverter motor. If the fan blade is also damaged by coastal weather, a balanced replacement aerofoil blade costs an additional ₹400–₹800 upon technician inspection.`
    },
    {
      q: `Why does my ${brand} AC show an error code and refuse to start the outdoor compressor?`,
      a: `Error codes on ${brand} digital displays usually point to communication signal loss between indoor and outdoor PCBs or an open-circuit thermistor sensor. Inverter controller PCB repair or module replacement ranges around ₹2,000–₹6,000+ depending on whether the fault is in the IPM power circuit or the micro-controller board.`
    }
  ];
}

function getFridgeFaqs(brand) {
  const tech = getTech(brand);
  return [
    {
      q: `Why is the freezer compartment of my ${brand} refrigerator freezing solid while the lower food section stays warm?`,
      a: `In ${brand} frost-free refrigerators built with ${tech}, this symptom indicates a broken defrost cycle where the cooling coil gets choked in ice, blocking the air damper duct leading to the vegetable cabin. Replacing the bi-metal defrost thermostat, thermal fuse, or defrost heater costs approximately ₹600–₹1,500 depending on the model series.`
    },
    {
      q: `What is the approximate cost of replacing a compressor in a ${brand} refrigerator?`,
      a: `Compressor replacement for ${brand} refrigerators costs approximately ₹2,500–₹3,800 for conventional reciprocating models and ₹4,000–₹7,500+ for inverter compressors. This includes installing a new copper filter drier, nitrogen purging, deep vacuuming, and precise R600a/R134a refrigerant charging by weight.`
    },
    {
      q: `Why does my ${brand} refrigerator emit a clicking sound every few minutes without starting?`,
      a: `A repetitive clicking noise on ${brand} refrigerators is the thermal overload protector tripping because the PTC starter relay cannot energize the motor winding. Replacing the starter relay and overload protector is a quick doorstep fix costing approximately ₹350–₹750.`
    },
    {
      q: `Why does water continuously pool beneath the crisper drawer in my ${brand} fridge?`,
      a: `In ${brand} refrigerators, defrost water flows through an internal funnel to a drain pan above the compressor. When food particles or fungal slime clog this tube, water backs up inside the cabinet floor. Clearing and sterilizing the drain line costs around ₹300–₹600.`
    },
    {
      q: `How much does a replacement magnetic door gasket cost for a ${brand} refrigerator in Kanyakumari?`,
      a: `A hardened or warped door seal on your ${brand} refrigerator allows warm humid air to enter, causing heavy ice accumulation and high power consumption. A genuine replacement magnetic door gasket costs around ₹600–₹1,400 per door depending on single-door or double-door dimensions.`
    }
  ];
}

function getWmFaqs(brand) {
  const tech = getTech(brand);
  return [
    {
      q: `Why is my ${brand} washing machine showing a drain error and refusing to empty water?`,
      a: `In ${brand} washing machines featuring ${tech}, foreign objects like coins, pins, or lint clumps frequently jam the centrifugal drain pump impeller. If the pump motor winding is burnt, a replacement drain pump typically costs approximately ₹700–₹1,500 depending on whether it is a top-load or front-load assembly.`
    },
    {
      q: `What causes a ${brand} washing machine to vibrate violently and move across the floor during spin?`,
      a: `Excessive vibration on ${brand} washers is usually caused by worn hydraulic suspension shock absorbers, broken tub springs, or uneven leveling feet. Replacing a set of four suspension damper rods costs approximately ₹700–₹1,600, restoring stable, balanced spin cycles.`
    },
    {
      q: `What is the approximate cost of replacing an inlet water solenoid valve in a ${brand} washer?`,
      a: `When hard water scaling chokes the filter mesh or the solenoid coil burns out on a ${brand} washing machine, water intake becomes extremely slow. A compatible single or dual solenoid inlet valve replacement costs around ₹500–₹1,100 depending on model series.`
    },
    {
      q: `Why won't the door of my ${brand} front-load washing machine unlock after the wash finishes?`,
      a: `Front-load ${brand} machines use a thermal PTC safety door interlock that delays opening for 2 minutes after cycle end. If the switch overheats and welds shut, an emergency manual cord release is used. A replacement door safety interlock switch costs around ₹600–₹1,400.`
    },
    {
      q: `What is the approximate cost of repairing a ${brand} washing machine electronic PCB board in Kanyakumari?`,
      a: `Electronic main boards on ${brand} washers can suffer triac failures or motor drive issues due to voltage surges. Board-level component repair costs around ₹1,200–₹2,500, while a complete original replacement PCB ranges from ₹2,500–₹5,500+, verified by model number.`
    }
  ];
}

function getTvFaqs(brand) {
  const tech = getTech(brand);
  return [
    {
      q: `Why does my ${brand} LED TV have clear audio but a completely dark screen?`,
      a: `On ${brand} televisions featuring ${tech}, this symptom indicates failure of the LED backlight diode string. The mainboard and sound amplifier continue working, but the display lacks illumination. Replacing the full set of matched aluminum-core LED backlight strips typically costs approximately ₹1,000–₹3,000+ depending on screen size (32\" to 55\"+).`
    },
    {
      q: `What is the approximate cost of repairing a power supply SMPS board for a ${brand} TV?`,
      a: `If your ${brand} TV has no standby light or clicks intermittently without turning on, the power supply board has failed filtering capacitors or a shorted MOSFET switcher. Power board component repair usually costs around ₹1,200–₹2,200, while an entire board replacement ranges from ₹1,800–₹3,800.`
    },
    {
      q: `Why does my ${brand} Smart TV get stuck on the startup logo screen in a restart loop?`,
      a: `Boot loops on ${brand} Smart TVs usually happen when the eMMC flash memory becomes corrupted by sudden power cuts during auto-updates. Reflashing factory firmware using specialized ISP programmers costs around ₹1,200–₹2,200, restoring normal Smart TV functionality.`
    },
    {
      q: `What causes thin vertical or horizontal colored lines to appear on my ${brand} TV display?`,
      a: `Lines on a ${brand} TV screen are typically caused by micro-corrosion along the Chip-on-Film (COF) bonding ribbons between the panel glass and T-Con board. T-Con flex cable cleaning and bonding stabilization costs around ₹900–₹2,200; if the internal glass ITO track is cracked, panel replacement is evaluated.`
    },
    {
      q: `Can HDMI ports damaged by lightning or power surges on a ${brand} TV be fixed in Kanyakumari?`,
      a: `Power surges through Set-top box cables often blow the HDMI ESD clamp diodes or HDMI switcher IC on a ${brand} motherboard. Resoldering ports and replacing the HDMI interface chip typically costs around ₹1,000–₹2,400.`
    }
  ];
}

function getScFaqs(brand, slug) {
  const brandData = allDetails[slug] || {};
  const hasWm = !!brandData.wm;
  const hasFridge = !!brandData.fridge;
  const hasAc = !!brandData.ac;
  const hasTv = !!brandData.tv;

  const faqs = [];

  faqs.push({
    q: `What areas in Kanyakumari are covered for ${brand} doorstep appliance service?`,
    a: `Our local technicians provide doorstep inspection and repair for ${brand} products across all 200 localities in Kanyakumari district, including Nagercoil, Marthandam, Thuckalay, Colachel, Kulasekharam, and Suchindram.`
  });

  faqs.push({
    q: `What is the approximate cost of doorstep checking and fault diagnosis for ${brand} appliances?`,
    a: `A standard doorstep fault inspection visit for ${brand} appliances typically costs around ₹200–₹350. When you approve the technician's repair estimate, this checking fee is generally adjusted against the final service invoice.`
  });

  if (hasWm) {
    faqs.push({
      q: `What is the approximate cost of fixing water drainage or spin problems in a ${brand} washing machine?`,
      a: `Replacing a blocked or burned drain pump motor on a ${brand} washer costs approximately ₹700–₹1,500, while suspension damper rods range around ₹700–₹1,600, depending on the ${brand} model series and technician inspection.`
    });
  }

  if (hasFridge) {
    faqs.push({
      q: `How much does compressor starter relay or cooling thermostat repair cost for a ${brand} refrigerator?`,
      a: `Starter relay and thermal overload replacements for ${brand} refrigerators typically range around ₹350–₹750, whereas temperature control thermostats cost around ₹550–₹1,200. Physical inspection verifies model compatibility.`
    });
  }

  if (hasAc) {
    faqs.push({
      q: `What is the approximate cost of replacing a capacitor or refilling gas in a ${brand} split AC?`,
      a: `A dual run capacitor replacement for a ${brand} AC costs approximately ₹500–₹1,200, while nitrogen leak testing, brazing, and gas recharging typically ranges around ₹1,800–₹3,200 depending on tonnage and refrigerant type.`
    });
  }

  if (hasTv) {
    faqs.push({
      q: `Can LED backlight strip replacement for a ${brand} television be performed at home in Kanyakumari?`,
      a: `Yes. Our technician carries specialized mobile LED testing kits and replacement aluminum-backed backlight strips (approx. ₹1,000–₹3,000+ depending on screen size) to service your ${brand} TV safely on site.`
    });
  }

  faqs.push({
    q: `Are replacement spare parts used for ${brand} repairs verified for electrical safety?`,
    a: `Yes. All replacement components used in ${brand} repairs—including relays, capacitors, drain motors, solenoids, and PCBs—are tested with digital multimeters for voltage and current compatibility before being installed.`
  });

  faqs.push({
    q: `How quickly can I schedule an emergency technician visit for my ${brand} appliance in Kanyakumari?`,
    a: `You can book instantly by calling our customer support line at +91 92115 12088 or sending a message on WhatsApp. We provide same-day slots with typical arrival within 2 to 4 hours for ${brand} appliances.`
  });

  return faqs;
}

function getIndexFaqs() {
  return [
    {
      q: "What types of home appliances do you repair across Kanyakumari district?",
      a: "We provide comprehensive doorstep repair for air conditioners (split, window, inverter), refrigerators (single door, double door, side-by-side), washing machines (front load, top load, semi-automatic), LED/Smart TVs, and microwave ovens across all Kanyakumari localities."
    },
    {
      q: "How does the doorstep checking and repair process work?",
      a: "Once you call or message our support team, a local technician visits your home with essential testing instruments. After diagnosing the fault and inspecting parts, you receive a clear cost estimate. Repairs are completed on site upon your approval."
    },
    {
      q: "What are the typical approximate charges for common appliance spare parts?",
      a: "Approximate ranges include: AC capacitors ₹500–₹1,200; washing machine drain pumps ₹700–₹1,500; refrigerator starter relays ₹350–₹750; and TV LED backlight strips ₹1,000–₹3,000+. Final pricing depends strictly on model specifications and physical inspection."
    },
    {
      q: "Do you service all areas across Kanyakumari including rural and coastal zones?",
      a: "Yes. Our local technician network covers 200 verified localities across East, West, North, and South Kanyakumari, including Nagercoil, Marthandam, Thuckalay, Colachel, Kulasekharam, Suchindram, and surrounding village panchayats."
    },
    {
      q: "How can I book an urgent technician visit today?",
      a: "You can book instantly by calling our support desk at +91 92115 12088 or connecting via WhatsApp. We schedule convenient morning, afternoon, or evening slots to suit your household routine."
    }
  ];
}

module.exports = {
  getAcFaqs,
  getFridgeFaqs,
  getWmFaqs,
  getTvFaqs,
  getScFaqs,
  getIndexFaqs
};
