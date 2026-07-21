import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import "./Dropdown.css";

const currentMinutesBaseline = dayjs().minute();
const initialStart = dayjs().minute(currentMinutesBaseline < 30 ? 0 : 30).second(0);
const initialTimeSlotLabel = `${initialStart.format("h:mmA")} - ${initialStart.add(30, "minute").format("h:mmA")}`;

export function Dropdown() {
 
  const calculateDeliveryDates = () => {
    const deliveryDates = [];

    for (let i = 1; i <= 5; i++) {
      const formattedDeliveryDates = dayjs().add(i, "day").format("MMM D");
      deliveryDates.push({
        id: `${i}`,
        label: formattedDeliveryDates,
      });
    }

    return deliveryDates;
  };

  const calculateDeliveryTimes = selectedDate => {
    const deliveryTimes = [];

    let timeTracker;

    const closingTime = dayjs().hour(16).minute(0).second(0);

    if(selectedDate === "Today"){
      const currentTime = dayjs();
      const openingTime = dayjs().hour(9).minute(0).second(0);

      if(currentTime.isBefore(openingTime)){
        timeTracker = openingTime;
      }else{
        const currentMinutes = currentTime.minute();
        timeTracker = dayjs().minute(currentMinutes < 30 ? 0 : 30).second(0);
      }
    }else{
      timeTracker = dayjs().hour(9).minute(0).second(0);
    }

    for (let i = 1; i <= 6; i++) {
      if(timeTracker.isAfter(closingTime) || timeTracker.isSame(closingTime)){
        break;
      }

      const startTime = timeTracker.format("h:mmA");

      if(selectedDate === "Today"){
         timeTracker = timeTracker.add(30, "minute");
      }else{
         timeTracker = timeTracker.add(1, "hour");
      }

      const endTime = timeTracker.format("h:mmA");

      deliveryTimes.push({
        id: `${i}`,
        label: `${startTime} - ${endTime}`,
      });
    }
    return deliveryTimes;
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setTempDate(deliveryDate);
    setTempTime(deliveryTime);
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setDeliveryDate(tempDate);
    setDeliveryTime(tempTime);
    setShowDialog(false);
  };

  const [showDialog, setShowDialog] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("Today");
  const [deliveryTime, setDeliveryTime] = useState(initialTimeSlotLabel);
  const [tempDate, setTempDate] = useState("Today");
  const [tempTime, setTempTime] = useState(initialTimeSlotLabel);

  const dynamicDeliveryDates = calculateDeliveryDates();
  const dynamicDeliveryTimes = calculateDeliveryTimes(tempDate);

  

  return (
    <section className="delivery-schedule-container">
      <div className="delivery-schedule-selector">
        <span>{dynamicDeliveryTimes.length > 0 ? `${deliveryDate} . ${deliveryTime}` : "UrbanPlate is closed"}</span>

        <FontAwesomeIcon
          icon={faCaretDown}
          size="xl"
          color="rgb(51, 51, 51)"
          onClick={openDialog}
        />
      </div>

      {showDialog && (
        <div className="delivery-scedule-dialog">
          <header className="delivery-schedule-header">
            <h2 className="delivery-schedule-heading">When To Deliver?</h2>

            <FontAwesomeIcon
              className="delivery-schedule-icon"
              icon={faX}
              color="rgb(51, 51, 51)"
              onClick={closeDialog}
            />
          </header>

          <section className="date-options">
            <button
              className={`btn-delivery-date ${tempDate === "Today" ? "is-selected" : ""}`}
              onClick={() => setTempDate("Today")}
            >
              Today
            </button>

            {dynamicDeliveryDates.map((date) => (
              <button
                key={date.id}
                className={`btn-delivery-date ${tempDate === date.label ? "is-selected" : ""}`}
                onClick={() => setTempDate(date.label)}
              >
                {date.label}
              </button>
            ))}
          </section>

          <header>
            <h3 className="delivery-schedule-heading">At What Time?</h3>
          </header>

          <section className="time-options">
            {dynamicDeliveryTimes.length > 0 ? (
              dynamicDeliveryTimes.map(time => (
              <button
                key={time.id}
                className={`btn-delivery-time ${tempTime === time.label ? "is-selected" : ""}`}
                onClick={() => setTempTime(time.label)}
              >{time.label}</button>
            ))
            ) : (
              <p className="closed-msg">UrbanPlate is closed for today. Order again tomorrow.</p>
            )}
            
          </section>

          <footer>
            <button className={`btn-confirm ${dynamicDeliveryTimes.length === 0 ? "btn-success-disable" : "btn-success"}`} onClick={handleConfirm}
             disabled = {dynamicDeliveryTimes.length === 0}
            >
              Confirm
            </button>
          </footer>
        </div>
      )}
    </section>
  );
}
