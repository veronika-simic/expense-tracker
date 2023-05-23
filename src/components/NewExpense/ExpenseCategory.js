import "./ExpenseCategory.css";

function ExpenseCategory() {
  function handleCategoryChange(event) {
    console.log(event.target.value);
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
