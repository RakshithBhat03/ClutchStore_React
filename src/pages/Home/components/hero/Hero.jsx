import style from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
import { filterReset } from "../../../../features/filterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Loader } from "../../../../components";
const Hero = () => {
  const [imageLoader, setImageLoader] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToProducts = () => {
    dispatch(filterReset());
    navigate("/products");
  };
  return (
    <div className="main">
      <main>
        <section className={`${style.hero_wrapper} position-relative`}>
          {imageLoader && <Loader />}
          <div
            className={imageLoader ? "display-none" : style.hero}
            onClick={navigateToProducts}>
            <img
              src="https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Warriors/Banner/1969_NBA_TLP_Aspot_032122_WARR_Desk_dbbmsv.webp"
              alt=""
              className={`img--responsive ${style.hero__img}`}
              onLoad={() => setImageLoader(false)}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export { Hero };
