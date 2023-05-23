import "./ExpenseForm.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseQuantity from "./ExpenseQuantity";
import ExpenseDescription from "./ExpenseDescription";
import ExpenseDate from "./ExpenseDate";

function ExpenseForm() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function displayConfirmation() {
    toast.success("Expense added");
  }

  /*  async function submitHandler(event) {
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
  } */

  function backButtonHandler() {
    navigate("/");
  }
  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        /*   submitHandler(event); */
        displayConfirmation();
      }}
    >
      <div className="title-category-container">
        <ExpenseTitle />
        <ExpenseCategory />
      </div>
      <div className="amount-quantity-date-container">
        <ExpenseAmount />
        <ExpenseQuantity />
        <ExpenseDate />
      </div>
      <div className="description-container">
        <ExpenseDescription />
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
