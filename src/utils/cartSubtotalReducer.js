import { getDiscountedPrice } from ".";
export const cartSubtotalReducer = (prev, curr) =>
  prev + Math.floor(getDiscountedPrice(curr.discount, curr.price) * curr.qty);
