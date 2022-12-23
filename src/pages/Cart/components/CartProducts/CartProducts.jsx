import "./CartProducts.css";
import { CartProductCard } from "./CartProductCard";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function CartProducts() {
  const { cart } = useSelector((store) => store.products);
  return (
    <motion.section
      layout
      className="product-cart display-flex flex-col justify-content-start width-100 gap-1 p-11">
      <div className="section-heading txt-bold txt-left py-5 px-8 width-30">
        <span>Your Cart</span>
      </div>
      <AnimatePresence>
        {cart.map((cartItem) => (
          <CartProductCard key={cartItem._id} cartItem={cartItem} />
        ))}
      </AnimatePresence>
    </motion.section>
  );
}

export { CartProducts };
