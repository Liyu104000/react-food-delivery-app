import { AddressSearchBar } from "./AddressSearchBar";
import { Dropdown } from "./Dropdown";

export function DeliveryInfo({
  deliveryDate,
  setDeliveryDate,
  deliveryTime,
  setDeliveryTime,
  initialTimeSlotLabel,
  isSignIn,
}) {
  return (
    <>
      <section className="delivery-info-container">
        <AddressSearchBar
          isSignIn={isSignIn}
         />

        <Dropdown
          deliveryDate={deliveryDate}
          setDeliveryDate={setDeliveryDate}
          deliveryTime={deliveryTime}
          setDeliveryTime={setDeliveryTime}
          initialTimeSlotLabel={initialTimeSlotLabel}
        />
      </section>
    </>
  );
}
