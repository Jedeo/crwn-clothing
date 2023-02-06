import { createContext, useState } from "react";

export const CartItemContext = createContext({
  item: [],
});

export const CartItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const value = { items, setItems };
  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
