const typedInputData = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

typedInputData.addEventListener('input', searchCards)

function searchCards() {
  if(typedInputData.value != '') {

    for(let card of cards) {
      let title = card.querySelector('h2')
      title = title.innerText.toLowerCase()
      let inputData = typedInputData.value.toLowerCase()
      if(title.includes(inputData)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    }

  } else {
    for(let card of cards) {
      card.style.display = 'block'
    }
  }
}