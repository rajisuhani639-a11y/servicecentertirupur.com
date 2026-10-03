const fs = require('fs');
const path = require('path');
const { ROOT_DIR, BLOG_DIR, checkBuzzwords, getHeader, getFooter } = require('./blog_base_helpers');

const b1 = require('./blogs_data_1_to_4');
const b2 = require('./blogs_data_5_to_8');
const b3 = require('./blogs_data_9_to_12');

const ALL_BLOGS = [...b1, ...b2, ...b3];

console.log(`Loaded ${ALL_BLOGS.length} blogs data.`);

// Verify buzzwords across all blogs
let buzzwordCount = 0;
ALL_BLOGS.forEach(b => {
  const fullText = JSON.stringify(b);
  const lower = fullText.toLowerCase();
  const banned = [
    'promptly', 'comprehensive', 'facilitate', 'utilize', 'undertake',
    'meticulous', 'seamless', 'robust', 'tailored', 'advanced troubleshooting',
    'technical intervention', 'diagnostic assessment', 'efficient resolution',
    'professional expertise'
  ];
  for (const w of banned) {
    if (lower.includes(w)) {
      console.warn(`[WARNING] "${w}" found in blog ${b.id} (${b.slug})`);
      buzzwordCount++;
    }
  }
});
if (buzzwordCount === 0) {
  console.log('✓ Zero banned buzzwords found across all 12 blogs!');
}

// Map for quick slug lookup
const blogMap = {};
ALL_BLOGS.forEach(b => { blogMap[b.slug] = b; });

// Generate Individual Blog Pages
ALL_BLOGS.forEach(blog => {
  const canonicalUrl = `https://servicecentereode.com/blog/${blog.slug}`;
  const whatsappUrl = `https://wa.me/919211512088?text=${encodeURIComponent(`Hello, I read your article "${blog.title}". I need appliance repair help in Erode.`)}`;

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
        "item": "https://servicecentereode.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://servicecentereode.com/blog/index.html"
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
    "dateModified": "2026-10-02T10:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Service Center Erode Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Service Center Erode",
      "logo": {
        "@type": "ImageObject",
        "url": "https://servicecentereode.com/favicon-192x192.png"
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
  const brandPillsHtml = blog.brands.map(b => `<a href="${b.url}" class="brand-pill">${b.name}</a>`).join('\n            ');

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
    const rel = blogMap[slug];
    if (!rel) return '';
    return `
          <div class="blog-card">
            <div>
              <div class="blog-card-meta">
                <span class="blog-card-tag">${rel.category}</span>
                <span class="blog-card-time">${rel.readTime}</span>
              </div>
              <h3><a href="${rel.slug}">${rel.title}</a></h3>
              <p class="blog-card-desc">${rel.metaDesc}</p>
            </div>
            <div class="blog-card-footer">
              <span class="blog-card-loc">📍 Erode Local Guide</span>
              <a href="${rel.slug}" class="blog-card-link">Read Guide →</a>
            </div>
          </div>`;
  }).join('\n');

  const html = `<!DOCTYPE html>
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

  <!-- Open Graph / Meta -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${blog.metaTitle}">
  <meta property="og:description" content="${blog.metaDesc}">
  <meta property="og:site_name" content="Service Center Erode">

  <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Google Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- JSON-LD Schemas -->
  <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
  </script>
  <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <script type="application/ld+json">
${JSON.stringify(blogPostingSchema, null, 2)}
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

  <!-- Main Article Section -->
  <main class="section">
    <div class="container">
      <article class="article-wrap">
        
        <header class="article-header">
          <div class="article-meta-bar">
            <span class="blog-card-tag">${blog.category}</span>
            <span>⏱️ ${blog.readTime}</span>
            <span>📅 Updated October 2026</span>
            <span>📍 Erode, Tamil Nadu</span>
          </div>
          <h1>${blog.title}</h1>
          <p class="article-lead">${blog.lead}</p>
        </header>

        <!-- Tanglish Local Advice Box -->
        <div class="tanglish-quick-box">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          <div>
            <strong>${blog.tanglishBox.strong}</strong><br>
            ${blog.tanglishBox.text}
          </div>
        </div>

        <!-- Quick Summary Box -->
        <div class="quick-answer-card">
          <h2>Quick Summary: What You Need to Know</h2>
          <ul>
            ${blog.quickAnswer.map(q => `<li>${q}</li>`).join('\n            ')}
          </ul>
        </div>

        <!-- Guide Sections -->
${sectionsHtml}

        <!-- Practical Checklist Box -->
        <div class="guide-block">
          <h2>Practical Step-by-Step Checks for Erode Homes</h2>
          <p>Before calling for paid service, take 5 minutes to run through these safe, simple checks:</p>
          <div class="step-checklist">
${practicalChecksHtml}
          </div>
        </div>

        <!-- When to Call Technician -->
        <div class="guide-block">
          <h2>When You Should Stop and Call for Professional Repair</h2>
          <p>Certain symptoms require immediate attention from a technician with insulated diagnostic tools to prevent permanent damage or safety hazards:</p>
          <ul style="padding-left: 1.4rem; line-height: 1.65; color: var(--text-main);">
            ${whenToCallHtml}
          </ul>
        </div>

        <!-- Brand Considerations & Internal Links -->
        <div class="guide-block">
          <h2>Compatible Brands & Service Centers in Erode</h2>
          <p>Our local repair network across Erode inspects and services all major home appliance brands. View specific brand pages for doorstep support details:</p>
          <div class="brand-pills-box">
            <div class="brand-pills-title">Related Brand & Service Pages in Erode:</div>
            <div class="brand-pills-list">
            ${brandPillsHtml}
            </div>
          </div>
        </div>

        <!-- Approximate Repair Costs -->
        <div class="guide-block">
          <h2>Approximate Repair Costs in Erode</h2>
          <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem 1.4rem; margin: 1rem 0;">
          ${costGuidanceHtml}
          </div>
          <p style="font-size: 0.9rem; color: var(--text-subtle); margin-top: 0.5rem;"><em>Note: All pricing figures are approximations based on typical Erode service visits. Exact charges depend on physical diagnosis of the issue, machine capacity, and parts required.</em></p>
        </div>

        <!-- Erode Local Context -->
        <div class="guide-block">
          <h2>${blog.erodeLocalSection.heading}</h2>
          <p>${blog.erodeLocalSection.content}</p>
        </div>

        <!-- Call to Action Banner -->
        <div class="blog-cta-banner">
          <h3>Need Appliance Inspection at Your Home in Erode?</h3>
          <p>Book a local technician visit today. Transparent pricing, quick doorstep arrival, and verified local expertise across all Erode residential areas.</p>
          <div class="blog-cta-actions">
            <a href="${whatsappUrl}" class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+919211512088" class="btn-primary-call sync-call">
              <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Call Technician (+91 92115 12088)</span>
            </a>
          </div>
        </div>

        <!-- FAQs Section -->
        <div class="guide-block" id="faqSection">
          <h2>Frequently Asked Questions — ${blog.title.split('?')[0].replace(' — What Could Be Wrong', '')}</h2>
          <div class="faq-list">
${faqsHtml}
          </div>
        </div>

        <!-- Related Guides Grid -->
        <section class="related-guides-section">
          <h2 class="related-guides-title">More Helpful Erode Appliance Repair Guides</h2>
          <div class="blog-grid" style="margin-top: 1rem;">
${relatedGuidesHtml}
          </div>
        </section>

      </article>
    </div>
  </main>

${getFooter()}

</body>
</html>`;

  const targetPath = path.join(BLOG_DIR, blog.slug);
  fs.writeFileSync(targetPath, html, 'utf8');
  console.log(`Generated: blog/${blog.slug}`);
});

// Build /blog/index.html
function generateBlogIndex() {
  const canonicalUrl = 'https://servicecentereode.com/blog/index.html';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://servicecentereode.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": canonicalUrl
      }
    ]
  };

  const blogCardsHtml = ALL_BLOGS.map(b => `
          <article class="blog-card">
            <div>
              <div class="blog-card-meta">
                <span class="blog-card-tag">${b.category}</span>
                <span class="blog-card-time">${b.readTime}</span>
              </div>
              <h2><a href="${b.slug}">${b.title}</a></h2>
              <p class="blog-card-desc">${b.metaDesc}</p>
            </div>
            <div class="blog-card-footer">
              <span class="blog-card-loc">📍 Erode Local Guide</span>
              <a href="${b.slug}" class="blog-card-link">Read Full Guide →</a>
            </div>
          </article>`).join('\n');

  const html = `<!DOCTYPE html>
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
  <title>Erode Appliance Repair Blog & Help Guides | Service Center Erode</title>
  <meta name="description" content="Helpful local home appliance repair guides and troubleshooting tips for Erode residents. Practical advice for AC, refrigerator, washing machine, and TV repair.">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph / Meta -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="Erode Appliance Repair Blog & Help Guides | Service Center Erode">
  <meta property="og:description" content="Helpful local home appliance repair guides and troubleshooting tips for Erode residents. Practical advice for AC, refrigerator, washing machine, and TV repair.">
  <meta property="og:site_name" content="Service Center Erode">

  <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Google Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
</head>
<body>

${getHeader('blog')}

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li aria-current="page">Blog & Helpful Guides</li>
      </ol>
    </div>
  </div>

  <!-- Blog Index Hero -->
  <section class="blog-hero">
    <div class="container">
      <div class="badge-trust" style="margin-bottom: 0.75rem;">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        <span>Erode Local Knowledge Hub</span>
      </div>
      <h1>Erode Appliance Repair Blog & Practical Guides</h1>
      <p>Written specifically for homeowners across Erode. Practical troubleshooting steps, clear cost guidance, and honest advice on when to fix vs when to replace ACs, refrigerators, washing machines, and televisions.</p>
    </div>
  </section>

  <!-- Tanglish Notice Banner -->
  <div class="container" style="margin-top: 1.5rem;">
    <div class="tanglish-quick-box" style="margin-bottom: 0;">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      <div>
        <strong>Erode veetula appliance complaint-ah? Local guides inga check pannunga.</strong><br>
        AC cooling kammi, washing machine drain problem, fridge sound or TV screen black complaints-ku simple checks and doorstep technician booking details inga padikkalaam.
      </div>
    </div>
  </div>

  <!-- Blog Listing Grid -->
  <main class="section">
    <div class="container">
      <div class="section-header" style="text-align: left; margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.6rem; color: var(--primary-color);">Browse All 12 Local Repair Guides</h2>
        <p style="color: var(--text-muted);">Select your appliance topic below to read in-depth checks, local climate tips, and price factors.</p>
      </div>

      <div class="blog-grid">
${blogCardsHtml}
      </div>

      <!-- Quick Local Help Banner -->
      <div class="blog-cta-banner" style="margin-top: 3.5rem;">
        <h3>Need Immediate Doorstep Appliance Repair in Erode?</h3>
        <p>Our local technicians visit homes across Perundurai Road, Thindal, Surampatti, Veerappanchatram, Solar, and all surrounding areas. Transparent diagnostic inspection fees with zero hidden charges.</p>
        <div class="blog-cta-actions">
          <a href="https://wa.me/919211512088?text=Hello%2C%20I%20need%20appliance%20repair%20service%20in%20Erode.%20Please%20share%20technician%20visit%20details." class="btn-whatsapp-cta sync-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.03C8.95 7.03 8.7 7.09 8.5 7.33C8.28 7.57 7.69 8.12 7.69 9.23C7.69 10.34 8.5 11.41 8.62 11.57C8.73 11.72 10.24 14.05 12.56 15.05C14.5 15.88 14.89 15.71 15.31 15.67C15.73 15.63 16.68 15.11 16.88 14.56C17.07 14 17.07 13.53 17.01 13.43C16.95 13.33 16.8 13.27 16.57 13.16C16.35 13.05 15.26 12.51 15.05 12.44C14.85 12.36 14.71 12.32 14.56 12.54C14.41 12.77 14 13.27 13.86 13.43C13.73 13.58 13.6 13.6 13.38 13.49C13.15 13.38 12.43 13.14 11.58 12.38C10.92 11.79 10.47 11.06 10.34 10.84C10.22 10.62 10.33 10.5 10.44 10.39C10.55 10.28 10.68 10.11 10.8 9.97C10.92 9.83 10.95 9.72 11.03 9.57C11.11 9.42 11.07 9.29 11.01 9.17C10.95 9.06 10.5 7.95 10.31 7.5C10.13 7.06 9.94 7.12 9.8 7.11C9.66 7.11 9.5 7.1 9.35 7.1L9.11 7.03Z"/></svg>
            <span>WhatsApp Us</span>
          </a>
          <a href="tel:+919211512088" class="btn-primary-call sync-call">
            <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call (+91 92115 12088)</span>
          </a>
        </div>
      </div>
    </div>
  </main>

${getFooter()}

</body>
</html>`;

  const targetPath = path.join(BLOG_DIR, 'index.html');
  fs.writeFileSync(targetPath, html, 'utf8');
  console.log('Generated: blog/index.html');
}

generateBlogIndex();
console.log('✓ Successfully generated all 12 blogs and /blog/index.html!');
