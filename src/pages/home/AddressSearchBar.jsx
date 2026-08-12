import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./AddressSearchBar.css";

export function AddressSearchBar() {
  const [savedAddressesList, setSavedAddressesList] = useState([]);
  const [savedAddress, setSavedAddress] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      getSavedAddress(currentUser.id);
    }
  }, []);

  const getSavedAddress = async (id) => {
    try {
      const response = await axios.get(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?user_id=eq.${id}`,
        {
          headers: {
            apikey: supaBaseKey,
          },
        },
      );

      const addressList = response.data;

      if ((addressList, addressList.length > 0)) {
        const sortedAddresses = addressList.sort(
          (a, b) => b.is_default - a.is_default,
        );

        setSavedAddressesList(sortedAddresses);

        const foundAddress = sortedAddresses.find(
          (address) => address.is_default === true,
        );

        if (foundAddress) {
          const fullSavedAddress = `${foundAddress.address}, ${foundAddress.postcode}, ${foundAddress.city}, ${foundAddress.state} `

          setSavedAddress(fullSavedAddress);
        }
      }
    } catch (error) {
      console.log("Could Not Retrieve Saved Addresses", error);
    }
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelectedAddress = (selectedAddress) => {
    const fullSelectedAddress = `${selectedAddress.address}, ${selectedAddress.postcode}, ${selectedAddress.city}, ${selectedAddress.state} `

    setSavedAddress(fullSelectedAddress);
    setShowDropdown(false);
  };

  return (
    <section className="search-bar" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Enter your delivery address"
        value={savedAddress}
        onChange={(e) => setSavedAddress(e.target.value)}
        onClick={() => setShowDropdown(true)}
      />

      {showDropdown && savedAddressesList.length > 0 && (
        <section className="saved-address-dropdown">
          {savedAddressesList.map((savedAddress) => (
            <section
              key={savedAddress.id}
              className="saved-address-container"
              onClick={() => handleSelectedAddress(savedAddress)}
            >
              <p className="saved-address">{`${savedAddress.address}, ${savedAddress.postcode}, ${savedAddress.city}, ${savedAddress.state}`}</p>
            </section>
          ))}
        </section>
      )}

      <FontAwesomeIcon className="search-bar-icon" icon={faLocation} />
    </section>
  );
}
