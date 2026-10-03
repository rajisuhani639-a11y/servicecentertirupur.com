// scripts/clean_data_phone_numbers.js
const fs = require('fs');
const path = require('path');

const targetJsonFiles = [
  'tiruppur_master_faqs.json',
  'tiruppur_hero_intros.json',
  'tiruppur_unique_experiences.json',
  'tiruppur_pages_data.json'
];

targetJsonFiles.forEach(fileName => {
  const fullPath = path.join(__dirname, fileName);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/\+91\s*92115\s*12088/g, '+91 88820 55269');
    content = content.replace(/\+919211512088/g, '+918882055269');
    content = content.replace(/92115\s*12088/g, '88820 55269');
    content = content.replace(/9211512088/g, '8882055269');
    content = content.replace(/\+91\s*94420\s*54321/g, '+91 88820 55269');
    content = content.replace(/\+919442054321/g, '+918882055269');
    content = content.replace(/94420\s*54321/g, '88820 55269');
    content = content.replace(/9442054321/g, '8882055269');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✓ Cleaned phone numbers in ${fileName}`);
  }
});
