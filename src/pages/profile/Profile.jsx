import { NavBar } from "../../components/layout/nav/Navbar";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSettings } from "./ProfileSettings";
import { useCartQuantity } from "../../utils/cartQuantity";
import "./Profile.css";

export function Profile({setIsSignIn}) {
  const [cartQuantity, setCartQuantity] = useCartQuantity();
  
  return (
    <>
      <title>Profile | UrbanPlate</title>

      <header>
        <NavBar 
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
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
