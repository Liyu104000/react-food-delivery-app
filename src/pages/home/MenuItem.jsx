import Macaroni from "../../assets/images/macaroni.jpg";
import AppleJuice from "../../assets/images/apple_juice.jpg";
import "../../components/shared/ProductShared.css"
import "./MenuItem.css";


export function MenuItem() {
  return (
    <section className="category-container">
      <h2 id="category-heading">Daily Promotion</h2>

      <section className="product-grid">
        <article className="product-card">
          <img src={Macaroni} alt="macaroni&cheese" className="product-img" />

          <section>
            <p className="product-name" id="menu-item">Spaghetti Bolognese</p>

            <div className="product-price-flex" id="menu-item-price">
              <p className="current-price">19.99</p>
              <p className="discount-price">11.99</p>
            </div>

            <div className="quantity-container">
              <select className="quantity-selec">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </section>

          <button className="product-btn btn-primary" id="add-cart-btn">Add To Cart</button>
        </article>

        <article className="product-card">
          <img
            src={AppleJuice}
            alt="macaroni&cheese"
            className="product-img"
          />

          <p className="product-name" id="menu-item">Apple Juice</p>

          <section className="product-price-flex" id="menu-item-price">
            <p className="current-price">12.50</p>
            <p className="discount-price">8.75</p>
          </section>

          <section className="quantity-container">
            <select className="quantity-selec">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </section>

          <button className="product-btn btn-primary" id="add-cart-btn">Add To Cart</button>
        </article>
      </section>
    </section>
  );
}
