import { useState } from 'react';
import Button from './Button';
import './Calculator.css';

function Calculator(){

  //Calculator buttons
  const keyboard = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0'];
  const operators = ['/', 'x', '-', '+'];

  const [ value, setValue ] = useState(0);
  const [ previousValue, setPreviousValue ] = useState(0);
  const [ operator, setOperator ] = useState(null);

  function inputValue(input){
    if(input === '.' && value.toString().includes('.'))
      return;
      
    if(value !== 0 || input == '.')
      setValue(value + input);
    else
      setValue(input);
  }

  function operatorHandler(operator){
    setOperator(operator);
    setPreviousValue(value);
    setValue(0);
  }

  function backspace(){
    setValue((value) => {
      if(value.length > 1)
        return value.slice(0, -1);
      else
        return 0;
    });
  }

  function clearAll(){
    setValue(0);
  }

  function percent(){
    setValue(value/100);
  }

  function plusMinus(){
    setValue(value * -1);
  }

  function calculate(){
    switch(operator){
      case '/':
        setValue(parseFloat(previousValue) / parseFloat(value));
        break;
      case 'X':
        setValue(parseFloat(previousValue) * parseFloat(value));
        break;
      case '-':
        setValue(parseFloat(previousValue) - parseFloat(value));
        break;
      case '+':
        setValue(parseFloat(previousValue) + parseFloat(value));
        break;
    }
  }

  return (
    <div className='calculator'>
      <div className='box'>
        <div className='result'>{value.toString().replace('.',',')}</div>
      </div>
      <div className='keyboard'>
        <div className='left-area'>
          <Button type={'option'} onClick={clearAll}>{'AC'}</Button>
          <Button type={'option'} onClick={plusMinus}>{'+/-'}</Button>
          <Button type={'option'} onClick={percent}>{'%'}</Button>
          {keyboard.map(el => 
            <Button onClick={() => inputValue(el)}>{el !== '.' ? el : ','}</Button>
          )}
          <Button onClick={() => backspace()}>&#9003;</Button>
        </div>
        <div className='operators'>
          {operators.map(el => 
            <Button type={'operator'} onClick={() => operatorHandler(el)}>{el}</Button>
          )}
          <Button type={'operator'} onClick={() => calculate()}>{'='}</Button>
        </div>
      </div>
    </div>
  )
} export default Calculator;