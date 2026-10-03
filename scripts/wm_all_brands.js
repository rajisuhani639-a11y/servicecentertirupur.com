const brands1To10 = require('./wm_brands_1_to_10');
const brands11To20 = require('./wm_brands_11_to_20');
const brands21To30 = require('./wm_brands_21_to_30');

const allWashingMachineBrands = [
  ...brands1To10,
  ...brands11To20,
  ...brands21To30
];

if (allWashingMachineBrands.length !== 30) {
  console.warn(`WARNING: Expected 30 brands, but got ${allWashingMachineBrands.length}`);
}

module.exports = allWashingMachineBrands;
