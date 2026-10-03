const fs = require('fs');

const file = 'ac/ac-repair-service-in-karur.html';
let content = fs.readFileSync(file, 'utf8');

const splitCard = `<div class="type-card">
          <h3>Split AC Repair & Service in Karur</h3>
          <p>
            Looking for <strong>Split AC repair near me</strong> or <strong>Split AC service in Karur</strong>? Split units are the most popular home cooling systems in Karur. Our technicians inspect both indoor and outdoor units on-site.
          </p>
          <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">
            <strong style="color: #9b2c2c;">Common Problems Checked:</strong> Weak room cooling, indoor water dripping, evaporator coil frost, outdoor compressor tripping.
          </div>
          <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">
            <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> Dual run capacitor, indoor blower wheel, room &amp; coil thermistors, condensate drain tray.
          </div>`;

const windowCard = `<div class="type-card">
          <h3>Window AC Repair & Service in Karur</h3>
          <p>
            Searching for <strong>Window AC repair near me</strong> or <strong>Window AC service in Karur</strong>? Compact single-cabinet window units work under heavy load during Karur summers and require focused care.
          </p>
          <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">
            <strong style="color: #9b2c2c;">Common Problems Checked:</strong> Warm air blow, rattling fan noise, front grill water overflow, selector switch jam.
          </div>
          <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">
            <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> Dual run capacitor, thermostat dial, fan motor bearing, front air filter.
          </div>`;

const inverterCard = `<div class="type-card">
          <h3>Inverter AC Repair & Service in Karur</h3>
          <p>
            Looking for <strong>Inverter AC repair</strong> or <strong>Inverter AC service near me</strong> in Karur? Inverter units use variable-speed BLDC compressors and dual micro-controller circuit boards that require experienced testing.
          </p>
          <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">
            <strong style="color: #9b2c2c;">Common Problems Checked:</strong> Inverter communication error, compressor frequency drop, EEV valve click, voltage surge shutoff.
          </div>
          <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">
            <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> Outdoor IPM inverter board, electronic expansion valve (EEV), DC fan motor, ambient thermistor.
          </div>`;

content = content.replace(/<div class="type-card">\s*<h3>Split AC Repair & Service in Karur<\/h3>\s*<p>[\s\S]*?<\/p>/i, splitCard);
content = content.replace(/<div class="type-card">\s*<h3>Window AC Repair & Service in Karur<\/h3>\s*<p>[\s\S]*?<\/p>/i, windowCard);
content = content.replace(/<div class="type-card">\s*<h3>Inverter AC Repair & Service in Karur<\/h3>\s*<p>[\s\S]*?<\/p>/i, inverterCard);

fs.writeFileSync(file, content, 'utf8');
console.log('Enriched AC hub cards with parts.');
