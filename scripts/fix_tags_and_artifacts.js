const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
console.log(`Found ${htmlFiles.length} HTML files.`);

let fixedMetaArrows = 0;
let updatedGoogleTags = 0;
let fixedImages = 0;

const NEW_GTAG_BLOCK = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TE87PQ007T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TE87PQ007T');
</script>`;

htmlFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Fix stray >> in meta tags
  if (content.includes('>>')) {
    const beforeCount = (content.match(/>>/g) || []).length;
    content = content.replace(/(<meta[^>]+)>>/g, '$1>');
    content = content.replace(/(content="[^"]*")>>/g, '$1>');
    const afterCount = (content.match(/>>/g) || []).length;
    if (beforeCount !== afterCount) {
      fixedMetaArrows += (beforeCount - afterCount);
    }
  }

  // 2. Replace Google tag
  // Match any existing gtag script block
  const gtagRegex = /<!--\s*Google tag \(gtag\.js\)[\s\S]*?gtag\('config',\s*['"][^'"]+['"]\);\s*<\/script>/gi;
  if (gtagRegex.test(content)) {
    content = content.replace(gtagRegex, NEW_GTAG_BLOCK);
    updatedGoogleTags++;
  } else {
    // If no comment, check for standalone gtag script
    const standaloneGtag = /<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=[^"]+"><\/script>\s*<script>[\s\S]*?gtag\('config',\s*['"][^'"]+['"]\);\s*<\/script>/gi;
    if (standaloneGtag.test(content)) {
      content = content.replace(standaloneGtag, NEW_GTAG_BLOCK);
      updatedGoogleTags++;
    } else if (content.includes('</head>')) {
      // If no tag found, insert right after <head> or <meta charset="UTF-8">
      if (content.includes('<meta charset="UTF-8">')) {
        content = content.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n' + NEW_GTAG_BLOCK);
      } else {
        content = content.replace('<head>', '<head>\n' + NEW_GTAG_BLOCK);
      }
      updatedGoogleTags++;
    }
  }

  // 3. Fix homepage hero image if present
  if (content.includes('hero-appliance-service-madurai.')) {
    content = content.replace('hero-appliance-service-madurai.', 'hero-appliance-service-madurai.svg');
    fixedImages++;
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
  }
});

console.log(`Summary:`);
console.log(`Fixed meta stray >>: ${fixedMetaArrows}`);
console.log(`Updated Google tags to G-TE87PQ007T: ${updatedGoogleTags}`);
console.log(`Fixed homepage hero image: ${fixedImages}`);
