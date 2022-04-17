const highToLow = (previous, current) =>
  Number(current.price) - Number(previous.price);
const lowToHigh = (previous, current) =>
  Number(previous.price) - Number(current.price);
const filterSortBy = (products, filter) => {
  switch (filter.sortBy) {
    case "HIGH_TO_LOW":
      return products.sort(highToLow);
    case "LOW_TO_HIGH":
      return products.sort(lowToHigh);
    default:
      return [...products];
  }
};
export { filterSortBy };
