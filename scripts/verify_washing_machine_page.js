const fs = require('fs');
const path = require('path');

console.log("=== COMMENCING VERIFICATION OF WASHING MACHINE PAGE ===");

const filePath = path.join(__dirname, '..', 'washing-machine-repair-service-in-karur.html');
const content = fs.readFileSync(filePath, 'utf8');

const errors = [];
const warnings = [];

// 1. Check City / Forbidden Cities
const forbiddenCities = ["Ghaziabad", "Delhi", "Nangal", "Noida", "Pune", "Haridwar", "Tenkasi", "Chennai", "Bangalore", "Mumbai"];
forbiddenCities.forEach(city => {
  const regex = new RegExp(`\\b${city}\\b`, 'i');
  if (regex.test(content)) {
    errors.push(`Contains forbidden city: "${city}"`);
  }
});
// Madurai is only allowed as part of the approved Karur locality "South Highway Corridor"
const maduraiMatches = [...content.matchAll(/\bMadurai\b(?!\s*Road)/gi)];
if (maduraiMatches.length > 0) {
  errors.push(`Contains forbidden city: "Madurai" (outside "South Highway Corridor")`);
}
if (!content.includes('Karur')) {
  errors.push("Missing target city 'Karur'");
}

// 2. Headings & Title
const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
if (h1Matches.length !== 1) {
  errors.push(`Expected exactly 1 H1, found ${h1Matches.length}`);
} else {
  const h1Text = h1Matches[0][1].replace(/<[^>]*>/g, '').trim();
  if (h1Text !== 'Washing Machine Repair Service in Karur') {
    errors.push(`H1 text mismatch: "${h1Text}"`);
  }
}

// 3. Meta Title & Description
if (!content.includes('<title>Washing Machine Repair Service in Karur | Washing Machine Service</title>')) {
  errors.push("Meta title mismatch");
}
if (!content.includes('https://servicecenterkarur.com/washing-machine-repair-service-in-karur.html')) {
  errors.push("Canonical URL mismatch");
}

// 4. Forbidden AI words
const forbiddenAiWords = [
  "tailored", "seamless", "comprehensive", "precision", "promptly", "optimized",
  "optimization", "sophisticated", "facilitate", "intervention", "proactive",
  "robust", "streamlined", "bespoke", "cutting-edge", "next-generation", "ecosystem"
];
forbiddenAiWords.forEach(w => {
  const regex = new RegExp(`\\b${w}\\b`, 'i');
  if (regex.test(content)) {
    warnings.push(`Contains AI buzzword: "${w}"`);
  }
});

// 5. Forbidden Pricing Placeholders
const forbiddenPricing = ["Model Dependent", "Pricing Guidance", "Inspection Rate", "Joint Dependent"];
forbiddenPricing.forEach(p => {
  if (content.includes(p)) {
    errors.push(`Contains forbidden pricing placeholder: "${p}"`);
  }
});

// 6. Unsupported claims (20 years, emergency service)
if (/\b20\s*years\b/i.test(content)) {
  errors.push("Contains unsupported '20 years' claim");
}
if (/\bemergency\s*(service|repair)\b/i.test(content)) {
  errors.push("Contains unsupported 'emergency service' claim");
}

// 7. Customer Experiences Word Count (40-50 words each)
const expMatches = [...content.matchAll(/<p class="experience-body">\s*"([\s\S]*?)"\s*<\/p>/g)];
if (expMatches.length !== 6) {
  errors.push(`Expected 6 customer experience scenarios, found ${expMatches.length}`);
} else {
  expMatches.forEach((em, idx) => {
    const text = em[1].replace(/\s+/g, ' ').trim();
    const wc = text.split(' ').length;
    if (wc < 40 || wc > 50) {
      errors.push(`Customer Experience ${idx + 1} has ${wc} words (must be 40-50)`);
    } else {
      console.log(`Experience ${idx + 1}: ${wc} words (PASS)`);
    }
  });
}

// 8. Locality Cards Count (60 localities)
const locMatches = [...content.matchAll(/<div class="locality-card">([\s\S]*?)<\/p>\s*<\/div>/g)];
if (locMatches.length < 50) {
  errors.push(`Found only ${locMatches.length} locality cards (expected 60)`);
} else {
  console.log(`Locality cards verified: ${locMatches.length} cards.`);
}

// 9. Pricing Tables Presence
const pricingTables = [
  "Installation, Uninstallation & Checkup Charges",
  "Washing Machine Wash Problem Repair Charges in Karur",
  "Washing Machine Water Leakage Repair Charges in Karur",
  "Washing Machine Power Problem Repair Charges in Karur",
  "Washing Machine Spin Repair Charges in Karur",
  "Washing Machine Noise Repair Charges in Karur"
];
pricingTables.forEach(t => {
  if (!content.includes(t)) {
    errors.push(`Missing pricing section: "${t}"`);
  }
});

// 10. CTA & Mobile Button Order
if (!content.includes('id="scrollFloatingCTA"')) {
  errors.push("Missing scrollFloatingCTA");
}
if (!content.includes('class="mobile-bottom-bar"')) {
  errors.push("Missing mobile-bottom-bar");
}

console.log("\n=== VERIFICATION RESULTS ===");
if (errors.length === 0) {
  console.log("✅ ALL WASHING MACHINE PAGE CHECKS PASSED PERFECTLY! (0 errors)");
} else {
  console.log(`❌ FOUND ${errors.length} ERRORS:`);
  errors.forEach(e => console.log("   - " + e));
}

if (warnings.length === 0) {
  console.log("✅ ZERO AI WORDS FOUND! (0 warnings)");
} else {
  console.log(`⚠️ FOUND ${warnings.length} AI WORD WARNINGS:`);
  warnings.forEach(w => console.log("   - " + w));
}

process.exit(errors.length > 0 ? 1 : 0);
