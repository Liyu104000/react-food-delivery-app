import { NavBar } from "../../components/layout/nav/Navbar";
import { Sidebar } from "./Sidebar";
import { DeliveryInfo } from "./DeliveryInfo";
import { MenuItem } from "./MenuItem";
import "./Home.css";

export function Home() {
  return (
    <>
      <title>Home | UrbanPlate</title>

      <header>
        <NavBar />
      </header>

      <main>
        <section>
          <h1 className="home-heading">Great Food, Delivered by UrbanPlate</h1>

          <DeliveryInfo />
        </section>

        <section className="home-content">
          <Sidebar />
      
          <MenuItem />
        </section>
      </main>
    </>
  );
}
