import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCreditCard,
  faLocationDot,
  faKey,
  faSignOut,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import "./ProfileSideBar.css";

export function ProfileSideBar({ setIsSignIn }) {
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Sign Out",
      text: "Do You Want To Sign Out?",
      icon: "question",
      iconColor: "rgb(108, 117, 125)",
      confirmButtonText: "Sign Out",
      confirmButtonColor: "rgb(232,93,4);",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "rgb(108, 117, 125)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("activeUser");
        sessionStorage.removeItem("isUserSignedIn");

        setIsSignIn(false);

        navigate("/");
      }
    });
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Delete Account?",
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
        let currentUser = sessionStorage.getItem("activeUser");

        if (!currentUser) {
          return;
        }

        currentUser = JSON.parse(currentUser);

        const userId = currentUser.id;

        try {
          await axios.delete(
            `https://6a4b259cf5eab0bb6b6245aa.mockapi.io/users/${userId}`,
          );

          sessionStorage.removeItem("activeUser");
          sessionStorage.removeItem("isUserSignedIn");

          setIsSignIn(false);

          navigate("/");
        } catch (error) {
          console.error("Error Deleting User Profile Record", error.message);
          Swal.fire({
            title: "Error!",
            text: "Failed To Delete Account.Please Try Again Later.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    });
  };

  return (
    <nav className="profile-sidebar-links">
      <div className="profile-sidebar-item">
        <FontAwesomeIcon
          icon={faUserCircle}
          size="lg"
          color="black"
          fixedWidth
        />

        <a href="#account-details" className="profile-sidebar-link">
          Account Details
        </a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon
          icon={faCreditCard}
          size="lg"
          color="black"
          fixedWidth
        />

        <a href="#saved-cards" className="profile-sidebar-link">
          Saved Cards
        </a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon
          icon={faLocationDot}
          size="lg"
          color="black"
          fixedWidth
        />

        <a href="#saved-addresses" className="profile-sidebar-link">
          Saved Addresses
        </a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon icon={faKey} size="lg" color="black" fixedWidth />

        <a href="#update-password" className="profile-sidebar-link">
          Update Password
        </a>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon icon={faSignOut} size="lg" color="black" fixedWidth />

        <Link to="#" className="profile-sidebar-link" onClick={handleSignOut}>
          Sign Out
        </Link>
      </div>

      <div className="profile-sidebar-item">
        <FontAwesomeIcon icon={faTrashCan} size="lg" color="red" fixedWidth />

        <Link
          to="#"
          className="profile-sidebar-link"
          onClick={handleDeleteAccount}
        >
          <span>Delete Account</span>
        </Link>
      </div>
    </nav>
  );
}
