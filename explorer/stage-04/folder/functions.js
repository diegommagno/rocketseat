//Function Scope

let subject = 'create video'

function createThought(subject) {
  subject = 'Study'
  return subject
}

console.log(createThought(subject)) // returns study
console.log(subject) // returns create video 
// Não ter o parâmetro subject, ficando createThought(), faz os dois resultados serão Study porque o primeiro console roda a função, substituindo o conteúdo de let para Study e o próximo somente irá puxar o estado atual de let, que é Study.

// Function Hoisting

// Função com expressão, quando declara Const e let sayMyName = function () não deixam subir a função atribuída à elas.
// Já no caso abaixo funciona, visto que o JS irá ler o código e depois executar ela.

sayMyName()

function sayMyName() {
  console.log('Diego')
}

// Arrow function

const sayMyName = () => {
  console.log('Diego')
}

sayMyName()

// Callback function
// Function que está passando como argumento para o parâmetro de uma function outra function.

function sayMyName (name) {
  console.log('Código antes da callback function')
  name() // Executar a callback function dentro dessa function
  console.log('Código antes da callback function')
}

sayMyName(
  () => {
    console.log('Código da callback function')
  }
)

// Funções construtoras

let Person = function (name, birthYear) {
	this.name = name;
	this.birthYear = birthYear;
	this.working = function() {
		return this.name + " is working today."
	}
}

let jessica = new Person('Jessica', 1969); // Objeto instânciado. Essa parte chama instanciar um objeto.

console.log(jessica.name); // Jessica.
console.log(jessica.working()); // Jessica is working today.



function Person(name, birthYear) {
	this.name = name;
	this.birthYear = birthYear;
}

