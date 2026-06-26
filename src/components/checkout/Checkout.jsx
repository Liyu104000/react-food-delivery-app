import { Header } from "./layout/header/Header.jsx";
import { DeliveryDetails } from "../../pages/checkout/DeliveryDetails";
import { Recommendation } from "../../pages/checkout/Recommendation";
import { PaymentDetails } from "../../pages/checkout/PaymentDetails";
import "./Checkout.css";

export function Checkout() {
  return (
    <>
      <title>Checkout | UrbanPlate</title>

      <header>
        <Header/>
      </header>
     
      <main className="checkout-layout">
        <section className="left-column">
          <DeliveryDetails />
          <Recommendation />
        </section>

        <section className="right-column">
           <PaymentDetails />
        </section>
      </main>
    </>
  );
}
