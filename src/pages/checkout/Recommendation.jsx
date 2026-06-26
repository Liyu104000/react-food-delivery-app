import Macaroni from "../../assets/images/macaroni.jpg";
import AppleJuice from "../../assets/images/apple_juice.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "../../shared/product/ProductShared.css";
import "./Recommendation.css";

export function Recommendation() {
  return (
    <section className="checkout-container" id="rec-card">
      <h1 id="rec-heading">Pair it With</h1>

      <hr />

      <section className="rec-product-grid">
        <article className="rec-product-card">
          <div className="checkout-flex">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img"
              id="rec-img"
            />

            <section>
              <p className="product-name" id="rec-product-name">Chicken Burger</p>

              <div className="add-product-flex">
                <p id="rec-product-price"> 16.50</p>

                <FontAwesomeIcon
                  className="checkout-icon"
                  id="rec-icon"
                  icon={faPlusCircle}
                  size="xl"
                  color="rgb(204, 85, 34)"
                />
              </div>
            </section>
          </div>
        </article>
        
        <article className="rec-product-card">
          <div className="checkout-flex">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img"
              id="rec-img"
            />

            <section>
              <p className="product-name" id="rec-product-name">Chicken Burger</p>

              <div className="add-product-flex">
                <p id="rec-product-price"> 16.50</p>

                <FontAwesomeIcon
                  className="checkout-icon"
                  id="rec-icon"
                  icon={faPlusCircle}
                  size="xl"
                  color="rgb(204, 85, 34)"
                />
              </div>
            </section>
          </div>
        </article>

        <article className="rec-product-card">
          <div className="checkout-flex">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img"
              id="rec-img"
            />

            <section>
              <p className="product-name" id="rec-product-name">Chicken Burger</p>

              <div className="add-product-flex">
                <p id="rec-product-price"> 16.50</p>

                <FontAwesomeIcon
                  className="checkout-icon"
                  id="rec-icon"
                  icon={faPlusCircle}
                  size="xl"
                  color="rgb(204, 85, 34)"
                />
              </div>
            </section>
          </div>
        </article>
      </section>
    </section>
  );
}
