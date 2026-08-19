import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { useCartQuantity } from "../../utils/cartQuantity";
import { NavBar } from "../../components/layout/nav/Navbar";
import { ProductImage } from "./ProductImage";
import { ProductDetail } from "./ProductDetail";
import "./Product.css";
export function Product() {
  const [indivProduct, setIndivProduct] = useState(null);
  const [cartQuantity, setCartQuantity] = useCartQuantity();


  const { id } = useParams();

  const navigate = useNavigate();

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    const isUserSignedIn = sessionStorage.getItem("isUserSignedIn") === "true";

    if (!isUserSignedIn) {
      navigate("/signin");
      return;
    }

    const getIndivProduct = async () => {
      try {
        const response = await axios.get(
          `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/products?id=eq.${id}`,
          {
            headers: {
              apikey: supaBaseKey,
            },
          },
        );

        const indivProductData = response.data.map((indivProduct) => ({
          id: indivProduct.id,
          name: indivProduct.name,
          description: indivProduct.description,
          priceCents: indivProduct.price,
          discountPriceCents: indivProduct.discount_price || undefined,
          image: indivProduct.image_url,
        }));

        if (indivProductData.length > 0) {
          setIndivProduct(indivProductData[0]);
        }
      } catch (error) {
        console.error("Error loading products:", error.message);
      }
    };

    getIndivProduct();
  }, [id]);

  if (!indivProduct) {
    return null;
  }

  return (
    <>
      <title>{`${indivProduct?.name || "Welcome To"}| UrbanPlate`}</title>

      <header>
        <NavBar cartQuantity={cartQuantity} />
      </header>

      <main className="product-container">
        <ProductImage
          imageUrl={indivProduct?.image}
          placeholder={indivProduct?.name}
        />

        <ProductDetail 
         product={indivProduct} 
         setCartQuantity={setCartQuantity}/>
      </main>
    </>
  );
}
