const b1to10 = require('./tv_brands_1_to_10.js');
const b11to20 = require('./tv_brands_11_to_20.js');
const b21to31 = require('./tv_brands_21_to_31.js');
const all = [...b1to10, ...b11to20, ...b21to31];

console.log('Total brands:', all.length);
all.forEach((b, i) => {
  const typesArr = b.tvTypes || b.types;
  const probsArr = b.problems;
  const expArr = b.customerExperiences || b.experiences;
  console.log('[' + (i + 1) + '] ' + b.name + ': ' + (typesArr ? typesArr.length : 0) + ' types, ' + (probsArr ? probsArr.length : 0) + ' probs, ' + (expArr ? expArr.length : 0) + ' exps');
});
