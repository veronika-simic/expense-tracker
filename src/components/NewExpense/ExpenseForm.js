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
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseQuantity, setExpenseQuantity] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (title) => {
    setExpenseTitle(title);
  };

  const handleCategoryChange = (category) => {
    setExpenseCategory(category);
  };

  const handleAmountChange = (amount) => {
    setExpenseAmount(amount);
  };

  const handleQuantityChange = (quantity) => {
    setExpenseQuantity(quantity);
  };

  const handleDateChange = (date) => {
    setExpenseDate(date);
  };

  const handleDescriptionChange = (description) => {
    setExpenseDescription(description);
  };

  function displayConfirmation() {
    toast.success("Expense added");
  }

  async function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      expenseTitle,
      expenseCategory,
      expenseAmount,
      expenseQuantity,
      expenseDate,
      expenseDescription,
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
      setExpenseTitle("");
      setExpenseCategory("");
      setExpenseQuantity("");
      setExpenseDate("");
      setExpenseAmount("");
      setExpenseDescription("");
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
        <ExpenseTitle sendTitle={handleTitleChange} />
        <ExpenseCategory sendCategory={handleCategoryChange} />
      </div>
      <div className="amount-quantity-date-container">
        <ExpenseAmount sendAmount={handleAmountChange} />
        <ExpenseQuantity sendQuantity={handleQuantityChange} />
        <ExpenseDate sendDate={handleDateChange} />
      </div>
      <div className="description-container">
        <ExpenseDescription sendDescription={handleDescriptionChange} />
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
