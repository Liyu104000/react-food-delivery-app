import Macaroni from "../../assets/images/macaroni.jpg";
import AppleJuice from "../../assets/images/apple_juice.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "../../components/shared/ProductShared.css";
import "./Recommendation.css";

export function Recommendation() {
  return (
    <section className="card-base recommendation-card">
      <h1 className="recommendation-heading">Pair it With</h1>

      <hr />

      <section className="recommendation-product-layout">
        <article className="recommendation-product-card">
          <div className="checkout-body-layout">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img recommendation-img"
            />

            <section>
              <p className="product-name product-recommendation-name">Chicken Burger</p>

              <div className="add-product-row">
                <p className="recommendation-product-price"> 16.50</p>

                <FontAwesomeIcon
                  className="checkout-icon recommendation-icon"
                  icon={faPlusCircle}
                  size="xl"
                  color="rgb(204, 85, 34)"
                />
              </div>
            </section>
          </div>
        </article>

        <article className="recommendation-product-card">
          <div className="checkout-body-layout">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img recommendation-img"
            />

            <section>
              <p className="product-name product-recommendation-name">Chicken Burger</p>

              <div className="add-product-row">
                <p className="recommendation-product-price"> 16.50</p>

                <FontAwesomeIcon
                  className="checkout-icon recommendation-icon"
                  icon={faPlusCircle}
                  size="xl"
                  color="rgb(204, 85, 34)"
                />
              </div>
            </section>
          </div>
        </article>

        <article className="recommendation-product-card">
          <div className="checkout-body-layout">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img recommendation-img"
            />

            <section>
              <p className="product-name product-recommendation-name">Chicken Burger</p>

              <div className="add-product-row">
                <p className="recommendation-product-price"> 16.50</p>

                <FontAwesomeIcon
                  className="checkout-icon recommendation-icon"
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
