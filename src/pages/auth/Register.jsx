import { RegisterForm } from "./RegisterForm";
import { AuthImage } from "./AuthImage";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import './Auth.css';

export function Register() {
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

 const registerValues = {firstName,lastName,email,phoneNo,password,confirmPassword}

 const registerSetters = {setFirstName, setLastName, setEmail, setPhoneNo, setPassword, setConfirmPassword}
  return (
    <>
      <title>Register | UrbanPlate</title>

      <main className="auth-container">
        <RegisterForm 
         registerValues= {registerValues}
         registerSetters= {registerSetters}
         errorMsg={errorMsg}
         registerUser= {registerUser}
        />
        
        <AuthImage/>
      </main>
    </>
  )
}