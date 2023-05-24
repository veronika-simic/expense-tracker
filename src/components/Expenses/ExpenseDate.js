import "./ExpenseDate.css";
import moment from "moment";
function ExpenseDate(props) {
  const dateToBeFormated = props.date;
  return (
    <>
      <h2 className="date">{moment(dateToBeFormated).format("DD/MM/YYYY")}</h2>
    </>
  );
}

export default ExpenseDate;
