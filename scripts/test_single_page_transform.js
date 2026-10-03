// scripts/test_single_page_transform.js
// Tests the full Erode transformation on a single page and verifies 0 Coimbatore remaining.

const fs = require('fs');
const path = require('path');
const { renderLocalitiesSection } = require('./render_erode_localities.js');
const { renderExperiencesSection } = require('./render_erode_experiences.js');
const { renderFaqSection, generateFaqSchema } = require('./render_erode_faqs.js');

const masterFaqs = JSON.parse(fs.readFileSync('./scripts/erode_master_faqs.json', 'utf8'));
const allExperiences = JSON.parse(fs.readFileSync('./scripts/erode_unique_experiences.json', 'utf8'));
const heroIntros = JSON.parse(fs.readFileSync('./scripts/erode_hero_intros.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('./scripts/erode_pages_data.json', 'utf8'));

// Build all 54 brand links for footer
const brandsInfo = require('./data_brands_info.js');
const footerBrandGridHtml = brandsInfo.map(b => `<a href="/servicecenter/${b.slug}-service-center-erode.html">${b.name} Service Center Erode</a>`).join('\n          ');

const footerCoverageHtml = `        <div class="footer-col">
          <h4>Erode Coverage</h4>
          <ul class="footer-links">
            <li><a href="#localitiesSection">Thindal & Perundurai Road</a></li>
            <li><a href="#localitiesSection">Sampath Nagar & Teachers Colony</a></li>
            <li><a href="#localitiesSection">Veerappanchatram & Periyasemur</a></li>
            <li><a href="#localitiesSection">Surampatti, Kasipalayam & Solar</a></li>
            <li><a href="#localitiesSection">Bhavani, Chithode & B.P. Agraharam</a></li>
          </ul>
        </div>`;

const erodeMapSectionHtml = `  <!-- Service Center Erode Location & Google Map Section -->
  <section class="service-center-map-section" id="service-center-location">
    <div class="container">
      <div class="sc-map-card">
        <div class="sc-map-info">
          <div class="sc-badge">Erode Service Center</div>
          <h3>Service Center Erode</h3>
          <p class="sc-address">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span><strong>Address:</strong> 1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios, Erode, Tamil Nadu – 638011, India</span>
          </p>
          <p class="sc-timing">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
            <span><strong>Working Hours:</strong> 6:00 AM – 11:00 PM (Monday – Sunday)</span>
          </p>
          <p class="sc-desc">
            Doorstep home appliance repair and technical support across all residential and commercial localities in Erode.
          </p>
          <div class="sc-actions">
            <a href="tel:+919211512088" class="btn-primary-call sync-call">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Call: +91 92115 12088</span>
            </a>
            <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20home%20appliance%20repair%20service%20in%20Erode." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        <div class="sc-map-frame-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=1167%2C%20Ground%20Floor%2C%20Muthaiya%20Complex%2C%20Mettur%20Road%2C%20Opposite%20GV%20Audios%2C%20Erode%2C%20Tamil%20Nadu%20638011&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service Center Erode Location Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>`;

function transformHtmlPage(p, pageIndex) {
  let content = fs.readFileSync(p.oldFile, 'utf8');

  // 1. Google Tag: exactly G-15NKBXETXP
  content = content.replace(/<!-- Google tag[\s\S]*?gtag\('config',\s*'G-[^']+'\);\s*<\/script>/i, `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-15NKBXETXP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-15NKBXETXP');
</script>`);

  // 2. Canonicals and OpenGraph URLs
  content = content.replace(/https:\/\/servicecentercoimbatore\.com/g, 'https://servicecentereode.com');
  content = content.replace(/-coimbatore\.html/g, '-erode.html');

  content = content.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${p.canonical}"`);
  content = content.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${p.canonical}"`);
  content = content.replace(/<meta property="og:site_name" content="[^"]*"/i, `<meta property="og:site_name" content="Service Center Erode"`);

  // 3. Title & Meta Description
  content = content.replace(/<title>([\s\S]*?)<\/title>/i, (m, t) => `<title>${t.replace(/Coimbatore/gi, 'Erode')}</title>`);
  content = content.replace(/<meta name="description" content="([^"]*)"/i, (m, d) => `<meta name="description" content="${d.replace(/Coimbatore/gi, 'Erode')}">`);
  content = content.replace(/<meta property="og:title" content="([^"]*)"/i, (m, t) => `<meta property="og:title" content="${t.replace(/Coimbatore/gi, 'Erode')}">`);
  content = content.replace(/<meta property="og:description" content="([^"]*)"/i, (m, d) => `<meta property="og:description" content="${d.replace(/Coimbatore/gi, 'Erode')}">`);

  // 4. LocalBusiness Schema
  content = content.replace(/"streetAddress":\s*"[^"]*"/gi, '"streetAddress": "1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios"');
  content = content.replace(/"addressLocality":\s*"[^"]*"/gi, '"addressLocality": "Erode"');
  content = content.replace(/"postalCode":\s*"[^"]*"/gi, '"postalCode": "638011"');
  content = content.replace(/"latitude":\s*[0-9.]+/gi, '"latitude": 11.3480');
  content = content.replace(/"longitude":\s*[0-9.]+/gi, '"longitude": 77.7190');
  content = content.replace(/("url":\s*")https:\/\/[^"]*(")/gi, `$1${p.canonical}$2`);

  // 5. FAQPage Schema
  if (masterFaqs[p.newFile]) {
    const faqSchemaHtml = generateFaqSchema(masterFaqs[p.newFile]);
    content = content.replace(/<script type="application\/ld\+json">[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>/i, faqSchemaHtml);
  }

  // 6. Hero Lead
  if (heroIntros[p.newFile]) {
    const newLead = heroIntros[p.newFile].lead;
    content = content.replace(/<p class="hero-(?:lead|copy)">[\s\S]*?<\/p>/i, `<p class="hero-lead">${newLead}</p>`);
  }

  // 7. Localities Section
  const newLocalitiesHtml = renderLocalitiesSection(p, pageIndex);
  content = content.replace(/<section class="section" id="localitiesSection"[\s\S]*?<\/section>/i, newLocalitiesHtml);

  // 8. Customer Experiences Section
  const expCards = allExperiences[p.newFile] || [];
  const newExpHtml = renderExperiencesSection(p, expCards);
  content = content.replace(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i, newExpHtml);

  // 9. FAQ Section
  if (masterFaqs[p.newFile]) {
    const newFaqHtml = renderFaqSection(p, masterFaqs[p.newFile]);
    content = content.replace(/<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>/i, newFaqHtml);
  }

  // 10. Map & Location Section
  content = content.replace(/<!-- Service Center (?:Coimbatore|Karur|Location)[\s\S]*?<\/section>/i, erodeMapSectionHtml);
  content = content.replace(/<section class="service-center-map-section" id="service-center-location">[\s\S]*?<\/section>/i, erodeMapSectionHtml);

  // 11. Footer Brand Grid
  content = content.replace(/<div class="footer-brand-grid">[\s\S]*?<\/div>/i, `<div class="footer-brand-grid">\n          ${footerBrandGridHtml}\n        </div>`);
  content = content.replace(/<h4>Brand Service Centers in Coimbatore<\/h4>/gi, '<h4>Brand Service Centers in Erode</h4>');

  // 12. Footer Coverage Links
  content = content.replace(/<div class="footer-col">\s*<h4>Coimbatore Coverage<\/h4>[\s\S]*?<\/div>/i, footerCoverageHtml);

  // 13. Footer Address & Description
  content = content.replace(/<h4>Service Center Coimbatore<\/h4>/gi, '<h4>Service Center Erode</h4>');
  content = content.replace(/<span>273,\s*PRS\s*Pandian\s*Complex[^\n<]*<\/span>/gi, '<span>1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios, Erode, Tamil Nadu – 638011, India</span>');
  content = content.replace(/273,\s*PRS\s*Pandian\s*Complex[^\n<",]*/gi, '1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios, Erode, Tamil Nadu – 638011');
  content = content.replace(/<div>©\s*2026\s*servicecentercoimbatore\.com[^<]*<\/div>/gi, '<div>© 2026 servicecentereode.com — Local Home Appliance Repair in Erode.</div>');

  // 14. Header Logo & Brand Text
  content = content.replace(/title="Service Center Coimbatore Homepage"/gi, 'title="Service Center Erode Homepage"');
  content = content.replace(/<span class="brand-name">Service Center Coimbatore<\/span>/gi, '<span class="brand-name">Service Center Erode</span>');

  // 15. Global Text Cleanups:
  // Replace old roads and neighbourhoods
  const localityReplacements = [
    { from: /Gandhipuram/gi, to: 'Thindal' },
    { from: /Peelamedu/gi, to: 'Perundurai Road' },
    { from: /RS Puram|R\.S\.\s*Puram/gi, to: 'Sampath Nagar' },
    { from: /Singanallur/gi, to: 'Surampatti' },
    { from: /Saravanampatti/gi, to: 'Veerappanchatram' },
    { from: /Saibaba Colony/gi, to: 'Teachers Colony' },
    { from: /Vadavalli/gi, to: 'Bhavani' },
    { from: /Ramanathapuram/gi, to: 'Solar' },
    { from: /Ganapathy/gi, to: 'Chithode' },
    { from: /Thudiyalur/gi, to: 'Periyasemur' },
    { from: /Kovaipudur/gi, to: 'Kasipalayam' },
    { from: /Kuniyamuthur/gi, to: 'Kollampalayam' },
    { from: /Sundarapuram/gi, to: 'Moolapalayam' },
    { from: /Podanur/gi, to: 'Chennimalai Road' },
    { from: /Ukkadam/gi, to: 'Brough Road' },
    { from: /Kalapatti/gi, to: 'Nasiyanur' },
    { from: /Ondipudur/gi, to: 'Villarasampatti' },
    { from: /Sulur/gi, to: 'Perundurai' },
    { from: /Irugur/gi, to: 'Karungalpalayam' },
    { from: /Avinashi Road/gi, to: 'Perundurai Road' },
    { from: /Trichy Road/gi, to: 'Chennimalai Road' },
    { from: /Mettupalayam Road/gi, to: 'Sathy Road' },
    { from: /Sathy Road Coimbatore/gi, to: 'Sathy Road Erode' },
    { from: /Coimbatore/g, to: 'Erode' },
    { from: /coimbatore/g, to: 'erode' },
    { from: /COIMBATORE/g, to: 'ERODE' }
  ];

  localityReplacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // 16. Remove AI Buzzwords:
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

const testP = pages.find(p => p.brandSlug === 'samsung' && p.category === 'service-center');
const result = transformHtmlPage(testP, 1);
const remaining = (result.match(/Coimbatore/gi) || []).length;
console.log('Test Samsung SC transform complete. Remaining Coimbatore:', remaining);

if (remaining > 0) {
  const lines = result.split('\n');
  lines.forEach((l, i) => {
    if (/Coimbatore/i.test(l)) {
      console.log(`Line ${i + 1}: ${l.trim().slice(0, 100)}`);
    }
  });
}
