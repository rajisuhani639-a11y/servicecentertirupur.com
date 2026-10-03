// Comprehensive Generator Script for 24 Karur Refrigerator Brand Pages
// Enhanced with 100% Mobile Responsive Layout Engine
const fs = require('fs');
const path = require('path');

const b1 = require('./fridge_brands_1_to_6.js');
const b2 = require('./fridge_brands_7_to_12.js');
const b3 = require('./fridge_brands_13_to_18.js');
const b4 = require('./fridge_brands_19_to_24.js');
const allBrands = [...b1, ...b2, ...b3, ...b4];

const pricingData = require('./fridge_brand_pricing.js');
const { getBrandParts } = require('./fridge_brand_parts.js');
const { getBrandFaqs } = require('./fridge_brand_faqs.js');
const { localities } = require('./fridge_localities_helper.js');

const rootDir = path.resolve(__dirname, '..');
const fridgeDir = path.join(rootDir, 'fridge');

if (!fs.existsSync(fridgeDir)) {
  fs.mkdirSync(fridgeDir, { recursive: true });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Generate Locality Cards (Authentic Karur localities)
function generateLocalityCards(brandName) {
  return localities.map((loc, idx) => {
    let serviceTitle, descText;
    const mod = idx % 5;
    if (mod === 0) {
      serviceTitle = `${brandName} Refrigerator Repair in ${loc.title}`;
      descText = `Doorstep ${brandName} single door, double door, and inverter fridge inspection across ${loc.title}, Karur.`;
    } else if (mod === 1) {
      serviceTitle = `${brandName} Fridge Cooling Service in ${loc.title}`;
      descText = `Technician visit for cooling failure, ice buildup, and starter relay replacement for ${brandName} fridges in ${loc.title}.`;
    } else if (mod === 2) {
      serviceTitle = `${brandName} Fridge Repair Near Me in ${loc.title}`;
      descText = `Local technician doorstep diagnosis for ${brandName} compressor clicking, fan motor, and thermostat problems in ${loc.title}.`;
    } else if (mod === 3) {
      serviceTitle = `${brandName} Inverter Fridge Service in ${loc.title}`;
      descText = `Doorstep check for ${brandName} inverter PCB, temperature sensors, and defrost drainage around ${loc.title}, Karur.`;
    } else {
      serviceTitle = `${brandName} Refrigerator Technician in ${loc.title}`;
      descText = `Reliable home visits for ${brandName} sealed line gas recharging, door gasket fitting, and water leak fixes in ${loc.title}.`;
    }

    return `        <div class="locality-card">
          <div class="locality-name">📍 ${escapeHtml(loc.title)}</div>
          <div class="locality-service">${escapeHtml(serviceTitle)}</div>
          <p class="locality-text">${escapeHtml(descText)}</p>
        </div>`;
  }).join('\n');
}

// Generate Refrigerator Brand Navigation Grid for all 24 brands
function generateBrandNavGrid(currentSlug) {
  return allBrands.map(b => {
    const isCurrent = b.slug === currentSlug;
    if (isCurrent) {
      return `        <div class="service-card" style="border: 2px solid var(--accent-blue); background: rgba(30, 58, 138, 0.04); padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--accent-blue); margin-bottom: 0.35rem;">${escapeHtml(b.name)} Fridge Repair</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Current Service Page</p>
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-color);">Karur Doorstep Service ✓</span>
        </div>`;
    }
    return `        <a href="${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${escapeHtml(b.name)} Fridge Repair</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${escapeHtml(b.name)} refrigerator repair across Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue); margin-top: auto;">View Service →</span>
        </a>`;
  }).join('\n');
}

// Generate Brand Page HTML
function generateBrandPageHtml(brand) {
  const currentSlug = brand.slug;
  const canonicalUrl = `https://servicecenterkarur.com/fridge/${currentSlug}`;
  const whatsappUrl = `https://wa.me/919442054321?text=Hello%2C%20I%20need%20${encodeURIComponent(brand.name)}%20refrigerator%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details.`;

  const pricing = pricingData[brand.name] || pricingData['Samsung'];
  const parts = getBrandParts(brand.name);
  const faqs = getBrandFaqs(brand.name);

  // Refrigerator Types HTML (Responsive)
  const typesHtml = brand.types.map(t => {
    return `
        <div class="type-card">
          <h3>${escapeHtml(t.name)}</h3>
          <span style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.5rem;">${escapeHtml(t.badge)}</span>
          <p>${escapeHtml(t.desc)}</p>
          ${t.searchIntent ? `<div style="background: rgba(30, 58, 138, 0.05); border-left: 3px solid var(--accent-blue); padding: 0.65rem 0.85rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.88rem; color: var(--primary-color); line-height: 1.5;">${t.searchIntent}</div>` : ''}
          <p style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">Common repair problems:</p>
          <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(t.problems)}</p>
          <p style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">What technician checks:</p>
          <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(t.checks)}</p>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.45;">
            <strong>Parts involved:</strong> ${escapeHtml(t.parts)}
          </p>
          <p style="font-size: 0.84rem; color: var(--accent-blue); font-weight: 600; margin-top: 0.35rem;">
            When service is needed: ${escapeHtml(t.whenNeeded)}
          </p>
        </div>`;
  }).join('\n');

  // Common Problems HTML (Responsive)
  const problemsHtml = brand.problems.map(p => {
    return `
        <div class="service-card" style="padding: 1.5rem;">
          <span style="display: inline-block; font-size: 0.78rem; font-weight: 700; color: var(--accent-blue); background: rgba(30, 58, 138, 0.08); padding: 0.2rem 0.6rem; border-radius: 4px; margin-bottom: 0.5rem; text-transform: uppercase;">${escapeHtml(p.badge)}</span>
          <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.5rem;">${escapeHtml(p.title)}</h3>
          <p style="font-size: 0.92rem; color: var(--text-color); margin-bottom: 1rem; line-height: 1.55;">${escapeHtml(p.desc)}</p>
          <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 6px; padding: 0.75rem; font-size: 0.86rem; line-height: 1.5;">
            <div style="margin-bottom: 0.35rem;"><strong>${escapeHtml(p.label1)}:</strong> ${escapeHtml(p.val1)}</div>
            <div style="margin-bottom: 0.35rem;"><strong>${escapeHtml(p.label2)}:</strong> ${escapeHtml(p.val2)}</div>
            <div style="color: var(--primary-color); font-weight: 600;"><strong>${escapeHtml(p.label3)}:</strong> ${escapeHtml(p.val3)}</div>
          </div>
        </div>`;
  }).join('\n');

  // Parts List HTML (Simple Indian English)
  const partsHtml = parts.map(pt => {
    return `
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${escapeHtml(pt.name)}</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.55; margin-bottom: 0;">${escapeHtml(pt.desc)}</p>
        </div>`;
  }).join('\n');

  // Pricing Table HTML
  const pricingTableRows = pricing.table.map(row => {
    return `
              <tr>
                <td style="font-weight: 600; color: var(--primary-color);">${escapeHtml(row.part)}</td>
                <td style="font-weight: 700; color: var(--accent-blue);">${escapeHtml(row.cost)}</td>
                <td>${escapeHtml(row.purpose)}</td>
                <td style="font-size: 0.88rem; color: var(--text-color);">${escapeHtml(row.condition)}</td>
              </tr>`;
  }).join('\n');

  // Customer Experiences HTML (Tanglish 80-90%)
  const experiencesHtml = brand.customerExperiences.map(exp => {
    return `
        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${escapeHtml(exp.location)}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${escapeHtml(exp.title)}</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${escapeHtml(exp.tanglishText)}</p>
        </div>`;
  }).join('\n');

  // Why Choose Us HTML
  const whyChooseHtml = brand.whyChoose.map((pt, idx) => {
    return `
          <div class="why-item" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; display: flex; gap: 1rem; align-items: flex-start;">
            <div class="why-icon" style="background: var(--primary-color); color: #fff; width: 36px; height: 36px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; font-size: 0.95rem;">0${idx + 1}</div>
            <div>
              <h4 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.3rem;">Reliable Local Service</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0;">${escapeHtml(pt)}</p>
            </div>
          </div>`;
  }).join('\n');

  // FAQs HTML
  const faqsHtml = faqs.map((f, idx) => {
    return `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span>${escapeHtml(f.q)}</span>
            <span class="faq-icon">${idx === 0 ? '−' : '+'}</span>
          </button>
          <div class="faq-answer" style="${idx === 0 ? 'display: block;' : ''}">
            <p>${escapeHtml(f.a)}</p>
          </div>
        </div>`;
  }).join('\n');

  // Locality cards
  const localityCardsHtml = generateLocalityCards(brand.name);

  // Brand navigation grid
  const brandNavGridHtml = generateBrandNavGrid(currentSlug);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(brand.metaTitle)}</title>
  <meta name="description" content="${escapeHtml(brand.metaDesc)}">
  <link rel="canonical" href="${canonicalUrl}">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${escapeHtml(brand.metaTitle)}">
  <meta property="og:description" content="${escapeHtml(brand.metaDesc)}">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${escapeHtml(brand.name)} Refrigerator Repair & Service in Karur",
    "serviceType": "Refrigerator Repair Service",
    "url": "${canonicalUrl}",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Service Center Karur",
      "telephone": "+919442054321",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jawahar Bazaar, Kovai Road, Near Bus Stand",
        "addressLocality": "Karur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "639001",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Karur"
    },
    "description": "${escapeHtml(brand.metaDesc)}"
  }
  </script>
</head>
<body>

  <!-- Top Information Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <span>📍 Doorstep Refrigerator Repair in Karur, Tamil Nadu</span>
      <span>⏰ Mon–Sun: 8:00 AM – 8:00 PM | Fast Technician Visit</span>
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
        <a href="../ac/ac-repair-service-in-karur.html">AC Repair</a>
        <a href="refrigerator-repair-service-in-karur.html" class="active">Fridge Repair</a>
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
        <li><a href="refrigerator-repair-service-in-karur.html">Fridge Repair</a></li>
        <li aria-current="page">${escapeHtml(brand.name)} Refrigerator Repair</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section hero-brand">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Doorstep ${escapeHtml(brand.name)} Refrigerator Service in Karur</span>
        </div>
        <h1 class="brand-h1">${escapeHtml(brand.h1)}</h1>
        <p class="hero-copy">
          ${escapeHtml(brand.searchIntentIntro)}
        </p>

        <!-- Tanglish Callout Box -->
        <div class="tanglish-intro-box">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2z"/></svg>
          <div>
            <strong>Karur Customer Support:</strong><br>
            ${escapeHtml(brand.tanglishIntroBox)}
          </div>
        </div>

        <div class="hero-cta-group">
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call: +91 94420 54321</span>
          </a>
          <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Quick Request Card -->
      <div class="hero-card-box">
        <h2>Schedule ${escapeHtml(brand.name)} Inspection</h2>
        <p>Doorstep checking across Karur for ${escapeHtml(brand.name)} refrigerators.</p>
        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin: 1.25rem 0;">
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Doorstep inspection at your convenient slot
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Clear estimate before replacing components
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Tested replacement parts for ${escapeHtml(brand.name)}
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-color);">
            <span style="color: var(--accent-blue); font-size: 1.1rem; font-weight: bold;">✓</span> Complete cooling and cut-off testing
          </div>
        </div>
        <a href="tel:+919442054321" class="btn-primary-call sync-call" style="width: 100%; justify-content: center;">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call: +91 94420 54321</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Why Refrigerator Needs Repair Section -->
  <section class="section" style="background: #f8fafc;">
    <div class="container">
      <div class="section-header">
        <h2>Looking for ${escapeHtml(brand.name)} Refrigerator Repair in Karur?</h2>
        <p>Reliable troubleshooting, component testing, and doorstep repair guidance for ${escapeHtml(brand.name)} refrigerators.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04); font-size: 0.96rem; line-height: 1.7; color: var(--text-color); box-sizing: border-box;">
        <p style="margin-bottom: 1rem;">
          ${escapeHtml(brand.whyRepair)}
        </p>
        <p style="margin-bottom: 0;">
          ${escapeHtml(brand.localContent)}
        </p>
      </div>
    </div>
  </section>

  <!-- Refrigerator Types We Repair -->
  <section class="section" id="fridgeTypesSection">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} Refrigerator Types We Repair</h2>
        <p>Doorstep inspection and component replacement across ${escapeHtml(brand.name)} refrigerator configurations in Karur.</p>
      </div>

      <div class="fridge-types-grid">
        ${typesHtml}
      </div>
    </div>
  </section>

  <!-- Common Problems Repaired -->
  <section class="section section-muted">
    <div class="container">
      <div class="section-header">
        <h2>Common ${escapeHtml(brand.name)} Refrigerator Problems We Check</h2>
        <p>Systematic diagnosis and doorstep repair for frequent cooling and electrical complaints in Karur homes.</p>
      </div>

      <div class="fridge-problems-grid">
        ${problemsHtml}
      </div>
    </div>
  </section>

  <!-- Parts Section (Simple Indian English) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} Refrigerator Parts We Check or Replace</h2>
        <p>Simple explanations of essential components tested during our doorstep service visits in Karur.</p>
      </div>

      <div class="fridge-parts-grid">
        ${partsHtml}
      </div>
    </div>
  </section>

  <!-- Parts Price & Repair Cost Section -->
  <section class="section section-muted">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} Refrigerator Parts Price in Karur</h2>
        <p>Indicative market price ranges for common replacement components in Karur.</p>
      </div>

      <div style="background: rgba(30, 58, 138, 0.05); border-left: 4px solid var(--accent-blue); padding: 1rem 1.25rem; border-radius: 6px; margin-bottom: 1.5rem; font-size: 0.94rem; color: var(--primary-color); line-height: 1.6; box-sizing: border-box;">
        <strong>Price Guidance Note:</strong><br>
        ${escapeHtml(pricing.introTanglish)}
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.85rem 1rem;">Part</th>
              <th style="padding: 0.85rem 1rem;">Approximate Cost</th>
              <th style="padding: 0.85rem 1rem;">Purpose</th>
              <th style="padding: 0.85rem 1rem;">When It May Need Checking/Replacement</th>
            </tr>
          </thead>
          <tbody>
            ${pricingTableRows}
          </tbody>
        </table>
      </div>

      <div style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04); box-sizing: border-box;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">How Much Does ${escapeHtml(brand.name)} Refrigerator Repair Cost in Karur?</h3>
        <p style="font-size: 0.94rem; line-height: 1.65; color: var(--text-color); margin-bottom: 0.75rem;">
          ${escapeHtml(pricing.costFactorsText)}
        </p>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0;">
          All final repair charges are quoted after physical multimeter inspection at your doorstep. We maintain complete transparency and proceed only after your approval.
        </p>
      </div>
    </div>
  </section>

  <!-- Repair Process -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>How ${escapeHtml(brand.name)} Refrigerator Repair Works in Karur</h2>
        <p>Simple 6-step service process for doorstep appliance repair across Karur.</p>
      </div>

      <div class="fridge-process-grid">
        <div class="process-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.35rem;">Step 1</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Customer Calls or Messages</h4>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.5; margin: 0;">Share your ${escapeHtml(brand.name)} fridge model, problem details, and Karur address via phone or WhatsApp.</p>
        </div>

        <div class="process-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.35rem;">Step 2</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Technician Visits Location</h4>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.5; margin: 0;">Our local technician arrives at your Karur residence with testing multimeters and replacement spares.</p>
        </div>

        <div class="process-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.35rem;">Step 3</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Refrigerator Is Checked</h4>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.5; margin: 0;">The technician systematically inspects compressor starter, defrost sensors, blower fan, and gas pressure.</p>
        </div>

        <div class="process-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.35rem;">Step 4</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Problem Is Explained</h4>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.5; margin: 0;">The root cause, required spare parts, and estimated repair cost are explained clearly in simple language.</p>
        </div>

        <div class="process-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.35rem;">Step 5</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Repair Done After Approval</h4>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.5; margin: 0;">Once you approve the estimate, faulty components are replaced or repaired using compatible spares.</p>
        </div>

        <div class="process-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 0.35rem;">Step 6</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Refrigerator Is Tested</h4>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.5; margin: 0;">Cooling performance, air circulation, and thermostat cut-off are verified before completing the service call.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- When to Call Technician -->
  <section class="section section-muted">
    <div class="container">
      <div class="section-header">
        <h2>When Should You Call for ${escapeHtml(brand.name)} Refrigerator Repair?</h2>
        <p>Look out for these warning signs to avoid food spoilage and costly compressor replacements.</p>
      </div>
      <div style="max-width: 860px; margin: 0 auto; background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04); font-size: 0.95rem; line-height: 1.7; color: var(--text-color); box-sizing: border-box;">
        <ul style="list-style: none; padding-left: 0; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.6rem;">❄️ <strong>Cooling becoming low:</strong> Fresh food or milk spoiling quickly on lower shelves.</li>
          <li style="margin-bottom: 0.6rem;">🧊 <strong>Freezer not freezing:</strong> Ice cubes not setting or ice cream melting inside the freezer.</li>
          <li style="margin-bottom: 0.6rem;">💧 <strong>Water leakage:</strong> Water pooling beneath the vegetable crisper or leaking on the kitchen floor.</li>
          <li style="margin-bottom: 0.6rem;">🧱 <strong>Excess frost buildup:</strong> Dense ice accumulating on the freezer back wall, choking air vents.</li>
          <li style="margin-bottom: 0.6rem;">🔊 <strong>Compressor noise or clicking:</strong> Repeated clicking sounds every 2 to 3 minutes without cooling.</li>
          <li style="margin-bottom: 0.6rem;">🚪 <strong>Door not sealing:</strong> Moisture droplets forming around door frames due to weak magnetic gaskets.</li>
          <li style="margin-bottom: 0.6rem;">⚠️ <strong>Repeated tripping or blinking:</strong> Fridge cutting power or digital display flashing error codes.</li>
          <li style="margin-bottom: 0;">⚡ <strong>Unusual electrical smell:</strong> If you smell burning insulation, switch off the appliance immediately, unplug the cable, and call for inspection.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Customer Experience Section (80-90% Tanglish) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Recent ${escapeHtml(brand.name)} Refrigerator Repair Experiences in Karur</h2>
        <p>Illustrative examples of common refrigerator repair situations across Karur households.</p>
      </div>

      <div class="experiences-grid">
        ${experiencesHtml}
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section section-muted">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose Us for ${escapeHtml(brand.name)} Refrigerator Repair in Karur</h2>
        <p>Trusted doorstep appliance repair service with local technicians and transparent pricing.</p>
      </div>

      <div class="fridge-why-grid">
        ${whyChooseHtml}
      </div>
    </div>
  </section>

  <!-- Karur Local SEO Grid -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} Refrigerator Repair Near Me in Karur</h2>
        <p>Doorstep technician visits available across residential colonies and town centers in Karur.</p>
      </div>

      <div class="localities-grid-expanded">
        ${localityCardsHtml}
      </div>
    </div>
  </section>

  <!-- FAQ Section (Unique with Tanglish) -->
  <section class="section section-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${escapeHtml(brand.name)} Refrigerator Repair in Karur</h2>
        <p>Clear answers to common questions about ${escapeHtml(brand.name)} fridge repairs and service visits.</p>
      </div>

      <div class="faq-container">
        ${faqsHtml}
      </div>
    </div>
  </section>

  <!-- Refrigerator Brands We Service Grid -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Refrigerator Brands We Repair in Karur</h2>
        <p>Doorstep component checking and repair support across all 24 approved refrigerator brands:</p>
      </div>

      <div class="fridge-brand-grid">
        ${brandNavGridHtml}
      </div>
    </div>
  </section>

  <!-- Other Services Links -->
  <section class="section section-muted">
    <div class="container">
      <div class="section-header">
        <h2>Other Home Appliance Repair Services in Karur</h2>
        <p>Complete doorstep repair solutions across all essential home appliances in Karur.</p>
      </div>

      <div class="fridge-other-services-grid">
        <a href="../ac/ac-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.4rem;">AC Repair Service</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); margin-bottom: 0.75rem;">Split & window AC service, gas charging, coil leak repair, and PCB fixes in Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue);">View AC Service →</span>
        </a>

        <a href="refrigerator-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.4rem;">Main Fridge Repair</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); margin-bottom: 0.75rem;">Single door, double door, inverter & side-by-side refrigerator repair across Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue);">View All Fridge Services →</span>
        </a>

        <a href="../washing-machine/washing-machine-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.4rem;">Washing Machine Repair</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); margin-bottom: 0.75rem;">Front load, top load, semi-automatic motor, drum, inlet valve, and PCB repair in Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue);">View Washing Machine Service →</span>
        </a>

        <a href="../tv/tv-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.4rem;">TV Repair Service</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); margin-bottom: 0.75rem;">LED, Smart TV, 4K display, backlight replacement, power board, and audio repair in Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue);">View TV Service →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Banner Section -->
  <section class="cta-banner-section">
    <div class="container cta-banner-inner">
      <h2>Need ${escapeHtml(brand.name)} Refrigerator Repair in Karur?</h2>
      <p>Contact our local Karur technician coordination desk. On-site inspection, clear upfront estimate, and verified repair service across Karur.</p>
      <div class="cta-banner-actions">
        <a href="tel:+919442054321" class="btn-primary-call sync-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call: +91 94420 54321</span>
        </a>
        <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
          <span>Chat on WhatsApp</span>
        </a>
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
            <li><a href="refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-karur.html">TV Repair & Service</a></li>
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

  <!-- Scroll-Based Floating CTA (WhatsApp Left, Call Right) -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="${whatsappUrl}" class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar (Rule 1: LEFT WhatsApp, RIGHT Call Now) -->
  <div class="mobile-bottom-bar">
    <a href="${whatsappUrl}" class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
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
</html>`;
}

// Write all 24 Brand Pages
console.log('=== GENERATING 24 REFRIGERATOR BRAND PAGES (RESPONSIVE ENGINE) ===');
allBrands.forEach(brand => {
  const filePath = path.join(fridgeDir, brand.slug);
  const html = generateBrandPageHtml(brand);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${brand.slug} (${html.length} bytes)`);
});

// Update Main Refrigerator Page: /fridge/refrigerator-repair-service-in-karur.html
console.log('\n=== UPDATING MAIN REFRIGERATOR PAGE ===');
const mainFridgePath = path.join(fridgeDir, 'refrigerator-repair-service-in-karur.html');
if (fs.existsSync(mainFridgePath)) {
  let mainHtml = fs.readFileSync(mainFridgePath, 'utf8');

  // Build the 24 brand cards grid linking to each brand page using .fridge-brand-grid
  const brandCardsHtml = allBrands.map(b => {
    return `        <a href="${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${escapeHtml(b.name)} Fridge Repair</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${escapeHtml(b.name)} refrigerator repair in Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue); margin-top: auto;">View Service →</span>
        </a>`;
  }).join('\n');

  const newBrandSection = `<section class="section" id="refrigeratorBrandsSection">
    <div class="container">
      <div class="section-header">
        <h2>Refrigerator Brands We Repair in Karur</h2>
        <p>Doorstep troubleshooting, component testing, and repair support for all 24 approved refrigerator brands across Karur homes:</p>
      </div>

      <div class="fridge-brand-grid">
${brandCardsHtml}
      </div>
    </div>
  </section>`;

  // Replace existing brand section
  const brandSectionRegex = /<section class="section"[^>]*>[\s\S]*?<h2>Refrigerator Brands We Repair in Karur<\/h2>[\s\S]*?<\/section>/;
  if (brandSectionRegex.test(mainHtml)) {
    mainHtml = mainHtml.replace(brandSectionRegex, newBrandSection);
    fs.writeFileSync(mainFridgePath, mainHtml, 'utf8');
    console.log('✓ Successfully updated main refrigerator page with responsive brand grid.');
  } else {
    console.warn('Could not locate existing brand section in main fridge page.');
  }
} else {
  console.error('Main fridge page not found at:', mainFridgePath);
}

console.log('\n=== REGENERATION COMPLETE ===');
