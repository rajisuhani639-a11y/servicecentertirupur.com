const { spawn } = require('child_process');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 9225;

async function checkBottomBarImpact() {
  const browserProc = spawn(EDGE_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--user-data-dir=d:/servicecenterkarur.com/temp_browser_profile2'
  ], { stdio: 'ignore' });

  for (let i = 0; i < 20; i++) {
    try {
      await new Promise(r => setTimeout(r, 300));
      const res = await fetch(`http://localhost:${PORT}/json/version`);
      if (res.ok) break;
    } catch (e) {}
  }

  const tabRes = await fetch(`http://localhost:${PORT}/json/new?http://localhost:3000/fridge/refrigerator-repair-service-in-karur.html`, { method: 'PUT' });
  const tab = await tabRes.json();
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
    return new Promise(resolve => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await sendCommand('Runtime.enable');
  await sendCommand('Emulation.setDeviceMetricsOverride', {
    width: 412,
    height: 924,
    deviceScaleFactor: 1,
    mobile: true
  });

  await sendCommand('Page.navigate', { url: 'http://localhost:3000/fridge/refrigerator-repair-service-in-karur.html' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Measure with Bottom Bar and Floating CTA enabled
  const withCTA = await sendCommand('Runtime.evaluate', {
    expression: `
      (() => {
        const container = document.querySelector('.hero-content');
        const r = container.getBoundingClientRect();
        return {
          scrollWidth: document.documentElement.scrollWidth,
          containerWidth: r.width,
          containerLeft: r.left
        };
      })()
    `,
    returnByValue: true
  });

  // 2. Hide Bottom Bar and Floating CTA
  await sendCommand('Runtime.evaluate', {
    expression: `
      document.querySelector('.mobile-bottom-bar').style.display = 'none';
      document.querySelector('.scroll-floating-cta').style.display = 'none';
    `
  });

  await new Promise(r => setTimeout(r, 200));

  // 3. Measure with Bottom Bar and Floating CTA hidden
  const withoutCTA = await sendCommand('Runtime.evaluate', {
    expression: `
      (() => {
        const container = document.querySelector('.hero-content');
        const r = container.getBoundingClientRect();
        return {
          scrollWidth: document.documentElement.scrollWidth,
          containerWidth: r.width,
          containerLeft: r.left
        };
      })()
    `,
    returnByValue: true
  });

  const v1 = withCTA.result.result.value;
  const v2 = withoutCTA.result.result.value;

  console.log('--- BOTTOM CTA ISOLATION TEST AT 412px ---');
  console.log('WITH CTA:   ', v1);
  console.log('WITHOUT CTA:', v2);

  const widthDiff = Math.abs(v1.containerWidth - v2.containerWidth);
  const leftDiff = Math.abs(v1.containerLeft - v2.containerLeft);

  if (widthDiff < 0.1 && leftDiff < 0.1) {
    console.log('✓ PASS: Bottom CTA does NOT affect page width or alignment!');
  } else {
    console.error('❌ FAIL: Layout changed when CTA was toggled:', { widthDiff, leftDiff });
  }

  ws.close();
  browserProc.kill();
  process.exit(widthDiff < 0.1 ? 0 : 1);
}

checkBottomBarImpact().catch(e => {
  console.error(e);
  process.exit(1);
});
