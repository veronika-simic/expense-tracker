import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <>
      <h2>{year}</h2>
      <h2>{month}</h2>
      <h2>{day}</h2>
    </>
  );
}

export default ExpenseDate;
