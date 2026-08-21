import CompanyLogo from "../../assets/images/companylogo.png";
import CreditLogo from "../../assets/images/mastercard.png";
import MoneyLogo from "../../assets/images/money.png";
import "./PaymentMethods.css";

export function PaymentMethods() {
  return (
    <section className="card-base payment-method-card">
      <h1 className="payment-method-heading">Select Payment Method</h1>

      <hr />

      <article className="payment-option">
        <input type="radio" />

        <img
          src={CreditLogo}
          alt="creditlogo"
          className="payment-option-logo"
        />

        <div className="payment-info">
          <p className="payment-option-type">Mastercard</p>
          <p className="payment-option-no">09109020</p>
        </div>
      </article>

      <article className="payment-option">
        <input type="radio" />

        <img src={MoneyLogo} alt="creditlogo" className="payment-option-logo" />

        <div className="payment-info">
          <p className="payment-option-type">Cash On Delivery</p>
          <p className="payment-option-no">Pay Directly To the Driver</p>
        </div>
      </article>
    </section>
  );
}
