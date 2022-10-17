function calculate(n1, operator, n2) {
  let result

  switch (operator) {
    case '+':
      result = n1 + n2
      break;
    case '-':
      result = n1 - n2
      break;
    case '*':
      result = n1 * n2
      break;
    case '/':
      result  = n1 / n2
      break;
  
    default:
      console.log('Not implemented.')
      break;
  }

  return result
}

console.log(calculate(2, '+', 2))