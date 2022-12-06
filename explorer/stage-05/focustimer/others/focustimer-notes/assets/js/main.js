import { Controls } from './controls.js'
import { Display } from './display.js'
import { Sound } from './sound.js'

// Button controls
Controls.playBtn.onclick = () => Controls.classTogglePlay()
Controls.pauseBtn.onclick = () => Controls.classTogglePause()
Controls.soundOnBtn.onclick = () => Controls.classSoundOn()
Controls.soundOffBtn.onclick = () => Controls.classSoundOff()
Controls.stopBtn.onclick = () => (Controls.classToggleStop(), Display.resetTimer())

// setTimer controls
Controls.setTimerBtn.onclick = () => Display.setTimer()

// Keydown
window.addEventListener('keydown', Controls.spaceKeydown)


