const filterCategory = (products, filterState) =>
  filterState.categories.length
    ? products.filter((product) =>
        filterState.categories.includes(product.categoryName)
      )
    : [...products];

export { filterCategory };
