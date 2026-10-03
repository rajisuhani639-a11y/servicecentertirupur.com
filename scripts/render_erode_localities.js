// scripts/render_erode_localities.js
// Renders the 200 Erode localities section for any page (50 East, 50 West, 50 North, 50 South)
// Rotates the locality order per page index so every page displays a unique sequence!

const localities = require('./erode_localities.js');

function rotateArray(arr, offset) {
  const n = arr.length;
  const o = offset % n;
  return [...arr.slice(o), ...arr.slice(0, o)];
}

function renderLocalitiesSection(pageData, pageIndex) {
  const brand = pageData.brand || 'Home Appliance';
  const cat = pageData.category;
  
  let mainHeading = `${brand} Service Center Areas in Erode (200 Localities)`;
  let subText = `Doorstep service coverage for ${brand} home appliances across East, West, North, and South Erode.`;

  if (cat === 'ac') {
    mainHeading = `${brand} AC Repair Coverage Across Erode Areas (200 Localities)`;
    subText = `Doorstep split and inverter air conditioner repair coverage across East, West, North, and South Erode.`;
  } else if (cat === 'fridge') {
    mainHeading = `${brand} Refrigerator Repair Coverage Across Erode (200 Localities)`;
    subText = `Doorstep single door, double door, and inverter fridge service coverage across East, West, North, and South Erode.`;
  } else if (cat === 'washing-machine') {
    mainHeading = `${brand} Washing Machine Service Coverage Across Erode (200 Localities)`;
    subText = `Doorstep front load, top load, and semi-automatic washer repair coverage across East, West, North, and South Erode.`;
  } else if (cat === 'tv') {
    mainHeading = `${brand} TV Repair Service Areas in Erode (200 Localities)`;
    subText = `Doorstep LED, Smart, and 4K television repair coverage across East, West, North, and South Erode.`;
  } else if (cat === 'root') {
    mainHeading = `Home Appliance Repair Across Erode Localities (200 Areas)`;
    subText = `Doorstep service network for washing machines, refrigerators, air conditioners, and LED TVs across East, West, North, and South Erode.`;
  }

  // Rotate each zone's 50 localities uniquely for this pageIndex
  const eastList = rotateArray(localities.east, pageIndex * 7);
  const westList = rotateArray(localities.west, pageIndex * 11);
  const northList = rotateArray(localities.north, pageIndex * 13);
  const southList = rotateArray(localities.south, pageIndex * 17);

  const zones = [
    {
      label: "East Erode",
      desc: "Covering Karungalpalayam, Cauvery Road, Pallipalayam, Agraharam, Marapalam, Netaji Road, PS Park, and eastern Cauvery corridors.",
      list: eastList
    },
    {
      label: "West Erode",
      desc: "Covering Thindal, Perundurai Road, Sampath Nagar, Teachers Colony, Collectorate Area, Nasiyanur, Villarasampatti, and western residential corridors.",
      list: westList
    },
    {
      label: "North Erode",
      desc: "Covering Veerappanchatram, Periyasemur, B.P. Agraharam, Sathy Road, Chithode, Bhavani, Suriyampalayam, and northern arterial routes.",
      list: northList
    },
    {
      label: "South Erode",
      desc: "Covering Surampatti, Kasipalayam, Kollampalayam, Moolapalayam, Solar, Chennimalai Road, Modakkurichi, and southern residential suburbs.",
      list: southList
    }
  ];

  let html = `<section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${mainHeading}</h2>
        <p>${subText}</p>
      </div>\n`;

  zones.forEach((zone, zIdx) => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${zone.label} (50 Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${zone.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">\n`;

    zone.list.forEach((loc, lIdx) => {
      const phraseType = (pageIndex + lIdx) % 4;
      let cardTitle = `${brand} Service Center in ${loc.name}`;
      if (cat === 'ac') {
        if (phraseType === 1) cardTitle = `${brand} AC Repair in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `${brand} Air Conditioner Service in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `${brand} AC Service Center Near Me in ${loc.name}`;
      } else if (cat === 'fridge') {
        if (phraseType === 1) cardTitle = `${brand} Refrigerator Repair in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `${brand} Fridge Service in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `${brand} Refrigerator Service Center Near Me in ${loc.name}`;
      } else if (cat === 'washing-machine') {
        if (phraseType === 1) cardTitle = `${brand} Washing Machine Repair in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `${brand} Washer Service in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `${brand} Washing Machine Service Center Near Me in ${loc.name}`;
      } else if (cat === 'tv') {
        if (phraseType === 1) cardTitle = `${brand} TV Repair in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `${brand} LED TV Service in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `${brand} Smart TV Service Center Near Me in ${loc.name}`;
      } else if (cat === 'root') {
        if (phraseType === 1) cardTitle = `Appliance Repair in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `Home Appliance Service in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `Service Center Near Me in ${loc.name}`;
      } else {
        if (phraseType === 1) cardTitle = `${brand} Repair Center in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `${brand} Servicing Center in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `${brand} Service Center Near Me in ${loc.name}`;
      }

      const waMsg = `Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20appliance%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Erode.`;

      html += `          <div class="service-card" style="padding: 1.15rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">Doorstep ${brand} repair and inspection service near ${loc.landmark}. Technicians test fault symptoms, check spare components, and explain pricing before work starts.</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=${waMsg}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>\n`;
    });

    html += `        </div>
      </div>\n`;
  });

  html += `    </div>
  </section>`;

  return html;
}

module.exports = {
  renderLocalitiesSection
};
