import ProtectedRoute from "./components/ProtectedRoutes";
import "./index.css";
import { AuthLogin } from "./pages/AuthLogin";
import { AuthSignup } from "./pages/AuthSignup";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Whishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route path="/auth/signup" element={<AuthSignup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whishlist" element={<Whishlist />} />
      </Route>
    </Routes>
  );
}

export default App;
