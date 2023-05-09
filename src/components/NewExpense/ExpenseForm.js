import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <label>Title</label>
      <input type="text" name="title"></input>
      <label>Amount</label>
      <input type="number" name="amount" min="0.1" step="0.01"></input>
      <label>Date</label>
      <input type="date" name="date" min="2019-01-01" max="2024-01-01"></input>
      <button type="submit">Add expense</button>
    </form>
  );
}

export default ExpenseForm;
