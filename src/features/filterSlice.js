import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filteredCategories: [],
  fastDelivery: false,
  inStock: false,
  priceRange: 12000,
  rating: "",
  sortBy: "",
  filteredTeams: [],
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterLowToHigh: (state) => {
      state.sortBy = "LOW_TO_HIGH";
    },
    filterHighToLow: (state) => {
      state.sortBy = "HIGH_TO_LOW";
    },
    filterPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    filterRating: (state, action) => {
      state.rating = action.payload;
    },
    filterCategory: (state, action) => {
      return state.filteredCategories.includes(action.payload)
        ? {
            ...state,
            filteredCategories: state.filteredCategories.filter(
              (cartegory) => cartegory !== action.payload
            ),
          }
        : {
            ...state,
            filteredCategories: [...state.filteredCategories, action.payload],
          };
    },
    filterFastDelivery: (state) => {
      state.fastDelivery = !state.fastDelivery;
    },
    filterInStock: (state) => {
      state.inStock = !state.inStock;
    },
    filterTeam: (state, action) => {
      return state.filteredTeams.includes(action.payload)
        ? {
            ...state,
            filteredTeams: state.filteredTeams.filter(
              (team) => team !== action.payload
            ),
          }
        : {
            ...state,
            filteredTeams: [...state.filteredTeams, action.payload],
          };
    },
    filterReset: (state) => {
      return { ...initialState };
    },
  },
});
export const {
  filterPriceRange,
  filterLowToHigh,
  filterHighToLow,
  filterCategory,
  filterRating,
  filterFastDelivery,
  filterInStock,
  filterTeam,
  filterReset,
} = filterSlice.actions;
export default filterSlice.reducer;
