import { formatCurrency } from "../../utils/money";
import "../../components/shared/ProductShared.css";
import "./MenuItem.css";

export function MenuItem({ categoryHeading, products }) {
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
              <p className="product-name menu-item-name">{product.name}</p>

              <div className="product-price-container menu-item-price">
                {product.discountPriceCents ? (
                  <>
                    <p className="current-price-cross">{formatCurrency(product.priceCents)}</p>
                    <p className="discount-price">{formatCurrency(product.discountPriceCents)}</p>
                  </>
                ) : (
                  <p className="current-price">{formatCurrency(product.priceCents)}</p>
                )}
              </div>

              <div className="quantity-container">
                <select className="quantity-selec">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </section>

            <button className="product-btn btn-primary add-cart-btn">
              Add To Cart
            </button>
          </article>
        ))}
      </section>
    </section>
  );
}
