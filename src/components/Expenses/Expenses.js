import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
function Expenses(props) {
  const navigate = useNavigate();
  const navigateToNewExpense = () => {
    navigate("/newexpense");
  };
  return (
    <div className="container">
      {props.items.map((item) => (
        <ExpenseItem
          item={item}
          key={item._id}
          onExpenseDeleted={props.onExpenseDeleted}
        />
      ))}

      <button className="new-expense" onClick={navigateToNewExpense}>
        <a id="add-expense"> + </a>
      </button>
      <Tooltip anchorSelect="#add-expense" content="Add expense" />
    </div>
  );
}

export default Expenses;
