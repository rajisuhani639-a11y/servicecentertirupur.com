const fs = require('fs');

// Fix in erode_master_faqs_v2.json
let faqsContent = fs.readFileSync('scripts/erode_master_faqs_v2.json', 'utf8');
faqsContent = faqsContent.replace(/Coimbatore/gi, 'Erode');
fs.writeFileSync('scripts/erode_master_faqs_v2.json', faqsContent, 'utf8');
console.log('Fixed Coimbatore references in erode_master_faqs_v2.json');

// Re-apply to all HTML files
const { execSync } = require('child_process');
execSync('node scripts/apply_final_erode_enhancements.js', { stdio: 'inherit' });
