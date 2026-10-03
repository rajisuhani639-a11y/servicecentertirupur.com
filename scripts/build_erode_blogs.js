// scripts/build_erode_blogs.js
// Builds 12 humanized, Erode-specific appliance repair blogs + /blog/index.html.
// Strictly adheres to all user instructions:
// - Simple Indian English
// - Natural Tamil-English / Tanglish in selected sections
// - Erode-specific local references (Gandhipuram, Perundurai Road, VOC Street, etc.)
// - Appliance-specific problems + actual existing brand mentions
// - Short paragraphs, easy words, helpful practical information
// - Zero heavy corporate buzzwords
// - Full internal linking to existing valid URLs
// - SEO meta, OpenGraph, Canonical, Breadcrumbs, and Schema.org FAQPage

const fs = require('fs');
const path = require('path');

// Ensure /blog directory exists
if (!fs.existsSync('blog')) {
  fs.mkdirSync('blog');
}

const siteUrl = 'https://servicecentereode.com';
const phone = '+91 92115 12088';
const phoneClean = '+919211512088';

// Header component for blog pages (links relative to /blog/)
function getBlogHeader(activeSlug) {
  return `<!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Erode Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center Erode</span>
          <span class="brand-loc">Local Appliance Care</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../servicecenter/home-appliance-service-center-erode.html" class="nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>
        <a href="../ac/ac-repair-service-in-erode.html">AC Repair</a>
        <a href="../fridge/refrigerator-repair-service-in-erode.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-erode.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-erode.html">TV Repair</a>
        <a href="index.html" class="active">Guides</a>
        <a href="../sitemap.html" class="nav-mobile-only">Sitemap</a>
      </nav>

      <div class="header-actions">
        <a href="tel:${phoneClean}" class="btn-header-call sync-call" title="Call technician now">
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
  </header>`;
}

// Footer component for blog pages
function getBlogFooter() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Service Center Erode</h4>
          <p>
            Local doorstep repair and inspection service for home appliances across Erode, Tamil Nadu. Fast coordination, technician visit, and transparent guidance.
          </p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Mettur Road, Municipal Colony, Erode, Tamil Nadu 638011</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Phone: +91 92115 12088</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Repair Services</h4>
          <ul class="footer-links">
            <li><a href="../servicecenter/home-appliance-service-center-erode.html">All Service Center Brands</a></li>
            <li><a href="../ac/ac-repair-service-in-erode.html">AC Repair & Service</a></li>
            <li><a href="../fridge/refrigerator-repair-service-in-erode.html">Refrigerator / Fridge Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-erode.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-erode.html">TV Repair & Service</a></li>
            <li><a href="index.html">Appliance Repair Guides</a></li>
            <li><a href="../sitemap.html">Sitemap</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Erode Coverage</h4>
          <ul class="footer-links">
            <li><a href="../index.html#localitiesSection">Thindal & Perundurai Road</a></li>
            <li><a href="../index.html#localitiesSection">Sampath Nagar & Teachers Colony</a></li>
            <li><a href="../index.html#localitiesSection">Veerappanchatram & Periyasemur</a></li>
            <li><a href="../index.html#localitiesSection">Surampatti, Kasipalayam & Solar</a></li>
            <li><a href="../index.html#localitiesSection">Bhavani, Chithode & B.P. Agraharam</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Timings</h4>
          <p>
            Monday to Sunday<br>
            <strong>6:00 AM – 11:00 PM</strong>
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
        <div>© 2026 servicecentereode.com — Local Home Appliance Repair in Erode.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>`;
}

// Common script tags
const commonScripts = `
  <script src="../js/main.js" defer></script>
`;

console.log('Building 12 Blog Articles...');
