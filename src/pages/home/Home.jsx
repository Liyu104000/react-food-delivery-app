import { NavBar } from "../../components/layout/nav/Navbar";
import { Sidebar } from "./Sidebar";
import { DeliveryInfo } from "./DeliveryInfo";
import { MenuItem } from "./MenuItem";
import { useCartQuantity } from "../../utils/cartQuantity";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const productCategoriesList = [
  { id: "daily-promotion", name: "Daily Promotion" },
  { id: "coffee-and-tea", name: "Coffee & Tea" },
  { id: "fruit-juice", name: "Fruit Juice" },
  { id: "sides", name: "Sides" },
  { id: "pasta", name: "Pasta" },
  { id: "main-course", name: "Main Course" },
];

export function Home({
  deliveryDate,
  setDeliveryDate,
  deliveryTime,
  setDeliveryTime,
  initialTimeSlotLabel,
}) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("daily-promotion");
  const [cartQuantity, setCartQuantity] = useCartQuantity();

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/products",
          {
            headers: {
              apikey: supaBaseKey,
            },
          },
        );

        const productFoundList = response.data;

        if (productFoundList.length > 0) {
          const productsData = productFoundList.map((indivProduct) => ({
            id: indivProduct.id,
            name: indivProduct.name,
            description: indivProduct.description,
            priceCents: indivProduct.price,
            discountPriceCents: indivProduct.discount_price || undefined,
            category: indivProduct.category,
            image: indivProduct.image_url,
          }));

          setProducts(productsData);
        } else {
          throw new Error("Failed To Load Products");
        }
      } catch (error) {
        console.error("Could Not Load Products", error.message);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "daily-promotion") {
      return product.discountPriceCents !== undefined;
    }

    return product.category === selectedCategory;
  });

  const currentCategorySelected = productCategoriesList.find(
    (cat) => cat.id === selectedCategory,
  );

  const categoryHeading = currentCategorySelected
    ? currentCategorySelected.name
    : "Our Menu";

  return (
    <>
      <title>Home | UrbanPlate</title>

      <header>
        <NavBar cartQuantity={cartQuantity} />
      </header>

      <main>
        <section>
          <h1 className="home-heading">Great Food, Delivered by UrbanPlate</h1>

          <DeliveryInfo
            deliveryDate={deliveryDate}
            setDeliveryDate={setDeliveryDate}
            deliveryTime={deliveryTime}
            setDeliveryTime={setDeliveryTime}
            initialTimeSlotLabel={initialTimeSlotLabel}
          />
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
            setCartQuantity={setCartQuantity}
          />
        </section>
      </main>
    </>
  );
}
