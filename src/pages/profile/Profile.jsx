import { NavBar } from "../../components/layout/nav/Navbar";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSettings } from "./ProfileSettings";
import "./Profile.css";

export function Profile({setIsSignIn}) {
  return (
    <>
      <title>Profile | UrbanPlate</title>

      <header>
        <NavBar />
      </header>

      <main>
        <aside className="profile-sidebar-container">
          <ProfileSideBar
           setIsSignIn={setIsSignIn}
          />
        </aside>

        <section>
          <ProfileSettings/>
        </section>
      </main>
    </>
  );
}
