import { NavBar } from "./layout/nav/Navbar";
import { ProfileSideBar } from "../../pages/profile/ProfileSideBar";
import { ProfileSettings } from "./ProfileSettings";
import "./Profile.css";

export function Profile() {
  return (
    <>
      <title>Profile | UrbanPlate</title>

      <header>
        <NavBar />
      </header>

      <main>
        <aside className="profile-sidebar-container">
          <ProfileSideBar/>
        </aside>

        <section>
          <ProfileSettings/>
        </section>
      </main>
    </>
  );
}
