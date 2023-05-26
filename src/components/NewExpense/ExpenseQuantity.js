import { useState } from "react";
import "./ExpenseQuantity.css";
function ExpenseQuantity({sendQuantity}) {
  const [quantity, setQuantity] = useState("");
  function quantityChangeHandler(event) {
    const updatedQuantity = event.target.value;
    setQuantity(updatedQuantity);
    sendQuantity(updatedQuantity);
  }
  return (
    <div className="quantity-container">
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
        onInvalid={(e) => e.target.setCustomValidity("Quantity is required")}
        onInput={(e) => e.target.setCustomValidity("")}
      ></input>
    </div>
  );
}

export default ExpenseQuantity;
