const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 8086;
const CDP_PORT = 9226;
const EDGE_PATH = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
  ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  : 'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json'
};

// 1. Start HTTP Server
const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';
  const filePath = path.join(__dirname, '..', reqUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

async function main() {
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Local HTTP server running on port ${PORT}`);

  // 2. Launch headless Edge
  const profileDir = path.join(__dirname, '..', 'temp_resp_test_profile');
  const browserProc = spawn(EDGE_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${profileDir}`
  ], { stdio: 'ignore' });

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
    console.error('Failed to connect to Edge CDP');
    browserProc.kill();
    server.close();
    process.exit(1);
  }

  console.log('Connected to Edge:', versionData.Browser);

  // New tab
  const newTabRes = await fetch(`http://localhost:${CDP_PORT}/json/new?http://localhost:${PORT}/servicecenter/home-appliance-service-center-karur.html`, { method: 'PUT' });
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

  await new Promise(resolve => ws.onopen = resolve);

  function sendCommand(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await sendCommand('Runtime.enable');
  await sendCommand('Page.enable');
  await sendCommand('DOM.enable');

  const viewports = [
    { width: 320, height: 600, label: '320px (Small Mobile)' },
    { width: 360, height: 740, label: '360px (Standard Mobile)' },
    { width: 375, height: 667, label: '375px (iPhone SE)' },
    { width: 390, height: 844, label: '390px (iPhone 12/13/14)' },
    { width: 412, height: 924, label: '412px (Samsung/Pixel)' },
    { width: 430, height: 932, label: '430px (iPhone Pro Max)' },
    { width: 768, height: 1024, label: '768px (Tablet)' },
    { width: 1024, height: 768, label: '1024px (Small Desktop)' },
    { width: 1280, height: 800, label: '1280px (Standard Desktop)' },
    { width: 1366, height: 768, label: '1366px (Laptop)' },
    { width: 1440, height: 900, label: '1440px (Desktop)' },
    { width: 1920, height: 1080, label: '1920px (FHD Desktop)' }
  ];

  const testPages = [
    `/index.html`,
    `/sitemap.html`,
    `/servicecenter/home-appliance-service-center-karur.html`,
    `/servicecenter/samsung-service-center-karur.html`,
    `/servicecenter/whirlpool-service-center-karur.html`,
    `/ac/voltas-ac-repair-service-in-karur.html`,
    `/fridge/samsung-refrigerator-repair-service-in-karur.html`,
    `/washing-machine/ifb-washing-machine-repair-service-in-karur.html`,
    `/tv/sony-tv-repair-service-in-karur.html`
  ];

  let totalErrors = 0;

  for (const pagePath of testPages) {
    console.log(`\n==================================================`);
    console.log(`TESTING: ${pagePath}`);
    console.log(`==================================================`);

    await sendCommand('Page.navigate', { url: `http://localhost:${PORT}${pagePath}` });
    await new Promise(r => setTimeout(r, 600));

    for (const vp of viewports) {
      await sendCommand('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width <= 768
      });

      await new Promise(r => setTimeout(r, 150));

      const evalRes = await sendCommand('Runtime.evaluate', {
        expression: `
          (() => {
            const innerWidth = window.innerWidth;
            const scrollWidth = document.documentElement.scrollWidth;
            const bodyScrollWidth = document.body.scrollWidth;
            const maxScroll = Math.max(scrollWidth, bodyScrollWidth);
            const hasOverflow = maxScroll > innerWidth + 1; // 1px margin of error for subpixel

            const allElements = document.querySelectorAll('*');
            const overflowing = [];
            if (hasOverflow) {
              allElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > innerWidth + 2) {
                  overflowing.push({
                    tag: el.tagName,
                    className: typeof el.className === 'string' ? el.className.substring(0, 30) : '',
                    right: Math.round(rect.right),
                    width: Math.round(rect.width)
                  });
                }
              });
            }

            return {
              innerWidth,
              scrollWidth: maxScroll,
              hasOverflow,
              overflowCount: overflowing.length,
              sample: overflowing.slice(0, 3)
            };
          })()
        `,
        returnByValue: true
      });

      const data = evalRes?.result?.result?.value;
      if (!data) {
        console.error('Failed to get eval data');
        totalErrors++;
        continue;
      }

      const status = data.hasOverflow ? `❌ OVERFLOW (${data.overflowCount} elements)` : '✓ OK';
      if (data.hasOverflow) {
        totalErrors++;
        console.log(`  ${vp.label}: ${status} (Window: ${data.innerWidth}px, Document: ${data.scrollWidth}px)`);
        console.log('    Sample overflows:', JSON.stringify(data.sample));
      } else {
        console.log(`  ${vp.label}: ${status}`);
      }
    }
  }

  // Cleanup
  ws.close();
  browserProc.kill();
  server.close();
  try {
    fs.rmSync(profileDir, { recursive: true, force: true });
  } catch (e) {}

  console.log(`\n==================================================`);
  console.log(`RESPONSIVE TEST COMPLETED: Total errors = ${totalErrors}`);
  console.log(`==================================================`);
  process.exit(totalErrors > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
