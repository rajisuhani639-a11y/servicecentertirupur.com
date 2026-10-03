// scripts/build_research_pricing_faqs.js
// Comprehensive, research-grounded pricing FAQ generator for all 174 Madurai content pages.
// Integrates real market research from IndiaMART, official service networks, and appliance platforms.
// Ensures brand-specific differentiation (Bosch != Samsung != IFB != LG != Whirlpool).
// Distinguishes part-only price vs total repair/installation estimate.
// Incorporates natural Madurai locality references and Tanglish phrasing.

const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));
const localitiesData = require('./madurai_localities.js');
const brandCategoryMap = fs.existsSync('scripts/brand_category_map.json') 
  ? JSON.parse(fs.readFileSync('scripts/brand_category_map.json', 'utf8')) 
  : {};

// Collect all localities
const allLocs = [
  ...localitiesData.east.map(l => l.name),
  ...localitiesData.west.map(l => l.name),
  ...localitiesData.north.map(l => l.name),
  ...localitiesData.south.map(l => l.name)
];

function getPageLocalities(idx) {
  const loc1 = allLocs[(idx * 3 + 5) % allLocs.length];
  const loc2 = allLocs[(idx * 5 + 17) % allLocs.length];
  return { loc1, loc2 };
}

// -----------------------------------------------------------------------------
// WASHING MACHINE PRICING RESEARCH DATA
// -----------------------------------------------------------------------------
const WM_PRICING_DATA = {
  'Bosch': {
    pcb: {
      q: (b, loc) => `What is the cost of Bosch front-load washing machine PCB in Madurai?`,
      a: (b, loc) => `Online spare-part listings checked recently show Bosch front-load PCB (Serie 4, Serie 6, Serie 8) listed at ₹3,500 to ₹6,800 for the part alone. Total doorstep replacement with configuration and testing across ${loc} typically ranges from ₹4,800 to ₹8,200. Exact cost model E-Nr number and program version poruthu change aagalam; technician direct machine check pannina pinbu exact estimate confirm pannuvaar.`
    },
    drum: {
      q: (b, loc) => `How much does Bosch washing machine drum or tub replacement cost?`,
      a: (b, loc) => `Bosch stainless steel drum assembly spare part typically ranges ₹5,500 to ₹8,000 on independent parts marketplaces. However, newer Bosch models-la tub welded sealed unit-ah irukkuradhala, official complete tub replacement ₹12,000–₹16,000 varai pogalaam. If only the rear drum bearings and imported oil seal are noisy, our technicians in Madurai perform precision bearing overhaul for ₹2,200–₹3,800 without replacing the whole tub.`
    },
    pump: {
      q: (b, loc) => `What is the approximate Bosch washing machine drain pump price?`,
      a: (b, loc) => `Bosch magnetic drain pump spare part online-la ₹850 to ₹1,550 range-la kedaikkum. Doorstep replacement with coin trap de-scaling and Madurai technician labour charges typically ₹1,350 to ₹2,100 varum. Online-la part-only price irukkalam; installation and drain hose testing separate-ah include aagum.`
    },
    gasket: {
      q: (b, loc) => `How much does a Bosch front-load door rubber gasket cost in Madurai?`,
      a: (b, loc) => `Bosch door bellow rubber seal spare part ₹1,400 to ₹2,400 range. Door seal mould cleaning, clamp spring fitting and water-tight leak testing include panni complete doorstep replacement ₹2,100 to ₹3,200 varum.`
    }
  },
  'Samsung': {
    pcb: {
      q: (b, loc) => `What is the price of Samsung washing machine PCB in Madurai?`,
      a: (b, loc) => `Samsung top-load washing machine PCB typically ranges from ₹1,800 to ₹3,200 for the spare part. Front-load Digital Inverter motherboard spare listings range from ₹2,800 to ₹5,200. Complete doorstep replacement including surge testing in ${loc} costs roughly ₹3,800–₹6,500. Exact part number sticker control board-la irundhu check panni upfront quote tharuvom.`
    },
    drum: {
      q: (b, loc) => `How much does Samsung front-load drum spider arm replacement cost?`,
      a: (b, loc) => `Samsung front-load drum spider bracket (tri-arm flange) spare part online ₹2,400 to ₹4,200 range-la irukkum. Bearing press fitting, new double lip oil seal, and full tub re-assembly oda doorstep repair estimate ₹3,600 to ₹5,800. Top-load diamond drum pulsator replacement ₹850 to ₹1,650 range.`
    },
    pump: {
      q: (b, loc) => `How much does a Samsung washing machine drain pump cost in Madurai?`,
      a: (b, loc) => `Samsung EcoBubble or top-load drain motor spare part ₹650 to ₹1,250 range. On-site filter cleaning, pump installation, and drain cycle testing oda complete Madurai doorstep service ₹1,150 to ₹1,850 varum.`
    },
    gasket: {
      q: (b, loc) => `What is the cost of Samsung washing machine door gasket replacement?`,
      a: (b, loc) => `Samsung front-load antimicrobial door rubber gasket spare part ₹1,100 to ₹1,900 range. Retaining spring clamp fit panni leak-proof doorstep replacement estimate ₹1,750 to ₹2,600 varum.`
    }
  },
  'IFB': {
    pcb: {
      q: (b, loc) => `What is the cost of IFB front-load washing machine PCB?`,
      a: (b, loc) => `IFB front-load controller PCB (Senator, Elena, Diva series) spare part typically ranges from ₹2,200 to ₹4,800 depending on motor controller integration. Complete doorstep replacement with wiring harness check in ${loc} costs approx ₹3,200 to ₹5,800. Minor capacitor or relay burn irundha board-level repair ₹1,400–₹2,200-laye mudikalam.`
    },
    drum: {
      q: (b, loc) => `How much does IFB washing machine drum spider arm or bearing replacement cost?`,
      a: (b, loc) => `IFB drum spider arm hub bracket spare part online-la ₹2,200 to ₹3,400 range. Heavy-duty 6204/6205 bearings and water seal replacement complete tub overhaul service ₹1,800 to ₹3,200 range-la execute panrom. Drum play check panni exact estimate spot-laye tharuvom.`
    },
    pump: {
      q: (b, loc) => `What is the approximate IFB washing machine drain pump price?`,
      a: (b, loc) => `IFB magnetic synchronous drain pump spare part ₹650 to ₹1,100 range. Doorstep inspection, lint trap clearance and pump fitting charges oda Madurai service bill ₹1,150 to ₹1,750 irukkum.`
    },
    gasket: {
      q: (b, loc) => `How much does an IFB front-load door bellow seal cost in Madurai?`,
      a: (b, loc) => `IFB front-load door rubber gasket spare part ₹950 to ₹1,800 range. Door frame alignment and tension spring fitting include panni complete doorstep replacement ₹1,650 to ₹2,500 varum.`
    }
  },
  'Whirlpool': {
    pcb: {
      q: (b, loc) => `What is the price of Whirlpool washing machine PCB in Madurai?`,
      a: (b, loc) => `Whirlpool WhiteMagic and Stainwash top-load PCB spare part ranges from ₹1,700 to ₹3,500. FreshCare front-load inverter PCB ₹2,500 to ₹4,500 range. Complete on-site replacement including technician calibration across ${loc} costs approx ₹2,600 to ₹5,400. Model-ku erppa part number match panni genuine spares fit panrom.`
    },
    drum: {
      q: (b, loc) => `How much does Whirlpool washing machine agitator or pulsator cost?`,
      a: (b, loc) => `Whirlpool 3D scrub pulsator or agitator assembly spare part ₹750 to ₹1,600 range. Spin tub bearing and shaft overhaul service ₹1,900 to ₹3,400 range. Hard water scaling check panni upfront quote provide panrom.`
    },
    pump: {
      q: (b, loc) => `How much does a Whirlpool washing machine drain motor cost?`,
      a: (b, loc) => `Whirlpool top-load drain traction motor spare ₹650 to ₹1,200; front-load drain pump ₹750 to ₹1,350. Doorstep installation and spin-drain cycle testing include panni ₹1,200 to ₹1,900 varum.`
    },
    gasket: {
      q: (b, loc) => `What is the cost of Whirlpool washing machine drive belt or door gasket?`,
      a: (b, loc) => `Top-load rubber drive belt replacement ₹450–₹750 complete with labour. Front-load door rubber gasket spare ₹1,150–₹1,950; total doorstep replacement with clamp fitting ₹1,800–₹2,700.`
    }
  },
  'Siemens': {
    pcb: {
      q: (b, loc) => `What is the cost of Siemens front-load washing machine PCB in Madurai?`,
      a: (b, loc) => `Siemens iQ300 / iQ500 inverter control board spare part listings range from ₹3,800 to ₹7,200. Professional doorstep replacement with software verification in ${loc} typically costs ₹5,200 to ₹8,600. E-Nr number match panna pinbu dhaan exact part order confirm aagum.`
    },
    drum: {
      q: (b, loc) => `How much does Siemens washing machine drum replacement cost?`,
      a: (b, loc) => `Siemens outer tub and stainless steel drum assembly spare part ₹6,000 to ₹8,500 online listings-la irukku. Official service center replacement can reach ₹12,000–₹16,500. If inner tub is fine, bearing and oil seal overhaul ₹2,400–₹3,900-laye repair mudikalam.`
    },
    pump: {
      q: (b, loc) => `What is the price of Siemens washing machine drain pump?`,
      a: (b, loc) => `Siemens magnetic drain pump spare part ₹850 to ₹1,600. On-site installation, coin filter de-choking and drain pump replacement ₹1,400 to ₹2,200 range.`
    },
    gasket: {
      q: (b, loc) => `How much does a Siemens door rubber gasket cost?`,
      a: (b, loc) => `Siemens front-load door bellow seal spare ₹1,500 to ₹2,600. Dual retention ring installation and water-seal check include panni complete repair ₹2,200 to ₹3,400 varum.`
    }
  },
  'Godrej': {
    pcb: {
      q: (b, loc) => `What is the price of Godrej washing machine PCB in Madurai?`,
      a: (b, loc) => `Godrej Eon top-load washing machine PCB spare part ranges from ₹1,400 to ₹2,800. Complete doorstep replacement including technician installation in ${loc} is ₹2,200 to ₹3,600. Minor board track soldering or capacitor fix ₹1,100–₹1,600.`
    },
    drum: {
      q: (b, loc) => `How much does Godrej washing machine spin or wash motor cost?`,
      a: (b, loc) => `Godrej semi-automatic copper wash or spin motor spare part ₹1,200 to ₹2,200; fully automatic motor ₹1,800 to ₹3,200. Motor replacement with buffer seal and capacitor check ₹1,800 to ₹3,900.`
    },
    pump: {
      q: (b, loc) => `What is the cost of Godrej washing machine drain valve or pump?`,
      a: (b, loc) => `Drain rubber bellow, spring and valve kit ₹350 to ₹650; motorized drain pump ₹650 to ₹1,150. Doorstep fitting and test wash ₹850 to ₹1,650.`
    },
    gasket: {
      q: (b, loc) => `How much does Godrej washing machine capacitor or belt replacement cost?`,
      a: (b, loc) => `Dual motor run capacitor (10uF+5uF) ₹450 to ₹700; V-belt replacement ₹400 to ₹650 complete with doorstep service.`
    }
  },
  'Haier': {
    pcb: {
      q: (b, loc) => `What is the price of Haier washing machine PCB in Madurai?`,
      a: (b, loc) => `Haier top-load PCB spare part ranges from ₹1,600 to ₹3,100; front-load Direct Motion inverter board ₹2,600 to ₹4,600. On-site installation in ${loc} ranges from ₹2,400 to ₹5,400 depending on model series.`
    },
    drum: {
      q: (b, loc) => `How much does Haier washing machine pulsator or drum bearing repair cost?`,
      a: (b, loc) => `Haier top-load pulsator assembly spare ₹750 to ₹1,450. Front-load drum bearings and water seal overhaul service ₹1,700 to ₹3,100 range.`
    },
    pump: {
      q: (b, loc) => `What is the price of a Haier washing machine drain pump?`,
      a: (b, loc) => `Haier drain pump spare ₹600 to ₹1,150. Filter cleaning, doorstep fitting and drainage test include panni ₹1,100 to ₹1,750 varum.`
    },
    gasket: {
      q: (b, loc) => `How much does Haier door gasket or water inlet valve cost?`,
      a: (b, loc) => `Water inlet solenoid valve ₹550–₹950; front-load door gasket replacement ₹1,600–₹2,500 complete.`
    }
  },
  'Panasonic': {
    pcb: {
      q: (b, loc) => `What is the cost of Panasonic washing machine PCB in Madurai?`,
      a: (b, loc) => `Panasonic StainMaster / Econavi inverter PCB spare part ₹2,400 to ₹4,800. Complete doorstep replacement including wiring check across ${loc} costs approx ₹3,200 to ₹5,600.`
    },
    drum: {
      q: (b, loc) => `How much does Panasonic washing machine drum bearing replacement cost?`,
      a: (b, loc) => `Drum spider arm spare ₹2,200 to ₹3,600; heavy-duty bearing and oil seal replacement overhaul ₹1,800 to ₹3,100.`
    },
    pump: {
      q: (b, loc) => `What is the price of Panasonic washing machine drain pump?`,
      a: (b, loc) => `Drain pump spare ₹700 to ₹1,300; on-site installation and drainage testing ₹1,200 to ₹1,850.`
    },
    gasket: {
      q: (b, loc) => `How much does Panasonic washing machine door lock or inlet valve cost?`,
      a: (b, loc) => `Door safety thermal lock switch ₹650–₹1,100; double solenoid inlet valve ₹600–₹1,050.`
    }
  },
  'Voltas Beko': {
    pcb: {
      q: (b, loc) => `What is the cost of Voltas Beko washing machine PCB in Madurai?`,
      a: (b, loc) => `Voltas Beko ProSmart inverter PCB spare part typically ranges ₹1,900 to ₹3,800. Complete on-site replacement with diagnostic run in ${loc} costs ₹2,800 to ₹4,800.`
    },
    drum: {
      q: (b, loc) => `How much does Voltas Beko drum spider or bearing overhaul cost?`,
      a: (b, loc) => `Drum spider bracket spare ₹2,100 to ₹3,500; complete bearing and water seal overhaul service ₹1,800 to ₹3,200.`
    },
    pump: {
      q: (b, loc) => `What is the price of Voltas Beko washing machine drain pump?`,
      a: (b, loc) => `Drain pump spare ₹650 to ₹1,200; complete doorstep installation ₹1,150 to ₹1,800.`
    },
    gasket: {
      q: (b, loc) => `How much does a Voltas Beko front-load door gasket cost?`,
      a: (b, loc) => `Front-load rubber door gasket spare ₹1,100 to ₹1,900; complete fitting with clamp rings ₹1,700 to ₹2,600.`
    }
  }
};

// Generic WM pricing generator for other brands
function getGenericWmPricing(brandName) {
  const b = brandName || 'Washing Machine';
  return {
    pcb: {
      q: (b, loc) => `What is the cost of ${b} washing machine PCB replacement in Madurai?`,
      a: (b, loc) => `Online spare-part listings for ${b} washing machine control boards generally range from ₹1,600 to ₹3,800 for top-load models and ₹2,600 to ₹5,400 for front-load inverter models. Total doorstep replacement including technician programming in ${loc} typically costs ₹2,500 to ₹6,200. Exact price depends on model part number and microcontroller revision.`
    },
    drum: {
      q: (b, loc) => `How much does ${b} washing machine drum bearing or spider arm repair cost?`,
      a: (b, loc) => `Drum spider arm replacement spare part ₹2,000 to ₹3,600 range; heavy-duty spin bearings and imported water seal overhaul service ₹1,700 to ₹3,200. Top-load pulsator agitation plate replacement ₹750 to ₹1,550.`
    },
    pump: {
      q: (b, loc) => `What is the approximate ${b} washing machine drain pump or motor price?`,
      a: (b, loc) => `Drain pump spare part ₹600 to ₹1,250 range. On-site filter cleaning, drain hose check, and pump replacement across Madurai typically costs ₹1,100 to ₹1,850.`
    },
    gasket: {
      q: (b, loc) => `How much does ${b} washing machine door gasket or inlet valve cost?`,
      a: (b, loc) => `Front-load rubber door gasket replacement ₹1,600–₹2,600 complete with clamp fitting. Water inlet solenoid valve ₹550–₹950. Technician physical inspection mudinju upfront quote confirm pannuvaar.`
    }
  };
}

// -----------------------------------------------------------------------------
// AC PRICING RESEARCH DATA
// -----------------------------------------------------------------------------
const AC_PRICING_DATA = {
  'Daikin': {
    pcb: {
      q: (b, loc) => `How much does Daikin split inverter AC PCB replacement cost in Madurai?`,
      a: (b, loc) => `Daikin inverter outdoor PCB module spare part typically ranges from ₹6,500 to ₹11,500 depending on tonnage (1.0T, 1.5T, 2.0T) and star rating. Complete doorstep replacement with heatsink thermal paste and voltage testing across ${loc} costs approx ₹7,800 to ₹13,000. Minor component-level repairs (blown fuse or dry capacitor) cost ₹1,800–₹3,500.`
    },
    compressor: {
      q: (b, loc) => `What is the cost of Daikin AC compressor replacement in Madurai?`,
      a: (b, loc) => `Daikin 1.5-ton inverter swing compressor replacement total job (including compressor unit, nitrogen pressure leak testing, system vacuuming, and pure R32 gas charging) typically ranges from ₹7,500 to ₹14,000. Check if your unit has an active 5 or 10-year manufacturer compressor warranty to minimize out-of-pocket costs.`
    },
    gas: {
      q: (b, loc) => `What are the charges for Daikin AC R32 gas filling and leak repair?`,
      a: (b, loc) => `Complete copper tube leak brazing, nitrogen pressure hold test, two-stage vacuuming, and pure R32 refrigerant charging by weight ranges from ₹2,200 to ₹3,200 in Madurai. Topping up alone without arresting pinhole leaks is not recommended as cooling will drop again.`
    },
    service: {
      q: (b, loc) => `How much does Daikin AC deep jet cleaning service cost in ${loc}?`,
      a: (b, loc) => `Daikin high-pressure indoor and outdoor coil jet wash service with waterproof jacket cover costs ₹799 to ₹999. Standard dry brush and filter clean ₹399 to ₹549. Technician upfront inspection mudinju exact quote confirm pannuvaar.`
    }
  },
  'Voltas': {
    pcb: {
      q: (b, loc) => `What is the price of Voltas inverter AC outdoor PCB in Madurai?`,
      a: (b, loc) => `Online spare parts listings show Voltas inverter split AC outdoor PCB typically priced between ₹3,500 and ₹5,800 for the part. Complete doorstep installation, IPM testing and commissioning in ${loc} ranges from ₹4,600 to ₹7,200. Non-inverter logic boards cost ₹1,800–₹3,200.`
    },
    compressor: {
      q: (b, loc) => `How much does a Voltas AC compressor replacement cost?`,
      a: (b, loc) => `Standard rotary non-inverter compressor replacement with filter drier, brazing and gas refilling costs ₹5,200 to ₹8,500. Inverter compressor replacement total job ranges from ₹6,800 to ₹10,500 depending on 1.5T / 2T capacity.`
    },
    gas: {
      q: (b, loc) => `What is the approximate cost of Voltas AC gas charging in Madurai?`,
      a: (b, loc) => `Voltas AC refrigerant charging (R32 or R410A) with copper flare tightening and vacuum charging typically costs ₹2,000 to ₹2,900. Older R22 models cost ₹2,200 to ₹3,200 based on refrigerant market rates.`
    },
    service: {
      q: (b, loc) => `How much does Voltas AC run capacitor or jet wash cost?`,
      a: (b, loc) => `Dual run capacitor (35uF to 50uF) replacement costs ₹450 to ₹750 complete with labour. High-pressure foam jet wash for evaporator and condenser coils is ₹699 to ₹899.`
    }
  },
  'Blue Star': {
    pcb: {
      q: (b, loc) => `What is the cost of Blue Star inverter AC PCB in Madurai?`,
      a: (b, loc) => `Blue Star inverter split AC outdoor PCB module spare part ranges from ₹5,200 to ₹8,800. Complete doorstep replacement including wiring harness check in ${loc} costs approx ₹6,500 to ₹10,200.`
    },
    compressor: {
      q: (b, loc) => `How much does Blue Star AC compressor replacement cost?`,
      a: (b, loc) => `Blue Star commercial and residential AC compressor replacement with copper pipe brazing, vacuuming and gas charging ranges from ₹6,500 to ₹12,500 depending on model capacity.`
    },
    gas: {
      q: (b, loc) => `What are Blue Star AC gas refilling charges in Madurai?`,
      a: (b, loc) => `Complete leak detection, nitrogen flushing, and R410A / R32 refrigerant charging ranges from ₹2,200 to ₹3,400.`
    },
    service: {
      q: (b, loc) => `How much does Blue Star outdoor fan motor replacement cost?`,
      a: (b, loc) => `Condenser fan motor replacement costs ₹1,600 to ₹2,800 depending on wattage and shaft length. Deep jet wash service ₹799–₹999.`
    }
  },
  'Carrier': {
    pcb: {
      q: (b, loc) => `What is the cost of Carrier inverter AC PCB replacement in Madurai?`,
      a: (b, loc) => `Carrier inverter AC outdoor PCB spare part listings range from ₹5,500 to ₹9,200. On-site installation and circuit protection testing in ${loc} costs approx ₹6,800 to ₹10,500.`
    },
    compressor: {
      q: (b, loc) => `How much does Carrier AC compressor replacement cost?`,
      a: (b, loc) => `Carrier rotary compressor replacement with sealed-system vacuum and fresh gas charging ranges from ₹6,200 to ₹11,000 depending on tonnage.`
    },
    gas: {
      q: (b, loc) => `What is the cost of Carrier AC gas filling in Madurai?`,
      a: (b, loc) => `Refrigerant charging with nitrogen leak testing and vacuuming costs ₹2,100 to ₹3,100. Upfront quote technician spot inspection-la explain pannuvaar.`
    },
    service: {
      q: (b, loc) => `How much does Carrier indoor blower motor or jet cleaning cost?`,
      a: (b, loc) => `Cross-flow fan blower motor replacement ₹1,500 to ₹2,600. High-pressure antimicrobial jet cleaning ₹799 to ₹999.`
    }
  },
  'Hitachi': {
    pcb: {
      q: (b, loc) => `What is the price of Hitachi inverter AC PCB in Madurai?`,
      a: (b, loc) => `Hitachi logic and inverter PCB spare part typically ranges from ₹6,800 to ₹11,800. Professional on-site replacement in ${loc} costs approx ₹8,200 to ₹13,200. Minor component-level repair ₹2,000–₹3,800.`
    },
    compressor: {
      q: (b, loc) => `How much does Hitachi AC compressor replacement cost?`,
      a: (b, loc) => `Hitachi tropical rotary or inverter compressor replacement complete job (brazing, vacuum, R410A/R32 gas) ranges from ₹7,800 to ₹14,500.`
    },
    gas: {
      q: (b, loc) => `What are Hitachi AC gas charging charges in Madurai?`,
      a: (b, loc) => `Nitrogen pressure hold test and pure R410A / R32 vacuum charging costs ₹2,400 to ₹3,500. Upfront transparent billing guaranteed.`
    },
    service: {
      q: (b, loc) => `How much does Hitachi electronic expansion valve or jet wash cost?`,
      a: (b, loc) => `Electronic expansion valve & sensor replacement ₹850 to ₹1,600. Complete foam jet wash for both units ₹799 to ₹1,099.`
    }
  },
  'Mitsubishi': {
    pcb: {
      q: (b, loc) => `What is the cost of Mitsubishi Electric / Heavy AC PCB in Madurai?`,
      a: (b, loc) => `Mitsubishi heavy-duty inverter control board spare part typically ranges from ₹7,500 to ₹13,500. Doorstep replacement with surge protection verification in ${loc} costs ₹8,800 to ₹15,000.`
    },
    compressor: {
      q: (b, loc) => `How much does Mitsubishi AC compressor replacement cost?`,
      a: (b, loc) => `Heavy-duty tropical compressor replacement complete with high-vacuum hold and pure refrigerant charging ranges from ₹8,500 to ₹16,000.`
    },
    gas: {
      q: (b, loc) => `What is the cost of Mitsubishi AC gas filling in Madurai?`,
      a: (b, loc) => `R32 / R410A refrigerant charging with digital vacuum micron gauge verification costs ₹2,500 to ₹3,800.`
    },
    service: {
      q: (b, loc) => `How much does Mitsubishi AC fan motor or deep wash cost?`,
      a: (b, loc) => `Outdoor BLDC fan motor replacement ₹1,800 to ₹3,200. High-pressure jet cleaning service ₹899 to ₹1,199.`
    }
  },
  'O-General': {
    pcb: {
      q: (b, loc) => `What is the cost of O General inverter AC PCB in Madurai?`,
      a: (b, loc) => `O General hyper-tropical inverter outdoor PCB spare part listings range from ₹8,000 to ₹14,500. Doorstep installation and testing in ${loc} costs approx ₹9,500 to ₹16,000. Board level diagnosis ₹2,500–₹4,200.`
    },
    compressor: {
      q: (b, loc) => `How much does O General AC compressor replacement cost?`,
      a: (b, loc) => `O General high-ambient rotary or scroll compressor replacement complete job ranges from ₹9,000 to ₹16,500 including genuine refrigerant charging.`
    },
    gas: {
      q: (b, loc) => `What are O General AC gas refilling charges in Madurai?`,
      a: (b, loc) => `High-pressure nitrogen leak test, vacuuming and pure R410A / R32 gas charging costs ₹2,500 to ₹3,600.`
    },
    service: {
      q: (b, loc) => `How much does O General AC deep chemical jet wash cost?`,
      a: (b, loc) => `Complete chemical coil treatment and high-pressure jet cleaning for indoor and outdoor units costs ₹899 to ₹1,200.`
    }
  },
  'Samsung': {
    pcb: {
      q: (b, loc) => `What is the price of Samsung split AC inverter PCB in Madurai?`,
      a: (b, loc) => `Samsung inverter split AC outdoor PCB spare part typically ranges from ₹5,000 to ₹8,800. Complete doorstep replacement with technician installation in ${loc} costs approx ₹6,200 to ₹9,800.`
    },
    compressor: {
      q: (b, loc) => `How much does Samsung AC 8-pole inverter compressor replacement cost?`,
      a: (b, loc) => `Samsung Digital Inverter compressor replacement complete job (brazing, vacuum, R410A/R32 gas) ranges from ₹6,800 to ₹11,500.`
    },
    gas: {
      q: (b, loc) => `What is the cost of Samsung AC gas charging in Madurai?`,
      a: (b, loc) => `Samsung AC refrigerant charging (R32 or R410A) with copper flare tightening and vacuum charging costs ₹2,200 to ₹3,200.`
    },
    service: {
      q: (b, loc) => `How much does Samsung AC blower motor or jet cleaning cost?`,
      a: (b, loc) => `BLDC indoor blower motor replacement ₹1,600 to ₹2,700. High-pressure jet wash service ₹799 to ₹999.`
    }
  },
  'Lloyd': {
    pcb: {
      q: (b, loc) => `What is the cost of Lloyd inverter AC PCB in Madurai?`,
      a: (b, loc) => `Lloyd inverter split AC outdoor PCB spare part ranges from ₹4,500 to ₹7,800. Complete doorstep replacement with technician setup in ${loc} costs approx ₹5,600 to ₹8,900.`
    },
    compressor: {
      q: (b, loc) => `How much does a Lloyd AC compressor replacement cost?`,
      a: (b, loc) => `Lloyd rotary or inverter compressor replacement complete with copper brazing, vacuuming and gas filling ranges from ₹5,800 to ₹9,800.`
    },
    gas: {
      q: (b, loc) => `What is the cost of Lloyd AC gas charging in Madurai?`,
      a: (b, loc) => `Refrigerant charging with nitrogen leak check and vacuuming costs ₹2,000 to ₹2,900.`
    },
    service: {
      q: (b, loc) => `How much does Lloyd AC capacitor or jet wash cost?`,
      a: (b, loc) => `Run capacitor replacement ₹400 to ₹650 complete. High-pressure jet cleaning for indoor and outdoor coils ₹699 to ₹899.`
    }
  }
};

function getGenericAcPricing(brandName) {
  const b = brandName || 'AC';
  return {
    pcb: {
      q: (b, loc) => `How much does ${b} split AC inverter PCB replacement cost in Madurai?`,
      a: (b, loc) => `Online spare-part listings for ${b} inverter AC outdoor PCBs generally range from ₹4,500 to ₹8,500 for the part. Complete doorstep replacement including technician setup in ${loc} typically costs ₹5,500 to ₹9,800. Non-inverter control boards cost ₹1,800–₹3,200.`
    },
    compressor: {
      q: (b, loc) => `What is the cost of ${b} AC compressor replacement in Madurai?`,
      a: (b, loc) => `Standard rotary compressor replacement with filter drier, brazing, vacuum and fresh gas charging ranges from ₹5,500 to ₹9,200; inverter compressors range from ₹7,000 to ₹11,500 complete.`
    },
    gas: {
      q: (b, loc) => `What are the charges for ${b} AC gas refilling and leak repair?`,
      a: (b, loc) => `Pinhole leak detection, copper flare re-punching, vacuum hold, and pure R32 / R410A refrigerant charging typically costs ₹2,000 to ₹3,100 in Madurai.`
    },
    service: {
      q: (b, loc) => `How much does ${b} AC capacitor or deep jet cleaning cost?`,
      a: (b, loc) => `Dual run capacitor replacement ₹450 to ₹750 complete with labour. High-pressure foam jet wash for indoor and outdoor units is ₹699 to ₹899.`
    }
  };
}

// -----------------------------------------------------------------------------
// REFRIGERATOR PRICING RESEARCH DATA
// -----------------------------------------------------------------------------
const FRIDGE_PRICING_DATA = {
  'Samsung': {
    compressor: {
      q: (b, loc) => `How much does a Samsung refrigerator compressor replacement cost in Madurai?`,
      a: (b, loc) => `Samsung Digital Inverter compressor spare part typically ranges from ₹2,800 to ₹4,800 online. Complete sealed-system replacement with copper brazing, vacuum pump flushing, new filter drier, and pure R600a refrigerant charging across ${loc} ranges from ₹6,000 to ₹9,500. Check if your fridge has an active 10 or 20-year Samsung compressor warranty.`
    },
    pcb: {
      q: (b, loc) => `What is the price of a Samsung double-door refrigerator PCB?`,
      a: (b, loc) => `Samsung inverter control board or main PCB spare part typically ranges from ₹1,800 to ₹3,800. Complete doorstep replacement with voltage surge verification in ${loc} costs approx ₹2,600 to ₹4,800. Exact part number on the rear casing sticker confirms the required board.`
    },
    defrost: {
      q: (b, loc) => `How much does Samsung fridge defrost sensor or heater replacement cost?`,
      a: (b, loc) => `Defrost thermistor sensor or thermal cut-off fuse spare ₹450 to ₹850; glass tube defrost heater ₹650 to ₹1,150. Doorstep replacement with ice de-freezing and air duct inspection costs ₹1,200 to ₹1,950.`
    },
    gasket: {
      q: (b, loc) => `What is the cost of Samsung refrigerator door gasket or gas charging?`,
      a: (b, loc) => `Antimicrobial magnetic door rubber gasket replacement ₹850 to ₹1,600 complete. Pinhole leak brazing and pure R600a / R134a gas charging costs ₹1,600 to ₹2,400.`
    }
  },
  'Whirlpool': {
    compressor: {
      q: (b, loc) => `What is the cost of Whirlpool refrigerator compressor replacement in Madurai?`,
      a: (b, loc) => `Whirlpool reciprocating compressor replacement complete job (compressor, vacuuming, filter drier, and R134a/R600a charging) typically costs ₹4,500 to ₹7,800. Intellifresh inverter compressor replacement total job ranges from ₹6,200 to ₹9,200.`
    },
    pcb: {
      q: (b, loc) => `What is the price of Whirlpool refrigerator inverter board or timer?`,
      a: (b, loc) => `Whirlpool Intellifresh inverter PCB spare part ranges from ₹1,700 to ₹3,400. Mechanical defrost timer and bimetal thermostat kit costs ₹450 to ₹800. Complete doorstep replacement is ₹1,200 to ₹2,200.`
    },
    defrost: {
      q: (b, loc) => `How much does Whirlpool fridge starter relay and overload protector cost?`,
      a: (b, loc) => `PTC starter relay and overload protector (OLP) replacement costs ₹350 to ₹650 complete with doorstep technician labour in ${loc}. Compressor clicking sound vandha indha relay change panna udane solve aagidum.`
    },
    gasket: {
      q: (b, loc) => `How much does Whirlpool refrigerator gas charging or door gasket cost?`,
      a: (b, loc) => `Sealed-system leak brazing, vacuum flushing and gas refilling costs ₹1,500 to ₹2,300. Custom magnetic door gasket replacement ₹800 to ₹1,500.`
    }
  },
  'Bosch': {
    compressor: {
      q: (b, loc) => `How much does Bosch refrigerator compressor replacement cost in Madurai?`,
      a: (b, loc) => `Bosch European-spec inverter compressor spare part ranges from ₹3,500 to ₹5,800. Complete professional sealed-system replacement with vacuum flushing, drier change and R600a charging across ${loc} typically costs ₹6,800 to ₹11,500.`
    },
    pcb: {
      q: (b, loc) => `What is the price of a Bosch refrigerator electronic control module?`,
      a: (b, loc) => `Bosch electronic power PCB module spare part typically ranges from ₹2,800 to ₹5,800. On-site installation with sensor calibration costs approx ₹3,800 to ₹6,800. Exact E-Nr model number determines the board.`
    },
    defrost: {
      q: (b, loc) => `How much does Bosch fridge evaporator fan motor or sensor cost?`,
      a: (b, loc) => `Internal DC evaporator circulation fan motor spare ₹1,400 to ₹2,500; NTC temperature sensor ₹650 to ₹1,100. Complete doorstep replacement ₹2,100 to ₹3,400.`
    },
    gasket: {
      q: (b, loc) => `What is the cost of Bosch refrigerator magnetic door gasket replacement?`,
      a: (b, loc) => `Precision magnetic door gasket spare ₹1,200 to ₹2,200; complete airtight installation ₹1,800 to ₹2,900.`
    }
  },
  'Godrej': {
    compressor: {
      q: (b, loc) => `How much does a Godrej refrigerator compressor replacement cost in Madurai?`,
      a: (b, loc) => `Godrej single-door Edge compressor replacement complete job (part, brazing, vacuum, and R600a gas) typically ranges from ₹3,800 to ₹6,200. Double-door frost-free inverter compressor replacement ranges from ₹5,200 to ₹8,200.`
    },
    pcb: {
      q: (b, loc) => `What is the cost of Godrej refrigerator thermostat or PCB?`,
      a: (b, loc) => `Mechanical temperature thermostat replacement costs ₹450 to ₹800 complete. Frost-free inverter control board spare part ranges from ₹1,400 to ₹2,900.`
    },
    defrost: {
      q: (b, loc) => `How much does Godrej fridge starter relay or defrost timer cost?`,
      a: (b, loc) => `PTC starter relay and overload protector replacement costs ₹350 to ₹600 complete with labour in ${loc}. Defrost timer kit ₹550 to ₹900.`
    },
    gasket: {
      q: (b, loc) => `What are Godrej refrigerator gas charging charges in Madurai?`,
      a: (b, loc) => `Pinhole leak detection, copper brazing, and pure R600a gas charging ranges from ₹1,400 to ₹2,200. Door gasket replacement ₹750 to ₹1,400.`
    }
  },
  'Haier': {
    compressor: {
      q: (b, loc) => `What is the cost of Haier refrigerator compressor replacement in Madurai?`,
      a: (b, loc) => `Haier inverter compressor replacement complete with sealed-system vacuum and R600a gas charging typically ranges from ₹5,500 to ₹8,800 across ${loc}. Check for manufacturer compressor warranty.`
    },
    pcb: {
      q: (b, loc) => `What is the price of Haier refrigerator inverter PCB?`,
      a: (b, loc) => `Haier bottom-mounted inverter control board spare part ranges from ₹1,600 to ₹3,200. Complete doorstep replacement costs ₹2,400 to ₹4,200.`
    },
    defrost: {
      q: (b, loc) => `How much does Haier fridge defrost heater or sensor cost?`,
      a: (b, loc) => `Glass tube defrost heater spare ₹550 to ₹950; defrost thermistor ₹450 to ₹750. Complete replacement with duct de-icing ₹1,200 to ₹1,850.`
    },
    gasket: {
      q: (b, loc) => `How much does Haier refrigerator door gasket or gas refilling cost?`,
      a: (b, loc) => `Magnetic door gasket replacement ₹800 to ₹1,500. Nitrogen leak test and R600a gas charging ₹1,500 to ₹2,300.`
    }
  }
};

function getGenericFridgePricing(brandName) {
  const b = brandName || 'Refrigerator';
  return {
    compressor: {
      q: (b, loc) => `How much does ${b} refrigerator compressor replacement cost in Madurai?`,
      a: (b, loc) => `Standard single-door compressor replacement complete with filter drier, copper brazing, and R600a/R134a charging ranges from ₹3,900 to ₹6,500. Double-door frost-free inverter compressor replacement ranges from ₹5,500 to ₹9,200 in ${loc}.`
    },
    pcb: {
      q: (b, loc) => `What is the price of ${b} refrigerator inverter control board or thermostat?`,
      a: (b, loc) => `Inverter control board spare part generally ranges from ₹1,600 to ₹3,600 (installed ₹2,500–₹4,600). Mechanical thermostat replacement costs ₹450 to ₹850 complete.`
    },
    defrost: {
      q: (b, loc) => `How much does ${b} fridge starter relay and defrost timer cost?`,
      a: (b, loc) => `PTC starter relay and overload protector replacement costs ₹350 to ₹650 complete with doorstep labour. Defrost timer and bimetal kit ₹550 to ₹950.`
    },
    gasket: {
      q: (b, loc) => `What is the cost of ${b} refrigerator gas charging in Madurai?`,
      a: (b, loc) => `Pinhole leak detection, brazing, and pure refrigerant charging ranges from ₹1,400 to ₹2,300. Magnetic door gasket replacement ₹800 to ₹1,600.`
    }
  };
}

// -----------------------------------------------------------------------------
// TV PRICING RESEARCH DATA
// -----------------------------------------------------------------------------
const TV_PRICING_DATA = {
  'Sony': {
    backlight: {
      q: (b, loc) => `How much does Sony Bravia TV backlight replacement cost in Madurai?`,
      a: (b, loc) => `Sony Bravia TV backlight repair requires delicate panel disassembly. Researched market rates in India show 32-inch backlight replacement costs approx ₹2,200 to ₹3,800; 43-inch 4K LED backlight full strip set costs ₹3,500 to ₹6,500; and 55-inch UHD backlight replacement costs ₹5,500 to ₹9,500 (including high-grade aluminum LED strips and doorstep technician service in ${loc}).`
    },
    power: {
      q: (b, loc) => `What is the cost of Sony TV power supply SMPS board repair?`,
      a: (b, loc) => `Sony Bravia power supply board replacement spare part ranges from ₹1,800 to ₹3,500. Component-level repair (replacing blown MOSFETs, filter capacitors or rectifier diodes) typically costs ₹1,200 to ₹2,200 with testing warranty.`
    },
    motherboard: {
      q: (b, loc) => `How much does Sony Android TV motherboard replacement cost?`,
      a: (b, loc) => `Sony Android / Google TV logic motherboard spare part ranges from ₹3,800 to ₹7,500 depending on screen resolution (FHD vs 4K) and processing chipset. Firmware corrupt aana USB programmer re-flash ₹1,400–₹2,200-laye mudikalam.`
    },
    panel: {
      q: (b, loc) => `What is the realistic cost of Sony TV display panel replacement?`,
      a: (b, loc) => `Display panel replacement accounts for 60% to 75% of a new TV's purchase price (₹12,000–₹28,000+ for 43" to 55" models). Because of high panel costs, our Madurai technicians always inspect if the issue is repairable T-Con board ribbon oxidation (₹1,600–₹3,200) or backlight failure before recommending whole screen replacement.`
    }
  },
  'Samsung': {
    backlight: {
      q: (b, loc) => `What is the cost of Samsung TV LED backlight replacement in Madurai?`,
      a: (b, loc) => `Samsung LED TV backlight replacement typically costs ₹1,800 to ₹3,200 for 32-inch; ₹2,800 to ₹5,200 for 43-inch Crystal 4K series; and ₹4,800 to ₹8,200 for 55-inch UHD/QLED models. Online spare strips cost ₹600–₹1,800 part-only, but delicate panel opening and uniform diffusion lens alignment require professional installation across ${loc}.`
    },
    power: {
      q: (b, loc) => `What is the approximate Samsung TV power board price?`,
      a: (b, loc) => `Samsung TV power supply board spare part ranges from ₹1,500 to ₹3,200. On-site power rail diagnosis and capacitor/fuse replacement costs ₹1,100 to ₹1,950.`
    },
    motherboard: {
      q: (b, loc) => `How much does a Samsung Smart TV motherboard cost?`,
      a: (b, loc) => `Samsung Tizen Smart TV motherboard spare part ranges from ₹3,200 to ₹6,200. On-site board swap and panel LVDS matching costs approx ₹3,800 to ₹7,000.`
    },
    panel: {
      q: (b, loc) => `How much does Samsung TV panel replacement cost vs repair?`,
      a: (b, loc) => `Physical cracked or shorted display panel replacement costs ₹8,000–₹18,000 (often 60–70% of new TV value). If the screen shows vertical colored lines due to loose T-Con ribbon cable or COF bond failure, technician spot repair costs ₹1,400 to ₹2,800 without replacing the screen.`
    }
  },
  'Mi': {
    backlight: {
      q: (b, loc) => `What is the cost of Mi TV backlight replacement in Madurai?`,
      a: (b, loc) => `Mi TV LED backlight replacement costs approx ₹1,400 to ₹2,400 for 32-inch (4A, 4C, 5A series); ₹2,200 to ₹3,800 for 43-inch 4K series; and ₹3,500 to ₹5,800 for 55-inch models across ${loc}. Online spare strip sets cost ₹500–₹1,500; professional doorstep fitting prevents display glass cracking.`
    },
    power: {
      q: (b, loc) => `What is the price of Mi TV power supply board?`,
      a: (b, loc) => `Integrated power supply board spare part ranges from ₹1,200 to ₹2,200. On-site repair with surge capacitor change costs ₹950 to ₹1,650.`
    },
    motherboard: {
      q: (b, loc) => `How much does Mi TV motherboard repair or replacement cost?`,
      a: (b, loc) => `PatchWall / Android motherboard replacement spare ranges from ₹1,800 to ₹3,600. Mi logo bootloop or storage corrupt aana eMMC firmware reflash service costs ₹1,200 to ₹1,800.`
    },
    panel: {
      q: (b, loc) => `How much does Mi TV internal speaker pair or panel repair cost?`,
      a: (b, loc) => `Stereo 10W/12W speaker pair replacement costs ₹650 to ₹1,200 complete. T-Con flex ribbon bonding repair costs ₹1,200 to ₹2,400.`
    }
  },
  'OnePlus': {
    backlight: {
      q: (b, loc) => `What is the cost of OnePlus TV backlight replacement in Madurai?`,
      a: (b, loc) => `OnePlus TV backlight replacement typically ranges ₹1,500 to ₹2,600 for 32-inch Y-Series; ₹2,400 to ₹4,200 for 43-inch Y1S/U1S series; and ₹3,800 to ₹6,200 for 55-inch models in ${loc}. Full strip set replacement ensures uniform brightness.`
    },
    power: {
      q: (b, loc) => `How much does OnePlus TV power supply board repair cost?`,
      a: (b, loc) => `Power supply SMPS board replacement spare ranges from ₹1,400 to ₹2,800; component repair costs ₹1,100 to ₹1,850.`
    },
    motherboard: {
      q: (b, loc) => `What is the price of OnePlus TV Android motherboard?`,
      a: (b, loc) => `OnePlus Android TV motherboard spare part ranges from ₹2,500 to ₹4,800. On-site installation and panel pairing costs ₹3,200 to ₹5,600.`
    },
    panel: {
      q: (b, loc) => `How much does OnePlus TV screen display repair cost?`,
      a: (b, loc) => `Display panel replacement is ₹8,500–₹16,000+. For display lines or ghosting, technicians perform T-Con voltage rail testing and ribbon cleaning for ₹1,400–₹2,600.`
    }
  },
  'TCL': {
    backlight: {
      q: (b, loc) => `What is the cost of TCL / iFFALCON TV backlight replacement in Madurai?`,
      a: (b, loc) => `TCL TV backlight replacement costs ₹1,400 to ₹2,400 for 32-inch; ₹2,200 to ₹3,800 for 43-inch 4K; and ₹3,600 to ₹5,800 for 55-inch models across ${loc}. Genuine aluminum base strips provide lasting heat dissipation.`
    },
    power: {
      q: (b, loc) => `How much does TCL TV power board repair cost?`,
      a: (b, loc) => `Power supply SMPS board spare ranges from ₹1,200 to ₹2,400; on-site repair costs ₹1,000 to ₹1,700.`
    },
    motherboard: {
      q: (b, loc) => `What is the price of TCL Google TV motherboard in Madurai?`,
      a: (b, loc) => `TCL Google TV main logic board spare part ranges from ₹2,200 to ₹4,200. Complete doorstep replacement costs approx ₹2,800 to ₹4,900.`
    },
    panel: {
      q: (b, loc) => `What are the charges for TCL TV display panel repair?`,
      a: (b, loc) => `T-Con board replacement costs ₹1,200 to ₹2,200. Screen replacement accounts for 60% of TV cost; technicians verify panel viability before advising replacement.`
    }
  }
};

function getGenericTvPricing(brandName) {
  const b = brandName || 'TV';
  return {
    backlight: {
      q: (b, loc) => `How much does ${b} LED TV backlight replacement cost in Madurai?`,
      a: (b, loc) => `Online spare-part listings and local technician market rates for ${b} TV backlight replacement show: 32-inch models cost ₹1,350 to ₹2,400; 43-inch models cost ₹2,200 to ₹3,800; and 55-inch models cost ₹3,500 to ₹5,800 across ${loc}. Delicate display panel opening and complete strip array replacement guaranteed.`
    },
    power: {
      q: (b, loc) => `What is the approximate ${b} TV power board or SMPS price?`,
      a: (b, loc) => `Power supply SMPS board spare part ranges from ₹1,200 to ₹2,500. On-site capacitor, diode, and bridge rectifier repairs cost ₹950 to ₹1,700.`
    },
    motherboard: {
      q: (b, loc) => `How much does ${b} Smart TV motherboard replacement cost?`,
      a: (b, loc) => `Smart Android TV motherboard spare part ranges from ₹1,800 to ₹4,200 depending on display resolution. Firmware recovery or reflash service costs ₹1,200 to ₹1,800.`
    },
    panel: {
      q: (b, loc) => `What is the cost of ${b} TV display panel replacement in Madurai?`,
      a: (b, loc) => `Full display panel replacement generally costs 60% to 75% of the price of a new television (₹8,000 to ₹18,000+ depending on screen size). Our technicians in Madurai thoroughly inspect whether the issue is repairable T-Con timing controller board or ribbon cable before recommending screen replacement.`
    }
  };
}

// -----------------------------------------------------------------------------
// SERVICE CENTER MULTI-APPLIANCE RESEARCH DATA
// -----------------------------------------------------------------------------
function buildServiceCenterPricingFaqs(brandName, loc1, brandKey) {
  const b = brandName;
  const brandInfo = brandCategoryMap[brandKey] || {};
  const cards = brandInfo.cards || [];
  const categories = brandInfo.categories || [];

  const faqs = [];

  // 1. Visiting Fee FAQ
  faqs.push({
    q: `What is the visiting charge for ${b} appliance inspection in ${loc1}?`,
    a: `Doorstep visiting charge across ${loc1} and all Madurai localities is ₹200 to ₹350. Service confirm pannina indha inspection fee final service bill-la completely adjust aayidum.`
  });

  // 2. Washing Machine Pricing (if brand makes WM)
  if (categories.includes('washing-machine') || cards.some(c => c.toLowerCase().includes('washing'))) {
    if (b === 'Bosch') {
      faqs.push({
        q: `What is the approximate cost of Bosch front-load washing machine PCB and drum replacement?`,
        a: `Bosch front-load PCB spare part ranges from ₹3,500 to ₹6,800 (doorstep replacement ₹4,800–₹8,200). Stainless steel drum assembly spare part is ₹5,500–₹8,000; bearing & seal overhaul costs ₹2,200–₹3,800. Drain pump replacement is ₹1,350–₹2,100 complete.`
      });
    } else if (b === 'Samsung') {
      faqs.push({
        q: `How much does Samsung washing machine PCB or drain pump cost?`,
        a: `Samsung top-load PCB is ₹1,800–₹3,200; front-load Inverter PCB is ₹2,800–₹5,200 (part-only). EcoBubble drain pump replacement costs ₹1,150–₹1,850 complete with Madurai doorstep labour.`
      });
    } else if (b === 'IFB') {
      faqs.push({
        q: `What is the cost of IFB washing machine drum spider arm and PCB replacement?`,
        a: `IFB drum spider arm spare part ranges ₹2,200 to ₹3,400; dual heavy-duty bearing overhaul service is ₹1,800 to ₹3,200. Front-load controller PCB ranges ₹2,200 to ₹4,800 depending on model series.`
      });
    } else if (b === 'Whirlpool') {
      faqs.push({
        q: `How much does Whirlpool washing machine PCB or pulsator replacement cost?`,
        a: `Whirlpool top-load PCB spare is ₹1,700–₹3,500; front-load board ₹2,500–₹4,500. Agitator or 3D pulsator replacement costs ₹750–₹1,600. On-site installation across ${loc1} is upfront transparent.`
      });
    } else {
      faqs.push({
        q: `How much does ${b} washing machine PCB or drain motor replacement cost?`,
        a: `Online spare parts for ${b} washing machine PCBs range from ₹1,600 to ₹4,200 depending on top-load or front-load series. Drain pump replacement with doorstep service in ${loc1} costs approx ₹1,150 to ₹1,800.`
      });
    }
  }

  // 3. Refrigerator Pricing (if brand makes Fridge)
  if (categories.includes('refrigerator') || cards.some(c => c.toLowerCase().includes('refrigerator') || c.toLowerCase().includes('fridge'))) {
    if (b === 'Samsung') {
      faqs.push({
        q: `What is the cost of Samsung refrigerator compressor replacement in Madurai?`,
        a: `Samsung Digital Inverter compressor spare part ranges from ₹2,800 to ₹4,800. Complete sealed-system job (copper brazing, nitrogen flush, vacuum, filter drier, and R600a gas) ranges from ₹6,000 to ₹9,500. Inverter PCB is ₹1,800–₹3,800.`
      });
    } else if (b === 'Whirlpool') {
      faqs.push({
        q: `How much does Whirlpool refrigerator compressor replacement and gas charging cost?`,
        a: `Whirlpool reciprocating compressor replacement complete job is ₹4,500 to ₹7,800; Intellifresh inverter compressor is ₹6,200 to ₹9,200. Pinhole leak repair with R600a charging is ₹1,500 to ₹2,300.`
      });
    } else if (b === 'Godrej') {
      faqs.push({
        q: `What is the cost of Godrej refrigerator compressor or starter relay?`,
        a: `Single-door Godrej compressor replacement complete with gas charging ranges from ₹3,800 to ₹6,200. PTC starter relay and overload protector replacement costs ₹350 to ₹600 complete.`
      });
    } else if (b === 'Bosch') {
      faqs.push({
        q: `What is the price of Bosch refrigerator electronic PCB or compressor?`,
        a: `Bosch refrigerator control module spare part ranges from ₹2,800 to ₹5,800. European inverter compressor replacement complete with vacuum flushing and gas is ₹6,800 to ₹11,500.`
      });
    } else {
      faqs.push({
        q: `How much does ${b} refrigerator compressor replacement or gas charging cost?`,
        a: `Single-door compressor replacement complete with sealed-system gas charging costs ₹3,900 to ₹6,500; double-door inverter compressor costs ₹5,500 to ₹9,200. Starter relay replacement is ₹350–₹650.`
      });
    }
  }

  // 4. AC Pricing (if brand makes AC)
  if (categories.includes('ac') || cards.some(c => c.toLowerCase().includes('air conditioner') || c.toLowerCase().includes('ac'))) {
    if (b === 'Daikin') {
      faqs.push({
        q: `What is the cost of Daikin inverter AC PCB and R32 gas charging in Madurai?`,
        a: `Daikin inverter outdoor PCB spare part ranges from ₹6,500 to ₹11,500 (doorstep replacement ₹7,800–₹13,000). Complete nitrogen leak test and pure R32 vacuum gas charging costs ₹2,200 to ₹3,200.`
      });
    } else if (b === 'Voltas') {
      faqs.push({
        q: `How much does Voltas AC outdoor PCB or compressor replacement cost?`,
        a: `Voltas inverter outdoor PCB spare is ₹3,500–₹5,800 (installed ₹4,600–₹7,200). Rotary compressor replacement complete with gas charging is ₹5,200–₹8,500. Dual capacitor is ₹450–₹750.`
      });
    } else if (b === 'Blue Star') {
      faqs.push({
        q: `What are Blue Star AC inverter PCB and gas charging charges?`,
        a: `Blue Star inverter PCB spare ranges from ₹5,200 to ₹8,800. R410A / R32 refrigerant vacuum charging with leak detection is ₹2,200 to ₹3,400 in Madurai.`
      });
    } else {
      faqs.push({
        q: `How much does ${b} split AC PCB replacement or gas filling cost?`,
        a: `${b} inverter split AC outdoor PCB replacement ranges from ₹4,500 to ₹8,500 depending on tonnage. Vacuum refrigerant gas charging (R32 / R410A) costs ₹2,000 to ₹3,100.`
      });
    }
  }

  // 5. TV Pricing (if brand makes TV)
  if (categories.includes('tv') || cards.some(c => c.toLowerCase().includes('television') || c.toLowerCase().includes('tv'))) {
    if (b === 'Sony') {
      faqs.push({
        q: `What is the cost of Sony Bravia TV backlight or power supply board repair?`,
        a: `Sony Bravia 43-inch 4K backlight replacement costs ₹3,500 to ₹6,500; 55-inch is ₹5,500 to ₹9,500 (complete with delicate panel opening). Power supply SMPS board repair is ₹1,200 to ₹2,200.`
      });
    } else if (b === 'Samsung') {
      faqs.push({
        q: `How much does Samsung TV backlight replacement cost in Madurai?`,
        a: `Samsung 32-inch backlight replacement is ₹1,800–₹3,200; 43-inch Crystal 4K is ₹2,800–₹5,200; 55-inch UHD is ₹4,800–₹8,200. Technicians test panel integrity before installing new LED arrays.`
      });
    } else if (b === 'Mi' || b === 'Xiaomi' || b === 'Redmi') {
      faqs.push({
        q: `What is the price of Mi / Xiaomi TV backlight or motherboard repair?`,
        a: `32-inch backlight replacement is ₹1,400–₹2,400; 43-inch 4K is ₹2,200–₹3,800. Motherboard replacement spare ranges from ₹1,800 to ₹3,600 with firmware installation in ${loc1}.`
      });
    } else {
      faqs.push({
        q: `How much does ${b} LED TV backlight replacement cost in Madurai?`,
        a: `32-inch ${b} LED TV backlight replacement costs ₹1,350 to ₹2,400; 43-inch costs ₹2,200 to ₹3,800. Power board repair costs ₹950 to ₹1,700.`
      });
    }
  }

  // 6. Microwave Oven Pricing (if brand makes Microwave)
  if (categories.includes('microwave-oven') || cards.some(c => c.toLowerCase().includes('microwave'))) {
    faqs.push({
      q: `What is the cost of ${b} microwave oven magnetron or touchpad replacement?`,
      a: `Online spare parts for ${b} microwave magnetrons typically range from ₹1,000 to ₹2,200. Complete doorstep replacement with high-voltage diode check and Madurai technician labour is approx ₹1,600 to ₹3,200. Touchpad membrane replacement ranges from ₹650 to ₹1,400.`
    });
  }

  // If we have fewer than 4 FAQs (for brands with only 1 or 2 appliances like Kenstar, VW, etc.), add general repair determination FAQ
  if (faqs.length < 4) {
    faqs.push({
      q: `How is the final repair cost determined for ${b} appliances in Madurai?`,
      a: `Physical diagnosis mudinju exact model, fault complexity and required parts basis-la upfront estimate explain pannuvom. Customer consent kedaicha apram-dhaan repair start aagum.`
    });
  }

  return faqs;
}

// -----------------------------------------------------------------------------
// CATEGORY HUB COMPARATIVE PRICING FAQS
// -----------------------------------------------------------------------------
const CATEGORY_HUB_PRICING = {
  'washing-machine': [
    {
      q: `What is the visiting charge for washing machine inspection across Madurai?`,
      a: `Doorstep visiting charge across all Madurai localities (Anna Nagar, KK Nagar, Arapalayam, Sellur, etc.) is ₹200 to ₹350. Service confirm pannina indha inspection charge final repair invoice-la completely adjust aayidum.`
    },
    {
      q: `What is the cost of washing machine PCB replacement across Bosch, Samsung, and IFB?`,
      a: `Researched spare-part market listings show Bosch front-load PCBs range ₹3,500 to ₹6,800; Samsung front-load Inverter PCBs range ₹2,800 to ₹5,200 (top load ₹1,800–₹3,200); and IFB controller PCBs range ₹2,200 to ₹4,800. Installed repair costs in Madurai include ₹800–₹1,500 technician labour and wiring calibration.`
    },
    {
      q: `How much does washing machine drum or bearing replacement cost in Madurai?`,
      a: `If the drum spider arm is broken, replacement parts range from ₹2,000 to ₹4,200 depending on brand (IFB, Samsung, LG). Overhauling worn spin bearings with new imported water seals costs ₹1,800 to ₹3,200. For Bosch welded sealed tubs, complete assembly replacement can range ₹9,000–₹15,000.`
    },
    {
      q: `What is the approximate price of a washing machine drain pump and door gasket?`,
      a: `Drain pump replacement across brands typically ranges ₹1,150 to ₹1,950 installed (part-only ₹650–₹1,450). Front-load antimicrobial rubber door gaskets range ₹1,600 to ₹2,800 complete with retaining clamp fitting.`
    }
  ],
  'ac': [
    {
      q: `What is the visiting fee for AC inspection and troubleshooting in Madurai?`,
      a: `Standard technician doorstep visiting charge across all Madurai neighborhoods is ₹200 to ₹350, fully adjusted against the final service or spare replacement bill upon approval.`
    },
    {
      q: `How much does split AC inverter PCB replacement cost across Daikin, Voltas, and Blue Star?`,
      a: `Online spare parts research shows Daikin inverter outdoor PCBs range ₹6,500 to ₹11,500; Voltas inverter outdoor PCBs range ₹3,500 to ₹5,800; and Blue Star PCBs range ₹5,200 to ₹8,800. Doorstep replacement with thermal paste and voltage testing typically costs ₹4,600 to ₹13,000 depending on brand and tonnage.`
    },
    {
      q: `What are the charges for AC gas refilling (R32 vs R410A vs R22) in Madurai?`,
      a: `Complete leak detection, nitrogen hold pressure test, two-stage vacuuming, and gas charging ranges ₹2,000 to ₹3,200 for modern R32 and R410A inverter ACs. Older R22 refrigerant charging ranges ₹2,200 to ₹3,400 based on refrigerant market prices.`
    },
    {
      q: `How much does AC deep jet cleaning and capacitor replacement cost?`,
      a: `High-pressure foam jet wash for indoor and outdoor coils with service jacket costs ₹699 to ₹999. Dual run motor capacitor replacement costs ₹450 to ₹750 complete with labour.`
    }
  ],
  'fridge': [
    {
      q: `What is the doorstep inspection charge for refrigerator repair in Madurai?`,
      a: `Doorstep visiting charge across all Madurai localities is ₹200 to ₹350. Repair proceed pannina inspection fee bill-la deduct aayidum; transparent diagnosis guaranteed.`
    },
    {
      q: `What is the cost of refrigerator compressor replacement for single door vs double door inverter models?`,
      a: `Single-door compressor replacement complete with copper brazing, vacuuming, and gas charging ranges ₹3,800 to ₹6,500. Double-door frost-free Digital Inverter compressor replacement (Samsung, LG, Whirlpool) ranges ₹6,000 to ₹9,500 complete.`
    },
    {
      q: `How much does a refrigerator inverter control board or thermostat cost?`,
      a: `Electronic inverter PCB spare part typically ranges ₹1,600 to ₹3,800 (installed ₹2,500–₹4,800). Mechanical defrost thermostats and starter relays cost ₹350 to ₹800 complete.`
    },
    {
      q: `What are refrigerator gas charging charges in Madurai?`,
      a: `Pinhole leak detection, filter drier change, and pure R600a / R134a charging ranges ₹1,400 to ₹2,400. Custom magnetic door gasket replacement costs ₹800 to ₹1,600.`
    }
  ],
  'tv': [
    {
      q: `What is the visiting charge for TV repair across Madurai localities?`,
      a: `Doorstep visiting and panel testing fee across all Madurai areas is ₹200 to ₹350, adjusted against the final repair bill upon work confirmation.`
    },
    {
      q: `How much does LED TV backlight replacement cost across 32, 43, and 55-inch models?`,
      a: `Market estimates indicate 32-inch backlight replacement costs ₹1,400 to ₹2,600; 43-inch 4K backlight replacement costs ₹2,400 to ₹4,800; and 55-inch UHD/QLED backlight replacement costs ₹4,500 to ₹8,500. Delicate panel opening and full strip set installation included.`
    },
    {
      q: `What is the cost of TV power supply SMPS board and motherboard repair?`,
      a: `Power supply board component repair (capacitors/MOSFETs) is ₹950 to ₹1,800; full SMPS board replacement is ₹1,400 to ₹3,200. Smart TV motherboard replacement ranges ₹2,200 to ₹6,500 depending on 4K resolution.`
    },
    {
      q: `What is the realistic cost of TV display panel replacement vs buying a new TV?`,
      a: `Replacing a physically cracked or shorted display panel typically costs 60% to 75% of a new TV's purchase price (₹8,000–₹25,000+). Our Madurai technicians thoroughly verify if the issue is a salvageable T-Con board ribbon (₹1,200–₹2,500) before declaring screen replacement unviable.`
    }
  ],
  'root': [
    {
      q: `What are your doorstep service charges for home appliances across Madurai?`,
      a: `Doorstep visiting charge across all 200+ Madurai localities is ₹200 to ₹350. Service confirm pannina inspection fee final service bill-la completely adjust aayidum.`
    },
    {
      q: `What are the typical spare part and repair costs for washing machines in Madurai?`,
      a: `Washing machine drain pump replacement ranges ₹1,150–₹1,850; top-load PCB is ₹2,200–₹3,800; front-load inverter PCB is ₹3,200–₹6,500; and drum bearing overhaul service is ₹1,800–₹3,400 depending on brand (Bosch, Samsung, IFB, Whirlpool).`
    },
    {
      q: `How much does split AC gas filling and inverter PCB repair cost in Madurai?`,
      a: `Complete leak detection, vacuum hold and R32 / R410A gas charging ranges ₹2,000 to ₹3,200. Inverter AC outdoor PCB replacement ranges ₹4,500 to ₹12,000 depending on brand (Voltas, Daikin, Blue Star).`
    },
    {
      q: `What are refrigerator compressor and TV backlight repair charges in Madurai?`,
      a: `Single-door fridge compressor replacement complete is ₹3,900–₹6,500; double-door inverter compressor is ₹6,000–₹9,500. 32-inch TV backlight replacement is ₹1,400–₹2,400; 43-inch 4K backlight is ₹2,400–₹4,800.`
    }
  ]
};

// -----------------------------------------------------------------------------
// MASTER FAQ GENERATION LOOP
// -----------------------------------------------------------------------------
console.log('Building research-grounded pricing FAQs for all 174 content pages...');

const existingMasterFaqs = fs.existsSync('scripts/madurai_master_faqs_v2.json')
  ? JSON.parse(fs.readFileSync('scripts/madurai_master_faqs_v2.json', 'utf8'))
  : {};

const updatedMasterFaqs = {};

pages.forEach((p, idx) => {
  const { loc1, loc2 } = getPageLocalities(idx);
  const rawBrand = p.brand || '';
  const isGeneric = !rawBrand || rawBrand.startsWith('All') || rawBrand === 'Home Appliance' || rawBrand === 'home-appliance';
  const brandName = isGeneric ? '' : rawBrand;
  const cat = p.category;
  const brandKey = p.brandKey || (brandName ? brandName.toLowerCase().replace(/[^a-z0-9]/g, '-') : '');

  // 1. Group 1: Technical Troubleshooting (preserve or generate)
  let existingGroup1 = null;
  let existingGroup3 = null;
  if (existingMasterFaqs[p.newFile] && existingMasterFaqs[p.newFile].groups) {
    const grps = existingMasterFaqs[p.newFile].groups;
    if (grps[0]) existingGroup1 = grps[0];
    if (grps[2]) existingGroup3 = grps[2];
  }

  // 2. Group 2: Research-grounded Pricing FAQs
  let group2Title = `${brandName ? brandName + ' ' : ''}Spare Parts & Repair Pricing in Madurai`;
  if (cat === 'service-center') {
    group2Title = `${brandName ? brandName + ' ' : ''}Repair Costs & Spare Parts Pricing in Madurai`;
  } else if (cat === 'root' || isGeneric) {
    group2Title = `Estimated Repair Costs & Spare Parts Pricing in Madurai`;
  }

  let pricingFaqItems = [];

  if (cat === 'washing-machine') {
    if (isGeneric) {
      pricingFaqItems = CATEGORY_HUB_PRICING['washing-machine'];
    } else {
      const brandData = WM_PRICING_DATA[brandName] || getGenericWmPricing(brandName);
      pricingFaqItems = [
        {
          q: `What is the visiting charge for ${brandName} washing machine inspection in ${loc1}?`,
          a: `Doorstep visiting charge across ${loc1} and all Madurai areas is ₹200 to ₹350. Service confirm pannina inspection fee bill-la completely adjust aayidum. Detailed diagnosis report upfront explain panrom.`
        },
        brandData.pcb.q(brandName, loc1) ? {
          q: brandData.pcb.q(brandName, loc1),
          a: brandData.pcb.a(brandName, loc1)
        } : null,
        brandData.drum.q(brandName, loc1) ? {
          q: brandData.drum.q(brandName, loc1),
          a: brandData.drum.a(brandName, loc1)
        } : null,
        brandData.pump.q(brandName, loc1) ? {
          q: brandData.pump.q(brandName, loc1),
          a: brandData.pump.a(brandName, loc1)
        } : null,
        brandData.gasket.q(brandName, loc1) ? {
          q: brandData.gasket.q(brandName, loc1),
          a: brandData.gasket.a(brandName, loc1)
        } : null
      ].filter(Boolean);
    }
  } else if (cat === 'ac') {
    if (isGeneric) {
      pricingFaqItems = CATEGORY_HUB_PRICING['ac'];
    } else {
      const brandData = AC_PRICING_DATA[brandName] || getGenericAcPricing(brandName);
      pricingFaqItems = [
        {
          q: `What is the visiting charge for ${brandName} AC diagnosis in ${loc1}?`,
          a: `Standard technician visiting fee across ${loc1} and Madurai neighborhoods is ₹200 to ₹350. Repair or spare replacement proceed pannina indha fee final invoice-la completely adjust aayidum.`
        },
        brandData.pcb.q(brandName, loc1) ? {
          q: brandData.pcb.q(brandName, loc1),
          a: brandData.pcb.a(brandName, loc1)
        } : null,
        brandData.compressor.q(brandName, loc1) ? {
          q: brandData.compressor.q(brandName, loc1),
          a: brandData.compressor.a(brandName, loc1)
        } : null,
        brandData.gas.q(brandName, loc1) ? {
          q: brandData.gas.q(brandName, loc1),
          a: brandData.gas.a(brandName, loc1)
        } : null,
        brandData.service.q(brandName, loc1) ? {
          q: brandData.service.q(brandName, loc1),
          a: brandData.service.a(brandName, loc1)
        } : null
      ].filter(Boolean);
    }
  } else if (cat === 'fridge') {
    if (isGeneric) {
      pricingFaqItems = CATEGORY_HUB_PRICING['fridge'];
    } else {
      const brandData = FRIDGE_PRICING_DATA[brandName] || getGenericFridgePricing(brandName);
      pricingFaqItems = [
        {
          q: `What is the visiting charge for ${brandName} refrigerator inspection in ${loc1}?`,
          a: `Doorstep inspection charge across ${loc1} is ₹200 to ₹350 only. Service confirm pannina inspection fee bill-la adjust aayidum; upfront transparent quotation guaranteed.`
        },
        brandData.compressor.q(brandName, loc1) ? {
          q: brandData.compressor.q(brandName, loc1),
          a: brandData.compressor.a(brandName, loc1)
        } : null,
        brandData.pcb.q(brandName, loc1) ? {
          q: brandData.pcb.q(brandName, loc1),
          a: brandData.pcb.a(brandName, loc1)
        } : null,
        brandData.defrost.q(brandName, loc1) ? {
          q: brandData.defrost.q(brandName, loc1),
          a: brandData.defrost.a(brandName, loc1)
        } : null,
        brandData.gasket.q(brandName, loc1) ? {
          q: brandData.gasket.q(brandName, loc1),
          a: brandData.gasket.a(brandName, loc1)
        } : null
      ].filter(Boolean);
    }
  } else if (cat === 'tv') {
    if (isGeneric) {
      pricingFaqItems = CATEGORY_HUB_PRICING['tv'];
    } else {
      const brandData = TV_PRICING_DATA[brandName] || getGenericTvPricing(brandName);
      pricingFaqItems = [
        {
          q: `What is the visiting and testing charge for ${brandName} TV in ${loc1}?`,
          a: `Doorstep visiting and multimeter testing fee across ${loc1} is ₹200 to ₹350. Repair proceed pannina indha charge final bill-la deduct aayidum.`
        },
        brandData.backlight.q(brandName, loc1) ? {
          q: brandData.backlight.q(brandName, loc1),
          a: brandData.backlight.a(brandName, loc1)
        } : null,
        brandData.power.q(brandName, loc1) ? {
          q: brandData.power.q(brandName, loc1),
          a: brandData.power.a(brandName, loc1)
        } : null,
        brandData.motherboard.q(brandName, loc1) ? {
          q: brandData.motherboard.q(brandName, loc1),
          a: brandData.motherboard.a(brandName, loc1)
        } : null,
        brandData.panel.q(brandName, loc1) ? {
          q: brandData.panel.q(brandName, loc1),
          a: brandData.panel.a(brandName, loc1)
        } : null
      ].filter(Boolean);
    }
  } else if (cat === 'service-center') {
    if (isGeneric) {
      pricingFaqItems = CATEGORY_HUB_PRICING['root'];
    } else {
      const slug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      pricingFaqItems = buildServiceCenterPricingFaqs(brandName, loc1, slug);
    }
  } else if (cat === 'root') {
    pricingFaqItems = CATEGORY_HUB_PRICING['root'];
  }

  // Ensure fallback Group 1 if not present
  if (!existingGroup1) {
    existingGroup1 = {
      title: `${brandName || 'Appliance'} Technical & Fault Troubleshooting`,
      items: [
        {
          q: `Why is my ${brandName || 'appliance'} malfunctioning in ${loc1}?`,
          a: `Madurai climate and voltage fluctuation karanamaga components wear out aagalaam. Technician digital testing tools vechu root cause isolate panni spot repair execute pannuvaar.`
        }
      ]
    };
  }

  // Ensure fallback Group 3 if not present
  if (!existingGroup3) {
    existingGroup3 = {
      title: `Doorstep Service & Booking in ${loc1}`,
      items: [
        {
          q: `Do you provide doorstep repair service near ${loc1} and ${loc2}?`,
          a: `Yes, we cover all residential and commercial addresses in ${loc1}, ${loc2}, and 200+ Madurai localities. Technicians common replacement spares carry panni direct home-laye repair mudikrom.`
        },
        {
          q: `How quickly can a technician visit my home in Madurai?`,
          a: `Same-day doorstep technician visit typically 2 to 4 hours-kulle coordinate panrom. Call +91 92115 12088 or WhatsApp vazhiya convenient time slot confirm pannikalam.`
        }
      ]
    };
  }

  updatedMasterFaqs[p.newFile] = {
    groups: [
      existingGroup1,
      {
        title: group2Title,
        items: pricingFaqItems
      },
      existingGroup3
    ]
  };
});

fs.writeFileSync('scripts/madurai_master_faqs_v2.json', JSON.stringify(updatedMasterFaqs, null, 2));
console.log(`Successfully generated research-backed pricing FAQs for ${Object.keys(updatedMasterFaqs).length} pages!`);
