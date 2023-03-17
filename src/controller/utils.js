export function processInputValue(value, input){
  if(input === '.' && value.toString().includes('.'))
    return value;

  if(value !== 0 || input == '.')
    return value + input;
  else
    return input;
}

export function calculate(firstValue, operator, secondValue){
  switch(operator){
    case '/':
      return parseFloat(firstValue) / parseFloat(secondValue);
    case 'X':
      return parseFloat(firstValue) * parseFloat(secondValue);
    case '-':
      return parseFloat(firstValue) - parseFloat(secondValue);
    case '+':
      return parseFloat(firstValue) + parseFloat(secondValue);
  }
}

export function dotToComma(value){
  return value.toString().replace('.',',');
}