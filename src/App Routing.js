// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

// Routing in React
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <Router>
    <div><Link to='/home'>Home</Link></div>
    <div><Link to='/about'>About</Link></div> 
    <div><Link to='/contact'>Contact</Link></div> 
      <Routes>
        <Route path="/home/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    
  )
}
export default App


//useContext Hook (App->ComponentA->ComponentB->ComponentC)
// import React from 'react';
// import './App.css';
// import ComponentA from './components/ComponentA';
// import Form from './Form';
// export const UserContext = React.createContext()
// export const ScoreContext = React.createContext()

// function App(){
//   return(
//     <div className='App'>
//       {/* <UserContext.Provider value={'Nav'}>
//       <ScoreContext.Provider value={89}>
//        <ComponentA/> 
//       </ScoreContext.Provider>
//       </UserContext.Provider> */}
//       <Form />
//     </div>
//   )
// }
// export default App