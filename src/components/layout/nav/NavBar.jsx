import CompanyLogo from "../../../assets/images/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useNavigate } from "react-router";
import "./NavBar.css";

export function NavBar({ isSignIn, setIsSignIn }) {
  const navigate = useNavigate();

  const hasActiveSession = sessionStorage.getItem("isUserSignedIn") === "true";

  const userIsAuthenticated = isSignIn || hasActiveSession;

  const goToCheckout = () => {
    navigate("/checkout");
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("isUserSignedIn");
    setIsSignIn(false);
  }

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
        <Link to="/" className="nav-item" onClick={handleSignOut}>Sign Out</Link>
        ):(
        <Link to="/signin" className="nav-item">Sign In</Link>
        )}
      </nav>

      <section className="cart-container">
        <FontAwesomeIcon
          icon={faShoppingCart}
          color="black"
          size="xl"
          onClick={goToCheckout}
        />

        {userIsAuthenticated && <span className="cart-quantity">1</span>}
      
      </section>
    </section>
  );
}
