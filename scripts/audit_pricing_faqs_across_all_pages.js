// scripts/audit_pricing_faqs_across_all_pages.js
const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/madurai_pages_data.json', 'utf8'));

console.log('--- STARTING COMPREHENSIVE PRICING FAQ AUDIT ACROSS ALL 174 CONTENT PAGES ---');

let missingFaqSection = 0;
let missingFaqSchema = 0;
let invalidFaqSchema = 0;
let totalFaqQuestions = 0;
let pagesWithPricingFaqs = 0;
let erodeMentionCount = 0;

const sampleComparisons = {
  boschWmPcb: '',
  samsungWmPcb: '',
  ifbWmPcb: '',
  boschWmDrum: '',
  samsungWmDrum: '',
  ifbWmDrum: '',
  daikinAcPcb: '',
  voltasAcPcb: '',
  sonyTvBacklight: '',
  samsungTvBacklight: '',
  miTvBacklight: '',
  samsungFridgeCompressor: '',
  godrejFridgeCompressor: ''
};

pages.forEach((p, idx) => {
  const content = fs.readFileSync(p.newFile, 'utf8');

  // Check Erode
  const erodeMatches = content.match(/\berode\b/gi);
  if (erodeMatches) {
    erodeMentionCount += erodeMatches.length;
    console.error(`ERROR: Erode mention found in ${p.newFile}!`);
  }

  // Check #faqSection
  if (!content.includes('id="faqSection"')) {
    missingFaqSection++;
    console.error(`ERROR: Missing #faqSection in ${p.newFile}`);
  }

  // Check FAQPage schema
  const schemaMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  let hasFaqSchema = false;
  if (schemaMatch) {
    schemaMatch.forEach(block => {
      const raw = block.replace(/<\/?script[^>]*>/g, '');
      try {
        const parsed = JSON.parse(raw);
        if (parsed['@type'] === 'FAQPage') {
          hasFaqSchema = true;
          totalFaqQuestions += (parsed.mainEntity || []).length;
          
          // Verify price questions exist
          const hasPriceQ = parsed.mainEntity.some(item => 
            /cost|price|charge|fee|visiting|pcb|drum|compressor|backlight|magnetron|pump|gasket|panel|motor/i.test(item.name)
          );
          if (hasPriceQ) pagesWithPricingFaqs++;

          // Extract sample answers for price differentiation check
          if (p.newFile.includes('bosch-washing-machine')) {
            const pcbItem = parsed.mainEntity.find(it => it.name.includes('PCB'));
            if (pcbItem) sampleComparisons.boschWmPcb = pcbItem.acceptedAnswer.text;
            const drumItem = parsed.mainEntity.find(it => it.name.includes('drum'));
            if (drumItem) sampleComparisons.boschWmDrum = drumItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('samsung-washing-machine')) {
            const pcbItem = parsed.mainEntity.find(it => it.name.includes('PCB'));
            if (pcbItem) sampleComparisons.samsungWmPcb = pcbItem.acceptedAnswer.text;
            const drumItem = parsed.mainEntity.find(it => it.name.includes('spider') || it.name.includes('drum'));
            if (drumItem) sampleComparisons.samsungWmDrum = drumItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('ifb-washing-machine')) {
            const pcbItem = parsed.mainEntity.find(it => it.name.includes('PCB'));
            if (pcbItem) sampleComparisons.ifbWmPcb = pcbItem.acceptedAnswer.text;
            const drumItem = parsed.mainEntity.find(it => it.name.includes('spider') || it.name.includes('bearing'));
            if (drumItem) sampleComparisons.ifbWmDrum = drumItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('daikin-ac')) {
            const pcbItem = parsed.mainEntity.find(it => it.name.includes('PCB'));
            if (pcbItem) sampleComparisons.daikinAcPcb = pcbItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('voltas-ac')) {
            const pcbItem = parsed.mainEntity.find(it => it.name.includes('PCB'));
            if (pcbItem) sampleComparisons.voltasAcPcb = pcbItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('sony-tv')) {
            const blItem = parsed.mainEntity.find(it => it.name.includes('backlight'));
            if (blItem) sampleComparisons.sonyTvBacklight = blItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('samsung-tv')) {
            const blItem = parsed.mainEntity.find(it => it.name.includes('backlight'));
            if (blItem) sampleComparisons.samsungTvBacklight = blItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('mi-tv')) {
            const blItem = parsed.mainEntity.find(it => it.name.includes('backlight'));
            if (blItem) sampleComparisons.miTvBacklight = blItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('samsung-refrigerator')) {
            const compItem = parsed.mainEntity.find(it => it.name.includes('compressor'));
            if (compItem) sampleComparisons.samsungFridgeCompressor = compItem.acceptedAnswer.text;
          }
          if (p.newFile.includes('godrej-refrigerator')) {
            const compItem = parsed.mainEntity.find(it => it.name.includes('compressor'));
            if (compItem) sampleComparisons.godrejFridgeCompressor = compItem.acceptedAnswer.text;
          }
        }
      } catch (e) {
        invalidFaqSchema++;
        console.error(`JSON Parse error in schema of ${p.newFile}:`, e.message);
      }
    });
  }

  if (!hasFaqSchema) missingFaqSchema++;
});

console.log('\n--- AUDIT SUMMARY STATS ---');
console.log(`Total Pages Audited: ${pages.length}`);
console.log(`Missing #faqSection: ${missingFaqSection}`);
console.log(`Missing FAQPage Schema: ${missingFaqSchema}`);
console.log(`Invalid FAQPage Schema: ${invalidFaqSchema}`);
console.log(`Pages with Research Pricing FAQs: ${pagesWithPricingFaqs} / ${pages.length}`);
console.log(`Total FAQ Questions across site: ${totalFaqQuestions}`);
console.log(`Average FAQs per page: ${(totalFaqQuestions / pages.length).toFixed(1)}`);
console.log(`Erode Mentions Found: ${erodeMentionCount}`);

console.log('\n--- PRICE DIFFERENTIATION AUDIT ---');
console.log('1. Bosch WM PCB vs Samsung WM PCB vs IFB WM PCB:');
console.log('  Bosch PCB:', sampleComparisons.boschWmPcb.slice(0, 100) + '...');
console.log('  Samsung PCB:', sampleComparisons.samsungWmPcb.slice(0, 100) + '...');
console.log('  IFB PCB:', sampleComparisons.ifbWmPcb.slice(0, 100) + '...');
const pcbDistinct = (sampleComparisons.boschWmPcb !== sampleComparisons.samsungWmPcb) && (sampleComparisons.samsungWmPcb !== sampleComparisons.ifbWmPcb);
console.log('  Are WM PCBs distinct?', pcbDistinct ? 'YES (PASS)' : 'NO (FAIL)');

console.log('\n2. Bosch Drum vs Samsung Drum vs IFB Drum:');
console.log('  Bosch Drum:', sampleComparisons.boschWmDrum.slice(0, 100) + '...');
console.log('  Samsung Drum:', sampleComparisons.samsungWmDrum.slice(0, 100) + '...');
console.log('  IFB Drum:', sampleComparisons.ifbWmDrum.slice(0, 100) + '...');
const drumDistinct = (sampleComparisons.boschWmDrum !== sampleComparisons.samsungWmDrum) && (sampleComparisons.samsungWmDrum !== sampleComparisons.ifbWmDrum);
console.log('  Are WM Drum prices distinct?', drumDistinct ? 'YES (PASS)' : 'NO (FAIL)');

console.log('\n3. Daikin AC PCB vs Voltas AC PCB:');
console.log('  Daikin AC PCB:', sampleComparisons.daikinAcPcb.slice(0, 100) + '...');
console.log('  Voltas AC PCB:', sampleComparisons.voltasAcPcb.slice(0, 100) + '...');
const acPcbDistinct = sampleComparisons.daikinAcPcb !== sampleComparisons.voltasAcPcb;
console.log('  Are AC PCBs distinct?', acPcbDistinct ? 'YES (PASS)' : 'NO (FAIL)');

console.log('\n4. Sony TV Backlight vs Samsung TV Backlight vs Mi TV Backlight:');
console.log('  Sony TV Backlight:', sampleComparisons.sonyTvBacklight.slice(0, 100) + '...');
console.log('  Samsung TV Backlight:', sampleComparisons.samsungTvBacklight.slice(0, 100) + '...');
console.log('  Mi TV Backlight:', sampleComparisons.miTvBacklight.slice(0, 100) + '...');
const tvBlDistinct = (sampleComparisons.sonyTvBacklight !== sampleComparisons.samsungTvBacklight) && (sampleComparisons.samsungTvBacklight !== sampleComparisons.miTvBacklight);
console.log('  Are TV Backlight prices distinct?', tvBlDistinct ? 'YES (PASS)' : 'NO (FAIL)');

console.log('\n5. Samsung Fridge Compressor vs Godrej Fridge Compressor:');
console.log('  Samsung Compressor:', sampleComparisons.samsungFridgeCompressor.slice(0, 100) + '...');
console.log('  Godrej Compressor:', sampleComparisons.godrejFridgeCompressor.slice(0, 100) + '...');
const fridgeCompDistinct = sampleComparisons.samsungFridgeCompressor !== sampleComparisons.godrejFridgeCompressor;
console.log('  Are Fridge Compressor prices distinct?', fridgeCompDistinct ? 'YES (PASS)' : 'NO (FAIL)');
