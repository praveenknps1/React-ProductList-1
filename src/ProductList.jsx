import React, { useState } from "react";
function ProductList(props) {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="card">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>₹{props.price}</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductList;
