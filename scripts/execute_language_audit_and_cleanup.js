// scripts/execute_language_audit_and_cleanup.js
// Recursively scans all 188 HTML files, simplifies heavy English words,
// overly formal corporate phrases, and replaces them with simple, everyday Indian English.
// Also ensures all 10 favicon formats are properly linked in <head>.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && f !== 'node_modules' && f !== '.git') {
      res = res.concat(walk(p));
    } else if (f.endsWith('.html')) {
      res.push(p);
    }
  });
  return res;
}

const htmlFiles = walk(ROOT_DIR);
console.log(`Auditing and simplifying language across ${htmlFiles.length} HTML files...`);

let totalReplacements = 0;
const replacementStats = {};

function applyReplacement(content, regex, replacement, label) {
  let matchCount = 0;
  content = content.replace(regex, (match) => {
    matchCount++;
    return typeof replacement === 'function' ? replacement(match) : replacement;
  });
  if (matchCount > 0) {
    totalReplacements += matchCount;
    replacementStats[label] = (replacementStats[label] || 0) + matchCount;
  }
  return content;
}

htmlFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Favicon Head Tag Link Update (ensuring 180x180 and 512x512 are linked alongside others)
  const isSubpage = f.includes(path.sep + 'ac' + path.sep) ||
                    f.includes(path.sep + 'fridge' + path.sep) ||
                    f.includes(path.sep + 'washing-machine' + path.sep) ||
                    f.includes(path.sep + 'tv' + path.sep) ||
                    f.includes(path.sep + 'servicecenter' + path.sep) ||
                    f.includes(path.sep + 'blog' + path.sep);
  const prefix = isSubpage ? '../' : '';

  const cleanFaviconBlock = `  <!-- Favicon System -->
  <link rel="icon" type="image/x-icon" href="${prefix}favicon.ico">
  <link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="${prefix}favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="${prefix}favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="${prefix}favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="${prefix}favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="180x180" href="${prefix}favicon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="${prefix}favicon-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="${prefix}favicon-512x512.png">
  <link rel="apple-touch-icon" sizes="180x180" href="${prefix}apple-touch-icon.png">
  <link rel="manifest" href="${prefix}site.webmanifest">`;

  content = content.replace(/\s*<!-- Favicon System -->[\s\S]*?<link rel="manifest"[^>]*>/, '\n' + cleanFaviconBlock);

  // 2. Language Simplification: Heavy English -> Simple Everyday Indian English

  // A. Troubleshooting -> Repair help / Problem checks / Repair advice
  content = applyReplacement(content, /troubleshooting guidance/gi, 'repair help', 'troubleshooting guidance -> repair help');
  content = applyReplacement(content, /troubleshooting advice/gi, 'repair advice', 'troubleshooting advice -> repair advice');
  content = applyReplacement(content, /troubleshooting tips/gi, 'repair tips', 'troubleshooting tips -> repair tips');
  content = applyReplacement(content, /& Fault Troubleshooting/gi, '& Common Problems', '& Fault Troubleshooting -> & Common Problems');
  content = applyReplacement(content, /and Fault Troubleshooting/gi, 'and Common Problems', 'and Fault Troubleshooting -> and Common Problems');
  content = applyReplacement(content, /appliance troubleshooting/gi, 'appliance repair', 'appliance troubleshooting -> appliance repair');
  content = applyReplacement(content, /cooling troubleshooting/gi, 'cooling repair', 'cooling troubleshooting -> cooling repair');
  content = applyReplacement(content, /machine troubleshooting/gi, 'machine repair', 'machine troubleshooting -> machine repair');
  content = applyReplacement(content, /troubleshooting checks/gi, 'problem checks', 'troubleshooting checks -> problem checks');
  content = applyReplacement(content, /\btroubleshooting\b/gi, 'problem checking', 'troubleshooting -> problem checking');

  // B. Diagnosis -> Problem checking / Check / Inspection
  content = applyReplacement(content, /Detailed diagnosis report/gi, 'Detailed inspection report', 'Detailed diagnosis report -> Detailed inspection report');
  content = applyReplacement(content, /On-site diagnosis/gi, 'On-site check', 'On-site diagnosis -> On-site check');
  content = applyReplacement(content, /on-site diagnosis/gi, 'on-site check', 'on-site diagnosis -> on-site check');
  content = applyReplacement(content, /rapid appliance diagnosis/gi, 'quick appliance check', 'rapid appliance diagnosis -> quick appliance check');
  content = applyReplacement(content, /appliance diagnosis/gi, 'appliance check', 'appliance diagnosis -> appliance check');
  content = applyReplacement(content, /machine diagnosis/gi, 'machine check', 'machine diagnosis -> machine check');
  content = applyReplacement(content, /error code diagnosis/gi, 'error code check', 'error code diagnosis -> error code check');
  content = applyReplacement(content, /\bdiagnosis\b/gi, 'check', 'diagnosis -> check');

  // C. Diagnostic -> Testing / Inspection / Check
  content = applyReplacement(content, /Diagnostic Rate/gi, 'Inspection Rate', 'Diagnostic Rate -> Inspection Rate');
  content = applyReplacement(content, /diagnostic rate/gi, 'inspection rate', 'diagnostic rate -> inspection rate');
  content = applyReplacement(content, /Diagnostic check/gi, 'Complete check', 'Diagnostic check -> Complete check');
  content = applyReplacement(content, /diagnostic check/gi, 'complete check', 'diagnostic check -> complete check');
  content = applyReplacement(content, /diagnostic meters and tools/gi, 'testing meters and tools', 'diagnostic meters -> testing meters');
  content = applyReplacement(content, /diagnostic protocols/gi, 'inspection methods', 'diagnostic protocols -> inspection methods');
  content = applyReplacement(content, /diagnostic steps/gi, 'inspection steps', 'diagnostic steps -> inspection steps');
  content = applyReplacement(content, /diagnostic process/gi, 'inspection process', 'diagnostic process -> inspection process');
  content = applyReplacement(content, /\bdiagnostic\b/gi, 'inspection', 'diagnostic -> inspection');

  // D. Assistance -> Service / Help / Support
  content = applyReplacement(content, /doorstep assistance/gi, 'doorstep service', 'doorstep assistance -> doorstep service');
  content = applyReplacement(content, /professional assistance/gi, 'expert help', 'professional assistance -> expert help');
  content = applyReplacement(content, /prompt assistance/gi, 'quick help', 'prompt assistance -> quick help');
  content = applyReplacement(content, /technical assistance/gi, 'technical help', 'technical assistance -> technical help');
  content = applyReplacement(content, /repair assistance/gi, 'repair support', 'repair assistance -> repair support');
  content = applyReplacement(content, /service assistance/gi, 'service support', 'service assistance -> service support');
  content = applyReplacement(content, /\bassistance\b/gi, 'help', 'assistance -> help');

  // E. Resolution -> Fix / Solution
  content = applyReplacement(content, /quick resolution/gi, 'quick fix', 'quick resolution -> quick fix');
  content = applyReplacement(content, /prompt resolution/gi, 'quick fix', 'prompt resolution -> quick fix');
  content = applyReplacement(content, /doorstep resolution/gi, 'doorstep fix', 'doorstep resolution -> doorstep fix');
  content = applyReplacement(content, /complete resolution/gi, 'complete fix', 'complete resolution -> complete fix');
  content = applyReplacement(content, /\bresolution\b/gi, 'fix', 'resolution -> fix');

  // F. Rectify / Rectification -> Repair / Fix / Solve
  content = applyReplacement(content, /rectify panranga/gi, 'solve panranga', 'rectify panranga -> solve panranga');
  content = applyReplacement(content, /rectify panrom/gi, 'solve panrom', 'rectify panrom -> solve panrom');
  content = applyReplacement(content, /rectification/gi, 'repair', 'rectification -> repair');
  content = applyReplacement(content, /rectified/gi, 'fixed', 'rectified -> fixed');
  content = applyReplacement(content, /\brectify\b/gi, 'fix', 'rectify -> fix');

  // G. Malfunctioning / Malfunction -> Not working / Problem
  content = applyReplacement(content, /malfunctioning/gi, 'not working', 'malfunctioning -> not working');
  content = applyReplacement(content, /malfunction/gi, 'problem', 'malfunction -> problem');

  // H. Comprehensive -> Complete
  content = applyReplacement(content, /comprehensive/gi, 'complete', 'comprehensive -> complete');

  // I. Utilize / Utilization -> Use
  content = applyReplacement(content, /utilization/gi, 'use', 'utilization -> use');
  content = applyReplacement(content, /\butilize\b/gi, 'use', 'utilize -> use');
  content = applyReplacement(content, /\butilized\b/gi, 'used', 'utilized -> used');

  // J. Facilitate / Commence
  content = applyReplacement(content, /\bfacilitate\b/gi, 'help', 'facilitate -> help');
  content = applyReplacement(content, /\bcommence\b/gi, 'start', 'commence -> start');

  // K. Corporate / Robotic phrases
  content = applyReplacement(content, /committed to excellence/gi, 'focus on good service', 'committed to excellence -> focus on good service');
  content = applyReplacement(content, /seamless experience/gi, 'easy service experience', 'seamless experience -> easy service experience');
  content = applyReplacement(content, /state-of-the-art/gi, 'modern', 'state-of-the-art -> modern');
  content = applyReplacement(content, /unparalleled/gi, 'trusted', 'unparalleled -> trusted');
  content = applyReplacement(content, /cutting-edge/gi, 'modern', 'cutting-edge -> modern');
  content = applyReplacement(content, /best-in-class/gi, 'quality', 'best-in-class -> quality');
  content = applyReplacement(content, /tailored solutions/gi, 'practical solutions', 'tailored solutions -> practical solutions');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
  }
});

console.log(`\n========================================`);
console.log(`Language Audit & Simplification Complete:`);
console.log(`Total language adjustments made: ${totalReplacements}`);
console.log(`Breakdown by category:`);
Object.entries(replacementStats).sort((a,b) => b[1] - a[1]).forEach(([lbl, cnt]) => {
  console.log(`  - ${lbl.padEnd(50)}: ${cnt}`);
});
console.log(`========================================\n`);
