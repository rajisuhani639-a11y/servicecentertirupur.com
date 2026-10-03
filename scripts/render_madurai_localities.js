// scripts/render_madurai_localities.js
// Renders the 200 Madurai localities section for any page (50 East, 50 West, 50 North, 50 South)
// Rotates the locality order per page index so every page displays a unique sequence!

const localities = require('./madurai_localities.js');

function rotateArray(arr, offset) {
  const n = arr.length;
  const o = offset % n;
  return [...arr.slice(o), ...arr.slice(0, o)];
}

function renderLocalitiesSection(pageData, pageIndex) {
  const brand = pageData.brand || 'Home Appliance';
  const cat = pageData.category;
  
  let mainHeading = `${brand} Service Center Areas in Madurai (200 Localities)`;
  let subText = `Doorstep service coverage for ${brand} home appliances across East, West, North, and South Madurai.`;

  if (cat === 'ac') {
    mainHeading = `${brand} AC Repair Coverage Across Madurai Areas (200 Localities)`;
    subText = `Doorstep split and inverter air conditioner repair coverage across East, West, North, and South Madurai.`;
  } else if (cat === 'fridge') {
    mainHeading = `${brand} Refrigerator Repair Coverage Across Madurai (200 Localities)`;
    subText = `Doorstep single door, double door, and inverter fridge service coverage across East, West, North, and South Madurai.`;
  } else if (cat === 'washing-machine') {
    mainHeading = `${brand} Washing Machine Service Coverage Across Madurai (200 Localities)`;
    subText = `Doorstep front load, top load, and semi-automatic washer repair coverage across East, West, North, and South Madurai.`;
  } else if (cat === 'tv') {
    mainHeading = `${brand} TV Repair Service Areas in Madurai (200 Localities)`;
    subText = `Doorstep LED, Smart, and 4K television repair coverage across East, West, North, and South Madurai.`;
  } else if (cat === 'root') {
    mainHeading = `Home Appliance Repair Across Madurai Localities (200 Areas)`;
    subText = `Doorstep service network for washing machines, refrigerators, air conditioners, and LED TVs across East, West, North, and South Madurai.`;
  }

  // Rotate each zone's 50 localities uniquely for this pageIndex
  const eastList = rotateArray(localities.east, pageIndex * 7);
  const westList = rotateArray(localities.west, pageIndex * 11);
  const northList = rotateArray(localities.north, pageIndex * 13);
  const southList = rotateArray(localities.south, pageIndex * 17);

  const zones = [
    {
      label: "East Madurai",
      desc: "Covering Anna Nagar, KK Nagar, Mattuthavani, Uthangudi, Karuppayurani, Gomathipuram, Sadasiva Nagar, Vandiyur, Teppakulam, and eastern corridors.",
      list: eastList
    },
    {
      label: "West Madurai",
      desc: "Covering Arapalayam, Kalavasal, Ponmeni, Kochadai, Vilangudi, Fatima College Area, Guru Theatre, Achampathu, Ellis Nagar, and western corridors.",
      list: westList
    },
    {
      label: "North Madurai",
      desc: "Covering Goripalayam, Tallakulam, Bibikulam, Narimedu, Sellur, Thiruppalai, Iyer Bungalow, K.Pudur, Surya Nagar, Anaiyur, and northern arterial routes.",
      list: northList
    },
    {
      label: "South Madurai",
      desc: "Covering Villapuram, South Gate, Palanganatham, TVS Nagar, Jaihindpuram, Avaniyapuram, Thirunagar, Pasumalai, Alagappan Nagar, and southern suburbs.",
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
        if (phraseType === 1) cardTitle = `Home Appliance Service in ${loc.name}`;
        else if (phraseType === 2) cardTitle = `Appliance Repair in ${loc.name}`;
        else if (phraseType === 3) cardTitle = `Appliance Service Center Near Me in ${loc.name}`;
      }

      html += `          <div class="service-card" style="padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;">
            <div style="font-size: 0.76rem; font-weight: 700; color: #0284c7; text-transform: uppercase; margin-bottom: 0.25rem;">Pincode: ${loc.pincode}</div>
            <h4 style="font-size: 0.98rem; color: #0f172a; margin-bottom: 0.35rem;">${cardTitle}</h4>
            <p style="font-size: 0.82rem; color: #64748b; margin-bottom: 0.5rem; line-height: 1.4;">${loc.description || loc.landmark}</p>
            <div style="display: flex; gap: 0.5rem; font-size: 0.78rem;">
              <a href="tel:+919211512088" style="color: #0284c7; font-weight: 600; text-decoration: none;">Call Now</a>
              <span style="color: #cbd5e1;">•</span>
              <a href="https://wa.me/919211512088?text=Hello%20Service%20Center%20Madurai,%20I%20need%20doorstep%20service%20in%20${encodeURIComponent(loc.name)}" style="color: #16a34a; font-weight: 600; text-decoration: none;">WhatsApp</a>
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
