import React, { useState } from 'react'
//import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
// import ReactDOM, {useState}from 'react';
import { Link } from 'react-router-dom';
// import MobileProduct from './MobileProduct';

export default function () {
 const [showPrice,setShowPrice] =useState(false);
 const [price,setPrice] = useState(0);
  const handleButtonClick=()=>{
    // it will set random value as a price
  const randomPrice = Math.floor(Math.random() * 100) + 1;
          setPrice(randomPrice);
          setShowPrice(true);
  };
  const PriceDisplay = ({ price }) => (
    <div>
      <h5>Price:</h5>
      <p>{price}</p>
    </div>
  );
  return (
    <div>
     <h1>This is Mobile page</h1> 
     <div className="mobile-product">
     <button className="m-btn" onClick={handleButtonClick}>Samsung</button>
    
   <button className="m-btn" onClick={handleButtonClick}>Apple</button>
     <button className="m-btn" onClick={handleButtonClick}>Oppo</button>
     <button className="m-btn" onClick={handleButtonClick}>Vivo</button>
     <button className="m-btn" onClick={handleButtonClick}>Redmi</button>
     <button className="m-btn" onClick={handleButtonClick}>Realme</button>
     
     </div>
     <div className="price-list"> 
    <h3>price list</h3>
     {showPrice && <PriceDisplay price={price} />}
      </div>
     {/* <MobileProduct/> */}
    </div>

  )
}
