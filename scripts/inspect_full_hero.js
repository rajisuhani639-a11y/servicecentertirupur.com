const fs = require('fs');

function showHero(file) {
  const content = fs.readFileSync(file, 'utf8');
  const heroStart = content.indexOf('<section class="hero-section');
  const heroEnd = content.indexOf('</section>', heroStart) + 10;
  console.log('====================================');
  console.log('File:', file);
  console.log(content.substring(heroStart, heroEnd));
}

showHero('washing-machine/godrej-washing-machine-repair-service-in-erode.html');
showHero('servicecenter/akai-service-center-erode.html');
