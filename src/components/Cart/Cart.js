import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 0) {
    shipping = 12.99;
    if (total > 15) {
      shipping = 4.99;
    }
  }

  const tex = total / 10;
  const grandTotal = (total + shipping + Number(tex)).toFixed(2);
  const formateNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Item Orderd: {cart.length}</p>
      <p>Product Price: {formateNumber(total)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tex+VAT: {formateNumber(tex)}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
