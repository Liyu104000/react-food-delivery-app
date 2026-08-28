import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { formatCurrency } from "../../utils/money";
import { deleteCartItem } from "../../utils/cartService";
import "./PaymentSummary.css";
export function PaymentSummary({ cartQuantity, calculateQuantity}) {
  const [cartItems, setCartItems] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  const navigate = useNavigate();

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      const getCartItems = async () => {
        try {
          const response = await axios.get(
            `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cart?user_id=eq.${currentUser.id}&select=*,products(name,price,discount_price,image_url)`,
            {
              headers: {
                apikey: supaBaseKey,
              },
            },
          );

          const cartItemsFoundList = response.data;

          if (cartItemsFoundList.length > 0) {
            const cartItemsData = cartItemsFoundList.map((item) => {
              const product = item.products;

              return {
                id: item.id,
                quantity: item.quantity,
                name: product?.name,
                priceCents: product?.price,
                discountPriceCents: product?.discount_price || undefined,
                imageUrl: product?.image_url,
              };
            });

            setCartItems(cartItemsData);
          } else {
            setCartItems([]);
          }
        } catch (error) {
          console.error("Could Not Load Cart", error.message);
        }
      };
      getCartItems();
    }
  }, [refreshPage]);

  const handleDeleteItem = async (cartId) => {
    Swal.fire({
      title: "Remove Item?",
      text: "Are You Sure You Want To Remove The Item?",
      icon: "warning",
      iconColor: "orange",
      confirmButtonText: "Remove",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "rgb(108, 117, 125)",
    }).then(async (result) => {
      if(result.isConfirmed){
        try{
          await deleteCartItem(cartId);

          setRefreshPage(prev => !prev);

          calculateQuantity();
        }catch(error){
          Swal.fire("Failed To Remove Item", error);
        }
      }
    });
  };

  const goToOrders = () => {
    navigate("/myorders");
  };

  return (
    <section className="card-base payment-summary-card">
      <header className="payment-summary-header">
        <h1 className="payment-summary-heading">Review Order</h1>
        <p className="checkout-total-quantity">
          {cartQuantity < 2 || cartQuantity === 0 ? `${cartQuantity} Item` : `${cartQuantity} Items`}
        </p>
      </header>

      <hr />

      {cartItems.map((cartItem) => (
        <article
          className="checkout-body-layout payment-summary-layout"
          key={cartItem.id}
        >
          <img
            src={cartItem.imageUrl}
            alt={cartItem.name}
            className="payment-summary-img"
          />

          <section className="product-details-container">
            <div className="delete-product-row">
              <p className="product-name product-details-name">
                {cartItem.name}
              </p>

              <FontAwesomeIcon
                className="payment-summary-icon"
                icon={faTrashAlt}
                size="sm"
                color="red"
                onClick={() => handleDeleteItem(cartItem.id)}
              />
            </div>

            <div className="product-meta">
              <p className="product-quantity">{`x ${cartItem.quantity}`}</p>

              <div className="product-price-container">
                {cartItem.discountPriceCents ? (
                  <>
                    <p className="current-price-cross">
                      {formatCurrency(cartItem.priceCents)}
                    </p>
                    <p className="discount-price">
                      {formatCurrency(cartItem.discountPriceCents)}
                    </p>
                  </>
                ) : (
                  <p className="current-price">
                    {formatCurrency(cartItem.priceCents)}
                  </p>
                )}
              </div>
            </div>
          </section>
        </article>
      ))}

      <hr />

      <h2 className="payment-charges-heading">Payment Summary</h2>

      <section className="payment-charges">
        <p>Subtotal: RM 11.99</p>
        <p className="payment-discount">Discount: RM 8.00</p>
        <p>Delivery: RM 3.20</p>
        <p>Packaging Fee: RM 0.60</p>
      </section>

      <hr />

      <footer>
        <p className="payment-total">Total: RM 15.79</p>

        <button className={`btn-order ${cartQuantity === 0 ? "btn-success-disable" : "btn-success"}`} onClick={goToOrders} disabled={cartQuantity === 0}>
          Place Order
        </button>
      </footer>
    </section>
  );
}
