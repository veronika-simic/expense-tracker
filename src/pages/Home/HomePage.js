import ExpenseSearch from "../../components/Expenses/ExpenseSearch";
import ExpensesAmount from "../../components/Expenses/ExpensesTotal";
import Expenses from "../../components/Expenses/Expenses";
import { useEffect } from "react";
import { useExpensesContext } from "../../hooks/useExpensesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import NoExpenses from "../../components/Expenses/NoExpenses";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./HomePage.css";
function HomePage() {
  const { expenses, dispatch } = useExpensesContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_EXPENSES", payload: json });
      }
    };
    if (user) {
      fetchExpenses();
    }
  }, [dispatch, user]);

  const handleExpenseDeleted = (expenseId) => {
    dispatch({ type: "DELETE_EXPENSE", payload: expenseId });
  };

  if (expenses?.length === 0) {
    return <NoExpenses />;
  }

  return (
    <>
      <div className="customization">
        <ExpenseSearch></ExpenseSearch>
        {expenses && <ExpensesAmount items={expenses} />}
      </div>
      {expenses ? (
        <Expenses items={expenses} onExpenseDeleted={handleExpenseDeleted} />
      ) : (
        <div className="container skeleton-container">
          <Skeleton width={300} height={300} />
          <Skeleton width={300} height={300} />
          <Skeleton width={300} height={300} />
          <Skeleton width={300} height={300} />
        </div>
      )}
    </>
  );
}

export default HomePage;
