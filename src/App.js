import React from 'react';
//import './App.css';
import Header from './Components/Header';
import ProductItem from './Components/ProductItem'

const product = {
  id: 1,
  name: "mango"
};

function App() {
  return (
    <div>
      <Header />
      <div>
        <ProductItem product={product}></ProductItem>
      </div>
    </div>
  );
}

export default App;
