import { Routes, Route } from "react-router";
import { Home } from "./components/pages/home/Home"
import { Profile } from "./components/pages/profile/Profile";
import { Order } from "./components/pages/order/Order";
import { SignIn } from "./components/pages/signin/SignIn"
import { Register } from "./components/pages/register/Register"
import {Checkout } from "./components/pages/checkout/Checkout"
import {Payment } from "./components/pages/payment/Payment"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<Home/>}
        />

        <Route 
          path="/profile"
          element={<Profile/>}
        />

         <Route 
          path="/myorders"
          element={<Order/>}
        />

        <Route 
          path="/signin"
          element={<SignIn/>}
        />

        <Route 
          path="/register"
          element={<Register/>}
        />

        <Route 
          path="/checkout"
          element={<Checkout/>}
        />

        <Route 
          path="/payment"
          element={<Payment/>}
        />
      </Routes>
    </>
  )
}

export default App
