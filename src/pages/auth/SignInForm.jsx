import CompanyLogo from "../../assets/images/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import "../../shared/auth/Auth.css";
import "./SignInForm.css";

export function SignInForm() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/")
  }


  return (
    <section className="auth-card">
      <img src={CompanyLogo} alt="urbanplate-logo" className="company-logo" />

      <header>
        <h1 className="auth-heading">Welcome Back, Liyu!</h1>
        <h2 className="auth-sub-heading">Sign in to continue ordering</h2>
      </header>

      <form className="auth-form">
        <div className="auth-input">
          <input type="email" placeholder="Email" />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faEnvelope}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input type="password" placeholder="Password" />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faKey}
            color="rgb(90,90,90)"
          />
        </div>
      </form>

      <button className="auth-btn btn-primary" id="sign-in-btn" onClick={goToHome}>
        Sign In
      </button>

      <footer className="auth-footer">
        <p className="auth-link-msg">
          New to UrbanPlate?
        </p>

        <Link to="/register" className="auth-link">
          Create an Account
        </Link>
      </footer>
    </section>
  );
}
