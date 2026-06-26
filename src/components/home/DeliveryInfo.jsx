import { AddressSearchBar } from "../../pages/home/AddressSearchBar";
import { Dropdown } from "../../pages/home/Dropdown";

export function DeliveryInfo() {
  return (
    <>
      <section className="delivery-info-container">
        <AddressSearchBar/>

        <Dropdown/>
      </section>
    </>
    
  )
}