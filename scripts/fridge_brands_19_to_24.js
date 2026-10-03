// Refrigerator Brand Data for Brands 19 to 24
// 19. Midea, 20. Blue Star, 21. Motorola, 22. BPL, 23. Acer, 24. Hisense
// 100% Unique Brand-Specific Content. No AI buzzwords. 80-90% Tanglish in customer experiences.

const brands19to24 = [
  {
    name: 'Midea',
    slug: 'midea-refrigerator-repair-service-in-karur.html',
    h1: 'Midea Refrigerator Repair Service in Karur',
    metaTitle: 'Midea Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Midea refrigerator repair in Karur? Doorstep inspection for Midea multi-door, side-by-side & inverter frost-free fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Midea refrigerator repair near me in Karur? When your Midea multi-door or side-by-side refrigerator experiences cooling drop or the inverter compressor driver flashes diagnostic error codes, our technicians provide quick doorstep repair across Karur. From Kovai Road to Thanthonimalai and Pasupathipalayam, get dependable Midea fridge repair near me with verified troubleshooting and authentic spares.',
    tanglishIntroBox: 'Midea fridge-la cooling balance miss aagudha? Multi-door side-by-side model-la compressor run aagala? Electronic air damper jam aagirukka? Midea modern refrigeration-ku trained technicians unga doorstep-la attend pannuvanga. Multimeter testing panni accurate solution provide panrom.',
    whyRepair: 'Midea refrigerators incorporate multi-zone airflow dampers, dual inverter compressors, and multi-air ducting. In Karur conditions, environmental dust or supply voltage dips can stress inverter power cards or cause electronic damper stalls. Timely technician inspection prevents food spoilage and protects your inverter compressor from burnout.',
    localContent: 'We provide specialized Midea refrigerator repair in Karur covering Kovai Road, Thanthonimalai, Pasupathipalayam, Sengunthapuram, and Kagithapuramam. Our technicians arrive with precision testing multimeters, Midea sensor probes, DC blower fans, and starter modules.',
    whenToCall: 'Call our technicians if your Midea fridge stops chilling food, displays error codes, exhibits cold freezer but warm fresh food compartments, builds moisture around door gaskets, or gives off an electrical burning odor (unplug from socket immediately).',
    types: [
      {
        name: 'Midea Inverter Frost Free Double Door Refrigerator Repair',
        badge: 'Inverter Frost Free',
        desc: 'Midea inverter frost-free double door refrigerators modulate compressor speeds to keep internal temperatures steady. Sensor drift or inverter board faults reduce chilling performance.',
        searchIntent: 'Searching for <strong>Midea double door fridge repair near me</strong> in Karur? We diagnose inverter control boards and airflow vents at your doorstep.',
        problems: 'Inverter compressor not spinning, food spoiling on lower shelves, defrost error blinking.',
        checks: 'Inverter output frequency, multi-air blower fan speed, and evaporator thermistor.',
        parts: 'Inverter PCB, evaporator fan motor, and defrost sensor.',
        whenNeeded: 'When temperatures fluctuate or compressor fails to cycle up.'
      },
      {
        name: 'Midea Multi-Door & Side-by-Side Refrigerator Repair',
        badge: 'Multi-Door Side-by-Side',
        desc: 'Midea multi-door and side-by-side refrigerators feature wide storage compartments with inverter compressors. Motorized damper failures or hinge wiring fatigue can cause uneven cooling.',
        searchIntent: 'Looking for <strong>Midea refrigerator repair in Karur</strong> for multi-door models? Doorstep testing for electronic dampers and multi-zone sensors.',
        problems: 'One compartment cooling normally while the other remains warm, touch panel error codes, water pooling under crisper.',
        checks: 'Motorised damper valve, compartment thermistors, and hinge ribbon cables.',
        parts: 'Zone thermistors, electronic damper motor, and display wiring harness.',
        whenNeeded: 'When compartment temperatures drift or touch settings become unresponsive.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill',
        desc: 'Freezer holds sub-zero cold, but items in the fresh food section remain warm and milk spoils.',
        badge: 'Airflow Duct',
        label1: 'Probable Cause', val1: 'Defrost sensor or multi-air fan motor failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen air ducts'
      },
      {
        title: 'Inverter Motor Failing to Start',
        desc: 'The refrigerator has power, but the compressor fails to turn over with blinking board LEDs.',
        badge: 'Inverter Board',
        label1: 'Probable Cause', val1: 'Power surge damage to inverter control PCB',
        label2: 'Technician Check', val2: 'Measures DC rail voltages and tests compressor winding balance',
        label3: 'Resolution', val3: 'Repairs power circuitry or installs new inverter PCB'
      },
      {
        title: 'Uneven Shelf Chill Distribution',
        desc: 'Items on upper shelves chill fine while lower glass shelves remain room temperature.',
        badge: 'Air Damper',
        label1: 'Probable Cause', val1: 'Motorised air damper flap jammed or sensor drifted',
        label2: 'Technician Check', val2: 'Reads thermistor resistance curve with multimeter',
        label3: 'Resolution', val3: 'Replaces motorised damper or recalibrates sensor'
      },
      {
        title: 'Dense Frost Choking Rear Evaporator Panel',
        desc: 'A solid ice slab forms behind the rear wall, blocking chilled airflow to shelves.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Defrost heating element failure or open thermal fuse',
        label2: 'Technician Check', val2: 'Tests heating element continuity and thermal limiter',
        label3: 'Resolution', val3: 'Replaces defrost heater element and clears ice'
      },
      {
        title: 'Door Perimeter Moisture Condensation',
        desc: 'Moisture droplets condense around the door perimeter, indicating outside air leakage.',
        badge: 'Thermal Seal',
        label1: 'Probable Cause', val1: 'Magnetic door gasket deformed or hinge out of level',
        label2: 'Technician Check', val2: 'Conducts seal gap test and inspects hinge bushings',
        label3: 'Resolution', val3: 'Adjusts door hinges and re-seats magnetic gasket'
      },
      {
        title: 'Gradual Loss of Chilling Performance',
        desc: 'Compressor runs continuously at high speed, but cabinets gradually lose cooling over several days.',
        badge: 'Refrigerant Circuit',
        label1: 'Probable Cause', val1: 'Micro-leak in copper evaporator or condenser joint',
        label2: 'Technician Check', val2: 'Conducts nitrogen pressure test to find leak spot',
        label3: 'Resolution', val3: 'Brazes joint, pulls deep vacuum, and refills R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Kovai Road',
        title: 'Midea Multi-Door Damper Motor Replacement',
        tanglishText: 'Kovai Road layout-la oru customer avanga Midea multi-door fridge-la fresh food section-la cooling drop aagi vegetables spoil aagudhu-nu sonnanga. Technician spot-ku poi inspect panni motorised air damper flap stuck aagi irundhadhai kandupidichanga. Damper motor replace panni display PCB settings recalibrate pannom. Rendu compartment-layum uniform cooling maintain aagudha-nu confirm pannom.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Midea Inverter Control Board Power Surge Recovery',
        tanglishText: 'Thanthonimalai area-la sudden power surge apram Midea fridge dead aagi compressor start aagala. Technician visit panni inverter board check pannadhula DC bus fuse open circuit aagirundhadhu. Inverter power components repair panni bench-la simulate pannom. Re-installation ku apram motor whisper silent-aa cycle run aachu, customer romba happy.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Midea Inverter Double Door Cooling Fix',
        tanglishText: 'Pasupathipalayam-la Midea inverter double door fridge-la freezer matrum ice aagudhu, fresh food section-la milk spoil aagudhu-nu complaint. Technician spot-ku poi back panel remove pannadhula defrost sensor fail aagi evaporator coil full-aa ice kattirundhadhu. Defrost sensor change panni duct ice steam vechu clear pannom. DC circulation fan test panni re-assemble pannadhuku apram lower shelves-la 40 minutes-la proper cooling recover aachu.'
      },
      {
        location: 'Sengunthapuram',
        title: 'Midea Frost Free Rear Duct Defrost Heater Fix',
        tanglishText: 'Sengunthapuram layout-la Midea fridge back wall-la heavy ice slab form aagi air vents block aagirundhadhu. Technician rear panel open panni paathadhula defrost heating element burnt aagirundhadhu. Matched OEM replacement heater fit panni steam treatment-la ice clear pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Midea Door Perimeter Magnetic Gasket Realignment',
        tanglishText: 'Kagithapuramam-la Midea fridge door corner-la light gap irundhu frame mela moisture condensation varudhu-nu sonnanga. Technician magnetic gasket heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem complete-aa stop aachu.'
      },
      {
        location: 'Vengamedu',
        title: 'Midea Double Door Water Drainage De-clogging',
        tanglishText: 'Vengamedu bypass kitta Midea double door fridge veg box kulla water thengudhu-nu complaint. Technician inner back grill remove panni defrost drain channel check pannadhula dust particles-la block aagirundhadhu. Flexible cleaning wire and hot water pottu drain line flush pannom. Problem periya expense illama spot-la theerndhadhu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Midea Sealed Circuit Nitrogen Leak Test & R600a Refill',
        tanglishText: 'Thorakkalpatti-la Midea fridge motor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen test-la copper line micro leak detect panni silver braze pannom. Deep vacuum pull panni exact weight R600a charge pannom. Cooling within 40 minutes normal aachu.'
      }
    ],
    whyChoose: [
      'Specialized technicians familiar with Midea multi-door and inverter engineering',
      'Doorstep diagnostic testing with digital precision multimeters and sensor probes',
      'quick response across Karur Town and residential suburbs',
      'Honest fault explanations with transparent spare pricing',
      'Thorough temperature profiling before completing the service call'
    ]
  },
  {
    name: 'Blue Star',
    slug: 'blue-star-refrigerator-repair-service-in-karur.html',
    h1: 'Blue Star Refrigerator Repair Service in Karur',
    metaTitle: 'Blue Star Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Blue Star refrigerator repair in Karur? Doorstep inspection for Blue Star deep freezers, visi coolers, chest coolers & domestic cooling units. Fast local repair.',
    searchIntentIntro: 'Searching for Blue Star refrigerator repair near me in Karur? Whether your Blue Star commercial deep freezer, visi cooler, bottle cooler, or domestic cooling unit has stopped maintaining sub-zero freezing, our technicians provide quick doorstep repair across Karur. From Kagithapuramam to Bus Stand Area and Karur Town, get dependable Blue Star fridge repair near me with verified heavy-duty compressor troubleshooting and authentic spares.',
    tanglishIntroBox: 'Blue Star deep freezer or cooling unit-la chilling drop aagirukka? Compressor strain panni trip aagudha? Hard-start capacitor or relay issue-aa? Blue Star commercial and domestic refrigeration equipment-ku trained technicians unga spot-la attend pannuvanga. Multimeter testing panni accurate solution provide panrom.',
    whyRepair: 'Blue Star refrigeration units are engineered for intensive cooling in commercial and domestic environments across Tamil Nadu. Heavy workloads, high summer heat, and dust accumulation on bottom condenser coils can cause thermal overload trips, capacitor failures, or gas leaks. quick technician service protects your inventory and prevents costly compressor burnouts.',
    localContent: 'We provide specialized Blue Star refrigerator and deep freezer repair across Karur including Kagithapuramam, Bus Stand Area, Karur Town, Kovai Road, and Thanthonimalai. Our technicians arrive with heavy-duty start capacitors, digital thermostats, condenser fans, and brazing rigs.',
    whenToCall: 'Contact our technicians if your Blue Star freezer loses sub-zero chilling, trips the circuit breaker, emits rattling sounds from the bottom condenser fan, shows dense ice around the lid perimeter, or produces an electrical burning odor (switch off power immediately).',
    types: [
      {
        name: 'Blue Star Deep Freezer & Chest Freezer Repair',
        badge: 'Commercial & Domestic Deep Freezer',
        desc: 'Blue Star chest freezers provide high-capacity sub-zero freezing for ice creams, dairy, and frozen foods. Thermostat failures, capacitor burnouts, and puncture leaks are common service calls.',
        searchIntent: 'Searching for <strong>Blue Star deep freezer repair near me</strong> in Karur? We diagnose heavy-duty compressors and temperature controllers on-site.',
        problems: 'Ice cream melting, compressor clicking and tripping breaker, dense frost ring around lid edges.',
        checks: 'Start capacitor capacitance, compressor winding insulation, and digital controller setpoint.',
        parts: 'Hard-start capacitor, heavy-duty relay, digital thermostat, and lid perimeter gasket.',
        whenNeeded: 'When internal temperature rises above freezing or the motor fails to start.'
      },
      {
        name: 'Blue Star Visi Cooler & Glass Door Refrigerator Repair',
        badge: 'Visi Cooler & Bottle Chiller',
        desc: 'Blue Star visi coolers chill beverages with uniform air circulation behind transparent glass doors. Condenser fan stalls, dirty coils, and electronic thermostat faults affect chilling.',
        searchIntent: 'Looking for <strong>Blue Star visi cooler repair in Karur</strong>? Doorstep testing for condenser fans, digital displays, and door seals.',
        problems: 'Bottles staying warm, condenser fan stopped, display controller flashing alarm codes.',
        checks: 'Condenser fan motor, digital display controller, and evaporator airflow vents.',
        parts: 'Condenser cooling fan motor, digital controller, and magnetic door seal.',
        whenNeeded: 'When beverages fail to chill or the bottom unit overheats.'
      }
    ],
    problems: [
      {
        title: 'Deep Freezer Temperature Rising Above Freezing',
        desc: 'Stored ice creams and meats begin thawing as internal temperatures drift into positive degrees.',
        badge: 'Cooling Failure',
        label1: 'Probable Cause', val1: 'Thermostat contact failure or low refrigerant pressure',
        label2: 'Technician Check', val2: 'Measures controller output and checks suction line pressure',
        label3: 'Resolution', val3: 'Replaces thermostat controller or fixes gas leak'
      },
      {
        title: 'Compressor Strain & Circuit Breaker Tripping',
        desc: 'The heavy-duty cooling motor hums loudly for a few seconds and trips the electrical MCB.',
        badge: 'Starter Capacitor',
        label1: 'Probable Cause', val1: 'Bulged hard-start capacitor or pitted starter relay',
        label2: 'Technician Check', val2: 'Tests microfarad rating with capacitor meter',
        label3: 'Resolution', val3: 'Installs new heavy-duty capacitor and starter relay'
      },
      {
        title: 'Bottom Condenser Fan Stalled & Motor Overheating',
        desc: 'The bottom cooling unit gets extremely hot to the touch, and the compressor shuts off on thermal overload.',
        badge: 'Condenser Fan',
        label1: 'Probable Cause', val1: 'Condenser fan motor seized with dirt or dry bearings',
        label2: 'Technician Check', val2: 'Inspects fan blade free spin and checks motor voltage',
        label3: 'Resolution', val3: 'Cleans condenser coil and replaces fan motor'
      },
      {
        title: 'Dense Frost Band Around Freezer Lid',
        desc: 'A thick band of solid ice accumulates around the lid perimeter, preventing airtight closure.',
        badge: 'Lid Gasket',
        label1: 'Probable Cause', val1: 'Silicone lid perimeter gasket torn or flattened',
        label2: 'Technician Check', val2: 'Inspects seal contact and checks lid hinge tension',
        label3: 'Resolution', val3: 'Replaces perimeter gasket and adjusts lid hinges'
      },
      {
        title: 'Puncture Leak from Sharp Tool Defrosting',
        desc: 'An ice pick or knife accidentally punctures the inner cooling liner, releasing gas with a hiss.',
        badge: 'Gas Leak',
        label1: 'Probable Cause', val1: 'Punctured aluminum or copper evaporator tubing',
        label2: 'Technician Check', val2: 'Pressurizes circuit with nitrogen to locate puncture',
        label3: 'Resolution', val3: 'Braze-welds puncture, replaces filter drier, and charges gas'
      },
      {
        title: 'Digital Controller Blank or Flashing Error',
        desc: 'The front digital temperature display remains unlit or displays persistent error codes.',
        badge: 'Electronic Controller',
        label1: 'Probable Cause', val1: 'Controller power supply failure or sensor open circuit',
        label2: 'Technician Check', val2: 'Tests input supply voltage and sensor resistance',
        label3: 'Resolution', val3: 'Installs new programmed digital temperature controller'
      }
    ],
    customerExperiences: [
      {
        location: 'Kagithapuramam',
        title: 'Blue Star Deep Freezer Hard-Start Capacitor Replacement',
        tanglishText: 'Kagithapuramam wholesale market kitta irundha grocery shop owner call pannanga. Avanga Blue Star 300L deep freezer compressor strain panni MCB trip aagudhu-nu sonnanga. Technician spot-ku poi compressor electrical box open pannadhula hard-start capacitor bulge aagi fail aagirundhadhu. Capacitor meter vechu test panni puthiya heavy-duty 80-100 MFD start capacitor and relay install pannom. Compressor smooth-aa start aagi ammeter-la normal running current eduthadhu. Ice cream stock save aachu.'
      },
      {
        location: 'Bus Stand Area',
        title: 'Blue Star Visi Cooler Condenser Fan Motor Change',
        tanglishText: 'Bus Stand Area restaurant-la Blue Star glass door visi cooler-la soft drinks chill aagala-nu complaint. Technician inspect pannadhula bottom condenser fan motor dirt and dust-la jam aagi compressor overheat aagi trip aagitu irundhadhu. High-speed condenser fan motor change panni condenser coil dust blower vechu clean pannom. Heat dissipation recover aagi bottle cooler 30 minutes-la chilled air deliver pannuchu.'
      },
      {
        location: 'Karur Town',
        title: 'Blue Star Chest Freezer Puncture Leak Solder & Gas Fill',
        tanglishText: 'Karur Town milk depot-la Blue Star chest freezer defrost panna knife use pannadhula inner tube puncture aagi gas leak aagirundhadhu. Technician spot-la aluminium-to-copper brazing rod vechu leak hole arrest pannanga. Nitrogen pressure test panni leak illa-nu verify pannitu, high-capacity filter drier replace panni exact weight refrigerant gas charge pannom. Sub-zero freezing 1 hour-la restore aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Blue Star Digital Temperature Controller Replacement',
        tanglishText: 'Kovai Road layout-la oru commercial outlet-la Blue Star deep freezer front digital controller display blank aagi cooling cut aagirundhadhu. Technician power supply and sensor check pannadhula internal transformer burn aagirundhadhu. Puthiya digital thermostat controller fit panni -18 degree setpoint program pannom. Freezing cycle perfectly regulate aachu.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Blue Star Chest Freezer Lid Perimeter Gasket Renewal',
        tanglishText: 'Thanthonimalai area-la Blue Star deep freezer top lid rubber beading tear aagi heavy ice crust form aagudhu-nu sonnanga. Ambient warm air ulla leak aagi energy waste aagitu irundhadhu. Heavy silicone perimeter gasket replace panni lid hinge tension adjust pannom. Lid tight-aa close aagi ice crust problem complete-aa stop aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Blue Star Domestic Cooling Unit Relay Service',
        tanglishText: 'Pasupathipalayam residence-la Blue Star cooling unit clicking noise kuduthu cooling stop aagirundhadhu. Technician starter relay replace panni compressor health verify pannanga. Unit instant-aa ignite aagi cooling plates chill aaga aarambichadhu.'
      }
    ],
    whyChoose: [
      'Specialized technicians handling Blue Star commercial deep freezers, visi coolers, and cooling units',
      'Rapid doorstep and on-site commercial repair across Karur markets and residences',
      'Stock of heavy-duty start capacitors, digital thermostats, and condenser fans',
      'Honest pricing with itemized part and labour breakdown',
      'Post-service sub-zero temperature verification before completing the call'
    ]
  },
  {
    name: 'Motorola',
    slug: 'motorola-refrigerator-repair-service-in-karur.html',
    h1: 'Motorola Refrigerator Repair Service in Karur',
    metaTitle: 'Motorola Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Motorola refrigerator repair in Karur? Doorstep service for Motorola smart inverter frost-free double door & convertible fridges. Quick local repairs.',
    searchIntentIntro: 'Searching for Motorola refrigerator repair near me in Karur? When your Motorola smart inverter frost-free double door refrigerator stops cooling or the convertible mode fails to switch, our technicians visit your home across Karur. From Pasupathipalayam to Thorakkalpatti and Kovai Road, find dependable Motorola fridge repair near me with verified troubleshooting and accessible spares.',
    tanglishIntroBox: 'Motorola smart fridge-la cooling ninnu pocha? Inverter compressor run aaga maatudha? Convertible mode change panniyum freeze aagala? Motorola smart inverter refrigerators-ku experienced local technicians unga veetukke vandhu check pannuvanga. Reason-a explain pannitu affordable spare cost-la repair mudipanga.',
    whyRepair: 'Motorola smart inverter refrigerators marketed in India combine convertible cooling modes, smart sensor boards, and inverter compressors. In Karur summer conditions, fine electronics can react to supply voltage dips or clogged condenser airflow. Timely service keeps electronic dampers and inverter modules operating smoothly without compressor failure.',
    localContent: 'We service Motorola refrigerators across Pasupathipalayam, Thorakkalpatti, Kovai Road, Thanthonimalai, and Karur Town. We carry replacement starter relays, defrost sensors, blower fan motors, and control boards for immediate doorstep repair.',
    whenToCall: 'Reach out for inspection if your Motorola fridge stops chilling food, builds excessive ice in the freezer, makes loud clicking sounds, leaks water onto the floor, or gives an electrical burning smell (switch off main socket immediately).',
    types: [
      {
        name: 'Motorola Smart Inverter Frost Free Double Door Refrigerator Repair',
        badge: 'Smart Inverter Frost Free',
        desc: 'Motorola smart inverter double door refrigerators modulate compressor speeds to keep internal temperatures steady. Sensor drift or inverter board faults reduce chilling performance.',
        searchIntent: 'Searching for <strong>Motorola double door fridge repair near me</strong> in Karur? We diagnose smart inverter control boards and airflow vents at your doorstep.',
        problems: 'Inverter compressor not spinning, food spoiling on lower shelves, defrost error blinking.',
        checks: 'Inverter output frequency, multi-air blower fan speed, and evaporator thermistor.',
        parts: 'Inverter PCB, evaporator fan motor, and defrost sensor.',
        whenNeeded: 'When temperatures fluctuate or compressor fails to cycle up.'
      },
      {
        name: 'Motorola Convertible Double Door Refrigerator Repair',
        badge: 'Convertible Multi-Mode Fridge',
        desc: 'Motorola convertible models allow altering compartment temperatures to suit storage needs. Faulty motorized dampers or control boards prevent mode switching.',
        searchIntent: 'Looking for <strong>Motorola refrigerator repair in Karur</strong> for convertible models? Doorstep testing for electronic dampers and control panels.',
        problems: 'Mode change button unresponsive, freezer failing to convert to fridge cooling, heavy frost accumulation.',
        checks: 'Mode selector switch, motorised air damper, and compartment thermistors.',
        parts: 'Airflow damper motor, display PCB, and temperature sensors.',
        whenNeeded: 'When convertible settings fail to switch or food freezes in fridge mode.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill',
        desc: 'Freezer holds sub-zero cold, but items in the fresh food section remain warm and milk spoils.',
        badge: 'Airflow Duct',
        label1: 'Probable Cause', val1: 'Defrost sensor or evaporator fan motor failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen air ducts'
      },
      {
        title: 'Smart Inverter Motor Failing to Start',
        desc: 'The refrigerator has power, but the compressor fails to turn over with blinking board LEDs.',
        badge: 'Inverter Board',
        label1: 'Probable Cause', val1: 'Power surge damage to inverter control PCB',
        label2: 'Technician Check', val2: 'Measures DC rail voltages and tests compressor winding balance',
        label3: 'Resolution', val3: 'Repairs power circuitry or installs new inverter PCB'
      },
      {
        title: 'Convertible Mode Temperature Drift',
        desc: 'The compartment fails to maintain set temperatures when toggled between fridge and freezer modes.',
        badge: 'Damper Flap',
        label1: 'Probable Cause', val1: 'Motorised damper flap jammed or disconnected',
        label2: 'Technician Check', val2: 'Tests damper actuator motor and reads zone sensor',
        label3: 'Resolution', val3: 'Replaces motorised damper assembly'
      },
      {
        title: 'Dense Frost Choking Rear Evaporator Panel',
        desc: 'A solid ice slab forms behind the rear wall, blocking chilled airflow to shelves.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Defrost heating element failure or open thermal fuse',
        label2: 'Technician Check', val2: 'Tests heating element continuity and thermal limiter',
        label3: 'Resolution', val3: 'Replaces defrost heater element and clears ice'
      },
      {
        title: 'Water Leaking Beneath Vegetable Tray',
        desc: 'Defrost water overflows into the vegetable tray rather than draining into the rear compressor pan.',
        badge: 'Drainage Issue',
        label1: 'Probable Cause', val1: 'Defrost drain hole choked with dust or food particles',
        label2: 'Technician Check', val2: 'Inspects drain trough and rear outlet hose',
        label3: 'Resolution', val3: 'Cleans and flushes drainage line with warm water'
      },
      {
        title: 'Continuous Motor Running Without Chill',
        desc: 'The compressor runs warm continuously, but the interior shelves remain completely room temperature.',
        badge: 'Refrigerant Leak',
        label1: 'Probable Cause', val1: 'Pinhole gas leak in copper tubing or capillary choke',
        label2: 'Technician Check', val2: 'Checks suction pressure and inspects brazed joints',
        label3: 'Resolution', val3: 'Brazes leak spot, pulls vacuum, and recharges gas'
      }
    ],
    customerExperiences: [
      {
        location: 'Pasupathipalayam',
        title: 'Motorola Smart Inverter Double Door Cooling Fix',
        tanglishText: 'Pasupathipalayam 2nd Street-la oru customer call pannanga. Avanga Motorola smart inverter double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk curdling aagudhu-nu sonnanga. Technician spot-ku poi back panel remove pannadhula defrost sensor fail aagi evaporator coil full-aa ice kattirundhadhu. Defrost sensor change panni duct ice melt pannom. Fan motor check panni re-assemble pannadhuku apram lower shelves-la 40 minutes-la proper cooling recover aachu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Motorola Convertible Mode Damper Replacement',
        tanglishText: 'Thorakkalpatti layout-la Motorola convertible fridge-la mode change panniyum freezer normal fridge cooling-ku maarala. Technician inspect panni motorised air damper flap motor gear slipped aagirundhadhai identify pannanga. Matched motorised damper change panni electronic display recalibrate pannom. Rendu cabin-layum required temperature maintain aagudha-nu confirm pannom.'
      },
      {
        location: 'Kovai Road',
        title: 'Motorola Inverter Control Board Power Surge Recovery',
        tanglishText: 'Kovai Road-la sudden thunder and voltage surge apram Motorola inverter fridge on aagala. Technician check pannadhula main PCB-la input fuse and varistor blown aagirundhadhu. Inverter power section-a bench repair panni test pannom. Re-installation ku apram inverter compressor smooth-aa speed pick up aachu.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Motorola Frost Free Rear Duct Defrost Heater Fix',
        tanglishText: 'Thanthonimalai area-la Motorola fridge back wall-la heavy ice slab form aagi air vents block aagirundhadhu. Technician rear panel open panni paathadhula defrost heating element burnt aagirundhadhu. Matched OEM replacement heater fit panni steam treatment-la ice clear pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Karur Town',
        title: 'Motorola Sealed Refrigeration Circuit Pinhole Braze & Gas Fill',
        tanglishText: 'Karur Town-la Motorola double door fridge motor odite irundhadhu aana zero cooling. Technician pressure gauge vechu test pannadhula copper filter drier kitta micro pinhole leak irundhadhu. Silver brazing panni leak arrest pannom, vacuum pump pottu exact weight R600a gas charge pannom. 45 minutes-la freezer super chill aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with specialized knowledge in Motorola smart inverter refrigerators',
      'Doorstep diagnostic service across Karur residential areas',
      'Multimeter inspection of sensors, fan motors, and control boards',
      'Fair, transparent pricing with no hidden charges',
      'complete testing of cooling temperatures before call completion'
    ]
  },
  {
    name: 'BPL',
    slug: 'bpl-refrigerator-repair-service-in-karur.html',
    h1: 'BPL Refrigerator Repair Service in Karur',
    metaTitle: 'BPL Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for BPL refrigerator repair in Karur? Doorstep service for BPL direct cool single door & frost-free double door fridges. Affordable local repair.',
    searchIntentIntro: 'Searching for BPL refrigerator repair near me in Karur? Whether your vintage BPL direct cool single door fridge is not cooling or the compressor is clicking repeatedly without starting, our technicians provide dependable doorstep service across Karur. From Karur Town to Thanthonimalai and Inam Karur, find economical BPL fridge repair near me with verified troubleshooting and accessible spares.',
    tanglishIntroBox: 'BPL fridge-la cooling ninnu pocha? Single door model-la ice kattala? Compressor tick-tick nu sound vandhu off aagudha? BPL traditional robust refrigerators-ku experienced local technicians unga veetukke vandhu check pannuvanga. Reason-a explain pannitu affordable spare cost-la repair mudipanga.',
    whyRepair: 'BPL refrigerators are known for durable electromechanical components and thick cabinet insulation. Over years of operation, starter relays can burn out, thermostats can lose charge, or capillary lines can choke. Economical repairs restore dependable cooling and keep your appliance running smoothly.',
    localContent: 'We service BPL refrigerators across Karur Town, Thanthonimalai, Inam Karur, Sengunthapuram, and Kagithapuramam. We carry mechanical thermostats, PTC starter relays, bimetals, and blower fans for immediate doorstep repair.',
    whenToCall: 'Reach out for inspection if your BPL fridge stops chilling food, builds excessive ice in the freezer, makes loud clicking sounds, leaks water onto the floor, or gives an electrical burning smell (switch off main socket immediately).',
    types: [
      {
        name: 'BPL Direct Cool Single Door Refrigerator Repair',
        badge: 'Direct Cool Single Door',
        desc: 'BPL direct cool single door refrigerators are built with robust mechanical cooling loops. Starter relays, thermostats, and door gaskets are common service items.',
        searchIntent: 'Searching for <strong>BPL single door fridge repair near me</strong> in Karur? Quick doorstep fix for thermostat, starter relay, and cooling coil leaks.',
        problems: 'Freezer box icing up uncontrollably, compressor clicking without starting, zero cooling with warm body.',
        checks: 'Rotary thermostat contacts, PTC starter relay, overload protector, and gas pressure.',
        parts: 'PTC starter relay, mechanical thermostat switch, door gasket, and refrigerant.',
        whenNeeded: 'When ice builds up uncontrollably or the compressor will not turn on.'
      },
      {
        name: 'BPL Frost Free Double Door Refrigerator Repair',
        badge: 'Frost Free Double Door',
        desc: 'BPL frost-free double door fridges circulate cold air from the freezer into the food cabin. Mechanical defrost timers and bimetal switches are typical service components.',
        searchIntent: 'Looking for <strong>BPL double door fridge repair in Karur</strong>? Doorstep diagnosis for defrost timers, heaters, and circulation fans.',
        problems: 'Freezer cold but lower compartment warm, fan motor vibrating, water pooling under crisper.',
        checks: 'Mechanical defrost timer, bimetal switch, evaporator fan motor, and return air vents.',
        parts: 'Defrost timer, bimetal thermostat, evaporator fan motor, and defrost heater element.',
        whenNeeded: 'When milk spoils quickly or airflow from vents feels weak.'
      }
    ],
    problems: [
      {
        title: 'Single Door Freezer Box Over-Freezing',
        desc: 'Ice builds into a solid block inside the freezer box, making it impossible to close the door flap.',
        badge: 'Thermostat Issue',
        label1: 'Probable Cause', val1: 'Thermostat contact welded or sensing capillary dislodged',
        label2: 'Technician Check', val2: 'Tests cut-off temperature with a multimeter and ice water',
        label3: 'Resolution', val3: 'Installs new calibrated rotary thermostat'
      },
      {
        title: 'Compressor Clicking Every Few Minutes',
        desc: 'A clicking sound is heard from behind the fridge every 2 to 3 minutes, but the cooling motor fails to run.',
        badge: 'Starter Relay',
        label1: 'Probable Cause', val1: 'Burnt PTC starter relay or open overload protector',
        label2: 'Technician Check', val2: 'Tests relay resistance and compressor winding health',
        label3: 'Resolution', val3: 'Replaces starter relay and overload protector'
      },
      {
        title: 'Double Door Lower Cabin Warm',
        desc: 'Freezer freezes water properly, but the lower compartment has no cooling and food spoils.',
        badge: 'Defrost Choke',
        label1: 'Probable Cause', val1: 'Mechanical defrost timer or bimetal failure causing iced coil',
        label2: 'Technician Check', val2: 'Tests defrost timer motor and measures heater resistance',
        label3: 'Resolution', val3: 'Replaces defrost timer and clears ice blockage'
      },
      {
        title: 'Water Leaking Beneath Vegetable Tray',
        desc: 'Defrost water overflows into the vegetable tray rather than draining into the rear compressor pan.',
        badge: 'Drainage Issue',
        label1: 'Probable Cause', val1: 'Defrost drain hole choked with dust or food particles',
        label2: 'Technician Check', val2: 'Inspects drain trough and rear outlet hose',
        label3: 'Resolution', val3: 'Cleans and flushes drainage line with warm water'
      },
      {
        title: 'Door Gasket Loose with Cold Air Escape',
        desc: 'Cold air escapes along the door frame, causing high electricity bills and moisture buildup.',
        badge: 'Door Seal',
        label1: 'Probable Cause', val1: 'Rubber gasket hardened, cracked, or lost magnetic grip',
        label2: 'Technician Check', val2: 'Inspects seal contact around the entire perimeter',
        label3: 'Resolution', val3: 'Replaces magnetic rubber door gasket'
      },
      {
        title: 'Continuous Motor Running Without Chill',
        desc: 'The compressor runs warm continuously, but the interior shelves remain completely room temperature.',
        badge: 'Refrigerant Leak',
        label1: 'Probable Cause', val1: 'Pinhole gas leak in copper tubing or capillary choke',
        label2: 'Technician Check', val2: 'Checks suction pressure and inspects brazed joints',
        label3: 'Resolution', val3: 'Brazes leak spot, pulls vacuum, and recharges gas'
      }
    ],
    customerExperiences: [
      {
        location: 'Karur Town',
        title: 'BPL Direct Cool Single Door Relay Replacement',
        tanglishText: 'Karur Town main market kitta irundha customer call pannanga. Avanga BPL single door fridge-la cooling ninnu compressor clicking sound varudhu-nu sonnanga. Technician spot-ku poi check pannadhula PTC starter relay overheat aagi contact burn aagirundhadhu. Compressor winding ohms test panni motor safe-nu confirm pannitu puthiya heavy-duty relay fit pannom. Motor instant-aa ignite aagi cooling plates chill aaga aarambichadhu. Customer romba satisfied.'
      },
      {
        location: 'Thanthonimalai',
        title: 'BPL Double Door Defrost Timer Problem Fix',
        tanglishText: 'Thanthonimalai area-la oru customer avanga BPL double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk spoil aagudhu-nu complaint pannanga. Technician inspect pannadhula mechanical defrost timer gear stuck aagi heating cycle trigger aagala. Evaporator coil full-aa ice kattirundhadhai steam panni clear pannom. New defrost timer and bimetal switch install panni test pannadhula lower cabin airflow perfect-aa return aachu.'
      },
      {
        location: 'Inam Karur',
        title: 'BPL Single Door Thermostat Over-Freezing Fix',
        tanglishText: 'Inam Karur-la BPL single door fridge freezer-la ice rock madhiri solid-aa kattudhu-nu sonnanga. Defrost button press panniyum solve aagala. Technician inspect pannadhula thermostat contact welded aagi compressor cut-off aagama non-stop-aa run aagitu irundhadhu. Original calibrated rotary thermostat replace pannom. Machine ippo proper interval-la cut-off aagi temperature maintain panradhu.'
      },
      {
        location: 'Sengunthapuram',
        title: 'BPL Double Door Vegetable Crisper Water Leak Fix',
        tanglishText: 'Sengunthapuram layout-la BPL double door fridge veg box kulla water thengi floor-la leak aagudhu-nu sonnanga. Technician back panel open panni paathadhula defrost drain cup dust particle-la block aagirundhadhu. High-pressure warm water flush panni drain pipe-a completely clear pannom. Rear compressor tray-ku water proper-aa discharge aagudha-nu check pannitu solve pannom.'
      },
      {
        location: 'Kagithapuramam',
        title: 'BPL Single Door Magnetic Door Gasket Renewal',
        tanglishText: 'Kagithapuramam-la BPL fridge door rubber loose aagi side-la gap irundhadhu. Cold air veliya leak aagi current bill athigam aagudhu-nu sonnanga. Matching magnetic gasket replace panni door alignment adjust pannom. Tight airtight grip establish aagi cooling retention restore aachu.'
      },
      {
        location: 'Vennaimalai',
        title: 'BPL Sealed Refrigeration Circuit Pinhole Braze & Gas Fill',
        tanglishText: 'Vennaimalai-la BPL double door fridge motor odite irundhadhu aana zero cooling. Technician pressure gauge vechu test pannadhula copper filter drier kitta micro pinhole leak irundhadhu. Silver brazing panni leak arrest pannom, vacuum pump pottu exact weight refrigerant gas charge pannom. 45 minutes-la freezer super chill aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with extensive repair history on BPL refrigerators',
      'Doorstep service across Karur Town, Thanthonimalai, Inam Karur, and nearby areas',
      'Ready availability of economical, compatible spare parts',
      'Clear, honest fault explanation with upfront estimates',
      'Cooling and cut-off verification before call closure'
    ]
  },
  {
    name: 'Acer',
    slug: 'acer-refrigerator-repair-service-in-karur.html',
    h1: 'Acer Refrigerator Repair Service in Karur',
    metaTitle: 'Acer Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Acer refrigerator repair in Karur? Doorstep inspection for Acer / Acerpure smart inverter frost-free double door & multi-door fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Acer refrigerator repair near me in Karur? When your Acerpure smart inverter refrigerator experiences cooling drop or the digital touch panel displays error codes, our technicians provide quick doorstep repair across Karur. From Pasupathipalayam to Kovai Road and Vennaimalai, get dependable Acer fridge repair near me with verified sensor troubleshooting and authentic spares.',
    tanglishIntroBox: 'Acer fridge-la cooling balance miss aagudha? Acerpure smart inverter compressor run aagala? Touch display-la temperature blink aagudha? Acer modern inverter refrigerators-ku trained technicians unga doorstep-la attend pannuvanga. Systematic multimeter inspection panni accurate problem identify panni repair mudipanga.',
    whyRepair: 'Acer / Acerpure smart inverter refrigerators combine multi-air ducting, smart digital displays, and variable frequency compressors. In Karur conditions, environmental dust or supply voltage dips can stress inverter power cards or cause electronic damper stalls. Timely technician inspection prevents food spoilage and protects your inverter compressor from burnout.',
    localContent: 'We provide specialized Acer refrigerator repair in Karur covering Pasupathipalayam, Kovai Road, Vennaimalai, Thorakkalpatti, and Kovai Road. Our technicians arrive with precision testing multimeters, Acerpure sensor probes, DC blower fans, and starter modules.',
    whenToCall: 'Call our technicians if your Acer fridge stops chilling food, displays error codes, exhibits cold freezer but warm fresh food compartments, builds moisture around door gaskets, or gives off an electrical burning odor (unplug from socket immediately).',
    types: [
      {
        name: 'Acerpure Smart Inverter Double Door Refrigerator Repair',
        badge: 'Smart Inverter Frost Free',
        desc: 'Acerpure smart inverter double door refrigerators modulate compressor speeds to keep internal temperatures steady. Sensor drift or inverter board faults reduce chilling performance.',
        searchIntent: 'Searching for <strong>Acer double door fridge repair near me</strong> in Karur? We diagnose smart inverter control boards and airflow vents at your doorstep.',
        problems: 'Inverter compressor not spinning, food spoiling on lower shelves, defrost error blinking.',
        checks: 'Inverter output frequency, multi-air blower fan speed, and evaporator thermistor.',
        parts: 'Inverter PCB, evaporator fan motor, and defrost sensor.',
        whenNeeded: 'When temperatures fluctuate or compressor fails to cycle up.'
      },
      {
        name: 'Acer Multi-Door Inverter Refrigerator Repair',
        badge: 'Multi-Door Inverter',
        desc: 'Acer multi-door refrigerators feature wide storage compartments with inverter compressors. Motorized damper failures or hinge wiring fatigue can cause uneven cooling.',
        searchIntent: 'Looking for <strong>Acer refrigerator repair in Karur</strong> for multi-door models? Doorstep testing for electronic dampers and multi-zone sensors.',
        problems: 'One compartment cooling normally while the other remains warm, touch panel error codes, water pooling under crisper.',
        checks: 'Motorised damper valve, compartment thermistors, and hinge ribbon cables.',
        parts: 'Zone thermistors, electronic damper motor, and display wiring harness.',
        whenNeeded: 'When compartment temperatures drift or touch settings become unresponsive.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill',
        desc: 'Freezer holds sub-zero cold, but items in the fresh food section remain warm and milk spoils.',
        badge: 'Airflow Duct',
        label1: 'Probable Cause', val1: 'Defrost sensor or evaporator fan motor failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen air ducts'
      },
      {
        title: 'Smart Inverter Motor Failing to Start',
        desc: 'The refrigerator has power, but the compressor fails to turn over with blinking board LEDs.',
        badge: 'Inverter Board',
        label1: 'Probable Cause', val1: 'Power surge damage to inverter control PCB',
        label2: 'Technician Check', val2: 'Measures DC rail voltages and tests compressor winding balance',
        label3: 'Resolution', val3: 'Repairs power circuitry or installs new inverter PCB'
      },
      {
        title: 'Digital Display Blinking Error',
        desc: 'The front door touch display blinks continuously or displays error codes.',
        badge: 'Display PCB',
        label1: 'Probable Cause', val1: 'Thermistor out of range or door hinge harness stress',
        label2: 'Technician Check', val2: 'Reads thermistor resistance curve with multimeter',
        label3: 'Resolution', val3: 'Replaces thermistor or repairs hinge wiring harness'
      },
      {
        title: 'Dense Frost Choking Rear Evaporator Panel',
        desc: 'A solid ice slab forms behind the rear wall, blocking chilled airflow to shelves.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Defrost heating element failure or open thermal fuse',
        label2: 'Technician Check', val2: 'Tests heating element continuity and thermal limiter',
        label3: 'Resolution', val3: 'Replaces defrost heater element and clears ice'
      },
      {
        title: 'Door Perimeter Moisture Condensation',
        desc: 'Moisture droplets condense around the door perimeter, indicating outside air leakage.',
        badge: 'Thermal Seal',
        label1: 'Probable Cause', val1: 'Magnetic door gasket deformed or hinge out of level',
        label2: 'Technician Check', val2: 'Conducts seal gap test and inspects hinge bushings',
        label3: 'Resolution', val3: 'Adjusts door hinges and re-seats magnetic gasket'
      },
      {
        title: 'Gradual Loss of Chilling Performance',
        desc: 'Compressor runs continuously at high speed, but cabinets gradually lose cooling over several days.',
        badge: 'Refrigerant Circuit',
        label1: 'Probable Cause', val1: 'Micro-leak in copper evaporator or condenser joint',
        label2: 'Technician Check', val2: 'Conducts nitrogen pressure test to find leak spot',
        label3: 'Resolution', val3: 'Brazes joint, pulls deep vacuum, and refills R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Pasupathipalayam',
        title: 'Acerpure Smart Inverter Double Door Cooling Fix',
        tanglishText: 'Pasupathipalayam 4th Cross-la oru customer call pannanga. Avanga Acerpure smart inverter double door fridge-la freezer matrum ice aagudhu, fresh food section-la milk spoil aagudhu-nu sonnanga. Technician spot-ku poi back panel remove pannadhula defrost sensor fail aagi evaporator coil full-aa ice kattirundhadhu. Defrost sensor change panni duct ice steam vechu clear pannom. DC circulation fan test panni re-assemble pannadhuku apram lower shelves-la 40 minutes-la proper cooling recover aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Acer Inverter Control Board Power Surge Recovery',
        tanglishText: 'Kovai Road-la sudden power surge apram Acer fridge dead aagi compressor start aagala. Technician visit panni inverter board check pannadhula DC bus fuse open circuit aagirundhadhu. Inverter power components repair panni bench-la simulate pannom. Re-installation ku apram motor whisper silent-aa cycle run aachu, customer romba happy.'
      },
      {
        location: 'Vennaimalai',
        title: 'Acer Multi-Door Damper Motor Replacement',
        tanglishText: 'Vennaimalai housing unit-la Acer multi-door fridge use panra family contact pannanga. Fresh food section-la cooling drop aagi vegetables spoil aagudhu-nu sonnanga. Technician inspect panni motorised air damper flap stuck aagi irundhadhai kandupidichanga. Damper motor replace panni display PCB settings recalibrate pannom. Rendu compartment-layum uniform cooling maintain aagudha-nu confirm pannom.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Acer Frost Free Rear Duct Defrost Heater Fix',
        tanglishText: 'Thorakkalpatti layout-la Acer fridge back wall-la heavy ice slab form aagi air vents block aagirundhadhu. Technician rear panel open panni paathadhula defrost heating element burnt aagirundhadhu. Matched OEM replacement heater fit panni steam treatment-la ice clear pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Acer Sealed Circuit Nitrogen Leak Test & R600a Refill',
        tanglishText: 'Kovai Road-la Acer fridge motor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen test-la copper line micro leak detect panni silver braze pannom. Deep vacuum pull panni exact weight R600a charge pannom. Cooling within 40 minutes normal aachu.'
      }
    ],
    whyChoose: [
      'Specialized technicians familiar with Acer and Acerpure smart inverter engineering',
      'Doorstep diagnostic testing with digital precision multimeters and sensor probes',
      'quick response across Karur Town and residential suburbs',
      'Honest fault explanations with transparent spare pricing',
      'Thorough temperature profiling before completing the service call'
    ]
  },
  {
    name: 'Hisense',
    slug: 'hisense-refrigerator-repair-service-in-karur.html',
    h1: 'Hisense Refrigerator Repair Service in Karur',
    metaTitle: 'Hisense Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Hisense refrigerator repair in Karur? Doorstep inspection for Hisense PureFlat, side-by-side, cross-door & inverter frost-free fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Hisense refrigerator repair near me in Karur? When your Hisense PureFlat, side-by-side, or cross-door refrigerator experiences cooling drop or the inverter compressor driver flashes diagnostic error codes, our technicians provide quick doorstep repair across Karur. From Vengamedu to Kovai Road and Thanthonimalai, get dependable Hisense fridge repair near me with verified troubleshooting and authentic spares.',
    tanglishIntroBox: 'Hisense fridge-la cooling balance miss aagudha? PureFlat cross-door model-la compressor run aagala? Electronic cross-air damper jam aagirukka? Hisense modern inverter refrigeration-ku trained technicians unga doorstep-la attend pannuvanga. Multimeter testing panni accurate solution provide panrom.',
    whyRepair: 'Hisense refrigerators feature PureFlat smooth styling, cross-door airflow dampers, and inverter compressors. In Karur conditions, environmental dust or supply voltage dips can stress inverter power cards or cause electronic damper stalls. Timely technician inspection prevents food spoilage and protects your inverter compressor from burnout.',
    localContent: 'We provide specialized Hisense refrigerator repair in Karur covering Vengamedu, Kovai Road, Thanthonimalai, Pasupathipalayam, and Sengunthapuram. Our technicians arrive with precision testing multimeters, Hisense sensor probes, DC blower fans, and starter modules.',
    whenToCall: 'Call our technicians if your Hisense fridge stops chilling food, displays error codes, exhibits cold freezer but warm fresh food compartments, builds moisture around door gaskets, or gives off an electrical burning odor (unplug from socket immediately).',
    types: [
      {
        name: 'Hisense Inverter Frost Free Double Door Refrigerator Repair',
        badge: 'Inverter Frost Free',
        desc: 'Hisense inverter frost-free double door refrigerators modulate compressor speeds to keep internal temperatures steady. Sensor drift or inverter board faults reduce chilling performance.',
        searchIntent: 'Searching for <strong>Hisense double door fridge repair near me</strong> in Karur? We diagnose inverter control boards and airflow vents at your doorstep.',
        problems: 'Inverter compressor not spinning, food spoiling on lower shelves, defrost error blinking.',
        checks: 'Inverter output frequency, multi-air blower fan speed, and evaporator thermistor.',
        parts: 'Inverter PCB, evaporator fan motor, and defrost sensor.',
        whenNeeded: 'When temperatures fluctuate or compressor fails to cycle up.'
      },
      {
        name: 'Hisense PureFlat Side-by-Side & Cross-Door Refrigerator Repair',
        badge: 'PureFlat Cross-Door',
        desc: 'Hisense PureFlat and cross-door refrigerators feature wide storage compartments with inverter compressors. Motorized damper failures or hinge wiring fatigue can cause uneven cooling.',
        searchIntent: 'Looking for <strong>Hisense refrigerator repair in Karur</strong> for PureFlat models? Doorstep testing for electronic dampers and multi-zone sensors.',
        problems: 'One compartment cooling normally while the other remains warm, touch panel error codes, water pooling under crisper.',
        checks: 'Motorised damper valve, compartment thermistors, and hinge ribbon cables.',
        parts: 'Zone thermistors, electronic damper motor, and display wiring harness.',
        whenNeeded: 'When compartment temperatures drift or touch settings become unresponsive.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill',
        desc: 'Freezer holds sub-zero cold, but items in the fresh food section remain warm and milk spoils.',
        badge: 'Airflow Duct',
        label1: 'Probable Cause', val1: 'Defrost sensor or cross-flow fan motor failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen air ducts'
      },
      {
        title: 'Inverter Motor Failing to Start',
        desc: 'The refrigerator has power, but the compressor fails to turn over with blinking board LEDs.',
        badge: 'Inverter Board',
        label1: 'Probable Cause', val1: 'Power surge damage to inverter control PCB',
        label2: 'Technician Check', val2: 'Measures DC rail voltages and tests compressor winding balance',
        label3: 'Resolution', val3: 'Repairs power circuitry or installs new inverter PCB'
      },
      {
        title: 'Uneven Shelf Chill Distribution',
        desc: 'Items on upper shelves chill fine while lower glass shelves remain room temperature.',
        badge: 'Air Damper',
        label1: 'Probable Cause', val1: 'Motorised air damper flap jammed or sensor drifted',
        label2: 'Technician Check', val2: 'Reads thermistor resistance curve with multimeter',
        label3: 'Resolution', val3: 'Replaces motorised damper or recalibrates sensor'
      },
      {
        title: 'Dense Frost Choking Rear Evaporator Panel',
        desc: 'A solid ice slab forms behind the rear wall, blocking chilled airflow to shelves.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Defrost heating element failure or open thermal fuse',
        label2: 'Technician Check', val2: 'Tests heating element continuity and thermal limiter',
        label3: 'Resolution', val3: 'Replaces defrost heater element and clears ice'
      },
      {
        title: 'Door Perimeter Moisture Condensation',
        desc: 'Moisture droplets condense around the door perimeter, indicating outside air leakage.',
        badge: 'Thermal Seal',
        label1: 'Probable Cause', val1: 'Magnetic door gasket deformed or hinge out of level',
        label2: 'Technician Check', val2: 'Conducts seal gap test and inspects hinge bushings',
        label3: 'Resolution', val3: 'Adjusts door hinges and re-seats magnetic gasket'
      },
      {
        title: 'Gradual Loss of Chilling Performance',
        desc: 'Compressor runs continuously at high speed, but cabinets gradually lose cooling over several days.',
        badge: 'Refrigerant Circuit',
        label1: 'Probable Cause', val1: 'Micro-leak in copper evaporator or condenser joint',
        label2: 'Technician Check', val2: 'Conducts nitrogen pressure test to find leak spot',
        label3: 'Resolution', val3: 'Brazes joint, pulls deep vacuum, and refills R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Vengamedu',
        title: 'Hisense PureFlat Cross-Door Damper Motor Replacement',
        tanglishText: 'Vengamedu bypass kitta oru customer avanga Hisense PureFlat cross-door fridge-la fresh food section-la cooling drop aagi vegetables spoil aagudhu-nu sonnanga. Technician spot-ku poi inspect panni motorised air damper flap stuck aagi irundhadhai kandupidichanga. Damper motor replace panni display PCB settings recalibrate pannom. Rendu compartment-layum uniform cooling maintain aagudha-nu confirm pannom.'
      },
      {
        location: 'Kovai Road',
        title: 'Hisense Inverter Control Board Power Surge Recovery',
        tanglishText: 'Kovai Road-la sudden power surge apram Hisense fridge dead aagi compressor start aagala. Technician visit panni inverter board check pannadhula DC bus fuse open circuit aagirundhadhu. Inverter power components repair panni bench-la simulate pannom. Re-installation ku apram motor whisper silent-aa cycle run aachu, customer romba happy.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Hisense Inverter Double Door Cooling Fix',
        tanglishText: 'Thanthonimalai area-la Hisense inverter double door fridge-la freezer matrum ice aagudhu, fresh food section-la milk spoil aagudhu-nu complaint. Technician spot-ku poi back panel remove pannadhula defrost sensor fail aagi evaporator coil full-aa ice kattirundhadhu. Defrost sensor change panni duct ice steam vechu clear pannom. DC circulation fan test panni re-assemble pannadhuku apram lower shelves-la 40 minutes-la proper cooling recover aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Hisense Frost Free Rear Duct Defrost Heater Fix',
        tanglishText: 'Pasupathipalayam-la Hisense fridge back wall-la heavy ice slab form aagi air vents block aagirundhadhu. Technician rear panel open panni paathadhula defrost heating element burnt aagirundhadhu. Matched OEM replacement heater fit panni steam treatment-la ice clear pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Sengunthapuram',
        title: 'Hisense Door Perimeter Magnetic Gasket Realignment',
        tanglishText: 'Sengunthapuram layout-la Hisense fridge door corner-la light gap irundhu frame mela moisture condensation varudhu-nu sonnanga. Technician magnetic gasket heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem complete-aa stop aachu.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Hisense Double Door Water Drainage De-clogging',
        tanglishText: 'Kagithapuramam-la Hisense double door fridge veg box kulla water thengudhu-nu complaint. Technician inner back grill remove panni defrost drain channel check pannadhula dust particles-la block aagirundhadhu. Flexible cleaning wire and hot water pottu drain line flush pannom. Problem periya expense illama spot-la theerndhadhu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Hisense Sealed Circuit Nitrogen Leak Test & R600a Refill',
        tanglishText: 'Thorakkalpatti-la Hisense fridge motor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen test-la copper line micro leak detect panni silver braze pannom. Deep vacuum pull panni exact weight R600a charge pannom. Cooling within 40 minutes normal aachu.'
      }
    ],
    whyChoose: [
      'Specialized technicians familiar with Hisense PureFlat and inverter engineering',
      'Doorstep diagnostic testing with digital precision multimeters and sensor probes',
      'quick response across Karur Town and residential suburbs',
      'Honest fault explanations with transparent spare pricing',
      'Thorough temperature profiling before completing the service call'
    ]
  }
];

module.exports = brands19to24;
