import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressBook, faMapPin, faCity} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export function NewAddressForm() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  }

  return (
    <form className="card-form-container">
      <fieldset>
        <label className="card-form-label">Street Address</label>
        <div className="card-form-input">
          <FontAwesomeIcon
            className="card-form-icon"
            icon={faMapPin}
            size="sm"
            color="lightgrey"
          />

          <input type="text" placeholder="No.12, Jalan Plumbum 7/101" className="card-input-indiv" />
        </div>
      </fieldset>

      <div className="card-form-row">
        <fieldset>
          <label className="card-form-label">Postcode</label>

          <div className="card-form-input">
            <FontAwesomeIcon
              className="card-form-icon"
              icon={faAddressBook}
              size="sm"
              color="lightgrey"
            />

            <input
              type="text"
              placeholder="4000"
              className="card-input-group"
            />
          </div>
        </fieldset>

        <fieldset>
          <label className="card-form-label">City</label>

          <div className="card-form-input">
            <FontAwesomeIcon
              className="card-form-icon"
              icon={faCity}
              size="sm"
              color="lightgrey"
            />

            <select className="card-input-group">
              <option value="Kuala Lumpur">Kuala Lumpur</option>
              <option value="Petaling Jaya">Petaling Jaya</option>
              <option value="Subang Jaya">Subang Jaya</option>
              <option value="Putrajaya">Putrajaya</option>
            </select>
          </div>
        </fieldset>
      </div>

      
      <footer className="card-form-actions">
        <button className="btn-success add-btn" onClick={goToProfile}>Add Address</button>
        <button className="btn-danger cancel-btn" onClick={goToProfile}>Cancel</button>
      </footer>
    </form>
  );
}