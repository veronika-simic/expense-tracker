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
    console.log(expenses);
  }, []);
  return (
    <>
      <div className="customization">
        <ExpenseSearch></ExpenseSearch>
        {expenses && <ExpensesAmount items={expenses} />}
      </div>

      {expenses && <Expenses items={expenses}></Expenses>}
    </>
  );
}

export default HomePage;
