// //Function Scope

// let subject = 'create video'

// function createThought(subject) {
//   subject = 'Study'
//   return subject
// }

// console.log(createThought(subject)) // returns study
// console.log(subject) // returns create video 
// // Não ter o parâmetro subject, ficando createThought(), faz os dois resultados serão Study porque o primeiro console roda a função, substituindo o conteúdo de let para Study e o próximo somente irá puxar o estado atual de let, que é Study.

// // Function Hoisting

// // Função com expressão, quando declara Const e let sayMyName = function () não deixam subir a função atribuída à elas.
// // Já no caso abaixo funciona, visto que o JS irá ler o código e depois executar ela.

// sayMyName()

// function sayMyName() {
//   console.log('Diego')
// }

// // Arrow function

// const sayMyName = () => {
//   console.log('Diego')
// }

// sayMyName()

// // Callback function
// // Function que está passando como argumento para o parâmetro de uma function outra function.

// function sayMyName (name) {
//   console.log('Código antes da callback function')
//   name() // Executar a callback function dentro dessa function
//   console.log('Código antes da callback function')
// }

// sayMyName(
//   () => {
//     console.log('Código da callback function')
//   }
// )

// // Funções construtoras

// let Person = function (name, birthYear) {
// 	this.name = name;
// 	this.birthYear = birthYear;
// 	this.working = function() {
// 		return this.name + " is working today."
// 	}
// }

// let jessica = new Person('Jessica', 1969); // Objeto instânciado. Essa parte chama instanciar um objeto.

// console.log(jessica.name); // Jessica.
// console.log(jessica.working()); // Jessica is working today.



// function Person(name, birthYear) {
// 	this.name = name;
// 	this.birthYear = birthYear;
// }

// // Separe um texto que contém espaços em um novo array onde cada texto é uma posição
// // do array. Depois, transforme o array em texto e substituir espaços por _

// let phrase = "Explorer da Rocketseat!"
// let myArray = phrase.split(" "); // quero que ele separe por espaços em branco.
// console.log(myArray)

// let phraseWithUnderscore = myArray.join("_") // Junta o Array ("tipoDeSeparadorQueQuero")
// console.log(phraseWithUnderscore)
// console.log((myArray.join("_")).toLowerCase())

// // Verificar se o texto contém a palavra Explorer

// let phrase = "Explorer da Rocketseat!"
// console.log(phrase.includes("Explorer")) // true
// console.log(phrase.includes("explorer")) // false (lower case)
// console.log(phrase.includes("Mayk")) // false

// // Manipulando Arrays

// // Criar array com construtor
// // let myArray = new Array(10) // Cria array com 10 espaços vazios.

// let myArray = new Array('a', 'b', 'c')

// // Transformar uma cadeia de caracteres em elementos de um array

// let word = "explorer"
// console.log(Array.from()) // O próprio array é um objeto disponível de maneira global, então posso atrelar a ele um método from(), from() espera como argumento uma string.

// // Array original
// let techs = ['html', 'css', 'js']

// // Adicionar um item ao final
// console.log(techs.push('node.js')) // Método push sabe qual é o último elemento e como ele adiciona um no final.
// // Resultado: let techs = ['html', 'css', 'js', 'node.js]

// console.log(techs.slice(1,3)) // techs = ['css', 'js']

// // Condicionais

// // If, else
// let ukWeather = 22
// let normalTemperature = ukWeather >=18 && ukWeather <= 24
// let highTemperature = ukWeather >= 25 && ukWeather <= 29.9
// let extremelyHighTemperature = ukWeather >= 30

// if(ukWeather <=18) {
// 	console.log('Low temperature.')
// } else if (normalTemperature){
//   console.log('Normal temperature.')
// } else if (highTemperature) {
//   console.log('High temperature.')
// } else if (extremelyHighTemperature) {
//   console.log('Extremely high temperature.')
// }

// // switch (key) {
//   switch (expression) {
//     case 'a':
//       //code to execute.
//       break;
//     case 'b':
//       //code to execute
//       break;
//     default: 
//       //code to execute
//       break;
//   }
  
//   let expression = a
  
//   switch (expression) {
//     case 'a':
//       // Executes this code.
//       break;
//     case 'b':
//       //code to execute
//       break;
//     default: 
//       //code to execute
//       break;
//   }


//   // calculator example

//   function calculate(n1, operator, n2) {
//     let result
  
//     switch (operator) {
//       case '+':
//         result = n1 + n2
//         break;
//       case '-':
//         result = n1 - n2
//         break;
//       case '*':
//         result = n1 * n2
//         break;
//       case '/':
//         result  = n1 / n2
//         break;
    
//       default:
//         console.log('Not implemented.')
//         break;
//     }
  
//     return result
//   }
  
//   console.log(calculate(2, '+', 2))

// throw

// function sayMyName(name = '') {
//   if (name === '') {
//     throw new Error('You must provide a name')
//   }
// }

// // try...catch
// try {
//   // Aqui vou tentar executar a função.
//   sayMyName()
// } catch(e) { // geralmente usa e de parâmetro.
//   console.log(e) // 
// }

