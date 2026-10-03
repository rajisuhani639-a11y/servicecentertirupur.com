// scripts/build_madurai_hero_intros_v2.js
// Generates 100% unique, highly-differentiated starting sections & intros for all 174 Madurai pages.
// Adheres strictly to:
// - 80–90% natural Tamil-English / Tanglish style
// - 10–20% simple English
// - Varied sentence constructions and opening phrases
// - Brand + Appliance + Service/Repair + Madurai keywords
// - Specific Madurai locality integration
// - Unique intro section body paragraphs per page

const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));
const localitiesData = require('./madurai_localities.js');

const allLocs = [
  ...localitiesData.east,
  ...localitiesData.west,
  ...localitiesData.north,
  ...localitiesData.south
];

function getLocality(idx) {
  return allLocs[(idx * 7 + 13) % allLocs.length].name;
}

// -----------------------------------------------------------------------------
// AC INTRO RECIPES
// -----------------------------------------------------------------------------
const acRecipes = [
  (b, loc) => ({
    lead: `Madurai-la ${b} AC cooling proper-ah illa? Room full time AC run panniyum cool aagala-na, service check pannradhu romba avasiyam. ${loc} in Madurai-la ${b} AC repair service near me search panreengala? Enga local cooling technicians direct-ah veetukku vandhu gas pressure, filters and coil condition inspect panni clear-ah fix pannuvanga.`,
    prompt: `Madurai-la ${b} AC cooling kammiya irukka? Fan mattum odudha?`,
    body: `Indoor unit-la water drop aagudha or outdoor compressor on aagama humming sound varudha? Problem enna-nu share pannunga, local technician unga area-ku direct-ah vandhu check pannuvaar.`,
    aboutLead: `Madurai veyil nerathula ${b} split AC run aagiyum room cool aagala-na, internal coil choking or refrigerant gas leakage irukkalaam. ${loc} surroundings-la ${b} AC service center thedureenga-na, local technician doorstep inspection deliver panrom.`,
    aboutP2: `Indoor cooling fins-la dry dust full-ah accumulate aana airflow block aagi compressor trip aagum. Technician manifold gauge vechu suction pressure test pannitu genuine capacitor or copper flare leak fix execute pannuvaar.`,
    aboutP3: `Honest doorstep visit across ${loc} and surrounding Madurai streets. Inspection mudinju parts price approve panna pinbu dhaan work start pannuvom.`
  }),
  (b, loc) => ({
    lead: `Searching for ${b} AC service center near me in Madurai around ${loc}? AC on panni 15 minutes aanaalum chill air varala, fan kaathu mattum dhaan varudha? Madurai summer afternoon-la compressor stress aagi overload switch trip aagirukkalaam. Experienced technician unga veetukke vandhu complete cooling check mudichi tharuvanga.`,
    prompt: `${b} AC compressor on aagama outdoor unit trip aagudha?`,
    body: `Dual run capacitor weak aayirundha compressor kick-start aagadhu. Spot-laye digital meter vechu test panni heavy-duty capacitor fit pannidalaam.`,
    aboutLead: `${loc} customer premises-la ${b} inverter AC unexpected-ah cooling stop aana, quick doorstep technical support kedaikkum. Air conditioning performance drop aana Madurai heat-la stay panradhu romba kashtam.`,
    aboutP2: `Outdoor unit direct sunlight and roadside dust-la heat aagumbodhu thermal protection activate aagum. Technician condenser coil high-pressure wash panni electrical connections inspect pannuvaar.`,
    aboutP3: `Same-day visit in 2 to 4 hours across ${loc} in Madurai. Transparent pricing and clear warranty support guaranteed.`
  }),
  (b, loc) => ({
    lead: `Need help with your ${b} air conditioner in ${loc}? Sudden-ah indoor unit-la irundhu water drip aagi bedroom wall and floor wet aagudha? Madurai-la ${b} AC repair service thedureenga-na, enga skilled cooling specialists drain hose clog, blower dust and refrigerant ice freezing inspect panni rectify panranga.`,
    prompt: `${b} AC indoor unit water leaking issue irukka?`,
    body: `Drain tray algae or condensate pipe blockage dhaan water dripping-ku main reason. Chemical wash and pipe flush panni on-site leak stop pannuvom.`,
    aboutLead: `${b} split AC-la indoor water leak aana wallpaper, wall paint and bedroom furnishings spoil aaga chance irukku. ${loc} area-la certified AC repair technicians fast doorstep service tharanga.`,
    aboutP2: `Indoor evaporator coil freeze aagi melt aagum bothu drain trough overflow aagum. Pinhole gas leak or filter choking check panni vacuum pressure set pannuvom.`,
    aboutP3: `Affordable inspection fee ₹200–₹350, service confirm panna final bill-la deduct aagidum. WhatsApp booking open across Madurai.`
  }),
  (b, loc) => ({
    lead: `Madurai-la ${b} inverter AC on pannina error code blink aagitu machine off aagudha? Searching for ${b} AC repair in Madurai near ${loc}? Inverter power module board or ambient sensor fault irundha normal cooling cycle start aagadhu. Local PCB technician spot-la inspect panni accurate fix execute pannuvaar.`,
    prompt: `${b} AC display-la error code vanthu outdoor unit start aagala?`,
    body: `Communication cable or motherboard DC voltage rail-la issue irundha unit error trigger pannum. On-site board repair support kedaikkum.`,
    aboutLead: `${b} smart inverter models Madurai voltage fluctuations-la occasional-ah board stress aaga vaaippu irukku. ${loc} residents-ku dedicated diagnostic testing doorstep-laye provide panrom.`,
    aboutP2: `Technician multi-meter use panni IPM module, reactor coil and sensor resistance measure pannuvaar. Costly whole PCB replacement illama component-level repair identify panrom.`,
    aboutP3: `Inspection mudinju clear estimation explain pannitu unga consent oda work nadakkum in Madurai. No surprise billing.`
  }),
  (b, loc) => ({
    lead: `If your ${b} AC in ${loc} is making loud vibrating noise from the indoor blower or outdoor fan, bearing wear-out or blade imbalance irukkalaam. Madurai-la ${b} AC repair near me search panreengala? Quiet, smooth cooling restore panna local technicians spot inspection schedule panranga.`,
    prompt: `Indoor blower rumbling sound or outdoor fan noise adhigama irukka?`,
    body: `Blower wheel bush wear out aana rotation noise adhigam aagum. Bush lubrication or genuine replacement panni noise arrest pannidalaam.`,
    aboutLead: `${loc} homes-la bedroom AC silent-ah run aaganum. ${b} air conditioner unusual vibration kudutha motor mount or cross-flow fan alignment inspect panna vendiyadhu.`,
    aboutP2: `Outdoor condenser fan motor bearing dry aana continuous grinding sound produce pannum. Technician motor shaft test panni original spec spare replace pannuvaar.`,
    aboutP3: `Prompt service coverage throughout ${loc} and adjacent Madurai streets. Call anytime between 8 AM and 8:30 PM.`
  }),
  (b, loc) => ({
    lead: `Home-la ${b} AC run aagi electricity bill shock kudukkudha? Long time seasonal jet service pannama vitta power consumption 20–30% increase aagidum. ${loc} side-la professional ${b} AC cleaning service in Madurai thedureengala? Deep foam and high-pressure jet wash panni cooling efficiency maximize panrom.`,
    prompt: `AC airflow romba weak-ah varudha? Coil full-ah dust adaichurukka?`,
    body: `Waterproof jacket cover maati bedroom wall safe-ah vechu indoor fins and outdoor condenser-ah pressure wash panni clean panrom.`,
    aboutLead: `Madurai-la dusty road traffic and summer breeze karanamaga ${b} AC cooling coils 4 to 6 months-kulle dirt caked aayidum. ${loc} customers-ku complete pre-season jet wash arrange panrom.`,
    aboutP2: `Deep cleaning mudinja udane room chilling speed double aagum, compressor load cut aagi monthly electricity charges noticeable-ah reduce aagum.`,
    aboutP3: `Safe, mess-free service by experienced technicians across Madurai. Immediate booking confirmation via call or WhatsApp.`
  }),
  (b, loc) => ({
    lead: `Looking for reliable ${b} AC gas filling service in Madurai around ${loc}? Indoor copper pipe-la white frost ice katti irukka, room-la cooling drop aagiducha? Low refrigerant pressure compressor life-ah affect pannum. Technician nitrogen pressure test panni leak arrest pannitu fresh R32 / R410A gas charge pannuvaar.`,
    prompt: `AC cooling complete-ah stop aagi pipe-la ice form aagudha?`,
    body: `Flare nut micro leakage dhaan main reason. Leak brazing panni electronic vacuum pump potu precise refrigerant charge panrom.`,
    aboutLead: `${loc} residences-la ${b} split AC gas leakage solve panna certified cooling experts available. Refrigerant short aana compressor overheat aagi trip aagum.`,
    aboutP2: `Our technicians flare connection, indoor bend pipes and service valve-la soap bubble and electronic leak detector vechu test execute panranga. Complete sealed system restoration.`,
    aboutP3: `Fair, transparent gas filling rates based on model and tonnage. Genuine refrigerant cylinder use panrom across Madurai.`
  }),
  (b, loc) => ({
    lead: `Your ${b} split air conditioner remote command-ku respond panna maatengudha in ${loc}? Display board light burn aagala or power switch on aagala-na, internal fuse or transformer fault irukkalaam. Madurai-la ${b} AC service center near me contact panni doorstep-laye electrical test pannidalaam.`,
    prompt: `Remote on pannina beep sound kekkala, display light varala?`,
    body: `Indoor display PCB receiver sensor or power supply circuit fail aayirundha remote signal catch aagadhu. Spot-la sensor replace panrom.`,
    aboutLead: `${b} AC power on issue Madurai-la high humidity or insect entry karanamaga indoor PCB track short aagumbodhu occur aagum. ${loc} customers-ku on-site troubleshooting support tharom.`,
    aboutP2: `Technician terminal block voltage, PCB transformer and sensor eye board check panni display functioning restore pannuvaar.`,
    aboutP3: `Fast 2-hour response across ${loc} in Madurai. Original compatible receiver spares carry panrom.`
  }),
  (b, loc) => ({
    lead: `Having trouble with ${b} AC tripping MCB switch whenever you turn on cooling mode in ${loc}? Searching for experienced ${b} AC repair in Madurai? Compressor winding short or fan motor coil grounding irundha breaker trip aagum. Professional electrical diagnosis execute panni safe repair mudikrom.`,
    prompt: `AC switch on panna main circuit breaker trip aagudha?`,
    body: `Compressor insulation breakdown or outdoor capacitor short circuit dhaan tripping-ku cause. Megger testing panni fault identify pannuvom.`,
    aboutLead: `${loc} homes-la electrical safety priority. ${b} air conditioner tripping issue-ah force panna koodadhu, wiring melt aaga vaaippu irukku.`,
    aboutP2: `Doorstep technician digital insulation tester vechu compressor terminal-to-ground resistance verify pannuvaar. Root-cause repair panni safety ensure panrom.`,
    aboutP3: `Transparent diagnostic advice. Honest pricing before executing any replacement parts in Madurai.`
  }),
  (b, loc) => ({
    lead: `For customers around ${loc}, ${b} AC cooling slow-va start aagi room temperature chill aagave illaya? Need dependable ${b} AC repair service in Madurai? Outdoor unit condenser heat dissipation properly nadakkala-na cooling sharp-ah drop aagidum. Local doorstep visit schedule panni check pannunga.`,
    prompt: `AC 1 hour run aanaalum room temperature change aagala?`,
    body: `Capacitor weak or capillary expansion choke irundha cooling cycle slow aagidum. System balance check panni chillness restore panrom.`,
    aboutLead: `Madurai scorching daytime heat-la ${b} AC performance sustain aaganum na proper condenser heat transfer mukkiyam. ${loc} residential areas-ku fast technician visit tharom.`,
    aboutP2: `Condenser fin comb straightening and fan speed verification panni heat rejection improve panrom. Compressor load normalise aagum.`,
    aboutP3: `Itemized billing and affordable inspection charges across all Madurai pin codes.`
  })
];

function getAcIntro(b, loc, idx) {
  const base = acRecipes[idx % acRecipes.length](b, loc);
  const variations = [
    `Madurai-la ${b} AC service center near me search panreengala? ${loc} customer-ku doorstep cooling repair support available.`,
    `${loc} side-la ${b} air conditioner repair service in Madurai thedureengala? Fast same-day technician visit coordinate panrom.`,
    `Need certified ${b} AC repair in Madurai around ${loc}? On-site inspection panni quick resolution tharom.`,
    `${loc} residences-la ${b} split and inverter AC-ku professional Madurai doorstep technician assistance ready.`
  ];
  return {
    ...base,
    lead: `${base.lead} ${variations[idx % variations.length]}`
  };
}

// -----------------------------------------------------------------------------
// REFRIGERATOR INTRO RECIPES
// -----------------------------------------------------------------------------
const fridgeRecipes = [
  (b, loc) => ({
    lead: `Madurai-la ${b} fridge cooling proper-ah illa? Freezer-la ice katti aagi bottom compartment-la cooling drop aayiducha? ${loc} side-la ${b} refrigerator repair service near me search panreengala? Local doorstep technicians quick-ah visit panni defrost timer, thermostat and relay inspect pannuvanga.`,
    prompt: `Fridge bottom-la cooling illa, milk and vegetables spoil aagudha?`,
    body: `Frost-free air duct choke aayirundha freezer mattum chill-ah irukkum, bottom section warm-ah irukkum. Doorstep inspection-la solve pannidalaam.`,
    aboutLead: `${b} double door refrigerator-la freezer cool aagudhu aana lower shelves warm-ah irukku-nu ${loc} customers frequent-ah report panranga. Madurai hot weather-la food spoilage aagama immediate doorstep fix tharom.`,
    aboutP2: `Defrost heater, bimetal thermostat or thermal fuse cut aana evaporator coil-la thick ice accumulate aagi duct block aagidum. Technician defrost sequence test panni faulty sensor replace pannuvaar.`,
    aboutP3: `Heavy fridge-ah thookitu workshop pora avasiyam illa — 95% repairs direct home-laye mudikrom in Madurai. Upfront transparent estimate.`
  }),
  (b, loc) => ({
    lead: `Home-la ${b} refrigerator compressor humming ninnu pocha or clicking noise vandhu off aagudha in ${loc}? Need reliable ${b} fridge service center in Madurai? Starter relay or overload protector failure irundha on-site replace panni cooling restore pannidalaam.`,
    prompt: `Fridge compressor 2 minutes-ku oru thadava click sound pannudha?`,
    body: `PTC starter relay crack aayirundha compressor start aagave aagadhu. Spot-laye genuine relay maathi run panna veppom.`,
    aboutLead: `${loc} area-la sudden power cuts or voltage dips karanamaga ${b} fridge starter relay stress aagum. Local technician digital meter vechu compressor terminal coil health check pannuvaar.`,
    aboutP2: `Overload protector and starting capacitor test panni genuine OEM parts fit panrom. Compressor smooth humming resume aana cooling 15 minutes-kulle start aagidum.`,
    aboutP3: `Clear billing and fair visit charge ₹200–₹350 across all Madurai localities. Call +91 92115 12088.`
  }),
  (b, loc) => ({
    lead: `Fridge cooling kammiya irukka? Ice overflow aagi freezer door close panna mudiyala-nu trouble face panreengala in ${loc}? Madurai-la ${loc} side ${b} refrigerator repair near me thedureenga-na, enga technician team direct-ah veetukku vandhu defrost circuit check pannuvanga.`,
    prompt: `Freezer door gasket rubber loose-ah aayiducha?`,
    body: `Door magnetic bead seal loose aana external moisture ulla poi heavy ice build-up create pannum. New airtight gasket fit panna problem theerum.`,
    aboutLead: `${b} single door and double door models-la door rubber bead seal warp aana external hot humid Madurai air inside pull aagum. ${loc} homes-ku custom gasket replacement execute panrom.`,
    aboutP2: `Airtight magnetic seal fit pannina power consumption save aagum, ice jamming ninnu regular cooling restore aagum.`,
    aboutP3: `Same-day technician dispatch across ${loc} and nearby Madurai neighborhoods.`
  }),
  (b, loc) => ({
    lead: `Looking for certified ${b} fridge service center near me in Madurai? Fridge bottom-la water leak aagi floor full-ah wet aagudha in ${loc}? Defrost drain hole choke or drain tray overflow-nu check panni clean pannina leak ninnu pogum. Doorstep technician available today in Madurai.`,
    prompt: `Fridge shelves mela water drip aagi vegetables wet aagudha?`,
    body: `Internal defrost drain tube block aayirundha condensate water shelves vazhiya leak aagum. Pressure clearing panni drain line clear pannuvom.`,
    aboutLead: `${b} frost-free fridges-la drain hole food residue slime-la block aana interior condensation pooling create aagum. ${loc} customers-ku simple doorstep flush-la solution tharom.`,
    aboutP2: `Rear compressor water evaporation tray crack or drain pipe misplacement inspect panni leak arrest execute panrom.`,
    aboutP3: `Quick WhatsApp booking with live technician tracking across Madurai.`
  }),
  (b, loc) => ({
    lead: `If your ${b} refrigerator has stopped making ice in ${loc}, capillary tube blockage or refrigerant low pressure irukkalaam. Madurai-la ${b} fridge gas filling and repair service search panreengala? On-site sealed system charging and leak brazing execute panrom.`,
    prompt: `Freezer box-la ice form aagala, mild warm-ah irukka?`,
    body: `Sealed system-la gas leak or oil choke irundha cooling nil aagidum. Vacuum pump and pure R600a charging panni check pannuvom.`,
    aboutLead: `Madurai climate-la direct cool ${b} fridges freezer box pinhole leak or capillary choke vandha cooling completely fail aagum. ${loc} area-la certified gas charging service deliver panrom.`,
    aboutP2: `Nitrogen pressure hold test panni micro leaks brazing sealing pannitu, copper drier maathi original factory gram weight-la gas charge panrom.`,
    aboutP3: `Parts warranty and transparent breakdown quotation before work starts in Madurai.`
  })
];

function getFridgeIntro(b, loc, idx) {
  const base = fridgeRecipes[idx % fridgeRecipes.length](b, loc);
  const variations = [
    `Searching for ${b} refrigerator repair service in Madurai? ${loc} doorstep technician available today.`,
    `Madurai-la ${b} fridge service center thedureengala? Fast 2 to 4 hours home visit in ${loc}.`,
    `Need reliable ${b} fridge repair near me around ${loc} in Madurai? Transparent charges and genuine parts guaranteed.`,
    `${loc} residential addresses-ku certified ${b} refrigerator technician direct visit provide panrom in Madurai.`
  ];
  return {
    ...base,
    lead: `${base.lead} ${variations[idx % variations.length]}`
  };
}

// -----------------------------------------------------------------------------
// WASHING MACHINE INTRO RECIPES
// -----------------------------------------------------------------------------
const wmRecipes = [
  (b, loc) => ({
    lead: `Madurai-la ${b} washing machine water drain aagala? Wash cycle mudinjum tub full-ah water ninnu error code display aagudha? ${loc} side-la ${b} washing machine service center near me search panreengala? Local doorstep technicians quick-ah vandhu drain pump, filter and hose inspect pannuvanga.`,
    prompt: `Washing machine-la water drain aagala? Error code display aagudha?`,
    body: `Drain pump impeller-la coins or safety pins jam aayirundha water veliya pogadhu. Doorstep clearing panni cycle test pannidalaam.`,
    aboutLead: `${b} fully automatic front load and top load machines wash mudinjum water retain aana wash clothes take out panna mudiyadhu. ${loc} customers-ku prompt drain system overhaul tharom.`,
    aboutP2: `Drain valve motor, magnetic pump impeller and coin filter lint trap check panni blockage clear panrom. Damaged pump spot-laye replace aagum.`,
    aboutP3: `Inspection charge ₹200–₹350 only, final bill-la completely adjust aayidum. Doorstep service across ${loc} in Madurai.`
  }),
  (b, loc) => ({
    lead: `Home-la ${b} washing machine spin mode-la romba sound panni heavy vibration kudukkudha in ${loc}? Need ${b} washer repair service near me in Madurai? Drum bearings or suspension damper rods worn out aayirundha spin cycle-la machine thumping noise pannum. On-site inspection available today in Madurai.`,
    prompt: `Spin cycle-la drum violent-ah aadi loud noise varudha?`,
    body: `Tub bearings or spider arm corrode aayirundha drum play adhigama aagidum. Heavy-duty bearing replacement panni noise eliminate pannuvom.`,
    aboutLead: `Madurai groundwater mineral hardness karanamaga ${b} washing machine drum water seal dry aagi bearing rusting create aagum. ${loc} residences-la bearing and suspension repair deliver panrom.`,
    aboutP2: `Technician front load outer tub split panni dual bearings and seal maathuvar. Damper shock absorbers check panni drum stability restore panrom.`,
    aboutP3: `Quiet spinning restored with heavy-duty genuine spares. Call our Madurai service desk directly.`
  }),
  (b, loc) => ({
    lead: `Looking for experienced ${b} washing machine service center in Madurai? Water tap on pannina water romba slow-ah fill aagudha or machine start aagave illaya in ${loc}? Inlet solenoid valve filter sand dust-la choke aayirundha water intake cut aagidum. Spot-la clean panni solve pannalam in Madurai.`,
    prompt: `Water fill aagite irukku aana wash cycle start aagala?`,
    body: `Pressure level switch tube choke aana water overflow aagum. Electronic transducer sensor calibrate panni rectify pannidalaam.`,
    aboutLead: `${loc} overhead tank water-la fine sand particles solenoid valve mesh-la settle aagi water filling time delay pannum. ${b} automatic washing machine-ku valve flush execute panrom.`,
    aboutP2: `Pressure switch diaphragm tube clear panni water level sensor calibrate panrom. Water intake normalise aagi cycle on time complete aagum.`,
    aboutP3: `Transparent rates and verified testing before closing visit. Book via WhatsApp across Madurai.`
  }),
  (b, loc) => ({
    lead: `Front load ${b} washing machine door lock aagi thirakka mudiyala-nu trouble face panreengala in ${loc}? Door handle-ah force pannaadheenga, plastic latch udaiya chance irukku. Madurai-la ${b} washing machine repair near me search panreengala? Technician safe-ah unlock panni switch replace pannuvaar.`,
    prompt: `Wash cycle mudinjum door lock release aagala?`,
    body: `Door interlock thermal delay switch short aana door unlock aagadhu. Emergency release panni new interlock unit fit pannuvom.`,
    aboutLead: `${b} front load washers-la electronic safety interlock overheat aana clothes inside trapped aagidum. ${loc} area-la emergency unlock and switch change provide panrom.`,
    aboutP2: `Door latch mechanism break aagama specialized tool vechu release panni, fresh PTC door lock switch install panrom.`,
    aboutP3: `Quick doorstep arrival in 2 to 4 hours across ${loc} and entire Madurai.`
  }),
  (b, loc) => ({
    lead: `Semi-automatic ${b} washing machine wash tub motor hum pannudhu aana pulsator rotate aagala in ${loc}? Madurai-la ${b} washer repair service near me search panreengala? Drive belt loose aayirundha or motor capacitor weak aana drum agitate aagadhu. Quick doorstep diagnosis panni ${b} machine-ah normal operational condition-ku kondu varuvom.`,
    prompt: `Motor sound varudhu aana wash pulsator suthala?`,
    body: `Rubber drive belt slip aayirundha or gearbox gear stripped aana agitator rotate aagadhu. High-grade belt fit panni tension set pannuvom.`,
    aboutLead: `${loc} homes-la semi-automatic ${b} washing machines heavy wash load handle panradhu common. Belt slippage or capacitor loss wash efficiency-ah stop pannidum.`,
    aboutP2: `Technician rear panel open panni motor run capacitor, v-belt and reducer gearbox teeth check pannuvaar. Immediate spot fix.`,
    aboutP3: `Affordable semi-automatic repair solutions without moving machine outside in Madurai.`
  })
];

function getWmIntro(b, loc, idx) {
  const base = wmRecipes[idx % wmRecipes.length](b, loc);
  const variations = [
    `Searching for ${b} washing machine repair in Madurai? Fast doorstep inspection in ${loc}.`,
    `Madurai-la ${b} washer service center near me thedureengala? Experienced local technician ready.`,
    `Need quick ${b} washing machine troubleshooting in ${loc} in Madurai? Genuine spares and upfront pricing.`,
    `${loc} customer homes-ku same-day ${b} washing machine repair support provide panrom in Madurai.`
  ];
  return {
    ...base,
    lead: `${base.lead} ${variations[idx % variations.length]}`
  };
}

// -----------------------------------------------------------------------------
// TV INTRO RECIPES
// -----------------------------------------------------------------------------
const tvRecipes = [
  (b, loc) => ({
    lead: `Madurai-la ${b} Smart TV sound mattum varudhu aana screen full-ah black-ah irukka? Torch adichu paatha faint picture theriyudha? ${loc} side-la ${b} TV repair service near me search panreengala? Local TV technicians home visit panni LED backlight strip testing and replacement safe-ah pannuvanga.`,
    prompt: `TV display varala, sound mattum clear-ah varudha?`,
    body: `Backlight LED strip burn aana picture dark aayidum audio continue aagum. Doorstep-laye aluminum core LED array replacement pannidalaam.`,
    aboutLead: `${b} 32-inch, 43-inch and 55-inch LED/Smart TVs-la screen black aana panel throwaway panna thevaiyilla. ${loc} residences-la precision backlight restoration deliver panrom.`,
    aboutP2: `Padded work mat use panni LCD panel safely remove panni uniform brightness aluminum strips fit panrom. Heat dissipation improve aagum.`,
    aboutP3: `Doorstep screen check across ${loc} in Madurai. Inspection fee transparent and adjusted against repair bill.`
  }),
  (b, loc) => ({
    lead: `Home-la ${b} LED TV on panna remote or front power button press panniyum on aagala in ${loc}? Red indicator light blink aagi standby-la stuck aayirundha, power supply SMPS board failure irukkalaam. Madurai-la ${b} TV service center near me contact panni on-site inspect pannunga.`,
    prompt: `TV standby red light blink aagudhu, display power on aagala?`,
    body: `Power supply board filter capacitor surge-la blow aayirundha power trigger aagadhu. High-grade Japanese capacitor replace panna TV instant-ah on aagidum.`,
    aboutLead: `Madurai localized power surges karanamaga ${b} TV primary SMPS board diodes or mosfets burn aaga chance irukku. ${loc} customers-ku on-site board diagnostics tharom.`,
    aboutP2: `Technician multi-meter vechu secondary voltage rails (12V, 24V, backlight VLED) measure panni board-level fix mudikkuvar.`,
    aboutP3: `No risk of transporting fragile TV screen on two-wheeler. Safe home service in ${loc} in Madurai.`
  }),
  (b, loc) => ({
    lead: `Screen-la vertical colored lines, horizontal bars or double image theriyudha in ${loc}? Need skilled ${b} TV repair in Madurai? T-Con timing controller board or LVDS ribbon cable loose contact irundha screen clarity destroy aagidum. Expert panel technician doorstep visit provide panrom.`,
    prompt: `Display-la green/purple vertical lines appear aagudha?`,
    body: `T-Con board DC-DC converter IC or flex cable pin corrosion dhaan cause. Micro cleaning and IC replacement-la panel clarity fix pannalam.`,
    aboutLead: `${b} 4K Smart TVs-la T-Con board ribbons moisture and humidity-la oxide form aagum. ${loc} homes-la ribbon re-seating and board level voltage check execute panrom.`,
    aboutP2: `Panel driver ICs and COF bonding lines examine panni practical repair solutions suggest panrom. Unnecessary panel change avoid panrom.`,
    aboutP3: `Honest diagnostic assessment with genuine spare parts across all Madurai pin codes.`
  }),
  (b, loc) => ({
    lead: `Looking for ${b} Smart TV service center near me in Madurai around ${loc}? Android TV startup logo-la stuck aagi loop-la restart aagitte irukka? Motherboard eMMC memory or firmware crash aayirundha TV normal home screen-ku boot aagadhu. On-site software flashing available in Madurai.`,
    prompt: `TV logo screen-la hang aagi auto-restart aagudha?`,
    body: `System firmware corruption or cache memory overflow dhaan reason. Factory firmware flash panni apps functioning restore pannidalaam.`,
    aboutLead: `${b} smart TVs streaming apps auto-update aagumbodhu memory partition corrupt aaga vaaippu irukku. ${loc} residents-ku dedicated software recovery support tharom.`,
    aboutP2: `USB diagnostic programmer vazhiya stock firmware flash panni motherboard bootloader resurrect panrom.`,
    aboutP3: `Fast 2 to 4 hour response time in ${loc} in Madurai. Call +91 92115 12088.`
  }),
  (b, loc) => ({
    lead: `If your ${b} television sound is cracking, muffled or completely silent in ${loc}, internal stereo speaker cones torn aayirukkalaam. Madurai-la ${b} TV speaker repair service search panreengala? Tested genuine 10W/12W speaker units spot-laye replace panni clear audio restore panrom.`,
    prompt: `TV volume increase panna sound crackle aagi distortion varudha?`,
    body: `Speaker paper diaphragm moisture-la tear aana vibration noise dhaan kekkum. High-fidelity acoustic speaker pair replace pannina sound crystal clear-ah irukkum.`,
    aboutLead: `${b} slim LED televisions-la internal speakers heavy bass or age karanamaga voice clarity lose aagum. ${loc} residences-la high-output speaker swap execute panrom.`,
    aboutP2: `Audio amplifier circuitry test panni fresh acoustic units fit panrom so that dialogue clarity crisp-ah recover aagum.`,
    aboutP3: `Neat workmanship and customer satisfaction guarantee across Madurai.`
  })
];

function getTvIntro(b, loc, idx) {
  const base = tvRecipes[idx % tvRecipes.length](b, loc);
  const variations = [
    `Searching for dependable ${b} TV repair in Madurai? Doorstep technician visit in ${loc}.`,
    `Madurai-la ${b} LED TV service center near me thedureengala? On-site screen and board repairs.`,
    `Need expert ${b} television service around ${loc} in Madurai? Upfront pricing and genuine spares.`,
    `${loc} flats and houses-ku verified ${b} Smart TV repair service deliver panrom in Madurai.`
  ];
  return {
    ...base,
    lead: `${base.lead} ${variations[idx % variations.length]}`
  };
}

// -----------------------------------------------------------------------------
// SERVICE CENTER (MULTI-APPLIANCE) INTRO RECIPES
// -----------------------------------------------------------------------------
const scRecipes = [
  (b, loc) => ({
    lead: `Madurai-la ${b} multi-appliance service center near me search panreengala? Unga veetula irukkira ${b} washing machine, refrigerator, AC or LED TV-la endha problem vandhalum ${loc} and surrounding Madurai areas-la expert doorstep technician visit arrange panrom. Transparent inspection and genuine compatible parts guarantee.`,
    prompt: `${b} home appliances repair or general service thevaiya in Madurai?`,
    body: `Washing machine drain failure, fridge cooling drop, AC gas checking or TV black screen — spot inspection panni clear estimate kudupom.`,
    aboutLead: `${loc} and Madurai city-la residential families rely on ${b} appliances daily. Machine breakdown aanaal tension aaga venaam, certified local technician unga preferred timing-ku direct-ah address-ku vandhu digital testing meters vechu physical fault diagnose pannuvaar.`,
    aboutP2: `Cost estimate upfront-ah explain pannitu unga approval kedaicha apram-dhaan repair start aagum. Standard inspection fee ₹200–₹350 only, final invoice-la completely adjust aayidum.`,
    aboutP3: `All ${b} appliances covered under single reliable customer service network across Madurai.`
  }),
  (b, loc) => ({
    lead: `${loc} customer-ku ${b} home appliances sudden breakdown or maintenance thevaiya in Madurai? Searching for dependable ${b} repair service in Madurai? Washing machine spin issue, fridge ice jamming, AC water leaking or Smart TV display problems edhuvaga irundhalum same-day doorstep inspection kedaikkum.`,
    prompt: `Multiple ${b} appliances ஒரே visit-la check panna mudiyuma?`,
    body: `Kandippa mudiyum! Washing machine, fridge and AC ellam single doorstep technician visit-laye inspect panni service charges save pannikalam.`,
    aboutLead: `${b} brand-specific engineering and electronic controls pathi nalla therinja technicians dhaan Madurai full-ah service panranga. ${loc} surroundings-la quick spare parts availability irukkiradhala 90% repairs first visit-laye finish aagidum.`,
    aboutP2: `Fair pricing, clear warranty and professional service conduct. Call our Madurai service desk at +91 92115 12088 or WhatsApp share pannunga.`,
    aboutP3: `Technicians carry essential testing gauges and common replacement spares for fast resolution in Madurai.`
  }),
  (b, loc) => ({
    lead: `Home-la ${b} appliance run aagumbodhu unusual noise or electrical trip aagudha in ${loc}? Need verified ${b} service center near me in Madurai? Technicians safety protocols follow panni doorstep diagnosis deliver panranga. Fast visit within 2 to 4 hours across Madurai.`,
    prompt: `Doorstep visit charges and parts estimate eppadi irukkum?`,
    body: `Inspection charge ₹200–₹350 dhaan. Fault confirm pannitu required spare parts and repair amount clear-ah sonna pinbu dhaan fix pannuvom.`,
    aboutLead: `${loc} flats and individual houses-la heavy appliances-ah service center-ku eduthuttu poradhu romba risk. Glass panel and copper tubes damage aagama home-laye padded mat vechu safe checking execute panrom.`,
    aboutP2: `Madurai-la trusted home appliance repair network. Call anytime between 8:00 AM to 8:30 PM for instant slot confirmation.`,
    aboutP3: `Honest diagnostic assessment and long-lasting repair quality guaranteed in Madurai.`
  }),
  (b, loc) => ({
    lead: `Looking for genuine ${b} appliance repair center in Madurai around ${loc}? Laundry spin failure, refrigerator cooling cutoff or air conditioner cooling drop — local technician team direct-ah veetukku vandhu original specification parts fit panni long-term performance ensure pannuvanga.`,
    prompt: `${b} appliances-ku original compatible spares kedaikkuma?`,
    body: `Aam, capacitors, drain pumps, sensors, thermostats and backlight strips tested OEM spec components dhaan use panrom.`,
    aboutLead: `${loc} and Madurai district coverage-la all ${b} models supported. Inverter technology, Direct Drive motors, frost-free circuits and 4K displays-ku certified meters use panni accurate diagnosis tharom.`,
    aboutP2: `Affordable doorstep service without dealership delay. Direct communication with service technician for peace of mind.`,
    aboutP3: `Post-repair testing with customer demonstration before closing service request in Madurai.`
  })
];

function getScIntro(b, loc, idx) {
  const base = scRecipes[idx % scRecipes.length](b, loc);
  const variations = [
    `Searching for ${b} appliance service center in Madurai? Doorstep assistance across ${loc}.`,
    `Madurai-la ${b} repair near me thedureengala? Fast 2 to 4 hour technician visit in ${loc}.`,
    `Need ${b} multi-appliance repair in ${loc} in Madurai? Genuine parts and transparent billing.`,
    `${loc} residences-ku certified ${b} home appliance technicians available today in Madurai.`
  ];
  return {
    ...base,
    lead: `${base.lead} ${variations[idx % variations.length]}`
  };
}

const intros = {};

pages.forEach((p, idx) => {
  const loc = getLocality(idx);
  const isGeneric = !p.brand || p.brand.startsWith('All') || p.brand === 'Home Appliance';
  const brandClean = isGeneric ? '' : p.brand;
  const cat = p.category;

  let gen;
  if (cat === 'ac') {
    const bName = brandClean || 'AC';
    gen = getAcIntro(bName, loc, idx);
  } else if (cat === 'fridge') {
    const bName = brandClean || 'Fridge';
    gen = getFridgeIntro(bName, loc, idx);
  } else if (cat === 'washing-machine') {
    const bName = brandClean || 'Washing Machine';
    gen = getWmIntro(bName, loc, idx);
  } else if (cat === 'tv') {
    const bName = brandClean || 'LED TV';
    gen = getTvIntro(bName, loc, idx);
  } else if (cat === 'root') {
    gen = {
      lead: `Madurai-la home appliance repair service thevaiya? AC cooling weak-ah irukka, washing machine water drain aagala, fridge-la cooling ninnu pocha or TV screen black-ah irukka? ${loc} and 200+ Madurai localities-la certified doorstep technicians fast-ah home visit panni inspection and repair execute pannuvanga. Searching for reliable appliance service center near me in Madurai? Call our service desk for immediate same-day visit booking.`,
      prompt: `Madurai-la home appliance service center near me search panreengala?`,
      body: `AC, Refrigerator, Washing Machine or Smart TV — endha brand model-ah irundhaalum direct doorstep inspection and transparent charges-la service mudikkalam.`,
      aboutLead: `Madurai city and suburbs-la residential families daily use panra essential home appliances sudden breakdown aana lifestyle affect aagidum. Anna Nagar, KK Nagar, Tallakulam, Arapalayam, Mattuthavani, Sellur, Kalavasal and Villapuram ulpata all municipal wards-ku experienced doorstep technicians direct-ah unga home-ku reach aaguvanga.`,
      aboutP2: `Physical fault testing mudinju transparent price estimate explain pannuvom. Approval kedaicha apram tested compatible spares vechu machine test panni delivery tharom. Inspection charge ₹200–₹350 only, service confirm panna final bill-la deduct aayidum.`,
      aboutP3: `All brand washing machines, fridges, air conditioners and televisions serviced with safety protocols and warranty support in Madurai.`
    };
  } else {
    const bName = brandClean || 'Home Appliance';
    gen = getScIntro(bName, loc, idx);
  }

  intros[p.newFile] = {
    brand: p.brand,
    category: p.category,
    locality: loc,
    lead: gen.lead,
    tanglishPrompt: gen.prompt,
    tanglishBody: gen.body,
    aboutLead: gen.aboutLead,
    aboutP2: gen.aboutP2,
    aboutP3: gen.aboutP3
  };
});

fs.writeFileSync('scripts/madurai_hero_intros_v2.json', JSON.stringify(intros, null, 2));
console.log(`Generated scripts/madurai_hero_intros_v2.json with ${Object.keys(intros).length} unique Tanglish intros.`);
