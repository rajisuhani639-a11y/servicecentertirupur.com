const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const fridgeDir = path.join(rootDir, 'fridge');

if (!fs.existsSync(fridgeDir)) {
  fs.mkdirSync(fridgeDir, { recursive: true });
}

const localities = require('./karur_localities.json');

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 1. Refrigerator Types (14 major types)
const fridgeTypes = [
  {
    name: "Single Door Refrigerator",
    subtitle: "Direct Cool Single Door Fridge",
    searchIntent: "Searching for <strong>Single Door Fridge Repair Near Me</strong> in Karur? We diagnose cooling failure, excess ice accumulation, and thermostat faults directly at your doorstep.",
    desc: "Single door direct cool refrigerators are widely used in Karur households for compact kitchens and daily milk, water, and vegetable storage. These units use a single outer door enclosing a freezer box inside.",
    problems: "Defrost water overflowing, ice jamming the freezer door, compressor clicking repeatedly, low cooling in bottom crisper.",
    checks: "Thermostat capillary tube sensitivity, PTC start relay resistance, door magnetic gasket seal, and evaporator defrost button.",
    parts: "Mechanical thermostat, PTC start relay, overload protector (OLP), door rubber gasket, interior bulb.",
    whenNeeded: "When ice builds up into a solid block or milk turns sour within a few hours due to inadequate cooling."
  },
  {
    name: "Double Door Refrigerator",
    subtitle: "Frost-Free Double Door Fridge",
    searchIntent: "Need reliable <strong>Double Door Refrigerator Service in Karur</strong>? Our technicians fix freezer over-icing, bottom cabin warm temperature, and fan motor failure on-site.",
    desc: "Double door frost-free refrigerators feature separate compartments for the freezer and fresh food section. A circulating fan and automatic defrost heater prevent manual ice scraping.",
    problems: "Freezer is freezing rock solid but bottom fridge compartment is warm, water dripping into the vegetable crisper, rattling fan noise.",
    checks: "Evaporator fan motor RPM, defrost bimetal thermostat, glass defrost heater continuity, and air duct damper flap.",
    parts: "Evaporator fan motor, defrost heating element, thermal fuse, defrost timer or sensor, air flow damper.",
    whenNeeded: "When ice accumulates behind the freezer back panel or the lower food chamber feels like room temperature."
  },
  {
    name: "Side-by-Side Refrigerator",
    subtitle: "Wide Dual Door Fridge",
    searchIntent: "Looking for an experienced <strong>Side-by-Side Fridge Technician in Karur</strong>? We inspect multi-inverter compressors, dual cooling loops, and electronic control boards at your residence.",
    desc: "Side-by-side refrigerators offer large storage capacity with vertical freezer on one side and fresh food compartment on the other, often equipped with external touch displays.",
    problems: "Uneven cooling between left and right compartments, ice maker not dispensing ice where fitted, touch display showing error codes, clicking relay noise.",
    checks: "Independent evaporator coils, electronic expansion valve stepping, inverter compressor driving frequency, and dual temperature sensors.",
    parts: "Inverter compressor PCB, dual fan motors, NTC thermistors, ice maker solenoid where fitted, main PCB.",
    whenNeeded: "When one compartment loses cooling while the other works, or the electronic panel beeps intermittently."
  },
  {
    name: "French Door Refrigerator",
    subtitle: "Multi-Zone French Door Fridge",
    searchIntent: "Require specialized <strong>French Door Refrigerator Repair Near Me</strong> in Karur? We resolve center mullion heater faults, drawer freezing problems, and sensor mismatch.",
    desc: "French door models combine two side-opening upper doors for fresh food with one or two pull-out freezer drawers below, offering wide shelving for large platters.",
    problems: "Condensation sweat along center door flap, bottom freezer drawer sticking with frost, vegetables freezing in deli drawer, cooling fluctuation.",
    checks: "Door mullion flap spring and internal heater, lower drawer seal alignment, multi-zone damper operation, and defrost drain trough.",
    parts: "Mullion heater, drawer glides, evaporator fan assembly, digital control board, defrost sensor.",
    whenNeeded: "When warm air leaks through the middle door gap or food in the lower drawers begins thawing."
  },
  {
    name: "Multi-Door Refrigerator",
    subtitle: "Four-Door & Modular Zone Fridge",
    searchIntent: "Doorstep <strong>Multi-Door Fridge Service in Karur</strong> for four-door and custom temperature compartment refrigerators.",
    desc: "Multi-door refrigerators feature four or more distinct door sections with independent temperature settings for vegetables, beverages, and frozen meats.",
    problems: "Custom cooling zone failing to maintain selected temperature, fan rattling inside intermediate section, electronic valve clicking.",
    checks: "Multi-port refrigerant distribution valve, compartment thermistors, and independent duct air dampers.",
    parts: "Stepper expansion valve, zone fan motors, temperature sensors, main inverter logic board.",
    whenNeeded: "When specific compartments fail to cool according to the temperature set on the control panel."
  },
  {
    name: "Triple Door Refrigerator",
    subtitle: "Three-Tier Active Fresh Fridge",
    searchIntent: "Searching for <strong>Triple Door Refrigerator Repair in Karur</strong>? We service separate vegetable drawer cooling, fan ducting, and frost issues.",
    desc: "Triple door refrigerators provide a separate dedicated bottom drawer for fresh fruits and vegetables to prevent odor mixing and maintain high humidity.",
    problems: "Vegetable crisper drawer too cold or freezing leafy greens, middle compartment not cooling, frost buildup along drawer rails.",
    checks: "Bottom duct damper control, air circulation passages, and vegetable zone moisture seal.",
    parts: "Manual/electronic air damper, drawer slide rails, middle cabin air deflector, defrost heater.",
    whenNeeded: "When tomatoes or greens freeze solid in the bottom vegetable compartment."
  },
  {
    name: "Bottom Freezer Refrigerator",
    subtitle: "Eye-Level Fresh Food Fridge",
    searchIntent: "Looking for <strong>Bottom Freezer Fridge Repair Near Me</strong>? We check bottom evaporator drainage, fan motors, and upper cabin cooling.",
    desc: "Bottom freezer designs place the most frequently used fresh food compartment at eye level, with the heavy freezer section positioned in a lower pull-out drawer.",
    problems: "Water pooling beneath the freezer drawer, upper fresh cabin warming up, ice forming under the bottom storage basket.",
    checks: "Drain tube heater, freezer drawer gasket seating, evaporator coil airflow, and drain trough clearance.",
    parts: "Drain pan heater, evaporator fan motor, defrost bi-metal, drawer magnetic seal.",
    whenNeeded: "When sheet ice builds up on the floor of the freezer drawer or water leaks onto the kitchen floor."
  },
  {
    name: "Top Freezer Refrigerator",
    subtitle: "Classic Two-Door Refrigerator",
    searchIntent: "Fast <strong>Top Freezer Refrigerator Service in Karur</strong> for classic two-door models experiencing cooling loss or strange vibration.",
    desc: "The traditional top freezer layout uses a top mounted freezer compartment that gravity-feeds chilled air into the lower fresh food compartment via an adjustable damper.",
    problems: "Air vent between freezer and fridge blocked with ice, dial temperature control not adjusting cooling, loud humming from top cabinet.",
    checks: "Air channel vent clearance, mechanical damper dial flap, fan motor bearing wear, and defrost timer cycle.",
    parts: "Defrost timer, bimetal thermostat, evaporator fan blade, air channel damper assembly.",
    whenNeeded: "When the freezer stays frosty but cold air stops blowing down into the main refrigerator section."
  },
  {
    name: "Convertible Refrigerator",
    subtitle: "Multi-Mode Convertible Fridge",
    searchIntent: "Get expert <strong>Convertible Fridge Repair in Karur</strong> when freezer-to-fridge conversion mode fails to change cooling levels.",
    desc: "Convertible refrigerators allow users to switch the freezer compartment into a regular fridge section or extra cooling space through inverter motor and sensor controls.",
    problems: "Freezer section refuses to switch temperature mode, panel buttons unresponsive, temperature stuck on deep freeze.",
    checks: "Mode selection PCB signals, inverter compressor variable frequency output, and compartment NTC thermistor calibration.",
    parts: "Convertible mode touch PCB, inverter controller board, electronic air damper, dual thermistors.",
    whenNeeded: "When activating seasonal or party mode on the display fails to alter the compartment cooling level."
  },
  {
    name: "Inverter Refrigerator",
    subtitle: "Variable Speed BLDC Compressor Fridge",
    searchIntent: "Need certified <strong>Inverter Refrigerator Repair Near Me</strong> in Karur? We diagnose inverter PCB flashing codes, compressor start failure, and power surge faults.",
    desc: "Inverter refrigerators utilize a brushless DC (BLDC) compressor that adjusts its operational speed continuously rather than cycling strictly on and off, reducing electricity consumption.",
    problems: "Inverter compressor not turning on, inverter PCB LED blinking error codes, cooling drops after voltage fluctuations, unusual high-pitch whine.",
    checks: "DC bus voltage from inverter board (280V–320V DC), compressor three-phase winding resistance (U-V-W balance), and IPM driver module.",
    parts: "Inverter driver PCB, BLDC compressor, noise filter board, IPM power module.",
    whenNeeded: "When the television or lights flicker after power cuts and the refrigerator stops cooling with an unstarted compressor."
  },
  {
    name: "Smart Refrigerator",
    subtitle: "Wi-Fi & Digital Interface Fridge",
    searchIntent: "Doorstep <strong>Smart Refrigerator Service in Karur</strong> for touch screen glitches, Wi-Fi pairing drops, and sensor diagnosis.",
    desc: "Smart refrigerators feature integrated Wi-Fi connectivity, electronic touch displays, internal door sensors, and app-based temperature monitoring.",
    problems: "Display panel freezing on brand logo, door open alarm sounding continuously even when doors are closed, Wi-Fi disconnected.",
    checks: "Door reed switches, display communication ribbon cable, power supply rail to Wi-Fi module, and motherboard firmware.",
    parts: "Display control board, door magnetic reed switch, internal temperature sensors, power supply board.",
    whenNeeded: "When the door alarm beeps continuously or the touch interface does not respond to finger taps."
  },
  {
    name: "Direct Cool Refrigerator",
    subtitle: "Natural Convection Economical Fridge",
    searchIntent: "Fast <strong>Direct Cool Fridge Repair in Karur</strong> for single door refrigerators with frost buildup, cooling loss, or thermostat faults.",
    desc: "Direct Cool refrigerators work on natural convection airflow without an internal fan. The cooling coil is directly exposed inside the freezer box and requires manual periodic defrosting.",
    problems: "Thick layer of frost choking freezer space, cooling drops in lower shelf, water leaking from defrost tray behind unit.",
    checks: "Thermostat temperature cutoff point, door gasket seal integrity, capillary tube flow, and compressor relay.",
    parts: "Thermostat switch, defrost push button, PTC relay, overload protector, water collection tray.",
    whenNeeded: "When pushing the defrost button does not clear the ice or the compressor fails to start with a clicking sound."
  },
  {
    name: "Frost Free Refrigerator",
    subtitle: "Automatic Defrost Cycle Fridge",
    searchIntent: "Expert <strong>Frost Free Refrigerator Service in Karur</strong> for automatic defrost cycle failure, blocked drain tubes, and fan motor issues.",
    desc: "Frost-free refrigerators circulate cooled air using a motorized fan and melt frost automatically using an electric heater and timer/sensor cycle, keeping shelves clean and frost-free.",
    problems: "Freezer coils coated in thick frost, fan motor blade hitting accumulated ice, drain pipe choked causing water puddles on bottom shelf.",
    checks: "Defrost heater resistance (ohms), bimetal switch continuity when frozen, defrost timer motor rotation, and drain hole clearance.",
    parts: "Defrost glass/metal heater, bimetal defrost thermostat, defrost timer / main PCB, drain pipe heater.",
    whenNeeded: "When fan makes a buzzing sound against ice or water collects underneath the vegetable tray."
  },
  {
    name: "Mini Refrigerator / Bar Refrigerator",
    subtitle: "Compact Single Door Fridge",
    searchIntent: "Affordable <strong>Mini Fridge Repair Near Me</strong> in Karur for compact single door bar fridges in offices, bedrooms, and dormitories.",
    desc: "Mini bar refrigerators provide compact cooling for beverages, snacks, medicines, and water in compact office cabins, bedrooms, and small spaces.",
    problems: "Compressor overheating and tripping, cooling is inadequate for beverages, door gasket not sealing tightly.",
    checks: "Compressor thermal cut-off, thermostat dial setting, condenser heat dissipation clearance, and door seal magnet strength.",
    parts: "Mini compressor relay, small capillary filter, mechanical thermostat, door rubber seal.",
    whenNeeded: "When drinks remain at room temperature or the compact compressor gets hot to touch and shuts down."
  }
];

// 2. Common Refrigerator Problems (23 Problem Cards)
const commonProblems = [
  {
    title: "Refrigerator Not Cooling at All",
    badge: "No Cooling",
    label1: "Customer Situation",
    val1: "Both freezer and fresh food compartments stay warm, interior light turns on, but foods and drinks remain at room temperature.",
    label2: "Likely Technical Cause",
    val2: "Faulty compressor start relay, blown overload protector, defective thermostat, low refrigerant gas from minor leakage, or dead inverter PCB.",
    label3: "What Technician Checks",
    val3: "Tests compressor winding resistance with a multimeter, checks PTC relay and OLP continuity, measures refrigerant gas pressure with manifold gauge, and validates thermostat."
  },
  {
    title: "Fridge Cooling is Low / Insufficient",
    badge: "Low Cooling",
    label1: "Observed Fault",
    val1: "Freezer makes mild cold air but items do not freeze, and vegetables in the lower section spoil quickly in Karur's afternoon heat.",
    label2: "Likely Technical Cause",
    val2: "Dust coated condenser coils, loose door rubber gasket leaking cold air, failing evaporator fan motor, or clogged capillary tube.",
    label3: "What Technician Checks",
    val3: "Inspects condenser coil airflow, tests magnetic seal suction using paper slip test, checks evaporator fan RPM, and measures refrigerant suction line temperature."
  },
  {
    title: "Freezer Not Freezing Ice",
    badge: "Freezer Fault",
    label1: "Customer Situation",
    val1: "Ice cubes stay as liquid water, ice cream melts in the freezer, while the lower refrigerator compartment seems slightly cool.",
    label2: "Likely Technical Cause",
    val2: "Frost buildup blocking evaporator air circulation, defrost heater failure, sluggish evaporator fan motor, or restricted refrigerant flow.",
    label3: "What Technician Checks",
    val3: "Removes freezer back panel to check frost pattern on evaporator coils, tests defrost bimetal switch and heating element, and inspects fan motor operation."
  },
  {
    title: "Fridge Overcooling / Freezing Vegetables",
    badge: "Overcooling",
    label1: "Observed Fault",
    val1: "Water bottles turn to solid ice in the lower fridge section, tomatoes and greens freeze crisp and burst, and eggs crack from extreme cold.",
    label2: "Likely Technical Cause",
    val2: "Defective thermostat unable to cut off power, stuck air damper flap allowing maximum cold air into lower compartment, or faulty temperature sensor.",
    label3: "What Technician Checks",
    val3: "Tests thermostat contact points in ice water, verifies air damper flap opening angle, and checks NTC temperature sensor resistance curve against manufacturer table."
  },
  {
    title: "Excess Ice & Frost Build-Up in Freezer",
    badge: "Frost Buildup",
    label1: "Customer Situation",
    val1: "Thick blanket of white ice coats the freezer walls, blocking the air vents and preventing freezer baskets from opening smoothly.",
    label2: "Likely Technical Cause",
    val2: "Defective defrost timer stuck in cooling mode, open defrost heater, faulty defrost sensor/bimetal, or worn door gasket letting warm humid air enter.",
    label3: "What Technician Checks",
    val3: "Manually advances defrost timer to test heater engagement, tests defrost heater resistance with multimeter, and inspects door seal contact along all four corners."
  },
  {
    title: "Water Leaking on Kitchen Floor or Under Crisper",
    badge: "Water Leakage",
    label1: "Observed Fault",
    val1: "Water pools underneath the vegetable crisper drawer or leaks onto the kitchen tiles from beneath the refrigerator every morning.",
    label2: "Likely Technical Cause",
    val2: "Clogged or frozen defrost drain hole, cracked drain pan above compressor, displaced drain tube, or excessive humidity from bad door seal.",
    label3: "What Technician Checks",
    val3: "Clears ice and debris from the defrost drain trough using warm water flushing, inspects drain pan for hairline fractures, and aligns rear drain tube."
  },
  {
    title: "Compressor Not Starting / Clicking Relay Noise",
    badge: "Compressor Issue",
    label1: "Customer Situation",
    val1: "A sharp metallic clicking sound is heard from the back of the fridge every few minutes, but the motor hum never begins and cooling is absent.",
    label2: "Likely Technical Cause",
    val2: "Burnt PTC start relay, tripped overload protector due to high starting current, failed start capacitor where fitted, or locked compressor rotor.",
    label3: "What Technician Checks",
    val3: "Inspects PTC relay for burnt ceramic disc, checks motor terminal resistance across Common-Start-Run pins, tests supply voltage, and tests capacitor."
  },
  {
    title: "Compressor Running Continuously Without Cut-Off",
    badge: "Continuous Running",
    label1: "Observed Fault",
    val1: "Refrigerator motor hums nonstop day and night without ever switching off, cabinet sides feel extremely hot, and electricity consumption spikes.",
    label2: "Likely Technical Cause",
    val2: "Thermostat sensing bulb detached or faulty, low gas level forcing compressor to run continuously to achieve cutoff temperature, or severe door gasket leakage.",
    label3: "What Technician Checks",
    val3: "Measures cooling temperature inside compartment, checks thermostat cutoff point, inspects system gas pressure for slow leak, and checks condenser cleanliness."
  },
  {
    title: "Refrigerator Making Loud Humming or Rattling Noise",
    badge: "Unusual Noise",
    label1: "Customer Situation",
    val1: "Vibration or high-pitched squeaking noise originates from the back or inside the freezer, which stops when the freezer door is opened.",
    label2: "Likely Technical Cause",
    val2: "Evaporator fan blade hitting frost accumulation, dry fan motor bearings, loose compressor mounting rubber grommets, or vibrating copper tubing.",
    label3: "What Technician Checks",
    val3: "Inspects fan blade clearance from evaporator ice, lubricates/replaces fan motor, tightens compressor mounting bolts, and secures vibrating refrigeration tubes."
  },
  {
    title: "Evaporator or Condenser Fan Motor Not Working",
    badge: "Fan Motor Fault",
    label1: "Observed Fault",
    val1: "Compressor runs but air does not circulate through the vents, or bottom condenser area stays suffocatingly hot with no airflow.",
    label2: "Likely Technical Cause",
    val2: "Burnt fan motor winding, jammed fan shaft from hair/lint, broken plastic fan blade, or no DC/AC voltage output from main control board.",
    label3: "What Technician Checks",
    val3: "Measures voltage supplied to fan connector pins, checks motor coil resistance, rotates fan by hand to verify smooth bearing action, and tests control board relays."
  },
  {
    title: "Mechanical Thermostat Not Regulating Temperature",
    badge: "Thermostat Issue",
    label1: "Customer Situation",
    val1: "Turning the cooling knob from Min to Max produces no change in cooling, or compressor stays permanently off until the knob is tapped.",
    label2: "Likely Technical Cause",
    val2: "Loss of gas charge inside thermostat capillary sensor tube, pitted internal electrical switch contacts, or mechanical spring fatigue.",
    label3: "What Technician Checks",
    val3: "Tests continuity across thermostat terminals at various dial positions, checks capillary tube for kinks or cracks, and tests replacement thermostat."
  },
  {
    title: "Digital Temperature Sensor (NTC Thermistor) Fault",
    badge: "Sensor Error",
    label1: "Observed Fault",
    val1: "Digital display shows error code (e.g., E1, F1, 22E), or inverter refrigerator runs erratically due to false temperature feedback.",
    label2: "Likely Technical Cause",
    val2: "NTC thermistor value drifted due to moisture ingress, broken sensor wiring inside cabinet foam, or corroded PCB connector terminals.",
    label3: "What Technician Checks",
    val3: "Measures thermistor resistance at room temperature and in ice water against standard resistance chart, and checks wire continuity to PCB."
  },
  {
    title: "Defrost System Failure (Heater / Bi-Metal / Timer)",
    badge: "Defrost Problem",
    label1: "Customer Situation",
    val1: "Frost-free refrigerator gradually loses cooling over 3–5 days, while air vents inside the freezer frost up completely.",
    label2: "Likely Technical Cause",
    val2: "Burnt radiant defrost heater element, open thermal fuse, defective defrost bimetal thermostat, or stuck electromechanical defrost timer.",
    label3: "What Technician Checks",
    val3: "Tests heater element for electrical continuity (ohms), tests bimetal switch when frozen below zero degrees, and checks timer motor rotation."
  },
  {
    title: "Door Gasket Torn, Loose, or Not Sealing Tight",
    badge: "Door Seal Issue",
    label1: "Observed Fault",
    val1: "Door pops open easily without magnetic suction, moisture droplets form along door frame, and warm air enters causing rapid ice buildup.",
    label2: "Likely Technical Cause",
    val2: "Hardened rubber from age and food grease, torn magnetic gasket strip, warped door panel, or misaligned hinge pins.",
    label3: "What Technician Checks",
    val3: "Performs paper dollar bill test around entire perimeter, treats minor stiffness with heat reshaping, or installs a genuine magnetic replacement gasket."
  },
  {
    title: "Refrigerator Door Not Closing Properly / Sagging",
    badge: "Hinge Problem",
    label1: "Customer Situation",
    val1: "Refrigerator door sags downward, rubs against bottom frame when closed, or requires lifting by hand to latch securely.",
    label2: "Likely Technical Cause",
    val2: "Worn plastic hinge bushings, bent metal hinge bracket from heavy bottle storage in door racks, or uneven refrigerator leveling feet.",
    label3: "What Technician Checks",
    val3: "Adjusts cabinet leveling with spirit level, inspects hinge pins and nylon washers, tightens mounting screws, and realigns door position."
  },
  {
    title: "Interior Cabinet Light / LED Module Not Working",
    badge: "Lighting Fault",
    label1: "Observed Fault",
    val1: "Inside of the refrigerator remains completely dark when opening the door, making it hard to find items at night.",
    label2: "Likely Technical Cause",
    val2: "Burnt incandescent bulb, defective LED driver board, stuck door push switch, or broken wiring along door frame.",
    label3: "What Technician Checks",
    val3: "Tests voltage at light socket, checks door switch mechanical plunger action and contact continuity, and replaces burnt LED driver module."
  },
  {
    title: "Digital Display / Touch Panel Not Responding",
    badge: "Display Issue",
    label1: "Customer Situation",
    val1: "External door display shows garbled characters, buttons do not beep or register touches, or temperature digits are partially dim.",
    label2: "Likely Technical Cause",
    val2: "Microcontroller lockup on display PCB, cracked flat flex cable routed through top door hinge, or power supply ripple from main board.",
    label3: "What Technician Checks",
    val3: "Inspects hinge wire harness for pinched or broken wires, checks 5V/12V DC power lines to display board, and resets display control unit."
  },
  {
    title: "Main Control Board / Inverter PCB Malfunction",
    badge: "PCB Issue",
    label1: "Observed Fault",
    val1: "Refrigerator is completely unresponsive or compressor and fans pulse intermittently following power surge or lightning.",
    label2: "Likely Technical Cause",
    val2: "Burnt SMPS transformer, blown MOV surge suppressor, shorted inverter IPM module, or corrupted microcontroller firmware.",
    label3: "What Technician Checks",
    val3: "Inspects PCB circuit traces for burn marks, tests power supply DC rails (12V, 5V, 3.3V), and repairs components or replaces damaged PCB."
  },
  {
    title: "PTC Start Relay & Overload Protector Tripping",
    badge: "Relay Tripping",
    label1: "Customer Situation",
    val1: "Compressor attempts to start, hums for 3 seconds, clicks off with a loud snap, and repeats this cycle every two minutes.",
    label2: "Likely Technical Cause",
    val2: "Broken internal PTC ceramic disc, weakened bimetal disc inside overload protector tripping on normal start current, or high head pressure.",
    label3: "What Technician Checks",
    val3: "Shakes PTC relay to listen for shattered ceramic rattle, measures resistance with ohmmeter, and tests with authentic replacement start combination."
  },
  {
    title: "Drain Pipe Choked & Foul Smell After Water Leakage",
    badge: "Drain Blockage",
    label1: "Observed Fault",
    val1: "Stagnant foul odor inside fresh food cabin, water collects under crisper tray, and slime accumulates in rear drain collection tray.",
    label2: "Likely Technical Cause",
    val2: "Bacterial algae and food particles blocking drain funnel, duckbill valve stuck shut with debris, or stagnant water in compressor pan.",
    label3: "What Technician Checks",
    val3: "Cleans drain hole with flexible cleaning snake, flushes with sanitizing solution, cleans duckbill valve, and disinfects compressor drain pan."
  },
  {
    title: "Automatic Ice Maker Not Producing Ice (Where Fitted)",
    badge: "Ice Maker Fault",
    label1: "Customer Situation",
    val1: "In side-by-side or french door models with ice makers, the ice tray remains empty or makes undersized crushed ice.",
    label2: "Likely Technical Cause",
    val2: "Water inlet solenoid valve clogged, frozen water fill tube, defective ice mold thermostat, or jammed ejector arm motor.",
    label3: "What Technician Checks",
    val3: "Tests water inlet solenoid coil resistance, inspects fill tube for ice block, checks freezer temperature below -15°C, and tests ejector cycle."
  },
  {
    title: "Water Dispenser Dripping or Not Dispensing (Where Fitted)",
    badge: "Dispenser Issue",
    label1: "Observed Fault",
    val1: "Pressing the glass against dispenser lever produces no water, or dispenser drips continuously onto the door catch tray.",
    label2: "Likely Technical Cause",
    val2: "Dual water inlet valve failure, air trapped in water filter line, frozen water reservoir tank inside crisper, or microswitch failure.",
    label3: "What Technician Checks",
    val3: "Tests dispenser lever microswitch continuity, inspects water line pressure, tests solenoid valve, and inspects water tank for freezing."
  },
  {
    title: "Electrical Shock or Burning Smell from Cabinet",
    badge: "Urgent Safety",
    label1: "Customer Situation",
    val1: "Mild tingling electrical shock felt on metal door handle, or sharp plastic burning odor noticed near rear bottom compartment.",
    label2: "Likely Technical Cause",
    val2: "Improper home earthing socket, pinched wire touching metal cabinet, shorted compressor terminal seal, or burnt relay/PCB capacitor.",
    label3: "What Technician Checks",
    val3: "Immediately instructs customer to disconnect plug. Tests earth leakage with insulation tester (megger), inspects compressor pin insulation, and rewires damaged cables safely."
  }
];

// 3. Refrigerator Parts (27 Parts)
const fridgeParts = [
  {
    name: "Hermetic Refrigerator Compressor",
    badge: "Core Motor",
    desc: "The heart of the refrigeration cycle, compressing gas refrigerant and pumping it through the closed loop. Available in standard reciprocating and variable-speed BLDC inverter models depending on refrigerator specification.",
    symptoms: "No cooling at all, clicking sound from rear panel, continuous motor running without cutoff, or circuit tripping."
  },
  {
    name: "Mechanical Capillary Thermostat",
    badge: "Temperature Control",
    desc: "Controls cooling temperature in direct cool and standard top-freezer models by sensing evaporator temperature via a gas-filled capillary tube and cycling compressor power.",
    symptoms: "Compressor not turning on, refrigerator overcooling and freezing vegetables, or failure to restart after defrosting."
  },
  {
    name: "NTC Digital Temperature Sensors",
    badge: "Electronic Sensor",
    desc: "Precision negative temperature coefficient thermistors installed in freezer and fresh food compartments to feed exact temperature readings to the main PCB.",
    symptoms: "Error codes on door panel, erratic cooling levels, compressor running too fast, or cooling fluctuation between zones."
  },
  {
    name: "Defrost Bi-Metal Thermostat Switch",
    badge: "Defrost Safety",
    desc: "Clips onto the evaporator tubing in frost-free refrigerators, closing electrical contacts only when freezing temperatures are reached to permit defrost heater activation.",
    symptoms: "Freezer coils coated with thick ice, reduced airflow to lower cabin, or defrost heater staying on too long."
  },
  {
    name: "Radiant Defrost Heater Element",
    badge: "Heating Element",
    desc: "Encased quartz glass tube or aluminum sheath heating element located beneath the evaporator coil to melt frost accumulation automatically during defrost cycles.",
    symptoms: "Thick ice accumulation blocking evaporator fan, warm lower compartment, or cold air completely blocked."
  },
  {
    name: "Electromechanical Defrost Timer",
    badge: "Timer Module",
    desc: "Clockwork motor and cam switch used in non-inverter frost-free models to cycle between 6–8 hours of cooling and 20–30 minutes of automatic defrosting (where fitted).",
    symptoms: "Fridge stuck permanently in defrost mode (cooling never restarts) or stuck in cooling mode (never defrosts)."
  },
  {
    name: "PTC Ceramic Start Relay",
    badge: "Starting Device",
    desc: "Solid-state positive temperature coefficient ceramic disc that provides high initial current to the compressor start winding and quickly cuts out once the motor spins.",
    symptoms: "Compressor clicks every few minutes without starting, humming for 3 seconds then snapping off, rear cabinet stays silent."
  },
  {
    name: "Compressor Overload Protector (OLP)",
    badge: "Thermal Protection",
    desc: "Bi-metallic safety switch clamped to compressor terminal that automatically disconnects power if the motor draws excessive current or overheats.",
    symptoms: "Repeated clicking sound from bottom rear, compressor shutting down within seconds of startup."
  },
  {
    name: "Evaporator Air Circulation Fan Motor",
    badge: "Air Circulator",
    desc: "High-RPM brushless motor and fan blade inside freezer compartment that pushes cold air across evaporator fins into both freezer and refrigerator chambers.",
    symptoms: "Rattling noise stopping when door opens, freezer cold but fresh food section warm, no breeze from air vents."
  },
  {
    name: "Condenser Fan Motor Assembly",
    badge: "Cooling Fan",
    desc: "Fan motor mounted next to the compressor in frost-free and side-by-side models to force room air over the hot condenser coil and compressor casing (where applicable).",
    symptoms: "Compressor overheating and cutting off, cabinet sides feeling burning hot, low cooling during hot afternoons."
  },
  {
    name: "External & Internal Condenser Coils",
    badge: "Heat Exchanger",
    desc: "Network of copper or steel tubing dissipating heat extracted from inside the refrigerator into surrounding ambient room air.",
    symptoms: "Coils choked with thick dust blanket, loss of cooling efficiency, compressor operating under severe high head pressure."
  },
  {
    name: "Aluminum Evaporator Cooling Coils",
    badge: "Cooling Core",
    desc: "Serpentine cooling coil where liquid refrigerant evaporates into gas, absorbing heat directly from the freezer and cabinet compartment.",
    symptoms: "Hissing gas leak sound from coil puncture (often from sharp knife scraping in direct cool models), zero cooling."
  },
  {
    name: "Magnetic Rubber Door Gasket Seal",
    badge: "Airtight Seal",
    desc: "Flexible rubber gasket embedded with magnetic strips running along the inner door edge, creating an airtight thermal seal when the door closes.",
    symptoms: "Door opening too easily, moisture beads along door frame, rapid frost buildup, compressor running continuously."
  },
  {
    name: "Compressor Drain Pan & Water Tray",
    badge: "Evaporation Pan",
    desc: "Heavy-duty plastic tray mounted directly on top of or beside the warm compressor to collect melted defrost water and allow it to evaporate naturally.",
    symptoms: "Cracked tray leaking water onto kitchen floor, unpleasant stagnant odors from accumulated algae."
  },
  {
    name: "Defrost Drain Tube & Chute",
    badge: "Drainage",
    desc: "Internal conduit channeling melted defrost water from the evaporator drip trough down into the external collection pan.",
    symptoms: "Water accumulating under vegetable crisper, sheet of solid ice forming across freezer floor."
  },
  {
    name: "Copper Filter Drier",
    badge: "Gas Filter",
    desc: "Copper canister filled with molecular sieve desiccant beads, filtering out microscopic metal particles and absorbing moisture from the sealed refrigerant loop.",
    symptoms: "Partial or complete cooling blockage, capillary tube freezing up at the inlet, high discharge pressure."
  },
  {
    name: "Motor Run & Start Capacitor",
    badge: "Electrical Booster",
    desc: "High-microfarad electrical capacitor assisting compressor motor startup and improving motor operational power factor (where fitted).",
    symptoms: "Compressor humming under load but failing to break inertia, tripping home circuit breakers."
  },
  {
    name: "Main Electronic Control PCB",
    badge: "System Brain",
    desc: "Microprocessor motherboard managing sensor inputs, compressor cycling, fan speeds, defrost heater timing, and error code diagnostics.",
    symptoms: "Complete dead unit, erratic cooling cycles, flashing error codes, fans running while compressor remains dead."
  },
  {
    name: "Inverter Compressor Driver PCB",
    badge: "Inverter Drive",
    desc: "High-voltage solid-state power inverter (IPM) board converting AC household power into variable-frequency 3-phase DC power to modulate BLDC compressor speeds (where applicable).",
    symptoms: "Diagnostic LED blinking error sequence on board, compressor not starting after power cut, high-voltage fuse blown."
  },
  {
    name: "Digital Display & Touch Board",
    badge: "User Interface",
    desc: "Front door-mounted touch interface displaying compartment temperatures, holiday modes, and quick freeze settings (where fitted).",
    symptoms: "Unresponsive touch keys, flickering temperature numbers, continuous beeping."
  },
  {
    name: "Automatic Ice Maker Assembly",
    badge: "Ice Maker",
    desc: "Motorized mechanism featuring an ice mold, heating element, ejector motor, and fill sensor to produce and harvest ice automatically (where fitted).",
    symptoms: "Ice not dropping into bucket, water overflowing into ice tray, broken plastic ejector gears."
  },
  {
    name: "Water Inlet Solenoid Valve",
    badge: "Water Control",
    desc: "Dual or single coil electromagnetic valve controlling water intake for the automatic ice maker and front door water dispenser (where fitted).",
    symptoms: "Water not dispensing, water dispenser dripping continuously, ice maker not filling with water."
  },
  {
    name: "Water Dispenser Actuator & Microswitch",
    badge: "Dispenser Switch",
    desc: "Mechanical push paddle and electric microswitch triggering the water valve when a glass is pressed against the dispenser cradle (where fitted).",
    symptoms: "No water flow when lever pressed, dispenser stuck in open position flooding catch tray."
  },
  {
    name: "Cabinet Door Push Switch",
    badge: "Door Sensor",
    desc: "Spring-loaded mechanical or magnetic switch that shuts off the evaporator fan and turns on the interior light when the refrigerator door is opened.",
    symptoms: "Light staying on with door closed (heating the compartment), or evaporator fan failing to turn back on."
  },
  {
    name: "Interior LED Light Module",
    badge: "Lighting",
    desc: "Moisture-sealed high-lumens LED illumination array providing bright, low-heat visibility throughout fresh food and freezer cabins.",
    symptoms: "Interior dark, flickering LED diodes, dim lighting."
  },
  {
    name: "Defrost Thermal Cut-Off Fuse",
    badge: "Safety Fuse",
    desc: "Encapsulated thermal fuse wired in series with the defrost heater, designed to blow permanently if heater temperature exceeds 72°C to prevent plastic liner melting.",
    symptoms: "Open circuit disabling defrost heater, resulting in massive evaporator frost accumulation."
  },
  {
    name: "Adjustable Cabinet Leveling Legs & Hinges",
    badge: "Hardware",
    desc: "Threaded leveling glides and heavy-duty steel door hinges maintaining proper cabinet tilt to ensure doors swing closed naturally by gravity.",
    symptoms: "Door sagging, uneven door gap, refrigerator rocking on floor tiles, magnetic seal leaking air."
  }
];

// 4. Locality Content Generator (Divided into 4 Quadrants as requested)
function generateLocalitySections() {
  const eastLocs = ["Pasupathipalayam", "Vengamedu", "Inam Karur", "Vennaimalai", "Sengunthapuram", "Sukkaliyur", "Govindapuram", "Ponmandurai", "Paraipatti", "LGB Nagar", "Min Nagar", "Kamala Nagar", "EB Colony", "Kaveri Nagar", "Pugalur Road"];
  const westLocs = ["Kovai Road", "Sanjeevi Nagar", "Chinna Andankovil", "Chettipalayam", "Andankovil West", "Aravakurichi", "Akshaya Nagar", "Thiruvalluvar Nagar", "Annamalaiyar Colony", "Rathinavel Nagar", "Kaveri Layout", "Srinivasa Nagar", "Kannan Nagar", "Vaigai Nagar", "Meenakshi Nagar"];
  const northLocs = ["Mayanur", "Vangal", "Krishnarayapuram", "Koyampalli", "Punjai Thottakurichi", "Nagalpatti", "Thanthoni", "Thamaraipadi", "Alamarathupatti", "Krishnarayapuram Road", "Somur", "Kujiliamparai", "Aravakurichi Road", "Mariyammal Nagar", "Soundararaja Nagar"];
  const southLocs = ["Karur Town", "Kagithapuramam", "Thanthonimalai", "Velayuthampalayam", "Puliyur", "Vaiyapuri Nagar", "Sanapiratti", "Thorakkalpatti", "Periya Andankovil", "Salai Road", "Railway Feeder Road", "Nanthavanapatti", "Amaravathi basin Foot Road", "Trichy Road", "Salem Bypass Road"];

  function renderGrid(locArray, areaName) {
    return locArray.map((locName, idx) => {
      let serviceTitle, descText;
      const mod = idx % 4;
      if (mod === 0) {
        serviceTitle = `Refrigerator Repair in ${locName}`;
        descText = `Doorstep single & double door fridge troubleshooting across ${locName}, Karur.`;
      } else if (mod === 1) {
        serviceTitle = `Fridge Repair Near Me in ${locName}`;
        descText = `Technician inspection for low cooling, water leakage, and thermostat issues in ${locName}.`;
      } else if (mod === 2) {
        serviceTitle = `Refrigerator Service in ${locName}`;
        descText = `Compressor relay, gas checking, and defrost system servicing for households in ${locName}.`;
      } else {
        serviceTitle = `Fridge Technician in ${locName}, Karur`;
        descText = `Doorstep repair for inverter and frost-free refrigerators around ${locName}.`;
      }
      return `        <div class="locality-card">
          <div class="locality-name">📍 ${escapeHtml(locName)}</div>
          <div class="locality-service">${escapeHtml(serviceTitle)}</div>
          <p class="locality-text">${escapeHtml(descText)}</p>
        </div>`;
    }).join('\n');
  }

  return `
      <!-- East Karur -->
      <div style="margin-bottom: 2.5rem;">
        <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--accent-blue);">
          Refrigerator Repair in East Karur
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-color); margin-bottom: 1rem;">
          Doorstep refrigerator repair coverage across Pasupathipalayam, Vengamedu, Inam Karur, Vennaimalai, and eastern residential developments:
        </p>
        <div class="localities-grid-expanded">
${renderGrid(eastLocs, 'East Karur')}
        </div>
      </div>

      <!-- West Karur -->
      <div style="margin-bottom: 2.5rem;">
        <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--accent-blue);">
          Refrigerator Repair in West Karur
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-color); margin-bottom: 1rem;">
          Technician visits across Kovai Road, Chinna Andankovil, Sanjeevi Nagar, Aravakurichi highway, and western layouts:
        </p>
        <div class="localities-grid-expanded">
${renderGrid(westLocs, 'West Karur')}
        </div>
      </div>

      <!-- North Karur -->
      <div style="margin-bottom: 2.5rem;">
        <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--accent-blue);">
          Refrigerator Repair in North Karur
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-color); margin-bottom: 1rem;">
          Reliable home service across Vangal, Mayanur corridor, Krishnarayapuram, Thamaraipadi, and northern colonies:
        </p>
        <div class="localities-grid-expanded">
${renderGrid(northLocs, 'North Karur')}
        </div>
      </div>

      <!-- South Karur -->
      <div>
        <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--accent-blue);">
          Refrigerator Repair in South Karur
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-color); margin-bottom: 1rem;">
          Local doorstep visits in Karur Town Center, Kagithapuramam, Thanthonimalai, Velayuthampalayam Road, Puliyur, and Vaiyapuri Nagar:
        </p>
        <div class="localities-grid-expanded">
${renderGrid(southLocs, 'South Karur')}
        </div>
      </div>`;
}

// 5. Build Complete Fridge HTML Page
function buildFridgePageHtml() {
  const canonicalUrl = 'https://servicecenterkarur.com/fridge/refrigerator-repair-service-in-karur.html';
  const whatsappUrl = 'https://wa.me/919442054321?text=Hello%2C%20I%20need%20refrigerator%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details.';

  // Types HTML
  const typesHtml = fridgeTypes.map(t => `
        <div class="type-card">
          <h3>${escapeHtml(t.name)}</h3>
          <span style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.5rem;">${escapeHtml(t.subtitle)}</span>
          <p>${escapeHtml(t.desc)}</p>
          <div style="background: rgba(30, 58, 138, 0.05); border-left: 3px solid var(--accent-blue); padding: 0.65rem 0.85rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.88rem; color: var(--primary-color); line-height: 1.5;">
            ${t.searchIntent}
          </div>
          <p style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">Common repair problems:</p>
          <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(t.problems)}</p>
          <p style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">What technician checks:</p>
          <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(t.checks)}</p>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.45;">
            <strong>Parts involved:</strong> ${escapeHtml(t.parts)}
          </p>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.45;">
            <strong>When repair needed:</strong> ${escapeHtml(t.whenNeeded)}
          </p>
        </div>`).join('\n');

  // Problems HTML
  const problemsHtml = commonProblems.map((p, idx) => `
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-badge">${escapeHtml(p.badge)}</span>
            <span class="problem-number">Fault #${idx + 1}</span>
          </div>
          <h3>${escapeHtml(p.title)}</h3>
          <p><strong>${escapeHtml(p.label1)}:</strong> ${escapeHtml(p.val1)}</p>
          <p><strong>${escapeHtml(p.label2)}:</strong> ${escapeHtml(p.val2)}</p>
          <div class="problem-solution">
            <strong>${escapeHtml(p.label3)}:</strong> ${escapeHtml(p.val3)}
          </div>
        </div>`).join('\n');

  // Parts HTML
  const partsHtml = fridgeParts.map(p => `
        <div class="part-card">
          <h3><span>${escapeHtml(p.name)}</span> <span class="part-badge">${escapeHtml(p.badge)}</span></h3>
          <p>${escapeHtml(p.desc)}</p>
          <p style="font-size: 0.84rem; color: var(--primary-color); font-weight: 600;"><strong>Fault symptoms:</strong> ${escapeHtml(p.symptoms)}</p>
        </div>`).join('\n');

  // Pricing Table HTML
  const pricingTableHtml = `
            <tr>
              <td class="highlight-col">Doorstep Inspection & Problem Diagnosis</td>
              <td class="price-col">₹249 – ₹350</td>
              <td>Thorough electronic and mechanical testing of compressor, relay, thermostat, and gas lines across Karur.</td>
            </tr>
            <tr>
              <td class="highlight-col">PTC Start Relay & Overload Protector (OLP)</td>
              <td class="price-col">₹450 – ₹850</td>
              <td>Replaces burnt ceramic relay or weak thermal overload switch to restore compressor motor starting.</td>
            </tr>
            <tr>
              <td class="highlight-col">Thermostat Replacement (Single Door / Direct Cool)</td>
              <td class="price-col">₹650 – ₹1,250</td>
              <td>Installs new temperature control switch with calibrated capillary tube for automatic cooling cutoff.</td>
            </tr>
            <tr>
              <td class="highlight-col">Magnetic Door Gasket Seal Replacement</td>
              <td class="price-col">₹750 – ₹1,600</td>
              <td>Replaces hardened or torn magnetic rubber gasket on single or double doors to stop cold air leakage.</td>
            </tr>
            <tr>
              <td class="highlight-col">Defrost System Servicing (Heater / Bi-Metal / Timer)</td>
              <td class="price-col">₹850 – ₹1,650</td>
              <td>Diagnosis and replacement of open defrost glass heater, frozen bimetal thermostat, or electromechanical timer.</td>
            </tr>
            <tr>
              <td class="highlight-col">Evaporator / Condenser Fan Motor Replacement</td>
              <td class="price-col">₹850 – ₹1,750</td>
              <td>Replaces noisy, jammed, or open fan motor to restore active cold air circulation through air ducts.</td>
            </tr>
            <tr>
              <td class="highlight-col">Drain Choke Removal & Tray Cleaning</td>
              <td class="price-col">₹350 – ₹650</td>
              <td>Unblocks frozen or slime-clogged drain hole, flushes drainage tube, and cleans compressor collection tray.</td>
            </tr>
            <tr>
              <td class="highlight-col">Refrigerant Gas Leak Repair & Re-charging</td>
              <td class="price-col">₹1,500 – ₹2,800</td>
              <td>Nitrogen pressure leak detection, brazing copper joints, vacuum pump evacuation, and precise R600a/R134a charging.</td>
            </tr>
            <tr>
              <td class="highlight-col">Inverter PCB Driver / Main Control Board Repair</td>
              <td class="price-col">₹1,200 – ₹2,800</td>
              <td>Component-level repair of power supply rails, IPM inverter modules, or surge-damaged circuit traces.</td>
            </tr>
            <tr>
              <td class="highlight-col">Inverter PCB Board Replacement</td>
              <td class="price-col">₹2,800 – ₹5,500</td>
              <td>Full replacement with brand-compatible inverter control board when existing PCB is burnt beyond repair.</td>
            </tr>
            <tr>
              <td class="highlight-col">Hermetic Compressor Replacement</td>
              <td class="price-col">₹3,800 – ₹7,500</td>
              <td>Installation of new compatible reciprocating or inverter compressor, new copper filter drier, vacuuming, and fresh gas charging.</td>
            </tr>`;

  // 27 Detailed FAQs
  const faqs = [
    {
      q: "Do you provide refrigerator repair in Karur?",
      a: "Yes. We coordinate doorstep refrigerator repair service across Karur Town, Kagithapuramam, Pasupathipalayam, Thanthonimalai, Kovai Road, and all 60 surrounding residential areas and taluks."
    },
    {
      q: "Can I get fridge repair near me in Karur?",
      a: "Yes. Our local technicians visit your home directly with diagnostic tools, multimeters, and common replacement components like start relays, thermostats, and sensors."
    },
    {
      q: "Do you repair single door refrigerators?",
      a: "Yes. We repair all single door direct-cool refrigerators from 170 to 220 liters, fixing cooling failure, excess ice accumulation, thermostat problems, water leaks, and compressor startup issues."
    },
    {
      q: "Do you repair double door refrigerators?",
      a: "Yes. We service frost-free double door models, resolving problems where the freezer freezes but the lower fridge section stays warm, fan motor failures, and defrost heater issues."
    },
    {
      q: "Do you repair side-by-side refrigerators?",
      a: "Yes. Our technicians service large-capacity side-by-side refrigerators, checking dual-zone cooling circuits, inverter PCBs, electronic expansion valves, and touch displays."
    },
    {
      q: "Do you repair French Door refrigerators?",
      a: "Yes. We handle multi-door and French door refrigerators, resolving center mullion seal condensation, bottom freezer drawer icing, and sensor communication errors."
    },
    {
      q: "Do you repair convertible refrigerators?",
      a: "Yes. If your refrigerator fails to switch between normal, extra fridge, or holiday convertible modes, we test the mode selection panel, inverter frequency commands, and zone thermistors."
    },
    {
      q: "Do you repair inverter refrigerators?",
      a: "Yes. We specialize in inverter BLDC compressor models, diagnosing IPM driver PCBs, DC voltage lines, blinking error codes on the circuit board, and compressor winding resistance."
    },
    {
      q: "Do you repair frost-free refrigerators?",
      a: "Yes. We diagnose and repair all frost-free cooling systems, testing the automatic defrost timer, radiant glass heater, thermal fuse, bimetal switch, and evaporator circulation fan."
    },
    {
      q: "Do you repair direct-cool refrigerators?",
      a: "Yes. We check manual defrost systems, mechanical thermostats, capillary tubes, and door magnetic seals for direct-cool refrigerators throughout Karur."
    },
    {
      q: "What should I do if my refrigerator is not cooling at all?",
      a: "Check if the interior light glows. If the light works but you hear no motor hum, or hear a clicking sound every few minutes, the start relay or compressor requires testing. Contact our desk to schedule an inspection."
    },
    {
      q: "Why is my freezer freezing but the fridge compartment is not cooling?",
      a: "In frost-free double door models, this happens when ice chokes the evaporator coil or air ducts, or the evaporator fan motor stops blowing cold air into the bottom section. A technician tests the defrost cycle and fan motor on-site."
    },
    {
      q: "Why is water leaking from my refrigerator onto the floor?",
      a: "Water pooling beneath the vegetable crisper or leaking on the kitchen floor is usually caused by a blocked defrost drain hole. Food particles or ice choke the drain tube, forcing melted water into the cabinet rather than into the rear evaporation pan."
    },
    {
      q: "Why is my refrigerator making loud humming, clicking, or rattling noises?",
      a: "A clicking sound points to a tripping start relay or overload protector. A rattling sound that stops when opening the freezer door indicates the fan blade hitting ice buildup. Unbalanced compressor mounting grommets can also cause cabinet vibration."
    },
    {
      q: "Can a refrigerator compressor be repaired or must it be replaced?",
      a: "If the issue is an external component like a burnt PTC start relay, overload protector, or faulty inverter PCB, it can be replaced easily at low cost. If internal motor windings are shorted or the mechanical piston is locked, a compressor replacement is required."
    },
    {
      q: "Can you replace the thermostat on-site?",
      a: "Yes. Our technicians carry compatible mechanical thermostats with capillary sensing bulbs for single door models and can replace and calibrate them during the doorstep visit."
    },
    {
      q: "Can you replace the refrigerator door gasket?",
      a: "Yes. Hardened, loose, or torn magnetic rubber gaskets allow warm humid air into the fridge, causing excess ice and high power bills. We install brand-matched replacement gaskets to restore a tight seal."
    },
    {
      q: "Can you check the defrost system components?",
      a: "Yes. The technician tests the defrost heater resistance, bimetal thermostat continuity, thermal fuse, and electromechanical defrost timer or digital PCB control to locate why frost is accumulating."
    },
    {
      q: "Can you inspect and repair the PCB / control board?",
      a: "Yes. When power surges or lightning damage power supply sections or inverter driver chips, our technicians perform component-level board servicing whenever feasible to save on replacement costs."
    },
    {
      q: "Do you repair older refrigerator models?",
      a: "Yes. We service older reciprocating compressor models, copper condenser fridges, and conventional direct-cool units, provided compatible mechanical spares are available."
    },
    {
      q: "Do you repair newer Smart and digital display models?",
      a: "Yes. We repair modern digital inverter refrigerators equipped with digital temperature controls, multi-airflow towers, door alarm sensors, and electronic expansion valves."
    },
    {
      q: "Does refrigerator repair cost depend on the model?",
      a: "Yes. Repair costs vary depending on capacity (single door 190L vs. double door 260L vs. side-by-side 550L), cooling technology (direct cool vs. inverter frost-free), and the specific damaged part."
    },
    {
      q: "Is there a technician visit charge?",
      a: "Doorstep inspection across Karur ranges between ₹249 and ₹350. The technician thoroughly tests the appliance and provides an honest repair quote before starting any work."
    },
    {
      q: "Can I know the exact repair cost before parts are replaced?",
      a: "Yes. Our technician diagnoses the problem, explains the root cause clearly, and gives you a transparent estimate for parts and labor before carrying out any repair."
    },
    {
      q: "Do you repair refrigerators directly at home in Karur?",
      a: "Yes. Over 90% of refrigerator faults—including relay replacement, thermostat fitting, fan motor renewal, drain unblocking, gasket fixing, and sensor testing—are completed on-site at your home."
    },
    {
      q: "Which areas of Karur do you cover?",
      a: "We cover all 60 approved residential colonies, towns, and bypass corridors, including Kagithapuramam, Pasupathipalayam, Karur Town, Thanthonimalai, Vengamedu, Inam Karur, Kovai Road, Velayuthampalayam, Pugalur, Aravakurichi, and Mayanur."
    },
    {
      q: "How do I contact you for fridge repair near me in Karur?",
      a: "Simply call +91 94420 54321 or tap the WhatsApp button on this page. Share your refrigerator brand, door type (single door, double door, side-by-side), observed problem, and your Karur locality to book an inspection visit."
    }
  ];

  const faqsHtml = faqs.map(faq => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>${escapeHtml(faq.q)}</span>
            <svg class="faq-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
          </button>
          <div class="faq-answer">
            <p>${escapeHtml(faq.a)}</p>
          </div>
        </div>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Refrigerator Repair Service in Karur | Fridge Repair Near Me</title>
  <meta name="description" content="Refrigerator Repair Service in Karur for cooling problems, freezer issues, water leakage, thermostat, compressor and other fridge problems. Contact for technician service near you.">
  <link rel="canonical" href="${canonicalUrl}">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="Refrigerator Repair Service in Karur | Fridge Repair Near Me">
  <meta property="og:description" content="Doorstep refrigerator repair service in Karur for single door, double door, inverter & side-by-side models. Cooling problems, water leakage, and compressor inspection.">
  <meta property="og:site_name" content="Service Center Karur">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Refrigerator Repair Service in Karur",
    "serviceType": "Refrigerator Repair Service",
    "url": "${canonicalUrl}",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Service Center Karur",
      "telephone": "+919442054321",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jawahar Bazaar, Kovai Road, Near Bus Stand",
        "addressLocality": "Karur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "639001",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Karur"
    },
    "description": "Doorstep inspection and repair for single door, double door, frost-free, inverter, and side-by-side refrigerators across Karur, Tamil Nadu."
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Karur Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center Karur</span>
          <span class="brand-loc">Local Appliance Care</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../ac/ac-repair-service-in-karur.html">AC Repair</a>
        <a href="refrigerator-repair-service-in-karur.html" class="active">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-karur.html">TV Repair</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919442054321" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call Now</span>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  <div class="nav-backdrop" id="navBackdrop"></div>

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li><a href="#">Refrigerator Repair</a></li>
        <li aria-current="page">Refrigerator Repair Service in Karur</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Karur Doorstep Refrigerator Care</span>
        </div>

        <!-- Single H1 Rule -->
        <h1>Refrigerator Repair Service in Karur</h1>

        <p class="hero-copy">
          Searching for <strong>refrigerator repair near me</strong> in Karur? From single door and double door to inverter and side-by-side refrigerators, our local technicians check cooling loss, water leakage, compressor clicking, thermostat issues, and gas charging directly at your home.
        </p>

        <!-- Tanglish Helper Box -->
        <div class="tanglish-intro-box">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2z"/></svg>
          <div>
            <strong>Fridge-la cooling kammi aa irukka? Freezer proper-aa freeze aagala?</strong><br>
            Water leak aagudha? Compressor continuous-aa running? Karur local technician inspection arrange panna Call or WhatsApp pannunga. Spot-laye fault check panni clear cost estimate solluvom.
          </div>
        </div>

        <div class="hero-cta-group">
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call: +91 94420 54321</span>
          </a>
          <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Quick Request Card -->
      <div class="hero-card-box">
        <h2>Schedule Fridge Inspection</h2>
        <p>Doorstep checking for all refrigerator types across Karur.</p>

        <form class="quick-booking-form">
          <input type="hidden" name="appliance" value="Refrigerator Repair & Service">
          
          <div class="form-group">
            <label for="fridgeType">Refrigerator Type & Capacity</label>
            <input type="text" id="fridgeType" name="fridge_info" class="form-control" placeholder="e.g. Single Door 190L, Double Door 260L, Inverter, Side-by-Side">
          </div>

          <div class="form-group">
            <label for="fridgeLocality">Your Locality in Karur</label>
            <select id="fridgeLocality" name="locality" class="form-control" required>
              <option value="Karur Town">Karur Town / Bus Stand</option>
              <option value="Kagithapuramam">Kagithapuramam</option>
              <option value="Pasupathipalayam">Pasupathipalayam</option>
              <option value="Thanthonimalai">Thanthonimalai</option>
              <option value="Vengamedu">Vengamedu</option>
              <option value="Inam Karur">Inam Karur</option>
              <option value="Sanapiratti">Sanapiratti</option>
              <option value="Vennaimalai">Vennaimalai</option>
              <option value="Kovai Road">Kovai Road</option>
              <option value="Velayuthampalayam">Velayuthampalayam</option>
              <option value="Pugalur">Pugalur</option>
              <option value="Aravakurichi">Aravakurichi</option>
              <option value="Mayanur">Mayanur</option>
              <option value="Puliyur">Puliyur</option>
            </select>
          </div>

          <div class="form-group">
            <label for="fridgePhone">Mobile Phone Number</label>
            <input type="tel" id="fridgePhone" name="phone" class="form-control" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
          </div>

          <div class="form-group">
            <label for="fridgeIssue">Observed Problem</label>
            <input type="text" id="fridgeIssue" name="issue" class="form-control" placeholder="e.g. Not cooling, water leaking, compressor clicking, excess frost">
          </div>

          <button type="submit" class="btn-form-submit">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            Book Refrigerator Visit
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Starting Section: Search Intent & Local Karur Kitchen Context -->
  <section class="section">
    <div class="container">
      <div class="keyword-opening-box">
        <div style="background: rgba(30, 58, 138, 0.06); border-left: 4px solid var(--accent-blue); padding: 0.85rem 1.25rem; border-radius: 4px; margin-bottom: 1.25rem;">
          <strong style="color: var(--primary-color); font-size: 1.05rem;">Looking for Fridge Repair Near Me in Karur?</strong>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-muted); font-size: 0.95rem;">
            Whether you need <strong>Refrigerator Repair in Karur</strong> for an emergency cooling failure or routine thermostat servicing, our local team schedules doorstep technician visits to your home across all residential areas.
          </p>
        </div>

        <h2>Reliable Refrigerator Repair & Maintenance Across Karur</h2>
        <p>
          In every Karur home, the refrigerator is one of the most critical appliances operating 24 hours a day. Families depend on it daily to preserve milk, fresh curd, vegetables, fruits, cooked food, cold drinking water, frozen items, and ice. During Karur's hot summer months, ambient temperatures rise significantly, placing extra continuous load on the compressor and condenser coils to maintain proper cooling.
        </p>
        <p>
          When a refrigerator suddenly stops cooling, makes loud clicking sounds, or leaks water onto the kitchen floor, food spoilage can happen within hours. Our local Karur technicians carry practical diagnostic equipment to check compressor health, start relay condition, gas pressure, thermostat cutoff points, defrost heaters, and door gaskets right in your home.
        </p>
      </div>
    </div>
  </section>

  <!-- Refrigerator Types Section (14 Major Types) -->
  <section class="section section-bg-muted" id="fridgeTypesSection">
    <div class="container">
      <div class="section-header">
        <h2>Types of Refrigerators We Repair in Karur</h2>
        <p>Doorstep troubleshooting, component testing, and repair support across all refrigerator designs and cooling configurations in Karur.</p>
      </div>

      <div class="types-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
${typesHtml}
      </div>
    </div>
  </section>

  <!-- Common Refrigerator Problems Section (23 Problems) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Common Refrigerator Problems We Repair in Karur</h2>
        <p>Frequent refrigerator issues faced by households across Karur, their likely technical causes, and how our technicians inspect them.</p>
      </div>

      <div class="problems-grid">
${problemsHtml}
      </div>
    </div>
  </section>

  <!-- Refrigerator Parts Section (27 Parts) -->
  <section class="section section-bg-muted" id="fridgePartsSection">
    <div class="container">
      <div class="section-header">
        <h2>Refrigerator Parts We Check or Replace</h2>
        <p>Essential components tested, serviced, and replaced for compatible refrigerator models in Karur.</p>
      </div>

      <p style="text-align: center; max-width: 820px; margin: 0 auto 1.5rem auto; font-size: 0.95rem; color: var(--text-muted);">
        Every refrigerator model uses specific components depending on whether it is direct cool, frost-free, or inverter driven. Here is an overview of major parts, their functions, and fault symptoms (checked where applicable and fitted on your model):
      </p>

      <div class="parts-expanded-grid">
${partsHtml}
      </div>
    </div>
  </section>

  <!-- How Refrigerator Repair Works -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>How Refrigerator Repair Works</h2>
        <p>A simple, transparent 6-step process from booking to final cooling verification.</p>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Contact Our Local Desk</h4>
            <p>Call or WhatsApp our Karur desk with your refrigerator type (single door, double door, inverter) and observed issue.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Doorstep Technician Visit</h4>
            <p>A local technician visits your Karur home at your preferred time slot with multimeter, gauges, and common spares.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Detailed On-Site Inspection</h4>
            <p>Technician checks compressor terminal resistance, start relay, thermostat cutoff, gas pressure, and door seal tightness.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Clear Fault & Cost Explanation</h4>
            <p>The exact root cause is explained clearly along with an honest, transparent estimate before starting any repair work.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-num">5</div>
          <div class="step-content">
            <h4>Repair After Approval</h4>
            <p>Upon your confirmation, the technician replaces faulty relays, thermostats, fan motors, or carries out necessary fixes.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-num">6</div>
          <div class="step-content">
            <h4>Cooling & Temperature Testing</h4>
            <p>The refrigerator is powered on and tested for airflow, compressor cycling, temperature drop, and leak clearance before handover.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- When Should You Call for Refrigerator Repair Section -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>When Should You Call for Refrigerator Repair?</h2>
        <p>Clear warning signs that your refrigerator needs professional inspection before food spoils or major parts fail.</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">⚠️ Reduced Cooling in Fresh Food Cabin</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); margin: 0;">Milk or curd begins souring earlier than usual, or drinking water bottles feel lukewarm even on high settings.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">⚠️ Freezer Not Freezing Ice</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); margin: 0;">Ice trays remain liquid or take more than 8 hours to solidify, indicating defrost failure or refrigerant leakage.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">⚠️ Water Leaking on Kitchen Tiles</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); margin: 0;">Water pools beneath the vegetable basket or drips from bottom hinges onto the floor due to blocked drain passages.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">⚠️ Compressor Running Nonstop</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); margin: 0;">Motor hums 24 hours without cycling off, causing cabinet sides to overheat and driving up electricity bills.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">⚠️ Clicking Relay from Rear Panel</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); margin: 0;">A sharp click sounds every two minutes while the motor fails to start, pointing to a burnt PTC relay or tripped OLP.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">⚠️ Burning Smell or Electrical Shock</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); margin: 0; background: #fef2f2; padding: 0.5rem; border-radius: 4px; border-left: 3px solid #ef4444;">
            <strong>Immediate Safety Action:</strong> If you detect a burning plastic smell or feel an electrical tingling on the door handle, switch off power immediately and book inspection.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Refrigerator Brands Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Refrigerator Brands We Service in Karur</h2>
        <p>Repair support and doorstep component replacement for all major refrigerator brands in Karur homes:</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem;">
        ${["Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Panasonic", "Voltas Beko", "Bosch", "IFB", "Lloyd", "Hitachi", "Videocon", "Kelvinator", "Electrolux", "Hisense", "Toshiba"].map(b => `
          <div style="background: #fff; border: 1px solid var(--border-color); border-radius: 6px; padding: 0.65rem 1.25rem; font-weight: 600; color: var(--primary-color); font-size: 0.95rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
            ${escapeHtml(b)} Refrigerator
          </div>`).join('')}
      </div>

      <div class="pricing-notice-box">
        <h3>Important Brand Repair Notice & Disclaimer</h3>
        <p>
          We provide independent local repair support for compatible models of the brands listed above. Brand names and trademarks are used strictly for product identification and customer compatibility reference. We do not claim official brand authorization or manufacturer affiliation unless specifically stated.
        </p>
      </div>
    </div>
  </section>

  <!-- Refrigerator Repair Cost in Karur -->
  <section class="section section-bg-muted" id="pricingSection">
    <div class="container">
      <div class="section-header">
        <h2>Refrigerator Repair Cost in Karur</h2>
        <p>Indicative market price ranges for typical refrigerator repairs and common component replacements in Karur:</p>
      </div>

      <div class="content-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Service / Replacement Category</th>
              <th>Estimated Market Range</th>
              <th>Service Details & Symptoms Checked</th>
            </tr>
          </thead>
          <tbody>
${pricingTableHtml}
          </tbody>
        </table>
      </div>

      <div class="pricing-notice-box" style="margin-top: 1.5rem;">
        <h3>Transparent Refrigerator Pricing Note</h3>
        <p>
          The price ranges shown above represent indicative market estimates across Tamil Nadu. Actual repair costs vary based on refrigerator type (single door vs. double door vs. inverter), brand, capacity (liters), and exact component required. Our technician inspects the appliance on-site and confirms the exact final cost before proceeding with any repair.
        </p>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose Us for Refrigerator Repair in Karur</h2>
        <p>Practical benefits of scheduling your refrigerator inspection with our local Karur service desk:</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>Local Karur Technicians</h3>
            <p>Direct coordination with experienced local repair technicians based in Karur for fast doorstep visits.</p>
          </div>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>Doorstep Inspection</h3>
            <p>No need to transport heavy refrigerators. All major electrical, thermostat, and relay checks are performed at home.</p>
          </div>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>Model-Based Checking</h3>
            <p>Accurate diagnosis focused on your specific model—whether single door, frost-free double door, or inverter BLDC.</p>
          </div>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>Clear Cost Explanation</h3>
            <p>Our technician clearly explains the fault found on-site and provides an honest price estimate before starting any work.</p>
          </div>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>Repair After Your Approval</h3>
            <p>We only proceed with component replacement or servicing once you review and approve the repair recommendation.</p>
          </div>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>Tested After Repair</h3>
            <p>Every serviced refrigerator is verified for cooling drop, thermostat cutoff, compressor vibration, and door seal tightness.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Experience Section -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Recent Refrigerator Repair Experiences in Karur</h2>
        <p>Illustrative examples of everyday refrigerator issues resolved across Karur neighborhoods:</p>
      </div>

      <div class="experiences-grid">
        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 Kagithapuramam, Karur</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">Double Door Fridge Freezer Freezing but Bottom Warm</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color); margin-bottom: 0.5rem;">
            A family in Kagithapuramam noticed their double door refrigerator freezing ice cubes solid while milk and vegetables in the lower cabin stayed lukewarm. The technician dismantled the freezer rear panel, diagnosed an open defrost heater, replaced the element, and cleared the air duct. Proper airflow was restored within two hours.
          </p>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">⏱️ Resolved on-site in 2 hours</span>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 Pasupathipalayam, Karur</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">Single Door Fridge Compressor Clicking Without Starting</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color); margin-bottom: 0.5rem;">
            An Pasupathipalayam resident reported a sharp clicking noise from their 190L single door refrigerator after power cuts, with zero cooling inside. The technician tested the compressor terminals, diagnosed a burnt PTC start relay, installed a fresh relay and overload protector, and verified instant compressor startup.
          </p>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">⏱️ Serviced same day in 1 hour</span>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 Kovai Road, Karur</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">Inverter Refrigerator Error Code Following Voltage Surge</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color); margin-bottom: 0.5rem;">
            A customer on Kovai Road faced an inverter frost-free refrigerator showing a blinking LED error code with no cooling. The technician inspected the inverter driver PCB, repaired blown surge suppression diodes on-site, and verified proper DC motor frequency.
          </p>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">⏱️ Completed on-site in 2.5 hours</span>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 Thanthonimalai, Karur</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">Water Accumulating Under Vegetable Crisper Drawer</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color); margin-bottom: 0.5rem;">
            A household in Thanthonimalai called regarding water pooling beneath the bottom vegetable drawer and leaking onto the tiles. The technician cleared the iced drain hole, flushed the internal conduit with hot sanitizing solution, and repositioned the drain pan.
          </p>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">⏱️ Fixed in 45 minutes</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Refrigerator Repair Near Me in Karur (Locality Section in 4 Quadrants) -->
  <section class="section" id="localitiesSection">
    <div class="container">
      <div class="section-header">
        <h2>Refrigerator Repair Near Me in Karur</h2>
        <p>Timely doorstep repair and inspection visits across all residential areas, towns, and surrounding zones of Karur:</p>
      </div>

${generateLocalitySections()}
    </div>
  </section>

  <!-- FAQ Section (27 Detailed Questions) -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — Refrigerator Repair in Karur</h2>
        <p>Helpful answers to common questions about refrigerator faults, technician visits, costs, and maintenance in Karur.</p>
      </div>

      <div class="faq-container">
${faqsHtml}
      </div>
    </div>
  </section>

  <!-- Other Home Appliances in Karur -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Other Home Appliance Repair Services in Karur</h2>
        <p>Explore doorstep assistance for your other household appliances:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
        <a href="../ac/ac-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">AC Repair & Service</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Split & window AC cooling faults, water drips, fan motor issues & seasonal maintenance across Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View AC Services →</span>
        </a>

        <a href="../washing-machine/washing-machine-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">Washing Machine Repair</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Front load, top load & semi-automatic drainage, spinning, vibration & motor repair across Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View Washing Machine →</span>
        </a>

        <a href="../tv/tv-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">TV Repair & Service</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">LED, Smart TV, and 4K television screen blackout, backlight renewal, sound issues & motherboard service.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View TV Services →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Banner Section -->
  <section class="cta-banner-section">
    <div class="container">
      <h2>Need Refrigerator Repair in Karur?</h2>
      <p>Contact our local team now to discuss your fridge problem and book an experienced technician inspection.</p>
      <div class="cta-banner-buttons">
        <a href="tel:+919442054321" class="btn-primary-call sync-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call: +91 94420 54321</span>
        </a>
        <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Karur</h4>
          <p>
            Local doorstep repair and inspection service for home appliances across Karur, Tamil Nadu. Fast coordination, technician visit, and transparent guidance.
          </p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Main Road, Kagithapuramam & Pasupathipalayam, Karur, Tamil Nadu 639001</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span><a href="tel:+919442054321" class="sync-call" style="color: #cbd5e1;">+91 94420 54321</a></span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Repair Services</h4>
          <ul class="footer-links">
            <li><a href="../ac/ac-repair-service-in-karur.html">AC Repair & Service</a></li>
            <li><a href="refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-karur.html">TV Repair & Service</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Karur Coverage</h4>
          <ul class="footer-links">
            <li><a href="../index.html#localitiesSection">Kagithapuramam & Pasupathipalayam</a></li>
            <li><a href="../index.html#localitiesSection">Thanthonimalai & Town Center</a></li>
            <li><a href="../index.html#localitiesSection">Vengamedu & Inam Karur</a></li>
            <li><a href="../index.html#localitiesSection">Kovai Road & Sanapiratti</a></li>
            <li><a href="../index.html#localitiesSection">Velayuthampalayam, Pugalur & Aravakurichi</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Timings</h4>
          <p>
            Monday to Sunday<br>
            <strong>8:00 AM - 8:30 PM</strong>
          </p>
          <p style="font-size: 0.82rem; color: #94a3b8;">
            Doorstep visits are scheduled based on technician slot availability and customer location.
          </p>
        </div>
      </div>

      <div class="footer-disclaimer-box">
        <strong>Important Customer Notice & Disclaimer:</strong><br>
        Service availability, repair cost and parts requirement may vary depending on appliance model and the issue found during inspection. Brand names are used only for identification of compatible appliances and do not imply official brand authorization unless specifically stated.
      </div>

      <div class="footer-copy">
        <div>© 2026 servicecenterkarur.com — Local Home Appliance Repair in Karur.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Scroll-Based Floating CTA (WhatsApp Left, Call Right) -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="${whatsappUrl}" class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar -->
  <div class="mobile-bottom-bar">
    <a href="${whatsappUrl}" class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="bottom-bar-btn bottom-bar-call sync-call">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <script src="../js/config.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Write the rebuilt page to fridge/refrigerator-repair-service-in-karur.html
const destPath = path.join(fridgeDir, 'refrigerator-repair-service-in-karur.html');
fs.writeFileSync(destPath, buildFridgePageHtml(), 'utf8');
console.log('Successfully created:', destPath);

// Delete old root file refrigerator-repair-service-in-karur.html
const oldRootFile = path.join(rootDir, 'refrigerator-repair-service-in-karur.html');
if (fs.existsSync(oldRootFile)) {
  fs.unlinkSync(oldRootFile);
  console.log('Successfully removed old root file:', oldRootFile);
}
