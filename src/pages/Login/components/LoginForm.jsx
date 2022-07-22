import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import "./LoginForm.css";
import { FormError } from "../../../components/";
import { useDocumentTitle } from "../../../hooks";
import { loginUser } from "../../../actions";
import { Loader } from "../../../components";

const LoginForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const dispatch = useDispatch();
  const { error, status, loading } = useSelector((store) => store.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password shoud be minimum of 8 characters"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  const setLoginValues = () => {
    formik.setValues({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
  };
  useEffect(() => {
    if (error === 404) {
      formik.setErrors({ email: "Email not found" });
    }
    if (error === 401) {
      formik.setErrors({ password: "Invalid credentials" });
    }
    formik.errors = {};
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (status) {
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    }
    // eslint-disable-next-line
  }, [status]);
  useDocumentTitle("Login | Clutch Store");
  return (
    <div className="main min-75-vh width-100 display-flex justify-content-center align-items-center">
      <main>
        <section className="auth-wrapper display-flex flex-col justify-content-center gap-1">
          <div className="auth-title display-flex justify-content-between align-items-center">
            <span className="txt-semibold">Login</span>
          </div>
          <div className="auth-form">
            <form
              onSubmit={formik.handleSubmit}
              className="form display-flex flex-col justify-content-center gap-1">
              <label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="input-field input--md "
                />
              </label>
              {formik.errors.email && formik.touched.email && (
                <FormError>{formik.errors.email}</FormError>
              )}
              <label className="position-relative">
                <input
                  type={passwordVisibility ? "text" : "password"}
                  name="password"
                  className="input-field input--md "
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisibility((visible) => !visible)}
                  className="btn-password-visibility">
                  <i
                    className={`fa-solid ${
                      passwordVisibility ? `fa-eye-slash` : `fa-eye`
                    }`}></i>
                </button>
              </label>
              {formik.errors.password && formik.touched.password && (
                <FormError>{formik.errors.password}</FormError>
              )}

              <button type="submit" className="btn btn--md btn--primary">
                {loading ? <Loader height="1rem" width="1rem" /> : "Login"}
              </button>
              <button
                type="submit"
                onClick={setLoginValues}
                className="btn btn--md btn--primary-dark">
                Guest Login
              </button>
            </form>
          </div>

          <span className="auth-redirect txt-center">
            Don't have an account yet?{" "}
            <Link to="/signup" className="btn btn--link">
              Sign up
            </Link>
          </span>
        </section>
      </main>
    </div>
  );
};

export { LoginForm };
