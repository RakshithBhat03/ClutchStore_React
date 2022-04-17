import { useCartAndWishlist } from "../../../context";
import { ProductCard } from "../../../components/card/ProductCard";
const WishlistProuducts = () => {
  const { cartAndWishlistItems } = useCartAndWishlist();
  const { wishlist } = cartAndWishlistItems;
  return (
    <div className="wishlist-product display-flex flex-wrap gap-1 align-items-strech justify-content-start">
      {wishlist.map((wishlistItem) => (
        <ProductCard key={wishlist._id} product={wishlistItem} />
      ))}
    </div>
  );
};
export { WishlistProuducts };
