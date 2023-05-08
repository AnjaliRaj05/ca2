

import { useState } from "react";
// import "./App.css";

function App() {
const [result, setResult] = useState("");

const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);

const [operation, setOperation] = useState("");

function handleCompute(operation) {
setOperation(operation);
switch (operation) {
case "+":
setResult(num1 + num2);
break;
case "-":
setResult(num1 - num2);
break;
case "*":
setResult(num1 * num2);
break;
case "/":
setResult(num1 / num2);
}
}

return (
<div className="App">
<div>
<label htmlFor="">
Number 1
<input
type="number"
name=""
id=""
onChange={(e) => setNum1(Number(e.target.value))}
/>
</label>
<br />
<label htmlFor="">
Number 2
<input
type="number"
name=""
id=""
onChange={(e) => setNum2(Number(e.target.value))}
/>
</label>
<div className="btn-container">
<button onClick={() => handleCompute("+")}>+</button>
<button onClick={() => handleCompute("-")}>-</button>
<button onClick={() => handleCompute("*")}>*</button>
<button onClick={() => handleCompute("/")}>/</button>
</div>
</div>
<div>
{operation && (
<p>
{`${num1} ${operation} ${num2}`} ={" "}
<span className="result">{result}</span>
</p>
)}
</div>
</div>
);
}

export default App;