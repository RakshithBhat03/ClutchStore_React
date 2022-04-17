import { cartSubtotalReducer } from "../reducers/";
export const getTotalCharges = (cart) => {
  const orderSubtotal = cart.reduce(cartSubtotalReducer, 0);
  const shippingCharges =
    50 * cart.reduce((prev, curr) => prev + Number(curr.quantity), 0);
  const taxCharges = Math.floor(0.18 * orderSubtotal);
  const totalPrice = taxCharges + orderSubtotal + shippingCharges;
  return { orderSubtotal, shippingCharges, taxCharges, totalPrice };
};
