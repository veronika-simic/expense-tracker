import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.item.date}/>
        <h2>{props.item.title}</h2>
        <h2>{props.item.amount}</h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
