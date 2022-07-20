import style from "./WishlistButton.module.css";
import { inWishlist } from "../../utils/";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../actions";
import { useNavigate } from "react-router";
export const WishlistButton = ({ product }) => {
  const { wishlist } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken } = useSelector((store) => store.auth);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        userToken
          ? inWishlist(wishlist, product._id)
            ? dispatch(removeFromWishlist(product._id))
            : dispatch(addToWishlist(product))
          : navigate("/login");
      }}
      className={`btn btn--md txt-white btn--icon ${style.btn_heart} ${
        inWishlist(wishlist, product._id) ? style.active_wishlist : ``
      }`}>
      <i className={`far fa-heart `} />
    </button>
  );
};
