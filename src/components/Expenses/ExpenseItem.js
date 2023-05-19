import "./ExpenseItem.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
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

  function displayDeletedInformation() {
    toast.success("Expense deleted!", { hideProgressBar: true });
  }
  return (
    <Card>
      <h2 className="title">{props.item.title}</h2>
      <ExpenseDate date={props.item.createdAt} />
      <div className="amount">
        <h2>$ {props.item.amount}</h2>
      </div>
      <a id="delete-expense">
        <span
          title="delete expense"
          className="material-symbols-outlined"
          onClick={() => {
            displayDeletedInformation();
            handleDeleteExpense();
          }}
        >
          delete
        </span>
      </a>
      <Tooltip anchorSelect="#delete-expense" content="Delete expense" />

      <div className="description">{props.item.description}</div>
    </Card>
  );
}

export default ExpenseItem;
