// Gerar random number, pedir um input. Contar número de tentativas.
// Comparar input com random number.
// Se igual, vai para a próxima tela informando que acertou, mostra quantas vezes tentou para acertar e botão de jogar novamente.
// Para isso, tirar a class .hide.
// Se diferente, console.log que errou e tenta novamente.


// let randomNumber = Math.round(Math.random() * 10)
let randomNumber = 5
let attemptAmount = 1

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    if(attemptAmount == 1) {
      document.querySelector(".screen-1").classList.add("hide")
      document.querySelector(".screen-2 h2").innerHTML = `Parabéns, você acertou em ${attemptAmount} vez.`
      document.querySelector(".screen-2").classList.remove("hide")
    } else {
      document.querySelector(".screen-1").classList.add("hide")
      document.querySelector("#screen-2 h2").innerHTML = `Parabéns, você acertou em ${attemptAmount} vezes.`
      document.querySelector(".screen-2").classList.remove("hide")
    }
  } else {
    alert("Tente novamente")
  }
  console.log(attemptAmount)
  attemptAmount++
}

function updatePage() {
  window.location.reload();
}