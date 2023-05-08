import React, { useState } from "react";

function NumberSorter() {
  const [numberList, setNumberList] = useState("");
  const [ascendingList, setAscendingList] = useState([]);
  const [descendingList, setDescendingList] = useState([]);

  function sortNumbers() {
    // Parse the input string as a list of numbers
    const numbers = numberList.split(",").map((str) => parseInt(str.trim()));

    // Sort the numbers in ascending and descending order
    const ascending = [...numbers].sort((a, b) => a - b);
    const descending = [...numbers].sort((a, b) => b - a);

    // Set the sorted lists as state
    setAscendingList(ascending);
    setDescendingList(descending);
  }

  return (
    <div>
      <label>
        Enter a comma-separated list of numbers:
        <input
          type="text"
          value={numberList}
          onChange={(event) => setNumberList(event.target.value)}
        />
      </label>
      <button onClick={sortNumbers}>Sort Numbers</button>
      <div>
        <h2>Ascending Order:</h2>
        <ul>
          {ascendingList.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Descending Order:</h2>
        <ul>
          {descendingList.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NumberSorter;
