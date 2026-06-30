import Macaroni from "../../assets/images/macaroni.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./PaymentDetails.css";
export function PaymentDetails() {
  const navigate= useNavigate();

  const goToPayment = () => {
    navigate("/payment")
  };

  return (
    <section className="card-base payment-details-card">
      <header className="payment-details-header">
        <h1 className="payment-details-heading">Review Order</h1>
        <p className="checkout-total-quantity"> 1 Item</p>
      </header>

      <hr />

      <article className="checkout-body-layout payment-details-layout">
        <img
          src={Macaroni}
          alt="macaroni&cheese"
          width="50px"
          className="payment-details-img"
        />

        <section className="product-details-container">
          <div className="delete-product-row">
            <p className="product-name product-details-name"> Spaghetti Bolognese</p>

            <FontAwesomeIcon
              className="payment-details-icon"
              icon={faTrashAlt}
              size="sm"
              color="red"
            />
          </div>
          
          <div className="product-meta">
            <p className="product-quantity">1x</p>

            <div className="product-price-container">
              <p className="current-price">19.99</p>
              <p className="discount-price">11.99</p>
            </div>
          </div>
        </section>
      </article>

      <hr />

      <h2 className="payment-charges-heading">Payment Summary</h2>

      <section className="payment-charges">
        <p>Subtotal: RM 11.99</p>
        <p className="payment-discount">Discount: RM 8.00</p>
        <p>Delivery: RM 3.20</p>
        <p>Packaging Fee: RM 0.60</p>
      </section>

      <hr />

      <footer>
        <p className="payment-total">Total: RM 15.79</p>

        <button className="btn-payment btn-primary" onClick={goToPayment}>Continue To Payment</button>
      </footer>
    </section>
  );
}
