import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {

  return (
    <Card>
      <div>{props.title}</div>
      <h2>{props.amount}</h2>
     <ExpenseDate date={props.date}></ExpenseDate>
    </Card>
  );
}

export default ExpenseItem;
