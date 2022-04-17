import React, { useContext, createContext, useReducer } from "react";
import { cartAndWishlistReducer } from "../reducers";
const defaultCartAndWishlist = { cart: [], wishlist: [] };
const CartAndWishlistContext = createContext(defaultCartAndWishlist);
const CartAndWishlistProvider = ({ children }) => {
  const [cartAndWishlistItems, cartAndWishlistDispatch] = useReducer(
    cartAndWishlistReducer,
    defaultCartAndWishlist
  );
  return (
    <CartAndWishlistContext.Provider
      value={{ cartAndWishlistItems, cartAndWishlistDispatch }}>
      {children}
    </CartAndWishlistContext.Provider>
  );
};
const useCartAndWishlist = () => useContext(CartAndWishlistContext);
export { useCartAndWishlist, CartAndWishlistProvider };
