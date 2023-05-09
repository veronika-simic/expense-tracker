import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const expenses = [
    { id: 1, title: "Dog food", amount: "$24.56", date: new Date(2023, 2, 3) },
    { id: 2, title: "Cat food", amount: "$32.56", date: new Date(2023, 2, 3) },
    {
      id: 3,
      title: "Human food",
      amount: "$124.56",
      date: new Date(2023, 2, 3),
    },
  ];
  const [newExpenses, setNewExpenses] = useState(expenses);
  function addExpenseHandler(expense) {
    setNewExpenses((prevExpenses) => [expense, ...newExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={newExpenses}></Expenses>
    </div>
  );
}

export default App;
