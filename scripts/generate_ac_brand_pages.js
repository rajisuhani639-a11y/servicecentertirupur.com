const fs = require('fs');
const path = require('path');
const allBrands = require('./brand_data');

console.log(`Loaded ${allBrands.length} brands. Preparing generator for ac/ folder...`);

// Ensure ac folder exists
const acDir = path.join(__dirname, '..', 'ac');
if (!fs.existsSync(acDir)) {
  fs.mkdirSync(acDir, { recursive: true });
  console.log("Created directory: ac/");
}

const { generateBrandLocalitiesHtml } = require('./generate_locality_cards');

// Function to generate the "Other AC Brands Service in Karur" section
// for brand pages inside the AC folder (peer links)
function generatePeerBrandsGridHtml(currentBrandSlug) {
  const brandCards = allBrands.map(b => {
    const isCurrent = b.slug === currentBrandSlug;
    if (isCurrent) {
      return `        <div class="service-card" style="border: 2px solid var(--accent-blue); background: #f0f7ff; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--accent-blue); margin-bottom: 0.35rem;">${b.name} AC Service</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Currently viewing ${b.name} AC repair & service guide for Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue);">Active Page</span>
        </div>`;
    }
    return `        <a href="${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${b.name} AC Service</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${b.name} split, inverter & window AC repair in Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue);">View ${b.name} Service →</span>
        </a>`;
  }).join('\n');

  return `  <!-- Other AC Brands Service in Karur -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>AC Brands Service in Karur (All 29 Brands)</h2>
        <p>
          Karur-la different AC brands-ku repair, service, cleaning, gas checking, installation and common AC problems-ku support available. Check brand-specific service information below:
        </p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
${brandCards}
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="../ac-repair-service-in-karur.html" class="btn-primary-call sync-call" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; padding: 0.75rem 1.75rem;">
          <span>← Back to All AC Repair Services in Karur</span>
        </a>
      </div>
    </div>
  </section>`;
}

// Function to generate the "AC Brands Service in Karur" section
// for the main landing page (root level linking to ac/)
function generateRootBrandsGridHtml() {
  const brandCards = allBrands.map(b => {
    return `        <a href="ac/${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${b.name} AC Service</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${b.name} split, inverter & window AC repair in Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue);">View ${b.name} Service →</span>
        </a>`;
  }).join('\n');

  return `  <!-- 14. Supported AC Brands in Karur (All 29 Unique Brands) -->
  <section class="section" id="acBrandsSection">
    <div class="container">
      <div class="section-header">
        <h2>AC Brands Service in Karur (All 29 Brands)</h2>
        <p>
          Karur-la all major AC brands-ku doorstep inspection, cooling repair, deep jet wash, gas recharging and spare parts support kedaikkum. Select your AC brand to view brand-specific service details and pricing:
        </p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
${brandCards}
      </div>
    </div>
  </section>`;
}

// Function to generate full brand page HTML inside AC/ folder
function generateBrandPage(brand) {
  const brandSlug = brand.slug;
  const brandName = brand.name;
  const waText = encodeURIComponent(`Hello, I need ${brandName} AC repair service in Karur. Please share technician visit details.`);

  // AC Types HTML - Enriched with search terms, common problems, relevant parts, and simple explanations
  const acTypesHtml = brand.acTypes.map(t => {
    const keywordsHtml = (t.keywords && t.keywords.length > 0)
      ? `        <div class="type-keywords" style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.75rem;">
${t.keywords.map(kw => `          <span style="background: #e2e8f0; color: #1e293b; font-size: 0.78rem; font-weight: 600; padding: 0.2rem 0.5rem; border-radius: 4px;">${kw}</span>`).join('\n')}
        </div>`
      : '';

    const problemsHtml = t.commonProblems
      ? `        <div style="background: #fff5f5; border-left: 3px solid #e53e3e; padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #742a2a; line-height: 1.5;">
          <strong style="color: #9b2c2c;">Common Problems Checked:</strong> ${t.commonProblems}
        </div>`
      : '';

    const partsHtml = t.commonParts
      ? `        <div style="background: #eff6ff; border-left: 3px solid var(--accent-blue); padding: 0.6rem 0.75rem; border-radius: 4px; margin-bottom: 0.85rem; font-size: 0.85rem; color: #1e40af; line-height: 1.5;">
          <strong style="color: var(--accent-blue);">Common Parts Checked:</strong> ${t.commonParts}
        </div>`
      : '';

    return `        <div class="type-card">
          <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.5rem;">${t.title}</h3>
${keywordsHtml}
          <p style="font-size: 0.92rem; color: var(--text-color); margin-bottom: 0.75rem; line-height: 1.55;">${t.desc}</p>
${problemsHtml}
${partsHtml}
          <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">
${t.points.map(p => `            <li>${p}</li>`).join('\n')}
          </ul>
        </div>`;
  }).join('\n');

  // Common Problems HTML
  const commonProblemsHtml = brand.commonProblems.map(p => `        <div class="problem-card">
          <span class="problem-card-badge">Problem ${p.num}</span>
          <h3>${p.title}</h3>
          <p class="problem-block">${p.desc}</p>
        </div>`).join('\n');

  // Dedicated Services HTML
  const servicesHtml = brand.services.map(s => `        <div class="service-card">
          <h3 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 0.45rem;">${s.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.55;">${s.desc}</p>
        </div>`).join('\n');

  // Summer Problems HTML
  const summerProblemsHtml = brand.summerProblems.map(sp => `        <div class="problem-card">
          <span class="problem-card-badge">Summer Issue ${sp.num}</span>
          <h3>${sp.title}</h3>
          <p class="problem-block">${sp.desc}</p>
        </div>`).join('\n');

  // Why Regular Service HTML
  const whyServiceHtml = brand.whyRegularService.map(w => `        <div class="type-card">
          <h4>${w.title}</h4>
          <p>${w.desc}</p>
        </div>`).join('\n');

  // Customer Problems HTML (Tanglish real-life situations)
  const customerProblemsHtml = brand.customerProblems.map(cp => `        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"${cp.quote}"</span>
          </div>
          <p class="experience-body">"${cp.text}"</p>
        </div>`).join('\n');

  // FAQs HTML
  const faqsHtml = brand.faqs.map(f => `        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>${f.q}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">${f.a}</div>
        </div>`).join('\n');

  // Series Pills HTML
  const seriesPillsHtml = brand.series.map(s => `          <span style="background: #f1f5f9; color: var(--primary-color); font-weight: 600; padding: 0.4rem 0.85rem; border-radius: var(--radius-full); font-size: 0.9rem;">${s}</span>`).join('\n');

  // Brand-Specific Locality Cards HTML
  const localitiesInnerHtml = generateBrandLocalitiesHtml(brandName);

  // Other Brands Section (peer links)
  const otherBrandsSectionHtml = generatePeerBrandsGridHtml(brandSlug);

  // Service & Parts Pricing rows
  const servicePricingRows = (brand.servicePricing || []).map(sp => `            <tr>
              <td class="highlight-col">${sp.item}</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">${sp.price}</td>
              <td>${sp.notes}</td>
            </tr>`).join('\n');

  const partsPricingRows = (brand.partsPricing || []).map(pp => `            <tr>
              <td class="highlight-col">${pp.part}</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">${pp.price}</td>
              <td>${pp.notes}</td>
            </tr>`).join('\n');

  // Gas Pricing rows
  const gasPricingRows = (brand.gasPricing || []).map(gp => `            <tr>
              <td class="highlight-col">${gp.service}</td>
              <td>${gp.gas}</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">${gp.price}</td>
              <td>${gp.notes}</td>
            </tr>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brand.metaTitle}</title>
  <meta name="description" content="${brand.metaDesc}">
  <link rel="canonical" href="https://servicecenterkarur.com/ac/${brand.slug}">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://servicecenterkarur.com/ac/${brand.slug}">
  <meta property="og:title" content="${brand.metaTitle}">
  <meta property="og:description" content="${brand.metaDesc}">
  <meta property="og:site_name" content="Service Center Karur">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${brandName} AC Repair Service in Karur",
    "serviceType": "${brandName} Air Conditioner Repair & Service",
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
    "description": "Doorstep inspection, troubleshooting, repair, and general service for ${brandName} split, inverter, and window air conditioners in Karur, Tamil Nadu."
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
        <a href="../ac-repair-service-in-karur.html" class="active">AC Repair</a>
        <a href="../refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="../washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="../tv-repair-service-in-karur.html">TV Repair</a>
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
        <li><a href="../ac-repair-service-in-karur.html">AC Repair</a></li>
        <li aria-current="page">${brandName} AC Repair Service in Karur</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-layout">
      <div class="hero-content">
        <div class="trust-badge-pill">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Doorstep ${brandName} AC Service in Karur</span>
        </div>
        
        <h1>${brandName} AC Repair Service in Karur</h1>
        
        <p class="hero-lead">
          ${brand.heroSubtitle}
        </p>

        <div class="hero-bullet-tags">
          <span class="hero-tag">✓ Inverter & Split AC Service</span>
          <span class="hero-tag">✓ Doorstep AC Checking</span>
          <span class="hero-tag">✓ ~20% Lower Pricing</span>
          <span class="hero-tag">✓ Fast Local Scheduling</span>
        </div>

        <div class="hero-cta-group">
          <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Book via WhatsApp</span>
          </a>
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call +91 94420 54321</span>
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">249+</span>
            <span class="stat-lbl">${brandName} AC Services Done</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">4.8★</span>
            <span class="stat-lbl">Customer Satisfaction</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">60</span>
            <span class="stat-lbl">Karur Localities Served</span>
          </div>
        </div>
      </div>

      <div class="hero-card-panel">
        <div class="booking-card">
          <h3>Need Quick ${brandName} AC Service?</h3>
          <p>Technician checks the AC at your home in Karur. Share your AC problem:</p>
          
          <div class="quick-callout">
            <div class="callout-icon">⚡</div>
            <div class="callout-text">
              <strong>Same-Day Inspection Available</strong>
              <span>Available across Kagithapuramam, Pasupathipalayam, Kovai Road & all Karur areas.</span>
            </div>
          </div>

          <div class="feature-checklist">
            <div class="chk-item">✓ Inverter & Non-Inverter Split AC</div>
            <div class="chk-item">✓ Window & Cassette AC Support</div>
            <div class="chk-item">✓ Honest Pricing (~20% Lower Rates)</div>
            <div class="chk-item">✓ No Work Without Your Approval</div>
          </div>

          <div class="quick-btn-stack">
            <a href="tel:+919442054321" class="btn-primary-call sync-call" style="width: 100%; justify-content: center;">
              <span>Call Technician Now</span>
            </a>
            <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" style="width: 100%; justify-content: center;" target="_blank" rel="noopener noreferrer">
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. Tamil Callout Box -->
  <section class="section" style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
    <div class="container">
      <div class="info-callout" style="border-left-color: var(--accent-orange); background: #fffaf0;">
        <h3 style="color: #c05621; font-size: 1.15rem; margin-bottom: 0.5rem;">
          ${brand.tamilCallout.headline}
        </h3>
        <p style="font-size: 0.95rem; color: #7b341e; line-height: 1.6; margin: 0;">
          ${brand.tamilCallout.body}
        </p>
      </div>
    </div>
  </section>

  <!-- 3. Local Search & Intro Content -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>${brand.tagline}</h2>
        <p>Local technician support for ${brandName} air conditioners in Karur, Tamil Nadu</p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p class="about-lead">
            ${brand.intro.p1}
          </p>
          <p>
            ${brand.intro.p2}
          </p>
          <p>
            ${brand.intro.p3}
          </p>
        </div>
        <div class="about-highlights">
          <div class="highlight-card">
            <h4>Karur climate & ${brandName} ACs</h4>
            <p>${brand.climateContext}</p>
          </div>
          <div class="highlight-card" style="margin-top: 1rem;">
            <h4>Refrigerant Support</h4>
            <p>We test and charge correct refrigerants for ${brandName} ACs (${brand.refrigerants}) with digital manifold gauges and nitrogen leak testing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Common Problems Grid -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Common ${brandName} AC Problems We Check</h2>
        <p>Quick breakdown of frequent ${brandName} air conditioner issues checked during technician visits in Karur:</p>
      </div>

      <div class="problem-grid">
${commonProblemsHtml}
      </div>
    </div>
  </section>

  <!-- 5. Dedicated Brand AC Services -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} AC Services in Karur</h2>
        <p>Doorstep checking, cleaning, repair, and refrigerant filling for ${brandName} air conditioners in Karur:</p>
      </div>

      <div class="services-grid">
${servicesHtml}
      </div>
    </div>
  </section>

  <!-- 6. Brand AC Types (Enriched with Search Terms, Problems, Parts, & Simple Explanations) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} Air Conditioner Types We Service</h2>
        <p>We check and repair your AC based on the problem and AC model. Below are the common ${brandName} AC types serviced in Karur:</p>
      </div>

      <div class="types-grid">
${acTypesHtml}
      </div>
    </div>
  </section>

  <!-- 7. Common Summer Problems -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Common ${brandName} AC Problems During Summer in Karur</h2>
        <p>During the intense peak heat months in Karur, these are the most frequent issues households report:</p>
      </div>

      <div class="problem-grid">
${summerProblemsHtml}
      </div>
    </div>
  </section>

  <!-- 8. Why Regular Servicing is Important -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Why Regular ${brandName} AC Service Is Important in Karur</h2>
        <p>Seasonal servicing keeps your AC running cold and protects important electrical parts:</p>
      </div>

      <div class="types-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
${whyServiceHtml}
      </div>
    </div>
  </section>

  <!-- 9. Service & Spare Parts Pricing Section (Rule 12-20: Realistic, Useful, ~20% Lower Rates) -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} AC Service & Spare Parts Price in Karur</h2>
        <p>Direct, transparent rates for ${brandName} air conditioner repair and replacement parts. Our displayed service and parts rates are approximately 20% lower than typical market reference prices in Karur:</p>
      </div>

      <div class="content-table-wrapper" style="overflow-x: auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Service / Part</th>
              <th>Our Price</th>
              <th>Key Details & Notes</th>
            </tr>
          </thead>
          <tbody>
${servicePricingRows}
${partsPricingRows}
          </tbody>
        </table>
      </div>

      <div class="parts-card" style="margin-top: 1.5rem; background: #ffffff; border-left: 4px solid var(--accent-blue); padding: 1.25rem;">
        <h4>📋 Transparent Price Policy</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 0.5rem;">
          ${brand.sparePartsNote}
        </p>
        <p style="font-size: 0.82rem; color: var(--text-subtle); margin: 0;">
          * The technician checks the exact AC model, tonnage, and component at your doorstep and confirms the price before fitting any new part.
        </p>
      </div>
    </div>
  </section>

  <!-- 10. Gas / Refrigerant Pricing Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} AC Gas Filling & Leak Repair Price in Karur</h2>
        <p>Accurate manifold pressure testing and refrigerant charging rates for ${brandName} split and window ACs:</p>
      </div>

      <div class="info-callout" style="margin-top: 0; margin-bottom: 1.5rem;">
        <h4>Low Cooling Does NOT Automatically Mean Gas Filling Is Required!</h4>
        <p>${brand.gasNote}</p>
      </div>

      <div class="content-table-wrapper" style="overflow-x: auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Service Description</th>
              <th>Refrigerant / Application</th>
              <th>Our Price</th>
              <th>Key Service Notes</th>
            </tr>
          </thead>
          <tbody>
${gasPricingRows}
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.75rem;">
        * Note: Refrigerant is filled only after checking system pressure with manifold gauges and fixing copper leaks with nitrogen pressure testing.
      </p>
    </div>
  </section>

  <!-- 11. Service Breakdown Table -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} AC Service Breakdown in Karur</h2>
        <p>Know exactly what is included in each service visit and what may involve separate replacement costs:</p>
      </div>

      <div class="content-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Service Package</th>
              <th>Usually Includes</th>
              <th>May Be Extra (If Required)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">General ${brandName} AC Service</td>
              <td>Air filter cleaning, indoor cooling coil surface brush wash, drain line flush, electrical connection check</td>
              <td>Spare parts, chemical coil wash, refrigerant work</td>
            </tr>
            <tr>
              <td class="highlight-col">Deep Cleaning (Jet Wash)</td>
              <td>High-pressure water jet wash of indoor coil, blower wheel deep cleaning, outdoor condenser fin wash, drain sanitize</td>
              <td>Defective electronic parts, repair labour, gas charging</td>
            </tr>
            <tr>
              <td class="highlight-col">Water Leakage Repair</td>
              <td>Drain line pressure clearing, drip tray cleaning, indoor unit wall mounting level and slope check</td>
              <td>Cracked drain pipe replacement, indoor casing repair</td>
            </tr>
            <tr>
              <td class="highlight-col">Cooling Problem Repair</td>
              <td>Checking compressor, capacitor, indoor blower, outdoor fan, sensors, and operating pressures</td>
              <td>Capacitor, sensor, fan motor, or circuit board replacement</td>
            </tr>
            <tr>
              <td class="highlight-col">Gas Service & Charging</td>
              <td>System vacuuming, pressure verification, refrigerant charging by weight, cooling cycle test</td>
              <td>Leakage brazing, flare nut replacement, nitrogen pressure test</td>
            </tr>
            <tr>
              <td class="highlight-col">${brandName} AC Installation</td>
              <td>Indoor wall plate mounting, outdoor stand mounting, copper piping flare connection, basic vacuum & run test</td>
              <td>Additional copper piping beyond kit, wall stand, core hole drilling</td>
            </tr>
            <tr>
              <td class="highlight-col">${brandName} AC Uninstallation</td>
              <td>Safe refrigerant pump-down into compressor, electrical disconnection, careful dismounting and packing</td>
              <td>Scaffolding for difficult high-altitude outdoor placements</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- 12. How Repair Cost is Decided -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>How Much Does ${brandName} AC Repair Cost in Karur?</h2>
        <p>Our clear step-by-step checking process before any repair work starts:</p>
      </div>

      <div class="types-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
        <div class="type-card">
          <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.25rem;">01</span>
          <h4>AC Type & Tonnage Checked</h4>
          <p>Technician checks whether the unit is a Split, Window, or Inverter AC and notes its cooling tonnage (1 Ton, 1.5 Ton, 2 Ton).</p>
        </div>
        <div class="type-card">
          <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.25rem;">02</span>
          <h4>Model & Series Identified</h4>
          <p>Specific ${brandName} model and circuit board type are checked to use matching parts and correct repair methods.</p>
        </div>
        <div class="type-card">
          <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.25rem;">03</span>
          <h4>Physical Fault Inspection</h4>
          <p>Technician tests electrical circuits, airflow, capacitor rating, and gas pressure to find the exact problem.</p>
        </div>
        <div class="type-card">
          <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.25rem;">04</span>
          <h4>Required Part & Work Identified</h4>
          <p>Whether the issue requires simple cleaning, drain flushing, capacitor change, or board repair is established clearly.</p>
        </div>
        <div class="type-card">
          <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.25rem;">05</span>
          <h4>Transparent Estimate Given</h4>
          <p>A direct, fair estimate is explained to the customer, based on local benchmark rates without hidden surprises.</p>
        </div>
        <div class="type-card">
          <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.25rem;">06</span>
          <h4>Customer Approves</h4>
          <p>Work begins only after you approve the estimate. If replacement parts are needed, compatible parts are installed with your consent.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 13. Warning Signs & Maintenance Tips -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>7 Signs Your ${brandName} AC Needs a Service Check</h2>
        <p>Pay attention to these warning signs to address small faults before they lead to expensive component damage:</p>
      </div>

      <div class="signs-grid">
        <div class="sign-card">
          <span class="sign-card-num">Sign 01</span>
          <h4>Cooling Becomes Weak</h4>
          <p>The AC takes far longer than usual to cool the room, or air feels only mildly cool even at lowest temperature settings.</p>
        </div>
        <div class="sign-card">
          <span class="sign-card-num">Sign 02</span>
          <h4>Water Drips from Indoor Unit</h4>
          <p>Condensation drips down bedroom walls or pools on the floor because of a blocked drain line or unlevel bracket.</p>
        </div>
        <div class="sign-card">
          <span class="sign-card-num">Sign 03</span>
          <h4>Unusual Rattling or Humming Noise</h4>
          <p>Loud sounds from the blower fan, motor bearings, or vibrating outdoor unit brackets indicate mechanical loosening.</p>
        </div>
        <div class="sign-card">
          <span class="sign-card-num">Sign 04</span>
          <h4>AC Switches Off Repeatedly</h4>
          <p>The compressor or entire unit trips after a few minutes due to thermal overload, sensor failure, or voltage dips.</p>
        </div>
        <div class="sign-card">
          <span class="sign-card-num">Sign 05</span>
          <h4>Ice Visible on Coil or Pipes</h4>
          <p>Frost or solid ice forms on the indoor evaporator fins or outdoor copper tubes, signaling poor airflow or system issues.</p>
        </div>
        <div class="sign-card">
          <span class="sign-card-num">Sign 06</span>
          <h4>Musty or Foul Odor</h4>
          <p>A damp, sour, or moldy smell when the AC turns on indicates bacteria and algae buildup in the stagnant drain tray.</p>
        </div>
        <div class="sign-card">
          <span class="sign-card-num">Sign 07</span>
          <h4>Spike in Electricity Consumption</h4>
          <p>Choked coils force the compressor to run twice as long to cool the room, noticeably increasing monthly electricity bills.</p>
        </div>
      </div>

      <!-- Maintenance Tips -->
      <div class="info-callout" style="margin-top: 2rem; margin-bottom: 0;">
        <h3>Simple ${brandName} AC Maintenance Tips for Karur homes</h3>
        <p style="margin-bottom: 0.75rem;">Keep your air conditioner running smoothly with these practical practices:</p>
        <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
          <li><strong>Clean air filters every 2–3 weeks:</strong> Remove the front plastic mesh filters, wash under running tap water, dry in shade, and reinsert.</li>
          <li><strong>Keep outdoor unit clearance:</strong> Ensure at least 2 feet of open space around the outdoor condenser for unimpeded heat discharge.</li>
          <li><strong>Do not block indoor airflow:</strong> Keep curtains, wardrobes, and tall wall decor away from the indoor air intake and discharge louvers.</li>
          <li><strong>Attend to water drips immediately:</strong> Never ignore indoor drips; addressing a choked drain line early prevents wall plaster damage.</li>
          <li><strong>Inspect drain outlet outside:</strong> Check that the outdoor drain pipe end is not submerged in mud, potted plants, or blocked by garden debris.</li>
          <li><strong>Use optimal thermostat setting:</strong> Setting the thermostat between 24°C and 26°C delivers comfortable cooling with balanced power consumption.</li>
          <li><strong>Schedule pre-summer servicing:</strong> Have a professional technician perform a deep jet wash and electrical check before peak summer begins.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 14. Supported Brand Models & Series + Disclaimer -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Supported ${brandName} AC Series & Models in Karur</h2>
        <p>Doorstep checking, repair, and servicing support across all leading ${brandName} residential cooling models:</p>
      </div>

      <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.75rem; box-shadow: var(--shadow-sm);">
        <div style="display: flex; flex-wrap: wrap; gap: 0.65rem; margin-bottom: 1.25rem;">
${seriesPillsHtml}
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0.75rem;">
          ${brandName} AC repair and service enquiries are available for different models and tonnages (1 Ton, 1.5 Ton, 2 Ton), subject to model compatibility, spare parts supply, and technical diagnostic results.
        </p>
        <p style="font-size: 0.82rem; color: var(--text-subtle); line-height: 1.5; margin: 0; font-style: italic;">
          * Disclaimer: We provide independent doorstep multi-brand repair and servicing assistance. Brand names, logos, and trademarks belong strictly to their respective registered owners and are cited exclusively for appliance identification purposes. We are not an official authorized brand service center.
        </p>
      </div>
    </div>
  </section>

  <!-- 15. Karur Locality Coverage (60 Genuine Localities) -->
  <section class="section section-bg-muted" id="localitiesSection">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} AC Repair Coverage Across Karur areas (60 Localities)</h2>
        <p>Technician visits for ${brandName} split and window air conditioners are available across these Karur localities:</p>
      </div>

      <div class="localities-grid-expanded">
${localitiesInnerHtml}
      </div>
    </div>
  </section>

  <!-- 16. Real Customer Situations in Tanglish -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Customer Experiences & Common Questions in Karur</h2>
        <p>Real-life feedback and common situations shared by ${brandName} AC owners across Karur:</p>
      </div>

      <div class="experience-grid">
${customerProblemsHtml}
      </div>
    </div>
  </section>

  <!-- 17. FAQs Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${brandName} AC Repair in Karur</h2>
        <p>Clear answers to common questions about ${brandName} air conditioner servicing, charges, and doorstep visits:</p>
      </div>

      <div class="faq-list">
${faqsHtml}
      </div>
    </div>
  </section>

${otherBrandsSectionHtml}

  <!-- Final CTA Section -->
  <section class="section" style="background: linear-gradient(135deg, var(--primary-color) 0%, #0f172a 100%); color: #ffffff; text-align: center; padding: 3.5rem 1rem;">
    <div class="container" style="max-width: 720px;">
      <h2 style="color: #ffffff; font-size: 2rem; margin-bottom: 1rem;">Book Doorstep ${brandName} AC Service in Karur</h2>
      <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">
        Get your ${brandName} split or window AC checked at your doorstep in Karur. Fast technician scheduling, honest problem checking, and ~20% lower rates.
      </p>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
        <a href="tel:+919442054321" class="btn-primary-call sync-call" style="background: var(--accent-orange); color: #ffffff; padding: 0.85rem 2rem; font-size: 1.05rem; text-decoration: none; border-radius: var(--radius-sm); font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call +91 94420 54321</span>
        </a>
        <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" style="padding: 0.85rem 2rem; font-size: 1.05rem; text-decoration: none; border-radius: var(--radius-sm); font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem;" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
          <span>Message on WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-col-wide">
          <div class="footer-logo">
            <span class="brand-name">Service Center Karur</span>
            <span class="brand-loc">Local Appliance Care</span>
          </div>
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
            <li><a href="../washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
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

  <!-- Scroll-Based Floating CTA (Left = WhatsApp, Right = Call Now) -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919442054321?text=${waText}" class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar (Rule 1: LEFT = WhatsApp | RIGHT = Call Now) -->
  <div class="mobile-bottom-bar">
    <a href="https://wa.me/919442054321?text=${waText}" class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
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
}

// 2. Generate all 29 brand pages directly into ac/ folder
let createdCount = 0;
allBrands.forEach(brand => {
  const pageHtml = generateBrandPage(brand);
  const targetFilePath = path.join(acDir, brand.slug);
  fs.writeFileSync(targetFilePath, pageHtml, 'utf8');
  createdCount++;
  console.log(`[${createdCount}/29] Created ac/${brand.slug}`);

  // Delete root-level duplicate if present
  const rootDuplicatePath = path.join(__dirname, '..', brand.slug);
  if (fs.existsSync(rootDuplicatePath)) {
    fs.unlinkSync(rootDuplicatePath);
    console.log(`  -> Cleaned up root duplicate: ${brand.slug}`);
  }
});

// 3. Update main AC page (ac-repair-service-in-karur.html) with 29 brands section pointing to ac/ folder
console.log("Updating main AC page ac-repair-service-in-karur.html with 29 brands section pointing to ac/...");
const mainBrandsSectionHtml = generateRootBrandsGridHtml();
const mainAcPath = path.join(__dirname, '..', 'ac-repair-service-in-karur.html');
const mainAcHtml = fs.readFileSync(mainAcPath, 'utf8');

let updatedMainAcHtml = mainAcHtml;

// If "<!-- 14. Supported AC Brands in Karur" exists, replace that section
const supportedBrandsSectionRegex = /<!-- 14\. Supported AC Brands in Karur[\s\S]*?<\/section>/;
if (supportedBrandsSectionRegex.test(updatedMainAcHtml)) {
  updatedMainAcHtml = updatedMainAcHtml.replace(supportedBrandsSectionRegex, mainBrandsSectionHtml);
  console.log("Replaced existing section 14 with full 29 brands section pointing to ac/ in main AC page.");
} else {
  // Otherwise insert before localitiesSection
  updatedMainAcHtml = updatedMainAcHtml.replace(
    '<!-- AC Locality SEO - 60 Genuine Localities (Rule 20) -->',
    `${mainBrandsSectionHtml}\n\n  <!-- AC Locality SEO - 60 Genuine Localities (Rule 20) -->`
  );
  console.log("Inserted 29 brands section before localitiesSection in main AC page.");
}
fs.writeFileSync(mainAcPath, updatedMainAcHtml, 'utf8');

// 4. Update sitemap.xml to point brand URLs to /ac/ folder
console.log("Updating sitemap.xml with /ac/ brand URLs...");
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// First remove any existing brand URLs without /ac/ or with /AC/
allBrands.forEach(b => {
  const oldUrlRegex = new RegExp(`\\s*<url>\\s*<loc>https://servicecenterkarur\\.com/${b.slug}</loc>[\\s\\S]*?</url>`, 'g');
  sitemapContent = sitemapContent.replace(oldUrlRegex, '');
  const oldAcRegex = new RegExp(`\\s*<url>\\s*<loc>https://servicecenterkarur\\.com/(?:AC|ac)/${b.slug}</loc>[\\s\\S]*?</url>`, 'g');
  sitemapContent = sitemapContent.replace(oldAcRegex, '');
});

const newUrlEntries = allBrands.map(b => `  <url>
    <loc>https://servicecenterkarur.com/ac/${b.slug}</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n');

sitemapContent = sitemapContent.replace('</urlset>', `${newUrlEntries}\n</urlset>`);
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log("Successfully updated sitemap.xml with 29 /ac/ brand URLs.");

console.log("ALL 29 BRAND PAGES GENERATED IN ac/ AND INTEGRATED SUCCESSFULLY!");
