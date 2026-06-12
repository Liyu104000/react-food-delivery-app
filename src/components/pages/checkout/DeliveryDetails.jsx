import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import "./DeliveryDetails.css";

export function DeliveryDetails() {
  return (
    <section className="checkout-container" id="delivery-details-card">
      <h1 id="delivery-date">Delivery On Feb 9</h1>

      <hr />

      <article className="checkout-flex">
        <FontAwesomeIcon
          className="checkout-icon"
          icon={faLocationDot}
          size="lg"
        />

        <div className="delivery-row">
          <h2 className="row-heading">Delivery Address</h2>
          <address className="row-body">
            Bukit Jelutong, 40150 Shah Alam
          </address>
        </div>

        <button className="edit-btn">Edit</button>
      </article>

      <hr />

      <article className="checkout-flex">
        <FontAwesomeIcon className="checkout-icon" icon={faClock} size="lg" />

        <div className="delivery-row">
          <h2 className="row-heading">Delivery Time</h2>
          <time className="row-body">2:00PM - 2:30PM</time>
        </div>

        <button className="edit-btn">Edit</button>
      </article>
    </section>
  );
}
