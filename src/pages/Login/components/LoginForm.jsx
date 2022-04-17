import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="main min-75-vh width-100 display-flex justify-content-center align-items-center">
      <main>
        <section className="auth-wrapper display-flex flex-col justify-content-center gap-1">
          <div className="auth-title display-flex justify-content-between align-items-center">
            <span className="txt-semibold">Login</span>
            <button type="button" className="">
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="auth-form">
            <form className="form display-flex flex-col justify-content-center gap-1">
              <input
                type="text"
                className="input-field input--md "
                placeholder="Username"
              />
              <input
                type="password"
                className="input-field input--md "
                placeholder="Password"
              />
              <div className="auth-checkbox display-flex justify-content-between align-items-center">
                <label className="display-flex align-items-center">
                  <input type="checkbox" className="mr-5" />
                  Remember me
                </label>{" "}
                <Link to="/login" className="txt-sm">
                  Forgot Password?
                </Link>{" "}
              </div>
              <button type="submit" className="btn btn--md btn--primary">
                Login
              </button>
            </form>
          </div>
          <span className="txt-center txt-medium">or login with </span>
          <button
            type="button"
            className="btn btn--md auth-social btn--outline">
            <i className="fab fa-google" /> Google
          </button>
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
