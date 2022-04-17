import { useCartAndWishlist } from "../../context";
import style from "./Cart.module.css";
import { CartProducts, CartSummary } from "./components";
function Cart() {
  const {
    cartAndWishlistItems: { cart },
  } = useCartAndWishlist();
  return (
    <div className="main min-75-vh width-100 display-flex justify-content-center">
      <main className="width-100">
        {cart.length !== 0 && (
          <div
            className={`${style.cart_wrapper} display-grid mx-auto my-15 width-80 gap-1`}>
            <CartProducts />
            <CartSummary />
          </div>
        )}
      </main>
    </div>
  );
}

export { Cart };
