//Function Scope

let subject = 'create video'

function createThought(subject) {
  subject = 'Study'
  return subject
}

console.log(createThought(subject)) // returns study
console.log(subject) // returns create video