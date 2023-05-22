import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ExpenseItem() {
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
    <div>
      <h1>{expense.title}</h1>
      <h2></h2>
    </div>
  );
}

export default ExpenseItem;
