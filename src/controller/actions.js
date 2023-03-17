export function inputValue(input){
  return{
    type: 'INPUT_VALUE',
    input: input
  }
}

export function calculate({ previousValue, operator }){
  return{
    type: 'CALCULATE',
    previousValue: previousValue,
    operator: operator
  }
}

export function backspace(){
  return{
    type: 'BACKSPACE'
  }
}

export function clearAll(){
  return{
    type: 'CLEAR_ALL'
  }
}

export function percent(){
  return{
    type: 'PERCENT'
  }
}

export function plusMinus(){
  return{
    type: 'PLUS_MINUS'
  }
}