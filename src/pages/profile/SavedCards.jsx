import CreditLogo from "../../assets/images/mastercard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./SavedCards.css";

export function SavedCards() {
  return (
    <form className="saved-method-form">
      <fieldset className="saved-method-container">
        <section className="saved-card-info">
          <img src={CreditLogo} alt="creditlogo" id="saved-card-logo" />

          <div>
            <p id="saved-card-type">Mastercard</p>
            <p id="saved-card-no">09109020</p>
          </div>
        </section>

        <section className="saved-method-actions">
          <FontAwesomeIcon icon={faEdit} color="rgb(0, 123, 255)" />

          <FontAwesomeIcon icon={faTrashCan} color="red" />
        </section>
      </fieldset>

      <fieldset className="saved-method-container">
        <section className="saved-card-info">
          <img src={CreditLogo} alt="creditlogo" id="saved-card-logo" />

          <div>
            <p id="saved-card-type">Mastercard</p>
            <p id="saved-card-no">09109020</p>
          </div>
        </section>

        <section className="saved-method-actions">
          <FontAwesomeIcon icon={faEdit} color="rgb(0, 123, 255)" />

          <FontAwesomeIcon icon={faTrashCan} color="red" />
        </section>
      </fieldset>

      <footer className="saved-method-footer">
        <button className="btn-primary add-new-btn">Add New Card</button>
      </footer>
    </form>
  );
}
