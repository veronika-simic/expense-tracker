import "./NoExpenses.css";
import { useNavigate } from "react-router-dom";
function NoExpenses() {
  const navigate = useNavigate();
  function buttonClickHandler() {
    navigate("/newexpense");
  }
  return (
    <div className="no-expenses">
      <h2>No expenses</h2>
      <p>Either you are very frugal (not very likely)</p>
      <p>or you are hiding something (most likely)</p>
      <p>Quick add an expense to keep your reputation</p>
      <button onClick={buttonClickHandler}>Add Expense</button>
    </div>
  );
}

export default NoExpenses;
