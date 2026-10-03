const fs = require('fs');

function inspectSC(file) {
  console.log('\n=======================================');
  console.log('FILE:', file);
  const content = fs.readFileSync(file, 'utf8');
  
  // Find H2s
  const h2s = content.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi);
  console.log('H2s:', h2s ? h2s.map(h => h.replace(/<[^>]+>/g, '').trim()) : []);

  // Look for sections with ids or class section
  const sections = content.match(/<section[\s\S]*?<\/section>/gi);
  if (sections) {
    sections.forEach((sec, idx) => {
      const idMatch = sec.match(/id="([^"]+)"/);
      const h2Match = sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
      const h3Match = sec.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
      console.log(`Sec ${idx+1}: id="${idMatch ? idMatch[1] : ''}" | h2="${h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : ''}" | h3="${h3Match ? h3Match[1].replace(/<[^>]+>/g, '').trim() : ''}"`);
    });
  }
}

inspectSC('servicecenter/godrej-service-center-erode.html');
inspectSC('servicecenter/akai-service-center-erode.html');
inspectSC('servicecenter/samsung-service-center-erode.html');
