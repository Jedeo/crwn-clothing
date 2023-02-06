import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { CartProvider } from "./context/cart.context";
import { CartItemProvider } from "./context/cartItem.context";
import { ProductsProvider } from "./context/products.context";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <CartItemProvider>
              <App />
            </CartItemProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
