import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addAddress, updateAddress } from "../../actions";
import { disableEdit } from "../../features/addressSlice";
import { closeModal } from "../../features/modalSlice";
import { FormError } from "../";
import "./AddressForm.css";
export const initialAddressValues = {
  name: "",
  street: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};
const AddressForm = ({ currentAddress, edit }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: currentAddress,
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      street: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      country: Yup.string().required("This field is required"),
      pincode: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      edit ? dispatch(updateAddress(values)) : dispatch(addAddress(values));
      dispatch(closeModal());
    },
  });
  const setDefaultAddress = () => {
    formik.setValues({
      name: "Adarsh Balika",
      street: "123 Street, 15th Cross, Vijaynagar",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      pincode: "568712",
    });
  };
  useEffect(() => {
    return () => {
      dispatch(disableEdit());
      dispatch(closeModal());
    };
  }, []);
  return (
    <section>
      <div className="display-flex flex-col gap-1 px-4 py-6">
        <h3 className="m-0 txt-center txt-md">Address</h3>
        <form
          className="display-flex flex-col align-items-center width-100 px-4 gap-1"
          onSubmit={formik.handleSubmit}>
          <label className="display-flex flex-col input-label width-100">
            <span className="ml-2">Name</span>
            <input
              type="text"
              name="name"
              //   placeholder="Name"
              className="input-field input--sm py-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>
          {formik.errors.name && formik.touched.name && (
            <FormError>{formik.errors.name}</FormError>
          )}
          <label className="display-flex flex-col input-label width-100">
            <span className="ml-2">Street</span>
            <input
              type="text"
              name="street"
              className="input-field input--sm py-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
          </label>
          {formik.errors.street && formik.touched.street && (
            <FormError>{formik.errors.street}</FormError>
          )}
          <label className="display-flex flex-col input-label width-100">
            <span className="ml-2">City</span>
            <input
              type="text"
              name="city"
              className="input-field input--sm py-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
          </label>
          {formik.errors.city && formik.touched.city && (
            <FormError>{formik.errors.city}</FormError>
          )}
          <label className="display-flex flex-col input-label width-100">
            <span className="ml-2">State</span>
            <input
              type="text"
              name="state"
              className="input-field input--sm py-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
          </label>
          {formik.errors.state && formik.touched.state && (
            <FormError>{formik.errors.state}</FormError>
          )}
          <label className="display-flex flex-col input-label width-100">
            <span className="ml-2">Country</span>
            <input
              type="text"
              name="country"
              className="input-field input--sm py-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
          </label>
          {formik.errors.country && formik.touched.country && (
            <FormError>{formik.errors.country}</FormError>
          )}
          <label className="display-flex flex-col input-label width-100">
            <span className="ml-2">Pincode</span>
            <input
              type="text"
              name="pincode"
              className="input-field input--sm py-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pincode}
            />
          </label>
          {formik.errors.pincode && formik.touched.pincode && (
            <FormError>{formik.errors.pincode}</FormError>
          )}
          <button
            type="submit"
            className="btn btn--md btn--primary-dark txt-white">
            {edit ? "Update" : "Add"}
          </button>
        </form>
        {!edit && (
          <button
            onClick={setDefaultAddress}
            className="btn btn--md btn--link ml-auto">
            Fill deafult address
          </button>
        )}
      </div>
    </section>
  );
};

export { AddressForm };
