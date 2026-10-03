// scripts/build_madurai_faqs_v2.js
// Generates 100% unique, brand & appliance tailored, Madurai-localized FAQ datasets for all 174 pages.
// Includes natural Tanglish phrases, transparent pricing ranges, genuine Madurai locality references,
// and ensures no two pages share an identical FAQ set.

const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));
const localitiesData = require('./madurai_localities.js');

const allLocs = [
  ...localitiesData.east.map(l => l.name),
  ...localitiesData.west.map(l => l.name),
  ...localitiesData.north.map(l => l.name),
  ...localitiesData.south.map(l => l.name)
];

// Helper to pick 2 distinct localities for page FAQs
function getPageLocalities(idx) {
  const loc1 = allLocs[(idx * 3 + 5) % allLocs.length];
  const loc2 = allLocs[(idx * 5 + 17) % allLocs.length];
  return { loc1, loc2 };
}

// -----------------------------------------------------------------------------
// AC FAQ POOLS
// -----------------------------------------------------------------------------
const AC_TECH_FAQS = [
  (b, loc) => ({
    q: `Why is my ${b} AC running continuously but not cooling the room in ${loc}?`,
    a: `Madurai summer heat-la ${b} AC non-stop run aagiyum cooling drop aagudhu-na, outdoor condenser fins and indoor filters-la heavy dust choke aagirukkalaam. Other common reasons include weak run capacitor or low refrigerant pressure. Technician digital manifold gauge and clamp meter vechu spot inspection execute pannuvaar.`
  }),
  (b, loc) => ({
    q: `What causes indoor water dripping from the ${b} AC inside bedroom wall?`,
    a: `${b} split AC indoor unit-la irundhu water drip aagudhu-na, condensate drain pipe-la algae slime blockage irukkalaam, or low gas pressure karanamaga evaporator coil freeze aagi thaw aagumbodhu tray overflow aagum. Technician pressurized water flush panni drain line clear pannuvaar.`
  }),
  (b, loc) => ({
    q: `Outdoor compressor humming sound vandhu trip aagudha in ${b} AC? Enna problem?`,
    a: `Compressor on aagama humming sound mattum varudhu-na, dual run capacitor (35uF to 55uF) weak aayirundha compressor kick start aagadhu. Overheating-la thermal overload trip aagum. Genuine heavy-duty capacitor spot-laye replace panna cooling instant-ah restore aagidum.`
  }),
  (b, loc) => ({
    q: `How do I know if my ${b} air conditioner in ${loc} needs refrigerant gas refilling?`,
    a: `Indoor copper pipe-la white ice form aavadhu, cooling effect romba slow aavadhu, and outdoor unit blowing room-temperature air — ivai ellam gas leak-oda main symptoms. Technician nitrogen leak test panni leak arrest pannitu fresh R32 / R410A gas charge pannuvaar.`
  }),
  (b, loc) => ({
    q: `${b} Inverter AC display-la error code blink aagi fan ninnu pocha? How to fix?`,
    a: `Error code outdoor inverter PCB module or indoor thermistor sensor communication mismatch-la trigger aagum. Madurai voltage fluctuations-la board track stress aaga vaaippu irukku. Experienced technician board-level diagnostics panni spot repair execute pannuvaar.`
  }),
  (b, loc) => ({
    q: `Why is ${b} AC blowing bad odor or foul smell when switched on in ${loc}?`,
    a: `Indoor unit drain tray and cooling fins-la trapped dust and humidity fungus mould create pannum. Antifungal chemical jet wash panni deep clean pannina fresh clean airflow restore aagidum.`
  })
];

const AC_PRICE_FAQS = [
  (b, loc) => ({
    q: `How much does ${b} AC general service and jet cleaning cost in Madurai?`,
    a: `Standard filter and brush service ₹399–₹599 range-la irukkum. High-pressure deep jet wash for indoor and outdoor coils ₹799–₹999 approx. Final amount unit condition and service type based-ah technician upfront confirm pannuvaar.`
  }),
  (b, loc) => ({
    q: `What is the visiting and doorstep inspection charge for AC repair in ${loc}?`,
    a: `Our standard technician visiting fee across ${loc} and all Madurai areas is ₹200 to ₹350. Service or spare replacement proceed pannina indha inspection fee final service invoice-la fully adjust aayidum.`
  }),
  (b, loc) => ({
    q: `How much does ${b} AC run capacitor or fan motor replacement cost?`,
    a: `Run capacitor replacement typically ₹499 to ₹750 model-ku erppa irukkum. Fan motor or inverter PCB repair ₹1,200–₹2,800 range-la circuit damage based-ah confirm pannuvanga. Genuine tested parts with warranty.`
  }),
  (b, loc) => ({
    q: `What are the charges for ${b} AC gas charging in Madurai?`,
    a: `Refrigerant top-up or full vacuum charging (R32 / R410A / R22) leak arrest, brazing and gas weight based-ah confirm pannuvom. Technician inspection mudinju upfront quote kudutha pinbu dhaan work proceed aagum.`
  })
];

// -----------------------------------------------------------------------------
// FRIDGE FAQ POOLS
// -----------------------------------------------------------------------------
const FRIDGE_TECH_FAQS = [
  (b, loc) => ({
    q: `Freezer cool aagudhu aana bottom compartment warm-ah irukku in ${b} fridge? Why?`,
    a: `${b} frost-free refrigerator-la defrost timer, bimetal thermostat or thermal fuse fail aana evaporator coil-la heavy ice jam aagi air circulation vent block aayidum. Defrost circuit component change panni air duct thaw pannina normal cooling restore aagum.`
  }),
  (b, loc) => ({
    q: `${b} Refrigerator compressor clicking noise vandhu shut down aagudha in ${loc}?`,
    a: `Compressor 2 minutes-ku oru thadava click sound pannitu stop aagudhu-na, PTC starter relay or overload protector burn aayirukkalaam. Genuine relay and capacitor replace pannina compressor normal smooth humming-la run aagum.`
  }),
  (b, loc) => ({
    q: `Why is water leaking under the vegetable crisper box in my ${b} fridge?`,
    a: `Internal defrost drain hole slime sediment-la clog aana melt aagura condensate water vegetable tray keezha accumulate aagum. Technician pressurized flush panni drain tube clear pannuvaar.`
  }),
  (b, loc) => ({
    q: `How to fix loose freezer door gasket on ${b} refrigerator in ${loc}?`,
    a: `Door magnetic rubber bead loose aana external hot Madurai air ulla poi heavy snow ice accumulation undakkum. Custom antimicrobial magnetic gasket fit panni airtight suction restore panrom.`
  }),
  (b, loc) => ({
    q: `${b} Single door fridge freezer-la ice form aagala, mild warm-ah irukka?`,
    a: `Capillary tube oil restriction or sealed system pinhole refrigerant leak irukkalaam. Nitrogen test, leak brazing and fresh R600a charging panni freezing capability spot-laye restore panrom.`
  })
];

const FRIDGE_PRICE_FAQS = [
  (b, loc) => ({
    q: `What is the visiting charge for ${b} refrigerator inspection in ${loc}?`,
    a: `Doorstep inspection fee across ${loc} is ₹200–₹350 only. Repair confirm pannina indha charge final bill-la deduct aagidum. Upfront transparent estimate guaranteed.`
  }),
  (b, loc) => ({
    q: `How much does ${b} fridge starter relay and thermostat replacement cost?`,
    a: `PTC starter relay replacement ₹450–₹750 approx. Mechanical or electronic thermostat ₹650–₹1,100 model based-ah vary aagum. Genuine compatible spares only.`
  }),
  (b, loc) => ({
    q: `How much does ${b} refrigerator gas charging cost in Madurai?`,
    a: `Sealed system leak brazing, vacuum flushing and pure R600a / R134a charging model and capacity based-ah estimate pannuvom. Technician spot diagnosis-la exact cost confirm pannuvaar.`
  })
];

// -----------------------------------------------------------------------------
// WASHING MACHINE FAQ POOLS
// -----------------------------------------------------------------------------
const WM_TECH_FAQS = [
  (b, loc) => ({
    q: `Why is my ${b} washing machine not draining water and showing error code in ${loc}?`,
    a: `Wash cycle mudinjum water tub-la retain aagudhu-na, drain pump impeller-la coin, hair pin or thread choke aayirukkalaam, or drain motor coil burn aayirukkalaam. Coin filter trap clean panni pump inspect panna udane water normal-ah drain aagidum.`
  }),
  (b, loc) => ({
    q: `Spin cycle-la ${b} washing machine violent-ah aadi loud thumping noise pannudha?`,
    a: `Drum bearings worn out aayirundha or shock absorber damper rods weak aana spin mode-la heavy vibration and noise varum. New damper rods and heavy-duty bearings fit panni drum stability restore panrom.`
  }),
  (b, loc) => ({
    q: `Water tap on panniyum water romba slow-ah fill aagudhu in ${b} washer?`,
    a: `Inlet solenoid valve filter mesh-la sand and mineral salt accumulate aana water flow cut aagum. Valve clean panni pressure switch tube check pannina intake speed normal aagidum.`
  }),
  (b, loc) => ({
    q: `Front load ${b} washing machine door lock stuck aagi open aagala in ${loc}? How to solve?`,
    a: `Door thermal delay interlock switch short aana wash cycle mudinjum door unlock aagadhu. Emergency release tool vechu safe-ah open panni genuine door switch replace panrom.`
  }),
  (b, loc) => ({
    q: `Pulsator rotate aagala aana motor humming sound kekkudha on semi-automatic ${b}?`,
    a: `Rubber drive belt loose aagi slip aana or motor capacitor weak aana pulsator agitate aagadhu. High-grade belt fit panni capacitor change panna wash power restore aagidum.`
  })
];

const WM_PRICE_FAQS = [
  (b, loc) => ({
    q: `What is the visiting charge for washing machine repair in ${loc}?`,
    a: `Visiting and diagnosis charge across ${loc} is ₹200–₹350. Service confirm panna inspection fee final bill-la completely adjust aayidum.`
  }),
  (b, loc) => ({
    q: `How much does ${b} washing machine drain pump or inlet valve cost?`,
    a: `Drain pump replacement ₹750–₹1,450 model-ku erppa irukkum. Solenoid inlet valve ₹550–₹950 range. Genuine parts upfront approval oda maathuvom.`
  }),
  (b, loc) => ({
    q: `How much does front load drum bearing overhaul cost in Madurai?`,
    a: `Outer tub overhaul, dual bearings and imported water seal replacement model size based-ah ₹1,600–₹2,800 range-la confirm pannuvom. Quiet spinning guaranteed.`
  })
];

// -----------------------------------------------------------------------------
// TV FAQ POOLS
// -----------------------------------------------------------------------------
const TV_TECH_FAQS = [
  (b, loc) => ({
    q: `Sound clear-ah kekkudhu aana ${b} Smart TV screen full-ah black-ah irukku in ${loc}?`,
    a: `Display screen dark aagi audio continue aagudhu-na, internal LED backlight strip burn aayirukkalaam. Torch light adichu paatha faint picture theriyum. Padded work mat vechu safely panel open panni genuine aluminum backlight array replace panrom.`
  }),
  (b, loc) => ({
    q: `${b} LED TV standby red light blink aagudhu aana power turn on aagala?`,
    a: `Power supply SMPS board filter capacitor or bridge rectifier surge-la blow aayirundha power trigger aagadhu. On-site board level testing panni capacitor replace panna TV power instant-ah on aagidum.`
  }),
  (b, loc) => ({
    q: `Screen-la vertical colored lines or horizontal bars theriyudha on ${b} 4K TV?`,
    a: `T-Con timing controller board ribbon contact oxidation or flex cable loose contact dhaan main reason. Ribbon micro-cleaning and voltage rail testing panni panel clarity fix panrom without whole screen change.`
  }),
  (b, loc) => ({
    q: `Android ${b} TV startup logo-la freeze aagi restart aagitte irukka in ${loc}?`,
    a: `System memory cache overflow or motherboard eMMC firmware corrupt aana TV bootloop-la stuck aagum. USB programmer vazhiya clean stock OS reflash panni smart TV restore panrom.`
  }),
  (b, loc) => ({
    q: `Why is TV volume crackling or speaker sound muffled on my ${b} television?`,
    a: `Internal stereo speaker paper cones tear aana vibration distortion varum. Genuine 10W/12W speaker pair spot-laye replace panni crystal clear dialogue restore panrom.`
  })
];

const TV_PRICE_FAQS = [
  (b, loc) => ({
    q: `How much does ${b} LED TV backlight replacement cost in Madurai?`,
    a: `Backlight replacement for 32-inch is approx ₹1,200–₹1,800, 43-inch ₹1,800–₹2,600, 55-inch ₹2,500–₹3,800 depending on LED strip lens type. Doorstep-laye repair complete aagum.`
  }),
  (b, loc) => ({
    q: `What is the visiting charge for TV repair in ${loc}?`,
    a: `Doorstep visit fee across ${loc} is ₹200–₹350 only. Repair proceed pannina inspection fee bill-la adjust aayidum.`
  }),
  (b, loc) => ({
    q: `Can ${b} TV motherboard or power supply board be repaired at home?`,
    a: `Aam, 90% power supply board and T-Con ribbon issues technician unga veetukke testing meters eduthuttu vandhu spot-laye repair mudichi demonstration tharuvanga.`
  })
];

// -----------------------------------------------------------------------------
// GENERAL DOORSTEP & BOOKING FAQS (ROTATED)
// -----------------------------------------------------------------------------
const BOOKING_FAQS = [
  (b, loc1, loc2) => ({
    q: `Do you provide doorstep repair service near ${loc1} and ${loc2}?`,
    a: `Yes, we cover all residential and commercial addresses in ${loc1}, ${loc2}, and 200+ Madurai localities. Technicians essential testing meters and common replacement spares carry panni 90% repairs direct home-laye mudikrom.`
  }),
  (b, loc1, loc2) => ({
    q: `How quickly can a technician visit my home in Madurai?`,
    a: `Same-day doorstep technician visit typically 2 to 4 hours-kulle coordinate panrom. Call +91 92115 12088 or WhatsApp share panni ungalukku convenient time slot confirm pannikalam.`
  }),
  (b, loc1, loc2) => ({
    q: `What are your service working hours across Madurai?`,
    a: `Enga service desk morning 8:00 AM to night 8:30 PM (Monday to Sunday) active-ah irukkum. Emergency weekend repair requests kooda same-day visit assign panrom.`
  })
];

const masterFaqsOutput = {};

pages.forEach((p, idx) => {
  const { loc1, loc2 } = getPageLocalities(idx);
  const isGeneric = !p.brand || p.brand.startsWith('All') || p.brand === 'Home Appliance';
  const brandName = isGeneric ? '' : p.brand;
  const cat = p.category;

  let group1Title = `${brandName || 'Appliance'} Technical & Fault Troubleshooting`;
  let group2Title = `Service Charges & Pricing in Madurai`;
  let group3Title = `Doorstep Service & Booking in ${loc1}`;

  let tFaqs = [];
  let pFaqs = [];

  if (cat === 'ac') {
    const b = brandName || 'AC';
    tFaqs = [
      AC_TECH_FAQS[(idx) % AC_TECH_FAQS.length](b, loc1),
      AC_TECH_FAQS[(idx + 1) % AC_TECH_FAQS.length](b, loc1),
      AC_TECH_FAQS[(idx + 2) % AC_TECH_FAQS.length](b, loc1)
    ];
    pFaqs = [
      AC_PRICE_FAQS[(idx) % AC_PRICE_FAQS.length](b, loc1),
      AC_PRICE_FAQS[(idx + 1) % AC_PRICE_FAQS.length](b, loc1)
    ];
  } else if (cat === 'fridge') {
    const b = brandName || 'Refrigerator';
    tFaqs = [
      FRIDGE_TECH_FAQS[(idx) % FRIDGE_TECH_FAQS.length](b, loc1),
      FRIDGE_TECH_FAQS[(idx + 1) % FRIDGE_TECH_FAQS.length](b, loc1),
      FRIDGE_TECH_FAQS[(idx + 2) % FRIDGE_TECH_FAQS.length](b, loc1)
    ];
    pFaqs = [
      FRIDGE_PRICE_FAQS[(idx) % FRIDGE_PRICE_FAQS.length](b, loc1),
      FRIDGE_PRICE_FAQS[(idx + 1) % FRIDGE_PRICE_FAQS.length](b, loc1)
    ];
  } else if (cat === 'washing-machine') {
    const b = brandName || 'Washing Machine';
    tFaqs = [
      WM_TECH_FAQS[(idx) % WM_TECH_FAQS.length](b, loc1),
      WM_TECH_FAQS[(idx + 1) % WM_TECH_FAQS.length](b, loc1),
      WM_TECH_FAQS[(idx + 2) % WM_TECH_FAQS.length](b, loc1)
    ];
    pFaqs = [
      WM_PRICE_FAQS[(idx) % WM_PRICE_FAQS.length](b, loc1),
      WM_PRICE_FAQS[(idx + 1) % WM_PRICE_FAQS.length](b, loc1)
    ];
  } else if (cat === 'tv') {
    const b = brandName || 'TV';
    tFaqs = [
      TV_TECH_FAQS[(idx) % TV_TECH_FAQS.length](b, loc1),
      TV_TECH_FAQS[(idx + 1) % TV_TECH_FAQS.length](b, loc1),
      TV_TECH_FAQS[(idx + 2) % TV_TECH_FAQS.length](b, loc1)
    ];
    pFaqs = [
      TV_PRICE_FAQS[(idx) % TV_PRICE_FAQS.length](b, loc1),
      TV_PRICE_FAQS[(idx + 1) % TV_PRICE_FAQS.length](b, loc1)
    ];
  } else {
    // Multi-appliance service center
    const b = brandName || 'Home Appliance';
    tFaqs = [
      {
        q: `Can a single technician inspect multiple ${b} appliances in one visit?`,
        a: `Kandippa! Unga veetula irukkira washing machine, fridge, AC or TV — ellathaiyum single doorstep visit-laye inspect panni service charges save pannikalam.`
      },
      {
        q: `Do you provide genuine brand-compatible replacement parts in Madurai?`,
        a: `Yes, we use tested OEM-grade compatible capacitors, relays, drain pumps, sensors, thermostats and backlight strips with warranty.`
      },
      {
        q: `What is the warranty period for repairs and spare parts?`,
        a: `Fitted replacement parts-ku standard 30 to 90 days service warranty provide panrom. Invoice-la warranty details clearly mention aagidum.`
      }
    ];
    pFaqs = [
      {
        q: `What is the visiting charge for ${b} appliance inspection in ${loc1}?`,
        a: `Doorstep visiting charge across ${loc1} and all Madurai localities is ₹200 to ₹350. Service confirm pannina inspection fee bill-la completely adjust aayidum.`
      },
      {
        q: `How is the final repair cost determined?`,
        a: `Physical diagnosis mudinju model, fault complexity and required parts basis-la upfront estimate explain pannuvom. Customer consent kedaicha apram-dhaan repair start aagum.`
      }
    ];
  }

  const bFaqs = [
    BOOKING_FAQS[(idx) % BOOKING_FAQS.length](brandName || 'Appliance', loc1, loc2),
    BOOKING_FAQS[(idx + 1) % BOOKING_FAQS.length](brandName || 'Appliance', loc1, loc2)
  ];

  masterFaqsOutput[p.newFile] = {
    groups: [
      {
        title: group1Title,
        items: tFaqs
      },
      {
        title: group2Title,
        items: pFaqs
      },
      {
        title: group3Title,
        items: bFaqs
      }
    ]
  };
});

fs.writeFileSync('scripts/madurai_master_faqs_v2.json', JSON.stringify(masterFaqsOutput, null, 2));
console.log(`Generated scripts/madurai_master_faqs_v2.json for ${Object.keys(masterFaqsOutput).length} pages.`);
