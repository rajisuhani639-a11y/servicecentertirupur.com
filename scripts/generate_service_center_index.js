// Generator for /servicecenter/index.html
// Project: servicecenterkarur.com
// Primary Location: Karur, Tamil Nadu, India

const fs = require('fs');
const path = require('path');
const brands = require('./data_brands_info.js');
const localities = require('./data_karur_localities.js');

const outPath = path.join(__dirname, '..', 'service-center', 'index.html');

function renderLocalitiesGrid() {
  const directions = [
    { label: "East Karur", count: localities.east.length, list: localities.east },
    { label: "West Karur", count: localities.west.length, list: localities.west },
    { label: "North Karur", count: localities.north.length, list: localities.north },
    { label: "South Karur", count: localities.south.length, list: localities.south }
  ];

  let html = '';
  directions.forEach(dir => {
    html += `
      <div class="locality-zone-group" style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.85rem; padding-bottom: 0.35rem; border-bottom: 2px solid #bae6fd; display: flex; align-items: center; gap: 0.5rem;">
          <span>📍 ${dir.label} (${dir.count} Verified Areas)</span>
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem;">
          ${dir.list.map(l => `
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem 1rem; box-shadow: var(--shadow-sm);">
              <div style="font-weight: 700; color: var(--primary-color); font-size: 0.92rem;">${l.name}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${l.landmark}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  return html;
}

const canonicalUrl = "https://servicecenterkarur.com/servicecenter/index.html";
const metaTitle = "Multi-Brand Service Center in Karur | All Home Appliance Repair";
const metaDesc = "Looking for home appliance service in Karur? Multi-brand doorstep service center in Karur for AC, refrigerator, washing machine, TV and home appliances.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": metaTitle,
      "description": metaDesc,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://servicecenterkarur.com/#website",
        "name": "Service Center Karur",
        "url": "https://servicecenterkarur.com"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://servicecenterkarur.com/#localbusiness",
      "name": "Service Center Karur",
      "telephone": "+919442054321",
      "url": "https://servicecenterkarur.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jawahar Bazaar, Kovai Road, Near Bus Stand",
        "addressLocality": "Karur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "639001",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Karur"
      },
      "description": "Multi-brand doorstep home appliance service center in Karur covering air conditioners, refrigerators, washing machines, and televisions."
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://servicecenterkarur.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Service Center in Karur",
          "item": canonicalUrl
        }
      ]
    }
  ]
};

// Generate clean brand description and tags based on verified appliances
function getBrandCardDetails(b) {
  const parts = [];
  const pills = [];

  if (b.hasAC) {
    parts.push('AC');
    pills.push('AC');
  }
  if (b.hasFridge) {
    parts.push('refrigerator');
    pills.push('Refrigerator');
  }
  if (b.hasWM) {
    parts.push('washing machine');
    pills.push('Washing Machine');
  }
  if (b.hasTV) {
    parts.push('TV');
    pills.push('TV');
  }

  let desc = '';
  if (parts.length === 4) {
    desc = 'AC, refrigerator, washing machine and TV service support.';
  } else if (parts.length === 3) {
    desc = `${parts[0]}, ${parts[1]} and ${parts[2]} service support.`;
  } else if (parts.length === 2) {
    desc = `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)} and ${parts[1]} service support.`;
  } else if (parts.length === 1) {
    if (parts[0] === 'TV') {
      desc = 'TV service and repair support.';
    } else if (parts[0] === 'AC') {
      desc = 'AC repair and service support.';
    } else if (parts[0] === 'washing machine') {
      desc = 'Washing machine repair and service support.';
    } else {
      desc = `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)} repair and service support.`;
    }
  } else {
    desc = 'Home appliance inspection and service support.';
  }

  return {
    desc,
    pillsText: pills.join(' • ')
  };
}

// Pre-render footer brand directory
const footerBrandDirectoryHtml = `
  <div class="footer-brand-directory">
    <h4>Brand Service Centers in Karur</h4>
    <div class="footer-brand-grid">
      ${brands.map(b => `<a href="/servicecenter/${b.slug}-service-center-karur.html">${b.name} Service Center Karur</a>`).join('\n      ')}
    </div>
  </div>
`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${metaTitle}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${metaTitle}">
  <meta property="og:description" content="${metaDesc}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(schema, null, 2)}
  </script>
</head>
<body>

  <!-- Top Information Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <span>📍 Doorstep Multi-Brand Appliance Service in Karur, Tamil Nadu</span>
      <span>⏰ Mon–Sun: 8:00 AM – 8:30 PM | Fast Technician Visit</span>
      <a href="tel:+919442054321">📞 Call Support: +91 94420 54321</a>
    </div>
  </div>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Karur Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center Karur</span>
          <span class="brand-loc">Local Appliance Care</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="index.html" class="active">Service Center</a>
        <a href="../ac/ac-repair-service-in-karur.html">AC Repair</a>
        <a href="../fridge/refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-karur.html">TV Repair</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919442054321" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call Now</span>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  <div class="nav-backdrop" id="navBackdrop"></div>

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li aria-current="page">Service Center in Karur</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section hero-brand">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Doorstep All-Brand Appliance Service in Karur</span>
        </div>
        <h1 class="brand-h1">Multi-Brand Service Center in Karur</h1>
        <p class="hero-copy">
          Looking for home appliance service in Karur? Browse our multi-brand service center directory for AC, refrigerator, washing machine, TV and other home appliance service requirements. Select your brand to see appliance-specific repair information, common problems and service details.
        </p>

        <div class="hero-cta-group">
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call: +91 94420 54321</span>
          </a>
          <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Quick Request Card -->
      <div class="hero-card-box">
        <h2>Schedule Doorstep Service</h2>
        <p>Expert inspection across Karur for all major appliance brands.</p>
        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin: 1.25rem 0;">
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Quick technician dispatch to your residence
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Upfront price estimate before replacement
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Tested, brand-compatible replacement parts
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Clear fault diagnosis with testing meters
          </div>
        </div>
        <a href="tel:+919442054321" class="btn-primary-call sync-call" style="width: 100%; justify-content: center;">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call: +91 94420 54321</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Appliance Categories -->
  <section class="section" style="background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>Major Appliance Service Categories in Karur</h2>
        <p>Explore dedicated repair services and common troubleshooting details for your household appliances in Karur.</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
        
        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">❄️</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">AC Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">AC repair and service for common cooling, water leakage, gas, PCB, fan and other AC problems in Karur. Our technicians inspect split, inverter, and window air conditioning systems with prompt doorstep diagnostics. If you need AC service center Karur coordination, reliable AC repair Karur technicians, or fast AC service near me, we provide transparent upfront cost estimates.</p>
          </div>
          <a href="../ac/ac-repair-service-in-karur.html" style="font-weight: 600; color: var(--accent-blue); text-decoration: underline;">Explore AC Repair in Karur →</a>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧊</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">Refrigerator Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Doorstep refrigerator repair and fridge service across Karur for cooling failure, compressor tripping, gas pressure loss, and defrost problems. We handle single door refrigerator, double door refrigerator, frost free refrigerator, and side-by-side models. For fast refrigerator service near me or dependable fridge repair Karur assistance, get genuine-compatible parts and skilled doorstep inspection.</p>
          </div>
          <a href="../fridge/refrigerator-repair-service-in-karur.html" style="font-weight: 600; color: var(--accent-blue); text-decoration: underline;">Explore Refrigerator Repair in Karur →</a>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧺</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">Washing Machine Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Comprehensive washing machine repair and maintenance in Karur for drum spinning errors, drainage failures, excessive vibration, and inlet valve blockages. Our team services front load, top load, and semi automatic washing machine units across all leading brands. When searching for washing machine service near me or professional washing machine repair Karur specialists, book quick doorstep inspection with upfront guidance.</p>
          </div>
          <a href="../washing-machine/washing-machine-repair-service-in-karur.html" style="font-weight: 600; color: var(--accent-blue); text-decoration: underline;">Explore Washing Machine Repair in Karur →</a>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📺</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">TV Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Specialized television repair and smart screen service across Karur households. We troubleshoot LED TV repair and Smart TV repair problems including no picture with sound, backlight problem, display problem with vertical lines, audio failure, and motherboard issues. Contact our coordination team for trusted TV service near me and experienced TV repair Karur support at your home.</p>
          </div>
          <a href="../tv/tv-repair-service-in-karur.html" style="font-weight: 600; color: var(--accent-blue); text-decoration: underline;">Explore TV Repair in Karur →</a>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🍲</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">Microwave Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Doorstep microwave oven inspection and electrical diagnosis across Karur for heating failure, spark issues, turntable plate stoppage, and touch control errors. We service solo, grill, and convection microwave models from verified brands including Bosch, Samsung, LG, IFB, and Godrej with proper safety precautions.</p>
          </div>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Doorstep Microwave Diagnosis</span>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🍽️</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">Dishwasher Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Reliable dishwasher maintenance and repair for Karur kitchens facing drainage blocks, water spray arm stoppage, cycle error codes, and heating element faults on verified brands like Bosch, Siemens, and IFB.</p>
          </div>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Kitchen Dishwasher Support</span>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚿</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">Geyser Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Prompt doorstep water heater and geyser repair in Karur for instant and storage geysers experiencing coil burn, thermostat failure, tank water leakage, or power tripping from brands like Bajaj and Havells.</p>
          </div>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Water Heater Inspection</span>
        </div>

        <div class="service-card" style="padding: 1.5rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">💧</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.5rem;">Water Purifier Service Center Karur</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1rem;">Doorstep RO and UV water purifier servicing across Karur covering filter cartridge replacement, membrane cleaning, booster pump issues, and water taste adjustments for supported models.</p>
          </div>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">RO & UV Maintenance</span>
        </div>

      </div>
    </div>
  </section>

  <!-- Complete Brand Directory (Verified Brands) -->
  <section class="section" style="background: #f8fafc; border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header">
        <h2>Brand Directory: ${brands.length} Verified Brands in Karur</h2>
        <p>Select your appliance brand to find Karur service information, common appliance problems, repair details and available service categories.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.15rem;">
        ${brands.map(b => {
          const { desc, pillsText } = getBrandCardDetails(b);

          return `
            <a href="${b.slug}-service-center-karur.html" style="display: flex; flex-direction: column; justify-content: space-between; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; text-decoration: none; box-shadow: var(--shadow-sm); transition: transform 0.15s ease, box-shadow 0.15s ease;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
                  <h3 style="font-size: 1.15rem; color: var(--primary-color); margin: 0; font-weight: 700;">${b.name}</h3>
                  <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 600;">Karur</span>
                </div>
                <div style="font-size: 0.88rem; font-weight: 600; color: var(--accent-blue); margin-bottom: 0.45rem;">Service Center Karur</div>
                <p style="font-size: 0.84rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.45;">${desc}</p>
              </div>
              <div>
                <div style="font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 0.65rem; line-height: 1.4;">
                  ${pillsText}
                </div>
                <div style="font-size: 0.84rem; font-weight: 600; color: var(--accent-blue); display: flex; align-items: center; gap: 0.35rem;">
                  <span>View ${b.name} Details</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- Near Me Section -->
  <section class="section" style="background: #ffffff; border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header">
        <h2>Service Center Near Me in Karur</h2>
        <p>Convenient doorstep assistance for all major home appliances across Karur municipal areas.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-color);">
        <p style="margin-bottom: 1rem;">
          When an essential household appliance stops functioning, searching for a dependable <strong>Service Center Near Me in Karur</strong> is the quickest path to getting it repaired. Rather than transporting heavy air conditioners, bulky double door refrigerators, or large washing machines across town, our technicians come straight to your home.
        </p>
        <p style="margin-bottom: 0;">
          Our technicians carry digital multimeters, starter relays, capacitors, sensors, and common spares for all leading brands. We inspect the appliance, give you a transparent price estimate, and complete the repair right at your doorstep.
        </p>
      </div>
    </div>
  </section>

  <!-- Karur Service Areas -->
  <section class="section" style="background: #f8fafc; border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header">
        <h2>Service Center Areas in Karur</h2>
        <p>Verified coverage across East, West, North, and South Karur localities.</p>
      </div>
      ${renderLocalitiesGrid()}
    </div>
  </section>

  <!-- FAQs -->
  <section class="section" style="background: #ffffff; border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions: Service Center in Karur</h2>
        <p>Answers to common questions regarding multi-brand doorstep appliance service in Karur.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">How does your doorstep appliance service in Karur work?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">You contact our customer support with your appliance type, brand, and Karur location. We schedule a technician visit to your home. The technician inspects the machine, explains the problem and estimated cost, and performs the repair after your approval.</p>
        </div>
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">Do I need to transport my heavy appliance to a service workshop?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">No. All inspections and most common repairs for air conditioners, refrigerators, washing machines, and televisions are carried out directly at your home in Karur.</p>
        </div>
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">How many appliance brands do you service in Karur?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">We service 54 leading brands across air conditioners, refrigerators, washing machines, and televisions, including Samsung, LG, IFB, Whirlpool, Bosch, Voltas, Godrej, Haier, Sony, and Panasonic.</p>
        </div>
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">When will the technician visit after I book a service call?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">Visits are typically arranged on the same day or within 24 hours depending on technician slot availability in your area of Karur.</p>
        </div>
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">Are replacement spare parts tested before installation?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">Yes, our technicians use tested and verified compatible spare parts matching your appliance model specifications for dependable operation.</p>
        </div>
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">How is the repair cost determined?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">Cost is calculated based on the specific issue identified during physical testing, the cost of required replacement spares, and standard technician service charges. Everything is explained clearly before work begins.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Karur</h4>
          <p>
            Local doorstep repair and inspection service for home appliances across Karur, Tamil Nadu. Fast coordination, technician visit, and transparent guidance.
          </p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Main Road, Kagithapuramam & Pasupathipalayam, Karur, Tamil Nadu 639001</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span><a href="tel:+919442054321" class="sync-call" style="color: #cbd5e1;">+91 94420 54321</a></span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Repair Services</h4>
          <ul class="footer-links">
            <li><a href="../ac/ac-repair-service-in-karur.html">AC Repair & Service</a></li>
            <li><a href="../fridge/refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-karur.html">TV Repair & Service</a></li>
            <li><a href="index.html">All Service Center Brands</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Karur Coverage</h4>
          <ul class="footer-links">
            <li><a href="../index.html#localitiesSection">Kagithapuramam & Pasupathipalayam</a></li>
            <li><a href="../index.html#localitiesSection">Thanthonimalai & Town Center</a></li>
            <li><a href="../index.html#localitiesSection">Vengamedu & Inam Karur</a></li>
            <li><a href="../index.html#localitiesSection">Kovai Road & Sanapiratti</a></li>
            <li><a href="../index.html#localitiesSection">Velayuthampalayam, Pugalur & Aravakurichi</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Timings</h4>
          <p>
            Monday to Sunday<br>
            <strong>8:00 AM - 8:30 PM</strong>
          </p>
          <p style="font-size: 0.82rem; color: #94a3b8;">
            Doorstep visits are scheduled based on technician slot availability and customer location.
          </p>
        </div>
      </div>

      ${footerBrandDirectoryHtml}

      <div class="footer-disclaimer-box">
        <strong>Important Customer Notice & Disclaimer:</strong><br>
        Service availability, repair cost and parts requirement may vary depending on appliance model and the issue found during inspection. Brand names are used only for identification of compatible appliances and do not imply official brand authorization unless specifically stated.
      </div>

      <div class="footer-copy">
        <div>© 2026 servicecenterkarur.com — Local Home Appliance Repair in Karur.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Scroll-Based Floating CTA -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
    <span>WhatsApp</span>
  </a>
  <a href="tel:+919442054321" class="floating-right-call sync-call" title="Call local technician">
    <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    <span>Call Now</span>
  </a>
</div>

<!-- Mobile Fixed Bottom Bar -->
<div class="mobile-bottom-bar">
  <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20home%20appliance%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
    <span>WhatsApp</span>
  </a>
  <a href="tel:+919442054321" class="bottom-bar-btn bottom-bar-call sync-call">
    <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    <span>Call Now</span>
  </a>
</div>

<script src="../js/config.js"></script>
<script src="../js/main.js"></script>
</body>
</html>
`;

fs.writeFileSync(outPath, html, 'utf8');
console.log('Successfully generated updated /servicecenter/index.html');
