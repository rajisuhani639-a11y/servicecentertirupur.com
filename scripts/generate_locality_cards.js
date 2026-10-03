const fs = require('fs');
const path = require('path');

const localitiesList = JSON.parse(fs.readFileSync(path.join(__dirname, 'karur_localities.json'), 'utf8'));

function getPreposition(locName) {
  return (locName.includes('Road') || locName.includes('Salai')) ? 'on' : 'in';
}

/**
 * Generate 60 locality cards for Main AC page
 */
function generateMainAcLocalitiesHtml() {
  const keywordTemplates = [
    (loc, prep) => `AC Repair Service ${prep} ${loc}, Karur`,
    (loc, prep) => `AC Service ${prep} ${loc}, Karur`,
    (loc, prep) => `AC Repair Near ${loc}, Karur`,
    (loc, prep) => `AC Technician in ${loc}, Karur`,
    (loc, prep) => `AC Service Center near ${loc}, Karur`,
    (loc, prep) => `Split AC Service ${prep} ${loc}, Karur`,
    (loc, prep) => `Inverter AC Repair ${prep} ${loc}, Karur`,
    (loc, prep) => `Air Conditioner Service ${prep} ${loc}, Karur`
  ];

  const descTemplates = [
    (loc) => `Need AC service near ${loc}? We provide AC checking, repair, cleaning and common cooling problem support in this area.`,
    (loc) => `Looking for AC repair near ${loc}? Our technicians inspect cooling issues, water leaks, gas levels and seasonal servicing.`,
    (loc) => `AC not cooling or leaking water near ${loc}? Get your split or window AC checked at your doorstep by a local technician.`,
    (loc) => `Doorstep AC service is available for residential homes and shops across ${loc}, Karur.`,
    (loc) => `AC technician available near ${loc} for capacitor replacement, jet wash cleaning, filter service and cooling repair.`,
    (loc) => `AC cooling or power tripping issue in ${loc}? Contact us for quick diagnosis and clear upfront pricing before work starts.`
  ];

  return localitiesList.map((locObj, idx) => {
    const loc = locObj.title;
    const prep = getPreposition(loc);
    const kw = keywordTemplates[idx % keywordTemplates.length](loc, prep);
    const desc = descTemplates[idx % descTemplates.length](loc);

    return `        <div class="locality-card">
          <div class="loc-title">📍 ${loc}</div>
          <div class="loc-keyword">${kw}</div>
          <p class="loc-desc">${desc}</p>
        </div>`;
  }).join('\n');
}

/**
 * Generate 60 locality cards for a specific Brand AC page
 */
function generateBrandLocalitiesHtml(brandName) {
  const keywordTemplates = [
    (loc, prep) => `${brandName} AC Service Center ${prep} ${loc}, Karur`,
    (loc, prep) => `${brandName} AC Repair in ${loc}, Karur`,
    (loc, prep) => `${brandName} AC Service ${prep} ${loc}, Karur`,
    (loc, prep) => `${brandName} AC Technician in ${loc}, Karur`,
    (loc, prep) => `${brandName} Split AC Service ${prep} ${loc}, Karur`,
    (loc, prep) => `${brandName} Inverter AC Repair in ${loc}, Karur`,
    (loc, prep) => `${brandName} AC Service Near Me in ${loc}`,
    (loc, prep) => `${brandName} AC Repairing Center ${prep} ${loc}, Karur`
  ];

  const descTemplates = [
    (loc) => `Looking for ${brandName} AC repair near ${loc}? We help with ${brandName} AC cooling problems, water leakage, cleaning, gas checking and other common AC issues.`,
    (loc) => `Need ${brandName} AC service around ${loc}, Karur? Technicians inspect cooling performance, outdoor condenser fins, and electrical parts for ${brandName} ACs.`,
    (loc) => `${brandName} AC cooling problem or water leak near ${loc}? You can contact us for ${brandName} AC checking, repair, cleaning and other common service needs.`,
    (loc) => `${brandName} AC service is available for common cooling, noise, and power issues around ${loc}, Karur.`,
    (loc) => `${brandName} AC Service Center near ${loc}, Karur can help with cooling, water leakage, and starting problems. The AC is inspected before deciding required repairs.`,
    (loc) => `Searching for ${brandName} AC technician near ${loc}? We provide doorstep inspection and repair for split and inverter ${brandName} air conditioners.`,
    (loc) => `${brandName} AC not cooling or showing error code near ${loc}? A technician will check the unit, identify the fault, and explain the repair clearly.`,
    (loc) => `Get doorstep ${brandName} AC service and seasonal maintenance in ${loc}, Karur, with diagnostic inspection and honest pricing.`
  ];

  return localitiesList.map((locObj, idx) => {
    const loc = locObj.title;
    const prep = getPreposition(loc);
    const kw = keywordTemplates[idx % keywordTemplates.length](loc, prep);
    const desc = descTemplates[idx % descTemplates.length](loc);

    return `        <div class="locality-card">
          <div class="loc-title">📍 ${loc}</div>
          <div class="loc-keyword">${kw}</div>
          <p class="loc-desc">${desc}</p>
        </div>`;
  }).join('\n');
}

module.exports = {
  generateMainAcLocalitiesHtml,
  generateBrandLocalitiesHtml
};
