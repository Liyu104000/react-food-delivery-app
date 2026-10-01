import { Header } from "../../components/layout/header/Header";
import { DeliveryDetails } from "./DeliveryDetails";
import { PaymentMethods } from "./PaymentMethods";
import { PaymentSummary } from "./PaymentSummary";
import "./Checkout.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCartQuantity } from "../../utils/cartQuantity";

export function Checkout({ deliveryDate, deliveryTime, onEditTime }) {
  const [cartQuantity, , calculateQuantity] = useCartQuantity();
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isUserSignedIn = sessionStorage.getItem("isUserSignedIn") === "true";

    if (!isUserSignedIn) {
      navigate("/signin");
      return;
    }
  }, []);
  return (
    <>
      <title>Checkout | UrbanPlate</title>

      <header>
        <Header />
      </header>

      <main className="checkout-layout">
        <section className="left-column">
          <DeliveryDetails
            deliveryDate={deliveryDate}
            deliveryTime={deliveryTime}
            onEditTime={onEditTime}
            address={address}
            setAddress={setAddress}
          />
          <PaymentMethods />
        </section>

        <section className="right-column">
          <PaymentSummary
            cartQuantity={cartQuantity}
            calculateQuantity={calculateQuantity}
            address={address}
          />
        </section>
      </main>
    </>
  );
}
