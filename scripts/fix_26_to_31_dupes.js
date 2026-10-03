const fs = require('fs');

let code = fs.readFileSync('scripts/build_clean_26_to_31.js', 'utf8');

const replacements = [
  // Lloyd
  [
    'Serial dialogue and news broadcasts are loud and clear, but the panel displays zero light',
    'Program sound and speaker audio come through clearly, yet the Lloyd screen shows no raster illumination at all'
  ],
  [
    'Re-initializes remote pairing sequence, clears Bluetooth cache via technician menu, and confirms 3.3V rail to the receiver IC',
    'Executes hardware reset sequence on the Lloyd remote, clears wireless device registry in service mode, and tests transceiver voltage'
  ],
  // VW
  [
    'Bright multicolored stripes run vertically through the picture, cutting off half the screen while sound continues uninterrupted',
    'Vibrant multi-colored bars divide the VW display vertically, obscuring broadcast content while speakers play normal sound'
  ],
  [
    "Set-top box and gaming console are plugged into HDMI ports, but television displays 'No Signal' across all input sources",
    "External set-top box or streaming stick is connected, but VW screen persistently shows No Input Signal on all HDMI ports"
  ],
  [
    'Static charge from coaxial cable discharged through HDMI port, damaging the ESD protection diodes or HDMI switch IC',
    'Cable line electrical surge or hot-plugging caused ESD protector diode burnout and fried the HDMI receiver IC input pins'
  ],
  [
    'Inspects HDMI socket physical contacts under magnification, replaces defective ESD protection array, and checks 5V hot-plug rail',
    'Tests each HDMI pin for physical continuity, replaces blown surface-mount ESD clamp diodes, and validates 5-volt DDC bus'
  ],
  // Acerpure
  [
    'The television shows no signs of life after a power outage, with the front standby light completely extinguished',
    'Television fails to respond after power fluctuation, showing zero indicator light on the Acerpure front panel'
  ],
  [
    'A severe grid transient punctured the input surge protector, blowing the fuse and damaging the main switching PWM IC',
    'Heavy voltage spike overwhelmed the AC line protection stage, destroying the fuse and shorting the PWM power regulator'
  ],
  [
    'Replaces blown protection fuse, replaces defective bridge diodes, and installs an authentic switching regulator IC',
    'Replaces blown protective fuse, changes shorted bridge rectifier, and solders new switching regulator circuit'
  ],
  [
    'Colored vertical bands distort the picture on one side of the panel while sound plays clearly from the speakers',
    'Distorted vertical color bands stripe across the Acerpure picture while sound plays normally'
  ],
  [
    'Micro-fractures in the flexible source driver bonding film or oxidized pins on the high-definition LVDS interface',
    'Source chip-on-film interconnect unbonding or oxidized contact fingers along the display ribbon harness'
  ],
  [
    'Polishes ribbon connector pins, checks T-Con bias rail voltages with a multimeter, and checks panel driver tab adhesion',
    'Cleans ribbon harness leads, verifies VGL and VGH reference voltages on T-Con, and tests source tab bonding condition'
  ],
  [
    'The smart remote suddenly fails to navigate the TV, voice input remains inactive, and Bluetooth settings cannot locate the device',
    'Acerpure smart remote stops controlling the TV, voice search stays unresponsive, and TV shows pairing error'
  ],
  [
    'Desynchronized pairing handshake between remote and TV, corrupted Bluetooth stack files, or antenna signal attenuation',
    'Bluetooth protocol pairing token corrupted in system memory or low supply current to the wireless module'
  ],
  [
    'Executes remote factory reset button sequence, clears system Bluetooth cache via service menu, and checks antenna voltage',
    'Unbinds remote in technician service mode, clears Bluetooth protocol cache, and tests operating voltage to wireless module'
  ],
  // Redmi
  [
    'Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC',
    'Verifies constant current output to LED backlights, measures 12V and 24V rails on SMPS, and tests PatchWall board diagnostics'
  ],
  [
    'When the TV fails to load apps properly or refuses to boot past the initial startup screen',
    'When Fire OS gets stuck on the loading logo or streaming applications crash repeatedly'
  ],
  [
    'Measures backlight inverter voltage output, connects serial debugging cable to check Fire OS boot sequence, and tests Bluetooth module',
    'Monitors Fire OS kernel boot sequence over serial log, checks eMMC storage health, and measures backlight boost circuit output'
  ],
  [
    'Voltage fluctuations during summer power outages can damage SMPS filter capacitors or cause backlight flickering',
    'Everyday power cuts in Karur can strain SMPS electrolytic capacitors or lead to LED string burnout'
  ],
  [
    'We inspect SMPS circuit boards, renew backlight bars, and service speakers directly at home',
    'Our team tests power supply circuits, replaces worn backlight arrays, and repairs audio speakers at your home'
  ],
  [
    'When the TV fails to turn on after an electrical outage or audio rattles at moderate volume levels',
    'When screen stays dark following a power drop or speaker audio crackles during normal viewing'
  ],
  [
    'Inspects SMPS power supply board secondary outputs 12V 24V, speaker cone condition, and inverter board',
    'Tests power delivery rails from the SMPS, inspects dual audio speakers, and checks backlight inverter board output'
  ],
  [
    'SMPS power board, stereo speaker drivers, backlight strips, primary filter capacitors',
    'Power supply board, dual speaker units, high-lumens LED strips, electrolytic capacitors'
  ],
  [
    'Interrupted system partition write, fragmented cache storage, or degraded memory sectors within the embedded flash storage',
    'PatchWall system update interrupted by sudden power outage, corrupting system partition data on the eMMC chip'
  ],
  [
    'Cleans ribbon seating with electrical contact spray, checks VGH and VGL reference voltages, and verifies driver tab bonding',
    'Cleans ribbon seating with isopropyl contact cleaner, tests VGH and VGL bias voltages on T-Con, and tests tab bonding'
  ],
  // Mi
  [
    'Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC',
    'Measures current draw across LED array, checks 12V SMPS secondary rail, and runs mainboard hardware diagnostics'
  ],
  [
    'When the TV fails to load apps properly or refuses to boot past the initial startup screen',
    'When the bezel-less screen exhibits lines or the smart system fails to advance beyond the Horizon logo'
  ],
  [
    'Cleans and reseats LVDS ribbon cables, measures VGH and VGL voltages on T-Con board, and inspects panel edge bonding',
    'Examines edge bonding under magnifying lens, tests T-Con bias voltages, and reseats dual LVDS flexible cables'
  ],
  [
    'Voltage fluctuations during summer power outages can damage SMPS filter capacitors or cause backlight flickering',
    'High humidity or lightning surges can trigger power board diode failure or cause LED backlight fading'
  ],
  [
    'We inspect SMPS circuit boards, renew backlight bars, and service speakers directly at home',
    'We check SMPS boards on site, install genuine replacement backlight strips, and restore faulty audio'
  ],
  [
    'When the TV fails to turn on after an electrical outage or audio rattles at moderate volume levels',
    'When the unit remains in standby mode or audio sounds distorted during movie dialogue'
  ],
  [
    'Inspects SMPS power supply board secondary outputs 12V 24V, speaker cone condition, and inverter board',
    'Checks 12V and 24V DC lines, tests speaker diaphragm integrity, and verifies backlight driver feedback'
  ],
  [
    'SMPS power board, stereo speaker drivers, backlight strips, primary filter capacitors',
    'Main power circuit board, stereo speaker modules, LED reflector strips, AC line filter'
  ],
  [
    'Internal speaker paper surround has split from prolonged heat and vibration, causing the voice coil to rub against the magnet',
    'Acoustic chamber diaphragm has torn from continuous high-volume listening, letting voice coil rub against pole piece'
  ],
  [
    'Degraded T-Con timing controller IC, oxidised LVDS cable contacts, or moisture corrosion on panel COF bonds',
    'Defective T-Con timing processor, tarnished copper pads on flat cable, or conductive dust near panel bond tabs'
  ],
  [
    'Cleans LVDS ribbon connections, verifies VGH and VGL bias voltages on T-Con, and tests panel source driver integrity',
    'Treats flat ribbon connections with solvent spray, checks VGH and VGL test points on T-Con, and tests panel driver ICs'
  ],
  [
    'Corrupted pairing record in television Bluetooth cache or degraded 3.3V wireless supply rail',
    'Loss of synchronization in the television Bluetooth stack or broken antenna trace on the wireless PCB'
  ],
  [
    'Re-initializes remote pairing sequence, clears Bluetooth cache via technician menu, and confirms 3.3V rail to the receiver IC',
    'Re-binds Bluetooth remote in bootloader mode, flushes pairing keys in service menu, and checks 3.3V supply to BT transceiver'
  ],
  // Hyundai
  [
    'When the TV fails to load apps properly or refuses to boot past the initial startup screen',
    'When apps fail to open, screen freezes on home launcher, or TV restarts automatically during playback'
  ],
  [
    'We inspect SMPS circuit boards, renew backlight bars, and service speakers at your doorstep',
    'Technicians diagnose power circuits, fit matched LED backlight strips, and restore clear audio at home'
  ],
  [
    'When the TV fails to turn on after an electrical outage or audio rattles at moderate volume levels',
    'When the standby light fails to illuminate or background music buzzes unpleasantly through speakers'
  ],
  [
    'Defective timing controller IC on T-Con, tarnished LVDS pins, or broken bond connections on the panel flexible cable',
    'T-Con board gamma IC failure, corrosion on flexible flat cable contacts, or partial gate driver separation'
  ],
  [
    'Cleans ribbon cable contacts with contact spray, checks VGH/VGL voltage lines on the T-Con, and tests panel source driver integrity',
    'Cleans flat ribbon leads with electrical contact cleaner, checks T-Con VGH/VGL/VCOM voltages, and examines gate driver tabs'
  ]
];

let replaced = 0;
for (const [target, replacement] of replacements) {
  if (code.includes(target)) {
    code = code.replace(target, replacement);
    replaced++;
  } else {
    console.log('WARNING: target not found:', target);
  }
}

fs.writeFileSync('scripts/build_clean_26_to_31.js', code, 'utf8');
console.log(`Successfully replaced ${replaced} strings in build_clean_26_to_31.js`);
