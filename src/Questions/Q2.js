//import React from "react";
import React, { useState } from "react";

function Q2() {
  const list = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h1>List of Fruits:</h1>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div onClick={handleClick}>
        <h2>{ isOpen ? "Hide Content" : "Show Content"}</h2>
      </div>
      {isOpen && (
        <div>
          <p>This is the hidden content that will be displayed when the header is clicked.</p>
        </div>
      )}
    </div>
  );
}

export default Q2;
