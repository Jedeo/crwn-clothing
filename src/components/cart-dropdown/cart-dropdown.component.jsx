import "./cart-dropdown.styles.scss";

import { redirect } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Button onClick={()=> redirect("/checkout")}> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
