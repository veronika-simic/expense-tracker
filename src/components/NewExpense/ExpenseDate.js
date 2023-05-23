import { useState } from "react";
import "./ExpenseDate.css";
function ExpenseDate() {
  const [date, setDate] = useState("");
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  return (
    <div className="date-container">
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        min="2019-01-01"
        max="2024-01-01"
        value={date}
        onChange={dateChangeHandler}
        id="date"
        placeholder="Date of purchase"
        required
        onInvalid={(e) => e.target.setCustomValidity("Date is required")}
        onInput={(e) => e.target.setCustomValidity("")}
      ></input>
    </div>
  );
}

export default ExpenseDate;
