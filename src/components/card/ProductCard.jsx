import style from "./ProductCard.module.css";
import { WishlistButton } from "../button/WishlistButton";
import { inCart } from "../../utils/";
import { getRatingColor } from "../../utils/";
import { getDiscountedPrice } from "../../utils/";
import { useNavigate } from "react-router";
import { addToCart } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const ProductCard = ({ product }) => {
  const [imageLoader, setImageLoader] = useState(true);
  const [btnLoader, setBtnLoader] = useState(false);
  const { cart } = useSelector((store) => store.products);
  const { userToken, status } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setBtnLoader(false);
  }, [status]);

  const navigateToCart = (e) => {
    e.stopPropagation();
    navigate("/cart");
  };
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={() => {
        navigate(`/products/${product._id}`);
      }}
      className={`${style.product} `}>
      <div
        className={`${style.card} card card--vertical card--box-shadow position-relative`}>
        <div
          className={`${style.card__img} display-block width-100 overflow-hidden`}>
          {imageLoader && <Loader />}
          <img
            src={product.image_URL}
            alt={product.title}
            className={
              imageLoader ? `display-none` : `img--responisve overflow-hidden`
            }
            onLoad={() => setImageLoader(false)}
          />
        </div>
        <div
          className={`${style.card__body} card__body display-flex flex-col p-9`}>
          <h4 className={`${style.card__title} txt-md`}>{product.name}</h4>
          <small className="card__text-info">
            {`${product.team} `}
            <i className="fas fa-check"></i>
          </small>
          <div className="card__rating__delivery display-flex mt-9">
            {product.fastDelivery && (
              <small className="card__text-info txt-bold">
                Fast Delivery{" "}
                <i
                  className={`fas fa-check ${style.fast_delivery} p-2 txt-white`}
                />
              </small>
            )}
            <span className={`card__rating ml-auto`}>
              {product.rating}{" "}
              <i
                className={` fas fa-star ${
                  style[getRatingColor(product.rating)]
                }`}></i>
            </span>
          </div>
          <div className={`${style.card__price} card__price`}>
            <span className="card__price--mrp">
              ₹{getDiscountedPrice(product.discount, product.price)}
            </span>
            <span className="card__price--strike">₹{product.price}</span>
            <span className="card__price--discount">
              {`${product.discount}% off`}
            </span>
          </div>
          <div className="card__link">
            <div className="card__link--btn width-100 justify-content-center">
              {inCart(cart, product._id) ? (
                <button
                  className="btn btn--lg btn--success txt-white btn--icon width-100"
                  onClick={navigateToCart}>
                  <i className="fas fa-cart-plus" />
                  Go to Cart
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    userToken
                      ? (dispatch(addToCart(product)),
                        setBtnLoader((state) => !state))
                      : navigate("/login");
                  }}
                  disabled={btnLoader}
                  className={`btn btn--lg btn--primary txt-white btn--icon width-100 ${style.btn__primary_dark}`}>
                  {btnLoader ? (
                    <Loader width="1rem" height="1rem" />
                  ) : (
                    <>
                      <i className="fas fa-cart-plus" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
        {!product.inStock && (
          <div className="card__overlay-container">
            <div
              className={`${style.card__badge} card__badge overflow-hidden txt-reg`}>
              Sold Out
            </div>
          </div>
        )}
        <div className={style.btn_wishlist_wrapper}>
          <WishlistButton product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export { ProductCard };
