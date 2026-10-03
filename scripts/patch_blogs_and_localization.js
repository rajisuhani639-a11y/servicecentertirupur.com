// scripts/patch_blogs_and_localization.js
const fs = require('fs');
const path = require('path');

// 1. Update scripts/build_tiruppur_blogs.js
const blogsScriptPath = path.join(__dirname, 'build_tiruppur_blogs.js');
let blogCode = fs.readFileSync(blogsScriptPath, 'utf8');

blogCode = blogCode.split('-tiruppur.html').join('-tirupur.html');
blogCode = blogCode.split('Doorstep Home Appliance Repair Across All Localities in Tirupur, Tamil Nadu – 641601, India').join('Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India');
blogCode = blogCode.split('Doorstep Home Appliance Repair Across All Localities in Tiruppur, Tamil Nadu – 641601, India').join('Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India');
blogCode = blogCode.replace(/https:\/\/maps\.google\.com\/maps\?q=[^"&]+/g, 'https://maps.google.com/maps?q=11.099761%2C77.347941');
blogCode = blogCode.replace(/"latitude":\s*11\.1085/g, '"latitude": 11.099761');
blogCode = blogCode.replace(/"longitude":\s*77\.3411/g, '"longitude": 77.347941');
blogCode = blogCode.replace(/"postalCode":\s*"641601"/g, '"postalCode": "641604"');
blogCode = blogCode.replace(/"streetAddress":\s*"[^"]+"/g, '"streetAddress": "Chikanna Chettiar St, Kamatchi Amman, Chikkanna"');

fs.writeFileSync(blogsScriptPath, blogCode, 'utf8');
console.log('✓ Updated build_tiruppur_blogs.js');

// 2. Update scripts/execute_full_tiruppur_localization.js
const execScriptPath = path.join(__dirname, 'execute_full_tiruppur_localization.js');
let execCode = fs.readFileSync(execScriptPath, 'utf8');

execCode = execCode.split('-tiruppur.html').join('-tirupur.html');
execCode = execCode.split('Doorstep Home Appliance Repair Across All Localities in Tirupur, Tamil Nadu – 641601, India').join('Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India');
execCode = execCode.split('Doorstep Home Appliance Repair Across All Localities in Tiruppur, Tamil Nadu – 641601, India').join('Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India');
execCode = execCode.split('Doorstep Service Across Tirupur, Tamil Nadu – 641601').join('Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India');
execCode = execCode.replace(/https:\/\/maps\.google\.com\/maps\?q=[^"&]+/g, 'https://maps.google.com/maps?q=11.099761%2C77.347941');
execCode = execCode.replace(/"latitude":\s*11\.1085/g, '"latitude": 11.099761');
execCode = execCode.replace(/"longitude":\s*77\.3411/g, '"longitude": 77.347941');
execCode = execCode.replace(/"postalCode":\s*"641601"/g, '"postalCode": "641604"');
execCode = execCode.replace(/"streetAddress":\s*"[^"]+"/g, '"streetAddress": "Chikanna Chettiar St, Kamatchi Amman, Chikkanna"');

fs.writeFileSync(execScriptPath, execCode, 'utf8');
console.log('✓ Updated execute_full_tiruppur_localization.js');
