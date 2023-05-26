import { useState } from "react";
import "./ExpenseDescription.css";
function ExpenseDescription({sendDescription}) {
  const [description, setDescription] = useState("");
  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
    sendDescription(description)
  }

  return (
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
  );
}

export default ExpenseDescription;
