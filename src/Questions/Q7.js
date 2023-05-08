import React, { useState } from 'react';

function Q7() {
  const [isVisible, setIsVisible] = useState(true);

  function handleButtonClick() {
    setIsVisible(false);
  }
// code for next question  
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [operator, setOperator] = useState('+');
const [result, setResult] = useState('');

function handleNum1Change(event) {
  setNum1(event.target.value);
}

function handleNum2Change(event) {
  setNum2(event.target.value);
}

function handleOperatorChange(event) {
  setOperator(event.target.value);
}

function handleCalculate() {
  let num1Value = parseFloat(num1);
  let num2Value = parseFloat(num2);
  let resultValue;

  switch (operator) {
    case '+':
      resultValue = num1Value + num2Value;
      break;
    case '-':
      resultValue = num1Value - num2Value;
      break;
    case '*':
      resultValue = num1Value * num2Value;
      break;
    case '/':
      resultValue = num1Value / num2Value;
      break;
    default:
      resultValue = '';
  }

  setResult(resultValue);
}




  return (
    <>
    <div>
      <h2>Hide Element</h2>
      {isVisible && <p>This element will be hidden when the button is clicked.</p>}
      <button onClick={handleButtonClick}>Hide Element</button>
    </div>
    <div>
    <h2>Calculator</h2>
      <div>
        <label htmlFor="num1">Number 1:</label>
        <input type="text" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="operator">Operator:</label>
        <select id="operator" value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <label htmlFor="num2">Number 2:</label>
        <input type="text" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result && <div>Result: {result}</div>}
    </div>
    </>
  );
}

export default Q7;
