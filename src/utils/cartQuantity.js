import { useState, useEffect } from "react";
import axios from "axios";

export function useCartQuantity() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    async function calculateQuantity() {
      try {
        let currentUser = sessionStorage.getItem("activeUser");

        if (currentUser) {
          currentUser = JSON.parse(currentUser);

          const id = currentUser.id;

          const response = await axios.get(
            `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cart?user_id=eq.${id}`,
            {
              headers: {
                apikey: supaBaseKey,
              },
            },
          );

          const cartItemsList = response.data;

          if (cartItemsList && cartItemsList.length > 0) {
            let totalCartQuantity = 0;
            
            cartItemsList.forEach((item) => {
              totalCartQuantity += Number(item.quantity);
            });

            setCartQuantity(totalCartQuantity);
          }
        }
      } catch (error) {
        console.error("Could Not Retrieve Cart Quantity", error.message);
      }
    }

    calculateQuantity();
  }, []);

  return [cartQuantity, setCartQuantity];
}
