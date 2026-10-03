const fs = require('fs');

// 1. blogs_data_1_to_4.js
let f1 = fs.readFileSync('scripts/blogs_data_1_to_4.js', 'utf8');
f1 = f1.replace(/{ name: 'LG AC Repair Erode', url: '\.\.\/ac\/lg-ac-repair-service-in-erode\.html' }/g, "{ name: 'Carrier AC Repair Erode', url: '../ac/carrier-ac-repair-service-in-erode.html' }");
f1 = f1.replace(/\(such as Samsung, LG, Whirlpool, or Godrej\)/g, '(such as Samsung, Whirlpool, Godrej, or Bosch)');
f1 = f1.replace(/{ name: 'LG Refrigerator Repair Erode', url: '\.\.\/fridge\/lg-refrigerator-repair-service-in-erode\.html' }/g, "{ name: 'Hitachi Refrigerator Repair Erode', url: '../fridge/hitachi-refrigerator-repair-service-in-erode.html' }");
f1 = f1.replace(/{ name: 'LG Service Center Erode', url: '\.\.\/servicecenter\/lg-service-center-erode\.html' }/g, "{ name: 'Godrej Service Center Erode', url: '../servicecenter/godrej-service-center-erode.html' }");
f1 = f1.replace(/\(such as IFB, Bosch, LG, and Samsung\)/g, '(such as IFB, Bosch, Whirlpool, and Samsung)');
f1 = f1.replace(/• LG: Error "OE" indicates an obstructed drain hose or jammed drain pump\./g, '• Error "OE" or "E03" indicates an obstructed drain hose or jammed drain pump.');
f1 = f1.replace(/{ name: 'LG Washing Machine Repair Erode', url: '\.\.\/washing-machine\/lg-washing-machine-repair-service-in-erode\.html' }/g, "{ name: 'Godrej Washing Machine Repair Erode', url: '../washing-machine/godrej-washing-machine-repair-service-in-erode.html' }");
f1 = f1.replace(/OE \(on LG\)/g, 'OE (on select digital washers)');
f1 = f1.replace(/{ name: 'LG TV Repair Erode', url: '\.\.\/tv\/lg-tv-repair-service-in-erode\.html' }/g, "{ name: 'Panasonic TV Repair Erode', url: '../tv/panasonic-tv-repair-service-in-erode.html' }");
fs.writeFileSync('scripts/blogs_data_1_to_4.js', f1, 'utf8');

// 2. blogs_data_5_to_8.js
let f2 = fs.readFileSync('scripts/blogs_data_5_to_8.js', 'utf8');
f2 = f2.replace(/\(LG, Samsung, IFB, Whirlpool, Bosch — inspection/g, '(Samsung, IFB, Whirlpool, Bosch, Godrej — inspection');
f2 = f2.replace(/{ name: 'LG Refrigerator Repair Erode', url: '\.\.\/fridge\/lg-refrigerator-repair-service-in-erode\.html' }/g, "{ name: 'Bosch Refrigerator Repair Erode', url: '../fridge/bosch-refrigerator-repair-service-in-erode.html' }");
fs.writeFileSync('scripts/blogs_data_5_to_8.js', f2, 'utf8');

// 3. blogs_data_9_to_12.js
let f3 = fs.readFileSync('scripts/blogs_data_9_to_12.js', 'utf8');
f3 = f3.replace(/\(like recent models from LG, Samsung, IFB, Bosch, and Whirlpool\)/g, '(like recent models from Samsung, IFB, Bosch, and Whirlpool)');
f3 = f3.replace(/{ name: 'LG Washing Machine Repair Erode', url: '\.\.\/washing-machine\/lg-washing-machine-repair-service-in-erode\.html' }/g, "{ name: 'Panasonic Washing Machine Repair Erode', url: '../washing-machine/panasonic-washing-machine-repair-service-in-erode.html' }");
f3 = f3.replace(/{ name: 'LG Service Center Erode', url: '\.\.\/servicecenter\/lg-service-center-erode\.html' }/g, "{ name: 'Bosch Service Center Erode', url: '../servicecenter/bosch-service-center-erode.html' }");
fs.writeFileSync('scripts/blogs_data_9_to_12.js', f3, 'utf8');

console.log('✓ Successfully cleaned brand links!');
