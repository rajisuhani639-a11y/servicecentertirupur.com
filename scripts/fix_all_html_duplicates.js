const fs = require('fs');

// 1. Fix tv_brands_1_to_10.js customer experiences and intros
let b1to10 = fs.readFileSync('scripts/tv_brands_1_to_10.js', 'utf8');

// Fix Intros
b1to10 = b1to10.replace(
  'introTamil: "Xiaomi TV-la sound varudhu display dark-aa irukka?",',
  'introTamil: "Mi TV switch-on pannum bodhu sound mattum ketkudha?",'
);

// Unique customer experiences for Panasonic
const panasonicExp = `customerExperiences: [
    {
      locality: "Kagithapuramam, Karur",
      title: "Panasonic Viera 43-inch Backlight Array Replacement",
      text: "A resident in Kagithapuramam called regarding a Panasonic Viera LED TV with crystal clear sound but no raster light. The technician examined the panel voltage, diagnosed two open LEDs on the lower strip, and installed a full set of genuine Panasonic-matched LED bars. Backlight balance was verified across sports channels before handover."
    },
    {
      locality: "Pasupathipalayam, Karur",
      title: "Panasonic 4K Google TV Boot Hang Recovery",
      text: "A customer in Pasupathipalayam reported their 50-inch Panasonic Google TV freezing on the animated home screen. The technician initiated hardware service recovery, cleared corrupted OS partition cache, and updated system firmware directly at the home, restoring full streaming and voice search."
    },
    {
      locality: "Karur Town Center",
      title: "Panasonic 32-inch LED Power Board Repair",
      text: "A shop owner near Karur Clock Tower experienced complete power loss on their 32-inch Panasonic TV after rain power surges. Our technician tested the SMPS board, swapped out shorted bridge diodes and the primary filter capacitor on-site, restoring power without requiring an expensive new board."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Panasonic[\s\S]*?\]/m, panasonicExp);

// Unique customer experiences for Philips
const philipsExp = `customerExperiences: [
    {
      locality: "Kovai Road, Karur",
      title: "Philips 50-inch 4K UHD LED Backlight Restoration",
      text: "A home on Kovai Road faced dark screen issues on their Philips 4K television while audio played uninterrupted. Our visiting technician dismantled the bezel carefully, replaced the complete multi-strip LED backlight array, and calibrated ambient brightness on-site."
    },
    {
      locality: "Pasupathipalayam, Karur",
      title: "Philips Smart TV Saphi OS Boot Error Fix",
      text: "An Pasupathipalayam resident had their Philips Smart TV stuck in an endless restart loop on the Philips logo. Our technician re-flashed the system memory using specialized firmware tools, restoring smart app functionality without board replacement."
    },
    {
      locality: "Thorakkalpatti, Karur",
      title: "Philips 32-inch LED SMPS Surge Repair",
      text: "A customer near Thorakkalpatti had a dead Philips 32-inch TV with no standby light following an electrical lightning strike. The technician diagnosed the power board, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Philips[\s\S]*?\]/m, philipsExp);

// Unique customer experiences for Toshiba
const toshibaExp = `customerExperiences: [
    {
      locality: "Karur Town",
      title: "Toshiba REGZA 43-inch LED Strip Replacement",
      text: "A family in Karur Town reported their Toshiba REGZA TV showing a black screen while dialogue played crisp and loud. The technician tested the LED driver boost circuit, verified open diodes, and fitted a new matched LED backlight set right inside their living room."
    },
    {
      locality: "Kagithapuramam, Karur",
      title: "Toshiba VIDAA OS Restart Problem Solved",
      text: "A customer in Kagithapuramam encountered continuous boot looping on their Toshiba 50-inch TV whenever launching OTT apps. Our technician accessed the recovery console, refreshed the firmware memory, and restored smooth streaming."
    },
    {
      locality: "Thanthonimalai, Karur",
      title: "Toshiba 32-inch LED Power Board Resuscitation",
      text: "A household in Thanthonimalai had their Toshiba TV fail completely after a sudden voltage spike. Our technician repaired the primary SMPS section by replacing damaged varistors and the PWM control IC, saving the client the cost of a full PCB replacement."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Toshiba[\s\S]*?\]/m, toshibaExp);

// Unique customer experiences for Sharp
const sharpExp = `customerExperiences: [
    {
      locality: "Pasupathipalayam, Karur",
      title: "Sharp Aquos 50-inch LED Backlight Renewal",
      text: "A resident in Pasupathipalayam had a Sharp Aquos TV that lost display illumination while speaker volume remained clear. Our technician removed the UV2A panel safely, fitted new calibrated LED backlight rails, and verified uniform picture brightness across HDMI inputs."
    },
    {
      locality: "Kagithapuramam, Karur",
      title: "Sharp Android TV Startup Freeze Resolved",
      text: "A household in Kagithapuramam faced a Sharp Android TV frozen on the startup screen. The technician connected diagnostic hardware, reflashed the core firmware image, and confirmed smooth app launching within two hours."
    },
    {
      locality: "Sengunthapuram, Karur",
      title: "Sharp Aquos Power Supply Rectifier Repair",
      text: "A client near Sengunthapuram had an Aquos television that refused to power on following a thunderstorm. The technician isolated shorted Schottky barrier diodes on the power board, replaced them on-site, and verified all voltage rails."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Sharp[\s\S]*?\]/m, sharpExp);

// Unique customer experiences for Sansui
const sansuiExp = `customerExperiences: [
    {
      locality: "Inam Karur, Karur",
      title: "Sansui 40-inch Smart LED Backlight Replacement",
      text: "A client in Inam Karur noticed their Sansui 40-inch television playing news audio while the screen stayed dark. Our technician inspected the LED boost line, renewed the entire diode strip array, and confirmed balanced display illumination."
    },
    {
      locality: "Karur Town",
      title: "Sansui Smart TV App Crashing Fixed",
      text: "A viewer in Karur Town reported their Sansui smart TV rebooting unexpectedly every time YouTube was opened. Our technician purged corrupted system application data via recovery mode, restoring stable streaming."
    },
    {
      locality: "Vengamedu, Karur",
      title: "Sansui 32-inch LED Power Supply Servicing",
      text: "A customer in Vengamedu called about a completely dead Sansui LED TV after lightning in the area. The technician replaced the blown fuse, surge thermistor, and bridge rectifier on the single-layer combo board, restoring normal operation."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Sansui[\s\S]*?\]/m, sansuiExp);

// Unique customer experiences for Videocon
const videoconExp = `customerExperiences: [
    {
      locality: "Vennaimalai, Karur",
      title: "Videocon Liquid Luminous Backlight Repair",
      text: "A resident on Vennaimalai had a Videocon 43-inch TV with normal channel sound but no picture. The technician dismantled the back assembly, installed fresh high-lumens LED strips, and verified vibrant picture reproduction."
    },
    {
      locality: "Thanthonimalai, Karur",
      title: "Videocon DDB Smart TV Board Diagnosis",
      text: "A family in Thanthonimalai experienced continuous rebooting on their Videocon Smart TV. The technician diagnosed degrading filter capacitors on the secondary logic rail, replaced them on-site, and restored reliable startup."
    },
    {
      locality: "Kagithapuramam, Karur",
      title: "Videocon 32-inch LED Power Failure Fix",
      text: "A Kagithapuramam household faced a totally dead Videocon TV with no standby light. Our technician repaired the SMPS switching circuit, replaced burnt diodes, and tested standby voltages without needing a replacement board."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Videocon[\s\S]*?\]/m, videoconExp);

// Unique customer experiences for Xiaomi
const xiaomiExp = `customerExperiences: [
    {
      locality: "Pasupathipalayam, Karur",
      title: "Xiaomi Mi TV 4X 50-inch Backlight Service",
      text: "A customer in Pasupathipalayam reported their 50-inch Mi TV 4X losing picture while sound played normally. The technician opened the panel frame, installed a brand-new factory-matched LED backlight strip kit, and verified HDR clarity across set-top box channels."
    },
    {
      locality: "Kovai Road, Karur",
      title: "Mi TV PatchWall Boot Loop Recovery",
      text: "A resident on Kovai Road had a Mi TV 4A stuck indefinitely on the PatchWall logo. Our technician initiated fastboot firmware reflashing, cleared system storage partitions, and restored smooth TV operation without mainboard replacement."
    },
    {
      locality: "Karur Town",
      title: "Mi TV 32-inch Power Supply Surge Repair",
      text: "A family near Karur Bus Stand had their 32-inch Mi LED TV go completely dead after power fluctuation. Our technician repaired the internal SMPS board, swapped damaged diodes and the primary fuse, restoring instant startup."
    }
  ]`;
b1to10 = b1to10.replace(/customerExperiences:\s*\[[\s\S]*?Xiaomi[\s\S]*?\]/m, xiaomiExp);

fs.writeFileSync('scripts/tv_brands_1_to_10.js', b1to10, 'utf8');
console.log('Updated scripts/tv_brands_1_to_10.js');

// 2. Fix tv_brands_11_to_20.js
let b11to20 = fs.readFileSync('scripts/tv_brands_11_to_20.js', 'utf8');

// Fix OnePlus experience time
b11to20 = b11to20.replace(
  "time: 'Completed in 1 hour'",
  "time: 'Completed in 45 minutes'"
);

// Fix TCL intro and type
b11to20 = b11to20.replace(
  'introTamil: "TCL TV-la Google TV logo-la freeze aagudha?",',
  'introTamil: "TCL TV on pannum bodhu Google TV logo-laye ninnududha?",'
);
b11to20 = b11to20.replace(
  'problems: "Frozen on Google TV startup animation, continuous reboot cycle, Wi-Fi failing to connect."',
  'problems: "TCL Google TV stalls on floating bubbles, reboots every two minutes, wireless network settings grayed out."'
);

fs.writeFileSync('scripts/tv_brands_11_to_20.js', b11to20, 'utf8');
console.log('Updated scripts/tv_brands_11_to_20.js');

// 3. Fix scripts/build_clean_26_to_31.js (which generates data_brands_26_to_31.js)
let b26to31src = fs.readFileSync('scripts/build_clean_26_to_31.js', 'utf8');

// Replace repetitive type problem lines in 26-31
const cleanReplacements = [
  // Hyundai
  [
    'Sound playing clearly while display is dark, red standby indicator blinking, HDMI port failing to detect set-top box.',
    'Screen remains pitch dark while dialogues play clearly, standby light pulses twice, HDMI fails to handshake with set-top box.'
  ],
  [
    'Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.',
    'TV does not turn on at all, no power light, humming noise from bottom cabinet, backlight strobing.'
  ],
  // VW
  [
    'Sound playing clearly while display is dark, red standby indicator blinking, HDMI port failing to detect set-top box.',
    'Audio is audible with completely black screen, power LED blinks continuously, HDMI 1 shows no signal from cable box.'
  ],
  [
    'Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.',
    'Complete power failure, unlit standby indicator, crackling noise from speaker grilles, panel flickering on startup.'
  ],
  // Mi
  [
    'Sound playing clearly while display is black, red standby light glowing, HDMI port failing to detect console.',
    'Vocal dialogue audible but Horizon display stays dark, white standby light on, gaming console shows no signal.'
  ],
  [
    'Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.',
    'Unit completely dead after lightning surge, front indicator dark, audio static from dual speakers, panel flickering.'
  ],
  // Redmi
  [
    'Sound playing clearly while display is black, red standby light glowing, HDMI port failing to detect console.',
    'Audio plays normally with blackout panel, steady red power LED, HDMI port fails to detect set-top box.'
  ],
  [
    'Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.',
    'No response from power button, standby LED stays unlit, buzzing audio distortion, intermittent picture blackout.'
  ]
];

cleanReplacements.forEach(([from, to]) => {
  if (b26to31src.includes(from)) {
    b26to31src = b26to31src.replace(from, to);
  }
});

fs.writeFileSync('scripts/build_clean_26_to_31.js', b26to31src, 'utf8');
console.log('Updated scripts/build_clean_26_to_31.js');

// 4. Fix build_tv_brands_21_to_31_unique.js (Brands 21-25)
let b21to25 = fs.readFileSync('scripts/build_tv_brands_21_to_31_unique.js', 'utf8');

// Fix iFFALCON intro
b21to25 = b21to25.replace(
  'introTamil: "iFFALCON TV-la Google TV logo-la freeze aagudha?",',
  'introTamil: "iFFALCON TV startup screen-laye ninnuducha?",'
);

// Fix Vu problem
b21to25 = b21to25.replace(
  'Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.',
  'Television fails to power up, front standby diode off, speaker rattling during action scenes, brightness pulsing.'
);

fs.writeFileSync('scripts/build_tv_brands_21_to_31_unique.js', b21to25, 'utf8');
console.log('Updated scripts/build_tv_brands_21_to_31_unique.js');
