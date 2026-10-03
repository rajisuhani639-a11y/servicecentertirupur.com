const fs = require('fs');
const path = require('path');
const { generateMainAcLocalitiesHtml } = require('./generate_locality_cards');

const mainAcPath = path.join(__dirname, '..', 'ac-repair-service-in-karur.html');
let content = fs.readFileSync(mainAcPath, 'utf8');

const startTag = '<div class="localities-grid-expanded">';
const endTag = '</div>\n    </div>\n  </section>';

const startIdx = content.indexOf(startTag);
if (startIdx === -1) {
  console.error("Could not find start of localities-grid-expanded");
  process.exit(1);
}

// Find next closing section tag after startIdx
const nextSectionIdx = content.indexOf('</section>', startIdx);
const endIdx = content.lastIndexOf('</div>\n    </div>', nextSectionIdx);

const newLocalities = generateMainAcLocalitiesHtml();

const updatedContent = content.substring(0, startIdx + startTag.length) + '\n' + newLocalities + '\n      ' + content.substring(endIdx);

fs.writeFileSync(mainAcPath, updatedContent, 'utf8');
console.log("Successfully updated localities in ac-repair-service-in-karur.html");
