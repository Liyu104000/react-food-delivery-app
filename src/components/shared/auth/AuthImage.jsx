import Macaroni from "../../../assets/images/macaroni.jpg"
import "./AuthImage.css"

export function AuthImage() {
  return (
    <section className="auth-img-container">
      <img src={Macaroni} alt="macaroni&cheese" />
    </section>
    
  );
}
