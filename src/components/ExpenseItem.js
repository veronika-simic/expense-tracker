import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <div>{props.title}</div>

      <h2>{props.amount}</h2>
      <h2>{month}</h2>
      <h2>{day}</h2>
      <h2>{year}</h2>
    </div>
  );
}

export default ExpenseItem;
