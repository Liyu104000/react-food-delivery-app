import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar,faCreditCard,faLock,faUser} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export function NewCardForm() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  }

  return (
    <form className="card-form-container">
      <fieldset>
        <label className="card-form-label">Card Number</label>
        <div className="card-form-input">
          <FontAwesomeIcon
            className="card-form-icon"
            icon={faCreditCard}
            size="sm"
            color="lightgrey"
          />

          <input type="text" placeholder="09109020" className="card-input-indiv" />
        </div>
      </fieldset>

      <div className="card-form-flex">
        <fieldset>
          <label className="card-form-label">Expiry Date</label>

          <div className="card-form-input">
            <FontAwesomeIcon
              className="card-form-icon"
              icon={faCalendar}
              size="sm"
              color="lightgrey"
            />

            <input
              type="text"
              placeholder="MM/YY"
              className="card-input-group"
            />
          </div>
        </fieldset>

        <fieldset>
          <label className="card-form-label">CVV</label>

          <div className="card-form-input">
            <FontAwesomeIcon
              className="card-form-icon"
              icon={faLock}
              size="sm"
              color="lightgrey"
            />

            <input type="text" placeholder="334"  className="card-input-group"/>
          </div>
        </fieldset>
      </div>

      <fieldset>
        <label className="card-form-label">Cardholder Name</label>

        <div className="card-form-input">
          <FontAwesomeIcon
            className="card-form-icon"
            icon={faUser}
            size="sm"
            color="lightgrey"
          />

          <input
            type="text"
            placeholder="Name On Card"
            className="card-input-indiv"
          />
        </div>
      </fieldset>

      <footer className="card-form-actions">
        <button className="btn-success add-btn" onClick={goToProfile}>Add Card</button>
        <button className="btn-danger cancel-btn" onClick={goToProfile}>Cancel</button>
      </footer>
    </form>
  );
}
