const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Banned buzzwords validator
const BANNED_WORDS = [
  'promptly', 'comprehensive', 'facilitate', 'utilize', 'undertake',
  'meticulous', 'seamless', 'robust', 'tailored', 'advanced troubleshooting',
  'technical intervention', 'diagnostic assessment', 'efficient resolution',
  'professional expertise'
];

function checkBuzzwords(text, blogName) {
  const lower = text.toLowerCase();
  for (const word of BANNED_WORDS) {
    if (lower.includes(word)) {
      console.warn(`[WARNING] "${word}" found in ${blogName}`);
    }
  }
}

// Common Header Generator
function getHeader(activeTab = 'blog') {
  return `  <!-- Site Header -->
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

      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../servicecenter/home-appliance-service-center-erode.html" class="nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>
        <a href="../ac/ac-repair-service-in-erode.html">AC Repair</a>
        <a href="../fridge/refrigerator-repair-service-in-erode.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-erode.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-erode.html">TV Repair</a>
        <a href="index.html" class="${activeTab === 'blog' ? 'active' : ''}">Blog</a>
        <a href="../sitemap.html" class="nav-mobile-only">Sitemap</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+919211512088" class="btn-header-call sync-call" title="Call technician now">
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
  <div class="nav-backdrop" id="navBackdrop"></div>`;
}

// Common Footer Generator
function getFooter() {
  return `  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand-logo footer-logo">
            <div class="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <div class="brand-title">
              <span class="brand-name">Service Center Erode</span>
              <span class="brand-loc">Local Appliance Care</span>
            </div>
          </div>
          <p class="footer-tagline">Doorstep home appliance inspection and repair service across Erode neighborhoods. Fast visits, verified local technicians, and honest pricing.</p>
        </div>

        <div class="footer-nav-col">
          <h4>Repair Services</h4>
          <ul>
            <li><a href="../ac/ac-repair-service-in-erode.html">AC Repair Service</a></li>
            <li><a href="../fridge/refrigerator-repair-service-in-erode.html">Refrigerator Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-erode.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-erode.html">LED TV Repair</a></li>
            <li><a href="../servicecenter/home-appliance-service-center-erode.html">Home Appliance Service</a></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <h4>Helpful Guides</h4>
          <ul>
            <li><a href="air-conditioner-not-cooling-in-erode.html">AC Not Cooling in Erode</a></li>
            <li><a href="refrigerator-not-cooling-in-erode.html">Fridge Cooling Problems</a></li>
            <li><a href="washing-machine-not-draining-in-erode.html">Washing Machine Not Draining</a></li>
            <li><a href="tv-screen-black-sound-working-in-erode.html">TV Black Screen Fix</a></li>
            <li><a href="appliance-repair-cost-guide-in-erode.html">Repair Cost Guide Erode</a></li>
            <li><a href="index.html">All 12 Erode Blog Guides</a></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <h4>Customer Desk</h4>
          <p style="font-size:0.88rem; color: #94a3b8; margin-bottom: 0.5rem;">Doorstep service across Erode:</p>
          <p style="font-size:0.95rem; font-weight:700; color: #fff; margin-bottom: 0.75rem;">+91 92115 12088</p>
          <p style="font-size:0.85rem; color: #94a3b8;">Mon–Sun: 8:00 AM – 8:30 PM</p>
          <div style="margin-top: 0.85rem;">
            <a href="../sitemap.html" style="color: var(--accent-blue); font-size: 0.85rem;">Complete Sitemap</a>
          </div>
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
  </footer>

  <!-- Scroll-Based Floating CTA -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20Erode.%20Please%20share%20technician%20visit%20details." class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919211512088" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar (Rule 1: LEFT = WhatsApp | RIGHT = Call Now) -->
  <div class="mobile-bottom-bar">
    <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20Erode.%20Please%20share%20technician%20visit%20details." class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919211512088" class="bottom-bar-btn bottom-bar-call sync-call">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <script src="../js/config.js"></script>
  <script src="../js/main.js"></script>`;
}

module.exports = {
  ROOT_DIR,
  BLOG_DIR,
  checkBuzzwords,
  getHeader,
  getFooter
};
