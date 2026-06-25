import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle,faCreditCard,faLocationDot,faKey,faSignOut,faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./ProfileSideBar.css";

export function ProfileSideBar() {
  return (
    <nav className="profile-sidebar-links">
      <div className="profile-sidebar-item">
        <FontAwesomeIcon 
          icon={faUserCircle} 
          size="lg" 
          color="black" 
          fixedWidth
        />

        <a href="#account-details" className="profile-sidebar-link">Account Details</a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon 
          icon={faCreditCard} 
          size="lg" 
          color="black" 
          fixedWidth
        />

        <a href="#saved-cards" className="profile-sidebar-link">Saved Cards</a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon 
          icon={faLocationDot} 
          size="lg" 
          color="black" 
          fixedWidth
        />

        <a href="#saved-addresses" className="profile-sidebar-link">Saved Addresses</a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon 
          icon={faKey} 
          size="lg" 
          color="black" 
          fixedWidth
        />

        <a href="#update-password" className="profile-sidebar-link">Update Password</a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon 
          icon={faSignOut} 
          size="lg" 
          color="black" 
          fixedWidth
        />

        <Link to="/signin" className="profile-sidebar-link">Sign Out</Link>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon 
          icon={faTrashCan} 
          size="lg" 
          color="red" 
          fixedWidth
        />

        <a className="profile-sidebar-link"><span>Delete Account</span></a>
      </div>

    </nav>
  );
}
