const fs = require('fs');

const tvHtml = fs.readFileSync('tv/tv-repair-service-in-karur.html', 'utf8');
const fridgeHtml = fs.readFileSync('fridge/refrigerator-repair-service-in-karur.html', 'utf8');

console.log('--- COMPARING TV AND FRIDGE MAIN PAGE ---');

// Check container usage
const tvContainers = (tvHtml.match(/class="[^"]*container[^"]*"/g) || []).length;
const fridgeContainers = (fridgeHtml.match(/class="[^"]*container[^"]*"/g) || []).length;
console.log('Containers: TV =', tvContainers, ', Fridge =', fridgeContainers);

// Check header inner
console.log('TV header class:', tvHtml.match(/<header[^>]*class="([^"]*)"/)?.[1]);
console.log('Fridge header class:', fridgeHtml.match(/<header[^>]*class="([^"]*)"/)?.[1]);

// Check breadcrumbs
console.log('TV breadcrumbs class:', tvHtml.match(/<div[^>]*class="([^"]*breadcrumb[^"]*)"/i)?.[1]);
console.log('Fridge breadcrumbs class:', fridgeHtml.match(/<div[^>]*class="([^"]*breadcrumb[^"]*)"/i)?.[1]);

// Check hero section
console.log('TV hero class:', tvHtml.match(/<section[^>]*class="([^"]*hero[^"]*)"/)?.[1]);
console.log('Fridge hero class:', fridgeHtml.match(/<section[^>]*class="([^"]*hero[^"]*)"/)?.[1]);

// Check table wrappers
console.log('TV tables:', (tvHtml.match(/<table/g) || []).length);
console.log('Fridge tables:', (fridgeHtml.match(/<table/g) || []).length);

// Check bottom bar
console.log('TV mobile-bottom-bar:', tvHtml.includes('mobile-bottom-bar'));
console.log('Fridge mobile-bottom-bar:', fridgeHtml.includes('mobile-bottom-bar'));

// Check floating CTA
console.log('TV scroll-floating-cta:', tvHtml.includes('scroll-floating-cta'));
console.log('Fridge scroll-floating-cta:', fridgeHtml.includes('scroll-floating-cta'));
