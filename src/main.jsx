import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { LoginProvider } from "./context/LoginContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
