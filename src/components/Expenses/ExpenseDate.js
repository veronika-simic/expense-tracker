import "./ExpenseDate.css";
import Card from "../UI/Card";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <Card>
      <h2 className="date">
        {day} {month} {year}
      </h2>
    </Card>
  );
}

export default ExpenseDate;
