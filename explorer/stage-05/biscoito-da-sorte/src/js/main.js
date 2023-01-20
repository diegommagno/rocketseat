const fortuneBox1 = document.querySelector('.fortune-box-1');
const fortuneBox2 = document.querySelector('.fortune-box-2');

const fortuneMessage = document.querySelector('.fortune-box-2__message p')

const fortuneCookie = document.querySelector('.fortune-box-1 img');
const resetButton = document.querySelector('.fortune-box-2 button');

resetButton.addEventListener('click', () => {
  fortuneBox1.classList.remove('hide')
  fortuneBox2.classList.add('hide')
})

fortuneCookie.addEventListener('click', () => {
  fortuneBox1.classList.add('hide')
  fortuneBox2.classList.remove('hide')
  randomFortune()
})

const fortune = [
  "Look how far you've come.",
  "Little by little, one travels far.",
  "What good are wings, without the courage to fly.",
  "Don't let yesterday take up too much of today.",
  "Loving yourself isn't vanity. It's sanity.",
  "The road to success is always under construction.",
  "Not all those who wander are lost.",
  "The most effective way to do it, is to do it."
]

function randomFortune() {
  fortuneMessage.innerHTML = fortune[Math.floor(Math.random() * fortune.length)];
}




