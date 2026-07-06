import "./UpdatePassword.css";

export function UpdatePassword() {
  return (
    <form className="account-management-form">
      <div className="account-management-group form-row-indent">
        <label htmlFor="current-pwd" className="account-management-label">
          Current Password:
        </label>
        <input type="password" className="update-password-input" id="current-pwd" />
      </div>

      <div className="account-management-group form-row-indent">
        <label htmlFor="new-pwd" className="account-management-label">
          New Password:
        </label>
        <input type="password" className="update-password-input" id="new-pwd" />
      </div>

      <div className="account-management-group form-row-indent">
        <label htmlFor="confirm-new-pwd" className="account-management-label">
          Confrim New Password:
        </label>
        <input type="password" className="update-password-input" id="confirm-new-pwd" />
      </div>

      <footer className="account-management-actions update-password-buttons">
        <button className="btn-success btn-save-changes">Save</button>

        <button className="btn-outline-danger btn-discard-changes">Discard</button>
      </footer>
    </form>
  );
}
