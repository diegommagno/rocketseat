let patients = [
  {
    name: 'Jessica Pearson',
    age: '57',
    weight: '77',
    height: '1.90',
  },
  {
    name: 'Rachel Zane',
    age: '27',
    weight: '77',
    height: '1.70',
  },
  {
    name: 'Robert Zane',
    age: '57',
    weight: '77',
    height: '1.90',
  },
]

let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeights = []

for(let patient of patients) {
	patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsWeights.push(patient.weight)
  patientsHeights.push(patient.height)
	// Creates new scope, então o name daqui não é o mesmo de fora. 
} 

for(i = 0; i < patientsNames.length; i++) {
  alert(`
  🇺🇸 NYU Langone Health

  🧾 Patients List
  Patient: ${patientsNames[i]}
  Age: ${patientsAges[i]}
  Weight: ${patientsWeights[i]}
  Height: ${patientsHeights[i]}
  `)
}

/*
Esse for puxa o nome de cada paciente do array patients e coloca dentro do array patientsNames.

for(let i = 0; i < patients.length; i++){
  patientsNames[i] = patients[i].name
}

*/

