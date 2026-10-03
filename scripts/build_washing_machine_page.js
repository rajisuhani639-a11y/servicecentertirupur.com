const fs = require('fs');
const path = require('path');

// Read 60 localities
const localitiesList = JSON.parse(fs.readFileSync(path.join(__dirname, 'karur_localities.json'), 'utf8'));

function getPreposition(locName) {
  return (locName.includes('Road') || locName.includes('Salai')) ? 'on' : 'in';
}

// 60 Washing Machine Locality Cards
function generateWmLocalitiesHtml() {
  const keywordTemplates = [
    (loc, prep) => `Washing Machine Repair ${prep} ${loc}, Karur`,
    (loc, prep) => `Washing Machine Service ${prep} ${loc}, Karur`,
    (loc, prep) => `Washing Machine Repair Near Me in ${loc}`,
    (loc, prep) => `Washing Machine Technician in ${loc}, Karur`,
    (loc, prep) => `Washing Machine Service Center near ${loc}`,
    (loc, prep) => `Front Load Washing Machine Repair ${prep} ${loc}`,
    (loc, prep) => `Top Load Washing Machine Service ${prep} ${loc}`,
    (loc, prep) => `Semi Automatic Washing Machine Repair ${prep} ${loc}`
  ];

  const descTemplates = [
    (loc) => `Need washing machine repair near ${loc}? We provide doorstep checking for water draining, spinning, motor, and PCB problems across this area.`,
    (loc) => `Looking for washing machine service in ${loc}, Karur? Our local technicians inspect front load, top load, and semi-automatic machines at your home.`,
    (loc) => `Washing machine not spinning or leaking water near ${loc}? Get your machine inspected by an experienced local technician with upfront price estimates.`,
    (loc) => `Doorstep washing machine repair is available for homes and residential apartments across ${loc}, Karur.`,
    (loc) => `Washing machine technician available near ${loc} for drain pump replacement, motor capacitor check, door lock repair, and drum noise fixing.`,
    (loc) => `Washing machine not starting or showing an error code in ${loc}? Contact us for quick inspection and genuine compatible spare parts replacement.`
  ];

  return localitiesList.map((locObj, idx) => {
    const loc = locObj.title;
    const prep = getPreposition(loc);
    const kw = keywordTemplates[idx % keywordTemplates.length](loc, prep);
    const desc = descTemplates[idx % descTemplates.length](loc);

    return `        <div class="locality-card">
          <div class="loc-title">📍 ${loc}</div>
          <div class="loc-keyword">${kw}</div>
          <p class="loc-desc">${desc}</p>
        </div>`;
  }).join('\n');
}

const wmLocalitiesHtml = generateWmLocalitiesHtml();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Washing Machine Repair Service in Karur | Washing Machine Service</title>
  <meta name="description" content="Looking for washing machine repair in Karur? Doorstep service for front load, top load & semi automatic machines. Drain problems, spin, error codes, noise & motor issues. Call local technician.">
  <link rel="canonical" href="https://servicecenterkarur.com/washing-machine-repair-service-in-karur.html">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://servicecenterkarur.com/washing-machine-repair-service-in-karur.html">
  <meta property="og:title" content="Washing Machine Repair Service in Karur | Washing Machine Service">
  <meta property="og:description" content="Doorstep washing machine repair in Karur for front load, top load & semi-automatic models. Water drain, spin, noise, door lock, PCB & motor repair. Call local technician.">
  <meta property="og:site_name" content="Service Center Karur">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">

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
      <a href="index.html" class="brand-logo" title="Service Center Karur Homepage">
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
        <a href="index.html">Home</a>
        <a href="ac-repair-service-in-karur.html">AC Repair</a>
        <a href="refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="washing-machine-repair-service-in-karur.html" class="active">Washing Machine</a>
        <a href="tv-repair-service-in-karur.html">TV Repair</a>
        <a href="microwave-repair-service-in-karur.html">Microwave</a>
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
        <li><a href="index.html">Home</a></li>
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
          Searching for washing machine repair in Karur or washing machine repair near me? You came to the right place. If your washing machine is not starting, not draining water, making loud noise, not spinning or showing an error code, the machine can be checked at your home and the actual problem can be found before starting any repair.
        </p>

        <p style="font-size: 0.95rem; color: #475569; margin-bottom: 1.25rem;">
          Looking for washing machine service in Karur? Our technicians inspect front load, top load, and semi-automatic machines across all major residential areas. The technician checks the exact fault, explains the spare part requirement, and gives an upfront estimate before work begins.
        </p>

        <div class="hero-highlights">
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Front Load, Top Load & Semi-Automatic</span>
          </div>
          <div class="highlight-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Doorstep Diagnostic Checkup (₹249)</span>
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
          <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
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
              <option value="Karur Town">Karur Town</option>
              <option value="Kagithapuramam">Kagithapuramam</option>
              <option value="Pasupathipalayam">Pasupathipalayam</option>
              <option value="Thanthonimalai">Thanthonimalai</option>
              <option value="Vengamedu">Vengamedu</option>
              <option value="Inam Karur">Inam Karur</option>
              <option value="Kovai Road">Kovai Road</option>
              <option value="Trichy Road">Trichy Road</option>
              <option value="South Highway Corridor">South Highway Corridor</option>
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

  <!-- 2. Common Washing Machine Problems We Check -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Common Washing Machine Problems We Check in Karur</h2>
        <p>If your washing machine shows any of these common issues, our technicians inspect the components to find the actual fault:</p>
      </div>

      <div class="problem-cards-grid">
        <div class="service-card">
          <div class="service-icon-box">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          </div>
          <h3>Machine Not Starting</h3>
          <p>The display does not light up, or pressing the start button produces no motor response. Technicians check the main power cord, fuse, door safety interlock, and PCB power circuits.</p>
        </div>

        <div class="service-card">
          <div class="service-icon-box">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <h3>Water Not Filling</h3>
          <p>The machine buzzes but water does not enter the drum, or filling takes too long. Caused by clogged water inlet valve mesh filters, low tap pressure, or inlet solenoid coil failure.</p>
        </div>

        <div class="service-card">
          <div class="service-icon-box">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z"/></svg>
          </div>
          <h3>Water Not Draining</h3>
          <p>Dirty water stays inside the drum after the wash cycle. Caused by coins, hairpins, or lint choking the drain pump filter, broken drain valve bellows, or a burnt drain motor.</p>
        </div>

        <div class="service-card">
          <div class="service-icon-box">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
          </div>
          <h3>Machine Not Spinning / Wet Clothes</h3>
          <p>The motor hums or the drum turns slowly, leaving clothes soaking wet. Caused by a weak motor capacitor, broken drive belt, faulty lid switch, or unbalanced load sensor.</p>
        </div>

        <div class="service-card">
          <div class="service-icon-box">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <h3>Excessive Noise & Vibration</h3>
          <p>Loud banging, rattling, or metal grinding sounds occur during the spin cycle. Caused by worn tub bearings, broken spider flanges, loose counterweights, or weak shock absorbers.</p>
        </div>

        <div class="service-card">
          <div class="service-icon-box">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          </div>
          <h3>Door Lock & Seal Leakage</h3>
          <p>The front load door remains stuck locked after wash, will not latch to start, or leaks water onto the floor. Technicians check the bi-metal door lock switch and the rubber gasket seal.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Types of Washing Machines We Repair in Karur -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Types of Washing Machines We Repair in Karur</h2>
        <p>Doorstep service is available for all common domestic washing machine designs and configurations:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        
        <!-- Semi Automatic -->
        <div class="service-card">
          <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.75rem;">Semi Automatic Washing Machine</h3>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 1rem;">
            Searching for semi automatic washing machine repair in Karur? You came to the right place. Twin-tub machines use separate wash and spin tubs with individual electric motors and mechanical timers.
          </p>
          <div style="background: #f8fafc; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #334155;">
            <strong>Common Problems:</strong> Wash motor not turning, spin motor dead, mechanical timer stuck, spin tub vibration, drain valve rubber leak, lid switch failure, and worn V-belts.
          </div>
          <div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px; font-size: 0.85rem; color: #166534;">
            <strong>Common Parts Checked:</strong> Wash motor, spin motor, dual capacitor, mechanical timer, V-belt, pulsator coupler, drain valve rubber, and brake shoe.
          </div>
        </div>

        <!-- Fully Automatic Top Load -->
        <div class="service-card">
          <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.75rem;">Top Load Washing Machine</h3>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 1rem;">
            Searching for top load washing machine repair in Karur or top load service near me? Top load fully automatic machines use an upright vertical drum, digital control board, and water level pressure sensor.
          </p>
          <div style="background: #f8fafc; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #334155;">
            <strong>Common Problems:</strong> Water not filling, drum shaking violently on spin, water not draining, pulsator loose, OE / dE error codes, and machine stopping mid-cycle.
          </div>
          <div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px; font-size: 0.85rem; color: #166534;">
            <strong>Common Parts Checked:</strong> Water inlet valve, drain motor, suspension damper rods, pressure switch sensor, lid lock, pulsator gear assembly, and main PCB.
          </div>
        </div>

        <!-- Fully Automatic Front Load -->
        <div class="service-card">
          <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.75rem;">Front Load Washing Machine</h3>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 1rem;">
            Searching for front load washing machine repair in Karur? You came to the right place. Front load washers provide high efficiency tumble washing but use sensitive electronic boards, door interlocks, and water heating elements.
          </p>
          <div style="background: #f8fafc; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem; font-size: 0.85rem; color: #334155;">
            <strong>Common Problems:</strong> Door locked stuck, water leaking from front rubber gasket, drum bearing roaring noise, water not draining, heating element failure, and vibration.
          </div>
          <div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px; font-size: 0.85rem; color: #166534;">
            <strong>Common Parts Checked:</strong> Door lock latch, rubber door gasket bellow, drain pump assembly, tub bearings & oil seal, shock absorbers, heater, and inverter drive PCB.
          </div>
        </div>

      </div>
    </div>
  </section>

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

  <!-- 5. Complete Pricing Section (Our Price = Reference × 80%) -->
  <section class="section" id="pricingSection">
    <div class="container">
      <div class="section-header">
        <h2>Estimated Washing Machine Service & Repair Charges in Karur</h2>
        <p>
          Transparent, upfront repair rates for washing machines in Karur. Our service prices are positioned approximately 20% lower than typical market reference rates:
        </p>
      </div>

      <!-- Installation / Uninstallation Table -->
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

      <!-- Wash Cycle Problem Pricing -->
      <div class="pricing-table-wrap" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">2. Washing Machine Wash Problem Repair Charges in Karur</h3>
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
              <td class="highlight-col">Thermostat / Temperature Sensor (NTC)</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹440 – ₹680</td>
              <td>Fixes water overheating or cycle freezing on heating stage</td>
            </tr>
            <tr>
              <td class="highlight-col">Motor Run / Dual Capacitor Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹320 – ₹520</td>
              <td>Fixes wash motor humming, low torque with clothes, or failing to start</td>
            </tr>
            <tr>
              <td class="highlight-col">Overflow Pipe / Pressure Hose Fitting</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹240 – ₹360</td>
              <td>Fixes water overflowing without stopping at set level</td>
            </tr>
            <tr>
              <td class="highlight-col">Semi-Automatic Wash Motor Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,120 – ₹1,560</td>
              <td>Replaces burnt wash motor with genuine copper-wound motor unit</td>
            </tr>
            <tr>
              <td class="highlight-col">Inverter Direct Drive Hall Sensor</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹599 – ₹880</td>
              <td>Fixes LE error codes, drum hesitation, and motor rotor stuttering</td>
            </tr>
            <tr>
              <td class="highlight-col">Fully Automatic Main Drive Motor Service</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,760 – ₹2,560</td>
              <td>Replaces or repairs main drive motor for top load and front load units</td>
            </tr>
            <tr>
              <td class="highlight-col">Mechanical Wash Timer Switch</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹440 – ₹640</td>
              <td>Fixes rotary timer dial getting stuck or failing to alternate wash strokes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Water Leakage Pricing -->
      <div class="pricing-table-wrap" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">3. Washing Machine Water Leakage Repair Charges in Karur</h3>
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Leakage Service / Part</th>
              <th>Estimated Price</th>
              <th>Details & Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">Drain Bellow Pipe Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹280 – ₹400</td>
              <td>Replaces cracked corrugated rubber bellow connecting tub to drain pump</td>
            </tr>
            <tr>
              <td class="highlight-col">Drain Valve Rubber Seal & Spring</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹240 – ₹360</td>
              <td>Fixes water draining out continuously while tub is filling</td>
            </tr>
            <tr>
              <td class="highlight-col">Spin Tub Rubber Bellow / Water Seal</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹280 – ₹400</td>
              <td>Prevents spin water dripping down into the spin motor in twin tub machines</td>
            </tr>
            <tr>
              <td class="highlight-col">Drain Case Descaling & Slime Removal</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹280 – ₹399</td>
              <td>Clears accumulated soap scum, lint, and algae choking the drain housing</td>
            </tr>
            <tr>
              <td class="highlight-col">Front / Back Outer Tub Joint Resealing</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹599 – ₹880</td>
              <td>Reseals outer tub halves with industrial grade waterproof gasket sealant</td>
            </tr>
            <tr>
              <td class="highlight-col">Door Gasket / Rubber Bellow Replacement (Front Load)</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹880 – ₹1,320</td>
              <td>Replaces torn or moldy front door rubber seal causing floor leaks</td>
            </tr>
            <tr>
              <td class="highlight-col">Fresh Water Inlet Hose Pipe Fitting</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹240 – ₹360</td>
              <td>Replaces punctured, leaking, or loose braided fresh water feed pipes</td>
            </tr>
            <tr>
              <td class="highlight-col">Corrugated Waste Drain Pipe Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹199 – ₹299</td>
              <td>Replaces cracked, rodent-damaged, or crushed wastewater drain hose</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Power / Electrical Problem Pricing -->
      <div class="pricing-table-wrap" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">4. Washing Machine Power Problem Repair Charges in Karur</h3>
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Electrical Component / Repair</th>
              <th>Estimated Price</th>
              <th>Details & Fault Solved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">PCB Circuit Repair (Component Level)</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹760 – ₹1,160</td>
              <td>Replaces burnt relays, power ICs, capacitors, and repairs dry solder joints</td>
            </tr>
            <tr>
              <td class="highlight-col">Complete Control PCB Board Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,440 – ₹2,240</td>
              <td>Fitted when old board micro-controller is completely damaged by high voltage</td>
            </tr>
            <tr>
              <td class="highlight-col">Internal Wiring Harness / Rodent Wire Repair</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹320 – ₹520</td>
              <td>Solders and insulates rat-bitten or shorted internal wiring cables</td>
            </tr>
            <tr>
              <td class="highlight-col">Inverter Direct Drive Motor PCB Service</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,120 – ₹1,680</td>
              <td>Repairs IPM power modules and inverter drive stages on smart washers</td>
            </tr>
            <tr>
              <td class="highlight-col">Power Noise Filter / Line Surge Suppressor</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹360 – ₹560</td>
              <td>Fixes machine tripping main MCB breaker switch upon power turn-on</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Spin Problem Pricing -->
      <div class="pricing-table-wrap" style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">5. Washing Machine Spin Repair Charges in Karur</h3>
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Spin Component / Service</th>
              <th>Estimated Price</th>
              <th>Symptoms & Repair Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">Mechanical Spin Timer Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹360 – ₹560</td>
              <td>Fixes spin timer ticking without motor turning or knob slipping</td>
            </tr>
            <tr>
              <td class="highlight-col">Suspension Damper Rod Set (Top Load)</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹680 – ₹1,080</td>
              <td>Fixes violent banging against side walls and UE unbalanced error codes</td>
            </tr>
            <tr>
              <td class="highlight-col">Semi-Automatic Spin Motor Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,080 – ₹1,520</td>
              <td>Fitted when spin motor winding is burnt due to water seal leakage</td>
            </tr>
            <tr>
              <td class="highlight-col">Pulsator / Drive Coupler Replacement</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹280 – ₹440</td>
              <td>Fixes stripped plastic teeth causing motor to spin without rotating the clothes</td>
            </tr>
            <tr>
              <td class="highlight-col">Spin Brake Wheel & Shoe Assembly</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹320 – ₹480</td>
              <td>Fixes spin tub continuing to spin after lid opening or stuck brake jamming motor</td>
            </tr>
            <tr>
              <td class="highlight-col">Complete Drain Pump Motor Unit</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹680 – ₹1,040</td>
              <td>Fitted when drain motor impeller is broken or winding burnt, blocking spin cycle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Noise Problem Pricing -->
      <div class="pricing-table-wrap">
        <h3 style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 0.75rem;">6. Washing Machine Noise Repair Charges in Karur</h3>
        <table class="table-pricing">
          <thead>
            <tr>
              <th>Noise Component / Service</th>
              <th>Estimated Price</th>
              <th>Symptoms & Technical Remedy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-col">Tub Ball Bearing Replacement (Front / Top Load)</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹880 – ₹1,320</td>
              <td>Fixes loud airplane roar noise during spin cycle; paired with new oil seal</td>
            </tr>
            <tr>
              <td class="highlight-col">Water-Tight Rubber Oil Seal Fitting</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹280 – ₹400</td>
              <td>Protects newly installed bearings from detergent water contamination</td>
            </tr>
            <tr>
              <td class="highlight-col">Drum Spider Flange & Shaft Assembly</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹1,120 – ₹1,760</td>
              <td>Fixes broken aluminum spider arm causing drum wobble and scraping sounds</td>
            </tr>
            <tr>
              <td class="highlight-col">Front Load Drum Shock Absorber Struts</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹599 – ₹960</td>
              <td>Fixes thumping sound on spin acceleration due to worn friction pistons</td>
            </tr>
            <tr>
              <td class="highlight-col">Motor Pulley & Belt Alignment Service</td>
              <td class="price-col" style="font-weight: 700; color: #166534; font-size: 1.05rem;">₹320 – ₹480</td>
              <td>Fixes high-pitched squealing noise during wash agitation strokes</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.75rem; font-style: italic;">
          * Note: Exact pricing depends on your machine model, capacity, and the specific part required. The technician explains the inspection findings and confirms the total cost before beginning work.
        </p>
      </div>

    </div>
  </section>

  <!-- 6. Factors Affecting Washing Machine Repair Charges -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Factors Affecting Washing Machine Repair & Service Charges in Karur</h2>
        <p>Repair costs vary depending on the technical nature of the work. Key factors include:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); margin-bottom: 0.35rem;">1. Machine Configuration</h4>
          <p style="font-size: 0.88rem; color: #475569;">Semi-automatic twin tub units use simple mechanical timer wiring, while front load machines use micro-controller PCBs, balance sensors, and heating elements.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); margin-bottom: 0.35rem;">2. Type of Problem</h4>
          <p style="font-size: 0.88rem; color: #475569;">Simple drain pipe clearing or belt adjustment requires minimal labour, whereas complete tub bearing extraction requires dismantling the entire wash drum.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); margin-bottom: 0.35rem;">3. Part Replacement</h4>
          <p style="font-size: 0.88rem; color: #475569;">Replacing a small capacitor or inlet valve is inexpensive, whereas replacing a main motor, outer tub casing, or inverter circuit board involves higher component costs.</p>
        </div>
        <div class="service-card" style="padding: 1.25rem;">
          <h4 style="color: var(--primary-color); margin-bottom: 0.35rem;">4. Machine Age & Part Availability</h4>
          <p style="font-size: 0.88rem; color: #475569;">Standard models have readily available compatible parts in Karur, while imported or older discontinued units may require special part sourcing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Why Regular Service Is Important & Signs You Need Service -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Why Regular Washing Machine Service Is Important in Karur</h2>
        <p>Periodic maintenance helps keep your machine running smoothly and avoids sudden breakdowns:</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <h4>Helps Find Small Faults Early</h4>
          <p>Technicians detect minor motor capacitor drops or bearing wear before they cause complete motor burnout.</p>
        </div>
        <div class="feature-card">
          <h4>Reduces Water Leakage Risks</h4>
          <p>Checking drain hoses and door gasket seals prevents unexpected water flooding across bathroom or balcony floors.</p>
        </div>
        <div class="feature-card">
          <h4>Maintains Proper Spinning</h4>
          <p>Cleaning lint traps and checking suspension dampers prevents clothes from staying soaked after wash cycles.</p>
        </div>
        <div class="feature-card">
          <h4>Clears Soap Scum & Hard Water Scale</h4>
          <p>Karur groundwater hard water scale can choke tub holes. Periodic descaling protects heating elements and sensors.</p>
        </div>
      </div>

      <div style="margin-top: 3rem;">
        <div class="section-header">
          <h2>Signs Your Washing Machine May Need Service</h2>
          <p>Contact our Karur service desk if you notice any of these warning signs:</p>
        </div>

        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
          <div style="background: #ffffff; padding: 1rem 1.25rem; border-radius: 8px; border-left: 4px solid var(--accent-blue); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--primary-color);">Loud Roaring on Spin:</strong> Worn metal tub bearings needing replacement.
          </div>
          <div style="background: #ffffff; padding: 1rem 1.25rem; border-radius: 8px; border-left: 4px solid var(--accent-blue); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--primary-color);">Water Pool Under Machine:</strong> Torn door gasket seal or cracked drain bellow.
          </div>
          <div style="background: #ffffff; padding: 1rem 1.25rem; border-radius: 8px; border-left: 4px solid var(--accent-blue); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--primary-color);">Machine Shaking Violently:</strong> Weak suspension rods or worn drum shock absorbers.
          </div>
          <div style="background: #ffffff; padding: 1rem 1.25rem; border-radius: 8px; border-left: 4px solid var(--accent-blue); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--primary-color);">Water Not Draining:</strong> Coins or lint choking the bottom drain pump filter.
          </div>
          <div style="background: #ffffff; padding: 1rem 1.25rem; border-radius: 8px; border-left: 4px solid var(--accent-blue); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--primary-color);">Error Code Blinking:</strong> Sensor mismatch or door lock failure on digital panel.
          </div>
          <div style="background: #ffffff; padding: 1rem 1.25rem; border-radius: 8px; border-left: 4px solid var(--accent-blue); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--primary-color);">Clothes Coming Out Soaked:</strong> Weak spin capacitor or loose motor drive belt.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. Real-Life Customer Experiences (40-50 words each, authentic, no fake reviews) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Common Washing Machine Problems Customers Face in Karur</h2>
        <p>Real-life problem situations commonly reported by Karur residents across different settings:</p>
      </div>

      <div class="experiences-grid">
        <!-- 1. Homemaker in Pasupathipalayam -->
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Spin cycle-la clothes full-ah soak aagi water sottudhu"</span>
          </div>
          <p class="experience-body">
            "A homemaker near Pasupathipalayam noticed that their top load washing machine was completing the wash cycle, but the clothes remained soaking wet. Intha situation-la spin capacitor, drain pump motor, illana lid switch sensor check panna vendiyirukkalam. The technician inspected the machine and explained the required repair clearly."
          </p>
        </div>

        <!-- 2. Clinic near Trichy Road -->
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Clinic laundry use-la machine water edukkala, cycle stop aagidudhu"</span>
          </div>
          <p class="experience-body">
            "A small medical clinic near Trichy Road reported that their front load washing machine stopped taking water during the morning linen wash. The problem was related to a choked inlet valve filter and low water pressure. The technician cleaned the valve assembly and restored normal filling without replacing costly parts."
          </p>
        </div>

        <!-- 3. Healthcare facility on Kovai Road -->
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Heavy vibration and drum knocking sound during high speed spin"</span>
          </div>
          <p class="experience-body">
            "A healthcare facility on Kovai Road noticed excessive shaking and banging noise whenever their washing machine entered the high-speed spin cycle. Worn-out drum shock absorbers and an unlevel floor base were identified during the visit. The technician replaced the shock dampers and balanced the machine to prevent further cabinet damage."
          </p>
        </div>

        <!-- 4. Family in Kagithapuramam -->
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Washing machine-la water drain aagama error code kaatudhu"</span>
          </div>
          <p class="experience-body">
            "A family home in Kagithapuramam faced an issue where their fully automatic machine showed an E2 error and refused to drain dirty water. Coins and lint hair choked the drain pump filter. The technician opened the bottom drain chamber, removed the blockage, and verified normal drainage flow."
          </p>
        </div>

        <!-- 5. Apartment near Sengunthapuram -->
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Machine keela continuous-aa water leak aagi balcony nanayudhu"</span>
          </div>
          <p class="experience-body">
            "An apartment resident near Sengunthapuram noticed water leaking continuously from under their front load washing machine during rinse cycles. Inspection showed that the rubber door gasket seal had a small coin cut. The technician explained the seal price and replaced the door bellow to stop water leakage completely."
          </p>
        </div>

        <!-- 6. Student hostel near Kovai Road -->
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Machine on aagudhu, aana wash pulsator rotate aagala"</span>
          </div>
          <p class="experience-body">
            "A student hostel warden near Kovai Road contacted us because the semi-automatic washing machine hummed loudly, but the wash pulsator refused to turn with clothes inside. A worn-out motor drive belt and weak capacitor caused the problem. The technician fitted a fresh belt and capacitor after upfront price confirmation."
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 9. Major Supported Brands Section -->
  <section class="section section-bg-muted">
    <div class="container">
      <div class="section-header">
        <h2>Washing Machine Brands We Service in Karur</h2>
        <p>Technicians service compatible parts for all major domestic washing machine brands:</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-bottom: 2rem;">
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Samsung</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">LG</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Whirlpool</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">IFB</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Bosch</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Godrej</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Haier</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Panasonic</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Voltas Beko</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Lloyd</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Onida</span>
        <span style="background: #ffffff; color: var(--primary-color); font-weight: 700; padding: 0.6rem 1.25rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm); font-size: 0.95rem;">Siemens</span>
      </div>

      <div style="background: #ffffff; padding: 1.25rem; border-radius: 8px; font-size: 0.85rem; color: #64748b; text-align: center; max-width: 720px; margin: 0 auto; box-shadow: var(--shadow-sm);">
        <em>Disclaimer:</em> All brand names and trademarks belong to their respective owners and are mentioned strictly for appliance model compatibility and repair identification. We are an independent local appliance repair service in Karur.
      </div>
    </div>
  </section>

  <!-- 10. Washing Machine Locality SEO - 60 Genuine Localities -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Washing Machine Repair Coverage Across Karur areas (60 Localities)</h2>
        <p>Technician visits for front load, top load, and semi-automatic washing machines are available across these Karur localities:</p>
      </div>

      <div class="localities-grid-expanded">
${wmLocalitiesHtml}
      </div>
    </div>
  </section>

  <!-- 11. Detailed FAQs Section (Price matches tables) -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — Washing Machine Repair in Karur</h2>
        <p>Clear, direct answers to common questions about washing machine repair charges, parts, and doorstep visits:</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does washing machine repair cost in Karur?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Doorstep inspection is ₹249. Total repair cost depends on the specific fault found during physical inspection — such as drain cleaning (₹280–₹399), capacitor replacement (₹320–₹520), inlet valve replacement (₹520–₹760), or PCB component repair (₹760–₹1,160). The technician explains the exact price before starting work.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much is washing machine inspection or checkup?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Doorstep checkup is ₹249. A qualified technician visits your home in Karur, inspects the motor, electronic control board, drain system, and water valves, and provides a clear written estimate.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does washing machine installation cost?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Top load and semi-automatic machine installation is ₹399. Front load machine installation is ₹549 (including transit bolt removal, level alignment, water tap adapter, and drain hose setup).
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does washing machine uninstallation cost?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Uninstallation costs between ₹279 and ₹349 when moving or shifting houses, including draining water completely and securing internal transit bolts safely.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does PCB repair cost?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Component-level PCB circuit repair costs between ₹760 and ₹1,160. For inverter direct drive motor controller boards, service charges range from ₹1,120 to ₹1,680.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does motor replacement cost?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Semi-automatic wash motor replacement costs between ₹1,120 and ₹1,560, while spin motors range from ₹1,080 to ₹1,520. Fully automatic main drive motor service ranges from ₹1,760 to ₹2,560.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is my washing machine not draining water?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Water drainage issues are typically caused by coins, hairpins, or lint choking the bottom drain pump filter. In other cases, a cracked drain bellow or burnt drain motor impeller may need replacement (₹280–₹1,040).
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is my washing machine shaking violently during spin?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Excessive vibration occurs when suspension damper rods weaken on top load washers or shock absorbers wear out on front load machines. The technician inspects the shock dampers (₹599–₹1,080) and checks machine floor leveling.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is my washing machine making a loud roaring noise?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            A loud jet plane roar during the spin cycle indicates worn tub ball bearings and broken oil seals. Replacing the heavy-duty tub bearings and waterproof rubber seal costs between ₹880 and ₹1,320.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does door lock replacement cost on front load washers?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Front load bi-metal door interlock switch replacement costs between ₹599 and ₹920. This fixes door not latching, dE error codes, and doors stuck locked after washing.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Do you repair semi-automatic twin tub washing machines?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes. Technicians repair all semi-automatic problems including spin tub vibration, wash motor hum, timer failure, gear coupler wear, and drain valve water leakage.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Can the technician confirm the price before fitting spare parts?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, absolutely. The technician performs a thorough physical checkup, clearly explains the cause of the problem, and gives you the exact cost before starting any repair or replacing any part.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 12. Internal Links to Other Appliances -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Explore Other Appliance Services in Karur</h2>
        <p>In addition to washing machine repairs, our technicians assist with other major home appliances:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
        <a href="ac-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.5rem;">AC Repair & Service</h3>
          <p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.75rem;">Split & window AC doorstep repair, cooling issues, jet wash cleaning, and gas charging across Karur.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue);">View AC Service →</span>
        </a>
        <a href="refrigerator-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.5rem;">Refrigerator Repair</h3>
          <p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.75rem;">Single door, double door & inverter fridge cooling troubleshooting, compressor repair, and gas filling.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue);">View Fridge Service →</span>
        </a>
        <a href="tv-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.5rem;">TV Repair & Service</h3>
          <p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.75rem;">LED, LCD & Smart TV screen backlighting repair, no sound, power board repair, and motherboard service.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue);">View TV Service →</span>
        </a>
        <a href="microwave-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.5rem;">
          <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 0.5rem;">Microwave Oven Repair</h3>
          <p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.75rem;">Solo, grill & convection microwave oven not heating, sparking, turntable motor, and keypad touch repair.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue);">View Microwave Service →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="section" style="background: linear-gradient(135deg, var(--primary-color) 0%, #0f172a 100%); color: #ffffff; text-align: center; padding: 3.5rem 1rem;">
    <div class="container" style="max-width: 720px;">
      <h2 style="color: #ffffff; font-size: 2rem; margin-bottom: 1rem;">Book Doorstep Washing Machine Service in Karur</h2>
      <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">
        Get your washing machine checked by a local technician in Karur. Upfront price estimates, genuine parts, and reliable service at your doorstep.
      </p>
      <div class="final-cta-buttons">
        <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
          <span>Chat on WhatsApp</span>
        </a>
        <a href="tel:+919442054321" class="btn-primary-call sync-call">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>Call +91 94420 54321</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <div class="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <div class="brand-title">
              <span class="brand-name">Service Center Karur</span>
              <span class="brand-loc">Local Appliance Care</span>
            </div>
          </div>
          <p class="footer-desc">
            Independent local doorstep appliance repair service in Karur, Tamil Nadu. Fast technician inspection for washing machines, air conditioners, refrigerators, LED TVs, and microwaves.
          </p>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Appliance Services</h4>
          <ul class="footer-links">
            <li><a href="ac-repair-service-in-karur.html">AC Repair Service</a></li>
            <li><a href="refrigerator-repair-service-in-karur.html">Refrigerator Repair Service</a></li>
            <li><a href="washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>
            <li><a href="tv-repair-service-in-karur.html">TV Repair Service</a></li>
            <li><a href="microwave-repair-service-in-karur.html">Microwave Oven Repair</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Service Coverage</h4>
          <ul class="footer-links">
            <li><a href="#pricingSection">Washing Machine Pricing</a></li>
            <li><a href="#faqSection">Washing Machine FAQs</a></li>
            <li><a href="index.html">All Service Areas in Karur</a></li>
            <li><a href="tel:+919442054321">Call Karur Desk: 94420 54321</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Service Hub</h4>
          <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin-bottom: 0.75rem;">
            📍 Main Road, Kagithapuramam & Pasupathipalayam, Karur, Tamil Nadu 639001
          </p>
          <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.6;">
            📞 <a href="tel:+919442054321" class="sync-call" style="color: #cbd5e1; text-decoration: none;">+91 94420 54321</a>
          </p>
        </div>
      </div>

      <div class="footer-disclaimer">
        <strong>Important Customer Notice & Disclaimer:</strong><br>
        Service availability, repair cost, and parts requirement depend on the machine model and issue found during inspection. Brand names are used only for identification of compatible appliances and do not imply official brand authorization unless specifically stated.
      </div>

      <div class="footer-copy">
        <div>© 2026 servicecenterkarur.com — Local Home Appliance Repair in Karur.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Viewport Floating CTA (Fixed at ~55vh from page load - Left: WhatsApp, Right: Call Now) -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar (Rule 1: LEFT = WhatsApp | RIGHT = Call Now) -->
  <div class="mobile-bottom-bar">
    <a href="https://wa.me/919442054321?text=Hello%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Karur.%20Please%20share%20technician%20visit%20details." class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919442054321" class="bottom-bar-btn bottom-bar-call sync-call">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <script src="js/config.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
`;

const targetPath = path.join(__dirname, '..', 'washing-machine-repair-service-in-karur.html');
fs.writeFileSync(targetPath, html, 'utf8');
console.log("Successfully built and saved washing-machine-repair-service-in-karur.html");
