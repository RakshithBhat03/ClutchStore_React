export const inWishlist = (wishlist, productId) =>
  [...wishlist].some((wishlistItem) => wishlistItem._id === productId);
