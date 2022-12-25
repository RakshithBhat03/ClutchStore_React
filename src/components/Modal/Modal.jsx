import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import "./Modal.css";
const Modal = ({ children, disableClose }) => {
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={() => dispatch(closeModal())} className={`modal-wrapper`} />
      <div className={`width-100`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col modal-container py-4 px-6 gap-1`}>
          {!disableClose && (
            <button
              onClick={() => dispatch(closeModal())}
              className="txt-md ml-auto position-absolute modal-close">
              <i className="fas fa-times"></i>
            </button>
          )}
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export { Modal };
