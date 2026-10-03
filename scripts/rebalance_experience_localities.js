const fs = require('fs');
const path = require('path');

// 7 distinct locality sets covering diverse Karur neighborhoods (6 localities per set)
const localitySets = [
  ['Gandhigramam', 'Pasupathipalayam', 'Vennaimalai', 'Sanapiratti', 'Puliyur', 'Rayanur'],
  ['Karur Town', 'Thanthonimalai', 'Thorakkalpatti', 'Vangal', 'Chinna Andankovil', 'Sukkaliyur'],
  ['Velayuthampalayam', 'Sengunthapuram', 'Uppidamangalam', 'Mayanur', 'Pugalur', 'Inam Karur'],
  ['Aravakurichi', 'Kathaparai', 'Nerur', 'Sellandipalayam', 'Manmangalam', 'Kovai Road'],
  ['Vaiyapuri Nagar', 'Chettipalayam', 'Periya Andankovil', 'Kamarajapuram', 'Chinnandankovil East', 'Min Nagar'],
  ['Sanjeevi Nagar', 'Ramakrishnapuram', 'Anna Nagar South', 'Thiru Manilayur', 'Somur', 'Vengamedu'],
  ['Jawahar Bazaar', 'Light House Corner', 'Azad Road', 'Arts College Road', 'Thavittupalayam', 'Paramathi Road']
];

function rebalanceFolder(folder) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  let filesModified = 0;
  let cardsUpdated = 0;
  
  files.forEach((f, fileIdx) => {
    const filePath = path.join(folder, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let expIdx = content.indexOf('id="experiences"');
    if (expIdx === -1) {
      expIdx = content.search(/<h2[^>]*>[^<]*(?:Experiences|Real-Life|Customer Situations|Recent)[^<]*<\/h2>/i);
    }
    if (expIdx === -1) return;
    
    const secEnd = content.indexOf('</section>', expIdx);
    if (secEnd === -1) return;
    
    let secHtml = content.slice(expIdx, secEnd);
    
    // Check if this section has cards with h4s
    const cards = secHtml.split(/<div class=["']service-card["']/);
    if (cards.length > 2) {
      // Pick a locality set based on fileIdx
      const chosenSet = localitySets[fileIdx % localitySets.length];
      let newSecHtml = cards[0];
      let cardChanged = false;
      
      for (let i = 1; i < cards.length; i++) {
        let card = '<div class="service-card"' + cards[i];
        const h4Match = card.match(/<h4[^>]*>(.*?)<\/h4>/i);
        if (h4Match) {
          const oldTitle = h4Match[1];
          // Check if old title starts with a locality followed by —, –, or -
          const titleLocMatch = oldTitle.match(/^([A-Za-z\s]+?)(?:\s+(?:Family|Apartment|House|Clinic|Residence|Home|Shop|Store|Villa|Quarter))?\s*([—–-])\s*(.*)$/);
          if (titleLocMatch) {
            const oldLoc = titleLocMatch[1].trim();
            const dash = titleLocMatch[2];
            const problem = titleLocMatch[3];
            const newLoc = chosenSet[(i - 1) % chosenSet.length];
            
            if (oldLoc !== newLoc) {
              const newTitle = `${newLoc} Residence ${dash} ${problem}`;
              card = card.replace(oldTitle, newTitle);
              
              // Also replace the old locality in the paragraph text if present at start
              // e.g. "Thanthonimalai side-la" -> "Gandhigramam side-la", "Thanthonimalai-la" -> "Gandhigramam-la"
              const locRegex = new RegExp(`\\b${oldLoc}\\b`, 'g');
              card = card.replace(locRegex, newLoc);
              cardChanged = true;
              cardsUpdated++;
            }
          }
        }
        newSecHtml += card.replace('<div class="service-card"', '');
      }
      
      if (cardChanged) {
        content = content.slice(0, expIdx) + newSecHtml + content.slice(secEnd);
        fs.writeFileSync(filePath, content, 'utf8');
        filesModified++;
      }
    }
  });
  
  console.log(`Folder [${folder}]: Rebalanced localities in ${filesModified} files (${cardsUpdated} cards updated).`);
}

['washing-machine', 'ac', 'fridge', 'tv', 'service-center'].forEach(folder => rebalanceFolder(folder));
