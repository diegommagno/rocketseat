import { Controls } from './controls.js'
import { Sound } from './sound.js'

const minutesDisplay = document.querySelector('#timer .minutes')

// Display controls
export let Display = {
  userMinutes: Number(minutesDisplay.textContent), // Não conseguir usar Display.variable.textContent aqui dentro. Aula Refatorando os controles do Explorer Stage 05 explica como criar função.
  minutes: document.querySelector('#timer .minutes'),
  seconds: document.querySelector('#timer .seconds'),
  idTimeOut: '',

  setTimer(){
    let newMinutes = prompt('Please enter the number of minutes') 
    if(!newMinutes || newMinutes === 'colocar regex de letras') {
      Display.resetTimer()
      return
    }

    Display['userMinutes'] = newMinutes
    Display.updateDisplayTimer(Display['userMinutes'], 0)
  },

  resetTimer(){
    Display.updateDisplayTimer(Display.userMinutes, 0)
    Display.stopCountDown()
  },

  stopCountDown(){
    clearTimeout(Display.idTimeOut)
  },

  updateDisplayTimer(minutes, seconds){
    Display.minutes.textContent = String(minutes).padStart(2, "0")
    Display.seconds.textContent = String(seconds).padStart(2, "0")
  },

  countDown(){
    console.log(Display.userMinutes)
    console.log(Display.minutes.textContent)
    console.log(Display.seconds.textContent)
    
    Display.idTimeOut = setTimeout(() => {
      let minutes = Number(Display.minutes.textContent)
      let seconds = Number(Display.seconds.textContent)
      let timeIsOver = minutes <= 0 && seconds <= 0
      
      console.log('display minutes no countdown' + Display.minutes.textContent)
      
      Display.updateDisplayTimer(minutes, 0)

      if (timeIsOver) {
        Controls.classToggleStop()
        Display.updateDisplayTimer(2, 0)
        Sound.timeEnd()
        return
      }

      if(seconds <= 0){
        seconds = 60
        --minutes
      } 

      Display.updateDisplayTimer(minutes, String(seconds - 1))
      Display.countDown()
    }, 1000)
  }
}