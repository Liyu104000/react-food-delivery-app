import Macaroni from "../../assets/images/macaroni.jpg";
import "./ProductImage.css";

export function ProductImage({imageUrl, placeholder}) {
  return (
    <section className="product-img-container">
      <img src={imageUrl} alt={placeholder} />
    </section>
  );
}
