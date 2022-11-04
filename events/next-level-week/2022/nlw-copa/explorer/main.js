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

let delay = -0.3; /* Para começar com 0 */
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
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

document.querySelector('#cards').innerHTML =
    createCard("24/11", "Quinta", createGame("brazil", "16:00", "portugal")) +
    createCard("28/11", "Segunda", createGame("brazil", "16:00", "portugal") + createGame("brazil", "16:00", "portugal"))