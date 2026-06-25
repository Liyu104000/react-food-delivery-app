import { AddressSearchBar } from "./AddressSearchBar";
import { Dropdown } from "./Dropdown";

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