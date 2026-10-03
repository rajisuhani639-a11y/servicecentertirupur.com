const fs = require('fs');
const path = require('path');

// Target pool of 24 genuine Karur localities for pin badges
const richLocalityPool = [
  'Gandhigramam',
  'Pasupathipalayam',
  'Vennaimalai',
  'Sanapiratti',
  'Puliyur',
  'Rayanur',
  'Karur Town',
  'Thanthonimalai',
  'Thorakkalpatti',
  'Vangal',
  'Chinna Andankovil',
  'Sukkaliyur',
  'Velayuthampalayam',
  'Sengunthapuram',
  'Uppidamangalam',
  'Mayanur',
  'Pugalur',
  'Inam Karur',
  'Aravakurichi',
  'Kathaparai',
  'Nerur',
  'Sellandipalayam',
  'Manmangalam',
  'Kovai Road'
];

function redistributeFolder(folder) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  let filesModified = 0;
  let badgesUpdated = 0;
  
  files.forEach((f, fileIdx) => {
    const filePath = path.join(folder, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find experiences section
    let expIdx = content.indexOf('id="experiences"');
    if (expIdx === -1) {
      expIdx = content.search(/<h2[^>]*>[^<]*(?:Experiences|Real-Life|Customer Situations|Recent)[^<]*<\/h2>/i);
    }
    if (expIdx === -1) return;
    
    const secEnd = content.indexOf('</section>', expIdx);
    if (secEnd === -1) return;
    
    let secHtml = content.slice(expIdx, secEnd);
    
    // Check if section contains 📍
    if (!secHtml.includes('📍')) return;
    
    // Find all cards in this section
    const cardRegex = /<div class=["'](?:experience-card|service-card)["'][\s\S]*?<\/div>\s*<\/div>/gi;
    // We can split by experience-card or service-card
    const cardSplits = secHtml.split(/(?=<div class=["'](?:experience-card|service-card)["'])/i);
    if (cardSplits.length <= 1) return;
    
    let newSecHtml = cardSplits[0];
    let fileChanged = false;
    
    for (let i = 1; i < cardSplits.length; i++) {
      let card = cardSplits[i];
      const pinMatch = card.match(/📍\s*([A-Za-z\s]+?)(?:<\/div>|<\/span>)/);
      if (pinMatch) {
        const oldLoc = pinMatch[1].trim();
        // Determine a replacement locality using fileIdx and card index
        const locIndex = (fileIdx * 3 + i - 1) % richLocalityPool.length;
        const newLoc = richLocalityPool[locIndex];
        
        if (oldLoc !== newLoc) {
          card = card.replace(`📍 ${oldLoc}`, `📍 ${newLoc}`);
          
          // Also replace in card text if exact match
          // Replace first instance of oldLoc in this card
          card = card.replace(new RegExp(`\\b${oldLoc}\\b`, 'g'), newLoc);
          fileChanged = true;
          badgesUpdated++;
        }
      }
      newSecHtml += card;
    }
    
    if (fileChanged) {
      content = content.slice(0, expIdx) + newSecHtml + content.slice(secEnd);
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
    }
  });
  
  console.log(`Folder [${folder}]: Modified ${filesModified} files, redistributed ${badgesUpdated} locality badges.`);
}

['fridge', 'tv', 'service-center'].forEach(folder => redistributeFolder(folder));
