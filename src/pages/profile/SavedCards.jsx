import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashCan,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import MastercardLogo from "../../assets/images/mastercard.png";
import VisaLogo from "../../assets/images/visa.png";
import "./SavedCards.css";

export function SavedCards() {
  const [cardsList, setCardsList] = useState([]);
  const [userId, setUserId] = useState(null);

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  const cardLogos = {
    Mastercard: MastercardLogo,
    Visa: VisaLogo,
  };

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      setUserId(currentUser.id);

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

      setCardsList(response.data || []);
    } catch (error) {
      console.log("Could Not Retrieve Saved Cards", error);
    }
  };

  const openNewCardDialog = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Add New Card",
      html: `
      <div class="card-form-container">
          <fieldset>
            <label class="card-form-label">Card Number</label>
            <div class="card-form-input">
              <i class="fa fa-credit-card fa-fw card-form-icon"></i>
              <input type="text" placeholder="09109020" class="card-input" id="swal-card-no" autocomplete="off"/>
            </div>
          </fieldset>
    
          <div class="form-row-2col">
            <fieldset>
              <label class="card-form-label">Expiry Date</label>
    
              <div class="card-form-input">
                <i class="fa fa-calendar fa-fw card-form-icon"></i>
                <input
                  type="text"
                  placeholder="MM/YY"
                  class="card-input"
                  id="swal-card-expiry" autocomplete="off"
                />
              </div>
            </fieldset>
    
            <fieldset>
              <label class="card-form-label">CVV</label>
    
              <div class="card-form-input">
                <i class="fa fa-lock fa-fw card-form-icon"></i>
                <input type="text" placeholder="334"  class="card-input"
                id="swal-card-cvv" autocomplete="off"
                />
              </div>
            </fieldset>
          </div>
    
          <fieldset>
            <label class="card-form-label">Cardholder Name</label>
    
            <div class="card-form-input">
              <i class="fa fa-user fa-fw card-form-icon"></i>
              <input
                type="text"
                placeholder="Name On Card"
                class="card-input"
                id="swal-card-cardholder-name" autocomplete="off"
              />
            </div>
          </fieldset>
        </div>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Add Card",
      confirmButtonColor: "rgb(0, 128, 0)",
      cancelButtonColor: "rgb(186, 26, 26)",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const cardNo = document.getElementById("swal-card-no").value.trim();
        const cardExpiry = document
          .getElementById("swal-card-expiry")
          .value.trim();
        const cvv = document.getElementById("swal-card-cvv").value.trim();
        const cardholder = document
          .getElementById("swal-card-cardholder-name")
          .value.trim();

        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

        if (!cardNo || !cardExpiry || !cvv || !cardholder) {
          Swal.showValidationMessage("All Fields Must Be Provided!");
          return false;
        } else if (!expiryRegex.test(cardExpiry)) {
          Swal.showValidationMessage(
            "Expiry Date Must Follow The Correct Format!",
          );
          return false;
        }

        let calculatedType = "Mastercard";
        if (cardNo.startsWith("4")) {
          calculatedType = "Visa";
        }
        return {
          card_type: calculatedType,
          card_no: cardNo,
          cvv: cvv,
          cardholder_name: cardholder,
          card_expiry: cardExpiry,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        saveNewCard(result.value);
      }
    });
  };

  const saveNewCard = async (newCard) => {
    try {
      const newCardData = {
        user_id: userId,
        card_type: newCard.card_type,
        card_no: newCard.card_no,
        cvv: newCard.cvv,
        cardholder_name: newCard.cardholder_name,
        card_expiry: newCard.card_expiry,
      };

      await axios.post(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cards`,
        newCardData,
        {
          headers: {
            apikey: supaBaseKey,
            "Content-Type": "application/json",
          },
        },
      );

      getCards(userId);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Your Card Has Been Saved!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire("Card Could Not Be Added!", error);
    }
  };

  const openEditCardDialog = (card) => {
    Swal.fire({
      title: "Edit Card",
      html: `
      <div class="card-form-container">
          <fieldset>
            <label class="card-form-label">Card Number</label>
            <div class="card-form-input">
              <i class="fa fa-credit-card fa-fw card-form-icon"></i>
              <input type="text" value="${card.card_no || ''}" class="card-input" id="swal-edit-no" autocomplete="off"/>
            </div>
          </fieldset>
    
          <div class="card-form-row">
            <fieldset>
              <label class="card-form-label">Expiry Date</label>
              <div class="card-form-input">
                <i class="fa fa-calendar fa-fw card-form-icon"></i>
                <input type="text" value="${card.card_expiry || ''}" class="card-input" id="swal-edit-expiry" autocomplete="off"/>
              </div>
            </fieldset>
    
            <fieldset>
              <label class="card-form-label">CVV</label>
              <div class="card-form-input">
                <i class="fa fa-lock fa-fw card-form-icon"></i>
                <input type="text" value="${card.cvv || ''}" class="card-input" id="swal-edit-cvv" autocomplete="off"/>
              </div>
            </fieldset>
          </div>
    
          <fieldset>
            <label class="card-form-label">Cardholder Name</label>
            <div class="card-form-input">
              <i class="fa fa-user fa-fw card-form-icon"></i>
              <input type="text" value="${card.cardholder_name || ''}" class="card-input" id="swal-edit-cardholder-name" autocomplete="off"/>
            </div>
          </fieldset>
        </div>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "rgb(0, 128, 0)",
      cancelButtonColor: "rgb(186, 26, 26)",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const cardNo = document.getElementById("swal-edit-no").value.trim();
        const cardExpiry = document.getElementById("swal-edit-expiry").value.trim();
        const cvv = document.getElementById("swal-edit-cvv").value.trim();
        const cardholder = document.getElementById("swal-edit-cardholder-name").value.trim();

        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

        if (!cardNo || !cardExpiry || !cvv || !cardholder) {
          Swal.showValidationMessage("All Fields Must Be Provided!");
          return false;
        } else if (!expiryRegex.test(cardExpiry)) {
          Swal.showValidationMessage("Expiry Date Must Follow The Correct Format!");
          return false;
        }

        let calculatedType = "Mastercard";
        if (cardNo.startsWith("4")) {
          calculatedType = "Visa";
        }
        return {
          id: card.id,
          card_type: calculatedType,
          card_no: cardNo,
          cvv: cvv,
          cardholder_name: cardholder,
          card_expiry: cardExpiry,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        updateCard(result.value);
      }
    });
  };

  const updateCard = async (updatedCard) => {
    const updatedCardData = {
      card_type: updatedCard.card_type,
      card_no: updatedCard.card_no,
      cvv: updatedCard.cvv,
      cardholder_name: updatedCard.cardholder_name,
      card_expiry: updatedCard.card_expiry
    };

    try {
      await axios.patch(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cards?id=eq.${updatedCard.id}`,
        updatedCardData,
        {
          headers: {
            apikey: supaBaseKey,
            "Content-Type": "application/json",
          },
        },
      );

      getCards(userId);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Card Updated Successfully!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire("Failed To Update Card", error.message || error);
    }
  };

  const deleteCard = async (cardId) => {
    Swal.fire({
      title: "Delete Card?",
      text: "Continue. This Action Can't Be Reversed.",
      icon: "warning",
      iconColor: "orange",
      confirmButtonText: "Delete",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "rgb(108, 117, 125)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/cards?id=eq.${cardId}`,
            {
              headers: { apikey: supaBaseKey },
            },
          );

          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "warning",
            title: "Your Card Has Been Deleted!",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          getCards(userId);
        } catch (error) {
          Swal.fire("Failed To Remove Card", error);
        }
      }
    });
  };

  return (
    <form className="saved-method-form">
      {cardsList.length > 0 ? (
        cardsList.map(card => (
          <fieldset className="saved-method-container" key={card.id}>
            <section className="saved-card-info">
              <img
                src={cardLogos[card.card_type]}
                alt={`${card.card_type} logo`}
                className="saved-card-logo"
              />

              <div>
                <p className="saved-card-type">{card.card_type}</p>
                <p className="saved-card-no">{card.card_no}</p>
              </div>
            </section>

            <section className="saved-method-actions">
              <FontAwesomeIcon
                icon={faEdit}
                color="rgb(0, 123, 255)"
                onClick={() => openEditCardDialog(card)}
              />

              <FontAwesomeIcon
                icon={faTrashCan}
                color="red"
                onClick={() => deleteCard(card.id)}
              />
            </section>
          </fieldset>
        ))
      ) : (
        <section className="no-card-container">
          <FontAwesomeIcon icon={faCreditCard} className="no-card-icon" />
          <p className="no-card-msg">
            You do not have any saved cards! <br />
            Click the <strong>New Card</strong> button to add a card.
          </p>
        </section>
      )}

      <footer className="saved-method-footer">
        <button
          type="button"
          className="btn-primary add-new-btn"
          onClick={openNewCardDialog}
        >
          New Card
        </button>
      </footer>
    </form>
  );
}
