import style from "./Collection.module.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../../../context";
import { useNavigate } from "react-router-dom";
export const CollectionCard = ({ _id, categoryName, image_URL }) => {
  const { filterDispatch: dispatch } = useFilter();
  const navigate = useNavigate();
  const navigateHandler = (categoryName) => {
    dispatch({ type: "RESET" });
    dispatch({ type: "CATEGORY", payload: categoryName });
    navigate("/products");
  };
  return (
    <Link to="/products" key={_id}>
      <div
        className={`${style.collection} display-flex flex-col align-items-center`}
        onClick={() => navigateHandler(categoryName)}>
        <img src={image_URL} alt={categoryName} className="img--responsive" />
        <span className="txt-md m-9 txt-semibold">{categoryName}</span>
      </div>
    </Link>
  );
};
