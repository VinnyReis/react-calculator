import './Calculator.css';

function Calculator(){
  return (
    <div className='calculator'>
      <div className='box'>
        <div className='result'>0</div>
      </div>
      <button className='gray_button'>AC</button>
      <button className='gray_button'>+/-</button>
      <button className='gray_button'>%</button>
      <button className='orange_button'>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='orange_button'>X</button>
      <button >4</button>
      <button>5</button>
      <button>6</button>
      <button className='orange_button'>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='orange_button'>+</button>
      <button>,</button>
      <button>0</button>
      <button className='double-sized_button'>=</button>
    </div>
  )
} export default Calculator;