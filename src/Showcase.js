import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Summary from './Component/Summary';
import Laptop from './Component/Laptop';
import Mobile from './Component/Mobile';
import Tv from './Component/Tv';

export default function Showcase() {
  return (
    <Router>
    <div className="product">
     
  <Link to ='/mobile'><button>Mobile</button></Link>
        <Link to ='/tv'> <button>TV</button></Link>
        <Link to ='/laptop'><button>Laptop</button></Link>
        <Link to ='/Summary'><button>Summary</button></Link>
        <Routes>
        <Route path ="/mobile" element={<Mobile/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/laptop" element={<Laptop/>}/>
        <Route path="/Summary" element={<Summary/>}/>
        </Routes>
      
    </div>
    </Router>
  )
}
