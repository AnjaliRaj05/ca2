// import React from 'react'
import React, { useState } from 'react'
export default function MobileProduct() {
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
          <h1>Price:</h1>
          <p>{price}</p>
        </div>
      );
  return (
    <div>
      {/* <button className="m-btn"onClick={handleButtonClick}>Samsung</button>
       <div className="price-list">
     {showPrice && <PriceDisplay price={price} />}
      </div> */}
      <p>lorem23
      </p>
    </div>
  )
}
