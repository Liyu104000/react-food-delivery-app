import { NavBar } from "../../components/layout/nav/NavBar";
import { OrderHistory } from "./OrderHistory";

export function Order() {
  return (
    <>
      <title>My Orders | UrbanPlate</title>

      <header>
        <NavBar/>
      </header>

      <main>
        <OrderHistory/>
      </main>
    </>
  );
}
