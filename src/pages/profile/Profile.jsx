import { NavBar } from "../../components/layout/nav/Navbar";
import { ProfileSideBar } from "./ProfileSideBar";
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
