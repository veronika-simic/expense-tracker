import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm() {
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
    console.log(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={titleChangeHandler}
      ></input>
      <label>Amount</label>
      <input
        type="number"
        name="amount"
        min="0.1"
        step="0.01"
        value={amount}
        onChange={amountChangeHandler}
      ></input>
      <label>Date</label>
      <input
        type="date"
        name="date"
        min="2019-01-01"
        max="2024-01-01"
        value={date}
        onChange={dateChangeHandler}
      ></input>
      <button type="submit">Add expense</button>
    </form>
  );
}

export default ExpenseForm;
