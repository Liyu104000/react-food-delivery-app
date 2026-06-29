import { Header } from "../../components/layout/header/Header";
import { ProductImage } from "./ProductImage";
import { ProductDetail } from "./ProductDetail";
import "./Product.css"
export function Product() {
  return (
    <>
     <title>Spaghetti Bolognese | UrbanPlate</title>

     <header>
      <Header/>
     </header>
     

     <main className="product-container">
       <ProductImage/>

       <ProductDetail/>
     </main>
    </>
  )
}