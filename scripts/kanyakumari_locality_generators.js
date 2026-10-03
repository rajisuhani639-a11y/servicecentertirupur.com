// Kanyakumari Locality Section Generators (200 Genuine Localities in 4 Quadrants: 50 each)
const localities = require('./kanyakumari_localities.js');

function getLocalityPrep(name) {
  return (name.includes('Road') || name.includes('Salai') || name.includes('Bypass') || name.includes('Corridor') || name.includes('Avenue') || name.includes('Junction') || name.includes('Beach')) ? 'near' : 'in';
}

/**
 * Generate 4-quadrant locality section for AC pages (200 localities)
 */
function generateAcLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Air Conditioner';
  const heading = isGeneric
    ? 'AC Repair Coverage Across Kanyakumari Areas (200 Localities)'
    : `${brand} AC Repair Coverage Across Kanyakumari Areas (200 Localities)`;
  const subtext = isGeneric
    ? 'Doorstep split, inverter, and window AC repair, deep jet wash cleaning, and cooling fault inspection across East, West, North, and South Kanyakumari.'
    : `Doorstep ${brand} split and inverter AC service, cooling inspection, coil cleaning, and electrical component testing across all four zones of Kanyakumari.`;

  const quads = [
    { title: 'East Kanyakumari', list: localities.east, desc: 'Covering Vadasery, Kottar, Suchindram, Theroor, Kanyakumari Town, Agastheeswaram, and eastern coastal residential corridors.' },
    { title: 'West Kanyakumari', list: localities.west, desc: 'Covering Marthandam, Kuzhithurai, Kaliyakkavilai, Karungal, Colachel, Thuckalay, Kulasekharam, and western trade routes.' },
    { title: 'North Kanyakumari', list: localities.north, desc: 'Covering Aralvaimozhi, Muppandal, Vellamadam, Asaripallam, Azhagiapandiapuram, Pechiparai, and northern foothill towns.' },
    { title: 'South Kanyakumari', list: localities.south, desc: 'Covering Nagercoil Town, Tower Junction, Court Road, Collectorate, Thengamputhur, Manakkudy, and southern coastal areas.' }
  ];

  let html = `  <!-- AC Locality Section - 200 Genuine Kanyakumari Localities in 4 Quadrants -->
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20AC%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Kanyakumari." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
 * Generate 4-quadrant locality section for Fridge pages (200 localities)
 */
function generateFridgeLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Refrigerator';
  const heading = isGeneric
    ? 'Refrigerator Repair Near Me in Kanyakumari (200 Localities)'
    : `${brand} Refrigerator Repair Near Me in Kanyakumari (200 Localities)`;
  const subtext = isGeneric
    ? 'Doorstep single door, double door, side-by-side and frost-free refrigerator repair across East, West, North, and South Kanyakumari.'
    : `Doorstep ${brand} single, double door, and inverter refrigerator inspection, gas charging, defrost problem fix, and cooling repair across all 200 Kanyakumari localities.`;

  const quads = [
    { title: 'East Kanyakumari', list: localities.east, desc: 'Covering Vadasery, Kottar, Suchindram, Theroor, Kanyakumari Town, Agastheeswaram, and eastern residential corridors:' },
    { title: 'West Kanyakumari', list: localities.west, desc: 'Covering Marthandam, Kuzhithurai, Kaliyakkavilai, Karungal, Colachel, Thuckalay, Kulasekharam, and western trade routes:' },
    { title: 'North Kanyakumari', list: localities.north, desc: 'Covering Aralvaimozhi, Muppandal, Vellamadam, Asaripallam, Azhagiapandiapuram, Pechiparai, and northern foothill towns:' },
    { title: 'South Kanyakumari', list: localities.south, desc: 'Covering Nagercoil Town, Tower Junction, Court Road, Collectorate, Thengamputhur, Manakkudy, and southern coastal areas:' }
  ];

  let html = `  <!-- Refrigerator Locality Section - 200 Genuine Kanyakumari Localities in 4 Quadrants -->
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
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} Fridge Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} Refrigerator Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} Cooling Diagnostic ${prep} ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} Fridge Technician in ${loc.name}`;

      let cardDesc = `Doorstep ${brand} refrigerator check near ${loc.landmark}. We diagnose non-cooling, compressor clicking, ice excess, and gas leakage on the spot.`;
      if (idx % 3 === 1) {
        cardDesc = `Expert ${brand} single & double door fridge service near ${loc.landmark}. Thermostat calibration, relay replacement, and gas refilling with genuine parts.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Fast doorstep ${brand} fridge repair near ${loc.landmark}. Clear upfront pricing, verified technicians, and dependable cooling restoration.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20fridge%20repair%20in%20${encodeURIComponent(loc.name)}%2C%20Kanyakumari." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
 * Generate 4-quadrant locality section for Washing Machine pages (200 localities)
 */
function generateWmLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Washing Machine';
  const heading = isGeneric
    ? 'Washing Machine Service Near Me in Kanyakumari (200 Verified Localities)'
    : `${brand} Washing Machine Service Localities in Kanyakumari (200 Verified Areas)`;
  const subtext = isGeneric
    ? 'Reliable doorstep washing machine repair for front load, top load, and semi-automatic machines across 200 localities in Kanyakumari.'
    : `Doorstep ${brand} front load, top load, and washer-dryer repair, drum vibration correction, and PCB check across all 200 Kanyakumari localities.`;

  const quads = [
    { title: 'East Kanyakumari', list: localities.east, desc: 'Doorstep repair visits across Vadasery, Kottar, Suchindram, Theroor, Kanyakumari Town, Agastheeswaram, and eastern areas:' },
    { title: 'West Kanyakumari', list: localities.west, desc: 'Coverage across Marthandam, Kuzhithurai, Kaliyakkavilai, Karungal, Colachel, Thuckalay, Kulasekharam, and western neighborhoods:' },
    { title: 'North Kanyakumari', list: localities.north, desc: 'Technician visits across Aralvaimozhi, Muppandal, Vellamadam, Asaripallam, Azhagiapandiapuram, Pechiparai, and northern areas:' },
    { title: 'South Kanyakumari', list: localities.south, desc: 'Doorstep service across Nagercoil Town, Tower Junction, Court Road, Collectorate, Thengamputhur, Manakkudy, and southern colonies:' }
  ];

  let html = `  <!-- Washing Machine Locality Section in 4 Quadrants (200 Localities) -->
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
      if (idx % 4 === 1) cardTitle = `${brand} Washer Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} Machine Drum Check ${prep} ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `${brand} Washing Machine Technician in ${loc.name}`;

      let cardDesc = `Doorstep ${brand} washer check near ${loc.landmark}. Troubleshooting for drain error, spin cycle stoppage, drum vibration, and inlet valve choked.`;
      if (idx % 3 === 1) {
        cardDesc = `Professional ${brand} front & top load service near ${loc.landmark}. Suspension rod replacement, drain pump clearing, belt tightening, and motor board check.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Doorstep washing machine technician visit near ${loc.landmark}. Honest upfront cost estimate, tested spares, and dependable doorstep service.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20washing%20machine%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Kanyakumari." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
 * Generate 4-quadrant locality section for TV pages (200 localities)
 */
function generateTvLocalitiesSection(brandName) {
  const isGeneric = !brandName;
  const brand = brandName || 'Television';
  const heading = isGeneric
    ? 'TV Repair Service Coverage in Kanyakumari (200 Localities)'
    : `${brand} TV Repair Service Coverage in Kanyakumari (200 Localities)`;
  const subtext = isGeneric
    ? 'Professional LED, LCD, OLED, 4K, and Smart TV doorstep repair, backlight replacement, display fault check, and motherboard service across Kanyakumari.'
    : `Doorstep ${brand} LED, Smart, and Android TV repair, backlight replacement, power circuit fixing, and display check across all 200 Kanyakumari localities.`;

  const quads = [
    { title: 'East Kanyakumari', list: localities.east, desc: 'Covering Vadasery, Kottar, Suchindram, Theroor, Kanyakumari Town, Agastheeswaram, and eastern areas:' },
    { title: 'West Kanyakumari', list: localities.west, desc: 'Covering Marthandam, Kuzhithurai, Kaliyakkavilai, Karungal, Colachel, Thuckalay, Kulasekharam, and western corridors:' },
    { title: 'North Kanyakumari', list: localities.north, desc: 'Covering Aralvaimozhi, Muppandal, Vellamadam, Asaripallam, Azhagiapandiapuram, Pechiparai, and northern foothill towns:' },
    { title: 'South Kanyakumari', list: localities.south, desc: 'Covering Nagercoil Town, Tower Junction, Court Road, Collectorate, Thengamputhur, Manakkudy, and southern residential layouts:' }
  ];

  let html = `  <!-- TV Locality Section - 200 Genuine Kanyakumari Localities in 4 Quadrants -->
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
          <span>📍 ${q.title} (${q.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${q.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    q.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} TV Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `${brand} Smart TV Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `${brand} TV Display Diagnostic ${prep} ${loc.name}`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20TV%20repair%20in%20${encodeURIComponent(loc.name)}%2C%20Kanyakumari." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
 * Generate 4-quadrant locality section for Service Center pages (200 localities)
 */
function generateServiceCenterLocalitiesSection(brandName) {
  const isGeneric = !brandName || brandName.toLowerCase().includes('home appliance');
  const brand = isGeneric ? 'Home Appliance' : brandName;
  const heading = isGeneric
    ? 'Service Center Areas in Kanyakumari (200 Localities)'
    : `${brand} Service Center Areas in Kanyakumari (200 Localities)`;
  const subtext = isGeneric
    ? 'Verified doorstep multi-brand appliance service coverage across East, West, North, and South Kanyakumari localities.'
    : `Verified doorstep inspection and repair coverage for ${brand} home appliances across East, West, North, and South Kanyakumari.`;

  const quads = [
    { title: 'East Kanyakumari', list: localities.east, desc: 'Serving Vadasery, Kottar, Suchindram, Theroor, Kanyakumari Town, Agastheeswaram, and eastern residential zones:' },
    { title: 'West Kanyakumari', list: localities.west, desc: 'Serving Marthandam, Kuzhithurai, Kaliyakkavilai, Karungal, Colachel, Thuckalay, Kulasekharam, and western commercial corridors:' },
    { title: 'North Kanyakumari', list: localities.north, desc: 'Serving Aralvaimozhi, Muppandal, Vellamadam, Asaripallam, Azhagiapandiapuram, Pechiparai, and northern foothill areas:' },
    { title: 'South Kanyakumari', list: localities.south, desc: 'Serving Nagercoil Town, Tower Junction, Court Road, Collectorate, Thengamputhur, Manakkudy, and southern residential layouts:' }
  ];

  let html = `  <!-- Service Center Localities Section in 4 Quadrants (200 Localities) -->
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Kanyakumari." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
 * Generate 4-quadrant locality section for Index page (200 localities)
 */
function generateIndexLocalitiesSection() {
  const heading = 'Areas We Cover in and Around Kanyakumari (200 Verified Localities)';
  const subtext = 'Doorstep appliance repair technicians visit homes and shops across East, West, North, and South Kanyakumari:';

  const quads = [
    { title: 'East Kanyakumari', list: localities.east, desc: 'Doorstep repair visits across Vadasery, Kottar, Suchindram, Theroor, Kanyakumari Town, Agastheeswaram, and eastern areas:' },
    { title: 'West Kanyakumari', list: localities.west, desc: 'Coverage across Marthandam, Kuzhithurai, Kaliyakkavilai, Karungal, Colachel, Thuckalay, Kulasekharam, and western neighborhoods:' },
    { title: 'North Kanyakumari', list: localities.north, desc: 'Technician visits across Aralvaimozhi, Muppandal, Vellamadam, Asaripallam, Azhagiapandiapuram, Pechiparai, and northern areas:' },
    { title: 'South Kanyakumari', list: localities.south, desc: 'Doorstep service across Nagercoil Town, Tower Junction, Court Road, Collectorate, Thengamputhur, Manakkudy, and southern colonies:' }
  ];

  let html = `  <!-- 200 Genuine Kanyakumari Localities in 4 Directional Zones -->
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Kanyakumari." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
