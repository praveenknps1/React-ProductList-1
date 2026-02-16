import { useState } from "react";
import ProductList from "./ProductList";
import products from "./Product";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>

      <div className="grid">
        {products.map((item) => (
          <ProductList
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
