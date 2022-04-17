import "./Navigation.css";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../context";
const Navigation = () => {
  const { cartAndWishlistItems } = useCartAndWishlist();
  const { cart, wishlist } = cartAndWishlistItems;
  return (
    <header className="navigation-wrapper">
      <div className="navigation max-width-1200 mx-auto">
        <div className="navigation__title">
          <Link to="/">
            <img
              src="./assets/ClutchLogo.PNG"
              alt="ClutchStore logo"
              className="img--responsive nav--logo"
            />
          </Link>
        </div>
        <div className="navigation__search">
          <div className="navigation__search-icon">
            <i className="fas fa-search" />
          </div>
          <input type="text" className="input-field input--lg" />
        </div>
        <div className="navigation__login">
          <Link to="/login">
            <button className="btn btn-auth btn--md px-12">Login</button>
          </Link>
        </div>
        <div className="navigation__hamburger">
          <button className="btn btn--md btn--icon btn--outline">
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="navigation__menu">
          <ul className="navigation__menu-list">
            <li>
              <Link to="/wishlist">
                <button className="btn btn--md btn--icon btn--outline">
                  <div className="badge-icon badge-icon--sm">
                    <i className="fas fa-heart nav-icon" />
                    {wishlist.length !== 0 && (
                      <span className="badge badge--sm badge--top-right">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <button className="btn btn--md btn--icon btn--outline">
                  <div className="badge-icon badge-icon--sm">
                    <i className="fas fa-shopping-cart nav-icon" />
                    {cart.length !== 0 && (
                      <span className="badge badge--sm badge--top-right">
                        {cart.length}
                      </span>
                    )}
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export { Navigation };
