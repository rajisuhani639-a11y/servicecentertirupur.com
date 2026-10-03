// Script to generate all required favicon assets using headless Edge
// Project: servicecenterkarur.com

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

const rootDir = path.join(__dirname, '..');

// 1. Create clean SVG favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b2545"/>
      <stop offset="100%" stop-color="#134074"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <!-- Background Rounded Shield -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect x="16" y="16" width="480" height="480" rx="96" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="8"/>
  
  <!-- Outer Ring Elements -->
  <circle cx="256" cy="256" r="190" fill="none" stroke="url(#accentGrad)" stroke-width="14" stroke-dasharray="28 14"/>

  <!-- Service Wrench and Gear Graphic -->
  <g transform="translate(256, 256) scale(1.15)">
    <!-- Central Gear Core -->
    <path d="M-60,-20 L-45,-20 L-40,-35 L-52,-47 L-35,-64 L-20,-52 L-5,-57 L-5,-72 L19,-72 L19,-57 L34,-52 L49,-64 L66,-47 L54,-35 L59,-20 L74,-20 L74,4 L59,4 L54,19 L66,31 L49,48 L34,36 L19,41 L19,56 L-5,56 L-5,41 L-20,36 L-35,48 L-52,31 L-40,19 L-45,4 L-60,4 Z" fill="rgba(255,255,255,0.15)"/>
    <circle cx="7" cy="-8" r="28" fill="#0b2545"/>
    
    <!-- Crossed Service Tools: Wrench -->
    <path d="M-90,65 L50,-75 C60,-85 75,-85 85,-75 C95,-65 95,-50 85,-40 L-55,100 C-65,110 -80,110 -90,100 C-100,90 -100,75 -90,65 Z" fill="url(#accentGrad)"/>
    <!-- Wrench Head -->
    <path d="M40,-65 C35,-50 45,-30 65,-25 C85,-20 100,-35 95,-50 L120,-75 C128,-83 125,-95 115,-100 L95,-80 L80,-95 L100,-115 C95,-125 83,-128 75,-120 Z" fill="#ffffff"/>
    <path d="M-50,75 L-65,90 C-72,97 -83,97 -90,90 C-97,83 -97,72 -90,65 L-75,50 Z" fill="#ffffff"/>
  </g>

  <!-- SCD Monogram Badge -->
  <rect x="146" y="360" width="220" height="64" rx="20" fill="#0284c7" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))"/>
  <text x="256" y="405" font-family="'Inter', -apple-system, sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="4">KARUR</text>
</svg>`;

fs.writeFileSync(path.join(rootDir, 'favicon.svg'), svgContent, 'utf8');
console.log('Saved /favicon.svg');

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

const tempHtmlPath = path.join(rootDir, 'temp_favicon.html');
fs.writeFileSync(tempHtmlPath, htmlWrapper, 'utf8');

// 2. Start HTTP server to serve temp_favicon.html
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(htmlWrapper);
});

const PORT = 8092;
const CDP_PORT = 9228;
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function generatePngs() {
  await new Promise(r => server.listen(PORT, r));
  console.log(`Temp server listening on port ${PORT}`);

  const profileDir = path.join(rootDir, 'temp_fav_profile');
  const browserProc = spawn(EDGE_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${profileDir}`
  ], { stdio: 'ignore' });

  // Connect
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

  const sizes = [
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

  for (const item of sizes) {
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
    fs.writeFileSync(path.join(rootDir, item.name), buf);
    pngBuffers[item.size] = buf;
    console.log(`Generated /${item.name} (${item.size}x${item.size})`);
  }

  // Also generate JPEG versions
  await sendCommand('Emulation.setDeviceMetricsOverride', {
    width: 192,
    height: 192,
    deviceScaleFactor: 1,
    mobile: false
  });
  const shotJpg = await sendCommand('Page.captureScreenshot', {
    format: 'jpeg',
    quality: 92,
    clip: { x: 0, y: 0, width: 192, height: 192, scale: 1 }
  });
  const jpgBuf = Buffer.from(shotJpg.result.data, 'base64');
  fs.writeFileSync(path.join(rootDir, 'favicon.jpg'), jpgBuf);
  fs.writeFileSync(path.join(rootDir, 'favicon.jpeg'), jpgBuf);
  console.log('Generated /favicon.jpg and /favicon.jpeg');

  // Create valid ICO file containing 16x16, 32x32, 48x48 PNGs
  // ICO header format:
  // 2 bytes: reserved (0)
  // 2 bytes: type (1 for icon)
  // 2 bytes: count of images
  // For each image: 16-byte directory entry
  // Followed by image data
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
  console.log(`Generated valid multi-resolution /favicon.ico (${icoBuffer.length} bytes)`);

  // Cleanup
  ws.close();
  browserProc.kill();
  server.close();
  try {
    fs.unlinkSync(tempHtmlPath);
    fs.rmSync(profileDir, { recursive: true, force: true });
  } catch (e) {}

  console.log('All favicon assets generated successfully!');
}

generatePngs().catch(console.error);
