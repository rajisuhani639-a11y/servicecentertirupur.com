// Pricing Data & Cost Explanations for all 24 Refrigerator Brands in Karur
// Simple Indian English + Tanglish explanatory notes. No fake fixed prices.

const brandPricingData = {
  'Samsung': {
    introTanglish: 'Samsung fridge repair cost model-ku model marupadum. Single door models-kum double door digital inverter models-kum spare cost differ aagum. Technician spot-la check pannitu exact estimate explain pannuvanga.',
    costFactorsText: 'Samsung refrigerator repair cost in Karur depends on whether the unit is a direct cool single door, Twin Cooling Plus double door, or convertible frost-free model. Minor fixes like relay replacement or drain tray cleaning cost far less than inverter PCB board repair or sealed compressor charging.',
    table: [
      { part: 'Relay & Overload Protector', cost: '₹450 – ₹950', purpose: 'Starts the compressor motor safely', condition: 'Compressor clicking sound varudhu or start aagala' },
      { part: 'Defrost Sensor / Bimetal', cost: '₹600 – ₹1,150', purpose: 'Monitors ice buildup on cooling coil', condition: 'Freezer cool aana fridge cabin cooling drop aana' },
      { part: 'Defrost Heater Element', cost: '₹800 – ₹1,450', purpose: 'Melts excess frost automatically', condition: 'Coil-la heavy ice freeze aagi air block aagum bodhu' },
      { part: 'Evaporator Fan Motor', cost: '₹1,200 – ₹2,400', purpose: 'Circulates cold air into lower cabin', condition: 'Fan odala or loud humming sound ketta' },
      { part: 'Inverter Control PCB', cost: 'Model dependent (₹2,400 – ₹5,200)', purpose: 'Regulates compressor speed and cycle', condition: 'Power light blinking, compressor speed erratic' },
      { part: 'Door Magnetic Gasket', cost: '₹850 – ₹1,800', purpose: 'Seals cold air inside cabinets', condition: 'Door tight-aa moodala, side-la gap irundha' },
      { part: 'Thermostat / Sensor Assembly', cost: '₹550 – ₹1,250', purpose: 'Maintains preset cabin temperature', condition: 'Food items freeze aagudhu or continuous-aa cooling illa' },
      { part: 'Compressor Gas Charging', cost: '₹1,850 – ₹2,850', purpose: 'Restores R600a/R134a refrigerant level', condition: 'Gas leak aagi coil warm-aa irukkum bodhu' }
    ]
  },
  'Whirlpool': {
    introTanglish: 'Whirlpool fridge repair cost model capacity and technology base panni differ aagum. 6th Sense frost-free double door models and Icemagic single door fridges have different spare requirements. Technician first problem inspect panni cost solluvanga.',
    costFactorsText: 'Whirlpool refrigerator repair cost in Karur is determined by the specific component affected. Thermostat replacement on an Icemagic single door fridge is quick and affordable, whereas microprocessor PCB repair or fan motor replacement on Intellifresh or Protton triple door models requires specialised diagnostic testing.',
    table: [
      { part: 'Start Relay & PTC', cost: '₹400 – ₹850', purpose: 'Provides initial torque to compressor', condition: 'Clicking sound kekkudhu, compressor start aagala' },
      { part: 'Thermostat Switch', cost: '₹650 – ₹1,200', purpose: 'Regulates Direct Cool cabin cooling', condition: 'Excess ice buildup or compressor cut-off aagala' },
      { part: 'Defrost Timer / Bimetal', cost: '₹650 – ₹1,350', purpose: 'Controls automatic defrost interval', condition: 'Lower fridge compartment cooling illama pona' },
      { part: 'Evaporator Fan Motor', cost: '₹1,150 – ₹2,100', purpose: 'Blows cool air across shelves', condition: 'Fan blade rotate aagala or rattling noise' },
      { part: 'Main Control Board', cost: 'Model dependent (₹2,200 – ₹4,800)', purpose: 'Controls 6th Sense cooling logic', condition: 'Display unresponsive, compressor run aaga maatudhu' },
      { part: 'Door Gasket Seal', cost: '₹800 – ₹1,700', purpose: 'Prevents warm air entry', condition: 'Rubber gasket loose aagi moisture build aana' },
      { part: 'Drain Tray & Pipe', cost: '₹350 – ₹750', purpose: 'Drains defrost water to back tray', condition: 'Fridge kulla floor-la water pool aana' },
      { part: 'Refrigerant Leak Service', cost: '₹1,800 – ₹2,800', purpose: 'Fixes pinhole leak and refills gas', condition: 'Freezer-la light cool mattum irundhu ice varaata' }
    ]
  },
  'Bosch': {
    introTanglish: 'Bosch quality refrigerators use German-engineered VarioInverter cooling systems. Spare parts cost exact model number and import series poruthu vary aagum. Local Karur technician inspect pannitu transparent estimate tharuvanga.',
    costFactorsText: 'Repairing a Bosch refrigerator in Karur involves diagnostic verification of multi-airflow dampers, dual evaporator sensors, and VarioInverter compressor drive modules. Genuine matched components ensure energy efficiency and stable temperature regulation.',
    table: [
      { part: 'Multi-Sensor Thermistor', cost: '₹750 – ₹1,600', purpose: 'Monitors multi-zone shelf temperatures', condition: 'Cabin temperature fluctuation or alarm beeping' },
      { part: 'Air Damper Control Motor', cost: '₹1,400 – ₹2,800', purpose: 'Controls airflow between freezer and fridge', condition: 'Freezer freezing fine but lower cabin warm' },
      { part: 'Evaporator DC Fan Motor', cost: '₹1,800 – ₹3,400', purpose: 'Silent multi-flow cooling circulation', condition: 'Fan motor stalled or error code display' },
      { part: 'VarioInverter Power Module', cost: 'Model dependent (₹3,200 – ₹6,800)', purpose: 'Drives variable speed compressor', condition: 'Inverter PCB fault, no compressor ignition' },
      { part: 'Defrost Heater Element', cost: '₹1,200 – ₹2,200', purpose: 'Keeps evaporator coil free of frost', condition: 'Excessive frost choked behind rear panel' },
      { part: 'Door Seal Gasket Set', cost: '₹1,200 – ₹2,600', purpose: 'Maintains airtight thermal boundary', condition: 'Moisture droplets forming on inner door frame' },
      { part: 'Electronic Display Panel', cost: 'Model dependent (₹2,500 – ₹5,500)', purpose: 'Allows touch temperature configuration', condition: 'Touch controls not responding or blinking' },
      { part: 'System Gas Evacuation & Recharge', cost: '₹2,200 – ₹3,200', purpose: 'Restores R600a hydrocarbon refrigerant', condition: 'Cooling completely absent with running motor' }
    ]
  },
  'Electrolux': {
    introTanglish: 'Electrolux refrigerators feature TasteLock and NutriFresh inverter cooling. Part cost model series-ku thagapadi change aagum. Technician inspect panni genuine replacement estimate solvanga.',
    costFactorsText: 'Electrolux refrigerator servicing in Karur accounts for advanced airflow channels, TasteLock crisper humidity controls, and NutriFresh inverter boards. Costs stay transparent with on-site inspection before any component replacement.',
    table: [
      { part: 'PTC Relay / Overload', cost: '₹550 – ₹1,100', purpose: 'Compressor ignition and thermal safety', condition: 'Clicking relay sound without motor start' },
      { part: 'Defrost Thermostat & Fuse', cost: '₹750 – ₹1,400', purpose: 'Prevents thermal runaway during defrost', condition: 'Defrost cycle failing, cooling airflow drops' },
      { part: 'Evaporator Fan Assembly', cost: '₹1,400 – ₹2,600', purpose: 'Distributes chill across multi-flow vents', condition: 'Humming noise or lower cabin cooling drop' },
      { part: 'Main Inverter PCB', cost: 'Model dependent (₹2,800 – ₹5,800)', purpose: 'Coordinates compressor and fan speeds', condition: 'Fridge not turning on, inverter LED error blink' },
      { part: 'Door Gasket Beading', cost: '₹950 – ₹1,950', purpose: 'Prevents cooling loss along door edge', condition: 'Door suction weak, cold air escaping' },
      { part: 'Capillary & Filter Drier', cost: '₹850 – ₹1,650', purpose: 'Filters and regulates refrigerant expansion', condition: 'Sealed system choking, low evaporator pressure' },
      { part: 'Gas Leak Repair & Charge', cost: '₹1,900 – ₹2,900', purpose: 'Pinhole brazing and R600a refill', condition: 'Cooling lost completely over several days' }
    ]
  },
  'Liebherr': {
    introTanglish: 'Liebherr refrigerators use DuoCooling dual refrigeration circuits and BioFresh technology. Parts cost model-ku model differ aagum. Technician doorstep visit panni issue identify seivanga.',
    costFactorsText: 'Liebherr refrigeration systems use independent cooling circuits for the freezer and refrigerator compartments. Servicing costs depend on whether an electronic sensor, fan duct, or inverter inverter driver requires attention in Karur homes.',
    table: [
      { part: 'BioFresh Temperature Sensor', cost: '₹850 – ₹1,850', purpose: 'Measures precision 0°C food preservation zone', condition: 'BioFresh vegetables freezing or spoiling fast' },
      { part: 'DuoCooling Airflow Fan', cost: '₹1,900 – ₹3,600', purpose: 'Independent circulation for fridge section', condition: 'Freezer working but main cabin cooling weak' },
      { part: 'Electronic Control Module', cost: 'Model dependent (₹3,500 – ₹7,200)', purpose: 'Regulates dual evaporator valves and motor', condition: 'Control panel alarm, erratic temperature' },
      { part: 'Defrost Heating Element', cost: '₹1,400 – ₹2,400', purpose: 'Automatic coil clearing without heat bleed', condition: 'Heavy frost crust blocking internal vents' },
      { part: 'Magnetic Door Gasket', cost: '₹1,300 – ₹2,800', purpose: 'Precision thermal seal around door frame', condition: 'Door bounce back, condensation on door lip' },
      { part: 'Sealed Circuit Gas Refill', cost: '₹2,400 – ₹3,400', purpose: 'Vacuuming and R600a charge to weight', condition: 'Gradual loss of chill in both compartments' }
    ]
  },
  'Godrej': {
    introTanglish: 'Godrej refrigerators Edge Neo and Eon series parts Karur-la readily available. Single door and double door models repair cost romba reasonable-aa irukkum. Technician check pannitu clear cost solluvanga.',
    costFactorsText: 'Godrej refrigerator repair in Karur is known for high spare availability and economical repair costs. Simple mechanical thermostat fixes on Edge single door fridges cost minimally, while Eon inverter PCB or dual-fan motor replacements are quoted openly.',
    table: [
      { part: 'Relay & OLP Set', cost: '₹350 – ₹750', purpose: 'Starts the reciprocating compressor', condition: 'Tick-tick sound kekkudhu, compressor on aagala' },
      { part: 'Mechanical Thermostat', cost: '₹550 – ₹1,050', purpose: 'Regulates cooling in Direct Cool models', condition: 'Fridge kulla ice kattai kattudhu or no cooling' },
      { part: 'Defrost Timer / Thermal Fuse', cost: '₹600 – ₹1,200', purpose: 'Controls 8-hour defrost cycle', condition: 'Freezer cool aana keezha cooling varaadhu' },
      { part: 'Evaporator Fan Motor', cost: '₹950 – ₹1,850', purpose: 'Throws cold air through cabin air vents', condition: 'Fan blade stuck or loud screeching sound' },
      { part: 'Inverter Board / PCB', cost: 'Model dependent (₹1,900 – ₹4,200)', purpose: 'Regulates compressor rpm in inverter fridges', condition: 'Power supply proper aana fridge switch-on aagala' },
      { part: 'Door Gasket Rubber', cost: '₹650 – ₹1,400', purpose: 'Creates airtight grip on fridge body', condition: 'Door close panniyum veliya cold air varudhu' },
      { part: 'Drain Hole & Pipe Cleaning', cost: '₹300 – ₹600', purpose: 'Channels defrost meltwater outside', condition: 'Veg tray kulla water thengi irundha' },
      { part: 'Gas Charging & Leak Rectification', cost: '₹1,650 – ₹2,650', purpose: 'Brazes leak joint and recharges gas', condition: 'Compressor odudhu but zero cooling in fridge' }
    ]
  },
  'Haier': {
    introTanglish: 'Haier bottom mounted refrigerator (BMR) and twin inverter models spare cost model-ku thagapadi irukkum. Technician inspect panni part requirement and cost details explain pannuvanga.',
    costFactorsText: 'Haier refrigerator repair cost in Karur depends on whether the unit is an 8-in-1 convertible bottom mounted fridge, a direct cool single door, or a side-by-side unit. Defrost sensors and fan motors are moderately priced, while inverter logic boards depend on model specifications.',
    table: [
      { part: 'PTC Relay & Protector', cost: '₹400 – ₹850', purpose: 'Engages compressor starter coil', condition: 'Compressor vibrate aagi udane off aagudhu' },
      { part: 'Defrost Sensor (NTC)', cost: '₹600 – ₹1,150', purpose: 'Detects coil temperature for defrost timing', condition: 'Freezer chokes with solid frost, lower cabin warm' },
      { part: 'Evaporator Circulation Fan', cost: '₹1,100 – ₹2,100', purpose: 'Forces air from bottom freezer to top cabin', condition: 'Top compartment not cooling in BMR models' },
      { part: 'Twin Inverter PCB Board', cost: 'Model dependent (₹2,200 – ₹4,900)', purpose: 'Syncs compressor and fan speeds', condition: 'Display panel error blink, compressor inactive' },
      { part: 'Convertible Mode Damper', cost: '₹1,250 – ₹2,400', purpose: 'Directs airflow for convertible modes', condition: 'Freezer to fridge conversion not cooling' },
      { part: 'Door Gasket Magnetic Strip', cost: '₹750 – ₹1,650', purpose: 'Maintains airtight cabinet closure', condition: 'Door seal peeling off or hard and cracked' },
      { part: 'Refrigerant Leak Test & Recharge', cost: '₹1,800 – ₹2,750', purpose: 'Pressure tests coils and recharges gas', condition: 'Cooling fading gradually over one week' }
    ]
  },
  'Videocon': {
    introTanglish: 'Videocon traditional single door and double door refrigerators parts Karur-la easily serviceable. Honest inspection and affordable spare cost provide pannuvom.',
    costFactorsText: 'Videocon refrigerator repairs in Karur are usually straightforward and budget-friendly. Most models use standard electromechanical components such as rotary thermostats, PTC relays, and mechanical timers that keep maintenance costs low.',
    table: [
      { part: 'PTC Starter Relay', cost: '₹350 – ₹700', purpose: 'Starts the hermetic compressor', condition: 'Click sound kekkudhu, cooling start aagala' },
      { part: 'Rotary Thermostat', cost: '₹500 – ₹950', purpose: 'Cuts compressor power when target cool reached', condition: 'Milk and vegetables freeze aagudhu or no cool' },
      { part: 'Defrost Timer', cost: '₹550 – ₹1,050', purpose: 'Cycles defrost heater on frost-free models', condition: 'Freezer cold-aa irukku, lower cabin warm-aa irukku' },
      { part: 'Cabinet Fan Motor', cost: '₹900 – ₹1,700', purpose: 'Circulates frost-free air', condition: 'Fan not rotating or excessive humming' },
      { part: 'Door Seal Gasket', cost: '₹600 – ₹1,350', purpose: 'Prevents ambient heat penetration', condition: 'Door gap visible, moisture inside fridge' },
      { part: 'Defrost Heating Glass Tube', cost: '₹650 – ₹1,200', purpose: 'Radiates heat to clear ice from coil', condition: 'Solid ice slab forming on back panel' },
      { part: 'Compressor Gas Filling', cost: '₹1,600 – ₹2,500', purpose: 'Flushes sealed line and refills refrigerant', condition: 'Compressor running continuously with zero cooling' }
    ]
  },
  'Panasonic': {
    introTanglish: 'Panasonic Econavi and Prime Fresh refrigerators use sensor-based sensor controls. Spare cost exact model series and inverter type poruthu depend aagum. Technician check pannitu transparent quote tharuvanga.',
    costFactorsText: 'Panasonic refrigerator repairs in Karur involve diagnostics for Econavi micro-sensors, AG Clean filters, and inverter compressor drive boards. Replacing a temperature sensor or fan is cost-effective, while inverter control boards are priced by exact chassis number.',
    table: [
      { part: 'Econavi Temperature Sensor', cost: '₹650 – ₹1,350', purpose: 'Senses internal temperature and door openings', condition: 'Erratic cooling or compressor not regulating' },
      { part: 'Prime Fresh Air Damper', cost: '₹1,300 – ₹2,500', purpose: 'Controls sub-zero cooling in Prime Fresh zone', condition: 'Prime Fresh drawer not maintaining soft freezing' },
      { part: 'Evaporator DC Blower Fan', cost: '₹1,350 – ₹2,500', purpose: 'Distributes chill through 3D airflow vents', condition: 'Fan noise or upper shelves remaining warm' },
      { part: 'Inverter Main PCB Unit', cost: 'Model dependent (₹2,500 – ₹5,400)', purpose: 'Coordinates Econavi algorithms and compressor', condition: 'Display lights blinking, compressor unresponsive' },
      { part: 'Defrost Heater Element', cost: '₹950 – ₹1,800', purpose: 'Melts frost buildup automatically', condition: 'Air vents choked with thick white ice' },
      { part: 'Door Gasket Magnetic Strip', cost: '₹850 – ₹1,850', purpose: 'Preserves airtight internal cooling', condition: 'Door seal cracked or loose at bottom corner' },
      { part: 'Gas Charging & System Evacuation', cost: '₹1,900 – ₹2,900', purpose: 'Removes moisture and charges R600a', condition: 'Hissing sound without cooling inside fridge' }
    ]
  },
  'Siemens': {
    introTanglish: 'Siemens built-in and free-standing refrigerators-la hyperFresh and multiAirflow systems irukkum. Parts cost model-ku thagapadi differ aagum. Technician visit panni exact component test pannuvanga.',
    costFactorsText: 'Siemens refrigerator service in Karur demands specialised checking of hyperFresh humidity controls, multiAirflow electronic dampers, and inverter drive units. All costs are confirmed with the homeowner after systematic multimeter testing.',
    table: [
      { part: 'hyperFresh Electronic Sensor', cost: '₹800 – ₹1,750', purpose: 'Maintains optimal humidity and chill in meat/veg zones', condition: 'Drawer food spoiling quickly or freezing solid' },
      { part: 'Air Distribution Motor Damper', cost: '₹1,500 – ₹3,100', purpose: 'Regulates chilled air delivery to compartments', condition: 'Freezer freezing fine but main cabin warm' },
      { part: 'Precision DC Evaporator Fan', cost: '₹1,900 – ₹3,500', purpose: 'Silent multiAirflow circulation', condition: 'Error warning tone, fan not spinning' },
      { part: 'Inverter Power Control Module', cost: 'Model dependent (₹3,400 – ₹7,000)', purpose: 'Drives variable speed compressor reliably', condition: 'Fridge trips power, compressor fails to spin' },
      { part: 'Defrost Element & Thermal Fuse', cost: '₹1,300 – ₹2,300', purpose: 'Cleans evaporator coil frost automatically', condition: 'Rear panel ice buildup blocking airflow' },
      { part: 'Door Gasket Seal Set', cost: '₹1,300 – ₹2,700', purpose: 'Provides airtight thermal barrier', condition: 'Door suction loose, condensation on door frame' },
      { part: 'R600a Gas Evacuation & Recharge', cost: '₹2,300 – ₹3,300', purpose: 'Replaces lost refrigerant after leak brazing', condition: 'Motor hums but cabinets remain completely warm' }
    ]
  },
  'Hitachi': {
    introTanglish: 'Hitachi Dual Fan Cooling and French door inverter refrigerators high-efficiency engineering use pannudhu. Spare cost model capacity poruthu change aagum. Technician direct-aa check panni clear estimate solluvanga.',
    costFactorsText: 'Hitachi refrigerator repair cost in Karur depends on whether the issue is in the Dual Fan Cooling system, inverter driver, or eco-thermo sensors. Our technicians verify each circuit before recommending component replacement.',
    table: [
      { part: 'Dual Fan Dedicated Motor', cost: '₹1,600 – ₹3,200', purpose: 'Independent air delivery to fridge & freezer', condition: 'One compartment cool-aa irukku, matradhu warm' },
      { part: 'Eco Thermo Sensor', cost: '₹750 – ₹1,650', purpose: 'Detects minute temperature shifts', condition: 'Inconsistent cooling across glass shelves' },
      { part: 'Inverter Compressor Driver Board', cost: 'Model dependent (₹3,000 – ₹6,500)', purpose: 'Regulates micro-step compressor speed', condition: 'Compressor dead, PCB diagnostic LED blinking' },
      { part: 'Defrost Heater Element', cost: '₹1,150 – ₹2,100', purpose: 'Melts coil ice during automatic cycle', condition: 'Dense frost blocking rear air vents' },
      { part: 'Magnetic Door Gasket', cost: '₹1,100 – ₹2,400', purpose: 'Seals heavy insulated doors tightly', condition: 'Door rebounds or doesn\'t grip frame' },
      { part: 'Sealed System R600a Service', cost: '₹2,100 – ₹3,100', purpose: 'Brazes leak joint, vacuums, and charges gas', condition: 'Continuous compressor run with zero ice formation' }
    ]
  },
  'Kelvinator': {
    introTanglish: 'Kelvinator direct cool and frost free fridges-ku parts Karur-la easily available and budget-friendly. Problem check pannitu accurate spare cost solluvanga.',
    costFactorsText: 'Kelvinator refrigerator repairs in Karur are among the most economical. Common repairs involve starter relays, electromechanical thermostats, and fan motors that can be tested and serviced quickly at the customer doorstep.',
    table: [
      { part: 'PTC Relay & Protector', cost: '₹350 – ₹750', purpose: 'Protects and starts compressor motor', condition: 'Clicking sound kekkudhu, compressor start aagala' },
      { part: 'Mechanical Thermostat', cost: '₹550 – ₹1,000', purpose: 'Maintains dial cooling setting', condition: 'Freezer over-cooling or fridge not getting cold' },
      { part: 'Bimetal Defrost Switch', cost: '₹500 – ₹950', purpose: 'Terminates defrost when coil warms up', condition: 'Freezer frosted solid, airflow stopped' },
      { part: 'Evaporator Fan Motor', cost: '₹950 – ₹1,800', purpose: 'Blows chilled air into fridge chamber', condition: 'Fan motor seized or buzzing loudly' },
      { part: 'Door Gasket Strip', cost: '₹650 – ₹1,400', purpose: 'Keeps outside warm humid air out', condition: 'Door rubber torn or hardened with age' },
      { part: 'Drain Line Unblocking & Clean', cost: '₹300 – ₹550', purpose: 'Clears algae and dirt from drain tube', condition: 'Water puddling on floor under fridge' },
      { part: 'Gas Charging & Pinhole Repair', cost: '₹1,600 – ₹2,500', purpose: 'Fixes gas leak and refills refrigerant', condition: 'Compressor warm and running but zero chill' }
    ]
  },
  'Sharp': {
    introTanglish: 'Sharp J-Tech Inverter and Plasmacluster fridges-ku spare parts model series poruthu vary aagum. Technician doorstep visit panni issue identify panni clear estimate tharuvanga.',
    costFactorsText: 'Sharp refrigerator repair in Karur covers J-Tech inverter speed modules, hybrid cooling panels, and multi-sensor circuits. Diagnostics are conducted on-site to pinpoint whether an issue is electronic or refrigeration-related.',
    table: [
      { part: 'J-Tech Inverter Control Board', cost: 'Model dependent (₹2,800 – ₹6,000)', purpose: 'Controls multi-step compressor cooling speed', condition: 'Compressor unresponsive, board LED blinking' },
      { part: 'Defrost Sensor & Thermal Fuse', cost: '₹700 – ₹1,450', purpose: 'Prevents ice buildup and protects circuit', condition: 'Ice buildup behind freezer wall, no cabin cool' },
      { part: 'Evaporator DC Circulation Fan', cost: '₹1,400 – ₹2,700', purpose: 'Circulates chill across hybrid cooling plate', condition: 'Fan stopped spinning or grinding noise' },
      { part: 'Hybrid Panel Temperature Sensor', cost: '₹750 – ₹1,550', purpose: 'Regulates balanced shelf chill', condition: 'Temperatures erratic on middle glass shelves' },
      { part: 'Door Gasket Magnetic Seal', cost: '₹1,000 – ₹2,200', purpose: 'Prevents cold air escape on wide doors', condition: 'Door fails to seal, condensation on mullion' },
      { part: 'Sealed System R600a Refill', cost: '₹2,000 – ₹3,000', purpose: 'Evacuates line, solders leak, refills gas', condition: 'Compressor runs continuously but no cooling' }
    ]
  },
  'IFB': {
    introTanglish: 'IFB direct cool and frost-free inverter refrigerators spare cost model-ku thagapadi change aagum. Technician home visit panni part condition explain pannuvanga.',
    costFactorsText: 'IFB refrigerator servicing in Karur addresses metal cooling airflow, inverter compressor control modules, and humidity-controlled vegetable crispers. Transparent diagnostic rates apply before any part is changed.',
    table: [
      { part: 'PTC Starter & Overload', cost: '₹400 – ₹850', purpose: 'Engages compressor starter windings', condition: 'Click-clack sound, cooling compressor dead' },
      { part: 'Defrost Sensor (NTC)', cost: '₹600 – ₹1,200', purpose: 'Signals heater to clear frozen evaporator', condition: 'Coil heavy ice-la block aagi cooling cut aagudhu' },
      { part: 'DC Evaporator Fan Motor', cost: '₹1,150 – ₹2,250', purpose: 'Drives cold air through multi-vent tower', condition: 'Fan blade stuck or irregular airflow' },
      { part: 'Inverter Driver PCB', cost: 'Model dependent (₹2,400 – ₹5,000)', purpose: 'Controls variable compressor frequencies', condition: 'Fridge dead, inverter circuit error code' },
      { part: 'Door Magnetic Gasket', cost: '₹800 – ₹1,700', purpose: 'Ensures tight thermal perimeter sealing', condition: 'Air leak along door perimeter, frost around door' },
      { part: 'Refrigerant Leak Service', cost: '₹1,800 – ₹2,800', purpose: 'Fixes copper leak joint and recharges gas', condition: 'Both freezer and fridge losing cooling power' }
    ]
  },
  'Onida': {
    introTanglish: 'Onida single door and double door fridges parts Karur-la easily serviceable. Direct cool and frost free models repair cost budget-friendly-aa irukkum.',
    costFactorsText: 'Onida refrigerator repair costs in Karur remain highly affordable. Most models use durable mechanical thermostats, standard relays, and robust fan motors that can be tested and fixed on the spot.',
    table: [
      { part: 'PTC Relay / Overload', cost: '₹350 – ₹700', purpose: 'Compressor starter and thermal trip', condition: 'Tick sound kekkudhu, compressor pick-up aagala' },
      { part: 'Direct Cool Thermostat', cost: '₹500 – ₹950', purpose: 'Controls evaporator ice temperature', condition: 'Freezer box over-freezing or no cooling at all' },
      { part: 'Defrost Timer / Bimetal', cost: '₹550 – ₹1,100', purpose: 'Cycles heater in frost-free models', condition: 'Lower fridge warm while freezer has frost' },
      { part: 'Blower Fan Motor', cost: '₹950 – ₹1,750', purpose: 'Pushes chilled air into fridge chamber', condition: 'Fan motor silent or loud vibrating sound' },
      { part: 'Door Gasket Rubber', cost: '₹600 – ₹1,350', purpose: 'Maintains airtight cabinet closure', condition: 'Door rubber hard, not sticking to metal body' },
      { part: 'Gas Charging & Leak Repair', cost: '₹1,600 – ₹2,500', purpose: 'Fixes pinhole leak and recharges gas', condition: 'Compressor running but no cooling inside' }
    ]
  },
  'Toshiba': {
    introTanglish: 'Toshiba Origin Inverter and PureBio refrigerators high-quality parts use pannudhu. Spare cost model series poruthu vary aagum. Technician inspect panni clear estimate tharuvanga.',
    costFactorsText: 'Toshiba refrigerator repair in Karur involves diagnostic evaluation of Origin Inverter dual inverter systems (compressor and fan), electronic sensors, and PureBio deodoriser modules. Clear estimates are provided before commencing work.',
    table: [
      { part: 'Origin Inverter Dual PCB', cost: 'Model dependent (₹2,600 – ₹5,800)', purpose: 'Coordinates inverter compressor and fan speeds', condition: 'Unit won\'t power up, error code blinks' },
      { part: 'Electronic Defrost Sensor', cost: '₹650 – ₹1,350', purpose: 'Monitors ice layer on cooling fins', condition: 'Freezer frosted solid, lower shelves warm' },
      { part: 'Inverter DC Fan Motor', cost: '₹1,300 – ₹2,600', purpose: 'Synchronised airflow delivery', condition: 'Fan stalled, high internal temperature alert' },
      { part: 'Defrost Heater Element', cost: '₹950 – ₹1,850', purpose: 'Melts evaporator frost automatically', condition: 'Cooling airflow choked by ice blockage' },
      { part: 'Door Seal Gasket Set', cost: '₹900 – ₹1,950', purpose: 'Airtight magnetic seal against humidity', condition: 'Warm air infiltration, moisture on door frame' },
      { part: 'Sealed Gas Circuit Service', cost: '₹1,950 – ₹2,950', purpose: 'Nitrogen test, brazing, vacuum & R600a charge', condition: 'Freezer not making ice, coil warm to touch' }
    ]
  },
  'Voltas Beko': {
    introTanglish: 'Voltas Beko ProSmart inverter and HarvestFresh refrigerators parts Karur-la readily available. Model-ku thagapadi spare cost vary aagum. Technician check pannitu honest estimate solvanga.',
    costFactorsText: 'Voltas Beko refrigerator repairs in Karur cover NeoFrost dual cooling circuits, ProSmart inverter compressors, and active fresh blue lights. Component charges are determined by whether the fault lies in sensors, fans, or inverter modules.',
    table: [
      { part: 'PTC Relay / Protector', cost: '₹400 – ₹850', purpose: 'Starts single speed compressors safely', condition: 'Compressor clicking without starting' },
      { part: 'Dual Cooling Defrost Sensor', cost: '₹650 – ₹1,250', purpose: 'Tracks frost across twin evaporators', condition: 'Fridge cabin warm while freezer operates' },
      { part: 'ProSmart Inverter PCB', cost: 'Model dependent (₹2,400 – ₹5,200)', purpose: 'Regulates 4-speed inverter compressor', condition: 'Compressor off, error code displayed' },
      { part: 'Evaporator Fan Motor', cost: '₹1,150 – ₹2,300', purpose: 'Pumps chill through multi-airflow tower', condition: 'Air vents blowing faint or no air' },
      { part: 'Defrost Heater & Thermostat', cost: '₹900 – ₹1,750', purpose: 'Clears accumulated frost automatically', condition: 'Thick ice buildup behind back wall' },
      { part: 'Door Gasket Magnetic Strip', cost: '₹750 – ₹1,650', purpose: 'Prevents warm Karur air from entering', condition: 'Door gap visible, internal sweating' },
      { part: 'Refrigerant Leak & Gas Refill', cost: '₹1,800 – ₹2,800', purpose: 'Repairs leak spot and charges gas to spec', condition: 'Continuous compressor humming with no chill' }
    ]
  },
  'Lloyd': {
    introTanglish: 'Lloyd inverter and direct cool refrigerators spare cost model design poruthu differ aagum. Technician doorstep-la check panni spare details and repair estimate explain pannuvanga.',
    costFactorsText: 'Lloyd refrigerator repair in Karur includes ten-vent cooling systems, inverter compressor drivers, and direct cool thermostats. Technicians test the system on-site with multi-meters before detailing spare costs.',
    table: [
      { part: 'Starter Relay & OLP', cost: '₹380 – ₹800', purpose: 'Supplies start current to compressor', condition: 'Click sound comes every few minutes, no cool' },
      { part: 'Mechanical Thermostat', cost: '₹550 – ₹1,050', purpose: 'Regulates single door cooling cycle', condition: 'Ice over-accumulation or compressor cut-off issue' },
      { part: 'Defrost Sensor (NTC)', cost: '₹600 – ₹1,200', purpose: 'Signals heater to melt ice on frost-free coil', condition: 'Freezer cold but bottom cabin completely warm' },
      { part: 'Airflow Fan Motor', cost: '₹1,100 – ₹2,100', purpose: 'Distributes chill through 10-vent tower', condition: 'Fan noisy or not blowing air into cabin' },
      { part: 'Inverter Motherboard', cost: 'Model dependent (₹2,200 – ₹4,800)', purpose: 'Modulates inverter compressor rpm', condition: 'Fridge dead, power LED blinks repeatedly' },
      { part: 'Magnetic Door Gasket', cost: '₹750 – ₹1,600', purpose: 'Preserves cabinet temperature integrity', condition: 'Door rubber damaged or coming off channel' },
      { part: 'Gas Leak Solder & Recharge', cost: '₹1,750 – ₹2,700', purpose: 'Eliminates gas leak and refills refrigerant', condition: 'Compressor hot to touch with zero cooling' }
    ]
  },
  'Midea': {
    introTanglish: 'Midea multi-door, side-by-side and frost-free refrigerators parts Karur-la technician check pannitu cost solluvanga. Spares exact model series poruthu vary aagum.',
    costFactorsText: 'Midea refrigerator repair in Karur covers electronic dampers, side-by-side dual fan systems, and inverter compressor boards. Diagnostic inspection ensures you only pay for the exact spare required.',
    table: [
      { part: 'NTC Temperature Sensor', cost: '₹650 – ₹1,300', purpose: 'Monitors multi-zone compartment temperatures', condition: 'Erratic cooling or temp display flashing' },
      { part: 'Motorised Air Damper', cost: '₹1,250 – ₹2,500', purpose: 'Regulates chilled air between freezer and fridge', condition: 'Freezer freezing but fridge compartment warm' },
      { part: 'Evaporator DC Blower Fan', cost: '₹1,300 – ₹2,500', purpose: 'Circulates chill across multi-air ducts', condition: 'Fan motor silent or grinding noise' },
      { part: 'Inverter Control Board', cost: 'Model dependent (₹2,500 – ₹5,500)', purpose: 'Controls DC inverter compressor frequency', condition: 'Compressor will not start, fault LED blink' },
      { part: 'Defrost Heater Element', cost: '₹950 – ₹1,850', purpose: 'Melts frost off cooling coil automatically', condition: 'Coil choked with ice, vents blocked' },
      { part: 'Door Gasket Magnetic Strip', cost: '₹850 – ₹1,900', purpose: 'Seals heavy doors against heat entry', condition: 'Door bounces or fails to seal tightly' },
      { part: 'Gas Evacuation & Recharge', cost: '₹1,900 – ₹2,900', purpose: 'Flushes system and charges R600a', condition: 'Zero cooling despite running compressor' }
    ]
  },
  'Blue Star': {
    introTanglish: 'Blue Star domestic refrigerators, deep freezers, and visi coolers parts Karur-la technician inspect pannitu transparent-aa cost solluvanga. Commercial & domestic cooling units-ku spare cost differ aagum.',
    costFactorsText: 'Blue Star refrigeration servicing in Karur covers domestic cooling units, deep freezers, and bottle coolers. Repair costs depend on whether the unit requires thermostat replacement, condenser fan motor service, or heavy-duty compressor gas charging.',
    table: [
      { part: 'Heavy-Duty Starter Relay / Capacitor', cost: '₹550 – ₹1,200', purpose: 'Starts commercial & domestic cooling compressors', condition: 'Compressor clicks or trips circuit breaker' },
      { part: 'Mechanical / Digital Thermostat', cost: '₹750 – ₹1,650', purpose: 'Regulates deep freeze and cooler temperature', condition: 'Ice cream melting or deep freeze temperature warm' },
      { part: 'Condenser Cooling Fan Motor', cost: '₹1,200 – ₹2,400', purpose: 'Dissipates heat from bottom condenser coil', condition: 'Compressor overheating and shutting down' },
      { part: 'Digital Temperature Controller', cost: 'Model dependent (₹1,800 – ₹3,800)', purpose: 'Displays and regulates digital setpoint', condition: 'Display blank or temperature alarm continuously sounding' },
      { part: 'Chest Freezer Door Gasket', cost: '₹850 – ₹1,850', purpose: 'Prevents massive cold loss along lid perimeter', condition: 'Heavy ice accumulation around lid edges' },
      { part: 'Filter Drier & Capillary Tube', cost: '₹750 – ₹1,500', purpose: 'Prevents moisture and regulates gas flow', condition: 'Sealed line choked, partial cooling only' },
      { part: 'Heavy-Duty Gas Charging & Brazing', cost: '₹2,000 – ₹3,200', purpose: 'Repairs puncture leak and refills refrigerant', condition: 'Total loss of sub-zero chilling in deep freezer' }
    ]
  },
  'Motorola': {
    introTanglish: 'Motorola smart inverter frost-free refrigerators parts model series poruthu vary aagum. Technician doorstep visit panni electronic board and cooling system inspect pannuvanga.',
    costFactorsText: 'Motorola smart inverter refrigerators marketed in India feature convertible cooling modes, smart sensor boards, and inverter compressors. Repair costs in Karur are determined by multimeter testing of the inverter PCB and defrost circuitry.',
    table: [
      { part: 'Inverter Starter Module', cost: '₹550 – ₹1,200', purpose: 'Regulates start-up voltage to inverter pump', condition: 'Compressor fails to start up after power cut' },
      { part: 'Smart Multi-Sensor Probe', cost: '₹650 – ₹1,350', purpose: 'Sends temperature data to main processor', condition: 'Display temperature error or erratic cooling' },
      { part: 'Smart Control PCB Board', cost: 'Model dependent (₹2,500 – ₹5,400)', purpose: 'Processes convertible modes and inverter speed', condition: 'Fridge not powering on or unresponsive buttons' },
      { part: 'Evaporator Airflow Fan', cost: '₹1,200 – ₹2,300', purpose: 'Blows chilled air through multi-cooling tower', condition: 'Fan seized or making buzzing vibration' },
      { part: 'Defrost Heater Element', cost: '₹900 – ₹1,750', purpose: 'Clears accumulated frost automatically', condition: 'Frost choking cooling coil behind rear wall' },
      { part: 'Door Gasket Magnetic Seal', cost: '₹800 – ₹1,750', purpose: 'Prevents warm air entry along door edge', condition: 'Door seal loose, condensation on door frame' },
      { part: 'Refrigerant Leak & Gas Charge', cost: '₹1,850 – ₹2,850', purpose: 'Fixes leak spot, vacuums, and charges gas', condition: 'Cabin stays warm while motor runs continuously' }
    ]
  },
  'BPL': {
    introTanglish: 'BPL direct cool single door and frost-free refrigerators parts Karur-la readily available. Honest diagnosis and reasonable spare pricing provide pannuvom.',
    costFactorsText: 'BPL refrigerator repairs in Karur are economical and practical. Most models utilize reliable mechanical thermostats, standard PTC relays, and straightforward wiring circuits that can be serviced quickly on-site.',
    table: [
      { part: 'PTC Starter Relay', cost: '₹350 – ₹700', purpose: 'Starts the hermetic compressor motor', condition: 'Click sound kekkudhu, compressor start aagala' },
      { part: 'Direct Cool Thermostat', cost: '₹500 – ₹950', purpose: 'Cuts off compressor when cabin is chilled', condition: 'Ice buildup inside veg compartment or no cooling' },
      { part: 'Defrost Bimetal Switch', cost: '₹500 – ₹1,000', purpose: 'Controls defrost cycle on frost-free models', condition: 'Freezer working but bottom compartment warm' },
      { part: 'Blower Fan Motor', cost: '₹950 – ₹1,750', purpose: 'Pushes chilled air into fridge chamber', condition: 'Fan motor silent or loud vibrating sound' },
      { part: 'Door Seal Gasket', cost: '₹600 – ₹1,350', purpose: 'Prevents cold air escaping from cabinet', condition: 'Door rubber hard, not sticking to cabinet' },
      { part: 'Drain Tube De-clogging', cost: '₹300 – ₹550', purpose: 'Clears blocked defrost drain hole', condition: 'Water puddling on floor under fridge' },
      { part: 'Gas Charging & Leak Repair', cost: '₹1,600 – ₹2,500', purpose: 'Solders pinhole leak and recharges refrigerant', condition: 'Compressor running but no cooling inside' }
    ]
  },
  'Acer': {
    introTanglish: 'Acerpure smart inverter refrigerators advanced inverter electronics use pannudhu. Spare cost model-ku thagapadi change aagum. Technician inspect panni genuine repair estimate explain pannuvanga.',
    costFactorsText: 'Acer / Acerpure smart inverter refrigerators in India combine multi-air ducting, smart digital displays, and variable frequency compressors. Servicing costs in Karur are established following thorough multimeter testing of sensor voltages and control boards.',
    table: [
      { part: 'Inverter Drive Control Board', cost: 'Model dependent (₹2,600 – ₹5,800)', purpose: 'Regulates variable compressor speed and cycle', condition: 'Compressor fails to spin, control board error' },
      { part: 'Digital Temperature Sensor', cost: '₹650 – ₹1,400', purpose: 'Monitors compartment temperatures accurately', condition: 'Display temp blinking, uneven cooling' },
      { part: 'Evaporator DC Blower Fan', cost: '₹1,300 – ₹2,500', purpose: 'Circulates chill through multi-flow vents', condition: 'Fan stalled or screeching noise from freezer' },
      { part: 'Defrost Heating Element', cost: '₹950 – ₹1,850', purpose: 'Melts frost off cooling coil automatically', condition: 'Coil iced solid, cooling blocked to lower cabin' },
      { part: 'Door Gasket Magnetic Strip', cost: '₹850 – ₹1,800', purpose: 'Preserves airtight internal cooling boundary', condition: 'Door rubber loose, cold air escaping' },
      { part: 'Sealed Gas Circuit Solder & Refill', cost: '₹1,900 – ₹2,900', purpose: 'Fixes leak point and recharges R600a', condition: 'Cooling lost completely over several days' }
    ]
  },
  'Hisense': {
    introTanglish: 'Hisense PureFlat, side-by-side, and multi-door frost free fridges parts model series poruthu vary aagum. Technician doorstep visit panni clear spare estimate tharuvanga.',
    costFactorsText: 'Hisense refrigerator repair in Karur covers PureFlat styling, cross-door airflow dampers, and inverter compressor drive boards. Technicians inspect sensors, fan motors, and control circuitry on-site before detailing costs.',
    table: [
      { part: 'Multi-Sensor Thermistor Probe', cost: '₹650 – ₹1,350', purpose: 'Monitors temperature across multiple zones', condition: 'Display error code or temperature fluctuation' },
      { part: 'Motorised Cross-Air Damper', cost: '₹1,350 – ₹2,650', purpose: 'Directs cool air into specific cabin zones', condition: 'Freezer freezing but fridge cabin remaining warm' },
      { part: 'DC Evaporator Fan Motor', cost: '₹1,300 – ₹2,500', purpose: 'Distributes chill through multi-flow channels', condition: 'Fan seized or high-pitched humming' },
      { part: 'Inverter Compressor Controller', cost: 'Model dependent (₹2,600 – ₹5,600)', purpose: 'Controls inverter compressor modulation', condition: 'Compressor dead, inverter module error light' },
      { part: 'Defrost Heater Element', cost: '₹950 – ₹1,850', purpose: 'Keeps cooling coil clear of frost buildup', condition: 'Ice block forming behind freezer back wall' },
      { part: 'Door Gasket Magnetic Seal', cost: '₹900 – ₹2,000', purpose: 'Maintains airtight boundary on wide doors', condition: 'Door fails to grab frame, condensation inside' },
      { part: 'Refrigerant System Evacuation & Gas', cost: '₹1,950 – ₹2,950', purpose: 'Repairs leak and charges R600a refrigerant', condition: 'Both compartments warm despite running motor' }
    ]
  }
};

module.exports = brandPricingData;
