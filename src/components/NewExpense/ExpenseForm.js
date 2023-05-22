import "./ExpenseForm.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  function titleChangeHandler(event) {
    setTitle(event.target.value.trim());
  }

  function categoryChangeHandler(event) {
    setCategory(event.target.value.trim());
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function quantityChangeHandler(event) {
    setQuantity(event.target.value.trim());
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setDescription(event.target.value.trim());
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

  function backButtonHandler() {
    navigate("/");
  }
  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        submitHandler(event);
        displayConfirmation();
      }}
    >
      <div className="title-category-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleChangeHandler}
          id="title"
          placeholder="Money spent on...."
          maxLength={15}
          required
          onInvalid={(e) => e.target.setCustomValidity("Title is required")}
          onInput={(e) => e.target.setCustomValidity("")}
        ></input>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={categoryChangeHandler}
          id="category"
          placeholder="Category...."
        ></input>
      </div>
      <div className="amount-quantity-date-container">
        <div id="amount">
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
            onInvalid={(e) => e.target.setCustomValidity("Amount is required")}
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
        </div>
        <div id="quantity">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={quantityChangeHandler}
            id="quantity"
            placeholder="Quantity"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Quantity is required")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
        </div>
        <div id="date">
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
      </div>

      <div className="description-container">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Description (optional)"
          id="description"
          onChange={descriptionChangeHandler}
          value={description}
        ></textarea>
      </div>
      <div>
        <button type="button" id="back" onClick={backButtonHandler}>
          Back
        </button>
        <button type="submit" id="add">
          Add
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
