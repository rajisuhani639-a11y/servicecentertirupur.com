// scripts/build_master_faq_engine.js
// Sophisticated Brand-Wise & Appliance-Wise FAQ Engine for servicecentercoimbatore.com

const fs = require('fs');
const path = require('path');
const { BRAND_TECH } = require('./brand_appliance_data.js');
const { BRAND_DETAILS } = require('./brand_custom_data.js');

const localities = [
  'Gandhipuram', 'RS Puram', 'Peelamedu', 'Singanallur', 'Saravanampatti', 'Saibaba Colony',
  'Vadavalli', 'Ramanathapuram', 'Ganapathy', 'Thudiyalur', 'Kovaipudur', 'Kuniyamuthur',
  'Sundarapuram', 'Podanur', 'Ukkadam', 'Kalapatti', 'Ondipudur', 'Sulur', 'Irugur',
  'Neelambur', 'Vilankurichi', 'Koundampalayam', 'Perur', 'Eachanari', 'Malumichampatti'
];

let locCounter = 0;
function nextLoc() {
  return localities[(locCounter++) % localities.length];
}

const usedQuestions = new Set();
const usedAnswers = new Set();

function cleanQ(q) {
  let res = q.trim();
  if (usedQuestions.has(res)) {
    // Add natural variation
    const loc = nextLoc();
    if (!res.includes('in Coimbatore') && !res.includes('in ' + loc)) {
      res = res.replace(/\?$/, ` in ${loc}?`);
    } else {
      res = res.replace(/\?$/, ` for Coimbatore homes?`);
    }
  }
  let attempt = 2;
  while (usedQuestions.has(res)) {
    res = res.replace(/\?$/, ` (Case ${attempt++})?`);
  }
  usedQuestions.add(res);
  return res;
}

function cleanA(a) {
  let res = a.trim();
  if (usedAnswers.has(res)) {
    res = `${res} For doorstep service in Coimbatore, contact our Gandhipuram hub at +91 92115 12088.`;
  }
  let attempt = 2;
  while (usedAnswers.has(res)) {
    res = `${res} [Reference Ref-CBE-${attempt++}]`;
  }
  usedAnswers.add(res);
  return res;
}

module.exports = {
  nextLoc,
  cleanQ,
  cleanA,
  usedQuestions,
  usedAnswers
};
