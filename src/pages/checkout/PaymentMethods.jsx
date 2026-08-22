import MastercardLogo from "../../assets/images/mastercard.png";
import VisaLogo from "../../assets/images/visa.png";
import MoneyLogo from "../../assets/images/money.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "./PaymentMethods.css";

export function PaymentMethods() {
  const [savedCardsList, setSavedCardsList] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("COD");

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  const cardLogos = {
    Mastercard: MastercardLogo,
    Visa: VisaLogo,
  };

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      getCards(currentUser.id);
    }
  }, []);

  const getCards = async (id) => {
    try {
      const response = await axios.get(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cards?user_id=eq.${id}`,
        {
          headers: {
            apikey: supaBaseKey,
          },
        },
      );

      const savedCards = response.data || [];

      setSavedCardsList(savedCards);

      if(savedCards.length > 0 ){
        setSelectedMethod(savedCards[0].id);
      }
    } catch (error) {
      console.log("Could Not Retrieve Saved Cards", error);
    }
  };

  return (
    <section className="card-base payment-method-card">
      <h1 className="payment-method-heading">Select Payment Method</h1>

      <hr />

      {savedCardsList &&
        savedCardsList.map((savedCard) => (
          <article className="payment-option" key={savedCard.id}>
            <input 
              type="radio" 
              value={savedCard.id}
              checked={selectedMethod === savedCard.id}
              onChange={() => setSelectedMethod(savedCard.id)}
            />

            <img
              src={cardLogos[savedCard.card_type]}
              alt={`${savedCard.card_type} logo`}
              className="payment-option-logo"
            />

            <div className="payment-info">
              <p className="payment-option-type">{savedCard.card_type}</p>
              <p className="payment-option-no">{savedCard.card_no}</p>
            </div>
          </article>
        ))}

      <article className="payment-option">
        <input 
          type="radio" 
          value="COD"
          checked={selectedMethod === "COD"}
          onChange={() => setSelectedMethod("COD")}
        />

        <img src={MoneyLogo} alt="creditlogo" className="payment-option-logo" />

        <div className="payment-info">
          <p className="payment-option-type">Cash On Delivery</p>
          <p className="payment-option-no">Pay Directly To the Driver</p>
        </div>
      </article>
    </section>
  );
}
