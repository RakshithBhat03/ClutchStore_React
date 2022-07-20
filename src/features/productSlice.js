import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  addToWishlist,
  getAllProducts,
  getCartItems,
  getCategories,
  getProductById,
  getWishlistItems,
  removeFromCart,
  removeFromWishlist,
  updateCartItem,
} from "../actions";
import { ShowToast } from "../components";
import { getTeams } from "../utils";
// import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../utils";
const initialState = {
  allProducts: [],
  categories: [],
  teams: [],
  currentProduct: {},
  cart: [],
  wishlist: [],
  isLoading: false,
  isCategoryLoading: false,
  isCartLoading: false,
  isWishlistLoading: false,
  isTeamsLoading: false,
  error: false,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearCurrentProduct: (state) => {
      return (state = { ...state, currentProduct: {} });
    },
    clearProductState: (state) => {
      const allProducts = state.allProducts;
      const categories = state.categories;
      const teams = state.teams;
      return (state = { ...initialState, allProducts, categories, teams });
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload.products;
      state.teams = getTeams(action.payload.products);
      state.isLoading = false;
      state.error = false;
    },
    [getAllProducts.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getProductById.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.currentProduct = action.payload.product;
      state.isLoading = false;
      state.error = false;
    },
    [getProductById.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getCategories.pending]: (state) => {
      state.isCategoryLoading = true;
      state.error = false;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload.categories;
      state.isCategoryLoading = false;
      state.error = false;
    },
    [getCategories.rejected]: (state) => {
      state.isCategoryLoading = false;
      state.error = true;
    },
    [getCartItems.pending]: (state) => {
      state.isCartLoading = true;
      state.error = false;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cart = action.payload.cart;
      state.isCartLoading = false;
      state.error = false;
    },
    [getCartItems.rejected]: (state) => {
      state.isCartLoading = false;
      state.error = true;
    },
    [getWishlistItems.pending]: (state) => {
      state.isWishlistLoading = true;
      state.error = false;
    },
    [getWishlistItems.fulfilled]: (state, action) => {
      state.wishlist = action.payload.wishlist;
      state.isWishlistLoading = false;
      state.error = false;
    },
    [getWishlistItems.rejected]: (state) => {
      state.isWishlistLoading = false;
      state.error = true;
    },
    [addToCart.pending]: (state) => {
      state.isCartLoading = true;
      state.error = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cart = action.payload.cart;
      state.isCartLoading = false;
      state.error = false;
      ShowToast({ type: "success", message: `Added to cart` });
    },
    [addToCart.rejected]: (state) => {
      state.isCartLoading = false;
      state.error = true;
    },
    [removeFromCart.pending]: (state) => {
      state.isCartLoading = true;
      state.error = false;
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.cart = action.payload.cart;
      state.isCartLoading = false;
      state.error = false;
      ShowToast({ type: "success", message: `Removed from cart` });
    },
    [removeFromCart.rejected]: (state) => {
      state.isCartLoading = false;
      state.error = true;
    },
    [updateCartItem.pending]: (state) => {
      state.isCartLoading = true;
      state.error = false;
    },
    [updateCartItem.fulfilled]: (state, action) => {
      state.cart = action.payload.cart;
      state.isCartLoading = false;
      state.error = false;
    },
    [updateCartItem.rejected]: (state) => {
      state.isCartLoading = false;
      state.error = true;
    },
    [addToWishlist.pending]: (state) => {
      state.isWishlistLoading = true;
      state.error = false;
    },
    [addToWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload.wishlist;
      state.isWishlistLoading = false;
      state.error = false;
      ShowToast({ type: "success", message: `Added to wishlist` });
    },
    [addToWishlist.rejected]: (state) => {
      state.isWishlistLoading = false;
      state.error = true;
    },
    [removeFromWishlist.pending]: (state) => {
      state.isWishlistLoading = true;
      state.error = false;
    },
    [removeFromWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload.wishlist;
      state.isWishlistLoading = false;
      state.error = false;
      ShowToast({ type: "success", message: `Removed from wishlist` });
    },
    [removeFromWishlist.rejected]: (state) => {
      state.isWishlistLoading = false;
      state.error = true;
    },
  },
});
export const { clearCurrentProduct, clearProductState } = productSlice.actions;
export default productSlice.reducer;
