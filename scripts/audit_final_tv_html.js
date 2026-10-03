const fs = require('fs');
const path = require('path');

const tvDir = path.resolve(__dirname, '..', 'tv');
const files = fs.readdirSync(tvDir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} TV brand HTML files in ${tvDir}`);

// 1. AI Words to flag
const aiWords = [
  'seamless', 'tailored', 'precision', 'precision diagnosis', 'comprehensive',
  'advanced diagnostic', 'sophisticated', 'state-of-the-art', 'cutting-edge',
  'next-generation', 'optimized', 'optimization', 'intelligent', 'expert-driven',
  'premium solution', 'unmatched', 'hassle-free', 'technology-driven',
  'robust solution', 'enhanced experience', 'personalized journey', 'strategic',
  'workflow', 'solution-oriented', 'customer-centric', 'innovative', 'streamlined'
];

// 2. Internal / Prompt words to flag
const promptWords = [
  'AI Prompt', 'Independent Task', 'Final Task', 'Content Task', 'SEO Task',
  'Research Task', 'Developer Notes', 'Writing Instructions', 'Generation Instructions',
  'Internal Notes'
];

// 3. Foreign cities to flag
const foreignCities = [
  'Delhi', 'Tirupur', 'Tirunelveli', 'Karur', 'Madurai',
  'Nagercoil', 'Chennai', 'Ghaziabad'
];

let totalAiHits = 0;
let totalPromptHits = 0;
let totalForeignCityHits = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(tvDir, file), 'utf8');

  // AI words check (case insensitive regex with word boundary)
  aiWords.forEach(word => {
    const reg = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = content.match(reg);
    if (matches) {
      console.log(`[AI WORD] ${file}: "${word}" (${matches.length}x)`);
      totalAiHits += matches.length;
    }
  });

  // Prompt words check
  promptWords.forEach(word => {
    if (content.toLowerCase().includes(word.toLowerCase())) {
      console.log(`[PROMPT WORD] ${file}: "${word}"`);
      totalPromptHits++;
    }
  });

  // Foreign city check
  foreignCities.forEach(city => {
    const reg = new RegExp(`\\b${city}\\b`, 'gi');
    const matches = content.match(reg);
    if (matches) {
      console.log(`[FOREIGN CITY] ${file}: "${city}" (${matches.length}x)`);
      totalForeignCityHits += matches.length;
    }
  });
});

console.log('\n--- SCAN RESULTS ---');
console.log(`Total AI word matches: ${totalAiHits}`);
console.log(`Total Prompt word matches: ${totalPromptHits}`);
console.log(`Total Foreign City matches: ${totalForeignCityHits}`);
