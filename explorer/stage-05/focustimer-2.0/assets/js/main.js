import { Controls } from './controls.js'
import { Display } from './display.js'
import { Sound } from './sound.js'

// Button controls
Controls.playBtn.onclick = () => Controls.classTogglePlay()
Controls.pauseBtn.onclick = () => Controls.classTogglePause()
Controls.stopBtn.onclick = () => Controls.classToggleStop()
Controls.forestBtnOff.onclick = () => (Sound.forestBgPlay(), Controls.classToggleForest())
Controls.forestBtnOn.onclick = () => (Sound.forestBgPause(), Controls.classToggleForest())
Controls.rainBtnOff.onclick = () => (Sound.rainBgPlay(), Controls.classToggleRain())
Controls.rainBtnOn.onclick = () => (Sound.rainBgPause(), Controls.classToggleRain())
Controls.coffeeShopBtnOff.onclick = () => (Sound.coffeeShopBgPlay(), Controls.classToggleCoffeeShop())
Controls.coffeeShopBtnOn.onclick = () => (Sound.coffeeShopBgPause(), Controls.classToggleCoffeeShop())
Controls.fireplaceBtnOff.onclick = () => (Sound.fireplaceBgPlay(), Controls.classToggleFireplace())
Controls.fireplaceBtnOn.onclick = () => (Sound.fireplaceBgPause(), Controls.classToggleFireplace())

// setTimer controls
// Controls.setTimerBtn.onclick = () => Display.setTimer()

// Keydown
window.addEventListener('keydown', Controls.spaceKeydown)


