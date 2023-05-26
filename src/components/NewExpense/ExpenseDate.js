import { useState } from "react";
import "./ExpenseDate.css";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

function ExpenseDate({ sendDate }) {
  const [date, setDate] = useState();
  const [focused, setFocused] = useState();
  function dateChangeHandler(date) {
    setDate(date);
    sendDate(date);
  }
  function isOutsideRange() {
    return false;
  }
  return (
    <div className="date-container">
      <label>Date</label>
      <SingleDatePicker
        date={date}
        onDateChange={(date) => dateChangeHandler(date)}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        id="date"
        isOutsideRange={isOutsideRange}
      />
    </div>
  );
}

export default ExpenseDate;
