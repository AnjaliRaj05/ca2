import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import './Todos.css'
//npm i axios
function Q41() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/Q41')
      .then((res) => {
        // console.log(res.data);
        setTodos(res.data)
      }, (err) => { console.log(`🙂🙂🙂🙂${err}`) })
  }, [])
  return <div>
    List of Todos
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.id} {todo.title}</li>)}
    </ul>
  </div>
}

export default Q41