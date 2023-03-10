import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import CheckoutItems from "../checkout-items/checkout-items.component";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems,totalPrice} = useContext(CartContext);
 
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItems key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total"> Total: {totalPrice}</span>
    </div>
  );
};

export default Checkout;
