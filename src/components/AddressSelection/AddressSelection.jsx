import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectAddress } from "../../features/addressSlice";
import "./AddressSelection.css";
const AddressSelection = () => {
  const { address } = useSelector((store) => store.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="address-wrapper width-100 p-11 display-flex flex-col gap-1">
      <div className="section-heading txt-bold txt-left py-5 px-8">
        <span>Address</span>
      </div>
      {address.length > 0 ? (
        <div className="display-flex flex-col gap-1">
          {address.map((currentAddress) => (
            <label
              key={currentAddress._id}
              className="display-flex address-container p-9 gap-1">
              <input
                type="radio"
                className="mr-6"
                name="address"
                onChange={() => {
                  dispatch(selectAddress());
                }}
              />
              <div className="display-flex flex-col mb-6 width-100">
                <span className="txt-semibold address-name">
                  {currentAddress.name}
                </span>
                <span className="address-body">
                  {currentAddress.street}, {currentAddress.city},{" "}
                  {currentAddress.state}, {currentAddress.country},{" "}
                  {currentAddress.pincode}
                </span>
              </div>
            </label>
          ))}
        </div>
      ) : (
        <button
          onClick={() => navigate("/profile")}
          className={`btn btn--lg btn--primary txt-white btn--icon width-100 btn-primary-dark mt-6 btn-order mx-auto`}>
          <i className="fas fa-plus" />
          Add Address
        </button>
      )}
    </section>
  );
};

export { AddressSelection };
