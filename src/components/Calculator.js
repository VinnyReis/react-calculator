import { useState } from 'react';
import { useReducer } from 'react';
import { inputValue, backspace, clearAll, plusMinus, percent, calculate } from '../controller/actions';
import { dotToComma } from '../controller/utils';
import reducer from '../controller/reducer';
import Button from './Button';
import './Calculator.css';

function Calculator(){

  //Calculator buttons
  const keyboard = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0'];
  const operators = ['/', 'x', '-', '+'];

  const [ value, calculator ] = useReducer(reducer, 0);
  const [ previousValue, setPreviousValue ] = useState(0);
  const [ operator, setOperator ] = useState(null);

  function operatorHandler(operator){
    setOperator(operator);
    setPreviousValue(value);
    calculator(clearAll());
  }

  return (
    <div className='calculator'>
      <div className='box'>
        <div className='result'>{dotToComma(value)}</div>
      </div>
      <div className='keyboard'>
        <div className='left-area'>
          <Button type={'option'} onClick={() => calculator(clearAll())}>{'AC'}</Button>
          <Button type={'option'} onClick={() => calculator(plusMinus())}>{'+/-'}</Button>
          <Button type={'option'} onClick={() => calculator(percent())}>{'%'}</Button>
          {keyboard.map(el => 
            <Button onClick={() => calculator(inputValue(el))}>{el !== '.' ? el : ','}</Button>
          )}
          <Button onClick={() => calculator(backspace())}>&#9003;</Button>
        </div>
        <div className='operators'>
          {operators.map(el => 
            <Button type={'operator'} onClick={() => operatorHandler(el)}>{el}</Button>
          )}
          <Button type={'operator'} onClick={() => calculator(calculate({previousValue, operator}))}>{'='}</Button>
        </div>
      </div>
    </div>
  )
} export default Calculator;