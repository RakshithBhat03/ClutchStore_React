import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteAddress, getAllAddress } from "../../actions";
import { ProfileNavigation, AddressForm, Modal } from "../../components";
import { disableEdit, enableEdit } from "../../features/addressSlice";
import { logoutUser } from "../../features/authSlice";
import { openModal } from "../../features/modalSlice";
import { clearProductState } from "../../features/productSlice";
import { useDocumentTitle } from "../../hooks";
import { applyDiscount } from "../../utils/filterSortBy";
import { initialAddressValues } from "../../components/";
import "./Profile.css";
const Profile = () => {
  const { userData } = useSelector((store) => store.auth);
  const { orders } = useSelector((store) => store.products);
  const { address, edit } = useSelector((store) => store.address);
  const modal = useSelector((store) => store.modal);
  const [tab, setTab] = useState("Profile");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuth = () => {
    dispatch(logoutUser());
    dispatch(clearProductState());
    navigate("/");
  };

  useEffect(() => {
    if (!modal) dispatch(disableEdit());
  }, [modal]);

  useDocumentTitle("Profile | Clutch Store");
  return (
    <div className="main min-75-vh width-100 display-flex flex-col mt-16 align-items-center gap-1">
      <section className="profile">
        <ProfileNavigation tab={tab} setTab={setTab} />
      </section>
      {tab === "Profile" && (
        <div className="tab-display display-flex flex-col">
          <h3 className="m-0 txt-lg">User Profile</h3>
          <ul className="display-flex mt-12 gap-1 flex-col">
            <li className="txt-md">
              Name:{" "}
              <span>
                {userData.firstName} {userData.lastName}
              </span>
            </li>
            <li className="txt-md">
              Email: <span>{userData.email}</span>
            </li>
          </ul>
          <button
            onClick={handleAuth}
            className="btn btn-auth btn--md px-12 txt-white ml-auto mt-12">
            Logout
          </button>
        </div>
      )}{" "}
      {tab === "Address" && (
        <div className="tab-display display-flex flex-col gap-1">
          <div className="display-flex justify-content-between">
            <h3 className="m-0 txt-lg">Address</h3>
            {address.length > 0 && (
              <button
                onClick={() => dispatch(openModal())}
                className={`btn btn--md btn--primary txt-white btn--icon btn-primary-dark btn`}>
                <i className="fas fa-plus" />
                <span className="btn-address">Add Address</span>
              </button>
            )}
          </div>
          {address.length > 0 ? (
            address.map((currentAddress) => (
              <div className="display-flex flex-col address-container p-9 mb-6 position-relative">
                <div className="position-absolute btn-address-cta display-flex gap-1">
                  <button
                    onClick={() => {
                      dispatch(enableEdit(currentAddress));
                      dispatch(openModal());
                    }}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => dispatch(deleteAddress(currentAddress))}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <span className="txt-semibold address-name">
                  {currentAddress.name}
                </span>
                <span className="address-body">
                  {currentAddress.street}, {currentAddress.city},{" "}
                  {currentAddress.state}, {currentAddress.country},{" "}
                  {currentAddress.pincode}
                </span>
                <Modal>
                  <AddressForm
                    currentAddress={
                      edit ? currentAddress : initialAddressValues
                    }
                    edit={edit}
                  />
                </Modal>
              </div>
            ))
          ) : (
            <>
              <span className="txt-md">You don't have any address yet</span>
              <button
                onClick={() => dispatch(openModal())}
                className={`btn btn--lg btn--primary txt-white btn--icon width-100 btn-primary-dark mt-6 btn-order mx-auto`}>
                <i className="fas fa-plus" />
                Add Address
              </button>
              <Modal>
                <AddressForm
                  currentAddress={initialAddressValues}
                  edit={edit}
                />
              </Modal>
            </>
          )}
        </div>
      )}{" "}
      {tab === "Orders" && (
        <div className="tab-display display-flex flex-col">
          <h3 className="m-0 txt-lg mb-9">Orders</h3>
          {orders.length > 0 ? (
            <ul>
              {orders.map((order) => (
                <li className="width-100 list-order p-9 display-flex align-items-center gap-2">
                  <figure>
                    <img src={order.image_URL} alt="" className="img-order" />
                  </figure>
                  <span className="txt-semibold order-details">
                    {order.name} x {order.qty} - ₹
                    {(Number(order.price) -
                      applyDiscount(order.discount, order.price)) *
                      Number(order.qty)}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <span className="txt-md">You don't have any orders yet</span>
              <button
                onClick={() => navigate("/products")}
                className={`btn btn--lg btn--primary txt-white btn--icon width-100 btn-primary-dark mt-12 btn-order mx-auto`}>
                <i className="fas fa-cart-plus" />
                Explore
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export { Profile };
