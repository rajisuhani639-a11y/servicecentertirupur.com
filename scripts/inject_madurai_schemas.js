// scripts/inject_madurai_schemas.js
// Injects both LocalBusiness Schema and FAQPage Schema cleanly into all 175 non-blog HTML files.

const fs = require('fs');
const path = require('path');
const { generateFaqSchema } = require('./render_madurai_faqs.js');

const masterFaqs = JSON.parse(fs.readFileSync('./scripts/madurai_master_faqs.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('./scripts/madurai_pages_data.json', 'utf8'));

let fixed = 0;

pages.forEach(p => {
  if (!fs.existsSync(p.newFile)) return;

  let content = fs.readFileSync(p.newFile, 'utf8');
  const brand = (p.brand && !p.brand.startsWith('All')) ? p.brand : (p.category === 'ac' ? 'AC' : (p.category === 'fridge' ? 'Refrigerator' : (p.category === 'washing-machine' ? 'Washing Machine' : (p.category === 'tv' ? 'TV' : 'Home Appliance'))));

  let businessName = `${brand} Repair Service in Madurai`;
  if (p.category === 'root') businessName = "Home Appliance Repair Service in Madurai";
  else if (p.category === 'service-center') businessName = `${brand} Service Center Madurai`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "image": "https://servicecentermadurai.com/favicon-192x192.png",
    "telephone": "+919211512088",
    "url": p.canonical,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Doorstep Service Across Madurai",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9252,
      "longitude": 78.1198
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:30"
      }
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 4936,
      "bestRating": 5,
      "worstRating": 1
    }
  };

  const localBusinessScript = `  <!-- LocalBusiness Schema with AggregateRating -->
  <script type="application/ld+json">
${JSON.stringify(localBusinessSchema, null, 2)}
  </script>`;

  const faqSchemaScript = masterFaqs[p.newFile] ? generateFaqSchema(masterFaqs[p.newFile]) : '';

  const fullSchemaBlock = `  <!-- Schema.org JSON-LD -->
${localBusinessScript}
${faqSchemaScript}`;

  // Replace existing schemas in <head>
  // Match from <!-- Schema.org JSON-LD --> or first <script type="application/ld+json"> up to </head>
  if (content.includes('<!-- Schema.org JSON-LD')) {
    content = content.replace(/<!-- Schema.org JSON-LD[\s\S]*?(?=<\/head>)/i, `${fullSchemaBlock}\n`);
  } else if (content.includes('<script type="application/ld+json">')) {
    content = content.replace(/(?:<!-- [^>]*Schema[^>]*-->\s*)*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*(?:<!-- [^>]*Schema[^>]*-->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*)*/i, `${fullSchemaBlock}\n`);
  } else {
    content = content.replace(/<\/head>/i, `${fullSchemaBlock}\n</head>`);
  }

  fs.writeFileSync(p.newFile, content, 'utf8');
  fixed++;
});

console.log(`Successfully injected clean dual schemas (LocalBusiness + FAQPage) into ${fixed} pages.`);
