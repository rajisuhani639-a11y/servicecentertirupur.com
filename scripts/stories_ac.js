// scripts/stories_ac.js
// 24 unique AC problem stories with 8 diverse grammatical heading styles each,
// matching simple Indian English and Tanglish descriptions, and ZERO corporate buzzwords.

module.exports = [
  {
    id: "ac_compressor_tripping_capacitor",
    topic: "outdoor capacitor weak compressor humming",
    headingStyles: [
      (b, l) => `${b} Outdoor Compressor Tripped the Circuit Breaker Within Seconds`,
      (b, l) => `Dual Run Capacitor Swapped on a ${b} Inverter Split AC`,
      (b, l) => `Why the ${b} Compressor Hummed but Failed to Start Chilling`,
      (b, l) => `Chilled 16°C Airflow Restored After Capacitor Replacement on ${b} AC`,
      (b, l) => `Swollen 50uF Motor Run Capacitor Replaced on ${b} Unit in ${l}`,
      (b, l) => `Indoor Blower Ran Normally but ${b} Outdoor Unit Stood Silent`,
      (b, l) => `In ${l}, ${b} Air Conditioner Lost All Cooling on a Sweltering Noon`,
      (b, l) => `Motor Starter Capacitor and Relay Overhaul on ${b} Split AC`
    ],
    en: (b, l) => `In ${l}, an afternoon heat spike caused a ${b} split AC outdoor unit to buzz loudly and shut down after three minutes. Our technician tested the dual run capacitor with a digital capacitance meter; the 50uF rating had fallen to barely 12uF due to summer voltage drops. Installed an original heavy-duty metal capacitor, tested compressor starting current, and chilled air blew within minutes.`,
    ta: (b, l) => `${l}-la ${b} AC indoor fan odudhu aana outdoor compressor start aagama click nu off aachu. Capacitor check pannapo 50uF iruka vendiyadhu 12uF thaan irundhadhu. New heavy-duty capacitor maathunadhum compressor smooth-ah start aagi nalla chill air vandhudhu.`
  },
  {
    id: "ac_indoor_water_leakage_drain",
    topic: "indoor water dripping drain sludge",
    headingStyles: [
      (b, l) => `Water Dripping Down Bedroom Wall from ${b} AC Indoor Unit`,
      (b, l) => `Algae Jelly Slime Cleared from ${b} AC Condensate Trough`,
      (b, l) => `Why ${b} Condensate Water Poured Across the Living Room Floor`,
      (b, l) => `Dry Bedroom Walls and Spotless Cooling Restored on ${b} AC`,
      (b, l) => `Blocked PVC Drain Pipe Flushed and Desilted on ${b} in ${l}`,
      (b, l) => `${b} Indoor Unit Started Overflowing During Humid Monsoon Nights`,
      (b, l) => `In ${l}, ${b} Split AC Began Leaking Water Over Curtains and Bed`,
      (b, l) => `Condensate Drain Tray Flush and Hose Alignment on ${b} Split AC`
    ],
    en: (b, l) => `Customer in ${l} woke up to water trickling down the bedroom wall from their ${b} inverter AC. The technician took down the front casing and found thick jelly-like algae sludge blocking the narrow drain trough outlet. Flushed the drain channel with high-pressure nitrogen gas, cleared the external discharge hose, and adjusted the wall bracket slope to prevent standing water.`,
    ta: (b, l) => `${l}-la ${b} AC indoor unit-la irundhu suvathula thanni vadinjite irundhadhu. Drain tray-la algae paasi adaichi irundhadhu. Pressure pottu pipe-ah flush panni tray clean pannom. Ippo water leak aagama balcony drain-la neat-ah pogudhu.`
  },
  {
    id: "ac_copper_flare_nut_gas_leak",
    topic: "flare nut gas leak low cooling",
    headingStyles: [
      (b, l) => `Thin Layer of Ice Formed Along ${b} AC Copper Suction Line`,
      (b, l) => `Re-flared Brass Nut and Brazed Joint on ${b} Split AC Pipes`,
      (b, l) => `Why the ${b} AC Blew Normal Room Air Despite Compressor Running`,
      (b, l) => `Crisp Room Chilling Restored After Precise Refrigerant Top-Up on ${b}`,
      (b, l) => `Hairline Copper Pipe Flare Crack Repaired on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Lost Cooling Power Gradually Over Two Weeks`,
      (b, l) => `In ${l}, ${b} AC Suction Valve Showed Heavy Frost Crystals`,
      (b, l) => `Refrigerant Leak Detection and Deep Vacuum Recharging on ${b} AC`
    ],
    en: (b, l) => `In ${l}, a 1.5 ton ${b} AC blew lukewarm air while thin white frost coated the thin copper service valve outside. The technician pumped in 250 PSI dry nitrogen and spotted micro-bubbles at the outdoor flare connection using soap foam. Cut back the damaged flare, made a fresh brass flare with an eccentric tool, evacuated the system to 450 microns, and charged exact factory R32 refrigerant.`,
    ta: (b, l) => `${l}-la ${b} AC-la cooling koraiva aagi outdoor pipe-la ice katti irundhadhu. Nitrogen test pannapo flare nut kitta gas leak therinjadhu. New flare panni vacuum pottu R32 gas correct pressure-la fill pannom. Room nalla chill aachu.`
  },
  {
    id: "ac_blower_fan_motor_bearing",
    topic: "blower fan motor screeching noise",
    headingStyles: [
      (b, l) => `Harsh Squealing Noise Came from ${b} AC Indoor Air Blower`,
      (b, l) => `Sealed Bearings Replaced on ${b} Indoor Cross-Flow Fan Motor`,
      (b, l) => `Why the ${b} Blower Fan Rattled Like Dry Leaves on High Speed`,
      (b, l) => `Whisper-Quiet Air Circulation Restored on ${b} Split AC`,
      (b, l) => `Worn Motor Bushings and Rubber Cushion Dampers Swapped on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Emitted an Irritating High-Pitched Whine`,
      (b, l) => `In ${l}, ${b} Indoor Unit Air Blower Began Screeching at Midnight`,
      (b, l) => `Cross-Flow Blower Roller Wheel and Motor Bearing Servicing on ${b}`
    ],
    en: (b, l) => `A resident in ${l} complained that turning their ${b} AC fan above low speed produced a loud metallic screech that kept them awake. The technician disassembled the indoor air assembly and found the non-drive bronze sleeve bearing had dried out and accumulated fiber dust. Replaced both precision bearings, lubricated the rubber end mount with silicone oil, and the blower ran in near silence.`,
    ta: (b, l) => `${l}-la ${b} AC indoor blower-la screeching saththam vandhu thungave mudiyala. Blower fan motor bearing dry aagi sound pottuchu. Bearing maathi rubber bushes lubricate pannadhum super silent-ah run aagudhu.`
  },
  {
    id: "ac_evaporator_coil_ice_formation",
    topic: "evaporator coil icing choked filters",
    headingStyles: [
      (b, l) => `Solid Sheet of Ice Covered ${b} AC Indoor Cooling Coils`,
      (b, l) => `Thick Dust Felt Chemically Washed from ${b} Air Filters`,
      (b, l) => `Why ${b} Airflow Dropped to a Faint Breeze Before Ice Began Cracking`,
      (b, l) => `Strong Velocity Cold Airflow Restored to ${b} Split System`,
      (b, l) => `Choked Evaporator Fins Steam Cleaned on ${b} at ${l}`,
      (b, l) => `${b} Split AC Started Spitting Ice Particles Out of the Vent`,
      (b, l) => `In ${l}, ${b} Air Conditioner Coils Froze Solid Within Two Hours`,
      (b, l) => `Airflow Obstruction Removal and Coil De-Icing on ${b} AC`
    ],
    en: (b, l) => `In ${l}, customer noticed their ${b} AC indoor unit was spitting tiny ice droplets and barely blowing any air. Opening the front cover showed solid white ice blanketing the entire aluminum coil because air mesh filters were completely choked with fine cotton mill dust. Technician defrosted the coil with warm water spray, chemical-washed the mesh filters, and airflow velocity quadrupled.`,
    ta: (b, l) => `${l}-la ${b} AC coil mela full-ah ice katti kaathu varala. Filter-la mill dust heavy-ah adaichi air block aagirundhadhu. Filter wash panni coil de-ice pannom. Heavy cold breeze thirumbi vandhadhu.`
  },
  {
    id: "ac_pcb_communication_error",
    topic: "communication error cable fault",
    headingStyles: [
      (b, l) => `Digital Panel Flashed Error Code E6 and Stopped Cooling on ${b}`,
      (b, l) => `Optocoupler Chip Replaced on ${b} Outdoor Inverter Controller`,
      (b, l) => `Why ${b} Indoor and Outdoor Units Failed to Talk to Each Other`,
      (b, l) => `Reliable Inverter Compressor Communication Restored on ${b} AC`,
      (b, l) => `Corroded Communication Signal Wires Spliced on ${b} in ${l}`,
      (b, l) => `${b} Inverter AC Shut Down Five Minutes After Power-On with Beeps`,
      (b, l) => `In ${l}, ${b} AC Showed Persistent Signal Fault Error Code`,
      (b, l) => `Inverter Communication Bus and Opto-Isolator Repair on ${b} AC`
    ],
    en: (b, l) => `Customer in ${l} called when their ${b} inverter split AC showed communication error E6 shortly after turning on. Technician examined the 4-core copper interconnect cable between indoor and outdoor units and discovered the communication signal wire was chewed through by rodents behind the outdoor bracket. Spliced the wire, sealed it in protective flexible conduit, and the inverter PCB handshake succeeded.`,
    ta: (b, l) => `${l}-la ${b} inverter AC-la E6 communication error vandhu compressor on aagala. Indoor to outdoor interconnect wire-ah eli kadiச்சு irundhadhu. Wire re-join panni conduit pottadhum error clear aagi cooling start aachu.`
  },
  {
    id: "ac_remote_ir_sensor_not_responding",
    topic: "ir sensor display receiver moisture",
    headingStyles: [
      (b, l) => `${b} AC Display Refused to Respond to Any Remote Commands`,
      (b, l) => `Oxidised Infrared Receiver Eye Replaced on ${b} Indoor Display`,
      (b, l) => `Why the ${b} Temperature Could Not Be Changed from 24°C on AC`,
      (b, l) => `Immediate Remote Control Sensitivity Restored on ${b} Split Unit`,
      (b, l) => `Moisture-Damaged Display Board Resoldered on ${b} at ${l}`,
      (b, l) => `${b} - Customer Had to Climb a Stool to Press the Manual Power Button`,
      (b, l) => `In ${l}, ${b} AC Front Sensor Stopped Picking Up Remote Signals`,
      (b, l) => `Indoor Display Sub-PCB and Infrared Receiver Servicing on ${b}`
    ],
    en: (b, l) => `In ${l}, homeowner was forced to use a ladder to press the manual emergency button because their ${b} AC remote wouldn't change modes or temperature. Technician verified the remote was working, pulled the tiny indoor display sub-board, and found green moisture corrosion across the IR photodiode leads. Soldered a replacement IR receiver and applied conformal silicone lacquer, restoring instant remote response.`,
    ta: (b, l) => `${l}-la ${b} AC remote work aagala, manual button thaan press panna vendiyatha irundhadhu. Display board-la moisture pattu IR sensor oxidize aagirundhadhu. New sensor eye maathunadhum remote nalla work aachu.`
  },
  {
    id: "ac_foul_musty_odor",
    topic: "musty odor mold bacterial wash",
    headingStyles: [
      (b, l) => `Sour Stale Odour Blew from ${b} AC Whenever Fan Started Up`,
      (b, l) => `Antimicrobial Deep Foaming Wash Completed on ${b} Indoor Coils`,
      (b, l) => `Why the ${b} Bedroom Smelled Damp and Stuffy When AC Ran`,
      (b, l) => `Fresh Crisp Mountain-Air Cleanliness Restored on ${b} AC Unit`,
      (b, l) => `Black Mold Slime Cleaned Behind Blower Barrel on ${b} in ${l}`,
      (b, l) => `${b} Split Air Conditioner Emitted an Unpleasant Stagnant Smell`,
      (b, l) => `In ${l}, ${b} AC Started Blowing Musty Damp Air into Child Bedroom`,
      (b, l) => `Evaporator Coil Sanitization and Blower Degreasing on ${b} AC`
    ],
    en: (b, l) => `A resident in ${l} noticed an unbearable vinegar-like smell every time their ${b} AC kicked in. The technician discovered black bacterial mold growing along the back curve of the indoor drain pan and deep within the blower barrel. Applied an eco-friendly foaming coil cleaner, washed the unit with a pressure jet washer under a service jacket, and the air blew completely fresh and odour-free.`,
    ta: (b, l) => `${l}-la ${b} AC pottapo oru maadhiri pulicha smells vandhuchu. Drain tray and blower pinnadi black fungus mold irundhadhu. Anti-microbial foam wash panni service cover pottu clean pannom. Ippo fresh air mattum varudhu.`
  },
  {
    id: "ac_outdoor_fan_blade_rattle",
    topic: "outdoor fan blade vibration rattle",
    headingStyles: [
      (b, l) => `Violent Clattering Vibration Shook the ${b} Outdoor Bracket`,
      (b, l) => `Cracked Condenser Fan Blade Swapped on ${b} Outdoor Unit`,
      (b, l) => `Why the ${b} Balcony Rattled Loudly Whenever the Compressor Ran`,
      (b, l) => `Silent and Smooth Outdoor Heat Dissipation Restored on ${b}`,
      (b, l) => `Wobbly Fan Motor Hub Tightened on ${b} AC in ${l}`,
      (b, l) => `${b} Outdoor Unit Sounded Like a Construction Drill Next Door`,
      (b, l) => `In ${l}, ${b} Condenser Fan Started Banging Against Metal Grill`,
      (b, l) => `Outdoor Condenser Fan Blade and Motor Alignment on ${b} AC`
    ],
    en: (b, l) => `Customer in ${l} received complaints from neighbors because their ${b} outdoor unit rattled like a lawnmower on the balcony. The technician inspected the condenser cavity and found one blade of the 3-wing plastic propeller had chipped off, unbalancing the rotor. Installed a factory-balanced aerodynamic fan blade and tightened mounting rubber isolation grommets, restoring quiet operation.`,
    ta: (b, l) => `${l}-la ${b} outdoor unit bayangarama aadi grill mela thatti saththam pottadhu. Fan blade oru side udanju balance miss aagirundhadhu. New aerodynamic fan blade pottu rubber pads tighten pannadhum vibration full-ah ninuduchu.`
  },
  {
    id: "ac_e1_room_thermistor_error",
    topic: "room thermistor sensor drifted error",
    headingStyles: [
      (b, l) => `${b} AC Kept Shutting Off After 5 Minutes After 5 Minutes Because It Thought Room Was Cold`,
      (b, l) => `Precision 10k NTC Temperature Thermistor Swapped on ${b} AC`,
      (b, l) => `Why the ${b} Digital Display Read 18°C While Room Was 32°C Hot`,
      (b, l) => `Accurate Climate Control and Steady Cooling Restored on ${b}`,
      (b, l) => `Drifted Sensor Probe Replaced on ${b} Indoor Unit in ${l}`,
      (b, l) => `${b} Split AC Short-Cycled Continuously Without Lowering Room Temp`,
      (b, l) => `In ${l}, ${b} Inverter AC Tripped Prematurely with Error E1`,
      (b, l) => `Room and Tube Temperature Sensor Calibration on ${b} AC`
    ],
    en: (b, l) => `In ${l}, a ${b} AC ran its compressor for barely two minutes, then switched to fan mode even though the bedroom was hot. The technician tested the copper tube thermistor with an ohmmeter and found its resistance had drifted from 10k ohms down to 2k ohms, deceiving the micro-controller into reading near-freezing conditions. Installed a genuine high-accuracy sensor probe, returning cooling cycles to normal.`,
    ta: (b, l) => `${l}-la ${b} AC 2 mins cooling panni off aayidudhu, room innum super heat-ah irundhadhu. Sensor resistance miss aagi thappa reading kaatuchu. New 10k NTC sensor maathunom, cycle ippo perfect-ah cut aagudhu.`
  },
  {
    id: "ac_compressor_overheating_thermal_cut",
    topic: "compressor thermal overload cut direct sun",
    headingStyles: [
      (b, l) => `${b} Compressor Stalled Every Afternoon Under Blazing 40°C Sun`,
      (b, l) => `Reflective Sunshade Canopy Installed Over ${b} Outdoor Unit`,
      (b, l) => `Why the ${b} AC Cooled Fine at Night but Failed Completely at 2 PM`,
      (b, l) => `Non-Stop Heavy Afternoon Cooling Restored on ${b} Inverter Unit`,
      (b, l) => `Tripped Bimetallic Thermal Overload Protector Reset on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Stood Powerless During Hottest Hours of Day`,
      (b, l) => `In ${l}, ${b} Compressor Tripped on High Discharge Temperature`,
      (b, l) => `High-Ambient Thermal Protection and Fin Cleansing on ${b} AC`
    ],
    en: (b, l) => `Customer in ${l} was baffled that their ${b} AC chilled beautifully at 9 PM, but tripped out at 2 PM every single day. The outdoor unit was mounted on an open west-facing terrace slab taking direct sunlight, and heat transfer was choked by dust. Technician pressure-washed the condenser coils, fitted a UV-resistant sun canopy above the outdoor shell, and the compressor ran steadily through peak afternoon heat.`,
    ta: (b, l) => `${l}-la ${b} AC night nalla cool aagum aana madhyanam 2 manikku compressor overheat aagi cut aayidum. Terrace-la direct veyil adikra edathula irundhadhu. Condenser coil wash panni sunshade set pannadhum continuous cooling kedaikudhu.`
  },
  {
    id: "ac_expansion_valve_choking",
    topic: "capillary tube expansion choking",
    headingStyles: [
      (b, l) => `Hissing Sound Inside Indoor Coil Accompanied Zero Cooling on ${b}`,
      (b, l) => `Choked Copper Capillary Tube and Filter Drier Replaced on ${b}`,
      (b, l) => `Why ${b} Refrigerant Refused to Flow Through the Cooling Circuit`,
      (b, l) => `${b} - Smooth Refrigerant Evaporation and Ice-Cold Discharge Restored`,
      (b, l) => `Partial Expansion Valve Moisture Block Cleared on ${b} in ${l}`,
      (b, l) => `${b} Split System Developed Uneven Coil Frosting and Low Pressure`,
      (b, l) => `In ${l}, ${b} Refrigerant Line Experienced Internal Capillary Choke`,
      (b, l) => `Expansion Metering Tube and Liquid Line Drier Servicing on ${b}`
    ],
    en: (b, l) => `In ${l}, a ${b} AC had adequate gas pressure in the outdoor receiver, but the indoor coil remained dead warm while emitting an uneven bubbling hiss. The technician diagnosed a wax-moisture blockage inside the tiny 0.05-inch copper capillary expansion tube. Cut out the clogged capillary, braze-welded a new calibrated metering tube with a solid copper liquid strainer, and cooling was instant.`,
    ta: (b, l) => `${l}-la ${b} AC-la gas full-ah irundhum coil chill aagama bubbling sound mattum ketuchu. Capillary tube kulla dirt block aagirundhadhu. New capillary tube and filter drier maathi nitrogen flush panna udane cooling start aachu.`
  },
  {
    id: "ac_swing_louver_motor_stripped",
    topic: "swing flap stuck gear stripped",
    headingStyles: [
      (b, l) => `Air Deflector Flap Stuck Pointing at Ceiling on ${b} Split AC`,
      (b, l) => `Stripped Stepper Louver Motor Swapped on ${b} Indoor Unit`,
      (b, l) => `Why the ${b} Air Vane Made a Clicking Sound but Refused to Swing`,
      (b, l) => `Wide-Angle 120-Degree Room Air Throw Restored on ${b} Air Conditioner`,
      (b, l) => `Broken Flap Linkage Arm Replaced on ${b} in ${l}`,
      (b, l) => `${b} Split AC Air Flap Dropped Limp and Blew Air Only on the Floor`,
      (b, l) => `In ${l}, ${b} Indoor Swing Mechanism Clicked Continuously on Startup`,
      (b, l) => `Motorized Air Swing Stepper and Linkage Arm Overhaul on ${b}`
    ],
    en: (b, l) => `Customer in ${l} noticed their ${b} indoor unit horizontal flap remained locked facing the ceiling, forcing cold air away from the bed. The technician unlatched the flap connector and saw the plastic reduction gear teeth inside the 12V DC stepper motor were stripped from someone manually forcing the flap. Installed an original stepper swing motor, recalibrated home position, and smooth vertical oscillation returned.`,
    ta: (b, l) => `${l}-la ${b} AC air swing flap mela paathu stuck aayiduchu, keezha kaathu varala. Flap-ah kaiyala thallunadhala motor gear poiduchu. New 12V swing motor fix pannadhum flap smooth-ah swing aagudhu.`
  },
  {
    id: "ac_mild_electric_shock_grounding",
    topic: "mild static electric shock cabinet grounding",
    headingStyles: [
      (b, l) => `Mild Electric Tingle Felt When Touching Metal Frame of ${b} AC`,
      (b, l) => `Earthing Continuity Wire Re-clamped to ${b} Outdoor Metal Chassis`,
      (b, l) => `Why ${b} 65V Floating Voltage Leaked onto the Balcony AC Casing`,
      (b, l) => `Safe and Shock-Free Electrical Grounding Restored on ${b} System`,
      (b, l) => `Disconnected Copper Earth Lead Re-bonded on ${b} at ${l}`,
      (b, l) => `Cleaning Terrace Wall Caused Shock Sensation Near ${b} Outdoor Unit`,
      (b, l) => `In ${l}, ${b} AC Cabinet Developed Stray Electric Voltage Leakage`,
      (b, l) => `Chassis Electrical Grounding and RCD Protection Inspection on ${b}`
    ],
    en: (b, l) => `In ${l}, a homeowner got a mild shock while watering terrace plants near their ${b} AC outdoor unit. The technician tested the cabinet with a multimeter and measured 65V AC floating potential to earth. The ground wire on the 3-pin plug had worked loose, and compressor inverter filter capacitors were leaking inductive current to the metal skin. Securely bonded a fresh heavy-gauge copper earth line, dropping leakage voltage to zero.`,
    ta: (b, l) => `${l}-la terrace-la ${b} outdoor unit thottapo mild shock adichadhu. Earth wire disconnect aagi body-la current leak aachu. New copper earthing wire pottu properly ground pannom. Ippo safe-ah irukku, 0V voltage.`
  },
  {
    id: "ac_voltage_drop_tripping_stabilizer",
    topic: "voltage stabilizer relay chatter trip",
    headingStyles: [
      (b, l) => `Voltage Stabilizer Relays Clicked Furiously Before Tripping ${b} AC`,
      (b, l) => `${b} - Burnt Silver Contact Relay Swapped Inside 4KVA Stabilizer Unit`,
      (b, l) => `Why the ${b} Stabilizer Output Dropped to Zero Under Evening Village Load`,
      (b, l) => `Steady 230V Regulated AC Power Delivered to ${b} Inverter Board`,
      (b, l) => `Pitted High-Current Relay Replaced on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Refused to Start During Evening Voltage Drops`,
      (b, l) => `In ${l}, ${b} AC Stood Trapped in Stabilizer Time-Delay Loop`,
      (b, l) => `${b} - Voltage Stabilizer Relay Bench Testing and Voltage Calibration`
    ],
    en: (b, l) => `Customer in ${l} reported that around 7 PM, their AC stabilizer rattled like machine gunfire and cut off power to the ${b} AC. The technician found village line voltage dropping to 165V, and the stabilizer's secondary boost relay contacts were badly pitted and arcing. Replaced the relay with a heavy-duty silver-alloy contact switch and verified smooth voltage boost up to 220V during peak evening dips.`,
    ta: (b, l) => `${l}-la evening 7 manikku stabilizer tak-tak nu saththam pottu ${b} AC off aagidum. Voltage 165V-ku drop aagudhu, stabilizer relay carbon aagirundhadhu. Relay maathi output calibrate pannadhum low voltage-layum super-ah run aagudhu.`
  },
  {
    id: "ac_outdoor_bracket_rust_vibration",
    topic: "rusted outdoor bracket vibration drone",
    headingStyles: [
      (b, l) => `Low-Frequency Drone Resonated Through Bedroom Wall from ${b} AC`,
      (b, l) => `Heavy-Duty Galvanized MS Wall Brackets Installed on ${b} Outdoor`,
      (b, l) => `Why the ${b} Bedroom Felt Like an Engine Room Whenever AC Fired Up`,
      (b, l) => `Vibration-Free Silence Restored to Bedroom Wall Supporting ${b} AC`,
      (b, l) => `Rusted Anchor Fasteners Swapped for Stainless Bolts on ${b} in ${l}`,
      (b, l) => `${b} Outdoor Unit Sagged on One Side Due to Corroded Metal Angle`,
      (b, l) => `In ${l}, ${b} AC Wall Mounting Developed Severe Vibration Drone`,
      (b, l) => `Structural Outdoor Bracket Mounting and Damper Installation on ${b}`
    ],
    en: (b, l) => `A resident in ${l} complained that sleeping was impossible because a deep vibration droned through their headboard wall whenever the ${b} AC compressor ran. Inspection revealed the outdoor MS angle brackets were rusted paper-thin by terrace rain, and one anchor bolt was wobbling. Replaced with heavy powder-coated brackets, high-tensile anchor bolts, and 20mm rubber vibration pads, silencing the room.`,
    ta: (b, l) => `${l}-la ${b} AC odumbodhu bedroom wall full-ah vibration drone saththam ketuchu. Outdoor bracket thuru pudichi aadi irundhadhu. New heavy powder-coated bracket and rubber isolation pads pottu wall vibration full-ah stop pannom.`
  },
  {
    id: "ac_chilled_air_loss_duct",
    topic: "insulation foam tear copper sweating",
    headingStyles: [
      (b, l) => `Water Dripped from False Ceiling Along ${b} AC Copper Pipe Line`,
      (b, l) => `Closed-Cell Nitrile Rubber Insulation Sleeving Fitted on ${b}`,
      (b, l) => `Why ${b} Cold Pipes Sweated and Soaked Plasterboard Ceilings in Hall`,
      (b, l) => `Drip-Free High-Efficiency Thermal Protection Restored on ${b} AC`,
      (b, l) => `Sun-Degraded Foam Insulation Stripped and Replaced on ${b} in ${l}`,
      (b, l) => `${b} Split AC Piping Showed Severe Condensation Wet Patches`,
      (b, l) => `In ${l}, ${b} Refrigerant Pipes Were Dripping Water Across Hallway`,
      (b, l) => `Suction Pipe Thermal Insulation and Vapor Barrier Re-wrapping on ${b}`
    ],
    en: (b, l) => `In ${l}, water stains formed along the false ceiling below the copper piping run of a ${b} split AC. The technician found the original white foam insulation had degraded from heat and crows pecking at it, exposing cold bare copper directly to humid room air, causing heavy sweating. Slipped on thick 13mm nitrile closed-cell rubber tubing and wrapped it tight with non-adhesive vinyl tape.`,
    ta: (b, l) => `${l}-la ${b} AC copper pipe mela insulation pichi poyi thanni drip aagi ceiling nananjiduchu. Bare copper pipe open-ah irundhadhu. New 13mm nitrile rubber sleeve pottu UV vinyl tape suthunom. Condensation leak total-ah ninuduchu.`
  },
  {
    id: "ac_service_valve_oil_residue",
    topic: "service valve schrader pin slow leak",
    headingStyles: [
      (b, l) => `Dark Oil Residue Coated the Outdoor Brass Valves on ${b} AC`,
      (b, l) => `Schrader Valve Core Pin Replaced Under Pressure on ${b} Outdoor`,
      (b, l) => `Why ${b} Refrigerant Pressure Dropped Slowly Over Eight Months on AC`,
      (b, l) => `Hermetic Pressure Retention Restored to ${b} Split Service Port`,
      (b, l) => `Leaking Brass Sealing Cap Washer Swapped on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Required Frequent Gas Top-Ups Every Season`,
      (b, l) => `In ${l}, ${b} Service Charging Port Showed Persistent Slow Leak`,
      (b, l) => `Schrader Valve Core Replacement and Brass Flare Sealing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} was annoyed that their ${b} AC needed a gas refill every single summer. The technician inspected the outdoor service valve with an ultraviolet leak detector and found green compressor oil oozing from the charging pin. The internal rubber O-ring on the Schrader pin had hardened. Used a core-removal tool to replace the pin without losing system gas, tightened a brass cap with Teflon, stopping the leak permanently.`,
    ta: (b, l) => `${l}-la ${b} AC-ku varusham varusham gas fill panna vendiyatha irundhadhu. Service valve charging pin kitta oil leak aagirundhadhu. Core tool vachi pin maathi brass cap tight pannom. Gas leak problem permanently solved.`
  },
  {
    id: "ac_display_panel_blank_led",
    topic: "display panel ribbon cable detached",
    headingStyles: [
      (b, l) => `Front LED Temperature Digits Vanished on ${b} AC Indoor Casing`,
      (b, l) => `Corroded Display Ribbon Cable Reseated and Cleaned on ${b}`,
      (b, l) => `Why the ${b} Indoor Unit Cooled Fine but Looked Completely Dead`,
      (b, l) => `Bright Temperature Readout Restored to ${b} AC Front Cover`,
      (b, l) => `Loose Flat Flex Display Connector Re-clamped on ${b} at ${l}`,
      (b, l) => `${b} Split AC Stopped Showing Temperature or Mode Indicators`,
      (b, l) => `In ${l}, ${b} AC Digital Display Panel Went Totally Black`,
      (b, l) => `Seven-Segment LED Display Module Servicing on ${b} Split AC`
    ],
    en: (b, l) => `In ${l}, a homeowner was confused because their ${b} AC cooled fine, but the white 7-segment temperature display on the indoor faceplate stayed completely dark. The technician lowered the plastic grille and found the flexible flat cable connecting the main PCB to the display board had unseated due to blower vibration. Cleaned gold pin contacts, re-latched the zero-insertion force connector, and numerals lit up crisp and clear.`,
    ta: (b, l) => `${l}-la ${b} AC nalla cool aagudhu aana munnadi temp degree number theriyala, display full black. Ribbon cable loose aagi unseat aagirundhadhu. Clean panni lock pannadhum 24°C number bright-ah theriya start aachu.`
  },
  {
    id: "ac_compressor_loud_grinding_noise",
    topic: "compressor internal scroll valve grinding",
    headingStyles: [
      (b, l) => `Loud Metallic Grinding Echoed from ${b} AC Outdoor Compressor`,
      (b, l) => `Synthetic POE Refrigerant Oil Flushed and Restored in ${b}`,
      (b, l) => `Why the ${b} Rotary Compressor Sounded Like a Marble Grinder`,
      (b, l) => `Smooth and Muffled Motor Hum Restored to ${b} Outdoor Chassis`,
      (b, l) => `Sludge-Contaminated Compressor Crankcase Cleaned on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Developed Harsh Internal Mechanical Noise`,
      (b, l) => `In ${l}, ${b} Outdoor Rotary Compressor Suffered Severe Oil Loss`,
      (b, l) => `Compressor Lubricant Reconditioning and Refrigerant Cycle Flush on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called when their ${b} AC outdoor unit began making a harsh metallic grinding sound on starting. The technician discovered that an amateur gas top-up months earlier had vented compressor oil without replenishing it, starving the rotary scroll of lubrication. Flushed the copper line with liquid R141b, added 200ml of fresh polyolester synthetic oil, and the compressor purred smoothly with normal amp draw.`,
    ta: (b, l) => `${l}-la ${b} AC outdoor compressor grinding machine maadhiri saththam pottadhu. Compressor oil poyi dry aagirundhadhu. Line flush panni fresh synthetic POE oil charge pannom. Sound ninuttu smooth motor sound vandhudhu.`
  },
  {
    id: "ac_continuous_running_no_cut_off",
    topic: "relay stuck continuous running no cutoff",
    headingStyles: [
      (b, l) => `Room Froze into an Icebox Because ${b} AC Refused to Stop Cooling`,
      (b, l) => `Welded Relay Contacts Freed on ${b} Main Power Controller Board`,
      (b, l) => `Why the ${b} Compressor Ran Non-Stop Even When Set to 28°C on Remote`,
      (b, l) => `Precise Thermostat Cycling and Power Savings Restored on ${b} AC`,
      (b, l) => `Shorted Compressor Power Relay Replaced on Board on ${b} at ${l}`,
      (b, l) => `${b} Split AC Never Cut Off and Caused Huge Electricity Bills`,
      (b, l) => `In ${l}, ${b} Air Conditioner Refused to Disengage Cooling Mode`,
      (b, l) => `Main Controller Power Relay and Temperature Auto Cut-Off Overhaul on ${b}`
    ],
    en: (b, l) => `${b} - In ${l}, a family woke up freezing with bedroom temperatures dropping below 17°C despite the remote set to a comfortable 25°C. The technician found the outdoor compressor kept running even when the indoor unit was switched off via remote. The 30A power relay on the indoor PCB had its copper contacts welded together by high inrush current. Desoldered the bad relay and fitted a sealed heavy-duty contactor.`,
    ta: (b, l) => `${l}-la ${b} AC remote-la off pannalum outdoor compressor nonstop-ah oditte irundhadhu, room chilling-ah maari shivering aachu. PCB-la relay contacts otti short aagirundhadhu. New 30A heavy relay maathunom, ippo correct temperature-la auto-cut aagudhu.`
  },
  {
    id: "ac_dust_coated_condenser_fins",
    topic: "condenser fins dust caked high amp trip",
    headingStyles: [
      (b, l) => `${b} Outdoor Unit Blew Boiling Hot Air and Tripped on High Amps`,
      (b, l) => `Caked Dust Blanket Chemically Flushed Off ${b} Condenser Fins`,
      (b, l) => `Why the ${b} Outdoor Heat Exchanger Refused to Shed Room Heat`,
      (b, l) => `Rapid Heat Dissipation and Efficient Chilling Restored on ${b}`,
      (b, l) => `Clogged Aluminum Heat Exchanger Fins Straightened on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Current Draw Shot Past 12 Amperes in Summer`,
      (b, l) => `In ${l}, ${b} Outdoor Heat Sink Was Suffocated Under Fine Clay Dust`,
      (b, l) => `High-Pressure Condenser Coil Wash and Fin Combing on ${b} AC`
    ],
    en: (b, l) => `Customer in ${l} complained that their ${b} AC tripped the main MCB every afternoon after twenty minutes of running. The technician found the outdoor condenser coil facing a dusty main road covered in a thick blanket of road dust and pollen, suffocating heat transfer and sending compressor head pressure soaring to 420 PSI. Pressure-washed the coils with aluminum brightening agent, dropping operating amps from 12A back to a safe 6.5A.`,
    ta: (b, l) => `${l}-la main road pakkam irukra ${b} AC outdoor coil-la dharisana dust adaichi heat discharge aagala, MCB trip aachu. Jet wash panni aluminum fins clean pannom. Head pressure normal aagi power consumption paadhiya koranjadhu.`
  },
  {
    id: "ac_drain_pipe_backflow_rain",
    topic: "drain pipe inverted slope backflow",
    headingStyles: [
      (b, l) => `Rainwater and Wind Pushed Drain Water Back into ${b} Indoor Unit`,
      (b, l) => `Anti-Siphon Trap and Downward Slope Re-aligned on ${b} Drain Pipe`,
      (b, l) => `Why ${b} Water Spilled into the Room Only on Windy Monsoon Days`,
      (b, l) => `Flawless Gravity Condensate Drainage Restored to ${b} Split Unit`,
      (b, l) => `Inverted Drain Hose Angle Corrected on Balcony on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Overflowed Directly Over Home Theatre System`,
      (b, l) => `In ${l}, ${b} Drain Discharge Experienced Wind-Driven Backflow`,
      (b, l) => `Condensate Drain Slope Correction and Siphon Trap Fitting on ${b}`
    ],
    en: (b, l) => `In ${l}, during heavy rainy winds, water began pouring backwards out of a ${b} indoor unit onto an entertainment console. The technician inspected the exterior discharge line and discovered the flexible drain pipe had sagged on the balcony floor, creating an inverted U-bend where wind pressure forced standing condensate back into the room. Clamped the pipe at a continuous 15-degree downward pitch with a water trap loop.`,
    ta: (b, l) => `${l}-la mazhai and kaathu adikrapo ${b} AC indoor unit-la irundhu thanni ulla overflow aachu. Drain pipe terrace-la mela poyi water reverse aagirundhadhu. Pipe-ku proper downwards slope pottu clamp pannom, backflow fully stopped.`
  },
  {
    id: "ac_inverter_ipm_module_short",
    topic: "inverter ipm module short gate circuit",
    headingStyles: [
      (b, l) => `Loud Pop and Burnt Plastic Smell from ${b} Outdoor Inverter Box`,
      (b, l) => `Intelligent Power Module IPM Replaced on ${b} Inverter Board`,
      (b, l) => `Why the ${b} Inverter Motor Failed to Spin Up Its Variable Speeds`,
      (b, l) => `Smooth Variable-Speed Inverter Compression Restored on ${b}`,
      (b, l) => `Shorted IGBT Silicon Bridge Repaired on Board on ${b} at ${l}`,
      (b, l) => `${b} Inverter AC Blew the Internal Ceramic Fuse Instantly on Startup`,
      (b, l) => `In ${l}, ${b} Outdoor Control Board Suffered High-Voltage Surge Damage`,
      (b, l) => `Inverter Power Module and Gate Drive Circuitry Overhaul on ${b}`
    ],
    en: (b, l) => `Customer in ${l} heard a distinct snap from the outdoor unit of their ${b} inverter AC, followed by a scorched smell and zero cooling. The technician opened the outdoor electronics box and found the IPM power module split down the middle due to a momentary grid voltage surge. Replaced the power module with fresh thermal grease, checked snubber diodes, and verified smooth 3-phase compressor ramp-up.`,
    ta: (b, l) => `${l}-la ${b} inverter AC outdoor-la oru loud pop saththam pottu burnt smell vandhudhu. Outdoor PCB-la IPM power module blast aagirundhadhu. New original IPM module pottu thermal paste apply pannom, variable speed compressor smooth-ah run aagudhu.`
  }
];
