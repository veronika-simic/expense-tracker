import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./ExpenseItemDashboard.css";
function ExpenseItemDashboard() {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch(`/api/expenses/${id}`);
        if (response.ok) {
          const json = await response.json();
          setExpense(json);
        } else {
          console.log("Failed to fetch expense");
        }
      } catch (error) {
        console.error("Error while fetching expense:", error);
      }
    };

    fetchExpense();
  }, [id]);

  return (
    <div className="expense-information">
      <table>
        <tr>
          <th>Title</th>
          <td>{expense?.title}</td>
        </tr>
        <tr>
          <th>Amount</th>
          <td>{expense?.amount}</td>
        </tr>
        <tr>
          <th>Quantity</th>
          <td>{expense?.quantity}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{expense?.amount * expense?.quantity}</td>
        </tr>
        <tr>
          <th>Category</th>
          <td>{expense?.category}</td>
        </tr>
        <tr>
          <th>Created at</th>
          <td>{moment(expense?.createdAt).format("DD/MM/YYYY")}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{expense?.description}</td>
        </tr>
      </table>
      
    </div>
  );
}

export default ExpenseItemDashboard;
