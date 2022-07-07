// Quais são minhas variáveis?

// Quais são meus dados de entrada?

// Quais são meus dados de saída?

// elementos
const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta') // vai no documento, pega esse selector
const botaoPerguntar = document.querySelector('#botaoPerguntar')

const listaRespostas = [
  'Absolutely!',
  'I would not be so sure.',
  'It has been decided that yes.',
  'Do not count on that.',
  'No doubts!',
  'Ask again later.',
  'Yes, definitely!',
  'My answer is no.',
  'You can count on that.',
  'Better not to tell you about that now.',
  'On my eyes, yes.',
  'My sources say no.',
  'Probably.',
  'It is not possible to predict that now.',
  'Good perspective.',
  'The perspectives are not that good.',
  'Yes.',
  'Concentrate and ask again.',
  'Signs are pointing towards a yes.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Type you question')
    return // se o input estiver vazio, pare a função, se não ele ia mostrar a resposta.
  }

  botaoPerguntar.setAttribute('disabled', true) // atributo desabled: desabilita o botao

  const pergunta = '<div>' + inputPergunta.value + '</div>' // vai transformar isso em html.

  // gerar número aleatório
  const totalRespostas = listaRespostas.length // length para retornar o total de respostas.
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + listaRespostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // resposta desaparecer depois de 3 segundos.
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    botaoPerguntar.removeAttribute('disabled') // para remover o disabled e poder perguntar novamente
  }, 3000)
}
