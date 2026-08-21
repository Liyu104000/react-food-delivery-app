import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./DeliveryDetails.css";

export function DeliveryDetails({ deliveryDate, deliveryTime }) {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const selectedAddress = sessionStorage.getItem("selectedDeliveryAddress");

    if(selectedAddress){
      setAddress(selectedAddress);
    }else{
      setAddress("You do not have any saved addresses!")
    }
  }, []);

 
  return (
    <section className="card-base delivery-details-card">
      <h1 className="delivery-date">
        {deliveryDate === "Today"
          ? `Deliver ${deliveryDate}`
          : `Delivery On ${deliveryDate}`}
      </h1>

      <hr />

      <article className="checkout-body-layout">
        <FontAwesomeIcon
          className="checkout-icon"
          icon={faLocationDot}
          size="lg"
        />

        <div className="delivery-row">
          <h2 className="row-heading">Delivery Address</h2>
          <address className="row-body">
            {address}
          </address>
        </div>
      </article>

      <hr />

      <article className="checkout-body-layout">
        <FontAwesomeIcon className="checkout-icon" icon={faClock} size="lg" />

        <div className="delivery-row">
          <h2 className="row-heading">Delivery Time</h2>
          <time className="row-body">{deliveryTime}</time>
        </div>
      </article>
    </section>
  );
}
