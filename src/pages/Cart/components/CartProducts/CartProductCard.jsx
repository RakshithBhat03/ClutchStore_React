import { useCartAndWishlist } from "../../../../context";
import { getDiscountedPrice } from "../../../../utils/getDiscountedPrice";
import { inWishlist } from "../../../../utils/inWishlist";
import "./CartProductCard.css";

function CartProductCard({ cartItem }) {
  const { cartAndWishlistItems, cartAndWishlistDispatch: dispatch } =
    useCartAndWishlist();
  const { wishlist } = cartAndWishlistItems;
  return (
    <div className="card card--horizontal card--box-shadow width-100 mx-auto">
      <div className="card__img">
        <img
          src={cartItem.image_URL}
          alt={cartItem.title}
          className="img--responsive"
        />
      </div>
      <div className="card__body">
        <h4 className="card__title">{cartItem.name}</h4>
        <small className="card__text-info">
          {cartItem.categoryName} <i className="fas fa-check" />
        </small>
        <div className="card__price">
          <span className="card__price--mrp">
            ₹{getDiscountedPrice(cartItem.discount, cartItem.price)}
          </span>
          <span className="card__price--strike">₹{cartItem.price}</span>
          <span className="card__price--discount">
            {cartItem.discount}% off
          </span>
        </div>
        <div className="card__quantity display-flex align-items-center mb-7 gap-1">
          <button
            onClick={() =>
              dispatch({ type: "DECREMENT_CART_QUANTITY", payload: cartItem })
            }
            type="button"
            className="btn btn--md btn--quantity display-flex justify-content-center align-items-center">
            <i className="fas fa-minus" />
          </button>
          <span>{cartItem.quantity}</span>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: cartItem })}
            type="button"
            className="btn btn--md btn--quantity display-flex justify-content-center align-items-center">
            <i className="fas fa-plus" />
          </button>
        </div>
        <div className="card__link">
          <div className="card__link--btn">
            {!inWishlist(wishlist, cartItem._id) && (
              <button
                onClick={() => {
                  dispatch({ type: "TOGGLE_WISHLIST", payload: cartItem });
                  dispatch({ type: "REMOVE_FROM_CART", payload: cartItem });
                }}
                className={`btn btn--primary-dark btn--md txt-white btn--icon`}>
                <i className="fas fa-heart" />
                Move to wishlist
              </button>
            )}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: cartItem })
              }
              className="btn btn--md btn--outline-dark btn--icon">
              {inWishlist(wishlist, cartItem._id) ? (
                <>
                  <i className="fas fa-trash-alt" />
                  <span>Remove from cart</span>
                </>
              ) : (
                <i className="fas fa-trash-alt" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CartProductCard };
