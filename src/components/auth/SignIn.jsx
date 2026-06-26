import { SignInForm } from "../../pages/auth/SignInForm";
import { AuthImage } from "../../shared/auth/AuthImage";
import '../../shared/auth/Auth.css';


export function SignIn() {
  return (
    <>
      <title>Sign In | UrbanPlate</title>

      <main className="auth-container">
        <SignInForm/>

        <AuthImage/>
      </main>
    </>
  )
}