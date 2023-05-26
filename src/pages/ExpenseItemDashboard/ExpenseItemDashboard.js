import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useExpensesContext } from "../../hooks/useExpensesContext";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "./ExpenseItemDashboard.css";
import ExpenseForm from "../../components/NewExpense/ExpenseForm";
function ExpenseItemDashboard() {
  const { id } = useParams();
  const { dispatch } = useExpensesContext();
  const [expense, setExpense] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [initialExpenseData, setInitialExpenseData] = useState(null);
  const navigate = useNavigate();
  const navigateToNewExpense = () => {
    navigate("/newexpense");
  };
  function backButtonHandler() {
    navigate("/");
  }
  function updateButtonHandler() {
    navigate();
  }
  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch(`/api/expenses/${id}`);
        if (response.ok) {
          const json = await response.json();
          setExpense(json);
          setInitialExpenseData(json);
        } else {
          console.log("Failed to fetch expense");
          navigate("/notfound");
        }
      } catch (error) {
        console.error("Error while fetching expense:", error);
      }
    };

    fetchExpense();
  }, [id]);

  const handleDeleteExpense = () => {
    fetch(`/api/expenses/${expense._id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          console.log("Expense deleted");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => {
        console.error("Error while deleting expense:", error);
      });
  };

  function updateButtonHandler() {
    setEditMode(true);
    navigate(`/update/${id}`);
  }

  function displayDeletedInformation() {
    toast.success("Expense deleted!", { hideProgressBar: true });
  }

  return (
    <>
      {editMode ? (
        <ExpenseForm expense={expense} />
      ) : (
        <>
          <h2>Expense information</h2>
          <div className="expense-information">
            <table>
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>{expense?.title}</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td>$ {expense?.amount}</td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>{expense?.quantity}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$ {expense?.amount * expense?.quantity}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{expense?.category}</td>
                </tr>
                <tr>
                  <th>Date of purchase</th>
                  <td>{moment(expense?.date).format("DD/MM/YYYY")}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{expense?.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="new-expense" onClick={navigateToNewExpense}>
            <a id="add-expense"> + </a>
          </button>
          <Tooltip anchorSelect="#add-expense" content="Add expense" />
          <button type="button" id="back" onClick={backButtonHandler}>
            Back
          </button>
          <button type="submit" id="update" onClick={updateButtonHandler}>
            Update
          </button>
          <button
            type="submit"
            id="delete"
            onClick={() => {
              handleDeleteExpense();
              displayDeletedInformation();
            }}
          >
            Delete
          </button>
        </>
      )}
    </>
  );
}

export default ExpenseItemDashboard;
