export const filterInStock = (products, filterState) =>
  filterState.inStock
    ? products.filter((product) => product.inStock === filterState.inStock)
    : [...products];
