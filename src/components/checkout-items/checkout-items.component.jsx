import "./checkoutItem.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItems = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart} =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const deleteItemHandler = () => {
    deleteItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemToCartHandler = () => {
    removeItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeItemToCartHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div onClick={addItemToCartHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={deleteItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;
