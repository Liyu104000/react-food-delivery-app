import { useState } from "react";
import { formatCurrency } from "../../utils/money";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { addToCart } from "../../utils/cartService";
import "../../components/shared/ProductShared.css";
import "./MenuItem.css";

export function MenuItem({ categoryHeading, products, setCartQuantity }) {
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
    <section className="category-container">
      <h2 className="category-heading">{categoryHeading}</h2>

      <section className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <section className="product-body">
              <Link
                to={`/product/${product.id}`}
                className="product-link-container"
              >
                <p className="product-name menu-item-name">{product.name}</p>
              </Link>
              <div className="product-price-container menu-item-price">
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
              </div>

              <div className="quantity-container">
                <select
                  className="quantity-selec"
                  value={quantities[product.id] || "1"}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </section>

            <button
              className="product-btn btn-primary add-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </article>
        ))}
      </section>
    </section>
  );
}
