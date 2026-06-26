import { Routes, Route } from "react-router";
import { Home } from "./components/home/Home"
import { Profile } from "./components/profile/Profile";
import { Order } from "./components/order/Order";
import { SignIn } from "./components/auth/SignIn"
import { Register } from "./components/auth/Register"
import {Checkout } from "./components/auth/Checkout"
import {Payment } from "./components/auth/Payment"
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
