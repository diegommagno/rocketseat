// const playBtn = document.querySelector('.play')
// const pauseBtn = document.querySelector('.pause')
// const soundOnBtn = document.querySelector('.sound-on')
// const soundOffBtn = document.querySelector('.sound-off')

// playBtn.addEventListener('click', handleClick)
// pauseBtn.addEventListener('click', handleClick)
// soundOnBtn.addEventListener('click', handleClickSound)
// soundOffBtn.addEventListener('click', handleClickSound)

// function handleClick() {
// 	document.querySelector('.play').classList.toggle('hide')
//   document.querySelector('.pause').classList.toggle('hide')
// }

// function handleClickSound() {
// 	document.querySelector('.sound-on').classList.toggle('hide')
//   document.querySelector('.sound-off').classList.toggle('hide')
// }

const Controls = {
  playBtn: document.querySelector('.play'),
  pauseBtn: document.querySelector('.pause'),
  toggleClass() {
    document.querySelector('.play').classList.toggle('hide')
    document.querySelector('.pause').classList.toggle('hide')
  },
  spaceKeydown(event) {
    console.log(event.code) // Pode usar event.wich, event.key, event.code (https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/)
    if(event.code === 'Space') {
      Controls.toggleClass()
    }
  }
}

Controls.playBtn.onclick = () => Controls.toggleClass()
Controls.pauseBtn.onclick = () => Controls.toggleClass()

window.addEventListener('keydown', Controls.spaceKeydown)

