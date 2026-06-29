import Macaroni from "../../assets/images/macaroni.jpg";
import AppleJuice from "../../assets/images/apple_juice.jpg";
import "../../components/shared/ProductShared.css"
import "./MenuItem.css";


export function MenuItem() {
  return (
    <section className="category-container">
      <h2 className="category-heading">Daily Promotion</h2>

      <section className="product-grid">
        <article className="product-card">
          <img src={Macaroni} alt="macaroni&cheese" className="product-img" />

          <section>
            <p className="product-name menu-item-name" >Spaghetti Bolognese</p>

            <div className="product-price-container menu-item-price">
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

          <button className="product-btn btn-primary add-cart-btn">Add To Cart</button>
        </article>

        <article className="product-card">
          <img src={Macaroni} alt="macaroni&cheese" className="product-img" />

          <section>
            <p className="product-name menu-item-name" >Spaghetti Bolognese</p>

            <div className="product-price-container menu-item-price">
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

          <button className="product-btn btn-primary add-cart-btn">Add To Cart</button>
        </article>
      </section>
    </section>
  );
}
