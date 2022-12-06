export const Sound = {
  buttonPressAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
  kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
  bgAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"),
  
  pressButton() {
    Sound.buttonPressAudio.play()
  },

  timeEnd() {
    Sound.kitchenTimer.play()
  },

  bgAudioPlay() {
    Sound.bgAudio.play()
  },

  bgAudioPause() {
    Sound.bgAudio.pause()
  }
}

Sound.bgAudio.loop = true