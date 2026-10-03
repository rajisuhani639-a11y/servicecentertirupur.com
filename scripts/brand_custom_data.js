// scripts/brand_custom_data.js
// Custom features, specific error codes, and technologies for all brands

const BRAND_DETAILS = {
  'Samsung': {
    features: 'Digital Inverter Compressor, EcoBubble wash, Twin Cooling Plus, SpaceMax, Curd Maestro, WindFree AC, Crystal 4K UHD',
    errors: { wm: '4E (water inlet), 5E (drain failure), dC (door open), UE (unbalanced load)', fridge: '22E (fan error), 5E (defrost sensor), 8E (ice maker sensor)', ac: 'C1 / 54 (outdoor fan), E4 / 60 (temperature sensor), C4 (heat exchanger sensor)', tv: 'Red standby light blinks 2 times or 5 times' },
    oldVsNew: 'Older Samsung models used mechanical timers and belt-driven motors, while newer models feature BLDC digital inverter drive and intelligent PCB sensors.'
  },
  'LG': {
    features: 'AI Direct Drive (AI DD), Smart Inverter Compressor, ThinQ Wi-Fi, DoorCooling+, TurboWash 360, Dual Inverter AC, OLED evo, WebOS',
    errors: { wm: 'IE (water inlet), OE (drain issue), dE (door lock), UE (unbalance), LE (motor overload)', fridge: 'Er FF (freezer fan), Er dH (defrost heater), Er IF (ice fan)', ac: 'CH05 (communication error), CH10 (BLDC fan lock), CH21 (IPM peak current)', tv: 'LG WebOS boot loop or red light blinking 3 times' },
    oldVsNew: 'Older LG washers relied on belt-pulley assemblies; newer AI DD models have the motor mounted directly to the drum with 6 Motion wash algorithms.'
  },
  'Whirlpool': {
    features: '6th Sense Technology, IntelliFresh Inverter, 360 BloomWash, Zeolite Drying, 3D Cool Inverter AC, MicroBlock Shield',
    errors: { wm: 'F02 (long drain), F06 (drive motor tachometer), F08 (heater fault)', fridge: 'Flashing 6th Sense LEDs or continuous beeping alarm', ac: 'E1 (room sensor), E5 (indoor coil sensor)', tv: 'Screen freeze on Whirlpool splash screen' },
    oldVsNew: 'Older Whirlpool top loaders used mechanical agitators; current BloomWash models use soft-spin pulsators with 6th Sense sensing.'
  },
  'Bosch': {
    features: 'EcoSilence Drive brushless motor, ActiveWater Plus, VarioDrum, AntiVibration side panels, VitaFresh German cooling, Serie 4 / 6 / 8',
    errors: { wm: 'E18 (drain pump clogged), E17 (water supply timeout), E29 (inlet valve failure), E43 (motor fault)', fridge: 'Alarm tone sounding with E1/E2 sensor codes', ac: 'E0 communication fault or F1 fan speed error', tv: 'N/A' },
    oldVsNew: 'Older Bosch European imports required specialized high-pressure valves; newer Indian assembly units are optimized for local Coimbatore water pressures.'
  },
  'IFB': {
    features: 'Aqua Energie water filter built-in, Cradle Wash for delicates, 3D Wash System, Ball Valve Tech, Triadic Pulsator, FastCool AC',
    errors: { wm: 'Err 1 / E01 (door latch error), Err 2 / E02 (drain failure), Err 3 / E03 (heater issue), Err 7 (motor speed error)', fridge: 'Door open chime or uneven cooling alarm', ac: 'E1 (sensor fault), F1 (compressor overload)', tv: 'N/A' },
    oldVsNew: 'Older IFB mechanical knob models like Elena and Senator Classic used mechanical program timers; current Smart models use microcontroller PCBs.'
  },
  'Godrej': {
    features: 'Edge Pro Inverter, Smart Motion wash, Anti-Bacterial Technology, Multi Inverter Compressor, Turbo Cooling, 100% Grooved Copper AC',
    errors: { wm: 'E1 (water level sensor error), E2 (drain timeout), E3 (unbalanced spin)', fridge: 'Continuous compressor click or internal LED light flickering', ac: 'F1 (indoor sensor), E3 (gas pressure drop)', tv: 'Display backlight flickering on startup' },
    oldVsNew: 'Traditional Godrej single-door direct cool fridges used simple mechanical bi-metal thermostats, whereas new multi-inverter models use NTC thermistors.'
  },
  'Voltas': {
    features: 'All-Weather Technology, Maha-Adjustable Inverter, Superdry Mode, High Ambient 52°C cooling, 100% Copper Condenser, 183V / 185V Vectra',
    errors: { wm: 'E1 inlet error, E2 drain error (Voltas Beko models)', fridge: 'E0 / E4 temperature thermistor deviation', ac: 'E1 (indoor room sensor), E2 (coil freeze sensor), E6 (outdoor unit communication)', tv: 'N/A' },
    oldVsNew: 'Older fixed-speed Voltas window and split units used heavy reciprocating compressors, while modern Vectra series use twin-rotary BLDC inverter motors.'
  },
  'Voltas Beko': {
    features: 'ProSmart Inverter Motor, AquaWave Drum, NeoFrost Dual Cooling, HarvestFresh 3-color light technology, FastFreeze',
    errors: { wm: 'E01 (water fill error), E03 (drain timeout), E05 (water heating issue)', fridge: 'E4 (defrost sensor fault)', ac: 'N/A', tv: 'N/A' },
    oldVsNew: 'Voltas Beko joint venture models feature European NeoFrost dual evaporator designs compared to older single-fan Voltas direct cool configurations.'
  },
  'Daikin': {
    features: 'Neo Swing Inverter Compressor, Coanda Airflow, PM 2.5 Filter, Econo Mode, Titanium Apatite filter, FTKM / FTKF Series',
    errors: { ac: 'U4 (communication between indoor & outdoor), A6 (fan motor locked), C9 (suction thermistor open), L5 (inverter compressor instantaneous overcurrent)', wm: 'N/A', fridge: 'N/A', tv: 'N/A' },
    oldVsNew: 'Classic Daikin non-inverter R22 units had robust heavy copper coils; current Neo Swing inverter models utilize R32 with electronic expansion valves (EEV).'
  },
  'Blue Star': {
    features: 'Precision Cooling Technology (0.1°C), Dual Rotor Inverter, Brushless DC Motor (BLDC), Anti-Corrosive Blue Fins, Heavy Commercial Deep Freezers',
    errors: { ac: 'EC (refrigerant leak detected), E1 (indoor sensor open), E6 (outdoor fan motor lock)', fridge: 'High temperature alarm in deep freezers', wm: 'N/A', tv: 'N/A' },
    oldVsNew: 'Older commercial Blue Star freezers used mechanical capillary expansion tubes, while newer models use digital micro-controllers with temperature readouts.'
  },
  'Carrier': {
    features: 'Hybridjet Inverter Technology, Flexicool 6-in-1 Inverter, Instacool Turbo, PM 2.5 Micron Filter, Hydrophilic Blue Fin, Ester Neo Series',
    errors: { ac: 'E1 (indoor PCB EEPROM error), E3 (indoor fan speed out of control), EC (refrigerant leakage detection)', wm: 'N/A', fridge: 'N/A', tv: 'N/A' },
    oldVsNew: 'Older Carrier Durafresh units used standard induction fan motors, whereas modern Flexicool units feature variable-frequency BLDC indoor and outdoor motors.'
  },
  'Hitachi': {
    features: 'Expandable Inverter Plus, Dual Gold Fin Condenser, FrostWash Self-Cleaning Technology, Penta Sensor System, Kashikoi / Yoshi Series',
    errors: { ac: 'Timer light blinks 1 to 9 times indicating outdoor fan lock, thermistor short, or inverter IPM peak protection', fridge: 'F0 02 / F0 04 sensor fault codes', wm: 'C1 (water fill), C2 (drain)' },
    oldVsNew: 'Older Hitachi Logicool units featured heavy cast iron compressors; newer Expandable models ramp up past 100% capacity during extreme Coimbatore summer days.'
  },
  'Mitsubishi': {
    features: 'Heavy Industries Jet Air Scroll, Electric Mr. Slim Inverter, PAM Inverter Control, Anti-Allergy Enzyme Filter, 12m Long Airflow',
    errors: { ac: 'Running lamp flashing twice (abnormal coil temperature), flashing 6 times (outdoor power transistor IPM trip)', fridge: 'Temperature warning beeper', wm: 'N/A', tv: 'N/A' },
    oldVsNew: 'Mitsubishi Electric non-inverter systems were renowned for lasting 15+ years; newer inverter models require precise electronic vacuuming before gas charging.'
  },
  'O-General': {
    features: 'Hyper Tropical Rotary Compressor, V-PAM Inverter Control, Coanda 3D Airflow, 100% Heavy-Gauge Copper Condenser, 55°C Extreme Heat Endurance',
    errors: { ac: 'Operation lamp and Timer lamp alternate blinking patterns representing high pressure trip, fan motor lock, or heat sink overheating', wm: 'N/A', fridge: 'N/A', tv: 'N/A' },
    oldVsNew: 'Older O-General AXGT and ASGA models featured oversized condenser coils; modern inverter models use micro-fin grooved inner copper tubes.'
  },
  'Panasonic': {
    features: 'MirAIe IoT Platform, nanoe-X Air Purification, ECONAVI AI Sensors, Twin Cool Inverter, AG Clean Silver Filter, StainMaster Wash',
    errors: { ac: 'H11 (indoor/outdoor communication error), H16 (outdoor current transformer open), F91 (refrigeration cycle fault)', wm: 'U11 (drain issue), U12 (lid open), U13 (unbalanced load)', fridge: 'H21 (defrost sensor failure)', tv: 'Power LED blinking 1 to 14 times' },
    oldVsNew: 'Older Panasonic washers and ACs had independent electrical relays; modern MirAIe-enabled units interface through a centralized cloud IoT circuit board.'
  },
  'Haier': {
    features: 'Bottom Mounted Refrigerator (BMR), Triple Inverter Technology, Frost Free 8-in-1 Convertible, PuriCool Self-Clean, Direct Motion Motor',
    errors: { wm: 'E1 (water drain timeout), E2 (lid open during spin), E4 (water fill timeout), FC0 (communication error)', fridge: 'E0 / E1 (freezer sensor open), E2 (evaporator sensor open)', ac: 'E7 (outdoor communication), F1 (indoor sensor error)', tv: 'Haier logo hang' },
    oldVsNew: 'Traditional top-mount Haier fridges had single airflow dampers; newer BMR series invert the layout so fresh food is accessible without bending down.'
  },
  'Sony': {
    features: 'Cognitive Processor XR, Bravia XR, Triluminos Pro, X-Protection PRO surge defense, Acoustic Surface Audio+, Google TV, XR Clear Image',
    errors: { tv: 'Red standby light blinking 4 times (backlight error / inverter rail fault), blinking 6 times (backlight driver board), blinking 8 times (audio IC)', ac: 'N/A', wm: 'N/A', fridge: 'N/A' },
    oldVsNew: 'Older Sony Bravia CCFL LCD TVs used fluorescent high-voltage backlight tubes; modern Bravia XR LED/OLED models use high-density micro-LED arrays.'
  },
  'TCL': {
    features: 'Mini-LED Display, Quantum Dot QLED, AiPQ Processor 3.0, Game Master 144Hz VRR, Google TV OS, ONKYO Soundbar Audio',
    errors: { tv: 'Screen turns black after TCL logo, blinking power indicator, or HDMI ARC sound dropout', ac: 'E0 / E6 communication code', wm: 'E3 drain pump lock' },
    oldVsNew: 'Earlier TCL entry-level LED sets had basic single-core processors; current 4K Mini-LED models feature multi-zone local dimming and AI video scaling.'
  },
  'Liebherr': {
    features: 'DuoCooling Twin Cooling Circuits, BioFresh / EasyFresh humidity drawers, SmartFrost Technology, Central Power Cooling, SuperSilent Inverter',
    errors: { fridge: 'Optical and acoustic door alarm, F1 / F2 air sensor fault, F4 evaporator sensor open circuit' },
    oldVsNew: 'Liebherr designs emphasize dual independent refrigeration circuits that prevent odor exchange between freezer and vegetable compartments.'
  },
  'Lloyd': {
    features: 'Rapid Cooling in 45 Seconds, Golden EVA Condenser Fin, Havells Sync Smart App, Anti-Viral Nano Filter, Trio Inverter BLDC Compressor',
    errors: { ac: 'E1 (room sensor), E2 (pipe sensor), E5 (indoor fan motor lock)', wm: 'E1 (water level error), E2 (drain error)', fridge: 'Continuous buzzer on temperature rise', tv: 'Standby light blinking' },
    oldVsNew: 'Lloyd legacy models from earlier decades used standard aluminium condensers; current Havells-backed Lloyd units are built with 100% inner grooved copper.'
  },
  'Bosch Built-in': {
    features: 'EcoSilence Drive, AquaStop Leakage Defense, Zeolith Drying, TouchControl Baffle Filter, FlameFailure Safety, VarioSpeed',
    errors: { wm: 'E18 (drain pump), E17 (inlet)', dishwasher: 'E15 (water in base trough), E24 (drain hose kinked), E09 (heating circuit failure)', chimney: 'Blower speed failure' },
    oldVsNew: 'Bosch appliances are engineered to European endurance standards with stainless steel tubs and direct-coupled brushless magnetic motors.'
  },
  'Siemens': {
    features: 'iQ300 / iQ500 / iQ700 Series, iQdrive brushless motor, sensorFresh, Home Connect, varioSpeed Plus, hydroDry dishwasher technology',
    errors: { wm: 'E18 (drain fault), E23 (AquaStop leak detected)', fridge: 'E01 sensor error', dishwasher: 'E15 AquaStop safety activation' },
    oldVsNew: 'Siemens iQdrive motors eliminate friction wear entirely, ensuring near-silent operation compared to older brush-commutated induction motors.'
  },
  'Acer': {
    features: 'Acerpure Air Treatment, Quad-Core Smart TV, High-Efficiency Inverter AC, SilentWash Washing Machine',
    errors: { tv: 'System boot hang on Acer Android logo', ac: 'E1 sensor error', wm: 'E2 drain timeout' },
    oldVsNew: 'Acer home electronics incorporate modern smart IoT chipsets and energy-saving BLDC motors across all appliances.'
  },
  'Acerpure': {
    features: '2-in-1 Air Circulator and Purifier, 4-in-1 HEPA Filter, Smart Air Quality Laser Sensor, Smart App Control',
    errors: { purifier: 'Filter replacement indicator flashing red, fan motor speed sensor anomaly' },
    oldVsNew: 'Acerpure devices utilize magnetic brushless DC fans designed for continuous 24/7 low-decibel bedroom and office operation.'
  },
  'Aiwa': {
    features: 'Japanese Acoustic Engineering, Quantum Lumens TV display, High Output Audio Soundbars, Bass Boost System',
    errors: { tv: 'No picture with background sound, power standby circuit malfunction' },
    oldVsNew: 'Re-engineered Aiwa Smart TVs combine vintage Japanese sound tuning with modern borderless 4K display panels.'
  },
  'Akai': {
    features: 'Japanese Precision Engineering, Ultra Vivid Display Engine, Turbo Air Coolers, Hi-Fi Sound Systems',
    errors: { tv: 'HDMI recognition failure, backlight strip burnout' },
    oldVsNew: 'Akai televisions have evolved from classic CRT and early LCD sets into slim frameless 4K Smart TVs with Android TV OS.'
  },
  'Bajaj': {
    features: 'DuraCoat Enamel Geyser Tanks, Swirl Flow Technology, Typhoon Blower Air Coolers, 20L/25L Convection Microwaves',
    errors: { geyser: 'Water not heating due to element scaling, thermal cut-out tripped', microwave: 'Turntable motor locked, magnetron weak', cooler: 'Submersible pump dry run burn' },
    oldVsNew: 'Older Bajaj geysers used standard copper heating coils; new models feature Marine Grade Glassline coating for hard borewell water.'
  },
  'BPL': {
    features: 'Vivid Color Engine, Dual Inverter AC, QuickWash Fully Automatic Washing Machines, Direct Cool Refrigerators',
    errors: { tv: 'Standby light stays stuck on amber, power supply cap leakage', wm: 'Drain error E2', ac: 'E1 temperature sensor error' },
    oldVsNew: 'BPL has updated its trusted Indian home appliance lineup with microprocessor control boards and energy-efficient compressors.'
  },
  'Daewoo': {
    features: 'Air Bubble Washing Technology, Dynamic Inverter Drive, Nano-Silver Refrigerator antibacterial lining',
    errors: { wm: 'OE (drain timeout), IE (inlet timeout), UE (unbalanced spin load)' },
    oldVsNew: 'Daewoo front load washers are known for Air Bubble agitation that enhances detergent dissolution even in cold water.'
  },
  'Electrolux': {
    features: 'UltraMix Technology, Vapour Refresh, EcoInverter, TasteSeal Refrigerator drawers, UltimateCare Washers',
    errors: { wm: 'E10 (water inlet issue), E20 (drain failure), E40 (door lock failure)', fridge: 'E1 sensor deviation' },
    oldVsNew: 'Electrolux Scandinavian engineering focuses on fabric care with gentle tumbling and precision inverter temperature regulation.'
  },
  'Havells': {
    features: 'Stealth Air Purifiers, Adonia Digital Geysers with Feroglas coating, Smart Connected Home ecosystem',
    errors: { geyser: 'Display shows error code E1 (dry heating protection) or E2 (thermostat failure)' },
    oldVsNew: 'Havells water heaters incorporate thick polyurethane foam (PUF) insulation and digital temperature touch displays.'
  },
  'Hisense': {
    features: 'ULED Technology, Hi-View Engine, PureFlat Refrigerator Series, Dual Inverter Smart AC, VIDAA OS',
    errors: { tv: 'Backlight failure, VIDAA OS boot loop', fridge: 'E4 defrost sensor open', ac: 'E1 sensor fault' },
    oldVsNew: 'Hisense ULED series delivers quantum dot color enhancement and high-speed motion smoothing for sports viewing.'
  },
  'Hyundai': {
    features: 'Hyundai Smart Electronics, Multi-Airflow Refrigerators, Rapid Cool ACs, Frameless Smart TVs',
    errors: { ac: 'EC gas leakage detection', tv: 'Mainboard boot hang', wm: 'E2 drain timeout' },
    oldVsNew: 'Hyundai appliances combine energy-efficient cooling with user-friendly digital control interfaces.'
  },
  'Intex': {
    features: 'Eye-Safe Display LED TV, Turbo Cool Window & Split ACs, Semi-Automatic Washer Twin Tubs',
    errors: { tv: 'Power supply board capacitor swelling, sound distortion from speakers' },
    oldVsNew: 'Intex home appliances provide cost-effective everyday cooling and entertainment with locally serviceable parts.'
  },
  'Kelvinator': {
    features: 'TechVanced Inverter Compressor, 360-Degree Cool Airflow, Direct Cool Toughened Glass Series',
    errors: { fridge: 'Relay clicking sound without compressor start, defrost water tray overflow' },
    oldVsNew: 'Kelvinator, legendary for refrigerator longevity, now incorporates energy-saving inverter compressors and eco-friendly R600a.'
  },
  'Kenstar': {
    features: 'OxyFreeze Refrigerator Technology, Turbocool Air Coolers, Top Load Washers with Micro-Pulsators',
    errors: { wm: 'E2 drain timeout, unbalance spin sensor error', cooler: 'Pump motor burn from hard water scaling' },
    oldVsNew: 'Kenstar appliances are built for robust everyday Indian household duty with reinforced plastic bodies and copper motors.'
  },
  'Kodak': {
    features: 'Ultra HD 4K Android TV, Cortex A53 Processor, Frameless Bezel Design, Powerful 30W Sound Output',
    errors: { tv: 'Sound working with black display (LED backlight failure), Android TV home screen freeze' },
    oldVsNew: 'Kodak Smart TVs leverage Google Android TV certified platforms with voice search and wide viewing angle IPS panels.'
  },
  'Mi': {
    features: 'PatchWall with Android TV, Horizon Display, Smart Inverter AC, Smart Water Purifier with UV filter',
    errors: { tv: 'Stuck on Mi logo, power supply board surge damage', ac: 'E1 communication error', purifier: 'Filter life alert' },
    oldVsNew: 'Xiaomi/Mi sets use slim motherboard designs with high-density LED arrays and integrated PatchWall content recommendations.'
  },
  'Micromax': {
    features: 'Canvas Smart LED TV, ClimaCool Air Conditioners, Energy Efficient Semi-Automatic Washers',
    errors: { tv: 'Display backlight burnout, power board standby voltage failure' },
    oldVsNew: 'Micromax televisions are engineered with standardized component boards, making doorstep circuit repairs straightforward.'
  },
  'Midea': {
    features: 'Inverter Quattro Compressor, Dual Filtration AC, Water Cube Drum Washing Machines, Smart Cool Fridge',
    errors: { ac: 'EC refrigerant leak code, E1 indoor EEPROM error', wm: 'E21 drain timeout' },
    oldVsNew: 'Midea is a global refrigeration leader using variable-speed Quattro compressors that adjust power smoothly down to 10%.'
  },
  'Motorola': {
    features: 'Revok Smart TV with Dolby Vision Atmos, AutotuneX Display Engine, Smart Inverter ACs',
    errors: { tv: 'Display backlight flickering, Google TV interface crash' },
    oldVsNew: 'Motorola consumer electronics incorporate modern IPS panel assemblies and dynamic audio processing circuits.'
  },
  'OnePlus': {
    features: 'Gamma Engine Color Processor, OxygenPlay, Y-Series / U-Series / Q-Series QLED, DCI-P3 93% color gamut',
    errors: { tv: 'Display backlight strip short, HDMI handshake issue, stuck on OnePlus red ribbon boot animation' },
    oldVsNew: 'OnePlus TVs feature slim profile edge-to-edge glass and custom acoustic sound tuning with Dolby Audio certification.'
  },
  'Onida': {
    features: 'Fire TV Edition Smart TV, Live Sound System, HydroCool Inverter ACs, Crystal Front Load Washers',
    errors: { tv: 'Fire TV remote pairing lost, power supply board capacitor burnout', ac: 'E1 sensor open' },
    oldVsNew: 'From the iconic "Devil" CRT TVs to current Fire TV smart televisions, Onida has specialized in high-clarity sound systems.'
  },
  'Philips': {
    features: 'Ambilight 3-Sided Ambient Lighting, P5 Perfect Picture Engine, Dolby Vision Atmos, Precision Audio',
    errors: { tv: 'Ambilight LED strip failure, power supply board diode short, dark screen with audio present' },
    oldVsNew: 'Philips Ambilight sets project reactive wall illumination behind the screen, driven by dedicated rear microprocessor strips.'
  },
  'Redmi': {
    features: 'Vivid Picture Engine, PatchWall 4, Dolby Audio 20W, Dual Band Wi-Fi, Android TV 11',
    errors: { tv: 'LED backlight failure after 2-3 years of usage, software boot hang' },
    oldVsNew: 'Redmi Smart TVs offer high value 4K resolution backed by responsive Android TV software architectures.'
  },
  'Sansui': {
    features: 'Japanese Technology, Glow Display, Pro-Sound Audio, Split Inverter Air Conditioners',
    errors: { tv: 'Display panel horizontal lines, power board standby failure' },
    oldVsNew: 'Sansui entertainment devices feature wide color gamut LED matrices and robust tropicalized power supply stages.'
  },
  'Sanyo': {
    features: 'Kaizen 4K Android TV Series, Dual Inverter AC with Glacier Mode, Japanese Clean Air filter',
    errors: { ac: 'E1 room temperature sensor error, E5 outdoor fan motor lock', tv: 'Sound okay but black screen' },
    oldVsNew: 'Sanyo, manufactured under Panasonic quality guidelines, uses full copper condensers and Google-certified TV software.'
  },
  'Sharp': {
    features: 'Aquos 4K Display Engine, Plasmacluster Ion Air Purification, J-Tech Inverter Compressor',
    errors: { tv: 'Power LED blinks in error sequences indicating backlight or panel board fault', ac: 'Plasmacluster generator lock' },
    oldVsNew: 'Sharp Aquos displays are celebrated for genuine Japanese LCD panel manufacturing quality and high color accuracy.'
  },
  'Thomson': {
    features: 'French Touch Technology, Google TV Series, Real 4K Resolution, Heavy Duty Twin Tub Washers',
    errors: { tv: 'Google TV boot loop, LED backlight strip failure', wm: 'Spin tub brake pad worn out' },
    oldVsNew: 'Thomson provides European heritage designs assembled with modern Google TV smart capabilities for Indian households.'
  },
  'Toshiba': {
    features: 'REGZA Engine 4K, Ultra Essential PQ Technology, Origin Inverter Washing Machines, Multi-Door Refrigerators',
    errors: { tv: 'REGZA display engine error, power supply standby fault', wm: 'E2 drain pump lock', fridge: 'H1 defrost sensor error' },
    oldVsNew: 'Toshiba REGZA engines apply real-time pixel-level optimization to standard definition broadcast channels for crisp viewing.'
  },
  'VW': {
    features: 'Frameless Cinema 4K Smart TV, Quantum Lucent Technology, True Display Engine, High Wattage Soundbars',
    errors: { tv: 'Backlight array failure, mainboard firmware corruption' },
    oldVsNew: 'VW specializes in affordable high-screen-to-body ratio smart displays with integrated Indian OTT streaming apps.'
  },
  'Videocon': {
    features: 'Mega Pixel Display, Direct Cool Titanium Refrigerators, Tilt Drum Washing Machines, Rotary ACs',
    errors: { tv: 'Power supply board capacitor swelling, sound IC burn', wm: 'Belt loose or capacitor weak', fridge: 'Relay failure' },
    oldVsNew: 'Older Videocon classic appliances remain popular across Coimbatore; our technicians carry universal replacement relays and motors.'
  },
  'Vu': {
    features: 'Masterpiece GloLED TV, Cricket Mode, Cinema Mode, 100W Integrated Soundbar, Armani Gold aesthetics',
    errors: { tv: 'Backlight strip burnout causing dark screen with sound, ARC sound delay, boot loop on Vu logo' },
    oldVsNew: 'Vu televisions feature high-brightness GloLED panels that deliver 400+ nits luminance, ideal for sunlit living rooms.'
  },
  'White Westinghouse': {
    features: 'American Heavy Duty Engineering, Commercial Capacity Washers, Deep Cool Air Conditioning',
    errors: { wm: 'Door latch lock failure, heavy drum spin vibration', ac: 'Capacitor weak on outdoor unit' },
    oldVsNew: 'White Westinghouse heavy-capacity washers are favored by large households and small Coimbatore homestays for their rugged steel tubs.'
  },
  'Xiaomi': {
    features: 'OLED Vision TV, Vivid Picture Engine 2, Smart Inverter AC, IoT Smart Home Connectivity',
    errors: { tv: 'OLED panel burn-in prevention, backlight driver failure on LED models', ac: 'E1 indoor sensor open' },
    oldVsNew: 'Xiaomi sets integrate deeply with smart home sensors and phone apps, running responsive quad-core multimedia processors.'
  },
  'iFFALCON': {
    features: 'Powered by TCL, 4K Google TV, AI-IN Intelligent Control, Micro Dimming, HDR 10 Display',
    errors: { tv: 'Audio present without picture (backlight burnout), Google TV freezing on Wi-Fi connection' },
    oldVsNew: 'iFFALCON smart TVs utilize TCL display panels and backlights, offering high contrast and durable LED matrices.'
  }
};

module.exports = { BRAND_DETAILS };
console.log('Loaded BRAND_DETAILS for', Object.keys(BRAND_DETAILS).length, 'brands');
