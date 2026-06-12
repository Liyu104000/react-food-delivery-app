import "./UpdatePassword.css";

export function UpdatePassword() {
  return (
    <form className="account-management-form">
      <div className="account-management-group align-center">
        <label htmlFor="current-pwd" className="account-management-label">
          Current Password:
        </label>
        <input type="password" className="update-password-input" id="current-pwd" />
      </div>

      <div className="account-management-group align-center">
        <label htmlFor="new-pwd" className="account-management-label">
          New Password:
        </label>
        <input type="password" className="update-password-input" id="new-pwd" />
      </div>

      <div className="account-management-group align-center">
        <label htmlFor="confirm-new-pwd" className="account-management-label">
          Confrim New Password:
        </label>
        <input type="password" className="update-password-input" id="confirm-new-pwd" />
      </div>

      <footer className="account-management-actions" id="update-password-buttons">
        <button className="default-btn save-changes-btn" id="save-address">Save Changes</button>

        <button className="default-btn discard-changes-btn" id="discard-address">
          Discard Changes
        </button>
      </footer>
    </form>
  );
}
