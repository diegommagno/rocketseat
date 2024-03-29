const form01 = document.querySelector('#form-01');
const form02 = document.querySelector('#form-02');
const form03 = document.querySelector('#form-03');
const btnNextForm01 = document.querySelector('#form-01 #btn-next');
const btnNextForm02 = document.querySelector('#form-02 #btn-next');
const btnBackForm02 = document.querySelector('#form-02 #btn-back');
const btnNextForm03 = document.querySelector('#form-03 #btn-next');
const btnBackForm03 = document.querySelector('#form-03 #btn-back');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

btnNextForm01.addEventListener('click', () => {
  form01.classList.add('hidden');
  form02.classList.remove('hidden');
}
);

btnNextForm02.addEventListener('click', () => {
  form02.classList.add('hidden');
  form03.classList.remove('hidden');
});

btnNextForm03.addEventListener('click', () => {
  setTimeout(() => {
    jsConfetti.addConfetti();
  }, 500);
  form03.classList.add('hidden');
  approved.classList.remove('hidden');
});

btnBackForm02.addEventListener('click', () => {
  form02.classList.add('hidden');
  form01.classList.remove('hidden');
});

btnBackForm03.addEventListener('click', () => {
  form03.classList.add('hidden');
  form02.classList.remove('hidden');
});