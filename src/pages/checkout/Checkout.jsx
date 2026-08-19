import { Header } from "../../components/layout/header/Header";
import { DeliveryDetails } from "./DeliveryDetails";
import { Recommendation } from "./Recommendation";
import { PaymentDetails } from "./PaymentDetails";
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
          <Recommendat />
        </section>

        <section className="right-column">
           <PaymentSummary />
        </section>
      </main>
    </>
  );
}
