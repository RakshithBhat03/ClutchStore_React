import { useNavigate } from "react-router";
import "./SplashScreen.css";
const SplashScreen = ({ text, notFound, emptyCart, successfulPurchase }) => {
  const navigate = useNavigate();
  return (
    <main className="splashscreen-wrapper width-100 display-flex justify-content-center align-items-center flex-col">
      <figure className="img-wrapper mx-auto">
        <img
          src={`${
            notFound
              ? `https://res.cloudinary.com/clutchaf/image/upload/v1658389463/ClutchStore/SVG/undraw_page_not_found_re_e9o6_pxy0rp.svg`
              : emptyCart
              ? `https://res.cloudinary.com/clutchaf/image/upload/v1658389462/ClutchStore/SVG/undraw_empty_cart_co35_wkpxpq.svg`
              : successfulPurchase
              ? `https://res.cloudinary.com/clutchaf/image/upload/v1658389462/ClutchStore/SVG/undraw_successful_purchase_re_mpig_buiuqm.svg`
              : ``
          }`}
          alt="splash-screen"
        />
      </figure>
      <h2 className="text-center">{text}</h2>
      <button
        onClick={() => navigate("/products")}
        className="btn btn--primary-dark btn--lg txt-white">
        Checkout Products
      </button>
    </main>
  );
};

export { SplashScreen };
