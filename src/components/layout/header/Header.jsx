import CompanyLogo from "../../../assets/images/companylogo.png";
import { Link } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLessThan} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export function Header(){
  return(
   <section className="utility-header">
    <section className="home-link-container">
      <FontAwesomeIcon
        id="utility-icon"
        icon={faLessThan}
        color="black"
        size="lg"
      />

      <Link to="/" id="home-link">
        Back To Home
      </Link>
    </section>

    <section>
      <img src={CompanyLogo} alt="urbanplate-logo" className="company-logo" id="utility-logo"/>
    </section>
  </section>
  )
}