import "./CartSummary.css";
import { useCartAndWishlist } from "../../../../context/";
import { getTotalCharges } from "../../../../utils";
function CartSummary() {
  const { cartAndWishlistItems } = useCartAndWishlist();
  const { orderSubtotal, shippingCharges, taxCharges, totalPrice } =
    getTotalCharges(cartAndWishlistItems.cart);
  return (
    <section className="product-summary display-flex flex-col justify-content-center gap-1 p-11">
      <div className="section-heading txt-bold txt-left py-5 px-8">
        <span>Order Summary</span>
      </div>
      <div className="product-total-wrapper display-flex flex-col justify-content-center gap-1">
        <div className="product-subtotal display-flex align-items-center justify-content-between">
          <p className="txt-medium">Order Subtotal</p>
          <span className="product-price txt-semibold">₹{orderSubtotal}</span>
        </div>
        <hr />
        <div className="product-shipping display-flex align-items-center justify-content-between">
          <p>Shipping and handling</p>
          <span className="product-price txt-semibold">₹{shippingCharges}</span>
        </div>
        <hr />
        <div className="product-tax display-flex align-items-center justify-content-between">
          <p>Tax</p>
          <span className="product-price txt-semibold">₹{taxCharges}</span>
        </div>
        <hr />
        <div className="product-total display-flex align-items-center justify-content-between">
          <p>Total</p>
          <span className="product-price txt-bold">₹{totalPrice}</span>
        </div>
      </div>
      <a href="/" className="width-30 mx-auto">
        <button
          type="button"
          className="btn btn--primary-dark btn--md width-100 mx-auto txt-white display-flex justify-content-center">
          <span>Checkout</span>
        </button>
      </a>
    </section>
  );
}

export { CartSummary };
