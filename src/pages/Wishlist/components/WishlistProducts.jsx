import { ProductCard } from "../../../components";
import { useSelector } from "react-redux";
const WishlistProuducts = () => {
  const { wishlist } = useSelector((store) => store.products);
  return (
    <div className="wishlist-product display-flex flex-wrap gap-1 align-items-strech justify-content-start">
      {wishlist.map((wishlistItem) => (
        <ProductCard key={wishlist._id} product={wishlistItem} />
      ))}
    </div>
  );
};
export { WishlistProuducts };
