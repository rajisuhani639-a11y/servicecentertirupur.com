// scripts/generate_new_tirupur_logo_and_favicons.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT_DIR = path.resolve(__dirname, '..');

// Design of the NEW Service Center Tirupur Core Icon:
// Concept: HOME + APPLIANCE REPAIR
// - Bold modern house roof line with eaves (#38bdf8)
// - Appliance chassis / washing drum & dial inner motif (#ffffff)
// - Integrated precision service wrench diagonally across (#fbbf24 golden amber)
// - Tech star spark at roof crest (#fbbf24)
// High contrast, ultra crisp at 16px, 32px up to 512px.

const masterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1e38"/>
      <stop offset="100%" stop-color="#05101f"/>
    </linearGradient>
    <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="wrenchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background Shield with Soft Rounded Corners -->
  <rect width="512" height="512" rx="108" fill="url(#bgGrad)"/>
  <rect x="12" y="12" width="488" height="488" rx="98" fill="none" stroke="#1e3a5f" stroke-width="4"/>

  <!-- Subtle Interior Ambient Glow -->
  <circle cx="256" cy="260" r="180" fill="url(#glowGrad)"/>

  <!-- 1. Modern Pitched House Roof with Overhangs -->
  <path d="M72 232 L256 82 L440 232" fill="none" stroke="url(#roofGrad)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Chimney / Sensor Pillar -->
  <path d="M352 160 V124 H390 V192" fill="none" stroke="url(#roofGrad)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- 2. Appliance Body / House Walls Base -->
  <path d="M120 220 V396 C120 418 138 436 160 436 H352 C374 436 392 418 392 396 V220" fill="none" stroke="#e2e8f0" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- 3. Appliance Circular Drum / Tech Ring -->
  <circle cx="256" cy="316" r="76" fill="#0c2340" stroke="#38bdf8" stroke-width="22"/>
  <circle cx="256" cy="316" r="44" fill="#061527" stroke="#94a3b8" stroke-width="10" stroke-dasharray="14 10"/>

  <!-- 4. Integrated Precision Service Wrench (Diagonally Accents Hearth & Drum) -->
  <g transform="rotate(-38 256 316)">
    <!-- Wrench Shaft -->
    <rect x="238" y="210" width="36" height="186" rx="18" fill="url(#wrenchGrad)"/>
    <!-- Open Wrench Jaw (Top) -->
    <path d="M220 224 C202 200 206 164 232 144 C260 120 300 124 322 148 C338 168 338 194 322 216 L294 200 L274 216 L258 200 Z" fill="url(#wrenchGrad)"/>
    <!-- Wrench Ring Base (Bottom) -->
    <circle cx="256" cy="382" r="38" fill="url(#wrenchGrad)"/>
    <circle cx="256" cy="382" r="18" fill="#0c2340"/>
  </g>

  <!-- 5. Brilliant Spark Star at Roof Apex -->
  <path d="M256 46 L262 68 L284 74 L262 80 L256 102 L250 80 L228 74 L250 68 Z" fill="#fbbf24"/>
</svg>`;

// Also header inline SVG for desktop/mobile site header
const headerInlineSvg = `<div class="brand-icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Modern Pitched Roof -->
            <path d="M4 14.5L16 4.5L28 14.5" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Sensor Pillar -->
            <path d="M22 9.8V7.5H24.5V11.8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- House Foundation & Appliance Frame -->
            <path d="M7 13.8V25C7 26.1 7.9 27 9 27H23C24.1 27 25 26.1 25 25V13.8" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
            <!-- Appliance Drum Circle -->
            <circle cx="16" cy="19.5" r="4.8" stroke="#38bdf8" stroke-width="1.4"/>
            <!-- Integrated Service Wrench -->
            <g transform="rotate(-38 16 19.5)">
              <rect x="14.8" y="13.2" width="2.4" height="11.5" rx="1.2" fill="#fbbf24"/>
              <path d="M13.6 14.2C12.4 12.6 12.7 10.3 14.2 9.1C16 7.6 18.6 7.8 20 9.4C21 10.7 21 12.3 20 13.6L18.4 12.6L17.1 13.6L16.1 12.6Z" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="2.5" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="1.1" fill="#07192f"/>
            </g>
            <!-- Spark -->
            <circle cx="16" cy="3.5" r="1.2" fill="#fbbf24"/>
          </svg>
        </div>`;

async function main() {
  console.log('Generating new Service Center Tirupur logo and favicons...');

  // Write master favicon.svg
  fs.writeFileSync(path.join(ROOT_DIR, 'favicon.svg'), masterSvg, 'utf8');
  console.log('✓ Created favicon.svg');

  // Also write images/logo.svg
  const imagesDir = path.join(ROOT_DIR, 'images');
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
  fs.writeFileSync(path.join(imagesDir, 'logo.svg'), masterSvg, 'utf8');
  console.log('✓ Created images/logo.svg');

  // Generate PNG sizes
  const sizes = [
    { size: 16, file: 'favicon-16x16.png' },
    { size: 32, file: 'favicon-32x32.png' },
    { size: 48, file: 'favicon-48x48.png' },
    { size: 96, file: 'favicon-96x96.png' },
    { size: 180, file: 'favicon-180x180.png' },
    { size: 180, file: 'apple-touch-icon.png' },
    { size: 192, file: 'favicon-192x192.png' },
    { size: 512, file: 'favicon-512x512.png' }
  ];

  for (const s of sizes) {
    const outPath = path.join(ROOT_DIR, s.file);
    await sharp(Buffer.from(masterSvg))
      .resize(s.size, s.size)
      .png()
      .toFile(outPath);
    console.log(`✓ Generated ${s.file} (${s.size}x${s.size})`);
  }

  // Generate favicon.ico (multi-image ICO or 32x32 PNG-in-ICO supported by all modern browsers)
  // Standard ICO format header:
  const iconBuffer16 = await sharp(Buffer.from(masterSvg)).resize(16, 16).png().toBuffer();
  const iconBuffer32 = await sharp(Buffer.from(masterSvg)).resize(32, 32).png().toBuffer();
  const iconBuffer48 = await sharp(Buffer.from(masterSvg)).resize(48, 48).png().toBuffer();

  function createIco(images) {
    // images: array of { width, height, buffer }
    const numImages = images.length;
    const headerSize = 6 + (16 * numImages);
    let totalSize = headerSize;
    images.forEach(img => { totalSize += img.buffer.length; });

    const ico = Buffer.alloc(totalSize);
    // Header
    ico.writeUInt16LE(0, 0); // reserved
    ico.writeUInt16LE(1, 2); // type: 1 = icon
    ico.writeUInt16LE(numImages, 4); // number of images

    let currentOffset = headerSize;
    images.forEach((img, idx) => {
      const entryOffset = 6 + (idx * 16);
      ico.writeUInt8(img.width >= 256 ? 0 : img.width, entryOffset);
      ico.writeUInt8(img.height >= 256 ? 0 : img.height, entryOffset + 1);
      ico.writeUInt8(0, entryOffset + 2); // color count
      ico.writeUInt8(0, entryOffset + 3); // reserved
      ico.writeUInt16LE(1, entryOffset + 4); // color planes
      ico.writeUInt16LE(32, entryOffset + 6); // bits per pixel
      ico.writeUInt32LE(img.buffer.length, entryOffset + 8); // image size in bytes
      ico.writeUInt32LE(currentOffset, entryOffset + 12); // image offset

      img.buffer.copy(ico, currentOffset);
      currentOffset += img.buffer.length;
    });

    return ico;
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: iconBuffer16 },
    { width: 32, height: 32, buffer: iconBuffer32 },
    { width: 48, height: 48, buffer: iconBuffer48 }
  ]);

  fs.writeFileSync(path.join(ROOT_DIR, 'favicon.ico'), icoBuffer);
  console.log('✓ Generated multi-resolution favicon.ico (16px, 32px, 48px)');

  console.log('All new favicon assets successfully created.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
