import { NavBar } from "../../components/layout/nav/NavBar";
import { OrderHistory } from "./OrderHistory";
import { useCartQuantity } from "../../utils/cartQuantity";

export function Order() {
   const [cartQuantity, calculateQuantity] = useCartQuantity();

  return (
    <>
      <title>My Orders | UrbanPlate</title>

      <header>
        <NavBar
         cartQuantity={cartQuantity}
        />
      </header>

      <main>
        <OrderHistory
         calculateQuantity={calculateQuantity}
        />
      </main>
    </>
  );
}
