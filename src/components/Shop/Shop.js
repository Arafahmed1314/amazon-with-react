import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const productHandle = (product) => {
    // console.log("added product", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const first10 = fakeData.slice(0, 10);
  const [product, productSet] = useState(first10);
  const [cart, setCart] = useState([]);
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Product productHandle={productHandle} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
