// Usuário inserir dois números
let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))

// Operações dos os dois números inseridos:
// Soma 
let soma = n1 + n2

// Subtração 
let subtraction = n1 - n2

// Multiplicação 
let multiplication = n1 * n2

// Divisão
let division = n1 / n2

// Resto da divisão
let remainder = n1 % n2

// ----------------------------------------------------------------

// Verifique se a soma dos dois números é par ou impar
let evenOrOdd
if(soma % 2 === 0) {
  evenOrOdd = 'par'
} else {
  evenOrOdd = 'impar'
}

// Verifique se os dois números são iguais
let equalNumbers
if(n1 === n2) {
  equalNumbers = 'sim'
} else {
  equalNumbers = 'não'
}

// Mostrar todas as informações na tela com template literals bonito.
alert(`
  Os números inseridos foram: ${n1} e ${n2}.
  Soma: ${soma}.
  Subtração: ${subtraction}.
  Multiplicação: ${multiplication}.
  Divisão: ${division}.
  Resto da divisão: ${remainder}.
  A soma dos números é par ou ímpar: ${evenOrOdd}.
  Os números são iguais?: ${equalNumbers}.
`)