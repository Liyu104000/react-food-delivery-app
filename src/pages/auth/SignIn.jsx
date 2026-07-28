import { SignInForm } from "./SignInForm";
import { AuthImage } from "./AuthImage";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./Auth.css";

export function SignIn({ setIsSignIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  const authUser = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    setErrorMsg("");

    try {
      if (!email.trim() || !password.trim()) {
        throw new Error("All fields must be provided!");
      } else if (!email.includes("@")) {
        throw new Error("Email must include @!");
      }

      const formattedEmail = email.trim().toLowerCase();

      const response = await axios.get(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/users?email=eq.${formattedEmail}&password=eq.${password}`,
        {
          headers: {
            apikey: supaBaseKey,
          },
        },
      );

      const usersFoundList = response.data;

      if (usersFoundList && usersFoundList.length > 0) {
        const foundUser = usersFoundList[0];

        const userData = {
          id: foundUser.id,
          firstName: foundUser.first_name,
          lastName: foundUser.last_name,
          email: foundUser.email,
          phoneNo: foundUser.phone_no,
          password: foundUser.password,
        };

        sessionStorage.setItem("activeUser", JSON.stringify(userData));
        sessionStorage.setItem("isUserSignedIn", "true");

        setIsSignIn(true);
        goToHome();
      } else {
        throw new Error("Incorrect Email or Password!");
      }
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

        <AuthImage />
      </main>
    </>
  );
}
