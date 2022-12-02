
// Display controls
let Display = {
  userMinutes: '00',
  minutes: document.querySelector('#timer .minutes'),
  seconds: document.querySelector('#timer .seconds'),

  setTimer(){
    Display.userMinutes = prompt('Please enter the number of minutes')
    Display.updateDisplayTimer(Display['userMinutes'], 0)
  },

  resetTimer(){
    Display.minutes.textContent = String(25).padStart(2, "0")
    Display.seconds.textContent = String(0).padStart(2, "0")
  },

  updateDisplayTimer(minutes, seconds){
    Display.minutes.textContent = String(minutes).padStart(2, "0")
    Display.seconds.textContent = String(seconds).padStart(2, "0")
  },

  countDown(){
    setTimeout(() => {
      let minutes = Number(Display.minutes.textContent)
      let seconds = Number(Display.seconds.textContent)
      

      if (minutes <= 0) {
        Controls.classToggleStop()
        Display.updateDisplayTimer(minutes, String(seconds - 1))
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

// Button controls
const Controls = {
  playBtn: document.querySelector('.play'),
  pauseBtn: document.querySelector('.pause'),
  soundOnBtn: document.querySelector('.sound-on'),
  soundOffBtn: document.querySelector('.sound-off'),
  stopBtn: document.querySelector('.stop'),
  setTimerBtn: document.querySelector('.set'),
  classTogglePlayPause() {
    Controls.playBtn.classList.toggle('hide')
    Controls.pauseBtn.classList.toggle('hide')
    Controls.stopBtn.classList.remove('hide')
    Controls.setTimerBtn.classList.add('hide')
    Display.countDown()
  },
  classToggleSoundOn() {
    Controls.soundOnBtn.classList.toggle('hide')
    Controls.soundOffBtn.classList.toggle('hide')
  },
  classToggleStop() {
    Controls.stopBtn.classList.toggle('hide')
    Controls.setTimerBtn.classList.toggle('hide')
    Controls.playBtn.classList.remove('hide')
    Controls.pauseBtn.classList.add('hide')
  },
  spaceKeydown(event) {
    console.log(event.code) // Pode usar event.wich, event.key, event.code (https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/)
    if(event.code === 'Space') {
      Controls.classTogglePlayPause()
    }
  }
}

// Button controls
Controls.playBtn.onclick = () => Controls.classTogglePlayPause()
Controls.pauseBtn.onclick = () => Controls.classTogglePlayPause()
Controls.soundOnBtn.onclick = () => Controls.classToggleSoundOn()
Controls.soundOffBtn.onclick = () => Controls.classToggleSoundOn()
Controls.stopBtn.onclick = () => (Controls.classToggleStop(), Display.resetTimer())

// setTimer controls
Controls.setTimerBtn.onclick = () => Display.setTimer()

// Keydown
window.addEventListener('keydown', Controls.spaceKeydown)


