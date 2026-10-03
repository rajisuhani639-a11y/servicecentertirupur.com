// scripts/add_aggregate_ratings.js
// Adds AggregateRating inside LocalBusiness JSON-LD across all eligible pages
// Requirements:
// - ratingValue: 4.8–4.9
// - reviewCount: randomly between 1000–5000
// - bestRating: 5
// - worstRating: 1
// - Inside existing LocalBusiness JSON-LD (or add LocalBusiness JSON-LD if none exists)
// - NO duplicate AggregateRating blocks

const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('./scripts/detailed_page_info.json', 'utf8'));

// Include sitemap.html
const allFilesToProcess = pages.map(p => p.file);
if (fs.existsSync('sitemap.html') && !allFilesToProcess.includes('sitemap.html')) {
  allFilesToProcess.push('sitemap.html');
}

console.log(`Total files to process: ${allFilesToProcess.length}`);

function getRandomRating() {
  return Math.random() < 0.5 ? 4.8 : 4.9;
}

function getRandomReviewCount() {
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}

let updatedExistingCount = 0;
let newlyAddedCount = 0;
let skippedDuplicates = 0;

allFilesToProcess.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Check if AggregateRating already exists
  if (html.includes('"@type": "AggregateRating"') || html.includes('"@type":"AggregateRating"')) {
    console.log(`AggregateRating already exists in ${filePath}, ensuring no duplicates.`);
    skippedDuplicates++;
    return;
  }

  const ratingVal = getRandomRating();
  const revCount = getRandomReviewCount();

  const aggRatingObj = {
    "@type": "AggregateRating",
    "ratingValue": ratingVal,
    "reviewCount": revCount,
    "bestRating": 5,
    "worstRating": 1
  };

  // Check all ld+json scripts in file
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let hasLocalBusiness = false;
  let modifiedHtml = html;

  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    try {
      const json = JSON.parse(match[1]);
      let touched = false;

      // Case 1: Root object is LocalBusiness
      if (json['@type'] === 'LocalBusiness' || (Array.isArray(json['@type']) && json['@type'].includes('LocalBusiness'))) {
        if (!json.aggregateRating) {
          json.aggregateRating = aggRatingObj;
          touched = true;
          hasLocalBusiness = true;
        }
      }
      // Case 2: Object has provider which is LocalBusiness
      else if (json.provider && json.provider['@type'] === 'LocalBusiness') {
        if (!json.provider.aggregateRating) {
          json.provider.aggregateRating = aggRatingObj;
          touched = true;
          hasLocalBusiness = true;
        }
      }
      // Case 3: Object has @graph containing LocalBusiness
      else if (json['@graph'] && Array.isArray(json['@graph'])) {
        const lb = json['@graph'].find(item => item['@type'] === 'LocalBusiness');
        if (lb && !lb.aggregateRating) {
          lb.aggregateRating = aggRatingObj;
          touched = true;
          hasLocalBusiness = true;
        }
      }

      if (touched) {
        const replacementScript = `<script type="application/ld+json">\n${JSON.stringify(json, null, 2)}\n  </script>`;
        modifiedHtml = modifiedHtml.replace(match[0], replacementScript);
        updatedExistingCount++;
        break;
      }
    } catch (e) {
      // ignore json parse errors
    }
  }

  // If no existing LocalBusiness block was found to add aggregateRating into:
  if (!hasLocalBusiness) {
    // Derive business name and canonical URL from page
    const canonMatch = html.match(/<link rel="canonical"[^>]*href="([^"]+)"/i);
    const canonicalUrl = canonMatch ? canonMatch[1] : `https://servicecentercoimbatore.com/${filePath.replace(/\\/g, '/')}`;
    
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    let title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').split('|')[0].trim() : 'Service Center Coimbatore';

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": title,
      "image": "https://servicecentercoimbatore.com/favicon-192x192.png",
      "telephone": "+919211512088",
      "url": canonicalUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "273, PRS Pandian Complex, 7th St, Gandhipuram",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641012",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.0168,
        "longitude": 76.9558
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
      "aggregateRating": aggRatingObj
    };

    const newLbScript = `  <!-- LocalBusiness Schema with AggregateRating -->\n  <script type="application/ld+json">\n${JSON.stringify(localBusinessSchema, null, 2)}\n  </script>\n`;

    // Inject before existing FAQPage schema or before </head>
    if (modifiedHtml.includes('<script type="application/ld+json">')) {
      modifiedHtml = modifiedHtml.replace('<script type="application/ld+json">', `${newLbScript}\n  <script type="application/ld+json">`);
    } else {
      modifiedHtml = modifiedHtml.replace('</head>', `${newLbScript}\n</head>`);
    }
    newlyAddedCount++;
  }

  fs.writeFileSync(filePath, modifiedHtml, 'utf8');
});

console.log(`\n=== AGGREGATE RATING UPDATE COMPLETED ===`);
console.log(`Total files updated inside existing LocalBusiness: ${updatedExistingCount}`);
console.log(`Total files with LocalBusiness + AggregateRating added: ${newlyAddedCount}`);
console.log(`Total files with skipped/existing AggregateRating: ${skippedDuplicates}`);
console.log(`Total processed: ${updatedExistingCount + newlyAddedCount + skippedDuplicates}`);
