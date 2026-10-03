// scripts/generate_madurai_favicons.js
// Creates brand-new Madurai Favicon assets (SVG, PNGs, multi-resolution ICO)
// using headless Microsoft Edge via Chrome DevTools Protocol.

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Delete all existing old favicon files
const OLD_FAVICON_FILES = [
  'favicon.ico',
  'favicon.svg',
  'favicon.png',
  'favicon.jpg',
  'favicon.jpeg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'favicon-180x180.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'apple-touch-icon.png'
];

console.log('--- REMOVING OLD FAVICON ASSETS ---');
let removedCount = 0;
OLD_FAVICON_FILES.forEach(file => {
  const p = path.join(ROOT_DIR, file);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log(`Deleted: ${file}`);
    removedCount++;
  }
});
console.log(`Total old favicon files removed: ${removedCount}`);

// 2. High-Quality, High-Contrast Unified Brand Mark: House + Integrated Appliance Repair Wrench
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Premium Navy Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07192f"/>
      <stop offset="50%" stop-color="#0b2545"/>
      <stop offset="100%" stop-color="#133e6c"/>
    </linearGradient>

    <!-- Vibrant Sky Blue Roof Accent -->
    <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>

    <!-- Warm Gold Service Wrench Gradient -->
    <linearGradient id="wrenchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="35%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>

    <!-- Subtle Drop Shadow for Contrast -->
    <filter id="markShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Squircle Base for App Icon & Favicon Visibility -->
  <rect width="512" height="512" rx="116" fill="url(#bgGrad)"/>
  <rect x="16" y="16" width="480" height="480" rx="100" fill="none" stroke="#38bdf8" stroke-width="4" stroke-opacity="0.25"/>

  <!-- Core Unified Brand Mark: Home + Service Wrench -->
  <g filter="url(#markShadow)">
    <!-- 1. The House Body (Walls & Foundation) -->
    <path d="M124 230 V404 C124 419 137 432 152 432 H360 C375 432 388 419 388 404 V230" 
          fill="none" stroke="#f8fafc" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- 2. The House Roof (Gable Peak with Eaves) -->
    <path d="M82 242 L256 82 L430 242" 
          fill="none" stroke="url(#roofGrad)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Subtle House Chimney / Service Vent -->
    <path d="M352 172 V120 H388 V205" fill="none" stroke="#38bdf8" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- 3. Integrated Appliance Repair Wrench in House Heart -->
    <g transform="rotate(-35 256 312)">
      <!-- Wrench Handle / Shaft -->
      <rect x="234" y="196" width="44" height="176" rx="22" fill="url(#wrenchGrad)"/>
      <rect x="246" y="234" width="20" height="96" rx="10" fill="#0b2545" fill-opacity="0.3"/>

      <!-- Wrench Upper Open Jaw Head -->
      <path d="M212 210 C194 182 198 144 224 122 C254 96 296 100 320 126 C336 146 338 174 322 198 L292 184 L270 200 L252 184 Z" fill="url(#wrenchGrad)"/>

      <!-- Wrench Lower Closed Ring -->
      <circle cx="256" cy="380" r="44" fill="url(#wrenchGrad)"/>
      <circle cx="256" cy="380" r="22" fill="#0b2545"/>
    </g>

    <!-- Subtle Local Madurai Identity Spark / Apex Dot -->
    <circle cx="256" cy="56" r="14" fill="#fbbf24"/>
  </g>
</svg>`;

// Write new favicon.svg
fs.writeFileSync(path.join(ROOT_DIR, 'favicon.svg'), svgContent, 'utf8');
console.log('✓ Created /favicon.svg');

// HTML wrapper for rendering
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

const tempHtmlPath = path.join(ROOT_DIR, 'temp_favicon.html');
fs.writeFileSync(tempHtmlPath, htmlWrapper, 'utf8');

const PORT = 8094;
const CDP_PORT = 9230;
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(htmlWrapper);
});

async function generateAllFaviconFormats() {
  await new Promise(r => server.listen(PORT, r));
  console.log(`Temp server listening on port ${PORT}`);

  const profileDir = path.join(ROOT_DIR, 'temp_fav_profile');
  const browserProc = spawn(EDGE_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${profileDir}`
  ], { stdio: 'ignore' });

  // Connect to Edge CDP
  let versionData = null;
  for (let i = 0; i < 20; i++) {
    try {
      await new Promise(r => setTimeout(r, 300));
      const res = await fetch(`http://localhost:${CDP_PORT}/json/version`);
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch (e) {}
  }

  if (!versionData) {
    console.error('Failed to connect to Edge CDP for favicon generation');
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

  const requiredSizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 96, name: 'favicon-96x96.png' },
    { size: 180, name: 'favicon-180x180.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'favicon-192x192.png' },
    { size: 512, name: 'favicon-512x512.png' }
  ];

  const pngBuffers = {};

  for (const item of requiredSizes) {
    await sendCommand('Emulation.setDeviceMetricsOverride', {
      width: item.size,
      height: item.size,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 120));

    const shot = await sendCommand('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: item.size, height: item.size, scale: 1 }
    });

    const buf = Buffer.from(shot.result.data, 'base64');
    fs.writeFileSync(path.join(ROOT_DIR, item.name), buf);
    pngBuffers[item.size] = buf;
    console.log(`✓ Generated: /${item.name} (${item.size}x${item.size})`);
  }

  // Create valid multi-resolution ICO file (16, 32, 48)
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
  fs.writeFileSync(path.join(ROOT_DIR, 'favicon.ico'), icoBuffer);
  console.log(`✓ Generated multi-resolution /favicon.ico (${icoBuffer.length} bytes)`);

  // Cleanup
  ws.close();
  browserProc.kill();
  server.close();
  try {
    fs.unlinkSync(tempHtmlPath);
    fs.rmSync(profileDir, { recursive: true, force: true });
  } catch (e) {}

  console.log('✓ All 10 favicon formats generated successfully!');
}

generateAllFaviconFormats().catch(err => {
  console.error(err);
  process.exit(1);
});
