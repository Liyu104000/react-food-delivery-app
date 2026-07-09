import CompanyLogo from "../../assets/images/CompanyLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faIdCard,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./Auth.css";
import "./RegisterForm.css";

export function RegisterForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const registerUser = async () => {
    setErrorMsg("");

    try {
      if (
        !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !phoneNo.trim() ||
        !password.trim()
      ) {
        throw new Error("All fields must be provided!");
      } else if (password !== confirmPassword) {
        throw new Error("Both Password fields must match!");
      } else if(!email.includes("@")){
        throw new Error("Email must include @!");
      }


      const checkEmailExist = await axios.get(
        "https://6a4b259cf5eab0bb6b6245aa.mockapi.io/users",
      );

      const users = checkEmailExist.data;

      const emailExist = users.some(
        (user) => user.email.toLowerCase() === email.toLowerCase(),
      );

      if (emailExist) {
        throw new Error("Email has already been taken!");
      }

      const response = await axios.post(
        "https://6a4b259cf5eab0bb6b6245aa.mockapi.io/users",
        {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phoneNo: phoneNo.trim(),
          password: password,
        },
      );

      if (response.status === 201) {
        goToSignIn();
      }
    } catch (error) {
      setErrorMsg(error.message);

      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }
  };

  const goToSignIn = () => {
    navigate("/signin");
  };

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
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
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
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
            maxLength={25}
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
