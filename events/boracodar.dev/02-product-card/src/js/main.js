const viewModel = document.querySelector('.viewModel')
const closeModel = document.querySelector('.closeModel')
const productImage = document.querySelector('#productImage')


viewModel.addEventListener('click', () => {
  viewModel.classList.add('hidden')
  closeModel.classList.remove('hidden')
  productImage.src = './src/img/sofaModel.gif'
})

closeModel.addEventListener('click', () => {
  viewModel.classList.remove('hidden')
  closeModel.classList.add('hidden')
  productImage.src = './src/img/sofa.png'
})