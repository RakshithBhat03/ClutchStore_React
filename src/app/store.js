import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import productReducer from "../features/productSlice";
import filterReducer from "../features/filterSlice";
import modalReducer from "../features/modalSlice";
import addressReducer from "../features/addressSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    filter: filterReducer,
    modal: modalReducer,
    address: addressReducer,
  },
});
