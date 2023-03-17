import { calculate, processInputValue } from './utils';

function reducer(value, action) {

  let input = action.input;

  switch(action.type) {
    case 'INPUT_VALUE':
      return processInputValue(value, input);

    case 'CALCULATE':
      return calculate(action.previousValue, action.operator, value);
    
    case 'BACKSPACE':
      if(value.length > 1)
        return value.slice(0, -1);
      else
        return 0;

    case 'CLEAR_ALL':
      return 0;

    case 'PERCENT':
      return value/100;
    
    case 'PLUS_MINUS':
      return value * -1;

    default:
      return value;
  }
} export default reducer;