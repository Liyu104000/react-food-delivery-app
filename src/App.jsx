import { Routes, Route } from "react-router";
import { Home } from "./pages/home/Home"
import {Product } from "./pages/product/Product"
import {Checkout } from "./pages/checkout/Checkout"
import {Payment } from "./pages/payment/Payment"
import { Profile } from "./pages/profile/Profile";
import {NewAddressForm} from "./pages/profile/NewAddressForm"
import {NewCardForm} from "./pages/profile/NewCardForm"
import { Order } from "./pages/order/Order";
import { SignIn } from "./pages/auth/SignIn"
import { Register } from "./pages/auth/Register"
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
          path="/profile/newaddress"
          element={<NewAddressForm/>}
        />

         <Route 
          path="/profile/newcard"
          element={<NewCardForm/>}
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
