// generate_kanyakumari_favicons.js
// Generates fresh, crisp vector SVG and multi-size PNG/ICO favicon assets
// for Service Center Kanyakumari using Headless Edge CDP.

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

const rootDir = path.resolve(__dirname, '..');

// 1. Clean, bold vector SVG design
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1e38"/>
      <stop offset="50%" stop-color="#0f3460"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="shieldBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Deep Ocean Navy Squircle Container -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect x="14" y="14" width="484" height="484" rx="98" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="6"/>

  <!-- Subtle Coastal Wave Curve at Base (Kanyakumari Tri-Sea Point) -->
  <path d="M 0 420 Q 140 450 256 415 Q 380 380 512 430 L 512 512 L 0 512 Z" fill="#38bdf8" opacity="0.18"/>

  <!-- Home Roof Peak (Appliance Home Protection) -->
  <g filter="url(#subtleShadow)">
    <path d="M 256 68 L 84 200 L 118 242 L 256 134 L 394 242 L 428 200 Z" fill="url(#goldGrad)"/>
    <!-- Chimney / AC vent -->
    <path d="M 334 115 L 372 115 L 372 170 L 334 140 Z" fill="url(#goldGrad)"/>

    <!-- Service Shield & Home Body -->
    <path d="M 124 230 L 124 330 C 124 402 256 450 256 450 C 256 450 388 402 388 330 L 388 230 L 256 126 Z" fill="url(#shieldBg)"/>
    <path d="M 146 240 L 146 325 C 146 382 256 426 256 426 C 256 426 366 382 366 325 L 366 240 L 256 150 Z" fill="#0a1e38"/>
  </g>

  <!-- Center Appliance Service Tools: Crossed Heavy-Duty Wrench & Screwdriver with Gear -->
  <g transform="translate(256, 292)" filter="url(#subtleShadow)">
    <!-- Service Gear Backdrop -->
    <path d="M-36,-12 L-28,-12 L-25,-22 L-32,-29 L-23,-38 L-14,-32 L-5,-35 L-5,-44 L9,-44 L9,-35 L18,-32 L27,-38 L36,-29 L29,-22 L32,-12 L40,-12 L40,2 L32,2 L29,12 L36,19 L27,28 L18,22 L9,25 L9,34 L-5,34 L-5,25 L-14,22 L-23,28 L-32,19 L-25,12 L-28,2 L-36,2 Z" fill="#0284c7" opacity="0.35"/>

    <!-- Screwdriver Shaft (Crossed 45 deg left) -->
    <rect x="-10" y="-80" width="20" height="150" rx="6" transform="rotate(-45)" fill="#64748b"/>
    <!-- Screwdriver Handle -->
    <rect x="-18" y="-95" width="36" height="55" rx="10" transform="rotate(-45)" fill="url(#goldGrad)"/>
    <!-- Screwdriver Tip -->
    <path d="M-5,60 L5,60 L2,78 L-2,78 Z" transform="rotate(-45)" fill="#e2e8f0"/>

    <!-- Bold Service Wrench (Crossed 45 deg right) -->
    <!-- Wrench Handle -->
    <rect x="-15" y="-76" width="30" height="152" rx="15" transform="rotate(45)" fill="url(#cyanGrad)"/>
    <!-- Wrench Open Head (Top) -->
    <g transform="rotate(45) translate(0, -68)">
      <circle cx="0" cy="0" r="30" fill="url(#cyanGrad)"/>
      <path d="M -13 -36 L 13 -36 L 9 -12 L -9 -12 Z" fill="#0a1e38"/>
      <circle cx="0" cy="-6" r="14" fill="#0a1e38"/>
    </g>
    <!-- Wrench Ring Head (Bottom) -->
    <g transform="rotate(45) translate(0, 68)">
      <circle cx="0" cy="0" r="26" fill="url(#cyanGrad)"/>
      <circle cx="0" cy="0" r="13" fill="#0a1e38"/>
    </g>

    <!-- Center Polished Emblem Check/Hub -->
    <circle cx="0" cy="0" r="18" fill="#ffffff"/>
    <circle cx="0" cy="0" r="11" fill="url(#goldGrad)"/>
  </g>
</svg>`;

// Write new favicon.svg
fs.writeFileSync(path.join(rootDir, 'favicon.svg'), svgContent, 'utf8');
console.log('Successfully saved fresh /favicon.svg');

// HTML wrapper for Headless Edge rendering
const htmlWrapper = `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: transparent; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; overflow: hidden; }
    svg { width: 100%; height: 100%; display: block; }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

const tempHtmlPath = path.join(rootDir, 'temp_favicon_render.html');
fs.writeFileSync(tempHtmlPath, htmlWrapper, 'utf8');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(htmlWrapper);
});

const PORT = 8112;
const CDP_PORT = 9244;
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function generateAssets() {
  await new Promise(r => server.listen(PORT, r));
  console.log(`Render server listening on port ${PORT}`);

  const profileDir = path.join(rootDir, 'temp_fav_profile');
  const browserProc = spawn(EDGE_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${profileDir}`
  ], { stdio: 'ignore' });

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      await new Promise(r => setTimeout(r, 200));
      const res = await fetch(`http://localhost:${CDP_PORT}/json/version`);
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch (e) {}
  }

  if (!versionData) {
    console.error('Could not connect to Headless Edge CDP');
    browserProc.kill();
    server.close();
    return;
  }

  const newTabRes = await fetch(`http://localhost:${CDP_PORT}/json/new?http://localhost:${PORT}/`, { method: 'PUT' });
  const tab = await newTabRes.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  };

  await new Promise(r => ws.onopen = r);

  function sendCommand(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await sendCommand('Page.enable');

  const targets = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'favicon-192x192.png' },
    { size: 512, name: 'favicon-512x512.png' }
  ];

  const pngBuffers = {};

  for (const item of targets) {
    await sendCommand('Emulation.setDeviceMetricsOverride', {
      width: item.size,
      height: item.size,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 100));

    const shot = await sendCommand('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: item.size, height: item.size, scale: 1 }
    });

    const buf = Buffer.from(shot.result.data, 'base64');
    fs.writeFileSync(path.join(rootDir, item.name), buf);
    pngBuffers[item.size] = buf;
    console.log(`Generated ${item.name} (${item.size}x${item.size} - ${buf.length} bytes)`);
  }

  // Create multi-resolution /favicon.ico containing 16x16, 32x32, 48x48
  const icoSizes = [16, 32, 48];
  const numImages = icoSizes.length;
  const headerLen = 6;
  const dirEntryLen = 16;
  let offset = headerLen + (dirEntryLen * numImages);

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(numImages, 4); // count

  const dirEntries = [];
  const imageBuffers = [];

  for (const s of icoSizes) {
    const imgBuf = pngBuffers[s];
    imageBuffers.push(imgBuf);

    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(s === 256 ? 0 : s, 0); // width
    entry.writeUInt8(s === 256 ? 0 : s, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(imgBuf.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    offset += imgBuf.length;
    dirEntries.push(entry);
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  fs.writeFileSync(path.join(rootDir, 'favicon.ico'), icoBuffer);
  console.log(`Generated valid multi-resolution favicon.ico (${icoBuffer.length} bytes)`);

  // Close browser and server
  ws.close();
  browserProc.kill();
  server.close();

  try {
    fs.unlinkSync(tempHtmlPath);
    fs.rmSync(profileDir, { recursive: true, force: true });
  } catch (e) {}

  // Remove obsolete/old favicon files as required
  const obsoleteFiles = [
    'favicon.jpeg',
    'favicon.jpg',
    'favicon-96x96.png',
    'favicon-180x180.png',
    'favicon.png'
  ];

  obsoleteFiles.forEach(f => {
    const p = path.join(rootDir, f);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`Removed obsolete favicon asset: ${f}`);
    }
  });

  console.log('Favicon generation and obsolete file cleanup COMPLETE!');
}

generateAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
