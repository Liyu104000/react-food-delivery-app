import CompanyLogo from "../../assets/images/CompanyLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faIdCard,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router";
import "./Auth.css";
import "./RegisterForm.css";

export function RegisterForm({
  registerValues, registerSetters, errorMsg, registerUser
}) {
  return (
    <section className="auth-card">
      <img src={CompanyLogo} alt="urbanplate-logo" className="company-logo" />

      <header>
        <h1 className="auth-heading">Create Your Account</h1>
        <h2 className="auth-sub-heading">Register now to order meals</h2>
        {errorMsg && <span className="auth-error-msg">{errorMsg}</span>}
      </header>

      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
        noValidate
      >
        <div className="auth-input">
          <input
            type="text"
            placeholder="First Name"
            value={registerValues.firstName}
            onChange={(e) => {
              registerSetters.setFirstName(e.target.value);
            }}
            required
            maxLength={25}
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faIdCard}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input
            type="text"
            placeholder="Last Name"
            value={registerValues.lastName}
            onChange={(e) => {
              registerSetters.setLastName(e.target.value);
            }}
            required
            maxLength={35}
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faIdCard}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input
            type="email"
            placeholder="Email"
            value={registerValues.email}
            onChange={(e) => {
              registerSetters.setEmail(e.target.value);
            }}
            required
            maxLength={35}
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faEnvelope}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input
            type="tel"
            placeholder="Phone No"
            value={registerValues.phoneNo}
            onChange={(e) => {
              registerSetters.setPhoneNo(e.target.value);
            }}
            required
            maxLength={15}
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faContactBook}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input
            type="password"
            placeholder="Password"
            value={registerValues.password}
            onChange={(e) => {
              registerSetters.setPassword(e.target.value);
            }}
            required
            maxLength={20}
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faKey}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input
            type="password"
            placeholder="Confirm Password"
            value={registerValues.confirmPassword}
            onChange={(e) => {
              registerSetters.setConfirmPassword(e.target.value);
            }}
            required
            maxLength={20}
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faKey}
            color="rgb(90,90,90)"
          />
        </div>

        <button
          type="submit"
          className="btn-auth btn-primary btn-register"
        >
          Register
        </button>
      </form>

      <footer className="auth-footer">
        <p className="auth-link-msg">Already have an account?</p>

        <Link to="/signin" className="auth-link">
          Sign In
        </Link>
      </footer>
    </section>
  );
}
