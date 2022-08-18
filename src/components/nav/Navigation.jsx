import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/authSlice";
import { clearProductState } from "../../features/productSlice";
const Navigation = () => {
  const dispatch = useDispatch();
  const { userToken } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleAuth = () => {
    if (userToken) {
      dispatch(logoutUser());
      dispatch(clearProductState());
      navigate("/");
    } else navigate("/login");
  };
  const { cart, wishlist } = useSelector((store) => store.products);
  return (
    <header className="navigation-wrapper">
      <div className="navigation max-width-1200 mx-auto justify-content-between">
        <div className="navigation__title">
          <Link to="/">
            <img
              src="./assets/ClutchLogo.PNG"
              alt="ClutchStore logo"
              className="img--responsive nav--logo"
            />
          </Link>
        </div>
        <div className="navigation__login ml-auto">
          <button onClick={handleAuth} className="btn btn-auth btn--md px-12">
            {userToken ? `Logout` : `Login`}
          </button>
        </div>
        <div className="navigation__hamburger">
          <button className="btn btn--md btn--icon btn--outline">
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="navigation__menu mx-0">
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
