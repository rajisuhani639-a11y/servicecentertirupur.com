const fs = require('fs');

let code = fs.readFileSync('scripts/build_clean_26_to_31.js', 'utf8');

const replacements = [
  [
    'High humidity or lightning surges can trigger power board diode failure or cause LED backlight fading.',
    'Unstable mains voltage or long hours of binge watching can cause power rectifier diodes to fail or degrade LED backlights prematurely.'
  ],
  [
    'We check SMPS boards on site, install genuine replacement backlight strips, and restore faulty audio.',
    'Searching for <strong>Mi LED TV service in Karur</strong>? We check power supply boards, replace burnt-out LED light arrays, and fix crackling speakers right in your home.'
  ],
  [
    'Technicians diagnose power circuits, fit matched LED backlight strips, and restore clear audio at home.',
    'Our team evaluates power adapter modules, installs brand-compatible LED backlight rows, and fixes cabinet speaker distortion.'
  ]
];

for (const [target, replacement] of replacements) {
  if (code.includes(target)) {
    code = code.replace(target, replacement);
  } else {
    console.log('NOT FOUND:', target);
  }
}

fs.writeFileSync('scripts/build_clean_26_to_31.js', code, 'utf8');
console.log('Updated 3 final items in build_clean_26_to_31.js');
