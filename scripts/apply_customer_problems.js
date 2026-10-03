const fs = require('fs');
const path = require('path');

const p1 = require('./prepare_customer_problems_1_to_10');
const p2 = require('./prepare_customer_problems_11_to_20');
const p3 = require('./prepare_customer_problems_21_to_29');
const allExpanded = { ...p1, ...p2, ...p3 };

function updateBrandFile(filePath, brandKeys) {
  let fileContent = fs.readFileSync(filePath, 'utf8');

  brandKeys.forEach(slugKey => {
    const problems = allExpanded[slugKey];
    if (!problems) {
      console.error(`Missing problems for ${slugKey}`);
      return;
    }

    // Format problems JSON nicely
    const problemsJson = JSON.stringify(problems, null, 6)
      .split('\n')
      .map((line, idx) => idx === 0 ? line : '    ' + line)
      .join('\n');

    // Find the brand section in the file using its slug
    const slugStr = `"${slugKey}-ac-repair-service-in-karur.html"`;
    const slugIdx = fileContent.indexOf(slugStr);
    if (slugIdx === -1) {
      console.error(`Could not find slug ${slugStr} in ${filePath}`);
      return;
    }

    // From slugIdx, find customerProblems: [
    const cpStartStr = 'customerProblems: [';
    const cpIdx = fileContent.indexOf(cpStartStr, slugIdx);
    if (cpIdx === -1) {
      console.error(`Could not find customerProblems after ${slugStr}`);
      return;
    }

    // Find the closing bracket ']' followed by ',' and 'faqs:'
    const faqsIdx = fileContent.indexOf('faqs: [', cpIdx);
    if (faqsIdx === -1) {
      console.error(`Could not find faqs: [ after customerProblems in ${slugStr}`);
      return;
    }

    // The ']' is right before faqs: [
    const closingBracketIdx = fileContent.lastIndexOf(']', faqsIdx);
    
    // Replace customerProblems: [ ... ]
    const before = fileContent.substring(0, cpIdx);
    const after = fileContent.substring(closingBracketIdx + 1);

    fileContent = before + `customerProblems: ${problemsJson}` + after;
    console.log(`Updated customerProblems for ${slugKey}`);
  });

  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Saved updated file: ${filePath}`);
}

const f1 = path.join(__dirname, 'brands_1_to_10.js');
const f2 = path.join(__dirname, 'brands_11_to_20.js');
const f3 = path.join(__dirname, 'brands_21_to_29.js');

updateBrandFile(f1, ['carrier', 'daikin', 'samsung', 'voltas', 'o-general', 'panasonic', 'hitachi', 'bajaj', 'midea', 'onida']);
updateBrandFile(f2, ['godrej', 'blue-star', 'lloyd', 'ifb', 'haier', 'whirlpool', 'hisense', 'sharp', 'acerpure', 'kelvinator']);
updateBrandFile(f3, ['tcl', 'bpl', 'mitsubishi', 'motorola', 'kenstar', 'electrolux', 'sansui', 'havells', 'acer']);

console.log("All brand files updated!");
