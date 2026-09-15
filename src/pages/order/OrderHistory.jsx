import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUtensils,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { formatCurrency } from "../../utils/money";
import { addToCart } from "../../utils/cartService";
import "./OrderHistory.css";

export function OrderHistory({calculateQuantity}) {
  const [orders, setOrders] = useState([]);

  const [currentTime, setCurrentTime] = useState(dayjs());

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      const getOrders = async () => {
        try {
          const response = await axios.get(
            `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/orders?user_id=eq.${currentUser.id}`,
            {
              headers: {
                apikey: supaBaseKey,
              },
            },
          );
          setOrders(response.data || "");
        } catch (error) {
          console.error("Could Not Fetch Your Orders", error.message);
        }
      };

      getOrders();
    }

    const intervalId = setInterval(() => {
      setCurrentTime(dayjs());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateOrderStatus = (orderTime) => {
    const orderPlaced = dayjs(orderTime);
    const minutesElasped = currentTime.diff(orderPlaced, "minute");

    if (minutesElasped < 1) {
      return {
        label: "Preparing",
        icon: faUtensils,
        bgColor: " rgb(241, 196, 15)",
        message: "Preparing Your Order",
      };
    } else if (minutesElasped < 2) {
      return {
        label: "Delivering",
        icon: faTruck,
        bgColor: " rgb(253, 126, 20)",
        message: "Rider Is Out For Delivery",
      };
    } else {
      const deliveryTime = orderPlaced.add(2, "minute");

      return {
        label: "Delivered",
        icon: faCircleCheck,
        bgColor: "rgb(40, 167, 69)",
        message: `Delivered On ${deliveryTime.format("MMM D")} at ${deliveryTime.format("h:mm A")}`,
      };
    }
  };

  const handleOrderAgain = async (orderItems) => {
    console.log(orderItems);

    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Item Has Been Added To Cart!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      try{
        for(const item of orderItems){
          console.log(item);


          await addToCart(currentUser.id, item.product_id, item.quantity);
        }

        calculateQuantity();

      }catch(error){
        console.error("Items Can Not Be Added Back To Cart", error.message);
      }
    }
  
  };

  return (
    <section className="order-container">
      {orders.map((order) => {
        const liveStatus = calculateOrderStatus(order.created_at);

        return (
          <article className="order-card" key={order.id}>
            <header className="order-card-header-flex">
              <section
                className="order-status-container"
                style={{ backgroundColor: liveStatus.bgColor }}
              >
                <FontAwesomeIcon
                  icon={liveStatus.icon}
                  size="xs"
                  color="white"
                />
                <p className="order-status">{liveStatus.label}</p>
              </section>

              <section>
                <p className="order-status-msg">{liveStatus.message}</p>
              </section>

              <section className="order-id-container">
                <p className="order-id">{`Order ID: ${order.id}`}</p>
              </section>
            </header>

            {order.items.map((product, id) => (
              <section className="order-items" key={id}>
                <div className="order-items-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img order-items-img"
                  />

                  <div className="product-details-row">
                    <div className="product-details-column">
                      <p className="product-name product-order-name">
                        {product.name}
                      </p>
                      <p className="product-quantity product-order-quantity">
                        {`x ${product.quantity}`}
                      </p>
                    </div>

                    <p className="product-price product-order-price">
                      {formatCurrency(product.priceCents)}
                    </p>
                  </div>
                </div>
              </section>
            ))}

            <hr />

            <footer className="order-card-footer">
              <p className="order-total">
                Total: {formatCurrency(order.total)}
              </p>

              <button
                className="btn-outline-success btn-order-again"
                onClick={() => handleOrderAgain(order.items)}
              >
                Order Again
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}
