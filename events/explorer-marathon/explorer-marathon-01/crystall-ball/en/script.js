// Quais são minhas variáveis?

// Quais são meus dados de entrada?

// Quais são meus dados de saída?

// elementos
const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta') // vai no documento, pega esse selector
const botaoPerguntar = document.querySelector('#botaoPerguntar')

const listaRespostas = [
  'Absolutely!',
  'I am not so sure about that one.',
  'Definitely yes.',
  'Do not count on that.',
  'No doubts!',
  'Ask me gain later.',
  'Yes, definitely!',
  'My answer is no.',
  'You can count on that.',
  'Better not to tell you now.',
  'My sources say no.',
  'Probably.',
  'My judgement is a bit clouded at the moment.',
  'Good perspective.',
  'Yes.',
  'Concentrate and ask again.',
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Type your question')
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
