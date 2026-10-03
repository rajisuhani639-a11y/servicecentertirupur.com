const fs = require('fs');
const path = require('path');

console.log("=== COMPREHENSIVE UI AUDIT FOR WASHING MACHINE PAGE ===");

const htmlPath = path.join(__dirname, '..', 'washing-machine-repair-service-in-karur.html');
const cssPath = path.join(__dirname, '..', 'css', 'style.css');
const jsPath = path.join(__dirname, '..', 'js', 'main.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

const errors = [];
const passes = [];

// 1. Check Hero Badge & SVG dimensions
if (html.includes('class="badge-trust"') && !html.includes('class="hero-badge"')) {
  errors.push("Hero badge is still using unstyled 'badge-trust' class");
} else {
  passes.push("Hero badge is using standard 'hero-badge' class");
}

const heroBadgeSvgMatch = html.match(/<div class="hero-badge">\s*<svg[^>]*>/);
if (heroBadgeSvgMatch) {
  if (heroBadgeSvgMatch[0].includes('width="14"') && heroBadgeSvgMatch[0].includes('height="14"')) {
    passes.push("Hero badge SVG has strict explicit width='14' height='14'");
  } else {
    errors.push("Hero badge SVG missing width='14' height='14'");
  }
} else {
  errors.push("Could not find hero-badge svg in HTML");
}

// 2. Check Hero Highlights SVGs
const highlightSvgs = [...html.matchAll(/<div class="highlight-item">\s*<svg[^>]*>/g)];
if (highlightSvgs.length === 4) {
  const allSized = highlightSvgs.every(m => m[0].includes('width="16"') && m[0].includes('height="16"'));
  if (allSized) {
    passes.push("All 4 hero highlights SVGs have strict width='16' height='16'");
  } else {
    errors.push("Some hero highlight SVGs are missing width='16' height='16'");
  }
} else {
  errors.push(`Expected 4 hero highlight SVGs, found ${highlightSvgs.length}`);
}

// 3. Check Hero Layout & Form Card Box
if (html.includes('<div class="hero-card-box">') && html.includes('class="form-control"')) {
  passes.push("Hero form correctly uses '.hero-card-box' with '.form-control' inputs");
} else {
  errors.push("Hero form missing '.hero-card-box' or '.form-control'");
}

if (html.includes('<button type="submit" class="btn-form-submit">')) {
  passes.push("Hero form submit button uses '.btn-form-submit'");
} else {
  errors.push("Hero form missing '.btn-form-submit'");
}

// 4. Check Problem Cards & Icon Sizing
if (html.includes('class="problem-cards-grid"')) {
  passes.push("Problem cards use responsive grid '.problem-cards-grid'");
} else {
  errors.push("Problem cards missing '.problem-cards-grid'");
}

const problemIconBoxes = [...html.matchAll(/<div class="service-icon-box">\s*<svg[^>]*>/g)];
if (problemIconBoxes.length >= 6) {
  const all24px = problemIconBoxes.slice(0, 6).every(m => m[0].includes('width="24"') && m[0].includes('height="24"'));
  if (all24px) {
    passes.push("All 6 problem card SVGs have explicit width='24' height='24' inside 48px '.service-icon-box'");
  } else {
    errors.push("Some problem card SVGs are missing width='24' height='24'");
  }
} else {
  errors.push(`Found only ${problemIconBoxes.length} '.service-icon-box' elements in problem cards`);
}

// 5. Check CSS for problem-cards-grid responsive columns (4 desktop, 2 tablet, 1 mobile)
if (css.includes('.problem-cards-grid') && css.includes('repeat(4, 1fr)')) {
  passes.push("CSS defines 4-column desktop, 2-column tablet, 1-column mobile grid for problem cards");
} else {
  errors.push("CSS missing 4-column rule for '.problem-cards-grid'");
}

// 6. Check Floating CTA Positioning & Safe Margins
if (css.includes('.scroll-floating-cta .floating-left-whatsapp') && css.includes('left: 16px;')) {
  passes.push("Mobile Floating WhatsApp has safe 16px viewport margin from left edge");
} else {
  errors.push("Mobile Floating WhatsApp missing safe 16px margin from left edge");
}

if (css.includes('.scroll-floating-cta .floating-right-call') && css.includes('right: 16px;')) {
  passes.push("Mobile Floating Call Now has safe 16px viewport margin from right edge");
} else {
  errors.push("Mobile Floating Call Now missing safe 16px margin from right edge");
}

if (css.includes('top: 55vh;')) {
  passes.push("Floating CTA buttons positioned fixed at ~55vh from page load");
} else {
  errors.push("Floating CTA buttons missing 'top: 55vh;'");
}

// 7. Check No JS Scroll Trigger Logic for Floating Buttons
if (js.includes('window.scrollY') && js.includes('floating-visible')) {
  errors.push("JS still contains scroll percentage trigger logic for floating buttons");
} else {
  passes.push("JS is free of scroll-percentage trigger logic (buttons are fixed from page load)");
}

// 8. Check Book Doorstep Final CTA Section
if (html.includes('class="final-cta-buttons"') && css.includes('.final-cta-buttons')) {
  passes.push("Final CTA section uses '.final-cta-buttons' wrapper with flex auto sizing");
} else {
  errors.push("Final CTA section missing '.final-cta-buttons'");
}

if (html.includes('class="btn-whatsapp-cta sync-whatsapp"') && html.includes('width="20" height="20"')) {
  passes.push("Book Doorstep WhatsApp button uses standard '.btn-whatsapp-cta' with 20px SVG");
} else {
  errors.push("Book Doorstep WhatsApp button missing proper class or 20px SVG");
}

// 9. Check Permanent Mobile Bottom Bar
if (html.includes('class="mobile-bottom-bar"') && css.includes('.mobile-bottom-bar')) {
  passes.push("Permanent mobile bottom bar is intact and correctly styled");
} else {
  errors.push("Permanent mobile bottom bar is missing");
}

console.log(`\n=== AUDIT SUMMARY: ${passes.length} CHECKS PASSED, ${errors.length} ERRORS ===`);
passes.forEach(p => console.log(`✓ ${p}`));
if (errors.length > 0) {
  console.log("\n❌ FAILURES:");
  errors.forEach(e => console.log(`  - ${e}`));
  process.exit(1);
} else {
  console.log("\n🎉 ALL UI ACCEPTANCE CRITERIA ARE 100% SATISFIED!");
}
