// import React, { useState } from "react";

// function PrimeNumber() {
//   const [inputValue, setInputValue] = useState("");
//   const [isPrime, setIsPrime] = useState(false);

//   function checkPrime() {
//     // Parse the input value as an integer
//     const inputNumber = parseInt(inputValue);

//     // Check if inputNumber is less than 2 (not prime)
//     if (inputNumber < 2) {
//       setIsPrime(false);
//       return;
//     }

//     // Check if inputNumber is divisible by any number less than itself
//     for (let i = 2; i < inputNumber; i++) {
//       if (inputNumber % i === 0) {
//         setIsPrime(false);
//         return;
//       }
//     }

//     // If we haven't returned yet, inputNumber is prime
//     setIsPrime(true);
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
//       <button onClick={checkPrime}>Check Prime</button>
//       <p>
//         {inputValue} {isPrime ? "is" : "is not"} a prime number.
//       </p>
//     </div>
//   );
// }

// export default PrimeNumber;


import React, { useState } from "react";

function PrimeNumber() {
  const [inputValue, setInputValue] = useState("");
  const [primeSeries, setPrimeSeries] = useState([]);

  function generatePrimeSeries() {
    // Parse the input value as an integer
    const inputNumber = parseInt(inputValue);

    // Generate the prime series up to the input number
    let series = [];
    for (let i = 2; i <= inputNumber; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        series.push(i);
      }
    }

    setPrimeSeries(series);
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
      <button onClick={generatePrimeSeries}>Generate Prime Series</button>
      <ul>
        {primeSeries.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrimeNumber;
