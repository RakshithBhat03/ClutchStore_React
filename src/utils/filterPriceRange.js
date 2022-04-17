const filterPriceRange = (products, filterState) => {
  return products.filter(
    (product) => Number(product.price) <= Number(filterState.priceRange)
  );
};

export { filterPriceRange };
