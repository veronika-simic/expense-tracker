function ExpenseFilter() {
  function handleYearChange(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <label>Year</label>
      <select onChange={handleYearChange}>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
