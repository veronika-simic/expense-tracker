import "./ExpenseDate.css";
import moment from "moment";
function ExpenseDate(props) {
  const dateToBeFormate = props.date;
  return (
    <>
      <h2 className="date">{moment(dateToBeFormate).format("DD/MM/YYYY")}</h2>
    </>
  );
}

export default ExpenseDate;
