import "./ExpenseItem.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import ExpenseDate from "./ExpenseDate";
import { useExpensesContext } from "../../hooks/useExpensesContext";
function ExpenseItem(props) {
  const { dispatch } = useExpensesContext();
  const { user } = useAuthContext();
  const handleDeleteExpense = async (event) => {
    event.stopPropagation();
    if (!user) {
      return;
    }
    const response = await fetch(`/api/expenses/${props.item._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_EXPENSE", payload: json });
    }
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
