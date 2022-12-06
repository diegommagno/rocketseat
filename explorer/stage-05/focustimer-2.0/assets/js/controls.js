import { Display } from './display.js'
import { Sound } from './sound.js'

export const Controls = {
  playBtn: document.querySelector('.play'),
  pauseBtn: document.querySelector('.pause'),
  stopBtn: document.querySelector('.stop'),
  setTimerUpBtn: document.querySelector('.setTimerUp'),
  setTimerDownBtn: document.querySelector('.setTimerDown'),
  forestBtnOff: document.querySelector('.forestOff'),
  forestBtnOn: document.querySelector('.forestOn'),
  rainBtnOff: document.querySelector('.rainOff'),
  rainBtnOn: document.querySelector('.rainOn'),
  coffeeShopBtnOff: document.querySelector('.coffeeShopOff'),
  coffeeShopBtnOn: document.querySelector('.coffeeShopOn'),
  fireplaceBtnOff: document.querySelector('.fireplaceOff'),
  fireplaceBtnOn: document.querySelector('.fireplaceOn'),

  classTogglePlay() {
    Controls.playBtn.classList.toggle('hide')
    Controls.pauseBtn.classList.toggle('hide')
    Display.countDown()
    Sound.pressButton()
  },

  classTogglePause() {
    Controls.pauseBtn.classList.toggle('hide')
    Controls.playBtn.classList.toggle('hide')
    Display.stopCountDown()
    Sound.pressButton()
  },

  classToggleStop() {
    Controls.playBtn.classList.remove('hide')
    Controls.pauseBtn.classList.add('hide')
    Display.resetTimer()
    Sound.pressButton()
  },

  classToggleForest(){
    Controls.forestBtnOff.classList.toggle('hide')
    Controls.forestBtnOn.classList.toggle('hide')
  },

  classToggleRain(){
    Controls.rainBtnOff.classList.toggle('hide')
    Controls.rainBtnOn.classList.toggle('hide')
  },

  classToggleCoffeeShop(){
    Controls.coffeeShopBtnOff.classList.toggle('hide')
    Controls.coffeeShopBtnOn.classList.toggle('hide')
  },

  classToggleFireplace(){
    Controls.fireplaceBtnOff.classList.toggle('hide')
    Controls.fireplaceBtnOn.classList.toggle('hide')
  },

  spaceKeydown(event) {
    console.log(event.code) // Pode usar event.which, event.key, event.code (https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/)
    if(event.code === 'Space') {
      Controls.classTogglePlayPause()
    }
  }
}