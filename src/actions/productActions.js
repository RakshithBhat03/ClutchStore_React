import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/categories`);
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const getCartItems = createAsyncThunk(
  "products/getCartItems",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const getWishlistItems = createAsyncThunk(
  "products/getWishlistItems",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get(`/api/user/wishlist`, {
        headers: {
          authorization: userToken,
        },
      });

      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (product, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        `/api/user/cart`,
        { product },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const removeFromCart = createAsyncThunk(
  "products/removeFromCart",
  async (productId, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: userToken,
        },
      });

      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const updateCartItem = createAsyncThunk(
  "products/updateCartItem",
  async ({ action, productId }, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const addToWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (product, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        `/api/user/wishlist`,
        { product },
        {
          headers: {
            authorization: userToken,
          },
        }
      );

      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
export const removeFromWishlist = createAsyncThunk(
  "products/removeFromWishlist",
  async (productId, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: userToken,
        },
      });

      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
