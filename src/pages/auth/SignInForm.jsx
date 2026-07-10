import CompanyLogo from "../../assets/images/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router";

import "./Auth.css";
import "./SignInForm.css";

export function SignInForm({email, setEmail, password, setPassword, errorMsg, authUser}) {
 
  return (
    <section className="auth-card">
      <img src={CompanyLogo} alt="urbanplate-logo" className="company-logo" />

      <header>
        <h1 className="auth-heading">Access your account</h1>
        <h2 className="auth-sub-heading">Sign in to continue ordering</h2>
        {errorMsg && <span className="auth-error-msg">{errorMsg}</span>}
      </header>

      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          authUser();
        }}
        noValidate
      >
        <div className="auth-input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faEnvelope}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faKey}
            color="rgb(90,90,90)"
          />
        </div>

        <button type="submit" className="btn-auth btn-primary btn-signin">
          Sign In
        </button>
      </form>
      <footer className="auth-footer">
        <p className="auth-link-msg">New to UrbanPlate?</p>

        <Link to="/register" className="auth-link">
          Create an Account
        </Link>
      </footer>
    </section>
  );
}
