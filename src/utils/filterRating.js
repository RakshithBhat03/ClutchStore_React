const filterRating = (products, filterState) => {
  return products.filter(
    (product) => Number(product.rating) >= Number(filterState.rating)
  );
};
export { filterRating };
