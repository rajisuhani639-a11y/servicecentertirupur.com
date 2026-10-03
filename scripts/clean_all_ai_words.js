const fs = require('fs');

const fileReplacements = [
  {
    file: 'scripts/tv_brand_why_choose.js',
    replacements: [
      ['{ title: "Comprehensive Testing",', '{ title: "Full Testing & Verification",'],
      ['{ title: "Precision Board Servicing",', '{ title: "Exact Board Servicing",']
    ]
  },
  {
    file: 'scripts/tv_brand_process.js',
    replacements: [
      ['"title": "Precision Circuit & Strip Fix"', '"title": "Careful Circuit & Strip Fix"'],
      ['"title": "Precision Component Fix"', '"title": "Accurate Component Fix"'],
      ['"title": "Comprehensive Quality Check"', '"title": "Thorough Quality Check"'],
      ['"title": "Precision Component Servicing"', '"title": "Expert Component Servicing"']
    ]
  },
  {
    file: 'scripts/tv_brand_faqs.js',
    replacements: [
      ['We provide comprehensive home inspection for Intex televisions', 'We provide complete home inspection for Intex televisions'],
      ['installs precision-spaced backlight strips', 'installs factory-spaced backlight strips']
    ]
  },
  {
    file: 'scripts/tv_brand_parts.js',
    replacements: [
      ['Precision flat ribbon cables linking', 'High-density flat ribbon cables linking'],
      ['Precision backlighting strips equipped', 'Custom backlighting strips equipped'],
      ['Generates precision gate line drive', 'Generates regulated gate line drive'],
      ['Precision ribbon cable linking the PatchWall', 'Flexible ribbon cable linking the PatchWall'],
      ['Precision Gamma Engine matched backlight', 'Engine-matched backlight diode strips'],
      ['Precision driver module regulating', 'Constant-current driver module regulating'],
      ['enabling seamless 4K HDR streaming', 'enabling smooth 4K HDR streaming'],
      ['Precision inverter circuit delivering', 'Step-up inverter circuit delivering'],
      ['Precision flexible ribbon cable linking', 'Multi-strand flexible ribbon cable linking']
    ]
  },
  {
    file: 'scripts/tv_brands_1_to_10.js',
    replacements: [
      ['recognized for precision Japanese LCD panel engineering', 'recognized for fine Japanese LCD panel engineering'],
      ['and high-precision Japanese panel drivers', 'and original Japanese panel drivers']
    ]
  }
];

fileReplacements.forEach(({ file, replacements }) => {
  let content = fs.readFileSync(file, 'utf8');
  let count = 0;
  replacements.forEach(([from, to]) => {
    if (content.includes(from)) {
      content = content.replace(from, to);
      count++;
    } else {
      console.log(`NOT FOUND in ${file}: ${from}`);
    }
  });
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${count}/${replacements.length} items in ${file}`);
});
