document
  .querySelectorAll("input[type='radio']")
  .forEach(function(input) {
    input.onclick = function() {
      document.documentElement.removeAttribute('class')
      document.documentElement.classList.add(input.id)
    }
  })

/*
Pesquise por todos os seletores, input[type='radio'].
Para cada um deles, rode uma função.
A função rodada vai pegar um argumento input.
Cada input vai receber um onClick.
Cada onClick vai receber uma função. 
A função vai procurar no meu documento o documentElement, que é a tag HTML.
Na lista de class, vou adicionar o input.id, lembrando que a ID tem o mesmo nome da classe que contém as cores de bg e text.

*/