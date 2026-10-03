const fs = require('fs');
const path = require('path');

console.log("Checking all internal links across the entire website...");

const rootDir = path.join(__dirname, '..');
let brokenLinks = 0;
let totalLinksChecked = 0;

function checkFileLinks(filePath, relDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match href="..." and src="..."
  const linkRegex = /(?:href|src)=["']([^"']+)["']/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const rawUrl = match[1];

    // Skip external, tel, mailto, whatsapp, hash, javascript
    if (
      rawUrl.startsWith('http://') ||
      rawUrl.startsWith('https://') ||
      rawUrl.startsWith('tel:') ||
      rawUrl.startsWith('mailto:') ||
      rawUrl.startsWith('#') ||
      rawUrl.startsWith('javascript:')
    ) {
      continue;
    }

    totalLinksChecked++;
    // Extract file path without query/hash
    const cleanPath = rawUrl.split('?')[0].split('#')[0];
    if (!cleanPath) continue;

    const resolvedPath = path.resolve(relDir, cleanPath);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`BROKEN LINK in ${path.relative(rootDir, filePath)}: "${rawUrl}" -> resolved to ${resolvedPath}`);
      brokenLinks++;
    }
  }
}

// 1. Check all root html files
const rootFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
rootFiles.forEach(f => checkFileLinks(path.join(rootDir, f), rootDir));

// 2. Check ac/ folder
const acDir = path.join(rootDir, 'ac');
if (fs.existsSync(acDir)) {
  const acFiles = fs.readdirSync(acDir).filter(f => f.endsWith('.html'));
  acFiles.forEach(f => checkFileLinks(path.join(acDir, f), acDir));
}

// 3. Check washing-machine/ folder
const wmDir = path.join(rootDir, 'washing-machine');
if (fs.existsSync(wmDir)) {
  const wmFiles = fs.readdirSync(wmDir).filter(f => f.endsWith('.html'));
  wmFiles.forEach(f => checkFileLinks(path.join(wmDir, f), wmDir));
}

console.log(`Total internal links checked: ${totalLinksChecked}`);
if (brokenLinks === 0) {
  console.log("SUCCESS: Zero broken links found across the entire website!");
} else {
  console.error(`FAIL: Found ${brokenLinks} broken links!`);
  process.exit(1);
}
