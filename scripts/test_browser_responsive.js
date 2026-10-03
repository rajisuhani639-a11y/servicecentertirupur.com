const http = require('http');
const { spawn } = require('child_process');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 9224;

async function runBrowserTest() {
  console.log('Launching headless Edge on port', PORT);
  const browserProc = spawn(EDGE_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--user-data-dir=d:/servicecenterkarur.com/temp_browser_profile'
  ], { stdio: 'ignore' });

  // Wait for browser to be ready
  let versionData = null;
  for (let i = 0; i < 20; i++) {
    try {
      await new Promise(r => setTimeout(r, 300));
      const res = await fetch(`http://localhost:${PORT}/json/version`);
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch (e) {}
  }

  if (!versionData) {
    console.error('Failed to connect to Edge CDP');
    browserProc.kill();
    return;
  }

  console.log('Connected to Edge:', versionData.Browser);

  // Create a new target/tab
  const newTabRes = await fetch(`http://localhost:${PORT}/json/new?http://localhost:3000/fridge/refrigerator-repair-service-in-karur.html`, { method: 'PUT' });
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
    { width: 320, height: 600 },
    { width: 360, height: 740 },
    { width: 375, height: 667 },
    { width: 390, height: 844 },
    { width: 412, height: 924 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 }
  ];

  const testPages = [
    'http://localhost:3000/fridge/refrigerator-repair-service-in-karur.html',
    'http://localhost:3000/fridge/liebherr-refrigerator-repair-service-in-karur.html',
    'http://localhost:3000/fridge/samsung-refrigerator-repair-service-in-karur.html',
    'http://localhost:3000/fridge/whirlpool-refrigerator-repair-service-in-karur.html',
    'http://localhost:3000/fridge/bosch-refrigerator-repair-service-in-karur.html',
    'http://localhost:3000/fridge/hisense-refrigerator-repair-service-in-karur.html'
  ];

  let totalErrors = 0;

  for (const pageUrl of testPages) {
    const pageName = pageUrl.split('/').pop();
    console.log(`\n==================================================`);
    console.log(`TESTING PAGE: ${pageName}`);
    console.log(`==================================================`);

    await sendCommand('Page.navigate', { url: pageUrl });
    await new Promise(r => setTimeout(r, 600));

    for (const vp of viewports) {
      // Set viewport
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
            const hasOverflow = maxScroll > innerWidth;

            // Find any element whose bounding rect exceeds innerWidth
            const allElements = document.querySelectorAll('*');
            const overflowing = [];
            allElements.forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.right > innerWidth + 1) {
                overflowing.push({
                  tag: el.tagName,
                  id: el.id,
                  className: el.className ? (typeof el.className === 'string' ? el.className.substring(0, 40) : '') : '',
                  right: Math.round(rect.right),
                  width: Math.round(rect.width)
                });
              }
            });

            const container = document.querySelector('.container');
            const containerInfo = container ? {
              width: Math.round(container.getBoundingClientRect().width),
              left: Math.round(container.getBoundingClientRect().left),
              right: Math.round(container.getBoundingClientRect().right)
            } : null;

            const bottomBar = document.querySelector('.mobile-bottom-bar');
            const bottomBarInfo = bottomBar ? {
              display: window.getComputedStyle(bottomBar).display,
              position: window.getComputedStyle(bottomBar).position,
              width: Math.round(bottomBar.getBoundingClientRect().width)
            } : null;

            return {
              innerWidth,
              scrollWidth: maxScroll,
              hasOverflow,
              overflowCount: overflowing.length,
              sampleOverflows: overflowing.slice(0, 3),
              containerInfo,
              bottomBarInfo
            };
          })()
        `,
        returnByValue: true
      });

      const data = evalRes?.result?.result?.value;
      if (!data) {
        console.error('Failed to get eval data:', JSON.stringify(evalRes));
        totalErrors++;
        continue;
      }

      const status = data.hasOverflow ? '❌ OVERFLOW' : '✓ OK';
      if (data.hasOverflow) totalErrors++;
      console.log(`  Viewport ${vp.width}x${vp.height}: ${status} (Window: ${data.innerWidth}px, Document: ${data.scrollWidth}px, Container: ${data.containerInfo?.width}px, Left: ${data.containerInfo?.left}px)`);

      if (data.hasOverflow) {
        console.log('    Sample overflows:', JSON.stringify(data.sampleOverflows));
      }
    }
  }

  // Cleanup
  ws.close();
  browserProc.kill();
  console.log(`\n==================================================`);
  console.log(`BROWSER TEST SUMMARY: ${totalErrors === 0 ? 'ALL VIEWPORTS PASSED (0 OVERFLOWS)' : totalErrors + ' ERRORS FOUND'}`);
  console.log(`==================================================\n`);
  process.exit(totalErrors === 0 ? 0 : 1);
}

runBrowserTest().catch(err => {
  console.error('Error during browser test:', err);
  process.exit(1);
});
