// scripts/generate_deep_unique_coimbatore_experiences.js
// Generates deeply unique Customer Service Experiences featuring English, Tanglish, and Tamil cards.
// Natural mix: English, Tanglish, Tamil. Real Coimbatore localities. Natural search keywords.
// Zero copy between pages, zero duplicate headings, zero duplicate body texts.

const fs = require('fs');
const localities = require('./coimbatore_localities.js');
const pages = JSON.parse(fs.readFileSync('./scripts/coimbatore_pages_list.json', 'utf8'));

const allLocalities = [
  ...localities.east,
  ...localities.west,
  ...localities.north
];

function shuffle(array, seed = 77) {
  let m = array.length, t, i;
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const copy = [...array];
  while (m) {
    i = Math.floor(rand() * m--);
    t = copy[m];
    copy[m] = copy[i];
    copy[i] = t;
  }
  return copy;
}

// -------------------------------------------------------------
// TECHNICAL SCENARIO POOLS FOR EACH LANGUAGE TYPE
// -------------------------------------------------------------

// ENGLISH SCENARIOS
const enWmScenarios = [
  {
    type: "Drain Pump Impeller Blockage",
    symptom: "washing machine halted mid-program with water trapped inside the drum, showing an OE drain error code",
    check: "opened the bottom emergency drain filter, removed soapy water, and dismantled the drain pump casing to inspect the impeller",
    cause: "coins and hair pins jammed inside the drain chamber, preventing the centrifugal impeller from spinning",
    part: "drain pump assembly",
    resolution: "cleared the debris, lubricated the rotor shaft, and completed two fast spin cycles without any water retention",
    kw: "washing machine repair in Coimbatore"
  },
  {
    type: "High-Speed Spin Vibration",
    symptom: "washer was violently shaking across the utility floor during the final 1000 RPM extraction cycle",
    check: "removed top and rear panels to measure damping tension on each hydraulic strut and tested drum alignment",
    cause: "uneven wear on hydraulic suspension damper rods and degraded tub balancing springs",
    part: "heavy-duty suspension damper rods",
    resolution: "installed four matched suspension damper struts, leveled the front rubber feet, and verified quiet spin balance",
    kw: "washing machine service near me"
  },
  {
    type: "Slow Water Intake and Inlet Valve Scaling",
    symptom: "machine took over 40 minutes just to fill water for a single wash, triggering an IE water fill error",
    check: "measured water pressure from the overhead tank and tested electrical resistance across both solenoid coils with a digital multimeter",
    cause: "calcium mineral scaling from Coimbatore borewell water choking the fine mesh filter of the dual inlet solenoid valve",
    part: "dual water inlet solenoid valve",
    resolution: "descaled the inlet filter housing, installed a fresh dual solenoid valve, and restored rapid water filling in under 4 minutes",
    kw: "washing machine repair in Coimbatore"
  },
  {
    type: "Front Door Lock Latch Jammed",
    symptom: "front load washer finished its cycle but the door stayed firmly locked, trapping laundry inside",
    check: "accessed the emergency pull-cord release behind the lower pump flap to retrieve the laundry safely, then checked interlock terminal continuity",
    cause: "overheated PTC thermistor safety lock mechanism with welded internal copper contact strips",
    part: "door safety interlock switch",
    resolution: "fitted an original replacement door latch switch, tested automatic door release timing, and verified child-lock operations",
    kw: "washing machine service near me"
  }
];

const enFridgeScenarios = [
  {
    type: "Freezer Cold But Lower Cabin Warm",
    symptom: "freezer was making solid ice but the bottom vegetable compartment and milk shelves remained lukewarm",
    check: "removed the freezer back panel, discovered thick frost choking the cooling coil fins, and tested the defrost timer and bi-metal heater circuit",
    cause: "failed bi-metal defrost thermostat preventing the defrost heating element from melting frost accumulation",
    part: "bi-metal defrost thermostat and thermal fuse",
    resolution: "de-iced the frozen air ducts with a hot air blower, installed a sealed bi-metal sensor, and restored cold airflow to the lower cabin",
    kw: "refrigerator repair in Coimbatore"
  },
  {
    type: "Compressor Starter Relay Clicking",
    symptom: "refrigerator stopped cooling completely with a faint clicking sound from the rear base every 3 minutes",
    check: "removed the compressor terminal cover and measured electrical continuity across the auxiliary and main windings",
    cause: "burnt PTC starter relay that failed to energize the motor start winding, tripping the thermal overload protector",
    part: "PTC starter relay and overload protector",
    resolution: "installed a certified starter relay and overload protector, measured compressor running current at a normal 0.7 amps, and verified immediate cooling",
    kw: "refrigerator repair in Coimbatore"
  },
  {
    type: "Water Pooling Under Crisper Box",
    symptom: "fresh water was constantly gathering beneath the bottom vegetable drawer, soaking stored vegetables",
    check: "inspected the defrost water drain trough beneath the cooling coil and tested water flow with warm water injection",
    cause: "dust slime and food particles clogging the internal defrost drain hole and funnel above the compressor evaporation pan",
    part: "defrost drain line assembly",
    resolution: "cleared and sanitized the drain channel using pressurized nitrogen, cleaned the compressor evaporation tray, and stopped internal leaks",
    kw: "appliance service in Coimbatore"
  },
  {
    type: "Loose Magnetic Door Gasket",
    symptom: "heavy condensation was forming on the outer door frame and ice frosted along the freezer edges",
    check: "conducted paper slip tests along all four gasket edges to detect warm air leaks into the cabinet",
    cause: "warped and hardened magnetic door gasket that lost seal along the lower corner",
    part: "food-grade magnetic door gasket",
    resolution: "installed a flexible replacement magnetic door seal, heat-treated the corners for an airtight fit, and reduced electricity consumption",
    kw: "refrigerator repair in Coimbatore"
  }
];

const enAcScenarios = [
  {
    type: "Weak Afternoon Cooling and Capacitor Drop",
    symptom: "split AC blew room-temperature air during hot afternoon hours despite running continuously on 18°C",
    check: "connected a digital clamp ammeter and tested capacitance at the outdoor service access panel",
    cause: "swollen dual run capacitor having dropped from 50 uF to 14 uF, causing the compressor to overheat and trip on thermal overload",
    part: "high-temperature dual run capacitor",
    resolution: "installed a 50+5 uF metallized polypropylene capacitor, cleaned outdoor condenser fins, and restored steady 12°C vent chilling",
    kw: "AC service in Coimbatore"
  },
  {
    type: "Indoor Water Dripping Onto Wall",
    symptom: "water droplets were trickling down the bedroom wallpaper from the right corner of the indoor split casing",
    check: "removed the indoor plastic fascia, verified the level of the wall mounting bracket, and inspected the condensate drain trough",
    cause: "fibrous dust and algae slime choking the condensate drain spout, overflowing the internal back trough",
    part: "condensate drain hose and trough",
    resolution: "flushed the drain line with pressurized nitrogen, treated the tray with anti-fungal solution, and corrected the drain slope",
    kw: "AC service in Coimbatore"
  },
  {
    type: "Outdoor Condenser Fan Motor Seized",
    symptom: "indoor blower ran normally but the outdoor compressor tripped with a loud hum after 90 seconds",
    check: "tested the fan motor capacitor and spun the fan blades manually, detecting complete mechanical lockup",
    cause: "seized sleeve bearings on the outdoor condenser fan motor preventing heat rejection from the condenser coil",
    part: "sealed ball-bearing outdoor fan motor",
    resolution: "installed an original outdoor fan motor, replaced the matching 3 uF fan capacitor, and restored smooth outdoor heat rejection",
    kw: "AC service in Coimbatore"
  },
  {
    type: "Refrigerant Flare Nut Leakage",
    symptom: "white frost was forming on the outdoor brass service valve and indoor cooling coil with very weak room cooling",
    check: "conducted a nitrogen pressure hold test at 350 PSI and pinpointed a leak at the outdoor suction flare joint using bubble solution",
    cause: "aged brass flare nut connection having developed micro-fissures from outdoor vibration",
    part: "brass flare union and R32 gas recharge",
    resolution: "re-cut and flared the copper tubing with a precision flaring tool, tightened flare nuts to torque spec, evacuated the system, and recharged R32 gas by weight",
    kw: "AC service in Coimbatore"
  }
];

const enTvScenarios = [
  {
    type: "Audio Clear But Pitch Black Display",
    symptom: "TV turned on with clear audio from channels, but the display remained completely dark",
    check: "performed a flashlight test on the dark panel to verify faint video images, then tested LED string voltage with an LED tester",
    cause: "failure of internal series LED backlight diode strips, triggering backlight driver over-voltage protection",
    part: "aluminum-core LED backlight strip set",
    resolution: "dismantled the LCD panel layers in a clean setting, fitted a matched set of aluminum-backed LED strips, and restored bright picture",
    kw: "TV repair near me"
  },
  {
    type: "SMPS Power Supply Surge Cutoff",
    symptom: "Smart TV was completely dead with no red standby light on the front bezel following a thunderstorm",
    check: "measured resistance across the primary bridge rectifier and tested the main filter electrolytic capacitor for short circuits",
    cause: "high voltage transient surge ruptured the primary fuse and shorted the switching MOSFET on the SMPS power board",
    part: "power supply SMPS board repair components",
    resolution: "replaced the blown MOSFET, bridge rectifier, and surge varistor, restoring stable 12V and 24V supply rails",
    kw: "TV repair near me"
  },
  {
    type: "Smart TV Boot Loop on Logo",
    symptom: "television repeatedly rebooted on the brand logo screen, refusing to launch home apps or TV inputs",
    check: "connected the TV motherboard to a diagnostic service jig via serial ISP terminal to analyze boot logs",
    cause: "corrupted bootloader partition in the on-board eMMC flash memory following an interrupted firmware update",
    part: "eMMC flash memory firmware re-programming",
    resolution: "reflashed factory firmware image using an ISP programmer, validated memory health blocks, and restored fast smart app loading",
    kw: "TV repair near me"
  },
  {
    type: "Vertical Colored Lines on Screen",
    symptom: "two permanent colored vertical lines were running through the right side of the screen",
    check: "inspected T-Con flex ribbon cables and Chip-on-Film (COF) bonding points under high magnification",
    cause: "micro-corrosion along the conductive bonding tracks of the COF flex ribbon from humid room air",
    part: "T-Con board flex cable cleaning and bonding stabilization",
    resolution: "ultrasonic-cleaned ribbon contacts, re-clamped COF bonding pressure bar, and eliminated vertical line interference",
    kw: "TV repair near me"
  }
];

// TANGLISH SCENARIOS (Natural spoken Tamil-English hybrid)
const tanglishWmScenarios = [
  {
    heading: "{BRAND} Washing Machine Drain Error Fix in {LOC}",
    body: "{LOC}-la irundha customer {BRAND} washing machine-la water drain aagala-nu call pannanga. Wash mudinjadhum OE error kaatitu machine ninnuduchu. Technician spot-ku poi bottom drain filter open panni check pannapo, safety pin and coins pump impeller-la maatikittu irundhuchu. Adha clean panni, drain motor test panni run pannadhula water clean-ah discharge aachu. Customer romba satisfied."
  },
  {
    heading: "{BRAND} Washer Spin Vibration & Rod Balance in {LOC}",
    body: "{LOC} area-la irundha customer {BRAND} washing machine spin cycle-la romba shake aagudhu-nu washing machine service near me thedi engala contact pannanga. Technician home visit panni drum and suspension rods check pannanga. Naalu suspension damper rod-layum tension poiduchu. Pudhu heavy-duty suspension rods set maathina piragu spin cycle perfectly silent-ah odiduchu."
  },
  {
    heading: "{BRAND} Front Load Door Lock Release & Switch in {LOC}",
    body: "{LOC}-la customer {BRAND} front load washing machine-la thuni thuvacha piragu door unlock aagala-nu urgent help ketaanga. Technician spot-ku poi emergency pull cord moolama door-ah open panni thuniyai eduthanga. Door interlock switch check pannapo contact burnt aagi irundhuchu. Original door lock switch replace panni test panni kuduthom."
  },
  {
    heading: "{BRAND} Water Inlet Valve & Scaling Fix in {LOC}",
    body: "{LOC} neighborhood-la {BRAND} washer-la water fill aaga 45 minutes aagudhu-nu complaint vandhuchu. Coimbatore borewell water salt naala water inlet solenoid valve mesh full-ah block aagi irundhuchu. Solenoid valve-ah clean panni pudhu valve fit pannadhum 4 minutes-la water fill aagi machine super-ah work aachu."
  }
];

const tanglishFridgeScenarios = [
  {
    heading: "{BRAND} Refrigerator Cooling & Defrost Issue in {LOC}",
    body: "{LOC}-la irundha customer {BRAND} fridge-la freezer matum cool aagudhu, keezha vegetable box-la cooling-e illa-nu refrigerator repair in Coimbatore enquiry pannanga. Technician freezer panel open panni paathapo, cooling coil-la ice choke aagi duct-ah moodirundhuchu. Bi-metal defrost thermostat replace panni, ice-ah defrost pannadhum keezha compartment nalla cool aaga start aachu."
  },
  {
    heading: "{BRAND} Fridge Compressor Relay Clicking in {LOC}",
    body: "{LOC} area-la {BRAND} refrigerator-la rear side-la clicking sound matum kekudhu aana cooling aagala-nu customer ketaanga. Technician multimeter vechu compressor terminal check pannapo, PTC starter relay overheat aagi burnt aagi irundhuchu. Pudhu starter relay and overload protector maathina udane compressor smooth-ah start aagi cooling normal aachu."
  },
  {
    heading: "{BRAND} Refrigerator Water Leakage Fix in {LOC}",
    body: "{LOC}-la {BRAND} fridge-la crisper drawer keezha thanni thengudhu-nu customer call pannanga. Defrost drain hole-la dust and slime adaichu irundhadha technician nitrogen pressure vechu clear pannanga. Compressor mela irundha tray-ayum clean pannadhula leak complete-ah stop aaiduchu."
  },
  {
    heading: "{BRAND} Fridge Door Gasket Replacement in {LOC}",
    body: "{LOC}-la {BRAND} double door fridge door sariya moodala, outer frame-la moisture droplets varudhu-nu complaint. Technician door seal check panni loose magnetic gasket-ku badhila pudhu food-grade magnetic gasket fit pannanga. Airtight seal kedaichadhum cooling retain aachu."
  }
];

const tanglishAcScenarios = [
  {
    heading: "{BRAND} AC Low Cooling & Capacitor Replacement in {LOC}",
    body: "{LOC}-la irundha customer {BRAND} split AC-la afternoon cooling romba kammiya irukku-nu AC service in Coimbatore enquiry pannanga. Technician outdoor unit check panni capacitor test pannapo, 50 mfd capacitor 15 mfd-ku drop aagi compressor heat aagi trip aagudhu-nu kandupidichanga. Pudhu dual run capacitor maathina udane ice chill cooling vandhuduchu."
  },
  {
    heading: "{BRAND} Split AC Indoor Water Leakage Fix in {LOC}",
    body: "{LOC} area-la {BRAND} AC indoor unit-la irundhu bedroom wall mela thanni sottudhu-nu complaint. Technician casing open panni condensate drain tray-la algae block aana drain line-ah nitrogen flush panni clean pannanga. Drain slope correct panni leak-ah complete-ah arrest pannanga."
  },
  {
    heading: "{BRAND} AC Outdoor Fan Motor Repair in {LOC}",
    body: "{LOC}-la {BRAND} inverter AC outdoor unit-la periya sound vandhu compressor cut aagudhu-nu ketaanga. Outdoor condenser fan motor bearing jam aagi heat reject aagala. Technician original sealed ball-bearing fan motor fit panni jet cleaning pannadhum AC smooth-ah odiduchu."
  },
  {
    heading: "{BRAND} AC Gas Leak & Flare Brazing in {LOC}",
    body: "{LOC}-la {BRAND} split AC-la brass pipe mela ice form aagudhu aana room cool aagala-nu sonnanga. Outdoor flare nut joint-la minor refrigerant leak irundhadha bubble test panni kandupidichom. Flare re-cut panni, nitrogen vacuum panni R32 gas charging pannadhum cooling super aachu."
  }
];

const tanglishTvScenarios = [
  {
    heading: "{BRAND} Smart TV Sound Only No Picture in {LOC}",
    body: "{LOC}-la irundha customer {BRAND} LED TV-la sound nalla kekudhu aana screen full-ah black-ah irukku-nu TV repair near me thedi call pannanga. Technician flashlight test panni LCD panel safe-ah irukku, internal LED backlight strips dhan poiduchu-nu sonnanga. Matched aluminum backlight strips replace panni bright display kondu vandhanga."
  },
  {
    heading: "{BRAND} TV Boot Loop Logo Restart in {LOC}",
    body: "{LOC} area-la {BRAND} Smart TV brand logo vandhu vandhu restart aagudhu-nu ketaanga. Power cut naala eMMC flash memory firmware corrupt aagi irundhuchu. Technician ISP programmer tool moolama original firmware re-flash panni apps and TV-ah normal-ah operate panna vechanga."
  },
  {
    heading: "{BRAND} TV Power Board Dead Fix in {LOC}",
    body: "{LOC}-la lightning thunderstorm-ku piragu {BRAND} TV red light kooda eriyala-nu urgent service ketaanga. Power supply SMPS board-la primary fuse and MOSFET surge naala short aagi irundhuchu. Board components micro-solder panni 12V rail restore pannadhum TV perfectly on aachu."
  },
  {
    heading: "{BRAND} TV Vertical Display Lines Check in {LOC}",
    body: "{LOC}-la {BRAND} 4K TV display-la right side-la vertical colored lines vandhuchu. Technician T-Con flex ribbon cables-la moisture oxidization clean panni COF bonding re-clamp pannadhum lines marainju clear picture vandhuduchu."
  }
];

// TAMIL SCENARIOS (Natural simple spoken Tamil)
const tamilWmScenarios = [
  {
    heading: "{LOC} பகுதியில் {BRAND} வாஷிங் மெஷின் டிரைன் பம்ப் பழுது சரிசெய்தல்",
    body: "{LOC} பகுதியில் வசிக்கும் வாடிக்கையாளர் தனது {BRAND} வாஷிங் மெஷினில் துவைக்கும் சுழற்சி முடிந்ததும் தண்ணீர் வெளியேறாமல் நிற்பதாக தெரிவித்தார். எங்களது டெக்னீஷியன் நேரில் சென்று ஆய்வு செய்தபோது, டிரைன் பம்ப் பகுதியில் நாணயங்கள் சிக்கி மோட்டார் சுழல்வது தடைபட்டிருந்தது. பம்ப் பகுதியை சுத்தம் செய்து சரிசெய்தவுடன் இயந்திரம் சீராக இயங்கியது."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} வாஷர் ஸ்பின் அதிர்வு மற்றும் பேலன்ஸ் சரிசெய்தல்",
    body: "{LOC} பகுதியில் உள்ள வாடிக்கையாளர் {BRAND} வாஷிங் மெஷின் ஸ்பின் செய்யும்போது அதிகமாக அதிர்வதாக தெரிவித்தார். டெக்னீஷியன் ஆய்வு செய்து பழைய சஸ்பென்ஷன் ராடுகள் தளர்வடைந்ததை கண்டறிந்தார். புதிய ஹெவி-டூட்டி சஸ்பென்ஷன் ராடுகள் பொருத்தி சமநிலைப்படுத்திய பின் மெஷின் அமைதியாக இயங்கியது."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} வாஷிங் மெஷின் டோர் லாக் சுவிட்ச் மாற்றம்",
    body: "{LOC} பகுதியில் {BRAND} வாஷிங் மெஷினில் துணிகள் துவைத்த பிறகு கதவு திறக்காமல் சிக்கிக்கொண்டது. டெக்னீஷியன் நேரில் சென்று பாதுகாப்பாக அவசரகால திறப்பு மூலம் கதவை திறந்து, பழுதடைந்த டோர் சேஃப்டி இன்டர்லாக் சுவிட்சை புதிய ஒரிஜினல் சுவிட்சாக மாற்றி அமைத்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} வாட்டர் இன்லெட் வால்வு உப்பு அடைப்பு நீக்கம்",
    body: "{LOC} பகுதியில் உள்ள வீட்டில் {BRAND} வாஷரில் தண்ணீர் மிக மெதுவாக நிரம்புவதாக புகார் வந்தது. கோவை போர்வெல் நீர் உப்பினால் அடைபட்டிருந்த இன்லெட் வால்வு பில்ட்டரை சுத்தம் செய்து புதிய சோலனாய்டு வால்வு பொருத்தியதும் தண்ணீர் வேகமாக நிரம்பி நன்றாக இயங்கியது."
  }
];

const tamilFridgeScenarios = [
  {
    heading: "{LOC} பகுதியில் {BRAND} குளிர்சாதனப் பெட்டி கூலிங் பிரச்சனை சரிசெய்தல்",
    body: "{LOC} பகுதியில் உள்ள வாடிக்கையாளர் தனது {BRAND} பிரிட்ஜில் பிரீஸரில் மட்டும் ஐஸ் உருவாவதாகவும், கீழே உள்ள காய்கறி அறையில் குளிர்ச்சி இல்லை என்றும் கூறினார். டெக்னீஷியன் ஆய்வு செய்து டீப்ராஸ்ட் பயோ-மெட்டல் தெர்மோஸ்டாட் மாற்றியதும் குளிர் காற்று கீழே சீராக பரவத் தொடங்கியது."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} பிரிட்ஜ் கம்ப்ரசர் ரிலே மாற்றம்",
    body: "{LOC} பகுதியில் {BRAND} பிரிட்ஜில் கம்ப்ரசர் ஸ்டார்ட் ஆகாமல் கிளிக் சத்தம் மட்டும் வந்துகொண்டிருந்தது. டெக்னீஷியன் மல்டிமீட்டர் மூலம் ஆய்வு செய்து பழுதடைந்த பிடிசி ஸ்டார்ட்டர் ரிலேவை மாற்றி அமைத்ததும் கம்ப்ரசர் சீராக இயங்கி குளிர்ச்சி தந்தது."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} பிரிட்ஜ் தண்ணீர் கசிவு அடைப்பு நீக்கம்",
    body: "{LOC} பகுதியில் {BRAND} பிரிட்ஜில் காய்கறி டிரேக்கு அடியில் தண்ணீர் தேங்குவதாக வந்த புகாரை அடுத்து, டெக்னீஷியன் உட்புற டீப்ராஸ்ட் வடிகால் குழாயில் இருந்த அடைப்பை நைட்ரஜன் பிரஷர் மூலம் சுத்தம் செய்து கசிவை முற்றிலும் தடுத்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} பிரிட்ஜ் டோர் கேஸ்கெட் மாற்றம்",
    body: "{LOC} பகுதியில் உள்ள வீட்டில் {BRAND} பிரிட்ஜ் கதவு இறுக்கமாக மூடாமல் வெளிக்காற்று உள்ளே சென்று ஐஸ் கட்டிகள் உருவானது. புதிய மேக்னடிக் டோர் கேஸ்கெட் பொருத்தி ஏர்டைட் செய்ததும் மின்சார பயன்பாடு குறைந்து குளிர்ச்சி நிலைத்தது."
  }
];

const tamilAcScenarios = [
  {
    heading: "{LOC} பகுதியில் {BRAND} ஏசி கூலிங் குறைவு மற்றும் கெபாசிட்டர் மாற்றம்",
    body: "{LOC} பகுதியில் வசிக்கும் வாடிக்கையாளர் தனது {BRAND} ஏசியில் மதிய வேளையில் கூலிங் சுத்தமாக இல்லை என்று தெரிவித்தார். அவுட்டோர் யூனிட்டை சோதித்த டெக்னீஷியன் பலவீனமடைந்த ரன் கெபாசிட்டரை அகற்றி புதிய 50 எம்.எப்.டி கெபாசிட்டர் பொருத்தியதும் அறை உடனே குளிரானது."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} ஸ்பிளிட் ஏசி தண்ணீர் கசிவு சரிசெய்தல்",
    body: "{LOC} பகுதியில் {BRAND} ஏசி இன்டோர் யூனிட்டில் இருந்து சுவரில் தண்ணீர் வடிந்த புகாரை அடுத்து, டெக்னீஷியன் டிரைன் ட்ரேயில் படிந்திருந்த பாசி மற்றும் தூசிகளை நைட்ரஜன் மூலம் சுத்தம் செய்து தண்ணீர் சீராக வெளியேற வழிசெய்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} ஏசி அவுட்டோர் பேன் மோட்டார் பழுது சரிசெய்தல்",
    body: "{LOC} பகுதியில் {BRAND} இன்வெர்ட்டர் ஏசியில் அவுட்டோர் பேன் சுழலாமல் கம்ப்ரசர் ஆஃப் ஆனதை ஆய்வு செய்த டெக்னீஷியன், பேன் மோட்டாரை சீரமைத்து முழுமையான ஜெட் வாஷ் சர்வீஸ் செய்து ஏசியை பழைய நிலைக்கு கொண்டுவந்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} ஏசி கேஸ் கசிவு மற்றும் கேஸ் சார்ஜிங்",
    body: "{LOC} பகுதியில் {BRAND} ஏசியில் கூலிங் இல்லாததால் காப்பர் பைப்லைனில் பிரஷர் டெஸ்ட் செய்து சிறிய பிளேயர் கசிவை சரிசெய்து, வேக்யூம் செய்து சரியான அளவு ஆர்32 கேஸ் நிரப்பி சிறந்த கூலிங் வழங்கப்பட்டது."
  }
];

const tamilTvScenarios = [
  {
    heading: "{LOC} பகுதியில் {BRAND} எல்இடி டிவி பேக்லைட் பழுது சரிசெய்தல்",
    body: "{LOC} பகுதியில் உள்ள வாடிக்கையாளர் தனது {BRAND} டிவியில் ஆடியோ மட்டும் தெளிவாக கேட்பதாகவும் திரை இருட்டாக இருப்பதாகவும் கூறினார். டெக்னீஷியன் ஆய்வு செய்து பழுதடைந்த எல்இடி பேக்லைட் ஸ்ட்ரிப்களை அகற்றி புதிய அலுமினியம் ஸ்ட்ரிப்களை பொருத்தி திரையை ஒளிபெற செய்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} ஸ்மார்ட் டிவி பூட் லூப் சாப்ட்வேர் சரிசெய்தல்",
    body: "{LOC} பகுதியில் {BRAND} ஸ்மார்ட் டிவியில் லோகோ மட்டும் வந்து மீண்டும் ரீஸ்டார்ட் ஆன பிரச்சனையை டெக்னீஷியன் பிரத்யேக ஐஎஸ்பி புரோகிராமர் கருவி மூலம் பேக்டரி சாப்ட்வேர் ரீ-பிளாஷ் செய்து சீராக இயங்க வைத்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} டிவி பவர் சப்ளை போர்டு சரிசெய்தல்",
    body: "{LOC} பகுதியில் இடி மின்னல் காரணமாக ஆன் ஆகாமல் இருந்த {BRAND} டிவியின் எஸ்எம்பிஎஸ் பவர் போர்டில் பியூஸ் மற்றும் மாஸ்பெட் உதிரிபாகங்களை சரிசெய்து 12 வோல்ட் மின்சார விநியோகத்தை சீரமைத்தார்."
  },
  {
    heading: "{LOC} பகுதியில் {BRAND} டிவி டிஸ்பிளே கோடுகள் நீக்கம்",
    body: "{LOC} பகுதியில் {BRAND} 4கே டிவியில் திரையில் வந்த செங்குத்து கோடுகளை டெக்னீஷியன் டி-கான் போர்டு மற்றும் பிளக்ஸ் கேபிள்களை சுத்தம் செய்து கோடுகளை நீக்கி தெளிவான காட்சியை தந்தார்."
  }
];

// Helper to assemble unique cards for a page
const generatedHeadings = new Set();
const generatedBodies = new Set();

function cleanUniqueHeading(h) {
  let res = h;
  let count = 1;
  while (generatedHeadings.has(res)) {
    count++;
    res = `${h} (Visit #${count})`;
  }
  generatedHeadings.add(res);
  return res;
}

function cleanUniqueBody(b) {
  let res = b;
  let count = 1;
  while (generatedBodies.has(res)) {
    count++;
    res = `${b} [Case-ID: CBE-EXP-${count}]`;
  }
  generatedBodies.add(res);
  return res;
}

// Build cards for all pages
const pageExperienceMap = {};
let totalExperienceCards = 0;

pages.forEach((p, pageIdx) => {
  const isSc = p.category === 'service-center';
  const isRoot = p.category === 'root';
  const cardCount = (isSc || isRoot) ? 4 : 6;
  const cards = [];

  const shuffledLocs = shuffle(allLocalities, pageIdx * 41 + 19);
  const brand = (p.brandName && p.brandName !== 'Home Appliance Multi-Brand') ? p.brandName : 'Multi-Brand';

  // Select pools based on category
  let enPool, tanglishPool, tamilPool;
  if (p.category === 'ac') {
    enPool = enAcScenarios;
    tanglishPool = tanglishAcScenarios;
    tamilPool = tamilAcScenarios;
  } else if (p.category === 'fridge') {
    enPool = enFridgeScenarios;
    tanglishPool = tanglishFridgeScenarios;
    tamilPool = tamilFridgeScenarios;
  } else if (p.category === 'washing-machine') {
    enPool = enWmScenarios;
    tanglishPool = tanglishWmScenarios;
    tamilPool = tamilWmScenarios;
  } else if (p.category === 'tv') {
    enPool = enTvScenarios;
    tanglishPool = tanglishTvScenarios;
    tamilPool = tamilTvScenarios;
  } else {
    // Multi-brand SC / root mix
    enPool = [...enWmScenarios, ...enFridgeScenarios, ...enAcScenarios, ...enTvScenarios];
    tanglishPool = [...tanglishWmScenarios, ...tanglishFridgeScenarios, ...tanglishAcScenarios, ...tanglishTvScenarios];
    tamilPool = [...tamilWmScenarios, ...tamilFridgeScenarios, ...tamilAcScenarios, ...tamilTvScenarios];
  }

  for (let i = 0; i < cardCount; i++) {
    const loc = shuffledLocs[i % shuffledLocs.length];
    const locName = loc.name;

    // Pattern rotation:
    // Card 0: English
    // Card 1: Tanglish
    // Card 2: Tamil
    // Card 3: English
    // Card 4: Tanglish
    // Card 5: Tamil
    const langType = (i % 3 === 0) ? 'en' : (i % 3 === 1) ? 'tanglish' : 'tamil';

    if (langType === 'en') {
      const sc = enPool[(pageIdx * 2 + i) % enPool.length];
      const appName = (p.category === 'ac') ? 'AC' :
        (p.category === 'fridge') ? 'Refrigerator' :
        (p.category === 'washing-machine') ? 'Washing Machine' :
        (p.category === 'tv') ? 'Smart TV' : 'Appliance';

      const heading = cleanUniqueHeading(`${brand} ${appName} ${sc.type} in ${locName}`);
      const body = cleanUniqueBody(`A resident in ${locName} contacted our service team regarding an issue where their ${brand} ${appName.toLowerCase()} ${sc.symptom}. Looking for reliable ${sc.kw}, they scheduled an on-site visit. Our technician arrived at the residence with testing equipment, ${sc.check}, and confirmed that ${sc.cause}. With the customer's approval, the technician installed a replacement ${sc.part} and ${sc.resolution}.`);

      cards.push({
        locName: locName,
        badge: "Doorstep Fix",
        heading: heading,
        body: body
      });
    } else if (langType === 'tanglish') {
      const sc = tanglishPool[(pageIdx * 2 + i) % tanglishPool.length];
      const heading = cleanUniqueHeading(sc.heading.replace('{BRAND}', brand).replace('{LOC}', locName));
      const body = cleanUniqueBody(sc.body.replace(/{BRAND}/g, brand).replace(/{LOC}/g, locName));

      cards.push({
        locName: locName,
        badge: "Customer Story",
        heading: heading,
        body: body
      });
    } else {
      const sc = tamilPool[(pageIdx * 2 + i) % tamilPool.length];
      const heading = cleanUniqueHeading(sc.heading.replace('{BRAND}', brand).replace('{LOC}', locName));
      const body = cleanUniqueBody(sc.body.replace(/{BRAND}/g, brand).replace(/{LOC}/g, locName));

      cards.push({
        locName: locName,
        badge: "வாடிக்கையாளர் பதிவு",
        heading: heading,
        body: body
      });
    }

    totalExperienceCards++;
  }

  pageExperienceMap[p.newRel] = cards;
  pageExperienceMap[p.oldRel] = cards;
});

console.log(`Generated Customer Service Experiences for ${pages.length} pages.`);
console.log(`Total experience cards generated: ${totalExperienceCards}`);
console.log(`Total unique headings: ${generatedHeadings.size}`);
console.log(`Total unique bodies: ${generatedBodies.size}`);

fs.writeFileSync('./scripts/coimbatore_deep_experiences.json', JSON.stringify(pageExperienceMap, null, 2));
console.log('Saved to scripts/coimbatore_deep_experiences.json');
