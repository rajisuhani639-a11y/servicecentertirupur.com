const fs = require('fs');

// 1. Fix index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace remaining old links in index.html
indexHtml = indexHtml.replace(/href="ac-repair-service-in-karur\.html"/g, 'href="ac/ac-repair-service-in-karur.html"');
indexHtml = indexHtml.replace(/href="refrigerator-repair-service-in-karur\.html"/g, 'href="fridge/refrigerator-repair-service-in-karur.html"');
indexHtml = indexHtml.replace(/href="tv-repair-service-in-karur\.html"/g, 'href="tv/tv-repair-service-in-karur.html"');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Fixed links in index.html');

// 2. Fix scripts/build_fridge_page.js
let fridgeBuilder = fs.readFileSync('scripts/build_fridge_page.js', 'utf8');

// Replace South Highway Corridor
fridgeBuilder = fridgeBuilder.replace('"South Highway Corridor"', '"Trichy Road"');

// Replace AI buzzwords
fridgeBuilder = fridgeBuilder.replace('tailored to your specific model', 'focused on your specific model');
fridgeBuilder = fridgeBuilder.replace('tailored to each model', 'specific to each model');
fridgeBuilder = fridgeBuilder.replace('Comprehensive electronic and mechanical testing', 'Thorough electronic and mechanical testing');
fridgeBuilder = fridgeBuilder.replace('27 Comprehensive Questions', '27 Detailed Questions');
fridgeBuilder = fridgeBuilder.replace('27 Comprehensive FAQs', '27 Detailed FAQs');
fridgeBuilder = fridgeBuilder.replace('high-voltage intelligent power module (IPM) board', 'high-voltage IPM power driver board');
fridgeBuilder = fridgeBuilder.replace('Premium Wide Dual Door Fridge', 'Wide Dual Door Fridge');

// Replace Prompt
fridgeBuilder = fridgeBuilder.replace('Prompt doorstep repair and inspection visits', 'Timely doorstep repair and inspection visits');
fridgeBuilder = fridgeBuilder.replace('Prompt <strong>Direct Cool Fridge Repair in Karur</strong>', 'Fast <strong>Direct Cool Fridge Repair in Karur</strong>');

fs.writeFileSync('scripts/build_fridge_page.js', fridgeBuilder, 'utf8');
console.log('Updated scripts/build_fridge_page.js');
