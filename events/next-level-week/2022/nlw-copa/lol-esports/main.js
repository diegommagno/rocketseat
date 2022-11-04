/* Criar os jogos para o card. */
function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/flag/${player1}.png" alt="${player1} Flag">
    <strong>${hour}</strong>
    <img src="./assets/flag/${player2}.png" alt="${player2} Flag">
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
    ${createCard("22/10", "Saturday", createGame("edg", "22:00", "drx") + createGame("loud", "22:00", "fnatic"))}
    ${createCard("23/10", "Sunday", createGame("edg", "22:00", "drx"))}
    ${createCard("29/10", "Saturday", createGame("t1", "22:00", "jdg"))}
    ${createCard("30/10", "Sunday", createGame("drx", "21:00", "gen"))}
    ${createCard("06/11", "Sunday", createGame("drx", "00:00", "t1"))} 
  </main>
`