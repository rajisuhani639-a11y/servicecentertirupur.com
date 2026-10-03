// Karur Content Helpers & Locality Section Generators
const localities = require('./karur_localities.js');

function getLocalityPrep(name) {
  return (name.includes('Road') || name.includes('Salai') || name.includes('Bypass') || name.includes('Corridor') || name.includes('Avenue')) ? 'on' : 'in';
}

/**
 * Generate 4-quadrant locality section for AC pages
 */
function generateAcLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Air Conditioner';
  const heading = isGeneric
    ? 'AC Repair Coverage Across Karur Areas (60 Localities)'
    : `${brand} AC Repair Coverage Across Karur Areas (60 Localities)`;
  const subtext = isGeneric
    ? 'Doorstep split, inverter, and window AC repair, deep jet wash cleaning, and cooling fault inspection across East, West, North, and South Karur.'
    : `Doorstep ${brand} split and inverter AC service, cooling inspection, coil cleaning, and electrical component testing across all four zones of Karur.`;

  const quads = [
    { title: 'East Karur', list: localities.east, desc: 'Covering Gandhigramam, Pasupathipalayam, Sanapiratti, Rayanur, and eastern textile & residential avenues.' },
    { title: 'West Karur', list: localities.west, desc: 'Covering Inam Karur, Chinna Andankovil, Sukkaliyur, Kovai Road, and western commercial corridors.' },
    { title: 'North Karur', list: localities.north, desc: 'Covering Vengamedu, Vennaimalai, Vangal, Nerur, Velayuthampalayam, and northern riverbank communities.' },
    { title: 'South Karur', list: localities.south, desc: 'Covering Thanthonimalai, Arts College Road, Vaiyapuri Nagar, Collectorate area, and southern residential layouts.' }
  ];

  let html = `  <!-- AC Locality Section - 60 Genuine Karur Localities in 4 Quadrants -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  quads.forEach(q => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} AC Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} AC Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} AC Cooling Inspection ${prep} ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} AC Technician Near ${loc.name}`;

      let cardDesc = `Doorstep ${brand} split and inverter AC inspection near ${loc.landmark}. We check low cooling, filter choke, outdoor unit airflow, and electrical capacitors with upfront pricing.`;
      if (idx % 3 === 1) {
        cardDesc = `Reliable ${brand} air conditioner servicing around ${loc.landmark}. Technicians handle water leakage, coil jet cleaning, thermostat check, and gas pressure measurement.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Doorstep AC technician visit for residences near ${loc.landmark}. Thorough troubleshooting for tripping MCB, unusual motor noise, and slow room chilling.`;
      }

      html += `          <div class="service-card" style="padding: 1.15rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">${cardDesc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20AC%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>
`;
    });

    html += `        </div>
      </div>
`;
  });

  html += `    </div>
  </section>`;
  return html;
}

/**
 * Generate 4-quadrant locality section for Fridge pages
 */
function generateFridgeLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Refrigerator';
  const heading = isGeneric
    ? 'Refrigerator Repair Near Me in Karur (60 Localities)'
    : `${brand} Refrigerator Repair Near Me in Karur (60 Localities)`;
  const subtext = isGeneric
    ? 'Timely doorstep inspection and refrigerator repair visits across all residential areas, towns, and suburban zones of Karur:'
    : `Doorstep ${brand} single-door, double-door, and frost-free refrigerator repair coverage across all four quadrants of Karur:`;

  const quads = [
    { title: 'East Karur', list: localities.east, desc: 'Doorstep refrigerator repair across Gandhigramam, Pasupathipalayam, Sanapiratti, Rayanur, and eastern developments:' },
    { title: 'West Karur', list: localities.west, desc: 'Prompt fridge technician coverage across Inam Karur, Chinna Andankovil, Kovai Road, Sukkaliyur, and western neighborhoods:' },
    { title: 'North Karur', list: localities.north, desc: 'Doorstep cooling diagnostics across Vengamedu, Vennaimalai, Vangal, Nerur, Velayuthampalayam, and northern areas:' },
    { title: 'South Karur', list: localities.south, desc: 'Refrigerator repair visits across Thanthonimalai, Collectorate road, Vaiyapuri Nagar, Jawahar Bazaar, and southern colonies:' }
  ];

  let html = `  <!-- Refrigerator Locality Section in 4 Quadrants -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  quads.forEach(q => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} Refrigerator Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} Fridge Cooling Check ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} Defrost & Thermostat Repair ${prep} ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} Fridge Technician in ${loc.name}`;

      let cardDesc = `Doorstep ${brand} refrigerator check near ${loc.landmark}. Inspection for freezer freezing but lower cabin warm, compressor relay hum, and door gasket sealing.`;
      if (idx % 3 === 1) {
        cardDesc = `Local ${brand} fridge diagnosis around ${loc.landmark}. Technicians inspect cooling coils, defrost timers, thermostat control, and refrigerant gas pressure.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Reliable fridge inspection for families near ${loc.landmark}. Clear explanation given for water accumulation under crisper, ice blockage, or power tripping.`;
      }

      html += `          <div class="service-card" style="padding: 1.15rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">${cardDesc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20refrigerator%20repair%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>
`;
    });

    html += `        </div>
      </div>
`;
  });

  html += `    </div>
  </section>`;
  return html;
}

/**
 * Generate 4-quadrant locality section for Washing Machine pages
 */
function generateWmLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Washing Machine';
  const heading = isGeneric
    ? 'Washing Machine Service Localities in Karur (60 Verified Areas)'
    : `${brand} Washing Machine Service Localities in Karur (60 Verified Areas)`;
  const subtext = isGeneric
    ? 'Verified doorstep washing machine repair and diagnostic coverage across all 4 zones of Karur:'
    : `Comprehensive doorstep ${brand} front load, top load, and semi-automatic washing machine repair across East, West, North, and South Karur:`;

  const quads = [
    { title: 'East Karur', list: localities.east, desc: 'Doorstep washing machine repair across Gandhigramam, Pasupathipalayam, Sanapiratti, Rayanur, and eastern layouts:' },
    { title: 'West Karur', list: localities.west, desc: 'Washing machine technician visits across Inam Karur, Chinna Andankovil, Kovai Road, Sukkaliyur, and western residences:' },
    { title: 'North Karur', list: localities.north, desc: 'Washer diagnostics and drum repairs across Vengamedu, Vennaimalai, Vangal, Nerur, Velayuthampalayam, and northern areas:' },
    { title: 'South Karur', list: localities.south, desc: 'Doorstep repair visits across Thanthonimalai, Collectorate zone, Vaiyapuri Nagar, Jawahar Bazaar, and southern colonies:' }
  ];

  let html = `  <!-- Washing Machine Locality Section in 4 Quadrants -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  quads.forEach(q => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} Washing Machine Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} Washer Spin & Drain Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} Front & Top Load Repair ${prep} ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} Washing Machine Technician in ${loc.name}`;

      let cardDesc = `Doorstep ${brand} washing machine inspection near ${loc.landmark}. Checking water draining failure, drum not spinning, heavy vibration, and error code troubleshooting.`;
      if (idx % 3 === 1) {
        cardDesc = `Professional ${brand} washer service for homes near ${loc.landmark}. We diagnose inlet valve choke, drive belt slippage, door lock mechanism, and motor capacitor issues.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Fast doorstep repair for front load and top load ${brand} washers near ${loc.landmark}. Transparent inspection charges and tested compatible spare parts.`;
      }

      html += `          <div class="service-card" style="padding: 1.15rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">${cardDesc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20washing%20machine%20repair%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>
`;
    });

    html += `        </div>
      </div>
`;
  });

  html += `    </div>
  </section>`;
  return html;
}

/**
 * Generate 4-quadrant locality section for TV pages
 */
function generateTvLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'TV';
  const heading = isGeneric
    ? 'TV Repair Service Across Karur Localities (60 Areas)'
    : `${brand} TV Repair Service Across Karur Localities (60 Areas)`;
  const subtext = isGeneric
    ? 'Doorstep LED, LCD, and Smart TV inspection and circuit diagnostics across residential colonies and suburban areas of Karur:'
    : `Doorstep ${brand} LED and Smart TV diagnosis, backlight repair, and board inspection across East, West, North, and South Karur:`;

  const quads = [
    { title: 'East Karur', list: localities.east, desc: 'Doorstep TV repair across Gandhigramam, Pasupathipalayam, Sanapiratti, Rayanur, and eastern residential zones:' },
    { title: 'West Karur', list: localities.west, desc: 'LED & Smart TV diagnostics across Inam Karur, Chinna Andankovil, Kovai Road, Sukkaliyur, and western avenues:' },
    { title: 'North Karur', list: localities.north, desc: 'Television technician service across Vengamedu, Vennaimalai, Vangal, Nerur, Velayuthampalayam, and northern areas:' },
    { title: 'South Karur', list: localities.south, desc: 'Doorstep TV repairs across Thanthonimalai, Arts College Road, Vaiyapuri Nagar, Jawahar Bazaar, and southern colonies:' }
  ];

  let html = `  <!-- TV Locality Section in 4 Quadrants -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  quads.forEach(q => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} TV Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} LED Backlight Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} Smart TV Board Repair ${prep} ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} TV Technician in ${loc.name}`;

      let cardDesc = `Doorstep ${brand} TV inspection near ${loc.landmark}. Troubleshooting for sound working but no display, dark screen, horizontal panel lines, and power supply faults.`;
      if (idx % 3 === 1) {
        cardDesc = `Professional ${brand} Smart TV diagnostic for households near ${loc.landmark}. Backlight strip replacement, motherboard repair, HDMI port check, and display ribbon testing.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Doorstep TV technician visit near ${loc.landmark}. Clear upfront pricing, careful component-level circuit testing, and tested replacement parts.`;
      }

      html += `          <div class="service-card" style="padding: 1.15rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">${cardDesc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20TV%20repair%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>
`;
    });

    html += `        </div>
      </div>
`;
  });

  html += `    </div>
  </section>`;
  return html;
}

/**
 * Generate 4-quadrant locality section for Service Center pages
 */
function generateServiceCenterLocalitiesSection(brandName) {
  const isGeneric = !brandName || brandName.toLowerCase().includes('home appliance');
  const brand = isGeneric ? 'Home Appliance' : brandName;
  const heading = isGeneric
    ? 'Service Center Areas in Karur (60 Localities)'
    : `${brand} Service Center Areas in Karur (60 Localities)`;
  const subtext = isGeneric
    ? 'Verified doorstep multi-brand appliance service coverage across East, West, North, and South Karur localities.'
    : `Verified doorstep inspection and repair coverage for ${brand} home appliances across East, West, North, and South Karur.`;

  const quads = [
    { title: 'East Karur', list: localities.east, desc: 'Serving Gandhigramam, Pasupathipalayam, Sanapiratti, Rayanur, and eastern residential zones:' },
    { title: 'West Karur', list: localities.west, desc: 'Serving Inam Karur, Chinna Andankovil, Kovai Road, Sukkaliyur, and western commercial corridors:' },
    { title: 'North Karur', list: localities.north, desc: 'Serving Vengamedu, Vennaimalai, Vangal, Nerur, Velayuthampalayam, and northern riverbank areas:' },
    { title: 'South Karur', list: localities.south, desc: 'Serving Thanthonimalai, Collectorate road, Vaiyapuri Nagar, Jawahar Bazaar, and southern residential layouts:' }
  ];

  let html = `  <!-- Service Center Localities Section in 4 Quadrants -->
  <section class="section" id="localitiesSection" style="background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  quads.forEach(q => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${q.title} (${q.list.length} Verified Areas)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      let cardTitle = `${brand} Service Center in ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} Repair Center in ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} Servicing Center in ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} Service Center Near Me in ${loc.name}`;

      const cardDesc = `Reliable doorstep inspection and component repairs for ${brand} appliances near ${loc.landmark}. Clear estimate given before starting work.`;

      html += `          <div class="service-card" style="padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.5px;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">${cardDesc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>
`;
    });

    html += `        </div>
      </div>
`;
  });

  html += `    </div>
  </section>`;
  return html;
}

/**
 * Generate 4-quadrant locality section for Index page
 */
function generateIndexLocalitiesSection() {
  const heading = 'Areas We Cover in and Around Karur (60 Verified Localities)';
  const subtext = 'Doorstep appliance repair technicians visit homes and shops across East, West, North, and South Karur:';

  const quads = [
    { title: 'East Karur', list: localities.east, desc: 'Doorstep repair visits across Gandhigramam, Pasupathipalayam, Sanapiratti, Rayanur, and eastern areas:' },
    { title: 'West Karur', list: localities.west, desc: 'Coverage across Inam Karur, Chinna Andankovil, Kovai Road, Sukkaliyur, and western neighborhoods:' },
    { title: 'North Karur', list: localities.north, desc: 'Technician visits across Vengamedu, Vennaimalai, Vangal, Nerur, Velayuthampalayam, and northern areas:' },
    { title: 'South Karur', list: localities.south, desc: 'Doorstep service across Thanthonimalai, Collectorate zone, Vaiyapuri Nagar, Jawahar Bazaar, and southern colonies:' }
  ];

  let html = `  <!-- 60 Genuine Karur Localities in 4 Directional Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  quads.forEach(q => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `Home Appliance Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `Appliance Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `Technician Visit in ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `Appliance Repair Near ${loc.name}`;

      const cardDesc = `Doorstep repair and inspection for AC, refrigerator, washing machine, and TV near ${loc.landmark}. Inspection charge ₹249 with upfront quotation.`;

      html += `          <div class="service-card" style="padding: 1.15rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">${loc.name} (${loc.pincode})</span>
                <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Doorstep Visit</span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.45rem; line-height: 1.35;">${cardTitle}</h4>
              <p style="font-size: 0.86rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.5;">${cardDesc}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>WhatsApp</span>
              </a>
              <a href="tel:+919211512088" class="btn-primary-call sync-call" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>Call Now</span>
              </a>
            </div>
          </div>
`;
    });

    html += `        </div>
      </div>
`;
  });

  html += `    </div>
  </section>`;
  return html;
}

module.exports = {
  generateAcLocalitiesSection,
  generateFridgeLocalitiesSection,
  generateWmLocalitiesSection,
  generateTvLocalitiesSection,
  generateServiceCenterLocalitiesSection,
  generateIndexLocalitiesSection
};
