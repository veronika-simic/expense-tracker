import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useNavigate } from "react-router-dom";
function Expenses(props) {
  const navigate = useNavigate();
  const navigateToNewExpense = () => {
    navigate("/newexpense");
  };
  return (
    <div className="container">
      {props.items.map((item) => (
        <ExpenseItem item={item} key={item._id} />
      ))}
      <button className="new-expense" onClick={navigateToNewExpense}>
        +
      </button>
    </div>
  );
}

export default Expenses;
