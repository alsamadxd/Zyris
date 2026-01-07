import "./index.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Whishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/whishlist" element={<Whishlist/>} />
    </Routes>
  );
}

export default App;
