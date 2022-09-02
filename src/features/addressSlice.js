import { createSlice } from "@reduxjs/toolkit";
import {
  addAddress,
  deleteAddress,
  getAllAddress,
  updateAddress,
} from "../actions";
import { ShowToast } from "../components";
const initialState = {
  address: [],
  edit: false,
  isLoading: false,
  error: false,
  isAddressSelected: false,
};
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    enableEdit: (state) => {
      state.edit = true;
    },
    disableEdit: (state) => {
      state.edit = false;
    },
    selectAddress: (state) => {
      state.isAddressSelected = true;
    },
  },
  extraReducers: {
    [getAllAddress.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getAllAddress.fulfilled]: (state, action) => {
      state.address = action.payload.address;
      state.isLoading = false;
      state.error = false;
      state.edit = false;
    },
    [getAllAddress.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.edit = false;
    },
    [addAddress.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addAddress.fulfilled]: (state, action) => {
      state.address = action.payload.address;
      state.isLoading = false;
      state.error = false;
      state.edit = false;
      ShowToast({
        type: "success",
        message: "Address added",
      });
    },
    [addAddress.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.edit = false;
    },
    [updateAddress.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [updateAddress.fulfilled]: (state, action) => {
      state.address = action.payload.address;
      state.isLoading = false;
      state.error = false;
      state.edit = false;
      ShowToast({
        type: "success",
        message: "Address updated",
      });
    },
    [updateAddress.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.edit = false;
    },
    [deleteAddress.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deleteAddress.fulfilled]: (state, action) => {
      state.address = action.payload.address;
      state.isLoading = false;
      state.error = false;
      state.edit = false;
      ShowToast({
        type: "warning",
        message: "Address deleted",
      });
    },
    [deleteAddress.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.edit = false;
    },
  },
});
export const { enableEdit, disableEdit, selectAddress } = addressSlice.actions;
export default addressSlice.reducer;
