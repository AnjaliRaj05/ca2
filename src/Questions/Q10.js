// import React from 'react'
// import axios from 'axios'

// /*
// useEffect(()=>{},[]) ------------> componentDidMount()
// useEffect(()=>{},[xyz]) ------------> componentDidUpdate()
// */
// class Q10 extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = { data: [] }
//   }
//   render() {
//     return <ul>
//       {this.state.data.map(todo => <li style={{ 'color': 'red' }} key={todo.id}>{todo.title}</li>)}
//     </ul>
//   }
//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then((res) => {
//         this.setState({ data: res.data })
//       });
//   }
//   componentDidUpdate(preprops, prestae) {
//     if (prestae.data.length === this.state.length) {
//       console.log("Length same");
//     } else {
//       console.log('length different');
//     }
//   }
// }

// export default Q10
import React from 'react'
import axios from 'axios'

/*
useEffect(()=>{},[]) ------------> componentDidMount()
useEffect(()=>{},[xyz]) ------------> componentDidUpdate()
*/
class Q10 extends React.Component {
  constructor(props) {
    super(props)

    this.state = { data: [] }
  }
  render() {
    return <ul>
      {this.state.data.map(todo => <li style={{ 'color': 'red' }} key={todo.id}>{todo.title}</li>)}
    </ul>
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        this.setState({ data: res.data })
      });
  }
  componentDidUpdate(preprops, prestae) {
    if (prestae.data.length === this.state.length) {
      console.log("Length same");
    } else {
      console.log('length different');
    }
  }
}

export default Q10