import "./ExpenseDate.css";
function ExpenseDate(props) {
  return (
    <>
      <h2 className="date">{props.date}</h2>
    </>
  );
}

export default ExpenseDate;
