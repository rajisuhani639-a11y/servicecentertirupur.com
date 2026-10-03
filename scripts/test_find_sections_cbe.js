const fs = require('fs');

function findSection(content, headingPatterns, idPattern) {
  if (idPattern) {
    const idRegex = new RegExp('<section[^>]*id=["\']' + idPattern + '["\'][^>]*>', 'i');
    const idMatch = content.match(idRegex);
    if (idMatch) {
      const start = idMatch.index;
      const end = content.indexOf('</section>', start);
      if (end !== -1) return { start, end: end + 10 };
    }
  }

  for (const pattern of headingPatterns) {
    let headingIdx = -1;
    if (typeof pattern === 'string') {
      headingIdx = content.indexOf(pattern);
    } else if (pattern instanceof RegExp) {
      const m = content.match(pattern);
      if (m) headingIdx = m.index;
    }

    if (headingIdx !== -1) {
      const sectionStart = content.lastIndexOf('<section', headingIdx);
      const sectionEnd = content.indexOf('</section>', headingIdx);
      if (sectionStart !== -1 && sectionEnd !== -1 && sectionStart < headingIdx && headingIdx < sectionEnd) {
        return { start: sectionStart, end: sectionEnd + 10 };
      }
    }
  }
  return null;
}

const testFiles = [
  'index.html',
  'ac/ac-repair-service-in-kanyakumari.html',
  'fridge/samsung-refrigerator-repair-service-in-kanyakumari.html',
  'washing-machine/bosch-washing-machine-repair-service-in-kanyakumari.html',
  'tv/sony-tv-repair-service-in-kanyakumari.html',
  'servicecenter/samsung-service-center-kanyakumari.html'
];

const locPatterns = [/Areas We Cover/i, /Service Center Areas/i, /Repair Near Me/i, /Service Near Me/i, /Across .* Localities/i, /Localities/i];
const expPatterns = [/Recent\s+[\w\s-]+\s+Service Experiences/i, /Recent\s+[\w\s-]+\s+Repair Experiences/i, /Recent\s+[\w\s-]+\s+TV Repair Experiences/i, /Common\s+[\w\s-]+\s+Problems Customers Face/i, /Customer Experiences/i, /Common Customer Experiences/i];
const faqPatterns = [/Frequently Asked Questions/i, /FAQ/i];

testFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log('Testing ' + f + ':');
  const loc = findSection(c, locPatterns, 'localitiesSection');
  const exp = findSection(c, expPatterns);
  const faq = findSection(c, faqPatterns, 'faqSection');
  console.log('  Locality section found:', !!loc);
  console.log('  Experience section found:', !!exp);
  console.log('  FAQ section found:', !!faq);
});
