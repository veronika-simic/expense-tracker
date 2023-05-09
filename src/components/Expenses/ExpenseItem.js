import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card>
      <div>{props.item.title}</div>
      <h2>{props.item.amount}</h2>

      <ExpenseDate date={props.item.date}></ExpenseDate>
    </Card>
  );
}

export default ExpenseItem;
