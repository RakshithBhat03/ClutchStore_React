import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modalSlice";
const ToggleFilter = () => {
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(openModal())}
        className="btn btn--primary-dark ml-11 mb-9 btn--md txt-white">
        Filter
      </button>
    </div>
  );
};

export { ToggleFilter };
