const fs = require('fs');

function inspectSections(filePath) {
  console.log('=== Inspecting Sections for:', filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check Experience section
  const expMatch = content.match(/<!-- (?:Recent Service Experiences Section|Customer Service Experiences|Common Customer Experiences|Real-Life Customer Experiences)[^>]*-->[\s\S]*?<section[\s\S]*?<\/section>/i) ||
                   content.match(/<section class="section">[\s\S]*?(?:Experience|Customer Problems)[\s\S]*?<\/section>/i);
  if (expMatch) {
    console.log('Experience section found! Length:', expMatch[0].length);
    console.log('Snippet:', expMatch[0].slice(0, 200).replace(/\s+/g, ' '));
  } else {
    console.log('WARNING: Experience section NOT matched with regex!');
  }

  // Check FAQ section
  const faqMatch = content.match(/<section[^>]*id="faqSection"[^>]*>[\s\S]*?<\/section>/i);
  if (faqMatch) {
    console.log('FAQ section found! Length:', faqMatch[0].length);
    console.log('Snippet:', faqMatch[0].slice(0, 200).replace(/\s+/g, ' '));
  } else {
    console.log('WARNING: FAQ section NOT matched with regex!');
  }
}

inspectSections('ac/daikin-ac-repair-service-in-kanyakumari.html');
inspectSections('fridge/godrej-refrigerator-repair-service-in-kanyakumari.html');
inspectSections('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
inspectSections('tv/sony-tv-repair-service-in-kanyakumari.html');
inspectSections('servicecenter/lloyd-service-center-kanyakumari.html');
inspectSections('index.html');
