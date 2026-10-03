// scripts/stories_fridge.js
// 24 unique Refrigerator problem stories with 8 diverse grammatical heading styles each,
// matching simple Indian English and Tanglish descriptions, and ZERO corporate buzzwords.

module.exports = [
  {
    id: "fridge_ptc_relay_clicking",
    topic: "compressor clicking sound ptc starter relay",
    headingStyles: [
      (b, l) => `Compressor on ${b} Fridge Clicked Every Two Minutes`,
      (b, l) => `PTC Starter Relay and Overload Protector Swapped on ${b} Fridge`,
      (b, l) => `Why the ${b} Compressor Hummed for Five Seconds then Clicked Off`,
      (b, l) => `Quiet Hum and Steady Chilling Restored to ${b} Refrigerator`,
      (b, l) => `Cracked Ceramic Starter Disc Replaced on ${b} Compressor in ${l}`,
      (b, l) => `${b} Refrigerator Lost All Cooling While Milk Spoiled Overnight`,
      (b, l) => `In ${l}, ${b} Frost-Free Refrigerator Developed Clicking Start Fault`,
      (b, l) => `Compressor Starter Relay Pack and Overload Switch Replacement on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called when their ${b} double-door refrigerator stopped cooling and made a metallic click every few minutes. The technician inspected the compressor terminal box and shook the PTC starter relay; it rattled with loose broken pieces inside. A summer voltage dip had shattered the internal ceramic disc. Fitted a heavy-duty original PTC relay and overload protector, and the compressor purred to life immediately.`,
    ta: (b, l) => `${l}-la ${b} fridge-la irundhu 2 nimishathuku oru murai tak-nu click saththam ketuchu, aana cooling aagala. Compressor starter relay kulla ceramic disc udanju poiduchu. New PTC relay and OLP maathunadhum compressor smooth-ah start aagi nalla chill aachu.`
  },
  {
    id: "fridge_defrost_bimetal_failure",
    topic: "freezer ice block bimetal defrost sensor",
    headingStyles: [
      (b, l) => `Freezer Froze Solid but Lower Compartment Stayed Warm on ${b} Fridge`,
      (b, l) => `Bi-Metal Defrost Thermostat and Glass Heater Swapped on ${b}`,
      (b, l) => `Why ${b} Thick Snow Blocked the Air Ducts Behind Freezer Wall`,
      (b, l) => `Balanced Cooling Between Freezer and Vegetable Cabin Restored on ${b}`,
      (b, l) => `Choked Evaporator Ice Thawed and Defrost Sensor Replaced on ${b} in ${l}`,
      (b, l) => `Milk Spoiled in Bottom Shelf While Ice Cream Was Hard on ${b} Fridge`,
      (b, l) => `In ${l}, ${b} Frost-Free Refrigerator Suffered Defrost System Failure`,
      (b, l) => `Defrost Cycle Sensor and Air Duct De-Icing on ${b} Refrigerator`
    ],
    en: (b, l) => `In ${l}, customer noticed their ${b} freezer was packed with thick ice, but vegetables in the lower cabin were warm and rotting. The technician removed the freezer back cover, exposing a solid block of ice suffocating the cold air fan. The defrost bi-metal thermostat had failed open, skipping heating cycles. De-iced the coils with steam, replaced the bi-metal sensor, and airflow balanced out perfectly.`,
    ta: (b, l) => `${l}-la ${b} fridge freezer-la full-ah ice katti irundhadhu, aana keezha veg box-la cooling-e illa. Defrost bi-metal sensor fail aagi heater on aagala. Steam pottu ice karachi new sensor maathunom. Ippo keezha mela rendu pakkamum equal cooling varudhu.`
  },
  {
    id: "fridge_drain_hole_ice_clog",
    topic: "drain hole blocked water under crisper",
    headingStyles: [
      (b, l) => `Water Kept Pooling Beneath the Vegetable Crisper Box in ${b} Fridge`,
      (b, l) => `Choked Defrost Drain Trough Flushed with Hot Pressurized Water on ${b}`,
      (b, l) => `Why ${b} Melting Defrost Water Poured Onto the Kitchen Floor Tiles`,
      (b, l) => `Spotless and Bone-Dry Vegetable Storage Restored on ${b} Refrigerator`,
      (b, l) => `Hard Water Salt and Algae Sludge Cleared from Drain Spout on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Bottom Shelf Looked Like a Shallow Swimming Pool`,
      (b, l) => `In ${l}, ${b} Fridge Defrost Water Overflowed into Food Shelves`,
      (b, l) => `Internal Defrost Drain Channel and Rubber Duckbill Valve Servicing on ${b}`
    ],
    en: (b, l) => `A resident on ${b} in ${l} was tired of mopping water from under their vegetable tray every single morning. The technician opened the rear freezer panel and found the tiny drain funnel blocked with frozen ice and food crumbs, forcing melted defrost water into the fresh food cabin. Cleared the pipe with hot water and flexible wire, cleaned the rear rubber duckbill valve, and water drained safely into the evaporation tray.`,
    ta: (b, l) => `${l}-la ${b} fridge vegetable box keezha thanni thengi kitchen floor-layum leakaachu. Defrost drain hole-la ice and dirt adaichi irundhadhu. Hot water pottu drain clean panni back valve open pannom. Water dripping total-ah ninnuduchu.`
  },
  {
    id: "fridge_evaporator_fan_bearing",
    topic: "evaporator fan whining noise dry bushing",
    headingStyles: [
      (b, l) => `${b} - High-Pitched Whine Echoed from Freezer Whenever Door Was Closed`,
      (b, l) => `Evaporator Blower Fan Motor Replaced Inside ${b} Freezer`,
      (b, l) => `Why ${b} Opening the Refrigerator Door Made the Noise Disappear Instantly`,
      (b, l) => `Silent and Powerful Cold Air Circulation Restored to ${b} Cabin`,
      (b, l) => `Worn Fan Bushings and Ice-Scraping Plastic Blades Fixed on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Started Howling Like an Approaching Siren at Night`,
      (b, l) => `In ${l}, ${b} Freezer Circulation Fan Motor Developed Bearing Squeal`,
      (b, l) => `Freezer Evaporator Fan Motor and Rubber Grommet Replacement on ${b}`
    ],
    en: (b, l) => `In ${l}, customer noticed a loud whining sound inside their ${b} fridge that stopped whenever they opened the freezer door, cutting fan power. The technician accessed the rear evaporator cavity and found the motor's bronze sintered bushings had dried out from sub-zero frost, causing the rotor shaft to chatter. Installed a sealed replacement DC fan motor with fresh rubber grommets, making air movement whisper-quiet.`,
    ta: (b, l) => `${l}-la ${b} fridge door mooduna freezer kulla irundhu whining sound ketuchu, door thirandhapove sound ninnudum. Fan motor bushing dry aagi saththam pottadhu. New DC fan motor maathunadhum silent-ah air circulate aagudhu.`
  },
  {
    id: "fridge_door_gasket_gap_sweating",
    topic: "door gasket gap condensation sweating",
    headingStyles: [
      (b, l) => `Water Droplets Sweated Along the Front Edges of ${b} Refrigerator`,
      (b, l) => `Magnetic Rubber Door Gasket Heat-Treated and Realigned on ${b}`,
      (b, l) => `Why ${b} Warm Room Air Leaked into the Freezer and Formed Snowy Frost`,
      (b, l) => `Airtight Magnetic Door Seal and Frost-Free Operation Restored on ${b}`,
      (b, l) => `Warped Door Gasket Corner Re-magnetized and Reseated on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Door Kept Popping Open Under Lightest Touch`,
      (b, l) => `In ${l}, ${b} Refrigerator Showed Severe Door Seal Condensation`,
      (b, l) => `Magnetic Perimeter Gasket Realignment and Seal Restoration on ${b}`
    ],
    en: (b, l) => `Customer on ${b} in ${l} complained that white snow-like frost was building up around ice trays and water drops were dripping down the front door face. The technician used a dollar bill test and found a 3mm gap along the top magnetic gasket corner where warm kitchen air was being pulled in. Applied a heat gun to soften and reform the compressed rubber, restored the magnetic seal, and sweating ceased completely.`,
    ta: (b, l) => `${l}-la ${b} fridge door orathula thanni thuligal condensation aagi drops-ah vizhundhudhu. Door rubber gasket mela gap irundhu kaathu ulla pochu. Heat panni gasket alignment correct pannom, door tight-ah seal aayiduchu.`
  },
  {
    id: "fridge_thermostat_continuous_freeze",
    topic: "thermostat stuck veggies freezing ice solid",
    headingStyles: [
      (b, l) => `Vegetables in ${b} Fridge Cartons Froze Solid into Ice in Lower Cabin`,
      (b, l) => `Stuck Capillary Mechanical Thermostat Replaced on ${b} Refrigerator`,
      (b, l) => `Why the ${b} Compressor Ran Non-Stop Day and Night Without Any Rest`,
      (b, l) => `Gentle 4°C Fresh-Food Temperature Restored on ${b} Lower Shelves`,
      (b, l) => `Welded Thermostat Switch Contacts Swapped for New Unit on ${b} in ${l}`,
      (b, l) => `Tomatoes and Coriander Froze Rock Hard Inside ${b} Single Door Fridge`,
      (b, l) => `In ${l}, ${b} Refrigerator Refused to Shut Off Its Cooling Engine`,
      (b, l) => `Cold Control Thermostat and Sensor Capillary Tube Servicing on ${b}`
    ],
    en: (b, l) => `${b} - In ${l}, a homeowner was distressed that tomatoes and curd in their fresh food cabin were freezing rock hard, ruining daily cooking ingredients. The technician inspected the temperature thermostat dial and discovered the internal electrical contacts had welded shut, keeping the compressor running 24 hours straight. Replaced the thermostat unit and calibrated sensor bulb placement on the evaporator plate, restoring crisp 4°C cooling.`,
    ta: (b, l) => `${l}-la ${b} fridge-la thakkali and paal packet kooda ice-ah maari poiduchu. Thermostat contacts otti compressor nonstop-ah oditte irundhadhu. New calibrated thermostat change pannom, vegetables ippo fresh-ah irukku.`
  },
  {
    id: "fridge_gas_leak_suction_line",
    topic: "gas leak suction line aluminum copper joint",
    headingStyles: [
      (b, l) => `${b} Compressor Ran Hot and Silent but Both Chambers Remained Dead Warm`,
      (b, l) => `Aluminum-to-Copper Joint Braze-Welded and Leak Sealed on ${b} Fridge`,
      (b, l) => `Why the ${b} Back Condenser Tubes Felt Cool Instead of Warm to Touch`,
      (b, l) => `Deep Sub-Zero Freezing Restored Following R600a Gas Recharge on ${b}`,
      (b, l) => `Microscopic Pinhole Leak Repaired on Internal Suction Pipe on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Cooling Dropped Gradually to Zero Over One Week`,
      (b, l) => `In ${l}, ${b} Fridge Lost All Refrigerant Due to Joint Corrosion`,
      (b, l) => `Internal Refrigerant Pinhole Leak Sealing and Precise Gas Refill on ${b}`
    ],
    en: (b, l) => `A family in ${l} noticed their ${b} fridge had stopped cooling entirely, with the compressor running warm but the condenser coils remaining room temperature. The technician pressurized the system with dry nitrogen and detected a hairline corrosion pinhole at the copper-to-aluminum transition joint behind the freezer wall. Braze-welded the joint using specialized flux rod, pulled a deep vacuum, and recharged pure R600a refrigerant.`,
    ta: (b, l) => `${l}-la ${b} fridge compressor odudhu aana cooling konjam kooda illa. Copper and aluminum joint-la pinhole gas leak aagirundhadhu. Brazing panni leak seal pannom, vacuum pottu R600a gas weight panni fill pannom. Ice super-ah kattudhu.`
  },
  {
    id: "fridge_inverter_pcb_blinking_led",
    topic: "inverter pcb error blink compressor drive fail",
    headingStyles: [
      (b, l) => `${b} Inverter Board Flashed Error Light Diagnostic LED Four Times`,
      (b, l) => `Inverter Power Module IPM Chip Replaced on ${b} Controller Board`,
      (b, l) => `Why the ${b} BLDC Inverter Compressor Failed to Ramp Up Speed`,
      (b, l) => `Smooth Variable-Speed Compression Restored to ${b} Inverter Fridge`,
      (b, l) => `Burned Gate Driver Resistors Repaired on PCB on ${b} at ${l}`,
      (b, l) => `${b} Smart Inverter Refrigerator Stood Motionless After Power Flicker`,
      (b, l) => `In ${l}, ${b} Inverter Compressor Drive Module Tripped on Start`,
      (b, l) => `Inverter BLDC Motor Driver Board Overhaul on ${b} Refrigerator`
    ],
    en: (b, l) => `In ${l}, an inverter double-door ${b} fridge stopped chilling following an evening voltage surge. The technician accessed the rear metal enclosure and noted the inverter driver board's red LED was blinking a 4-flash IPM overcurrent code. Desoldered the failed intelligent power module, cleaned the board traces, fitted a heavy-duty original IPM chip, and verified smooth three-phase motor rotation.`,
    ta: (b, l) => `${l}-la ${b} inverter fridge-la PCB red light 4 times blink aagi compressor on aagala. Inverter board-la IPM drive chip short aagirundhadhu. Chip change panni test pannom, compressor smooth-ah start aagi chilling vandhudhu.`
  },
  {
    id: "fridge_ice_maker_gear_jammed",
    topic: "automated ice maker twist tray jammed",
    headingStyles: [
      (b, l) => `Twist Ice Maker in ${b} Fridge Got Stuck Halfway Through Its Dumping Cycle`,
      (b, l) => `Stripped Plastic Drive Gears Replaced Inside ${b} Ice Maker Unit`,
      (b, l) => `Why ${b} Ice Cubes Refused to Drop into the Lower Storage Bin`,
      (b, l) => `Crisp Automatic Ice Cube Ejection Restored on ${b} French Door Fridge`,
      (b, l) => `Jammed Ejector Arm and Motor Cam Lubricated on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Made a Clicking Noise from Ice Box Every Hour`,
      (b, l) => `In ${l}, ${b} In-Door Ice Dispenser Stalled with Full Water Tray`,
      (b, l) => `Automated Ice Maker Drive Motor and Gearbox Assembly Servicing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called because the automated twist ice tray in their ${b} refrigerator was stuck upside down, clicking loudly and spilling water. The technician disassembled the ice maker housing and found the reduction drive gear had stripped two teeth when ice cubes fused during a brief power cut. Fitted a replacement reinforced gear assembly, aligned the home limit switch, and ice cubes dropped smoothly.`,
    ta: (b, l) => `${l}-la ${b} fridge automatic ice maker twist aagi paadhila stuck aayiduchu, ice vizhala. Gear box teeth udanju poiduchu. New gear set change panni test pannom, ice cubes ippo clean-ah box-la fall aagudhu.`
  },
  {
    id: "fridge_mild_electric_shock_body",
    topic: "mild electric shock door handle ground loop",
    headingStyles: [
      (b, l) => `${b} - Mild Electric Tingling Sensation Felt When Touching Fridge Door Handle`,
      (b, l) => `Damaged Internal Heater Insulation Re-sleeved on ${b} Fridge`,
      (b, l) => `Why ${b} 55 Volts Stray Potential Appeared on the Stainless Door Skin`,
      (b, l) => `Complete Electrical Safety and Zero Stray Leakage Restored on ${b}`,
      (b, l) => `Corroded Grounding Wire Re-clamped to Compressor Base on ${b} in ${l}`,
      (b, l) => `Opening ${b} Refrigerator with Bare Feet Caused Unpleasant Shock`,
      (b, l) => `In ${l}, ${b} Metal Fridge Body Developed Stray Electrical Voltage`,
      (b, l) => `Chassis Electrical Insulation and Earthing Continuity Overhaul on ${b}`
    ],
    en: (b, l) => `In ${l}, a homeowner felt an electric tingle on their fingertips whenever touching the stainless steel door of their ${b} fridge with wet hands. The technician tested the chassis with an insulation tester and detected 55V AC leakage. The internal cabinet mullion anti-sweat heater wire had worn its insulation against the steel frame, while the earthing pin in the 3-pin wall socket was corroded. Re-insulated the wire and bonded earth, eliminating voltage completely.`,
    ta: (b, l) => `${l}-la ${b} fridge door handle thottapo mild shock adichadhu. Mullion heater wire body-la pattu current leak aagirundhadhu. Wire re-insulate panni earthing point tighten pannom, 0V leakage-oda ippo safe-ah irukku.`
  },
  {
    id: "fridge_rattling_drain_pan_vibration",
    topic: "plastic drain pan loose vibration rattle",
    headingStyles: [
      (b, l) => `Loud Buzzing and Rattling Sound Echoed from Behind ${b} Fridge`,
      (b, l) => `Wobbly Plastic Evaporation Drain Tray Re-clipped onto ${b} Compressor`,
      (b, l) => `Why the ${b} Noise Vanished Instantly When Pushing the Fridge Back`,
      (b, l) => `Whisper-Quiet Kitchen Environment Restored by Securing ${b} Tray`,
      (b, l) => `High-Density Dampening Foam Installed Under Drain Pan on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Shook with an Irritating Plastic Rattle on Starting`,
      (b, l) => `In ${l}, ${b} Condenser Drain Pan Vibrated Continuously Against Metal`,
      (b, l) => `Compressor Top Drain Pan Retention Clips and Damper Servicing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} was irritated by a continuous vibrating buzz coming from behind their ${b} fridge whenever the motor ran. The technician inspected the rear lower bay and found the plastic defrost water evaporation pan had slipped off its mounting brackets, vibrating directly against the vibrating metal compressor dome. Installed heat-resistant rubber dampening pads and locked the retention clips firmly, silencing the buzz.`,
    ta: (b, l) => `${l}-la ${b} fridge pinpakkam compressor mela irukra plastic water tray aadi bayangarama buzzing sound pottuchu. Tray clips loose-ah irundhadhu. Vibration pads pottu clips lock pannom, kitchen-la sound full-ah calm aayiduchu.`
  },
  {
    id: "fridge_chilled_room_damper_stuck",
    topic: "motorized air damper baffle stuck shut",
    headingStyles: [
      (b, l) => `Lower Cabin in ${b} Fridge Remained Warm Dead Warm Despite Freezing Top Box`,
      (b, l) => `Motorized Air Damper Baffle Swapped Inside ${b} Cold Air Duct`,
      (b, l) => `Why ${b} Cold Air Refused to Blow Down from the Freezer into Fresh Shelves`,
      (b, l) => `Smooth Thermostatic Cold Airflow Distribution Restored on ${b}`,
      (b, l) => `Stuck Air Flap Stepper Motor Replaced on ${b} at ${l}`,
      (b, l) => `${b} Refrigerator Lower Shelves Stopped Receiving Chilled Airflow`,
      (b, l) => `In ${l}, ${b} Double Door Fridge Airflow Flap Stuck Permanently Shut`,
      (b, l) => `Motorized Air Flap Damper and Thermistor Assembly Servicing on ${b}`
    ],
    en: (b, l) => `In ${l}, a ${b} double-door fridge kept ice cream frozen hard, but the vegetable and milk shelves stayed at room temperature. The technician checked the internal air duct connecting both compartments and found the motorized plastic damper flap stuck shut because its internal stepper motor had stripped its plastic drive pinion. Installed a replacement motorized damper unit, restoring steady cold air draft to the lower shelves.`,
    ta: (b, l) => `${l}-la ${b} double door fridge-la mela super chill aachu aana keezha kaathu varave illa. Air duct damper flap moodi stuck aagirundhadhu. New motorized damper maathunadhum keezha shelf-la nalla chill kaathu flow aachu.`
  },
  {
    id: "fridge_door_switch_light_fan",
    topic: "door push switch stuck light stays on heating",
    headingStyles: [
      (b, l) => `Cabinet Light Remained On Even When ${b} Refrigerator Door Was Shut`,
      (b, l) => `Jammed Door Push-Button Switch Replaced on ${b} Refrigerator`,
      (b, l) => `Why the ${b} Refrigerator Interior Felt Lukewarm from Incandescent Heat`,
      (b, l) => `Automatic Light Shut-Off and Instant Cold Recovery Restored on ${b}`,
      (b, l) => `Corroded Door Contact Switch Contacts Cleaned on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Cabin Light Failed to Turn Off and Warmed Top Shelf`,
      (b, l) => `In ${l}, ${b} Fridge Door Microswitch Refused to Break Electrical Circuit`,
      (b, l) => `Door Interlock Push Switch and Lighting Circuit Overhaul on ${b}`
    ],
    en: (b, l) => `Customer on ${b} in ${l} noticed that butter kept on the top shelf was melting and the ceiling felt hot to the touch. The technician pushed a mobile phone camera inside while shutting the door and discovered the 15W internal bulb stayed burning 24/7 because the mechanical door push-switch was jammed open by sticky juice syrup. Replaced the switch with a modern sealed microswitch, stopping false heating immediately.`,
    ta: (b, l) => `${l}-la ${b} fridge door moodunalum ulla light erinjitte irundhadhu, adhanala shelf heat aagi butter urugudhu. Door switch sugar syrup pattu stuck aagirundhadhu. New door switch pottu clean pannom, door mooduna light off aagi shelf cool aachu.`
  },
  {
    id: "fridge_vegetable_crisper_overcooling",
    topic: "cold air diverter broken freezing vegetables",
    headingStyles: [
      (b, l) => `Vegetables in ${b} Crisper Turned Glassy and Frozen on Bottom Shelf`,
      (b, l) => `Broken Cold Air Deflector Shroud Replaced in ${b} Fresh Food Cabin`,
      (b, l) => `Why ${b} Sub-Zero Freezer Air Blasted Directly Onto Fresh Vegetables`,
      (b, l) => `Gentle Humidity-Controlled Crisper Environment Restored on ${b}`,
      (b, l) => `Cracked Plastic Air Guide Replaced on ${b} at ${l}`,
      (b, l) => `${b} Refrigerator Vegetable Box Kept Freezing Expensive Greens Solid`,
      (b, l) => `In ${l}, ${b} Crisper Box Suffered Direct Sub-Zero Freezing Drafts`,
      (b, l) => `Air Duct Diverter Shroud and Vegetable Drawer Humidity Baffle on ${b}`
    ],
    en: (b, l) => `${b} - In ${l}, greens and fruits kept in the crisper box were freezing solid, while milk on the top shelf was normal. The technician inspected the back wall of the fresh food compartment and found the moulded plastic cold air diverter baffle was cracked and broken off, allowing -15°C air straight from the freezer to pour down into the vegetable crisper. Fitted a genuine replacement air baffle, protecting delicate greens.`,
    ta: (b, l) => `${l}-la ${b} fridge crisper-la vekkara keerai and kaaikari ellam ice katti karuga poiduchu. Air diverter plate udanju freezer kaathu direct-ah veg box-la adikudhu. New air guide plate fix panni airflow divert pannom, veg box safe aachu.`
  },
  {
    id: "fridge_compressor_humming_overheating",
    topic: "compressor overheating caked condenser dust",
    headingStyles: [
      (b, l) => `${b} Compressor Felt Blazing Hot to Touch and Tripped Every 30 Minutes`,
      (b, l) => `Thick Carpet of Pet Hair and Dust Vacuumed from ${b} Condenser`,
      (b, l) => `Why the ${b} Bottom Machinery Bay Blew Super-Heated Air Across Floor`,
      (b, l) => `Cool and Energy-Efficient Compressor Operation Restored on ${b}`,
      (b, l) => `Clogged Bottom Condenser Wire Coil Brushed Clean on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Strained and Humming Heavily with Severe Heat`,
      (b, l) => `In ${l}, ${b} Compressor Reached 95°C Due to Suffocated Airflow`,
      (b, l) => `Sub-Base Condenser Coil Cleansing and Motor Heat Sink Maintenance on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called when their ${b} fridge began tripping the MCB after running hot for thirty minutes. The technician looked under the base plate and found the spiral wire condenser completely blanketed in a thick felt of dust, lint, and cobwebs, preventing cooling air from passing. Deep-brushed the coils and vacuumed the bay; compressor operating temperature dropped by 35°C and cooling efficiency soared.`,
    ta: (b, l) => `${l}-la ${b} fridge compressor thottu paatha kothikira alavuku heat aagi cut aagudhu. Base coil-la lint and dust karuppa adaichi irundhadhu. Heavy brush panni vacuum clean pannom, compressor temperature normal aagi continuous cooling odudhu.`
  },
  {
    id: "fridge_capillary_tube_moisture_choke",
    topic: "capillary tube moisture freezing intermittent cooling",
    headingStyles: [
      (b, l) => `${b} Fridge Cooled Fine for Six Hours Then Stopped Completely for Four Hours`,
      (b, l) => `Liquid Line Filter Drier Replaced and Nitrogen Flushed on ${b}`,
      (b, l) => `Why ${b} Cooling Came and Went in a Mysterious Cyclic Pattern on Fridge`,
      (b, l) => `Unbroken 24-Hour Continuous Freezing Restored on ${b} Refrigerator`,
      (b, l) => `Moisture Droplet Freezing in Capillary Tip Evaporated on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Switched Randomly Between Freezing and Defrosting`,
      (b, l) => `In ${l}, ${b} Cooling Cycle Suffered Intermittent Internal Moisture Choke`,
      (b, l) => `Refrigeration Circuit Dehydration and Solid Core Drier Swapping on ${b}`
    ],
    en: (b, l) => `In ${l}, customer was puzzled that their ${b} fridge cooled perfectly for several hours, then warmed up completely, only to cool again later. The technician recognized classic moisture contamination: a drop of water in the refrigerant was freezing solid at the capillary orifice, blocking gas flow until heat melted the ice bead. Evacuated the system, installed a molecular-sieve copper filter drier, recharged gas, and cooling became steady.`,
    ta: (b, l) => `${l}-la ${b} fridge 6 mani neram nalla chill aagudhu, aprom stop aagudhu, marubadiyum on aagudhu. Gas kulla moisture poyi capillary tip-la ice katti block aagirundhadhu. Line dehydrate panni new filter drier pottu gas refill pannom, non-stop-ah cool aagudhu.`
  },
  {
    id: "fridge_display_touch_panel_beeping",
    topic: "front display touch panel beeping moisture",
    headingStyles: [
      (b, l) => `Digital Temperature Display Beeped Non-Stop on ${b} Door Fascia`,
      (b, l) => `Moisture-Corroded Touch Membrane Cleaned and Resealed on ${b}`,
      (b, l) => `Why ${b} Temperature Settings Kept Changing Automatically on Fridge`,
      (b, l) => `Calm Display Operation and Responsive Touch Control Restored on ${b}`,
      (b, l) => `Water Vapor Infiltration Dried Out from Touch PCB on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Door Display Flashed Erratically with Continuous Chimes`,
      (b, l) => `In ${l}, ${b} Touchscreen Console Was Shorted by Kitchen Steam`,
      (b, l) => `Front Door Capacitive Touch PCB Servicing and Silicone Sealing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called because the digital touch panel on their ${b} fridge door kept chiming randomly and cycling between Eco and Power Cool modes. The technician dismantled the front display bezel and found steam from boiling cooking pots had seeped behind the capacitive glass, shorting touch sensor traces. Dried the circuitry, applied conformal silicone sealant around the glass edge, and controls operated with precision.`,
    ta: (b, l) => `${l}-la ${b} fridge door touch screen beep-beep nu saththam pottu mode change aayite irundhadhu. Kitchen steam ulla poyi touch board short aagirundhadhu. Board dry panni silicone seal pannom, touch buttons ippo smooth-ah respond pannudhu.`
  },
  {
    id: "fridge_door_hinge_sagging",
    topic: "door hinge nylon washer worn door sagging",
    headingStyles: [
      (b, l) => `Heavy ${b} Refrigerator Door Dropped Down and Scraped the Bottom Trim`,
      (b, l) => `Worn Brass Hinge Bushings and Stainless Shims Replaced on ${b}`,
      (b, l) => `Why ${b} Lifting the Door Handle Was Necessary to Close the Fridge Shut`,
      (b, l) => `Effortless Magnetic Door Alignment and Smooth Swing Restored on ${b}`,
      (b, l) => `Sagging Lower Hinge Pin Adjusted and Realigned on ${b} in ${l}`,
      (b, l) => `${b} Fridge Door Stood Ajar Unless Slapped Firmly Against Frame`,
      (b, l) => `In ${l}, ${b} Heavy Door Hinge Dropped Off Axis by Five Millimeters`,
      (b, l) => `Center Hinge Pin Realignment and Anti-Friction Bushing Fitting on ${b}`
    ],
    en: (b, l) => `In ${l}, family members had to physically lift the bottom edge of their ${b} fridge door to get it to close and latch properly. The technician inspected the center hinge bracket and discovered the nylon thrust washer had disintegrated under the weight of water bottles, dropping the door 5mm. Replaced the worn bush with heavy-duty phosphor-bronze shims, aligned the latch plate, and the door swung shut effortlessly.`,
    ta: (b, l) => `${l}-la ${b} fridge door keezha irangi thara mela thattuchu, thooki thalluna thaan mooduchu. Hinge kulla irukra nylon washer udanju poiduchu. Heavy-duty bronze bushes pottu alignment correct pannom, door smooth-ah swing aagi close aagudhu.`
  },
  {
    id: "fridge_internal_led_strip_flicker",
    topic: "internal led light strip strobe flickering",
    headingStyles: [
      (b, l) => `Ceiling LED Light Strobe-Flickered Furiously Inside ${b} Fridge`,
      (b, l) => `Surface-Mount LED Light Module Replaced Inside ${b} Fresh Cabin`,
      (b, l) => `Why ${b} Looking for Food in the Dark Refrigerator Strained the Eyes`,
      (b, l) => `Bright Clean Daylight Illumination Restored to ${b} Food Shelves`,
      (b, l) => `Burnt SMD Light Bar Diodes Swapped on ${b} Ceiling in ${l}`,
      (b, l) => `${b} Refrigerator Interior Flickered Like a Haunted House on Opening`,
      (b, l) => `In ${l}, ${b} Interior Cabin Lighting Failed into Rapid Strobe`,
      (b, l) => `Interior Cabinet LED Module and Voltage Step-Down Circuit on ${b}`
    ],
    en: (b, l) => `Customer in ${l} reported that opening their ${b} fridge caused the overhead LED strip to pulse rapidly like a disco strobe, making it difficult to see inside. The technician removed the translucent light cover and tested the miniature driver PCB; a filter capacitor had dried out, sending AC ripple directly to the SMD diodes. Replaced the complete sealed LED module with a warm-white original replacement, restoring steady illumination.`,
    ta: (b, l) => `${l}-la ${b} fridge thirandhappo ulla irukra LED light flash maadhiri thudichite irundhadhu. LED driver board capacitor fail aagi flicker aachu. New original LED light bar maathunadhum crystal clear illumination vandhudhu.`
  },
  {
    id: "fridge_defrost_timer_stuck_cooling",
    topic: "mechanical defrost timer cam gear stuck",
    headingStyles: [
      (b, l) => `${b} Freezer Froze Up Solid Every Ten Days Because Timer Got Stuck`,
      (b, l) => `Electro-Mechanical 8-Hour Defrost Timer Swapped on ${b} Fridge`,
      (b, l) => `Why the ${b} Defrost Heater Never Switched On Despite Cold Coils`,
      (b, l) => `Flawless Automatic Defrost Cycling Restored to ${b} Refrigerator`,
      (b, l) => `Stalled Timer Motor Cam Gear Replaced on ${b} in ${l}`,
      (b, l) => `${b} Double-Door Refrigerator Remained Locked in Continuous Cooling`,
      (b, l) => `In ${l}, ${b} Defrost Timer Stalled in Cooling Phase Permanently`,
      (b, l) => `Mechanical Defrost Clock Timer and Heater Cam Switch Overhaul on ${b}`
    ],
    en: (b, l) => `In ${l}, customer had to manually switch off their ${b} fridge every two weeks to melt away choking ice blocks behind the freezer. The technician found the mechanical 8-hour defrost timer hidden near the compressor had stalled; its internal clockwork reduction gears were jammed with hardened grease, preventing the cam from advancing to defrost. Installed a brand-new electronic timer module, automating regular de-icing.`,
    ta: (b, l) => `${l}-la ${b} fridge-la defrost timer stall aagi heater on aagama ice katti block aayidum. Mechanical timer gear box stulla mudichu poiduchu. New electronic timer fix pannadhum auto defrost cycle perfect-ah work aagudhu.`
  },
  {
    id: "fridge_water_filter_clogged_dispenser",
    topic: "water filter choked drop by drop dispenser",
    headingStyles: [
      (b, l) => `${b} Door Water Dispenser Trickled at Frustratingly Slow Drop-by-Drop Speed`,
      (b, l) => `Choked Activated Carbon Water Filter Cartridge Swapped on ${b}`,
      (b, l) => `Why ${b} Filling a Single Glass of Water Took Over Two Full Minutes`,
      (b, l) => `Fast 1.5-Liter High-Flow Chilled Drinking Water Restored on ${b}`,
      (b, l) => `Fine Silt Sediment Blockage Cleared from Filter Head on ${b} in ${l}`,
      (b, l) => `${b} In-Door Water Dispenser Emitted a Groaning Water Valve Sound`,
      (b, l) => `In ${l}, ${b} French Door Fridge Water Stream Dropped to a Trickle`,
      (b, l) => `Internal Water Filtration Cartridge and Dispenser Valve Servicing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called because their ${b} French door refrigerator's drinking water dispenser barely produced a trickle. The technician checked input water pressure at 40 PSI, then inspected the twist-lock carbon block filter cartridge inside the fresh food cabin. Heavy red clay sediment from the municipal line had choked the micro-pores. Swapped the filter with an original high-flow block, restoring a rapid stream.`,
    ta: (b, l) => `${l}-la ${b} fridge water dispenser-la oru tumbler thanni pidika 2 minutes aachu, romba slow. Internal carbon filter-la dirt adaichi block aagirundhadhu. New filter cartridge maathunadhum fast water flow vandhudhu.`
  },
  {
    id: "fridge_foul_odor_air_duct_bacterial",
    topic: "foul odor bacterial growth hidden duct clean",
    headingStyles: [
      (b, l) => `Pungent Sour Smell Lingered Inside ${b} Fridge Despite Thorough Cleaning`,
      (b, l) => `Hidden Air Duct Cavity Disassembled and Chemically Sanitized on ${b}`,
      (b, l) => `Why ${b} Deodorizers and Lemons Failed to Clear the Stale Kitchen Odour`,
      (b, l) => `Clean Neutral Air and Pure Food Freshness Restored on ${b} Shelves`,
      (b, l) => `Spoiled Milk Residue Flushed from Behind Polystyrene Tower on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Cabin Smell Contaminated Open Food and Drinking Water`,
      (b, l) => `In ${l}, ${b} Air Circulation Ducts Trapped Stale Dairy Odours`,
      (b, l) => `Multi-Airflow Duct Sanitization and Carbon Deodorizer Fitting on ${b}`
    ],
    en: (b, l) => `In ${l}, a family was frustrated that their ${b} fridge smelled awful even after wiping every glass shelf three times. The technician dismantled the rear multi-airflow plastic tower and discovered that spilled milk from weeks prior had seeped behind the polystyrene insulation, rotting in the dark channel. Steam-washed the air tower, applied hospital-grade disinfectant spray, and fitted an activated carbon deodorizer.`,
    ta: (b, l) => `${l}-la ${b} fridge full-ah clean pannalum oru kedu kettadha smell vandhute irundhadhu. Multi-airflow duct pinnadi paal kotti azhugi poiduchu. Duct open panni steam wash panni disinfectant potadhum fresh smell vandhudhu.`
  },
  {
    id: "fridge_compressor_mounting_rubber_cracked",
    topic: "compressor mounting rubber cracked tub drone",
    headingStyles: [
      (b, l) => `Deep Thudding Vibration Shook the Floor Whenever ${b} Fridge Started`,
      (b, l) => `Hardened Neoprene Rubber Dampening Bushings Swapped on ${b}`,
      (b, l) => `Why the ${b} Refrigerator Rattled Utensils in Nearby Kitchen Cabinets`,
      (b, l) => `Smooth and Isolated Machine Floor Stability Restored on ${b} Fridge`,
      (b, l) => `Cracked Rubber Compressor Feet Replaced with New Dampers on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Started with an Aggressive Metal-on-Metal Jerk`,
      (b, l) => `In ${l}, ${b} Compressor Mounting Transmitted Severe Mechanical Drone`,
      (b, l) => `Compressor Base Grommet Isolation and Leveling Foot Alignment on ${b}`
    ],
    en: (b, l) => `Customer in ${l} complained that their kitchen floor vibrated noticeably whenever the ${b} fridge motor kicked in. The technician inspected the base chassis and found the four rubber compressor isolation grommets had hardened like stone and cracked, allowing direct metal-to-metal contact with the steel baseplate. Lifted the compressor, slid in fresh high-density rubber dampers, and all floor vibration vanished.`,
    ta: (b, l) => `${l}-la ${b} fridge compressor on aagumbodhu tharaiye aadura maadhiri thud-nu vibration ketuchu. Compressor keezha irukra 4 rubber bushes kal maadhiri hard aagi udanjirundhadhu. New soft rubber grommets pottadhum quiet-ah silent aachu.`
  },
  {
    id: "fridge_freezer_overcooling_frost_buildup",
    topic: "freezer overcooling snowy frost buildup",
    headingStyles: [
      (b, l) => `Snowy Frost Trapped Food in ${b} Freezer Frozen Food Packages Solid to Freezer Walls`,
      (b, l) => `Defective Defrost Temperature Sensor Calibrated and Replaced on ${b}`,
      (b, l) => `Why ${b} White Crystalline Snow Accumulated Overnight in Frost-Free Fridge`,
      (b, l) => `Dry and Ice-Free Storage Surfaces Restored Throughout ${b} Freezer`,
      (b, l) => `Faulty NTC Temperature Sensor Swapped on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Lost Frost-Free Capability and Looked Like an Ice Cave`,
      (b, l) => `In ${l}, ${b} Freezer Showed Heavy White Frost on Shelves and Roof`,
      (b, l) => `Frost-Free Cycle Sensor and Heater Relay Overhaul on ${b} Refrigerator`
    ],
    en: (b, l) => `In ${l}, customer had to use a knife to pry frozen peas bags off the freezer shelf because crystalline snow had covered everything inside a supposed frost-free ${b} fridge. The technician found the defrost cycle was firing for only four minutes instead of twenty because the evaporator thermistor was giving an artificially high temperature reading. Replaced the sensor, verified full 20-minute defrost completion, and frost disappeared.`,
    ta: (b, l) => `${l}-la frost-free ${b} fridge kulla snowy ice full-ah katti packets eduka mudiyala. Evaporator thermistor sensor thappa read panni defrost heater-ah sikkarama off panniruchu. New sensor pottu defrost verify pannom, ice clean-ah poiduchu.`
  }
];
