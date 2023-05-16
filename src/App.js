import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
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
  function addExpenseHandler(expense) {
    setNewExpenses((prevExpenses) => [expense, ...newExpenses]);
  }
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/newexpense"
          element={<NewExpense onAddExpense={addExpenseHandler}></NewExpense>}
        />
      </Routes>
    </>
  );
}

export default App;

