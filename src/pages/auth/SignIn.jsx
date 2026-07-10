import { SignInForm } from "./SignInForm";
import { AuthImage } from "./AuthImage";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import './Auth.css';

export function SignIn() {
   const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
 
  const authUser = async () => {
    setErrorMsg("");

    try {
      if(!email.trim() || !password.trim()){
        throw new Error("All fields must be provided!");
      }else if(!email.includes("@")){
        throw new Error("Email must include @!");
      }

      const response = await axios.get(
        "https://6a4b259cf5eab0bb6b6245aa.mockapi.io/users",
      );

      const users = response.data;

      const foundUser = users.find(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password,
      );

      if (!foundUser) {
        throw new Error("Incorrect Email or Password!");
      }
      goToHome();
    } catch (error) {
      setErrorMsg(error.message);

      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
   }
  };

  const goToHome = () => {
    navigate("/");
  };


  return (
    <>
      <title>Sign In | UrbanPlate</title>

      <main className="auth-container">
        <SignInForm
         email={email}
         setEmail={setEmail}
         password={password}
         setPassword={setPassword}
         errorMsg={errorMsg}
         authUser={authUser}
        />

        <AuthImage/>
      </main>
    </>
  )
}