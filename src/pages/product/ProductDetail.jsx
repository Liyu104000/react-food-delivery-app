import { useState } from "react";
import Swal from "sweetalert2";
import { addToCart } from "../../utils/cartService";
import { formatCurrency } from "../../utils/money";
import "../../components/shared/ProductShared.css";
import "./ProductDetail.css";

export function ProductDetail({ product, setCartQuantity }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, selectedValue) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Number(selectedValue),
    }));
  };

  const handleAddToCart = async (product) => {
    try {
      let currentUser = sessionStorage.getItem("activeUser");

      if (currentUser) {
        currentUser = JSON.parse(currentUser);

        const selectedQuantity = quantities[product.id] || 1;

        await addToCart(currentUser.id, product.id, selectedQuantity);

        setCartQuantity((prevCount) => (prevCount + selectedQuantity));


        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Item Has Been Added To Cart!",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Sign In To Add Item To Cart!",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        return;
      }
    } catch (error) {
      console.error("Could Not Add Product To Cart", error.message);
    }
  };

  return (
    <article className="product-detail-container">
      <header>
        <p className="product-name product-sel-name">{product.name}</p>
      </header>

      <section>
        <div className="product-price-container">
          {product.discountPriceCents ? (
            <>
              <p className="current-price-cross">
                {formatCurrency(product.priceCents)}
              </p>
              <p className="discount-price">
                {formatCurrency(product.discountPriceCents)}
              </p>
            </>
          ) : (
            <p className="current-price">
              {formatCurrency(product.priceCents)}
            </p>
          )}

          <div className="update-quantity-container">
            <select
              className="quantity-selec"
              value={quantities[product.id] || "1"}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <p className="product-desc">{product.description}</p>
      </section>

      <section>
        <button className="btn-primary btn-update-cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </section>
    </article>
  );
}
