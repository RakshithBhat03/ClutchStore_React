import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks";
import "./SingleProduct.css";
import { addToCart, addToWishlist, getProductById } from "../../actions";
import { clearCurrentProduct } from "../../features/productSlice";
import { useEffect, useState } from "react";
import {
  getDiscountedPrice,
  getRatingColor,
  inCart,
  inWishlist,
} from "../../utils";
import { Loader } from "../../components";
import style from "../../components/card/ProductCard.module.css";

const SingleProduct = () => {
  const [imageLoader, setImageLoader] = useState(true);
  const [btnLoader, setBtnLoader] = useState(false);
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const {
    currentProduct,
    isLoading,
    cart,
    wishlist,
    isCartLoading,
    isWishlistLoading,
  } = useSelector((store) => store.products);
  const { userToken, status } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    setBtnLoader(false);
  }, [status]);

  useEffect(() => {
    dispatch(getProductById(productId));
    return () => dispatch(clearCurrentProduct());
    // eslint-disable-next-line
  }, [productId]);
  useDocumentTitle(`${currentProduct.name}`);
  return (
    <section className="width-100 single-product-wrapper display-flex p-16 ">
      <div className="mx-auto single-product card--box-shadow display-flex justify-content-center position-relative ">
        <figure className="product-image display-flex align-items-center ">
          {imageLoader && <Loader />}
          <img
            src={currentProduct.image_URL}
            alt={currentProduct.title}
            className={
              imageLoader
                ? `display-none`
                : `img--responisve overflow-hidden product-image`
            }
            onLoad={() => setImageLoader(false)}
          />
        </figure>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="display-flex width-100 p-9 flex-col justify-content-center">
            <div className="product-body">
              <h2 className="product-title">{currentProduct.name}</h2>
              <small className="card__text-info ">
                {`${currentProduct.team} `}
                <i className="fas fa-check"></i>
              </small>
              <div className="card__rating__delivery display-flex mt-9 align-items-center">
                {currentProduct.fastDelivery && (
                  <small className="card__text-info txt-bold">
                    Fast Delivery{" "}
                    <i
                      className={`fas fa-check product-fast-delivery p-2 txt-white`}
                    />
                  </small>
                )}
                <span className={`card__rating product-rating ml-16`}>
                  {currentProduct.rating}{" "}
                  <i
                    className={` fas fa-star ${getRatingColor(
                      currentProduct.rating
                    )}`}></i>
                </span>
              </div>
              <div className="product-price card__price mt-9">
                <span className="card__price--mrp">
                  ₹
                  {getDiscountedPrice(
                    currentProduct.discount,
                    currentProduct.price
                  )}
                </span>
                <span className="card__price--strike txt-md txt-gray">
                  ₹{currentProduct.price}
                </span>
                <span className="card__price--discount">
                  {`${currentProduct.discount}% off`}
                </span>
              </div>
              <span className="product-description">
                {currentProduct.description}
              </span>
              <div className="product-cta">
                <div className="card__link mt-9">
                  <div className="card__link--btn width-100 justify-content-center">
                    {inCart(cart, currentProduct._id) ? (
                      <button
                        className="btn btn--lg btn--success txt-white btn--icon width-100"
                        onClick={() => navigate("/cart")}>
                        <i className="fas fa-cart-plus" />
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          userToken
                            ? dispatch(addToCart(currentProduct))
                            : navigate("/login")
                        }
                        className={`btn btn--lg btn--primary txt-white btn--icon width-100 ${style.btn__primary_dark}`}>
                        {isCartLoading ? (
                          <Loader width="1rem" height="1rem" />
                        ) : (
                          <>
                            <i className="fas fa-cart-plus" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    )}
                    {inWishlist(wishlist, currentProduct._id) ? (
                      <button
                        className="btn btn--lg btn--primary txt-white btn--icon width-100"
                        onClick={() => navigate("/wishlist")}>
                        <i className="fas fa-cart-plus" />
                        Go to Wishlist
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          userToken
                            ? dispatch(addToWishlist(currentProduct))
                            : navigate("/login")
                        }
                        className={`btn btn--primary btn--lg btn--md width-100 txt-white btn--icon`}>
                        {isWishlistLoading ? (
                          <Loader width="1rem" height="1rem" />
                        ) : (
                          <>
                            <i className="fas fa-heart" />
                            <span> Add to wishlist</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isLoading && !currentProduct.inStock && (
          <div className="card__overlay-container">
            <div className={`card__badge overflow-hidden txt-md`}>Sold Out</div>
          </div>
        )}
      </div>
    </section>
  );
};

export { SingleProduct };
