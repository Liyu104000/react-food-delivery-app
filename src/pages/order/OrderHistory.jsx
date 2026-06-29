import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck,faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Macaroni from "../../assets/images/macaroni.jpg";
import "./OrderHistory.css";

export function OrderHistory() {
  return (
    <section className="order-container">
      <article className="order-card">
        <header className="order-card-header-flex">
          <section
            className="order-status-container"
            style={{ backgroundColor: "rgb(108, 117, 125)" }}
          >
            <FontAwesomeIcon icon={faCircleCheck} size="xs" color="white" />
            <p className="order-status">Received</p>
          </section>

          <section>
            <p className="order-status-msg">Received on Feb 10 at 4:00PM</p>
          </section>

          <section className="order-id-container">
            <p className="order-id">Order ID: 27cbkdsmdn</p>
          </section>
        </header>

        <section className="delivery-address-container">
          <FontAwesomeIcon icon={faLocationDot} size="sm" color="black" />

          <address className="delivery-address">
            Bukit Jelutong, 40150 Shah Alam
          </address>
        </section>

        <section className="order-items">
          <div className="order-items-container">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img order-items-img"
            />

            <div className="product-details-row">
              <div className="product-details-column">
                <p className="product-name product-order-name">
                  Spaghetti Bolognese
                </p>
                <p className="product-quantity product-order-quantity">1x</p>
              </div>

              <p className="product-price product-order-price">11.99</p>
            </div>
          </div>
        </section>

        <section className="order-items">
          <div className="order-items-container">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img order-items-img"
            />

            <div className="product-details-row">
              <div className="product-details-column">
                <p className="product-name product-order-name">
                  Spaghetti Bolognese
                </p>
                <p className="product-quantity product-order-quantity">1x</p>
              </div>

              <p className="product-price product-order-price">11.99</p>
            </div>
          </div>
        </section>
        <hr />

        <footer className="order-card-footer">
          <p className="order-total">Total: RM 15.79</p>

          <button className="order-again-btn">Order Again</button>
        </footer>
      </article>

      <article className="order-card">
        <header className="order-card-header-flex">
          <section className="order-status-container">
            <FontAwesomeIcon icon={faCircleCheck} size="xs" color="white" />
            <p className="order-status">Delivered</p>
          </section>

          <section>
            <p className="order-status-msg">Delivered on Feb 9 at 2:15PM</p>
          </section>

          <section className="order-id-container">
            <p className="order-id">Order ID: 27cbkdsmdn</p>
          </section>
        </header>

        <section className="delivery-address-container">
          <FontAwesomeIcon icon={faLocationDot} size="sm" color="black" />

          <address className="delivery-address">
            Bukit Jelutong, 40150 Shah Alam
          </address>
        </section>

        <section className="order-items">
          <div className="order-items-container">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img order-items-img"
            />

            <div className="product-details-row">
              <div className="product-details-column">
                <p className="product-name product-order-name">
                  Spaghetti Bolognese
                </p>
                <p className="product-quantity product-order-quantity">1x</p>
              </div>

              <p className="product-price product-order-price">11.99</p>
            </div>
          </div>
        </section>

        <section className="order-items">
          <div className="order-items-container">
            <img
              src={Macaroni}
              alt="macaroni&cheese"
              className="product-img order-items-img"
            />

            <div className="product-details-row">
              <div className="product-details-column">
                <p className="product-name product-order-name">
                  Spaghetti Bolognese
                </p>
                <p className="product-quantity product-order-quantity">1x</p>
              </div>

              <p className="product-price product-order-price">11.99</p>
            </div>
          </div>
        </section>
        <hr />

        <footer className="order-card-footer">
          <p className="order-total">Total: RM 15.79</p>

          <button className="order-again-btn">Order Again</button>
        </footer>
      </article>
    </section>
  );
}
