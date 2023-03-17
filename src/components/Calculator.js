import { useState } from 'react';
import './Calculator.css';

function Calculator(){

  const [ value, setValue ] = useState(0);
  const [ previousValue, setPreviousValue ] = useState(0);
  const [ operator, setOperator ] = useState(null);

  function inputValue(e){
    let input = e.target.value;

    if(input === '.' && value.includes('.'))
      return;
      
    if(value !== 0 || input == '.')
      setValue(value + input);
    else
      setValue(input);
  }

  function operatorHandler(e){
    let operator = e.target.value;
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
      case '*':
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
        <div className='result'>{value}</div>
      </div>
      <button className='gray_button' onClick={clearAll}>AC</button>
      <button className='gray_button' onClick={plusMinus}>+/-</button>
      <button className='gray_button' onClick={percent}>%</button>
      <button className='orange_button' onClick={operatorHandler} value={'/'}>/</button>
      <button onClick={inputValue} value={7}>7</button>
      <button onClick={inputValue} value={8}>8</button>
      <button onClick={inputValue} value={9}>9</button>
      <button className='orange_button' onClick={operatorHandler} value={'*'}>X</button>
      <button onClick={inputValue} value={4}>4</button>
      <button onClick={inputValue} value={5}>5</button>
      <button onClick={inputValue} value={6}>6</button>
      <button className='orange_button' onClick={operatorHandler} value={'-'}>-</button>
      <button onClick={inputValue} value={1}>1</button>
      <button onClick={inputValue} value={2}>2</button>
      <button onClick={inputValue} value={3}>3</button>
      <button className='orange_button' onClick={operatorHandler} value={'+'}>+</button>
      <button onClick={inputValue} value={'.'}>,</button>
      <button onClick={inputValue} value={0}>0</button>
      <button onClick={backspace}>&#9003;</button>
      <button className='orange_button' onClick={calculate}>=</button>
    </div>
  )
} export default Calculator;