const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Create a crisp, ultra-clean, high-contrast SVG
// Designed to look sharp at 16x16 up to 512x512
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#071b30"/>
      <stop offset="100%" stop-color="#0f3966"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#00f2fe"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background Squircle with subtle border -->
  <rect width="512" height="512" rx="108" fill="url(#bgGrad)"/>
  <rect x="14" y="14" width="484" height="484" rx="96" fill="none" stroke="#38bdf8" stroke-width="12" stroke-opacity="0.3"/>

  <!-- Center Decorative Glow Ring -->
  <circle cx="256" cy="225" r="160" fill="none" stroke="url(#cyanGrad)" stroke-width="16" stroke-opacity="0.25"/>

  <!-- Service Gear Emblem -->
  <g transform="translate(256, 215)" filter="url(#shadow)">
    <!-- Gear outer teeth -->
    <path d="M-30,-125 L30,-125 L38,-85 L72,-105 L114,-63 L94,-28 L134,-20 L134,40 L94,48 L114,83 L72,125 L38,105 L30,145 L-30,145 L-38,105 L-72,125 L-114,83 L-94,48 L-134,40 L-134,-20 L-94,-28 L-114,-63 L-72,-105 L-38,-85 Z" fill="#0c2a4d" stroke="#38bdf8" stroke-width="10"/>
    
    <!-- Central Gear Hollow Hole -->
    <circle cx="0" cy="10" r="54" fill="url(#bgGrad)" stroke="#38bdf8" stroke-width="8"/>

    <!-- Bold Service Wrench (45 degree angle) -->
    <g transform="rotate(-45 0 10)">
      <!-- Wrench Handle -->
      <rect x="-18" y="-40" width="36" height="150" rx="14" fill="#ffffff"/>
      <!-- Inner accent on handle -->
      <rect x="-8" y="10" width="16" height="70" rx="8" fill="#38bdf8"/>
      <!-- Lower ring hole -->
      <circle cx="0" cy="95" r="8" fill="#071b30"/>
      <!-- Wrench Head -->
      <path d="M-42,-35 C-42,-75 42,-75 42,-35 C42,-15 28,0 18,5 L18,-30 L-18,-30 L-18,5 C-28,0 -42,-15 -42,-35 Z" fill="#ffffff"/>
    </g>
  </g>

  <!-- Karur Location & Service Badge at Bottom -->
  <g transform="translate(256, 420)">
    <rect x="-140" y="-36" width="280" height="72" rx="20" fill="url(#cyanGrad)" filter="url(#shadow)"/>
    <text x="0" y="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="4">KARUR</text>
  </g>
</svg>`;

fs.writeFileSync('favicon.svg', svgContent, 'utf8');
console.log('Saved favicon.svg');

// 2. Generate PNGs using msedge headless screenshot
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const sizes = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'favicon-96x96.png', size: 96 },
  { file: 'favicon-180x180.png', size: 180 },
  { file: 'favicon-192x192.png', size: 192 },
  { file: 'favicon-512x512.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 }
];

sizes.forEach(({ file, size }) => {
  const tempHtml = path.resolve(`temp_${size}.html`);
  const outPng = path.resolve(file);
  fs.writeFileSync(tempHtml, `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${size}px; height: ${size}px; background: transparent; overflow: hidden; }
  img { width: ${size}px; height: ${size}px; display: block; }
</style>
</head>
<body>
  <img src="favicon.svg" />
</body>
</html>`);

  try {
    const cmd = `"${edgePath}" --headless --disable-gpu --hide-scrollbars --window-size=${size},${size} --screenshot="${outPng}" "file://${tempHtml}"`;
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Generated ${file} (${size}x${size}) - size: ${fs.statSync(outPng).size} bytes`);
  } catch (err) {
    console.error(`Error generating ${file}:`, err.message);
  } finally {
    if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
  }
});

// 3. Build multi-resolution favicon.ico containing PNG frames (16x16, 32x32, 48x48)
function buildIco(pngFiles, outIcoPath) {
  const images = pngFiles.map(f => ({
    name: f.file,
    width: f.size >= 256 ? 0 : f.size,
    height: f.size >= 256 ? 0 : f.size,
    buffer: fs.readFileSync(f.file)
  }));

  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4); // count of images

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    header,
    ...dirEntries,
    ...images.map(img => img.buffer)
  ]);

  fs.writeFileSync(outIcoPath, icoBuffer);
  console.log(`Generated ${outIcoPath} - size: ${icoBuffer.length} bytes`);
}

buildIco([
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 }
], 'favicon.ico');
