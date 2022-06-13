// Quais são minhas variáveis?

// Quais são meus dados de entrada?

// Quais são meus dados de saída?

// elementos
const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta') // vai no documento, pega esse selector
const botaoPerguntar = document.querySelector('#botaoPerguntar')

const listaRespostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
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
