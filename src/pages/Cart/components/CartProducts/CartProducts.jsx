import "./CartProducts.css";
import { CartProductCard } from "./CartProductCard";
import { useCartAndWishlist } from "../../../../context";

function CartProducts() {
  const { cartAndWishlistItems } = useCartAndWishlist();
  const { cart } = cartAndWishlistItems;
  return (
    <section className="product-cart display-flex flex-col justify-content-start width-100 gap-1 p-11">
      <div className="section-heading txt-bold txt-left py-5 px-8 width-30">
        <span>Your Cart</span>
      </div>
      {cart.map((cartItem) => (
        <CartProductCard key={cartItem._id} cartItem={cartItem} />
      ))}
    </section>
  );
}

export { CartProducts };
