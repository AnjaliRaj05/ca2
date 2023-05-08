// import React, { useState } from "react";

// function Fibonacci() {
//   const [inputValue, setInputValue] = useState("");
//   const [fibonacciResult, setFibonacciResult] = useState("");

//   function calculateFibonacci() {
//     // Parse the input value as an integer
//     const inputNumber = parseInt(inputValue);

//     // Base case
//     if (inputNumber <= 1) {
//       setFibonacciResult(inputNumber);
//       return;
//     }

//     // Recursive case
//     let prevFib = 0;
//     let currFib = 1;
//     for (let i = 2; i <= inputNumber; i++) {
//       const nextFib = prevFib + currFib;
//       prevFib = currFib;
//       currFib = nextFib;
//     }

//     setFibonacciResult(currFib);
//   }

//   return (
//     <div>
//       <label>
//         Enter a number:
//         <input
//           type="number"
//           value={inputValue}
//           onChange={(event) => setInputValue(event.target.value)}
//         />
//       </label>
//       <button onClick={calculateFibonacci}>Calculate Fibonacci</button>
//       <p>The Fibonacci of {inputValue} is {fibonacciResult}</p>
//     </div>
//   );
// }

// export default Fibonacci;

import React, { useState } from "react";

function Fibonacci() {
  const [inputValue, setInputValue] = useState("");
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  function generateFibonacciSeries() {
    // Parse the input value as an integer
    const inputNumber = parseInt(inputValue);

    // Generate the Fibonacci series up to the input number
    let prevFib = 0;
    let currFib = 1;
    let series = [];
    while (currFib <= inputNumber) {
      series.push(currFib);
      const nextFib = prevFib + currFib;
      prevFib = currFib;
      currFib = nextFib;
    }

    setFibonacciSeries(series);
  }

  return (
    <div>
      <label>
        Enter a number:
        <input
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      <button onClick={generateFibonacciSeries}>Generate Fibonacci Series</button>
      <ul>
        {fibonacciSeries.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fibonacci;
