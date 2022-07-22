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
import { SplashScreen } from "../components";
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
          <div className="min-75-vh display-flex">
            <SplashScreen text="Looks like you are lost" notFound={true} />
          </div>
        }
      />
    </Routes>
  );
};
export { AllRoutes };
