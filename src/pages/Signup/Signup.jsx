import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login/components/LoginForm.css";
import style from "./Signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDocumentTitle } from "../../hooks";
import { SignupUser } from "../../actions";
import { FormError, Loader } from "../../components";

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const dispatch = useDispatch();
  const { error, status, loading } = useSelector((store) => store.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invaild email address")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password should be minimum of 8 characters"),
      confirmPassword: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      let signupValues = { ...values };
      delete signupValues["confirmPassword"];
      dispatch(SignupUser(signupValues));
    },
  });

  useEffect(() => {
    if (error === 422) {
      formik.setErrors({ email: "Email already exists" });
    }
    // eslint-disable-next-line
  }, [error]);
  useEffect(() => {
    if (status) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line
  }, [status]);

  useEffect(() => {
    if (status) {
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    }
    // eslint-disable-next-line
  }, [status]);
  useDocumentTitle("Signup | Clutch Store");
  return (
    <div>
      <div className="main min-75-vh width-100 display-flex justify-content-center align-items-center">
        <main>
          <section
            className={`${style.auth_wrapper} auth-wrapper display-flex flex-col justify-content-center gap-1`}>
            <div className="auth-title display-flex justify-content-between align-items-center">
              <span className="txt-semibold">Sign up</span>
            </div>
            <div className="auth-form">
              <form
                onSubmit={formik.handleSubmit}
                className="form display-flex flex-col justify-content-center gap-1">
                <div className={`${style.form_name} display-flex gap-1`}>
                  <div className="width-100 display-flex flex-col gap-1">
                    <input
                      type="text"
                      name="firstName"
                      className="input-field input--md "
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <FormError>{formik.errors.firstName}</FormError>
                    )}
                  </div>
                  <div className="width-100 display-flex flex-col gap-1 ">
                    <input
                      type="text"
                      name="lastName"
                      className="input-field input--md "
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                      <FormError>{formik.errors.lastName}</FormError>
                    )}
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  className="input-field input--md "
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <FormError>{formik.errors.email}</FormError>
                )}
                <div className={`${style.form_password} display-flex gap-1`}>
                  <div
                    className={`${style.password_icon_wrapper} position-relative display-flex flex-col gap-1`}>
                    <input
                      type={passwordVisibility ? "text" : "password"}
                      name="password"
                      className="input-field input--md pr-16"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <FormError>{formik.errors.password}</FormError>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setPasswordVisibility((visible) => !visible)
                      }
                      className={`btn-password-visibility`}>
                      <i
                        className={`fa-solid ${
                          passwordVisibility ? `fa-eye-slash` : `fa-eye`
                        }`}></i>
                    </button>
                  </div>
                  <div
                    className={`${style.password_icon_wrapper} position-relative display-flex flex-col gap-1`}>
                    <input
                      type={passwordVisibility ? "text" : "password"}
                      name="confirmPassword"
                      className="input-field input--md pr-16"
                      placeholder="Confirm Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword && (
                        <FormError>{formik.errors.confirmPassword}</FormError>
                      )}
                    <button
                      type="button"
                      onClick={() =>
                        setPasswordVisibility((visible) => !visible)
                      }
                      className={`btn-password-visibility`}>
                      <i
                        className={`fa-solid ${
                          passwordVisibility ? `fa-eye-slash` : `fa-eye`
                        }`}></i>
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn--md btn--primary">
                  {loading ? <Loader height="1rem" width="1rem" /> : "Sign up"}
                </button>
              </form>
            </div>
            <span className="auth-redirect txt-center">
              Already have an account?{" "}
              <Link to="/login" className="btn btn--link">
                Login
              </Link>
            </span>
          </section>
        </main>
      </div>
    </div>
  );
};

export { Signup };
