import { RegisterForm } from "./RegisterForm";
import { AuthImage } from "./AuthImage";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Auth.css";

export function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

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
        throw new Error("Password Confirmation does not match");
      } else if (!email.includes("@")) {
        throw new Error("Email must include @!");
      }

      const registerUserData = {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone_no: phoneNo.trim(),
        password: password,
      };

      await axios.post(
        "https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/users",
        registerUserData,
        {
          headers: {
            apikey: supaBaseKey,
            "Content-Type": "application/json",
          },
        },
      );
      goToSignIn();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMsg("An Account With This Email Address Already Exist!");
      } else {
        setErrorMsg(error.message);
      }

      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }
  };

  const goToSignIn = () => {
    navigate("/signin");
  };

  const registerValues = {
    firstName,
    lastName,
    email,
    phoneNo,
    password,
    confirmPassword,
  };

  const registerSetters = {
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNo,
    setPassword,
    setConfirmPassword,
  };
  return (
    <>
      <title>Register | UrbanPlate</title>

      <main className="auth-container">
        <RegisterForm
          registerValues={registerValues}
          registerSetters={registerSetters}
          errorMsg={errorMsg}
          registerUser={registerUser}
        />

        <AuthImage />
      </main>
    </>
  );
}
