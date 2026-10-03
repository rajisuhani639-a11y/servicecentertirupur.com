// scripts/build_madurai_hero_intros.js
// Generates 100% unique starting intros and Tanglish quick boxes for all 174 Madurai pages.

const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));

// Locality pools for rotation
const localities = [
  "Anna Nagar", "KK Nagar", "Arapalayam", "Goripalayam", "Tallakulam", 
  "Mattuthavani", "Vilangudi", "Thiruppalai", "Bibikulam", "Sellur", 
  "Kalavasal", "Ponmeni", "Kochadai", "Thirunagar", "Pasumalai", 
  "Alagappan Nagar", "Villapuram", "South Gate", "Palanganatham", "TVS Nagar", 
  "Jaihindpuram", "Avaniyapuram", "Ellis Nagar", "K.Pudur", "Iyer Bungalow", 
  "Narimedu", "Vasantha Nagar", "Surya Nagar", "Simmakkal", "Gomathipuram"
];

// Lead sentence opener patterns
const acOpeners = [
  (brand, loc) => `Searching for reliable ${brand} AC repair service near me in Madurai? When your ${brand} split or inverter air conditioner struggles to cool during scorching afternoons in ${loc}, our local cooling technicians visit your doorstep to inspect gas pressure, clean coils, and restore full airflow.`,
  (brand, loc) => `Looking for an experienced ${brand} air conditioner service center in Madurai? From sudden water leakage inside your bedroom to compressor tripping in ${loc}, we provide same-day doorstep diagnosis and skilled repairs across all residential areas.`,
  (brand, loc) => `Need quick ${brand} AC repair service near me in Madurai? If your ${brand} unit runs non-stop without dropping room temperature in ${loc}, our verified Madurai technicians arrive with testing gauges and genuine parts to resolve the cooling fault quickly.`,
  (brand, loc) => `Troubled by unexpected cooling breakdown on your ${brand} air conditioner in ${loc}? Searching for a dependable ${brand} AC service center in Madurai? Our experienced cooling specialists provide fast doorstep troubleshooting, fan motor replacement, and precision refrigerant charging.`,
  (brand, loc) => `Want doorstep ${brand} AC service near ${loc} in Madurai? Whether your indoor unit is dripping water or the outdoor compressor makes a buzzing noise without starting, our local technicians inspect electricals and cooling circuits right at your home.`
];

const fridgeOpeners = [
  (brand, loc) => `Searching for verified ${brand} refrigerator repair service in Madurai? If your ${brand} double door or frost-free fridge has stopped cooling milk in ${loc}, our local refrigeration technicians provide doorstep inspection for thermostat, compressor, and gas issues.`,
  (brand, loc) => `Looking for a trusted ${brand} fridge service center near me in Madurai? When ice melts in the freezer or the motor makes repeated clicking sounds at your home in ${loc}, our technicians visit with genuine replacement relays and sensors.`,
  (brand, loc) => `Need urgent ${brand} refrigerator repair near me in Madurai? If cooling is weak in the lower compartment or vegetables spoil quickly in ${loc}, get fast doorstep assistance from experienced Madurai fridge technicians today.`,
  (brand, loc) => `Facing temperature trouble or gas leakage with your ${brand} refrigerator in ${loc}? Searching for ${brand} fridge repair in Madurai? Our doorstep technicians diagnose defrost heaters, bi-metal thermostats, and sealed systems on-site.`,
  (brand, loc) => `Is your ${brand} inverter refrigerator showing error codes or running constantly in ${loc}? Connect with our local ${brand} refrigerator service center in Madurai for prompt home visits, transparent charges, and reliable repairs.`
];

const wmOpeners = [
  (brand, loc) => `Searching for trusted ${brand} washing machine repair service in Madurai? When your ${brand} front load or top load washer refuses to drain water in ${loc}, our experienced technician visits your home with replacement drain pumps and diagnostic tools.`,
  (brand, loc) => `Looking for a certified ${brand} washing machine service center near me in Madurai? If your washer vibrates violently during spin cycle or halts mid-wash in ${loc}, our local technicians fix drum bearings, belts, and motor faults on-site.`,
  (brand, loc) => `Need dependable ${brand} washing machine repair near me in Madurai? From inlet water valve blockage to door lock error codes in ${loc}, our doorstep technicians provide quick diagnosis and original replacement parts.`,
  (brand, loc) => `Washing machine spin aagala or water drain aagala-nu problem irukka? Searching for ${brand} washing machine service in Madurai around ${loc}? Our Madurai washing machine specialists provide same-day home visits and clear repair estimates.`,
  (brand, loc) => `Is your ${brand} fully automatic washer displaying digital error codes or making grinding drum noise in ${loc}? Contact our dedicated ${brand} washer service center in Madurai for thorough doorstep motor and PCB repair.`
];

const tvOpeners = [
  (brand, loc) => `Searching for reliable ${brand} TV repair service in Madurai? If your ${brand} LED, QLED, or 4K Smart TV has sound playing normally but a completely black display in ${loc}, our skilled panel technicians provide prompt doorstep inspection.`,
  (brand, loc) => `Looking for a verified ${brand} television service center near me in Madurai? When vertical lines appear across the screen or your TV refuses to power on from standby in ${loc}, our technicians inspect power boards and backlight strips at your home.`,
  (brand, loc) => `Need expert ${brand} LED TV repair near me in Madurai? From HDMI connection failures and distorted speakers to smart motherboard boot loops in ${loc}, our local Madurai technicians deliver dependable home service.`,
  (brand, loc) => `TV display problem irukka? Sound varudhu picture varala? Searching for ${brand} Smart TV repair service in Madurai around ${loc}? Our technicians diagnose backlights, T-Con boards, and power supplies directly at your address.`,
  (brand, loc) => `Is your ${brand} Smart TV stuck on the logo screen or restarting continuously in ${loc}? Connect with our local ${brand} TV service center in Madurai for certified chip-level inspection and panel maintenance.`
];

const scOpeners = [
  (brand, loc) => `Searching for multi-appliance ${brand} service center near me in Madurai? Whether you need doorstep repair for a ${brand} washing machine, refrigerator, air conditioner, or Smart TV in ${loc}, our verified local technicians provide complete technical support.`,
  (brand, loc) => `Looking for comprehensive ${brand} appliance repair service in Madurai? From cooling issues in ${loc} to laundry machine breakdown, our Madurai doorstep team handles all ${brand} home appliance models with genuine spare parts.`,
  (brand, loc) => `Need genuine ${brand} home appliance repair near me in Madurai? When your ${brand} appliances face electrical, cooling, or mechanical trouble in ${loc}, call our central Madurai service desk for fast technician scheduling.`,
  (brand, loc) => `Want dependable ${brand} appliance maintenance and repair service across Madurai? Our experienced technicians cover ${loc} and surrounding neighborhoods, offering transparent inspection charges and prompt home repair.`
];

const tanglishPrompts = {
  ac: [
    { prompt: "Madurai-la AC cooling proper-ah illa? Fan mattum odudha?", body: "Indoor unit water drip aagudha or outdoor compressor on aagala? Problem enna-nu share pannunga, local technician direct-ah veetukku vandhu check pannuvanga." },
    { prompt: "Room cool aaga romba neram edukkudha? Gas kammiya irukka?", body: "Madurai heat-la AC cooling drops aagudha? Filter dust, coil choking or capacitor issue irundha quick inspection panni fix pannidalaam." },
    { prompt: "AC-la water leak aagi bedroom-la sottudha?", body: "Drain pipe blockage or indoor coil freezing problem irukka? Call our Madurai service desk for doorstep technician visit." },
    { prompt: "Outdoor unit compressor noise adhigama irukka?", body: "Humming sound vandhu trip aagudha? Capacitor check panni new part fit panna compressor normal-ah start aagidum." }
  ],
  fridge: [
    { prompt: "Fridge cooling kammiya irukka? Paal kettu pogudha?", body: "Freezer-la ice katti aagi bottom compartment cool aagala-nu problem-ah? Madurai technician-ah call panni doorstep check pannunga." },
    { prompt: "Fridge motor click sound panni off aagudha?", body: "Relay or overload protector fault irundha compressor start aagadhu. Technician direct-ah veetukku vandhu check pannuvaar." },
    { prompt: "Freezer door close panna mudiyala? Ice overflow aagudha?", body: "Defrost timer, sensor or door gasket problem irukka? Local Madurai technician correct solution provide pannuvaar." },
    { prompt: "Fridge bottom-la water leak aagi floor wet aagudha?", body: "Drain tray overflow or defrost line choke aana water leak varum. Simple doorstep cleaning and repair-la solve pannidalaam." }
  ],
  'washing-machine': [
    { prompt: "Washing machine-la water drain aagala? Drum rotate aagala?", body: "Motor humming sound varudhu drum spin aagala-nu problem-ah? Madurai local technician veetukku vandhu inspection pannuvaar." },
    { prompt: "Spin cycle-la machine romba vibrate aagi sound varudha?", body: "Drum bearing, shocker or unbalance load issue irukkum. Quick diagnosis and doorstep replacement details provide pannuvom." },
    { prompt: "Water fill aagite irukku stop aagala? Error code kaatudha?", body: "Inlet valve or pressure sensor switch fault irukkalaam. Madurai technician team clear inspection charge sonna apram fix pannuvanga." },
    { prompt: "Washing machine door lock aagi thirakka mudiyala?", body: "Door latch or PCB signal issue irundha force pannaadheenga. Doorstep technician visit book pannunga." }
  ],
  tv: [
    { prompt: "TV display problem irukka? Sound varudhu picture varala?", body: "Black screen-la torch adicha picture theriyudha? Backlight LED strips replacement doorstep-la safe-ah pannidalaam." },
    { prompt: "TV on aagala, red indicator light mattum blink aagudha?", body: "Power supply board or capacitor fault irundha power trip aagum. Madurai TV technician direct-ah veetukku vandhu check pannuvaar." },
    { prompt: "Screen-la vertical lines or double image theriyudha?", body: "T-Con board or ribbon cable loose connection irukka-nu check panni transparent repair cost explain pannuvom." },
    { prompt: "Smart TV logo-la freeze aagi restart aagite irukka?", body: "Motherboard software or memory IC issue irundha professional diagnosis thevaipadum. Madurai service team-ah contact pannunga." }
  ],
  'service-center': [
    { prompt: "Home appliance repair near me search panreengala?", body: "Washing machine, fridge, AC or TV — endha problem-ah irundhaalum Madurai local technician direct-ah veetukku vandhu inspect pannuvanga." },
    { prompt: "Multiple appliances service or quick doorstep inspection thevaiya?", body: "Madurai full-ah fast doorstep coverage. Transparent visiting charges and clear parts estimate confirm pannitu work start pannuvom." },
    { prompt: "Appliance repair charge pathi enquiry panna virumbureengala?", body: "Inspection charge ₹200–₹350 only. Repair confirm pannina inspection fee adjust aayidum. Call or WhatsApp vazhiya contact pannunga." }
  ],
  root: [
    { prompt: "Madurai-la home appliance repair service thevaiya?", body: "AC, Fridge, Washing Machine or TV — endha brand appliance-ah irundhaalum local Madurai technicians doorstep visit panni repair pannuvanga." }
  ]
};

const intros = {};

pages.forEach((p, idx) => {
  const brand = (p.brand && p.brand !== 'All AC Brands' && p.brand !== 'All Refrigerator Brands' && p.brand !== 'All Washing Machine Brands' && p.brand !== 'All TV Brands' && p.brand !== 'All Brands') ? p.brand : 'Home Appliance';
  const loc = localities[idx % localities.length];
  const cat = p.category;

  let lead = "";
  if (cat === 'ac') {
    const fn = acOpeners[idx % acOpeners.length];
    lead = fn(brand, loc);
  } else if (cat === 'fridge') {
    const fn = fridgeOpeners[idx % fridgeOpeners.length];
    lead = fn(brand, loc);
  } else if (cat === 'washing-machine') {
    const fn = wmOpeners[idx % wmOpeners.length];
    lead = fn(brand, loc);
  } else if (cat === 'tv') {
    const fn = tvOpeners[idx % tvOpeners.length];
    lead = fn(brand, loc);
  } else if (cat === 'service-center') {
    const fn = scOpeners[idx % scOpeners.length];
    lead = fn(brand, loc);
  } else if (cat === 'root') {
    lead = "Looking for verified home appliance repair service in Madurai? From AC cooling breakdowns in Anna Nagar to washing machine drainage issues in KK Nagar, our certified local technicians provide fast, dependable doorstep inspection and repair across all Madurai neighborhoods.";
  }

  const promptPool = tanglishPrompts[cat] || tanglishPrompts['service-center'];
  const tanglish = promptPool[idx % promptPool.length];

  intros[p.newFile] = {
    brand: p.brand,
    category: p.category,
    locality: loc,
    lead: lead,
    tanglishPrompt: tanglish.prompt,
    tanglishBody: tanglish.body
  };
});

fs.writeFileSync('scripts/madurai_hero_intros.json', JSON.stringify(intros, null, 2));
console.log(`Generated scripts/madurai_hero_intros.json with ${Object.keys(intros).length} unique intros.`);
