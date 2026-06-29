import { SignInForm } from "./SignInForm";
import { AuthImage } from "./AuthImage";
import './Auth.css';


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