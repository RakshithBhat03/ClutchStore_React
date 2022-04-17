import {
  filterSortBy,
  filterPriceRange,
  filterRating,
  filterCategory,
  filterTeam,
  filterInStock,
  filterFastDelivery,
} from "./";

const getFilteredData = (products, filter) =>
  [
    filterSortBy,
    filterPriceRange,
    filterRating,
    filterCategory,
    filterInStock,
    filterFastDelivery,
    filterTeam,
  ].reduce((prev, curr) => curr(prev, filter), products);

export { getFilteredData };
