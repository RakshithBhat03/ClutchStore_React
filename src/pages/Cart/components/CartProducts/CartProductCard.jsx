import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromCart,
  updateCartItem,
} from "../../../../actions";
import { getDiscountedPrice } from "../../../../utils/getDiscountedPrice";
import { inWishlist } from "../../../../utils/inWishlist";
import "./CartProductCard.css";

function CartProductCard({ cartItem }) {
  const { wishlist } = useSelector((store) => store.products);
  const dispatch = useDispatch();
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
              cartItem.qty === 1
                ? dispatch(removeFromCart(cartItem._id))
                : dispatch(
                    updateCartItem({
                      action: { type: "decrement" },
                      productId: cartItem._id,
                    })
                  )
            }
            type="button"
            disabled={cartItem.qty === 1}
            className="btn btn--md btn--quantity display-flex justify-content-center align-items-center">
            <i className="fas fa-minus" />
          </button>
          <span>{cartItem.qty}</span>
          <button
            onClick={() =>
              dispatch(
                updateCartItem({
                  action: { type: "increment" },
                  productId: cartItem._id,
                })
              )
            }
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
                  dispatch(addToWishlist(cartItem));
                }}
                className={`btn btn--primary-dark btn--md txt-white btn--icon`}>
                <i className="fas fa-heart" />
                Move to wishlist
              </button>
            )}
            <button
              onClick={() => dispatch(removeFromCart(cartItem._id))}
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
