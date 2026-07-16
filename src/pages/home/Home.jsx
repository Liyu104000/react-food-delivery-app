import { NavBar } from "../../components/layout/nav/Navbar";
import { Sidebar } from "./Sidebar";
import { DeliveryInfo } from "./DeliveryInfo";
import { MenuItem } from "./MenuItem";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const productCategoriesList = [
  {id: "daily-promotion", name: "Daily Promotion"},
  {id: "coffee-and-tea", name: "Coffee & Tea"},
  {id: "fruit-juice", name: "Fruit Juice"},
  {id: "sides", name: "Sides"},
  {id: "pasta", name: "Pasta"},
  {id: "main-course", name: "Main Course"},
];

export function Home() {
  const [products,setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("daily-promotion");

  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await axios.get("https://6a4b259cf5eab0bb6b6245aa.mockapi.io/products")

        setProducts(response.data);
      }catch(error){
       console.error("Error loading products:", error.message);
      };
    }

    getProducts();
  },[])

  const filteredProducts = products.filter(product => {
    if(selectedCategory === "daily-promotion"){
      return product.discountPriceCents !== undefined;
    }

    return product.category === selectedCategory;
  });

  const currentCategorySelected = productCategoriesList.find(cat => cat.id === selectedCategory)

  const categoryHeading = currentCategorySelected ? currentCategorySelected.name : "Our Menu"

  return (
    <>
      <title>Home | UrbanPlate</title>

      <header>
        <NavBar />
      </header>

      <main>
        <section>
          <h1 className="home-heading">Great Food, Delivered by UrbanPlate</h1>

          <DeliveryInfo />
        </section>

        <section className="home-content">
          <Sidebar 
            categoriesList={productCategoriesList}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
      
          <MenuItem 
            categoryHeading={categoryHeading}
            products={filteredProducts}
          />
        </section>
      </main>
    </>
  );
}
