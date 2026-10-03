const fs = require('fs');

let code = fs.readFileSync('scripts/build_clean_26_to_31.js', 'utf8');

const replacements = [
  // 1. VW Playwall 4K Smart TV Repair checks
  [
    'Measures forward voltage across each backlight strip, checks 4K scalar IC temperatures, and tests HDMI switch IC.',
    'Tests constant current backlight inverter channels, monitors video scalar processor heat levels, and checks HDMI receiver IC.'
  ],
  // 2. Acerpure 4K Ultra HD Google TV Repair checks
  [
    'Measures forward voltage across each backlight strip, checks Google TV flash integrity, and tests HDMI switch IC.',
    'Examines backlight array drive voltages, verifies Google TV firmware partitions, and tests multiport HDMI switch integrity.'
  ],
  // 3. Acerpure Smart Google TV Repair desc
  [
    'Interrupted firmware updates or thermal memory fatigue can freeze the television on the boot animation or disable Wi-Fi.',
    'Interrupted over-the-air updates or overheating memory flash chips can stall the TV on boot splash or disconnect Wi-Fi.'
  ],
  // 4. Acerpure Smart Google TV Repair searchIntent
  [
    'We fix Google TV boot loops, app freezing, and Wi-Fi disconnect issues on-site.',
    'Our technicians resolve Google TV startup hangs, app crashing, and wireless dropping at your residence.'
  ],
  // 5. Acerpure Bezel-less Full HD LED TV whenNeeded
  [
    'When the TV fails to turn on after an electrical power surge or the screen flickers during viewing.',
    'When the Acerpure TV shuts down randomly during movies or panel brightness pulses erratically.'
  ],
  // 6. Acerpure Bezel-less Full HD LED TV checks
  [
    'Inspects 12V and 24V power supply outputs, tests speaker coil impedance, and inspects backlight driver circuit.',
    'Measures DC secondary outputs with a digital meter, tests audio speaker coil resistance, and assesses boost driver PCB.'
  ],
  // 7. Acerpure Bezel-less Full HD LED TV parts
  [
    'SMPS power board, stereo speakers, backlight strip set, primary filter capacitors.',
    'Power supply unit, front sound transducers, replacement LED rail bars, smoothing capacitors.'
  ],
  // 8. Redmi 32-inch checks
  [
    'Inspects SMPS power supply board secondary outputs (12V, 24V), speaker cone condition, and inverter board.',
    'Tests power delivery rails from the SMPS, inspects dual audio speakers, and checks backlight inverter board output.'
  ],
  // 9. Mi TV 4A desc
  [
    'Voltage fluctuations during summer power outages can damage SMPS filter capacitors or cause backlight flickering.',
    'High humidity or lightning surges can trigger power board diode failure or cause LED backlight fading.'
  ],
  // 10. Mi TV 4A searchIntent
  [
    'We inspect SMPS circuit boards, renew backlight bars, and service speakers directly at home.',
    'We check SMPS boards on site, install genuine replacement backlight strips, and restore faulty audio.'
  ],
  // 11. Mi TV 4A checks
  [
    'Inspects SMPS power supply board secondary outputs (12V, 24V), speaker cone condition, and inverter board.',
    'Checks 12V and 24V DC lines, tests speaker diaphragm integrity, and verifies backlight driver feedback.'
  ],
  // 12. Hyundai Frameless searchIntent
  [
    'We inspect SMPS circuit boards, renew backlight bars, and service speakers at your doorstep.',
    'Technicians diagnose power circuits, fit matched LED backlight strips, and restore clear audio at home.'
  ]
];

let count = 0;
for (const [target, replacement] of replacements) {
  if (code.includes(target)) {
    code = code.replace(target, replacement);
    count++;
  } else {
    console.log('NOT FOUND:', target);
  }
}

fs.writeFileSync('scripts/build_clean_26_to_31.js', code, 'utf8');
console.log(`Successfully replaced ${count} of ${replacements.length} items.`);
