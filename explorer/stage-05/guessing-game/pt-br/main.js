// Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

let randomNumber = 5
let attemptAmount = 1

// Eventos
buttonTry.addEventListener('click', handleButtonTryClick)
buttonReset.addEventListener('click', handleButtonResetClick)
document.addEventListener('keydown', handleEnterKeyPress)

// callback functions
function handleButtonTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber")
 
  if(inputNumber.value != '' && inputNumber.value >= 0 && inputNumber.value <= 10 ){
    if(Number(inputNumber.value) == randomNumber) {
      if(attemptAmount == 1) {
        toggleScreen()
        screen2.querySelector("h2").innerHTML = `Parabéns, você acertou em ${attemptAmount} vez.`
      } else {
        toggleScreen()
        screen2.querySelector("h2").innerHTML = `Parabéns, você acertou em ${attemptAmount} vezes.`
      }
    } else {
      alert("Número incorreto. Tente novamente.")
    }
    attemptAmount++
  } else {
    alert("Escolha um número entre 0 a 10 para tentar.")
  }
}

function handleButtonResetClick() {
  toggleScreen()
  attemptAmount = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnterKeyPress(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleButtonResetClick()
  }
}