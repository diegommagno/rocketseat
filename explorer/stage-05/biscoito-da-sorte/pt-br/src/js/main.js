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
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

function randomFortune() {
  fortuneMessage.innerHTML = fortune[Math.floor(Math.random() * fortune.length)];
}




