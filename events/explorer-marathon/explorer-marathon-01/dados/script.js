// Quais são minhas variáveis?

// Quais são meus dados de entrada?

// Quais são meus dados de saída?

// elementos
const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta') // vai no documento, pega esse selector

const numerosDado = [
  'O número do dado foi 1.',
  'O número do dado foi 2.',
  'O número do dado foi 3.',
  'O número do dado foi 4.',
  'O número do dado foi 5.',
  'O número do dado foi 6.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite um número.')
    return // se o input estiver vazio, pare a função, se não ele ia mostrar a resposta.
  }

  const pergunta = inputPergunta.value + '.' + '<div>' + '</div>' // vai transformar isso em html.

  // gerar número aleatório
  const totalRespostas = numerosDado.length // length para retornar o total de respostas.
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML =
    'Você escolheu: ' + pergunta + numerosDado[numeroAleatorio]

  // resposta desaparecer depois de 3 segundos.
  setTimeout(function () {
    elementoResposta.style.opacity = 0
  }, 3000)
}
