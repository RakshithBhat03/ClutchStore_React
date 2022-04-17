export const inCart = (cart, productId) =>
  [...cart].some((cartItem) => cartItem._id === productId);
