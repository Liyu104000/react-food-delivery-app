import axios from "axios";

const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

export async function addToCart(userId, productId, quantity) {
  const response = await axios.get(
    `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cart?user_id=eq.${userId}&product_id=eq.${productId}`,
    {
      headers: {
        apikey: supaBaseKey,
      },
    },
  );

  const itemExist = response.data;

  if (itemExist && itemExist.length > 0) {
    const currentItem = itemExist[0];
    const newItemQuantity =
      Number(currentItem.quantity) + Number(quantity);

    await axios.patch(
      `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cart?id=eq.${currentItem.id}`,
      {
        quantity: newItemQuantity,
      },
      {
        headers: {
          apikey: supaBaseKey,
        },
      },
    );
  } else {
    const cartData = {
      user_id: userId,
      product_id: productId,
      quantity: quantity,
    };
    await axios.post(
      `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cart`,
      cartData,
      {
        headers: {
          apikey: supaBaseKey,
          "Content-Type": "application/json",
        },
      },
    );
  }
}
