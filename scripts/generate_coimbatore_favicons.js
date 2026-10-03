// scripts/generate_coimbatore_favicons.js
// Generates fresh Coimbatore favicon suite in all required sizes:
// favicon.ico (multi-size: 16x16, 32x32, 48x48)
// favicon.svg
// favicon-16x16.png
// favicon-32x32.png
// favicon-48x48.png
// favicon-96x96.png
// favicon-192x192.png
// favicon-512x512.png
// apple-touch-icon.png (180x180)

const fs = require('fs');
const zlib = require('zlib');
const { createPng, createIco } = require('./png_generator.js');

// 1. Delete old favicon assets if present
const oldAssets = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'apple-touch-icon.png'
];

oldAssets.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      fs.unlinkSync(file);
      console.log(`Deleted old asset: ${file}`);
    } catch (e) {
      console.log(`Could not delete ${file}:`, e.message);
    }
  }
});

// 2. Generate new vector SVG
// Design: Deep navy background squircle, vibrant orange house roof/silhouette, crisp white service wrench
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#0a1e38"/>
    </linearGradient>
    <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff7700"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
    <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Dark Navy Squircle Base -->
  <rect width="512" height="512" rx="116" fill="url(#bg)"/>

  <!-- Orange House Silhouette -->
  <!-- Roof Peak at 256, 88. Base corners at 120,424 and 392,424 -->
  <path d="M 256 80 L 436 226 C 444 233 440 244 430 244 L 396 244 L 396 414 C 396 426 386 436 374 436 L 138 436 C 126 436 116 426 116 414 L 116 244 L 82 244 C 72 244 68 233 76 226 Z" fill="url(#orange)" filter="url(#glow)"/>

  <!-- Navy Portal / Hearth -->
  <path d="M 256 168 L 344 240 L 344 384 C 344 390 339 396 333 396 L 179 396 C 173 396 168 390 168 384 L 168 240 Z" fill="#0a1e38"/>

  <!-- White Wrench Service Symbol at 45 Degrees -->
  <!-- Center of wrench shaft roughly 256, 288 -->
  <g transform="translate(256, 282) rotate(-45) translate(-256, -282)" fill="#ffffff">
    <!-- Wrench Head Open Jaw -->
    <path d="M 256 182 C 228 182 208 202 208 228 C 208 242 214 254 224 262 L 244 262 L 244 336 C 244 344 250 350 258 350 C 266 350 272 344 272 336 L 272 262 L 292 262 C 302 254 308 242 308 228 C 308 202 288 182 256 182 Z M 256 204 L 270 226 L 242 226 Z"/>
    <!-- Closed Ring Spanner Head on bottom -->
    <circle cx="258" cy="358" r="26" fill="#ffffff"/>
    <circle cx="258" cy="358" r="14" fill="#0a1e38"/>
  </g>
</svg>`;

fs.writeFileSync('favicon.svg', svgContent, 'utf8');
console.log('Created fresh vector favicon.svg');

// 3. Mathematical rasterizer for PNG sizes
// Distance fields for smooth anti-aliased rendering
function renderFavicon(size) {
  const buf = Buffer.alloc(size * size * 4);
  const scale = size / 512;
  const samples = 4; // 4x4 supersampling for crisp edges at all sizes

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let rSum = 0, gSum = 0, bSum = 0, aSum = 0;

      for (let sy = 0; sy < samples; sy++) {
        for (let sx = 0; sx < samples; sx++) {
          const px = (x + (sx + 0.5) / samples) / scale;
          const py = (y + (sy + 0.5) / samples) / scale;

          // Check squircle background (radius ~116)
          const rx = Math.max(0, Math.abs(px - 256) - (256 - 116));
          const ry = Math.max(0, Math.abs(py - 256) - (256 - 116));
          const distSq = rx * rx + ry * ry;
          const inSquircle = distSq <= (116 * 116);

          if (!inSquircle) {
            continue; // transparent
          }

          // Default background: Deep Navy (#0a1e38)
          let pr = 10, pg = 30, pb = 56, pa = 255;

          // Check Orange House
          // Roof: Triangle from (256, 80) to (436, 226) and (76, 226)
          // Body: x in [116, 396], y in [244, 436]
          let inHouse = false;
          if (py >= 244 && py <= 436 && px >= 116 && px <= 396) {
            inHouse = true;
          } else if (py >= 80 && py <= 244) {
            const slopeL = (244 - 80) / (76 - 256);
            const slopeR = (244 - 80) / (436 - 256);
            const minX = 256 + (py - 80) / slopeL;
            const maxX = 256 + (py - 80) / slopeR;
            if (px >= minX && px <= maxX) {
              inHouse = true;
            }
          }

          if (inHouse) {
            // Bright vibrant orange (#ff6b00 to #ea580c)
            pr = 245; pg = 105; pb = 14;

            // Check Inner Navy Door/Hearth
            // Roof: (256, 168) to (344, 240) and (168, 240)
            // Body: [168, 344], y in [240, 396]
            let inPortal = false;
            if (py >= 240 && py <= 396 && px >= 168 && px <= 344) {
              inPortal = true;
            } else if (py >= 168 && py <= 240) {
              const minX = 256 + (py - 168) * (168 - 256) / (240 - 168);
              const maxX = 256 + (py - 168) * (344 - 256) / (240 - 168);
              if (px >= minX && px <= maxX) inPortal = true;
            }

            if (inPortal) {
              pr = 10; pg = 30; pb = 56; // Navy inside

              // Check White Wrench (centered at 256, 282 rotated -45 deg)
              // Transform (px, py) by +45 deg around (256, 282)
              const cos = Math.cos(Math.PI / 4);
              const sin = Math.sin(Math.PI / 4);
              const dx = px - 256;
              const dy = py - 282;
              const wx = 256 + (dx * cos - dy * sin);
              const wy = 282 + (dx * sin + dy * cos);

              let inWrench = false;

              // Shaft: wx in [244, 268], wy in [230, 340]
              if (wx >= 244 && wx <= 268 && wy >= 230 && wy <= 340) {
                inWrench = true;
              }
              // Head open jaw: circle at (256, 226) r=40 minus inner notch
              const headDist = Math.hypot(wx - 256, wy - 226);
              if (headDist <= 38 && wy <= 260) {
                inWrench = true;
                // Notch cutout
                if (wy < 226 && Math.abs(wx - 256) < 14) inWrench = false;
              }
              // Ring head on bottom: circle at (256, 356) r=28
              const ringDist = Math.hypot(wx - 256, wy - 356);
              if (ringDist <= 28) {
                if (ringDist > 14) inWrench = true;
                else inWrench = false; // inner hole
              }

              if (inWrench) {
                pr = 255; pg = 255; pb = 255; // Crisp White
              }
            }
          }

          rSum += pr;
          gSum += pg;
          bSum += pb;
          aSum += pa;
        }
      }

      const total = samples * samples;
      const idx = (y * size + x) * 4;
      buf[idx] = Math.round(rSum / total);
      buf[idx + 1] = Math.round(gSum / total);
      buf[idx + 2] = Math.round(bSum / total);
      buf[idx + 3] = Math.round(aSum / total);
    }
  }

  return buf;
}

// Generate PNG sizes
const sizes = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'favicon-96x96.png', size: 96 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'favicon-192x192.png', size: 192 },
  { file: 'favicon-512x512.png', size: 512 }
];

let png32Buf = null;

sizes.forEach(({ file, size }) => {
  const rgba = renderFavicon(size);
  const png = createPng(size, size, rgba);
  fs.writeFileSync(file, png);
  console.log(`Generated ${file} (${size}x${size}, ${png.length} bytes)`);
  if (size === 32) png32Buf = png;
});

// Generate favicon.ico (32x32 container)
if (png32Buf) {
  const ico = createIco(png32Buf, 32, 32);
  fs.writeFileSync('favicon.ico', ico);
  console.log(`Generated favicon.ico (32x32, ${ico.length} bytes)`);
}

// 4. Update site.webmanifest
const manifest = {
  "name": "Service Center Coimbatore",
  "short_name": "Service Center Coimbatore",
  "description": "Local doorstep home appliance repair and maintenance services in Coimbatore, Tamil Nadu.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0a1e38",
  "icons": [
    {
      "src": "/favicon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ]
};
fs.writeFileSync('site.webmanifest', JSON.stringify(manifest, null, 2), 'utf8');
console.log('Updated site.webmanifest with new icons');
