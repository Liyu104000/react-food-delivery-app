import Macaroni from "../../../assets/images/macaroni.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./PaymentDetails.css";
export function PaymentDetails() {
  const navigate= useNavigate();

  return (
    <section className="checkout-container" id="payment-details-card">
      <header className="payment-details-header">
        <h1 id="payment-details-heading">Review Order</h1>
        <p id="checkout-total-quantity"> 1 Item</p>
      </header>

      <hr />

      <article className="checkout-flex" id="payment-details-flex">
        <img
          src={Macaroni}
          alt="macaroni&cheese"
          width="50px"
          id="payment-details-img"
        />

        <section className="product-details-container">
          <div className="delete-product-flex">
            <p className="product-name" id="checkout-product-name"> Spaghetti Bolognese</p>

            <FontAwesomeIcon
              id="payment-details-icon"
              icon={faTrashAlt}
              size="sm"
              color="red"
            />
          </div>
          
          <div className="product-meta-flex">
            <p id="product-quantity">1x</p>

            <div className="product-price-flex">
              <p className="current-price">19.99</p>
              <p className="discount-price">11.99</p>
            </div>
          </div>
        </section>
      </article>

      <hr />

      <h2 id="payment-charges-heading">Payment Summary</h2>

      <section className="payment-charges-grid">
        <p>Subtotal: RM 11.99</p>
        <p id="payment-discount">Discount: RM 8.00</p>
        <p>Delivery: RM 3.20</p>
        <p>Packaging Fee: RM 0.60</p>
      </section>

      <hr />

      <footer>
        <p id="payment-total">Total: RM 15.79</p>

        <button className="payment-btn btn-primary" onClick={() => navigate("/payment")}>Continue To Payment</button>
      </footer>
    </section>
  );
}
