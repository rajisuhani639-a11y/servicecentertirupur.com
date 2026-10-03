const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles('.');

let totalFaqUpdated = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const h2Idx = content.search(/<h2[^>]*>[^<]*(?:Frequently Asked Questions|FAQ)[^<]*<\/h2>/i);
  if (h2Idx === -1) return;
  
  const secEnd = content.indexOf('</section>', h2Idx);
  if (secEnd === -1) return;
  
  let sec = content.slice(h2Idx, secEnd);
  
  // Count how many pricing questions exist
  const pricingMatches = [...sec.matchAll(/how much|visiting charge|inspection charge|cost|pricing|price|charges|fee/gi)];
  
  // If fewer than 2 pricing questions, let's enrich!
  if (pricingMatches.length < 2) {
    const isServiceCenter = f.includes('service-center');
    const parts = f.split(path.sep);
    const category = parts[0];
    const brandMatch = f.match(/([a-z0-9-]+)-(?:washing-machine|refrigerator|ac|tv|service-center)/i);
    let brand = brandMatch ? brandMatch[1].replace(/-/g, ' ') : '';
    brand = brand.charAt(0).toUpperCase() + brand.slice(1);
    
    if (isServiceCenter) {
      const q = `What is the visiting inspection charge for ${brand} appliance service in Karur?`;
      const a = `Our standard doorstep inspection charge is ₹249 across all Karur localities. The technician checks the ${brand} appliance at your home and explains the exact fault, required spare parts, and estimated repair cost before beginning any work.`;
      
      const newFaqItem = `\n            <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">\n              <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">${q}</h3>\n              <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">${a}</p>\n            </div>`;
      
      // Insert before the last </div> in the FAQ container
      const lastDiv = sec.lastIndexOf('</div>');
      sec = sec.slice(0, lastDiv) + newFaqItem + '\n        ' + sec.slice(lastDiv);
      content = content.slice(0, h2Idx) + sec + content.slice(secEnd);
      fs.writeFileSync(f, content, 'utf8');
      totalFaqUpdated++;
    } else {
      // Standard appliance page
      let q = '';
      let a = '';
      
      if (category === 'washing-machine') {
        q = `How much does ${brand} washing machine repair cost in Karur?`;
        a = `Our doorstep inspection charge is ₹249. Minor service or drain cleaning starts from ₹299–₹399 onwards. If any component like the door lock, drain pump, or inlet valve needs replacement, the technician checks the model and gives you a clear price estimate before starting the repair.`;
      } else if (category === 'ac') {
        q = `How is the repair price decided for ${brand} AC in Karur?`;
        a = `Our doorstep visit and fault inspection fee is ₹249–₹350. General servicing or jet washing starts from ₹449–₹499 onwards. If parts like the run capacitor, sensor, or fan motor need replacement, the exact cost is explained to you after inspection before work begins.`;
      } else if (category === 'fridge') {
        q = `How much does ${brand} refrigerator repair cost in Karur?`;
        a = `Doorstep inspection across Karur is ₹249. Minor repairs like drain tube clearing or thermostat adjustments start from ₹299–₹449 onwards. Component replacements like defrost timers, start relays, or fan motors depend on the model and are quoted before installation.`;
      } else if (category === 'tv') {
        q = `How much is the inspection fee for ${brand} TV repair in Karur?`;
        a = `Our doorstep inspection and electronic testing charge is ₹249 across Karur. The technician tests the power supply, motherboard, and display circuits on-site and provides an honest estimate before any repair.`;
      } else {
        q = `What is the visiting inspection charge in Karur?`;
        a = `Our doorstep inspection charge is ₹249 across Karur. The technician checks the appliance at your residence and provides a transparent cost estimate before starting any work.`;
      }
      
      const newFaqItem = `\n        <div class="faq-item">\n          <button class="faq-question" aria-expanded="false">\n            <span>${q}</span>\n            <svg class="faq-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>\n          </button>\n          <div class="faq-answer">\n            <p>${a}</p>\n          </div>\n        </div>`;
      
      // Find faq-list or faq-container
      const listMatch = sec.match(/<div class=["'](faq-list|faq-container)["'][^>]*>/i);
      if (listMatch) {
        const listIdx = sec.indexOf(listMatch[0]) + listMatch[0].length;
        sec = sec.slice(0, listIdx) + newFaqItem + sec.slice(listIdx);
        content = content.slice(0, h2Idx) + sec + content.slice(secEnd);
        fs.writeFileSync(f, content, 'utf8');
        totalFaqUpdated++;
      }
    }
  }
});

console.log(`Enriched FAQs with pricing questions in ${totalFaqUpdated} files.`);
