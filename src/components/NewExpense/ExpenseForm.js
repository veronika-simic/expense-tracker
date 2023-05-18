import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  }
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleChangeHandler}
          id="title"
          placeholder="Money spent on...."
        ></input>
      </div>

      <div className="amount-date-container">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          min="0.1"
          step="0.01"
          value={amount}
          onChange={amountChangeHandler}
          id="amount"
          placeholder="Amount spent..."
        ></input>

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
        ></input>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Description (optional)"
          id="description"
        ></textarea>
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
