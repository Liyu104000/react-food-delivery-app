import { NavBar } from "./layout/nav/Navbar";
import { OrderHistory } from "../../pages/order/OrderHistory";


export function Order() {
  return (
    <>
      <title>My Orders | UrbanPlate</title>

      <header>
        <NavBar />
      </header>

      <main>
        <OrderHistory/>
      </main>
    </>
  );
}
