import { Controls } from './controls.js'

// Display controls
export let Display = {
  userMinutes: 25, // Não consegui puxar o valor do HTML
  minutes: document.querySelector('#timer .minutes'),
  seconds: document.querySelector('#timer .seconds'),
  idTimeOut: '',

  setTimer(){
    let newMinutes = prompt('Please enter the number of minutes') // if isso não for null, 0, undefined passa o newMinutes inserido (número) para o resto da aplicação.
    if(!newMinutes){
      Display.resetTimer()
      return
    }

    Display['userMinutes'] = newMinutes
    Display.updateDisplayTimer(Display['userMinutes'], 0)
  },

  resetTimer(){
    Display.updateDisplayTimer(Display.userMinutes, 0)
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
      
      Display.updateDisplayTimer(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        Controls.classToggleStop()
        return
      }

      if(seconds <= 0){
        seconds = 3
        --minutes
      } 

      Display.updateDisplayTimer(minutes, String(seconds - 1))
      Display.countDown()
    }, 1000)
  }
}