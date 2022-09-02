import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllAddress = createAsyncThunk(
  "address/getAllAddress",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get("/api/user/addresses", {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressValues, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        "/api/user/address",
        { address: addressValues },
        {
          headers: { authorization: userToken },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async (addressValues, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        `/api/user/address/edit/${addressValues._id}`,
        { address: addressValues },
        {
          headers: { authorization: userToken },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressValues, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(
        `/api/user/address/${addressValues._id}`,
        {
          headers: { authorization: userToken },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
