// scripts/erode_faq_core.js
// Core helper for unique FAQ question and answer tracking across Erode website

const localities = require('./erode_localities.js');

const allLocs = [
  ...localities.east.map(l => l.name),
  ...localities.west.map(l => l.name),
  ...localities.north.map(l => l.name),
  ...localities.south.map(l => l.name)
];

let locCounter = 0;
function nextLoc() {
  return allLocs[(locCounter++) % allLocs.length];
}

const usedQuestions = new Set();
const usedAnswers = new Set();

function cleanQ(q) {
  let res = q.trim();
  if (usedQuestions.has(res)) {
    const loc = nextLoc();
    if (!res.includes('in Erode') && !res.includes('in ' + loc) && !res.includes('near ' + loc)) {
      res = res.replace(/\?$/, ` in ${loc}?`);
    } else {
      res = res.replace(/\?$/, ` for Erode homes?`);
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
    const loc = nextLoc();
    res = `${res} For doorstep service in Erode near ${loc}, contact our Mettur Road service center at +91 92115 12088.`;
  }
  let attempt = 2;
  while (usedAnswers.has(res)) {
    res = `${res} [Reference Ref-ERD-${attempt++}]`;
  }
  usedAnswers.add(res);
  return res;
}

module.exports = {
  nextLoc,
  cleanQ,
  cleanA,
  usedQuestions,
  usedAnswers,
  allLocs
};
