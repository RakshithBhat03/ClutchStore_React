import style from "./Collection.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterReset, filterCategory } from "../../../../features/filterSlice";
import { useState } from "react";
import { Loader } from "../../../../components";
export const CollectionCard = ({ _id, categoryName, image_URL }) => {
  const [imageLoader, setImageLoader] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateHandler = (categoryName) => {
    dispatch(filterReset());
    dispatch(filterCategory(categoryName));
    navigate("/products");
  };
  return (
    <Link to="/products" key={_id}>
      <div
        className={`${style.collection} display-flex flex-col align-items-center`}
        onClick={() => navigateHandler(categoryName)}>
        {imageLoader && <Loader />}
        <img
          src={image_URL}
          alt={categoryName}
          onLoad={() => setImageLoader(false)}
          className={imageLoader ? `display-none` : `img--responsive`}
        />
        <span className="txt-md m-9 txt-semibold">{categoryName}</span>
      </div>
    </Link>
  );
};
