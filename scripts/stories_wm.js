// scripts/stories_wm.js
// 24 unique Washing Machine problem stories with 8 diverse grammatical heading styles each,
// matching simple Indian English and Tanglish descriptions, and ZERO corporate buzzwords.

module.exports = [
  {
    id: "wm_drain_pump_jam",
    topic: "drain pump coin jam",
    headingStyles: [
      (b, l) => `Soapy Water Refused to Drain from ${b} Drum Before High Spin`,
      (b, l) => `Coin and Saree Thread Cleared from ${b} Drain Impeller Pump`,
      (b, l) => `Why the ${b} Machine Stalled with Standing Water Up to the Glass Door`,
      (b, l) => `Brisk 60-Second Water Drainage Restored on ${b} Front Load`,
      (b, l) => `Trapped 5-Rupee Coin Extracted from Drain Filter on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Beeped Error Code OE Mid-Cycle with Full Drum`,
      (b, l) => `In ${l}, ${b} Washer Stalled with Five Inches of Standing Water`,
      (b, l) => `Drain Pump Impeller Debris Removal and Hose Flush on ${b} Washer`
    ],
    en: (b, l) => `In ${l}, customer's ${b} front loader halted before the spin cycle with water filled up to the glass door and an OE code flashing. Our technician drained the drum via the emergency hose, opened the lint filter chamber, and found a five-rupee coin and loose saree threads jammed around the pump propeller. Cleared the obstruction, cleaned the discharge hose, and water pumped out cleanly in seconds.`,
    ta: (b, l) => `${l}-la ${b} washing machine spin cycle-ku munnadi water veliya pogala, door glass varaikkum thanni nikkudhu. Technician emergency pipe pottu water drain panni filter open pannapo 5-rupee coin and saree nool pump-la maati irundhadhu. Debris eduthu clean pannadhum water fast-ah drain aachu.`
  },
  {
    id: "wm_suspension_rod_vibration",
    topic: "suspension rod heavy vibration",
    headingStyles: [
      (b, l) => `${b} Washing Machine Walked Across the Bathroom Floor on High Spin`,
      (b, l) => `Four Hydraulic Damper Rods Swapped on ${b} Top Load Washer`,
      (b, l) => `Why the ${b} Drum Banged Violently Against Metal Walls During Spin`,
      (b, l) => `Smooth and Vibration-Free 800 RPM Spin Restored on ${b} Drum`,
      (b, l) => `Snapped Damper Spring Bushing Replaced on ${b} in ${l}`,
      (b, l) => `${b} Top Load Washer Emitted Terrifying Thuds Whenever Spin Started`,
      (b, l) => `In ${l}, ${b} Machine Tub Tilted Dangerously Off-Center Under Load`,
      (b, l) => `Suspension Damper Rod Replacement and Tub Leveling on ${b} Washer`
    ],
    en: (b, l) => `Customer in ${l} complained that their ${b} top load washer shook violently and walked three feet across the bathroom floor whenever reaching spin speed. The technician checked the inner tub balance and found one corner hydraulic spring damper had snapped its plastic seat, tilting the tub. Replaced the complete set of four suspension rods with fresh damping grease, eliminating all banging.`,
    ta: (b, l) => `${l}-la ${b} top load washer high-speed spin-la bayangarama aadi bathroom thara mela nagarndhu pochu. Suspension rod spring seat udanju tub oru pakkam saanjirundhadhu. 4 new damper rods maathi grease panna piragu tub smooth-ah silent-ah spin aagudhu.`
  },
  {
    id: "wm_water_inlet_valve_scale",
    topic: "water inlet valve scale clog",
    headingStyles: [
      (b, l) => `Water Trickled into ${b} Wash Tub at Drop-by-Drop Speed`,
      (b, l) => `Hard Water Calcium Scale Cleaned from ${b} Inlet Solenoid Valve`,
      (b, l) => `Why the ${b} Wash Cycle Took Over 45 Minutes Just to Fill Water`,
      (b, l) => `Rapid Three-Minute Drum Fill Restored on ${b} Washing Machine`,
      (b, l) => `Burnt Dual Solenoid Coil Replaced on ${b} Washer in ${l}`,
      (b, l) => `${b} Washing Machine Beeped Low Water Pressure Error Repeatedly`,
      (b, l) => `In ${l}, ${b} Machine Stood Waiting for Water for Nearly an Hour`,
      (b, l) => `Double-Solenoid Water Inlet Valve Replacement on ${b} Washer`
    ],
    en: (b, l) => `In ${l}, a ${b} washing machine took over forty minutes to fill water, beeping with a 4C water error before agitation could begin. Bhavani borewell water had deposited heavy calcium scale on the dual-solenoid filter screen, and one coil had open-circuited. Technician replaced the inlet valve assembly, cleaned the tap coupling, and verified strong dual-stream water flow.`,
    ta: (b, l) => `${l}-la ${b} washer-la thanni romba slow-ah sotu sot-ah vilundhadhu, fill aagave 45 mins aachu. Borewell uppu thanni nala inlet valve mesh block aagirundhadhu. New dual solenoid valve maathi tap connection clean pannom, brisk water intake thirumbi vandhadhu.`
  },
  {
    id: "wm_door_lock_ptc_switch",
    topic: "door lock PTC switch latch",
    headingStyles: [
      (b, l) => `Front Door on ${b} Washer Refused to Open and Trapped Wet Laundry Inside`,
      (b, l) => `Thermal PTC Interlock Switch Replaced on ${b} Front Load Washer`,
      (b, l) => `Why ${b} Pulling the Door Handle Flashed Error Code dE on Panel`,
      (b, l) => `Safe Manual Door Release and Crisp Latching Action Restored on ${b}`,
      (b, l) => `Burnt Door Interlock Sensor Contacts Swapped on ${b} in ${l}`,
      (b, l) => `${b} Front Load Finished Cycle but Kept Laundry Held Hostage`,
      (b, l) => `In ${l}, ${b} Washer Door Lock Mechanism Jammed Permanently Shut`,
      (b, l) => `Electronic Door Interlock Switch and Latch Assembly on ${b} Washer`
    ],
    en: (b, l) => `Customer in ${l} was panicked because clean wet clothes were trapped inside their ${b} front loader after cycle completion, with the handle refusing to budge. Our technician arrived, activated the emergency safety release latch behind the bottom filter door to safely retrieve the laundry, then inspected the bi-metal PTC switch. Found contacts burnt. Installed an original interlock switch, ensuring safe locking and unlocking.`,
    ta: (b, l) => `${l}-la cycle mudinjum ${b} front load door open aagama thoni ulla maatikichu, dE error kaatuchu. Bottom emergency catch vachi door open panni thuniyai eduthom. Burnt PTC door lock switch maathunadhum smooth latching start aachu.`
  },
  {
    id: "wm_drum_bearing_roaring_noise",
    topic: "drum bearing roaring noise",
    headingStyles: [
      (b, l) => `Loud Jet Engine Roar on ${b} Washer Echoed from Drum During Spin Sequence`,
      (b, l) => `Corroded High-Speed Ball Bearings and Lip Seal Swapped on ${b}`,
      (b, l) => `Why ${b} Spin Speed Sounded Like an Aircraft Taking Off in the Flat`,
      (b, l) => `Whisper-Quiet 1200 RPM High-Speed Spinning Restored on ${b} Drum`,
      (b, l) => `Rusty Water Leakage Under Outer Tub Sealed on ${b} in ${l}`,
      (b, l) => `${b} Front Loader Drum Developed Heavy Play and Harsh Metallic Grind`,
      (b, l) => `In ${l}, ${b} Drum Bearings Corroded from Detergent Seal Leakage`,
      (b, l) => `Stainless Drum Shaft Bearings and Oil Seal Rebuild on ${b} Washer`
    ],
    en: (b, l) => `In ${l}, a resident noticed their ${b} front loader sounded like a jet engine during high spin. Water had seeped past the worn rubber lip seal over several months, washing grease from the twin ball bearings and rusting them solid. The technician disassembled the split tub, fitted two genuine SKF grade bearings with a double-lip silicone seal, and the drum spun whisper-quiet.`,
    ta: (b, l) => `${l}-la ${b} front load 1000 RPM spin-la jet engine flight maadhiri bayangara roar saththam pottadhu. Tub seal leak aagi ball bearings thuru pudichirundhadhu. Outer tub split panni new SKF bearings and oil seal pottu fix pannom. Super silent-ah spin aagudhu.`
  },
  {
    id: "wm_pulsator_spline_wear",
    topic: "pulsator wash plate spline wear",
    headingStyles: [
      (b, l) => `${b} Motor Spun Rapidly but Clothes Floated Motionless Inside Tub`,
      (b, l) => `Stripped Aluminum Pulsator Spline Bushing Swapped on ${b} Washer`,
      (b, l) => `Why the ${b} Agitator Plate Failed to Turn Under Weight of Wet Laundry`,
      (b, l) => `Strong Multi-Directional Scrubbing Action Restored on ${b} Top Load`,
      (b, l) => `Worn Agitator Center Bolt and Spline Replaced on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Motor Hummed but Wash Plate Slipped Completely`,
      (b, l) => `In ${l}, ${b} Top Load Washer Lost All Scrubbing and Vortex Power`,
      (b, l) => `Pulsator Agitator Disc and Drive Shaft Spline Servicing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called because the motor in their ${b} top load machine turned energetically, but bedsheets remained completely motionless inside the water. The technician unscrewed the center cap and found the cast-aluminum spline teeth inside the plastic pulsator plate had stripped completely round. Installed an original replacement pulsator disc with fresh brass insert bolt, restoring full tumbling vortex action.`,
    ta: (b, l) => `${l}-la ${b} top load motor odudhu aana ulla thuni suthama aadaama apdiye nikkudhu. Pulsator plate center teeth theinjurundhadhu. New pulsator disc and center bolt maathunadhum thuni nalla suzhandhu wash aachu.`
  },
  {
    id: "wm_drive_belt_slipping",
    topic: "drive belt slipping loose",
    headingStyles: [
      (b, l) => `Sharp Screeching on ${b} Washer Belt Whenever Washer Started Tumbling`,
      (b, l) => `Slack and Cracked V-Belt Swapped on ${b} Semi-Automatic Washer`,
      (b, l) => `Why the ${b} Wash Tub Hesitated to Pick Up Speed Under Heavy Load`,
      (b, l) => `Instant Torque Transfer and Silent Drum Agitation Restored on ${b}`,
      (b, l) => `Loose Motor Mounting Bracket Re-aligned and Tensioned on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Motor Spun Fast but Drum Stalled Intermittently`,
      (b, l) => `In ${l}, ${b} Washer Drive Belt Showed Severe Rubber Dust Wear`,
      (b, l) => `Heavy-Duty Poly-V Drive Belt Fitting and Pulley Alignment on ${b}`
    ],
    en: (b, l) => `In ${l}, homeowner heard a sharp rubber screeching noise whenever their ${b} machine attempted to tumble wet towels. The technician opened the rear inspection sheet and found fine black rubber powder coating the base; the V-belt was slack and cracked, slipping on the large plastic drum pulley. Installed an exact-profile grooved drive belt, adjusted motor bracket tension, and the drum spun smoothly without slip.`,
    ta: (b, l) => `${l}-la ${b} washer load eduthu suzhalumbodhu rubber screech saththam vandhudhu. Back cover open pannapo belt loose aagi rubber podi kottirundhadhu. New heavy-duty V-belt pottu tension set pannom, slip aagama nalla turn aagudhu.`
  },
  {
    id: "wm_pcb_relay_solder_burn",
    topic: "pcb relay solder burn",
    headingStyles: [
      (b, l) => `Control Panel on ${b} Washer Failed to Power Following Sudden Power Flicker`,
      (b, l) => `Burnt Motor Power Relay Re-soldered on ${b} Inverter Main Board`,
      (b, l) => `Why the ${b} Washing Machine Showed Zero Electrical Life on Display`,
      (b, l) => `Instant Console Startup and Smooth Cycle Execution Restored on ${b}`,
      (b, l) => `Swollen 450V Electrolytic Filter Capacitor Swapped on ${b} in ${l}`,
      (b, l) => `${b} Smart Washer Shut Down Completely During Wash Rinse Transition`,
      (b, l) => `In ${l}, ${b} Motherboard Suffered Lightning Surge Relay Burn`,
      (b, l) => `Motherboard Inverter Power Stage and Relay Circuit Repair on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called when a thunderstorm knocked out their ${b} inverter washing machine, leaving the display dark and buttons unresponsive. The technician extracted the motherboard from the top console and found the 12V DC power relay coil had dry-soldered and burned a track on the circuit board. Repaired the damaged copper track, fitted a fresh relay and filter capacitor, restoring complete operation.`,
    ta: (b, l) => `${l}-la thunder surge vandhappo ${b} washing machine switch potalum on aagala, display dark. Motherboard-la 12V relay track burn aagirundhadhu. PCB track rebuild panni new relay maathunom, board save aagi machine on aachu.`
  },
  {
    id: "wm_pressure_switch_clog",
    topic: "pressure switch water level sensor",
    headingStyles: [
      (b, l) => `Water Kept Overfilling ${b} Washer Tub Without Stopping Agitation`,
      (b, l) => `Lint Scum Cleared from ${b} Pressure Sensor Air Chamber Tube`,
      (b, l) => `Why the ${b} Machine Began Dry Agitation Without Taking Any Water`,
      (b, l) => `Precise Automated Water Level Sensing Restored on ${b} Drum`,
      (b, l) => `Electronic Frequency Transducer Pressure Sensor Swapped on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Flashed Water Level Error 1E Continuously`,
      (b, l) => `In ${l}, ${b} Washer Tub Overflowed Soapy Water Across Balcony`,
      (b, l) => `Water Level Sensor Pressure Chamber and Transducer Servicing on ${b}`
    ],
    en: (b, l) => `In ${l}, customer noticed their ${b} machine filled water all the way to the brim without starting agitation, flashing an overfill warning. The technician disconnected the transparent pressure tube from the outer tub nipple and found lint scum had formed a plug in the air chamber, preventing air pressure from reaching the sensor diaphragm. Flushed the chamber, blew out the hose, and calibrated the sensor.`,
    ta: (b, l) => `${l}-la ${b} washer-la thanni full-ah fill aagi overflow aagudhu aana wash start aagala, 1E error. Pressure tube kulla lint azhukku adaichi air block aagirundhadhu. Chamber flush panni sensor tube clear pannom, correct level-la water cut aachu.`
  },
  {
    id: "wm_spin_brake_wire_snapped",
    topic: "spin brake wire snapped",
    headingStyles: [
      (b, l) => `${b} Spin Basket Took Two Full Minutes to Stop After Lifting Top Lid`,
      (b, l) => `Snapped Stainless Steel Brake Cable Replaced on ${b} Dryer Basket`,
      (b, l) => `Why the ${b} Spin Tub Kept Whirling at Dangerous Speeds When Opened`,
      (b, l) => `Instant Three-Second Emergency Spin Braking Restored on ${b} Machine`,
      (b, l) => `Corroded Brake Shoe Lining and Tension Spring Serviced on ${b} in ${l}`,
      (b, l) => `${b} Semi-Automatic Spin Lid Safety Switch Lost All Mechanical Grip`,
      (b, l) => `In ${l}, ${b} Dryer Basket Refused to Disengage Brake Shoe Friction`,
      (b, l) => `Mechanical Spin Safety Brake Cable and Shoe Lining Overhaul on ${b}`
    ],
    en: (b, l) => `Customer in ${l} called because lifting the lid of their ${b} semi-automatic spin dryer did not stop the basket, creating a safety hazard for family members. The technician inspected the rear mechanical linkage and found the nylon-sheathed brake tension wire had snapped near the lower motor spring. Fitted a heavy-duty stainless brake cable, adjusted spring tension, and the drum halted within three seconds of lid lift.`,
    ta: (b, l) => `${l}-la ${b} semi-automatic spin lid open pannalum drum fast-ah suthitte nikkama odudhu, safety risk. Pinpakkam irukra brake wire cut aagirundhadhu. New stainless brake cable pottu spring tension set pannom. Lid thookuna 3 seconds-la drum stop aagudhu.`
  },
  {
    id: "wm_detergent_drawer_siphon_clog",
    topic: "detergent drawer fabric softener siphon clog",
    headingStyles: [
      (b, l) => `Conditioner Left Behind in ${b} Dispenser Drawer Cup`,
      (b, l) => `Hardened Detergent Sludge Descaled from ${b} Dispenser Siphon Cap`,
      (b, l) => `Why ${b} Soapy Water Poured Down the Front Fascia from Drawer Box`,
      (b, l) => `Clean and Thorough Flushing of Laundry Detergent Restored on ${b}`,
      (b, l) => `Choked Ceiling Spray Jets Poked Clean on Drawer Housing on ${b} in ${l}`,
      (b, l) => `${b} Front Load Dispenser Overflowed Soapy Water onto Bathroom Tiles`,
      (b, l) => `In ${l}, ${b} Washer Detergent Drawer Trapped Solidified Powder Gunk`,
      (b, l) => `Dispenser Housing Spray Nozzle Descaling and Siphon Cleaning on ${b}`
    ],
    en: (b, l) => `In ${l}, customer noticed laundry conditioner was never being flushed into the tub, leaving thick dried sludge inside the ${b} dispenser tray. The technician removed the drawer, descaled the tiny siphon cap with hot water, and poked open blocked ceiling water spray nozzles using a fine needle. Water now showers cleanly across all compartments during each rinse stage.`,
    ta: (b, l) => `${l}-la ${b} washer detergent drawer-la comfort liquid apdiye nikkudhu, wash kulla pogala. Siphon cap and mela irukra spray holes-la salt adaichi irundhadhu. Hot water pottu descale panni clean pannom, detergent ippo clean-ah flush aagudhu.`
  },
  {
    id: "wm_unlevel_rubber_feet_bang",
    topic: "unlevel rubber feet tub bang",
    headingStyles: [
      (b, l) => `${b} Machine Vibrated Furiously and Slid Across Tiled Laundry Floor`,
      (b, l) => `Threaded Anti-Vibration Rubber Leveling Legs Adjusted on ${b} Base`,
      (b, l) => `Why ${b} One Diagonal Corner Wobbled on the Sloped Drainage Floor`,
      (b, l) => `Rock-Solid Floor Stability and Quiet Spin Cycling Restored on ${b}`,
      (b, l) => `Rusted Leveling Foot Stud Replaced with High-Density Damper on ${b} in ${l}`,
      (b, l) => `${b} Front Load Banged Against the Bathroom Wall on Every Spin Cycle`,
      (b, l) => `In ${l}, ${b} Machine Rocked Diagonally Under Empty Tub Weight`,
      (b, l) => `Spirit-Level Chassis Balancing and Rubber Damper Pad Fitting on ${b}`
    ],
    en: (b, l) => `Customer in ${l} complained that their new ${b} front loader migrated across the room during fast spin cycles, banging the wall. The technician used a precision spirit level and found the front-right adjustable foot was floating 6mm off the sloping tile floor. Adjusted the threaded locking nut, seated all four corners firmly, and installed high-grip anti-vibration rubber isolation pads under the feet.`,
    ta: (b, l) => `${l}-la ${b} front load spin aagumbodhu thara mela aadi bathroom wall-la thattuchu. Oru foot thara mela padama gap irundhadhu. Spirit level vachi 4 legs balance panni anti-vibration rubber pads potadhum vibration full-ah calm aachu.`
  },
  {
    id: "wm_carbon_brush_sparking",
    topic: "carbon brush motor sparking",
    headingStyles: [
      (b, l) => `Burning Odour and Bright Sparks Appeared Beneath ${b} Washer Drum`,
      (b, l) => `Pair of Worn Copper-Graphite Motor Carbon Brushes Swapped on ${b}`,
      (b, l) => `Why the ${b} Motor Lacked Torque to Spin Wet Clothes and Stalled Out`,
      (b, l) => `High-Torque Smooth Drum Rotation Restored on ${b} Universal Motor`,
      (b, l) => `Carbon Dust Cleaned from Motor Commutator Segments on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Drum Jerked Weakly then Stopped with a Burn Smell`,
      (b, l) => `In ${l}, ${b} Motor Carbon Brushes Wore Down to Bare Shunt Wire`,
      (b, l) => `Universal Drive Motor Carbon Brush Fitting and Commutator Polish on ${b}`
    ],
    en: (b, l) => `In ${l}, customer observed orange sparks flashing beneath their ${b} machine when the drum attempted to accelerate into spin. The technician pulled out the universal drive motor and found the carbon brushes were worn down to the copper braided wire, scoring the copper commutator. Cleaned commutator grooves, polished contacts with fine grit cloth, and installed a fresh pair of carbon brushes.`,
    ta: (b, l) => `${l}-la ${b} washer drum spin aagumbodhu keezha sparks and burning smell vandhudhu. Motor carbon brushes theinjurundhadhu. Commutator clean panni new graphite carbon brushes maathunom, motor nalla torque-oda silent-ah odudhu.`
  },
  {
    id: "wm_drain_hose_siphon_loop",
    topic: "drain hose kink and siphon pipe",
    headingStyles: [
      (b, l) => `Water Poured from ${b} Discharge Pipe as Fast as It Filled In`,
      (b, l) => `Anti-Siphon 65cm Arch Bracket Clamped onto ${b} Drain Hose Setup`,
      (b, l) => `Why the ${b} Tub Refused to Hold Water for More Than Five Seconds`,
      (b, l) => `Proper Water Retention and Automatic Pumping Restored on ${b} Drum`,
      (b, l) => `Kinked Flexible Corrugated Discharge Hose Straightened on ${b} in ${l}`,
      (b, l) => `${b} Front Load Never Began Washing Due to Gravity Water Siphoning`,
      (b, l) => `In ${l}, ${b} Drain Pipe Flat on Floor Emptied Tub Uncontrollably`,
      (b, l) => `Discharge Pipe Height Realignment and Anti-Siphon Loop Fitting on ${b}`
    ],
    en: (b, l) => `Customer in ${l} was baffled that water poured continuously out of their ${b} front loader into the drain trap without staying in the drum. The technician observed that the installer had laid the discharge hose flat on the floor into an open floor drain without the mandatory 65cm anti-siphon high loop. Clamped the hose securely to the rear retention bracket, preventing gravity siphoning.`,
    ta: (b, l) => `${l}-la ${b} front load-la thanni oothuna udane drain pipe vazhiya veliya poitte irundhadhu, machine-la nikala. Drain hose thara mela flat-ah kedandhadhula siphon aachu. 65cm height loop pottu clamp pannom, water holding problem solved.`
  },
  {
    id: "wm_inverter_hall_sensor",
    topic: "inverter motor hall sensor tachometer",
    headingStyles: [
      (b, l) => `${b} Direct Drive Drum Jerked Twice Back and Forth Then Stopped Cold`,
      (b, l) => `Magnetic Rotor Position RPS Sensor Swapped on ${b} Direct Drive`,
      (b, l) => `Why the ${b} Motor Flashed Overload Error LE After Three Hesitant Shakes`,
      (b, l) => `Whisper-Smooth Dual-Direction Agitation Restored on ${b} Inverter`,
      (b, l) => `Corroded Hall Sensor Harness Connector Cleaned on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Motor Stuttered and Refused to Complete Agitation`,
      (b, l) => `In ${l}, ${b} Direct Drive Stator Lost Rotor Position Signal`,
      (b, l) => `Direct Drive Motor Stator Hall Effect Sensor Replacement on ${b}`
    ],
    en: (b, l) => `In ${l}, a ${b} direct-drive washer shuddered twice and halted with an LE error code on the digital panel. The technician removed the rear stator cover and tested the magnetic Hall effect sensor assembly. One of the twin solid-state pickup switches was open-circuited. Replaced the Hall sensor unit, seated the wiring harness firmly, and the drum rotated with whisper-smooth rhythm.`,
    ta: (b, l) => `${l}-la ${b} direct drive washer drum renduthadava thadumaari LE error kaatuchu. Stator mela irukra Hall effect rotor position sensor fail aagirundhadhu. New RPS sensor maathi harness lock pannom, drum whisper-silent-ah suzhaludhu.`
  },
  {
    id: "wm_door_bellows_gasket_tear",
    topic: "door bellows boot gasket tear leak",
    headingStyles: [
      (b, l) => `Soapy Foam Puddled on the Floor from Front Glass Door Rim of ${b}`,
      (b, l) => `Punctured Grey Silicone Door Bellows Gasket Replaced on ${b} Washer`,
      (b, l) => `Why ${b} Water Dripped from the Lower Fold of the Drum Rubber Boot`,
      (b, l) => `Airtight Door Rim Sealing and Zero Water Spillage Restored on ${b}`,
      (b, l) => `Inner Spring Clamp Ring Re-seated Around Drum Lip on ${b} in ${l}`,
      (b, l) => `Torn Rubber Gasket Caught on Trouser Zipper During Spin on ${b}`,
      (b, l) => `In ${l}, ${b} Front Load Sprayed Water from Lower Door Perimeter`,
      (b, l) => `Door Bellows Boot Gasket and Dual Clamp Spring Replacement on ${b}`
    ],
    en: (b, l) => `Customer on ${b} in ${l} found puddles of soapy water collecting on their balcony floor during every wash cycle. Inspection showed a 1-inch tear along the lower fold of the rubber door bellows gasket, damaged by a pant zipper caught during spin. Technician removed the outer clamp spring, installed a genuine grey silicone door gasket, locked both retention rings, and ran a leak-free test cycle.`,
    ta: (b, l) => `${l}-la ${b} front load door glass keezha thanni leak aagi floor nananjiduchu. Pant zip maati rubber door bellows pichi poiduchu. New silicone door gasket pottu inner outer spring clamp lock pannom, leakage full-ah stop aachu.`
  },
  {
    id: "wm_spin_motor_capacitor_weak",
    topic: "spin motor capacitor weak",
    headingStyles: [
      (b, l) => `${b} Spin Dryer Hummed Loudly but Refused to Spin Without a Hand Push`,
      (b, l) => `Weak 5uF Motor Run Capacitor Replaced on ${b} Semi-Automatic`,
      (b, l) => `Why ${b} Clothes Came Out Heavy and Sopping Wet After Full Dryer Timer`,
      (b, l) => `High-Speed Instant Dryer Acceleration Restored to ${b} Spin Basket`,
      (b, l) => `Degraded Dual Motor Run Capacitor Swapped on ${b} in ${l}`,
      (b, l) => `${b} Spin Basket Lacked Starting Torque to Rotate Wet Bed Linens`,
      (b, l) => `In ${l}, ${b} Spin Motor Capacitance Dropped from 5uF Down to 1.8uF`,
      (b, l) => `Dual-Section Motor Run Capacitor Replacement on ${b} Semi-Automatic`
    ],
    en: (b, l) => `In ${l}, customer noticed their ${b} semi-automatic dryer hummed and would only spin if rotated by hand first. Technician tested the twin-tub dual run capacitor with a capacitance meter and found the 5uF spin winding rating had dropped to barely 1.8uF. Replaced with a heavy-duty Epcos metalized film capacitor, instantly restoring full spin-up torque and water extraction.`,
    ta: (b, l) => `${l}-la ${b} semi-automatic spin tub humming aagudhu aana kaiyala thalluna thaan suthudhu. Capacitor test pannapo 5uF irukradhu 1.8uF-ku drop aagirundhadhu. New heavy-duty capacitor maathunadhum drum udane high-speed-la spin aachu.`
  },
  {
    id: "wm_rat_bite_wiring_harness",
    topic: "rat bite internal wiring harness",
    headingStyles: [
      (b, l) => `Multiple Diagnostic Error Codes Flashed Rapidly on ${b} Washer Panel`,
      (b, l) => `Rodent-Chewed Sensor Wiring Loom Spliced and Heat-Shrunk on ${b}`,
      (b, l) => `Why the ${b} Machine Stopped Working Overnight with Erratic Beeping`,
      (b, l) => `Flawless Multi-Sensor Signal Transmission Restored on ${b} Washer`,
      (b, l) => `Perforated Stainless Steel Rat-Guard Mesh Installed on ${b} at ${l}`,
      (b, l) => `${b} Washing Machine Suffered Severed Sensor Cables Behind Rear Plate`,
      (b, l) => `In ${l}, ${b} Machine Internal Wiring Harness Was Chewed by Rats`,
      (b, l) => `Internal Cable Loom Splicing and Rodent Barrier Installation on ${b}`
    ],
    en: (b, l) => `In ${l}, a ${b} top load washer suddenly stopped working overnight with multiple error codes flashing. On removing the back sheet, technician discovered rats had bitten through three color-coded motor sensor wires and the pressure switch line. Soldered the severed connections, protected them with heat-shrink tubing, and fitted a stainless steel rat-guard mesh under the machine base to prevent future entry.`,
    ta: (b, l) => `${l}-la ${b} washer overnight-la error codes pottu on aagala. Back plate open pannapo eli ulla poyi motor and sensor wires-ah kadichi thunichirundhadhu. Wires solder panni heat-shrink sleeve pottu bottom-la stainless rat mesh cover set pannom.`
  },
  {
    id: "wm_drain_valve_bellow_seal",
    topic: "drain valve bellow seal semi automatic",
    headingStyles: [
      (b, l) => `Soapy Water Poured from ${b} Wash Tub as Fast as Tap Ran`,
      (b, l) => `Bent Safety Pin Wedged in ${b} Rubber Drain Bellows Cup Extracted`,
      (b, l) => `Why the ${b} Wash Tub Refused to Hold Water Even with Valve Closed`,
      (b, l) => `Airtight Rubber Cup Seal and Water Holding Restored on ${b} Washer`,
      (b, l) => `Rusted Drain Valve Return Spring Replaced on ${b} in ${l}`,
      (b, l) => `${b} Semi-Automatic Washer Leaked Soapy Detergent Continuously`,
      (b, l) => `In ${l}, ${b} Wash Tub Poppet Valve Failed to Seat Properly`,
      (b, l) => `Drain Poppet Rubber Bellows and Tension Spring Servicing on ${b}`
    ],
    en: (b, l) => `Customer in ${l} was frustrated that water poured straight out of their ${b} semi-automatic wash tub into the drain without holding. Technician opened the rear drain valve chamber and found a bent safety pin wedged across the rubber seal seat, preventing the spring from closing the cup. Removed the pin, replaced the aged rubber bellows cup, and greased the linkage for tight shut-off.`,
    ta: (b, l) => `${l}-la ${b} semi-automatic wash tub-la thanni nikala, pipe vazhiya oothitte irundhadhu. Drain valve kulla bent aana safety pin maati rubber cup moodama irundhadhu. Pin eduthu new rubber bellows cup maathunom, water tight-ah ninuduchu.`
  },
  {
    id: "wm_water_heater_calcification",
    topic: "water heater element calcification",
    headingStyles: [
      (b, l) => `Water Failed to Heat on ${b} Up During 60°C Hygiene Steam Wash Cycle`,
      (b, l) => `Encrusted Calcium Scale Chiseled Off 2000W Heater Element on ${b}`,
      (b, l) => `Why the ${b} Digital Console Flashed Heating Error Code tE Mid-Wash`,
      (b, l) => `Steaming Hot Sanitizing Wash Temperatures Restored on ${b} Drum`,
      (b, l) => `Burnt Nickel-Coated Heating Coil Swapped for Genuine Part on ${b} in ${l}`,
      (b, l) => `${b} Front Loader Washed Clothes in Cold Water Despite Hot Setting`,
      (b, l) => `In ${l}, ${b} Machine Immersion Heater Suffered Severe Scale Coating`,
      (b, l) => `Internal Drum Water Heating Element and NTC Sensor Servicing on ${b}`
    ],
    en: (b, l) => `In ${l}, a ${b} front loader showed a tE heating error code whenever customer selected the 60-degree hygiene steam wash. The technician extracted the 2000W heating coil from the base of the outer drum and found it heavily coated in a thick white calcium crust, with open element continuity. Fitted a brand-new nickel-plated heating element and verified quick water heating to set temperature.`,
    ta: (b, l) => `${l}-la ${b} front load 60 degree hot wash pottapo tE error vandhu wash stop aachu. Drum keezha irukra heating coil mela uppu adaichi coil burn aagirundhadhu. New heavy-duty heating element maathi NTC sensor test pannom, steam wash perfect-ah run aachu.`
  },
  {
    id: "wm_transit_bolts_vibration",
    topic: "transit bolts forgotten vibration",
    headingStyles: [
      (b, l) => `Brand New ${b} Washer Banged Violently Like a Jackhammer on Floor`,
      (b, l) => `Four Factory Shipping Transit Bolts Unbolted from ${b} Rear Panel`,
      (b, l) => `Why the ${b} Suspended Drum Could Not Absorb Spin Vibration Naturally`,
      (b, l) => `Whisper-Quiet Floating Suspension Action Restored to ${b} Front Load`,
      (b, l) => `Locked Transit Plastic Spacers Extracted on ${b} at ${l}`,
      (b, l) => `Recently Relocated ${b} Machine Nearly Jumped Across the Room`,
      (b, l) => `In ${l}, ${b} Front Loader Drum Was Bolted Solid to the Steel Chassis`,
      (b, l) => `Installation Inspection and Rear Transit Locking Bolt Removal on ${b}`
    ],
    en: (b, l) => `A customer in ${l} who recently moved apartments reported that their ${b} front load was vibrating violently with terrifying thuds on spin. Our technician inspected the rear panel immediately and discovered all four factory shipping transit bolts were still bolted tightly, locking the drum directly to the steel chassis. Removed all transit bolts and rubber spacers—the suspended drum floated smoothly and spin was completely silent.`,
    ta: (b, l) => `${l}-la pudhusa maathuna ${b} front load spin cycle-la bayangarama kudhichu thattuchu. Pinpakkam 4 shipping transit bolts kazhatama irundhadhu. Bolts and plastic spacers kazhatunadhum drum floating suspension-la silent-ah spin aachu.`
  },
  {
    id: "wm_tub_spider_arm_corrosion",
    topic: "tub spider arm corrosion breakage",
    headingStyles: [
      (b, l) => `Inner Drum Dropped Down on ${b} Washer and Scraped Loudly Against Glass Door Lip`,
      (b, l) => `Corroded Tri-Arm Aluminum Spider Flange Rebuilt on ${b} Drum`,
      (b, l) => `Why ${b} Heavy Laundry Caused a Horrible Metallic Screech on Spin`,
      (b, l) => `Concentric Friction-Free Drum Rotation Restored on ${b} Front Load`,
      (b, l) => `Broken Spider Arm Leg Replaced with New Casting on ${b} in ${l}`,
      (b, l) => `${b} Washing Machine Inner Basket Wobbled Dangerously Inside Outer Tub`,
      (b, l) => `In ${l}, ${b} Stainless Drum Suffered Cast-Flange Metal Fatigue`,
      (b, l) => `Drum Spider Flange Bracket and Center Shaft Realignment on ${b}`
    ],
    en: (b, l) => `In ${l}, a ${b} front loader drum had dropped 2 inches down and began scraping the glass door and rubber gasket with screeching noise. Dismantling the drum revealed that one leg of the cast-aluminum spider arm had snapped due to chemical corrosion from high-detergent use. Replaced the three-arm spider bracket, aligned the drum shaft, and tightened all flange bolts for flawless concentric rotation.`,
    ta: (b, l) => `${l}-la ${b} drum keezha irangi glass door and gasket mela urasi screech saththam pottadhu. Outer tub open pannapo aluminum spider arm oru leg udanjirundhadhu. New cast spider bracket pottu drum center align pannom, smooth-ah rotate aagudhu.`
  },
  {
    id: "wm_gearbox_clutch_replacement",
    topic: "gearbox clutch assembly replacement",
    headingStyles: [
      (b, l) => `Grinding Gear Sound Echoed During Wash Cycle on ${b} Top Load`,
      (b, l) => `Worn Epicyclic Reduction Gearbox Swapped on ${b} Top Load Washer`,
      (b, l) => `Why the ${b} Shifter Ratchet Pawl Failed to Engage the Spin Basket`,
      (b, l) => `Smooth Torque Transition Between Wash and Spin Modes Restored on ${b}`,
      (b, l) => `Leaking Gearbox Oil Seal and Rounded Clutch Teeth Fixed on ${b} in ${l}`,
      (b, l) => `${b} Washer Motor Ran but Drum Remained Trapped in Slow Agitation`,
      (b, l) => `In ${l}, ${b} Transmission Mechanism Developed Severe Gear Stripping`,
      (b, l) => `Transmission Reduction Gearbox and Clutch Assembly Overhaul on ${b}`
    ],
    en: (b, l) => `Customer in ${l} reported a harsh grinding mechanical gear sound coming from beneath their ${b} top loader whenever it switched from agitation to spin mode. Technician found black oil leaking from the reduction gearbox seal and rounded clutch teeth. Replaced the entire transmission gearbox assembly, greased the shifter lever, and confirmed smooth torque transfer in both wash and spin modes.`,
    ta: (b, l) => `${l}-la ${b} top load agitation-la irundhu spin-ku pogumbodhu grinding mechanical gear saththam ketuchu. Gearbox seal leak aagi oil kottirundhadhu. New complete transmission gearbox maathunadhum wash and spin smooth-ah switch aachu.`
  },
  {
    id: "wm_touch_display_unresponsive",
    topic: "electronic touch display panel unresponsive",
    headingStyles: [
      (b, l) => `Touch Buttons Refused to Respond to Fingertip Touches on ${b} Panel`,
      (b, l) => `Moisture-Corroded Capacitive Ribbon Cleaned and Resealed on ${b}`,
      (b, l) => `Why the ${b} Cycle Selector Knob Spun Without Registering Program Changes`,
      (b, l) => `Instant and Sensitive Fingertip Program Selection Restored on ${b}`,
      (b, l) => `Condensation Between Touch Membrane and Acrylic Bezel Dried on ${b} in ${l}`,
      (b, l) => `${b} Smart Washer Beeped Erratically with Child Lock Icon Flashing`,
      (b, l) => `In ${l}, ${b} Front Fascia Electronics Were Shorted by Steam`,
      (b, l) => `Front Control Console Touch Ribbon and Moisture Shielding on ${b}`
    ],
    en: (b, l) => `In ${l}, high bathroom steam had penetrated the front console of a ${b} washing machine, causing the touch controls to beep erratically and refuse user touches. Technician disassembled the fascia panel, dried out condensation between the capacitive sensor pads and plastic overlay, cleaned ribbon cable contacts with isopropanol, and applied silicone conformal seal. All touch buttons now respond crisply.`,
    ta: (b, l) => `${l}-la bathroom steam nala ${b} washer front touch buttons press pannalum respond pannala, beep nu saththam mattum vandhudhu. Touch panel open panni moisture dry panni contacts clean pannom. Touch sensitivity ippo perfect-ah irukku.`
  }
];
