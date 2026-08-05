import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdatePassword.css";

export function UpdatePassword({
  confirmMsg,
  setConfirmMsg,
  errorMsg,
  setErrorMsg,
}) {
  const [currentPassword, setCurrentPassword] = useState({
    password: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userId, setUserId] = useState(null);

  const supaBaseKey = "sb_publishable_ZIOKEvOvRLJy85giPUzWOA_IQ6HDSdg";

  useEffect(() => {
    let currentUser = sessionStorage.getItem("activeUser");

    if (currentUser) {
      currentUser = JSON.parse(currentUser);

      setUserId(currentUser.id);

      setCurrentPassword({
        password: currentUser.password,
      });
    }
  }, []);

  const saveChanges = async (e) => {
    e.preventDefault();

    try {
      if (!userId) {
        throw new Error("Password Could Not Be Updated!");
      }

      if (
        !currentPassword.password.trim() ||
        !newPassword.trim() ||
        !confirmNewPassword.trim()
      ) {
        throw new Error("All fields must be provided!");
      } else if (newPassword !== confirmNewPassword) {
        throw new Error("New Password Confirmation does not match");
      }

      const accountData = {
        password: newPassword.trim(),
      };

      const response = await axios.patch(
        `https://gnabjjxwssaypmwlyegq.supabase.co/rest/v1/users?id=eq.${userId}`,
        accountData,
        {
          headers: {
            apikey: supaBaseKey,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
        },
      );

      const accountDetailList = response.data;

      if (accountDetailList && accountDetailList.length > 0) {
        const foundAccountDetail = accountDetailList[0];

        const updatedAccountData = {
          id: userId,
          firstName: foundAccountDetail.first_name,
          lastName: foundAccountDetail.last_name,
          email: foundAccountDetail.email,
          phoneNo: foundAccountDetail.phone_no,
          password: foundAccountDetail.password,
        };

        sessionStorage.setItem("activeUser", JSON.stringify(updatedAccountData));

        setCurrentPassword({ password: newPassword.trim() });
        setConfirmMsg("Password Updated Successfully!");
        setNewPassword("");
        setConfirmNewPassword("");

        setTimeout(() => {
          setConfirmMsg("");
        }, 2000);
      }
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
      setCurrentPassword({
        password: currentUser.password,
      });
    }
    setConfirmMsg("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <form onSubmit={saveChanges} className="account-management-form" noValidate>
      <div className="account-management-group form-row-indent">
        <label htmlFor="current-pwd" className="account-management-label">
          Current Password:
        </label>
        <input
          type="text"
          className="update-password-input"
          id="current-pwd"
          value={currentPassword.password}
          readOnly
        />
      </div>

      <div className="account-management-group form-row-indent">
        <label htmlFor="new-pwd" className="account-management-label">
          New Password:
        </label>
        <input
          type="password"
          className="update-password-input"
          id="new-pwd"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="account-management-group form-row-indent">
        <label htmlFor="confirm-new-pwd" className="account-management-label">
          Confirm New Password:
        </label>
        <input
          type="password"
          className="update-password-input"
          id="confirm-new-pwd"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>

      <footer className="account-management-actions update-password-buttons">
        {confirmMsg && <p className="success-msg">{confirmMsg}</p>}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <button type="submit" className="btn-success btn-save-changes">
          Save
        </button>

        <button
          type="button"
          className="btn-outline-danger btn-discard-changes"
          onClick={discardChanges}
        >
          Discard
        </button>
      </footer>
    </form>
  );
}
