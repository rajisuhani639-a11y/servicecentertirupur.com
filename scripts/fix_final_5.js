const fs = require('fs');

// 1. Fix tv_brands_11_to_20.js
const b11to20 = require('./tv_brands_11_to_20.js');

const tcl = b11to20.find(b => b.name === 'TCL');
if (tcl) {
  tcl.introTamil = 'TCL TV-la sound varudhu screen black-aa irukka? Start aagum bodhu home screen-laye ninnududha?';
  const tclTypes = tcl.tvTypes || tcl.types || [];
  tclTypes.forEach(t => {
    if (t.problems && t.problems.includes('Frozen on Google TV startup animation')) {
      t.problems = 'TCL Google TV stalls on floating bubbles, reboots every two minutes, wireless network settings grayed out.';
    }
  });
}

const oneplus = b11to20.find(b => b.name === 'OnePlus');
if (oneplus) {
  const oneplusExps = oneplus.customerExperiences || oneplus.experiences || [];
  oneplusExps.forEach(e => {
    if (e.time && e.time.includes('Completed in 1 hour')) {
      e.time = 'Completed in 40 minutes';
    }
  });
}

const b11Content = 'module.exports = ' + JSON.stringify(b11to20, null, 2) + ';\n';
fs.writeFileSync('scripts/tv_brands_11_to_20.js', b11Content, 'utf8');
console.log('Fixed TCL & OnePlus in tv_brands_11_to_20.js');

// 2. Fix build_tv_brands_21_to_31_unique.js
let b21to25Code = fs.readFileSync('scripts/build_tv_brands_21_to_31_unique.js', 'utf8');

b21to25Code = b21to25Code.replace(
  'iFFALCON TV-la sound varudhu picture varalaiya? Google TV logo-la freeze aagudha?',
  'iFFALCON TV-la sound varudhu picture varalaiya? Startup-la floating circles-laye restart aagudha?'
);

b21to25Code = b21to25Code.replace(
  'Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.',
  'Television fails to power up, front standby diode off, speaker rattling during action scenes, brightness pulsing.'
);

fs.writeFileSync('scripts/build_tv_brands_21_to_31_unique.js', b21to25Code, 'utf8');
console.log('Fixed iFFALCON & Vu in build_tv_brands_21_to_31_unique.js');
