import { Link } from "react-router-dom";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={`${style.footer} py-16 px-5`}>
      <footer className="display-grid">
        <div className={style.footer_additional}>
          <div className={`${style.footer_info} txt-md`}>Quick Links</div>
          <ul className="display-flex flex-col justify-content-center">
            <li className="py-5 px-3">
              <Link to="/" className="btn btn--link txt-reg">
                Home
              </Link>
            </li>
            <li className="py-5 px-3">
              <Link to="/products" className="btn btn--link txt-reg">
                Products
              </Link>
            </li>
            <li className="py-5 px-3">
              <Link to="/cart" className="btn btn--link txt-reg">
                Cart
              </Link>
            </li>
            <li className="py-5 px-3">
              <Link to="/wishlist" className="btn btn--link txt-reg">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.footer_social}>
          <div className={`${style.footer_info} txt-md`}>Socials</div>
          <ul
            className={`${style.footer_link} display-flex align-items-center justify-content-start`}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RakshithBhat03/">
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rakshithbhat/">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/RakshithBhat1">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <div className={`${style.footer_text} txt-md`}>
            Made with ♥ by Rakshith Bhat
          </div>
          <div className={style.footer_copyright}>
            © ClutchStore, 2022 All rights reserved.
          </div>
        </div>
        <div className={style.footer_additional}>
          <div className={`${style.footer_info} txt-md`}>Contact</div>
          <ul className="display-flex flex-col justify-content-center align-items-center">
            <li className="py-5 px-3">
              <a href="/" rel="noreferrer" className="txt-reg">
                Phone no: 4815162342
              </a>
            </li>
            <li className="py-5 px-3">
              <a href="/" className="txt-reg">
                <i className="fas fa-envelope" /> contactme@clutchstore.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export { Footer };
