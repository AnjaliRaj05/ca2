import React ,{useState} from 'react'

export default function Problem1() {

    const [items, setItems] = useState([5, 2, 9, 1, 6, 3]); // example list of items

    const sortAscending = () => {
      const sortedItems = [...items].sort((a, b) => a - b);
      setItems(sortedItems);
    };
  
    const sortDescending = () => {
      const sortedItems = [...items].sort((a, b) => b - a);
      setItems(sortedItems);
    };



  return (
    <div>
      <h2>This is problem 1 interface2 </h2>
      <p>Sort the list </p>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={sortAscending}>Sort Ascending</button>
      <button onClick={sortDescending}>Sort Descending</button>
    </div>
  )
}
