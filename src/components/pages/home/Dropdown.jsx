import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css";

export function Dropdown() {
  return (
    <section className="delivery-schedule-container">
      <div className="delivery-schedule-flex">
        <span>Today . 2:00PM - 2:30PM</span>

        <FontAwesomeIcon icon={faCaretDown} size="xl" color="rgb(51, 51, 51)" />
      </div>

      <div className="dialog">
        <header id="delivery-schedule-header">
          <h2 className="delivery-schedule-heading">When To Deliver?</h2>

          <FontAwesomeIcon
            id="delivery-schedule-icon"
            icon={faX}
            color="rgb(51, 51, 51)"
          />
        </header>

        <section className="date-options-grid">
          <button className="delivery-date-btn is-selected">Today</button>
          <button className="delivery-date-btn">Feb 10</button>
          <button className="delivery-date-btn">Feb 11</button>
          <button className="delivery-date-btn">Feb 12</button>
          <button className="delivery-date-btn">Feb 13</button>
          <button className="delivery-date-btn">Feb 14</button>
        </section>

        <header>
          <h3 className="delivery-schedule-heading">At What Time?</h3>
        </header>

        <section className="time-options-flex">
          <button className="delivery-time-btn is-selected">2:00PM - 2:30PM</button>
          <button className="delivery-time-btn">2:30PM - 3:00PM</button>
          <button className="delivery-time-btn">3:00PM - 3:30PM</button>
          <button className="delivery-time-btn">3:30PM - 4:00PM</button>
        </section>

        <footer>
          <button className="btn-primary confirm-btn">Confirm</button>
        </footer>
      </div>
    </section>
  );
}
