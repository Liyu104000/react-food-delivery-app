import CompanyLogo from "../../assets/images/CompanyLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate} from "react-router";
import "../../shared/auth/Auth.css";
import "./RegisterForm.css";

export function RegisterForm() {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin")
  }

  return (
    <section className="auth-card">
      <img src={CompanyLogo} alt="urbanplate-logo" className="company-logo" />

      <header>
        <h1 className="auth-heading">Create Your Account</h1>
        <h2 className="auth-sub-heading">Register now to order meals</h2>
      </header>

      <form className="auth-form">
        <div className="auth-input">
          <input type="text" placeholder="First Name" />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faIdCard}
            color="rgb(90,90,90)"
          />
        </div>

        <div className="auth-input">
          <input type="text" placeholder="Last Name" />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faIdCard}
            color="rgb(90,90,90)"
          />
        </div>

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

        <div className="auth-input">
          <input type="password" placeholder="Confirm Password" />

          <FontAwesomeIcon
            className="auth-icon"
            icon={faKey}
            color="rgb(90,90,90)"
          />
        </div>
      </form>

      <button className="auth-btn btn-primary" onClick={goToSignIn} id="register-btn">Register</button>

      <footer className="auth-footer">
        <p className="auth-link-msg">
          Already have an account?
        </p>

        <Link to="/signin" className="auth-link">
          Sign In
        </Link>
      </footer>
    </section>
  );
}
