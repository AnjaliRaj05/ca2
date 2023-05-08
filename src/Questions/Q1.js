import React, { useState } from "react";
function Q1() {
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState([
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // code for second question

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={searchQuery} onChange={handleSearch} />
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
    </div>
  );
}






export default Q1;
