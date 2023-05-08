import React, { useState } from 'react';

function Q6() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function handleNum1Change(event) {
    setNum1(event.target.value);
  }

  function handleNum2Change(event) {
    setNum2(event.target.value);
  }

  function handleAddClick() {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  }

  return (
    <div>
      <h2>Add Numbers</h2>
      <div>
        <label htmlFor="num1">Number 1:</label>
        <input type="text" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="num2">Number 2:</label>
        <input type="text" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <button onClick={handleAddClick}>Add</button>
      {result && <div>Result: {result}</div>}
    </div>
  );
}

export default Q6;
