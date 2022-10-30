// Variável para criar o switch.
let isExplorer = true

function switchCard(event) {
  const card = event.currentTarget // Selects the card. 
  const backgroundImage = isExplorer
  ? "url('./assets/bg-ignite.svg')" 
  : "url('./assets/bg-explorer.svg')" // Ternary: true coloca ignite e false coloca explorer, porque estaria no ignite.
  isExplorer = !isExplorer
  card.style.backgroundImage = backgroundImage
}

/*
let isExplorer = true

function switchCard(event) {
  const card = event.currentTarget 
  const bg = isExplorer
  ? 'ignite' 
  : 'explorer' 
  isExplorer = !isExplorer
  card.style.backgroundImage = `url('./assets/bg-${bg}.svg')` 
}
*/