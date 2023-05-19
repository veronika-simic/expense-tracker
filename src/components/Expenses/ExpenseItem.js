import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card>
      <h2 className="title">{props.item.title}</h2>
      <ExpenseDate date={props.item.createdAt} />
      <div className="amount">
        <h2>$ {props.item.amount}</h2>
      </div>
      <div className="description">{props.item.description}</div>
    </Card>
  );
}

export default ExpenseItem;
