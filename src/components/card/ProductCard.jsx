import style from "./ProductCard.module.css";
import { getRatingColor } from "../../utils/";
import { getDiscountedPrice } from "../../utils/";
const ProductCard = ({ product }) => {
  return (
    <div className={`${style.product} `}>
      <div
        className={`${style.card} card card--vertical card--box-shadow position-relative`}>
        <div
          className={`${style.card__img} display-block width-100 overflow-hidden`}>
          <img
            src={product.image_URL}
            alt={product.title}
            className="img--responisve overflow-hidden"
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
              <button
                className={`btn btn--lg btn--primary txt-white btn--icon width-100 ${style.btn__primary_dark}`}>
                <i className="fas fa-cart-plus" />
                Add to cart
              </button>
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
      </div>
    </div>
  );
};

export { ProductCard };
