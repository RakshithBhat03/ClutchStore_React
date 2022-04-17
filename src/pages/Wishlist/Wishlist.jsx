import { useCartAndWishlist } from "../../context";
import { WishlistProuducts } from "./components/WishlistProducts";
import style from "./Wishlist.module.css";
const Wishlist = () => {
  const { cartAndWishlistItems } = useCartAndWishlist();
  const { wishlist } = cartAndWishlistItems;
  return (
    <div className="main min-75-vh width-100 display-flex justify-content-center">
      <main className="width-100">
        {wishlist.length !== 0 && (
          <div
            className={`${style.wishlist_wrapper} display-flex flex-col width-90 mx-auto gap-1 p-11 my-9`}>
            <div className={`${style.wishlist_heading} mx-auto`}>
              <h1 className="txt-lg">Your Wishlist</h1>
            </div>
            <WishlistProuducts />
          </div>
        )}
      </main>
    </div>
  );
};

export { Wishlist };
