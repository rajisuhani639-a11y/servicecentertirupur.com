const fs = require('fs');
const path = require('path');

const wmBrands = require('./wm_all_brands');
const localities = require('./karur_wm_localities.json');
const { generateBrandLocalitiesHtml, generateMainLandingLocalitiesHtml } = require('./generate_wm_locality_cards');

console.log(`Starting Washing Machine pages generator for Karur. Total brands: ${wmBrands.length}`);

// Ensure washing-machine directory exists
const wmDir = path.join(__dirname, '..', 'washing-machine');
if (!fs.existsSync(wmDir)) {
  fs.mkdirSync(wmDir, { recursive: true });
  console.log("Created directory: washing-machine/");
}

// Function to generate peer brand links grid for brand pages
function generatePeerBrandsGridHtml(currentBrandSlug) {
  const brandCards = wmBrands.map(b => {
    const isCurrent = b.slug === currentBrandSlug;
    if (isCurrent) {
      return `        <div class="service-card" style="border: 2px solid var(--accent-blue); background: #f0f7ff; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--accent-blue); margin-bottom: 0.35rem;">${b.name} Washing Machine</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Currently viewing ${b.name} washing machine repair & service guide for Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue);">Active Page</span>
        </div>`;
    }
    return `        <a href="${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${b.name} Washing Machine</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${b.name} front load, top load & semi automatic repair in Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue);">View ${b.name} Service →</span>
        </a>`;
  }).join('\n');

  return `  <!-- Other Washing Machine Brands Service in Karur -->
  <section class="section" id="otherBrands">
    <div class="container">
      <div class="section-header">
        <h2>Other Washing Machine Brands Service in Karur (All 30 Brands)</h2>
        <p>
          Karur-la all major washing machine brands-ku doorstep inspection, water drain problems, spin issues, motor repairs, door locks, and genuine spare parts support kedaikkum. Select your washing machine brand below:
        </p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
${brandCards}
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="washing-machine-repair-service-in-karur.html" class="btn-primary-call sync-call" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; padding: 0.75rem 1.75rem;">
          <span>← Back to All Washing Machine Repair Services in Karur</span>
        </a>
      </div>
    </div>
  </section>`;
}

// Function to generate the brands grid for the main landing page
function generateMainLandingBrandsGridHtml() {
  const brandCards = wmBrands.map(b => {
    return `        <a href="${b.slug}" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${b.name} Washing Machine</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Doorstep ${b.name} front load, top load & semi-automatic repair in Karur.</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-blue);">View ${b.name} Service →</span>
        </a>`;
  }).join('\n');

  return `  <!-- Supported Washing Machine Brands in Karur (All 30 Brands) -->
  <section class="section" id="wmBrandsSection">
    <div class="container">
      <div class="section-header">
        <h2>Washing Machine Brands Service in Karur (All 30 Brands)</h2>
        <p>
          Karur-la all major washing machine brands-ku doorstep inspection, water drain repair, drum spin fixing, motor repairs, and spare parts support kedaikkum. Select your washing machine brand to view brand-specific service details and pricing:
        </p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
${brandCards}
      </div>
    </div>
  </section>`;
}

// Function to generate brand-specific HTML page
function generateBrandPage(brand) {
  const brandSlug = brand.slug;
  const brandName = brand.name;
  const waText = encodeURIComponent(`Hello, I need ${brandName} washing machine repair service in Karur. Please share technician visit details.`);

  // Machine types HTML
  const typesHtml = brand.types.map(t => {
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

    return `        <div class="type-card" style="background: #fff; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem;">
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

  // Common problems HTML
  const problemsHtml = brand.problems.map(prob => {
    return `        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">${prob.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">${prob.desc}</p>
        </div>`;
  }).join('\n');

  // Spare parts and charges table rows
  const pricingRowsHtml = brand.partsAndPricing.map(item => {
    return `            <tr>
              <td class="highlight-col">${item.item}</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">${item.price}</td>
              <td>Tested genuine compatible spare part with service warranty</td>
            </tr>`;
  }).join('\n');

  // Customer experiences HTML
  const experiencesHtml = brand.experiences.map(exp => {
    return `        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${exp.scenario}</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">${exp.text}</p>
        </div>`;
  }).join('\n');

  // Localities HTML
  const localitiesHtml = generateBrandLocalitiesHtml(brandName);

  // FAQs HTML & Schema
  const faqsHtml = brand.faqs.map(f => {
    return `        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>${f.q}</span>
            <svg class="faq-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-answer">
            <p>${f.a}</p>
          </div>
        </div>`;
  }).join('\n');

  const faqSchemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": brand.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  }, null, 2);

  const peerBrandsHtml = generatePeerBrandsGridHtml(brandSlug);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brandName} Washing Machine Repair in Karur | ${brandName} Washing Machine Service</title>
  <meta name="description" content="Looking for ${brandName} washing machine repair in Karur? Doorstep service for front load, top load & semi-automatic washers. Water drain, spin, motor, door lock & PCB fix. Call local technician.">
  <link rel="canonical" href="https://servicecenterkarur.com/washing-machine/${brandSlug}">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://servicecenterkarur.com/washing-machine/${brandSlug}">
  <meta property="og:title" content="${brandName} Washing Machine Repair in Karur | ${brandName} Washing Machine Service">
  <meta property="og:description" content="Doorstep ${brandName} washing machine repair service in Karur. Quick inspection for water drain, spin problems, noise, error codes, and genuine replacement parts.">
  <meta property="og:site_name" content="Service Center Karur">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD Service & FAQ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${brandName} Washing Machine Repair Service in Karur",
    "serviceType": "${brandName} Washing Machine Repair & Service",
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
    "description": "Doorstep inspection and repair for ${brandName} front load, top load, and semi-automatic washing machines across Karur."
  }
  </script>

  <script type="application/ld+json">
${faqSchemaJson}
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center</span>
          <span class="brand-loc">Karur Care</span>
        </div>
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../index.html#ac">AC Repair</a>
        <a href="../index.html#fridge">Fridge Repair</a>
        <a href="washing-machine-repair-service-in-karur.html" class="active">Washing Machine</a>
        <a href="../index.html#tv">TV Repair</a>
        <a href="../index.html#microwave">Microwave</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919442054321" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
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
        <li><a href="washing-machine-repair-service-in-karur.html">Washing Machine</a></li>
        <li aria-current="page">${brandName} Washing Machine Repair Service in Karur</li>
      </ol>
    </div>
  </div>

  <!-- 1. Hero / Starting Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          <span>Doorstep ${brandName} Washing Machine Service in Karur</span>
        </div>
        <h1>${brandName} Washing Machine Repair Service in Karur</h1>
        
        <p class="hero-lead">
          ${brand.intro}
        </p>

        <p style="font-size: 0.95rem; color: #475569; margin-bottom: 1.25rem;">
          Looking for ${brandName} washing machine repair near me or ${brandName} washing machine technician near me in Karur? Our local technicians visit homes across all major localities with necessary testing equipment and genuine compatible parts. The technician inspects the exact problem, explains the repair needed, and gives an upfront estimate before starting any work.
        </p>

        <div class="hero-highlights">
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Front Load, Top Load & Semi-Automatic</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Doorstep Checkup Fee (₹249)</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>~20% Lower Pricing than Market Reference</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Fast Scheduling Across 16 Karur Localities</span>
          </div>
        </div>

        <div class="hero-cta-group">
          <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Book via WhatsApp</span>
          </a>
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call +91 94420 54321</span>
          </a>
        </div>
      </div>

      <!-- Quick Booking Form Card -->
      <div class="hero-card-box">
        <h2>Schedule ${brandName} Machine Checkup</h2>
        <p>Local technician visits your home in Karur.</p>
        <form class="quick-booking-form">
          <input type="hidden" name="brand" value="${brandName}">
          <input type="hidden" name="appliance" value="${brandName} Washing Machine Repair">
          <div class="form-group">
            <label for="machineType">Machine Type</label>
            <select id="machineType" name="type" class="form-control" required>
              <option value="Front Load Washing Machine">Front Load Fully Automatic</option>
              <option value="Top Load Washing Machine" selected>Top Load Fully Automatic</option>
              <option value="Semi Automatic Washing Machine">Semi Automatic (Twin Tub)</option>
              <option value="Washer Dryer Combo">Washer Dryer Combo</option>
            </select>
          </div>
          <div class="form-group">
            <label for="localitySelect">Your Locality in Karur</label>
            <select id="localitySelect" name="locality" class="form-control" required>
${localities.map(l => `              <option value="${l.name}">${l.name}</option>`).join('\n')}
              <option value="Other Area">Other Locality in Karur</option>
            </select>
          </div>
          <div class="form-group">
            <label for="phoneInput">Mobile Phone Number</label>
            <input type="tel" id="phoneInput" name="phone" class="form-control" placeholder="10-digit mobile number" required pattern="[0-9]{10}">
          </div>
          <div class="form-group">
            <label for="issueInput">Problem Faced</label>
            <input type="text" id="issueInput" name="issue" class="form-control" placeholder="e.g. Water not draining, noise during spin">
          </div>
          <button type="submit" class="btn-form-submit">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            <span>Request Inspection Visit</span>
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- 2. Washing Machine Types We Service -->
  <section class="section section-bg-muted" id="typesSection">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} Washing Machine Types We Service in Karur</h2>
        <p>Doorstep inspection and repair for different ${brandName} washing machine configurations across Karur:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
${typesHtml}
      </div>
    </div>
  </section>

  <!-- 3. Common Problems We Check -->
  <section class="section" id="problemsSection">
    <div class="container">
      <div class="section-header">
        <h2>Common ${brandName} Washing Machine Problems We Check in Karur</h2>
        <p>If your ${brandName} washing machine shows any of these common symptoms, our technicians inspect the components to identify the exact cause:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
${problemsHtml}
      </div>
    </div>
  </section>

  <!-- 4. Spare Parts and Charges Table -->
  <section class="section section-bg-muted" id="pricingSection">
    <div class="container">
      <div class="section-header">
        <h2>${brandName} Washing Machine Spare Parts and Charges in Karur</h2>
        <p>
          Transparent, upfront repair rates for ${brandName} washing machines in Karur. Our service and spare part prices are positioned approximately 20% lower than typical market reference rates:
        </p>
      </div>

      <div class="pricing-table-wrap">
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Spare Part / Repair Service</th>
              <th>Estimated Price</th>
              <th>Service Details</th>
            </tr>
          </thead>
          <tbody>
${pricingRowsHtml}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 1.25rem; font-size: 0.88rem; color: #475569; line-height: 1.5; background: #fff; padding: 1rem; border-radius: 6px; border: 1px solid var(--border-color);">
        <strong>Pricing Note:</strong> Price depends on the machine model and part required. The technician will check the machine at your home in Karur and confirm the price before replacement. The nominal doorstep inspection fee of ₹249 is adjusted into the bill when repair work is approved.
      </div>
    </div>
  </section>

  <!-- 5. Real-Life Customer Experiences (40-50 words each) -->
  <section class="section" id="experiences">
    <div class="container">
      <div class="section-header">
        <h2>Common ${brandName} Problems Customers Face in Karur</h2>
        <p>Real-life washing machine repair scenarios and common problem situations encountered across homes in Karur:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
${experiencesHtml}
      </div>
    </div>
  </section>

  <!-- 6. Locality Section (16 Localities) -->
${localitiesHtml}

  <!-- 7. Why Choose Us -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose Us for ${brandName} Washing Machine Repair in Karur</h2>
        <p>Reliable doorstep appliance care for homes across Karur city:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
${brand.whyChooseUs.map(point => `        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Doorstep Assurance</h3>
          <p style="font-size: 0.88rem; color: var(--text-color); line-height: 1.55;">${point}</p>
        </div>`).join('\n')}
      </div>
    </div>
  </section>

  <!-- 8. Other Brands We Service -->
${peerBrandsHtml}

  <!-- 9. Frequently Asked Questions -->
  <section class="section section-bg-muted" id="faq">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions About ${brandName} Washing Machine Repair in Karur</h2>
        <p>Got questions about ${brandName} washing machine repairs, visiting charges, or parts? Here are common queries from local customers:</p>
      </div>

      <div class="faq-list">
${faqsHtml}
      </div>
    </div>
  </section>

  <!-- 10. Bottom CTA Box -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="cta-banner" style="background: linear-gradient(135deg, var(--primary-color), #0f172a); border-radius: 12px; padding: 2.5rem 1.5rem; text-align: center; color: #fff;">
        <h2 style="color: #fff; font-size: 1.6rem; margin-bottom: 0.75rem;">Need Urgent ${brandName} Washing Machine Repair in Karur?</h2>
        <p style="color: #cbd5e1; font-size: 0.95rem; max-width: 650px; margin: 0 auto 1.5rem; line-height: 1.6;">
          Our technician can visit your doorstep in Karur today. Get honest testing, genuine replacement parts, and upfront pricing before any repair.
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer" style="padding: 0.75rem 1.5rem;">
            <span>Book via WhatsApp</span>
          </a>
          <a href="tel:+919442054321" class="btn-primary-call sync-call" style="padding: 0.75rem 1.5rem;">
            <span>Call +91 94420 54321</span>
          </a>
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
          <p>Local appliance repair technicians providing doorstep inspection and service for washing machines, ACs, refrigerators, TVs, and microwaves across Karur.</p>
          <div class="footer-contact-item" style="margin-top: 0.75rem;">
            <span>Phone: +91 94420 54321</span>
          </div>
          <div class="footer-contact-item">
            <span>Location: Karur, Tamil Nadu, India</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Appliance Services</h4>
          <ul>
            <li><a href="washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../index.html#ac">AC Repair Service</a></li>
            <li><a href="../index.html#fridge">Refrigerator Repair</a></li>
            <li><a href="../index.html#tv">Television Repair</a></li>
            <li><a href="../index.html#microwave">Microwave Oven Repair</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>${brandName} Machine Services</h4>
          <ul>
            <li><a href="#typesSection">${brandName} Machine Types</a></li>
            <li><a href="#problemsSection">Common Faults We Check</a></li>
            <li><a href="#pricingSection">Spare Parts & Charges</a></li>
            <li><a href="#localities">Karur Service Localities</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Assurance</h4>
          <p style="font-size: 0.85rem; color: #94a3b8; line-height: 1.6;">
            Doorstep inspection with transparent quote before part replacement. 30 to 90 days service warranty on functional spare parts.
          </p>
          <div style="margin-top: 1rem;">
            <a href="tel:+919442054321" class="btn-primary-call sync-call" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
              <span>Call Technician Now</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Service Center Karur. All rights reserved. Independent local appliance repair service provider in Karur, Tamil Nadu.</p>
      </div>
    </div>
  </footer>

  <!-- Floating Viewport CTA (Left = WhatsApp, Right = Call Now) -->
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

  <!-- Mobile Fixed Bottom Bar (LEFT = WhatsApp, RIGHT = Call Now) -->
  <div class="mobile-bottom-bar" id="mobileBottomBar">
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
</html>`;
}

// Function to generate the master main landing page: washing-machine/washing-machine-repair-service-in-karur.html
function generateMainLandingPage() {
  const mainBrandsGrid = generateMainLandingBrandsGridHtml();
  const waText = encodeURIComponent("Hello, I need washing machine repair service in Karur. Please share technician visit details.");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Washing Machine Repair Service in Karur | Washing Machine Service</title>
  <meta name="description" content="Looking for washing machine repair in Karur? Doorstep service for front load, top load & semi automatic machines. Drain problems, spin, error codes, noise & motor issues. Call local technician.">
  <link rel="canonical" href="https://servicecenterkarur.com/washing-machine/washing-machine-repair-service-in-karur.html">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://servicecenterkarur.com/washing-machine/washing-machine-repair-service-in-karur.html">
  <meta property="og:title" content="Washing Machine Repair Service in Karur | Washing Machine Service">
  <meta property="og:description" content="Doorstep washing machine repair in Karur for front load, top load & semi-automatic models. Water drain, spin, noise, door lock, PCB & motor repair. Call local technician.">
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
    "name": "Washing Machine Repair Service in Karur",
    "serviceType": "Washing Machine Repair & Service",
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
    "description": "Doorstep inspection and repair for front load, top load, and semi-automatic washing machines across Karur."
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center</span>
          <span class="brand-loc">Karur Care</span>
        </div>
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../index.html#ac">AC Repair</a>
        <a href="../index.html#fridge">Fridge Repair</a>
        <a href="washing-machine-repair-service-in-karur.html" class="active">Washing Machine</a>
        <a href="../index.html#tv">TV Repair</a>
        <a href="../index.html#microwave">Microwave</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919442054321" class="btn-header-call sync-call" title="Call technician now">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
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
        <li aria-current="page">Washing Machine Repair Service in Karur</li>
      </ol>
    </div>
  </div>

  <!-- 1. Hero / Starting Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          <span>Doorstep Washing Machine Service in Karur</span>
        </div>
        <h1>Washing Machine Repair Service in Karur</h1>
        
        <p class="hero-lead">
          Searching for washing machine repair in Karur or washing machine repair near me? You came to the right place. If your washing machine is not starting, not draining water, making loud noise, not spinning or showing an error code, the machine can be checked at your home in Karur and the actual problem can be found before starting any repair.
        </p>

        <p style="font-size: 0.95rem; color: #475569; margin-bottom: 1.25rem;">
          Looking for washing machine service in Karur? Our technicians inspect front load, top load, and semi-automatic machines across all 16 major residential localities. The technician checks the exact fault, explains the spare part requirement, and gives an upfront estimate before work begins.
        </p>

        <div class="hero-highlights">
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Front Load, Top Load & Semi-Automatic</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Doorstep Physical Checkup (₹249)</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>~20% Lower Pricing than Market Reference</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Fast Scheduling Across 60 Karur Localities</span>
          </div>
        </div>

        <div class="hero-cta-group">
          <a href="https://wa.me/919442054321?text=${waText}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>Book via WhatsApp</span>
          </a>
          <a href="tel:+919442054321" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call +91 94420 54321</span>
          </a>
        </div>
      </div>

      <!-- Quick Booking Form Card -->
      <div class="hero-card-box">
        <h2>Schedule Machine Inspection</h2>
        <p>Local technician visits your home in Karur.</p>
        <form class="quick-booking-form">
          <input type="hidden" name="appliance" value="Washing Machine Repair & Service">
          <div class="form-group">
            <label for="machineType">Washing Machine Type</label>
            <select id="machineType" name="type" class="form-control" required>
              <option value="Front Load Washing Machine">Front Load Fully Automatic</option>
              <option value="Top Load Washing Machine" selected>Top Load Fully Automatic</option>
              <option value="Semi Automatic Washing Machine">Semi Automatic (Twin Tub)</option>
              <option value="Washer Dryer Combo">Washer Dryer Combo</option>
            </select>
          </div>
          <div class="form-group">
            <label for="localitySelect">Your Locality in Karur</label>
            <select id="localitySelect" name="locality" class="form-control" required>
${localities.map(l => `              <option value="${l.name}">${l.name}</option>`).join('\n')}
              <option value="Other Area">Other Locality in Karur</option>
            </select>
          </div>
          <div class="form-group">
            <label for="phoneInput">Mobile Phone Number</label>
            <input type="tel" id="phoneInput" name="phone" class="form-control" placeholder="10-digit mobile number" required pattern="[0-9]{10}">
          </div>
          <div class="form-group">
            <label for="issueInput">Common Problem Faced</label>
            <input type="text" id="issueInput" name="issue" class="form-control" placeholder="e.g. Water not draining, noise during spin">
          </div>
          <button type="submit" class="btn-form-submit">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            <span>Request Inspection Visit</span>
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- 2. Common Problems We Check -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Common Washing Machine Problems We Check in Karur</h2>
        <p>If your washing machine shows any of these common issues, our technicians inspect the components to find the actual fault:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Machine Not Starting</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">Display panel does not light up or motor fails to engage when start is pressed. Technicians inspect power cords, internal fuses, door locks, and control board circuits.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Water Not Filling</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">Water enters very slowly or not at all. Caused by clogged water inlet mesh filters, low overhead tank pressure, or burnt solenoid valve coils.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Water Not Draining</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">Dirty water remains inside the drum after washing. Caused by coins, lint, or safety pins choking the drain pump filter or a burnt drain pump motor.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Machine Not Spinning / Wet Clothes</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">The drum hums or turns weakly, leaving clothes soaked. Caused by a weak motor capacitor, broken drive belt, faulty lid switch, or unbalance sensor.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Loud Noise & Vibration</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">Banging or grinding sound during the spin cycle. Caused by worn tub ball bearings, broken spider flanges, loose counterweights, or weak shock absorbers.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.35rem;">Door Lock & Gasket Leakage</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55;">Front load door remains stuck locked or leaks water onto the floor. Technicians check the bi-metal door interlock switch and rubber bellow gasket.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Washing Machine Brands Service in Karur (All 30 Brands) -->
${mainBrandsGrid}

  <!-- 4. Washing Machine Spare Parts Section -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Washing Machine Spare Parts and Charges in Karur</h2>
        <p>Technicians inspect faulty components at your home and provide transparent pricing before replacement. Compatible replacement parts include:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Electronic Control Board (PCB)</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Handles wash cycle logic, display, and motor frequency. Common repairs involve relay replacement, power transformer fixing, and circuit tracking.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Electric Drive Motor</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Wash motors and spin motors power drum movement. Technicians inspect internal copper windings, rotor bearings, carbon brushes, and drive pulleys.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Drain Pump & Valve Assembly</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Pumps out wastewater after each wash and rinse. Solves water retention, drain choke, and drain motor humming without water discharge.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Water Inlet Solenoid Valve</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Controls incoming fresh water into detergent trays. Fixes slow water intake, constant water dripping, and inlet valve humming faults.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Door Lock Mechanism</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Bi-metal safety switch that latches front load doors. Solves door not opening, dE door error codes, and machine refusing to initiate wash cycle.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Door Gasket / Rubber Seal</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Prevents water leaking through the front loading glass door. Fixes water dripping onto floors, mold accumulation, and torn rubber folds.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Tub Bearings & Oil Seal</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Heavy-duty metal ball bearings allow smooth, silent drum rotation. Fixes roaring jet plane sounds during spinning and rusted back tub plates.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); font-size: 1.05rem; margin-bottom: 0.35rem;">Shock Absorbers & Dampers</h4>
          <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Hydraulic strut dampers and top load suspension rods balance drum weight. Solves violent cabinet walking and banging against side panels.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Complete Pricing Section -->
  <section class="section" id="pricingSection">
    <div class="container">
      <div class="section-header">
        <h2>Estimated Washing Machine Service & Repair Charges in Karur</h2>
        <p>
          Transparent, upfront repair rates for washing machines in Karur. Our service prices are positioned approximately 20% lower than typical market reference rates:
        </p>
      </div>

      <div class="pricing-table-wrap" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">1. Installation, Uninstallation & Checkup Charges</h3>
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Service Description</th>
              <th>Estimated Price</th>
              <th>Service Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">Washing Machine Doorstep Checkup / Inspection</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹249</td>
              <td>Complete physical fault diagnosis; waived or adjusted if major repair is completed</td>
            </tr>
            <tr>
              <td class="highlight-col">Top Load / Semi-Automatic Installation</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹399</td>
              <td>Inlet tap adapter fitting, drain pipe slope setup, machine level balance, and test run</td>
            </tr>
            <tr>
              <td class="highlight-col">Front Load Washing Machine Installation</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹549</td>
              <td>Transit bolt removal, spirit level vibration alignment, tap adapter, and drain connection</td>
            </tr>
            <tr>
              <td class="highlight-col">Washing Machine Uninstallation / Shifting Dismount</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹279 – ₹349</td>
              <td>Safe disconnection of inlet water pipes, drain hose drain-out, and transit bolt placement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pricing-table-wrap">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">2. Common Component Repair Charges in Karur</h3>
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Component / Service</th>
              <th>Estimated Price</th>
              <th>Common Symptoms & Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">Water Inlet Solenoid Valve Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹520 – ₹760</td>
              <td>Fixes water not entering drum, slow filling, or inlet valve coil buzzing</td>
            </tr>
            <tr>
              <td class="highlight-col">Front Load Door Lock Switch Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹599 – ₹920</td>
              <td>Fixes door not latching, dE error codes, or door stuck locked after cycle</td>
            </tr>
            <tr>
              <td class="highlight-col">Water Heating Element Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹880 – ₹1,280</td>
              <td>Fixes water not heating on hot wash programs or electrical heater trip</td>
            </tr>
            <tr>
              <td class="highlight-col">Drive V-Belt Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹280 – ₹440</td>
              <td>Fixes motor spinning but wash pulsator or drum not turning</td>
            </tr>
            <tr>
              <td class="highlight-col">Drain Pump Motor Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹980 – ₹1,450</td>
              <td>Fixes water retention, 5E / OE / E18 drain pump error codes</td>
            </tr>
            <tr>
              <td class="highlight-col">Top Load Suspension Rod Set (4 Pcs)</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹820 – ₹1,150</td>
              <td>Fixes violent banging against side cabinet during spin cycle</td>
            </tr>
            <tr>
              <td class="highlight-col">Front Door Rubber Bellow Gasket</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,350 – ₹1,850</td>
              <td>Fixes water leaking under front door, mold accumulation, or torn folds</td>
            </tr>
            <tr>
              <td class="highlight-col">Tub Drum Bearings & Oil Seal Set</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,650 – ₹2,200</td>
              <td>Fixes loud roaring jet engine noise during high speed spin</td>
            </tr>
            <tr>
              <td class="highlight-col">Main Control Board (PCB) Repair</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,150 – ₹1,650</td>
              <td>Component-level repair for power circuits, relays, and display errors</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

${generateMainLandingLocalitiesHtml()}

  <!-- 7. Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Karur</h4>
          <p>Local appliance repair technicians providing doorstep inspection and service for washing machines, ACs, refrigerators, TVs, and microwaves across Karur.</p>
          <div class="footer-contact-item" style="margin-top: 0.75rem;">
            <span>Phone: +91 94420 54321</span>
          </div>
          <div class="footer-contact-item">
            <span>Location: Karur, Tamil Nadu, India</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Appliance Services</h4>
          <ul>
            <li><a href="washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="../index.html#ac">AC Repair Service</a></li>
            <li><a href="../index.html#fridge">Refrigerator Repair</a></li>
            <li><a href="../index.html#tv">Television Repair</a></li>
            <li><a href="../index.html#microwave">Microwave Oven Repair</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Washing Machine Brands</h4>
          <ul>
            <li><a href="samsung-washing-machine-repair-service-in-karur.html">Samsung Washing Machine</a></li>
            <li><a href="whirlpool-washing-machine-repair-service-in-karur.html">Whirlpool Washing Machine</a></li>
            <li><a href="bosch-washing-machine-repair-service-in-karur.html">Bosch Washing Machine</a></li>
            <li><a href="ifb-washing-machine-repair-service-in-karur.html">IFB Washing Machine</a></li>
            <li><a href="haier-washing-machine-repair-service-in-karur.html">Haier Washing Machine</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Assurance</h4>
          <p style="font-size: 0.85rem; color: #94a3b8; line-height: 1.6;">
            Doorstep inspection with transparent quote before part replacement. 30 to 90 days service warranty on functional spare parts.
          </p>
          <div style="margin-top: 1rem;">
            <a href="tel:+919442054321" class="btn-primary-call sync-call" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
              <span>Call Technician Now</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Service Center Karur. All rights reserved. Independent local appliance repair service provider in Karur, Tamil Nadu.</p>
      </div>
    </div>
  </footer>

  <!-- Floating Viewport CTA (Left = WhatsApp, Right = Call Now) -->
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

  <!-- Mobile Fixed Bottom Bar (LEFT = WhatsApp, RIGHT = Call Now) -->
  <div class="mobile-bottom-bar" id="mobileBottomBar">
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
</html>`;
}

// 1. Generate main landing page
const mainLandingHtml = generateMainLandingPage();
const mainLandingPath = path.join(wmDir, 'washing-machine-repair-service-in-karur.html');
fs.writeFileSync(mainLandingPath, mainLandingHtml, 'utf8');
console.log(`Generated main landing page: washing-machine/washing-machine-repair-service-in-karur.html`);

// 2. Generate all 30 brand pages
wmBrands.forEach((brand, idx) => {
  const brandHtml = generateBrandPage(brand);
  const brandFilePath = path.join(wmDir, brand.slug);
  fs.writeFileSync(brandFilePath, brandHtml, 'utf8');
  console.log(`[${idx + 1}/30] Generated brand page: washing-machine/${brand.slug}`);
});

console.log("All 30 brand pages + 1 main landing page generated successfully in washing-machine/!");
