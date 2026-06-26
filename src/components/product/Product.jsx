import { Header } from "../layout/header/Header";
import { ProductImage } from "../../pages/product/ProductImage";
import { ProductDetail } from "../../pages/product/ProductDetail";
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