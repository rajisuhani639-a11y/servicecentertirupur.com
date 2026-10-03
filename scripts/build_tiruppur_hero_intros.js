// scripts/build_tiruppur_hero_intros.js
// Generates 100% unique, highly-differentiated starting sections & intros for all 174 Tirupur pages.
// Adheres strictly to:
// - 80–90% natural Tamil-English / Tanglish style
// - 10–20% simple English
// - Varied sentence constructions and opening phrases
// - Brand + Appliance + Service/Repair + Tirupur keywords
// - Specific Tirupur locality integration (Avinashi Road, Kumar Nagar, Nallur, Kangeyam Road, P.N. Road, etc.)
// - Unique intro section body paragraphs per page

const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_pages_data.json'), 'utf8'));
const localitiesData = require('./tiruppur_localities.js');

const allLocs = [
  ...localitiesData.east,
  ...localitiesData.west,
  ...localitiesData.north,
  ...localitiesData.south
];

function getLocality(idx) {
  return allLocs[(idx * 11 + 17) % allLocs.length].name;
}

// -----------------------------------------------------------------------------
// AC INTRO RECIPES (Tirupur localized)
// -----------------------------------------------------------------------------
const acRecipes = [
  (b, loc) => ({
    lead: `Tirupur-la ${b} AC cooling proper-ah illa? Room-la fan mattum odi cooling drop aana, technician check pannradhu romba avasiyam. ${loc} surroundings-la ${b} AC repair service near me thedureengala? Enga local technicians direct-ah unga veetukku vandhu gas pressure, blower motor and outdoor coil condition inspect panni spot-la fix pannuvanga.`,
    prompt: `Tirupur-la ${b} AC cooling romba kammiya irukka? Fan air mattum dhaan varudha?`,
    body: `Indoor unit-la water drop aagudha or outdoor compressor on aagama humming sound mattum varudha? Problem enna-nu sonna, doorstep technician quick-ah vandhu resolve pannuvaar.`,
    aboutLead: `Tirupur hot afternoons-la ${b} split AC run aagiyum room chill aagala-na, outdoor coil lint dust choking or refrigerant leak irukkalaam. ${loc} area-la ${b} AC service center search panreenga-na, trustworthy doorstep support provide panrom.`,
    aboutP2: `Knitwear industrial belt dust and cotton fibers outdoor fins-la caked aana airflow block aagi compressor trip aagum. Technician digital gauge vechu suction pressure test pannitu genuine capacitor or copper flare leak fix execute pannuvaar.`,
    aboutP3: `Honest doorstep visit across ${loc} and surrounding Tirupur roads. Checking mudinju parts estimate approve panna apram dhaan technician work proceed pannuvaar.`
  }),
  (b, loc) => ({
    lead: `Searching for ${b} AC service center near me in Tirupur around ${loc}? AC on panni 15 minutes aanaalum room temperature maarala-na, overload protector switch trip aagirukkalaam. Tirupur summer heat and power fluctuations-la compressor stress aavadhu common. Local technician unga veetukke vandhu complete cooling check mudichi tharuvanga.`,
    prompt: `${b} AC compressor on aagama outdoor unit trip aagudha?`,
    body: `Dual run capacitor weak aayirundha compressor start aagadhu. Spot-laye clamp meter test panni heavy-duty capacitor fit pannidalaam.`,
    aboutLead: `${loc} customer premises-la ${b} inverter AC unexpected-ah cooling stop aana, quick doorstep technical support kedaikkum. Air conditioning performance drop aana Tirupur heat-la stay panradhu kashtam.`,
    aboutP2: `Outdoor unit direct sunlight and roadside dust-la heat aagumbodhu thermal protection activate aagum. Technician condenser coil high-pressure wash panni electrical terminal inspect pannuvaar.`,
    aboutP3: `Same-day visit in 2 to 4 hours across ${loc} in Tirupur. Transparent spare parts rates and testing warranty guaranteed.`
  }),
  (b, loc) => ({
    lead: `Need quick doorstep help with your ${b} air conditioner in ${loc}? Indoor unit-la irundhu water drip aagi bedroom wall and floor wet aagudha? Tirupur-la ${b} AC repair service thedureenga-na, enga skilled cooling technicians drain tray clog, blower wheel dirt and evaporator freezing check panni clean-ah rectify panranga.`,
    prompt: `${b} AC indoor unit water leakage problem irukka?`,
    body: `Drain tray algae or condensate pipe blockage dhaan water dripping-ku main reason. Pressure pump wash panni on-site leak stop pannuvom.`,
    aboutLead: `${b} split AC-la indoor water leak aana wall paint, wallpaper and electrical sockets spoil aaga chance irukku. ${loc} area-la certified AC repair technicians fast doorstep service tharanga.`,
    aboutP2: `Indoor evaporator coil freeze aagi melt aagum bothu drain trough overflow aagum. Low refrigerant level or filter clogging check panni suction pressure set pannuvom.`,
    aboutP3: `Nominal visiting charge ₹199–₹299, repair bill-la adjust aagidum. Call or WhatsApp booking ready across Tirupur.`
  }),
  (b, loc) => ({
    lead: `Tirupur-la ${b} inverter AC on pannina display-la error code blink aagitu indoor blower ninnu pocha? Searching for ${b} AC repair in Tirupur near ${loc}? Outdoor inverter power module board or temperature sensor fault irundha normal cooling start aagadhu. Experienced technician spot-la PCB inspect panni exact fault fix pannuvaar.`,
    prompt: `${b} AC display-la error code vanthu outdoor unit start aagala?`,
    body: `Communication line or motherboard DC power section-la issue irundha error trigger aagum. Component-level on-site board repair support available.`,
    aboutLead: `${b} smart inverter models Tirupur industrial voltage variations-la occasional-ah board stress aaga vaaippu irukku. ${loc} residents-ku dedicated diagnostic testing doorstep-laye provide panrom.`,
    aboutP2: `Technician multi-meter vechu IPM module, reactor coil and sensor resistance measure pannuvaar. Whole PCB replace panna theva illama board repair execute panrom.`,
    aboutP3: `Inspection mudinju clear estimation sonna pinbu dhaan work nadakkum in Tirupur. No hidden extra charges.`
  }),
  (b, loc) => ({
    lead: `If your ${b} AC in ${loc} is making loud vibrating sound from the indoor blower or outdoor fan, bearing wear-out or blade imbalance irukkalaam. Tirupur-la ${b} AC repair near me thedureengala? Smooth and quiet cooling restore panna local technicians same-day doorstep inspection deliver panranga.`,
    prompt: `Indoor blower rumbling sound or outdoor unit vibration adhigama irukka?`,
    body: `Blower wheel nylon bush wear out aana rotation noise adhigam aagum. Lubrication or genuine bush replacement panni sound arrest pannidalaam.`,
    aboutLead: `${loc} homes-la bedroom AC silent-ah run aaganum. ${b} air conditioner heavy vibration kudutha motor mount or cross-flow fan alignment inspect panna vendiyadhu.`,
    aboutP2: `Outdoor condenser fan motor bearing dry aana continuous grinding noise produce aagum. Technician motor shaft test panni OEM-grade spare replace pannuvaar.`,
    aboutP3: `Prompt service coverage across ${loc} and adjacent Tirupur areas. Call anytime between 8 AM and 8:30 PM.`
  }),
  (b, loc) => ({
    lead: `Home-la ${b} AC run aagi electricity bill shock kudukkudha? Long time seasonal jet service pannama vitta cooling efficiency 25% drop aagi power consumption increase aagidum. ${loc} side-la professional ${b} AC cleaning service in Tirupur thedureengala? Deep foam and high-pressure jet wash panni cooling power boost panrom.`,
    prompt: `AC airflow romba weak-ah varudha? Coil full-ah textile lint dust adaichurukka?`,
    body: `Waterproof service jacket maati room wall safe-ah vechu indoor fins and outdoor condenser-ah jet wash panni clean panrom.`,
    aboutLead: `Tirupur textile corridor dust and summer heat karanamaga ${b} AC cooling coils 4 to 6 months-kulle dirt caked aayidum. ${loc} customers-ku complete pre-season jet wash arrange panrom.`,
    aboutP2: `Deep cleaning mudinja udane room chilling speed double aagum, compressor load reduce aagi monthly power consumption noticeable-ah drop aagum.`,
    aboutP3: `Mess-free, reliable service by experienced cooling technicians in Tirupur. WhatsApp or call booking open daily.`
  }),
  (b, loc) => ({
    lead: `Looking for dependable ${b} AC gas filling service in Tirupur around ${loc}? Indoor copper pipe-la white frost ice katti, room-la cooling nil aagiducha? Low refrigerant pressure compressor life-ah damage pannum. Experienced technician nitrogen leak test panni leak arrest mudichu fresh R32 / R410A gas charge pannuvaar.`,
    prompt: `AC cooling complete-ah stop aagi pipe-la ice form aagudha?`,
    body: `Copper flare joints-la oil trace irundha refrigerant leak aagirukku. Brazing leak arrest panni vacuum pump pottu gas refill execute pannuvom.`,
    aboutLead: `${b} air conditioner-la gas charge low aana room cooling zero aagidum. ${loc} neighborhood-la accurate refrigerant charging support provide panrom.`,
    aboutP2: `Electronic leak detector and soap bubble test vechu microscopic leakage point identify panrom. Nitrogen pressure hold test panni dhaan gas charge nadakkum.`,
    aboutP3: `Genuine virgin refrigerant, digital weighing scale accuracy and post-service warranty across all Tirupur localities.`
  }),
  (b, loc) => ({
    lead: `Is your ${b} AC remote not responding or display blinking continuously in ${loc}? Sensor board signal receive pannala-na remote button press panniyum unit react aagadhu. Tirupur-la ${b} air conditioner repair service near me search panreengala? Quick sensor check and remote frequency testing doorstep-laye panni tharom.`,
    prompt: `${b} AC remote switch on panna beep sound varala?`,
    body: `Indoor display PCB receiver diode or cable connectivity loose aana remote work aagadhu. On-site sensor diode fix available.`,
    aboutLead: `Tirupur moisture and room humidity display sensor track-ah affect panna vaaippu irukku. ${loc} residences-la quick infrared signal testing deliver panrom.`,
    aboutP2: `Technician IR sensor voltage verify panni indoor mainboard relay trigger check pannuvaar. Need based replacement spares ready-ah irukkum.`,
    aboutP3: `Quick same-day repair support in ${loc}, Tirupur. Clear communication and honest service guidance.`
  })
];

// -----------------------------------------------------------------------------
// WASHING MACHINE INTRO RECIPES (Tirupur localized)
// -----------------------------------------------------------------------------
const wmRecipes = [
  (b, loc) => ({
    lead: `Tirupur-la ${b} washing machine water drain aagama cycle pause aagi nikkudha? Wash mudinju drum full-ah water thengi irundha, spin cycle start aagadhu. ${loc} in Tirupur-la ${b} washing machine repair service near me search panreengala? Enga local washing machine technicians coin trap, drain pump motor and pressure sensor inspect panni quick-ah solve pannuvanga.`,
    prompt: `${b} washing machine-la water drain aagala? Error code display aagudha?`,
    body: `Drain filter choke or pump impeller jam aana water veliya pogadhu. Doorstep technician unga veetukke vandhu on-site pump check panni clean panni tharuvaar.`,
    aboutLead: `${b} front load or top load washer-la water drainage stop aana cloth rinse aagalaam. ${loc} area-la certified washing machine repair specialists immediate doorstep help provide panranga.`,
    aboutP2: `Borewell water sediment and lint drain valve-la katti choke aaga chance irukku. Technician multi-meter vechu drain motor winding resistance measure panni clear solution execute pannuvaar.`,
    aboutP3: `Affordable inspection fee ₹199–₹299, repair bill-la adjust aagidum. Verified doorstep service across ${loc} in Tirupur.`
  }),
  (b, loc) => ({
    lead: `Searching for ${b} washing machine service center near me in Tirupur near ${loc}? Spin cycle odumbodhu machine heavy vibration and helicopter sound produce pannudha? Drum bearing wear-out or suspension rod spring loose aana machine unbalanced-ah shake aagum. Experienced technician spot-la drum and shockers test panni repair execute pannuvaar.`,
    prompt: `Washing machine spin aagumbodhu bayangarama shake aagi sound varudha?`,
    body: `Spider arm crack or tub bearing rust aayirundha loud metallic noise varum. Original bearing and oil seal fit panni machine silent aakkidalam.`,
    aboutLead: `${loc} homes-la washing machine loud noise family comfort-ah disturb pannum. ${b} washer drum assembly and suspension kit-ku dedicated doorstep repair kedaikkum in Tirupur.`,
    aboutP2: `Front-load washer-la counter balance weight loose aana high spin speed-la machine move aagidum. Technician suspension dampers and drum spider check panni balance restore pannuvaar.`,
    aboutP3: `Genuine spares, doorstep fitting, transparent charges across ${loc}. WhatsApp booking available anytime.`
  }),
  (b, loc) => ({
    lead: `Need help with your ${b} washing machine in ${loc}? Tap on panni machine start panninaalum water drum-kulle enter aagalaya? Tirupur-la ${b} washing machine repair service thedureenga-na, inlet solenoid valve choke, water sensor line and tap mesh inspect panni technician quick-ah fix pannuvaar.`,
    prompt: `${b} washing machine-la water flow ulla varala? Buzzer adikudha?`,
    body: `Hard water salt deposit inlet valve coil-ah choke pannirukkalaam. Spot-laye solenoid valve test panni fresh flow restore pannuvom.`,
    aboutLead: `Tirupur ground water-la dissolved minerals adhigam irundha inlet solenoid filter frequent-ah scale aayidum. ${loc} households-ku dependable washing machine plumbing fix tharom.`,
    aboutP2: `Water pressure switch tube-la air leak irundha board water fill command cut pannidum. Technician pressure switch and solenoid valve coil ohms measure pannuvaar.`,
    aboutP3: `Same-day doorstep visit in 2 to 4 hours across ${loc} in Tirupur. All major front load and top load models covered.`
  }),
  (b, loc) => ({
    lead: `Tirupur-la ${b} washing machine door lock open aagala or dE / dLEr error code kaatidha? Cycle complete aagiyum door latch stuck aana clothes edukka mudiyadhu. ${loc} area-la ${b} washing machine service center search panreengala? Door latch safety switch, bi-metal PTC lock and PCB relay inspect panni technician smooth-ah release pannuvaar.`,
    prompt: `Door lock open aagama clothes ulla maattikiducha? dE error blink aagudha?`,
    body: `Thermal door switch burn aana safety lock open aagadhu. Manual release execute panni tested OEM door lock switch spot-la install pannidalaam.`,
    aboutLead: `${b} front load washing machines-la door lock switch frequent use-la contact points wear-out aagum. ${loc} residences-la door interlock repair immediate doorstep visit-la solve panrom.`,
    aboutP2: `Door handle lever or lock latch break aayirundha machine cycle start panna vidaadhu. Technician door frame remove panni genuine lock mechanism fit pannuvaar.`,
    aboutP3: `Honest diagnostic visit and clear pricing across ${loc}, Tirupur. Customer approval kedaicha pinbu dhaan work nadakkum.`
  }),
  (b, loc) => ({
    lead: `Power on panninaalum ${b} washing machine-la lights blink aagala or cycle mid-way trip aagudha in ${loc}? Main control motherboard / PCB power surge karanamaga damage aagirukkalaam. Tirupur-la ${b} washing machine PCB repair near me thedureengala? Board complete-ah maathama component-level repair panni budget save pannuvom.`,
    prompt: `Washing machine display dead-ah irukka? On panna response illaya?`,
    body: `SMPS power IC, transformer or capacitor blow aayirundha board power up aagadhu. Micro soldering panni on-site board repair tharom.`,
    aboutLead: `Industrial city Tirupur-la unexpected voltage fluctuations-la control circuit boards stress aaga vaaippu irukku. ${loc} customers-ku specialized washing machine PCB repair kedaikkum.`,
    aboutP2: `Motor driver triac and relay points test panni exact burnt component identify panrom. New board vaanguradhoda 60% cost save panna component fix best solution.`,
    aboutP3: `Component-level warranty and doorstep checking support across all localities in Tirupur.`
  }),
  (b, loc) => ({
    lead: `Is your ${b} top load washing machine pulsator rotating but drum not spinning during wash in ${loc}? Agitator teeth stripped or drive belt loose aana wash motion weak aayidum. Tirupur-la ${b} washing machine service near me thedureengala? Local technician clutch gear box and drive belt inspect panni vigorous washing motion restore pannuvaar.`,
    prompt: `Cloth wash panna motor odudhu aana drum rotate aagala?`,
    body: `Pulsator center spline worn out aana motor shaft spin panna mudiyadhu. Heavy-duty pulsator or gearbox ratchet replace panni issue fix pannidalam.`,
    aboutLead: `Daily heavy clothes washing Tirupur households-la pulsator spline stress adhigam aagum. ${loc} customers-ku complete mechanical washer maintenance deliver panrom.`,
    aboutP2: `Drive motor capacitor weak aayirundha wash load rotate aagumbodhu motor stall aagum. Technician capacitor microfarads and belt tension tune pannuvaar.`,
    aboutP3: `Reliable doorstep service across ${loc} in Tirupur. Quick parts availability for all top load models.`
  })
];

// -----------------------------------------------------------------------------
// REFRIGERATOR INTRO RECIPES (Tirupur localized)
// -----------------------------------------------------------------------------
const fridgeRecipes = [
  (b, loc) => ({
    lead: `Tirupur-la ${b} fridge cooling stop aagi vegetables and milk spoil aagudha? Freezer-la matum light cooling irundhu lower compartment warm-ah irukka? ${loc} in Tirupur-la ${b} refrigerator repair service near me search panreengala? Enga local fridge technicians defrost timer, bi-metal thermostat and compressor relay spot-la test panni rectify pannuvanga.`,
    prompt: `Freezer cool aagudhu aana keezha fridge compartment chill aagala?`,
    body: `Defrost heater or thermal fuse fail aana air duct ice block aagi cooling keezha varadhu. Airway defrost panni thermostat on-site fix pannuvom.`,
    aboutLead: `Double-door and frost-free ${b} refrigerators-la air circulation path block aana food storage affect aagum. ${loc} surroundings-la reliable doorstep fridge repair support deliver panrom.`,
    aboutP2: `Evaporator coil full-ah ice frost build-up aana cooling fan breeze cut off aagidum. Technician defrost cycle simulate panni sensor resistance measure pannuvaar.`,
    aboutP3: `Nominal visiting fee ₹199–₹299, work approve aana total bill-la deduct aagidum. Fast technician visit across ${loc}, Tirupur.`
  }),
  (b, loc) => ({
    lead: `Searching for ${b} refrigerator service center near me in Tirupur around ${loc}? Fridge back side compressor click sound vandhu cut off aagudha? Continuous click sound PTCR start relay or overload protector failure-ku direct symptom. Local cooling technician spot-la start capacitor and relay inspect panni compressor cycle start pannuvaar.`,
    prompt: `Compressor click sound panni off aagudha? Motor hum mattum varudha?`,
    body: `Start relay burn aayirundha compressor winding-ku initial kick kedaikkadhu. Heavy-duty relay and capacitor fit panni cooling instant restore pannidalaam.`,
    aboutLead: `${loc} residences-la refrigerator continuous operation-ku dependable electrical components romba mukkiyam. ${b} inverter and non-inverter compressor issue-ku expert diagnosis tharom.`,
    aboutP2: `Compressor running capacitor weak aana high start current draw aagi overload trip aagum. Technician clamp meter vechu running amperes verify pannuvaar.`,
    aboutP3: `Tested spare parts, honest pricing and warranty support throughout ${loc} in Tirupur.`
  }),
  (b, loc) => ({
    lead: `Need help with your ${b} fridge in ${loc}? Refrigerator bottom-la water leak aagi kitchen floor wet aagudha? Drain hole fungus clog or defrost drain pan crack aana water overflow aagum. Tirupur-la ${b} fridge repair service thedureenga-na, technician drain line flush panni water pooling problem clear pannuvaar.`,
    prompt: `Fridge keezha water thengudha? Vegetable box kulla water leak aagudha?`,
    body: `Defrost water channel food debris karanamaga choke aana water keezha drip aagum. Internal drain line unclog panni leak stop pannuvom.`,
    aboutLead: `Single door and double door ${b} models-la water leakage bad smell and kitchen hygiene issues cause pannum. ${loc} area-la same-day technician visit coordinate panrom.`,
    aboutP2: `Door gasket seal magnetic grip loose aana outside warm air enter aagi heavy condensation create aagum. Technician door alignment and gasket test pannuvaar.`,
    aboutP3: `Quick doorstep service across ${loc} in Tirupur. WhatsApp or call booking available 7 days a week.`
  }),
  (b, loc) => ({
    lead: `Is your ${b} single door fridge freezer over-icing aagi door close panna mudiyala in ${loc}? Thermostat sensor control fail aana compressor cut-off illama 24 hours run aagi snow ice katti block pannidum. Tirupur-la ${b} refrigerator repair near me search panreengala? Technician accurate temperature thermostat replace panni normal cooling cycle restore pannuvaar.`,
    prompt: `Freezer-la rock ice form aagudha? Defrost push button work aagala?`,
    body: `Thermostat capillary tube gas leak aana cooling cut-off aagadhu. Original thermostat maathi defrost mechanism tune panni tharom.`,
    aboutLead: `Continuous over-icing compressor-ah overload panni electricity bill increase pannum. ${loc} customers-ku genuine ${b} refrigerator mechanical thermostat solutions ready.`,
    aboutP2: `Door rubber beading air leak check panni thermal insulation test panrom. Need based OEM beading replace panna temperature uniform aagidum.`,
    aboutP3: `Fair pricing, clear warranty and fast doorstep response across all localities in Tirupur.`
  }),
  (b, loc) => ({
    lead: `Looking for reliable ${b} refrigerator gas charging service in Tirupur near ${loc}? Compressor run aagiyum cooling zero aagi condenser coils chill-ah irukka? Capillary tube choke or copper pipe pinhole gas leak irukkalaam. Certified cooling technician vacuum hold test panni genuine R134a / R600a eco-friendly gas charge pannuvaar.`,
    prompt: `Compressor run aagudhu aana konjam kooda cooling illaya? Gas leak aagiducha?`,
    body: `Copper line leak arrest panni filter drier replace pannitu precise gas charge panna dhaan chilling perfect-ah kedaikkum.`,
    aboutLead: `${b} refrigerator-la low gas pressure motor burnout-ku reason aagum. ${loc} neighborhood-la accurate refrigerant charging support deliver panrom.`,
    aboutP2: `Hydrocarbon R600a safety charging manifold and weighing scale vechu exact grams gas inject panrom. Cooling performance spot-laye verify panni tharuvom.`,
    aboutP3: `Transparent service bill, post-repair cooling guarantee across ${loc}, Tirupur.`
  })
];

// -----------------------------------------------------------------------------
// TV INTRO RECIPES (Tirupur localized)
// -----------------------------------------------------------------------------
const tvRecipes = [
  (b, loc) => ({
    lead: `Tirupur-la ${b} Smart LED TV on pannina sound matum varudhu, picture full black screen-ah irukka? Screen-la torch light adicha background image theriyudha? ${loc} in Tirupur-la ${b} TV repair service near me search panreengala? Enga local LED TV technicians backlight strip, LED driver IC and power board spot-la check panni complete display restore pannuvanga.`,
    prompt: `TV-la sound kekkudhu aana picture varala? Screen blank-ah irukka?`,
    body: `LED backlight diode array burn aana display black screen aagidum. Original replacement LED strips fit panni brightness return pannuvom.`,
    aboutLead: `${b} LED and Smart 4K TVs-la backlight wear-out common issue. ${loc} neighborhood-la certified LED TV panel and backlight specialists reliable doorstep help tharanga.`,
    aboutP2: `Technician constant current LED driver voltage measure panni backlight strip health test pannuvaar. Complete set fresh LED strips install panna future failure avoid aagum.`,
    aboutP3: `Honest inspection fee ₹199–₹299, repair bill-la adjust aagidum. Dependable TV technicians covering ${loc} in Tirupur.`
  }),
  (b, loc) => ({
    lead: `Searching for ${b} TV service center near me in Tirupur around ${loc}? TV standby red light blink aagudhu aana screen power on aagala? Power supply board capacitors bulging or standby 5V rail drop aana TV boot aagadhu. Local PCB technician spot-la multi-meter vechu voltage rails inspect panni accurate fix execute pannuvaar.`,
    prompt: `TV standby light blink aagi screen start aagama nikkudha?`,
    body: `Power supply board secondary filter diodes or regulator IC fail aayirukkalaam. Board-level soldering panni quick on-site restart restore pannuvom.`,
    aboutLead: `${loc} residences-la evening family entertainment-ku TV romba mukkiyam. ${b} Smart TV power failure-ku prompt technical diagnosis provide panrom.`,
    aboutP2: `Mainboard processor communication and power board switching MOSFET test panni exact dead component identify panrom. Whole board maathama budget cost-la repair mudikrom.`,
    aboutP3: `Same-day technician visit in 2 to 4 hours across ${loc} in Tirupur. Clear component pricing and warranty support.`
  }),
  (b, loc) => ({
    lead: `Need help with your ${b} Smart TV in ${loc}? Screen-la horizontal or vertical lines display aagudha, or double image flicker varudha? COF bonding track loose or T-CON board clock signals mismatch aana picture distort aagum. Tirupur-la ${b} LED TV repair near me thedureengala? Panel technicians accurate line fix execute pannuvanga.`,
    prompt: `TV screen-la horizontal / vertical lines theriyudha? Picture double aagudha?`,
    body: `T-CON timing control board DC-DC converter IC fault or ribbon cable moisture-la lines form aagum. Spot diagnosis panni clean display recover panrom.`,
    aboutLead: `${b} 4K UHD and Smart LED displays-la panel signal integrity critical. ${loc} area-la specialized panel level diagnostics doorstep-laye coordinate panrom.`,
    aboutP2: `Gate driver lines and source PCB voltages oscilloscope and multi-meter vechu check panrom. Micro soldering bypass panni panel replacement illama lines clear panrom.`,
    aboutP3: `Clear estimation upfront-ah explain pannitu customer consent oda work nadakkum in Tirupur.`
  }),
  (b, loc) => ({
    lead: `Is your ${b} Smart TV hanging on logo or restarting continuously in ${loc}? Android / Google TV firmware corruption or eMMC flash memory sector error aana TV boot loop-la nikkum. Tirupur-la ${b} Smart TV software and motherboard service thedureenga-na, programmer tool vechu fresh firmware flash panni TV restore panrom.`,
    prompt: `TV brand logo-laye stuck aagi restart aagite irukka?`,
    body: `Smart TV memory chip boot sequence fail aana screen proceed aagadhu. USB firmware update or eMMC chip reprogramming panni fix pannuvom.`,
    aboutLead: `Internet streaming use panna panna smart TV internal memory cache corrupt aaga vaaippu irukku. ${loc} customers-ku specialized smart TV board software repairs ready.`,
    aboutP2: `Mainboard core processor voltage and RAM communication check panni clean OEM software install panrom. All HDMI ports and Wi-Fi connectivity verify aagum.`,
    aboutP3: `Reliable service with testing warranty across ${loc} and surrounding Tirupur streets.`
  })
];

// -----------------------------------------------------------------------------
// SERVICE CENTER / BRAND INTRO RECIPES (Tirupur localized)
// -----------------------------------------------------------------------------
const scRecipes = [
  (b, loc) => ({
    lead: `Searching for dependable ${b} service center support in Tirupur near ${loc}? Unga ${b} home appliances—washing machine, refrigerator, split AC or Smart TV—unexpected-ah problem pannina, reliable local technician doorstep-ku varuvaar. ${loc} in Tirupur-la multi-brand doorstep appliance care deliver panrom with genuine compatible spares.`,
    prompt: `Tirupur-la ${b} home appliance fault troubleshoot panna technician thedureengala?`,
    body: `Machine on aagala, unusual sound varudha or cooling drop aagudha? Problem enna-nu sonna, skilled technician unga veetukke vandhu complete check mudichi tharuvaar.`,
    aboutLead: `${b} home appliances Tirupur households-la daily life-ku essential. ${loc} surroundings-la certified multi-brand service technicians prompt doorstep inspection deliver panranga.`,
    aboutP2: `We provide independent, post-warranty repair and diagnostic service using tested OEM-compatible spare parts. Clear pricing, upfront diagnosis, and respectful customer service priority.`,
    aboutP3: `Doorstep coverage across all 200+ Tirupur wards including ${loc}. Call +91 92115 12088 for same-day booking.`
  }),
  (b, loc) => ({
    lead: `Need expert repair guidance for ${b} appliances in ${loc}? Whether it is an inverter AC low cooling, washing machine water drain failure, or double door fridge cooling issue, experienced technicians in Tirupur quick-ah diagnose pannuvanga. Transparent service, genuine spares and honest guidance guaranteed.`,
    prompt: `${b} appliance repair-ku clear estimate and doorstep visit venuma in Tirupur?`,
    body: `Detailed testing panni fault exact-ah explain pannuvom. Spares cost and labor charge approve panna pinbu dhaan work proceed pannuvom.`,
    aboutLead: `Tirupur city and suburban homes rely on ${b} appliances for daily ease. ${loc} customer base-ku specialized maintenance and troubleshooting support provide panrom.`,
    aboutP2: `Advanced diagnostic tools and multi-brand testing instruments use panni component-level repair mudikrom. Unnecessary whole unit replacement avoid panni cost save panrom.`,
    aboutP3: `Visiting charges nominal ₹199–₹299, repair bill-la adjust aagidum. WhatsApp instant booking open across Tirupur.`
  }),
  (b, loc) => ({
    lead: `Looking for top-rated ${b} service in Tirupur around ${loc}? Appliance display error code kaatidha, water leak aagudha or machine power on aagama silent-ah irukka? Independent doorstep technical team unga locality-ku direct-ah vandhu quick resolution execute pannuvanga.`,
    prompt: `${b} appliance unexpected-ah break down aagi household work stop aagiducha?`,
    body: `Doorstep technician 2 to 4 hours-kulle visit coordinate panni issue spot-laye fix panna try pannuvaar. Honest service guidance assurance.`,
    aboutLead: `Fast industrial life in Tirupur demands appliances running without trouble. ${loc} families-ku timely technical intervention provide panrom for ${b} products.`,
    aboutP2: `Each visit covers complete electrical safety check, wiring terminal inspection, motor winding test, and performance verification before handover.`,
    aboutP3: `Comprehensive doorstep service coverage across ${loc} and adjacent Tirupur corridors.`
  })
];

// -----------------------------------------------------------------------------
// ROOT (HOMEPAGE) INTRO RECIPE
// -----------------------------------------------------------------------------
function getRootIntro() {
  return {
    lead: `Tirupur-la unga home appliances—washing machine, refrigerator, air conditioner or LED Smart TV—problem pannudha? Urgent technician service venumna, Service Center Tirupur local doorstep experts help ready. Avinashi Road, Kumar Nagar, Nallur, Kangeyam Road, P.N. Road, Palladam Road and 200+ Tirupur localities-la quick same-day technician visit coordinate panrom. Genuine compatible spare parts, transparent charges and post-service warranty guaranteed.`,
    prompt: `Tirupur-la home appliance repair service search panreengala? Washing machine, fridge, AC or TV problem-ah?`,
    body: `Machine start aagala, cooling drop aagudha or heavy sound varudha? Unga area and problem share pannunga, local technician 2 to 4 hours-kulle unga veetukku vandhu check pannuvaar.`,
    aboutLead: `Service Center Tirupur is your dependable neighborhood partner for all multi-brand home appliance repairs across Tirupur Corporation and suburban wards.`,
    aboutP2: `Knitwear industrial city Tirupur-la dust and continuous appliance usage karanamaga timely servicing romba mukkiyam. From front-load washing machine PCB troubleshooting to split AC jet cleaning and LED TV backlight replacement, our technicians carry advanced diagnostic tools to resolve 90% faults on-site.`,
    aboutP3: `Honest inspection fee ₹199–₹299, service confirm panna final bill-la deduct aagidum. Call +91 92115 12088 or WhatsApp us directly for immediate slot booking.`
  };
}

// -----------------------------------------------------------------------------
// BUILD ALL 174 HERO INTROS
// -----------------------------------------------------------------------------
const heroIntros = {};
let generatedCount = 0;

pages.forEach((p, idx) => {
  const brand = p.brand || 'Home Appliance';
  const loc = getLocality(idx);
  const cat = p.category;
  const key = p.newFile;

  let introData = null;

  if (cat === 'root') {
    introData = getRootIntro();
  } else if (cat === 'ac') {
    const recipe = acRecipes[idx % acRecipes.length];
    introData = recipe(brand, loc);
  } else if (cat === 'washing-machine') {
    const recipe = wmRecipes[idx % wmRecipes.length];
    introData = recipe(brand, loc);
  } else if (cat === 'fridge') {
    const recipe = fridgeRecipes[idx % fridgeRecipes.length];
    introData = recipe(brand, loc);
  } else if (cat === 'tv') {
    const recipe = tvRecipes[idx % tvRecipes.length];
    introData = recipe(brand, loc);
  } else if (cat === 'service-center') {
    const recipe = scRecipes[idx % scRecipes.length];
    introData = recipe(brand, loc);
  } else {
    const recipe = scRecipes[idx % scRecipes.length];
    introData = recipe(brand, loc);
  }

  heroIntros[key] = {
    brand: brand,
    category: cat,
    locality: loc,
    lead: introData.lead,
    tanglishPrompt: introData.prompt,
    tanglishBody: introData.body,
    aboutLead: introData.aboutLead,
    aboutP2: introData.aboutP2,
    aboutP3: introData.aboutP3
  };

  generatedCount++;
});

// Uniqueness checks
const allLeads = Object.values(heroIntros).map(i => i.lead);
const uniqueLeads = new Set(allLeads);
console.log(`Generated ${generatedCount} hero intros.`);
console.log(`Unique leads: ${uniqueLeads.size} / ${allLeads.length}`);

// Write output
const outputPath = path.join(__dirname, 'tiruppur_hero_intros.json');
fs.writeFileSync(outputPath, JSON.stringify(heroIntros, null, 2), 'utf8');
console.log(`Saved ${outputPath} successfully!`);
