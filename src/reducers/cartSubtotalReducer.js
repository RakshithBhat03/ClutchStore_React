import { getDiscountedPrice } from "../utils";
export const cartSubtotalReducer = (prev, curr) =>
  prev +
  Math.floor(getDiscountedPrice(curr.discount, curr.price) * curr.quantity);
