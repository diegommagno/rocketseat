/* Criar os jogos para o card. */
function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/flag/${player1}.svg" alt="${player1} Flag">
    <strong>${hour}</strong>
    <img src="./assets/flag/${player2}.svg" alt="${player2} Flag">
  </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

/* Controla a div inteira de #app
   innerHTML para pegar, mudar, apagar conteúdo HTML.
*/

document.querySelector('#app').innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW" />
  </header>

  <main id="cards">
    ${createCard("24/11", "Quinta", createGame("brazil", "16:00", "portugal"))} 
    ${createCard("28/11", "Segunda", 
    createGame("brazil", "16:00", "portugal") + createGame("brazil", "16:00", "portugal")
    )}
  </main>
`