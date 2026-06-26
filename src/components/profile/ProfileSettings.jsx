import { AccountDetails } from "../../pages/profile/AccountDetails";
import { SavedCards } from "../../pages/profile/SavedCards";
import { SavedAddresses } from "../../pages/profile/SavedAddresses";
import { UpdatePassword } from "../../pages/profile/UpdatePassword";
import "./ProfileSettings.css";

export function ProfileSettings() {
  return (
    <section className="profile-settings">
      <section className="profile-settings-sec">
        <header className="profile-settings-header">
          <h2 className="profile-settings-heading" id="account-details">Account Details</h2>
          <h3 className="profile-settings-sub-heading">
            Manage your personal information
          </h3>
        </header>

        <hr />

        <AccountDetails />
      </section>

      <section className="profile-settings-sec">
        <header className="profile-settings-header">
          <h2 className="profile-settings-heading" id="saved-cards">Saved Cards</h2>
          <h3 className="profile-settings-sub-heading">
            Add,edit,or remove your saved cards
          </h3>
        </header>

        <hr />

        <SavedCards />
      </section>

      <section className="profile-settings-sec">
        <header className="profile-settings-header">
          <h2 className="profile-settings-heading" id="saved-addresses">Saved Addresses</h2>
          <h3 className="profile-settings-sub-heading">
            Add,edit,or remove your saved addresses
          </h3>
        </header>

        <hr />

        <SavedAddresses />
      </section>

      <section className="profile-settings-sec">
        <header className="profile-settings-header" id="update-password">
          <h2 className="profile-settings-heading">Update Password</h2>
          <h3 className="profile-settings-sub-heading">
            Update your account Password
          </h3>
        </header>

        <hr />

        <UpdatePassword />
      </section>
    </section>
  );
}
