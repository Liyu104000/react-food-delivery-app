import { Header } from "../../components/layout/header/Header";
import { PaymentForm } from "./PaymentForm";

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
