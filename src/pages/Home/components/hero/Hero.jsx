import style from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../../context";
const Hero = () => {
  const { filterDispatch: dispatch } = useFilter();
  const navigate = useNavigate();
  const navigateToProducts = () => {
    dispatch({ type: "RESET" });
    navigate("/products");
  };
  return (
    <div className="main">
      <main>
        <section className={`${style.hero_wrapper} position-relative`}>
          <div className={style.hero} onClick={navigateToProducts}>
            <img
              src="https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Warriors/Banner/1969_NBA_TLP_Aspot_032122_WARR_Desk_dbbmsv.webp"
              alt=""
              className={`img--responsive ${style.hero__img}`}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export { Hero };
