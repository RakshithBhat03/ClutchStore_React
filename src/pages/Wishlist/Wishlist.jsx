import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../../actions";
import { SplashScreen } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { WishlistProuducts } from "./components/WishlistProducts";
import style from "./Wishlist.module.css";
const Wishlist = () => {
  const { wishlist } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlistItems());
  }, []);
  useDocumentTitle("Wishlist | Clutch Store");
  return (
    <div className="main min-75-vh width-100 display-flex justify-content-center">
      <main className="width-100">
        {wishlist.length > 0 ? (
          <div
            className={`${style.wishlist_wrapper} display-flex flex-col width-90 mx-auto gap-1 p-11 my-9`}>
            <div className={`${style.wishlist_heading} mx-auto`}>
              <h1 className="txt-lg">Your Wishlist</h1>
            </div>
            <WishlistProuducts />
          </div>
        ) : (
          <div className="mt-16">
            <SplashScreen text="Wishlist is empty" emptyCart={true} />
          </div>
        )}
      </main>
    </div>
  );
};

export { Wishlist };
