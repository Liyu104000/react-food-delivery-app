import Macaroni from "../../assets/images/macaroni.jpg";
import "./ProductImage.css";

export function ProductImage() {
  return (
    <section className="product-img-container">
      <img src={Macaroni} alt="macaroni&cheese" />
    </section>
  );
}
