import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <>
      <h2 className="date">
        {day} {month} {year}
      </h2>
    </>
  );
}

export default ExpenseDate;
