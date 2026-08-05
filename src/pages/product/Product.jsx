import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Header } from "../../components/layout/header/Header";
import { ProductImage } from "./ProductImage";
import { ProductDetail } from "./ProductDetail";
import "./Product.css";
export function Product() {
  const [indivProduct, setIndivProduct] = useState(null);

  const { id } = useParams();

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
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
          name: indivProduct.name,
          description: indivProduct.description,
          priceCents: indivProduct.price,
          discountPriceCents: indivProduct.discount_price || undefined ,
          image: indivProduct.image_url,
        }));


        setIndivProduct(indivProductData);
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
        <Header />
      </header>

      <main className="product-container">
        <ProductImage
          imageUrl={indivProduct?.image}
          placeholder={indivProduct?.name}
        />

        <ProductDetail product={indivProduct} />
      </main>
    </>
  );
}
