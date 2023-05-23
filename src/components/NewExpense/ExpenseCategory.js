import { useState } from "react";
import "./ExpenseCategory.css";
import Select from "react-select";
function ExpenseCategory({ sendCategory }) {
  const [category, setCategory] = useState("");
  function handleCategoryChange(option) {
    setCategory(option);
    sendCategory(category);
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f5f5f5", // Set the desired background color
      border: "none", // Set the desired border style
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
    }),
  };
  const options = [
    { value: "Food", label: "Food" },
    { value: "Cosmetics", label: "Cosmetics" },
    { value: "Utilities", label: "Utilities" },
    { value: "Clothes", label: "Clothes" },
    { value: "Transport", label: "Transport" },
    { value: "Education", label: "Education" },
    { value: "Hobbies", label: "Hobbies" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="category-container">
      <label>Category</label>
      <Select options={options}  styles={customStyles} onChange={handleCategoryChange} placeholder="Select category"/>
    </div>
  );
}

export default ExpenseCategory;
