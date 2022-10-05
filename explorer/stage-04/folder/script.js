let age, isHuman

name = "Myke"
age = 18
isHuman = true

console.log(name, age, isHuman)
console.log(name + " is " + age + ". Is he human? " + isHuman + ".")
console.log(typeof name)

// interpolando valores com template literals or template strings
console.log(`O ${name} tem ${age} anos.`)

//            ___________
//            | Objects |             
//            -----------

const person = {
  name: 'Jessica',
  isFrom: 'Chicago',
  isAdmin: true
}

console.log(person.name) // .name é uma propriedade do objeto
console.log(`${person.name} is from ${person.isFrom}.`)

//            __________
//            | Arrays |             
//            ----------             

const positions = [
  'Lawyer',
  {
    divisions: ['Family and Children', 'Civil litigation', 'Human rights'],
    level: ['Junior Associate', 'Midlevel Associate', 'Senior']
  },
  'Solicitor',
  'Arbitrator',
  'Judge',
]

// acessar valores
console.log(positions[0])
console.log(positions.length) // ver tamanho do array
console.log(positions[1].divisions[0])

let student = {
  name: 'John',
  age: 19,
  weight: 88.7,
  isSubscribed: true
}

console.log(`${student.name} is ${student.age} and is ${student.isSubscribed}.`)

let students = []

students = [ // Assim é outra forma de fazer.
  student
]

console.log(students[0])

const Steve = {
  name: 'Steve',
  age: 37,
  weight: 78.8,
  isSubscribed: true
}

// Adicionar novo dado no array
students[1] = Steve

console.log(students)