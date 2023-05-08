// import './App.css';
// import Homepage from './components/homepage/homepage';
// import Register from './components/register/register';
// import Login from './components/login/login';

// function App() {
//   return (
//     <div className="App">
//       {/* <Homepage/> */}
//       {/* <Login/>  */}
//       <Register/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const products = {
  mobile: [
    { id: 1, name: "iPhone", price: 1000 },
    { id: 2, name: "Samsung Galaxy", price: 800 },
    { id: 3, name: "Google Pixel", price: 700 },
  ],
  tv: [
    { id: 1, name: "Samsung 55 inch", price: 1200 },
    { id: 2, name: "LG 48 inch", price: 900 },
    { id: 3, name: "Sony 65 inch", price: 1500 },
  ],
  laptop: [
    { id: 1, name: "Macbook Pro", price: 2000 },
    { id: 2, name: "Dell XPS", price: 1500 },
    { id: 3, name: "Lenovo Thinkpad", price: 1200 },
  ],
};

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleMobileClick = () => {
    setSelectedProducts(products.mobile);
  };

  const handleProductClick = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
    setSelectedProducts([]);
  };

  return (
    <div>
      <h2>Select a Product</h2>
      <div>
        <button onClick={handleMobileClick}>Mobile</button>
        <button onClick={() => setSelectedProducts(products.tv)}>TV</button>
        <button onClick={() => setSelectedProducts(products.laptop)}>Laptop</button>
      </div>
      {selectedProducts.length > 0 && (
        <div>
          <h2>Select a {selectedProducts[0].name} Product</h2>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                <button onClick={() => handleProductClick(product)}>
                  {product.name} - ${product.price}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <h2>Cart Summary</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total Cost: ${total}</h3>
    </div>
  );
}

export default Cart;

