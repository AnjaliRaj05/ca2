import React,{ useState}from 'react'

export default function Problem2() {

    const [number, setNumber] = useState('');
    const [sum, setSum] = useState(0);
  
    const handleChange = (e) => {
      setNumber(e.target.value);
    }
  
    const calculateSum = () => {
      let num = parseInt(number);
      let digitSum = 0;
      while (num > 0) {
        digitSum += num % 10;
        num = Math.floor(num / 10);
      }
      setSum(digitSum);
    }

  return (
    <div>
      <h2> This is problem2 interface2</h2>
      <h3>Sum of Digits</h3>
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum of digits: {sum}</p>
    </div>
  )
}
