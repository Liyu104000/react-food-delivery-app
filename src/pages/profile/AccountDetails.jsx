import "./AccountDetails.css"

export function AccountDetails() {
  return (
    <form className="account-management-form">
      <div className="account-details-layout">
        <div className="account-management-group">
          <label htmlFor="first-name" className="account-management-label">First Name:</label>

          <input type="text" className="short-input" id="first-name" />
        </div>

        <div className="account-management-group">
          <label htmlFor="last-name" className="account-management-label">Last Name:</label>

          <input type="text" className="short-input" id="last-name" />
        </div>
      </div>

      <div className="account-management-group">
        <label htmlFor="email" className="account-management-label">Email:</label>

        <input type="text" className="long-input" id="email" />
      </div>

      <div className="account-details-layout">
        <div className="account-management-group">
          <label htmlFor="gender" className="account-management-label">Gender:</label>

          <select id="gender" className="gender-selec">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="account-management-group">
          <label htmlFor="phone-no" className="account-management-label">Phone No:</label>
          
          <input type="tel" className="short-input" id="phone-no" />
        </div>
      </div>

      <footer className="account-management-actions account-details-buttons">
        <button className="btn-success btn-save-changes">Save</button>

        <button className="btn-outline-danger btn-discard-changes">Discard</button>
      </footer>
    </form>
  );
}
