// scripts/stories_servicecenter.js
// 32 unique multi-appliance problem stories covering TV, Washer, Fridge, AC, Microwave, RO, Geyser, Chimney
// with 8 diverse grammatical heading styles each, English and Tanglish bodies, and ZERO corporate buzzwords.

module.exports = [
  // TV Cases
  {
    id: "sc_tv_backlight_burnout",
    appliance: "TV",
    topic: "backlight strip failure",
    headingStyles: [
      (b, l) => `Audio Was Crisp but the ${b} TV Screen Remained Pitch Black`,
      (b, l) => `Failed LED Backlight Strip Replaced on a ${b} 4K Display`,
      (b, l) => `Torch Inspection Confirmed Burnt LED Beads Behind ${b} Television`,
      (b, l) => `Brilliant Picture Restored on ${b} Television After LED Swapping`,
      (b, l) => `Burned LED Backlight Diodes Replaced on ${b} Display in ${l}`,
      (b, l) => `${b} Smart TV Lost Picture While Channel Audio Kept Playing Loudly`,
      (b, l) => `In ${l}, ${b} Television Display Screen Went Completely Dark`,
      (b, l) => `Complete Backlight LED Array Overhaul on ${b} Smart Television`
    ],
    en: (b, l) => `A resident in ${l} reported that their ${b} smart television produced normal sound, but the screen stayed completely dark. Our technician performed a torch inspection and spotted faint video outlines beneath the panel. Upon dismantling, one burnt SMD diode in the series string was found open. A brand-new aluminum-backed LED array was installed, and the TV's vivid 4K picture returned perfectly.`,
    ta: (b, l) => `${l}-la ${b} TV sound nalla ketuchu aana screen full dark-ah poiduchu. Torch light vachi test pannapo backlight LED burn aagirundhadhu. New aluminum LED strips maathunadhum 4K picture bright-ah vandhudhu.`
  },
  {
    id: "sc_tv_tcon_vertical_lines",
    appliance: "TV",
    topic: "t-con board vertical lines",
    headingStyles: [
      (b, l) => `Multi-Coloured Vertical Lines Glitched Across ${b} Television Screen`,
      (b, l) => `T-Con Timing Controller Board Cleaned and Reseated on ${b} Display`,
      (b, l) => `Why ${b} Rainbow Lines Appeared Across the Left Side of This Display`,
      (b, l) => `Crystal Clear Screen Display Restored on ${b} Panel Without Lines`,
      (b, l) => `Oxidized LVDS Ribbon Cable Pins Serviced on ${b} TV at ${l}`,
      (b, l) => `${b} 43-Inch Television Screen Showed Split Picture Distortion`,
      (b, l) => `In ${l}, ${b} Smart TV Panel Developed Annoying Vertical Bars`,
      (b, l) => `Panel Logic Timing Controller Servicing on ${b} Television`
    ],
    en: (b, l) => `In ${l}, customer experienced multi-colored vertical bands spreading across their ${b} television screen whenever turned on. Technician disassembled the back panel and inspected the T-Con timing controller board. Found dust and mild pin oxidation on the twin LVDS flexible ribbon cables. Cleaned the gold contacts with isopropyl alcohol, verified 12V VGL/VGH test points, and re-clamped the connectors, clearing all vertical screen bars.`,
    ta: (b, l) => `${l}-la ${b} TV-la green and red vertical lines screen mela therinjadhu. T-Con board ribbon cable pins oxidize aagirundhadhu. Isopropyl alcohol vachi clean panni re-seat pannom, lines poitu screen clean aachu.`
  },
  {
    id: "sc_tv_power_standby_blink",
    appliance: "TV",
    topic: "power supply standby blinking",
    headingStyles: [
      (b, l) => `Red Standby Indicator Light Blinking Continuously on ${b} TV`,
      (b, l) => `Swollen Capacitors Replaced on ${b} Television SMPS Power Board`,
      (b, l) => `Why This ${b} Television Refused to Boot from Standby Mode`,
      (b, l) => `Instant Startup Restored on Unresponsive ${b} Smart Television`,
      (b, l) => `Secondary 12V Voltage Rail Rebuilt on Dead ${b} Display in ${l}`,
      (b, l) => `${b} Smart TV Stood Stuck with a Flickering Standby Lamp`,
      (b, l) => `In ${l}, ${b} Television Power Board Suffered Voltage Surge Drop`,
      (b, l) => `Switch-Mode Power Supply Overhaul on ${b} 55-Inch Television`
    ],
    en: (b, l) => `Customer in ${l} called because their ${b} television would not turn on; the front red standby LED blinked continuously without initiating the home launcher. Technician checked the switch-mode power supply board and identified two bloated 1000uF electrolytic capacitors on the 12V secondary rail. Swapped with high-temperature Japanese capacitors, restoring prompt power boot.`,
    ta: (b, l) => `${l}-la ${b} TV red standby light blink aayite irundhadhu, TV on aagala. Power board-la capacitors swollen aagirundhadhu. New heavy-duty capacitors maathunadhum TV udane on aachu.`
  },
  {
    id: "sc_tv_wifi_bootloop",
    appliance: "TV",
    topic: "wifi disconnect boot loop",
    headingStyles: [
      (b, l) => `${b} Smart TV Kept Dropping Home WiFi Network Every Ten Minutes`,
      (b, l) => `Internal Wi-Fi Transceiver Module Swapped on ${b} Android Television`,
      (b, l) => `Why the ${b} Television Kept Freezing on Logo and Restarting Itself`,
      (b, l) => `Smooth OTT Video Playback Restored on ${b} Smart Display`,
      (b, l) => `Corrupted System eMMC Firmware Re-flashed on ${b} in ${l}`,
      (b, l) => `${b} Television Refused to Connect to High-Speed Fiber Internet`,
      (b, l) => `In ${l}, ${b} Smart TV Froze Solid on Brand Startup Animation`,
      (b, l) => `Wireless Network Card and Firmware Recovery on ${b} Television`
    ],
    en: (b, l) => `In ${l}, a ${b} smart television kept disconnecting from high-speed home fiber Wi-Fi every 10 minutes and occasionally froze during boot. Technician opened the lower chassis and inspected the USB-interfaced dual-band wireless card. The module had developed an internal thermal fault. Installed an original replacement Wi-Fi board, flashed the latest firmware patch, and verified flawless 4K YouTube streaming.`,
    ta: (b, l) => `${l}-la ${b} smart TV-la Wi-Fi disconnected nu adikkadi vandhu logo freeze aachu. Internal Wi-Fi module maathi firmware update pannom, ippo continuous-ah play aagudhu.`
  },

  // Washing Machine Cases
  {
    appliance: "Washing Machine",
    topic: "drain pump foreign body jam",
    headingStyles: [
      (b, l) => `Dirty Water Refused to Drain from ${b} to Pump Out of Tub Before High Spin Sequence`,
      (b, l) => `Hair Clip Trapped Inside ${b} Drain Impeller Extracted and Cleared`,
      (b, l) => `Why the ${b} Machine Halted Mid-Cycle with Standing Water Up to Glass`,
      (b, l) => `Rapid Water Draining and Smooth Spin Restored on ${b} Laundry Drum`,
      (b, l) => `Clogged Lint Filter and Pump Chamber Flushed on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Beeped Error OE with Tub Full of Soap Water`,
      (b, l) => `In ${l}, ${b} Washer Stalled with Five Inches of Soapy Water`,
      (b, l) => `Magnetic Drain Pump Impeller Clearing and Filter Flush on ${b}`
    ],
    en: (b, l) => `A customer in ${l} called when their ${b} washing machine halted before the high spin cycle with a tub full of dirty water and an OE code. Our technician drained the drum through the service hose, pulled out the debris catch filter, and removed a rusted metal hairpin caught between the impeller blades. Cleaned the rubber chamber and confirmed water drained out in under 90 seconds.`,
    ta: (b, l) => `${l}-la ${b} washer drain aagama standing water-oda OE error pottu ninnuduchu. Filter kazhati paathapo hairpin impeller-la maati irundhadhu. Clear panni test pannadhum water fast-ah drain aachu.`
  },
  {
    appliance: "Washing Machine",
    topic: "suspension rod heavy vibration",
    headingStyles: [
      (b, l) => `Violent Tub Thumping on ${b} Washer During Spin Shook the Entire Bathroom Floor`,
      (b, l) => `Four Damper Suspension Rods Replaced on ${b} Top Load Washer`,
      (b, l) => `Why the ${b} Drum Banged Loudly Against the Steel Frame on High Spin`,
      (b, l) => `Smooth and Silent 800 RPM Spin Restored on ${b} Washing Machine`,
      (b, l) => `Snapped Hydraulic Damper Collar Replaced on ${b} in ${l}`,
      (b, l) => `${b} Top Load Washer Walked Across the Laundry Room on Every Spin`,
      (b, l) => `In ${l}, ${b} Machine Tub Tilted Heavily Off Balance Under Load`,
      (b, l) => `Suspension Shock Absorber Damper Overhaul on ${b} Washing Machine`
    ],
    en: (b, l) => `In ${l}, customer's ${b} top load machine began vibrating violently and walking across the laundry floor during the spin sequence. Technician checked the internal suspension and identified that one hydraulic spring damper had snapped its rubber collar, throwing the drum off-axis. Replaced all 4 matching corner rods with fresh damping grease, eliminating all violent rocking.`,
    ta: (b, l) => `${l}-la ${b} top load washer spin-la aadi bathroom floor mela nagandhadhu. Suspension damper collar udanjirundhadhu. 4 new corner rods grease panni maathunom, vibration full-ah stop aayiduchu.`
  },
  {
    appliance: "Washing Machine",
    topic: "water inlet valve borewell scale",
    headingStyles: [
      (b, l) => `Water Trickled into ${b} Wash Drum at a Frustratingly Slow Pace`,
      (b, l) => `Borewell Calcium Scale Cleared from ${b} Inlet Solenoid Valve`,
      (b, l) => `Why ${b} Filling the Drum Took Over 40 Minutes Before Wash Started`,
      (b, l) => `Strong Water Pressure and Quick Drum Fill Restored on ${b} Washer`,
      (b, l) => `Burnt Dual Solenoid Intake Coil Replaced on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Flashed 4C Supply Error Waiting for Water`,
      (b, l) => `In ${l}, ${b} Washer Took Nearly an Hour Just to Reach Minimum Level`,
      (b, l) => `Double-Solenoid Water Inlet Valve Replacement on ${b} Machine`
    ],
    en: (b, l) => `A resident in ${l} noted that their ${b} washing machine took over 40 minutes just to fill up water, constantly beeping with a low water pressure error. Bhavani borewell water had clogged the intake mesh with hard calcium salts, and one of the two solenoid coils was weak. Installed a brand-new dual-solenoid intake valve and verified brisk water flow across both wash and rinse stages.`,
    ta: (b, l) => `${l}-la ${b} washer-la water fill aaga 40 mins aachu, 4C error vandhudhu. Uppu thanni nala inlet mesh full-ah block aagirundhadhu. New dual-solenoid valve maathunadhum fast flow vandhudhu.`
  },
  {
    appliance: "Washing Machine",
    topic: "door lock ptc latch error",
    headingStyles: [
      (b, l) => `Front Door on ${b} Washer Refused to Unlock and Trapped Laundry After Wash Finished`,
      (b, l) => `Burnt PTC Door Interlock Switch Replaced on ${b} Front Load Washer`,
      (b, l) => `Why ${b} Pulling the Door Handle Flashed Error Code dE on Digital Panel`,
      (b, l) => `Crisp Door Latching Action and Safe Laundry Release Restored on ${b}`,
      (b, l) => `Emergency Safety Release Cord Engaged and Latch Fixed on ${b} in ${l}`,
      (b, l) => `${b} Front Load Washer Finished Cycle but Refused to Release Door`,
      (b, l) => `In ${l}, ${b} Machine Door Interlock Burned Its Contact Points`,
      (b, l) => `Thermal PTC Interlock Switch and Latch Replacement on ${b} Washer`
    ],
    en: (b, l) => `Customer in ${l} found their wet laundry locked inside their ${b} front-load washing machine after the cycle finished, with a persistent dE latch error. Our technician arrived quickly, engaged the emergency cord under the bottom panel to free the garments, and tested the thermal PTC switch. The contact points were burnt. Fitted a genuine replacement interlock switch, ensuring safe, smooth door locking.`,
    ta: (b, l) => `${l}-la ${b} front load cycle mudinjum door unlock aagala, dE error kaatuchu. Bottom emergency catch vachi thuniyai eduthu burnt PTC switch maathunom. Smooth latching return aachu.`
  },

  // Refrigerator Cases
  {
    appliance: "Refrigerator",
    topic: "defrost bimetal thermostat failure",
    headingStyles: [
      (b, l) => `Freezer Froze Solid but Lower Cabin Remained Warm on ${b} Fridge`,
      (b, l) => `Choked Evaporator Ice Cleared and Bi-Metal Sensor Swapped on ${b}`,
      (b, l) => `Why ${b} Thick Ice Blanketed the Air Ducts Behind the Freezer Panel`,
      (b, l) => `Balanced Dual-Zone Cooling Restored to ${b} Double Door Refrigerator`,
      (b, l) => `Steam De-Icing Completed and Defrost Thermostat Replaced on ${b} in ${l}`,
      (b, l) => `Milk Spoiled in Lower Shelves While Ice Cream Was Hard on ${b} Unit`,
      (b, l) => `In ${l}, ${b} Refrigerator Suffered Complete Defrost Cycle Failure`,
      (b, l) => `Defrost Sensor and Air Duct Steam Clearing on ${b} Refrigerator`
    ],
    en: (b, l) => `A resident in ${l} called when their ${b} double-door refrigerator accumulated massive ice in the freezer while milk and curds in the lower compartment spoiled. Our technician removed the freezer inner wall, discovering thick frost completely choking the cold air duct. The bi-metal defrost thermostat had failed open. Replaced the sensor, checked the heater coil, and defrosted the airflow duct to restore balanced 3°C cooling.`,
    ta: (b, l) => `${l}-la ${b} fridge freezer-la ice kattirundhadhu, keezha milk spoil aachu. Bi-metal defrost sensor fail aagirundhadhu. Steam de-ice panni sensor maathunom, equal cooling vandhudhu.`
  },
  {
    appliance: "Refrigerator",
    topic: "ptc compressor relay start capacitor",
    headingStyles: [
      (b, l) => `Clicking Sound Echoed Every Few Minutes from Back of ${b} Fridge`,
      (b, l) => `Burnt PTC Starter Relay Replaced on ${b} Compressor Terminal`,
      (b, l) => `Why the ${b} Compressor Hummed for Three Seconds but Failed to Start`,
      (b, l) => `Compressor Started Smoothly and Chilling Resumed on ${b} Fridge`,
      (b, l) => `Cracked Ceramic Relay Disc Swapped on Compressor on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Lost All Cooling While Motor Kept Tripping`,
      (b, l) => `In ${l}, ${b} Frost-Free Fridge Motor Refused to Engage Start Pack`,
      (b, l) => `Compressor Starter Relay Pack and Overload Switch Fitting on ${b}`
    ],
    en: (b, l) => `In ${l}, customer heard a repetitive metallic clicking noise from the back of their ${b} refrigerator every two minutes, with no cooling in either compartment. Technician tested the compressor pins and found the PTC ceramic disc inside the start relay had shattered from line voltage fluctuations. Installed an original PTC starter and overload protector; the compressor started quietly with normal running current.`,
    ta: (b, l) => `${l}-la ${b} fridge-la click tak saththam ketuchu aana cooling zero. Compressor PTC relay disc udanjirundhadhu. New relay and OLP maathunadhum compressor smooth-ah start aachu.`
  },
  {
    appliance: "Refrigerator",
    topic: "drain hole ice freeze water puddle",
    headingStyles: [
      (b, l) => `Water Kept Pooling Beneath the Vegetable Crisper Box on ${b} Fridge`,
      (b, l) => `Frozen Defrost Drain Trough Flushed with Hot Water on ${b} Unit`,
      (b, l) => `Why ${b} Defrost Water Spilled Across Kitchen Floor Tiles Every Morning`,
      (b, l) => `Dry Interior Storage and Spotless Kitchen Floor Restored on ${b}`,
      (b, l) => `Algae Sludge and Food Crumbs Cleared from Rear Drain Hose on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Bottom Shelf Accumulated Standing Puddles Daily`,
      (b, l) => `In ${l}, ${b} Double Door Defrost Channel Froze Completely Solid`,
      (b, l) => `Internal Defrost Drain Spout and Duckbill Valve Servicing on ${b}`
    ],
    en: (b, l) => `A customer in ${l} complained that water was accumulating inside the bottom tray of their ${b} frost-free refrigerator and spilling onto the floor. Inspection revealed that the defrost drain hole behind the evaporator coil was blocked with ice and mold buildup, forcing melting defrost water to run into the fresh-food compartment. Technician flushed the channel with hot water, cleared the trap, and verified clean rear drain pan exit.`,
    ta: (b, l) => `${l}-la ${b} fridge veg tray keezha thanni thengi floor-la leak aachu. Drain hole-la ice and algae adaichi irundhadhu. Hot water flush panni rear valve clean pannom, leakage stopped.`
  },
  {
    appliance: "Refrigerator",
    topic: "evaporator fan motor bearing noise",
    headingStyles: [
      (b, l) => `Loud Whining Noise in ${b} Freezer Came from Inside Freezer Whenever Door Was Closed`,
      (b, l) => `Worn Evaporator Fan Motor Swapped on ${b} Frost-Free Refrigerator`,
      (b, l) => `Why ${b} Opening the Freezer Door Stopped the Sound Instantly`,
      (b, l) => `Quiet and Strong Cold Air Circulation Restored to ${b} Shelves`,
      (b, l) => `Dry Sintered Bushing Fan Motor Replaced on ${b} in ${l}`,
      (b, l) => `${b} Refrigerator Emitted an Annoying High-Pitched Whine at Night`,
      (b, l) => `In ${l}, ${b} Freezer Circulation Blower Developed Dry Bearing Chatter`,
      (b, l) => `Evaporator DC Brushless Fan Motor and Cushion Grommets on ${b}`
    ],
    en: (b, l) => `In ${l}, a high-pitched grinding sound echoed from inside a ${b} refrigerator whenever the door was shut. Our technician determined that the bronze bushings of the freezer evaporator fan motor had dried out, causing the fan blades to wobble against the plastic cowl. Replaced the motor assembly with a quiet DC brushless blower, restoring strong, silent airflow down to the crisper.`,
    ta: (b, l) => `${l}-la ${b} fridge door mooduna freezer kulla irundhu whining sound ketuchu. Fan motor bushings dry aagirundhadhu. New brushless DC fan motor maathunom, whisper-quiet aachu.`
  },

  // Air Conditioner Cases
  {
    appliance: "Air Conditioner",
    topic: "copper flare nut gas leak braze",
    headingStyles: [
      (b, l) => `Thin Sheet of Ice Formed on ${b} AC Copper Suction Line`,
      (b, l) => `Micro-Leak at Outdoor Flare Connection Repaired and Brazed on ${b}`,
      (b, l) => `Why the ${b} Split Unit Blew Warm Room Air on a Hot Summer Noon`,
      (b, l) => `Ice-Cold 16°C Chilled Air Flow Restored on ${b} Split Air Conditioner`,
      (b, l) => `Hairline Flare Nut Crack Fixed and Nitrogen Tested on ${b} in ${l}`,
      (b, l) => `${b} Inverter AC Lost Cooling Efficiency Gradually Over Ten Days`,
      (b, l) => `In ${l}, ${b} Outdoor Service Valve Showed Frost Crystals`,
      (b, l) => `Refrigerant Leak Rectification and Vacuum R32 Gas Top-Up on ${b} AC`
    ],
    en: (b, l) => `A resident in ${l} noticed their ${b} inverter split AC blew warm room air, with ice crystals forming on the narrow brass service valve outside. Technician performed a 250 PSI nitrogen pressure test and detected a hairline flare-nut crack using bubble foam. Re-flared the copper pipe, brazed the joint, evacuated moisture to 500 microns with a two-stage pump, and charged precise factory R32 refrigerant.`,
    ta: (b, l) => `${l}-la ${b} AC-la cooling koraiva aagi outdoor pipe-la ice kattirundhadhu. Nitrogen test-la flare crack therinjadhu. New flare panni vacuum pottu R32 gas recharge pannom, super chill aachu.`
  },
  {
    appliance: "Air Conditioner",
    topic: "indoor drain tray overflow",
    headingStyles: [
      (b, l) => `Water Dripped Down Bedroom Wall Directly Below ${b} Indoor Unit`,
      (b, l) => `Jelly Algae Sludge Cleared from ${b} AC Internal Drain Trough`,
      (b, l) => `Why ${b} Condensate Water Poured Over Wall Hangings and Bed Linen`,
      (b, l) => `Dry Bedroom Walls and Spotless Condensate Drainage Restored on ${b}`,
      (b, l) => `Blocked Drain Channel Flushed with Pressurized Water on ${b} in ${l}`,
      (b, l) => `${b} Split AC Overflowed During Humid Monsoon Rainy Nights`,
      (b, l) => `In ${l}, ${b} Indoor Unit Condensate Trough Overflowed Across Room`,
      (b, l) => `Condensate Drain Desilting and Bracket Pitch Alignment on ${b} AC`
    ],
    en: (b, l) => `In ${l}, water was dripping down wallpaper directly below a ${b} indoor split AC unit. Our technician removed the front casing and found thick jelly-like algal slime choking the internal condensate drain spout. Flushed the drain pipe with pressurized pump water, cleared the line completely to the balcony floor drain, and leveled the mounting bracket to prevent any future drip.`,
    ta: (b, l) => `${l}-la ${b} AC indoor unit-la irundhu thanni suvar vazhiya drip aachu. Drain tray-la paasi slime adaichi irundhadhu. Pressure wash panni slope align pannom, leak stopped.`
  },
  {
    appliance: "Air Conditioner",
    topic: "outdoor run capacitor replacement",
    headingStyles: [
      (b, l) => `Indoor Fan Blew Air but Outdoor Compressor Failed to Start on ${b}`,
      (b, l) => `Weak 45uF Compressor Run Capacitor Swapped on ${b} Outdoor Unit`,
      (b, l) => `Why the ${b} Outdoor Unit Hummed for Three Seconds Then Went Silent`,
      (b, l) => `Chilled Airflow Restored Within Ten Minutes on ${b} 1.5 Ton AC`,
      (b, l) => `Swollen Motor Run Capacitor Replaced on Outdoor Unit on ${b} in ${l}`,
      (b, l) => `${b} Air Conditioner Stood Powerless During Hottest Afternoon Hours`,
      (b, l) => `In ${l}, ${b} Compressor Stalled Under Intense Summer Heat Wave`,
      (b, l) => `Motor Starter Capacitor and Contactor Relay Overhaul on ${b} AC`
    ],
    en: (b, l) => `Customer in ${l} called on a sweltering afternoon because their ${b} split AC indoor unit ran its fan, but the outdoor compressor made a faint hum and failed to start. Testing the dual run capacitor with a multimeter showed only 11uF against its rated 45uF. Replaced with an original heavy-duty metal capacitor; the compressor fired up instantly, delivering cold air within five minutes.`,
    ta: (b, l) => `${l}-la ${b} AC outdoor compressor hum aagi off aayiduchu, cooling illa. Capacitor 45uF irukradhu 11uF-ku drop aagirundhadhu. New heavy-duty capacitor maathunadhum chill air vandhudhu.`
  },
  {
    appliance: "Air Conditioner",
    topic: "indoor cross flow blower wheel balance",
    headingStyles: [
      (b, l) => `Rattling Plastic Noise Came from ${b} Indoor Air Delivery Vane`,
      (b, l) => `Cracked Cross-Flow Fan Roller Replaced on ${b} Split AC Indoor`,
      (b, l) => `Why ${b} Room Air Velocity Dropped to an Uneven Fluttering Draft`,
      (b, l) => `Silent High-Velocity Air Delivery Restored on ${b} Air Conditioner`,
      (b, l) => `Wobbly Blower Bushing Lubricated with Silicone Oil on ${b} in ${l}`,
      (b, l) => `${b} Split AC Emitted an Irritating Vibration Sound on High Fan Speed`,
      (b, l) => `In ${l}, ${b} Indoor Blower Wheel Developed Severe Dynamic Wobble`,
      (b, l) => `Cross-Flow Blower Roller Replacement and Bushing Balancing on ${b} AC`
    ],
    en: (b, l) => `In ${l}, customer noticed a continuous fluttering and rattling sound from their ${b} indoor split unit, with uneven airflow across the room. Technician removed the louvers and discovered two plastic blade fins had snapped off the cylindrical blower wheel, throwing it off balance. Installed a factory-balanced cross-flow roller wheel and silicone-lubricated the left rubber bushing, restoring silent high-velocity air throw.`,
    ta: (b, l) => `${l}-la ${b} indoor unit blower fan aadi flutter saththam pottadhu. Blower wheel fin udanjirundhadhu. New balanced cross-flow roller pottu bushing lubricate pannom, silent air throw vandhudhu.`
  },

  // Microwave Cases
  {
    appliance: "Microwave Oven",
    topic: "mica waveguide spark crackle",
    headingStyles: [
      (b, l) => `Sparks and Crackling Fire Flashed Inside ${b} Microwave Chamber`,
      (b, l) => `Burnt Mica Waveguide Cover Sheet Replaced on ${b} Microwave Oven`,
      (b, l) => `Why ${b} Loud Buzzing Sparks Appeared on the Right Cavity Wall on Start`,
      (b, l) => `Safe and Spark-Free Microwave Cooking Restored to ${b} Kitchen Cavity`,
      (b, l) => `Carbonized Oil Spatter Cleaned Off Waveguide Flange on ${b} in ${l}`,
      (b, l) => `${b} Microwave Oven Emitted an Alarming Electric Arc Noise on Starting`,
      (b, l) => `In ${l}, ${b} Microwave Chamber Began Arcing Fire Sparks`,
      (b, l) => `Heat-Resistant Mica Waveguide Sheet and Antenna Port Servicing on ${b}`
    ],
    en: (b, l) => `A resident in ${l} got alarmed when pressing start on their ${b} convection microwave caused loud buzzing sparks and fire crackles on the right interior wall. Our technician identified that oil spatter had accumulated on the silver mica waveguide cover, carbonizing and creating electrical arcing from the magnetron antenna. Removed the burnt card, cleaned the cavity metal, and fitted a new heat-resistant waveguide plate.`,
    ta: (b, l) => `${l}-la ${b} microwave start panna cavity kulla fire sparks and crackling sound vandhudhu. Mica sheet mela oil pattu carbonize aagirundhadhu. Burnt mica maathi cavity clean pannom, sparks ninnuduchu.`
  },
  {
    appliance: "Microwave Oven",
    topic: "magnetron no heat humming",
    headingStyles: [
      (b, l) => `${b} Microwave Spun and Counted Down but Milk Remained Completely Cold`,
      (b, l) => `Dead High-Voltage Magnetron Tube Replaced on ${b} Microwave Oven`,
      (b, l) => `Why the ${b} Microwave Hummed Loudly but Produced Zero Heat Output`,
      (b, l) => `Steaming Hot Food Output Restored in Two Minutes on ${b} Oven`,
      (b, l) => `High-Voltage Diode and Capacitor Continuity Tested on ${b} in ${l}`,
      (b, l) => `${b} Convection Microwave Ran Normally but Kept Food Stone Cold`,
      (b, l) => `In ${l}, ${b} Microwave Heating Filament Lost Internal Emission`,
      (b, l) => `High-Voltage Magnetron Tube and Rectifier Diode Overhaul on ${b}`
    ],
    en: (b, l) => `In ${l}, customer's ${b} microwave would turn on, rotate the glass platter, and count down the timer, but cups of milk remained completely cold. Our technician safely discharged the high-voltage capacitor and tested the circuit. The magnetron tube's internal filament had broken vacuum insulation. Fitted a genuine replacement magnetron, reassembled the casing, and verified instant water boiling in two minutes.`,
    ta: (b, l) => `${l}-la ${b} microwave plate suthudhu timer odudhu aana paal konjam kooda soodaagala. Magnetron tube fail aagirundhadhu. New original magnetron maathi test pannom, 2 mins-la super hot tea ready.`
  },
  {
    appliance: "Microwave Oven",
    topic: "turntable coupler motor stalled",
    headingStyles: [
      (b, l) => `Glass Tray Stopped Rotating and Left Food Unevenly Cooked on ${b}`,
      (b, l) => `Stripped Synchronous Turntable Motor Swapped on ${b} Microwave Oven`,
      (b, l) => `Why the ${b} Heavy Glass Plate Jerked and Refused to Complete Turns`,
      (b, l) => `Smooth 360-Degree Plate Rotation Restored on ${b} Microwave`,
      (b, l) => `Broken Plastic Drive Coupler Cog Replaced on ${b} in ${l}`,
      (b, l) => `${b} Microwave Made a Clicking Sound Beneath the Glass Platter`,
      (b, l) => `In ${l}, ${b} Turntable Drive Motor Stripped Its Reduction Gears`,
      (b, l) => `Turntable Drive Coupler and Synchronous Motor Replacement on ${b}`
    ],
    en: (b, l) => `Customer at ${l} noticed that the heavy glass turntable plate inside their ${b} microwave jerked and refused to rotate, resulting in food cooking unevenly on one side. Technician tested the under-floor AC synchronous drive motor and found stripped plastic reduction gears. Installed an original steel-shafted synchronous motor and a fresh center drive cog, restoring smooth 360-degree rotation.`,
    ta: (b, l) => `${l}-la ${b} microwave glass plate thirumbama stuck aagi food oru pakkam mattum soodaachu. Under-floor synchronous motor gear stripped aagirundhadhu. New motor and drive cog maathunom, plate smooth-ah rotate aachu.`
  },
  {
    appliance: "Microwave Oven",
    topic: "door microswitch interlock latch",
    headingStyles: [
      (b, l) => `Main Kitchen Circuit Breaker Tripped Instantly on Opening ${b} Door`,
      (b, l) => `Faulty Primary Door Interlock Microswitch Replaced on ${b} Oven`,
      (b, l) => `Why ${b} Opening the Microwave Door Caused the Display to Go Black`,
      (b, l) => `Safe and Reliable Door Interlock Operation Restored on ${b} Oven`,
      (b, l) => `Ceramic Safety Fuse and Latch Bracket Serviced on ${b} in ${l}`,
      (b, l) => `${b} Microwave Tripped Home MCB Every Time Door Was Unlatched`,
      (b, l) => `In ${l}, ${b} Door Interlock Switches Suffered Timing Misalignment`,
      (b, l) => `Three-Tier Safety Door Microswitch and Latch Assembly on ${b}`
    ],
    en: (b, l) => `In ${l}, opening the door of a ${b} microwave tripped the kitchen circuit breaker and caused the oven display to go completely black. The technician traced the fault to a worn monitor microswitch inside the three-tier plastic door latch bracket, which failed to open before the primary switch closed, shorting line to neutral. Replaced both microswitches and the 15A ceramic fuse, restoring safe operation.`,
    ta: (b, l) => `${l}-la ${b} microwave door open pannapo kitchen MCB trip aagi display black aachu. Door latch microswitch short circuit panniruchu. New switches and ceramic fuse maathunom, safe-ah operate aagudhu.`
  },

  // Water Purifier (RO) Cases
  {
    appliance: "Water Purifier",
    topic: "choked sediment pre-filter low output",
    headingStyles: [
      (b, l) => `Pure Water Trickled at Drop-by-Drop Speed from ${b} RO Purifier`,
      (b, l) => `Mud-Choked 5-Micron Spun Pre-Filter Replaced on ${b} Water Unit`,
      (b, l) => `Why the ${b} Purifier Ran for Three Hours Just to Fill a Half-Tank`,
      (b, l) => `Brisk 12-Liter Purified Stream Restored on ${b} RO Storage Tank`,
      (b, l) => `Heavy Silt Dirt Flushed from Outer Filter Housing Bowl on ${b} in ${l}`,
      (b, l) => `${b} RO Water Purifier Motor Hummed Continuously with Little Output`,
      (b, l) => `In ${l}, ${b} RO Pre-Filtration System Choked on River Clay Silt`,
      (b, l) => `Sediment Spun Candle and Activated Carbon Block Replacement on ${b}`
    ],
    en: (b, l) => `A resident in ${l} was troubled that their ${b} RO unit took over three hours to fill its storage tank. Erode municipality pipeline work had introduced heavy red clay silt into their overhead tank, entirely choking the 5-micron spun candle inside the outer filter bowl. Technician flushed the housing, installed a fresh poly-spun pre-filter and activated carbon block, restoring brisk flow.`,
    ta: (b, l) => `${l}-la ${b} RO tank romba neram run aagi fill aagala, sotu sot-ah varudhu. Pipeline clay sediment spun filter-ah full-ah block pannirundhadhu. Outer bowl wash panni new filter candle maathunom, fast water flow vandhudhu.`
  },
  {
    appliance: "Water Purifier",
    topic: "ro membrane scale high tds",
    headingStyles: [
      (b, l) => `Purified Drinking Water Tasted Noticeably Salty from ${b} RO Unit`,
      (b, l) => `High 480 PPM Output Dropped to 65 PPM with New ${b} RO Membrane`,
      (b, l) => `Why the ${b} Purifier Output Water Tasted Bitter and Left White Scale`,
      (b, l) => `Sweet and Crystal-Clear Drinking Water Taste Restored on ${b} RO`,
      (b, l) => `Hard Cauvery Borewell Scale Choked Membrane Cartridge on ${b} in ${l}`,
      (b, l) => `${b} Water Purifier Failed to Remove Dissolved Hard Mineral Salts`,
      (b, l) => `In ${l}, ${b} Domestic RO System Suffered Membrane Rupture`,
      (b, l) => `Thin-Film Composite RO Membrane and Flow Restrictor Overhaul on ${b}`
    ],
    en: (b, l) => `In ${l}, customer noted that their ${b} purifier's water tasted slightly bitter and salty. Testing input borewell water showed 920 PPM while output was an unacceptable 480 PPM due to a ruptured, calcified membrane sheet. Technician replaced the RO membrane with a genuine 80 GPD thin-film composite cartridge, changed the flow restrictor, and added a mineralizer. Output TDS dropped to a sweet 65 PPM.`,
    ta: (b, l) => `${l}-la ${b} RO water uppu taste-ah irundhadhu, TDS check pannapo 480 PPM kaatuchu. Membrane sheet calcify aagi tear aagirundhadhu. New 80 GPD membrane and mineralizer maathunom, TDS sweet-ah 65 PPM-ku vandhudhu.`
  },
  {
    appliance: "Water Purifier",
    topic: "booster pump pressure drop",
    headingStyles: [
      (b, l) => `${b} RO Purifier Hummed Loudly Without Producing Pure Water`,
      (b, l) => `Worn Diaphragm Head Rebuilt on ${b} RO 24V Booster Pump`,
      (b, l) => `Why ${b} Reject Water Poured Non-Stop While Clean Reservoir Stayed Empty`,
      (b, l) => `Strong 110 PSI Filtration Pressure Restored on ${b} RO Purifier`,
      (b, l) => `Water Dripping from Booster Pump Diaphragm Base Fixed on ${b} in ${l}`,
      (b, l) => `${b} Water Purifier Pump Pressure Dropped Far Below Membrane Rating`,
      (b, l) => `In ${l}, ${b} RO Booster Motor Lost Compression Efficiency`,
      (b, l) => `High-Pressure Diaphragm Pump Head Replacement on ${b} RO Unit`
    ],
    en: (b, l) => `Customer in ${l} called because their ${b} RO purifier ran all day with all water discharging through the reject pipe and none entering the clean tank. Technician connected an inline pressure gauge and found pump head pressure had dropped to 35 PSI—far below the 70 PSI needed to permeate the membrane. Replaced the worn rubber diaphragm valve head; pressure jumped to 110 PSI, immediately producing clean water.`,
    ta: (b, l) => `${l}-la ${b} RO pump odudhu aana pure water varala, reject pipe-la thanni poitte irundhadhu. Pump pressure 35 PSI-ku drop aagirundhadhu. New diaphragm head maathunadhum 110 PSI pressure vandhu tank fill aachu.`
  },
  {
    appliance: "Water Purifier",
    topic: "auto cut off float switch overflow",
    headingStyles: [
      (b, l) => `Pure Water Tank Overflowed Onto Kitchen Counter from ${b} RO Unit`,
      (b, l) => `Stuck Magnetic Float Switch Swapped on ${b} Water Purifier Tank`,
      (b, l) => `Why the ${b} Purifier Refused to Stop Pumping When Storage Was Full`,
      (b, l) => `Clean Automatic Cut-Off and Flood-Free Kitchen Restored on ${b}`,
      (b, l) => `Solenoid Valve SV Stuck Open Replaced on ${b} in ${l}`,
      (b, l) => `${b} Water Purifier Ran 24 Hours Non-Stop and Flooded Countertop`,
      (b, l) => `In ${l}, ${b} Storage Tank Float Mechanism Jammed with Algae Slime`,
      (b, l) => `Automatic Tank Level Float Switch and Solenoid Valve Servicing on ${b}`
    ],
    en: (b, l) => `In ${l}, a family found their kitchen counter flooded because their ${b} RO unit kept running and pumping even after the 10-liter reservoir was brimming. The technician found the internal magnetic float switch stuck down due to mineral slime, keeping the solenoid valve continuously energized. Cleaned the tank, installed a new sealed magnetic float switch, and confirmed clean auto shutoff.`,
    ta: (b, l) => `${l}-la ${b} RO tank full aagiyum motor cut aagama counter mela thanni kottirundhadhu. Float switch mineral slime nala stuck aagirundhadhu. Tank clean panni new magnetic float switch maathunom, auto-cut perfect aachu.`
  },

  // Geyser Cases
  {
    appliance: "Water Heater / Geyser",
    topic: "calcified heating element scaling",
    headingStyles: [
      (b, l) => `${b} Geyser Took 45 Minutes Just to Warm Up Morning Bath Water`,
      (b, l) => `Thick 3-Kg Hard Water Scale Chiseled Off ${b} Heating Element`,
      (b, l) => `Why ${b} Electricity Bills Soared While Tap Water Stayed Lukewarm`,
      (b, l) => `Piping-Hot 65°C Water in Just Fifteen Minutes Restored on ${b}`,
      (b, l) => `Burnt 2000W Heavy-Duty Copper Element Swapped on ${b} in ${l}`,
      (b, l) => `${b} Storage Geyser Emitted a Boiling Hiss but Delivered Tepid Water`,
      (b, l) => `In ${l}, ${b} Water Heater Tank Was Suffocated Under Calcium Crust`,
      (b, l) => `Storage Geyser Tank Descaling and Immersion Element Replacement on ${b}`
    ],
    en: (b, l) => `A resident in ${l} complained that their 25-liter ${b} geyser consumed high electricity and took nearly an hour to produce lukewarm bath water. Our technician drained the geyser tank, pulled out the heating element assembly, and found over 3 kg of rock-hard calcium scale encrusting the copper tubes. Replaced with an original heavy-duty coated copper heating element, restoring piping-hot water in just 15 minutes.`,
    ta: (b, l) => `${l}-la ${b} geyser 45 mins pottalum thanni warm-ah thaan irundhadhu, current bill adhigam aachu. Element mela 3 kg uppu adaichi coil burn aagirundhadhu. Tank descale panni new copper element maathunom, 15 mins-la hot water ready.`
  },
  {
    appliance: "Water Heater / Geyser",
    topic: "thermal cutout safety trip",
    headingStyles: [
      (b, l) => `${b} Water Heater Completely Dead with Neither Power Lamp Lighting`,
      (b, l) => `Secondary Thermal Safety Cut-Out Switch Reset and Thermostat Fixed on ${b}`,
      (b, l) => `Why ${b} Overheating Protection Tripped and Cut Off All Power to Geyser`,
      (b, l) => `Safe Automated Temperature Regulation Restored on ${b} Water Heater`,
      (b, l) => `Stuck Stem Thermostat Sensor Swapped on ${b} in ${l}`,
      (b, l) => `Water Boiled Dangerously Hot Before ${b} Geyser Tripped Completely`,
      (b, l) => `In ${l}, ${b} Storage Geyser Safety Interlock Locked Out Power`,
      (b, l) => `Dual-Stage Thermostat and Manual Reset Safety Cut-Out on ${b} Geyser`
    ],
    en: (b, l) => `In ${l}, customer called because neither the red nor green power light illuminated on their ${b} geyser, and water stayed cold. The technician opened the bottom plastic enclosure and found the secondary thermal cut-out had tripped because the primary stem thermostat failed to cut off at 65°C, letting water overheat. Replaced the faulty stem thermostat, reset the thermal trip switch, and verified safe auto cut-off.`,
    ta: (b, l) => `${l}-la ${b} geyser-la red green light rendume eriyala, power cut aayiduchu. Thermostat fail aagi water overheat aana nala safety thermal cutout trip aagirundhadhu. New thermostat pottu reset pannom, safe-ah hot water varudhu.`
  },
  {
    appliance: "Water Heater / Geyser",
    topic: "inlet non return safety valve dripping",
    headingStyles: [
      (b, l) => `Water Constantly Gushed from Safety Valve Below ${b} Geyser`,
      (b, l) => `Excess Pressure 2-in-1 Multi-Function Valve Swapped on ${b} Heater`,
      (b, l) => `Why ${b} Bathroom Wall Splashed Continuously from Brass Relief Spout`,
      (b, l) => `Safe Sealed Pressure Tank Operation Restored on ${b} Storage Geyser`,
      (b, l) => `Corroded Pressure Relief Valve Spring Replaced on ${b} in ${l}`,
      (b, l) => `${b} Geyser Safety Valve Dripped Non-Stop Under Apartment Booster Pump`,
      (b, l) => `In ${l}, ${b} Water Heater Discharge Port Suffered Continuous Drip`,
      (b, l) => `Multi-Function Non-Return Safety Relief Valve Calibration on ${b}`
    ],
    en: (b, l) => `Customer at an apartment in ${l} reported that water was spurting continuously from the small brass nozzle below their ${b} geyser. Due to high booster pressure from the building overhead tank, the multi-function non-return safety valve's internal spring had deteriorated. Fitted a heavy-duty 8-bar pressure relief valve with an overflow drain tube, stopping bathroom splashing completely.`,
    ta: (b, l) => `${l}-la ${b} geyser keezha irukra brass safety valve-la irundhu thanni sotikitte irundhadhu. Booster pump pressure nala spring loose aagirundhadhu. New 8-bar multi-function valve maathi drain tube fix pannom, splashing stopped.`
  },
  {
    appliance: "Water Heater / Geyser",
    topic: "sacrificial magnesium anode tank protection",
    headingStyles: [
      (b, l) => `Brown Rusty Water Flowed from ${b} from Hot Water Bathroom Tap on Starting`,
      (b, l) => `Dissolved Sacrificial Magnesium Anode Rod Replaced Inside ${b} Tank`,
      (b, l) => `Why ${b} Bath Water Smelled Metallic and Stained Ceramic Wash Basins`,
      (b, l) => `Crystal-Clear Hot Water and Anti-Corrosion Protection Restored on ${b}`,
      (b, l) => `Inner Glassline Cylinder Flushed and Rust Sludge Cleared on ${b} in ${l}`,
      (b, l) => `${b} Water Heater Discharged Discolored Water Due to Tank Oxidation`,
      (b, l) => `In ${l}, ${b} Storage Geyser Lost Its Internal Sacrificial Anode`,
      (b, l) => `Inner Cylinder Descaling and Heavy-Duty Magnesium Anode Rod on ${b}`
    ],
    en: (b, l) => `In ${l}, brown rusty water was flowing from the hot water tap whenever the ${b} geyser was turned on. The technician drained the inner cylinder and discovered that the original magnesium anode rod had completely dissolved away, allowing hard mineral salts to start pitting the tank seams. Flushed out rusty sediment, threaded in a thick new magnesium sacrificial rod, and restored clear, clean hot water.`,
    ta: (b, l) => `${l}-la ${b} geyser hot water tap thirandha thuru pudicha brown thanni vandhudhu. Sacrificial magnesium anode rod karainju poiduchu. Tank flush panni new thick magnesium rod maathunom, crystal-clear water vandhudhu.`
  },

  // Kitchen Chimney Cases
  {
    appliance: "Kitchen Chimney",
    topic: "grease choked blower motor noise",
    headingStyles: [
      (b, l) => `Loud Strained Humming Noise and Weak Smoke Suction on ${b} Chimney`,
      (b, l) => `Heavy Oil Sludge Chemically Degreased from ${b} Blower Fan Rotor`,
      (b, l) => `Why ${b} Kitchen Fumes Lingered Despite Running Exhaust on High Speed`,
      (b, l) => `Powerful 1200 m3/h Smoke Extraction Restored to ${b} Kitchen Hood`,
      (b, l) => `Grease-Jammed Centrifugal Blower Housing Cleaned on ${b} in ${l}`,
      (b, l) => `${b} Kitchen Chimney Strained and Vibrated Heavily During Frying`,
      (b, l) => `In ${l}, ${b} Suction Blower Was Strangled by Hardened Cooking Oil`,
      (b, l) => `Centrifugal Exhaust Blower Deep Degreasing and Motor Servicing on ${b}`
    ],
    en: (b, l) => `A resident in ${l} complained that cooking smoke lingered in their modular kitchen despite running their ${b} chimney on high speed, which emitted a strained humming sound. Our technician dismantled the blower housing and found layers of sticky cooking oil encrusted on the multi-blade centrifugal rotor. Performed an industrial degreasing chemical wash, lubricated the motor bearings, and restored full suction power.`,
    ta: (b, l) => `${l}-la ${b} chimney high speed-la potalum samayal puga veliya pogala, motor humming sound pottadhu. Blower fan blades mela oil sludge thick-ah adaichi irundhadhu. Chemical degrease wash panni bearings lubricate pannom, full suction vandhudhu.`
  },
  {
    appliance: "Kitchen Chimney",
    topic: "baffle filter oil collector dripping",
    headingStyles: [
      (b, l) => `Black Cooking Oil Dripped from ${b} Hood from Chimney Corners Onto the Gas Stove`,
      (b, l) => `Clogged Stainless Steel Curved Baffle Filters Steam Cleaned on ${b}`,
      (b, l) => `Why ${b} Oil Spilled from the Rear Reservoir Tray During Tadka Frying`,
      (b, l) => `Spotless Drip-Free Modular Kitchen Cooking Restored on ${b} Hood`,
      (b, l) => `Hardened Grease Traps Descaled and Drain Channels Cleared on ${b} in ${l}`,
      (b, l) => `${b} Kitchen Chimney Baffle Plates Overflowed Sticky Oil Residue`,
      (b, l) => `In ${l}, ${b} Chimney Oil Collection Channels Were Choked Solid`,
      (b, l) => `Stainless Steel Baffle Filter Descaling and Oil Collector Tray on ${b}`
    ],
    en: (b, l) => `In ${l}, cooking oil was dripping from the corner of a ${b} chimney directly onto the glass cooktop during tadka frying. The curved stainless steel baffle filters and the rear plastic oil collector cup were both choked with hardened grease. Technician soaked and steam-cleaned the baffle filters in caustic degreasing solution, cleared the drain channels, and reinstalled them with a tight seal.`,
    ta: (b, l) => `${l}-la samayal pannumbodhu ${b} chimney mela irundhu oil kottuchu glass stove mela. Baffle filters and oil cup full-ah grease adaichi vazhinjudhu. Caustic steam wash panni oil channels clear pannom, dripping full-ah ninnuduchu.`
  },
  {
    appliance: "Kitchen Chimney",
    topic: "touch sensor gesture control board",
    headingStyles: [
      (b, l) => `Wave Motion Sensors and Touch Controls Refused to Respond on ${b}`,
      (b, l) => `Grease-Coated Infrared Gesture Sensor Board Cleaned on ${b} Chimney`,
      (b, l) => `Why ${b} Waving Hands Failed to Turn On Chimney Suction or LED Lights`,
      (b, l) => `Instant Gesture and Touch Screen Response Restored to ${b} Kitchen Hood`,
      (b, l) => `Blown 2A Board Fuse and Oil-Fumed PCB Repaired on ${b} in ${l}`,
      (b, l) => `${b} Glass Chimney Panel Stood Completely Unresponsive to Touch`,
      (b, l) => `In ${l}, ${b} Touch Glass Controls Shorted from Hot Cooking Fumes`,
      (b, l) => `Optical Gesture Sensor PCB Servicing and Glass Perimeter Sealing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called because the wave gesture sensors and touch buttons on the black glass panel of their ${b} chimney stopped working. Hot oil fumes had penetrated the unsealed gap behind the touch fascia, coating the optical infrared emitter with a thin grease layer. Technician cleaned the PCB with contact cleaner, replaced the blown 2A board fuse, and sealed the glass perimeter against fumes.`,
    ta: (b, l) => `${l}-la ${b} chimney glass panel-la wave gesture and touch work aagala, light kooda on aagala. Oil fumes ulla poyi infrared sensor board coating aagirundhadhu. Contact cleaner pottu clean panni glass seal pannom, wave sensor perfect-ah respond aagudhu.`
  },
  {
    appliance: "Kitchen Chimney",
    topic: "exhaust duct flap jam backdraft",
    headingStyles: [
      (b, l) => `Outside Street Dust and Fumes Blew Backwards Through ${b} Chimney`,
      (b, l) => `Jammed Gravity Non-Return Damper Flap Freed on ${b} Kitchen Exhaust`,
      (b, l) => `Why ${b} Strong Terrace Winds Caused Loud Flapping Rattles in Kitchen`,
      (b, l) => `Smooth Exhaust Discharge Restored on ${b} Hood and Backdraft Prevention Restored`,
      (b, l) => `Stainless Steel Outer Louvre Hood and Pigeon Mesh Installed on ${b} in ${l}`,
      (b, l) => `${b} Chimney Flexible Duct Trapped Feather Debris in Outlet Hinge`,
      (b, l) => `In ${l}, ${b} Kitchen Exhaust Pipe Allowed External Smoke Inflow`,
      (b, l) => `Exhaust Duct Non-Return Gravity Damper and Outer Cowl Fitting on ${b}`
    ],
    en: (b, l) => `In ${l}, strong wind was blowing dust and external cooking smells back through the customer's ${b} chimney into the kitchen. Inspection of the 6-inch flexible duct showed the dual-leaf non-return gravity damper had jammed open with hardened lint and bird feather debris. Cleaned the damper hinge, fitted a stainless steel outer louvre cowl with protective mesh, and verified smooth air discharge.`,
    ta: (b, l) => `${l}-la veliya kaathu adikrapo street dust and puga ${b} chimney vazhiya kitchen kulla reverse vandhudhu. Duct kulla irukra one-way flap jam aagi open-laye nikkudhu. Flap clean panni pigeon mesh outer cowl potadhum reverse air full-ah stop aachu.`
  }
];
