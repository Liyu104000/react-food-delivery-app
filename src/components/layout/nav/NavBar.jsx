import CompanyLogo from "../../../assets/images/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import "./NavBar.css";

export function NavBar() {
  const navigate = useNavigate();
  
  return (
    <section className="nav-header">
      <section>
        <img
          src={CompanyLogo}
          alt="urbanplate-logo"
          className="company-logo"
          id="nav-logo"
        />
      </section>

      <nav className="navbar">
        <Link to="/" className="nav-item is-selected">
          Home
        </Link>

        <Link to="/profile" className="nav-item">
          Profile
        </Link>

        <Link to="/myorders" className="nav-item">
          My Orders
        </Link>

        <Link to="/signin"  className="nav-item">
          Sign In
        </Link>
      </nav>

      <section className="cart-container">
        <FontAwesomeIcon
          icon={faShoppingCart}
          color="black"
          size="xl"
          onClick={() => navigate('/checkout')}
        />

        <span id="cart-quantity">1</span>
      </section>
    </section>
  );
}
