import Macaroni from "../../assets/images/macaroni.jpg";
import AppleJuice from "../../assets/images/apple_juice.jpg";
import "../../components/shared/ProductShared.css";
import "./ProductDetail.css";

export function ProductDetail() {
  return (
    <article className="product-detail-container">
      <header>
        <h1 className="delivery-time">
          Today . 2:00PM - 2:30PM
        </h1>
        <p className="product-name product-sel-name">Spaghetti Bolognese</p>
      </header>

      <section>
        <div className="product-price-container">
          <p className="current-price">19.99</p>
          <p className="discount-price">11.99</p>

          <div className="update-quantity-container">
            <select className="quantity-selec">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <button className="btn-primary btn-update-cart">
          Update Cart
        </button>
      </section>

      <section>
        <p className="product-desc">
          Classic Italian spaghetti served with a rich, slow-simmered beef
          Bolognese sauce crafted from ripe tomatoes, aromatic herbs, and savory
          spices. Each strand of pasta is perfectly coated in the hearty sauce,
          delivering a deep, comforting flavor in every bite. Finished with a
          drizzle of olive oil and a sprinkle of parmesan, this satisfying dish
          offers a warm, indulgent experience that’s perfect for any time of
          day.
        </p>
      </section>
    </article>
  );
}
