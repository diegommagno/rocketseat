// Feito pelo Myke

// get filter element
const filterElement = document.querySelector('header input');

// get cards elements
const cards = document.querySelectorAll('.cards li');

// add input event for the filter element
filterElement.addEventListener('input', filterCards)

// filter function
function filterCards() {

  // if the filter is not empty
  if(filterElement.value != '') {

    // for each card of cards
    for(let card of cards) { // Aqui estou crio uma variável card para cada um dos elementos de cards (cada um dos li).
      // get card heading (title)
      let title = card.querySelector('h2')
      // transform to lower case
      title = title.textContent.toLowerCase()
      // transform filter text to lower case
      let filterText = filterElement.value.toLowerCase()
      // if card title does not include the filter text
      if(!title.includes(filterText)) { // se isso for falso
        // hide the card element
        card.style.display = 'none';
      } else {
        // unhide the card element
        card.style.display = 'block';
      }
      
  } 
  
} else {
    // for each card of cards
    for(let card of cards) {
      // unhide the card element
      card.style.display = 'block';
    }
  }
}
