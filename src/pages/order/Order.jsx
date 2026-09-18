import { NavBar } from "../../components/layout/nav/NavBar";
import { OrderHistory } from "./OrderHistory";
import { useCartQuantity } from "../../utils/cartQuantity";
import { useNavigate } from "react-router";
import { useEffect} from "react";

export function Order() {
  const [cartQuantity, calculateQuantity] = useCartQuantity();
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
      <title>My Orders | UrbanPlate</title>

      <header>
        <NavBar cartQuantity={cartQuantity} />
      </header>

      <main>
        <OrderHistory calculateQuantity={calculateQuantity} />
      </main>
    </>
  );
}
