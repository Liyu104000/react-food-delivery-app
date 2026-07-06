import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./SavedAddresses.css";

export function SavedAddresses() {
  const navigate = useNavigate();

  const openNewAddressForm = () => {
    navigate("/profile/newaddress")
  }

  return (
    <form className="saved-method-form">
      <fieldset className="saved-method-container">
        <section className="saved-address-info">
          <span className="default-badge">Default</span>
          <p className="saved-address">Bukit Jelutong,40150 Shah Alam</p>
        </section>

        <section className="saved-method-actions">
          <FontAwesomeIcon icon={faEdit} color="rgb(0, 123, 255)" />

          <FontAwesomeIcon icon={faTrashCan} color="red"/>

          <FontAwesomeIcon icon={faStar} color="rgb(255, 193, 7)"/>
        </section>
      </fieldset>

       <fieldset className="saved-method-container">
        <section className="saved-address-info">
          <p className="saved-address">Bukit Jelutong,40150 Shah Alam</p>
        </section>

        <section className="saved-method-actions">
          <FontAwesomeIcon icon={faEdit} color="rgb(0, 123, 255)" />

          <FontAwesomeIcon icon={faTrashCan} color="red"/>

          <FontAwesomeIcon icon={faStar} color="gray"/>
        </section>
      </fieldset>

      <footer className="saved-method-footer">
        <button className="btn-primary add-new-btn" onClick={openNewAddressForm}>New Address</button>
      </footer>
    </form>
  );
}
