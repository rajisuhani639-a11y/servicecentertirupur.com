// scripts/execute_full_tiruppur_localization.js
// Master batch execution script that localizes the entire website for Tiruppur.
// Transforms all 174 content pages, renames -madurai.html to -tirupur.html,
// updates schemas, canonicals, internal links, headers, footers, maps,
// installs ONLY Google tag G-DRV7B7TFS0, and removes old Madurai files.

const fs = require('fs');
const path = require('path');
const { renderLocalitiesSection } = require('./render_tiruppur_localities.js');
const { renderExperiencesSection } = require('./render_tiruppur_experiences.js');
const { renderFaqSection, generateFaqSchema } = require('./render_tiruppur_faqs.js');

const masterFaqs = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_master_faqs.json'), 'utf8'));
const allExperiences = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_unique_experiences.json'), 'utf8'));
const heroIntros = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_hero_intros.json'), 'utf8'));
const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_pages_data.json'), 'utf8'));

// Build all 54 brand links for footer
const brandsInfo = require('./data_brands_info.js');
const footerBrandGridHtml = brandsInfo.map(b => `<a href="/servicecenter/${b.slug}-service-center-tirupur.html">${b.name} Service Center Tirupur</a>`).join('\n          ');

const footerCoverageHtml = `        <div class="footer-col">
          <h4>Tirupur Coverage</h4>
          <ul class="footer-links">
            <li><a href="#localitiesSection">Avinashi Road & Kumar Nagar</a></li>
            <li><a href="#localitiesSection">P.N. Road & Pandian Nagar</a></li>
            <li><a href="#localitiesSection">Nallur & Kangeyam Road</a></li>
            <li><a href="#localitiesSection">Palladam Road & Veerapandi</a></li>
            <li><a href="#localitiesSection">15 Velampalayam & Angeripalayam</a></li>
          </ul>
        </div>`;

const tiruppurMapSectionHtml = `  <!-- Service Center Tirupur Location & Google Map Section -->
  <section class="service-center-map-section" id="service-center-location">
    <div class="container">
      <div class="sc-map-card">
        <div class="sc-map-info">
          <div class="sc-badge">Tirupur Service Center</div>
          <h3>Service Center Tirupur</h3>
          <p class="sc-address">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span><strong>Service Area:</strong> Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India</span>
          </p>
          <p class="sc-timing">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.5 2 2.13 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
            <span><strong>Working Hours:</strong> 8:00 AM – 8:30 PM (Monday – Sunday)</span>
          </p>
          <p class="sc-desc">
            Doorstep home appliance repair and technical support across all residential and commercial localities in Tirupur.
          </p>
          <div class="sc-actions">
            <a href="tel:+918882055269" class="btn-primary-call sync-call">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Call: +91 88820 55269</span>
            </a>
            <a href="https://wa.me/918882055269?text=Hello%2C%20I%20need%20home%20appliance%20repair%20service%20in%20Tirupur." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        <div class="sc-map-frame-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=11.099761%2C77.347941&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service Center Tirupur Location Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>`;

const bookingFormLocalitiesHtml = `              <option value="Avinashi Road" selected>Avinashi Road</option>
              <option value="Kumar Nagar">Kumar Nagar</option>
              <option value="P.N. Road">P.N. Road</option>
              <option value="Pandian Nagar">Pandian Nagar</option>
              <option value="15 Velampalayam">15 Velampalayam</option>
              <option value="Velampalayam">Velampalayam</option>
              <option value="Angeripalayam">Angeripalayam</option>
              <option value="Gandhi Nagar">Gandhi Nagar</option>
              <option value="Kangeyam Road">Kangeyam Road</option>
              <option value="Nallur">Nallur</option>
              <option value="Muthanampalayam">Muthanampalayam</option>
              <option value="Palladam Road">Palladam Road</option>
              <option value="Veerapandi">Veerapandi</option>
              <option value="Andipalayam">Andipalayam</option>
              <option value="Mangalam Road">Mangalam Road</option>
              <option value="Karuvampalayam">Karuvampalayam</option>
              <option value="Thennampalayam">Thennampalayam</option>
              <option value="Dharapuram Road">Dharapuram Road</option>`;

// Unified Brand Icon (House + Wrench for Tiruppur)
const BRAND_ICON_SVG = `<div class="brand-icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Modern Pitched Roof -->
            <path d="M4 14.5L16 4.5L28 14.5" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Sensor Pillar -->
            <path d="M22 9.8V7.5H24.5V11.8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- House Foundation & Appliance Frame -->
            <path d="M7 13.8V25C7 26.1 7.9 27 9 27H23C24.1 27 25 26.1 25 25V13.8" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
            <!-- Appliance Drum Circle -->
            <circle cx="16" cy="19.5" r="4.8" stroke="#38bdf8" stroke-width="1.4"/>
            <!-- Integrated Service Wrench -->
            <g transform="rotate(-38 16 19.5)">
              <rect x="14.8" y="13.2" width="2.4" height="11.5" rx="1.2" fill="#fbbf24"/>
              <path d="M13.6 14.2C12.4 12.6 12.7 10.3 14.2 9.1C16 7.6 18.6 7.8 20 9.4C21 10.7 21 12.3 20 13.6L18.4 12.6L17.1 13.6L16.1 12.6Z" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="2.5" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="1.1" fill="#07192f"/>
            </g>
            <!-- Spark -->
            <circle cx="16" cy="3.5" r="1.2" fill="#fbbf24"/>
          </svg>
        </div>`;

function generateDualSchemas(p, faqData) {
  const localBusinessObj = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Home Appliance Repair Service in Tirupur",
    "image": "https://servicecentertirupur.com/favicon-192x192.png",
    "telephone": "+918882055269",
    "url": p.canonical,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chikanna Chettiar St, Kamatchi Amman, Chikkanna",
      "addressLocality": "Tirupur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641604",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.099761,
      "longitude": 77.347941
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:30"
      }
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 4892,
      "bestRating": 5,
      "worstRating": 1
    }
  };

  let faqHtml = '';
  if (faqData && faqData.groups) {
    const allFaqItems = [];
    faqData.groups.forEach(g => {
      g.items.forEach(it => allFaqItems.push(it));
    });
    const faqObj = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqItems.map(item => ({
        "@type": "Question",
        "name": item.q.replace(/<[^>]+>/g, ''),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a.replace(/<[^>]+>/g, '')
        }
      }))
    };
    faqHtml = `\n  <!-- FAQ Schema JSON-LD -->\n  <script type="application/ld+json">\n${JSON.stringify(faqObj, null, 2)}\n  </script>`;
  }

  return `<!-- Schema.org JSON-LD -->\n  <!-- LocalBusiness Schema with AggregateRating -->\n  <script type="application/ld+json">\n${JSON.stringify(localBusinessObj, null, 2)}\n  </script>${faqHtml}`;
}

function transformHtmlPage(p, pageIndex) {
  // Read source file (could be oldFile if newFile doesn't exist yet)
  let sourcePath = p.newFile;
  if (!fs.existsSync(sourcePath)) {
    sourcePath = p.oldFile;
  }
  let content = fs.readFileSync(sourcePath, 'utf8');

  // 1. Google Tag: exactly G-DRV7B7TFS0 (clean any old or duplicate tags)
  content = content.replace(/<!-- Google tag[\s\S]*?gtag\('config',\s*'G-[^']+'\);\s*<\/script>/gi, '');
  content = content.replace(/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[^"]+"><\/script>\s*<script>[\s\S]*?<\/script>/gi, '');
  
  const googleTagSnippet = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DRV7B7TFS0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DRV7B7TFS0');
</script>`;

  // Insert single Google Tag right after <head> or before <meta charset>
  if (content.includes('<meta charset="UTF-8">')) {
    content = content.replace('<meta charset="UTF-8">', `${googleTagSnippet}\n\n  <meta charset="UTF-8">`);
  } else if (content.includes('<head>')) {
    content = content.replace('<head>', `<head>\n  ${googleTagSnippet}`);
  }

  // 2. Canonicals and OpenGraph URLs
  content = content.replace(/https:\/\/servicecentermadurai\.com/g, 'https://servicecentertirupur.com');
  content = content.replace(/https:\/\/servicecentereode\.com/g, 'https://servicecentertirupur.com');
  content = content.replace(/https:\/\/servicecentercoimbatore\.com/g, 'https://servicecentertirupur.com');
  content = content.replace(/-madurai\.html/g, '-tirupur.html');
  content = content.replace(/-in-madurai\.html/g, '-in-tirupur.html');
  content = content.replace(/-tiruppur\.html/g, '-tirupur.html');
  content = content.replace(/-in-tiruppur\.html/g, '-in-tirupur.html');

  content = content.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${p.canonical}"`);
  content = content.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${p.canonical}"`);
  content = content.replace(/<meta property="og:site_name" content="[^"]*"/i, `<meta property="og:site_name" content="Service Center Tiruppur"`);

  // 3. Clean title & meta description without creating stray characters
  content = content.replace(/<title>([\s\S]*?)<\/title>[^<]*?(?=<|$)/i, (m, t) => {
    let cleanT = t.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return `<title>${cleanT}</title>`;
  });
  content = content.replace(/<meta name="description" content="([^"]*)"[^>]*>/i, (m, d) => {
    let cleanD = d.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return `<meta name="description" content="${cleanD}">`;
  });
  content = content.replace(/<meta property="og:title" content="([^"]*)"[^>]*>/i, (m, t) => {
    let cleanT = t.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return `<meta property="og:title" content="${cleanT}">`;
  });
  content = content.replace(/<meta property="og:description" content="([^"]*)"[^>]*>/i, (m, d) => {
    let cleanD = d.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return `<meta property="og:description" content="${cleanD}">`;
  });
  content = content.replace(/(<meta[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<link[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<title[\s\S]*?<\/title>)>+/gi, '$1');

  // 4. Inject Dual Schemas cleanly into <head>
  const dualSchemasHtml = generateDualSchemas(p, masterFaqs[p.newFile]);
  if (/<!-- Schema\.org JSON-LD -->[\s\S]*?<\/head>/i.test(content)) {
    content = content.replace(/<!-- Schema\.org JSON-LD -->[\s\S]*?<\/head>/i, `${dualSchemasHtml}\n</head>`);
  } else if (/<!-- LocalBusiness Schema[\s\S]*?<\/head>/i.test(content)) {
    content = content.replace(/<!-- LocalBusiness Schema[\s\S]*?<\/head>/i, `${dualSchemasHtml}\n</head>`);
  } else if (/<script type="application\/ld\+json">[\s\S]*?<\/head>/i.test(content)) {
    content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/head>/i, `${dualSchemasHtml}\n</head>`);
  } else {
    content = content.replace(/<\/head>/i, `  ${dualSchemasHtml}\n</head>`);
  }

  // 5. Hero Lead & Tanglish Quick Box
  if (heroIntros[p.newFile]) {
    const intro = heroIntros[p.newFile];
    content = content.replace(/<p class="hero-(?:lead|copy)">[\s\S]*?<\/p>/i, `<p class="hero-lead">${intro.lead}</p>`);
    
    // Replace Tanglish Box / Callout Box
    const tanglishBoxHtml = `<div class="tanglish-quick-box">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
          <div>
            <strong>${intro.tanglishPrompt}</strong><br>
            ${intro.tanglishBody}
          </div>
        </div>`;

    if (content.includes('class="tanglish-quick-box"')) {
      content = content.replace(/<div class="tanglish-quick-box">[\s\S]*?<\/div>\s*<\/div>/i, tanglishBoxHtml);
    } else if (content.includes('class="tanglish-intro-box"')) {
      content = content.replace(/<div class="tanglish-intro-box">[\s\S]*?<\/div>\s*<\/div>/i, tanglishBoxHtml);
    } else if (content.includes('<!-- 2. Tamil Callout Box -->')) {
      content = content.replace(/<!-- 2\. Tamil Callout Box -->[\s\S]*?<\/section>/i, `<section class="section" style="padding-top: 1.5rem; padding-bottom: 1.5rem;">\n    <div class="container">\n      ${tanglishBoxHtml}\n    </div>\n  </section>`);
    } else if (/<p style="font-size: 0\.95rem; color: #475569; margin-bottom: 1\.25rem;">[\s\S]*?<\/p>/i.test(content)) {
      content = content.replace(/<p style="font-size: 0\.95rem; color: #475569; margin-bottom: 1\.25rem;">[\s\S]*?<\/p>/i, tanglishBoxHtml);
    }

    // Replace about-text if present
    if (content.includes('class="about-text"')) {
      const newAboutHtml = `<div class="about-text">
          <p class="about-lead">
            ${intro.aboutLead}
          </p>
          <p>
            ${intro.aboutP2}
          </p>
          <p>
            ${intro.aboutP3}
          </p>
        </div>`;
      content = content.replace(/<div class="about-text">[\s\S]*?<\/div>/i, newAboutHtml);
    }
  }

  // 6. Booking Form Localities
  content = content.replace(/<label for="[^"]*Locality">Your Locality in (?:Erode|Coimbatore|Madurai)<\/label>\s*<select[^>]*>[\s\S]*?<\/select>/i, (m) => {
    return m.replace(/<option[\s\S]*<\/option>/i, bookingFormLocalitiesHtml).replace(/in (?:Erode|Coimbatore|Madurai)/g, 'in Tiruppur');
  });

  // 7. Localities Section
  const newLocalitiesHtml = renderLocalitiesSection(p, pageIndex);
  content = content.replace(/<section class="section" id="localitiesSection"[\s\S]*?<\/section>/i, newLocalitiesHtml);

  // 8. Customer Experiences Section
  const expCards = allExperiences[p.newFile] || [];
  const newExpHtml = renderExperiencesSection(p, expCards);
  content = content.replace(/(<!--\s*(?:[0-9]+\.\s*)?(?:Real Customer Situations|Customer Service Experiences|Real-Life Customer Experiences)[\s\S]*?<\/section>)/i, newExpHtml);

  // 9. FAQ Section
  if (masterFaqs[p.newFile]) {
    const newFaqHtml = renderFaqSection(p, masterFaqs[p.newFile]);
    if (content.includes('id="faqSection"')) {
      content = content.replace(/(<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>)/i, newFaqHtml);
    } else {
      content = content.replace(/(<!-- Service Center (?:Erode|Coimbatore|Karur|Location|Madurai Location)|<section class="service-center-map-section")/i, `${newFaqHtml}\n\n  $1`);
    }
  }

  // 10. Map & Location Section
  content = content.replace(/<!-- Service Center (?:Erode|Coimbatore|Karur|Location|Madurai Location)[\s\S]*?<\/section>/i, tiruppurMapSectionHtml);
  content = content.replace(/<section class="service-center-map-section" id="service-center-location">[\s\S]*?<\/section>/i, tiruppurMapSectionHtml);

  // 11. Footer Brand Grid
  content = content.replace(/<div class="footer-brand-grid">[\s\S]*?<\/div>/i, `<div class="footer-brand-grid">\n          ${footerBrandGridHtml}\n        </div>`);
  content = content.replace(/<h4>Brand Service Centers in (?:Erode|Coimbatore|Madurai|Tiruppur)<\/h4>/gi, '<h4>Brand Service Centers in Tirupur</h4>');

  // 12. Footer Coverage Links
  content = content.replace(/<div class="footer-col">\s*<h4>(?:Erode|Coimbatore|Madurai|Tiruppur) Coverage<\/h4>[\s\S]*?<\/div>/i, footerCoverageHtml);

  // 13. Footer Address & Description
  content = content.replace(/<h4>Service Center (?:Erode|Coimbatore|Madurai|Tiruppur)<\/h4>/gi, '<h4>Service Center Tirupur</h4>');
  content = content.replace(/<span>(?:Doorstep Home Appliance Repair Across All Localities in [^<]+|1167,\s*Ground\s*Floor[^\n<]*|273,\s*PRS[^\n<]*)<\/span>/gi, '<span>Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India</span>');
  content = content.replace(/(?:Doorstep Service Across (?:Madurai|Tiruppur)[^\n<",]*|1167,\s*Ground\s*Floor,\s*Muthaiya\s*Complex[^\n<",]*|273,\s*PRS\s*Pandian[^\n<",]*)/gi, 'Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India');
  content = content.replace(/<div>©\s*2026\s*servicecenter(?:erode|coimbatore|madurai|tirupur)\.com[^<]*<\/div>/gi, '<div>© 2026 servicecentertirupur.com — Local Home Appliance Repair in Tirupur.</div>');

  // 14. Header Logo & Brand Text & Brand Icon
  content = content.replace(/title="Service Center (?:Erode|Coimbatore|Madurai|Tiruppur) Homepage"/gi, 'title="Service Center Tirupur Homepage"');
  content = content.replace(/<span class="brand-name">Service Center (?:Erode|Coimbatore|Madurai|Tiruppur)<\/span>/gi, '<span class="brand-name">Service Center Tirupur</span>');
  content = content.replace(/<span class="brand-loc">(?:Local Appliance Care|LOCAL APPLIANCE CARE)<\/span>/gi, '<span class="brand-loc">LOCAL APPLIANCE CARE</span>');
  content = content.replace(/<div class="brand-icon">[\s\S]*?<\/div>/i, BRAND_ICON_SVG);

  // 15. Nav Links Update
  content = content.replace(/href="(?:\/)?servicecenter\/home-appliance-service-center-madurai\.html"/g, 'href="/servicecenter/home-appliance-service-center-tirupur.html"');
  content = content.replace(/href="(?:\/)?ac\/ac-repair-service-in-madurai\.html"/g, 'href="/ac/ac-repair-service-in-tirupur.html"');
  content = content.replace(/href="(?:\/)?fridge\/refrigerator-repair-service-in-madurai\.html"/g, 'href="/fridge/refrigerator-repair-service-in-tirupur.html"');
  content = content.replace(/href="(?:\/)?washing-machine\/washing-machine-repair-service-in-madurai\.html"/g, 'href="/washing-machine/washing-machine-repair-service-in-tirupur.html"');
  content = content.replace(/href="(?:\/)?tv\/tv-repair-service-in-madurai\.html"/g, 'href="/tv/tv-repair-service-in-tirupur.html"');

  // 16. Climate & Season Callout
  const climateCalloutHtml = `<!-- 2b. Tiruppur Local Climate & Usage Context -->
        <div class="info-callout" style="margin-top: 1.5rem; margin-bottom: 0;">
          <h3>Tirupur Climate & Local Appliance Usage</h3>
          <p>
            Tirupur experiences intense daytime heat between March and June, with temperatures often touching 37°C to 39°C. As a bustling textile manufacturing hub, residential areas along Avinashi Road, Kumar Nagar, and P.N. Road encounter airborne cotton lint and fine fabric dust that accumulates on outdoor AC condenser coils and refrigerator compressor grilles. In addition, hard borewell water in peripheral layouts causes mineral scale on washing machine heaters and drums. Routine seasonal servicing and filter cleaning ensure smooth performance throughout the year.
          </p>
        </div>`;

  content = content.replace(/<!-- 2b\. (?:Erode|Coimbatore|Madurai) Local Climate[\s\S]*?<\/div>\s*<\/div>/i, climateCalloutHtml);
  content = content.replace(/<h3>(?:Erode|Coimbatore|Madurai) [Cc]limate & Heavy Summer AC Usage<\/h3>[\s\S]*?<\/p>/i, `<h3>Tirupur Climate & Heavy Summer AC Usage</h3>
          <p>
            Tirupur experiences intense daytime heat between March and June, with temperatures routinely reaching 37°C to 39°C. With air conditioners running long hours across homes in Avinashi Road, Kumar Nagar, and Nallur, airborne textile dust and lint settle heavily on outdoor condenser coils and indoor filters. Periodic seasonal servicing and high-pressure jet washing help your AC sustain strong cooling throughout peak summer heat.
          </p>`);

  // 17. Hero Image update in index.html
  if (p.category === 'root') {
    content = content.replace(/hero-appliance-service-tirupur/g, 'hero-appliance-service-tirupur');
  }

  // 18. Common Locality Replacements
  const localityReplacements = [
    { from: /Anna Nagar & KK Nagar/gi, to: 'Avinashi Road & Kumar Nagar' },
    { from: /Tallakulam & Goripalayam/gi, to: 'P.N. Road & Pandian Nagar' },
    { from: /Arapalayam & Kalavasal/gi, to: 'Nallur & Kangeyam Road' },
    { from: /Villapuram & South Gate/gi, to: 'Palladam Road & Veerapandi' },
    { from: /Sellur & Mattuthavani/gi, to: '15 Velampalayam & Angeripalayam' },
    { from: /Anna Nagar/gi, to: 'Kumar Nagar' },
    { from: /KK Nagar/gi, to: 'Avinashi Road' },
    { from: /Tallakulam/gi, to: 'P.N. Road' },
    { from: /Goripalayam/gi, to: 'Pandian Nagar' },
    { from: /Mattuthavani/gi, to: '15 Velampalayam' },
    { from: /Sellur/gi, to: 'Velampalayam' },
    { from: /Arapalayam/gi, to: 'Angeripalayam' },
    { from: /Kalavasal/gi, to: 'Gandhi Nagar' },
    { from: /Ponmeni/gi, to: 'Rayapuram' },
    { from: /Kochadai/gi, to: 'Boyampalayam' },
    { from: /Thirunagar/gi, to: 'Nallur' },
    { from: /Pasumalai/gi, to: 'Kangeyam Road' },
    { from: /Villapuram/gi, to: 'Palladam Road' },
    { from: /South Gate/gi, to: 'Veerapandi' },
    { from: /Palanganatham/gi, to: 'Andipalayam' },
    { from: /TVS Nagar/gi, to: 'Mangalam Road' },
    { from: /Jaihindpuram/gi, to: 'Karuvampalayam' },
    { from: /Avaniyapuram/gi, to: 'Thennampalayam' },
    { from: /Ellis Nagar/gi, to: 'Dharapuram Road' },
    { from: /K\.Pudur/gi, to: 'KNP Colony' },
    { from: /Simmakkal/gi, to: 'Cotton Market' },
    { from: /Alagar Kovil Road/gi, to: 'Avinashi Road' },
    { from: /New Natham Road/gi, to: 'P.N. Road' },
    { from: /Bypass Road/gi, to: 'Palladam Road' },
    { from: /Kamarajar Salai/gi, to: 'Kangeyam Road' },
    { from: /625001/g, to: '641601' },
    { from: /625020/g, to: '641603' },
    { from: /625007/g, to: '641652' },
    { from: /625107/g, to: '641666' },
    { from: /625009/g, to: '641606' },
    { from: /Madurai/g, to: 'Tiruppur' },
    { from: /madurai/g, to: 'tiruppur' },
    { from: /MADURAI/g, to: 'TIRUPPUR' }
  ];

  localityReplacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // 19. Clean Heavy English / Robotic AI Words
  const buzzwords = [
    { from: /\bpromptly\b/gi, to: 'quickly' },
    { from: /\bfacilitates?\b/gi, to: 'helps' },
    { from: /\bfacilitating\b/gi, to: 'helping' },
    { from: /\bcomprehensive assistance\b/gi, to: 'complete repair support' },
    { from: /\bcomprehensive solutions\b/gi, to: 'complete repair services' },
    { from: /\bcomprehensive repair\b/gi, to: 'complete repair' },
    { from: /\bcomprehensive\b/gi, to: 'complete' },
    { from: /\bseamlessly\b/gi, to: 'smoothly' },
    { from: /\bseamless\b/gi, to: 'smooth' },
    { from: /\brobust\b/gi, to: 'solid' },
    { from: /\bleverage\b/gi, to: 'use' },
    { from: /\bleveraging\b/gi, to: 'using' },
    { from: /\bendeavour\b/gi, to: 'aim' },
    { from: /\bmeticulous\b/gi, to: 'careful' },
    { from: /\bmeticulously\b/gi, to: 'carefully' },
    { from: /\bsophisticated\b/gi, to: 'advanced' },
    { from: /\bcutting-edge\b/gi, to: 'modern' },
    { from: /\bstate-of-the-art\b/gi, to: 'modern' },
    { from: /\btailored solutions\b/gi, to: 'practical fixes' },
    { from: /\btailored\b/gi, to: 'suitable' },
    { from: /\bunparalleled\b/gi, to: 'trusted' },
    { from: /\bstreamlined\b/gi, to: 'quick' },
    { from: /\bhassle-free experience\b/gi, to: 'easy service' },
    { from: /\bhassle-free\b/gi, to: 'convenient' },
    { from: /\befficient resolution\b/gi, to: 'quick fix' },
    { from: /\befficiently\b/gi, to: 'properly' },
    { from: /\bmalfunctioning\b/gi, to: 'faulty' },
    { from: /\bmalfunction\b/gi, to: 'fault' },
    { from: /\brectification\b/gi, to: 'repair' },
    { from: /\bexceptional assistance\b/gi, to: 'reliable help' },
    { from: /\bexceptional\b/gi, to: 'reliable' },
    { from: /\bproactive support\b/gi, to: 'quick help' },
    { from: /\bproactive\b/gi, to: 'active' },
    { from: /\btechnologically advanced\b/gi, to: 'modern' },
    { from: /\bprofessional assistance\b/gi, to: 'technician help' },
    { from: /\btechnical intervention\b/gi, to: 'technician check' },
    { from: /\butilization\b/gi, to: 'use' },
    { from: /\brequirements\b/gi, to: 'needs' },
    { from: /\brequirement\b/gi, to: 'need' },
    { from: /\bdiagnosis\b/gi, to: 'inspection' },
    { from: /\boptimization\b/gi, to: 'tuning' },
    { from: /\bexpertise\b/gi, to: 'experience' },
    { from: /\bOur highly trained professionals\b/gi, to: 'Our experienced local technicians' },
    { from: /\bWe are committed to delivering\b/gi, to: 'We provide' },
    { from: /\bExperience seamless\b/gi, to: 'Get smooth' },
    { from: /\bWhether you need\b/gi, to: 'If you need' },
    { from: /\bWe provide unparalleled\b/gi, to: 'We provide trusted' },
    { from: /India,\s*India/gi, to: 'India' },
    { from: /\bpromptly\b/gi, to: 'quickly' },
    { from: /\bfacilitate\b/gi, to: 'help' },
    { from: /\bcomprehensive assistance\b/gi, to: 'complete repair support' },
    { from: /\bcomprehensive\b/gi, to: 'complete' },
    { from: /\bseamless\b/gi, to: 'smooth' },
    { from: /\brobust\b/gi, to: 'strong' },
    { from: /\bleverage\b/gi, to: 'use' },
    { from: /\bendeavour\b/gi, to: 'aim' },
    { from: /\bmeticulous\b/gi, to: 'careful' },
    { from: /\bsophisticated\b/gi, to: 'advanced' },
    { from: /\bcutting-edge\b/gi, to: 'modern' },
    { from: /\btailored solutions\b/gi, to: 'practical fixes' },
    { from: /\bunparalleled\b/gi, to: 'trusted' },
    { from: /\bstreamlined\b/gi, to: 'quick' },
    { from: /\bstate-of-the-art\b/gi, to: 'modern' },
    { from: /\bhassle-free experience\b/gi, to: 'easy service' },
    { from: /\bhassle-free\b/gi, to: 'convenient' },
    { from: /\befficient resolution\b/gi, to: 'quick fix' },
    { from: /\befficiently\b/gi, to: 'properly' },
    { from: /\bmalfunctioning\b/gi, to: 'not working' },
    { from: /\brectification\b/gi, to: 'repair' },
    { from: /\bexceptional assistance\b/gi, to: 'reliable help' },
    { from: /\bproactive support\b/gi, to: 'active help' },
    { from: /\btechnologically advanced\b/gi, to: 'modern' },
    { from: /\bcoimbatore\b/gi, to: 'Tirupur' },
    { from: /\berode\b/gi, to: 'Tirupur' }
  ];

  buzzwords.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // Enforce canonical business address and single-p Tirupur spelling
  const CANONICAL_ADDR = 'Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India';
  content = content.replace(/Chikanna Chettiar St[^<"\n]{0,120}(?:641604|641601)[^<"\n]{0,30}India/gi, '___CANONICAL_ADDR___');
  content = content.replace(/Tiruppur/g, 'Tirupur');
  content = content.replace(/tiruppur/g, 'tirupur');
  content = content.replace(/TIRUPPUR/g, 'TIRUPUR');
  content = content.replace(/___CANONICAL_ADDR___/g, CANONICAL_ADDR);
  content = content.replace(/India,\s*India/g, 'India');

    // Universal Phone Number Migration to 8882055269
  content = content.replace(/\+91\s*92115\s*12088/g, '+91 88820 55269');
  content = content.replace(/\+919211512088/g, '+918882055269');
  content = content.replace(/92115\s*12088/g, '88820 55269');
  content = content.replace(/9211512088/g, '8882055269');
  content = content.replace(/\+91\s*94420\s*54321/g, '+91 88820 55269');
  content = content.replace(/\+919442054321/g, '+918882055269');
  content = content.replace(/94420\s*54321/g, '88820 55269');
  content = content.replace(/9442054321/g, '8882055269');
  
  // Stray header characters cleanup
  content = content.replace(/(<meta[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<link[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<title[\s\S]*?<\/title>)>+/gi, '$1');

  return content;
}

// Execute transformation
console.log('--- STARTING MASTER TIRUPPUR TRANSFORMATION ---');
let pagesTransformed = 0;

pages.forEach((p, idx) => {
  const transformed = transformHtmlPage(p, idx);
  fs.writeFileSync(p.newFile, transformed, 'utf8');
  pagesTransformed++;

  // If newFile is different from oldFile, delete the oldFile
  if (p.oldFile !== p.newFile && fs.existsSync(p.oldFile)) {
    fs.unlinkSync(p.oldFile);
  }
});

console.log(`Successfully transformed ${pagesTransformed} content pages into Tiruppur.`);
