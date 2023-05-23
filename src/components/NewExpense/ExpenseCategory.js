import { useState } from "react";
import "./ExpenseCategory.css";

function ExpenseCategory({ sendCategory }) {
  const [category, setCategory] = useState("");
  function handleCategoryChange(event) {
    setCategory(event.target.value);
    sendCategory(category);
  }
  return (
    <div className="category-container">
      <label>Category</label>
      <select onChange={handleCategoryChange}>
        <option>Food</option>
        <option>Cosmetics</option>
        <option>Utilities</option>
        <option>Clothes</option>
        <option>Transport</option>
        <option>Education</option>
        <option>Hobbies</option>
        <option selected>Other</option>
      </select>
    </div>
  );
}

export default ExpenseCategory;
