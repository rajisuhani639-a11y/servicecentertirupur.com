const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = dir + '/' + file;
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('.');
console.log(`Found ${files.length} HTML files to update.`);

const exactAddress = '171, Jawahar Bazaar Rd, Madavilagam, Karur, Tamil Nadu 639001';
const mapEmbedUrl = 'https://maps.google.com/maps?q=171%2C%20Jawahar%20Bazaar%20Rd%2C%20Madavilagam%2C%20Karur%2C%20Tamil%20Nadu%20639001&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed';

const locationSectionHtml = `  <!-- Service Center Karur Location & Google Map Section -->
  <section class="service-center-map-section" id="service-center-location">
    <div class="container">
      <div class="sc-map-card">
        <div class="sc-map-info">
          <div class="sc-badge">Karur Service Center</div>
          <h3>Service Center Karur</h3>
          <p class="sc-address">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span><strong>Address:</strong> 171, Jawahar Bazaar Rd, Madavilagam, Karur, Tamil Nadu 639001</span>
          </p>
          <p class="sc-timing">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
            <span><strong>Working Hours:</strong> 6:00 AM – 11:00 PM (Monday – Sunday)</span>
          </p>
          <p class="sc-desc">
            Doorstep home appliance repair and technical support across all residential and commercial localities in Karur.
          </p>
          <div class="sc-actions">
            <a href="tel:+919211512088" class="btn-primary-call sync-call">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Call: +91 92115 12088</span>
            </a>
            <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20home%20appliance%20repair%20service%20in%20Karur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        <div class="sc-map-frame-wrapper">
          <iframe
            src="${mapEmbedUrl}"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service Center Karur Location Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>

`;

let addressUpdatedCount = 0;
let timingUpdatedCount = 0;
let mapAddedCount = 0;
let schemaUpdatedCount = 0;
let filesModified = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Update Schema JSON-LD
  // Replace streetAddress
  if (content.includes('"streetAddress": "Jawahar Bazaar, Kovai Road, Near Bus Stand"')) {
    content = content.replace(
      /"streetAddress":\s*"Jawahar Bazaar,\s*Kovai Road,\s*Near Bus Stand"/g,
      '"streetAddress": "171, Jawahar Bazaar Rd, Madavilagam"'
    );
    schemaUpdatedCount++;
  }

  // Replace schema opening hours
  if (content.includes('"opens": "08:00"') || content.includes('"opens":"08:00"')) {
    content = content.replace(/"opens":\s*"08:00"/g, '"opens": "06:00"');
    content = content.replace(/"closes":\s*"20:30"/g, '"closes": "23:00"');
    schemaUpdatedCount++;
  }

  // 2. Update Footer & Body Address
  if (content.includes('Main Road, Kagithapuram & Pasupathipalayam, Karur, Tamil Nadu 639001')) {
    content = content.replace(/Main Road, Kagithapuram & Pasupathipalayam, Karur, Tamil Nadu 639001/g, exactAddress);
    addressUpdatedCount++;
  }

  if (content.includes('<span>Location: Karur, Tamil Nadu, India</span>')) {
    content = content.replace(
      '<span>Location: Karur, Tamil Nadu, India</span>',
      `<span>${exactAddress}</span>`
    );
    addressUpdatedCount++;
  }

  // 3. Update Timings in HTML
  if (content.includes('8:00 AM - 8:30 PM')) {
    content = content.replace(/8:00 AM - 8:30 PM/g, '6:00 AM – 11:00 PM');
    timingUpdatedCount++;
  }
  if (content.includes('8:00 AM and 8:30 PM')) {
    content = content.replace(/8:00 AM and 8:30 PM/g, '6:00 AM and 11:00 PM');
    timingUpdatedCount++;
  }
  if (content.includes('8:00 AM to 8:30 PM')) {
    content = content.replace(/8:00 AM to 8:30 PM/g, '6:00 AM to 11:00 PM');
    timingUpdatedCount++;
  }

  // 4. In washing machine footers, ensure working hours are displayed
  if (f.includes('washing-machine/')) {
    // If footer has Phone and Address but no timing, add timing item
    if (content.includes(`<span>${exactAddress}</span>`) && !content.includes('Working Hours: 6:00 AM – 11:00 PM')) {
      content = content.replace(
        `<span>${exactAddress}</span>\n          </div>`,
        `<span>${exactAddress}</span>\n          </div>\n          <div class="footer-contact-item">\n            <span>Working Hours: 6:00 AM – 11:00 PM (Mon–Sun)</span>\n          </div>`
      );
    }
  }

  // 5. Add / Update Service Center Location & Google Map Section
  if (!content.includes('id="service-center-location"')) {
    // Find where footer starts
    // Typically: <!-- Site Footer --> or <!-- 7. Site Footer --> or <footer class="site-footer">
    const footerRegex = /(<!--\s*(?:\d+\.\s*)?Site Footer\s*-->|<footer\b)/i;
    const match = content.match(footerRegex);
    if (match) {
      const idx = match.index;
      content = content.substring(0, idx) + locationSectionHtml + content.substring(idx);
      mapAddedCount++;
    } else {
      console.warn(`Could not find footer insertion point in: ${f}`);
    }
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    filesModified++;
  }
});

console.log('=== UPDATE SUMMARY ===');
console.log(`Files modified: ${filesModified} / ${files.length}`);
console.log(`Address updates: ${addressUpdatedCount}`);
console.log(`Timing updates: ${timingUpdatedCount}`);
console.log(`Map section added: ${mapAddedCount}`);
console.log(`Schema updates: ${schemaUpdatedCount}`);
