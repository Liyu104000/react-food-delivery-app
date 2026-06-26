import { RegisterForm } from "../../pages/auth/RegisterForm";
import { AuthImage } from "../../shared/auth/AuthImage";
import '../../shared/auth/Auth.css';

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