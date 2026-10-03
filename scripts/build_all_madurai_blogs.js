// scripts/build_all_madurai_blogs.js
// Generates all 12 localized Madurai blog pages and blog/index.html.
// Replaces old *-erode.html files with clean *-madurai.html files.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const b1 = require('./blogs_data_1_to_4');
const b2 = require('./blogs_data_5_to_8');
const b3 = require('./blogs_data_9_to_12');

const rawBlogs = [...b1, ...b2, ...b3];

// Transform blog data from Erode to Madurai
const ALL_BLOGS = rawBlogs.map(b => {
  const jsonStr = JSON.stringify(b);
  const transformedStr = jsonStr
    .replace(/-erode\.html/g, '-madurai.html')
    .replace(/-in-erode\.html/g, '-in-madurai.html')
    .replace(/https:\/\/servicecentereode\.com/g, 'https://servicecentermadurai.com')
    .replace(/Service Center Erode/g, 'Service Center Madurai')
    .replace(/Erode/g, 'Madurai')
    .replace(/erode/g, 'madurai')
    .replace(/ERODE/g, 'MADURAI')
    .replace(/638011/g, '625001')
    .replace(/Thindal/g, 'Anna Nagar')
    .replace(/Perundurai Road/g, 'KK Nagar')
    .replace(/Sampath Nagar/g, 'Tallakulam')
    .replace(/Teachers Colony/g, 'Goripalayam')
    .replace(/Veerappanchatram/g, 'Mattuthavani')
    .replace(/Periyasemur/g, 'Sellur')
    .replace(/Surampatti/g, 'Kalavasal')
    .replace(/Kasipalayam/g, 'Ponmeni')
    .replace(/Bhavani/g, 'Kochadai')
    .replace(/Chithode/g, 'Thirunagar')
    .replace(/Solar/g, 'Villapuram')
    .replace(/Kollampalayam/g, 'Palanganatham')
    .replace(/Moolapalayam/g, 'TVS Nagar')
    .replace(/Karungalpalayam/g, 'Jaihindpuram')
    .replace(/Chennimalai Road/g, 'Bypass Road')
    .replace(/Brough Road/g, 'Alagar Kovil Road');

  const obj = JSON.parse(transformedStr);
  return {
    ...obj,
    oldSlug: b.slug,
    slug: b.slug.replace(/-erode\.html$/, '-madurai.html').replace(/-in-erode\.html$/, '-in-madurai.html')
  };
});

console.log(`Loaded and transformed ${ALL_BLOGS.length} blogs for Madurai.`);

// Map for quick slug lookup
const blogMap = {};
ALL_BLOGS.forEach(b => { blogMap[b.slug] = b; });

// Common Header
function getHeader(activeTab = 'blog') {
  return `  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" title="Service Center Madurai Homepage">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <div class="brand-title">
          <span class="brand-name">Service Center Madurai</span>
          <span class="brand-loc">Local Appliance Care</span>
        </div>
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="../servicecenter/home-appliance-service-center-madurai.html" class="nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>
        <a href="../ac/ac-repair-service-in-madurai.html">AC Repair</a>
        <a href="../fridge/refrigerator-repair-service-in-madurai.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-madurai.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-madurai.html">TV Repair</a>
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

// Common Footer
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
              <span class="brand-name">Service Center Madurai</span>
              <span class="brand-loc">Local Appliance Care</span>
            </div>
          </div>
          <p class="footer-tagline">Doorstep home appliance inspection and repair service across Madurai neighborhoods. Fast visits, verified local technicians, and honest pricing.</p>
        </div>

        <div class="footer-nav-col">
          <h4>Repair Services</h4>
          <ul>
            <li><a href="../ac/ac-repair-service-in-madurai.html">AC Repair Service</a></li>
            <li><a href="../fridge/refrigerator-repair-service-in-madurai.html">Refrigerator Repair</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-in-madurai.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-in-madurai.html">LED TV Repair</a></li>
            <li><a href="../servicecenter/home-appliance-service-center-madurai.html">Home Appliance Service</a></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <h4>Helpful Guides</h4>
          <ul>
            <li><a href="air-conditioner-not-cooling-in-madurai.html">AC Not Cooling in Madurai</a></li>
            <li><a href="refrigerator-not-cooling-in-madurai.html">Fridge Cooling Problems</a></li>
            <li><a href="washing-machine-not-draining-in-madurai.html">Washing Machine Not Draining</a></li>
            <li><a href="tv-screen-black-sound-working-in-madurai.html">TV Black Screen Fix</a></li>
            <li><a href="appliance-repair-cost-guide-in-madurai.html">Repair Cost Guide Madurai</a></li>
            <li><a href="index.html">All 12 Madurai Blog Guides</a></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <h4>Customer Desk</h4>
          <p style="font-size:0.88rem; color: #94a3b8; margin-bottom: 0.5rem;">Doorstep service across Madurai:</p>
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
        <div>© 2026 servicecentermadurai.com — Local Home Appliance Repair in Madurai.</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Scroll-Based Floating CTA -->
  <div class="scroll-floating-cta" id="scrollFloatingCTA">
    <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20Madurai.%20Please%20share%20technician%20visit%20details." class="floating-left-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919211512088" class="floating-right-call sync-call" title="Call local technician">
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call Now</span>
    </a>
  </div>

  <!-- Mobile Fixed Bottom Bar -->
  <div class="mobile-bottom-bar">
    <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20Madurai.%20Please%20share%20technician%20visit%20details." class="bottom-bar-btn bottom-bar-whatsapp sync-whatsapp" target="_blank" rel="noopener noreferrer">
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

// Generate Individual Blog Pages
ALL_BLOGS.forEach(blog => {
  const canonicalUrl = `https://servicecentermadurai.com/blog/${blog.slug}`;
  const whatsappUrl = `https://wa.me/919211512088?text=${encodeURIComponent(`Hello, I read your article "${blog.title}". I need appliance repair help in Madurai.`)}`;

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://servicecentermadurai.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://servicecentermadurai.com/blog/index.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": canonicalUrl
      }
    ]
  };

  // BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDesc,
    "url": canonicalUrl,
    "datePublished": "2026-10-02T10:00:00+05:30",
    "dateModified": "2026-10-03T10:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Service Center Madurai Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Service Center Madurai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://servicecentermadurai.com/favicon-192x192.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  // Build Sections HTML
  const sectionsHtml = blog.sections.map(s => `
        <div class="guide-block">
          <h2>${s.heading}</h2>
          ${s.paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('\n          ')}
        </div>`).join('\n');

  // Build Practical Checks HTML
  const practicalChecksHtml = blog.practicalChecks.map(c => `
            <div class="step-checklist-item">
              <div class="step-number">✓</div>
              <div class="step-body">
                <h4>${c.title}</h4>
                <p>${c.detail}</p>
              </div>
            </div>`).join('\n');

  // Build When to Call HTML
  const whenToCallHtml = blog.whenToCall.map(w => `<li>${w}</li>`).join('\n            ');

  // Build Brand Links HTML
  const brandPillsHtml = blog.brands.map(b => `<a href="${b.url.replace(/-erode\.html$/, '-madurai.html').replace(/-in-erode\.html$/, '-in-madurai.html')}" class="brand-pill">${b.name}</a>`).join('\n            ');

  // Build Cost Guidance HTML
  const costGuidanceHtml = blog.costGuidance.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('\n          ');

  // Build FAQ Accordion HTML
  const faqsHtml = blog.faqs.map(f => `
            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span>${f.q}</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer">
                ${f.a}
              </div>
            </div>`).join('\n');

  // Build Related Guides HTML
  const relatedGuidesHtml = blog.relatedSlugs.map(slug => {
    const targetSlug = slug.replace(/-erode\.html$/, '-madurai.html').replace(/-in-erode\.html$/, '-in-madurai.html');
    const rel = blogMap[targetSlug] || blogMap[slug];
    if (!rel) return '';
    return `
          <div class="blog-card">
            <div>
              <div class="blog-card-meta">
                <span class="blog-card-tag">${rel.category}</span>
                <span class="blog-card-time">${rel.readTime}</span>
              </div>
              <h3><a href="${rel.slug}">${rel.title}</a></h3>
              <p>${rel.summary}</p>
            </div>
            <a href="${rel.slug}" class="blog-card-link">Read Full Guide →</a>
          </div>`;
  }).join('\n');

  const pageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-15NKBXETXP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-15NKBXETXP');
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${blog.metaTitle}</title>
  <meta name="description" content="${blog.metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${blog.metaTitle}">
  <meta property="og:description" content="${blog.metaDesc}">
  <meta property="og:site_name" content="Service Center Madurai">

  <!-- Favicon System -->
  <link rel="icon" type="image/x-icon" href="../favicon.ico">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">

  <!-- Google Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
${JSON.stringify(blogPostingSchema, null, 2)}
  </script>
  <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

${getHeader('blog')}

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li><a href="index.html">Blog</a></li>
        <li aria-current="page">${blog.title}</li>
      </ol>
    </div>
  </div>

  <!-- Blog Article Container -->
  <main class="blog-article-wrapper">
    <div class="container">
      <article class="blog-article">
        <!-- Article Header -->
        <header class="blog-header">
          <div class="blog-meta-top">
            <span class="blog-category-badge">${blog.category}</span>
            <span class="blog-read-time">${blog.readTime}</span>
            <span class="blog-date">Updated: October 2026</span>
          </div>
          <h1>${blog.title}</h1>
          <p class="blog-summary-lead">${blog.summary}</p>
        </header>

        <!-- Main Body Sections -->
        <div class="blog-content">
${sectionsHtml}

          <!-- Practical Checks Callout -->
          <div class="step-checklist-card">
            <h3>Quick Diagnostic Checklist (Check Before Calling)</h3>
            <div class="step-checklist-grid">
${practicalChecksHtml}
            </div>
          </div>

          <!-- When to Call Professional -->
          <div class="when-to-call-card">
            <h3>When to Call a Professional Technician in Madurai</h3>
            <ul class="checklist-items">
            ${whenToCallHtml}
            </ul>
          </div>

          <!-- Brand Specific Repair Links -->
          <div class="brand-coverage-card">
            <h3>Brand-Specific Repair Guidance in Madurai</h3>
            <p>Our Madurai doorstep technicians repair all major household brands with authentic replacement parts:</p>
            <div class="brand-pill-grid">
            ${brandPillsHtml}
            </div>
          </div>

          <!-- Cost Guidance -->
          <div class="cost-guidance-card">
            <h3>Repair Cost & Visiting Charge Guidance</h3>
            ${costGuidanceHtml}
          </div>

          <!-- In-Article CTAs -->
          <div class="article-cta-box">
            <h3>Need In-Person Appliance Help in Madurai?</h3>
            <p>Connect directly with our local customer desk for doorstep technician availability in Anna Nagar, KK Nagar, Tallakulam, Mattuthavani, Sellur, and surrounding areas.</p>
            <div class="article-cta-actions">
              <a href="tel:+919211512088" class="btn-primary-call sync-call">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span>Call: +91 92115 12088</span>
              </a>
              <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          <!-- Frequently Asked Questions -->
          <div class="blog-faq-section">
            <h3>Frequently Asked Questions</h3>
            <div class="faq-list">
${faqsHtml}
            </div>
          </div>
        </div>
      </article>

      <!-- Related Guides Sidebar / Bottom Section -->
      <section class="related-guides-section">
        <h2>Related Appliance Troubleshooting Guides</h2>
        <div class="blog-grid">
${relatedGuidesHtml}
        </div>
      </section>
    </div>
  </main>

${getFooter()}

</body>
</html>`;

  // Write new file
  const newFilePath = path.join(BLOG_DIR, blog.slug);
  fs.writeFileSync(newFilePath, pageHtml, 'utf8');

  // If old file was different, remove it
  if (blog.oldSlug && blog.oldSlug !== blog.slug) {
    const oldFilePath = path.join(BLOG_DIR, blog.oldSlug);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath);
    }
  }

  console.log(`✓ Generated blog: ${blog.slug}`);
});

// Generate blog/index.html
function buildBlogIndex() {
  const canonicalUrl = `https://servicecentermadurai.com/blog/index.html`;

  const cardsHtml = ALL_BLOGS.map(blog => `
        <div class="blog-card">
          <div>
            <div class="blog-card-meta">
              <span class="blog-card-tag">${blog.category}</span>
              <span class="blog-card-time">${blog.readTime}</span>
            </div>
            <h3><a href="${blog.slug}">${blog.title}</a></h3>
            <p>${blog.summary}</p>
          </div>
          <a href="${blog.slug}" class="blog-card-link">Read Full Guide →</a>
        </div>`).join('\n');

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-15NKBXETXP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-15NKBXETXP');
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appliance Repair Guides & Troubleshooting Tips — Madurai</title>
  <meta name="description" content="Helpful home appliance repair guides and troubleshooting tips for AC, refrigerator, washing machine and TV in Madurai. Expert doorstep technician advice.">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="Appliance Repair Guides & Troubleshooting Tips — Madurai">
  <meta property="og:description" content="Expert doorstep repair guides and maintenance tips for AC, washing machines, refrigerators, and TVs in Madurai.">
  <meta property="og:site_name" content="Service Center Madurai">

  <!-- Favicon System -->
  <link rel="icon" type="image/x-icon" href="../favicon.ico">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">

  <!-- Google Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

${getHeader('blog')}

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li aria-current="page">Blog & Troubleshooting Guides</li>
      </ol>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="section" style="padding: 2.5rem 0 1.5rem;">
    <div class="container">
      <div class="section-header" style="text-align: left; max-width: 800px; margin-bottom: 2rem;">
        <span class="badge" style="background: rgba(30, 58, 138, 0.08); color: var(--accent-blue); padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 600; font-size: 0.82rem; text-transform: uppercase;">Knowledge Hub</span>
        <h1 style="font-size: 2.2rem; margin: 0.75rem 0 0.5rem; color: var(--primary-color);">Appliance Repair Guides & Troubleshooting Tips</h1>
        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6;">Clear, practical advice from local doorstep technicians across Madurai. Understand common appliance faults, quick checks you can do yourself, and realistic repair costs.</p>
      </div>

      <!-- Blog Grid -->
      <div class="blog-grid">
${cardsHtml}
      </div>
    </div>
  </section>

${getFooter()}

</body>
</html>`;

  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), indexHtml, 'utf8');
  console.log('✓ Generated blog/index.html with all 12 Madurai guides.');
}

buildBlogIndex();
console.log('--- ALL MADURAI BLOGS REBUILT SUCCESSFULLY ---');
