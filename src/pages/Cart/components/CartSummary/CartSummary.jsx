import "./CartSummary.css";
import { getTotalCharges } from "../../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router";
import { loadScript, ShowToast } from "../../../../components";
import { clearCart, placeOrder } from "../../../../features/productSlice";
import { removeAllItemsFromCart } from "../../../../actions";
function CartSummary() {
  const { cart } = useSelector((store) => store.products);
  const { userData } = useSelector((store) => store.auth);
  const { isAddressSelected } = useSelector((store) => store.address);
  const { orderSubtotal, shippingCharges, taxCharges, totalPrice } =
    getTotalCharges(cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePayment = async (totalPrice) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      ShowToast({
        type: "error",
        message: "Razorpay SDK failed to load. Are you online?",
      });
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: totalPrice * 100,
      currency: "INR",
      name: "Clutch Store",
      description: "Payment Options",
      //   image: { logo },

      handler: async function (response) {
        const order_id = uuid();
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        dispatch(removeAllItemsFromCart());
        dispatch(placeOrder(cart));
        ShowToast({ type: "success", message: "Order placed" });
        navigate("/");
      },
      prefill: {
        name: userData.firstName + " " + userData.lastName,
        email: userData.email,
        contact: "9999999999",
      },

      theme: {
        color: "rgb(9, 94, 143)",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
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
      <button
        type="button"
        className={`width-30 btn btn--primary-dark btn--md  mx-auto txt-white display-flex justify-content-center ${
          isAddressSelected ? "" : "btn-disabled"
        }`}
        disabled={!isAddressSelected}
        onClick={() => handlePayment(totalPrice)}>
        <span>Pay now</span>
      </button>
    </section>
  );
}

export { CartSummary };
