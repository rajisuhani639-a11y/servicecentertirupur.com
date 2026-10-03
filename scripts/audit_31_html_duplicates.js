const fs = require('fs');
const path = require('path');

const tvDir = path.resolve(__dirname, '..', 'tv');
const files = fs.readdirSync(tvDir).filter(f => f.endsWith('.html'));

const sentenceMap = new Map();
let duplicateCount = 0;

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}

function normalizeSentence(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

const sectionRegexes = [
  { name: 'Intro', regex: /<div class="keyword-opening-box">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'TV Types', regex: /<div class="types-grid"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'Problems', regex: /<div class="problems-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'Parts', regex: /<div class="parts-expanded-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'Why Choose Us', regex: /<div class="why-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'Process Steps', regex: /<div class="process-steps">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'Customer Experiences', regex: /<div class="experiences-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ },
  { name: 'FAQs', regex: /<div class="faq-container">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/ }
];

const duplicatesList = [];

files.forEach(file => {
  const brandName = file.replace('-tv-repair-service-in-karur.html', '');
  const html = fs.readFileSync(path.join(tvDir, file), 'utf8');

  sectionRegexes.forEach(sec => {
    const match = html.match(sec.regex);
    if (!match) return;

    const plainText = stripHtml(match[1]);
    const sentences = plainText.split(/[.?!]+/).map(s => s.trim()).filter(s => s.split(/\s+/).length >= 5);

    sentences.forEach(rawSent => {
      const norm = normalizeSentence(rawSent);
      if (!norm) return;
      if (norm.includes('call now') || norm.includes('chat on whatsapp') || norm.includes('doorstep service')) return;

      if (sentenceMap.has(norm)) {
        const prev = sentenceMap.get(norm);
        if (prev.brand !== brandName) {
          duplicateCount++;
          duplicatesList.push({
            count: duplicateCount,
            file1: prev.file,
            sec1: prev.sec,
            file2: file,
            sec2: sec.name,
            sentence: rawSent.replace(/\s+/g, ' ')
          });
        }
      } else {
        sentenceMap.set(norm, { file, brand: brandName, sec: sec.name, text: rawSent });
      }
    });
  });
});

console.log(`Total duplicate sentences detected: ${duplicateCount}`);
duplicatesList.forEach(d => {
  console.log(`[${d.count}] (${d.sec2}) ${d.file2} == ${d.file1} (${d.sec1}) :: "${d.sentence}"`);
});
