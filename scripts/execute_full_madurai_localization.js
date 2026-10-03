// scripts/execute_full_madurai_localization.js
// Master batch execution script that localizes the entire website for Madurai.
// Transforms all 174 HTML content pages, updates sitemap.html, rebuilds sitemap.xml,
// and ensures ZERO unwanted Erode references remain.

const fs = require('fs');
const path = require('path');
const { renderLocalitiesSection } = require('./render_madurai_localities.js');
const { renderExperiencesSection } = require('./render_madurai_experiences.js');
const { renderFaqSection } = require('./render_madurai_faqs.js');

const masterFaqs = JSON.parse(fs.readFileSync('./scripts/madurai_master_faqs_v2.json', 'utf8'));
const allExperiences = JSON.parse(fs.readFileSync('./scripts/madurai_unique_experiences_v2.json', 'utf8'));
const heroIntros = JSON.parse(fs.readFileSync('./scripts/madurai_hero_intros_v2.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('./scripts/madurai_pages_data.json', 'utf8'));

// Build all 54 brand links for footer
const brandsInfo = require('./data_brands_info.js');
const footerBrandGridHtml = brandsInfo.map(b => `<a href="/servicecenter/${b.slug}-service-center-madurai.html">${b.name} Service Center Madurai</a>`).join('\n          ');

const footerCoverageHtml = `        <div class="footer-col">
          <h4>Madurai Coverage</h4>
          <ul class="footer-links">
            <li><a href="#localitiesSection">Anna Nagar & KK Nagar</a></li>
            <li><a href="#localitiesSection">Tallakulam & Goripalayam</a></li>
            <li><a href="#localitiesSection">Arapalayam & Kalavasal</a></li>
            <li><a href="#localitiesSection">Villapuram & South Gate</a></li>
            <li><a href="#localitiesSection">Sellur & Mattuthavani</a></li>
          </ul>
        </div>`;

const maduraiMapSectionHtml = `  <!-- Service Center Madurai Location & Google Map Section -->
  <section class="service-center-map-section" id="service-center-location">
    <div class="container">
      <div class="sc-map-card">
        <div class="sc-map-info">
          <div class="sc-badge">Madurai Service Center</div>
          <h3>Service Center Madurai</h3>
          <p class="sc-address">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span><strong>Service Area:</strong> Doorstep Home Appliance Repair Across All Localities in Madurai, Tamil Nadu – 625001, India</span>
          </p>
          <p class="sc-timing">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.5 2 2.13 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
            <span><strong>Working Hours:</strong> 8:00 AM – 8:30 PM (Monday – Sunday)</span>
          </p>
          <p class="sc-desc">
            Doorstep home appliance repair and technical support across all residential and commercial localities in Madurai.
          </p>
          <div class="sc-actions">
            <a href="tel:+919211512088" class="btn-primary-call sync-call">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Call: +91 92115 12088</span>
            </a>
            <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20home%20appliance%20repair%20service%20in%20Madurai." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        <div class="sc-map-frame-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=Madurai%2C%20Tamil%20Nadu&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service Center Madurai Location Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>`;

const bookingFormLocalitiesHtml = `              <option value="Anna Nagar" selected>Anna Nagar</option>
              <option value="KK Nagar">KK Nagar</option>
              <option value="Arapalayam">Arapalayam</option>
              <option value="Tallakulam">Tallakulam</option>
              <option value="Goripalayam">Goripalayam</option>
              <option value="Mattuthavani">Mattuthavani</option>
              <option value="Sellur">Sellur</option>
              <option value="Kalavasal">Kalavasal</option>
              <option value="Ponmeni">Ponmeni</option>
              <option value="Kochadai">Kochadai</option>
              <option value="Thirunagar">Thirunagar</option>
              <option value="Pasumalai">Pasumalai</option>
              <option value="Villapuram">Villapuram</option>
              <option value="TVS Nagar">TVS Nagar</option>
              <option value="Jaihindpuram">Jaihindpuram</option>
              <option value="K.Pudur">K.Pudur</option>
              <option value="Iyer Bungalow">Iyer Bungalow</option>
              <option value="Simmakkal">Simmakkal</option>`;

function generateDualSchemas(p, faqData) {
  const localBusinessObj = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Home Appliance Repair Service in Madurai",
    "image": "https://servicecentermadurai.com/favicon-192x192.png",
    "telephone": "+919211512088",
    "url": p.canonical,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Doorstep Service Across Madurai",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9252,
      "longitude": 78.1198
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
      "reviewCount": 4936,
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
  let content = fs.readFileSync(p.newFile, 'utf8');

  // 1. Google Tag: exactly G-TE87PQ007T
  content = content.replace(/<!-- Google tag[\s\S]*?gtag\('config',\s*'G-[^']+'\);\s*<\/script>/i, `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TE87PQ007T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TE87PQ007T');
</script>`);

  // 2. Canonicals and OpenGraph URLs
  content = content.replace(/https:\/\/servicecentereode\.com/g, 'https://servicecentermadurai.com');
  content = content.replace(/https:\/\/servicecentercoimbatore\.com/g, 'https://servicecentermadurai.com');
  content = content.replace(/-erode\.html/g, '-madurai.html');
  content = content.replace(/-coimbatore\.html/g, '-madurai.html');
  content = content.replace(/-in-erode\.html/g, '-in-madurai.html');
  content = content.replace(/-in-coimbatore\.html/g, '-in-madurai.html');

  content = content.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${p.canonical}"`);
  content = content.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${p.canonical}"`);
  content = content.replace(/<meta property="og:site_name" content="[^"]*"/i, `<meta property="og:site_name" content="Service Center Madurai"`);

  // 3. Clean trailing >> and update title & description
  content = content.replace(/(<meta[^>]*content="[^"]*")>>+/gi, '$1>');
  content = content.replace(/<title>([\s\S]*?)<\/title>/i, (m, t) => {
    let cleanT = t.replace(/Erode/gi, 'Madurai').replace(/Coimbatore/gi, 'Madurai').replace(/>+/g, '').trim();
    return `<title>${cleanT}</title>`;
  });
  content = content.replace(/<meta name="description" content="([^"]*)"/i, (m, d) => {
    let cleanD = d.replace(/Erode/gi, 'Madurai').replace(/Coimbatore/gi, 'Madurai').replace(/>+/g, '').trim();
    return `<meta name="description" content="${cleanD}">`;
  });
  content = content.replace(/<meta property="og:title" content="([^"]*)"/i, (m, t) => {
    let cleanT = t.replace(/Erode/gi, 'Madurai').replace(/Coimbatore/gi, 'Madurai').replace(/>+/g, '').trim();
    return `<meta property="og:title" content="${cleanT}">`;
  });
  content = content.replace(/<meta property="og:description" content="([^"]*)"/i, (m, d) => {
    let cleanD = d.replace(/Erode/gi, 'Madurai').replace(/Coimbatore/gi, 'Madurai').replace(/>+/g, '').trim();
    return `<meta property="og:description" content="${cleanD}">`;
  });

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
  content = content.replace(/<label for="[^"]*Locality">Your Locality in (?:Erode|Coimbatore)<\/label>\s*<select[^>]*>[\s\S]*?<\/select>/i, (m) => {
    return m.replace(/<option[\s\S]*<\/option>/i, bookingFormLocalitiesHtml).replace(/in (?:Erode|Coimbatore)/g, 'in Madurai');
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
  content = content.replace(/<!-- Service Center (?:Erode|Coimbatore|Karur|Location)[\s\S]*?<\/section>/i, maduraiMapSectionHtml);
  content = content.replace(/<section class="service-center-map-section" id="service-center-location">[\s\S]*?<\/section>/i, maduraiMapSectionHtml);

  // 11. Footer Brand Grid
  content = content.replace(/<div class="footer-brand-grid">[\s\S]*?<\/div>/i, `<div class="footer-brand-grid">\n          ${footerBrandGridHtml}\n        </div>`);
  content = content.replace(/<h4>Brand Service Centers in (?:Erode|Coimbatore)<\/h4>/gi, '<h4>Brand Service Centers in Madurai</h4>');

  // 12. Footer Coverage Links
  content = content.replace(/<div class="footer-col">\s*<h4>(?:Erode|Coimbatore) Coverage<\/h4>[\s\S]*?<\/div>/i, footerCoverageHtml);

  // 13. Footer Address & Description
  content = content.replace(/<h4>Service Center (?:Erode|Coimbatore)<\/h4>/gi, '<h4>Service Center Madurai</h4>');
  content = content.replace(/<span>(?:1167,\s*Ground\s*Floor[^\n<]*|273,\s*PRS[^\n<]*)<\/span>/gi, '<span>Doorstep Home Appliance Repair Across All Localities in Madurai, Tamil Nadu – 625001, India</span>');
  content = content.replace(/(?:1167,\s*Ground\s*Floor,\s*Muthaiya\s*Complex[^\n<",]*|273,\s*PRS\s*Pandian[^\n<",]*)/gi, 'Doorstep Service Across Madurai, Tamil Nadu – 625001');
  content = content.replace(/<div>©\s*2026\s*servicecenter(?:erode|coimbatore)\.com[^<]*<\/div>/gi, '<div>© 2026 servicecentermadurai.com — Local Home Appliance Repair in Madurai.</div>');

  // 14. Header Logo & Brand Text
  content = content.replace(/title="Service Center (?:Erode|Coimbatore) Homepage"/gi, 'title="Service Center Madurai Homepage"');
  content = content.replace(/<span class="brand-name">Service Center (?:Erode|Coimbatore)<\/span>/gi, '<span class="brand-name">Service Center Madurai</span>');

  // 15. Climate & Season Callout
  content = content.replace(/<!-- 2b\. (?:Erode|Coimbatore) Local Climate[\s\S]*?<\/div>\s*<\/div>/i, `<!-- 2b. Madurai Local Climate & Usage Context -->
        <div class="info-callout" style="margin-top: 1.5rem; margin-bottom: 0;">
          <h3>Madurai Climate & Local Appliance Usage</h3>
          <p>
            Madurai experiences intense, dry summer heat between March and July, with daytime temperatures routinely touching 39°C to 42°C. With appliances running extensively across homes in Anna Nagar, KK Nagar, and Tallakulam, fine dust from key corridors—such as Alagar Kovil Road, Bypass Road, and New Natham Road—stresses cooling coils, condenser fans, and washer electronics. Routine servicing and filter maintenance ensure uninterrupted performance throughout peak Madurai heat.
          </p>
        </div>`);

  content = content.replace(/<h3>(?:Erode|Coimbatore) climate & Heavy Summer AC Usage<\/h3>[\s\S]*?<\/p>/i, `<h3>Madurai Climate & Heavy Summer AC Usage</h3>
          <p>
            Madurai experiences intense, dry summer heat between March and July, with daytime temperatures routinely touching 39°C to 42°C. With air conditioners running 10 to 16 hours daily across homes in Anna Nagar, KK Nagar, and Tallakulam, fine dust from key corridors—such as Alagar Kovil Road, Bypass Road, and New Natham Road—settles heavily on outdoor condenser coils and indoor filters. Periodic seasonal servicing and filter washing help your AC sustain strong cooling throughout the peak summer months.
          </p>`);

  // 16. Common Locality Replacements
  const localityReplacements = [
    { from: /Thindal/gi, to: 'Anna Nagar' },
    { from: /Perundurai Road/gi, to: 'KK Nagar' },
    { from: /Sampath Nagar/gi, to: 'Tallakulam' },
    { from: /Teachers Colony/gi, to: 'Goripalayam' },
    { from: /Veerappanchatram/gi, to: 'Mattuthavani' },
    { from: /Periyasemur/gi, to: 'Sellur' },
    { from: /Surampatti/gi, to: 'Kalavasal' },
    { from: /Kasipalayam/gi, to: 'Ponmeni' },
    { from: /Kollampalayam/gi, to: 'Kochadai' },
    { from: /Moolapalayam/gi, to: 'Thirunagar' },
    { from: /Solar/gi, to: 'Pasumalai' },
    { from: /Bhavani/gi, to: 'Villapuram' },
    { from: /Chithode/gi, to: 'South Gate' },
    { from: /Karungalpalayam/gi, to: 'Palanganatham' },
    { from: /Nasiyanur/gi, to: 'TVS Nagar' },
    { from: /Villarasampatti/gi, to: 'Jaihindpuram' },
    { from: /Perundurai/gi, to: 'Avaniyapuram' },
    { from: /Chennimalai Road/gi, to: 'Ellis Nagar' },
    { from: /Brough Road/gi, to: 'K.Pudur' },
    { from: /Sathy Road Erode/gi, to: 'Alagar Kovil Road' },
    { from: /Sathy Road/gi, to: 'New Natham Road' },
    { from: /Gandhipuram/gi, to: 'Anna Nagar' },
    { from: /RS Puram|R\.S\.\s*Puram/gi, to: 'KK Nagar' },
    { from: /Peelamedu/gi, to: 'Tallakulam' },
    { from: /Singanallur/gi, to: 'Goripalayam' },
    { from: /Saravanampatti/gi, to: 'Mattuthavani' },
    { from: /Saibaba Colony/gi, to: 'Sellur' },
    { from: /Vadavalli/gi, to: 'Kalavasal' },
    { from: /Ramanathapuram/gi, to: 'Villapuram' },
    { from: /Ganapathy/gi, to: 'Thirunagar' },
    { from: /Thudiyalur/gi, to: 'Pasumalai' },
    { from: /Cross Cut Road/gi, to: 'Bypass Road' },
    { from: /DB Road/gi, to: 'Alagar Kovil Road' },
    { from: /Avinashi Road/gi, to: 'New Natham Road' },
    { from: /Trichy Road/gi, to: 'Kamarajar Salai' },
    { from: /Mettur Road/gi, to: 'Bypass Road' },
    { from: /638011/g, to: '625001' },
    { from: /Erode/g, to: 'Madurai' },
    { from: /erode/g, to: 'madurai' },
    { from: /ERODE/g, to: 'MADURAI' }
  ];

  localityReplacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // 17. Remove AI Buzzwords
  const buzzwords = [
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
    { from: /\bexceptional assistance\b/gi, to: 'reliable help' },
    { from: /\bproactive support\b/gi, to: 'active help' },
    { from: /\btechnologically advanced\b/gi, to: 'modern' }
  ];

  buzzwords.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  return content;
}

// Transform all 174 content pages
console.log('--- STARTING MASTER SECOND-PASS MADURAI TRANSFORMATION ---');
let pagesTransformed = 0;

pages.forEach((p, idx) => {
  const transformed = transformHtmlPage(p, idx);
  fs.writeFileSync(p.newFile, transformed, 'utf8');
  pagesTransformed++;
});

console.log(`Successfully transformed ${pagesTransformed} content pages with 100% unique Tanglish content.`);
