import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import "./AddressSearchBar.css"

export function AddressSearchBar() {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Enter your delivery address"/>

      <FontAwesomeIcon
      id="search-bar-icon"
      icon={faLocation}
      />
    </section>
  )
}