/* Criar os jogos para o card. */
function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/flag/icon-${player1}.svg" alt="icon-${player1} Flag">
    <strong>${hour}</strong>
    <img src="./assets/flag/icon-${player2}.svg" alt="icon-${player2} Flag">
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
    createCard("22/11", "Tuesday", createGame("argentina", "10:00", "saudi-arabia") + createGame("denmark", "13:00", "tunisia") + createGame("mexico", "16:00", "poland") + createGame("france", "19:00", "australia")) +
    createCard("23/11", "Wednesday", createGame("morocco", "10:00", "croatia") + createGame("germany", "13:00", "japan") + createGame("spain", "16:00", "costa-rica") + createGame("belgium", "19:00", "canada")) +
    createCard("24/11", "Thursday", createGame("switzerland", "10:00", "cameroon") + createGame("uruguay", "13:00", "south-korea") + createGame("portugal", "16:00", "ghana") + createGame("brazil", "19:00", "serbia")) +
    createCard("25/11", "Friday", createGame("wales", "10:00", "iran") + createGame("qatar", "13:00", "senegal") + createGame("netherlands", "16:00", "ecuador") + createGame("england", "19:00", "united-states")) + 
    createCard("26/11", "Saturday", createGame("tunisia", "10:00", "australia") + createGame("poland", "13:00", "saudi-arabia") + createGame("france", "16:00", "denmark") + createGame("argentina", "19:00", "mexico")) +
    createCard("27/11", "Sunday", createGame("japan", "10:00", "costa-rica") + createGame("belgium", "13:00", "morocco") + createGame("croatia", "16:00", "canada") + createGame("spain", "19:00", "germany")) +
    createCard("28/11", "Monday", createGame("cameroon", "10:00", "serbia") + createGame("south-korea", "13:00", "ghana") + createGame("brazil", "16:00", "switzerland") + createGame("portugal", "19:00", "uruguay")) +
    createCard("29/11", "Tuesday", createGame("ecuador", "10:00", "senegal") + createGame("netherlands", "13:00", "qatar") + createGame("iran", "16:00", "united-states") + createGame("wales", "19:00", "england")) +
    createCard("30/11", "Wednesday", createGame("tunisia", "10:00", "france") + createGame("australia", "13:00", "denmark") + createGame("poland", "16:00", "argentina") + createGame("saudi-arabia", "19:00", "mexico"))