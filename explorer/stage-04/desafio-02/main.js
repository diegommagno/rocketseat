// Lista de estudantes

const studentsList = [
  {
    name: 'Jessica',
    firstGrade: '9',
    secondGrade: '10',
    finalGrade: '',
    approvedStudent: '',
  },
  {
    name: 'Rachel',
    firstGrade: '7',
    secondGrade: '6.5',
    finalGrade: '',
    approval: '',
  },
  {
    name: 'Robert',
    firstGrade: '9',
    secondGrade: '9.5',
    finalGrade: '',
    approval: '',
  },
  {
    name: 'Jack',
    firstGrade: '6',
    secondGrade: '5.9',
    finalGrade: '',
    approval: '',
  },
]

// Função para calcular a média das notas de cada aluno.
function calcStudentFinalGrades (firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / 2;
}

// Calcular a média das notas de cada aluno.
for(i = 0; i < studentsList.length; i++) {
  studentsList[i].finalGrade = (calcStudentFinalGrades(Number(studentsList[i].firstGrade), Number(studentsList[i].secondGrade)))
}

// Verificar quais alunos entraram no concurso visto que a média deve ser 7.
for(i = 0; i < studentsList.length; i++){
  if(studentsList[i].finalGrade > 7) {
    studentsList[i].approval = 'approved'
  } else {
    studentsList[i].approval = 'denied'
  }
}

// Mostrar mensagem na tela com quem passou no concurso. A mensagem deve conter o nome do aluno, média e se passou ou não.
for(i = 0; i < studentsList.length; i++) {
  alert(`
  🏫 Harvard Law School

  Student: ${studentsList[i].name}.
  First Grade: ${studentsList[i].firstGrade}.
  Second Grade: ${studentsList[i].secondGrade}.
  Final Grade: ${studentsList[i].finalGrade}.
  Approval: ${studentsList[i].approval}.
  `)
}