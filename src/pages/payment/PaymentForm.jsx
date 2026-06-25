import CompanyLogo from "../../../assets/images/companylogo.png";
import CreditLogo from "../../../assets/images/mastercard.png";
import MoneyLogo from "../../../assets/images/money.png";
import { useNavigate } from "react-router-dom";
import "./PaymentForm.css";

export function PaymentForm() {
  const navigate= useNavigate();

  return (
    <section className="payment-form-container">
      <header className="payment-header">
        <h1 id="payment-heading">Select Payment Method</h1>
        <h2 id="payment-sub-heading">Choose how you'd like to pay</h2>
      </header>

      <form>
        <fieldset className="payment-option">
          <input type="radio"/>

          <img
            src={CreditLogo}
            alt="creditlogo"
            className="payment-option-logo"
          />

          <div>
            <p className="payment-name">Mastercard</p>
            <p className="payment-desc">09109020</p>
          </div>
        </fieldset>

        <fieldset className="payment-option">
          <input type="radio"/>

          <img
            src={MoneyLogo}
            alt="creditlogo"
            className="payment-option-logo"
          />

          <div className="payment-info">
            <p className="payment-name">Cash On Delivery</p>
            <p className="payment-desc">Pay Directly To the Driver</p>
          </div>
        </fieldset>
      </form>

      <button className="order-btn btn-primary" onClick={() => navigate("/myorders")}>Place Order</button>
    </section>
  );
}
