import ExpenseSearch from "../../Expenses/ExpenseSearch";
import ExpensesAmount from "../../Expenses/ExpensesAmount";
import Expenses from "../../Expenses/Expenses";
import { useState, useEffect } from "react";

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

  return (
    <>
      <div className="customization">
        <ExpenseSearch></ExpenseSearch>
        {expenses && <ExpensesAmount items={expenses} />}
      </div>
      {expenses && (
        <Expenses
          items={expenses}
          onExpenseDeleted={handleExpenseDeleted}
        ></Expenses>
      )}
    </>
  );
}

export default HomePage;
