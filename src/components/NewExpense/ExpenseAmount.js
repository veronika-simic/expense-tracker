import { useState } from "react";
import "./ExpenseAmount.css";
function ExpenseAmount({sendAmount}) {
  const [amount, setAmount] = useState("");
  function amountChangeHandler(event) {
    setAmount(event.target.value);
    sendAmount(amount)
  }
  return (
    <div className="amount-container">
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
  );
}

export default ExpenseAmount;
