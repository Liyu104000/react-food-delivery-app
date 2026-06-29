import { RegisterForm } from "./RegisterForm";
import { AuthImage } from "./AuthImage";
import './Auth.css';

export function Register() {
  return (
    <>
      <title>Register | UrbanPlate</title>

      <main className="auth-container">
        <RegisterForm/>
        
        <AuthImage/>
      </main>
    </>
  )
}