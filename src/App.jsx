import { Routes, Route } from "react-router";
import { Home } from "./components/home/Home"
import {Product } from "./components/product/Product"
import {Checkout } from "./components/checkout/Checkout"
import {Payment } from "./components/payment/Payment"
import { Profile } from "./components/profile/Profile";
import { Order } from "./components/order/Order";
import { SignIn } from "./components/auth/SignIn"
import { Register } from "./components/auth/Register"
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
          path="/product"
          element={<Product/>}
        />

        <Route 
          path="/payment"
          element={<Payment/>}
        />

        <Route 
          path="/checkout"
          element={<Checkout/>}
        />

        <Route 
          path="/payment"
          element={<Payment/>}
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
      </Routes>
    </>
  )
}

export default App
