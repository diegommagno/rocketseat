for(let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; // pula a execução do momento, pula mostrar o 5 no console e continua a aplicação.
  } else if (i === 10) {
    break; // para a execução do loop. Com isso, não mostra no console o 10.
  }
  console.log(i)
}