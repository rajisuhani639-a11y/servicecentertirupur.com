const fs = require('fs');

// 1. Update scripts/build_clean_26_to_31.js
let b26to31 = fs.readFileSync('scripts/build_clean_26_to_31.js', 'utf8');

// Acerpure intro
b26to31 = b26to31.replace(
  'Google TV logo-laye restart aagudha?',
  'Acerpure TV switch-on panna Google TV screen-laye restart aagudha?'
);

// Acerpure TV types problems
b26to31 = b26to31.replace(
  'Sound playing clearly while display is dark, stuck on spinning Google TV dots, HDMI port failing to detect set-top box.',
  'Dialogue audible but screen black, spinning colored circles during startup, set-top box video drops on HDMI.'
);
b26to31 = b26to31.replace(
  'Television completely dead, front standby LED unlit, picture flickering rapidly, buzzing sound from cabinet.',
  'Zero power response after surge, standby light remains unlit, display brightness strobing, hum from back casing.'
);

fs.writeFileSync('scripts/build_clean_26_to_31.js', b26to31, 'utf8');
console.log('Updated scripts/build_clean_26_to_31.js');

// 2. Update scripts/build_tv_brands_21_to_31_unique.js
let b21to25 = fs.readFileSync('scripts/build_tv_brands_21_to_31_unique.js', 'utf8');

// Hisense TV type problem
b21to25 = b21to25.replace(
  'problems: "Frozen on Google TV startup animation, continuous reboot cycle, Wi-Fi failing to connect."',
  'problems: "Stuck indefinitely on Hi-View opening splash, frequent auto-reboot during 4K streaming, dual-band Wi-Fi disconnected."'
);

// iFFALCON intro
b21to25 = b21to25.replace(
  'introTamil: "iFFALCON TV-la Google TV logo-la freeze aagudha?",',
  'introTamil: "iFFALCON TV startup screen-laye ninnuducha?",'
);

fs.writeFileSync('scripts/build_tv_brands_21_to_31_unique.js', b21to25, 'utf8');
console.log('Updated scripts/build_tv_brands_21_to_31_unique.js');
