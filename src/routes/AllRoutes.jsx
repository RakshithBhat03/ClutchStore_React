import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Login,
  Cart,
  Wishlist,
  Signup,
  SingleProduct,
} from "../pages";
import Mockman from "mockman-js";
import { RequireAuth } from "./RequireAuth";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route element={<RequireAuth isLoggedIn />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
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
