import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const handleDeleteExpense = () => {
    fetch(`/api/expenses/${props.item._id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          console.log("Expense deleted");
          props.onExpenseDeleted(props.item._id);
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => {
        console.error("Error while deleting expense:", error);
      });
  };
  return (
    <Card>
      <h2 className="title">{props.item.title}</h2>
      <ExpenseDate date={props.item.createdAt} />
      <div className="amount">
        <h2>$ {props.item.amount}</h2>
      </div>
      <span className="material-symbols-outlined" onClick={handleDeleteExpense}>
        delete
      </span>
      <div className="description">{props.item.description}</div>
    </Card>
  );
}

export default ExpenseItem;
