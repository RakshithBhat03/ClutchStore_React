const filterCategory = (products, filterState) =>
  filterState.filteredCategories.length
    ? products.filter((product) =>
        filterState.filteredCategories.includes(product.categoryName)
      )
    : [...products];

export { filterCategory };
