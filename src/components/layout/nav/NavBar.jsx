import CompanyLogo from "../../../assets/images/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "./NavBar.css";

export function NavBar({ isSignIn, setIsSignIn, cartQuantity}) {
  const navigate = useNavigate();

  const hasActiveSession = sessionStorage.getItem("isUserSignedIn") === "true";

  const userIsAuthenticated = isSignIn || hasActiveSession;

  const goToCheckout = () => {
    navigate("/checkout");
  };

  const goToHome = () => {
    navigate("/")
  }

  const handleSignOut = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Sign Out",
      text: "Do You Want To Sign Out?",
      icon: "question",
      iconColor: "rgb(108, 117, 125)",
      confirmButtonText: "Sign Out",
      confirmButtonColor: "rgb(232,93,4)",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "rgb(108, 117, 125)",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("activeUser");
        sessionStorage.removeItem("isUserSignedIn");

        goToHome();
        
        setIsSignIn(false);

      }
    });
  };

  return (
    <section className="nav-header">
      <section>
        <img
          src={CompanyLogo}
          alt="urbanplate-logo"
          className="company-logo nav-logo"
        />
      </section>

      <nav className="navbar">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/myorders" className="nav-item">
          My Orders
        </NavLink>

        {userIsAuthenticated && (
          <NavLink to="/profile" className="nav-item">
            Profile
          </NavLink>
        )}

        {userIsAuthenticated ? (
          <Link to="#" className="nav-item" onClick={handleSignOut}>
            Sign Out
          </Link>
        ) : (
          <Link to="/signin" className="nav-item">
            Sign In
          </Link>
        )}
      </nav>

      <section className="cart-container">
        <FontAwesomeIcon
          icon={faShoppingCart}
          color="black"
          size="xl"
          onClick={goToCheckout}
        />

        {userIsAuthenticated && <span className="cart-quantity">{cartQuantity}</span>}
      </section>
    </section>
  );
}
