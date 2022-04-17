import { Routes, Route } from "react-router-dom";
import { Home, Products, Login, Cart, Wishlist, Signup } from "../pages";
import Mockman from "mockman-js";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock" element={<Mockman />} />
      <Route
        path="*"
        element={
          <>
            <h1>Page not found</h1>
          </>
        }
      />
    </Routes>
  );
};
export { AllRoutes };
