// Refrigerator Brand Data for Brands 7 to 12
// 7. Haier, 8. Videocon, 9. Panasonic, 10. Siemens, 11. Hitachi, 12. Kelvinator
// 100% Unique Brand-Specific Content. No AI buzzwords. 80-90% Tanglish in customer experiences.

const brands7to12 = [
  {
    name: 'Haier',
    slug: 'haier-refrigerator-repair-service-in-karur.html',
    h1: 'Haier Refrigerator Repair Service in Karur',
    metaTitle: 'Haier Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Haier refrigerator repair in Karur? Doorstep inspection for Haier Bottom Mounted (BMR), Twin Inverter, 8-in-1 convertible & side-by-side fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Haier refrigerator repair near me in Karur? When your Haier bottom mounted refrigerator stops cooling the upper food cabin or the twin inverter compressor stays inactive, our technicians visit your doorstep across Karur. From Vennaimalai to Sanapiratti and Pasupathipalayam, get dependable Haier fridge repair near me with verified component testing and transparent pricing.',
    tanglishIntroBox: 'Haier fridge-la cooling ninnu pocha? Bottom Mounted (BMR) model-la mela food cabin warm-aa irukka? Twin Inverter compressor run aaga maatudha? Haier unique cooling layouts-ku experienced technicians unga veetukke vandhu check pannuvanga. Systematic multimeter inspection panni clear spare cost explain pannitu repair mudipanga.',
    whyRepair: 'Haier refrigerators feature Bottom Mounted Refrigerator (BMR) layouts, twin inverter fans, and 8-in-1 convertible cooling modes. When warm air leaks past the gasket or the defrost sensor fails, the upward airflow duct gets blocked with frost. quick service prevents food spoilage and protects your inverter compressor from unnecessary load.',
    localContent: 'We provide specialized Haier refrigerator repair in Karur serving Vennaimalai, Sanapiratti, Pasupathipalayam, Inam Karur, and Kovai Road. Our technicians arrive with multimeters, defrost sensors, DC blower fans, and starter relays for quick on-site resolution.',
    whenToCall: 'Call our technicians if your Haier fridge loses cooling in the upper section, rattles inside the bottom freezer, leaks water onto the kitchen floor, fails to cycle on, or gives off an electrical burning smell (switch off main power immediately).',
    types: [
      {
        name: 'Haier Bottom Mounted Refrigerator (BMR) Repair',
        badge: 'Bottom Mounted Inverter Fridge',
        desc: 'Haier BMR models place the freezer at the bottom and the frequently used food compartment at eye level. A jammed blower fan or blocked vertical air duct causes the upper food section to warm up.',
        searchIntent: 'Searching for <strong>Haier BMR fridge repair near me</strong> in Karur? We diagnose vertical airflow ducts and twin inverter fan circuits at your doorstep.',
        problems: 'Top food compartment completely warm while bottom freezer makes ice, rattling sound from bottom duct, moisture on shelves.',
        checks: 'DC blower fan speed, vertical air duct damper, and defrost sensor resistance.',
        parts: 'Blower fan motor, motorised damper, and NTC defrost sensor.',
        whenNeeded: 'When milk and cooked food spoil in the upper cabin despite a cold freezer.'
      },
      {
        name: 'Haier Twin Inverter Double Door Refrigerator Repair',
        badge: 'Twin Inverter Technology',
        desc: 'Haier Twin Inverter fridges run both the compressor and the circulation fan on DC inverter power. Voltage fluctuations can affect the twin inverter driver board.',
        searchIntent: 'Looking for <strong>Haier double door fridge repair in Karur</strong>? Doorstep diagnosis for Twin Inverter driver boards and defrost circuits.',
        problems: 'Compressor and fan both silent, display panel blinking error codes, uneven cooling across glass shelves.',
        checks: 'Twin inverter PCB supply voltages, compressor winding balance, and fan PWM signals.',
        parts: 'Twin inverter motherboard, DC fan motor, and temperature sensor.',
        whenNeeded: 'When the fridge fails to power on after power cuts or blinks error lights.'
      },
      {
        name: 'Haier 8-in-1 Convertible Refrigerator Repair',
        badge: 'Convertible Multi-Mode Fridge',
        desc: 'Haier convertible models allow altering compartment temperatures to suit storage needs. Faulty motorized dampers or control boards prevent mode switching.',
        searchIntent: 'Need <strong>Haier fridge service in Karur</strong> for convertible models? Doorstep testing for electronic dampers and control panels.',
        problems: 'Mode change button unresponsive, freezer failing to convert to fridge cooling, heavy frost accumulation.',
        checks: 'Mode selector switch, motorised air damper, and compartment thermistors.',
        parts: 'Airflow damper motor, display PCB, and temperature sensors.',
        whenNeeded: 'When convertible settings fail to switch or food freezes in fridge mode.'
      }
    ],
    problems: [
      {
        title: 'BMR Upper Food Compartment Warm',
        desc: 'The bottom freezer freezes ice cubes, but the top fresh food section remains warm and food spoils.',
        badge: 'Airflow Duct',
        label1: 'Probable Cause', val1: 'Defrost sensor failure or vertical fan motor stall',
        label2: 'Technician Check', val2: 'Inspects defrost coil ice choke and tests blower fan rpm',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen vertical ducts'
      },
      {
        title: 'Twin Inverter Motor Failing to Start',
        desc: 'The refrigerator has power, but neither the compressor nor the internal fan starts up.',
        badge: 'Inverter Driver',
        label1: 'Probable Cause', val1: 'Blown fuse or damaged driver chip on inverter PCB',
        label2: 'Technician Check', val2: 'Measures DC rail voltages and tests compressor winding balance',
        label3: 'Resolution', val3: 'Repairs power circuitry or installs new inverter PCB'
      },
      {
        title: 'Rattling Fan Noise from Bottom Freezer',
        desc: 'A loud vibrating noise emanates from the bottom freezer and ceases when the drawer is pulled open.',
        badge: 'Fan Assembly',
        label1: 'Probable Cause', val1: 'Fan blade contacting accumulated frost or dry motor bushing',
        label2: 'Technician Check', val2: 'Inspects fan blade clearance and checks motor play',
        label3: 'Resolution', val3: 'Clears frost buildup and lubricates or replaces fan motor'
      },
      {
        title: 'Water Leaking Beneath Bottom Freezer',
        desc: 'Defrost meltwater pools under the bottom freezer drawer and leaks onto the kitchen floor.',
        badge: 'Drainage Issue',
        label1: 'Probable Cause', val1: 'Defrost drain cup choked with food debris or ice',
        label2: 'Technician Check', val2: 'Inspects drain trough and cleans rear drainage hose',
        label3: 'Resolution', val3: 'Flushes drainage channel with warm water'
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
        title: 'Gradual Cooling Loss with Running Motor',
        desc: 'Compressor runs continuously, but cabinets lose cooling capability over several days.',
        badge: 'Refrigerant Leak',
        label1: 'Probable Cause', val1: 'Pinhole gas leak in copper tubing or filter drier',
        label2: 'Technician Check', val2: 'Performs pressure test on sealed refrigeration circuit',
        label3: 'Resolution', val3: 'Brazes leak joint, pulls vacuum, and recharges R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Vennaimalai',
        title: 'Haier BMR Bottom Freezer Upper Cabin Cooling Repair',
        tanglishText: 'Vennaimalai housing colony-la oru customer avanga Haier Bottom Mounted (BMR) fridge-la keezha freezer ice aagudhu, aana mela food cabin warm-aa irundhu curry and milk spoil aagudhu-nu complain pannanga. Technician spot-ku poi inner vertical air duct inspect pannadhula, defrost sensor fail aagi cooling coil solid snow-la block aagirundhadhu. New NTC defrost sensor replace panni duct ice steam vechu clear pannom. Blower fan test panni mela chilled air throw super-aa return aana apram delivery pannom.'
      },
      {
        location: 'Sanapiratti',
        title: 'Haier Twin Inverter PCB Board Power Surge Fix',
        tanglishText: 'Sanapiratti main road-la Haier Twin Inverter double door fridge lightning and power cut apram dead aagi pochu. Technician visit panni twin inverter board test pannadhula DC bus line-la surge fuse and input capacitor blown aagirundhadhu. Compressor winding 11 ohms balance healthy-nu verify pannitu, board power stage-a bench repair panni test pannom. Unit switch on pannadhume inverter compressor whisper quiet-aa cycle run aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Haier 8-in-1 Convertible Mode Damper Replacement',
        tanglishText: 'Pasupathipalayam 3rd Cross-la Haier convertible fridge-la mode change panniyum freezer normal fridge cooling-ku maarala. Technician inspect panni motorised air damper flap motor gear slipped aagirundhadhai identify pannanga. Matched motorised damper change panni electronic display recalibrate pannom. Rendu cabin-layum required temperature maintain aagudha-nu confirm pannom.'
      },
      {
        location: 'Inam Karur',
        title: 'Haier Bottom Freezer Water Overflow Drainage Solution',
        tanglishText: 'Inam Karur-la Haier BMR fridge bottom freezer drawer kulla water thengi ice block madhiri kattudhu-nu sonnanga. Technician freezer drawers remove panni defrost drain cup check pannadhula dust particles-la completely choked. Flexible wire and hot water stream vechu drain pipe-a clear pannom. Water rear pan-ku clean-aa discharge aagi issue theerndhadhu.'
      },
      {
        location: 'Kovai Road',
        title: 'Haier Double Door Magnetic Gasket Renewal',
        tanglishText: 'Kovai Road bypass kitta Haier fridge door rubber side-la loose aagi gap irundhadhu. Exterior humid air ulla enter aagi internal walls mela sweating moisture kattudhu. Original matching profile magnetic gasket replace panni door alignment adjust pannom. Tight airtight seal restore aagi cooling retention 100% normal aachu.'
      },
      {
        location: 'Karur Town',
        title: 'Haier Sealed Refrigeration Circuit Pinhole Braze & Gas Fill',
        tanglishText: 'Karur Town-la Haier double door fridge motor odite irundhadhu aana zero cooling. Technician pressure gauge vechu test pannadhula copper filter drier kitta micro pinhole leak irundhadhu. Silver brazing panni leak arrest pannom, high-vacuum pump vechu moisture pull pannitu exact weight R600a gas charge pannom. 45 minutes-la freezer super chill aachu.'
      }
    ],
    whyChoose: [
      'Technicians trained in Haier Bottom Mounted (BMR) and Twin Inverter architectures',
      'Doorstep inspection across all Karur localities with rapid response',
      'Systematic testing of DC blower fans, inverter modules, and motorized dampers',
      'Fair, upfront pricing with zero hidden charges',
      'Post-repair temperature verification before closing the call'
    ]
  },
  {
    name: 'Videocon',
    slug: 'videocon-refrigerator-repair-service-in-karur.html',
    h1: 'Videocon Refrigerator Repair Service in Karur',
    metaTitle: 'Videocon Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Videocon refrigerator repair in Karur? Doorstep service for Videocon direct cool single door & frost-free double door fridges. Affordable local repair.',
    searchIntentIntro: 'Searching for Videocon refrigerator repair near me in Karur? Whether your vintage Videocon direct cool single door fridge is not cooling or the compressor is clicking repeatedly, our technicians provide dependable doorstep service across Karur. From Karur Town to Kagithapuramam and Thanthonimalai, find economical Videocon fridge repair near me with verified troubleshooting and accessible spares.',
    tanglishIntroBox: 'Videocon fridge-la cooling ninnu pocha? Single door model-la ice kattala? Compressor tick-tick nu sound vandhu off aagudha? Videocon traditional robust refrigerators-ku experienced local technicians unga veetukke vandhu check pannuvanga. Reason-a explain pannitu affordable spare cost-la repair mudipanga.',
    whyRepair: 'Videocon refrigerators are known for heavy-duty steel bodies and durable mechanical cooling designs that have served Tamil Nadu families for decades. Over years of operation, starter relays can burn out, thermostats can lose charge, or capillary lines can choke. Economical repairs restore dependable cooling and keep your appliance running for years to come.',
    localContent: 'We service Videocon refrigerators across Karur Town, Kagithapuramam, Thanthonimalai, Inam Karur, and Sengunthapuram. We carry mechanical thermostats, PTC starter relays, bimetals, and blower fans for immediate doorstep repair.',
    whenToCall: 'Reach out for inspection if your Videocon fridge stops chilling food, builds excessive ice in the freezer, makes loud clicking sounds, leaks water onto the floor, or gives an electrical burning smell (switch off main socket immediately).',
    types: [
      {
        name: 'Videocon Direct Cool Single Door Refrigerator Repair',
        badge: 'Direct Cool Single Door',
        desc: 'Videocon direct cool single door refrigerators are built with thick insulation and mechanical cooling loops. Starter relays, thermostats, and door gaskets are common service items.',
        searchIntent: 'Searching for <strong>Videocon single door fridge repair near me</strong> in Karur? Quick doorstep fix for thermostat, starter relay, and cooling coil leaks.',
        problems: 'Freezer box icing up uncontrollably, compressor clicking without starting, zero cooling with warm body.',
        checks: 'Rotary thermostat contacts, PTC starter relay, overload protector, and gas pressure.',
        parts: 'PTC starter relay, mechanical thermostat switch, door gasket, and refrigerant.',
        whenNeeded: 'When ice builds up uncontrollably or the compressor will not turn on.'
      },
      {
        name: 'Videocon Frost Free Double Door Refrigerator Repair',
        badge: 'Frost Free Double Door',
        desc: 'Videocon frost-free double door fridges circulate cold air from the freezer into the food cabin. Mechanical defrost timers and glass tube heaters are typical service components.',
        searchIntent: 'Looking for <strong>Videocon double door fridge repair in Karur</strong>? Doorstep diagnosis for defrost timers, heaters, and circulation fans.',
        problems: 'Freezer cold but lower compartment warm, fan motor vibrating, water pooling under crisper.',
        checks: 'Mechanical defrost timer, bimetal switch, evaporator fan motor, and return air vents.',
        parts: 'Defrost timer, bimetal thermostat, evaporator fan motor, and glass tube heater.',
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
        title: 'Videocon Direct Cool Single Door Relay Replacement',
        tanglishText: 'Karur Town flower bazaar kitta irundha customer call pannanga. Avanga Videocon single door fridge-la cooling ninnu compressor clicking sound varudhu-nu sonnanga. Technician spot-ku poi check pannadhula PTC starter relay overheat aagi contact burn aagirundhadhu. Compressor winding ohms test panni motor safe-nu confirm pannitu puthiya heavy-duty relay fit pannom. Motor instant-aa ignite aagi cooling plates chill aaga aarambichadhu. Customer romba satisfied.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Videocon Double Door Defrost Timer Problem Fix',
        tanglishText: 'Kagithapuramam-la oru customer avanga Videocon double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk spoil aagudhu-nu complaint pannanga. Technician inspect pannadhula mechanical defrost timer gear stuck aagi heating cycle trigger aagala. Evaporator coil full-aa ice kattirundhadhai steam panni clear pannom. New defrost timer and bimetal switch install panni test pannadhula lower cabin airflow perfect-aa return aachu.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Videocon Single Door Thermostat Over-Freezing Rectification',
        tanglishText: 'Thanthonimalai main road-la Videocon single door fridge freezer-la ice rock madhiri solid-aa kattudhu-nu sonnanga. Defrost button press panniyum solve aagala. Technician inspect pannadhula thermostat contact welded aagi compressor cut-off aagama non-stop-aa run aagitu irundhadhu. Original calibrated rotary thermostat replace pannom. Machine ippo proper interval-la cut-off aagi temperature maintain panradhu.'
      },
      {
        location: 'Inam Karur',
        title: 'Videocon Double Door Vegetable Crisper Water Leakage Solution',
        tanglishText: 'Inam Karur area-la Videocon double door fridge veg box kulla water thengi floor-la leak aagudhu-nu sonnanga. Technician back panel open panni paathadhula defrost drain cup dust particle-la block aagirundhadhu. High-pressure warm water flush panni drain pipe-a completely clear pannom. Rear compressor tray-ku water proper-aa discharge aagudha-nu check pannitu solve pannom.'
      },
      {
        location: 'Sengunthapuram',
        title: 'Videocon Single Door Magnetic Door Gasket Renewal',
        tanglishText: 'Sengunthapuram layout-la Videocon fridge door rubber loose aagi side-la gap irundhadhu. Cold air veliya leak aagi current bill athigam aagudhu-nu sonnanga. Matching magnetic gasket replace panni door alignment adjust pannom. Tight airtight grip establish aagi cooling retention restore aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with extensive repair history on Videocon refrigerators',
      'Doorstep service across Karur Town, Kagithapuramam, Thanthonimalai, and nearby areas',
      'Ready availability of economical, compatible spare parts',
      'Clear, honest fault explanation with upfront estimates',
      'Cooling and cut-off verification before call closure'
    ]
  },
  {
    name: 'Panasonic',
    slug: 'panasonic-refrigerator-repair-service-in-karur.html',
    h1: 'Panasonic Refrigerator Repair Service in Karur',
    metaTitle: 'Panasonic Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Panasonic refrigerator repair in Karur? Doorstep inspection for Panasonic Econavi, Prime Fresh, inverter double door & multi-door fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Panasonic refrigerator repair near me in Karur? When your Panasonic Econavi refrigerator fails to cool food or the Prime Fresh soft-freezing compartment loses calibration, our technicians provide quick doorstep repair across Karur. From Pasupathipalayam to Kovai Road and Thorakkalpatti, get reliable Panasonic fridge repair near me with verified sensor troubleshooting and authentic spares.',
    tanglishIntroBox: 'Panasonic fridge-la cooling drop aagirukka? Econavi sensor light blink aagudha? Prime Fresh compartment-la vegetables freeze aagudha? Panasonic sensor-based Japanese engineering-ku experienced technicians unga doorstep-la attend pannuvanga. Systematic multimeter inspection panni problem solve panrom.',
    whyRepair: 'Panasonic refrigerators combine Econavi sensor technology, Prime Fresh sub-zero soft freezing, and sensor-based inverter compressors. In Karur summer conditions, fine electronics can react to supply voltage dips or clogged condenser airflow. Timely service keeps electronic dampers and inverter modules operating smoothly without compressor failure.',
    localContent: 'We provide specialized Panasonic refrigerator repair across Karur including Pasupathipalayam, Kovai Road, Thorakkalpatti, Thanthonimalai, and Kovai Road. Our technicians arrive with electronic diagnostic gear, sensor probes, and matched components.',
    whenToCall: 'Contact our technicians if your Panasonic fridge sounds an alert tone, experiences cooling failure in either compartment, shows frost accumulation behind the interior panel, leaks water around the base, or produces an electrical burning odor (unplug immediately).',
    types: [
      {
        name: 'Panasonic Econavi Inverter Double Door Refrigerator Repair',
        badge: 'Econavi Inverter Technology',
        desc: 'Panasonic Econavi double door refrigerators monitor room temperature and door openings to optimize inverter motor speed. Sensor drift or inverter board faults reduce chilling performance.',
        searchIntent: 'Searching for <strong>Panasonic double door fridge repair near me</strong> in Karur? We diagnose Econavi sensors, inverter boards, and 3D airflow ducts.',
        problems: 'Inverter compressor not spinning, food spoiling on lower shelves, Econavi indicator blinking error codes.',
        checks: 'Inverter output frequency, 3D airflow fan motor, and evaporator thermistor.',
        parts: 'Inverter PCB, evaporator fan motor, and defrost sensor.',
        whenNeeded: 'When temperatures fluctuate or compressor fails to cycle up.'
      },
      {
        name: 'Panasonic Prime Fresh Multi-Door Refrigerator Repair',
        badge: 'Prime Fresh Soft Freezing',
        desc: 'Panasonic Prime Fresh refrigerators maintain a -3°C soft-freezing drawer for fish and meats. Electronic damper failures cause food to freeze solid or spoil prematurely.',
        searchIntent: 'Looking for <strong>Panasonic refrigerator repair in Karur</strong> for Prime Fresh models? Doorstep testing for electronic dampers and zone sensors.',
        problems: 'Items freezing solid in Prime Fresh drawer, meat compartment remaining warm, touch panel error codes.',
        checks: 'Motorised damper valve, humidity sensors, and digital control PCB.',
        parts: 'Zone thermistors, electronic damper motor, and display wiring harness.',
        whenNeeded: 'When Prime Fresh drawer temperature drifts or vegetables turn icy.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill',
        desc: 'Freezer holds sub-zero cold, but items in the upper or lower fresh food section remain warm.',
        badge: 'Airflow Issue',
        label1: 'Probable Cause', val1: 'Defrost sensor or 3D airflow fan motor failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen air ducts'
      },
      {
        title: 'Econavi Inverter PCB Unresponsive',
        desc: 'The refrigerator has power at the wall outlet but will not illuminate or turn on the motor.',
        badge: 'Control Board',
        label1: 'Probable Cause', val1: 'Power surge damage to main control motherboard',
        label2: 'Technician Check', val2: 'Tests input fuse, varistor, and DC regulator stages',
        label3: 'Resolution', val3: 'Repairs power circuitry or replaces control board'
      },
      {
        title: 'Prime Fresh Drawer Freezing Fresh Produce',
        desc: 'Meat and fresh produce in the Prime Fresh compartment freeze into solid blocks.',
        badge: 'Zone Damper',
        label1: 'Probable Cause', val1: 'Prime Fresh thermistor drifted out of calibration',
        label2: 'Technician Check', val2: 'Reads thermistor resistance curve with multimeter',
        label3: 'Resolution', val3: 'Installs new calibrated NTC sensor'
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
        title: 'Vibrating Fan Noise from Freezer Duct',
        desc: 'A rattling or whirring noise occurs inside the freezer and stops when the door is opened.',
        badge: 'Fan Assembly',
        label1: 'Probable Cause', val1: 'Fan blade contacting ice frost or worn motor bearing',
        label2: 'Technician Check', val2: 'Checks blade clearance and motor shaft play',
        label3: 'Resolution', val3: 'Clears coil frost and lubricates or replaces fan motor'
      },
      {
        title: 'Continuous Compressor Run with Zero Ice',
        desc: 'The motor runs warm continuously, but the freezer is unable to freeze water.',
        badge: 'Refrigerant Leak',
        label1: 'Probable Cause', val1: 'Refrigerant leak in sealed aluminum or copper tubing',
        label2: 'Technician Check', val2: 'Performs pressure leak test on sealed circuit',
        label3: 'Resolution', val3: 'Brazes leak joint, vacuums lines, and recharges R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Pasupathipalayam',
        title: 'Panasonic Econavi Inverter Double Door Cooling Fix',
        tanglishText: 'Pasupathipalayam 7th Cross-la oru customer call pannanga. Avanga Panasonic Econavi inverter double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk curdling aagudhu-nu sonnanga. Technician spot-ku poi back panel remove pannadhula defrost sensor fail aagi evaporator coil full-aa ice kattirundhadhu. Defrost sensor change panni duct ice melt pannom. 3D airflow fan check panni re-assemble pannadhuku apram lower shelves-la 40 minutes-la proper cooling recover aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Panasonic Prime Fresh Soft Freezing Calibration',
        tanglishText: 'Kovai Road-la Panasonic Prime Fresh fridge use panra family contact pannanga. Prime Fresh drawer kulla vecha fresh fish solid ice madhiri freeze aagudhu-nu sonnanga. Technician inspect panni paathadhula motorised damper air flap lint and frozen moisture nala open position-la stuck aagirundhadhu. Damper assembly clean panni re-align pannom. -3 degree soft-freezing target temperature perfectly balance aachu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Panasonic Inverter Compressor Starter Circuit Repair',
        tanglishText: 'Thorakkalpatti-la Panasonic inverter fridge-la clicking sound vandhu compressor cut aagudhu-nu complaint. Technician spot-la ammeter and multimeter vechu test pannadhula starter module overheat aagi contact burn aagirundhadhu. Genuine replacement module install panni compressor current draw check pannom. Motor smooth-aa start aagi steady chill create aachu.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Panasonic Frost Free Evaporator Fan Motor Change',
        tanglishText: 'Thanthonimalai area-la Panasonic frost-free fridge-la oru loud whirring sound kekkudhu-nu sonnanga. Technician paathadhula evaporator fan motor bush theinju blade frame-la touch aagitu irundhadhu. New DC fan motor replace panni air circulation test pannom. Machine ippo completely silent-aa run aagudhu.'
      },
      {
        location: 'Kovai Road',
        title: 'Panasonic Double Door Magnetic Gasket Renewal',
        tanglishText: 'Kovai Road layout-la Panasonic fridge door rubber loose aagi side-la gap irundhadhu. Cold air veliya leak aagi compressor continuous-aa oditu irundhadhu. Original matching profile magnetic gasket replace panni door alignment adjust pannom. Tight airtight grip establish aagi cooling retention restore aachu.'
      },
      {
        location: 'Vengamedu',
        title: 'Panasonic Double Door Vegetable Crisper Water Leak Fix',
        tanglishText: 'Vengamedu bypass kitta Panasonic double door fridge veg box kulla water thengi floor-la leak aagudhu-nu sonnanga. Technician back panel open panni paathadhula defrost drain cup dust particle-la block aagirundhadhu. High-pressure warm water flush panni drain pipe-a completely clear pannom. Rear compressor tray-ku water proper-aa discharge aagudha-nu check pannitu solve pannom.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Panasonic Refrigerant Leakage Braze & R600a Refill',
        tanglishText: 'Kagithapuramam-la Panasonic fridge motor odite irundhadhu aana freezer-la chill illa. Technician pressure gauge vechu test pannadhula copper filter drier kitta hairline crack leak irundhadhu. Pinhole silver braze panni, deep vacuum pull panni exact weight R600a gas charge pannom. Cooling within 45 minutes perfectly normal aachu.'
      },
      {
        location: 'Vennaimalai',
        title: 'Panasonic Inverter PCB Board Power Surge Recovery',
        tanglishText: 'Vennaimalai-la sudden thunder and voltage surge apram Panasonic inverter fridge on aagala. Technician check pannadhula main PCB-la input fuse and varistor blown aagirundhadhu. Inverter power section-a bench repair panni test pannom. Re-installation ku apram inverter compressor smooth-aa speed pick up aachu.'
      }
    ],
    whyChoose: [
      'Specialized technicians familiar with Panasonic Econavi and Prime Fresh engineering',
      'Doorstep diagnostic testing with digital precision multimeters and sensor probes',
      'quick response across Karur Town and residential suburbs',
      'Honest fault explanations with transparent spare pricing',
      'Thorough temperature profiling before completing the service call'
    ]
  },
  {
    name: 'Siemens',
    slug: 'siemens-refrigerator-repair-service-in-karur.html',
    h1: 'Siemens Refrigerator Repair Service in Karur',
    metaTitle: 'Siemens Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Siemens refrigerator repair in Karur? Doorstep inspection for Siemens iQ series, hyperFresh, multiAirflow double door & built-in fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Siemens refrigerator repair near me in Karur? When your quality Siemens iQ series built-in or free-standing refrigerator beeps error tones or the hyperFresh compartment loses humidity balance, our technicians deliver careful doorstep diagnosis across Karur. Whether you reside in Thanthonimalai, Pasupathipalayam, or Vengamedu, get reliable Siemens fridge repair near me with trained component troubleshooting and authentic replacement spares.',
    tanglishIntroBox: 'Siemens fridge-la display-la error code kaatudha? hyperFresh drawer temperature balance aagala? multiAirflow fan silent-aa ninnu pocha? Siemens high-end German engineering-ku trained technicians unga doorstep-la attend pannuvanga. Systematic multimeter testing panni accurate solution provide panrom.',
    whyRepair: 'Siemens refrigerators incorporate multiAirflow distribution channels, hyperFresh preservation drawers, and modern inverter power circuits. In Karur conditions, fine electronics can react to supply voltage dips or clogged condenser airflow. Timely service keeps electronic dampers and inverter modules operating smoothly without compressor failure.',
    localContent: 'We provide specialized Siemens refrigerator repair in Karur serving Thanthonimalai, Pasupathipalayam, Vengamedu bypass, Inam Karur, and Kovai Road. Our technicians arrive with precision multimeters, sensor test probes, inverter components, and vacuum charging rigs.',
    whenToCall: 'Contact our technicians if your Siemens fridge sounds persistent warning alarms, displays error codes, exhibits cold freezer but warm food compartments, builds moisture around door gaskets, or emits a burnt electrical odor (unplug from socket immediately).',
    types: [
      {
        name: 'Siemens iQ Series Inverter Double Door Refrigerator Repair',
        badge: 'iQ Series Inverter Frost Free',
        desc: 'Siemens iQ series refrigerators use variable speed inverter compressors that modulate speed smoothly. Inverter module failure or sensor drift can disrupt cooling cycles.',
        searchIntent: 'Searching for <strong>Siemens double door fridge repair near me</strong> in Karur? We diagnose iQ series inverter drive modules and multiAirflow ducts.',
        problems: 'Inverter compressor not turning over, temperature alarm beeping repeatedly, cooling drop in lower fresh food cabin.',
        checks: 'Inverter drive voltages, multiAirflow fan speed, and evaporator sensor resistance.',
        parts: 'Inverter power module, multiAirflow DC fan, and temperature sensors.',
        whenNeeded: 'When the alarm beeps continuously or food spoils on door shelves.'
      },
      {
        name: 'Siemens hyperFresh Multi-Door Refrigerator Repair',
        badge: 'hyperFresh Food Preservation',
        desc: 'Siemens hyperFresh refrigerators maintain dedicated near-0°C humidity zones for meat and vegetables. Electronic damper failures cause freezing or premature spoilage.',
        searchIntent: 'Looking for <strong>Siemens refrigerator repair in Karur</strong> for hyperFresh models? Doorstep testing for electronic dampers and zone sensors.',
        problems: 'Vegetables freezing solid in hyperFresh crisper, meat compartment remaining warm, touch panel error codes.',
        checks: 'Motorised damper valve, humidity sensors, and digital control PCB.',
        parts: 'Zone thermistors, electronic damper motor, and display wiring harness.',
        whenNeeded: 'When crisper drawer temperature drifts or vegetables turn icy.'
      }
    ],
    problems: [
      {
        title: 'Temperature Alarm Sounding Continuously',
        desc: 'The internal alarm beeps persistently to signal that the cabinet temperature has risen above safe levels.',
        badge: 'Thermal Alert',
        label1: 'Probable Cause', val1: 'Air damper stuck closed or defrost sensor failure',
        label2: 'Technician Check', val2: 'Measures compartment temperatures and tests damper motor',
        label3: 'Resolution', val3: 'Re-aligns or replaces motorized air damper'
      },
      {
        title: 'Inverter Compressor Failing to Ignite',
        desc: 'The compressor stays silent while the electronic board attempts to trigger motor start without success.',
        badge: 'Inverter Board',
        label1: 'Probable Cause', val1: 'Blown IPM driver on inverter power module',
        label2: 'Technician Check', val2: 'Tests DC bus voltage and 3-phase compressor terminal balance',
        label3: 'Resolution', val3: 'Restores power supply circuit or replaces inverter board'
      },
      {
        title: 'hyperFresh Drawer Freezing Fresh Produce',
        desc: 'Vegetables and fruits in the hyperFresh compartment turn into solid ice due to excessive cold airflow.',
        badge: 'Zone Damper',
        label1: 'Probable Cause', val1: 'Zone thermistor drifted out of calibration',
        label2: 'Technician Check', val2: 'Reads thermistor resistance curve with multimeter',
        label3: 'Resolution', val3: 'Installs new calibrated NTC sensor'
      },
      {
        title: 'Frost Choking multiAirflow Evaporator',
        desc: 'A dense layer of frost blocks rear air vents, cutting off chilled circulation to the main refrigerator.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Open defrost heating element or blown thermal cut-off',
        label2: 'Technician Check', val2: 'Measures element continuity and inspects fuse',
        label3: 'Resolution', val3: 'Replaces heating element and clears duct ice'
      },
      {
        title: 'Condensation Droplets on Door Gasket Lip',
        desc: 'Moisture droplets accumulate around the inner door frame, indicating warm air infiltration.',
        badge: 'Door Boundary',
        label1: 'Probable Cause', val1: 'Magnetic door gasket misaligned or deformed',
        label2: 'Technician Check', val2: 'Inspects door plumb and magnetic seal grip',
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
        location: 'Thanthonimalai',
        title: 'Siemens iQ Series Inverter Double Door Beep Alarm Diagnosis',
        tanglishText: 'Thanthonimalai area-la oru customer avanga Siemens iQ Series double door fridge continuous-aa beep sound adichite irukku, food compartment warm aagudhu-nu sonnanga. Technician spot-ku poi paathadhula internal temperature set point reach aagadha nala warning buzzer trigger aagirundhadhu. Multi-meter vechu inspect pannadhula multiAirflow DC fan motor jam aagi cold air circulate aagala. Puthiya DC fan motor match panni install pannom. 30 minutes-la alarm silence aagi normal chill establish aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Siemens hyperFresh Drawer Freezing Vegetable Problem',
        tanglishText: 'Pasupathipalayam main layout-la Siemens hyperFresh fridge use panra family contact pannanga. hyperFresh drawer kulla vecha vegetables solid ice madhiri freeze aagudhu-nu sonnanga. Technician inspect panni paathadhula motorised damper baffle fully open-la stuck aagi zero degree cold air continuously rush aagitu irundhadhu. Damper unit change panni thermistor calibration verify pannom. Fresh food vegetables fresh-aa maintain aaga aarambichadhu.'
      },
      {
        location: 'Vengamedu',
        title: 'Siemens Inverter Driver PCB Module Service',
        tanglishText: 'Vengamedu bypass kitta Siemens fridge sudden power cut-ku apram completely silent aagi cooling ninnu pochu. Technician visit panni inverter board check pannadhula power line input MOV and bridge rectifier fuse tripped aagirundhadhu. Compressor winding safe-aa 12 ohms balance irundhadhu. Board circuit rebuild panni bench test panni re-fit pannom. Motor smooth-aa start aagi whisper silent-aa cycle run aachu.'
      },
      {
        location: 'Inam Karur',
        title: 'Siemens Frost Free Rear Duct Defrost Heater Fix',
        tanglishText: 'Inam Karur-la Siemens fridge freezer-la matrum ice irundhadhu, fresh food compartment full-aa warm. Technician inner back casing open panni paathadhula evaporator fins mela solid snow block aagi air passages closed-aa irundhadhu. Multimeter check-la defrost heater glass element open circuit kaatuchu. Matched replacement heater fit panni ice completely melt pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Siemens Door Perimeter Magnetic Gasket Realignment',
        tanglishText: 'Kovai Road housing colony-la Siemens bottom freezer model door rubber corner-la light gap irundhu fridge frame mela condensation droplets oothudhu-nu sonnanga. Warm humid Karur air ulla penetrate aagirundhadhu. Technician magnetic gasket remove panni heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem theerndhadhu.'
      },
      {
        location: 'Vennaimalai',
        title: 'Siemens Precision Gas Evacuation & R600a Recharge',
        tanglishText: 'Vennaimalai residence-la Siemens fridge compressor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen holding test-la suction line brazed joint micro leak confirm aachu. Joint re-braze panni high-vacuum pump vechu moisture pull pannitu, digital weight scale-la exact R600a charge pannom. Frost pattern perfect-aa create aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Siemens Multi-Zone Temperature Sensor Calibration',
        tanglishText: 'Kovai Road-la Siemens double door fridge-la cooling fluctuation problem irundhadhu. Sensor reading irregular-aa signal send panni compressor unneccessarily off aagitu irundhadhu. Technician evaporator and cabin thermistors-a water bath calibration test panni out-of-range sensor-a replace pannanga. Temperature perfectly stable aagi machine normal-aa function aachu.'
      }
    ],
    whyChoose: [
      'Technicians trained in Siemens iQ series and hyperFresh multiAirflow systems',
      'Diagnostic testing with precision digital multimeters and temperature sensors',
      'quick doorstep support across all Karur localities',
      'Transparent fault explanation and upfront spare pricing',
      'Post-repair temperature profiling to verify proper cooling recovery'
    ]
  },
  {
    name: 'Hitachi',
    slug: 'hitachi-refrigerator-repair-service-in-karur.html',
    h1: 'Hitachi Refrigerator Repair Service in Karur',
    metaTitle: 'Hitachi Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Hitachi refrigerator repair in Karur? Doorstep inspection for Hitachi Dual Fan Cooling, French door, inverter & multi-door fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Hitachi refrigerator repair near me in Karur? When your Hitachi Dual Fan Cooling refrigerator experiences cooling drop or the inverter compressor driver flashes diagnostic error codes, our technicians provide quick doorstep repair across Karur. From Pasupathipalayam to Thorakkalpatti and Kagithapuramam, get dependable Hitachi fridge repair near me with verified troubleshooting and genuine parts.',
    tanglishIntroBox: 'Hitachi fridge-la cooling balance miss aagudha? Dual Fan Cooling system-la freezer chill aana fridge section warm-aa irukka? Inverter compressor driver board issue-aa? Hitachi quality multi-door and French door refrigerators-ku trained technicians unga doorstep-la attend pannuvanga. Multimeter testing panni accurate solution provide panrom.',
    whyRepair: 'Hitachi refrigerators incorporate Dual Fan Cooling dedicated motors, Eco Thermo-Sensors, and inverter compressor electronics. In Karur conditions, power fluctuations or dust buildup on condenser coils can cause electronic driver trips or airflow damper seizure. Timely service preserves your investment and restores whisper-quiet operation.',
    localContent: 'We provide specialized Hitachi refrigerator repair across Karur including Pasupathipalayam, Thorakkalpatti, Kagithapuramam, Thanthonimalai, and Kovai Road. Our technicians arrive equipped with electronic diagnostic meters, dual fan motors, and inverter driver boards.',
    whenToCall: 'Contact our technicians if your Hitachi fridge sounds an alert tone, experiences cooling failure in either compartment, shows frost accumulation behind the interior panel, leaks water around the base, or produces an electrical burning odor (unplug immediately).',
    types: [
      {
        name: 'Hitachi Dual Fan Cooling Refrigerator Repair',
        badge: 'Dual Fan Dedicated Cooling',
        desc: 'Hitachi Dual Fan Cooling models use two dedicated fans for the freezer and refrigerator compartments. If one fan motor or sensor fails, cooling drops in that specific compartment.',
        searchIntent: 'Searching for <strong>Hitachi double door fridge repair near me</strong> in Karur? We diagnose Dual Fan Cooling dedicated motors and Eco Thermo-Sensors.',
        problems: 'Freezer working at sub-zero cold while fresh food cabin stays warm, continuous warning tone, frost choking air vents.',
        checks: 'Dual fan speeds, independent evaporator sensors, and control board output.',
        parts: 'Dedicated DC circulation fan, compartment thermistors, and defrost heater.',
        whenNeeded: 'When the refrigerator cabin warms up despite an operational freezer.'
      },
      {
        name: 'Hitachi French Door Inverter Refrigerator Repair',
        badge: 'French Door Multi-Zone',
        desc: 'Hitachi French door refrigerators feature multi-door layouts with inverter compressors. Touch display issues, motorized damper failures, and gas leaks are typical service items.',
        searchIntent: 'Looking for <strong>Hitachi refrigerator repair in Karur</strong> for French door models? Doorstep testing for touch displays and dual fan circuits.',
        problems: 'Touch screen buttons unresponsive, freezer unable to reach sub-zero temperatures, water dripping inside.',
        checks: 'Touch display PCB, dual evaporator fans, and defrost heating elements.',
        parts: 'Display control board, DC circulation fan, and defrost heater element.',
        whenNeeded: 'When display panel flickers or one compartment loses cooling performance.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill in Dual Fan Setup',
        desc: 'The freezer functions properly at -18°C, but the refrigerator cabin warms up to ambient levels.',
        badge: 'Dual Fan Issue',
        label1: 'Probable Cause', val1: 'Fridge compartment circulation fan stall or sensor failure',
        label2: 'Technician Check', val2: 'Tests dedicated fan motor voltage and thermistor value',
        label3: 'Resolution', val3: 'Replaces DC circulation fan or recalibrates sensor'
      },
      {
        title: 'Inverter Compressor Not Turning Over',
        desc: 'The refrigerator has power and interior LED operates, but the compressor remains silent.',
        badge: 'Inverter Driver',
        label1: 'Probable Cause', val1: 'Inverter driver board power fault or signal interruption',
        label2: 'Technician Check', val2: 'Measures inverter drive output and compressor windings',
        label3: 'Resolution', val3: 'Repairs inverter driver circuit or replaces module'
      },
      {
        title: 'Eco Thermo-Sensor Drift',
        desc: 'Cabin food items freeze solid or spoil too soon due to erratic temperature regulation.',
        badge: 'Sensor Issue',
        label1: 'Probable Cause', val1: 'Eco Thermo-Sensor resistance drifting out of range',
        label2: 'Technician Check', val2: 'Measures thermistor resistance curve against temperature table',
        label3: 'Resolution', val3: 'Installs new calibrated sensor probe'
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
        title: 'French Door Touch Panel Unresponsive',
        desc: 'Touch screen buttons on the front door do not register presses or flicker erratically.',
        badge: 'Touch Interface',
        label1: 'Probable Cause', val1: 'Door hinge wiring harness fatigue or display board fault',
        label2: 'Technician Check', val2: 'Inspects door hinge ribbon harness and checks voltages',
        label3: 'Resolution', val3: 'Repairs wiring harness or replaces touch control PCB'
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
        title: 'Hitachi Dual Fan Cooling Fridge Section Fan Motor Fix',
        tanglishText: 'Pasupathipalayam-la oru resident avanga Hitachi Dual Fan Cooling fridge-la freezer super chill-aa irukku, aana main fridge cabin-la cooling full-aa drop aachu-nu sonnanga. Technician spot-ku poi independent fridge circuit test pannadhula dedicated DC blower fan motor jam aagirundhadhu. New matched DC fan motor install panni air channels check pannom. 30 minutes-la fridge cabin target temperature-ku reach aachu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Hitachi French Door Touch Panel Ribbon Harness Recovery',
        tanglishText: 'Thorakkalpatti layout-la Hitachi French door fridge door touch display buttons press panna respond aagala-nu complaint. Technician door hinge wiring loom check pannadhula continuous door swing nala internal ribbon wires stress aagi cut aagirundhadhu. Harness repair panni flexible conduit protection kuduthom. Touch temperature settings instant-aa operate aachu, customer romba relieved.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Hitachi Inverter Driver Card Power Surge Restoration',
        tanglishText: 'Kagithapuramam-la sudden power surge apram Hitachi fridge display alarm beep panni compressor run aagala. Technician visit panni inverter driver card check pannadhula DC bus fuse open circuit aagirundhadhu. Inverter power components repair panni bench-la simulate pannom. Re-installation ku apram motor whisper silent-aa cycle run aachu, customer romba happy.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Hitachi Frost Free Evaporator Defrost Heater Fix',
        tanglishText: 'Thanthonimalai area-la Hitachi fridge back wall-la heavy ice slab form aagi air vents block aagirundhadhu. Technician rear panel open panni paathadhula defrost heating element burnt aagirundhadhu. OEM matching heater element install panni steam treatment-la ice clear pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Hitachi Door Perimeter Magnetic Gasket Realignment',
        tanglishText: 'Kovai Road layout-la Hitachi fridge door corner-la light gap irundhu frame mela moisture condensation varudhu-nu sonnanga. Technician magnetic gasket heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem complete-aa stop aachu.'
      },
      {
        location: 'Vengamedu',
        title: 'Hitachi Sealed Circuit Nitrogen Leak Test & R600a Refill',
        tanglishText: 'Vengamedu bypass kitta Hitachi fridge motor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen test-la copper line micro leak detect panni silver braze pannom. Deep vacuum pull panni exact weight R600a charge pannom. Cooling within 40 minutes normal aachu.'
      }
    ],
    whyChoose: [
      'Specialized technicians familiar with Hitachi Dual Fan Cooling and inverter engineering',
      'Doorstep diagnostic testing with digital precision multimeters and sensor probes',
      'quick response across Karur Town and residential suburbs',
      'Honest fault explanations with transparent spare pricing',
      'Thorough temperature profiling before completing the service call'
    ]
  },
  {
    name: 'Kelvinator',
    slug: 'kelvinator-refrigerator-repair-service-in-karur.html',
    h1: 'Kelvinator Refrigerator Repair Service in Karur',
    metaTitle: 'Kelvinator Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Kelvinator refrigerator repair in Karur? Doorstep service for Kelvinator direct cool single door & frost-free double door fridges. Affordable local repair.',
    searchIntentIntro: 'Searching for Kelvinator refrigerator repair near me in Karur? When your Kelvinator direct cool single door fridge stops freezing ice or the compressor clicks repeatedly without running, our technicians provide dependable doorstep service across Karur. From Karur Town to Thanthonimalai and Inam Karur, find economical Kelvinator fridge repair near me with verified troubleshooting and accessible spares.',
    tanglishIntroBox: 'Kelvinator fridge-la cooling ninnu pocha? Single door model-la ice kattai excessive-aa kattudha? Compressor click-click nu sound kuduthu start aagala? Kelvinator robust heritage cooling appliances-ku experienced local technicians unga veetukke vandhu check pannuvanga. Reason-a explain pannitu affordable spare cost-la repair mudipanga.',
    whyRepair: 'Kelvinator refrigerators have a long history of solid mechanical reliability in Tamil Nadu households. Over years of daily use, starter relays can burn out, direct cool thermostats can lose calibration, or defrost timers can fail. Economical repairs restore peak cooling and prevent premature compressor replacement.',
    localContent: 'We service Kelvinator refrigerators across Karur Town, Thanthonimalai, Inam Karur, Sengunthapuram, and Kagithapuramam. We carry mechanical thermostats, PTC starter relays, bimetals, and blower fans for immediate doorstep repair.',
    whenToCall: 'Reach out for inspection if your Kelvinator fridge stops chilling food, builds excessive ice in the freezer, makes loud clicking sounds, leaks water onto the floor, or gives an electrical burning smell (switch off main socket immediately).',
    types: [
      {
        name: 'Kelvinator Direct Cool Single Door Refrigerator Repair',
        badge: 'Direct Cool Single Door',
        desc: 'Kelvinator direct cool single door refrigerators are built with robust mechanical cooling loops. Starter relays, thermostats, and door gaskets are common service items.',
        searchIntent: 'Searching for <strong>Kelvinator single door fridge repair near me</strong> in Karur? Quick doorstep fix for thermostat, starter relay, and cooling coil leaks.',
        problems: 'Freezer box icing up uncontrollably, compressor clicking without starting, zero cooling with warm body.',
        checks: 'Rotary thermostat contacts, PTC starter relay, overload protector, and gas pressure.',
        parts: 'PTC starter relay, mechanical thermostat switch, door gasket, and refrigerant.',
        whenNeeded: 'When ice builds up uncontrollably or the compressor will not turn on.'
      },
      {
        name: 'Kelvinator Frost Free Double Door Refrigerator Repair',
        badge: 'Frost Free Double Door',
        desc: 'Kelvinator frost-free double door fridges circulate cold air from the freezer into the food cabin. Mechanical defrost timers and bimetal switches are typical service components.',
        searchIntent: 'Looking for <strong>Kelvinator double door fridge repair in Karur</strong>? Doorstep diagnosis for defrost timers, heaters, and circulation fans.',
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
        title: 'Kelvinator Direct Cool Single Door Relay Replacement',
        tanglishText: 'Karur Town main market kitta irundha customer call pannanga. Avanga Kelvinator single door fridge-la cooling ninnu compressor clicking sound varudhu-nu sonnanga. Technician spot-ku poi check pannadhula PTC starter relay overheat aagi contact burn aagirundhadhu. Compressor winding ohms test panni motor safe-nu confirm pannitu puthiya heavy-duty relay fit pannom. Motor instant-aa ignite aagi cooling plates chill aaga aarambichadhu. Customer romba satisfied.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Kelvinator Double Door Defrost Timer Problem Fix',
        tanglishText: 'Thanthonimalai area-la oru customer avanga Kelvinator double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk spoil aagudhu-nu complaint pannanga. Technician inspect pannadhula mechanical defrost timer gear stuck aagi heating cycle trigger aagala. Evaporator coil full-aa ice kattirundhadhai steam panni clear pannom. New defrost timer and bimetal switch install panni test pannadhula lower cabin airflow perfect-aa return aachu.'
      },
      {
        location: 'Inam Karur',
        title: 'Kelvinator Single Door Thermostat Over-Freezing Fix',
        tanglishText: 'Inam Karur-la Kelvinator single door fridge freezer-la ice rock madhiri solid-aa kattudhu-nu sonnanga. Defrost button press panniyum solve aagala. Technician inspect pannadhula thermostat contact welded aagi compressor cut-off aagama non-stop-aa run aagitu irundhadhu. Original calibrated rotary thermostat replace pannom. Machine ippo proper interval-la cut-off aagi temperature maintain panradhu.'
      },
      {
        location: 'Sengunthapuram',
        title: 'Kelvinator Double Door Vegetable Crisper Water Leak Fix',
        tanglishText: 'Sengunthapuram layout-la Kelvinator double door fridge veg box kulla water thengi floor-la leak aagudhu-nu sonnanga. Technician back panel open panni paathadhula defrost drain cup dust particle-la block aagirundhadhu. High-pressure warm water flush panni drain pipe-a completely clear pannom. Rear compressor tray-ku water proper-aa discharge aagudha-nu check pannitu solve pannom.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Kelvinator Single Door Magnetic Door Gasket Renewal',
        tanglishText: 'Kagithapuramam-la Kelvinator fridge door rubber loose aagi side-la gap irundhadhu. Cold air veliya leak aagi current bill athigam aagudhu-nu sonnanga. Matching magnetic gasket replace panni door alignment adjust pannom. Tight airtight grip establish aagi cooling retention restore aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with extensive repair history on Kelvinator refrigerators',
      'Doorstep service across Karur Town, Thanthonimalai, Inam Karur, and nearby areas',
      'Ready availability of economical, compatible spare parts',
      'Clear, honest fault explanation with upfront estimates',
      'Cooling and cut-off verification before call closure'
    ]
  }
];

module.exports = brands7to12;
