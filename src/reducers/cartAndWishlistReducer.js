const cartAndWishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.cart.some((cartItem) => cartItem._id === action.payload._id)
        ? {
            ...state,
            cart: state.cart.map((cartItem) =>
              cartItem._id === action.payload._id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  }
                : cartItem
            ),
          }
        : {
            ...state,
            cart: state.cart.concat({ ...action.payload, quantity: 1 }),
          };
    case "DECREMENT_CART_QUANTITY":
      return action.payload.quantity === 1
        ? {
            ...state,
            cart: state.cart.filter(
              (cartItem) => cartItem._id !== action.payload._id
            ),
          }
        : {
            ...state,
            cart: state.cart.map((cartItem) =>
              cartItem._id === action.payload._id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            ),
          };
    case "TOGGLE_WISHLIST":
      return state.wishlist.some(
        (wishlistItem) => wishlistItem._id === action.payload._id
      )
        ? {
            ...state,
            wishlist: state.wishlist.filter(
              (wishlistItem) => wishlistItem._id !== action.payload._id
            ),
          }
        : {
            ...state,
            wishlist: state.wishlist.concat({ ...action.payload }),
          };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export { cartAndWishlistReducer };
