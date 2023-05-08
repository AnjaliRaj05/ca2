import React from 'react';
import './App.css';
//import List from './Component/List';
// import Styleene from './Styleene';
// import Cal from '../src/Component/Cal';
// import Cal from './Component/Cal';
// import Alert from './Component/Alert';
// import Showcase from './Showcase';
// import Todo from './TodoApplication/Todo';
// // import Demo from './Demo';
// // import Calculater from './Calculater';
// import ProductCalculation from './ProductCalculation';
import Interface1 from './Interface1';
//import Q10 from './Questions/Q10';
import Q101 from './Questions/Q101'
import Fibonacci from './numeroperation/Fibonacci';
import PrimeNumber from './numeroperation/PrimeNumber';
import NumberSorter from './numeroperation/NumberSorter';
import LcmGcd from './numeroperation/LcmGcd';
import Destructring from './Destructring';
import Q41 from './Questions/Q41';
import API from './API';

//import Q101 from './Questions/Q101';
function App() {
  return (
    <>
    <div className="App">
    {/* <h1>REACT JS </h1> */}
    {/* <Cal/>
    <Alert/>
    <Todo/>
    <Showcase/>
    {/* <Demo/> */}
    {/* <Calculater/> */}
    {/* <ProductCalculation/> */} 

    <Interface1/>
    {/* <Styleene/> */}
    {/* <List/> */}
    {/* <Q10/> */}
    <Fibonacci/>
    <PrimeNumber/>
    <NumberSorter/>
    <LcmGcd/>
    <Destructring/>
    {/* <Q10/> */}
    <Q41/>
    <Q101/>
    <API/>

    
 
    </div>
    
    </>
  );
}

export default App;
