// Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

let attemptAmount = 1

let randomNumber
(function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 10) + 1
})(); 

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
        screen2.querySelector("h2").innerHTML = `Congratulations, you guessed in ${attemptAmount} attempt.`
      } else {
        toggleScreen()
        screen2.querySelector("h2").innerHTML = `Congratulations, you guessed in ${attemptAmount} attempts.`
      }
    } else {
      alert("Incorrect number. Please, try again.")
    }
    attemptAmount++
  } else {
    alert("Choose a number between 0 and 10 to try.")
  }
}

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 10) + 1
}

function handleButtonResetClick() {
  toggleScreen()
  attemptAmount = 1
  generateRandomNumber()
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