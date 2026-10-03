// scripts/render_tiruppur_localities.js
// Renders the 200 Tirupur localities section for any page (50 East, 50 West, 50 North, 50 South)
// Incorporates page-specific appliance + brand + service locality keyword headings:
// - Brand Service Center: [Brand] Service Center in [Locality]
// - Washing Machine: [Brand] Washing Machine Repair in [Locality]
// - AC: [Brand] AC Repair in [Locality]
// - Fridge: [Brand] Fridge Repair in [Locality]
// - TV: [Brand] TV Repair in [Locality]
// - General / Root: Home Appliance Repair in [Locality]

const localities = require('./tiruppur_localities.js');

function rotateArray(arr, offset) {
  const n = arr.length;
  const o = offset % n;
  return [...arr.slice(o), ...arr.slice(0, o)];
}

function renderLocalitiesSection(pageData, pageIndex) {
  const rawBrand = pageData.brand || '';
  const isGeneric = !rawBrand || rawBrand.startsWith('All') || rawBrand === 'Home Appliance Multi-Brand';
  const brand = isGeneric ? '' : rawBrand;
  const cat = pageData.category;
  
  let mainHeading = `${brand ? brand + ' ' : 'Home Appliance '}Service Center Areas in Tirupur (200 Localities)`;
  let subText = `Doorstep service coverage for ${brand ? brand + ' ' : ''}appliances across East, West, North, and South Tirupur.`;

  let kwPrefix = 'Home Appliance Repair';

  if (cat === 'ac') {
    mainHeading = `${brand ? brand + ' ' : ''}AC Repair Coverage Across Tirupur Areas (200 Localities)`;
    subText = `Doorstep split and inverter air conditioner repair coverage across East, West, North, and South Tirupur.`;
    kwPrefix = brand ? `${brand} AC Repair` : `AC Repair Service`;
  } else if (cat === 'fridge') {
    mainHeading = `${brand ? brand + ' ' : ''}Refrigerator Repair Coverage Across Tirupur (200 Localities)`;
    subText = `Doorstep single door, double door, and inverter fridge service coverage across East, West, North, and South Tirupur.`;
    kwPrefix = brand ? `${brand} Fridge Repair` : `Refrigerator Repair`;
  } else if (cat === 'washing-machine') {
    mainHeading = `${brand ? brand + ' ' : ''}Washing Machine Service Coverage Across Tirupur (200 Localities)`;
    subText = `Doorstep front load, top load, and semi-automatic washer repair coverage across East, West, North, and South Tirupur.`;
    kwPrefix = brand ? `${brand} Washing Machine Repair` : `Washing Machine Repair`;
  } else if (cat === 'tv') {
    mainHeading = `${brand ? brand + ' ' : ''}TV Repair Service Areas in Tirupur (200 Localities)`;
    subText = `Doorstep LED, Smart, and 4K television repair coverage across East, West, North, and South Tirupur.`;
    kwPrefix = brand ? `${brand} TV Repair` : `LED TV Repair`;
  } else if (cat === 'service-center') {
    mainHeading = `${brand ? brand + ' ' : 'Home Appliance '}Service Center in Tirupur — Doorstep Coverage (200 Localities)`;
    subText = `Multi-locality doorstep repair and technical support for ${brand ? brand + ' ' : ''}appliances throughout Tirupur.`;
    kwPrefix = brand ? `${brand} Service Center` : `Appliance Service Center`;
  } else if (cat === 'root') {
    mainHeading = `Home Appliance Repair Across Tirupur Localities (200 Areas)`;
    subText = `Doorstep service network for washing machines, refrigerators, air conditioners, and LED TVs across East, West, North, and South Tirupur.`;
    kwPrefix = `Home Appliance Repair`;
  }

  // Rotate each zone's 50 localities uniquely for this pageIndex
  const eastList = rotateArray(localities.east, pageIndex * 7);
  const westList = rotateArray(localities.west, pageIndex * 11);
  const northList = rotateArray(localities.north, pageIndex * 13);
  const southList = rotateArray(localities.south, pageIndex * 17);

  const zones = [
    {
      label: "East Tirupur",
      desc: "Covering Nallur, Muthanampalayam, Kovilvazhi, Kangeyam Road, Vijayapuram, Chettipalayam, Rakkiyapalayam, KNP Colony, Iduvampalayam, and eastern arterial corridors.",
      list: eastList
    },
    {
      label: "West Tirupur",
      desc: "Covering Gandhi Nagar, Kumar Nagar, 15 Velampalayam, Velampalayam, Angeripalayam, Avinashi Road, Mangalam Road, Rayapuram, Boyampalayam, and western corridors.",
      list: westList
    },
    {
      label: "North Tirupur",
      desc: "Covering P.N. Road, Pandian Nagar, Neruperichal, Pooluvapatti, Samundipuram, Pitchampalayam, New Bus Stand, Perumanallur, Kanakkampalayam, and northern industrial routes.",
      list: northList
    },
    {
      label: "South Tirupur",
      desc: "Covering Palladam Road, Veerapandi, Andipalayam, Karuvampalayam, Thennampalayam, Cotton Market, Murungampalayam, Arulpuram, Chinnakarai, and southern corridors.",
      list: southList
    }
  ];

  const zonesHtml = zones.map((z) => {
    const cardsHtml = z.list.map(loc => `
          <div class="locality-card" style="padding: 0.95rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-sm); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${loc.name}</span>
                <span style="font-size: 0.72rem; color: #fff; background: var(--primary-light); padding: 0.1rem 0.35rem; border-radius: 3px; font-weight: 600;">PIN ${loc.pincode}</span>
              </div>
              <h4 style="font-size: 0.95rem; color: var(--primary-color); margin: 0.3rem 0 0.45rem; font-weight: 700; line-height: 1.35;">
                <a href="tel:+918882055269" class="sync-call" style="color: inherit; text-decoration: none;" title="Book ${kwPrefix} in ${loc.name}">${kwPrefix} in ${loc.name}</a>
              </h4>
              <p style="font-size: 0.8rem; color: var(--text-color); line-height: 1.45; margin: 0 0 0.4rem;">${loc.description}</p>
              <p style="font-size: 0.74rem; color: var(--text-muted); margin: 0;"><strong>Nearby:</strong> ${loc.landmark}</p>
            </div>
          </div>`).join('\n');

    return `
      <!-- Zone: ${z.label} (50 Localities) -->
      <div class="locality-zone" style="margin-bottom: 2.5rem;">
        <div style="background: #f1f5f9; padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1rem; border-left: 4px solid var(--accent-blue);">
          <h3 style="font-size: 1.25rem; color: var(--primary-color); margin-bottom: 0.25rem;">${z.label} (50 Localities)</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">${z.desc}</p>
        </div>
        <div class="localities-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.85rem;">
${cardsHtml}
        </div>
      </div>`;
  }).join('\n');

  return `<!-- 200 Localities Section: East, West, North, South Tirupur -->
  <section class="section" id="localitiesSection">
    <div class="container">
      <div class="section-header">
        <h2>${mainHeading}</h2>
        <p>${subText}</p>
      </div>

${zonesHtml}
    </div>
  </section>`;
}

module.exports = {
  renderLocalitiesSection
};
