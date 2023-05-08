import React, { useState } from 'react';
//import React from 'react'

export default function Demo() {

        const [showPrice, setShowPrice] = useState(false);
        const [price, setPrice] = useState(0);
      
        const handleButtonClick = () => {
          // Fetch the price from an API or perform any price calculation logic here
          // For simplicity, we'll just set a random price between 1 and 100
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
       <h1>Click the button to show the price</h1>
      <button onClick={handleButtonClick}>Show Price</button>
      {showPrice && <PriceDisplay price={price} />}
    </div>
  )
}
