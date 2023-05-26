import { useState } from "react";
import "./ExpenseCategory.css";
import Select from "react-select";
function ExpenseCategory({ sendCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  function handleCategoryChange(selectedOption) {
    setSelectedCategory(selectedOption);
    sendCategory(selectedOption.value);
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f5f5f5",
      border: "none", 
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      fontSize: '1.25rem'
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
      <Select options={options}  styles={customStyles} onChange={handleCategoryChange} placeholder="Select category" value={selectedCategory}/>
    </div>
  );
}

export default ExpenseCategory;
