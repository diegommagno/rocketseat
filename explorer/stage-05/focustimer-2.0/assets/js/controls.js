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
  darkThemeBtn: document.querySelector('.darkTheme'),
  lightThemeBtn: document.querySelector('.lightTheme'),
  htmlBody: document.querySelector('body'),
  htmlSpan: document.querySelectorAll('span'),
  cssRoot: document.querySelector(':root'),
  playBtn2: document.querySelector('#play'),

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

  classToggleForest() {
    Controls.forestBtnOff.classList.toggle('hide')
    Controls.forestBtnOn.classList.toggle('hide')
  },

  classToggleRain() {
    Controls.rainBtnOff.classList.toggle('hide')
    Controls.rainBtnOn.classList.toggle('hide')
  },

  classToggleCoffeeShop() {
    Controls.coffeeShopBtnOff.classList.toggle('hide')
    Controls.coffeeShopBtnOn.classList.toggle('hide')
  },

  classToggleFireplace() {
    Controls.fireplaceBtnOff.classList.toggle('hide')
    Controls.fireplaceBtnOn.classList.toggle('hide')
  },
  classToggleDarkTheme() {
    Controls.darkThemeBtn.classList.toggle('hide')
    Controls.lightThemeBtn.classList.toggle('hide')
    Controls.darkThemeTimer()
  },

  darkThemeTimer() {
    Controls.htmlBody.style.backgroundColor = '#121214'
    Controls.cssRoot.style.setProperty('--controls-color', '#FFFFFF');
    for (let i = 0; i < Controls.htmlSpan.length; i++) {
      Controls.htmlSpan[i].style.color = '#FFFFFF'
    }

    // let updateColor = getComputedStyle(Controls.cssRoot);
    // console.log("The value of --controls-color is: " + updateColor.getPropertyValue('--controls-color'));
  },

  classToggleLightTheme() {
    Controls.lightThemeBtn.classList.toggle('hide')
    Controls.darkThemeBtn.classList.toggle('hide')
    Controls.lightThemeTimer()
  },

  lightThemeTimer() {
    Controls.htmlBody.style.backgroundColor = '#FFFFFF'
    Controls.cssRoot.style.setProperty('--controls-color', '#323238');
    for (let i = 0; i < Controls.htmlSpan.length; i++) {
      Controls.htmlSpan[i].style.color = '#323238'
    }
  },

  spaceKeydown(event) {
    console.log(event.code) // Pode usar event.which, event.key, event.code (https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/)
    if(event.code === 'Space') {
      Controls.classTogglePlayPause()
    }
  }
}