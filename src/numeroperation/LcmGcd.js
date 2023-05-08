import React, { useState } from "react";

function LcmGcd() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [lcm, setLcm] = useState("");
  const [gcd, setGcd] = useState("");

  function calculateLcmGcd() {
    // Parse the input values as integers
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);

    // Calculate the LCM using the formula: LCM(a,b) = (a*b) / GCD(a,b)
    const gcd = calculateGcd(num1, num2);
    const lcm = (num1 * num2) / gcd;

    // Set the LCM and GCD as state
    setLcm(lcm);
    setGcd(gcd);
  }

  function calculateGcd(a, b) {
    // Calculate the GCD using the Euclidean algorithm
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }

  return (
    <div>
      <label>
        Enter the first number:
        <input
          type="text"
          value={number1}
          onChange={(event) => setNumber1(event.target.value)}
        />
      </label>
      <label>
        Enter the second number:
        <input
          type="text"
          value={number2}
          onChange={(event) => setNumber2(event.target.value)}
        />
      </label>
      <button onClick={calculateLcmGcd}>Calculate LCM and GCD</button>
      {lcm && gcd && (
        <div>
          <p>The LCM of {number1} and {number2} is {lcm}.</p>
          <p>The GCD of {number1} and {number2} is {gcd}.</p>
        </div>
      )}
    </div>
  );
}

export default LcmGcd;
