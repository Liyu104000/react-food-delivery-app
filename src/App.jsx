import { Routes, Route, useLocation } from "react-router";
import { NavBar } from "./components/layout/nav/Navbar";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { Checkout } from "./pages/checkout/Checkout";
import { Profile } from "./pages/profile/Profile";
import { Order } from "./pages/order/Order";
import { SignIn } from "./pages/auth/SignIn";
import { Register } from "./pages/auth/Register";
import { useState } from "react";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const location = useLocation();

  const showNavBar =
    location.pathname === "/" ||
    location.pathname === "/myorders" ||
    location.pathname === "/profile";

  const currentMinutesBaseline = dayjs().minute();

  const initialStart = dayjs()
    .minute(currentMinutesBaseline < 30 ? 0 : 30)
    .second(0);

  const initialTimeSlotLabel = `${initialStart.format("h:mmA")} - ${initialStart.add(30, "minute").format("h:mmA")}`;

  const [isSignIn, setIsSignIn] = useState(false);

  const [deliveryDate, setDeliveryDate] = useState("Today");
  const [deliveryTime, setDeliveryTime] = useState(initialTimeSlotLabel);

  return (
    <>
      {showNavBar && <NavBar isSignIn={isSignIn} setIsSignIn={setIsSignIn} />}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              deliveryDate={deliveryDate}
              setDeliveryDate={setDeliveryDate}
              deliveryTime={deliveryTime}
              setDeliveryTime={setDeliveryTime}
              initialTimeSlotLabel={initialTimeSlotLabel}
            />
          }
        />

        <Route path="/product/:id" element={<Product />} />

        <Route
          path="/checkout"
          element={
            <Checkout deliveryDate={deliveryDate} deliveryTime={deliveryTime} />
          }
        />

        <Route
          path="/profile"
          element={<Profile setIsSignIn={setIsSignIn} />}
        />

        <Route path="/myorders" element={<Order />} />

        <Route path="/signin" element={<SignIn setIsSignIn={setIsSignIn} />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
