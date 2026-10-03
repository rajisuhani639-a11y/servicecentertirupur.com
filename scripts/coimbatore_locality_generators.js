// Coimbatore Locality Section Generators (150 Genuine Localities in 3 Zones: 50 East, 50 West, 50 North)
const localities = require('./coimbatore_localities.js');

function getLocalityPrep(name) {
  return (name.includes('Road') || name.includes('Salai') || name.includes('Bypass') || name.includes('Corridor') || name.includes('Avenue') || name.includes('Junction') || name.includes('Street') || name.includes('Pirivu')) ? 'near' : 'in';
}

function generateAcLocalitiesSection(brandName) {
  const isGeneric = !brandName || brandName === 'All AC Brands';
  const brand = isGeneric ? 'Air Conditioner' : brandName;
  const heading = isGeneric
    ? 'AC Repair Coverage Across Coimbatore Areas (150 Localities)'
    : `${brand} AC Repair Coverage Across Coimbatore Areas (150 Localities)`;
  const subtext = isGeneric
    ? 'Doorstep split, inverter, and cassette AC repair, deep jet wash cleaning, and cooling fault checking across East, West, and North Coimbatore.'
    : `Doorstep ${brand} split and inverter AC service, cooling inspection, coil cleaning, and electrical component testing across all three zones of Coimbatore.`;

  const zones = [
    { title: 'East Coimbatore', list: localities.east, desc: 'Covering Singanallur, Peelamedu, Ramanathapuram, Hope College, Ondipudur, Sulur, Kalapatti, and eastern Avinashi-Trichy road corridors.' },
    { title: 'West Coimbatore', list: localities.west, desc: 'Covering RS Puram, Vadavalli, Thondamuthur, Perur, Kovaipudur, Kuniyamuthur, Selvapuram, and western foothill residential layouts.' },
    { title: 'North Coimbatore', list: localities.north, desc: 'Covering Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Kavundampalayam, Gandhipuram, Periyanaickenpalayam, and northern highway zones.' }
  ];

  let html = `  <!-- AC Locality Section - 150 Genuine Coimbatore Localities in 3 Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  zones.forEach(z => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${z.title} (${z.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${z.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    z.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} AC Repair ${prep} ${loc.name}`;
      if (idx % 5 === 1) cardTitle = `${brand} AC Servicing ${prep} ${loc.name}`;
      else if (idx % 5 === 2) cardTitle = `${brand} AC Cooling Inspection ${prep} ${loc.name}`;
      else if (idx % 5 === 3) cardTitle = `${brand} AC Technician Near ${loc.name}`;
      else if (idx % 5 === 4) cardTitle = `Doorstep ${brand} AC Fix ${prep} ${loc.name}`;

      let cardDesc = `Doorstep ${brand} split and inverter AC inspection around ${loc.landmark}. We check low cooling, filter chokes, outdoor fan airflow, and run capacitors with clear pricing.`;
      if (idx % 4 === 1) {
        cardDesc = `Local ${brand} air conditioner servicing near ${loc.landmark}. Technicians handle indoor water leaks, condenser jet wash, sensor issues, and refrigerant pressure checks.`;
      } else if (idx % 4 === 2) {
        cardDesc = `Residences ${prep} ${loc.name} can request quick technician checking for tripping breakers, blower vibration, warm airflow, or outdoor compressor cutoffs near ${loc.landmark}.`;
      } else if (idx % 4 === 3) {
        cardDesc = `Reliable doorstep ${brand} cooling assistance around ${loc.landmark}. Thorough electrical testing, coil foam cleaning, and copper flare leak fixing across ${loc.name}.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20AC%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Coimbatore." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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

function generateFridgeLocalitiesSection(brandName) {
  const isGeneric = !brandName || brandName === 'All Refrigerator Brands';
  const brand = isGeneric ? 'Refrigerator' : brandName;
  const heading = isGeneric
    ? 'Refrigerator Repair Near Me in Coimbatore (150 Localities)'
    : `${brand} Refrigerator Repair Near Me in Coimbatore (150 Localities)`;
  const subtext = isGeneric
    ? 'Doorstep single-door, double-door, and frost-free refrigerator inspection, cooling fault repair, and gas refilling across East, West, and North Coimbatore.'
    : `Local ${brand} fridge diagnosis, defrost sensor checking, starter relay replacement, and sealed-system troubleshooting across all three Coimbatore zones.`;

  const zones = [
    { title: 'East Coimbatore', list: localities.east, desc: 'Covering Singanallur, Peelamedu, Ramanathapuram, Hope College, Ondipudur, Sulur, Kalapatti, and eastern residential neighborhoods.' },
    { title: 'West Coimbatore', list: localities.west, desc: 'Covering RS Puram, Vadavalli, Thondamuthur, Perur, Kovaipudur, Kuniyamuthur, Selvapuram, and western foothill residential sectors.' },
    { title: 'North Coimbatore', list: localities.north, desc: 'Covering Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Kavundampalayam, Gandhipuram, Periyanaickenpalayam, and northern areas.' }
  ];

  let html = `  <!-- Fridge Locality Section - 150 Genuine Coimbatore Localities in 3 Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  zones.forEach(z => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${z.title} (${z.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${z.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    z.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} Refrigerator Repair ${prep} ${loc.name}`;
      if (idx % 5 === 1) cardTitle = `${brand} Fridge Service ${prep} ${loc.name}`;
      else if (idx % 5 === 2) cardTitle = `${brand} Cooling Inspection ${prep} ${loc.name}`;
      else if (idx % 5 === 3) cardTitle = `${brand} Fridge Technician Near ${loc.name}`;
      else if (idx % 5 === 4) cardTitle = `Doorstep ${brand} Fridge Repair ${prep} ${loc.name}`;

      let cardDesc = `Households in ${loc.name} near ${loc.landmark} can book doorstep ${brand} fridge checking for defrost failure, water pooling under crisper, and compressor clicking.`;
      if (idx % 4 === 1) {
        cardDesc = `Local ${brand} refrigerator inspection around ${loc.landmark}. Technicians check bottom cabin warming, freezer ice buildup, starter relays, and thermostat settings on site.`;
      } else if (idx % 4 === 2) {
        cardDesc = `Doorstep fridge checking ${prep} ${loc.name} for abnormal humming noise, loose magnetic door gaskets, inverter control board errors, and safe refrigerant top-up near ${loc.landmark}.`;
      } else if (idx % 4 === 3) {
        cardDesc = `Quick ${brand} refrigerator troubleshooting around ${loc.landmark}. On-site testing for evaporator fan motors, bi-metal sensors, and defrost heating elements with clear estimates.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20refrigerator%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Coimbatore." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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

function generateWmLocalitiesSection(brandName) {
  const isGeneric = !brandName || brandName === 'All Washing Machine Brands';
  const brand = isGeneric ? 'Washing Machine' : brandName;
  const heading = isGeneric
    ? 'Washing Machine Service Localities in Coimbatore (150 Verified Areas)'
    : `${brand} Washing Machine Service Localities in Coimbatore (150 Verified Areas)`;
  const subtext = isGeneric
    ? 'Doorstep front-load, top-load, and semi-automatic washing machine repair, drain pump cleaning, and spin vibration checks across Coimbatore.'
    : `Doorstep ${brand} washing machine troubleshooting, suspension damper checks, inlet valve descaling, and PCB repair across East, West, and North Coimbatore.`;

  const zones = [
    { title: 'East Coimbatore', list: localities.east, desc: 'Covering Singanallur, Peelamedu, Ramanathapuram, Hope College, Ondipudur, Sulur, Kalapatti, and eastern suburbs.' },
    { title: 'West Coimbatore', list: localities.west, desc: 'Covering RS Puram, Vadavalli, Thondamuthur, Perur, Kovaipudur, Kuniyamuthur, Selvapuram, and western residential avenues.' },
    { title: 'North Coimbatore', list: localities.north, desc: 'Covering Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Kavundampalayam, Gandhipuram, Periyanaickenpalayam, and northern areas.' }
  ];

  let html = `  <!-- Washing Machine Locality Section - 150 Genuine Coimbatore Localities in 3 Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  zones.forEach(z => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${z.title} (${z.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${z.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    z.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} Washing Machine Repair ${prep} ${loc.name}`;
      if (idx % 5 === 1) cardTitle = `${brand} Washer Service ${prep} ${loc.name}`;
      else if (idx % 5 === 2) cardTitle = `${brand} Spin & Drain Check ${prep} ${loc.name}`;
      else if (idx % 5 === 3) cardTitle = `${brand} Washer Technician Near ${loc.name}`;
      else if (idx % 5 === 4) cardTitle = `Doorstep ${brand} Washer Fix ${prep} ${loc.name}`;

      let cardDesc = `Doorstep ${brand} washing machine inspection around ${loc.landmark}. Technicians resolve OE/E2 drain errors, drum spin vibration, coin clogs, and water inlet delays.`;
      if (idx % 4 === 1) {
        cardDesc = `Families in ${loc.name} near ${loc.landmark} can request quick technician visits for front-door interlock jamming, tub noise, drive belt tension, and motor capacitor issues.`;
      } else if (idx % 4 === 2) {
        cardDesc = `Local ${brand} washing machine servicing near ${loc.landmark}. We check borewell scaling on inlet valves, suspension rod damping, and electronic PCB program halts.`;
      } else if (idx % 4 === 3) {
        cardDesc = `Prompt doorstep washer checking around ${loc.landmark}. Comprehensive diagnosis for cycle stopping midway, burning smell, detergent tray overflow, and water level switches.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20washing%20machine%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Coimbatore." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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

function generateTvLocalitiesSection(brandName) {
  const isGeneric = !brandName || brandName === 'All TV Brands';
  const brand = isGeneric ? 'Television' : brandName;
  const heading = isGeneric
    ? 'TV Repair Coverage Across Coimbatore (150 Localities)'
    : `${brand} TV Repair Coverage Across Coimbatore (150 Localities)`;
  const subtext = isGeneric
    ? 'Doorstep LED, Smart, and 4K TV repair, backlight strip replacement, power supply fix, and motherboard servicing across Coimbatore.'
    : `Doorstep ${brand} Smart LED TV inspection, sound-without-picture diagnosis, backlight repair, and motherboard troubleshooting across Coimbatore.`;

  const zones = [
    { title: 'East Coimbatore', list: localities.east, desc: 'Covering Singanallur, Peelamedu, Ramanathapuram, Hope College, Ondipudur, Sulur, Kalapatti, and eastern residential zones.' },
    { title: 'West Coimbatore', list: localities.west, desc: 'Covering RS Puram, Vadavalli, Thondamuthur, Perur, Kovaipudur, Kuniyamuthur, Selvapuram, and western residential layouts.' },
    { title: 'North Coimbatore', list: localities.north, desc: 'Covering Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Kavundampalayam, Gandhipuram, Periyanaickenpalayam, and northern areas.' }
  ];

  let html = `  <!-- TV Locality Section - 150 Genuine Coimbatore Localities in 3 Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  zones.forEach(z => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${z.title} (${z.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${z.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    z.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} TV Repair ${prep} ${loc.name}`;
      if (idx % 5 === 1) cardTitle = `${brand} Smart TV Service ${prep} ${loc.name}`;
      else if (idx % 5 === 2) cardTitle = `${brand} LED Screen Check ${prep} ${loc.name}`;
      else if (idx % 5 === 3) cardTitle = `${brand} TV Technician Near ${loc.name}`;
      else if (idx % 5 === 4) cardTitle = `Doorstep ${brand} TV Fix ${prep} ${loc.name}`;

      let cardDesc = `Doorstep ${brand} Smart LED TV inspection around ${loc.landmark}. We diagnose sound with no picture, burned backlight LEDs, and power SMPS board cutoffs.`;
      if (idx % 4 === 1) {
        cardDesc = `Local ${brand} TV servicing near ${loc.landmark}. Technicians handle logo reboot loops, HDMI port failure after power surges, and standby red light blinking.`;
      } else if (idx % 4 === 2) {
        cardDesc = `Residences in ${loc.name} near ${loc.landmark} can book on-site checking for thin vertical display lines, T-Con flex cable issues, and distorted internal speakers.`;
      } else if (idx % 4 === 3) {
        cardDesc = `Professional ${brand} TV diagnosis around ${loc.landmark}. Safe on-site testing for mainboard firmware corruption, screen dimming, and Wi-Fi connectivity problems.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20TV%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Coimbatore." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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

function generateServiceCenterLocalitiesSection(brandName) {
  const brand = brandName || 'Home Appliance';
  const heading = `${brand} Service Center Areas in Coimbatore (150 Localities)`;
  const subtext = `Doorstep service coverage for ${brand} washing machines, refrigerators, air conditioners, and TVs across East, West, and North Coimbatore.`;

  const zones = [
    { title: 'East Coimbatore', list: localities.east, desc: 'Covering Singanallur, Peelamedu, Ramanathapuram, Hope College, Ondipudur, Sulur, Kalapatti, and eastern industrial-residential corridors.' },
    { title: 'West Coimbatore', list: localities.west, desc: 'Covering RS Puram, Vadavalli, Thondamuthur, Perur, Kovaipudur, Kuniyamuthur, Selvapuram, and western residential layouts.' },
    { title: 'North Coimbatore', list: localities.north, desc: 'Covering Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Kavundampalayam, Gandhipuram, Periyanaickenpalayam, and northern areas.' }
  ];

  let html = `  <!-- Service Center Locality Section - 150 Genuine Coimbatore Localities in 3 Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  zones.forEach(z => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${z.title} (${z.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${z.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    z.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `${brand} Service Center ${prep} ${loc.name}`;
      if (idx % 5 === 1) cardTitle = `${brand} Appliance Support ${prep} ${loc.name}`;
      else if (idx % 5 === 2) cardTitle = `${brand} Doorstep Technician Near ${loc.name}`;
      else if (idx % 5 === 3) cardTitle = `${brand} Repair Visit ${prep} ${loc.name}`;
      else if (idx % 5 === 4) cardTitle = `${brand} Home Service ${prep} ${loc.name}`;

      let cardDesc = `Doorstep ${brand} repair and inspection service near ${loc.landmark}. Technicians test fault symptoms, check spare components, and explain pricing before work starts.`;
      if (idx % 4 === 1) {
        cardDesc = `Local ${brand} appliance assistance around ${loc.landmark}. Book quick doorstep visits for washing machine spin errors, fridge cooling drops, and AC performance checks.`;
      } else if (idx % 4 === 2) {
        cardDesc = `Convenient doorstep care for ${brand} products near ${loc.landmark}. Experienced technicians carry diagnostic instruments for immediate on-site problem resolution.`;
      } else if (idx % 4 === 3) {
        cardDesc = `Customers ${prep} ${loc.name} near ${loc.landmark} can schedule certified technician visits for ${brand} major appliances with genuine spare parts and honest estimates.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20${encodeURIComponent(brand)}%20appliance%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Coimbatore." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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

function generateIndexLocalitiesSection() {
  const heading = 'Home Appliance Repair Across Coimbatore Localities (150 Areas)';
  const subtext = 'Doorstep service network for washing machines, refrigerators, air conditioners, and LED TVs across East, West, and North Coimbatore.';

  const zones = [
    { title: 'East Coimbatore', list: localities.east, desc: 'Covering Singanallur, Peelamedu, Ramanathapuram, Hope College, Ondipudur, Sulur, Kalapatti, and eastern residential corridors.' },
    { title: 'West Coimbatore', list: localities.west, desc: 'Covering RS Puram, Vadavalli, Thondamuthur, Perur, Kovaipudur, Kuniyamuthur, Selvapuram, and western foothill communities.' },
    { title: 'North Coimbatore', list: localities.north, desc: 'Covering Saibaba Colony, Ganapathy, Saravanampatti, Thudiyalur, Kavundampalayam, Gandhipuram, Periyanaickenpalayam, and northern areas.' }
  ];

  let html = `  <!-- Home Appliance Locality Section - 150 Genuine Coimbatore Localities in 3 Zones -->
  <section class="section" id="localitiesSection" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>${heading}</h2>
        <p>${subtext}</p>
      </div>
`;

  zones.forEach(z => {
    html += `      <div class="locality-zone-group" style="margin-bottom: 2.25rem;">
        <h3 style="font-size: 1.18rem; color: var(--primary-color); margin-bottom: 0.5rem; padding-bottom: 0.4rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${z.title} (${z.list.length} Verified Localities)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">${z.desc}</p>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem;">
`;

    z.list.forEach((loc, idx) => {
      const prep = getLocalityPrep(loc.name);
      let cardTitle = `Appliance Repair ${prep} ${loc.name}`;
      if (idx % 4 === 1) cardTitle = `Doorstep Service ${prep} ${loc.name}`;
      else if (idx % 4 === 2) cardTitle = `Appliance Technician Near ${loc.name}`;
      else if (idx % 4 === 3) cardTitle = `Home Appliance Care ${prep} ${loc.name}`;

      let cardDesc = `Prompt doorstep checking for ACs, fridges, washing machines, and televisions near ${loc.landmark}. Certified local technicians with upfront estimates.`;
      if (idx % 3 === 1) {
        cardDesc = `Local appliance repair visit around ${loc.landmark}. Technicians carry diagnostic instruments for cooling faults, drainage errors, and power board cutoffs.`;
      } else if (idx % 3 === 2) {
        cardDesc = `Doorstep inspection across ${loc.name} near ${loc.landmark}. Transparent pricing, genuine tested spare parts, and fast same-day scheduling.`;
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
              <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20service%20in%20${encodeURIComponent(loc.name)}%2C%20Coimbatore." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 0.45rem 0.65rem; font-size: 0.8rem; text-decoration: none; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem;">
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
