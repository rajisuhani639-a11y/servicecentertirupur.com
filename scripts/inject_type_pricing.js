const fs = require('fs');
const path = require('path');

function getPricingBox(title, category) {
  const t = title.toLowerCase();
  
  if (category === 'washing-machine') {
    if (t.includes('front load')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Diagnosis: <strong>₹249</strong></span>
          <span style="display: block;">• Front Load Service / Drain Descale: <strong>₹349 – ₹549 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Door Lock / Drain Pump / Gasket): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Drum Bearing / Motor / PCB): Inspected before final quotation</span>
        </div>`;
    } else if (t.includes('top load')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Diagnosis: <strong>₹249</strong></span>
          <span style="display: block;">• Top Load Service / Pulsator Clean: <strong>₹299 – ₹499 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Inlet Valve / Drain Motor / Rods): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Gearbox / Drive Motor / PCB): Inspected before final quotation</span>
        </div>`;
    } else if (t.includes('semi automatic') || t.includes('twin tub')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Diagnosis: <strong>₹249</strong></span>
          <span style="display: block;">• Semi-Auto Service / Timer &amp; Drain Fix: <strong>₹249 – ₹399 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Timer / Capacitor / Buffer Seal): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Wash / Spin Motor Replacement): Inspected before final quotation</span>
        </div>`;
    } else if (t.includes('washer dryer') || t.includes('combo') || t.includes('dryer')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Diagnosis: <strong>₹249</strong></span>
          <span style="display: block;">• Washer Dryer Service / Duct Clean: <strong>₹399 – ₹599 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Heating Coil / Thermostat / Blower): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Dual Inverter Motor / Dryer PCB): Inspected before final quotation</span>
        </div>`;
    } else {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Diagnosis: <strong>₹249</strong></span>
          <span style="display: block;">• Washing Machine Service / Minor Repair: <strong>₹349 – ₹499 onwards</strong></span>
          <span style="display: block;">• Spare Parts: Model &amp; fault dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul: Inspected before final quotation</span>
        </div>`;
    }
  } else if (category === 'ac') {
    if (t.includes('window')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Visiting Charge: <strong>₹249 – ₹350</strong></span>
          <span style="display: block;">• Window AC Chemical Jet Wash / Service: <strong>₹449 – ₹599 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Dual Capacitor / Fan Blade / Selector): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Fan Motor / Gas Leak Repair): Inspected before final quotation</span>
        </div>`;
    } else if (t.includes('cassette') || t.includes('ceiling')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Commercial Unit Check: <strong>₹299 – ₹399</strong></span>
          <span style="display: block;">• Cassette AC Deep Wash &amp; Pump Flush: <strong>₹599 – ₹899 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Drain Lift Pump / Swing Louver / Controller): Quoted after inspection</span>
          <span style="display: block;">• Major Overhaul (Commercial Inverter PCB / High Tonnage Compressor): Inspected before quotation</span>
        </div>`;
    } else if (t.includes('inverter')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Pressure Check: <strong>₹249 – ₹350</strong></span>
          <span style="display: block;">• Inverter Split AC Foam / Jet Wash: <strong>₹499 – ₹699 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Sensor Thermistor / Flare Union / Drain Line): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Inverter IPM PCB Repair / Gas Leak Brazing): Inspected before quotation</span>
        </div>`;
    } else {
      // Split / Fixed Speed
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Visiting Charge: <strong>₹249 – ₹350</strong></span>
          <span style="display: block;">• Split AC Deep Cleaning / Filter Service: <strong>₹449 – ₹599 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Run Capacitor / Indoor Blower / Contactor): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Compressor Service / Refrigerant Gas Refill): Inspected before quotation</span>
        </div>`;
    }
  } else if (category === 'fridge') {
    if (t.includes('single door') || t.includes('direct cool')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Cooling Check: <strong>₹249</strong></span>
          <span style="display: block;">• Single Door Service / Drain Unclog: <strong>₹299 – ₹449 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Thermostat / PTC Relay / Overload Protector): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Compressor Overhaul / Gas Leak Brazing): Inspected before quotation</span>
        </div>`;
    } else if (t.includes('side-by-side') || t.includes('french door') || t.includes('multi-door') || t.includes('cross-door')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; System Diagnosis: <strong>₹249 – ₹299</strong></span>
          <span style="display: block;">• Multi-Door Service / Sensor Check: <strong>₹449 – ₹699 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Dual Damper / Multi-Sensor / Control Module): Quoted after inspection</span>
          <span style="display: block;">• Major Overhaul (Inverter PCB / Dual Evaporator Gas Charging): Inspected before quotation</span>
        </div>`;
    } else if (t.includes('freezer') || t.includes('cooler')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection / Commercial Unit Check: <strong>₹299 – ₹399</strong></span>
          <span style="display: block;">• Deep Freezer Service / Coil Cleaning: <strong>₹499 – ₹799 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Thermostat Controller / Fan Motor / Relay): Quoted after inspection</span>
          <span style="display: block;">• Major Overhaul (Commercial Compressor / Gas Leak Service): Inspected before quotation</span>
        </div>`;
    } else {
      // Double Door / Frost Free / Triple Door / BMR
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Diagnosis: <strong>₹249</strong></span>
          <span style="display: block;">• Frost-Free Double Door Service / Airflow Fix: <strong>₹349 – ₹549 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Defrost Timer / Bimetal / Blower Fan): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Inverter PCB / Sealed System Gas Charge): Inspected before quotation</span>
        </div>`;
    }
  } else if (category === 'tv') {
    if (t.includes('oled') || t.includes('qled') || t.includes('mini-led')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Display Diagnostics: <strong>₹299 – ₹350</strong></span>
          <span style="display: block;">• Premium Display Service / Audio Board Check: <strong>₹499 – ₹799 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Timing Controller / High-Volt SMPS / Acoustic Board): Quoted after inspection</span>
          <span style="display: block;">• Major Overhaul (Panel Driver IC Repair / Main System Board): Inspected before quotation</span>
        </div>`;
    } else if (t.includes('4k') || t.includes('ultra hd')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Electronic Diagnostics: <strong>₹249 – ₹299</strong></span>
          <span style="display: block;">• 4K TV Service / HDMI &amp; Audio Fix: <strong>₹449 – ₹649 onwards</strong></span>
          <span style="display: block;">• Spare Parts (T-Con Board / 4K Backlight Array / Power Board): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Processor Board Repair / Panel Bonding): Inspected before quotation</span>
        </div>`;
    } else if (t.includes('smart') || t.includes('android') || t.includes('google tv') || t.includes('fire tv') || t.includes('webos')) {
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; OS Diagnostics: <strong>₹249</strong></span>
          <span style="display: block;">• Smart TV Service / Firmware Re-flash: <strong>₹399 – ₹599 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Motherboard / Wi-Fi Module / LED Backlight): Model dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (eMMC Storage / Full Motherboard Replacement): Inspected before quotation</span>
        </div>`;
    } else {
      // LED TV / Full HD / HD Ready / LCD / CRT
      return `        <div class="type-pricing-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #166534; line-height: 1.5;">
          <strong style="color: #15803d;">Estimated Service Charges:</strong>
          <span style="display: block; margin-top: 0.25rem;">• Doorstep Inspection &amp; Testing: <strong>₹249</strong></span>
          <span style="display: block;">• LED TV Service / Speaker &amp; Port Fix: <strong>₹349 – ₹499 onwards</strong></span>
          <span style="display: block;">• Spare Parts (Power Board SMPS / Backlight Strips): Screen size dependent (quoted after inspection)</span>
          <span style="display: block;">• Major Overhaul (Backlight Array / Display Driver Servicing): Inspected before quotation</span>
        </div>`;
    }
  }
  return '';
}

function processFolder(folder) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  let modifiedFiles = 0;
  let totalCardsInjected = 0;
  
  files.forEach(f => {
    const filePath = path.join(folder, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find types section
    let idx = content.search(/<h2[^>]*>[^<]*(?:Types|Models)[^<]*<\/h2>/i);
    if (idx === -1) return;
    
    const secStart = content.lastIndexOf('<section', idx);
    const secEnd = content.indexOf('</section>', idx);
    if (secStart === -1 || secEnd === -1) return;
    
    let secHtml = content.slice(secStart, secEnd + 10);
    
    // Check if cards already have pricing
    if (secHtml.includes('type-pricing-box')) return;
    
    // Special handling for ac/ac-repair-service-in-karur.html to add parts if missing
    if (f === 'ac-repair-service-in-karur.html' && folder === 'ac') {
      secHtml = secHtml.replace(
        '<h3>Split AC Repair & Service in Karur</h3>\n          <p>',
        `<h3>Split AC Repair & Service in Karur</h3>\n          <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">\n            <strong style="color: #9b2c2c;">Common Problems Checked:</strong> Weak room cooling, indoor water leak, iced evaporator coil, compressor tripping.\n          </div>\n          <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">\n            <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> Run capacitor, room &amp; coil thermistors, flare brass nuts, condensate drain tray.\n          </div>\n          <p>`
      );
      secHtml = secHtml.replace(
        '<h3>Window AC Repair & Service in Karur</h3>\n          <p>',
        `<h3>Window AC Repair & Service in Karur</h3>\n          <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">\n            <strong style="color: #9b2c2c;">Common Problems Checked:</strong> Warm air blow, rattling fan noise, front grill water overflow, selector switch jam.\n          </div>\n          <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">\n            <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> Dual run capacitor, thermostat switch, fan motor bearing, front air filter.\n          </div>\n          <p>`
      );
      secHtml = secHtml.replace(
        '<h3>Inverter AC Repair & Service in Karur</h3>\n          <p>',
        `<h3>Inverter AC Repair & Service in Karur</h3>\n          <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">\n            <strong style="color: #9b2c2c;">Common Problems Checked:</strong> PCB communication error, compressor frequency drop, EEV valve click, voltage surge shutoff.\n          </div>\n          <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">\n            <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> Outdoor IPM inverter board, electronic expansion valve (EEV), DC fan motor, ambient thermistor.\n          </div>\n          <p>`
      );
    }
    
    // Split section by `<div class="type-card"`
    const parts = secHtml.split('<div class="type-card"');
    if (parts.length <= 1) return;
    
    let newSecHtml = parts[0];
    let cardsInjectedInFile = 0;
    
    for (let i = 1; i < parts.length; i++) {
      let card = parts[i];
      const h3Match = card.match(/<h[34][^>]*>(.*?)<\/h[34]>/i);
      const title = h3Match ? h3Match[1].replace(/<[^>]+>/g, '').trim() : '';
      const pricingBox = getPricingBox(title, folder);
      
      if (pricingBox) {
        // Insert pricing box:
        // Try before `<ul`
        if (card.includes('<ul')) {
          card = card.replace('<ul', `${pricingBox}\n          <ul`);
        } else if (card.includes('When service is needed:')) {
          // Fridge pages style: insert after When service is needed paragraph
          const endP = card.indexOf('</p>', card.indexOf('When service is needed:'));
          if (endP !== -1) {
            card = card.slice(0, endP + 4) + '\n' + pricingBox + card.slice(endP + 4);
          } else {
            const lastDiv = card.lastIndexOf('</div>');
            card = card.slice(0, lastDiv) + '\n' + pricingBox + card.slice(lastDiv);
          }
        } else {
          // Insert before closing </div>
          const lastDiv = card.lastIndexOf('</div>');
          if (lastDiv !== -1) {
            card = card.slice(0, lastDiv) + '\n' + pricingBox + card.slice(lastDiv);
          } else {
            card = card + '\n' + pricingBox;
          }
        }
        cardsInjectedInFile++;
      }
      newSecHtml += '<div class="type-card"' + card;
    }
    
    if (cardsInjectedInFile > 0) {
      content = content.slice(0, secStart) + newSecHtml + content.slice(secEnd + 10);
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedFiles++;
      totalCardsInjected += cardsInjectedInFile;
    }
  });
  
  console.log(`Folder [${folder}]: Modified ${modifiedFiles} files, injected pricing into ${totalCardsInjected} cards.`);
}

['washing-machine', 'ac', 'fridge', 'tv'].forEach(folder => processFolder(folder));
