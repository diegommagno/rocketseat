import { Display } from './display.js'
import { Sound } from './sound.js'

// Button controls
export const Controls = {
  playBtn: document.querySelector('.play'),
  pauseBtn: document.querySelector('.pause'),
  soundOnBtn: document.querySelector('.sound-on'),
  soundOffBtn: document.querySelector('.sound-off'),
  stopBtn: document.querySelector('.stop'),
  setTimerBtn: document.querySelector('.set'),

  classTogglePlay() {
    Controls.playBtn.classList.toggle('hide')
    Controls.pauseBtn.classList.toggle('hide')
    Controls.stopBtn.classList.remove('hide')
    Controls.setTimerBtn.classList.add('hide')
    Display.countDown()
    Sound.pressButton()
  },

  classTogglePause() {
    Controls.pauseBtn.classList.toggle('hide')
    Controls.playBtn.classList.toggle('hide')
    Display.stopCountDown()
    Sound.pressButton()
  },

  classSoundOn() {
    Controls.soundOnBtn.classList.add('hide')
    Controls.soundOffBtn.classList.remove('hide')
    Sound.bgAudioPause()
  },

  classSoundOff() {
    Controls.soundOnBtn.classList.remove('hide')
    Controls.soundOffBtn.classList.add('hide')
    Sound.bgAudioPlay()
  },

  classToggleStop() {
    Controls.stopBtn.classList.toggle('hide')
    Controls.setTimerBtn.classList.toggle('hide')
    Controls.playBtn.classList.remove('hide')
    Controls.pauseBtn.classList.add('hide')
    Sound.pressButton()
  },
  
  spaceKeydown(event) {
    console.log(event.code) // Pode usar event.which, event.key, event.code (https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/)
    if(event.code === 'Space') {
      Controls.classTogglePlayPause()
    }
  }
}