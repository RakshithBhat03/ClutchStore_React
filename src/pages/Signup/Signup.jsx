import React from "react";
import { Link } from "react-router-dom";
import "../Login/components/LoginForm.css";
import style from "./Signup.module.css";

const Signup = () => {
  return (
    <div>
      <div className="main min-75-vh width-100 display-flex justify-content-center align-items-center">
        <main>
          <section
            className={`${style.auth_wrapper} auth-wrapper display-flex flex-col justify-content-center gap-1`}>
            <div className="auth-title display-flex justify-content-between align-items-center">
              <span className="txt-semibold">Sign up</span>
              <button type="button" className="">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="auth-form">
              <form className="form display-flex flex-col justify-content-center gap-1">
                <div className={`${style.form_name} display-flex gap-1`}>
                  <input
                    type="text"
                    className="input-field input--md "
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="input-field input--md "
                    placeholder="Last Name"
                  />
                </div>
                <input
                  type="email"
                  className="input-field input--md "
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="input-field input--md "
                  placeholder="Username"
                />
                <div className={`${style.form_password} display-flex gap-1`}>
                  <div
                    className={`${style.password_icon_wrapper} position-relative`}>
                    <input
                      type="password"
                      className="input-field input--md pr-16"
                      placeholder="Password"
                    />
                    <button
                      className={`btn ${style.password_icon} txt-reg position-absolute`}>
                      <i className="fas fa-eye-slash" />
                    </button>
                  </div>
                  <div
                    className={`${style.password_icon_wrapper} position-relative`}>
                    <input
                      type="password"
                      className="input-field input--md pr-16"
                      placeholder="Confirm Password"
                    />
                    <button
                      className={`btn ${style.password_icon} txt-reg position-absolute`}>
                      <i className="fas fa-eye-slash" />
                    </button>
                  </div>
                </div>
                <div className="auth-checkbox">
                  <input type="checkbox" className="mr-5" />
                  Agree to terms and conditions{" "}
                </div>
                <button type="submit" className="btn btn--md btn--primary">
                  Sign up
                </button>
              </form>
            </div>
            <span className="txt-center txt-medium">or sign up with </span>
            <button
              type="button"
              className="btn btn--md auth-social btn--outline">
              <i className="fab fa-google" /> Google
            </button>
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
