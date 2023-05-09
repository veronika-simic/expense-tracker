import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  function handleClick(){
    setTitle('Updated!')
  }
  return (
    <Card>
      <div>{title}</div>
      <h2>{props.amount}</h2>
      <button
        onClick={handleClick}
      >
        Change title
      </button>
      <ExpenseDate date={props.date}></ExpenseDate>
    </Card>
  );
}

export default ExpenseItem;
