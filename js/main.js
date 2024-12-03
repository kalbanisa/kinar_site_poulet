function showProductInfo() {
  const productType = document.getElementById('loopType').value.toLowerCase();
  const productInfo = document.getElementById('loopInfo');
  let info = '';

  switch(productType) {
      case 'poule':
          info = `
              <h2>Pouler en général</h2>
              <p>Le poulet est riche en protéines de haute qualité, nécessaires pour la croissance et la réparation des muscles.</p>
          `;
          break;
      case 'oeuf':
          info = `
              <h2>Oeufs</h2>
              <p>Les œufs que tu proposes sont probablement plus frais que ceux du commerce, souvent issus de poules élevées localement et dans de bonnes conditions.</p>
          `;
          break;
      case 'pintate':
          info = `
              <h2>Pintades</h2>
              <p>La viande de pintade est une excellente source de protéines de haute qualité, nécessaires à la croissance et à la réparation des tissus corporels.</p>
          `;
      //     break;
      // case 'poule blan':
      //     info = `
      //         <h2>Poules blanches</h2>
      //         <p>Les poules blanches sont souvent élevées dans des conditions optimales, garantissant une excellente santé et productivité.</p>
      //     `;
          break;
      case 'poussin':
          info = `
              <h2>Poussins</h2>
              <p>Tu garantis la qualité et la santé de chaque poussin, ce qui rassure tes clients sur leur investissement.</p>
          `;
          break;
      default:
          info = '<p>Type de produit non reconnu. Veuillez entrer "poule", "poussin", "oeuf",ou "pintate"   .</p>';
  }

  productInfo.innerHTML = info;
}
