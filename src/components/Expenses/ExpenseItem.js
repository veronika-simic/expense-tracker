import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card>
      <h2 className="title">{props.item.title}</h2>
      <ExpenseDate date={props.item.date} />
      <h2 className="amount">{props.item.amount}</h2>
    </Card>
  );
}

export default ExpenseItem;
