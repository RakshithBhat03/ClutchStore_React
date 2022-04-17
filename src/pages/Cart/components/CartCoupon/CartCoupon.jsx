import "./CartCoupon.css";
const CartCoupon = () => {
  return (
    <section className="product-coupon display-flex flex-col justify-content-center gap-1 p-11">
      <div className="section-heading txt-bold txt-left py-5 px-8">
        <span>Apply Coupon</span>
      </div>
      <p className="coupon-info txt-reg">
        If you have a coupon code, please enter in the box below.
      </p>
      <input
        type="text"
        className="coupon-input input-feild input--primary input--md input--round px-7 width-90 mx-auto"
        placeholder="Apply coupon"
      />
      <button
        type="button"
        className="btn btn--primary btn--md txt-white width-30 mx-auto">
        Apply
      </button>
      <div className="section-heading txt-bold txt-left py-5 px-8">
        <span>Instructions for seller</span>
      </div>
      <textarea
        className="text-area p-5 txt-reg width-90 mx-auto"
        placeholder="- Bill required"
        defaultValue={""}
      />
    </section>
  );
};
export { CartCoupon };
