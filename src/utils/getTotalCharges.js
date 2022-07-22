import { cartSubtotalReducer } from "../utils";
export const getTotalCharges = (cart) => {
  const orderSubtotal = cart.reduce(cartSubtotalReducer, 0);
  const shippingCharges =
    50 * cart.reduce((prev, curr) => prev + Number(curr.qty), 0);
  const taxCharges = Math.floor(0.18 * Number(orderSubtotal));
  const totalPrice = taxCharges + orderSubtotal + shippingCharges;
  return { orderSubtotal, shippingCharges, taxCharges, totalPrice };
};
