import React, { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducers/";
const defaultFilter = {
  categories: [],
  fastDelivery: false,
  inStock: false,
  priceRange: 12000,
  rating: "",
  sortBy: "",
  teams: [],
};

const FilterContext = createContext(defaultFilter);
const FilterProvider = ({ children }) => {
  const [filter, filterDispatch] = useReducer(filterReducer, defaultFilter);
  return (
    <FilterContext.Provider value={{ filter, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
