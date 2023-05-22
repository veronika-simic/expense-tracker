import "./ExpenseItem.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate()
  function buttonClickHandler() {
    navigate(`/${props.item._id}`)
  }
  return (
    <Card>
      <h2 className="title">{props.item.title}</h2>
      <ExpenseDate date={props.item.createdAt} />
      <div className="amount">
        <h2>$ {props.item.amount}</h2>
      </div>
     
        <span
          className="material-symbols-outlined"
          onClick={() => {
            displayDeletedInformation();
            handleDeleteExpense();
          }}
        >
          <a id="delete-expense">delete</a> 
        </span>
       
      
      <Tooltip anchorSelect="#delete-expense" content="Delete expense" />
          <button onClick={buttonClickHandler}></button>
      <div className="description">{props.item.description}</div>
    </Card>
  );
}

export default ExpenseItem;
