export const Sound = {
  buttonPressAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
  kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
  forestBg: new Audio("../focustimer-2/assets/audio/forest.wav"),
  rainBg: new Audio("../focustimer-2/assets/audio/rain.wav"),
  coffeeShopBg: new Audio("../focustimer-2/assets/audio/coffee-shop.wav"),
  fireplaceBg: new Audio("../focustimer-2/assets/audio/fireplace.wav"),
  
  pressButton() {
    Sound.buttonPressAudio.play()
  },

  timeEnd() {
    Sound.kitchenTimer.play()
  },

  forestBgPlay() {
    Sound.forestBg.play()
  },

  forestBgPause() {
    Sound.forestBg.pause()
  },

  rainBgPlay() {
    Sound.rainBg.play()
  },

  rainBgPause() {
    Sound.rainBg.pause()
  },

  coffeeShopBgPlay() {
    Sound.coffeeShopBg.play()
  },

  coffeeShopBgPause() {
    Sound.coffeeShopBg.pause()
  },

  fireplaceBgPlay() {
    Sound.fireplaceBg.play()
  },

  fireplaceBgPause() {
    Sound.fireplaceBg.pause()
  },
}

Sound.forestBg.loop = true
Sound.rainBg.loop = true
Sound.coffeeShopBg.loop = true
Sound.fireplaceBg.loop = true