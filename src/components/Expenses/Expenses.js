import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
function Expenses(props) {
  return (
    <Card>
      <ExpenseFilter></ExpenseFilter>
      {props.items.map((item) => (
        <ExpenseItem item={item} key={item.id} />
      ))}
    </Card>
  );
}

export default Expenses;
