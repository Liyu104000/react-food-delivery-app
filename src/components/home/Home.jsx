import { NavBar } from "../layout/nav/Navbar";
import { Sidebar } from "../../pages/home/Sidebar";
import { DeliveryInfo } from "./DeliveryInfo";
import { MenuItem } from "../../pages/home/MenuItem";
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
          <h1 id="home-heading">Great Food, Delivered by UrbanPlate</h1>

          <DeliveryInfo />
        </section>

        <section className="home-content-flex">
          <Sidebar />
      
          <MenuItem />
        </section>
      </main>
    </>
  );
}
