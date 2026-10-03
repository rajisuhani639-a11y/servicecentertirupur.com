// scripts/brand_appliance_data.js
// Rich brand and appliance technical metadata for genuine Coimbatore FAQ rebuild

const BRAND_TECH = {
  'Samsung': {
    tech: ['Digital Inverter Technology', 'Twin Cooling Plus', 'EcoBubble', 'SpaceMax', 'Curd Maestro', 'Convertible 5-in-1', 'AI Control', 'Crystal 4K', 'QLED Dual LED'],
    models: ['RT28 Double Door', 'RT34 Curd Maestro', 'WA65 Top Load', 'WW70 Front Load EcoBubble', 'WindFree Split AC', 'Crystal 4K UHD TV', 'Q60 QLED Series'],
    compressor: 'Digital Inverter Compressor with BLDC motor control',
    washerMotor: 'Digital Inverter Motor with EcoBubble diamond drum',
    acType: 'WindFree and Triple Inverter Split AC',
    tvTech: 'Crystal UHD Processor, Quantum HDR, Tizen OS'
  },
  'LG': {
    tech: ['AI Direct Drive (AI DD)', 'Smart Inverter Compressor', 'ThinQ Wi-Fi', 'DoorCooling+', 'TurboWash 360', 'Dual Inverter Compressor', 'OLED evo', 'WebOS'],
    models: ['GL-I292 Double Door', 'FHM1207 Front Load', 'T65 Top Load Smart Inverter', 'AI Dual Inverter AC 1.5T', 'UR75 4K UHD TV', 'C3 OLED Series'],
    compressor: 'Smart Inverter and Linear Compressor',
    washerMotor: 'Inverter Direct Drive motor attached directly to the drum',
    acType: 'Dual Inverter 6-in-1 Convertible Split AC with Ocean Black Fin',
    tvTech: 'alpha-5 / alpha-7 Gen AI 4K processor, WebOS, Real 4K'
  },
  'Whirlpool': {
    tech: ['6th Sense Technology', 'IntelliFresh Inverter', '360 BloomWash', 'Zeolite Technology', '3D Cool Inverter', 'Magic Clean Filter', 'MicroBlock Shield'],
    models: ['Protton 3-Door', 'Intellifresh 265L', 'BloomWash Pro 7.5kg', 'WhiteMagic Top Load', '3D Cool 1.5T AC', 'Google TV Series'],
    compressor: 'IntelliSense Inverter Compressor',
    washerMotor: '6th Sense TumbleCare motor with Hexa Bloom impellers',
    acType: '3D Cool 4-in-1 Convertible with 100% Copper condenser',
    tvTech: 'Vivid Colour Engine, Android TV interface'
  },
  'Bosch': {
    tech: ['EcoSilence Drive', 'ActiveWater Plus', 'VarioDrum', 'SpeedPerfect', 'AntiVibration Design', 'VitaFresh', 'FreshSense'],
    models: ['Serie 4 Front Load', 'Serie 6 8kg Washer', 'Serie 2 Top Load', 'Maxx 7kg', 'Serie 4 Bottom Freezer Refrigerator', 'Serie 4 Dishwasher'],
    compressor: 'VarioInverter compressor with intelligent sensor monitoring',
    washerMotor: 'Brushless EcoSilence Drive motor with friction-free magnet design',
    acType: 'German engineered Inverter multi-split cooling system',
    tvTech: 'High efficiency display monitor and control circuitry'
  },
  'IFB': {
    tech: ['Aqua Energie', 'Cradle Wash', '3D Wash System', 'Ball Valve Technology', 'Triadic Pulsator', 'Steam Wash', 'AI Powered Wash'],
    models: ['Senator Smart Front Load', 'Elena Top Load', 'Serena 7kg', 'Aqua 6.5kg', 'FastCool Inverter AC', 'IFB 30L Convection Microwave'],
    compressor: 'Heavy-duty rotary compressor with gold evaporator fin protection',
    washerMotor: 'High-torque induction and inverter motor with Aqua Energie water softening',
    acType: 'FastCool Gold Series Inverter AC with titanium gold fin',
    tvTech: 'Full HD display matrix with dynamic contrast processor'
  },
  'Godrej': {
    tech: ['Edge Pro Inverter', 'Smart Motion', 'Anti-Bacterial Technology', 'Nano Shield', 'Multi Inverter', 'Turbo Cooling', 'Eco-friendly R600a/R32'],
    models: ['Edge Pro 190L', 'Eon Double Door 260L', 'Eon Allure Front Load', 'WT Eon Top Load', '5-Star Inverter AC 1.5T', 'Godrej QLED TV'],
    compressor: 'Advanced Multi-Inverter Compressor',
    washerMotor: 'Smart Motion pulsator motor with stainless steel acuwash drum',
    acType: '5-Star Green Inverter AC with 100% Grooved Copper tubes',
    tvTech: 'Godrej Matrix Color Display with Android OS'
  },
  'Voltas': {
    tech: ['All-Weather Technology', 'Maha-Adjustable Inverter', 'Superdry Mode', 'High Ambient Cooling at 52°C', 'Eco-friendly R32 refrigerant'],
    models: ['183V Vectra 1.5T', '185V Inverter AC', '123V 1 Ton Split', 'Voltas Window AC 1.5T', 'Grand Inverter Split AC'],
    compressor: 'High-EER Twin Rotary BLDC Inverter Compressor',
    washerMotor: 'Soft-fall hydraulic motor system (Voltas Beko)',
    acType: 'Maha-Adjustable Multi-Stage Inverter Split and Window AC',
    tvTech: 'Ultra HD panel display with stereo speaker audio'
  },
  'Voltas Beko': {
    tech: ['ProSmart Inverter Motor', 'AquaWave Drum', 'NeoFrost Dual Cooling', 'HarvestFresh 3-color light technology', 'FastFreeze'],
    models: ['WTT70 Top Load', 'WFL80 Front Load', 'RFF275L Refrigerator', 'RDED210 Single Door'],
    compressor: 'ProSmart Inverter compressor with quiet operation',
    washerMotor: 'ProSmart brushless motor with AquaWave paddle agitation',
    acType: 'Voltas Beko Inverter air conditioning module',
    tvTech: 'High dynamic range display interface'
  },
  'Daikin': {
    tech: ['Neo Swing Inverter Compressor', 'Coanda Airflow', 'PM 2.5 Filter', 'Econo Mode', 'Titanium Apatite Photocatalytic Air Filter', 'Power Chill'],
    models: ['FTKM Series 1.5T', 'FTKF Inverter 1 Ton', 'JTKJ Series 5-Star', 'FTL Non-Inverter', 'Daikin Cassette FCNQ Series'],
    compressor: 'Patented Neo Swing BLDC Inverter compressor (minimal friction/gas leak)',
    washerMotor: 'Industrial drive motor',
    acType: 'Neo Swing Inverter Split, Window and Ductable Cassette AC',
    tvTech: 'Precision digital monitor and display system'
  },
  'Blue Star': {
    tech: ['Precision Cooling Technology (0.1°C)', 'Dual Rotor Inverter', 'Brushless DC Motor (BLDC)', 'Climate Control', 'Anti-Corrosive Blue Fins'],
    models: ['IA318 Inverter 1.5T', 'IC518 5-Star Split AC', '3HW Window AC', 'CHF Deep Freezer 300L', 'Blue Star Stella RO'],
    compressor: 'Dual Rotor BLDC Inverter Compressor with Acoustic Jacket',
    washerMotor: 'Heavy-duty copper wound drive motor',
    acType: '5-Star Inverter Split AC, Heavy Commercial Deep Freezers and Cassettes',
    tvTech: 'Industrial grade LED display system'
  },
  'Carrier': {
    tech: ['Hybridjet Inverter Technology', 'Flexicool 6-in-1 Inverter', 'Instacool Turbo', 'PM 2.5 Micron Filter', 'Hydrophilic Blue Fin'],
    models: ['Ester Neo 1.5T', 'Superia 2 Ton Inverter', 'EmPower 1 Ton', 'Carrier Window AC 1.5T', 'Carrier Cassette 3 Ton'],
    compressor: 'Twin Rotary Inverter Compressor with InstaCool acceleration',
    washerMotor: 'Heavy-duty wash motor assembly',
    acType: 'Flexicool Inverter Split and Window AC with 100% Copper condenser',
    tvTech: 'High resolution digital display driver'
  },
  'Hitachi': {
    tech: ['expandable Inverter Plus', 'Dual Gold Fin Condenser', 'FrostWash Technology', 'Penta Sensor System', 'Silent Cooling (Super Silent)'],
    models: ['Kashikoi 5100x 1.5T', 'Yoshi 5-Star Inverter', 'Touke Inverter 1 Ton', 'Hitachi R-VG French Door Refrigerator', 'Hitachi Top Load Washer'],
    compressor: 'Tropical Twin Rotary Inverter Compressor with expandability up to 110%',
    washerMotor: 'Direct current high velocity drive motor',
    acType: 'Expandable Inverter Split AC with FrostWash self-cleaning',
    tvTech: 'Picture Master display engine'
  },
  'Mitsubishi': {
    tech: ['Heavy Industries Jet Air Scroll', 'Electric Mr. Slim Inverter', 'PAM Inverter Control', 'Anti-Allergy Enzyme Filter', 'Long Airflow 12m'],
    models: ['MSY-GR18VF 1.5T', 'SRK18YXS Heavy Industries', 'MS-GK 1 Ton', 'Mitsubishi 4-Door Refrigerator'],
    compressor: 'High efficiency Hermetic Scroll Inverter Compressor',
    washerMotor: 'Industrial high-torque drive mechanism',
    acType: 'Mitsubishi Electric Mr. Slim & Heavy Industries Jet Air Inverter Split AC',
    tvTech: 'Commercial grade flat display panel'
  },
  'O-General': {
    tech: ['Hyper Tropical Rotary Compressor', 'V-PAM Inverter Control', 'Coanda 3D Airflow', 'All Copper Coils with Blue Fin Coating'],
    models: ['ASGG18CPTA 1.5T', 'ASGG24CGTB 2 Ton', 'AXGT18 Window AC', 'ASGG12CGTA 1 Ton'],
    compressor: 'Hyper Tropical Twin Rotary Compressor engineered for severe 55°C heat',
    washerMotor: 'Heavy-duty industrial washing mechanism',
    acType: 'Heavy-duty Tropical Inverter Split & Window AC',
    tvTech: 'High reliability monitor unit'
  },
  'Panasonic': {
    tech: ['MirAIe IoT Platform', 'nanoe-X Air Purification', 'ECONAVI AI Sensors', 'Twin Cool Inverter', 'AG Clean Anti-Bacterial Silver Filter'],
    models: ['CS/CU-NU18YKY 1.5T', 'Econavi 336L Refrigerator', 'NA-F70 Top Load Washer', 'TH-55 4K Google TV', 'Panasonic 27L Convection Microwave'],
    compressor: 'Twin Cool Inverter Compressor with Econavi smart heat load sensors',
    washerMotor: 'StainMaster ActiveFoam pulsator motor',
    acType: 'MirAIe Smart Connected Inverter Split AC with nanoe-X',
    tvTech: '4K Colour Engine, Hexa Chroma Drive, Google TV'
  },
  'Haier': {
    tech: ['Bottom Mounted Refrigerator (BMR)', 'Triple Inverter Technology', 'Frost Free 8-in-1 Convertible', 'PuriCool Self-Clean', 'Direct Motion Motor'],
    models: ['HRB-365 BMR Double Door', 'HWM75 Top Load', 'HW80 Front Load Direct Motion', 'PuriCool 1.5T AC', 'Haier 43K66UG 4K TV'],
    compressor: 'Dual Fan Inverter Compressor with 1-Hour Icing Technology',
    washerMotor: 'Direct Motion Super Silent beltless motor with antibacterial gasket',
    acType: 'Self-Clean Triple Inverter Split AC with Frost Self-Clean',
    tvTech: 'Bezel-less 4K HDR Google TV with HQLED'
  },
  'Sony': {
    tech: ['Cognitive Processor XR', 'Bravia XR', 'Triluminos Pro', 'X-Protection PRO', 'Acoustic Surface Audio+', 'Google TV', 'XR Clear Image'],
    models: ['Bravia X74L 4K Series', 'Bravia X82L Google TV', 'XR-55A80L OLED', 'Bravia 2 Series 43 Inch', 'HT-S20R Soundbar System'],
    compressor: 'N/A',
    washerMotor: 'N/A',
    acType: 'N/A',
    tvTech: 'Cognitive Processor XR / 4K X-Reality PRO with X-Protection PRO surge defense'
  },
  'TCL': {
    tech: ['Mini-LED Display', 'Quantum Dot QLED', 'AiPQ Processor 3.0', 'Game Master 144Hz VRR', 'Google TV OS', 'Dolby Vision Atmos'],
    models: ['C645 QLED 4K', 'C755 Mini-LED', 'P635 4K HDR Series', 'TCL Inverter AC 1.5T', 'TCL Front Load Washer'],
    compressor: 'Dual Inverter smart compressor',
    washerMotor: 'Brushless DC motor with honeycomb drum',
    acType: 'Gentle Breeze Smart Inverter Split AC',
    tvTech: 'AiPQ Engine 3.0, Quantum Dot QLED panel, ONKYO soundbar'
  },
  'Liebherr': {
    tech: ['DuoCooling Twin Cooling Circuits', 'BioFresh / EasyFresh Drawers', 'SmartFrost Technology', 'Central Power Cooling', 'SuperSilent Inverter'],
    models: ['Massif Double Door 265L', 'Spitz Side-by-Side', 'Pure DuoCooling 350L', 'Bottom Freezer Prime Series'],
    compressor: 'SuperSilent Inverter Compressor with dual evaporator circuits',
    washerMotor: 'Precision German engineered drive system',
    acType: 'High performance cooling climate module',
    tvTech: 'Precision digital control display'
  },
  'Lloyd': {
    tech: ['Rapid Cooling in 45 Seconds', 'Golden EVA Condenser Fin', 'Havells Sync Smart App', 'Anti-Viral Nano Filter', 'Trio Inverter Compressor'],
    models: ['GLS18I56W 1.5T AC', 'GLDC213 Single Door Fridge', 'LWMF70 Front Load Washer', 'Lloyd 55-inch 4K QLED TV', 'Lloyd Chest Freezer 300L'],
    compressor: 'Trio Inverter BLDC Compressor with 100% inner grooved copper',
    washerMotor: 'Ultra-quiet inverter wash motor with 360-degree water spray',
    acType: '5-in-1 Convertible Inverter Split AC with Golden Fin',
    tvTech: 'QLED with Micro Dimming and Dolby Vision'
  },
  'Bosch Built-in / Chimney / Dishwasher': {
    tech: ['EcoSilence Drive', 'AquaStop Leakage Defense', 'Zeolith Drying', 'TouchControl Baffle Filter', 'FlameFailure Safety'],
    models: ['Serie 4 Free-Standing Dishwasher', 'Serie 6 Wall Chimney', 'Serie 4 Built-in Microwave', 'Serie 6 Induction Hob'],
    compressor: 'N/A',
    washerMotor: 'EcoSilence circulation and drainage impeller motor',
    acType: 'N/A',
    tvTech: 'N/A'
  }
};

module.exports = { BRAND_TECH };
console.log('Brand tech definitions loaded:', Object.keys(BRAND_TECH).length);
