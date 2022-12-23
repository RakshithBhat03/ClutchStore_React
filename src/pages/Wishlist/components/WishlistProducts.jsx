import { ProductCard } from "../../../components";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
const WishlistProuducts = () => {
  const { wishlist } = useSelector((store) => store.products);
  return (
    <motion.div
      layout
      className="wishlist-product display-flex flex-wrap gap-1 align-items-strech justify-content-start">
      <AnimatePresence>
        {wishlist.map((wishlistItem) => (
          <ProductCard key={wishlist._id} product={wishlistItem} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
export { WishlistProuducts };
