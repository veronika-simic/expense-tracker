import "./ExpenseForm.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function descriptionChangeHandler(event) {
    const inputValue = event.target.value.trim();

    setDescription(inputValue);

    if (inputValue === "") {
      setDescription("Sorry, no description for this one!");
    }
  }

  function displayConfirmation() {
    toast.success("Expense added");
  }

  async function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date,
      description,
    };

    const response = await fetch("/api/expenses", {
      method: "POST",
      body: JSON.stringify(expenseData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDate("");
      setAmount("");
      setDescription("");
    }
  }
  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        submitHandler(event);
        displayConfirmation();
      }}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleChangeHandler}
          id="title"
          placeholder="Money spent on...."
          required
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
          required
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
          required
        ></input>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Description (optional)"
          id="description"
          onChange={descriptionChangeHandler}
        ></textarea>
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
