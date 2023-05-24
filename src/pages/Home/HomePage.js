import ExpenseSearch from "../../components/Expenses/ExpenseSearch";
import ExpensesAmount from "../../components/Expenses/ExpensesAmount";
import Expenses from "../../components/Expenses/Expenses";
import { useState, useEffect } from "react";
import NoExpenses from "../../components/Expenses/NoExpenses";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./HomePage.css"
function HomePage() {
  const [expenses, setExpenses] = useState(null);
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses");
      const json = await response.json();
      if (response.ok) {
        setExpenses(json);
      }
    };
    fetchExpenses();
  }, [expenses]);

  const handleExpenseDeleted = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense._id !== expenseId)
    );
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
