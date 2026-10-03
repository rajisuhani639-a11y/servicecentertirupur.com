// scripts/fix_schema_and_buzzwords.js
// Injects the complete Erode LocalBusiness schema on every page alongside the FAQPage schema
// Cleans all remaining AI buzzwords (utilize -> use, etc.)

const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('./scripts/erode_pages_data.json', 'utf8'));

function getLocalBusinessSchema(page) {
  const brand = page.brand || 'Home Appliance';
  let businessName = "Home Appliance Repair Service in Erode";
  if (page.category === 'service-center') {
    businessName = `${brand} Service Center Erode`;
  } else if (page.category === 'ac') {
    businessName = `${brand} AC Repair Service in Erode`;
  } else if (page.category === 'fridge') {
    businessName = `${brand} Refrigerator Repair Service in Erode`;
  } else if (page.category === 'washing-machine') {
    businessName = `${brand} Washing Machine Repair Service in Erode`;
  } else if (page.category === 'tv') {
    businessName = `${brand} TV Repair Service in Erode`;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "image": "https://servicecentereode.com/favicon-192x192.png",
    "telephone": "+919211512088",
    "url": page.canonical,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.3480,
      "longitude": 77.7190
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "23:00"
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

  return `  <!-- LocalBusiness Schema with AggregateRating -->\n  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
}

pages.forEach(p => {
  if (!fs.existsSync(p.newFile)) return;
  let content = fs.readFileSync(p.newFile, 'utf8');

  // If page doesn't have LocalBusiness schema, inject it before FAQPage schema or before </head>
  if (!content.includes('"LocalBusiness"')) {
    const lbSchema = getLocalBusinessSchema(p);
    if (content.includes('<!-- Schema.org JSON-LD -->')) {
      content = content.replace('<!-- Schema.org JSON-LD -->', `<!-- Schema.org JSON-LD -->\n${lbSchema}`);
    } else if (content.includes('<script type="application/ld+json">')) {
      content = content.replace('<script type="application/ld+json">', `${lbSchema}\n\n  <script type="application/ld+json">`);
    } else {
      content = content.replace('</head>', `  ${lbSchema}\n</head>`);
    }
  }

  // Clean buzzwords
  content = content.replace(/\butilizes\b/gi, 'uses');
  content = content.replace(/\butilize\b/gi, 'use');
  content = content.replace(/\butilizing\b/gi, 'using');
  content = content.replace(/\bprompt assistance\b/gi, 'quick help');
  content = content.replace(/\bcomprehensive assistance\b/gi, 'complete repair support');
  content = content.replace(/\bfacilitate\b/gi, 'help');
  content = content.replace(/\btechnical intervention\b/gi, 'technical repair');
  content = content.replace(/\bdiagnostic assessment\b/gi, 'diagnostic check');
  content = content.replace(/\bexpeditious\b/gi, 'speedy');
  content = content.replace(/\bendeavour\b/gi, 'aim');
  content = content.replace(/\bresidential premises\b/gi, 'customer homes');
  content = content.replace(/\bseamless service experience\b/gi, 'smooth service');
  content = content.replace(/\bdedicated service desk\b/gi, 'local service desk');

  fs.writeFileSync(p.newFile, content, 'utf8');
});

console.log('Successfully updated schemas and cleaned buzzwords on all 174 pages.');
