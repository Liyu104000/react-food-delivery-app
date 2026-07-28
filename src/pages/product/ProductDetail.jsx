import { formatCurrency } from "../../utils/money";
import "../../components/shared/ProductShared.css";
import "./ProductDetail.css";

export function ProductDetail({ product }) {
  return (
    <article className="product-detail-container">
      <header>
        <h1 className="delivery-time">Today . 2:00PM - 2:30PM</h1>
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
            <select className="quantity-selec">
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
        <button className="btn-primary btn-update-cart">Add To Cart</button>
      </section>

    </article>
  );
}
