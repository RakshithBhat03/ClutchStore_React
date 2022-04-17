export const filterFastDelivery = (products, filterState) =>
  filterState.fastDelivery
    ? products.filter(
        (product) => product.fastDelivery === filterState.fastDelivery
      )
    : [...products];
