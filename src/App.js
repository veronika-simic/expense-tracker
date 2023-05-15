import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ExpensesAmount from "./components/Expenses/ExpensesAmount";
import ExpenseSearch from "./components/Expenses/ExpenseSearch";
function App() {
  const expenses = [
    { id: 1, title: "Dog food", amount: 24.56, date: new Date(2023, 2, 3) },
    { id: 2, title: "Cat food", amount: 32.56, date: new Date(2023, 2, 3) },
    {
      id: 3,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 4,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 5,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 6,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 7,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
  ];
  const [newExpenses, setNewExpenses] = useState(expenses);
  const navigate = useNavigate();
  function addExpenseHandler(expense) {
    setNewExpenses((prevExpenses) => [expense, ...newExpenses]);
  }
  function navigateToNewExpense() {
    navigate("/newexpense",);
  }

  return (
    <div>
      <div>
        <h1>
          EXPENSE <br></br> TRACKER
        </h1>
        <ExpenseSearch></ExpenseSearch>
        <ExpensesAmount items={newExpenses} />
        <Expenses items={newExpenses}></Expenses>
      </div>
      <button onClick={navigateToNewExpense}>+</button>
      <Routes>

      <Route
          path="/newexpense"
          element={<NewExpense onAddExpense={addExpenseHandler}></NewExpense>}
        />
      </Routes>
      
    </div>
  );
}

export default App;
