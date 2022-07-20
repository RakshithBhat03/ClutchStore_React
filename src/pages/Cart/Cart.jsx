import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../actions";
import { useDocumentTitle } from "../../hooks";
import style from "./Cart.module.css";
import { CartProducts, CartSummary } from "./components";
function Cart() {
  const { cart } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useDocumentTitle("Cart | Clutch Store");
  return (
    <div className="main min-75-vh width-100 display-flex justify-content-center">
      <main className="width-100">
        {cart.length > 0 && (
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
