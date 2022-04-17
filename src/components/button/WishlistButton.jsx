import { useCartAndWishlist } from "../../context";
import style from "./WishlistButton.module.css";
import { inWishlist } from "../../utils/";
export const WishlistButton = ({ product }) => {
  const { cartAndWishlistItems, cartAndWishlistDispatch: dispatch } =
    useCartAndWishlist();
  const { wishlist } = cartAndWishlistItems;
  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_WISHLIST", payload: product })}
      className={`btn btn--md txt-white btn--icon ${style.btn_heart} ${
        inWishlist(wishlist, product._id) ? style.active_wishlist : ``
      }`}>
      <i className={`far fa-heart `} />
    </button>
  );
};
