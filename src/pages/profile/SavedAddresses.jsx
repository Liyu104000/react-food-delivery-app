import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashCan,
  faStar,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./SavedAddresses.css";

export function SavedAddresses() {
  const [addressList, setAddressList] = useState([]);
  const [userId, setUserId] = useState(null);

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      setUserId(currentUser.id);

      getAddresses(currentUser.id);
    }
  }, []);

  const getAddresses = async (id) => {
    try {
      const response = await axios.get(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?user_id=eq.${id}`,
        {
          headers: {
            apikey: supaBaseKey,
          },
        },
      );

      setAddressList(response.data || []);
    } catch (error) {
      console.log("Could Not Retrieve Saved Addresses", error);
    }
  };

  const openNewAddressDialog = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Add New Address",
      html: `
        <div class="card-form-container">
          <div class="form-row-custom">
             <fieldset>
              <label class="card-form-label">Street Address</label>
              <div class="card-form-input">
               <i class="fa fa-map-pin fa-fw card-form-icon"></i>
      
              <input type="text" placeholder="No.12, Jalan Plumbum 7/101" class="card-input" id="swal-address" autocomplete="off" />
              </div>
            </fieldset>
      
          
              <fieldset>
                <label class="card-form-label">Postcode</label>
      
                <div class="card-form-input">
                 <i class="fa fa-address-book fa-fw card-form-icon"></i>
      
                  <input
                    type="text"
                    placeholder="4000"
                    class="card-input"
                    id="swal-postcode" autocomplete="off"
                  />
                </div>
              </fieldset>
          </div>
           
          <div class="form-row-2col">
             <fieldset>
                <label class="card-form-label">City</label>
      
                <div class="card-form-input">
                 <i class="fa fa-institution fa-fw card-form-icon"></i>
      
                  <select class="card-input" id="swal-city">
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Petaling Jaya">Petaling Jaya</option>
                    <option value="Subang Jaya">Subang Jaya</option>
                    <option value="Putrajaya">Putrajaya</option>
                    <option value="Ipoh">Ipoh</option>
                  </select>
                </div>
              </fieldset>

              <fieldset>
                <label class="card-form-label">State</label>
      
                <div class="card-form-input">
                 <i class="fa fa-map fa-fw card-form-icon"></i>
      
                  <select class="card-input" id="swal-state">
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Putrajaya">Putrajaya</option>
                    <option value="Perak">Perak</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>
         `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Add Address",
      confirmButtonColor: "rgb(0, 128, 0)",
      cancelButtonColor: "rgb(186, 26, 26)",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const address = document.getElementById("swal-address").value.trim();
        const postcode = document.getElementById("swal-postcode").value.trim();
        const city = document.getElementById("swal-city").value;
        const state = document.getElementById("swal-state").value;

        if (!address || !postcode) {
          Swal.showValidationMessage("All Fields Must Be Provided!");
          return false;
        }

        return {
          id: address.id,
          address: address,
          city: city,
          state: state,
          postcode: postcode,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        saveNewAddress(result.value);
      }
    });
  };

  const saveNewAddress = async (newAddress) => {
    try {
      const newAddressData = {
        user_id: userId,
        address: newAddress.address,
        city: newAddress.city,
        state: newAddress.state,
        postcode: newAddress.postcode,
      };

      await axios.post(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses`,
        newAddressData,
        {
          headers: {
            apikey: supaBaseKey,
            "Content-Type": "application/json",
          },
        },
      );

      getAddresses(userId);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Your Address Has Been Saved!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire("Address Could Not Be Added!", error);
    }
  };

  const openEditAddressDialog = (address) => {
    Swal.fire({
      title: "Edit Address",
      html: `
       <div class="card-form-container">
          <div class="form-row-custom">
             <fieldset>
              <label class="card-form-label">Street Address</label>
              <div class="card-form-input">
               <i class="fa fa-map-pin fa-fw card-form-icon"></i>
      
              <input type="text" value="${address.address || ''}" class="card-input" id="swal-edit-address" autocomplete="off" />
              </div>
            </fieldset>
      
          
              <fieldset>
                <label class="card-form-label">Postcode</label>
      
                <div class="card-form-input">
                 <i class="fa fa-address-book fa-fw card-form-icon"></i>
      
                  <input
                    type="text"
                    value="${address.postcode || ''}"
                    class="card-input"
                    id="swal-edit-postcode" autocomplete="off"
                  />
                </div>
              </fieldset>
          </div>
           
          <div class="form-row-2col">
             <fieldset>
                <label class="card-form-label">City</label>
      
                <div class="card-form-input">
                 <i class="fa fa-institution fa-fw card-form-icon"></i>
      
                  <select class="card-input" id="swal-edit-city">
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Petaling Jaya">Petaling Jaya</option>
                    <option value="Subang Jaya">Subang Jaya</option>
                    <option value="Putrajaya">Putrajaya</option>
                    <option value="Ipoh">Ipoh</option>
                  </select>
                </div>
              </fieldset>

              <fieldset>
                <label class="card-form-label">State</label>
      
                <div class="card-form-input">
                 <i class="fa fa-map fa-fw card-form-icon"></i>
      
                  <select class="card-input" id="swal-edit-state">
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Putrajaya">Putrajaya</option>
                    <option value="Perak">Perak</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "rgb(0, 128, 0)",
      cancelButtonColor: "rgb(186, 26, 26)",
      cancelButtonText: "Cancel",
      didOpen: () => {
        if (address.city) {
          document.getElementById("swal-edit-city").value = address.city;
        }
        if (address.state) {
          document.getElementById("swal-edit-state").value = address.state;
        }
      },

      preConfirm: () => {
        const homeAddress = document.getElementById("swal-edit-address").value.trim();
        const postcode = document.getElementById("swal-edit-postcode").value.trim();
        const city = document.getElementById("swal-edit-city").value;
        const state = document.getElementById("swal-edit-state").value;

        if (!address || !postcode) {
          Swal.showValidationMessage("All Fields Must Be Provided!");
          return false;
        }

        return {
          id: address.id,
          address: homeAddress,
          city: city,
          state: state,
          postcode: postcode,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        updateAddress(result.value);
      }
    });
  };

  const updateAddress = async (updatedAddress) => {
     const updatedCardData = {
      address: updatedAddress.address,
      city: updatedAddress.city,
      state: updatedAddress.state,
      postcode: updatedAddress.postcode,
    };

    try {
      await axios.patch(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?id=eq.${updatedAddress.id}`,
        updatedCardData,
        {
          headers: {
            apikey: supaBaseKey,
            "Content-Type": "application/json",
          },
        },
      );

      getAddresses(userId);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Address Updated Successfully!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire("Failed To Update Address", error);
    }
  }

  const deleteAddress = async (addressId) => {
    Swal.fire({
      title: "Delete Address?",
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
        try {
          await axios.delete(
            `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?id=eq.${addressId}`,
            {
              headers: { apikey: supaBaseKey },
            },
          );

          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "warning",
            title: "Your Address Has Been Deleted!",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          getAddresses(userId);
        } catch (error) {
          Swal.fire("Failed To Remove Address", error);
        }
      }
    });
  };

  const handleDefaultAddress = async (clickedAddress) => {
    try {
      if (clickedAddress.is_default) {
        await axios.patch(
          `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?id=eq.${clickedAddress.id}`,
          {
            is_default: false,
          },
          {
            headers: {
              apikey: supaBaseKey,
              "Content-Type": "application/json",
            },
          },
        );
      } else {
        await axios.patch(
          `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?user_id=eq.${userId}`,
          {
            is_default: false,
          },
          {
            headers: {
              apikey: supaBaseKey,
              "Content-Type": "application/json",
            },
          },
        );

        await axios.patch(
          `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/addresses?id=eq.${clickedAddress.id}`,
          {
            is_default: true,
          },
          {
            headers: {
              apikey: supaBaseKey,
              "Content-Type": "application/json",
            },
          },
        );
      }

      getAddresses(userId);
    } catch (error) {
      Swal.fire("Failed To Make Address Default", error);
    }
  };

  return (
    <form className="saved-method-form">
      {addressList.length > 0 ? (
        addressList.map((address) => (
          <fieldset className="saved-method-container" key={address.id}>
            <section className="saved-address-info">
              {address.is_default === true && (
                <span className="default-badge">Default</span>
              )}

              <p className="saved-address">{`${address.address}, ${address.postcode}, ${address.city}, ${address.state}`}</p>
            </section>

            <section className="saved-method-actions">
              <FontAwesomeIcon icon={faEdit} color="rgb(0, 123, 255)" onClick={() => openEditAddressDialog(address)} />

              <FontAwesomeIcon
                icon={faTrashCan}
                color="red"
                onClick={() => deleteAddress(address.id)}
              />

              <FontAwesomeIcon
                icon={faStar}
                color={
                  address.is_default === true
                    ? "rgb(255, 193, 7)"
                    : "rgb(186, 193, 203)"
                }
                onClick={() => handleDefaultAddress(address)}
              />
            </section>
          </fieldset>
        ))
      ) : (
        <section className="no-card-container">
          <FontAwesomeIcon icon={faMapPin} className="no-card-icon" />
          <p className="no-card-msg">
            You do not have any saved addresses! <br />
            Click the <strong>New Address</strong> button to add an address.
          </p>
        </section>
      )}

      <footer className="saved-method-footer">
        <button
          className="btn-primary add-new-btn"
          onClick={openNewAddressDialog}
        >
          New Address
        </button>
      </footer>
    </form>
  );
}
