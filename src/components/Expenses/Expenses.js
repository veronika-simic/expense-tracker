import ExpenseItem from "./ExpenseItem";
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
