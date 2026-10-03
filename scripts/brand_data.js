// Master brand data combining all 29 unique brands
const brands_1_to_10 = require('./brands_1_to_10');
const brands_11_to_20 = require('./brands_11_to_20');
const brands_21_to_29 = require('./brands_21_to_29');

const allBrands = [...brands_1_to_10, ...brands_11_to_20, ...brands_21_to_29];

module.exports = allBrands;
