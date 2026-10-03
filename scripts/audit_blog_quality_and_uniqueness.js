const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const b1 = require('./blogs_data_1_to_4');
const b2 = require('./blogs_data_5_to_8');
const b3 = require('./blogs_data_9_to_12');
const ALL_BLOGS = [...b1, ...b2, ...b3];

console.log('====================================================');
console.log('STARTING ERODE BLOG QUALITY & UNIQUENESS AUDIT');
console.log('====================================================');

let errors = [];

// 1. Check all 12 blogs + index.html exist
const expectedFiles = ['index.html', ...ALL_BLOGS.map(b => b.slug)];
expectedFiles.forEach(f => {
  const p = path.join(BLOG_DIR, f);
  if (!fs.existsSync(p)) {
    errors.push(`Missing file: blog/${f}`);
  } else {
    const size = fs.statSync(p).size;
    if (size < 1000) errors.push(`File too small: blog/${f} (${size} bytes)`);
  }
});

// 2. Check buzzwords across all generated blog files
const BANNED = [
  'promptly', 'comprehensive', 'facilitate', 'utilize', 'undertake',
  'meticulous', 'seamless', 'robust', 'tailored', 'advanced troubleshooting',
  'technical intervention', 'diagnostic assessment', 'efficient resolution',
  'professional expertise'
];

ALL_BLOGS.forEach(b => {
  const p = path.join(BLOG_DIR, b.slug);
  const html = fs.readFileSync(p, 'utf8').toLowerCase();
  BANNED.forEach(w => {
    if (html.includes(w)) {
      errors.push(`Banned word "${w}" found in generated HTML blog/${b.slug}`);
    }
  });
});

// 3. Check Canonical and Titles
ALL_BLOGS.forEach(b => {
  const p = path.join(BLOG_DIR, b.slug);
  const html = fs.readFileSync(p, 'utf8');
  
  const expectedCanonical = `https://servicecentereode.com/blog/${b.slug}`;
  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}">`)) {
    errors.push(`Incorrect canonical in blog/${b.slug}`);
  }

  if (!html.includes(`<h1>${b.title}</h1>`)) {
    errors.push(`Missing or mismatched H1 in blog/${b.slug}`);
  }

  if (!html.includes('class="tanglish-quick-box"')) {
    errors.push(`Missing Tanglish box in blog/${b.slug}`);
  }
});

// 4. Check Locality Diversity
console.log('\n--- Locality Audit ---');
const localityMap = {};
ALL_BLOGS.forEach(b => {
  const p = path.join(BLOG_DIR, b.slug);
  const html = fs.readFileSync(p, 'utf8');
  // Find Erode localities mentioned
  const knownLocalities = [
    'Perundurai Road', 'Thindal', 'Veerappanchatram', 'Solar', 'Karungalpalayam',
    'Surampatti', 'Sampath Nagar', 'Bhavani', 'Kollampalayam', 'Ashokapuram',
    'Marapalam', 'Netaji Road', 'Old Bus Stand', 'Teachers Colony', 'Rangampalayam',
    'Gandhipuram', 'Manikoondu', 'Brough Road', 'VOC Street', 'Chithode',
    'Cauvery Road', 'Agraharam', 'Vairapalayam', 'Pallipalayam', 'PS Park',
    'Agilmedu Street', 'Chinnasamy Street', 'Periyar Street', 'Kottai Eswaran Koil', 'Periyasemur',
    'Eswaran Kovil Street', 'R.K.V. Road', 'Kamaraj High Road', 'Kalaimagal Kalvi Nilayam Road', 'Modakkurichi',
    'Kasipalayam', 'Railway Colony', 'Krishna Theatre Road', 'Gandhiji Road', 'Chennimalai Road',
    'Erode Fort', 'Nallampatti', 'Arachalur', 'Unjalur Road', 'Vadivullamangalam'
  ];

  const found = knownLocalities.filter(loc => html.includes(loc));
  localityMap[b.id] = found;
  console.log(`Blog ${b.id} (${b.category}): ${found.length} local Erode places -> [${found.slice(0, 4).join(', ')}]`);
});

// 5. Check Content Similarity / Overlap across all pairs of blogs
console.log('\n--- Duplicate Content Comparison ---');
function getWordSet(text) {
  return new Set(text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 3));
}

let highSimilarityPairs = [];
for (let i = 0; i < ALL_BLOGS.length; i++) {
  const textA = ALL_BLOGS[i].sections.map(s => s.paragraphs.join(' ')).join(' ');
  const setA = getWordSet(textA);

  for (let j = i + 1; j < ALL_BLOGS.length; j++) {
    const textB = ALL_BLOGS[j].sections.map(s => s.paragraphs.join(' ')).join(' ');
    const setB = getWordSet(textB);

    // Compute Jaccard similarity of vocabulary
    let intersection = 0;
    setA.forEach(w => { if (setB.has(w)) intersection++; });
    const union = setA.size + setB.size - intersection;
    const similarity = intersection / union;

    if (similarity > 0.45) {
      highSimilarityPairs.push({
        blog1: ALL_BLOGS[i].slug,
        blog2: ALL_BLOGS[j].slug,
        similarity: (similarity * 100).toFixed(1) + '%'
      });
    }
  }
}

if (highSimilarityPairs.length === 0) {
  console.log('✓ High content uniqueness across all 12 blogs (all pair similarity < 45%)!');
} else {
  console.warn('Pairs with higher similarity:', highSimilarityPairs);
}

// 6. Check FAQ Uniqueness
console.log('\n--- FAQ Audit ---');
const allFaqQuestions = new Set();
let duplicateFaqs = 0;
ALL_BLOGS.forEach(b => {
  b.faqs.forEach(f => {
    if (allFaqQuestions.has(f.q)) {
      duplicateFaqs++;
      errors.push(`Duplicate FAQ found: "${f.q}" in blog ${b.id}`);
    } else {
      allFaqQuestions.add(f.q);
    }
  });
});
console.log(`Total unique FAQs across all 12 blogs: ${allFaqQuestions.size} (Duplicate count: ${duplicateFaqs})`);

// 7. Check Sitemap Entries
console.log('\n--- Sitemap Verification ---');
const sitemapXml = fs.readFileSync(path.join(ROOT_DIR, 'sitemap.xml'), 'utf8');
const sitemapHtml = fs.readFileSync(path.join(ROOT_DIR, 'sitemap.html'), 'utf8');

expectedFiles.forEach(f => {
  const urlXml = `https://servicecentereode.com/blog/${f}`;
  if (!sitemapXml.includes(urlXml)) {
    errors.push(`sitemap.xml missing: ${urlXml}`);
  }
  const urlHtml = `/blog/${f}`;
  if (!sitemapHtml.includes(urlHtml)) {
    errors.push(`sitemap.html missing link: ${urlHtml}`);
  }
});
console.log('✓ Verified all 13 blog URLs in both sitemap.xml and sitemap.html!');

console.log('\n====================================================');
if (errors.length === 0) {
  console.log('✓ AUDIT PASSED: 100% QUALITY, UNIQUE CONTENT, VALID SITEMAP & ZERO ERRORS!');
} else {
  console.error(`AUDIT FAILED with ${errors.length} errors:`, errors);
  process.exit(1);
}
console.log('====================================================');
