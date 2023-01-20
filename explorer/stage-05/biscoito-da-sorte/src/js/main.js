const fortuneBox1 = document.querySelector('.fortune-box-1');
const fortuneBox2 = document.querySelector('.fortune-box-2');

const fortuneCookie = document.querySelector('.fortune-box-1 img');
const resetButton = document.querySelector('.fortune-box-2 button');

resetButton.addEventListener('click', () => {
  fortuneBox1.classList.remove('hide')
  fortuneBox2.classList.add('hide')
})

fortuneCookie.addEventListener('click', () => {
  fortuneBox1.classList.add('hide')
  fortuneBox2.classList.remove('hide')
})


