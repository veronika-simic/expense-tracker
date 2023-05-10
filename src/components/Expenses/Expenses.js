import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="container">
      {props.items.map((item) => (
        <ExpenseItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Expenses;
