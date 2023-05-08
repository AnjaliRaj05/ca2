import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Problem1 from './Component1/Problem1';
import Problem3 from './Component1/Problem3';
import Problem2 from './Component1/Problem2';

// import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

export default function Interface1() {
  return (
    <Router>
    <div className="part1">
      <h2> CA2 interface1</h2>
      <Link to ='/problem1'><button>problem1</button></Link>
        <Link to ='/problem2'> <button>problem2</button></Link>
        <Link to ='/problem3'><button>problem3</button></Link>

     {/* <Problem1/>
     <Problem2/>
     <Problem3/> */}

     <Routes>
        <Route path ="/problem1" element={<Problem1/>}/>
        <Route path="/problem2" element={<Problem2/>}/>
        <Route path="/problem3" element={<Problem3/>}/>
        </Routes>
    </div>
    </Router>
  )
}
