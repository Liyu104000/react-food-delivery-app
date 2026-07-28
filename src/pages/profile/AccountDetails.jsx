import { useState, useEffect } from "react";
import axios from "axios";
import "./AccountDetails.css";

export function AccountDetails({confirmMsg,setConfirmMsg,errorMsg,setErrorMsg}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      setUserId(currentUser.id);
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phoneNo: currentUser.phoneNo,
      });
    }
  }, []);

  const updateInput = (inputName, updatedValue) => {
    setFormData({
      ...formData,
      [inputName]: updatedValue,
    });
  };

  const saveChanges = async (e) => {
    e.preventDefault();

    try {
      if (!userId) {
        throw new Error("Account Details Could Not Be Updated!");
      }


      if(!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phoneNo.trim()){
        throw new Error("All fields must be provided!");
      }

      const response = await axios.put(
        `https://6a4b259cf5eab0bb6b6245aa.mockapi.io/users/${userId}`, formData
      );

      sessionStorage.setItem("activeUser", JSON.stringify(response.data));

      setConfirmMsg("Account Details Updated Successfully!")
      setTimeout(() => {
        setConfirmMsg("");
      }, 2000);
    } catch (error) {
      setErrorMsg(error.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }
  };

  const discardChanges = () => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phoneNo: currentUser.phoneNo,
      });
    }

    setConfirmMsg("");
  }

  return (
    <form onSubmit={saveChanges} className="account-management-form" noValidate>
      <div className="account-management-group">
        <label htmlFor="first-name" className="account-management-label">
          First Name:
        </label>

        <input
          type="text"
          className="long-input"
          id="first-name"
          value={formData.firstName}
          onChange={(e) => updateInput("firstName", e.target.value)}
          required
        />
      </div>

      <div className="account-management-group">
        <label htmlFor="last-name" className="account-management-label">
          Last Name:
        </label>

        <input
          type="text"
          className="long-input"
          id="last-name"
          value={formData.lastName}
          onChange={(e) => updateInput("lastName", e.target.value)}
          required
        />
      </div>

      <div className="account-details-layout">
        <div className="account-management-group">
          <label htmlFor="email" className="account-management-label">
            Email:
          </label>

          <input
            type="email"
            className="short-input"
            id="email"
            value={formData.email}
            onChange={(e) => updateInput("email", e.target.value)}
            required
          />
        </div>

        <div className="account-management-group">
          <label htmlFor="phone-no" className="account-management-label">
            Phone No:
          </label>

          <input
            type="tel"
            className="short-input"
            id="phone-no"
            value={formData.phoneNo}
            onChange={(e) => updateInput("phoneNo", e.target.value)}
            required
          />
        </div>
      </div>

      <footer className="account-management-actions account-details-buttons">
        {confirmMsg && <p className="success-msg">{confirmMsg}</p>}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <button type="submit" className="btn-success btn-save-changes">
          Save
        </button>

        <button type="button" className="btn-outline-danger btn-discard-changes" onClick={discardChanges}>
          Discard
        </button>
      </footer>
    </form>
  );
}
