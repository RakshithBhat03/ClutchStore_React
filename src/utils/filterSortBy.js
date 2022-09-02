export const applyDiscount = (discount, currentPrice) =>
  (Number(discount) * Number(currentPrice)) / 100;

const highToLow = (previous, current) =>
  Number(current.price - applyDiscount(current.discount, current.price)) -
  Number(previous.price - applyDiscount(previous.discount, previous.price));
const lowToHigh = (previous, current) =>
  Number(previous.price - applyDiscount(previous.discount, previous.price)) -
  Number(current.price - applyDiscount(current.discount, current.price));

const filterSortBy = (products, filter) => {
  switch (filter.sortBy) {
    case "HIGH_TO_LOW":
      return [...products].sort(highToLow);
    case "LOW_TO_HIGH":
      return [...products].sort(lowToHigh);
    default:
      return [...products];
  }
};
export { filterSortBy };
