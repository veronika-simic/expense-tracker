import "./ExpenseItem.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const handleDeleteExpense = (event) => {
    event.stopPropagation();
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
  const navigate = useNavigate();
  function infoClickHandler() {
    navigate(`/${props.item._id}`);
  }
  return (
    <div className="item-card" onClick={infoClickHandler}>
      <h2 className="title">{props.item.title}</h2>
      <ExpenseDate date={props.item.date} />
      <h2>$ {props.item.total}</h2>
      <div className="symbols-container">
        <span
          className="material-symbols-outlined"
          onClick={(event) => {
            displayDeletedInformation();
            handleDeleteExpense(event);
          }}
        >
          <a id="delete-expense">delete</a>
        </span>
        <Tooltip anchorSelect="#delete-expense" content="Delete expense" />
        <span className="material-symbols-outlined" onClick={infoClickHandler}>
          <a id="info-expense">Info</a>
        </span>
        <Tooltip anchorSelect="#info-expense" content="About expense" />
      </div>
    </div>
  );
}

export default ExpenseItem;
