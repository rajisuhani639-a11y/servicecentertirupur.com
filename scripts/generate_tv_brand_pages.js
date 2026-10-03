// Comprehensive Generator Script for Karur TV Brand Pages in /tv/ folder
const fs = require('fs');
const path = require('path');

const brands1to10 = require('./tv_brands_1_to_10.js');
const brands11to20 = require('./tv_brands_11_to_20.js');
const brands21to31 = require('./tv_brands_21_to_31.js');
const allBrands = [...brands1to10, ...brands11to20, ...brands21to31];
const localities = require('./karur_localities.json');

// Modular engines with 100% unique brand-specific content
const brandPricingData = require('./tv_brand_pricing.js');
const { getBrandParts } = require('./tv_brand_parts.js');
const { getBrandWhyChoose } = require('./tv_brand_why_choose.js');
const { getBrandProcess } = require('./tv_brand_process.js');
const { getBrandFaqs } = require('./tv_brand_faqs.js');

const rootDir = path.resolve(__dirname, '..');
const tvDir = path.join(rootDir, 'tv');

if (!fs.existsSync(tvDir)) {
  fs.mkdirSync(tvDir, { recursive: true });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Generate Locality Cards (60 authentic Karur localities)
function generateLocalityCards(brandName) {
  return localities.map((loc, idx) => {
    let serviceTitle, descText;
    const mod = idx % 5;
    if (mod === 0) {
      serviceTitle = `${brandName} TV Repair Service in ${loc.title}`;
      descText = `Doorstep ${brandName} LED and Smart TV diagnosis across ${loc.title}, Karur.`;
    } else if (mod === 1) {
      serviceTitle = `${brandName} LED TV Repair in ${loc.title}, Karur`;
      descText = `Backlight replacement and power board repair support for ${brandName} televisions in ${loc.title}.`;
    } else if (mod === 2) {
      serviceTitle = `${brandName} Smart TV Service in ${loc.title}`;
      descText = `Technician inspection for ${brandName} Smart TV boot loop, sound, and display issues in ${loc.title}.`;
    } else if (mod === 3) {
      serviceTitle = `${brandName} TV Repair Near Me in ${loc.title}`;
      descText = `Reliable home visits for ${brandName} TV power supply and motherboard repair around ${loc.title}, Karur.`;
    } else {
      serviceTitle = `${brandName} TV Technician in ${loc.title}, Karur`;
      descText = `Doorstep checking for ${brandName} 4K, LED, and Smart TV audio and screen problems in ${loc.title}.`;
    }

    return `        <div class="locality-card">
          <div class="locality-name">📍 ${escapeHtml(loc.title)}</div>
          <div class="locality-service">${escapeHtml(serviceTitle)}</div>
          <p class="locality-text">${escapeHtml(descText)}</p>
        </div>`;
  }).join('\n');
}

// Generate TV Brand Navigation Grid for all 31 brands (relative to /tv/)
function generateBrandNavGrid(currentSlug) {
  return allBrands.map(b => {
    const isCurrent = b.slug === currentSlug;
    if (isCurrent) {
      return `        <div class="service-card" style="border: 2px solid var(--accent-blue); background: rgba(30, 58, 138, 0.04); padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--accent-blue); margin-bottom: 0.35rem;">${escapeHtml(b.name)} TV Repair</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Current Service Page</p>
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-color);">Karur Doorstep Service ✓</span>
        </div>`;
    }
    return `        <a href="${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${escapeHtml(b.name)} TV Repair</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${escapeHtml(b.name)} LED & Smart TV repair across Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue); margin-top: auto;">View Service →</span>
        </a>`;
  }).join('\n');
}

// Generate Brand Page HTML (placed in /tv/)
function generateBrandPageHtml(brand) {
  const currentSlug = brand.slug;
  const canonicalUrl = `https://servicecenterkarur.com/tv/${currentSlug}`;
  const whatsappUrl = `https://wa.me/919442054321?text=Hello%2C%20I%20need%20${encodeURIComponent(brand.name)}%20TV%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details.`;
  
  const pricing = brandPricingData[brand.name] || brandPricingData['Samsung'];
  const parts = getBrandParts(brand.name);
  const whyChoosePoints = getBrandWhyChoose(brand.name);
  const processSteps = getBrandProcess(brand.name);
  const faqs = getBrandFaqs(brand.name, pricing);

  // TV Types HTML - Rich, search-intent driven, brand specific
  const tvTypesList = brand.tvTypes || brand.types || [];
  const tvTypesHtml = tvTypesList.map(t => {
    const title = t.title || t.name || '';
    return `
        <div class="type-card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(t.desc)}</p>
          ${t.searchIntent ? `<div style="background: rgba(30, 58, 138, 0.05); border-left: 3px solid var(--accent-blue); padding: 0.65rem 0.85rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.88rem; color: var(--primary-color); line-height: 1.5;">${t.searchIntent}</div>` : ''}
          <p style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">Common repair problems:</p>
          <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(t.problems)}</p>
          <p style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">What technician checks:</p>
          <p style="font-size: 0.88rem; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(t.checks)}</p>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.45;">
            <strong>Parts involved:</strong> ${escapeHtml(t.parts)}
          </p>
          ${t.whenNeeded ? `<p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.45;"><strong>When repair needed:</strong> ${escapeHtml(t.whenNeeded)}</p>` : ''}
        </div>`;
  }).join('\n');

  // Problems HTML - Authentically different wording & dynamic labels
  const problemsHtml = (brand.problems || []).map((p, idx) => `
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-badge">${escapeHtml(p.badge || 'Verified Issue')}</span>
            <span class="problem-number">Fault #${idx + 1}</span>
          </div>
          <h3>${escapeHtml(p.title)}</h3>
          <p><strong>${escapeHtml(p.label1 || 'Observed Fault')}:</strong> ${escapeHtml(p.val1 || p.customer || '')}</p>
          <p><strong>${escapeHtml(p.label2 || 'Likely Cause')}:</strong> ${escapeHtml(p.val2 || p.reasons || '')}</p>
          <div class="problem-solution">
            <strong>${escapeHtml(p.label3 || 'What Technician Checks')}:</strong> ${escapeHtml(p.val3 || p.checks || '')}
          </div>
        </div>`).join('\n');

  // Expanded Parts HTML - 10 brand-tailored components
  const partsHtml = parts.map(p => `
        <div class="part-card">
          <h3><span>${escapeHtml(p.name)}</span> <span class="part-badge">${escapeHtml(p.badge)}</span></h3>
          <p>${escapeHtml(p.desc)}</p>
          <p style="font-size: 0.84rem; color: var(--primary-color); font-weight: 600;"><strong>Fault symptoms:</strong> ${escapeHtml(p.symptoms)}</p>
        </div>`).join('\n');

  // Why Choose Us HTML - 6 brand-specific points
  const whyChooseHtml = whyChoosePoints.map(item => `
        <div class="why-card">
          <div class="why-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="why-card-content">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.desc)}</p>
          </div>
        </div>`).join('\n');

  // Process HTML - 6 brand-specific steps
  const processHtml = processSteps.map(step => `
        <div class="process-step">
          <div class="step-num">${step.num}</div>
          <div class="step-content">
            <h4>${escapeHtml(step.title)}</h4>
            <p>${escapeHtml(step.desc)}</p>
          </div>
        </div>`).join('\n');

  // Customer Experiences HTML - Authentic Karur localities
  const experiencesList = brand.customerExperiences || brand.experiences || [];
  const experiencesHtml = experiencesList.map(exp => {
    if (exp.title && exp.text) {
      return `
        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${escapeHtml(exp.locality)}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${escapeHtml(exp.title)}</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">${escapeHtml(exp.text)}</p>
        </div>`;
    }
    return `
        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${escapeHtml(exp.locality)}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${escapeHtml(exp.issue)}</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color); margin-bottom: 0.5rem;">${escapeHtml(exp.resolution)}</p>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">⏱️ ${escapeHtml(exp.time || 'Completed on-site')}</span>
        </div>`;
  }).join('\n');

  // FAQs HTML - 12 brand-specific questions and answers
  const faqsHtml = faqs.map(faq => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>${escapeHtml(faq.q)}</span>
            <svg class="faq-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
          </button>
          <div class="faq-answer">
            <p>${escapeHtml(faq.a)}</p>
          </div>
        </div>`).join('\n');

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
    "name": "${escapeHtml(brand.name)} TV Repair & Service in Karur",
    "serviceType": "Television Repair Service",
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
    "description": "Doorstep ${escapeHtml(brand.name)} LED, 4K, and Smart TV repair and inspection service across Karur, Tamil Nadu."
  }
  </script>
</head>
<body>

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

      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../ac-repair-service-in-karur.html">AC Repair</a>
        <a href="../refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="../tv-repair-service-in-karur.html" class="active">TV Repair</a>
        <a href="../microwave-repair-service-in-karur.html">Microwave</a>
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
        <li><a href="../tv-repair-service-in-karur.html">TV Repair Service in Karur</a></li>
        <li aria-current="page">${escapeHtml(brand.name)} TV Repair</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Karur Doorstep TV Service</span>
        </div>

        <!-- Single H1 Rule -->
        <h1>${escapeHtml(brand.h1)}</h1>

        <p class="hero-copy">
          ${escapeHtml(brand.introText && brand.introText[0] ? brand.introText[0] : `Need ${brand.name} TV repair in Karur? Get your television checked by a local technician.`)}
        </p>

        <div class="tanglish-intro-box">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2z"/></svg>
          <div>
            <strong>${escapeHtml(brand.introTamil || `${brand.name} TV problem irukka? Sound varudhu picture varala?`)}</strong><br>
            ${brand.introTanglish || `${brand.name} TV check panna Karur local technician inspection book pannalaam.`}
          </div>
        </div>

        <div class="hero-cta-group">
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call Now</span>
          </a>
          <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Quick Request Card -->
      <div class="hero-card-box">
        <h2>Schedule ${escapeHtml(brand.name)} TV Diagnosis</h2>
        <p>Doorstep check for ${escapeHtml(brand.name)} LED & Smart TVs in Karur.</p>

        <form class="quick-booking-form">
          <input type="hidden" name="appliance" value="${escapeHtml(brand.name)} TV Repair & Service">
          
          <div class="form-group">
            <label for="tvType">Screen Type & Size</label>
            <input type="text" id="tvType" name="screen_info" class="form-control" placeholder="e.g. 32-inch LED, 43-inch Smart TV, 55-inch 4K">
          </div>

          <div class="form-group">
            <label for="tvLocality">Your Locality in Karur</label>
            <select id="tvLocality" name="locality" class="form-control" required>
              <option value="Karur Town">Karur Town / Bus Stand</option>
              <option value="Kagithapuramam">Kagithapuramam</option>
              <option value="Pasupathipalayam">Pasupathipalayam</option>
              <option value="Thanthonimalai">Thanthonimalai</option>
              <option value="Vengamedu">Vengamedu</option>
              <option value="Inam Karur">Inam Karur</option>
              <option value="Sanapiratti">Sanapiratti</option>
              <option value="Vennaimalai">Vennaimalai</option>
              <option value="Kovai Road">Kovai Road</option>
              <option value="Velayuthampalayam">Velayuthampalayam</option>
              <option value="Pugalur">Pugalur</option>
              <option value="Aravakurichi">Aravakurichi</option>
              <option value="Mayanur">Mayanur</option>
              <option value="Puliyur">Puliyur</option>
            </select>
          </div>

          <div class="form-group">
            <label for="tvPhone">Mobile Phone Number</label>
            <input type="tel" id="tvPhone" name="phone" class="form-control" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
          </div>

          <div class="form-group">
            <label for="tvIssue">Observed Problem</label>
            <input type="text" id="tvIssue" name="issue" class="form-control" placeholder="e.g. Sound coming but no picture, not turning on">
          </div>

          <button type="submit" class="btn-form-submit">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            Send ${escapeHtml(brand.name)} TV Enquiry
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Opening Keyword / Introduction Section -->
  <section class="section">
    <div class="container">
      <div class="keyword-opening-box">
        <div style="background: rgba(30, 58, 138, 0.06); border-left: 4px solid var(--accent-blue); padding: 0.85rem 1.25rem; border-radius: 4px; margin-bottom: 1.25rem;">
          <strong style="color: var(--primary-color); font-size: 1.05rem;">${escapeHtml(brand.introTamil || `${brand.name} TV display problem irukka?`)}</strong>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-muted); font-size: 0.95rem;">
            ${brand.introTanglish || `${brand.name} TV repair in Karur thedureengalana, local technician inspection arrange pannalaam.`}
          </p>
        </div>

        <h2>${escapeHtml(brand.introHeading)}</h2>
        ${(brand.introText || []).map(p => `<p>${p}</p>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- TV Types We Repair Section -->
  <section class="section section-bg-muted" id="tvTypesSection">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} TV Types We Repair in Karur</h2>
        <p>Doorstep inspection and repair support across ${escapeHtml(brand.name)} television types and display formats in Karur.</p>
      </div>

      <div class="types-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
        ${tvTypesHtml}
      </div>
    </div>
  </section>

  <!-- TV Models / Series Section -->
  <section class="section">
    <div class="container">
      <div style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.75rem;">
        <h2 style="font-size: 1.35rem; color: var(--primary-color); margin-bottom: 0.75rem;">
          ${escapeHtml(brand.name)} TV Series & Models We Service in Karur
        </h2>
        <p style="font-size: 0.95rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
          ${escapeHtml(brand.modelsSeries || `${brand.name} televisions come in various screen sizes and model series across Karur.`)}
        </p>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0; background: #f8fafc; padding: 0.75rem 1rem; border-radius: 4px; border-left: 3px solid var(--accent-blue);">
          <strong>Note on TV models:</strong> Different models can use different display panels, boards and parts. Our technician checks the specific model number on the rear cabinet label and tests the exact circuits before recommending repair or replacement.
        </p>
      </div>
    </div>
  </section>

  <!-- Common Problems Section -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Common ${escapeHtml(brand.name)} TV Problems Repaired in Karur</h2>
        <p>Frequent issues faced by ${escapeHtml(brand.name)} television owners in Karur and how our local technician inspects them.</p>
      </div>

      <div class="problems-grid">
        ${problemsHtml}
      </div>
    </div>
  </section>

  <!-- Expanded TV Parts Section -->
  <section class="section" id="tvPartsSection">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} TV Repair Parts & Components</h2>
        <p>Essential internal components tested and serviced for ${escapeHtml(brand.name)} televisions in Karur.</p>
      </div>

      <p style="text-align: center; max-width: 800px; margin: 0 auto 1.5rem auto; font-size: 0.95rem; color: var(--text-muted);">
        Every television uses distinct circuit boards and display parts. Here is an overview of key ${escapeHtml(brand.name)} TV parts, their function, and the problems they cause when faulty:
      </p>

      <div class="parts-expanded-grid">
        ${partsHtml}
      </div>
    </div>
  </section>

  <!-- Researched Pricing Section -->
  <section class="section section-bg-muted" id="pricingSection">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} TV Repair Cost in Karur</h2>
        <p>
          Estimated service charges and typical part pricing for ${escapeHtml(brand.name)} television repairs in Karur:
        </p>
      </div>

      <div class="content-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Repair / Service Category</th>
              <th>Estimated Price / Range</th>
              <th>Service Details & Symptoms Checked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">${escapeHtml(brand.name)} TV Doorstep Inspection</td>
              <td class="price-col">${escapeHtml(pricing.inspection)}</td>
              <td>Complete on-site electronic testing of power board, backlight strips, logic lines, and audio output in Karur.</td>
            </tr>
            <tr>
              <td class="highlight-col">TV Wall Mount Installation / Unmounting</td>
              <td class="price-col">₹350 – ₹850</td>
              <td>Secure wall bracket mounting, spirit level balance check, cable dressing, and set-top box connection (varies by screen size 32" to 65").</td>
            </tr>
            <tr>
              <td class="highlight-col">Power Supply Board (SMPS) Component Repair</td>
              <td class="price-col">${escapeHtml(pricing.powerBoardRepair)}</td>
              <td>Diagnosis of blown fuses, voltage surge damage, burnt diodes, or SMPS power board component-level repair.</td>
            </tr>
            <tr>
              <td class="highlight-col">Power Supply Board (SMPS) Replacement</td>
              <td class="price-col">${escapeHtml(pricing.powerBoardReplacement)}</td>
              <td>Full board replacement when the original power board is burnt beyond component repair.</td>
            </tr>
            <tr>
              <td class="highlight-col">LED Backlight Strip Replacement</td>
              <td class="price-col">${escapeHtml(pricing.backlight)}</td>
              <td>Replaces burnt LED backlight strips with matching sets to restore full screen illumination (depends on screen size and strip count).</td>
            </tr>
            <tr>
              <td class="highlight-col">Motherboard / Logic Board Repair</td>
              <td class="price-col">${escapeHtml(pricing.motherboardRepair)}</td>
              <td>Component-level chip servicing, DC-DC converter IC replacement, regulator repair, or circuit servicing.</td>
            </tr>
            <tr>
              <td class="highlight-col">Motherboard / Logic Board Replacement</td>
              <td class="price-col">${escapeHtml(pricing.motherboardReplacement)}</td>
              <td>Full motherboard replacement when processor or logic PCB is completely shorted.</td>
            </tr>
            <tr>
              <td class="highlight-col">T-Con (Timing Controller) Board Repair</td>
              <td class="price-col">${escapeHtml(pricing.tconRepair)}</td>
              <td>VGH/VGL voltage booster IC repair, gamma IC check, or T-Con board replacement for display lines.</td>
            </tr>
            <tr>
              <td class="highlight-col">Internal Speaker Replacement</td>
              <td class="price-col">${escapeHtml(pricing.speakerSet)}</td>
              <td>Speaker replacement, internal wiring fix, or motherboard audio amplifier IC servicing for clear sound.</td>
            </tr>
            <tr>
              <td class="highlight-col">HDMI / USB Port Repair</td>
              <td class="price-col">${escapeHtml(pricing.hdmiPort)}</td>
              <td>Fixes loose physical connector pins, resolders connection tracks, or replaces damaged HDMI controller IC.</td>
            </tr>
            <tr>
              <td class="highlight-col">Wi-Fi & Bluetooth Module Replacement</td>
              <td class="price-col">${escapeHtml(pricing.wifiModule)}</td>
              <td>Checks internal wireless card, antenna wiring, and Bluetooth remote pairing circuit on Smart TVs.</td>
            </tr>
            <tr>
              <td class="highlight-col">Smart TV Software / Firmware Re-flashing</td>
              <td class="price-col">${escapeHtml(pricing.softwareFlash)}</td>
              <td>System recovery, factory firmware re-flashing, OS restore, and eMMC memory IC health check for logo freeze / boot loops.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pricing-notice-box" style="margin-top: 1.5rem;">
        <h3>Transparent ${escapeHtml(brand.name)} TV Repair Pricing Note</h3>
        <p>
          ${escapeHtml(pricing.note || 'Approximate repair cost and estimated service range based on typical market repairs in Tamil Nadu. Actual cost can change based on TV model, screen size, fault and part availability. Technician will confirm the final cost after checking the TV.')}
        </p>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section (Clean Responsive Card Layout) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose Us for ${escapeHtml(brand.name)} TV Repair in Karur</h2>
        <p>Practical benefits of scheduling your ${escapeHtml(brand.name)} TV inspection with our local Karur desk:</p>
      </div>

      <div class="why-grid">
        ${whyChooseHtml}
      </div>
    </div>
  </section>

  <!-- How Repair Works Section -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>How ${escapeHtml(brand.name)} TV Repair Works in Karur</h2>
        <p>A simple step-by-step repair process from booking to final testing.</p>
      </div>

      <div class="process-steps">
        ${processHtml}
      </div>
    </div>
  </section>

  <!-- Customer Experience Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Recent ${escapeHtml(brand.name)} TV Repair Experiences in Karur</h2>
        <p>Real repair discussions and feedback from households across Karur.</p>
      </div>

      <div class="experiences-grid">
        ${experiencesHtml}
      </div>
    </div>
  </section>

  <!-- Locality Section (60 Authentic Localities) -->
  <section class="section section-bg-muted" id="localitiesSection">
    <div class="container">
      <div class="section-header">
        <h2>${escapeHtml(brand.name)} TV Repair Across Karur Localities</h2>
        <p>Doorstep inspection and repair support across residential colonies, town areas, and surrounding suburban belts.</p>
      </div>

      <div class="localities-grid-expanded">
${generateLocalityCards(brand.name)}
      </div>
    </div>
  </section>

  <!-- FAQ Section (10-12 Brand-Specific FAQs) -->
  <section class="section" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${escapeHtml(brand.name)} TV Repair in Karur</h2>
        <p>Helpful answers to common questions about ${escapeHtml(brand.name)} television faults, doorstep visits, and repairs.</p>
      </div>

      <div class="faq-container">
        ${faqsHtml}
      </div>
    </div>
  </section>

  <!-- TV Brand Repair Service in Karur (Links to All 31 Brands) -->
  <section class="section section-bg-muted" id="brandsSection">
    <div class="container">
      <div class="section-header">
        <h2>TV Brand Repair Service in Karur</h2>
        <p>Explore doorstep repair support for all major television brands across Karur:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <a href="../tv-repair-service-in-karur.html" class="service-card" style="text-decoration: none; border-left: 4px solid var(--accent-blue); padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">All TV Repair in Karur</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Main TV service hub covering all 12 TV types and 31 brands.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue); margin-top: auto;">Main TV Page →</span>
        </a>
${generateBrandNavGrid(currentSlug)}
      </div>
    </div>
  </section>

  <!-- Other Home Appliances in Karur -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Other Home Appliance Repair Services in Karur</h2>
        <p>Explore doorstep assistance for your other household appliances:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
        <a href="../ac-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">AC Repair & Service</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Split & window AC cooling faults, water drips, fan motor issues & seasonal service.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View AC Services →</span>
        </a>

        <a href="../refrigerator-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">Refrigerator / Fridge Repair</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Cooling failure, freezer frost issues, thermostat checking & gas leakage testing.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View Fridge Services →</span>
        </a>

        <a href="../washing-machine/washing-machine-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">Washing Machine Repair</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Front load, top load & semi-automatic drainage, spinning, vibration & motor repair.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View Washing Machine →</span>
        </a>

        <a href="../microwave-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">Microwave Oven Repair</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Solo, grill & convection heating failure, turntable rotation, spark & touch panel repair.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View Microwave Services →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Banner Section -->
  <section class="cta-banner-section">
    <div class="container">
      <h2>Need ${escapeHtml(brand.name)} TV Repair in Karur?</h2>
      <p>Contact our local team now to discuss your ${escapeHtml(brand.name)} TV issue and arrange a technician inspection.</p>
      <div class="cta-banner-buttons">
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
            <li><a href="../ac-repair-service-in-karur.html">AC Repair & Service</a></li>
            <li><a href="../refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../tv-repair-service-in-karur.html">TV Repair & Service</a></li>
            <li><a href="../microwave-repair-service-in-karur.html">Microwave Oven Repair</a></li>
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

  <!-- Mobile Fixed Bottom Bar -->
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

// 1. Generate all 31 brand HTML files inside /tv/
let generatedCount = 0;
for (const brand of allBrands) {
  const filePath = path.join(tvDir, brand.slug);
  const htmlContent = generateBrandPageHtml(brand);
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  generatedCount++;
  console.log(`[${generatedCount}/31] Written to tv/: ${brand.slug}`);
}
console.log(`\nSuccessfully created all ${generatedCount} TV brand pages in ${tvDir}`);

// 2. Remove old root-level brand files so there are no duplicates
let removedRootCount = 0;
for (const brand of allBrands) {
  const oldRootFile = path.join(rootDir, brand.slug);
  if (fs.existsSync(oldRootFile)) {
    fs.unlinkSync(oldRootFile);
    removedRootCount++;
  }
}
console.log(`Removed ${removedRootCount} old root-level brand files from ${rootDir}`);

// 3. Update master page: tv-repair-service-in-karur.html with Brand Linking Section pointing to tv/
const masterPath = path.join(rootDir, 'tv-repair-service-in-karur.html');
let masterHtml = fs.readFileSync(masterPath, 'utf8');

const brandCardsForMaster = allBrands.map(b => `        <a href="tv/${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${escapeHtml(b.name)} TV Repair Service in Karur</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${escapeHtml(b.name)} LED & Smart TV repair and board inspection.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue); margin-top: auto;">View ${escapeHtml(b.name)} Service →</span>
        </a>`).join('\n');

const brandSectionHtml = `  <!-- TV Brand Repair Service in Karur Section -->
  <section class="section section-bg-muted" id="brandsSection">
    <div class="container">
      <div class="section-header">
        <h2>TV Brand Repair Service in Karur</h2>
        <p>Doorstep inspection and repair support across all 31 popular television brands in Karur, Tamil Nadu:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
${brandCardsForMaster}
      </div>
    </div>
  </section>`;

if (masterHtml.includes('id="brandsSection"')) {
  masterHtml = masterHtml.replace(/<!-- TV Brand Repair Service in Karur Section -->[\s\S]*?<\/section>/, brandSectionHtml.trim());
} else if (masterHtml.includes('<!-- Internal Links Section -->')) {
  masterHtml = masterHtml.replace('  <!-- Internal Links Section -->', brandSectionHtml + '\n\n  <!-- Internal Links Section -->');
}
fs.writeFileSync(masterPath, masterHtml, 'utf8');
console.log(`Updated tv-repair-service-in-karur.html with TV Brand links pointing to tv/`);

// 4. Update sitemap.xml to point TV brand URLs to /tv/
const sitemapPath = path.join(rootDir, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Replace any old root-level brand URLs with /tv/
for (const brand of allBrands) {
  const oldUrl = `https://servicecenterkarur.com/${brand.slug}`;
  const newUrl = `https://servicecenterkarur.com/tv/${brand.slug}`;
  if (sitemapContent.includes(oldUrl)) {
    sitemapContent = sitemapContent.replace(oldUrl, newUrl);
  } else if (!sitemapContent.includes(newUrl)) {
    const sitemapEntry = `  <url>\n    <loc>${newUrl}</loc>\n    <lastmod>2026-09-24</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    sitemapContent = sitemapContent.replace('</urlset>', `${sitemapEntry}</urlset>`);
  }
}

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log(`Updated sitemap.xml with /tv/ paths for all 31 brands.`);
