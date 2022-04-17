import React, { useContext, createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { getTeams } from "../utils";
import { productsReducer } from "../reducers/productsReducer";
const defaultData = { products: [], categories: [], teams: [] };
const ProductContext = createContext(defaultData);
const ProductProvider = ({ children }) => {
  const [productData, dispatchProductData] = useReducer(
    productsReducer,
    defaultData
  );
  useEffect(() => {
    (async () => {
      try {
        const categories = await axios.get(`api/categories`);
        dispatchProductData({
          type: "LOAD_CATEGORIES",
          payload: categories.data.categories,
        });
        const products = await axios.get(`api/products`);
        dispatchProductData({
          type: "LOAD_PRODUCTS",
          payload: products.data.products,
        });
        const teams = getTeams(products.data.products);
        dispatchProductData({
          type: "LOAD_TEAMS",
          payload: teams,
        });
      } catch (error) {}
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ productData, dispatchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
