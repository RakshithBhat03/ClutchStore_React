import style from "./Collection.module.css";
import { Link } from "react-router-dom";
export const CollectionCard = ({ categoryName, image_URL }) => {
  return (
    <Link to="/products">
      <div
        className={`${style.collection} display-flex flex-col align-items-center`}>
        <img src={image_URL} alt={categoryName} className="img--responsive" />
        <span className="txt-md m-9 txt-semibold">{categoryName}</span>
      </div>
    </Link>
  );
};
