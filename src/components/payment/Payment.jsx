import { Header } from "../layout/header/Header";
import { PaymentForm } from "../../pages/payment/PaymentForm";

export function Payment() {
  return (
    <>
      <title>Payment | UrbanPlate</title>

      <header>
        <Header />
      </header>

      <main>
        <PaymentForm />
      </main>
    </>
  );
}
