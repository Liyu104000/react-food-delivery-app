import Macaroni from "../../assets/images/macaroni.jpg"
import "./AuthImage.css"

export function AuthImage() {
  return (
    <section>
      <img src={Macaroni} alt="macaroni&cheese" className="auth-img" />
    </section>
    
  );
}
